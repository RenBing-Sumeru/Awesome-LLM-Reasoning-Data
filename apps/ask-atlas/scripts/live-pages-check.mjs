#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { ragSmokeReady, storageSmokeReady } from "./launch-check.mjs";

const DEFAULT_PAGES_URL = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data";
const SECRET_PATTERN = /QIHOO_API_KEY|GITHUB_CLIENT_SECRET|ASK_ATLAS_SESSION_SECRET|ASK_ATLAS_TOKEN_ENCRYPTION_SECRET|UPSTASH_REDIS_REST_TOKEN|DATABASE_URL|Authorization\s*:\s*Bearer|Bearer\s+[A-Za-z0-9_.-]{12,}|fk[0-9A-Za-z_.-]{12,}|[?&][^=\s]*(?:api[_-]?key|access[_-]?token|auth[_-]?token|client[_-]?secret|secret|password|bearer)[^=\s]*=/i;
const CONFIG_ASSIGNMENT_PATTERN = /^window\.(ASK_ATLAS_FRONTEND|ASK_ATLAS_BACKEND_URL)\s*=\s*"([^"\\\r\n]*)"\s*;$/;

function usage() {
  console.log(`Usage:
  node scripts/live-pages-check.mjs [--pages-url https://...]
  node scripts/live-pages-check.mjs --require-backend --backend-url https://...
  node scripts/live-pages-check.mjs --require-backend --smoke

Checks the live GitHub Pages /ask/ page and browser-visible Ask config without
printing secret values. Add --require-backend for the public launch gate and
--smoke to call the configured backend /api/health?db=1&rag=1 endpoint.
`);
}

function valueAfter(argv, name, fallback = "") {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] || fallback : fallback;
}

function parseArgs(argv = process.argv.slice(2)) {
  const flags = new Set(argv);
  return {
    help: flags.has("--help") || flags.has("-h"),
    pagesUrl: valueAfter(argv, "--pages-url", process.env.ASK_ATLAS_PAGES_BASE_URL || DEFAULT_PAGES_URL),
    expectedBackendUrl: valueAfter(argv, "--backend-url", process.env.ASK_ATLAS_BASE_URL || ""),
    requireBackend: flags.has("--require-backend"),
    smoke: flags.has("--smoke"),
    redacted: flags.has("--redacted") || flags.has("--ci"),
  };
}

export function normalizeBaseUrl(raw) {
  const value = String(raw || "").trim().replace(/\/+$/, "");
  return value;
}

export function validatePublicUrl(raw, { allowEmpty = false } = {}) {
  const value = normalizeBaseUrl(raw);
  const problems = [];
  if (!value) return allowEmpty ? [] : ["URL is empty"];
  if (/[\s"'\\\x00-\x1f\x7f]/.test(value)) problems.push("URL contains unsafe characters");
  if (SECRET_PATTERN.test(value)) problems.push("URL contains secret-like material");
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    problems.push("URL is not parseable");
    return problems;
  }
  if (parsed.protocol !== "https:") problems.push("URL must use https");
  if (!parsed.hostname) problems.push("URL must include a host");
  if (parsed.username || parsed.password) problems.push("URL must not contain credentials");
  if (["localhost", "127.0.0.1", "::1"].includes(parsed.hostname.toLowerCase())) problems.push("URL must not point to localhost");
  if (parsed.search) problems.push("URL must not contain a query string");
  if (parsed.hash) problems.push("URL must not contain a fragment");
  return problems;
}

export function parseAskConfig(text) {
  const values = {};
  const problems = [];
  for (const rawLine of String(text || "").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    const match = CONFIG_ASSIGNMENT_PATTERN.exec(line);
    if (!match) {
      problems.push("unexpected executable content");
      continue;
    }
    const [, name, value] = match;
    if (name in values) problems.push(`duplicate ${name}`);
    values[name] = name === "ASK_ATLAS_BACKEND_URL" ? normalizeBaseUrl(value) : value;
  }
  if (SECRET_PATTERN.test(String(text || ""))) problems.push("config contains secret-like material");
  if (values.ASK_ATLAS_FRONTEND !== "pages") problems.push("ASK_ATLAS_FRONTEND must be pages");
  if (!("ASK_ATLAS_BACKEND_URL" in values)) problems.push("ASK_ATLAS_BACKEND_URL is missing");
  return { values, problems: [...new Set(problems)] };
}

async function fetchText(url, { fetchImpl = fetch } = {}) {
  const response = await fetchImpl(url, { redirect: "follow" });
  const text = await response.text();
  return { ok: response.ok, status: response.status, text };
}

async function fetchJson(url, { fetchImpl = fetch } = {}) {
  const response = await fetchImpl(url, { redirect: "follow" });
  const json = await response.json().catch(() => ({}));
  return { ok: response.ok, status: response.status, json };
}

export async function checkLivePages(options = {}) {
  const pagesUrl = normalizeBaseUrl(options.pagesUrl || DEFAULT_PAGES_URL);
  const expectedBackendUrl = normalizeBaseUrl(options.expectedBackendUrl || "");
  const fetchImpl = options.fetchImpl || fetch;
  const checks = [];
  const fail = (id, detail) => checks.push({ id, status: "block", detail });
  const pass = (id, detail = "ok") => checks.push({ id, status: "pass", detail });

  const pagesProblems = validatePublicUrl(pagesUrl);
  if (pagesProblems.length) {
    fail("pages-url", pagesProblems.join("; "));
    return { status: "blocked", checks, pagesUrl, backendUrl: "" };
  }
  pass("pages-url");

  const askUrl = `${pagesUrl}/ask/`;
  const configUrl = `${pagesUrl}/assets/ask-config.js`;
  const ask = await fetchText(askUrl, { fetchImpl });
  if (!ask.ok || !/Ask the Atlas/i.test(ask.text)) {
    fail("pages-ask", `live /ask/ returned ${ask.status}`);
  } else {
    pass("pages-ask", `live /ask/ returned ${ask.status}`);
  }

  const config = await fetchText(configUrl, { fetchImpl });
  if (!config.ok) {
    fail("pages-config", `live ask-config.js returned ${config.status}`);
    return { status: "blocked", checks, pagesUrl, backendUrl: "" };
  }
  const parsed = parseAskConfig(config.text);
  if (parsed.problems.length) fail("pages-config", parsed.problems.join("; "));
  else pass("pages-config", "browser-visible config is structurally safe");

  const backendUrl = parsed.values.ASK_ATLAS_BACKEND_URL || "";
  const backendProblems = validatePublicUrl(backendUrl, { allowEmpty: !options.requireBackend });
  if (backendProblems.length) fail("pages-backend-url", backendProblems.join("; "));
  else if (backendUrl) pass("pages-backend-url", "backend URL is a clean public HTTPS origin");
  else pass("pages-backend-url", "backend URL is empty for launch-pending Pages");

  if (expectedBackendUrl) {
    const expectedProblems = validatePublicUrl(expectedBackendUrl);
    if (expectedProblems.length) fail("expected-backend-url", expectedProblems.join("; "));
    else if (backendUrl !== expectedBackendUrl) fail("pages-backend-match", "live Pages backend does not match expected backend");
    else pass("pages-backend-match", "live Pages backend matches expected backend");
  }

  if (options.smoke) {
    if (!backendUrl) {
      fail("backend-smoke", "cannot smoke-test an empty backend URL");
    } else {
      const health = await fetchJson(`${backendUrl}/api/health?db=1&rag=1`, { fetchImpl });
      if (!health.ok || !storageSmokeReady(health.json) || !ragSmokeReady(health.json)) {
        fail("backend-smoke", `backend health returned ${health.status} without verified Postgres schema metadata and ready RAG corpus`);
      } else {
        pass("backend-smoke", "backend health uses Postgres with verified schema metadata and ready RAG corpus");
      }
    }
  }

  const blocked = checks.some((item) => item.status === "block");
  return { status: blocked ? "blocked" : "ready", checks, pagesUrl, backendUrl };
}

function safeDetail(detail, redacted) {
  if (!redacted) return detail;
  return String(detail || "")
    .replace(/https:\/\/\S+/g, "[url]")
    .replace(/fk[0-9A-Za-z_.-]{12,}/g, "[secret]");
}

async function main() {
  const options = parseArgs();
  if (options.help) {
    usage();
    return 0;
  }
  const report = await checkLivePages(options);
  console.log(`Ask the Atlas live Pages check: ${report.status}`);
  if (!options.redacted) {
    console.log(`Pages URL: ${report.pagesUrl}`);
    console.log(`Backend URL: ${report.backendUrl || "(empty launch-pending)"}`);
  }
  for (const check of report.checks) {
    const icon = check.status === "pass" ? "OK" : "BLOCK";
    console.log(`[${icon}] ${check.id}: ${safeDetail(check.detail, options.redacted)}`);
  }
  return report.status === "ready" ? 0 : 1;
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  main().then((code) => process.exit(code)).catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
