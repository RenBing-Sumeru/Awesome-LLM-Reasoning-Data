#!/usr/bin/env node
import fs from "node:fs";
import { pathToFileURL } from "node:url";

function usage() {
  console.log(`Usage:
  node scripts/verify-deployment-target.mjs --deployed-url-file <path>
  node scripts/verify-deployment-target.mjs --deployed-url <https-url>

Requires ASK_ATLAS_BASE_URL to be set to the public backend URL used by
GitHub Pages. The script verifies that the freshly deployed backend and the
configured public backend expose the same Ask the Atlas deployment commit.
`);
}

function argValue(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] || "" : "";
}

export function extractUrlFromText(text) {
  const matches = String(text || "").match(/https:\/\/[^\s"'<>]+/g) || [];
  return matches.at(-1) || "";
}

export function normalizeUrl(raw, label) {
  const value = String(raw || "").trim().replace(/\/+$/, "");
  if (!value) throw new Error(`${label} is required.`);
  let parsed;
  try {
    parsed = new URL(value);
  } catch (_error) {
    throw new Error(`${label} must be a valid URL.`);
  }
  if (parsed.protocol !== "https:") throw new Error(`${label} must use https.`);
  if (parsed.username || parsed.password) throw new Error(`${label} must not contain credentials.`);
  if (parsed.search || parsed.hash) throw new Error(`${label} must not contain query strings or fragments.`);
  return parsed.toString().replace(/\/$/, "");
}

export async function fetchHealth(baseUrl) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(`${baseUrl}/api/health`, { signal: controller.signal });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(`${baseUrl}/api/health returned ${response.status}`);
    if (payload?.service !== "ask-atlas" || payload?.ok !== true) {
      throw new Error(`${baseUrl}/api/health did not return an Ask the Atlas health payload.`);
    }
    return payload;
  } finally {
    clearTimeout(timeout);
  }
}

export async function main() {
  if (process.argv.includes("--help") || process.argv.includes("-h")) {
    usage();
    return 0;
  }
  const file = argValue("--deployed-url-file");
  const direct = argValue("--deployed-url");
  if ((file && direct) || (!file && !direct)) {
    usage();
    return 1;
  }

  const deployedRaw = direct || extractUrlFromText(fs.readFileSync(file, "utf8"));
  const deployedUrl = normalizeUrl(deployedRaw, "deployed URL");
  const configuredUrl = normalizeUrl(process.env.ASK_ATLAS_BASE_URL, "ASK_ATLAS_BASE_URL");
  const deployed = await fetchHealth(deployedUrl);
  const configured = await fetchHealth(configuredUrl);
  const deployedCommit = String(deployed.commit || "");
  const configuredCommit = String(configured.commit || "");

  if (deployedUrl === configuredUrl) {
    console.log(`Deployment target verified: configured backend is ${configuredUrl}.`);
    return 0;
  }
  if (!deployedCommit || !configuredCommit) {
    throw new Error(
      `Cannot prove deployment target alignment: deployed URL is ${deployedUrl}, ` +
      `ASK_ATLAS_BASE_URL is ${configuredUrl}, and one health payload is missing commit metadata.`,
    );
  }
  if (deployedCommit !== configuredCommit) {
    throw new Error(
      `Deployment target mismatch: deployed URL commit ${deployedCommit} but ` +
      `ASK_ATLAS_BASE_URL commit ${configuredCommit}. Update ASK_ATLAS_BASE_URL / Pages config or Vercel aliases.`,
    );
  }
  console.log(`Deployment target verified: ${configuredUrl} serves commit ${configuredCommit}.`);
  return 0;
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  main().then((code) => {
    process.exit(code);
  }).catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
