import assert from "node:assert/strict";
import fs from "node:fs";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("../../..", import.meta.url));

const assets = [
  "apps/ask-atlas/public/assets/ask.js",
  "apps/ask-atlas/public/assets/ask-i18n.js",
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
  for (const name of ["ask.js", "ask-i18n.js", "ask.css"]) {
    const result = spawnSync("cmp", ["-s", `apps/ask-atlas/public/assets/${name}`, `docs/assets/${name}`], {
      cwd: repoRoot,
      encoding: "utf8",
    });
    assert.equal(result.status, 0, `docs/assets/${name} must match apps/ask-atlas/public/assets/${name}`);
  }
});

test("pure Ask page keeps the question workflow and bilingual toggle", () => {
  const askHtml = fs.readFileSync(`${repoRoot}/apps/ask-atlas/public/ask.html`, "utf8");
  const askJs = fs.readFileSync(`${repoRoot}/apps/ask-atlas/public/assets/ask.js`, "utf8");
  const askI18n = fs.readFileSync(`${repoRoot}/apps/ask-atlas/public/assets/ask-i18n.js`, "utf8");

  assert.match(askHtml, /id="askForm"/);
  assert.match(askHtml, /id="question"/);
  assert.match(askHtml, /id="modelSelect"/);
  assert.match(askHtml, /id="modeList"/);
  assert.match(askHtml, /id="suggestions"/);
  assert.match(askHtml, /id="historyList"/);
  assert.match(askHtml, /id="langToggle"/);
  assert.match(askHtml, /src="\/assets\/ask-i18n\.js\?v=[^"]+"/);
  assert.match(askHtml, /src="\/assets\/ask\.js\?v=[^"]+" type="module"/);

  assert.match(askJs, /Companion paper evidence/);
  assert.match(askJs, /Repository atlas evidence/);
  assert.match(askJs, /Model background knowledge/);
  assert.match(askJs, /does not call a model, spend quota, or log your question/);
  assert.match(askJs, /不调用模型、不消耗额度、不记录你的问题/);
  assert.match(askJs, /ask_atlas_history/);
  assert.match(askJs, /ask-atlas-lang/);

  assert.match(askI18n, /"hero\.title": "问答助手"/);
  assert.match(askI18n, /ask_atlas_lang/);
});

test("Ask page no longer ships backend-only UI before launch", () => {
  const askHtml = fs.readFileSync(`${repoRoot}/apps/ask-atlas/public/ask.html`, "utf8");
  assert.doesNotMatch(askHtml, /id="loginButton"/);
  assert.doesNotMatch(askHtml, /id="quotaNumber"/);
  assert.doesNotMatch(askHtml, /id="privacyOptOut"/);
  assert.doesNotMatch(askHtml, /id="launchMatrix"/);
  assert.doesNotMatch(askHtml, /id="adminSetupBanner"/);
});

test("admin console keeps its own stylesheet", () => {
  const adminHtml = fs.readFileSync(`${repoRoot}/apps/ask-atlas/public/admin.html`, "utf8");
  assert.match(adminHtml, /href="\/assets\/admin\.css"/);
  assert.ok(fs.existsSync(`${repoRoot}/apps/ask-atlas/public/assets/admin.css`));
});
