#!/usr/bin/env node
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const APP_ROOT = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const SECRETISH = /fk[0-9A-Za-z_.-]{8,}|Bearer\s+[A-Za-z0-9_.-]+|api[_-]?key|secret|token/i;

function usage() {
  console.log(`Usage:
  QIHOO_API_KEY=<backend-only key> npm run dev:real
  QIHOO_API_KEY=<backend-only key> npm run dev:real -- --check

This starts a private localhost-only Ask the Atlas session with:
- real 360 API calls;
- development GitHub auth;
- local JSON storage;
- local rate limiting;
- no production Pages backend URL changes.
`);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function envValue(name) {
  return String(process.env[name] || "").trim();
}

function assertNoSecretOutput(value) {
  if (SECRETISH.test(String(value || ""))) {
    fail("Refusing to print a secret-like value.");
  }
}

function buildLocalEnv() {
  const port = envValue("ASK_ATLAS_PORT") || "8787";
  return {
    ...process.env,
    ASK_ATLAS_PORT: port,
    ASK_ATLAS_HOST: "127.0.0.1",
    ASK_ATLAS_ENV: "dev",
    ASK_ATLAS_BASE_URL: `http://localhost:${port}`,
    ASK_ATLAS_DEV_AUTH: "1",
    ASK_ATLAS_MOCK_PROVIDER: "0",
    ASK_ATLAS_STORE_BACKEND: "json",
    ASK_ATLAS_ALLOW_JSON_STORE: "1",
    ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT: "1",
    ASK_ATLAS_TRUST_PROXY: "0",
  };
}

function checkPreconditions() {
  if (process.env.VERCEL) {
    fail("Refusing to run local real-provider mode inside a Vercel environment.");
  }
  if (!envValue("QIHOO_API_KEY")) {
    fail("QIHOO_API_KEY is required in the current shell. Keep it in your local shell or secret manager; never commit it.");
  }
}

function main(argv = process.argv.slice(2)) {
  const args = new Set(argv);
  if (args.has("--help") || args.has("-h")) {
    usage();
    return 0;
  }
  checkPreconditions();
  const localEnv = buildLocalEnv();
  const localUrl = localEnv.ASK_ATLAS_BASE_URL;
  assertNoSecretOutput(localUrl);

  console.log("Ask the Atlas local real-provider mode is ready.");
  console.log(`Local URL: ${localUrl}/ask`);
  console.log("Loopback bind: 127.0.0.1");
  console.log("Provider: real 360 API through backend-only QIHOO_API_KEY.");
  console.log("Storage: local JSON. Rate limit: local single-process fallback.");
  console.log("Public launch: not modified.");

  if (args.has("--check")) return 0;

  const child = spawn(process.execPath, ["src/server.mjs"], {
    cwd: APP_ROOT,
    env: localEnv,
    stdio: "inherit",
  });
  child.on("exit", (code, signal) => {
    if (signal) process.kill(process.pid, signal);
    process.exit(code ?? 0);
  });
  return 0;
}

process.exitCode = main();
