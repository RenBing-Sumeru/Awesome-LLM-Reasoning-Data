import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { buildRagCorpusPayload } from "../scripts/build-rag-corpus.mjs";

const appRoot = fileURLToPath(new URL("..", import.meta.url));
const buildScript = fileURLToPath(new URL("../scripts/build-rag-corpus.mjs", import.meta.url));

test("RAG corpus builder includes public atlas sources without runtime-only tokens", () => {
  const { payload, serialized } = buildRagCorpusPayload();
  assert.equal(payload.version, 1);
  assert.ok(payload.summary.sourceCount > 0);
  assert.equal(payload.summary.hasReadme, true);
  assert.equal(payload.summary.hasPrimer, true);
  assert.equal(payload.summary.hasEntries, true);
  assert.ok(payload.summary.entryCount > 0);
  assert.ok(payload.sources.some((source) => source.path === "README.md"));
  assert.ok(payload.sources.some((source) => source.path === "docs/companion_paper_primer.md"));
  assert.ok(payload.sources.some((source) => source.path.startsWith("data/_generated/entries.json")));
  assert.equal(serialized.includes('"tokens"'), false);
  assert.equal(serialized.includes("QIHOO_API_KEY"), false);
});

test("RAG corpus script writes a bundled corpus that backend health can load first", () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "ask-atlas-rag-"));
  const output = path.join(tmpDir, "rag-corpus.json");
  const build = spawnSync(process.execPath, [buildScript, "--out", output], {
    cwd: appRoot,
    encoding: "utf8",
  });
  assert.equal(build.status, 0, build.stderr || build.stdout);
  assert.ok(fs.existsSync(output));

  const probe = spawnSync(process.execPath, [
    "--input-type=module",
    "-e",
    "import { ragHealthSummary } from './src/rag.mjs'; process.stdout.write(JSON.stringify(ragHealthSummary()));",
  ], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      ASK_ATLAS_RAG_CORPUS_PATH: output,
    },
  });
  assert.equal(probe.status, 0, probe.stderr || probe.stdout);
  const summary = JSON.parse(probe.stdout);
  assert.equal(summary.ok, true);
  assert.equal(summary.origin, "bundled-corpus");
  assert.equal(summary.requiredPathsPresent.readme, true);
  assert.equal(summary.requiredPathsPresent.primer, true);
  assert.equal(summary.requiredPathsPresent.entries, true);
});
