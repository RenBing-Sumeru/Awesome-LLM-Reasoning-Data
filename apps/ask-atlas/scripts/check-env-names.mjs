#!/usr/bin/env node
import fs from "node:fs";
import {
  DEPLOY_ACTIONS_REQUIRED,
  GITHUB_PRODUCTION_SECRETS,
  GITHUB_PRODUCTION_VARIABLES,
  LAUNCH_ACTIONS_REQUIRED,
  VERCEL_RUNTIME_RECOMMENDED,
  VERCEL_RUNTIME_REQUIRED,
  placeholder,
} from "./env-manifest.mjs";

function usage() {
  console.log(`Usage:
  node scripts/check-env-names.mjs --github-actions-launch
  node scripts/check-env-names.mjs --github-actions-deploy
  node scripts/check-env-names.mjs --vercel-list <path>
  node scripts/check-env-names.mjs --print launch-actions|deploy-actions|vercel-runtime|github-vars|github-secrets|github-commands|vercel-commands
`);
}

function missingFromProcess(names) {
  return names.filter((name) => !String(process.env[name] || "").trim());
}

function missingFromText(names, text) {
  return names.filter((name) => {
    const pattern = new RegExp(`(^|[^A-Za-z0-9_])${name}([^A-Za-z0-9_]|$)`);
    return !pattern.test(text);
  });
}

function printList(title, names) {
  console.log(title);
  for (const name of names) console.log(`- ${name}`);
}

function printGithubCommands() {
  console.log("# GitHub production environment variables");
  for (const name of GITHUB_PRODUCTION_VARIABLES) {
    console.log(`gh variable set ${name} --env production --body '${placeholder(name)}'`);
  }
  console.log("");
  console.log("# GitHub production environment secrets");
  console.log("# Export each value in your shell first; keep shell tracing/debug echo disabled.");
  for (const name of GITHUB_PRODUCTION_SECRETS) {
    console.log(`: "\${${name}:?export ${name} first}"`);
    console.log(`printf '%s' "$${name}" | gh secret set ${name} --env production`);
  }
}

function printVercelCommands() {
  console.log("# Run from apps/ask-atlas after vercel link, or after .vercel/project.json is present.");
  console.log("# Vercel will prompt for each value; do not paste secrets into committed files.");
  for (const name of [...VERCEL_RUNTIME_REQUIRED, ...VERCEL_RUNTIME_RECOMMENDED]) {
    console.log(`vercel env add ${name} production`);
  }
}

function failMissing(title, missing) {
  if (!missing.length) {
    console.log(`${title}: all required names are present.`);
    return;
  }
  console.error(`${title}: missing required names:`);
  for (const name of missing) console.error(`- ${name}`);
  process.exit(1);
}

const args = process.argv.slice(2);
if (!args.length || args.includes("--help") || args.includes("-h")) {
  usage();
  process.exit(args.length ? 0 : 1);
}

if (args[0] === "--print") {
  const target = args[1];
  if (target === "launch-actions") printList("Launch GitHub environment:", LAUNCH_ACTIONS_REQUIRED);
  else if (target === "deploy-actions") printList("Deploy GitHub environment:", DEPLOY_ACTIONS_REQUIRED);
  else if (target === "vercel-runtime") printList("Vercel runtime environment:", VERCEL_RUNTIME_REQUIRED);
  else if (target === "github-vars") printList("GitHub production variables:", GITHUB_PRODUCTION_VARIABLES);
  else if (target === "github-secrets") printList("GitHub production secrets:", GITHUB_PRODUCTION_SECRETS);
  else if (target === "github-commands") printGithubCommands();
  else if (target === "vercel-commands") printVercelCommands();
  else {
    usage();
    process.exit(1);
  }
  process.exit(0);
}

if (args[0] === "--github-actions-launch" && args.length === 1) {
  failMissing("GitHub launch environment", missingFromProcess(LAUNCH_ACTIONS_REQUIRED));
  process.exit(0);
}

if (args[0] === "--github-actions-deploy" && args.length === 1) {
  failMissing("GitHub deploy environment", missingFromProcess(DEPLOY_ACTIONS_REQUIRED));
  process.exit(0);
}

if (args[0] === "--vercel-list" && args.length === 2) {
  const text = fs.readFileSync(args[1], "utf8");
  failMissing("Vercel production runtime environment", missingFromText(VERCEL_RUNTIME_REQUIRED, text));
  const recommendedMissing = missingFromText(VERCEL_RUNTIME_RECOMMENDED, text);
  if (recommendedMissing.length) {
    console.warn("Vercel production runtime environment: recommended names not found:");
    for (const name of recommendedMissing) console.warn(`- ${name}`);
  }
  process.exit(0);
}

usage();
process.exit(1);
