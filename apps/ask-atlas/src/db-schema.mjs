export const REQUIRED_TABLES = [
  "ask_atlas_state",
  "ask_atlas_users",
  "ask_atlas_usage_daily",
  "ask_atlas_quota_reservations",
  "ask_atlas_credit_ledger",
  "ask_atlas_chat_requests",
  "ask_atlas_feedback",
  "ask_atlas_admin_allowlist",
  "ask_atlas_bans",
  "ask_atlas_provider_usage",
  "ask_atlas_source_chunks",
  "ask_atlas_retrieval_events",
];

export const REQUIRED_COLUMNS = {
  ask_atlas_state: [
    "key",
    "payload",
    "updated_at",
  ],
  ask_atlas_users: [
    "github_id",
    "github_login",
    "avatar_url",
    "profile_url",
    "role",
    "encrypted_github_token",
    "usage_consent_accepted_at",
    "usage_consent_version",
    "store_raw_question_default",
    "star_verified",
    "fork_verified",
    "star_bonus_awarded_at",
    "fork_bonus_awarded_at",
    "last_reward_check_at",
    "created_at",
    "updated_at",
    "last_seen_at",
  ],
  ask_atlas_usage_daily: [
    "github_id",
    "usage_date",
    "request_count",
    "blocked_count",
    "input_tokens",
    "output_tokens",
    "estimated_cost_usd",
    "bonus_credits_used",
    "pending_requests",
    "pending_input_tokens",
    "pending_output_tokens",
    "pending_estimated_cost_usd",
    "pending_bonus_credits",
    "updated_at",
  ],
  ask_atlas_quota_reservations: [
    "reservation_id",
    "github_id",
    "usage_date",
    "request_id",
    "uses_bonus",
    "projected_input_tokens",
    "projected_output_tokens",
    "projected_cost_usd",
    "created_at",
  ],
  ask_atlas_credit_ledger: [
    "id",
    "github_id",
    "github_login",
    "credit_type",
    "delta",
    "reason",
    "related_repo",
    "request_id",
    "created_by_github_id",
    "created_at",
  ],
  ask_atlas_chat_requests: [
    "request_id",
    "github_id",
    "github_login",
    "mode",
    "model_provider",
    "model_name",
    "question_text",
    "question_hash",
    "raw_question_stored",
    "answer_text",
    "answer_hash",
    "raw_answer_stored",
    "input_tokens",
    "output_tokens",
    "estimated_cost_usd",
    "latency_ms",
    "cache_hit",
    "retrieval_confidence",
    "source_ids",
    "source_titles",
    "source_details",
    "status",
    "error_code",
    "ip_hash",
    "user_agent_hash",
    "created_at",
    "updated_at",
  ],
  ask_atlas_feedback: [
    "id",
    "request_id",
    "github_id",
    "github_login",
    "rating",
    "reason",
    "comment",
    "created_at",
  ],
  ask_atlas_admin_allowlist: [
    "github_id",
    "github_login",
    "role",
    "created_by_github_id",
    "created_at",
  ],
  ask_atlas_bans: [
    "github_id",
    "github_login",
    "reason",
    "created_by_github_id",
    "created_at",
    "lifted_at",
  ],
  ask_atlas_provider_usage: [
    "provider",
    "model_name",
    "usage_date",
    "requests",
    "input_tokens",
    "output_tokens",
    "estimated_cost_usd",
  ],
  ask_atlas_source_chunks: [
    "source_id",
    "source_type",
    "title",
    "repo_path",
    "repo_url",
    "chunk_index",
    "content",
    "content_tsv",
    "metadata",
    "updated_at",
  ],
  ask_atlas_retrieval_events: [
    "id",
    "request_id",
    "query_hash",
    "source_ids",
    "confidence",
    "created_at",
  ],
};

async function queryRows(client, sql, params = []) {
  const result = await client.query(sql, params);
  return result.rows;
}

export async function verifyDatabaseSchema(client) {
  const tableRows = await queryRows(
    client,
    `
      select tablename
      from pg_tables
      where schemaname = 'public'
        and tablename = any($1::text[])
    `,
    [REQUIRED_TABLES],
  );
  const presentTables = new Set(tableRows.map((row) => row.tablename));
  const missingTables = REQUIRED_TABLES.filter((table) => !presentTables.has(table));

  const tableNames = Object.keys(REQUIRED_COLUMNS);
  const columnRows = await queryRows(
    client,
    `
      select table_name, column_name
      from information_schema.columns
      where table_schema = 'public'
        and table_name = any($1::text[])
    `,
    [tableNames],
  );
  const columnsByTable = new Map();
  for (const row of columnRows) {
    if (!columnsByTable.has(row.table_name)) columnsByTable.set(row.table_name, new Set());
    columnsByTable.get(row.table_name).add(row.column_name);
  }
  const missingColumns = [];
  for (const [table, columns] of Object.entries(REQUIRED_COLUMNS)) {
    const actual = columnsByTable.get(table) || new Set();
    for (const column of columns) {
      if (!actual.has(column)) missingColumns.push(`${table}.${column}`);
    }
  }

  const rlsRows = await queryRows(
    client,
    `
      select relname, relrowsecurity
      from pg_class
      where relkind = 'r'
        and relnamespace = 'public'::regnamespace
        and relname = any($1::text[])
    `,
    [REQUIRED_TABLES],
  );
  const rlsOff = rlsRows.filter((row) => !row.relrowsecurity).map((row) => row.relname);

  const errors = [];
  if (missingTables.length) errors.push(`missing tables: ${missingTables.join(", ")}`);
  if (missingColumns.length) errors.push(`missing columns: ${missingColumns.join(", ")}`);
  if (rlsOff.length) errors.push(`RLS not enabled: ${rlsOff.join(", ")}`);
  if (errors.length) {
    throw new Error(`Ask Atlas database schema check failed:\n- ${errors.join("\n- ")}`);
  }

  return {
    tables: REQUIRED_TABLES.length,
    checkedColumns: Object.values(REQUIRED_COLUMNS).reduce((sum, columns) => sum + columns.length, 0),
    rlsTables: rlsRows.length,
  };
}
