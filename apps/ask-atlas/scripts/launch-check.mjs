#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { collectLaunchReadiness } from "../src/readiness.mjs";

export function storageSmokeReady(payload) {
  return (
    payload?.storage?.ok === true &&
    payload?.storage?.backend === "postgres" &&
    Number(payload?.storage?.tables || 0) >= 1 &&
    Number(payload?.storage?.checkedColumns || 0) >= 1
  );
}

export function ragSmokeReady(payload) {
  return (
    payload?.rag?.ok === true &&
    Number(payload?.rag?.sourceCount || 0) >= 1 &&
    Number(payload?.rag?.primerCount || 0) >= 1 &&
    Number(payload?.rag?.entryCount || 0) >= 1 &&
    Number(payload?.rag?.sampleRetrievalCount || 0) >= 1 &&
    payload?.rag?.requiredPathsPresent?.readme === true &&
    payload?.rag?.requiredPathsPresent?.primer === true &&
    payload?.rag?.requiredPathsPresent?.entries === true
  );
}

async function main() {
  const flags = new Set(process.argv.slice(2));
  const allowWarnings = flags.has("--allow-warnings");
  const smoke = flags.has("--smoke");
  const redacted = flags.has("--redacted") || flags.has("--ci");
  const readiness = collectLaunchReadiness();
  const counts = readiness.counts || {};

  console.log(`Ask the Atlas launch readiness: ${readiness.status}`);
  console.log(`Generated: ${readiness.generatedAt}`);
  if (!redacted) console.log(`Public Ask URL: ${readiness.publicAskUrl}`);
  console.log(`Checks: ${counts.pass || 0} pass, ${counts.warn || 0} warning, ${counts.block || 0} blocker`);
  console.log("");

  if (!redacted && readiness.nextActions?.length) {
    console.log("Next actions:");
    readiness.nextActions.forEach((action, index) => {
      console.log(`${index + 1}. ${action}`);
    });
    console.log("");
  }

  for (const group of [...new Set((readiness.checks || []).map((item) => item.group))]) {
    console.log(group);
    for (const item of readiness.checks.filter((check) => check.group === group)) {
      const icon = item.status === "pass" ? "OK" : item.status === "warn" ? "WARN" : "BLOCK";
      if (redacted) {
        console.log(`  [${icon}] ${item.id}: ${item.label}`);
      } else {
        console.log(`  [${icon}] ${item.label}: ${item.detail}`);
      }
    }
    console.log("");
  }

  if (smoke) {
    const backend = readiness.safeConfig?.backendBaseUrl || "";
    if (!backend.startsWith("https://")) {
      console.log("Smoke check skipped: backendBaseUrl is not a public HTTPS URL.");
    } else {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        const healthUrl = `${backend}/api/health?db=1&rag=1`;
        const response = await fetch(healthUrl, { signal: controller.signal });
        clearTimeout(timeout);
        const payload = await response.json().catch(() => ({}));
        console.log(`Smoke check /api/health?db=1&rag=1: ${response.status}`);
        if (!response.ok || !storageSmokeReady(payload) || !ragSmokeReady(payload)) {
          console.error("Smoke check failed: deployed runtime must use Postgres with verified schema metadata and a ready RAG corpus.");
          process.exit(1);
        }
      } catch (error) {
        console.error(`Smoke check /api/health?db=1&rag=1 failed: ${error.message}`);
        process.exit(1);
      }
    }
  }

  if (readiness.status === "ready") process.exit(0);
  if (readiness.status === "warning" && allowWarnings) process.exit(0);
  process.exit(1);
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  main().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
