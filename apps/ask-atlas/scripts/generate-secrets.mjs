#!/usr/bin/env node
import crypto from "node:crypto";

const SECRET_NAMES = [
  "ASK_ATLAS_SESSION_SECRET",
  "ASK_ATLAS_TOKEN_ENCRYPTION_SECRET",
];

function usage() {
  console.log(`Usage:
  node scripts/generate-secrets.mjs
  node scripts/generate-secrets.mjs --json

Generates two independent high-entropy values for the Ask the Atlas backend.
Do not commit the generated values, paste them into public logs, or run this
command while shell tracing/debug echo is enabled.
`);
}

function generateSecret() {
  return crypto.randomBytes(48).toString("base64url");
}

function generatePair() {
  let sessionSecret = "";
  let tokenEncryptionSecret = "";
  while (!sessionSecret || sessionSecret === tokenEncryptionSecret) {
    sessionSecret = generateSecret();
    tokenEncryptionSecret = generateSecret();
  }
  return {
    ASK_ATLAS_SESSION_SECRET: sessionSecret,
    ASK_ATLAS_TOKEN_ENCRYPTION_SECRET: tokenEncryptionSecret,
  };
}

function assertStrong(pair) {
  for (const name of SECRET_NAMES) {
    const value = String(pair[name] || "");
    if (!/^[A-Za-z0-9_-]{48,}$/.test(value)) {
      throw new Error(`${name} generation failed: value is not a long base64url secret.`);
    }
  }
  if (pair.ASK_ATLAS_SESSION_SECRET === pair.ASK_ATLAS_TOKEN_ENCRYPTION_SECRET) {
    throw new Error("Generated session and encryption secrets must be different.");
  }
}

function printShell(pair) {
  console.log("# Generated locally. Keep these values private and store them only as backend secrets.");
  console.log("# Recommended: paste the values into Vercel production env vars and GitHub production environment secrets.");
  console.log("# Do not commit this output. Do not run with shell tracing/debug echo enabled.");
  console.log("");
  for (const name of SECRET_NAMES) {
    console.log(`export ${name}='${pair[name]}'`);
  }
  console.log("");
  console.log("# After exporting in a private shell, configure GitHub Environment secrets with:");
  for (const name of SECRET_NAMES) {
    console.log(`printf '%s' "$${name}" | gh secret set ${name} --env production`);
  }
  console.log("");
  console.log("# Configure the same values in the Vercel project runtime environment:");
  for (const name of SECRET_NAMES) {
    console.log(`vercel env add ${name} production`);
  }
}

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  usage();
  process.exit(0);
}
if (args.length && args[0] !== "--json") {
  usage();
  process.exit(1);
}

const pair = generatePair();
assertStrong(pair);

if (args[0] === "--json") {
  console.log(JSON.stringify(pair, null, 2));
} else {
  printShell(pair);
}
