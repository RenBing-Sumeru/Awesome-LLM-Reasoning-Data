import assert from "node:assert/strict";
import fs from "node:fs";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const appRoot = fileURLToPath(new URL("..", import.meta.url));

function runLocalReal(args = [], env = {}) {
  return spawnSync(process.execPath, ["scripts/start-local-real.mjs", ...args], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      QIHOO_API_KEY: "",
      VERCEL: "",
      ...env,
    },
  });
}

test("local real-provider launcher refuses to run without a backend-only provider key", () => {
  const result = runLocalReal(["--check"]);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /QIHOO_API_KEY is required/);
  assert.doesNotMatch(result.stdout + result.stderr, /fk[0-9A-Za-z_.-]{8,}|Bearer\s+[A-Za-z0-9_.-]+/);
});

test("local real-provider launcher check mode prints only safe localhost status", () => {
  const result = runLocalReal(["--check"], {
    QIHOO_API_KEY: "test-provider-key-only",
    ASK_ATLAS_BASE_URL: "https://should-not-be-used.example",
  });
  assert.equal(result.status, 0);
  assert.match(result.stdout, /local real-provider mode is ready/);
  assert.match(result.stdout, /http:\/\/localhost:8787\/ask/);
  assert.match(result.stdout, /Loopback bind: 127\.0\.0\.1/);
  assert.match(result.stdout, /Public launch: not modified/);
  assert.doesNotMatch(result.stdout + result.stderr, /test-provider-key-only|should-not-be-used/);
});

test("local real-provider launcher refuses Vercel environments", () => {
  const result = runLocalReal(["--check"], {
    QIHOO_API_KEY: "test-provider-key-only",
    VERCEL: "1",
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Refusing to run local real-provider mode inside a Vercel environment/);
  assert.doesNotMatch(result.stdout + result.stderr, /test-provider-key-only/);
});

test("local real-provider launcher forces loopback host before starting the server", () => {
  const script = fs.readFileSync(`${appRoot}/scripts/start-local-real.mjs`, "utf8");
  const serverSource = fs.readFileSync(`${appRoot}/src/server.mjs`, "utf8");

  assert.match(script, /ASK_ATLAS_HOST:\s*"127\.0\.0\.1"/);
  assert.match(serverSource, /server\.listen\(CONFIG\.port,\s*CONFIG\.host,\s*onListen\)/);
  assert.match(serverSource, /Bound host/);
});

test("package script exposes private local real-provider smoke without embedding secrets", () => {
  const packageJson = JSON.parse(fs.readFileSync(`${appRoot}/package.json`, "utf8"));
  const script = packageJson.scripts["dev:real"];
  assert.equal(script, "node scripts/start-local-real.mjs");
  assert.doesNotMatch(JSON.stringify(packageJson), /fk[0-9A-Za-z_.-]{8,}|Bearer\s+[A-Za-z0-9_.-]+/);
});
