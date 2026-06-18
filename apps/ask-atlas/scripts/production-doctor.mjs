#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { pathToFileURL } from "node:url";
import { collectLaunchReadiness } from "../src/readiness.mjs";
import {
  GITHUB_PRODUCTION_OPTIONAL_VARIABLES,
  GITHUB_PRODUCTION_REQUIRED_VARIABLES,
  GITHUB_PRODUCTION_SECRETS,
  VERCEL_RUNTIME_RECOMMENDED,
  VERCEL_RUNTIME_REQUIRED,
} from "./env-manifest.mjs";

const SAFE_FINDINGS = {
  "pages-config-backend": {
    name: "ASK_ATLAS_BACKEND_URL",
    next: "Set the public Pages backend URL to a clean HTTPS backend origin.",
  },
  "pages-config-no-secrets": {
    name: "docs/assets/ask-config.js",
    next: "Keep the public config limited to the Pages marker and clean backend origin.",
  },
  "pages-backend-match": {
    name: "ASK_ATLAS_BACKEND_URL,ASK_ATLAS_BASE_URL",
    next: "Point the public Pages config and backend runtime config at the same origin.",
  },
  "base-url": {
    name: "ASK_ATLAS_BASE_URL",
    next: "Set the deployed backend origin as an HTTPS URL.",
  },
  "pages-base-url": {
    name: "ASK_ATLAS_PAGES_BASE_URL",
    next: "Set the canonical GitHub Pages project URL.",
  },
  "cors-pages": {
    name: "ASK_ATLAS_PAGES_BASE_URL",
    next: "Set the Pages URL so credentialed CORS is scoped to the project site.",
  },
  "dev-auth-disabled": {
    name: "ASK_ATLAS_DEV_AUTH",
    next: "Disable development authentication in public deployments.",
  },
  "mock-provider-disabled": {
    name: "ASK_ATLAS_MOCK_PROVIDER",
    next: "Disable mock provider responses in public deployments.",
  },
  "provider-secret": {
    name: "QIHOO_API_KEY",
    next: "Store a rotated provider key only as a backend secret.",
  },
  "github-oauth": {
    name: "GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET",
    next: "Create the GitHub OAuth app and configure its client id and secret.",
  },
  "session-secret": {
    name: "ASK_ATLAS_SESSION_SECRET",
    next: "Set a generated random session signing secret.",
  },
  "token-secret": {
    name: "ASK_ATLAS_TOKEN_ENCRYPTION_SECRET",
    next: "Set a different generated random token encryption secret.",
  },
  "admin-ids": {
    name: "ASK_ATLAS_ADMIN_GITHUB_IDS",
    next: "Set the owner numeric GitHub id for admin-only data access.",
  },
  "postgres-store": {
    name: "ASK_ATLAS_STORE_BACKEND,DATABASE_URL",
    next: "Use Postgres storage for public users and admin analytics.",
  },
  "postgres-reporting-schema": {
    name: "apps/ask-atlas/db/schema.sql",
    next: "Keep the normalized reporting schema available for migrations.",
  },
  "json-store-fallback": {
    name: "ASK_ATLAS_ALLOW_JSON_STORE",
    next: "Keep JSON storage fallback disabled for public production.",
    publicProductionBlock: true,
  },
  "redis-rate-limit": {
    name: "UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN",
    next: "Configure distributed Redis rate limiting for public traffic.",
  },
  "local-rate-limit-disabled": {
    name: "ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT",
    next: "Keep the local in-memory limiter disabled for public production.",
    publicProductionBlock: true,
  },
  "cost-caps": {
    name: "ASK_ATLAS_*_CAP*",
    next: "Set positive daily, request, token, and global cost caps.",
  },
  "base-quota": {
    name: "ASK_ATLAS_BASE_DAILY_REQUESTS",
    next: "Keep the no-star quota aligned with the product policy.",
  },
  "star-bonus": {
    name: "ASK_ATLAS_STAR_BONUS_CREDITS",
    next: "Keep the star reward aligned with the product policy.",
  },
  "fork-bonus": {
    name: "ASK_ATLAS_FORK_BONUS_CREDITS",
    next: "Keep the fork reward aligned with the product policy.",
  },
  "required-models": {
    name: "ASK_ATLAS_ALLOWED_MODELS",
    next: "Enable both required model routes.",
  },
  "model-rates": {
    name: "ASK_ATLAS_MODEL_RATES_JSON",
    next: "Set positive numeric input and output prices for every enabled model.",
  },
  "model-rate-required": {
    name: "ASK_ATLAS_REQUIRE_MODEL_RATES",
    next: "Require model pricing so cost accounting cannot be bypassed.",
    publicProductionBlock: true,
  },
  "primer-seed": {
    name: "docs/companion_paper_primer.md",
    next: "Bundle the public companion-paper grounding seed.",
  },
  "primer-full-text": {
    name: "ASK_ATLAS_PRIMER_TEXT_PATH",
    next: "Optionally configure backend-only companion-paper full text for higher recall.",
  },
};

function usage() {
  console.log(`Usage:
  node scripts/production-doctor.mjs [--strict] [--json] [--jsonl] [--profile public-production]
  node scripts/production-doctor.mjs --github-repo owner/repo
  node scripts/production-doctor.mjs --github-vars-file <path> --github-secrets-file <path> --vercel-env-file <path>

The doctor reports production launch readiness without printing environment values.
Inventory files may be raw output from:
  gh variable list --env production
  gh secret list --env production
  vercel env ls production
`);
}

function parseArgs(argv = process.argv.slice(2)) {
  const args = new Set(argv);
  const value = (name, fallback = "") => {
    const index = argv.indexOf(name);
    return index >= 0 ? argv[index + 1] || fallback : fallback;
  };
  return {
    help: args.has("--help") || args.has("-h"),
    strict: args.has("--strict"),
    json: args.has("--json"),
    jsonl: args.has("--jsonl"),
    profile: value("--profile", "public-production"),
    githubRepo: value("--github-repo"),
    githubVarsFile: value("--github-vars-file"),
    githubSecretsFile: value("--github-secrets-file"),
    vercelEnvFile: value("--vercel-env-file"),
  };
}

function readOptionalFile(pathname) {
  if (!pathname) return "";
  return fs.readFileSync(pathname, "utf8");
}

function safeGithubRepo(value) {
  const repo = String(value || "").trim();
  return /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo) ? repo : "";
}

function ghInventory(repo, kind) {
  const safeRepo = safeGithubRepo(repo);
  if (!safeRepo) return "";
  const subcommand = kind === "secrets" ? "secret" : "variable";
  const result = spawnSync("gh", [subcommand, "list", "--env", "production", "--repo", safeRepo], {
    encoding: "utf8",
  });
  if (result.status !== 0) return "";
  return result.stdout || "";
}

function namesFromText(text) {
  const names = new Set();
  for (const match of String(text || "").matchAll(/\b[A-Z][A-Z0-9_]{2,}\b/g)) {
    names.add(match[0]);
  }
  return names;
}

function inventory(title, required, text, recommended = []) {
  const present = namesFromText(text);
  if (!text) {
    return {
      title,
      provided: false,
      missing: [...required],
      recommendedMissing: [...recommended],
      presentCount: 0,
      requiredCount: required.length,
    };
  }
  return {
    title,
    provided: true,
    missing: required.filter((name) => !present.has(name)),
    recommendedMissing: recommended.filter((name) => !present.has(name)),
    presentCount: [...present].filter((name) => required.includes(name) || recommended.includes(name)).length,
    requiredCount: required.length,
  };
}

function publicProductionStatus(item, profile) {
  const safe = SAFE_FINDINGS[item.id] || {};
  if (profile === "public-production" && safe.publicProductionBlock && item.status !== "pass") {
    return "block";
  }
  return item.status;
}

function findingFromCheck(item, profile) {
  const safe = SAFE_FINDINGS[item.id] || {};
  return {
    group: item.group,
    id: item.id,
    name: safe.name || item.id,
    status: publicProductionStatus(item, profile),
    next: safe.next || item.action || "Review this check before public launch.",
  };
}

function summarizeFindings(findings) {
  const counts = { pass: 0, warn: 0, block: 0 };
  for (const item of findings) counts[item.status] = (counts[item.status] || 0) + 1;
  return {
    counts,
    status: counts.block ? "blocked" : counts.warn ? "warning" : "ready",
  };
}

export function buildReport({
  githubRepo = "",
  githubVarsFile = "",
  githubSecretsFile = "",
  vercelEnvFile = "",
  profile = "public-production",
} = {}) {
  const readiness = collectLaunchReadiness();
  const findings = (readiness.checks || [])
    .map((item) => findingFromCheck(item, profile))
    .filter((item) => item.status !== "pass");
  const summary = summarizeFindings(findings);
  const githubVarsText = githubVarsFile ? readOptionalFile(githubVarsFile) : ghInventory(githubRepo, "variables");
  const githubSecretsText = githubSecretsFile ? readOptionalFile(githubSecretsFile) : ghInventory(githubRepo, "secrets");
  const inventories = [
    inventory("GitHub production variables", GITHUB_PRODUCTION_REQUIRED_VARIABLES, githubVarsText, GITHUB_PRODUCTION_OPTIONAL_VARIABLES),
    inventory("GitHub production secrets", GITHUB_PRODUCTION_SECRETS, githubSecretsText),
    inventory("Vercel production runtime", VERCEL_RUNTIME_REQUIRED, readOptionalFile(vercelEnvFile), VERCEL_RUNTIME_RECOMMENDED),
  ];
  return {
    generatedAt: new Date().toISOString(),
    profile,
    status: summary.status,
    counts: {
      pass: (readiness.checks || []).length - findings.length,
      warn: summary.counts.warn || 0,
      block: summary.counts.block || 0,
    },
    findings,
    inventories,
    nextSteps: [
      "Deploy or confirm a stable HTTPS backend origin.",
      "Create the GitHub OAuth app and configure the backend callback URL.",
      "Create Postgres and Upstash Redis resources, then set their backend-only secrets.",
      "Rotate any provider key that has appeared outside a secret manager before storing it.",
      "Set the public Pages backend URL only after the backend origin is known.",
      "Run the strict doctor and deployed smoke check before publishing the Pages URL.",
    ],
  };
}

function printText(report) {
  console.log(`Ask the Atlas production doctor: ${report.status}`);
  console.log(`Generated: ${report.generatedAt}`);
  console.log(`Profile: ${report.profile}`);
  console.log(`Checks: ${report.counts.pass || 0} pass, ${report.counts.warn || 0} warning, ${report.counts.block || 0} blocker`);
  console.log("");

  if (report.findings.length) {
    console.log("Runtime launch findings:");
    console.log("These checks use the current process environment plus the public Pages config.");
    console.log("If an inventory below shows a name is already present, the backend still needs that value injected into its runtime before launch.");
    for (const item of report.findings) {
      console.log(`- [${item.status.toUpperCase()}] ${item.name}`);
      console.log(`  Next: ${item.next}`);
    }
    console.log("");
  }

  console.log("Platform inventories:");
  for (const item of report.inventories) {
    const state = item.provided ? `${item.presentCount}/${item.requiredCount} required/recommended names seen` : "not provided";
    console.log(`- ${item.title}: ${state}`);
    if (item.missing.length) console.log(`  Missing required names: ${item.missing.join(", ")}`);
    if (item.recommendedMissing.length) console.log(`  Missing recommended names: ${item.recommendedMissing.join(", ")}`);
  }
  console.log("");

  console.log("Next steps:");
  report.nextSteps.forEach((step, index) => console.log(`${index + 1}. ${step}`));
}

function printJsonl(report) {
  console.log(JSON.stringify({ type: "summary", status: report.status, profile: report.profile, counts: report.counts }));
  for (const item of report.findings) console.log(JSON.stringify({ type: "finding", ...item }));
  for (const item of report.inventories) console.log(JSON.stringify({ type: "inventory", ...item }));
}

function main() {
  const args = parseArgs();
  if (args.help) {
    usage();
    return 0;
  }

  const report = buildReport(args);
  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else if (args.jsonl) {
    printJsonl(report);
  } else {
    printText(report);
  }

  if (args.strict) {
    const missingInventory = report.inventories.some((item) => item.provided && item.missing.length);
    return report.findings.some((item) => item.status === "block") || missingInventory ? 1 : 0;
  }
  return 0;
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  process.exit(main());
}
