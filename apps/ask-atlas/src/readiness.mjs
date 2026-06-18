import fs from "node:fs";
import path from "node:path";
import { CONFIG, REPO_ROOT, pagesUrl } from "./config.mjs";

const EXPECTED_PAGES_BASE_URL = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data";
const REQUIRED_MODELS = ["deepseek/deepseek-v4-pro", "z-ai/glm-5.2"];
const FRONTEND_SECRET_PATTERN = /QIHOO_API_KEY|GITHUB_CLIENT_SECRET|ASK_ATLAS_SESSION_SECRET|ASK_ATLAS_TOKEN_ENCRYPTION_SECRET|UPSTASH_REDIS_REST_TOKEN|DATABASE_URL|Authorization\s*:\s*Bearer|Bearer\s+[A-Za-z0-9_.-]{12,}|fk[0-9A-Za-z_.-]{12,}|[?&][^=\s]*(?:api[_-]?key|access[_-]?token|auth[_-]?token|client[_-]?secret|secret|password|bearer)[^=\s]*=/i;
const UNSAFE_PUBLIC_URL_PARAM = /(?:api[_-]?key|access[_-]?token|auth[_-]?token|client[_-]?secret|secret|password|bearer|credential)/i;
const PUBLIC_CONFIG_ASSIGNMENT_PATTERN = /^window\.(ASK_ATLAS_FRONTEND|ASK_ATLAS_BACKEND_URL)\s*=\s*"([^"\\\r\n]*)"\s*;$/;
const UNSAFE_PUBLIC_URL_CHAR_PATTERN = /[\s"'\\\u0000-\u001f\u007f]/;

function nowIso() {
  return new Date().toISOString();
}

function safeUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (UNSAFE_PUBLIC_URL_CHAR_PATTERN.test(raw)) return "";
  try {
    const parsed = new URL(raw);
    if (!["http:", "https:"].includes(parsed.protocol)) return "";
    if (parsed.username || parsed.password || parsed.search || parsed.hash) return "";
    return parsed.href.replace(/\/$/, "");
  } catch (_error) {
    return "";
  }
}

function isLocalUrl(value) {
  try {
    const hostname = new URL(value).hostname.toLowerCase();
    return ["localhost", "127.0.0.1", "::1", "[::1]"].includes(hostname);
  } catch (_error) {
    return false;
  }
}

function isHttpsUrl(value) {
  try {
    return new URL(value).protocol === "https:";
  } catch (_error) {
    return false;
  }
}

function repoFile(relativePath) {
  return path.join(REPO_ROOT, relativePath);
}

function fileExists(relativePath) {
  try {
    return fs.existsSync(repoFile(relativePath));
  } catch (_error) {
    return false;
  }
}

function readFile(relativePath) {
  try {
    return fs.readFileSync(repoFile(relativePath), "utf8");
  } catch (_error) {
    return "";
  }
}

function parsePagesAskConfig(text) {
  const parsed = { frontend: "", backendUrl: "", issues: [] };
  const seen = new Set();
  for (const rawLine of String(text || "").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    const match = line.match(PUBLIC_CONFIG_ASSIGNMENT_PATTERN);
    if (!match) {
      parsed.issues.push(
        /^window\.ASK_ATLAS_(?:FRONTEND|BACKEND_URL)\s*=/.test(line)
          ? "invalid public config assignment"
          : "unexpected executable content",
      );
      continue;
    }
    const [, name, value] = match;
    if (seen.has(name)) parsed.issues.push(`duplicate ${name}`);
    seen.add(name);
    if (UNSAFE_PUBLIC_URL_CHAR_PATTERN.test(value)) {
      parsed.issues.push(`${name} contains unsafe characters`);
    }
    if (name === "ASK_ATLAS_FRONTEND") parsed.frontend = value;
    if (name === "ASK_ATLAS_BACKEND_URL") parsed.backendUrl = value.replace(/\/$/, "");
  }
  return parsed;
}

export function publicFrontendConfigIssues(text) {
  const issues = [];
  if (!text) return issues;
  if (FRONTEND_SECRET_PATTERN.test(text)) {
    issues.push("secret-like names or token-like values");
  }
  const parsedConfig = parsePagesAskConfig(text);
  issues.push(...parsedConfig.issues);
  const { backendUrl } = parsedConfig;
  if (!backendUrl) return issues;
  try {
    const parsed = new URL(backendUrl);
    if (parsed.username || parsed.password) {
      issues.push("URL credentials");
    }
    if (parsed.search) {
      issues.push("query string on backend URL");
    }
    if (parsed.hash) {
      issues.push("fragment on backend URL");
    }
    for (const key of parsed.searchParams.keys()) {
      if (UNSAFE_PUBLIC_URL_PARAM.test(key)) {
        issues.push("secret-like query parameter");
      }
    }
  } catch (_error) {
    // The dedicated backend URL check handles malformed URLs.
  }
  return [...new Set(issues)];
}

function weakSecret(value) {
  return !value || value === "dev-only-change-me" || String(value).length < 32;
}

function numericSet(values) {
  return [...values].every((value) => /^\d+$/.test(String(value || "")));
}

function ratesReady(model) {
  const rates = CONFIG.modelRates[model] || {};
  return Number(rates.input_per_million || 0) > 0 && Number(rates.output_per_million || 0) > 0;
}

function check(group, id, label, status, detail, action = "") {
  return { group, id, label, status, detail, action };
}

function statusFrom(ok, detail, action, block = true) {
  if (ok) return ["pass", detail, ""];
  return [block ? "block" : "warn", detail, action];
}

function summarize(checks) {
  const counts = { pass: 0, warn: 0, block: 0 };
  for (const item of checks) counts[item.status] = (counts[item.status] || 0) + 1;
  const status = counts.block ? "blocked" : counts.warn ? "warning" : "ready";
  return { status, counts };
}

function firstActions(checks) {
  return checks
    .filter((item) => item.status !== "pass" && item.action)
    .map((item) => item.action)
    .filter((value, index, arr) => arr.indexOf(value) === index)
    .slice(0, 6);
}

export function collectLaunchReadiness() {
  const checks = [];
  const askConfigText = readFile("docs/assets/ask-config.js");
  const schemaText = readFile("apps/ask-atlas/db/schema.sql");
  const askConfig = parsePagesAskConfig(askConfigText);
  const backendUrl = safeUrl(askConfig.backendUrl);
  const baseUrl = safeUrl(CONFIG.baseUrl);
  const pagesBaseUrl = safeUrl(CONFIG.pagesBaseUrl);
  const publicConfigIssues = publicFrontendConfigIssues(askConfigText);
  const pagesAskUrl = pagesUrl("ask/");
  const bundledPrimerSeed = fileExists("docs/companion_paper_primer.md");
  const deploymentLike = Boolean(process.env.VERCEL) || ["prod", "production"].includes(CONFIG.appEnv);

  checks.push(check(
    "Public Pages",
    "pages-ask-route",
    "Canonical GitHub Pages Ask route",
    fileExists("docs/ask/index.html") ? "pass" : "block",
    fileExists("docs/ask/index.html") ? "docs/ask/index.html exists for /ask/." : "docs/ask/index.html is missing.",
    "Generate the Pages Ask route with scripts/render_site.py.",
  ));
  checks.push(check(
    "Public Pages",
    "pages-fallback",
    "Fallback Ask route",
    fileExists("docs/ask.html") ? "pass" : "warn",
    fileExists("docs/ask.html") ? "docs/ask.html exists for old links." : "docs/ask.html fallback is missing.",
    "Regenerate the Pages site so existing ask.html links keep working.",
  ));
  checks.push(check(
    "Public Pages",
    "pages-assets",
    "Ask frontend assets",
    fileExists("docs/assets/ask.css") && fileExists("docs/assets/ask.js") ? "pass" : "block",
    "docs/assets/ask.css and docs/assets/ask.js must exist for GitHub Pages.",
    "Copy/regenerate the Ask frontend assets into docs/assets/.",
  ));
  checks.push(check(
    "Public Pages",
    "pages-config",
    "Pages backend config file",
    askConfigText ? "pass" : "block",
    askConfigText ? "docs/assets/ask-config.js exists." : "docs/assets/ask-config.js is missing.",
    "Create docs/assets/ask-config.js with ASK_ATLAS_FRONTEND and ASK_ATLAS_BACKEND_URL.",
  ));
  checks.push(check(
    "Public Pages",
    "pages-config-frontend",
    "Pages frontend marker",
    askConfig.frontend === "pages" ? "pass" : "warn",
    askConfig.frontend === "pages" ? "ASK_ATLAS_FRONTEND is set to pages." : "ASK_ATLAS_FRONTEND is not set to pages.",
    "Set window.ASK_ATLAS_FRONTEND = \"pages\" in docs/assets/ask-config.js.",
  ));
  checks.push(check(
    "Public Pages",
    "pages-config-backend",
    "Secure backend URL in Pages config",
    backendUrl && isHttpsUrl(backendUrl) && !isLocalUrl(backendUrl) ? "pass" : "block",
    backendUrl ? `Pages points to backend ${backendUrl}.` : "ASK_ATLAS_BACKEND_URL is empty, so public /ask/ will show Backend required.",
    "Deploy the backend, then set window.ASK_ATLAS_BACKEND_URL to its HTTPS URL.",
  ));
  checks.push(check(
    "Public Pages",
    "pages-config-no-secrets",
    "Pages config contains no secrets",
    askConfigText && publicConfigIssues.length === 0 ? "pass" : "block",
    askConfigText && publicConfigIssues.length === 0
      ? "docs/assets/ask-config.js was scanned for backend secret names, token-like values, URL credentials, query strings, and fragments."
      : "docs/assets/ask-config.js is missing or contains secret-like/unsafe public URL material.",
    "Keep docs/assets/ask-config.js limited to public frontend markers and a clean public backend base URL.",
  ));
  checks.push(check(
    "Public Pages",
    "pages-backend-match",
    "Pages backend URL matches backend config",
    backendUrl && baseUrl && backendUrl === baseUrl ? "pass" : "block",
    backendUrl && baseUrl ? `Pages backend is ${backendUrl}; backend base URL is ${baseUrl}.` : "Cannot compare backend URLs until both are configured.",
    "Keep docs/assets/ask-config.js and ASK_ATLAS_BASE_URL pointed at the same backend.",
  ));
  checks.push(check(
    "Public Pages",
    "readme-entry",
    "README Ask entry",
    readFile("README.md").includes("/ask/") ? "pass" : "warn",
    "README should send readers to the canonical /ask/ page.",
    "Regenerate README so the Ask the Atlas links point to /ask/.",
  ));

  const [baseStatus, baseDetail, baseAction] = statusFrom(
    Boolean(baseUrl) && isHttpsUrl(baseUrl) && !isLocalUrl(baseUrl),
    baseUrl ? `Backend base URL is ${baseUrl}.` : "ASK_ATLAS_BASE_URL is not configured.",
    "Set ASK_ATLAS_BASE_URL to the deployed HTTPS backend URL.",
  );
  checks.push(check("Backend Runtime", "base-url", "Backend public URL", baseStatus, baseDetail, baseAction));
  checks.push(check(
    "Backend Runtime",
    "pages-base-url",
    "Project Pages URL",
    pagesBaseUrl && isHttpsUrl(pagesBaseUrl) && !isLocalUrl(pagesBaseUrl) ? (pagesBaseUrl === EXPECTED_PAGES_BASE_URL ? "pass" : "warn") : "block",
    pagesBaseUrl ? `Pages base URL is ${pagesBaseUrl}.` : "ASK_ATLAS_PAGES_BASE_URL is missing.",
    `Set ASK_ATLAS_PAGES_BASE_URL to ${EXPECTED_PAGES_BASE_URL}.`,
  ));
  checks.push(check(
    "Backend Runtime",
    "cors-pages",
    "Credentialed CORS origin",
    pagesBaseUrl ? "pass" : "block",
    pagesBaseUrl ? `The Pages origin is derived from ${pagesBaseUrl}.` : "Pages origin cannot be derived.",
    "Configure ASK_ATLAS_PAGES_BASE_URL before public launch.",
  ));
  checks.push(check(
    "Backend Runtime",
    "dev-auth-disabled",
    "Development auth disabled",
    CONFIG.devAuth ? "block" : "pass",
    CONFIG.devAuth ? "ASK_ATLAS_DEV_AUTH is enabled." : "ASK_ATLAS_DEV_AUTH is disabled.",
    "Set ASK_ATLAS_DEV_AUTH=0 in public deployments.",
  ));
  checks.push(check(
    "Backend Runtime",
    "mock-provider-disabled",
    "Mock provider disabled",
    CONFIG.mockProvider ? "block" : "pass",
    CONFIG.mockProvider ? "ASK_ATLAS_MOCK_PROVIDER is enabled." : "ASK_ATLAS_MOCK_PROVIDER is disabled.",
    "Set ASK_ATLAS_MOCK_PROVIDER=0 in public deployments.",
  ));

  checks.push(check(
    "Secrets & Access",
    "provider-secret",
    "360 API key backend secret",
    CONFIG.apiKey ? "pass" : "block",
    CONFIG.apiKey ? "QIHOO_API_KEY is present in backend environment." : "QIHOO_API_KEY is not configured.",
    "Configure QIHOO_API_KEY only as a backend deployment secret.",
  ));
  checks.push(check(
    "Secrets & Access",
    "github-oauth",
    "GitHub OAuth credentials",
    CONFIG.githubClientId && CONFIG.githubClientSecret ? "pass" : "block",
    CONFIG.githubClientId && CONFIG.githubClientSecret ? "GitHub OAuth client id/secret are configured." : "GitHub OAuth credentials are incomplete.",
    "Create a GitHub OAuth app and configure GITHUB_CLIENT_ID/GITHUB_CLIENT_SECRET.",
  ));
  checks.push(check(
    "Secrets & Access",
    "session-secret",
    "Session signing secret",
    weakSecret(CONFIG.sessionSecret) ? "block" : "pass",
    weakSecret(CONFIG.sessionSecret) ? "Session secret is missing or too weak." : "Session secret length looks safe.",
    "Set ASK_ATLAS_SESSION_SECRET to a random string with at least 32 characters.",
  ));
  checks.push(check(
    "Secrets & Access",
    "token-secret",
    "OAuth token encryption secret",
    weakSecret(CONFIG.tokenEncryptionSecret) ? "block" : "pass",
    weakSecret(CONFIG.tokenEncryptionSecret) ? "Token encryption secret is missing or too weak." : "Token encryption secret length looks safe.",
    "Set ASK_ATLAS_TOKEN_ENCRYPTION_SECRET to a different random string with at least 32 characters.",
  ));
  checks.push(check(
    "Secrets & Access",
    "admin-ids",
    "Stable admin GitHub IDs",
    CONFIG.adminGithubIds.size && numericSet(CONFIG.adminGithubIds) ? "pass" : "block",
    CONFIG.adminGithubIds.size ? "Admin GitHub IDs are configured." : "Only mutable login fallback is available.",
    "Set ASK_ATLAS_ADMIN_GITHUB_IDS to the owner's numeric GitHub id before public launch.",
  ));

  checks.push(check(
    "Storage & Rate Limits",
    "postgres-store",
    "Production data store",
    CONFIG.storeBackend === "postgres" && CONFIG.databaseUrl ? "pass" : "block",
    CONFIG.storeBackend === "postgres"
      ? (CONFIG.databaseUrl ? "Postgres store is selected and DATABASE_URL is configured." : "Postgres store is selected, but DATABASE_URL is missing.")
      : `Current store backend is ${CONFIG.storeBackend}.`,
    "Use ASK_ATLAS_STORE_BACKEND=postgres and DATABASE_URL for public traffic.",
  ));
  const reportingTablesReady = [
    "ask_atlas_users",
    "ask_atlas_usage_daily",
    "ask_atlas_chat_requests",
    "ask_atlas_feedback",
    "ask_atlas_provider_usage",
  ].every((name) => schemaText.includes(name));
  checks.push(check(
    "Storage & Rate Limits",
    "postgres-reporting-schema",
    "Normalized admin reporting tables",
    reportingTablesReady ? "pass" : "block",
    reportingTablesReady
      ? "db/schema.sql defines the ask_atlas_* reporting tables mirrored from runtime state."
      : "db/schema.sql is missing one or more ask_atlas_* reporting tables.",
    "Keep Postgres reporting tables in db/schema.sql so admin analytics can run outside the JSONB state snapshot.",
  ));
  checks.push(check(
    "Storage & Rate Limits",
    "json-store-fallback",
    "JSON store fallback disabled",
    CONFIG.storeBackend !== "json" && !CONFIG.allowJsonStore ? "pass" : "warn",
    CONFIG.allowJsonStore ? "JSON store override is allowed." : "JSON store override is not allowed.",
    "Keep ASK_ATLAS_ALLOW_JSON_STORE=0 for public deployments.",
  ));
  checks.push(check(
    "Storage & Rate Limits",
    "redis-rate-limit",
    "Atomic distributed rate limit",
    CONFIG.upstashRedisRestUrl && CONFIG.upstashRedisRestToken ? "pass" : "block",
    CONFIG.upstashRedisRestUrl && CONFIG.upstashRedisRestToken ? "Upstash/Redis REST rate limiting is configured." : "Redis/Upstash rate limiting is not configured.",
    "Configure UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.",
  ));
  checks.push(check(
    "Storage & Rate Limits",
    "local-rate-limit-disabled",
    "Local limiter fallback disabled",
    CONFIG.allowLocalRateLimit ? "warn" : "pass",
    CONFIG.allowLocalRateLimit ? "Local in-memory rate limit fallback is enabled." : "Local in-memory rate limit fallback is disabled.",
    "Set ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT=0 for public traffic.",
  ));
  checks.push(check(
    "Storage & Rate Limits",
    "cost-caps",
    "Token and cost caps",
    CONFIG.userDailyTokenCap > 0 && CONFIG.userDailyCostCap > 0 && CONFIG.maxSingleRequestCostUsd > 0 && CONFIG.globalDailyCostCap > 0 ? "pass" : "block",
    `User token cap ${CONFIG.userDailyTokenCap}; user cost cap $${CONFIG.userDailyCostCap}; single request cap $${CONFIG.maxSingleRequestCostUsd}; global cap $${CONFIG.globalDailyCostCap}.`,
    "Set positive token and cost caps before enabling public model calls.",
  ));

  checks.push(check(
    "Growth & Quota",
    "base-quota",
    "No-star daily quota",
    CONFIG.baseDailyRequests === 2 ? "pass" : "warn",
    `No-star users get ${CONFIG.baseDailyRequests} request(s) per day.`,
    "Keep ASK_ATLAS_BASE_DAILY_REQUESTS=2 to match the product policy.",
  ));
  checks.push(check(
    "Growth & Quota",
    "star-daily-quota",
    "Star daily quota",
    CONFIG.starDailyRequests === 10 ? "pass" : "warn",
    `Verified star users get ${CONFIG.starDailyRequests} request(s) per day.`,
    "Keep ASK_ATLAS_STAR_DAILY_REQUESTS=10 to match the product policy.",
  ));
  checks.push(check(
    "Growth & Quota",
    "fork-bonus",
    "Fork reward",
    CONFIG.forkBonusCredits === 20 ? "pass" : "warn",
    `Fork reward is ${CONFIG.forkBonusCredits} one-time bonus credit(s).`,
    "Keep ASK_ATLAS_FORK_BONUS_CREDITS=20 to match the product policy.",
  ));

  const missingModels = REQUIRED_MODELS.filter((model) => !CONFIG.allowedModels.includes(model));
  checks.push(check(
    "Models & Evidence",
    "required-models",
    "Required model routes",
    missingModels.length ? "block" : "pass",
    missingModels.length ? `Missing required model(s): ${missingModels.join(", ")}.` : "DeepSeek V4 Pro and GLM-5.2 are available.",
    "Include deepseek/deepseek-v4-pro and z-ai/glm-5.2 in ASK_ATLAS_ALLOWED_MODELS.",
  ));
  const missingRates = CONFIG.allowedModels.filter((model) => !ratesReady(model));
  checks.push(check(
    "Models & Evidence",
    "model-rates",
    "Positive numeric model pricing",
    missingRates.length && CONFIG.requireModelRates ? "block" : missingRates.length ? "warn" : "pass",
    missingRates.length ? `Missing positive numeric pricing for ${missingRates.join(", ")}.` : "All allowed models have positive numeric pricing.",
    "Set ASK_ATLAS_MODEL_RATES_JSON with current input/output token rates.",
  ));
  checks.push(check(
    "Models & Evidence",
    "model-rate-required",
    "Pricing required flag",
    CONFIG.requireModelRates ? "pass" : "warn",
    CONFIG.requireModelRates ? "ASK_ATLAS_REQUIRE_MODEL_RATES is enabled." : "Model pricing can be bypassed.",
    "Set ASK_ATLAS_REQUIRE_MODEL_RATES=1 for production cost accounting.",
  ));
  checks.push(check(
    "Models & Evidence",
    "primer-seed",
    "Companion paper grounding seed",
    bundledPrimerSeed ? "pass" : "block",
    bundledPrimerSeed ? "docs/companion_paper_primer.md is bundled as a public companion-paper seed." : "The public companion-paper primer seed is missing.",
    "Add docs/companion_paper_primer.md so Ask can cite the paper layer before full-text extraction is configured.",
  ));
  checks.push(check(
    "Models & Evidence",
    "primer-full-text",
    "Companion paper full-text source",
    CONFIG.primerTextPath ? "pass" : "warn",
    CONFIG.primerTextPath ? "ASK_ATLAS_PRIMER_TEXT_PATH is configured for fuller paper grounding." : "Only the public companion-paper seed is available; full-text paper grounding is not configured.",
    "Configure ASK_ATLAS_PRIMER_TEXT_PATH to a backend-only text extraction for higher-recall paper-grounded answers.",
  ));

  const summary = summarize(checks);
  return {
    generatedAt: nowIso(),
    status: summary.status,
    counts: summary.counts,
    nextActions: firstActions(checks),
    publicAskUrl: pagesAskUrl,
    safeConfig: {
      appEnv: CONFIG.appEnv,
      deploymentLike,
      backendBaseUrl: baseUrl,
      pagesBaseUrl,
      pagesBackendUrl: backendUrl,
      storeBackend: CONFIG.storeBackend,
      allowedModels: CONFIG.allowedModels,
      quotaPolicy: {
        baseDailyRequests: CONFIG.baseDailyRequests,
        starDailyRequests: CONFIG.starDailyRequests,
        starBonusCredits: CONFIG.starBonusCredits,
        forkBonusCredits: CONFIG.forkBonusCredits,
        maxInputChars: CONFIG.maxInputChars,
        maxOutputTokens: CONFIG.maxOutputTokens,
      },
    },
    checks,
  };
}
