import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  DEPLOY_ACTIONS_REQUIRED,
  LAUNCH_ACTIONS_REQUIRED,
} from "../scripts/env-manifest.mjs";
import { extractUrlFromText, normalizeUrl } from "../scripts/verify-deployment-target.mjs";
import { storageSmokeReady } from "../scripts/launch-check.mjs";

const appRoot = fileURLToPath(new URL("..", import.meta.url));
const repoRoot = fileURLToPath(new URL("../../..", import.meta.url));
const launchCheckScript = fileURLToPath(new URL("../scripts/launch-check.mjs", import.meta.url));

function extractStepEnvNames(workflow, stepName) {
  const escapedStepName = stepName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = workflow.match(new RegExp(`- name: ${escapedStepName}\\n\\s+env:\\n([\\s\\S]*?)\\n\\s+run:`));
  assert.ok(match, `Could not find env block for ${stepName}`);
  return new Set([...match[1].matchAll(/^          ([A-Z0-9_]+):/gm)].map((item) => item[1]));
}

function assertRequiredNamesPresent(actual, required, label) {
  const missing = required.filter((name) => !actual.has(name));
  assert.deepEqual(missing, [], `${label} is missing required env names`);
}

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

test("Vercel deploy workflow separates production secrets from Pages config publishing", () => {
  const workflow = fs.readFileSync(`${repoRoot}/.github/workflows/deploy-ask-atlas-vercel.yml`, "utf8");
  const deployJob = workflow.match(/\n  deploy:\n([\s\S]*?)\n  publish-pages-config:/)?.[1] || "";
  const publishJob = workflow.match(/\n  publish-pages-config:\n([\s\S]*)$/)?.[1] || "";

  assert.match(workflow, /\npermissions:\n  contents: read\n/);
  assert.match(workflow, /\nconcurrency:\n  group: ask-atlas-production\n  cancel-in-progress: false\n/);
  assert.match(deployJob, /\n    permissions:\n      contents: read\n/);
  assert.doesNotMatch(deployJob, /--token\s+"\$VERCEL_TOKEN"/);
  assert.doesNotMatch(deployJob, /git push|git commit -m "Activate Ask Atlas backend config"/);
  assert.match(publishJob, /\n    permissions:\n      contents: write\n/);
  assert.match(publishJob, /scripts\/set_ask_backend_url\.py "\$ASK_ATLAS_BASE_URL"/);
  assert.match(publishJob, /git pull --ff-only origin "\$GITHUB_REF_NAME"/);
  assert.match(publishJob, /git commit -m "Activate Ask Atlas backend config"/);
  assert.doesNotMatch(publishJob, /\$\{\{\s*secrets\./);
});

test("launch gate workflow is read-only and serialized with production deployments", () => {
  const workflow = fs.readFileSync(`${repoRoot}/.github/workflows/ask-atlas-launch.yml`, "utf8");
  assert.match(workflow, /\npermissions:\n  contents: read\n/);
  assert.match(workflow, /\nconcurrency:\n  group: ask-atlas-production\n  cancel-in-progress: false\n/);
  assert.doesNotMatch(workflow, /contents: write/);
});

test("workflow prerequisite env blocks cover manifest required names", () => {
  const deployWorkflow = fs.readFileSync(`${repoRoot}/.github/workflows/deploy-ask-atlas-vercel.yml`, "utf8");
  const launchWorkflow = fs.readFileSync(`${repoRoot}/.github/workflows/ask-atlas-launch.yml`, "utf8");

  assertRequiredNamesPresent(
    extractStepEnvNames(deployWorkflow, "Check deployment prerequisites"),
    DEPLOY_ACTIONS_REQUIRED,
    "deploy prerequisite step",
  );
  assertRequiredNamesPresent(
    extractStepEnvNames(launchWorkflow, "Check launch environment prerequisites"),
    LAUNCH_ACTIONS_REQUIRED,
    "launch prerequisite step",
  );
});
