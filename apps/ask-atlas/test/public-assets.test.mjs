import assert from "node:assert/strict";
import fs from "node:fs";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("../../..", import.meta.url));

const assets = [
  "apps/ask-atlas/public/assets/ask.js",
  "apps/ask-atlas/public/assets/admin.js",
  "docs/assets/ask.js",
  "docs/assets/ask-config.js",
];

test("browser-visible JavaScript assets parse cleanly", () => {
  for (const asset of assets) {
    const result = spawnSync(process.execPath, ["--check", asset], {
      cwd: repoRoot,
      encoding: "utf8",
    });
    assert.equal(
      result.status,
      0,
      `${asset} must parse cleanly.\nstdout:\n${result.stdout}\nstderr:\n${result.stderr}`,
    );
  }
});

test("generated Ask frontend JavaScript stays synchronized with source asset", () => {
  const source = spawnSync("cmp", ["-s", "apps/ask-atlas/public/assets/ask.js", "docs/assets/ask.js"], {
    cwd: repoRoot,
    encoding: "utf8",
  });
  assert.equal(source.status, 0, "docs/assets/ask.js must match apps/ask-atlas/public/assets/ask.js");
});

test("launch-pending preview keeps the public Ask page useful before backend activation", () => {
  const askHtml = fs.readFileSync(`${repoRoot}/apps/ask-atlas/public/ask.html`, "utf8");
  const askJs = fs.readFileSync(`${repoRoot}/apps/ask-atlas/public/assets/ask.js`, "utf8");

  assert.match(askHtml, /id="launchMatrix"/);
  assert.match(askHtml, /id="adminSetupBanner"/);
  assert.match(askHtml, /id="askForm"/);
  assert.match(askHtml, /id="privacyOptOut"/);

  assert.match(askJs, /els\.askButton\.textContent = "Preview answer"/);
  assert.match(askJs, /Demo preview · no model call/);
  assert.match(askJs, /function renderAdminSetupBanner/);
  assert.match(askJs, /login-required/);
  assert.match(askJs, /Deployment guide/);
  assert.match(askJs, /A backend URL is configured for this Pages frontend/);
  assert.doesNotMatch(askJs, /The secure backend is configured/);
  assert.match(askJs, /return_to=\$\{encodeURIComponent\("\/admin"\)\}/);
  assert.match(askJs, /Companion paper evidence/);
  assert.match(askJs, /Repository atlas evidence/);
  assert.match(askJs, /Model background knowledge/);
  assert.match(askJs, /不会调用模型、不会消耗 token，也不会记录你的问题/);
  assert.match(askJs, /this preview does not call a model, spend tokens, or log your question/i);
  assert.doesNotMatch(askJs, /evidenceMode: "limited atlas \+ model"/);
});
