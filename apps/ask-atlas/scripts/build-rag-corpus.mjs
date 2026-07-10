#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { CONFIG } from "../src/config.mjs";
import { buildPublicCorpusSources } from "../src/rag.mjs";

const SECRET_PATTERN = /QIHOO_API_KEY|GITHUB_CLIENT_SECRET|ASK_ATLAS_SESSION_SECRET|ASK_ATLAS_TOKEN_ENCRYPTION_SECRET|UPSTASH_REDIS_REST_TOKEN|DATABASE_URL|Authorization\s*:\s*Bearer|Bearer\s+[A-Za-z0-9_.-]{12,}|fk[0-9A-Za-z_.-]{12,}/i;

function valueAfter(argv, name, fallback = "") {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] || fallback : fallback;
}

function summarize(sources) {
  const count = (type) => sources.filter((source) => source.type === type).length;
  return {
    sourceCount: sources.length,
    primerCount: count("primer"),
    readmeCount: count("readme"),
    entryCount: count("entry"),
    cardCount: count("card"),
    guideCount: count("guide"),
    paperMapCount: count("paper_map"),
    hasReadme: sources.some((source) => source.path === "README.md"),
    hasPrimer: sources.some((source) => source.path === "docs/companion_paper_primer.md" || source.type === "primer"),
    hasEntries: sources.some((source) => source.path.startsWith("data/_generated/entries.json") || source.id.startsWith("entry:")),
  };
}

function serializableSource(source) {
  return {
    id: source.id,
    title: source.title,
    path: source.path,
    url: source.url,
    type: source.type,
    text: source.text,
  };
}

export function buildRagCorpusPayload() {
  const sources = buildPublicCorpusSources().map(serializableSource);
  const summary = summarize(sources);
  if (!summary.sourceCount || !summary.hasReadme || !summary.hasPrimer || !summary.hasEntries) {
    throw new Error("RAG corpus is incomplete: README, companion-paper primer, and generated entries must all be present.");
  }
  const payload = {
    version: 1,
    generatedAt: new Date().toISOString(),
    generator: "apps/ask-atlas/scripts/build-rag-corpus.mjs",
    summary,
    sources,
  };
  const serialized = JSON.stringify(payload, null, 2);
  if (SECRET_PATTERN.test(serialized)) {
    throw new Error("Refusing to write RAG corpus because it contains secret-like material.");
  }
  return { payload, serialized };
}

function writeAtomically(outputPath, serialized) {
  const outputDir = path.dirname(outputPath);
  fs.mkdirSync(outputDir, { recursive: true });
  const tmp = path.join(outputDir, `.ask-atlas-rag-corpus-${process.pid}.tmp`);
  fs.writeFileSync(tmp, serialized);
  fs.renameSync(tmp, outputPath);
}

async function main() {
  const argv = process.argv.slice(2);
  const outputPath = path.resolve(valueAfter(argv, "--out", CONFIG.ragCorpusPath));
  const checkOnly = new Set(argv).has("--check");
  const { payload, serialized } = buildRagCorpusPayload();
  if (!checkOnly) writeAtomically(outputPath, serialized);
  const action = checkOnly ? "checked" : "built";
  console.log(`Ask Atlas RAG corpus ${action}: ${payload.summary.sourceCount} sources, ${payload.summary.entryCount} entries, ${payload.summary.cardCount} card chunks.`);
  if (!checkOnly) console.log(`Output: ${outputPath}`);
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  main().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
