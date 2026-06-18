import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(new URL("../scripts/check-env-names.mjs", import.meta.url));
const launchNames = [
  "ASK_ATLAS_ENV",
  "ASK_ATLAS_BASE_URL",
  "ASK_ATLAS_PAGES_BASE_URL",
  "ASK_ATLAS_SESSION_SECRET",
  "ASK_ATLAS_TOKEN_ENCRYPTION_SECRET",
  "GITHUB_CLIENT_ID",
  "GITHUB_CLIENT_SECRET",
  "QIHOO_API_KEY",
  "ASK_ATLAS_STORE_BACKEND",
  "DATABASE_URL",
  "ASK_ATLAS_DATABASE_SSL",
  "ASK_ATLAS_ALLOW_JSON_STORE",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
  "ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT",
  "ASK_ATLAS_TRUST_PROXY",
  "ASK_ATLAS_ADMIN_GITHUB_IDS",
  "ASK_ATLAS_REQUIRE_MODEL_RATES",
  "ASK_ATLAS_MODEL_RATES_JSON",
  "ASK_ATLAS_BASE_DAILY_REQUESTS",
  "ASK_ATLAS_STAR_BONUS_CREDITS",
  "ASK_ATLAS_FORK_BONUS_CREDITS",
  "ASK_ATLAS_ADMIN_DAILY_REQUESTS",
  "ASK_ATLAS_MAX_INPUT_CHARS",
  "ASK_ATLAS_MAX_OUTPUT_TOKENS",
  "ASK_ATLAS_USER_DAILY_TOKEN_CAP",
  "ASK_ATLAS_USER_DAILY_COST_CAP_USD",
  "ASK_ATLAS_MAX_SINGLE_REQUEST_COST_USD",
  "ASK_ATLAS_GLOBAL_DAILY_COST_CAP_USD",
  "ASK_ATLAS_QUOTA_RESERVATION_TTL_MS",
  "ASK_ATLAS_PER_USER_MINUTE_LIMIT",
  "ASK_ATLAS_PER_IP_HOUR_LIMIT",
  "ASK_ATLAS_ATTEMPT_PER_USER_MINUTE_LIMIT",
  "ASK_ATLAS_ATTEMPT_PER_IP_HOUR_LIMIT",
  "ASK_ATLAS_REWARD_REFRESH_HOURLY_LIMIT",
  "ASK_ATLAS_GLOBAL_MINUTE_LIMIT",
  "ASK_ATLAS_GITHUB_FORK_SCAN_PAGES",
];
const deployNames = [...launchNames, "VERCEL_TOKEN", "VERCEL_ORG_ID", "VERCEL_PROJECT_ID"];
const vercelRequiredNames = [
  "ASK_ATLAS_ENV",
  "ASK_ATLAS_BASE_URL",
  "ASK_ATLAS_PAGES_BASE_URL",
  "ASK_ATLAS_SESSION_SECRET",
  "ASK_ATLAS_TOKEN_ENCRYPTION_SECRET",
  "GITHUB_CLIENT_ID",
  "GITHUB_CLIENT_SECRET",
  "QIHOO_API_KEY",
  "ASK_ATLAS_STORE_BACKEND",
  "DATABASE_URL",
  "ASK_ATLAS_DATABASE_SSL",
  "ASK_ATLAS_ALLOW_JSON_STORE",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
  "ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT",
  "ASK_ATLAS_TRUST_PROXY",
  "ASK_ATLAS_ADMIN_GITHUB_IDS",
  "ASK_ATLAS_REQUIRE_MODEL_RATES",
  "ASK_ATLAS_MODEL_RATES_JSON",
  "ASK_ATLAS_BASE_DAILY_REQUESTS",
  "ASK_ATLAS_STAR_BONUS_CREDITS",
  "ASK_ATLAS_FORK_BONUS_CREDITS",
  "ASK_ATLAS_ADMIN_DAILY_REQUESTS",
  "ASK_ATLAS_MAX_INPUT_CHARS",
  "ASK_ATLAS_MAX_OUTPUT_TOKENS",
  "ASK_ATLAS_USER_DAILY_TOKEN_CAP",
  "ASK_ATLAS_USER_DAILY_COST_CAP_USD",
  "ASK_ATLAS_MAX_SINGLE_REQUEST_COST_USD",
  "ASK_ATLAS_GLOBAL_DAILY_COST_CAP_USD",
  "ASK_ATLAS_QUOTA_RESERVATION_TTL_MS",
  "ASK_ATLAS_PER_USER_MINUTE_LIMIT",
  "ASK_ATLAS_PER_IP_HOUR_LIMIT",
  "ASK_ATLAS_ATTEMPT_PER_USER_MINUTE_LIMIT",
  "ASK_ATLAS_ATTEMPT_PER_IP_HOUR_LIMIT",
  "ASK_ATLAS_REWARD_REFRESH_HOURLY_LIMIT",
  "ASK_ATLAS_GLOBAL_MINUTE_LIMIT",
  "ASK_ATLAS_GITHUB_FORK_SCAN_PAGES",
];
const vercelRecommendedNames = [
  "ASK_ATLAS_ADMIN_LOGINS",
  "ASK_ATLAS_SAFE_RAG_ROOT",
  "ASK_ATLAS_MAX_PRIMER_TEXT_BYTES",
  "ASK_ATLAS_GITHUB_TOKEN_RETENTION_DAYS",
];

function run(args, options = {}) {
  return spawnSync(process.execPath, [scriptPath, ...args], {
    encoding: "utf8",
    env: options.env || {},
  });
}

function namedEnv(names) {
  return Object.fromEntries(names.map((name) => [name, `${name.toLowerCase()}-value`]));
}

test("env checker prints required Vercel runtime names without values", () => {
  const result = run(["--print", "vercel-runtime"]);
  assert.equal(result.status, 0);
  assert.match(result.stdout, /ASK_ATLAS_BASE_URL/);
  assert.match(result.stdout, /QIHOO_API_KEY/);
  assert.doesNotMatch(result.stdout, /Bearer\s+/);
});

test("env checker prints safe GitHub command templates", () => {
  const secretSentinels = {
    ASK_ATLAS_SESSION_SECRET: "session-secret-sentinel",
    ASK_ATLAS_TOKEN_ENCRYPTION_SECRET: "encryption-secret-sentinel",
    GITHUB_CLIENT_SECRET: "github-client-secret-sentinel",
    QIHOO_API_KEY: "provider-key-sentinel",
    DATABASE_URL: "postgres://database-url-sentinel",
    UPSTASH_REDIS_REST_URL: "https://redis-url-sentinel",
    UPSTASH_REDIS_REST_TOKEN: "redis-token-sentinel",
    VERCEL_TOKEN: "vercel-token-sentinel",
  };
  const result = run(["--print", "github-commands"], {
    env: secretSentinels,
  });
  assert.equal(result.status, 0);
  assert.match(result.stdout, /gh variable set ASK_ATLAS_BASE_URL --env production/);
  assert.match(result.stdout, /gh secret set QIHOO_API_KEY --env production/);
  assert.match(result.stdout, /export QIHOO_API_KEY first/);
  assert.match(result.stdout, /printf '%s' "\$QIHOO_API_KEY"/);
  for (const value of Object.values(secretSentinels)) {
    assert.doesNotMatch(result.stdout, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.doesNotMatch(result.stdout, /fk[0-9A-Za-z_.-]{12,}/);
  const [variablesPart, secretsPart] = result.stdout.split("# GitHub production environment secrets");
  assert.doesNotMatch(variablesPart, /ASK_ATLAS_SESSION_SECRET|GITHUB_CLIENT_SECRET|QIHOO_API_KEY|DATABASE_URL|UPSTASH_REDIS_REST_TOKEN|VERCEL_TOKEN/);
  assert.match(secretsPart, /ASK_ATLAS_SESSION_SECRET/);
});

test("env checker prints Vercel command templates without values", () => {
  const secretSentinels = {
    ASK_ATLAS_SESSION_SECRET: "session-secret-sentinel",
    ASK_ATLAS_TOKEN_ENCRYPTION_SECRET: "encryption-secret-sentinel",
    GITHUB_CLIENT_SECRET: "github-client-secret-sentinel",
    QIHOO_API_KEY: "provider-key-sentinel",
    DATABASE_URL: "postgres://database-url-sentinel",
    UPSTASH_REDIS_REST_URL: "https://redis-url-sentinel",
    UPSTASH_REDIS_REST_TOKEN: "redis-token-sentinel",
    VERCEL_TOKEN: "vercel-token-sentinel",
  };
  const result = run(["--print", "vercel-commands"], {
    env: secretSentinels,
  });
  assert.equal(result.status, 0);
  assert.match(result.stdout, /vercel env add ASK_ATLAS_BASE_URL production/);
  assert.match(result.stdout, /vercel env add QIHOO_API_KEY production/);
  for (const value of Object.values(secretSentinels)) {
    assert.doesNotMatch(result.stdout, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("env checker fails closed when GitHub deploy environment is incomplete", () => {
  const result = run(["--github-actions-deploy"]);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /missing required names/);
  assert.match(result.stderr, /DATABASE_URL/);
  assert.match(result.stderr, /VERCEL_TOKEN/);
});

test("env checker accepts complete GitHub launch and deploy environments", () => {
  const launch = run(["--github-actions-launch"], { env: namedEnv(launchNames) });
  assert.equal(launch.status, 0);
  assert.match(launch.stdout, /all required names are present/);

  const deploy = run(["--github-actions-deploy"], { env: namedEnv(deployNames) });
  assert.equal(deploy.status, 0);
  assert.match(deploy.stdout, /all required names are present/);
});

test("env checker validates Vercel env-list output by variable name", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ask-atlas-env-"));
  const listPath = path.join(tmp, "vercel-env.txt");
  fs.writeFileSync(listPath, [...vercelRequiredNames, ...vercelRecommendedNames].join("\n"));
  const result = run(["--vercel-list", listPath]);
  assert.equal(result.status, 0);
  assert.match(result.stdout, /all required names are present/);
  assert.equal(result.stderr, "");
});

test("env checker rejects Vercel env-list output with missing required names", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ask-atlas-env-missing-"));
  const listPath = path.join(tmp, "vercel-env.txt");
  fs.writeFileSync(listPath, vercelRequiredNames.filter((name) => name !== "DATABASE_URL").join("\n"));
  const result = run(["--vercel-list", listPath]);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /missing required names/);
  assert.match(result.stderr, /DATABASE_URL/);
});

test("env checker warns but passes when only recommended Vercel names are missing", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ask-atlas-env-recommended-"));
  const listPath = path.join(tmp, "vercel-env.txt");
  fs.writeFileSync(listPath, vercelRequiredNames.join("\n"));
  const result = run(["--vercel-list", listPath]);
  assert.equal(result.status, 0);
  assert.match(result.stdout, /all required names are present/);
  assert.match(result.stderr, /recommended names not found/);
  assert.match(result.stderr, /ASK_ATLAS_SAFE_RAG_ROOT/);
});

test("env checker rejects unknown arguments", () => {
  const result = run(["--github-actions-depoly"]);
  assert.equal(result.status, 1);
  assert.match(result.stdout, /Usage:/);
});
