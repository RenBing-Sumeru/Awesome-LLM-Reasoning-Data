import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(new URL("../scripts/generate-secrets.mjs", import.meta.url));

function run(args = []) {
  return spawnSync(process.execPath, [scriptPath, ...args], {
    encoding: "utf8",
  });
}

test("secret generator emits two independent long base64url values", () => {
  const result = run(["--json"]);
  assert.equal(result.status, 0, result.stderr);
  const payload = JSON.parse(result.stdout);
  assert.match(payload.ASK_ATLAS_SESSION_SECRET, /^[A-Za-z0-9_-]{48,}$/);
  assert.match(payload.ASK_ATLAS_TOKEN_ENCRYPTION_SECRET, /^[A-Za-z0-9_-]{48,}$/);
  assert.notEqual(payload.ASK_ATLAS_SESSION_SECRET, payload.ASK_ATLAS_TOKEN_ENCRYPTION_SECRET);
  assert.notEqual(payload.ASK_ATLAS_SESSION_SECRET, "dev-only-change-me");
  assert.notEqual(payload.ASK_ATLAS_TOKEN_ENCRYPTION_SECRET, "dev-only-change-me");
});

test("secret generator default output guides safe secret storage", () => {
  const result = run();
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Keep these values private/);
  assert.match(result.stdout, /ASK_ATLAS_SESSION_SECRET/);
  assert.match(result.stdout, /ASK_ATLAS_TOKEN_ENCRYPTION_SECRET/);
  assert.match(result.stdout, /gh secret set ASK_ATLAS_SESSION_SECRET --env production/);
  assert.match(result.stdout, /vercel env add ASK_ATLAS_TOKEN_ENCRYPTION_SECRET production/);
  assert.doesNotMatch(result.stdout, /dev-only-change-me/);
});
