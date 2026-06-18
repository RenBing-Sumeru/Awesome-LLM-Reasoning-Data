import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(new URL("../scripts/configure-production.mjs", import.meta.url));

function run(args = [], env = {}) {
  return spawnSync(process.execPath, [scriptPath, ...args], {
    encoding: "utf8",
    env,
  });
}

test("production configure dry run prints names and status without values", () => {
  const env = {
    ASK_ATLAS_BASE_URL: "https://private-backend.example",
    QIHOO_API_KEY: "provider-key-sentinel",
    DATABASE_URL: "postgres://user:database-sentinel@host/db",
  };
  const result = run(["--check"], env);
  assert.equal(result.status, 1);
  assert.match(result.stdout, /ASK_ATLAS_BASE_URL: ready/);
  assert.match(result.stdout, /QIHOO_API_KEY: ready/);
  assert.doesNotMatch(result.stdout, /private-backend|provider-key-sentinel|database-sentinel/);
  assert.doesNotMatch(result.stderr, /private-backend|provider-key-sentinel|database-sentinel/);
});

test("production configure Vercel template never prints secret values", () => {
  const env = {
    GITHUB_CLIENT_SECRET: "github-secret-sentinel",
    QIHOO_API_KEY: "provider-key-sentinel",
    UPSTASH_REDIS_REST_TOKEN: "redis-token-sentinel",
  };
  const result = run(["--print-vercel"], env);
  assert.equal(result.status, 0);
  assert.match(result.stdout, /vercel env add QIHOO_API_KEY production/);
  for (const value of Object.values(env)) {
    assert.doesNotMatch(result.stdout, new RegExp(value));
    assert.doesNotMatch(result.stderr, new RegExp(value));
  }
});

test("production configure refuses partial GitHub writes when values are missing", () => {
  const result = run(["--apply-github"], {
    ASK_ATLAS_BASE_URL: "https://private-backend.example",
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /refusing to partially write/i);
  assert.match(result.stderr, /Missing variables:/);
  assert.match(result.stderr, /Missing secrets:/);
});
