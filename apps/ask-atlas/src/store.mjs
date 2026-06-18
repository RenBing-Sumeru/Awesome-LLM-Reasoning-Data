import fs from "node:fs";
import path from "node:path";
import { CONFIG, databaseSslOptions } from "./config.mjs";
import { verifyDatabaseSchema } from "./db-schema.mjs";

const STORE_KEY = "default";

const EMPTY_STORE = {
  users: {},
  sessions: {},
  usageDaily: {},
  requests: [],
  feedback: [],
  events: [],
  creditLedger: [],
  quotaReservations: {},
  rateWindows: {},
};

let jsonState = null;
let pgPool = null;
let pgReady = false;
let pgReportingReady = false;

export function cloneEmptyStore() {
  return JSON.parse(JSON.stringify(EMPTY_STORE));
}

function normalizeStore(input = {}) {
  return { ...cloneEmptyStore(), ...input };
}

function loadJsonStore() {
  if (jsonState) return jsonState;
  fs.mkdirSync(path.dirname(CONFIG.storagePath), { recursive: true });
  if (!fs.existsSync(CONFIG.storagePath)) {
    jsonState = cloneEmptyStore();
    saveJsonStore();
    return jsonState;
  }
  const parsed = JSON.parse(fs.readFileSync(CONFIG.storagePath, "utf8"));
  jsonState = normalizeStore(parsed);
  return jsonState;
}

function saveJsonStore() {
  if (!jsonState) return;
  fs.mkdirSync(path.dirname(CONFIG.storagePath), { recursive: true });
  const tmp = `${CONFIG.storagePath}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(jsonState, null, 2));
  fs.renameSync(tmp, CONFIG.storagePath);
}

async function postgresPool() {
  if (pgPool) return pgPool;
  let pg;
  try {
    pg = await import("pg");
  } catch (error) {
    const next = new Error("Postgres storage requires the optional 'pg' package. Run npm install in apps/ask-atlas before production deployment.");
    next.cause = error;
    throw next;
  }
  pgPool = new pg.Pool({
    connectionString: CONFIG.databaseUrl,
    ssl: databaseSslOptions(),
    max: 4,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 8_000,
    application_name: "ask-atlas",
  });
  return pgPool;
}

async function ensurePostgresState(client) {
  if (pgReady) return;
  await client.query(`
    create table if not exists ask_atlas_state (
      key text primary key,
      payload jsonb not null,
      updated_at timestamptz not null default now()
    )
  `);
  await client.query(
    `
      insert into ask_atlas_state (key, payload)
      values ($1, $2::jsonb)
      on conflict (key) do nothing
    `,
    [STORE_KEY, JSON.stringify(cloneEmptyStore())],
  );
  pgReady = true;
}

async function ensurePostgresReportingTables(client) {
  if (pgReportingReady) return;
  await client.query(`
    create table if not exists ask_atlas_users (
      github_id text primary key,
      github_login text not null,
      avatar_url text,
      profile_url text,
      role text not null default 'user',
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
    )
  `);
  await client.query(`
    create table if not exists ask_atlas_usage_daily (
      github_id text not null references ask_atlas_users(github_id) on delete cascade,
      usage_date date not null,
      request_count integer not null default 0,
      blocked_count integer not null default 0,
      input_tokens integer not null default 0,
      output_tokens integer not null default 0,
      estimated_cost_usd numeric(12, 6) not null default 0,
      bonus_credits_used integer not null default 0,
      pending_requests integer not null default 0,
      pending_input_tokens integer not null default 0,
      pending_output_tokens integer not null default 0,
      pending_estimated_cost_usd numeric(12, 6) not null default 0,
      pending_bonus_credits integer not null default 0,
      updated_at timestamptz,
      primary key (github_id, usage_date)
    )
  `);
  await client.query(`
    create table if not exists ask_atlas_quota_reservations (
      reservation_id text primary key,
      github_id text not null references ask_atlas_users(github_id) on delete cascade,
      usage_date date not null,
      request_id text,
      uses_bonus boolean not null default false,
      projected_input_tokens integer not null default 0,
      projected_output_tokens integer not null default 0,
      projected_cost_usd numeric(12, 6) not null default 0,
      created_at timestamptz
    )
  `);
  await client.query(`
    create table if not exists ask_atlas_credit_ledger (
      id text primary key,
      github_id text not null references ask_atlas_users(github_id) on delete cascade,
      github_login text,
      credit_type text not null,
      delta integer not null,
      reason text not null,
      related_repo text,
      request_id text,
      created_by_github_id text,
      created_at timestamptz
    )
  `);
  await client.query(`
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
      input_tokens integer not null default 0,
      output_tokens integer not null default 0,
      estimated_cost_usd numeric(12, 6) not null default 0,
      latency_ms integer not null default 0,
      cache_hit boolean not null default false,
      retrieval_confidence numeric(5, 4) not null default 0,
      source_ids jsonb not null default '[]'::jsonb,
      source_titles jsonb not null default '[]'::jsonb,
      source_details jsonb not null default '[]'::jsonb,
      status text not null default 'pending',
      error_code text,
      ip_hash text,
      user_agent_hash text,
      created_at timestamptz,
      updated_at timestamptz
    )
  `);
  await client.query(`
    create table if not exists ask_atlas_feedback (
      id text primary key,
      request_id text references ask_atlas_chat_requests(request_id) on delete cascade,
      github_id text not null references ask_atlas_users(github_id) on delete cascade,
      github_login text,
      rating text not null,
      reason text,
      comment text,
      created_at timestamptz
    )
  `);
  await client.query(`
    create table if not exists ask_atlas_provider_usage (
      provider text not null,
      model_name text not null,
      usage_date date not null,
      requests integer not null default 0,
      input_tokens integer not null default 0,
      output_tokens integer not null default 0,
      estimated_cost_usd numeric(12, 6) not null default 0,
      primary key (provider, model_name, usage_date)
    )
  `);
  await client.query("create index if not exists ask_atlas_users_login_idx on ask_atlas_users (lower(github_login))");
  await client.query("create index if not exists ask_atlas_chat_requests_user_time_idx on ask_atlas_chat_requests (github_id, created_at desc)");
  await client.query("create index if not exists ask_atlas_chat_requests_status_idx on ask_atlas_chat_requests (status, created_at desc)");
  await client.query("create index if not exists ask_atlas_feedback_request_idx on ask_atlas_feedback (request_id)");
  pgReportingReady = true;
}

function validRole(role) {
  return ["user", "allowlisted", "admin", "banned"].includes(role) ? role : "user";
}

function validCreditType(creditType) {
  return ["star_bonus", "fork_bonus", "admin_grant", "usage", "reset", "legacy_migration"].includes(creditType)
    ? creditType
    : "legacy_migration";
}

function validRequestStatus(status) {
  return ["pending", "success", "blocked", "error", "out_of_scope"].includes(status) ? status : "error";
}

function validFeedbackRating(rating) {
  return ["up", "down", "neutral"].includes(rating) ? rating : "neutral";
}

function legacyRawQuestionStored(item = {}) {
  if (Object.hasOwn(item, "rawQuestionStored")) return Boolean(item.rawQuestionStored);
  return Boolean(item.questionText);
}

function isoOrNull(value) {
  const raw = String(value || "");
  return Number.isFinite(Date.parse(raw)) ? raw : null;
}

function usageDateFromKey(key, usage = {}) {
  if (usage.date) return usage.date;
  const parts = String(key || "").split(":");
  return parts[parts.length - 1] || new Date().toISOString().slice(0, 10);
}

function dedupeOneTimeCreditRows(rows = []) {
  const seen = new Set();
  return rows.filter((row) => {
    if (!["star_bonus", "fork_bonus"].includes(row.creditType) || Number(row.delta || 0) <= 0) return true;
    const key = `${row.githubId}:${row.creditType}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function ensureReportingUser(users, userLike = {}) {
  const githubId = String(userLike.githubId || userLike.github_id || "");
  if (!githubId) return;
  const previous = users.get(githubId) || {};
  users.set(githubId, {
    githubId,
    login: userLike.login || userLike.githubLogin || previous.login || githubId,
    avatarUrl: userLike.avatarUrl || previous.avatarUrl || "",
    profileUrl: userLike.profileUrl || previous.profileUrl || "",
    role: validRole(userLike.role || previous.role || "user"),
    usageConsentAcceptedAt: userLike.usageConsentAcceptedAt || previous.usageConsentAcceptedAt || "",
    usageConsentVersion: userLike.usageConsentVersion || previous.usageConsentVersion || "",
    storeRawQuestionDefault: userLike.storeRawQuestionDefault !== false,
    starVerified: Boolean(userLike.starVerified || previous.starVerified),
    forkVerified: Boolean(userLike.forkVerified || previous.forkVerified),
    starBonusAwardedAt: userLike.starBonusAwardedAt || previous.starBonusAwardedAt || "",
    forkBonusAwardedAt: userLike.forkBonusAwardedAt || previous.forkBonusAwardedAt || "",
    lastRewardCheckAt: userLike.lastRewardCheckAt || previous.lastRewardCheckAt || "",
    createdAt: userLike.createdAt || previous.createdAt || "",
    updatedAt: userLike.updatedAt || previous.updatedAt || "",
    lastSeenAt: userLike.lastSeenAt || previous.lastSeenAt || "",
  });
}

export function reportingRowsFromSnapshot(input = {}) {
  const store = normalizeStore(input);
  const users = new Map();
  for (const user of Object.values(store.users || {})) ensureReportingUser(users, user);
  for (const usage of Object.values(store.usageDaily || {})) ensureReportingUser(users, {
    githubId: usage.githubId,
    login: usage.login,
  });
  for (const reservation of Object.values(store.quotaReservations || {})) ensureReportingUser(users, {
    githubId: reservation.githubId,
    login: reservation.githubLogin,
  });
  for (const request of store.requests || []) ensureReportingUser(users, {
    githubId: request.githubId,
    login: request.githubLogin,
  });
  for (const item of store.feedback || []) ensureReportingUser(users, {
    githubId: item.githubId,
    login: item.githubLogin,
  });
  for (const item of store.creditLedger || []) ensureReportingUser(users, {
    githubId: item.githubId,
    login: item.githubLogin,
  });

  const providerUsage = new Map();
  for (const request of store.requests || []) {
    if (request.status !== "success") continue;
    const date = String(request.createdAt || new Date().toISOString()).slice(0, 10);
    const model = request.model || "unknown";
    const key = `360:${model}:${date}`;
    const row = providerUsage.get(key) || {
      provider: "360",
      modelName: model,
      usageDate: date,
      requests: 0,
      inputTokens: 0,
      outputTokens: 0,
      estimatedCostUsd: 0,
    };
    row.requests += 1;
    row.inputTokens += Number(request.inputTokens || 0);
    row.outputTokens += Number(request.outputTokens || 0);
    row.estimatedCostUsd = Number((row.estimatedCostUsd + Number(request.estimatedCostUsd || 0)).toFixed(6));
    providerUsage.set(key, row);
  }

  return {
    users: [...users.values()],
    usageDaily: Object.entries(store.usageDaily || {}).map(([key, usage]) => ({
      githubId: usage.githubId,
      usageDate: usageDateFromKey(key, usage),
      requestCount: Number(usage.requestCount || 0),
      blockedCount: Number(usage.blockedCount || 0),
      inputTokens: Number(usage.inputTokens || 0),
      outputTokens: Number(usage.outputTokens || 0),
      estimatedCostUsd: Number(usage.estimatedCostUsd || 0),
      bonusCreditsUsed: Number(usage.bonusCreditsUsed || 0),
      pendingRequests: Number(usage.pendingRequests || 0),
      pendingInputTokens: Number(usage.pendingInputTokens || 0),
      pendingOutputTokens: Number(usage.pendingOutputTokens || 0),
      pendingEstimatedCostUsd: Number(usage.pendingEstimatedCostUsd || 0),
      pendingBonusCredits: Number(usage.pendingBonusCredits || 0),
      updatedAt: usage.updatedAt || "",
    })),
    quotaReservations: Object.values(store.quotaReservations || {}).map((item) => ({
      reservationId: item.reservationId,
      githubId: item.githubId,
      usageDate: item.date,
      requestId: item.requestId || "",
      usesBonus: Boolean(item.usesBonus),
      projectedInputTokens: Number(item.projectedInputTokens || 0),
      projectedOutputTokens: Number(item.projectedOutputTokens || 0),
      projectedCostUsd: Number(item.projectedCostUsd || 0),
      createdAt: item.createdAt || "",
    })),
    creditLedger: dedupeOneTimeCreditRows((store.creditLedger || []).map((item, index) => ({
      id: item.id || `ledger-${index}-${item.githubId || "unknown"}`,
      githubId: item.githubId,
      githubLogin: item.githubLogin || "",
      creditType: validCreditType(item.creditType),
      delta: Number(item.delta || 0),
      reason: item.reason || "",
      relatedRepo: item.relatedRepo || "",
      requestId: item.requestId || "",
      createdByGithubId: item.createdByGithubId || "",
      createdAt: item.createdAt || "",
    }))),
    requests: (store.requests || []).map((item) => ({
      requestId: item.requestId,
      githubId: item.githubId,
      githubLogin: item.githubLogin,
      mode: item.mode || "",
      modelProvider: "360",
      modelName: item.model || "",
      questionText: item.questionText || null,
      questionHash: item.questionHash || "",
      rawQuestionStored: legacyRawQuestionStored(item),
      answerText: item.answerText || null,
      answerHash: item.answerHash || "",
      rawAnswerStored: Boolean(item.rawAnswerStored),
      inputTokens: Number(item.inputTokens || 0),
      outputTokens: Number(item.outputTokens || 0),
      estimatedCostUsd: Number(item.estimatedCostUsd || 0),
      latencyMs: Number(item.latencyMs || 0),
      cacheHit: Boolean(item.cacheHit),
      retrievalConfidence: Number(item.retrievalConfidence || 0),
      sourceIds: item.sourceIds || [],
      sourceTitles: item.sourceTitles || [],
      sourceDetails: item.sourceDetails || [],
      status: validRequestStatus(item.status || "pending"),
      errorCode: item.errorCode || "",
      ipHash: item.ipHash || "",
      userAgentHash: item.userAgentHash || "",
      createdAt: item.createdAt || "",
      updatedAt: item.updatedAt || "",
    })),
    feedback: (store.feedback || []).map((item, index) => ({
      id: item.id || `feedback-${index}-${item.requestId || "unknown"}`,
      requestId: item.requestId,
      githubId: item.githubId,
      githubLogin: item.githubLogin || "",
      rating: validFeedbackRating(item.rating || "neutral"),
      reason: item.reason || "",
      comment: item.comment || "",
      createdAt: item.createdAt || "",
    })),
    providerUsage: [...providerUsage.values()],
  };
}

function cleanKeys(values = []) {
  return [...new Set(values.filter((value) => value !== undefined && value !== null && String(value)).map(String))];
}

async function deleteStaleReportingRows(client, table, keyExpression, values) {
  const keys = cleanKeys(values);
  await client.query(`delete from ${table} where not (${keyExpression} = any($1::text[]))`, [keys]);
}

async function upsertReportingRows(client, { table, conflict, columns, rows }) {
  if (!rows.length) return;
  const params = [];
  const tupleSql = rows.map((row) => {
    const values = columns.map((column) => {
      params.push(column.value(row));
      return `$${params.length}${column.cast ? `::${column.cast}` : ""}`;
    });
    return `(${values.join(",")})`;
  });
  const columnNames = columns.map((column) => column.name);
  const updateColumns = columnNames.filter((name) => !conflict.includes(name));
  const updates = updateColumns.map((name) => `${name} = excluded.${name}`).join(",\n          ");
  await client.query(
    `
      insert into ${table} (${columnNames.join(", ")})
      values ${tupleSql.join(",\n        ")}
      on conflict (${conflict.join(", ")}) do update set
          ${updates}
    `,
    params,
  );
}

async function syncPostgresReportingTables(client, snapshot) {
  await ensurePostgresReportingTables(client);
  const rows = reportingRowsFromSnapshot(snapshot);
  await upsertReportingRows(client, {
    table: "ask_atlas_users",
    conflict: ["github_id"],
    rows: rows.users,
    columns: [
      { name: "github_id", value: (row) => row.githubId },
      { name: "github_login", value: (row) => row.login },
      { name: "avatar_url", value: (row) => row.avatarUrl || null },
      { name: "profile_url", value: (row) => row.profileUrl || null },
      { name: "role", value: (row) => row.role },
      { name: "encrypted_github_token", value: () => null },
      { name: "usage_consent_accepted_at", value: (row) => isoOrNull(row.usageConsentAcceptedAt) },
      { name: "usage_consent_version", value: (row) => row.usageConsentVersion || null },
      { name: "store_raw_question_default", value: (row) => row.storeRawQuestionDefault !== false },
      { name: "star_verified", value: (row) => row.starVerified },
      { name: "fork_verified", value: (row) => row.forkVerified },
      { name: "star_bonus_awarded_at", value: (row) => isoOrNull(row.starBonusAwardedAt) },
      { name: "fork_bonus_awarded_at", value: (row) => isoOrNull(row.forkBonusAwardedAt) },
      { name: "last_reward_check_at", value: (row) => isoOrNull(row.lastRewardCheckAt) },
      { name: "created_at", value: (row) => isoOrNull(row.createdAt) },
      { name: "updated_at", value: (row) => isoOrNull(row.updatedAt) },
      { name: "last_seen_at", value: (row) => isoOrNull(row.lastSeenAt) },
    ],
  });
  await upsertReportingRows(client, {
    table: "ask_atlas_usage_daily",
    conflict: ["github_id", "usage_date"],
    rows: rows.usageDaily,
    columns: [
      { name: "github_id", value: (row) => row.githubId },
      { name: "usage_date", value: (row) => row.usageDate },
      { name: "request_count", value: (row) => row.requestCount },
      { name: "blocked_count", value: (row) => row.blockedCount },
      { name: "input_tokens", value: (row) => row.inputTokens },
      { name: "output_tokens", value: (row) => row.outputTokens },
      { name: "estimated_cost_usd", value: (row) => row.estimatedCostUsd },
      { name: "bonus_credits_used", value: (row) => row.bonusCreditsUsed },
      { name: "pending_requests", value: (row) => row.pendingRequests },
      { name: "pending_input_tokens", value: (row) => row.pendingInputTokens },
      { name: "pending_output_tokens", value: (row) => row.pendingOutputTokens },
      { name: "pending_estimated_cost_usd", value: (row) => row.pendingEstimatedCostUsd },
      { name: "pending_bonus_credits", value: (row) => row.pendingBonusCredits },
      { name: "updated_at", value: (row) => isoOrNull(row.updatedAt) },
    ],
  });
  await upsertReportingRows(client, {
    table: "ask_atlas_quota_reservations",
    conflict: ["reservation_id"],
    rows: rows.quotaReservations,
    columns: [
      { name: "reservation_id", value: (row) => row.reservationId },
      { name: "github_id", value: (row) => row.githubId },
      { name: "usage_date", value: (row) => row.usageDate },
      { name: "request_id", value: (row) => row.requestId || null },
      { name: "uses_bonus", value: (row) => row.usesBonus },
      { name: "projected_input_tokens", value: (row) => row.projectedInputTokens },
      { name: "projected_output_tokens", value: (row) => row.projectedOutputTokens },
      { name: "projected_cost_usd", value: (row) => row.projectedCostUsd },
      { name: "created_at", value: (row) => isoOrNull(row.createdAt) },
    ],
  });
  await upsertReportingRows(client, {
    table: "ask_atlas_credit_ledger",
    conflict: ["id"],
    rows: rows.creditLedger,
    columns: [
      { name: "id", value: (row) => row.id },
      { name: "github_id", value: (row) => row.githubId },
      { name: "github_login", value: (row) => row.githubLogin || null },
      { name: "credit_type", value: (row) => row.creditType },
      { name: "delta", value: (row) => row.delta },
      { name: "reason", value: (row) => row.reason },
      { name: "related_repo", value: (row) => row.relatedRepo || null },
      { name: "request_id", value: (row) => row.requestId || null },
      { name: "created_by_github_id", value: (row) => row.createdByGithubId || null },
      { name: "created_at", value: (row) => isoOrNull(row.createdAt) },
    ],
  });
  await upsertReportingRows(client, {
    table: "ask_atlas_chat_requests",
    conflict: ["request_id"],
    rows: rows.requests,
    columns: [
      { name: "request_id", value: (row) => row.requestId },
      { name: "github_id", value: (row) => row.githubId },
      { name: "github_login", value: (row) => row.githubLogin },
      { name: "mode", value: (row) => row.mode },
      { name: "model_provider", value: (row) => row.modelProvider },
      { name: "model_name", value: (row) => row.modelName },
      { name: "question_text", value: (row) => row.questionText },
      { name: "question_hash", value: (row) => row.questionHash },
      { name: "raw_question_stored", value: (row) => row.rawQuestionStored },
      { name: "answer_text", value: (row) => row.answerText },
      { name: "answer_hash", value: (row) => row.answerHash || null },
      { name: "raw_answer_stored", value: (row) => Boolean(row.rawAnswerStored) },
      { name: "input_tokens", value: (row) => row.inputTokens },
      { name: "output_tokens", value: (row) => row.outputTokens },
      { name: "estimated_cost_usd", value: (row) => row.estimatedCostUsd },
      { name: "latency_ms", value: (row) => row.latencyMs },
      { name: "cache_hit", value: (row) => row.cacheHit },
      { name: "retrieval_confidence", value: (row) => row.retrievalConfidence },
      { name: "source_ids", cast: "jsonb", value: (row) => JSON.stringify(row.sourceIds) },
      { name: "source_titles", cast: "jsonb", value: (row) => JSON.stringify(row.sourceTitles) },
      { name: "source_details", cast: "jsonb", value: (row) => JSON.stringify(row.sourceDetails) },
      { name: "status", value: (row) => row.status },
      { name: "error_code", value: (row) => row.errorCode || null },
      { name: "ip_hash", value: (row) => row.ipHash || null },
      { name: "user_agent_hash", value: (row) => row.userAgentHash || null },
      { name: "created_at", value: (row) => isoOrNull(row.createdAt) },
      { name: "updated_at", value: (row) => isoOrNull(row.updatedAt) },
    ],
  });
  await upsertReportingRows(client, {
    table: "ask_atlas_feedback",
    conflict: ["id"],
    rows: rows.feedback,
    columns: [
      { name: "id", value: (row) => row.id },
      { name: "request_id", value: (row) => row.requestId },
      { name: "github_id", value: (row) => row.githubId },
      { name: "github_login", value: (row) => row.githubLogin || null },
      { name: "rating", value: (row) => row.rating },
      { name: "reason", value: (row) => row.reason || null },
      { name: "comment", value: (row) => row.comment || null },
      { name: "created_at", value: (row) => isoOrNull(row.createdAt) },
    ],
  });
  await upsertReportingRows(client, {
    table: "ask_atlas_provider_usage",
    conflict: ["provider", "model_name", "usage_date"],
    rows: rows.providerUsage,
    columns: [
      { name: "provider", value: (row) => row.provider },
      { name: "model_name", value: (row) => row.modelName },
      { name: "usage_date", value: (row) => row.usageDate },
      { name: "requests", value: (row) => row.requests },
      { name: "input_tokens", value: (row) => row.inputTokens },
      { name: "output_tokens", value: (row) => row.outputTokens },
      { name: "estimated_cost_usd", value: (row) => row.estimatedCostUsd },
    ],
  });

  await deleteStaleReportingRows(client, "ask_atlas_feedback", "id", rows.feedback.map((item) => item.id));
  await deleteStaleReportingRows(client, "ask_atlas_chat_requests", "request_id", rows.requests.map((item) => item.requestId));
  await deleteStaleReportingRows(client, "ask_atlas_credit_ledger", "id", rows.creditLedger.map((item) => item.id));
  await deleteStaleReportingRows(client, "ask_atlas_quota_reservations", "reservation_id", rows.quotaReservations.map((item) => item.reservationId));
  await deleteStaleReportingRows(client, "ask_atlas_usage_daily", "github_id || ':' || usage_date::text", rows.usageDaily.map((item) => `${item.githubId}:${item.usageDate}`));
  await deleteStaleReportingRows(client, "ask_atlas_provider_usage", "provider || ':' || model_name || ':' || usage_date::text", rows.providerUsage.map((item) => `${item.provider}:${item.modelName}:${item.usageDate}`));
  await deleteStaleReportingRows(client, "ask_atlas_users", "github_id", rows.users.map((item) => item.githubId));
}

function recordReportingMirrorFailure(snapshot, error) {
  snapshot.events ||= [];
  snapshot.events.push({
    type: "postgres_reporting_mirror_failed",
    message: String(error?.message || "unknown reporting mirror error").slice(0, 300),
    code: error?.code || "",
    createdAt: new Date().toISOString(),
  });
  snapshot.events = snapshot.events.slice(-500);
}

async function readPostgresSnapshot(client, { lock = false } = {}) {
  await ensurePostgresState(client);
  const result = await client.query(
    `select payload from ask_atlas_state where key = $1${lock ? " for update" : ""}`,
    [STORE_KEY],
  );
  return normalizeStore(result.rows[0]?.payload || {});
}

async function withPostgresTransaction(fn) {
  const pool = await postgresPool();
  const client = await pool.connect();
  try {
    await client.query("begin");
    const snapshot = await readPostgresSnapshot(client, { lock: true });
    const result = await fn(snapshot);
    await client.query(
      "update ask_atlas_state set payload = $2::jsonb, updated_at = now() where key = $1",
      [STORE_KEY, JSON.stringify(snapshot)],
    );
    await client.query("savepoint ask_atlas_reporting_mirror");
    try {
      await syncPostgresReportingTables(client, snapshot);
      await client.query("release savepoint ask_atlas_reporting_mirror");
    } catch (mirrorError) {
      await client.query("rollback to savepoint ask_atlas_reporting_mirror").catch(() => {});
      recordReportingMirrorFailure(snapshot, mirrorError);
      await client.query(
        "update ask_atlas_state set payload = $2::jsonb, updated_at = now() where key = $1",
        [STORE_KEY, JSON.stringify(snapshot)],
      );
    }
    await client.query("commit");
    return result;
  } catch (error) {
    await client.query("rollback").catch(() => {});
    throw error;
  } finally {
    client.release();
  }
}

export async function loadStore() {
  if (CONFIG.storeBackend === "postgres") {
    const pool = await postgresPool();
    const client = await pool.connect();
    try {
      return await readPostgresSnapshot(client);
    } finally {
      client.release();
    }
  }
  return loadJsonStore();
}

export async function mutateStore(fn) {
  if (CONFIG.storeBackend === "postgres") {
    return withPostgresTransaction(fn);
  }
  const data = loadJsonStore();
  const result = await fn(data);
  saveJsonStore();
  return result;
}

export async function readStore(fn) {
  const data = await loadStore();
  return fn(data);
}

export async function checkStoreHealth() {
  if (CONFIG.storeBackend !== "postgres") {
    return {
      ok: true,
      backend: CONFIG.storeBackend,
    };
  }
  const pool = await postgresPool();
  const client = await pool.connect();
  try {
    const schema = await verifyDatabaseSchema(client);
    await client.query("select 1 from ask_atlas_state limit 1");
    return {
      ok: true,
      backend: "postgres",
      ...schema,
    };
  } finally {
    client.release();
  }
}

export function resetStoreForTests(nextState = cloneEmptyStore()) {
  jsonState = nextState;
  pgReady = false;
  pgReportingReady = false;
  return jsonState;
}

export async function closeStore() {
  if (pgPool) {
    await pgPool.end();
    pgPool = null;
  }
}
