#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import {
  GITHUB_PRODUCTION_SECRETS,
  GITHUB_PRODUCTION_VARIABLES,
  VERCEL_RUNTIME_REQUIRED,
  placeholder,
} from "./env-manifest.mjs";

const REPO = "RenBing-Sumeru/Awesome-LLM-Reasoning-Data";
const PAGES_URL = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data";
const CLEAN_SECRET_PATTERN = /fk[0-9A-Za-z_.-]{12,}|Bearer\s+[0-9A-Za-z_.-]+|postgres(?:ql)?:\/\/\S+|redis:\/\/\S+/i;

function usage() {
  console.log(`Usage:
  node scripts/launch-plan.mjs [--backend-url https://your-backend.example] [--json]

Prints the production launch checklist for Ask the Atlas without printing
secret values. Use --backend-url after you know the Vercel production URL or
custom backend origin.
`);
}

function parseArgs(argv = process.argv.slice(2)) {
  const out = { backendUrl: process.env.ASK_ATLAS_BASE_URL || "", json: false, help: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") out.help = true;
    else if (arg === "--json") out.json = true;
    else if (arg === "--backend-url") {
      out.backendUrl = argv[i + 1] || "";
      i += 1;
    } else if (arg.startsWith("--backend-url=")) {
      out.backendUrl = arg.slice("--backend-url=".length);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return out;
}

function cleanHttpsBase(value) {
  const raw = String(value || "").trim().replace(/\/+$/, "");
  if (!raw) return "";
  const parsed = new URL(raw);
  if (parsed.protocol !== "https:") throw new Error("Backend URL must use HTTPS for public launch.");
  if (parsed.username || parsed.password || parsed.search || parsed.hash) {
    throw new Error("Backend URL must not contain credentials, query strings, or fragments.");
  }
  if (["localhost", "127.0.0.1", "::1", "[::1]"].includes(parsed.hostname.toLowerCase())) {
    throw new Error("Backend URL must not point to localhost for public launch.");
  }
  return parsed.origin;
}

function present(name) {
  return Boolean(String(process.env[name] || "").trim());
}

function missing(names) {
  return names.filter((name) => !present(name));
}

function buildPlan({ backendUrl = "" } = {}) {
  const cleanBackendUrl = cleanHttpsBase(backendUrl);
  const callbackUrl = cleanBackendUrl ? `${cleanBackendUrl}/api/auth/github/callback` : "<set ASK_ATLAS_BASE_URL first>/api/auth/github/callback";
  return {
    repo: REPO,
    pagesUrl: PAGES_URL,
    backendUrl: cleanBackendUrl || "",
    githubOAuth: {
      applicationName: "Ask the Atlas",
      homepageUrl: PAGES_URL,
      authorizationCallbackUrl: callbackUrl,
      requiredScope: "read:user",
    },
    publicQuotaPolicy: {
      noStarDailyRequests: Number(process.env.ASK_ATLAS_BASE_DAILY_REQUESTS || placeholder("ASK_ATLAS_BASE_DAILY_REQUESTS")),
      verifiedStarDailyRequests: Number(process.env.ASK_ATLAS_STAR_DAILY_REQUESTS || placeholder("ASK_ATLAS_STAR_DAILY_REQUESTS")),
      forkOneTimeCredits: Number(process.env.ASK_ATLAS_FORK_BONUS_CREDITS || placeholder("ASK_ATLAS_FORK_BONUS_CREDITS")),
    },
    missing: {
      githubVariables: missing(GITHUB_PRODUCTION_VARIABLES),
      githubSecrets: missing(GITHUB_PRODUCTION_SECRETS),
      vercelRuntime: missing(VERCEL_RUNTIME_REQUIRED),
    },
    externalResources: [
      "Create or link a Vercel project with apps/ask-atlas as the project root.",
      "Create a GitHub OAuth App using the callback URL above.",
      "Create a Postgres database and export DATABASE_URL.",
      "Create an Upstash Redis database and export UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.",
      "Rotate the 360 provider key if it has appeared outside a secret manager, then store it only as QIHOO_API_KEY.",
    ],
    commands: [
      "npm --prefix apps/ask-atlas run secret:generate",
      "npm --prefix apps/ask-atlas run production:configure -- --apply-github",
      "npm --prefix apps/ask-atlas run production:configure -- --apply-vercel",
      "npm --prefix apps/ask-atlas run db:setup",
      "npm --prefix apps/ask-atlas run deploy:vercel",
      "npm --prefix apps/ask-atlas run doctor:prod -- --strict",
      "npm --prefix apps/ask-atlas run launch:check -- --smoke --allow-warnings --redacted",
    ],
  };
}

function renderText(plan) {
  const lines = [
    "Ask the Atlas public launch plan",
    "",
    `Repository: ${plan.repo}`,
    `Pages URL: ${plan.pagesUrl}`,
    `Backend URL: ${plan.backendUrl || "<missing>"}`,
    "",
    "GitHub OAuth App",
    `- Application name: ${plan.githubOAuth.applicationName}`,
    `- Homepage URL: ${plan.githubOAuth.homepageUrl}`,
    `- Authorization callback URL: ${plan.githubOAuth.authorizationCallbackUrl}`,
    `- Scope: ${plan.githubOAuth.requiredScope}`,
    "",
    "Public quota policy",
    `- No-star users: ${plan.publicQuotaPolicy.noStarDailyRequests}/day`,
    `- Verified star users: ${plan.publicQuotaPolicy.verifiedStarDailyRequests}/day`,
    `- Fork reward: +${plan.publicQuotaPolicy.forkOneTimeCredits} one-time credits`,
    "",
    "Missing exported GitHub variable values in this shell",
    ...(plan.missing.githubVariables.length ? plan.missing.githubVariables.map((name) => `- ${name}`) : ["- none"]),
    "",
    "Missing exported GitHub secret values in this shell",
    ...(plan.missing.githubSecrets.length ? plan.missing.githubSecrets.map((name) => `- ${name}`) : ["- none"]),
    "",
    "Missing Vercel runtime names in this shell",
    ...(plan.missing.vercelRuntime.length ? plan.missing.vercelRuntime.map((name) => `- ${name}`) : ["- none"]),
    "",
    "External resources to create",
    ...plan.externalResources.map((item) => `- ${item}`),
    "",
    "Safe command sequence",
    ...plan.commands.map((item) => `- ${item}`),
  ];
  const text = lines.join("\n");
  if (CLEAN_SECRET_PATTERN.test(text)) {
    throw new Error("Launch plan rendering unexpectedly included secret-like material.");
  }
  return text;
}

function main() {
  const options = parseArgs();
  if (options.help) {
    usage();
    return 0;
  }
  const plan = buildPlan({ backendUrl: options.backendUrl });
  if (options.json) {
    const text = JSON.stringify(plan, null, 2);
    if (CLEAN_SECRET_PATTERN.test(text)) throw new Error("Launch plan JSON unexpectedly included secret-like material.");
    console.log(text);
  } else {
    console.log(renderText(plan));
  }
  return 0;
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  try {
    process.exit(main());
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export { buildPlan, cleanHttpsBase, renderText };
