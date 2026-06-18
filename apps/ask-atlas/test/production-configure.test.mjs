import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { VERCEL_RUNTIME_REQUIRED } from "../scripts/env-manifest.mjs";

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

test("production configure refuses partial Vercel writes when values are missing", () => {
  const result = run(["--apply-vercel"], {
    ASK_ATLAS_BASE_URL: "https://private-backend.example",
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /refusing to partially write Vercel production runtime/i);
  assert.match(result.stderr, /Missing variables:/);
});

test("production configure applies Vercel runtime values without printing them", () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "ask-atlas-vercel-"));
  const fakeLog = path.join(temp, "vercel-calls.jsonl");
  const fakeVercel = path.join(temp, "vercel");
  fs.writeFileSync(fakeVercel, `#!/usr/bin/env node
const fs = require("fs");
const args = process.argv.slice(2);
const input = fs.readFileSync(0, "utf8");
fs.appendFileSync(process.env.VERCEL_FAKE_LOG, JSON.stringify({ args, input }) + "\\n");
if (args[0] === "--version") {
  console.log("vercel-fake");
  process.exit(0);
}
if (args[0] === "env" && (args[1] === "rm" || args[1] === "add")) process.exit(0);
process.exit(1);
`);
  fs.chmodSync(fakeVercel, 0o755);
  const values = Object.fromEntries(VERCEL_RUNTIME_REQUIRED.map((name) => [name, `value-for-${name}`]));
  Object.assign(values, {
    VERCEL_TOKEN: "vercel-token-sentinel",
    VERCEL_ORG_ID: "org-sentinel",
    VERCEL_PROJECT_ID: "project-sentinel",
    QIHOO_API_KEY: "provider-key-sentinel",
    DATABASE_URL: "postgres://user:database-sentinel@host/db",
    UPSTASH_REDIS_REST_TOKEN: "redis-token-sentinel",
  });
  const result = run(["--apply-vercel"], {
    ...process.env,
    ...values,
    PATH: `${temp}${path.delimiter}${process.env.PATH || ""}`,
    VERCEL_FAKE_LOG: fakeLog,
  });
  assert.equal(result.status, 0, result.stderr);
  for (const value of ["provider-key-sentinel", "database-sentinel", "redis-token-sentinel", "vercel-token-sentinel"]) {
    assert.doesNotMatch(result.stdout, new RegExp(value));
    assert.doesNotMatch(result.stderr, new RegExp(value));
  }
  assert.match(result.stdout, /set Vercel production runtime variable QIHOO_API_KEY \(sensitive\)/);
  const calls = fs.readFileSync(fakeLog, "utf8").trim().split("\n").map((line) => JSON.parse(line));
  for (const call of calls) {
    assert.equal(call.args.includes("--token"), false);
    assert.equal(call.args.includes("vercel-token-sentinel"), false);
  }
  const addProvider = calls.find((call) => call.args.includes("add") && call.args.includes("QIHOO_API_KEY"));
  assert.ok(addProvider);
  assert.ok(addProvider.args.includes("--sensitive"));
  assert.equal(addProvider.input, "provider-key-sentinel\n");
  const addBaseUrl = calls.find((call) => call.args.includes("add") && call.args.includes("ASK_ATLAS_BASE_URL"));
  assert.ok(addBaseUrl);
  assert.equal(addBaseUrl.args.includes("--sensitive"), false);
});
