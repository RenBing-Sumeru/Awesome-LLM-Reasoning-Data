import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { databaseSslOptions } from "../src/config.mjs";

const appRoot = fileURLToPath(new URL("..", import.meta.url));

const script = `
  import('./src/config.mjs')
    .then(({ validateRuntimeConfig }) => {
      validateRuntimeConfig();
      console.log('ok');
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
`;

function runConfigCheck(extraEnv = {}) {
  const env = {
    ...process.env,
    ASK_ATLAS_DEV_AUTH: "0",
    ASK_ATLAS_MOCK_PROVIDER: "0",
    ASK_ATLAS_ENV: "test-prod",
    ASK_ATLAS_BASE_URL: "https://ask.example.test",
    ASK_ATLAS_SESSION_SECRET: "s".repeat(40),
    ASK_ATLAS_TOKEN_ENCRYPTION_SECRET: "t".repeat(40),
    GITHUB_CLIENT_ID: "github-client-id",
    GITHUB_CLIENT_SECRET: "github-client-secret",
    ASK_ATLAS_ADMIN_GITHUB_IDS: "123456",
    ASK_ATLAS_ALLOWLIST_LOGINS: "",
    ASK_ATLAS_PRIMER_TEXT_PATH: "",
    QIHOO_API_KEY: "provider-secret-for-config-test",
    ASK_ATLAS_STORE_BACKEND: "postgres",
    DATABASE_URL: "postgres://user:pass@localhost:5432/ask_atlas",
    UPSTASH_REDIS_REST_URL: "https://redis.example.test",
    UPSTASH_REDIS_REST_TOKEN: "redis-token",
    ASK_ATLAS_REQUIRE_MODEL_RATES: "1",
    ...extraEnv,
  };
  for (const [key, value] of Object.entries(extraEnv)) {
    if (value === null) delete env[key];
  }
  return spawnSync(process.execPath, ["--input-type=module", "-e", script], {
    cwd: appRoot,
    encoding: "utf8",
    env,
  });
}

test("production config requires positive numeric model rates", () => {
  const result = runConfigCheck({ ASK_ATLAS_MODEL_RATES_JSON: "{}" });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /positive numeric input\/output pricing/);
});

test("production config rejects placeholder, zero, and negative model rates", () => {
  for (const rates of [
    '{"deepseek/deepseek-v4-pro":{"input_per_million":"REPLACE","output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
    '{"deepseek/deepseek-v4-pro":{"input_per_million":0,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
    '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":-2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
    '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1}}',
  ]) {
    const result = runConfigCheck({ ASK_ATLAS_MODEL_RATES_JSON: rates });
    assert.notEqual(result.status, 0, rates);
    assert.match(result.stderr, /positive numeric input\/output pricing/);
  }
});

test("production config rejects json storage unless explicitly allowed", () => {
  const result = runConfigCheck({
    ASK_ATLAS_STORE_BACKEND: "json",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /STORE_BACKEND=postgres/);
});

test("prod deployment rejects json storage even with the private fallback flag", () => {
  const result = runConfigCheck({
    ASK_ATLAS_ENV: "prod",
    ASK_ATLAS_STORE_BACKEND: "json",
    ASK_ATLAS_ALLOW_JSON_STORE: "1",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Vercel or ASK_ATLAS_ENV=prod deployments/);
});

test("production config requires numeric admin ids", () => {
  const result = runConfigCheck({
    ASK_ATLAS_ADMIN_GITHUB_IDS: "",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /ADMIN_GITHUB_IDS/);
});

test("production config rejects non-numeric GitHub ids", () => {
  const adminLogin = runConfigCheck({
    ASK_ATLAS_ADMIN_GITHUB_IDS: "RenBing-Sumeru",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(adminLogin.status, 0);
  assert.match(adminLogin.stderr, /numeric GitHub ids/);

  const allowlistLogin = runConfigCheck({
    ASK_ATLAS_ALLOWLIST_GITHUB_IDS: "friend-login",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(allowlistLogin.status, 0);
  assert.match(allowlistLogin.stderr, /ALLOWLIST_GITHUB_IDS.*numeric GitHub ids/);
});

test("production config rejects login-based allowlist viewers", () => {
  const result = runConfigCheck({
    ASK_ATLAS_ALLOWLIST_LOGINS: "friend-login",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /ALLOWLIST_LOGINS.*numeric ASK_ATLAS_ALLOWLIST_GITHUB_IDS/);
});

test("production config restricts backend-only primer text to a safe text root", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ask-atlas-primer-"));
  const safeRoot = path.join(tmp, "private", "primer");
  fs.mkdirSync(safeRoot, { recursive: true });
  const safePrimer = path.join(safeRoot, "primer.md");
  fs.writeFileSync(safePrimer, "A safe companion-paper extraction.");
  const unsafeEnv = path.join(tmp, ".env");
  fs.writeFileSync(unsafeEnv, "QIHOO_API_KEY=fake");

  const safe = runConfigCheck({
    ASK_ATLAS_SAFE_RAG_ROOT: safeRoot,
    ASK_ATLAS_PRIMER_TEXT_PATH: safePrimer,
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.equal(safe.status, 0, safe.stderr);

  const outsideRoot = runConfigCheck({
    ASK_ATLAS_SAFE_RAG_ROOT: safeRoot,
    ASK_ATLAS_PRIMER_TEXT_PATH: unsafeEnv,
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(outsideRoot.status, 0);
  assert.match(outsideRoot.stderr, /PRIMER_TEXT_PATH must be inside ASK_ATLAS_SAFE_RAG_ROOT/);
  assert.match(outsideRoot.stderr, /not a config, secret, log, database, or structured data file/);
});

test("production config accepts postgres, redis, and positive numeric model rates", () => {
  const result = runConfigCheck({
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /ok/);
});

test("database SSL auto mode only treats the parsed hostname as local", () => {
  assert.equal(
    databaseSslOptions("postgres://user:pass@localhost:5432/ask_atlas", "auto"),
    false,
  );
  assert.equal(
    databaseSslOptions("postgres://user:pass@127.0.0.1:5432/ask_atlas", "auto"),
    false,
  );
  assert.deepEqual(
    databaseSslOptions("postgres://user:localhost@db.example.com:5432/ask_atlas", "auto"),
    { rejectUnauthorized: false },
  );
  assert.deepEqual(
    databaseSslOptions("postgres://user:pass@db.example.com:5432/localhost", "auto"),
    { rejectUnauthorized: false },
  );
});

test("database setup script rejects unknown flags before touching config-dependent work", () => {
  const result = spawnSync(process.execPath, ["scripts/setup-db.mjs", "--chekc"], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      DATABASE_URL: "",
    },
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Unknown argument/);
  assert.doesNotMatch(result.stderr, /DATABASE_URL is required/);
});

test("production config requires explicit HTTPS non-local base URL", () => {
  const missing = runConfigCheck({
    ASK_ATLAS_ENV: "prod",
    ASK_ATLAS_BASE_URL: null,
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(missing.status, 0);
  assert.match(missing.stderr, /BASE_URL must be explicitly configured/);

  const httpLocal = runConfigCheck({
    ASK_ATLAS_ENV: "prod",
    ASK_ATLAS_BASE_URL: "http://localhost:8787",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(httpLocal.status, 0);
  assert.match(httpLocal.stderr, /BASE_URL must use HTTPS/);
  assert.match(httpLocal.stderr, /must not point to localhost/);
});

test("non-dev public-capable config also rejects implicit or local base URL", () => {
  const missing = runConfigCheck({
    ASK_ATLAS_ENV: "staging",
    ASK_ATLAS_BASE_URL: null,
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(missing.status, 0);
  assert.match(missing.stderr, /BASE_URL must be explicitly configured/);

  const httpLocal = runConfigCheck({
    ASK_ATLAS_ENV: "staging",
    ASK_ATLAS_BASE_URL: "http://127.0.0.1:8787",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(httpLocal.status, 0);
  assert.match(httpLocal.stderr, /BASE_URL must use HTTPS/);
  assert.match(httpLocal.stderr, /must not point to localhost/);
});

test("non-dev public-capable config rejects local Pages base URL", () => {
  const result = runConfigCheck({
    ASK_ATLAS_ENV: "staging",
    ASK_ATLAS_PAGES_BASE_URL: "http://localhost:8080/Awesome-LLM-Reasoning-Data",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /PAGES_BASE_URL must use HTTPS/);
  assert.match(result.stderr, /PAGES_BASE_URL must not point to localhost/);
});

test("production admin viewer does not trust mutable login when admin ids are configured", () => {
  const script = `
    const { isAdminUser, isOwnerAdminUser } = await import('./src/config.mjs');
    const byLogin = { githubId: '999', login: 'RenBing-Sumeru', role: 'user' };
    const byId = { githubId: '123456', login: 'some-renamed-user', role: 'user' };
    console.log(JSON.stringify({
      loginAdmin: isAdminUser(byLogin),
      loginOwner: isOwnerAdminUser(byLogin),
      idAdmin: isAdminUser(byId),
      idOwner: isOwnerAdminUser(byId)
    }));
  `;
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", script], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      ASK_ATLAS_DEV_AUTH: "0",
      ASK_ATLAS_MOCK_PROVIDER: "0",
      ASK_ATLAS_ADMIN_LOGINS: "RenBing-Sumeru",
      ASK_ATLAS_ADMIN_GITHUB_IDS: "123456",
    },
  });
  assert.equal(result.status, 0, result.stderr);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.loginAdmin, false);
  assert.equal(payload.loginOwner, false);
  assert.equal(payload.idAdmin, true);
  assert.equal(payload.idOwner, true);
});

test("Vercel production config rejects dev auth even if other settings are valid", () => {
  const result = runConfigCheck({
    VERCEL: "1",
    ASK_ATLAS_ENV: "prod",
    ASK_ATLAS_DEV_AUTH: "1",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /DEV_AUTH must never be enabled/);
});

test("Vercel production config does not let mock provider bypass safety checks", () => {
  const result = runConfigCheck({
    VERCEL: "1",
    ASK_ATLAS_ENV: "prod",
    ASK_ATLAS_MOCK_PROVIDER: "1",
    ASK_ATLAS_SESSION_SECRET: "",
    GITHUB_CLIENT_ID: "",
    GITHUB_CLIENT_SECRET: "",
    ASK_ATLAS_ADMIN_GITHUB_IDS: "",
    ASK_ATLAS_STORE_BACKEND: "json",
    DATABASE_URL: "",
    UPSTASH_REDIS_REST_URL: "",
    UPSTASH_REDIS_REST_TOKEN: "",
    ASK_ATLAS_MODEL_RATES_JSON: "{}",
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /SESSION_SECRET/);
  assert.match(result.stderr, /GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET/);
  assert.match(result.stderr, /ADMIN_GITHUB_IDS/);
  assert.match(result.stderr, /STORE_BACKEND=postgres/);
  assert.match(result.stderr, /UPSTASH_REDIS_REST_URL/);
});

test("Vercel production config rejects mock provider even when other settings are valid", () => {
  const result = runConfigCheck({
    VERCEL: "1",
    ASK_ATLAS_ENV: "prod",
    ASK_ATLAS_MOCK_PROVIDER: "1",
    ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /MOCK_PROVIDER must never be enabled/);
});
