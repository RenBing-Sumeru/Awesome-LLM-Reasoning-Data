import assert from "node:assert/strict";
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
