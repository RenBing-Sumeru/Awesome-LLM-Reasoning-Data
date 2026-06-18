import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MAX_PRIMER_TEXT_BYTES_DEFAULT = 5 * 1024 * 1024;

export const APP_ROOT = path.resolve(__dirname, "..");
export const REPO_ROOT = path.resolve(APP_ROOT, "../..");

function env(name, fallback = "") {
  const value = process.env[name];
  return value === undefined || value === "" ? fallback : value;
}

function intEnv(name, fallback) {
  const value = Number.parseInt(env(name, String(fallback)), 10);
  return Number.isFinite(value) ? value : fallback;
}

function floatEnv(name, fallback) {
  const value = Number.parseFloat(env(name, String(fallback)));
  return Number.isFinite(value) ? value : fallback;
}

function listEnv(name, fallback = "") {
  return env(name, fallback)
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function pathEnv(name, fallback = "") {
  const value = env(name, fallback);
  if (!value) return "";
  return path.isAbsolute(value) ? value : path.resolve(APP_ROOT, value);
}

function parseRates() {
  try {
    return JSON.parse(env("ASK_ATLAS_MODEL_RATES_JSON", "{}"));
  } catch (_error) {
    return {};
  }
}

function parseHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed : null;
  } catch (_error) {
    return null;
  }
}

function localHostname(hostname) {
  return ["localhost", "127.0.0.1", "::1", "[::1]"].includes(String(hostname || "").toLowerCase());
}

function invalidNumericIds(values) {
  return [...values].filter((value) => !/^\d+$/.test(String(value || "")));
}

function positiveNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0;
}

export const CONFIG = Object.freeze({
  appEnv: env("ASK_ATLAS_ENV", "dev").replace(/[^a-zA-Z0-9_-]/g, "-"),
  deploymentCommit: env("ASK_ATLAS_DEPLOYMENT_COMMIT", env("VERCEL_GIT_COMMIT_SHA", env("GITHUB_SHA"))).replace(/[^a-fA-F0-9]/g, ""),
  port: intEnv("ASK_ATLAS_PORT", 8787),
  baseUrl: env("ASK_ATLAS_BASE_URL", "http://localhost:8787").replace(/\/$/, ""),
  pagesBaseUrl: env("ASK_ATLAS_PAGES_BASE_URL", "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data").replace(/\/$/, ""),
  allowedOrigins: listEnv("ASK_ATLAS_ALLOWED_ORIGINS"),
  repoOwner: env("ASK_ATLAS_REPO_OWNER", "RenBing-Sumeru"),
  repoName: env("ASK_ATLAS_REPO_NAME", "Awesome-LLM-Reasoning-Data"),
  sessionSecret: env("ASK_ATLAS_SESSION_SECRET", "dev-only-change-me"),
  tokenEncryptionSecret: env("ASK_ATLAS_TOKEN_ENCRYPTION_SECRET", env("ASK_ATLAS_SESSION_SECRET", "dev-only-change-me")),
  githubClientId: env("GITHUB_CLIENT_ID"),
  githubClientSecret: env("GITHUB_CLIENT_SECRET"),
  githubTokenRetentionDays: intEnv("ASK_ATLAS_GITHUB_TOKEN_RETENTION_DAYS", 30),
  storeBackend: env("ASK_ATLAS_STORE_BACKEND", env("DATABASE_URL") ? "postgres" : "json").toLowerCase(),
  databaseUrl: env("DATABASE_URL"),
  databaseSsl: env("ASK_ATLAS_DATABASE_SSL", "auto").toLowerCase(),
  allowJsonStore: env("ASK_ATLAS_ALLOW_JSON_STORE", "0") === "1",
  upstashRedisRestUrl: env("UPSTASH_REDIS_REST_URL").replace(/\/$/, ""),
  upstashRedisRestToken: env("UPSTASH_REDIS_REST_TOKEN"),
  allowLocalRateLimit: env("ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT", "0") === "1",
  trustProxy: env("ASK_ATLAS_TRUST_PROXY", "0") === "1",
  apiBase: env("QIHOO_API_BASE", "https://api.360.cn/v1").replace(/\/$/, ""),
  apiKey: env("QIHOO_API_KEY"),
  defaultModel: env("ASK_ATLAS_DEFAULT_MODEL", "deepseek/deepseek-v4-pro"),
  allowedModels: listEnv("ASK_ATLAS_ALLOWED_MODELS", "deepseek/deepseek-v4-pro,z-ai/glm-5.2"),
  adminLogins: new Set(listEnv("ASK_ATLAS_ADMIN_LOGINS", "RenBing-Sumeru").map((v) => v.toLowerCase())),
  adminGithubIds: new Set(listEnv("ASK_ATLAS_ADMIN_GITHUB_IDS")),
  allowlistLogins: new Set(listEnv("ASK_ATLAS_ALLOWLIST_LOGINS").map((v) => v.toLowerCase())),
  allowlistGithubIds: new Set(listEnv("ASK_ATLAS_ALLOWLIST_GITHUB_IDS")),
  baseDailyRequests: intEnv("ASK_ATLAS_BASE_DAILY_REQUESTS", 2),
  starDailyRequests: intEnv("ASK_ATLAS_STAR_DAILY_REQUESTS", 10),
  starBonusCredits: intEnv("ASK_ATLAS_STAR_BONUS_CREDITS", 10),
  forkBonusCredits: intEnv("ASK_ATLAS_FORK_BONUS_CREDITS", 20),
  adminDailyRequests: intEnv("ASK_ATLAS_ADMIN_DAILY_REQUESTS", 1000),
  maxInputChars: intEnv("ASK_ATLAS_MAX_INPUT_CHARS", 4000),
  maxOutputTokens: intEnv("ASK_ATLAS_MAX_OUTPUT_TOKENS", 1200),
  minRetrievalConfidence: floatEnv("ASK_ATLAS_MIN_RETRIEVAL_CONFIDENCE", 0.18),
  userDailyTokenCap: intEnv("ASK_ATLAS_USER_DAILY_TOKEN_CAP", 150000),
  userDailyCostCap: floatEnv("ASK_ATLAS_USER_DAILY_COST_CAP_USD", 0.5),
  maxSingleRequestCostUsd: floatEnv("ASK_ATLAS_MAX_SINGLE_REQUEST_COST_USD", 0.08),
  globalDailyCostCap: floatEnv("ASK_ATLAS_GLOBAL_DAILY_COST_CAP_USD", 20),
  quotaReservationTtlMs: intEnv("ASK_ATLAS_QUOTA_RESERVATION_TTL_MS", 5 * 60 * 1000),
  perUserMinuteLimit: intEnv("ASK_ATLAS_PER_USER_MINUTE_LIMIT", 2),
  perIpHourLimit: intEnv("ASK_ATLAS_PER_IP_HOUR_LIMIT", 20),
  attemptPerUserMinuteLimit: intEnv("ASK_ATLAS_ATTEMPT_PER_USER_MINUTE_LIMIT", 6),
  attemptPerIpHourLimit: intEnv("ASK_ATLAS_ATTEMPT_PER_IP_HOUR_LIMIT", 60),
  rewardRefreshHourlyLimit: intEnv("ASK_ATLAS_REWARD_REFRESH_HOURLY_LIMIT", 6),
  globalMinuteLimit: intEnv("ASK_ATLAS_GLOBAL_MINUTE_LIMIT", 60),
  githubForkScanPages: intEnv("ASK_ATLAS_GITHUB_FORK_SCAN_PAGES", 10),
  modelRates: parseRates(),
  requireModelRates: env("ASK_ATLAS_REQUIRE_MODEL_RATES", "1") === "1",
  primerTextPath: pathEnv("ASK_ATLAS_PRIMER_TEXT_PATH"),
  safeRagRoot: pathEnv("ASK_ATLAS_SAFE_RAG_ROOT", path.join(APP_ROOT, "private", "primer")),
  maxPrimerTextBytes: intEnv("ASK_ATLAS_MAX_PRIMER_TEXT_BYTES", MAX_PRIMER_TEXT_BYTES_DEFAULT),
  storagePath: env("ASK_ATLAS_STORAGE_PATH", path.join(APP_ROOT, "storage", "store.json")),
  devAuth: env("ASK_ATLAS_DEV_AUTH", "0") === "1",
  mockProvider: env("ASK_ATLAS_MOCK_PROVIDER", "0") === "1",
});

const ALLOWED_PRIMER_EXTENSIONS = new Set([".txt", ".md"]);
const BLOCKED_PRIMER_BASENAMES = new Set([".env", ".env.local", ".env.production", "secrets.txt", "secrets.md"]);
const BLOCKED_PRIMER_EXTENSIONS = new Set([".env", ".json", ".jsonl", ".yaml", ".yml", ".pem", ".key", ".crt", ".log", ".sqlite", ".db"]);

function insideDirectory(filePath, rootPath) {
  const relative = path.relative(rootPath, filePath);
  return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

export function primerTextPathErrors({
  primerTextPath = CONFIG.primerTextPath,
  safeRagRoot = CONFIG.safeRagRoot,
  maxPrimerTextBytes = CONFIG.maxPrimerTextBytes,
} = {}) {
  if (!primerTextPath) return [];
  const errors = [];
  const resolved = path.resolve(primerTextPath);
  const safeRoot = path.resolve(safeRagRoot);
  const basename = path.basename(resolved).toLowerCase();
  const extension = path.extname(resolved).toLowerCase();
  if (!insideDirectory(resolved, safeRoot)) {
    errors.push("ASK_ATLAS_PRIMER_TEXT_PATH must be inside ASK_ATLAS_SAFE_RAG_ROOT.");
  }
  if (!ALLOWED_PRIMER_EXTENSIONS.has(extension) || BLOCKED_PRIMER_EXTENSIONS.has(extension) || BLOCKED_PRIMER_BASENAMES.has(basename)) {
    errors.push("ASK_ATLAS_PRIMER_TEXT_PATH must point to a .txt or .md companion-paper extraction, not a config, secret, log, database, or structured data file.");
  }
  try {
    const stat = fs.statSync(resolved);
    if (!stat.isFile()) errors.push("ASK_ATLAS_PRIMER_TEXT_PATH must point to a regular file.");
    if (stat.size > maxPrimerTextBytes) errors.push("ASK_ATLAS_PRIMER_TEXT_PATH exceeds ASK_ATLAS_MAX_PRIMER_TEXT_BYTES.");
  } catch (_error) {
    errors.push("ASK_ATLAS_PRIMER_TEXT_PATH must point to an existing file.");
  }
  return errors;
}

export function safePrimerTextPath() {
  if (!CONFIG.primerTextPath) return "";
  const errors = primerTextPathErrors();
  if (errors.length) {
    throw new Error(`Unsafe companion-paper text path:\n- ${errors.join("\n- ")}`);
  }
  return path.resolve(CONFIG.primerTextPath);
}

export function validateRuntimeConfig() {
  const deploymentLike = Boolean(process.env.VERCEL) || CONFIG.appEnv === "prod" || CONFIG.appEnv === "production";
  const baseUrl = parseHttpUrl(CONFIG.baseUrl);
  const pagesBaseUrl = parseHttpUrl(CONFIG.pagesBaseUrl);
  const localEnv = ["dev", "development", "test", "local"].includes(CONFIG.appEnv);
  const explicitPublicBaseUrl = Boolean(process.env.ASK_ATLAS_BASE_URL) && Boolean(baseUrl) && !localHostname(baseUrl.hostname);
  const publicCapable = deploymentLike || explicitPublicBaseUrl || !localEnv;
  const productionLike = publicCapable || (!CONFIG.devAuth && !CONFIG.mockProvider);
  if (!productionLike) return;
  const errors = [];
  const weak = (value) => !value || value === "dev-only-change-me" || value.length < 32;
  if (publicCapable && CONFIG.devAuth) errors.push("ASK_ATLAS_DEV_AUTH must never be enabled in public-capable deployments.");
  if (publicCapable && CONFIG.mockProvider) errors.push("ASK_ATLAS_MOCK_PROVIDER must never be enabled in public-capable deployments.");
  if (CONFIG.allowlistLogins.size) errors.push("ASK_ATLAS_ALLOWLIST_LOGINS is not allowed in production-like deployments. Use stable numeric ASK_ATLAS_ALLOWLIST_GITHUB_IDS instead.");
  if (weak(CONFIG.sessionSecret)) errors.push("ASK_ATLAS_SESSION_SECRET must be set to a random value with at least 32 characters.");
  if (weak(CONFIG.tokenEncryptionSecret)) errors.push("ASK_ATLAS_TOKEN_ENCRYPTION_SECRET must be set to a random value with at least 32 characters.");
  if (!CONFIG.apiKey) errors.push("QIHOO_API_KEY must be set as a backend secret.");
  if (!CONFIG.githubClientId || !CONFIG.githubClientSecret) errors.push("GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET must be configured.");
  if (!CONFIG.baseUrl || !baseUrl) errors.push("ASK_ATLAS_BASE_URL must be configured as an HTTP(S) URL.");
  if (!process.env.ASK_ATLAS_BASE_URL) errors.push("ASK_ATLAS_BASE_URL must be explicitly configured for any non-dev public-capable deployment.");
  if (baseUrl?.protocol !== "https:") errors.push("ASK_ATLAS_BASE_URL must use HTTPS for any non-dev public-capable deployment.");
  if (baseUrl && localHostname(baseUrl.hostname)) errors.push("ASK_ATLAS_BASE_URL must not point to localhost in any non-dev public-capable deployment.");
  if (!CONFIG.pagesBaseUrl || !pagesBaseUrl) errors.push("ASK_ATLAS_PAGES_BASE_URL must be configured as an HTTP(S) URL.");
  if (pagesBaseUrl?.protocol !== "https:") errors.push("ASK_ATLAS_PAGES_BASE_URL must use HTTPS for any non-dev public-capable deployment.");
  if (pagesBaseUrl && localHostname(pagesBaseUrl.hostname)) errors.push("ASK_ATLAS_PAGES_BASE_URL must not point to localhost in any non-dev public-capable deployment.");
  if (!CONFIG.adminGithubIds.size) errors.push("ASK_ATLAS_ADMIN_GITHUB_IDS must include the owner GitHub numeric id for production admin mutations.");
  const invalidAdminIds = invalidNumericIds(CONFIG.adminGithubIds);
  if (invalidAdminIds.length) errors.push(`ASK_ATLAS_ADMIN_GITHUB_IDS must contain only numeric GitHub ids: ${invalidAdminIds.join(", ")}`);
  const invalidAllowlistIds = invalidNumericIds(CONFIG.allowlistGithubIds);
  if (invalidAllowlistIds.length) errors.push(`ASK_ATLAS_ALLOWLIST_GITHUB_IDS must contain only numeric GitHub ids: ${invalidAllowlistIds.join(", ")}`);
  if (!["json", "postgres"].includes(CONFIG.storeBackend)) {
    errors.push("ASK_ATLAS_STORE_BACKEND must be either 'postgres' or 'json'.");
  }
  if (deploymentLike && CONFIG.storeBackend !== "postgres") {
    errors.push("ASK_ATLAS_STORE_BACKEND=postgres is required for Vercel or ASK_ATLAS_ENV=prod deployments.");
  } else if (CONFIG.storeBackend !== "postgres" && !CONFIG.allowJsonStore) {
    errors.push("ASK_ATLAS_STORE_BACKEND=postgres is required for public-capable deployments. Set ASK_ATLAS_ALLOW_JSON_STORE=1 only for a private single-instance non-prod deployment.");
  }
  if (CONFIG.storeBackend === "postgres" && !CONFIG.databaseUrl) {
    errors.push("DATABASE_URL must be configured when ASK_ATLAS_STORE_BACKEND=postgres.");
  }
  if ((!CONFIG.upstashRedisRestUrl || !CONFIG.upstashRedisRestToken) && !CONFIG.allowLocalRateLimit) {
    errors.push("UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN must be configured for production rate limiting, or set ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT=1 for a single-instance private deployment.");
  }
  if (CONFIG.requireModelRates) {
    for (const model of CONFIG.allowedModels) {
      const rates = CONFIG.modelRates[model];
      if (!rates || !positiveNumber(rates.input_per_million) || !positiveNumber(rates.output_per_million)) {
        errors.push(`ASK_ATLAS_MODEL_RATES_JSON is missing positive numeric input/output pricing for ${model}.`);
      }
    }
  }
  errors.push(...primerTextPathErrors());
  if (errors.length) {
    throw new Error(`Ask the Atlas is not safely configured for production:\n- ${errors.join("\n- ")}`);
  }
}

export function repoFullName() {
  return `${CONFIG.repoOwner}/${CONFIG.repoName}`;
}

export function databaseSslOptions(databaseUrl = CONFIG.databaseUrl, databaseSsl = CONFIG.databaseSsl) {
  if (databaseSsl === "disable") return false;
  if (databaseSsl === "require") return { rejectUnauthorized: false };
  let hostname = "";
  try {
    hostname = new URL(databaseUrl).hostname;
  } catch (_error) {
    return databaseUrl ? { rejectUnauthorized: false } : false;
  }
  return localHostname(hostname) ? false : { rejectUnauthorized: false };
}

export function repoUrl(pathname = "") {
  const clean = String(pathname || "").replace(/^\/+/, "");
  return clean
    ? `https://github.com/${repoFullName()}/blob/main/${clean}`
    : `https://github.com/${repoFullName()}`;
}

export function pagesUrl(pathname = "") {
  const clean = String(pathname || "").replace(/^docs\//, "").replace(/^\/+/, "");
  return clean
    ? `${CONFIG.pagesBaseUrl}/${clean}`
    : CONFIG.pagesBaseUrl;
}

export function isPrivilegedLogin(login) {
  const normalized = String(login || "").toLowerCase();
  return CONFIG.adminLogins.has(normalized) || CONFIG.allowlistLogins.has(normalized);
}

export function isAdminUser(user) {
  const login = String(user?.login || "").toLowerCase();
  const id = String(user?.githubId || user?.id || "");
  if (CONFIG.adminGithubIds.has(id)) return true;
  if (CONFIG.adminGithubIds.size) return (CONFIG.devAuth || CONFIG.mockProvider) && user?.role === "admin";
  return user?.role === "admin" || CONFIG.adminLogins.has(login);
}

export function isOwnerAdminUser(user) {
  const login = String(user?.login || "").toLowerCase();
  const id = String(user?.githubId || user?.id || "");
  if (CONFIG.adminGithubIds.has(id)) return true;
  if ((CONFIG.devAuth || CONFIG.mockProvider) && user?.role === "admin") return true;
  return !CONFIG.adminGithubIds.size && CONFIG.adminLogins.has(login);
}

export function isAllowlistedUser(user) {
  const login = String(user?.login || "").toLowerCase();
  const id = String(user?.githubId || user?.id || "");
  return user?.role === "allowlisted" || isAdminUser(user) || CONFIG.allowlistLogins.has(login) || CONFIG.allowlistGithubIds.has(id);
}
