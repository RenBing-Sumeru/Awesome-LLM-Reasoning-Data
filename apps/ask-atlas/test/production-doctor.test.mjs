import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const appRoot = fileURLToPath(new URL("..", import.meta.url));
const scriptPath = fileURLToPath(new URL("../scripts/production-doctor.mjs", import.meta.url));

function run(args = []) {
  return spawnSync(process.execPath, [scriptPath, ...args], {
    cwd: appRoot,
    encoding: "utf8",
  });
}

test("production doctor prints safe launch blockers without secret values", () => {
  const result = run();
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Ask the Atlas production doctor/);
  assert.match(result.stdout, /Runtime launch findings:/);
  assert.match(result.stdout, /Platform inventories:/);
  assert.match(result.stdout, /QIHOO_API_KEY/);
  assert.doesNotMatch(result.stdout, /Bearer\s+/);
  assert.doesNotMatch(result.stdout, /fk[0-9A-Za-z_.-]{12,}/);
  assert.doesNotMatch(result.stdout, /https?:\/\/\S+/);
  assert.doesNotMatch(result.stdout, /User token cap|user cost cap|single request cap|global cap/i);
});

test("production doctor consumes inventory files by name only", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ask-atlas-doctor-"));
  const varsFile = path.join(tmp, "vars.txt");
  const secretsFile = path.join(tmp, "secrets.txt");
  const vercelFile = path.join(tmp, "vercel.txt");
  fs.writeFileSync(varsFile, [
    "ASK_ATLAS_BASE_URL\thttps://ask-secret-host.example",
    "ASK_ATLAS_PAGES_BASE_URL\thttps://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data",
    "GITHUB_CLIENT_ID\tclient-id-sentinel",
    "ASK_ATLAS_ADMIN_GITHUB_IDS\t124780470",
  ].join("\n"));
  fs.writeFileSync(secretsFile, [
    "ASK_ATLAS_SESSION_SECRET\t2026-06-18T00:00:00Z",
    "QIHOO_API_KEY\t2026-06-18T00:00:00Z",
  ].join("\n"));
  fs.writeFileSync(vercelFile, [
    "ASK_ATLAS_BASE_URL production",
    "QIHOO_API_KEY production",
    "DATABASE_URL production",
    "UPSTASH_REDIS_REST_TOKEN production",
  ].join("\n"));

  const result = run([
    "--json",
    "--github-vars-file", varsFile,
    "--github-secrets-file", secretsFile,
    "--vercel-env-file", vercelFile,
  ]);
  assert.equal(result.status, 0, result.stderr);
  assert.doesNotMatch(result.stdout, /ask-secret-host|client-id-sentinel/);
  const report = JSON.parse(result.stdout);
  assert.equal(report.inventories.length, 3);
  assert.ok(report.findings.every((item) => item.name && item.next && !item.detail));
  assert.ok(report.inventories[0].missing.includes("ASK_ATLAS_MODEL_RATES_JSON"));
  assert.equal(report.inventories[0].missing.includes("ASK_ATLAS_PRIMER_TEXT_PATH"), false);
  assert.ok(report.inventories[0].recommendedMissing.includes("ASK_ATLAS_PRIMER_TEXT_PATH"));
  assert.ok(report.inventories[1].missing.includes("DATABASE_URL"));
  assert.ok(report.inventories[2].missing.includes("GITHUB_CLIENT_ID"));
});

test("production doctor json output omits runtime values", () => {
  const result = run(["--json"]);
  assert.equal(result.status, 0, result.stderr);
  assert.doesNotMatch(result.stdout, /renbing-sumeru\.github\.io|localhost|client-id-sentinel/);
  const report = JSON.parse(result.stdout);
  assert.equal(report.publicAskUrl, undefined);
  assert.equal(report.blockers, undefined);
  assert.equal(report.warnings, undefined);
  assert.ok(report.findings.some((item) => item.name === "QIHOO_API_KEY"));
});

test("production doctor strict mode fails when launch blockers remain", () => {
  const result = run(["--strict"]);
  assert.equal(result.status, 1);
  assert.match(result.stdout, /blocker/);
});
