#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  GITHUB_PRODUCTION_OPTIONAL_VARIABLES,
  GITHUB_PRODUCTION_REQUIRED_VARIABLES,
  GITHUB_PRODUCTION_SECRETS,
  GITHUB_PRODUCTION_VARIABLES,
  VERCEL_RUNTIME_RECOMMENDED,
  VERCEL_RUNTIME_REQUIRED,
  placeholder,
} from "./env-manifest.mjs";

const REPO = "RenBing-Sumeru/Awesome-LLM-Reasoning-Data";
const ENVIRONMENT = "production";
const APP_ROOT = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const VERCEL_PROJECT_FILE = path.join(APP_ROOT, ".vercel", "project.json");
const VERCEL_RUNTIME_SENSITIVE = new Set([
  "ASK_ATLAS_SESSION_SECRET",
  "ASK_ATLAS_TOKEN_ENCRYPTION_SECRET",
  "GITHUB_CLIENT_SECRET",
  "QIHOO_API_KEY",
  "DATABASE_URL",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
]);

function usage() {
  console.log(`Usage:
  node scripts/configure-production.mjs [--check] [--apply-github] [--apply-vercel] [--print-vercel]

Reads production values from environment variables. By default it performs a
dry run and prints only variable names/status, never values.

Examples:
  npm run production:configure -- --check
  npm run production:configure -- --apply-github
  npm run production:configure -- --apply-vercel
  npm run production:configure -- --print-vercel
`);
}

function args(argv = process.argv.slice(2)) {
  const set = new Set(argv);
  return {
    help: set.has("--help") || set.has("-h"),
    check: set.has("--check") || (!set.has("--apply-github") && !set.has("--apply-vercel") && !set.has("--print-vercel")),
    applyGithub: set.has("--apply-github"),
    applyVercel: set.has("--apply-vercel"),
    printVercel: set.has("--print-vercel"),
  };
}

function value(name) {
  return String(process.env[name] || "").trim();
}

function present(names) {
  return names.map((name) => ({ name, present: Boolean(value(name)) }));
}

function missing(names) {
  return present(names).filter((item) => !item.present).map((item) => item.name);
}

function printInventory(title, names) {
  console.log(title);
  for (const item of present(names)) {
    console.log(`- ${item.name}: ${item.present ? "ready" : "missing"}`);
  }
}

function runGh(args, { input = "" } = {}) {
  const result = spawnSync("gh", args, {
    input,
    encoding: "utf8",
    stdio: ["pipe", "pipe", "pipe"],
  });
  return result;
}

function runVercel(args, { input = "" } = {}) {
  const result = spawnSync("vercel", args, {
    input,
    encoding: "utf8",
    cwd: APP_ROOT,
    stdio: ["pipe", "pipe", "pipe"],
    env: process.env,
  });
  return result;
}

function requireGh() {
  const result = runGh(["auth", "status", "-h", "github.com"]);
  if (result.status !== 0) {
    throw new Error("GitHub CLI is not authenticated. Run gh auth login first.");
  }
}

function requireVercel() {
  const result = runVercel(["--version"]);
  if (result.status !== 0) {
    throw new Error("Vercel CLI is not available. Install it with npm install --global vercel@latest.");
  }
}

function setGithubVariable(name) {
  const result = runGh([
    "variable",
    "set",
    name,
    "--repo",
    REPO,
    "--env",
    ENVIRONMENT,
    "--body",
    value(name),
  ]);
  if (result.status !== 0) {
    throw new Error(`Failed to set GitHub variable ${name}: ${result.stderr || result.stdout}`);
  }
  console.log(`set GitHub variable ${name}`);
}

function setGithubSecret(name) {
  const result = runGh([
    "secret",
    "set",
    name,
    "--repo",
    REPO,
    "--env",
    ENVIRONMENT,
  ], { input: value(name) });
  if (result.status !== 0) {
    throw new Error(`Failed to set GitHub secret ${name}: ${result.stderr || result.stdout}`);
  }
  console.log(`set GitHub secret ${name}`);
}

function ensureVercelProjectLink() {
  fs.mkdirSync(path.dirname(VERCEL_PROJECT_FILE), { recursive: true });
  fs.writeFileSync(VERCEL_PROJECT_FILE, JSON.stringify({
    orgId: value("VERCEL_ORG_ID"),
    projectId: value("VERCEL_PROJECT_ID"),
  }, null, 2));
}

function setVercelRuntimeValue(name) {
  const sensitive = VERCEL_RUNTIME_SENSITIVE.has(name);
  const args = ["env", "add", name, "production", "--force"];
  if (sensitive) args.push("--sensitive");
  const result = runVercel(args, { input: `${value(name)}\n` });
  if (result.status !== 0) {
    throw new Error(`Failed to set Vercel production runtime variable ${name}.`);
  }
  console.log(`set Vercel production runtime variable ${name}${sensitive ? " (sensitive)" : ""}`);
}

function applyGithub() {
  const missingVars = missing(GITHUB_PRODUCTION_REQUIRED_VARIABLES);
  const missingSecrets = missing(GITHUB_PRODUCTION_SECRETS);
  if (missingVars.length || missingSecrets.length) {
    console.error("Missing values; refusing to partially write GitHub production environment.");
    if (missingVars.length) console.error(`Missing variables: ${missingVars.join(", ")}`);
    if (missingSecrets.length) console.error(`Missing secrets: ${missingSecrets.join(", ")}`);
    return 1;
  }
  requireGh();
  for (const name of GITHUB_PRODUCTION_REQUIRED_VARIABLES) setGithubVariable(name);
  for (const name of GITHUB_PRODUCTION_OPTIONAL_VARIABLES) {
    if (value(name)) setGithubVariable(name);
  }
  for (const name of GITHUB_PRODUCTION_SECRETS) setGithubSecret(name);
  console.log("GitHub production environment names were updated without printing secret values.");
  return 0;
}

function applyVercel() {
  const required = [
    "VERCEL_TOKEN",
    "VERCEL_ORG_ID",
    "VERCEL_PROJECT_ID",
    ...VERCEL_RUNTIME_REQUIRED,
  ];
  const missingRequired = missing(required);
  if (missingRequired.length) {
    console.error("Missing values; refusing to partially write Vercel production runtime.");
    console.error(`Missing variables: ${missingRequired.join(", ")}`);
    return 1;
  }
  requireVercel();
  ensureVercelProjectLink();
  for (const name of VERCEL_RUNTIME_REQUIRED) setVercelRuntimeValue(name);
  for (const name of VERCEL_RUNTIME_RECOMMENDED) {
    if (value(name)) setVercelRuntimeValue(name);
  }
  console.log("Vercel production runtime variables were updated without printing values.");
  return 0;
}

function printVercelCommands() {
  console.log("# Vercel production runtime values must be set in the Vercel project.");
  console.log("# Run from apps/ask-atlas after vercel link, or use the Vercel dashboard.");
  for (const name of [...VERCEL_RUNTIME_REQUIRED, ...VERCEL_RUNTIME_RECOMMENDED]) {
    const status = value(name) ? "value is present in this shell" : `suggested placeholder: ${placeholder(name)}`;
    console.log(`# ${name}: ${status}`);
    console.log(`vercel env add ${name} production`);
  }
}

export function buildStatus() {
  return {
    githubVariables: present(GITHUB_PRODUCTION_VARIABLES),
    githubSecrets: present(GITHUB_PRODUCTION_SECRETS),
    vercelRequired: present(VERCEL_RUNTIME_REQUIRED),
    vercelRecommended: present(VERCEL_RUNTIME_RECOMMENDED),
  };
}

function main() {
  const options = args();
  if (options.help) {
    usage();
    return 0;
  }
  printInventory("GitHub production variables", GITHUB_PRODUCTION_VARIABLES);
  printInventory("GitHub production secrets", GITHUB_PRODUCTION_SECRETS);
  printInventory("Vercel runtime required names", VERCEL_RUNTIME_REQUIRED);

  if (options.printVercel) {
    console.log("");
    printVercelCommands();
  }

  if (options.applyGithub) return applyGithub();
  if (options.applyVercel) return applyVercel();
  const missingAll = [
    ...missing(GITHUB_PRODUCTION_REQUIRED_VARIABLES),
    ...missing(GITHUB_PRODUCTION_SECRETS),
    ...missing(VERCEL_RUNTIME_REQUIRED),
  ];
  return options.check && missingAll.length ? 1 : 0;
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  try {
    process.exit(main());
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
