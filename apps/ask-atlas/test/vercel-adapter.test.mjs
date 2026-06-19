import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import handler from "../api/index.mjs";

const appRoot = fileURLToPath(new URL("..", import.meta.url));

async function invokeHandler(url, { cookie = "" } = {}) {
  const chunks = [];
  const req = {
    method: "GET",
    url,
    headers: cookie ? { cookie } : {},
    socket: { remoteAddress: "127.0.0.1" },
    [Symbol.asyncIterator]: async function* noop() {},
  };
  const res = {
    statusCode: 0,
    headers: {},
    writeHead(status, headers = {}) {
      this.statusCode = status;
      this.headers = headers;
    },
    write(chunk) {
      chunks.push(Buffer.from(chunk));
    },
    end(chunk = "") {
      if (chunk) chunks.push(Buffer.from(chunk));
      this.done?.();
    },
  };
  await new Promise((resolve, reject) => {
    res.done = resolve;
    Promise.resolve(handler(req, res)).catch(reject);
  });
  return {
    statusCode: res.statusCode,
    headers: res.headers,
    body: Buffer.concat(chunks).toString("utf8"),
  };
}

test("Vercel adapter delegates to the shared backend route", async () => {
  const res = await invokeHandler("/api/health");
  assert.equal(res.statusCode, 200);
  const payload = JSON.parse(res.body);
  assert.equal(payload.ok, true);
  assert.equal(payload.service, "ask-atlas");
  assert.equal(typeof payload.environment, "string");
  assert.equal(typeof payload.commit, "string");
});

test("health endpoint can include storage readiness without exposing secrets", async () => {
  const res = await invokeHandler("/api/health?db=1");
  assert.equal(res.statusCode, 200);
  const payload = JSON.parse(res.body);
  assert.equal(payload.ok, true);
  assert.equal(payload.service, "ask-atlas");
  assert.equal(payload.storage.ok, true);
  assert.equal(payload.storage.backend, "json");
  assert.equal(JSON.stringify(payload).includes("DATABASE_URL"), false);
});

test("health endpoint can include RAG readiness without exposing snippets", async () => {
  const res = await invokeHandler("/api/health?rag=1");
  assert.equal(res.statusCode, 200);
  const payload = JSON.parse(res.body);
  assert.equal(payload.ok, true);
  assert.equal(payload.rag.ok, true);
  assert.ok(payload.rag.sourceCount > 0);
  assert.equal(payload.rag.requiredPathsPresent.readme, true);
  assert.equal(payload.rag.requiredPathsPresent.primer, true);
  assert.equal(payload.rag.requiredPathsPresent.entries, true);
  assert.equal(JSON.stringify(payload).includes("snippet"), false);
  assert.equal(JSON.stringify(payload).includes("QIHOO_API_KEY"), false);
});

test("Vercel adapter keeps admin shell behind backend authorization", async () => {
  for (const pathname of ["/admin", "/admin.html", "/%61dmin.html", "/admin%2ehtml", "/foo/%2e%2e/admin.html"]) {
    const res = await invokeHandler(pathname);
    assert.equal(res.statusCode, 302, pathname);
    assert.match(res.headers.location || "", /\/ask\?admin=login-required/, pathname);
    assert.doesNotMatch(res.body, /Admin Dashboard/, pathname);
  }
});

test("Vercel config routes every path through the backend before static files", () => {
  const config = JSON.parse(fs.readFileSync(`${appRoot}/vercel.json`, "utf8"));
  assert.equal(config.$schema, "https://openapi.vercel.sh/vercel.json");
  assert.equal(config.rewrites, undefined);
  assert.deepEqual(config.routes, [{ src: "/(.*)", dest: "/api/index.mjs" }]);
  assert.equal(config.functions["api/index.mjs"].maxDuration, 30);
  assert.equal(config.functions["api/index.mjs"].includeFiles, "private/rag-corpus.json");
  const vercelIgnore = fs.readFileSync(`${appRoot}/.vercelignore`, "utf8");
  assert.doesNotMatch(vercelIgnore, /rag-corpus\.json/);
  assert.match(vercelIgnore, /private\/primer\//);
});

test("Vercel cold start fails closed when production config is unsafe", () => {
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", "import('./api/index.mjs')"], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      VERCEL: "1",
      ASK_ATLAS_ENV: "prod",
      ASK_ATLAS_DEV_AUTH: "0",
      ASK_ATLAS_MOCK_PROVIDER: "0",
      ASK_ATLAS_SESSION_SECRET: "",
      ASK_ATLAS_TOKEN_ENCRYPTION_SECRET: "",
      GITHUB_CLIENT_ID: "",
      GITHUB_CLIENT_SECRET: "",
      ASK_ATLAS_ADMIN_GITHUB_IDS: "",
      QIHOO_API_KEY: "",
      ASK_ATLAS_STORE_BACKEND: "json",
      ASK_ATLAS_ALLOW_JSON_STORE: "0",
      UPSTASH_REDIS_REST_URL: "",
      UPSTASH_REDIS_REST_TOKEN: "",
      ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT: "0",
      ASK_ATLAS_MODEL_RATES_JSON: "{}",
    },
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /not safely configured for production/);
});
