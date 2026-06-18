-- Ask the Atlas production schema.
-- Target: Supabase/Postgres. Run with a privileged migration role, not from
-- the browser. Keep service-role credentials only in backend deployment secrets.
--
-- Runtime contract:
-- - ask_atlas_state is the authoritative transactional snapshot for the MVP.
-- - ask_atlas_* reporting tables are mirrored from that snapshot by the backend
--   after each Postgres transaction, so admin analytics and future SQL
--   dashboards do not depend on ad hoc JSONB inspection.

create extension if not exists pg_trgm;

create table if not exists ask_atlas_state (
  key text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists ask_atlas_users (
  github_id text primary key,
  github_login text not null,
  avatar_url text,
  profile_url text,
  role text not null default 'user'
    check (role in ('user', 'allowlisted', 'admin', 'banned')),
  -- Kept for backward-compatible schema checks; the reporting mirror writes
  -- NULL here so encrypted OAuth tokens remain only in authoritative runtime
  -- state while needed for reward checks.
  encrypted_github_token text,
  usage_consent_accepted_at timestamptz,
  usage_consent_version text,
  store_raw_question_default boolean not null default true,
  star_verified boolean not null default false,
  fork_verified boolean not null default false,
  star_bonus_awarded_at timestamptz,
  fork_bonus_awarded_at timestamptz,
  last_reward_check_at timestamptz,
  created_at timestamptz,
  updated_at timestamptz,
  last_seen_at timestamptz
);

create index if not exists ask_atlas_users_login_idx
  on ask_atlas_users (lower(github_login));
create index if not exists ask_atlas_users_role_idx
  on ask_atlas_users (role);

create table if not exists ask_atlas_usage_daily (
  github_id text not null references ask_atlas_users(github_id) on delete cascade,
  usage_date date not null,
  request_count integer not null default 0 check (request_count >= 0),
  blocked_count integer not null default 0 check (blocked_count >= 0),
  input_tokens integer not null default 0 check (input_tokens >= 0),
  output_tokens integer not null default 0 check (output_tokens >= 0),
  estimated_cost_usd numeric(12, 6) not null default 0 check (estimated_cost_usd >= 0),
  bonus_credits_used integer not null default 0 check (bonus_credits_used >= 0),
  pending_requests integer not null default 0 check (pending_requests >= 0),
  pending_input_tokens integer not null default 0 check (pending_input_tokens >= 0),
  pending_output_tokens integer not null default 0 check (pending_output_tokens >= 0),
  pending_estimated_cost_usd numeric(12, 6) not null default 0 check (pending_estimated_cost_usd >= 0),
  pending_bonus_credits integer not null default 0 check (pending_bonus_credits >= 0),
  updated_at timestamptz,
  primary key (github_id, usage_date)
);

create table if not exists ask_atlas_quota_reservations (
  reservation_id text primary key,
  github_id text not null references ask_atlas_users(github_id) on delete cascade,
  usage_date date not null,
  request_id text,
  uses_bonus boolean not null default false,
  projected_input_tokens integer not null default 0 check (projected_input_tokens >= 0),
  projected_output_tokens integer not null default 0 check (projected_output_tokens >= 0),
  projected_cost_usd numeric(12, 6) not null default 0 check (projected_cost_usd >= 0),
  created_at timestamptz
);

create index if not exists ask_atlas_quota_reservations_user_date_idx
  on ask_atlas_quota_reservations (github_id, usage_date);

create table if not exists ask_atlas_credit_ledger (
  id text primary key,
  github_id text not null references ask_atlas_users(github_id) on delete cascade,
  github_login text,
  credit_type text not null
    check (credit_type in ('star_bonus', 'fork_bonus', 'admin_grant', 'usage', 'reset', 'legacy_migration')),
  delta integer not null,
  reason text not null,
  related_repo text,
  request_id text,
  created_by_github_id text,
  created_at timestamptz
);

create unique index if not exists ask_atlas_credit_ledger_one_star_bonus
  on ask_atlas_credit_ledger (github_id)
  where credit_type = 'star_bonus';

create unique index if not exists ask_atlas_credit_ledger_one_fork_bonus
  on ask_atlas_credit_ledger (github_id)
  where credit_type = 'fork_bonus';

create table if not exists ask_atlas_chat_requests (
  request_id text primary key,
  github_id text not null references ask_atlas_users(github_id) on delete cascade,
  github_login text not null,
  mode text not null,
  model_provider text not null default '360',
  model_name text not null,
  question_text text,
  question_hash text not null,
  raw_question_stored boolean not null default true,
  answer_text text,
  answer_hash text,
  raw_answer_stored boolean not null default false,
  input_tokens integer not null default 0 check (input_tokens >= 0),
  output_tokens integer not null default 0 check (output_tokens >= 0),
  estimated_cost_usd numeric(12, 6) not null default 0 check (estimated_cost_usd >= 0),
  latency_ms integer not null default 0 check (latency_ms >= 0),
  cache_hit boolean not null default false,
  retrieval_confidence numeric(5, 4) not null default 0,
  source_ids jsonb not null default '[]'::jsonb,
  source_titles jsonb not null default '[]'::jsonb,
  source_details jsonb not null default '[]'::jsonb,
  status text not null default 'pending'
    check (status in ('pending', 'success', 'blocked', 'error', 'out_of_scope')),
  error_code text,
  ip_hash text,
  user_agent_hash text,
  created_at timestamptz,
  updated_at timestamptz
);

create index if not exists ask_atlas_chat_requests_user_time_idx
  on ask_atlas_chat_requests (github_id, created_at desc);
create index if not exists ask_atlas_chat_requests_status_idx
  on ask_atlas_chat_requests (status, created_at desc);
create index if not exists ask_atlas_chat_requests_question_hash_idx
  on ask_atlas_chat_requests (question_hash);

create table if not exists ask_atlas_feedback (
  id text primary key,
  request_id text references ask_atlas_chat_requests(request_id) on delete cascade,
  github_id text not null references ask_atlas_users(github_id) on delete cascade,
  github_login text,
  rating text not null check (rating in ('up', 'down', 'neutral')),
  reason text,
  comment text,
  created_at timestamptz
);

create index if not exists ask_atlas_feedback_request_idx
  on ask_atlas_feedback (request_id);

create table if not exists ask_atlas_admin_allowlist (
  github_id text primary key,
  github_login text,
  role text not null default 'allowlisted'
    check (role in ('allowlisted', 'admin')),
  created_by_github_id text,
  created_at timestamptz not null default now()
);

create table if not exists ask_atlas_bans (
  github_id text primary key,
  github_login text,
  reason text,
  created_by_github_id text,
  created_at timestamptz not null default now(),
  lifted_at timestamptz
);

create table if not exists ask_atlas_provider_usage (
  provider text not null,
  model_name text not null,
  usage_date date not null,
  requests integer not null default 0 check (requests >= 0),
  input_tokens integer not null default 0 check (input_tokens >= 0),
  output_tokens integer not null default 0 check (output_tokens >= 0),
  estimated_cost_usd numeric(12, 6) not null default 0 check (estimated_cost_usd >= 0),
  primary key (provider, model_name, usage_date)
);

create table if not exists ask_atlas_source_chunks (
  source_id text primary key,
  source_type text not null,
  title text not null,
  repo_path text not null,
  repo_url text not null,
  chunk_index integer not null default 0,
  content text not null,
  content_tsv tsvector generated always as (to_tsvector('english', coalesce(content, ''))) stored,
  metadata jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists ask_atlas_source_chunks_tsv_idx
  on ask_atlas_source_chunks using gin (content_tsv);
create index if not exists ask_atlas_source_chunks_title_trgm_idx
  on ask_atlas_source_chunks using gin (title gin_trgm_ops);
create index if not exists ask_atlas_source_chunks_path_idx
  on ask_atlas_source_chunks (repo_path);

create table if not exists ask_atlas_retrieval_events (
  id text primary key,
  request_id text references ask_atlas_chat_requests(request_id) on delete cascade,
  query_hash text not null,
  source_ids jsonb not null default '[]'::jsonb,
  confidence numeric(5, 4) not null default 0,
  created_at timestamptz not null default now()
);

-- Supabase RLS: browser clients should never read these tables directly.
-- The backend should use service-role credentials and enforce GitHub session
-- checks before returning any admin, question, cost, or user data.
alter table ask_atlas_state enable row level security;
alter table ask_atlas_users enable row level security;
alter table ask_atlas_usage_daily enable row level security;
alter table ask_atlas_quota_reservations enable row level security;
alter table ask_atlas_credit_ledger enable row level security;
alter table ask_atlas_chat_requests enable row level security;
alter table ask_atlas_feedback enable row level security;
alter table ask_atlas_admin_allowlist enable row level security;
alter table ask_atlas_bans enable row level security;
alter table ask_atlas_provider_usage enable row level security;
alter table ask_atlas_source_chunks enable row level security;
alter table ask_atlas_retrieval_events enable row level security;
