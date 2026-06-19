#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  GITHUB_PRODUCTION_SECRETS,
  GITHUB_PRODUCTION_VARIABLES,
  GITHUB_PRODUCTION_REQUIRED_VARIABLES,
  GITHUB_PRODUCTION_OPTIONAL_VARIABLES,
  VERCEL_RUNTIME_RECOMMENDED,
  VERCEL_RUNTIME_REQUIRED,
  placeholder,
} from "./env-manifest.mjs";

const REPO = "RenBing-Sumeru/Awesome-LLM-Reasoning-Data";
const PAGES_URL = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data";
const CLEAN_SECRET_PATTERN = /fk[0-9A-Za-z_.-]{12,}|Bearer\s+[0-9A-Za-z_.-]+|postgres(?:ql)?:\/\/\S+|redis:\/\/\S+|gh[pousr]_[0-9A-Za-z_]{20,}|sk-[0-9A-Za-z_-]{16,}|eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/i;
const SECRET_NAMES = new Set(GITHUB_PRODUCTION_SECRETS);

function usage() {
  console.log(`Usage:
  node scripts/launch-plan.mjs [--backend-url https://your-backend.example] [--json]
  node scripts/launch-plan.mjs --write-markdown ../../reports/ask_atlas_launch_packet.md

Prints the production launch checklist for Ask the Atlas without printing
secret values. Use --backend-url after you know the Vercel production URL or
custom backend origin.
`);
}

function parseArgs(argv = process.argv.slice(2)) {
  const out = {
    backendUrl: process.env.ASK_ATLAS_BASE_URL || "",
    json: false,
    help: false,
    writeMarkdown: "",
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") out.help = true;
    else if (arg === "--json") out.json = true;
    else if (arg === "--write-markdown") {
      out.writeMarkdown = argv[i + 1] || "";
      i += 1;
    } else if (arg.startsWith("--write-markdown=")) {
      out.writeMarkdown = arg.slice("--write-markdown=".length);
    }
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
      starBonusCredits: Number(process.env.ASK_ATLAS_STAR_BONUS_CREDITS || placeholder("ASK_ATLAS_STAR_BONUS_CREDITS")),
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
    valueGroups: {
      githubVariables: GITHUB_PRODUCTION_REQUIRED_VARIABLES.map((name) => ({
        name,
        value: cleanBackendUrl && name === "ASK_ATLAS_BASE_URL" ? cleanBackendUrl : placeholder(name),
        required: true,
      })),
      githubOptionalVariables: GITHUB_PRODUCTION_OPTIONAL_VARIABLES.map((name) => ({
        name,
        value: placeholder(name),
        required: false,
      })),
      githubSecrets: GITHUB_PRODUCTION_SECRETS.map((name) => ({ name, value: "<secret-manager-only>" })),
      vercelRequired: VERCEL_RUNTIME_REQUIRED.map((name) => ({
        name,
        value: SECRET_NAMES.has(name)
          ? "<secret-manager-only>"
          : cleanBackendUrl && name === "ASK_ATLAS_BASE_URL"
            ? cleanBackendUrl
            : placeholder(name),
      })),
      vercelRecommended: VERCEL_RUNTIME_RECOMMENDED.map((name) => ({ name, value: placeholder(name) })),
    },
    validation: [
      "npm --prefix apps/ask-atlas test",
      "python3 scripts/secret_scan.py",
      "npm --prefix apps/ask-atlas run rag:check",
      "python3 scripts/render_site.py --check",
      "python3 scripts/render_readme.py --check",
      "npm --prefix apps/ask-atlas run production:status -- --strict",
      "npm --prefix apps/ask-atlas run production:live",
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
    `- Star reward: +${plan.publicQuotaPolicy.starBonusCredits} bonus credits`,
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

function markdownTable(rows) {
  return [
    "| Name | Value handling |",
    "| --- | --- |",
    ...rows.map((row) => `| \`${row.name}\` | ${String(row.value || "<set-in-platform>").replace(/\|/g, "\\|")} |`),
  ].join("\n");
}

function renderMarkdown(plan) {
  const lines = [
    "# Ask the Atlas Launch Packet",
    "",
    "This generated packet is intended to be safe to commit or share inside the repository because it contains only variable names, placeholders, public URLs, and command templates. Review the diff before committing it. It must never contain provider keys, OAuth secrets, database URLs, Redis tokens, or generated session secrets.",
    "",
    "## Current Target",
    "",
    `- Repository: \`${plan.repo}\``,
    `- GitHub Pages frontend: ${plan.pagesUrl}`,
    `- Backend origin: ${plan.backendUrl || "`<set ASK_ATLAS_BASE_URL first>`"}`,
    `- Public Ask page after launch: ${plan.pagesUrl}/ask/`,
    "",
    "## Step 1: Create External Resources",
    "",
    ...plan.externalResources.map((item) => `- [ ] ${item}`),
    "",
    "## Step 2: GitHub OAuth App",
    "",
    "| Field | Value |",
    "| --- | --- |",
    `| Application name | \`${plan.githubOAuth.applicationName}\` |`,
    `| Homepage URL | ${plan.githubOAuth.homepageUrl} |`,
    `| Authorization callback URL | ${plan.githubOAuth.authorizationCallbackUrl} |`,
    `| Scope | \`${plan.githubOAuth.requiredScope}\` only |`,
    "",
    "Keep the OAuth client secret private. Store the client id as a production variable and the client secret as a production secret.",
    "",
    "## Step 3: Public GitHub Production Variables",
    "",
    markdownTable(plan.valueGroups.githubVariables),
    "",
    "Optional production variables:",
    "",
    markdownTable(plan.valueGroups.githubOptionalVariables),
    "",
    "## Step 4: GitHub Production Secrets",
    "",
    markdownTable(plan.valueGroups.githubSecrets),
    "",
    "Set these with `gh secret set` or the GitHub Actions production environment UI. Do not paste values into README files, issues, screenshots, or terminal logs.",
    "",
    "## Step 5: Vercel Runtime Environment",
    "",
    "Required Vercel production runtime names:",
    "",
    markdownTable(plan.valueGroups.vercelRequired),
    "",
    "Recommended Vercel production runtime names:",
    "",
    markdownTable(plan.valueGroups.vercelRecommended),
    "",
    "## Step 6: Safe Command Sequence",
    "",
    "Run from the repository root unless the command itself changes directory:",
    "",
    "```bash",
    ...plan.commands,
    "```",
    "",
    "## Step 7: Launch Validation Gates",
    "",
    "```bash",
    ...plan.validation,
    "```",
    "",
    "## Notes For The Maintainer",
    "",
    "- No-star GitHub users get 2 questions per day.",
    "- Verified star users get 10 questions per day.",
    "- Forking the repository grants 20 one-time bonus credits.",
    "- Admin and cost dashboards are backend-authorized only.",
    "- Rotate any provider key that has ever appeared outside a secret manager before public launch.",
  ];
  const text = lines.join("\n");
  if (CLEAN_SECRET_PATTERN.test(text)) {
    throw new Error("Launch packet rendering unexpectedly included secret-like material.");
  }
  return text;
}

function resolveOutputPath(target) {
  if (!target) throw new Error("--write-markdown requires an output path.");
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const appRoot = path.resolve(scriptDir, "..");
  const resolved = path.resolve(appRoot, target);
  return resolved;
}

function writeMarkdown(plan, target) {
  const outputPath = resolveOutputPath(target);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${renderMarkdown(plan)}\n`);
  return outputPath;
}

function main() {
  const options = parseArgs();
  if (options.help) {
    usage();
    return 0;
  }
  const plan = buildPlan({ backendUrl: options.backendUrl });
  if (options.writeMarkdown) {
    const outputPath = writeMarkdown(plan, options.writeMarkdown);
    console.log(`Wrote safe launch packet: ${outputPath}`);
  } else if (options.json) {
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

export { buildPlan, cleanHttpsBase, renderMarkdown, renderText, writeMarkdown };
