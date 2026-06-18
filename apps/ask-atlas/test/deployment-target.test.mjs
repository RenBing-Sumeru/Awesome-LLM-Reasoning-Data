import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { extractUrlFromText, normalizeUrl } from "../scripts/verify-deployment-target.mjs";
import { storageSmokeReady } from "../scripts/launch-check.mjs";

const appRoot = fileURLToPath(new URL("..", import.meta.url));
const launchCheckScript = fileURLToPath(new URL("../scripts/launch-check.mjs", import.meta.url));

test("deployment target verifier extracts the final Vercel deployment URL", () => {
  const output = `
    Vercel CLI 99.0.0
    Inspect: https://vercel.com/example/project/abc123
    Preview: https://ask-atlas-git-main-example.vercel.app
    https://ask-atlas.example.com
  `;
  assert.equal(extractUrlFromText(output), "https://ask-atlas.example.com");
});

test("deployment target verifier normalizes only clean HTTPS base URLs", () => {
  assert.equal(normalizeUrl("https://ask.example.test///", "backend"), "https://ask.example.test");
  assert.throws(() => normalizeUrl("http://ask.example.test", "backend"), /must use https/);
  assert.throws(() => normalizeUrl("https://user:pass@ask.example.test", "backend"), /must not contain credentials/);
  assert.throws(() => normalizeUrl("https://ask.example.test?token=abc", "backend"), /must not contain query/);
  assert.throws(() => normalizeUrl("", "backend"), /is required/);
});

test("deployment smoke accepts only Postgres storage with schema metadata", () => {
  assert.equal(storageSmokeReady({ storage: { ok: true, backend: "postgres", tables: 12, checkedColumns: 100 } }), true);
  assert.equal(storageSmokeReady({ storage: { ok: true, backend: "json", tables: 12, checkedColumns: 100 } }), false);
  assert.equal(storageSmokeReady({ storage: { ok: true, backend: "postgres", tables: 0, checkedColumns: 100 } }), false);
  assert.equal(storageSmokeReady({ storage: { ok: true, backend: "postgres", tables: 12, checkedColumns: 0 } }), false);
  assert.equal(storageSmokeReady({ storage: { ok: false, backend: "postgres", tables: 12, checkedColumns: 100 } }), false);
});

test("launch check redacted mode omits URLs and cap values", () => {
  const result = spawnSync(process.execPath, [launchCheckScript, "--redacted"], {
    cwd: appRoot,
    encoding: "utf8",
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /Ask the Atlas launch readiness/);
  assert.match(result.stdout, /pages-config-backend/);
  assert.doesNotMatch(result.stdout, /https?:\/\/\S+/);
  assert.doesNotMatch(result.stdout, /User token cap|user cost cap|single request cap|global cap|\$0\.|150000/);
});
