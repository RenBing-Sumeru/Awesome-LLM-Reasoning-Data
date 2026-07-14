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
import { ragSmokeReady, storageSmokeReady } from "../scripts/launch-check.mjs";
import { collectLaunchReadiness } from "../src/readiness.mjs";

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

test("deployment smoke requires a ready RAG corpus", () => {
  const ready = {
    rag: {
      ok: true,
      sourceCount: 24,
      primerCount: 3,
      entryCount: 12,
      sampleRetrievalCount: 2,
      requiredPathsPresent: {
        readme: true,
        primer: true,
        entries: true,
      },
    },
  };
  assert.equal(ragSmokeReady(ready), true);
  assert.equal(ragSmokeReady({ ...ready, rag: { ...ready.rag, ok: false } }), false);
  assert.equal(ragSmokeReady({ ...ready, rag: { ...ready.rag, primerCount: 0 } }), false);
  assert.equal(ragSmokeReady({ ...ready, rag: { ...ready.rag, requiredPathsPresent: { ...ready.rag.requiredPathsPresent, entries: false } } }), false);
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
  assert.match(deployJob, /run: npm --prefix apps\/ask-atlas run rag:build/);
  assert.match(deployJob, /Smoke test deployed backend/);
  assert.match(publishJob, /\n    permissions:\n      contents: write\n/);
  assert.match(publishJob, /scripts\/set_ask_backend_url\.py "\$ASK_ATLAS_BASE_URL"/);
  assert.match(publishJob, /scripts\/render_readme\.py/);
  assert.match(publishJob, /git pull --ff-only origin "\$GITHUB_REF_NAME"/);
  assert.match(publishJob, /git diff --quiet -- docs\/assets\/ask-config\.js README\.md README_zh\.md/);
  assert.match(publishJob, /git add docs\/assets\/ask-config\.js README\.md README_zh\.md/);
  assert.match(publishJob, /git commit -m "Activate Ask Atlas backend config"/);
  assert.doesNotMatch(publishJob, /\$\{\{\s*secrets\./);
  assert.match(workflow, /\n  verify-live-pages:/);
  assert.match(workflow, /production:live -- --ci/);
});

test("launch gate workflow is read-only and serialized with production deployments", () => {
  const workflow = fs.readFileSync(`${repoRoot}/.github/workflows/ask-atlas-launch.yml`, "utf8");
  assert.match(workflow, /\npermissions:\n  contents: read\n/);
  assert.match(workflow, /\nconcurrency:\n  group: ask-atlas-production\n  cancel-in-progress: false\n/);
  assert.match(workflow, /Verify public launch surface is synchronized/);
  assert.match(workflow, /scripts\/render_readme\.py --check/);
  assert.match(workflow, /run production:live -- --ci/);
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

test("admin dashboard keeps the operations runway above detailed tables", () => {
  const adminHtml = fs.readFileSync(`${appRoot}/public/admin.html`, "utf8");
  const adminJs = fs.readFileSync(`${appRoot}/public/assets/admin.js`, "utf8");
  const adminCss = fs.readFileSync(`${appRoot}/public/assets/admin.css`, "utf8");

  assert.match(adminHtml, /id="opsRunway"/);
  assert.match(adminHtml, /id="launchWizard"/);
  assert.ok(adminHtml.indexOf('id="opsRunway"') < adminHtml.indexOf("Launch Readiness"));
  assert.ok(adminHtml.indexOf('id="launchWizard"') < adminHtml.indexOf("Launch Readiness"));
  assert.match(adminJs, /function renderOpsRunway/);
  assert.match(adminJs, /function renderLaunchWizard/);
  assert.match(adminJs, /const LAUNCH_PHASES = \[/);
  assert.match(adminJs, /Backend Origin/);
  assert.match(adminJs, /OAuth & Secrets/);
  assert.match(adminJs, /Storage & Rate Limits/);
  assert.match(adminJs, /Growth & Quota/);
  assert.match(adminJs, /Models, RAG & Cost/);
  assert.match(adminJs, /Public Surface/);
  assert.match(adminJs, /base-quota/);
  assert.match(adminJs, /star-daily-quota/);
  assert.match(adminJs, /fork-bonus/);
  assert.match(adminJs, /dev-auth-disabled/);
  assert.match(adminJs, /mock-provider-disabled/);
  assert.match(adminJs, /renderOpsRunway\(\{ overview, readiness, gaps \}\)/);
  assert.match(adminJs, /renderLaunchWizard\(readiness\)/);
  assert.match(adminCss, /\.ops-runway/);
  assert.match(adminCss, /\.ops-rail/);
  assert.match(adminCss, /\.launch-wizard/);
  assert.match(adminCss, /\.wizard-step/);
});

test("launch wizard check ids exist in launch readiness output", () => {
  const adminJs = fs.readFileSync(`${appRoot}/public/assets/admin.js`, "utf8");
  const wizardCheckIds = [
    ...adminJs.matchAll(/checks:\s*\[([^\]]+)\]/g),
  ].flatMap((match) => [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]));
  const readinessIds = new Set(collectLaunchReadiness().checks.map((item) => item.id));
  const missing = wizardCheckIds.filter((id) => !readinessIds.has(id));

  assert.ok(wizardCheckIds.length >= 20, "Launch wizard should cover the major launch-readiness checks");
  assert.deepEqual(missing, [], "Every launch wizard check id must exist in collectLaunchReadiness()");
});
