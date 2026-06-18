import http from "node:http";
import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { safeReturnTo, USAGE_CONSENT_VERSION } from "../src/auth.mjs";
import { signedValue } from "../src/crypto.mjs";
import { addFeedback, createRequestLog, updateRequestLog } from "../src/logging.mjs";
import { route } from "../src/server.mjs";
import { resetStoreForTests } from "../src/store.mjs";

const appRoot = fileURLToPath(new URL("..", import.meta.url));

function emptyStore() {
  return {
    users: {},
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    quotaReservations: {},
    rateWindows: {},
  };
}

async function withServer(fn) {
  const server = http.createServer(route);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  try {
    return await fn(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

test("admin route is server-gated before serving the dashboard shell", async () => {
  resetStoreForTests(emptyStore());
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/admin`, { redirect: "manual" });
    assert.equal(response.status, 302);
    assert.match(response.headers.get("location") || "", /\/ask\?admin=login-required/);
  });
});

test("encoded admin shell paths cannot fall through to static serving", async () => {
  resetStoreForTests(emptyStore());
  const encodedPaths = ["/admin.html", "/%61dmin.html", "/admin%2ehtml", "/%61dmin%2ehtml", "/foo/%2e%2e/admin.html"];
  await withServer(async (baseUrl) => {
    for (const pathname of encodedPaths) {
      const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
      assert.equal(response.status, 302, pathname);
      assert.match(response.headers.get("location") || "", /\/ask\?admin=login-required/, pathname);
      const body = await response.text();
      assert.doesNotMatch(body, /Admin Dashboard/, pathname);
    }
  });
});

test("API CORS allows the GitHub Pages frontend and blocks hostile POST origins", async () => {
  resetStoreForTests(emptyStore());
  await withServer(async (baseUrl) => {
    const pagesOrigin = "https://renbing-sumeru.github.io";
    const health = await fetch(`${baseUrl}/api/health`, { headers: { origin: pagesOrigin } });
    assert.equal(health.status, 200);
    assert.equal(health.headers.get("access-control-allow-origin"), pagesOrigin);
    assert.equal(health.headers.get("access-control-allow-credentials"), "true");

    const preflight = await fetch(`${baseUrl}/api/chat`, {
      method: "OPTIONS",
      headers: {
        origin: pagesOrigin,
        "access-control-request-method": "POST",
        "access-control-request-headers": "content-type",
      },
    });
    assert.equal(preflight.status, 204);
    assert.equal(preflight.headers.get("access-control-allow-origin"), pagesOrigin);
    assert.match(preflight.headers.get("access-control-allow-methods") || "", /POST/);

    const hostile = await fetch(`${baseUrl}/api/chat`, {
      method: "POST",
      headers: { origin: "https://evil.example", "content-type": "application/json" },
      body: JSON.stringify({ question: "What is RLVR?" }),
    });
    assert.equal(hostile.status, 403);
    assert.equal(hostile.headers.get("access-control-allow-origin"), null);
    assert.match(await hostile.text(), /Invalid request origin/);
  });
});

test("return_to allows project Pages URLs but rejects open redirects", () => {
  const canonicalPagesReturn = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=process_supervision_prm";
  const fallbackPagesReturn = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask.html?track=process_supervision_prm";
  assert.equal(safeReturnTo(canonicalPagesReturn, "/ask"), canonicalPagesReturn);
  assert.equal(safeReturnTo(fallbackPagesReturn, "/ask"), fallbackPagesReturn);
  assert.equal(safeReturnTo("/ask?entry=math-shepherd-2024", "/ask"), "/ask?entry=math-shepherd-2024");
  assert.equal(safeReturnTo("https://evil.example/steal", "/ask"), "/ask");
  assert.equal(safeReturnTo("//evil.example/steal", "/ask"), "/ask");
});

test("logout requires POST and clears the session cookie", async () => {
  resetStoreForTests({
    ...emptyStore(),
    users: { "admin-1": { githubId: "admin-1", login: "RenBing-Sumeru", role: "admin" } },
    sessions: { session_admin: { sessionId: "session_admin", githubId: "admin-1" } },
  });
  const cookie = `ask_atlas_session=${signedValue("session_admin")}`;
  await withServer(async (baseUrl) => {
    const getLogout = await fetch(`${baseUrl}/api/auth/logout`, { headers: { cookie } });
    assert.equal(getLogout.status, 405);

    const postLogout = await fetch(`${baseUrl}/api/auth/logout?return_to=/ask`, {
      method: "POST",
      headers: { cookie, origin: "http://localhost:8787", "content-type": "application/json" },
      body: "{}",
    });
    assert.equal(postLogout.status, 200);
    const payload = await postLogout.json();
    assert.equal(payload.returnTo, "/ask");
    assert.match(postLogout.headers.get("set-cookie") || "", /ask_atlas_session=/);
    assert.match(postLogout.headers.get("set-cookie") || "", /Max-Age=0/);
  });
});

test("privacy preference endpoint persists raw-question default after consent", async () => {
  resetStoreForTests({
    ...emptyStore(),
    users: {
      "user-privacy": {
        githubId: "user-privacy",
        login: "privacy-reader",
        role: "user",
        usageConsentVersion: USAGE_CONSENT_VERSION,
        usageConsentAcceptedAt: "2026-06-17T00:00:00.000Z",
        storeRawQuestionDefault: true,
      },
    },
    sessions: { session_privacy: { sessionId: "session_privacy", githubId: "user-privacy" } },
  });
  const cookie = `ask_atlas_session=${signedValue("session_privacy")}`;
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/privacy`, {
      method: "POST",
      headers: { cookie, origin: "http://localhost:8787", "content-type": "application/json" },
      body: JSON.stringify({ storeRawQuestionDefault: false }),
    });
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.equal(payload.user.storeRawQuestionDefault, false);

    const me = await fetch(`${baseUrl}/api/me`, { headers: { cookie } });
    assert.equal(me.status, 200);
    const profile = await me.json();
    assert.equal(profile.user.storeRawQuestionDefault, false);
    assert.equal(profile.user.usageConsentAcceptedAt, "2026-06-17T00:00:00.000Z");
  });
});

test("chat responses expose evidence mode and retrieval confidence", () => {
  const script = `
    import http from 'node:http';
    import { route } from './src/server.mjs';
    import { signedValue } from './src/crypto.mjs';
    import { readStore, resetStoreForTests } from './src/store.mjs';
    import { USAGE_CONSENT_VERSION } from './src/auth.mjs';
    const emptyStore = () => ({ users:{}, sessions:{}, usageDaily:{}, requests:[], feedback:[], events:[], creditLedger:[], quotaReservations:{}, rateWindows:{} });
    const user = { githubId:'user-101', login:'reader', role:'user', usageConsentVersion: USAGE_CONSENT_VERSION };
    resetStoreForTests({ ...emptyStore(), users: {'user-101': user}, sessions: {session_reader: {sessionId:'session_reader', githubId:'user-101'}} });
    const server = http.createServer(route);
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const { port } = server.address();
    const baseUrl = \`http://127.0.0.1:\${port}\`;
    try {
      const response = await fetch(\`\${baseUrl}/api/chat\`, {
        method:'POST',
        headers: { cookie: \`ask_atlas_session=\${signedValue('session_reader')}\`, origin:'http://localhost:8787', 'content-type':'application/json' },
        body: JSON.stringify({ question:'你可以告诉我项目里面有哪些东西，可以让我这个初学者了解么', mode:'explain', model:'auto' })
      });
      const payload = await response.json();
      console.log(JSON.stringify({ status: response.status, payload }));
    } finally {
      await new Promise((resolve) => server.close(resolve));
    }
  `;
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", script], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      ASK_ATLAS_MOCK_PROVIDER: "1",
      ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT: "1",
      ASK_ATLAS_REQUIRE_MODEL_RATES: "0",
    },
  });
  assert.equal(result.status, 0, result.stderr);
  const { status, payload } = JSON.parse(result.stdout);
  assert.equal(status, 200, JSON.stringify(payload));
  assert.equal(payload.status, "success");
  assert.equal(payload.evidenceMode, "atlas grounded");
  assert.equal(typeof payload.retrievalConfidence, "number");
  assert.equal(typeof payload.usage.retrievalConfidence, "number");
  assert.equal(payload.usage.inputTokens, undefined);
  assert.equal(payload.usage.outputTokens, undefined);
  assert.equal(payload.usage.estimatedCostUsd, undefined);
  assert.equal(payload.quota.tokenCap, undefined);
  assert.equal(payload.quota.costCapUsd, undefined);
  assert.equal(payload.quota.inputTokens, undefined);
  assert.equal(payload.quota.outputTokens, undefined);
  assert.equal(payload.quota.estimatedCostUsd, undefined);
  assert.ok(payload.sources.length > 0);
  for (const source of payload.sources) {
    assert.deepEqual(Object.keys(source).sort(), ["index", "path", "title", "type", "url"]);
    assert.equal(source.score, undefined);
    assert.equal(source.id, undefined);
    assert.equal(source.snippet, undefined);
  }
  assert.match(payload.answer, /Companion paper evidence/);
  assert.match(payload.answer, /Repository atlas evidence/);
  assert.match(payload.answer, /Model background knowledge/);
});

test("admin chat responses include private token and cost metadata", () => {
  const script = `
    import http from 'node:http';
    import { route } from './src/server.mjs';
    import { signedValue } from './src/crypto.mjs';
    import { resetStoreForTests } from './src/store.mjs';
    import { USAGE_CONSENT_VERSION } from './src/auth.mjs';
    const emptyStore = () => ({ users:{}, sessions:{}, usageDaily:{}, requests:[], feedback:[], events:[], creditLedger:[], quotaReservations:{}, rateWindows:{} });
    const user = { githubId:'admin-101', login:'RenBing-Sumeru', role:'admin', usageConsentVersion: USAGE_CONSENT_VERSION };
    resetStoreForTests({ ...emptyStore(), users: {'admin-101': user}, sessions: {session_admin: {sessionId:'session_admin', githubId:'admin-101'}} });
    const server = http.createServer(route);
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const { port } = server.address();
    const baseUrl = \`http://127.0.0.1:\${port}\`;
    try {
      const response = await fetch(\`\${baseUrl}/api/chat\`, {
        method:'POST',
        headers: { cookie: \`ask_atlas_session=\${signedValue('session_admin')}\`, origin:'http://localhost:8787', 'content-type':'application/json' },
        body: JSON.stringify({ question:'Can you tell me what is inside this project for a beginner?', mode:'explain', model:'auto' })
      });
      const payload = await response.json();
      console.log(JSON.stringify({ status: response.status, payload }));
    } finally {
      await new Promise((resolve) => server.close(resolve));
    }
  `;
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", script], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      ASK_ATLAS_MOCK_PROVIDER: "1",
      ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT: "1",
      ASK_ATLAS_REQUIRE_MODEL_RATES: "0",
    },
  });
  assert.equal(result.status, 0, result.stderr);
  const { status, payload } = JSON.parse(result.stdout);
  assert.equal(status, 200, JSON.stringify(payload));
  assert.equal(typeof payload.usage.inputTokens, "number");
  assert.equal(typeof payload.usage.outputTokens, "number");
  assert.equal(typeof payload.usage.estimatedCostUsd, "number");
  assert.equal(typeof payload.quota.tokenCap, "number");
  assert.equal(typeof payload.quota.costCapUsd, "number");
  assert.equal(typeof payload.quota.inputTokens, "number");
  assert.equal(typeof payload.quota.outputTokens, "number");
  assert.equal(typeof payload.quota.estimatedCostUsd, "number");
});

test("chat opt-out returns answer but stores only raw text hashes", () => {
  const script = `
    import http from 'node:http';
    import { route } from './src/server.mjs';
    import { signedValue } from './src/crypto.mjs';
    import { readStore, resetStoreForTests } from './src/store.mjs';
    import { USAGE_CONSENT_VERSION } from './src/auth.mjs';
    const emptyStore = () => ({ users:{}, sessions:{}, usageDaily:{}, requests:[], feedback:[], events:[], creditLedger:[], quotaReservations:{}, rateWindows:{} });
    const user = { githubId:'user-private', login:'private-reader', role:'user', usageConsentVersion: USAGE_CONSENT_VERSION, storeRawQuestionDefault:false };
    resetStoreForTests({ ...emptyStore(), users: {'user-private': user}, sessions: {session_private: {sessionId:'session_private', githubId:'user-private'}} });
    const server = http.createServer(route);
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const { port } = server.address();
    const baseUrl = \`http://127.0.0.1:\${port}\`;
    try {
      const response = await fetch(\`\${baseUrl}/api/chat\`, {
        method:'POST',
        headers: { cookie: \`ask_atlas_session=\${signedValue('session_private')}\`, origin:'http://localhost:8787', 'content-type':'application/json' },
        body: JSON.stringify({ question:'Can you tell me what is inside this project for a beginner?', mode:'explain', model:'auto' })
      });
      const payload = await response.json();
      const stored = await readStore((store) => store.requests[0]);
      console.log(JSON.stringify({ status: response.status, payload, stored: {
        questionText: stored.questionText,
        questionHash: stored.questionHash,
        rawQuestionStored: stored.rawQuestionStored,
        answerText: stored.answerText,
        answerHash: stored.answerHash,
        rawAnswerStored: stored.rawAnswerStored,
        status: stored.status,
      }}));
    } finally {
      await new Promise((resolve) => server.close(resolve));
    }
  `;
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", script], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      ASK_ATLAS_MOCK_PROVIDER: "1",
      ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT: "1",
      ASK_ATLAS_REQUIRE_MODEL_RATES: "0",
    },
  });
  assert.equal(result.status, 0, result.stderr);
  const { status, payload, stored } = JSON.parse(result.stdout);
  assert.equal(status, 200, JSON.stringify(payload));
  assert.equal(payload.status, "success");
  assert.match(payload.answer, /Trust layers/);
  assert.equal(stored.status, "success");
  assert.equal(stored.questionText, "");
  assert.equal(stored.rawQuestionStored, false);
  assert.match(stored.questionHash, /^[a-f0-9]{64}$/);
  assert.equal(stored.answerText, "");
  assert.equal(stored.rawAnswerStored, false);
  assert.match(stored.answerHash, /^[a-f0-9]{64}$/);
});

test("owner admin can manually grant one-time rewards and unknown actions fail", async () => {
  const admin = { githubId: "admin-1", login: "RenBing-Sumeru", role: "admin" };
  const target = { githubId: "reader-1", login: "reader", role: "user" };
  resetStoreForTests({
    ...emptyStore(),
    users: { "admin-1": { ...admin }, "reader-1": { ...target } },
    sessions: { session_admin: { sessionId: "session_admin", githubId: "admin-1" } },
  });
  const cookie = `ask_atlas_session=${signedValue("session_admin")}`;
  await withServer(async (baseUrl) => {
    const grant = await fetch(`${baseUrl}/api/admin/user`, {
      method: "POST",
      headers: { cookie, origin: "http://localhost:8787", "content-type": "application/json" },
      body: JSON.stringify({ githubId: "reader-1", action: "grant_star_bonus" }),
    });
    assert.equal(grant.status, 200);
    const first = await grant.json();
    assert.equal(first.user.starVerified, true);
    assert.equal(first.user.bonusCredits, 10);

    const duplicate = await fetch(`${baseUrl}/api/admin/user`, {
      method: "POST",
      headers: { cookie, origin: "http://localhost:8787", "content-type": "application/json" },
      body: JSON.stringify({ githubId: "reader-1", action: "grant_star_bonus" }),
    });
    assert.equal(duplicate.status, 200);
    const second = await duplicate.json();
    assert.equal(second.user.bonusCredits, 10);

    const unknown = await fetch(`${baseUrl}/api/admin/user`, {
      method: "POST",
      headers: { cookie, origin: "http://localhost:8787", "content-type": "application/json" },
      body: JSON.stringify({ githubId: "reader-1", action: "does_not_exist" }),
    });
    assert.equal(unknown.status, 400);
    assert.match(await unknown.text(), /Unknown admin user action/);
  });
});

test("admin HTTP APIs keep request list summarized and detail gated", async () => {
  const admin = { githubId: "admin-1", login: "RenBing-Sumeru", role: "admin" };
  resetStoreForTests({
    ...emptyStore(),
    users: { "admin-1": { ...admin } },
    sessions: { session_admin: { sessionId: "session_admin", githubId: "admin-1" } },
  });
  const record = await createRequestLog({
    user: admin,
    question: "How should I audit RLVR verifier gaming?",
    mode: "audit",
    model: "deepseek/deepseek-v4-pro",
    ip: "127.0.0.1",
    userAgent: "node-test",
    sources: [{
      id: "papers/09_audit_failure_contamination_verifier_attacks.md#chunk-1",
      index: 1,
      title: "Audit / Failure / Contamination",
      path: "papers/09_audit_failure_contamination_verifier_attacks.md",
      url: "https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data/blob/main/papers/09_audit_failure_contamination_verifier_attacks.md",
      type: "paper_map",
      snippet: "Verifier gaming and reward hacking audit signals.",
      score: 99,
    }],
  });
  await updateRequestLog(record.requestId, {
    status: "success",
    answerText: "Audit verifier gaming with source-grounded checks.",
    inputTokens: 150,
    outputTokens: 90,
    estimatedCostUsd: 0.002,
    retrievalConfidence: 0.9,
  });
  await addFeedback({
    user: admin,
    requestId: record.requestId,
    rating: "down",
    reason: "needs checklist",
    comment: "",
  });

  const cookie = `ask_atlas_session=${signedValue("session_admin")}`;
  await withServer(async (baseUrl) => {
    const dashboard = await fetch(`${baseUrl}/admin`, { headers: { cookie } });
    assert.equal(dashboard.status, 200);
    assert.match(dashboard.headers.get("content-type") || "", /text\/html/);

    const listResponse = await fetch(`${baseUrl}/api/admin/requests`, { headers: { cookie } });
    assert.equal(listResponse.status, 200);
    const list = await listResponse.json();
    assert.equal(list.requests.length, 1);
    assert.equal(list.requests[0].answerText, undefined);
    assert.match(list.requests[0].answerPreview, /source-grounded checks/);
    assert.equal(list.requests[0].feedback.rating, "down");

    const detailResponse = await fetch(`${baseUrl}/api/admin/request?id=${encodeURIComponent(record.requestId)}`, { headers: { cookie } });
    assert.equal(detailResponse.status, 200);
    const detail = await detailResponse.json();
    assert.equal(detail.request.answerText, "Audit verifier gaming with source-grounded checks.");
    assert.equal(detail.request.sourceDetails[0].path, "papers/09_audit_failure_contamination_verifier_attacks.md");
  });
});

test("admin user mutations are owner-only and cover ban and bonus reset", async () => {
  const owner = { githubId: "124780470", login: "RenBing-Sumeru", role: "admin" };
  const viewer = { githubId: "viewer-1", login: "trusted-reader", role: "allowlisted" };
  const target = {
    githubId: "target-1",
    login: "atlas-user",
    role: "user",
    starBonusCredits: 10,
    forkBonusCredits: 20,
    bonusCreditsUsed: 4,
  };
  resetStoreForTests({
    ...emptyStore(),
    users: {
      "124780470": { ...owner },
      "viewer-1": { ...viewer },
      "target-1": { ...target },
    },
    sessions: {
      session_owner: { sessionId: "session_owner", githubId: "124780470" },
      session_viewer: { sessionId: "session_viewer", githubId: "viewer-1" },
    },
    creditLedger: [
      {
        id: "star-1",
        githubId: "target-1",
        githubLogin: "atlas-user",
        creditType: "star_bonus",
        delta: 10,
        reason: "test star bonus",
        createdAt: new Date().toISOString(),
      },
      {
        id: "fork-1",
        githubId: "target-1",
        githubLogin: "atlas-user",
        creditType: "fork_bonus",
        delta: 20,
        reason: "test fork bonus",
        createdAt: new Date().toISOString(),
      },
      {
        id: "spent-1",
        githubId: "target-1",
        githubLogin: "atlas-user",
        creditType: "usage",
        delta: -4,
        reason: "test consumed bonus",
        createdAt: new Date().toISOString(),
      },
    ],
  });

  const ownerCookie = `ask_atlas_session=${signedValue("session_owner")}`;
  const viewerCookie = `ask_atlas_session=${signedValue("session_viewer")}`;
  const postHeaders = (cookie) => ({
    cookie,
    origin: "https://renbing-sumeru.github.io",
    "content-type": "application/json",
  });
  await withServer(async (baseUrl) => {
    const viewerList = await fetch(`${baseUrl}/api/admin/users`, { headers: { cookie: viewerCookie } });
    assert.equal(viewerList.status, 200);

    const deniedMutation = await fetch(`${baseUrl}/api/admin/user`, {
      method: "POST",
      headers: postHeaders(viewerCookie),
      body: JSON.stringify({ githubId: "target-1", action: "ban" }),
    });
    assert.equal(deniedMutation.status, 403);

    const banned = await fetch(`${baseUrl}/api/admin/user`, {
      method: "POST",
      headers: postHeaders(ownerCookie),
      body: JSON.stringify({ githubId: "target-1", action: "ban" }),
    });
    assert.equal(banned.status, 200);
    assert.equal((await banned.json()).user.role, "banned");

    const reset = await fetch(`${baseUrl}/api/admin/user`, {
      method: "POST",
      headers: postHeaders(ownerCookie),
      body: JSON.stringify({ githubId: "target-1", action: "reset_bonus_used" }),
    });
    assert.equal(reset.status, 200);
    const resetPayload = await reset.json();
    assert.equal(resetPayload.user.bonusCreditsUsed, 0);

    const refreshedUsers = await fetch(`${baseUrl}/api/admin/users`, { headers: { cookie: ownerCookie } });
    const usersPayload = await refreshedUsers.json();
    const refreshedTarget = usersPayload.users.find((row) => row.githubId === "target-1");
    assert.equal(refreshedTarget.role, "banned");
    assert.equal(refreshedTarget.bonusCredits, 30);
  });
});

test("admin readiness is gated and redacts configured secrets", () => {
  const script = `
    import http from 'node:http';
    import { route } from './src/server.mjs';
    import { signedValue } from './src/crypto.mjs';
    import { resetStoreForTests } from './src/store.mjs';
    const emptyStore = () => ({ users:{}, sessions:{}, usageDaily:{}, requests:[], feedback:[], events:[], creditLedger:[], quotaReservations:{}, rateWindows:{} });
    resetStoreForTests({
      ...emptyStore(),
      users: { '123456': { githubId: '123456', login: 'RenBing-Sumeru', role: 'admin' } },
      sessions: { session_admin: { sessionId: 'session_admin', githubId: '123456' } }
    });
    const server = http.createServer(route);
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const { port } = server.address();
    const baseUrl = \`http://127.0.0.1:\${port}\`;
    try {
      const denied = await fetch(\`\${baseUrl}/api/admin/readiness\`);
      const allowed = await fetch(\`\${baseUrl}/api/admin/readiness\`, {
        headers: { cookie: \`ask_atlas_session=\${signedValue('session_admin')}\` }
      });
      const payload = await allowed.json();
      console.log(JSON.stringify({ deniedStatus: denied.status, allowedStatus: allowed.status, payload }));
    } finally {
      await new Promise((resolve) => server.close(resolve));
    }
  `;
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", script], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      ASK_ATLAS_DEV_AUTH: "0",
      ASK_ATLAS_MOCK_PROVIDER: "0",
      ASK_ATLAS_BASE_URL: "https://ask.example.test",
      ASK_ATLAS_SESSION_SECRET: "redaction-sentinel-session-value-123456789",
      ASK_ATLAS_TOKEN_ENCRYPTION_SECRET: "redaction-sentinel-token-value-123456789",
      GITHUB_CLIENT_ID: "github-client-id",
      GITHUB_CLIENT_SECRET: "redaction-sentinel-github-oauth-value",
      ASK_ATLAS_ADMIN_GITHUB_IDS: "123456",
      QIHOO_API_KEY: "redaction-sentinel-provider-value",
      ASK_ATLAS_STORE_BACKEND: "json",
      ASK_ATLAS_ALLOW_JSON_STORE: "1",
      DATABASE_URL: "postgres://user:redaction-sentinel-database-value@db.example.test:5432/ask",
      UPSTASH_REDIS_REST_URL: "https://redis.example.test",
      UPSTASH_REDIS_REST_TOKEN: "redaction-sentinel-redis-value",
      ASK_ATLAS_MODEL_RATES_JSON: '{"deepseek/deepseek-v4-pro":{"input_per_million":1,"output_per_million":2},"z-ai/glm-5.2":{"input_per_million":1,"output_per_million":2}}',
    },
  });
  assert.equal(result.status, 0, result.stderr);
  const { deniedStatus, allowedStatus, payload } = JSON.parse(result.stdout);
  assert.equal(deniedStatus, 401);
  assert.equal(allowedStatus, 200);
  assert.equal(Array.isArray(payload.checks), true);
  const body = JSON.stringify(payload);
  assert.doesNotMatch(body, /redaction-sentinel-provider-value/);
  assert.doesNotMatch(body, /redaction-sentinel-github-oauth-value/);
  assert.doesNotMatch(body, /redaction-sentinel-session-value/);
  assert.doesNotMatch(body, /redaction-sentinel-token-value/);
  assert.doesNotMatch(body, /redaction-sentinel-database-value/);
  assert.doesNotMatch(body, /redaction-sentinel-redis-value/);
});

test("health endpoint exposes deployment commit without leaking secrets", () => {
  const script = `
    import http from 'node:http';
    import { route } from './src/server.mjs';
    const server = http.createServer(route);
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const { port } = server.address();
    try {
      const response = await fetch(\`http://127.0.0.1:\${port}/api/health\`);
      console.log(await response.text());
    } finally {
      await new Promise((resolve) => server.close(resolve));
    }
  `;
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", script], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      ASK_ATLAS_DEPLOYMENT_COMMIT: "abc123def456",
      ASK_ATLAS_SESSION_SECRET: "secret-redaction-sentinel",
      QIHOO_API_KEY: "provider-redaction-sentinel",
    },
  });
  assert.equal(result.status, 0, result.stderr);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.ok, true);
  assert.equal(payload.service, "ask-atlas");
  assert.equal(payload.commit, "abc123def456");
  assert.doesNotMatch(result.stdout, /secret-redaction-sentinel|provider-redaction-sentinel/);
});
