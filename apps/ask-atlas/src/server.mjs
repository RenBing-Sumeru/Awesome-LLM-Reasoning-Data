import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CONFIG, isAdminUser, isAllowlistedUser, isOwnerAdminUser, APP_ROOT, validateRuntimeConfig } from "./config.mjs";
import { acceptUsageConsent, beginGithubLogin, createDevSession, getCurrentUser, handleGithubCallback, logoutHeaders, logoutReturnTo, requireAdminViewer, requireOwnerAdmin, requireUser, USAGE_CONSENT_VERSION } from "./auth.mjs";
import { addFeedback, adminCosts, adminGaps, adminGapsExport, adminOverview, adminRequestDetail, adminRequests, adminUsers, createRequestLog, updateRequestLog, updateUserAdmin, userHistory } from "./logging.mjs";
import { checkQuota, finalizeQuotaReservation, quotaSnapshot, refreshRewards, releaseQuotaReservation, reserveQuota } from "./quota.mjs";
import { callModel, estimateCost, estimateTokens, MODEL_LABELS, resolveModel } from "./provider360.mjs";
import { checkAttemptRateLimits, checkRateLimits, checkRewardRefreshRateLimit } from "./rate-limit.mjs";
import { classifyQuestionScope, retrieveSources } from "./rag.mjs";
import { collectLaunchReadiness } from "./readiness.mjs";
import { clientIp, parseUrl, readJson, redirect, sendJson as rawSendJson } from "./http.mjs";
import { hashValue } from "./crypto.mjs";
import { checkStoreHealth } from "./store.mjs";

const PUBLIC_ROOT = path.join(APP_ROOT, "public");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

function safeJoin(root, requested) {
  const clean = decodeURIComponent(requested).replace(/^\/+/, "");
  const full = path.resolve(root, clean);
  return full === root || full.startsWith(`${root}${path.sep}`) ? full : null;
}

function canonicalPathname(pathname) {
  try {
    const decoded = decodeURIComponent(pathname);
    const withSlash = decoded.startsWith("/") ? decoded : `/${decoded}`;
    const normalized = path.posix.normalize(withSlash);
    return normalized.startsWith("/") ? normalized : `/${normalized}`;
  } catch (_error) {
    return "";
  }
}

function staticRouteFor(pathname) {
  return canonicalPathname(pathname) || pathname;
}

function serveStatic(res, pathname, { allowAdmin = false } = {}) {
  const route = pathname === "/" ? "/ask.html" : pathname;
  const canonical = staticRouteFor(route);
  if (!allowAdmin && canonical === "/admin.html") return false;
  const full = safeJoin(PUBLIC_ROOT, route);
  if (!full || !fs.existsSync(full) || fs.statSync(full).isDirectory()) return false;
  res.writeHead(200, {
    "content-type": MIME[path.extname(full)] || "application/octet-stream",
    "cache-control": route.includes("/assets/") ? "public, max-age=600" : "no-store",
    "content-security-policy": "default-src 'self'; connect-src 'self'; img-src 'self' https://avatars.githubusercontent.com data:; style-src 'self'; script-src 'self'; base-uri 'self'; frame-ancestors 'none'",
    "x-content-type-options": "nosniff",
    "referrer-policy": "same-origin",
    "x-frame-options": "DENY",
  });
  fs.createReadStream(full).pipe(res);
  return true;
}

function originOf(value) {
  try {
    return new URL(value).origin;
  } catch (_error) {
    return "";
  }
}

function devLocalOriginsAllowed() {
  return CONFIG.devAuth || CONFIG.mockProvider || CONFIG.appEnv === "dev";
}

function allowedOrigins() {
  const origins = [
    originOf(CONFIG.baseUrl),
    originOf(CONFIG.pagesBaseUrl),
    ...CONFIG.allowedOrigins.map(originOf),
  ];
  if (devLocalOriginsAllowed()) {
    origins.push(`http://localhost:${CONFIG.port}`, `http://127.0.0.1:${CONFIG.port}`);
  }
  return new Set(origins.filter(Boolean));
}

function originAllowed(req) {
  if (["GET", "HEAD", "OPTIONS"].includes(req.method || "GET")) return true;
  const origin = req.headers.origin;
  if (!origin) return Boolean(CONFIG.devAuth || CONFIG.mockProvider);
  return allowedOrigins().has(String(origin).replace(/\/$/, ""));
}

function corsHeaders(req) {
  const origin = req.headers.origin;
  if (!origin || !allowedOrigins().has(String(origin).replace(/\/$/, ""))) {
    return { vary: "Origin" };
  }
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-credentials": "true",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type",
    vary: "Origin",
  };
}

function applyApiHeaders(req, res) {
  const headers = corsHeaders(req);
  res.__askAtlasApiHeaders = headers;
  if (typeof res.setHeader === "function") {
    for (const [key, value] of Object.entries(headers)) {
      res.setHeader(key, value);
    }
  }
}

function sendJson(res, status, payload, headers = {}) {
  rawSendJson(res, status, payload, { ...(res.__askAtlasApiHeaders || {}), ...headers });
}

function canViewOperations(user) {
  return Boolean(user && (isAdminUser(user) || isAllowlistedUser(user)));
}

function redactQuotaForUser(quota, user) {
  if (!quota || canViewOperations(user)) return quota;
  const {
    tokenCap: _tokenCap,
    costCapUsd: _costCapUsd,
    inputTokens: _inputTokens,
    outputTokens: _outputTokens,
    estimatedCostUsd: _estimatedCostUsd,
    ...publicQuota
  } = quota;
  return publicQuota;
}

async function visibleQuota(user) {
  return redactQuotaForUser(await quotaSnapshot(user), user);
}

function visibleUsage(user, usage = {}) {
  const payload = {
    retrievalConfidence: usage.retrievalConfidence,
  };
  if (canViewOperations(user)) {
    payload.inputTokens = usage.inputTokens;
    payload.outputTokens = usage.outputTokens;
    payload.estimatedCostUsd = usage.estimatedCostUsd;
  }
  return payload;
}

async function projectedCostCheck(user, model, question, sources) {
  const quota = await quotaSnapshot(user);
  const estimatedInput = estimateTokens(question) + estimateTokens(sources.map((source) => source.snippet).join("\n\n")) + 500;
  const projected = estimateCost(model, estimatedInput, CONFIG.maxOutputTokens);
  if (!projected) return { ok: true, projected };
  if (projected > CONFIG.maxSingleRequestCostUsd) {
    return { ok: false, projected, reason: "projected request would exceed single-request cost cap" };
  }
  if (quota.estimatedCostUsd + projected > CONFIG.userDailyCostCap) {
    return { ok: false, projected, reason: "projected request would exceed user daily cost cap" };
  }
  return { ok: true, projected };
}

function evidenceMode(sources = [], confidence = 0) {
  const hasPrimer = sources.some((source) => source.type === "primer");
  const hasAtlas = sources.some((source) => source.type !== "primer");
  if (hasPrimer && hasAtlas) return "companion paper + atlas grounded";
  if (hasPrimer) return "companion paper grounded";
  if (hasAtlas && confidence >= CONFIG.minRetrievalConfidence) return "atlas grounded";
  if (hasAtlas) return "limited atlas evidence + model background";
  return "no repository evidence";
}

function publicSources(sources = []) {
  return sources.map((source) => ({
    index: source.index,
    title: source.title,
    type: source.type,
    path: source.path,
    url: source.url,
  }));
}

function publicUser(user) {
  if (!user) return null;
  return {
    githubId: user.githubId,
    login: user.login,
    avatarUrl: user.avatarUrl,
    role: user.role || "user",
    admin: isAdminUser(user),
    allowlisted: isAllowlistedUser(user),
    ownerAdmin: isOwnerAdminUser(user),
    starVerified: Boolean(user.starVerified),
    forkVerified: Boolean(user.forkVerified),
    usageConsentAcceptedAt: user.usageConsentAcceptedAt || "",
    usageConsentVersion: user.usageConsentVersion || "",
    consentRequired: user.usageConsentVersion !== USAGE_CONSENT_VERSION,
    storeRawQuestionDefault: user.storeRawQuestionDefault !== false,
  };
}

function healthPayload(extra = {}) {
  return {
    ok: true,
    service: "ask-atlas",
    environment: CONFIG.appEnv,
    commit: CONFIG.deploymentCommit || "",
    ...extra,
  };
}

async function handleApi(req, res, url) {
  if (url.pathname === "/api/health") {
    if (url.searchParams.get("db") === "1") {
      try {
        const storage = await checkStoreHealth();
        sendJson(res, 200, healthPayload({
          storage: {
            ok: true,
            backend: storage.backend,
            tables: storage.tables || 0,
            checkedColumns: storage.checkedColumns || 0,
            rlsTables: storage.rlsTables || 0,
          },
        }));
      } catch (_error) {
        sendJson(res, 503, {
          ok: false,
          service: "ask-atlas",
          environment: CONFIG.appEnv,
          commit: CONFIG.deploymentCommit || "",
          storage: {
            ok: false,
          },
        });
      }
      return;
    }
    sendJson(res, 200, healthPayload());
    return;
  }
  if (url.pathname === "/api/auth/github/login") {
    if (CONFIG.devAuth) {
      await createDevSession(res, req);
      return;
    }
    if (!CONFIG.githubClientId || !CONFIG.githubClientSecret) {
      sendJson(res, 500, { error: "GitHub OAuth is not configured." });
      return;
    }
    await beginGithubLogin(req, res);
    return;
  }
  if (url.pathname === "/api/auth/github/callback") {
    await handleGithubCallback(req, res, url);
    return;
  }
  if (url.pathname === "/api/auth/logout") {
    if (req.method !== "POST") {
      sendJson(res, 405, { error: "Logout requires POST." });
      return;
    }
    sendJson(res, 200, { ok: true, returnTo: logoutReturnTo(req) }, logoutHeaders(req));
    return;
  }
  if (url.pathname === "/api/me") {
    const user = await getCurrentUser(req);
    sendJson(res, 200, {
      user: publicUser(user),
      quota: user ? await visibleQuota(user) : null,
      models: CONFIG.allowedModels.map((model) => ({ id: model, label: MODEL_LABELS[model] || model })),
      limits: { maxInputChars: CONFIG.maxInputChars, maxOutputTokens: CONFIG.maxOutputTokens },
    });
    return;
  }
  if (url.pathname === "/api/history") {
    const user = await requireUser(req);
    sendJson(res, 200, { history: await userHistory(user) });
    return;
  }
  if (url.pathname === "/api/consent" && req.method === "POST") {
    const user = await requireUser(req);
    const body = await readJson(req);
    const updated = await acceptUsageConsent(user, {
      storeRawQuestionDefault: body.storeRawQuestionDefault !== false,
    });
    sendJson(res, 200, { ok: true, user: publicUser(updated) });
    return;
  }
  if (url.pathname === "/api/rewards/refresh" && req.method === "POST") {
    const user = await requireUser(req);
    const rate = await checkRewardRefreshRateLimit(user, clientIp(req));
    if (!rate.ok) {
      sendJson(res, 429, { error: rate.reason, quota: await visibleQuota(user) });
      return;
    }
    const quota = await refreshRewards(user);
    sendJson(res, 200, { ok: true, quota: redactQuotaForUser(quota, user) });
    return;
  }
  if (url.pathname === "/api/chat" && req.method === "POST") {
    const started = Date.now();
    const user = await requireUser(req);
    const body = await readJson(req);
    if (user.usageConsentVersion !== USAGE_CONSENT_VERSION) {
      sendJson(res, 428, {
        error: "Usage notice consent is required before asking questions.",
        consentRequired: true,
        consentVersion: USAGE_CONSENT_VERSION,
        quota: await visibleQuota(user),
      });
      return;
    }
    const question = String(body.question || "").trim();
    const mode = String(body.mode || "explain").trim();
    const requestedModel = String(body.model || "auto");
    let model = resolveModel(requestedModel, { question, mode });
    const storeRawQuestion = body.storeRawQuestion === undefined
      ? user.storeRawQuestionDefault !== false
      : body.storeRawQuestion !== false;
    if (!question) {
      sendJson(res, 400, { error: "Question is required." });
      return;
    }
    if (question.length > CONFIG.maxInputChars) {
      sendJson(res, 413, { error: `Question is too long. Limit: ${CONFIG.maxInputChars} characters.` });
      return;
    }
    const attemptRate = await checkAttemptRateLimits(user, clientIp(req));
    if (!attemptRate.ok) {
      sendJson(res, 429, { error: attemptRate.reason, quota: await visibleQuota(user) });
      return;
    }
    const context = {
      track: body.track || url.searchParams.get("track") || "",
      entry: body.entry || url.searchParams.get("entry") || "",
      card: body.card || url.searchParams.get("card") || "",
    };
    const scope = classifyQuestionScope(question, context);
    if (!scope.allowed) {
      const sources = [];
      const log = await createRequestLog({
        user,
        question,
        mode,
        model,
        ip: clientIp(req),
        userAgent: req.headers["user-agent"] || "",
        sources,
        status: "out_of_scope",
        storeRawQuestion,
      });
      await updateRequestLog(log.requestId, { status: "out_of_scope", latencyMs: Date.now() - started });
      sendJson(res, 200, {
        requestId: log.requestId,
        status: "out_of_scope",
        answer: "Ask the Atlas can answer questions about post-training reasoning data, verifiers, rewards, agent/environment data, paper cards, benchmarks, audit topics, and how to use this Awesome-LLM-Reasoning-Data project. Please ask within that scope.",
        sources: [],
        quota: await visibleQuota(user),
      });
      return;
    }
    const rate = await checkRateLimits(user, clientIp(req));
    if (!rate.ok) {
      sendJson(res, 429, { error: rate.reason, quota: await visibleQuota(user) });
      return;
    }
    const quotaCheck = await checkQuota(user);
    if (!quotaCheck.ok) {
      sendJson(res, 429, { error: quotaCheck.reasons.join("; "), quota: redactQuotaForUser(quotaCheck.quota, user) });
      return;
    }
    const retrieval = retrieveSources({
      question,
      mode,
      ...context,
    });
    model = resolveModel(requestedModel, { question, mode, sources: retrieval.results });
    const log = await createRequestLog({
      user,
      question,
      mode,
      model,
      ip: clientIp(req),
      userAgent: req.headers["user-agent"] || "",
      sources: retrieval.results,
      storeRawQuestion,
    });
    if (retrieval.confidence < CONFIG.minRetrievalConfidence && retrieval.results.length === 0) {
      await updateRequestLog(log.requestId, {
        status: "blocked",
        errorCode: "low_retrieval_confidence",
        latencyMs: Date.now() - started,
        retrievalConfidence: retrieval.confidence,
      });
      sendJson(res, 200, {
        requestId: log.requestId,
        status: "blocked",
        evidenceMode: evidenceMode([], retrieval.confidence),
        retrievalConfidence: retrieval.confidence,
        answer: "## Short answer\n\nI could not find enough companion-paper or repository evidence for that question yet.\n\n## Trust layers\n\n- Companion paper evidence: No matching companion-paper evidence was retrieved.\n- Repository atlas evidence: No matching repository source was retrieved.\n- Model background knowledge: Not used for this answer because the source grounding was too weak.\n\n## What to ask next\n\nTry naming a paper, card, track, or concept from post-training reasoning data, such as PRM, RLVR, verifier gaming, agent trajectories, benchmark contamination, or how to use this Awesome-LLM-Reasoning-Data project.",
        sources: [],
        quota: await visibleQuota(user),
      });
      return;
    }
    const projected = await projectedCostCheck(user, model, question, retrieval.results);
    if (!projected.ok) {
      await updateRequestLog(log.requestId, {
        status: "blocked",
        errorCode: "projected_cost_cap",
        latencyMs: Date.now() - started,
      });
      sendJson(res, 429, { error: projected.reason, quota: await visibleQuota(user) });
      return;
    }
    const reservation = await reserveQuota(user, {
      requestId: log.requestId,
      inputTokens: estimateTokens(question) + estimateTokens(retrieval.results.map((source) => source.snippet).join("\n\n")) + 500,
      outputTokens: CONFIG.maxOutputTokens,
      estimatedCostUsd: projected.projected || 0,
    });
    if (!reservation.ok) {
      await updateRequestLog(log.requestId, {
        status: "blocked",
        errorCode: "quota_reservation_failed",
        latencyMs: Date.now() - started,
      });
      sendJson(res, 429, { error: reservation.reasons.join("; "), quota: redactQuotaForUser(reservation.quota, user) });
      return;
    }
    try {
      const result = await callModel({ question, mode, model, sources: retrieval.results, retrievalConfidence: retrieval.confidence });
      const quota = await finalizeQuotaReservation(user, reservation.reservation.reservationId, {
        requestId: log.requestId,
        inputTokens: result.inputTokens,
        outputTokens: result.outputTokens,
        estimatedCostUsd: result.estimatedCostUsd,
      });
      await updateRequestLog(log.requestId, {
        status: "success",
        answerText: storeRawQuestion ? result.text : "",
        answerHash: hashValue(result.text),
        rawAnswerStored: Boolean(storeRawQuestion),
        inputTokens: result.inputTokens,
        outputTokens: result.outputTokens,
        estimatedCostUsd: result.estimatedCostUsd,
        latencyMs: Date.now() - started,
        retrievalConfidence: retrieval.confidence,
      });
      sendJson(res, 200, {
        requestId: log.requestId,
        status: "success",
        evidenceMode: evidenceMode(retrieval.results, retrieval.confidence),
        retrievalConfidence: retrieval.confidence,
        answer: result.text,
        model: result.model,
        mock: result.mock,
        sources: publicSources(retrieval.results),
        usage: visibleUsage(user, {
          inputTokens: result.inputTokens,
          outputTokens: result.outputTokens,
          estimatedCostUsd: result.estimatedCostUsd,
          retrievalConfidence: retrieval.confidence,
        }),
        quota: redactQuotaForUser(quota, user),
      });
    } catch (error) {
      await releaseQuotaReservation(user, reservation.reservation.reservationId);
      await updateRequestLog(log.requestId, {
        status: "error",
        errorCode: "provider_error",
        latencyMs: Date.now() - started,
      });
      sendJson(res, error.status || 500, { error: "Model provider request failed. Please try again later.", quota: await visibleQuota(user) });
    }
    return;
  }
  if (url.pathname === "/api/feedback" && req.method === "POST") {
    const user = await requireUser(req);
    const body = await readJson(req);
    const item = await addFeedback({
      user,
      requestId: String(body.requestId || ""),
      rating: String(body.rating || ""),
      reason: String(body.reason || ""),
      comment: String(body.comment || ""),
    });
    sendJson(res, 200, { ok: true, feedback: item });
    return;
  }
  if (url.pathname === "/api/admin/overview") {
    await requireAdminViewer(req);
    sendJson(res, 200, await adminOverview());
    return;
  }
  if (url.pathname === "/api/admin/readiness") {
    await requireAdminViewer(req);
    sendJson(res, 200, collectLaunchReadiness());
    return;
  }
  if (url.pathname === "/api/admin/users") {
    await requireAdminViewer(req);
    sendJson(res, 200, { users: await adminUsers() });
    return;
  }
  if (url.pathname === "/api/admin/requests") {
    await requireAdminViewer(req);
    sendJson(res, 200, { requests: await adminRequests() });
    return;
  }
  if (url.pathname === "/api/admin/request") {
    await requireAdminViewer(req);
    const requestId = String(url.searchParams.get("id") || "");
    if (!requestId) {
      sendJson(res, 400, { error: "Request id is required." });
      return;
    }
    const request = await adminRequestDetail(requestId);
    sendJson(res, request ? 200 : 404, request ? { request } : { error: "Request not found." });
    return;
  }
  if (url.pathname === "/api/admin/costs") {
    await requireAdminViewer(req);
    sendJson(res, 200, { costs: await adminCosts() });
    return;
  }
  if (url.pathname === "/api/admin/gaps") {
    await requireAdminViewer(req);
    sendJson(res, 200, await adminGaps());
    return;
  }
  if (url.pathname === "/api/admin/gaps/export") {
    await requireAdminViewer(req);
    sendJson(res, 200, await adminGapsExport());
    return;
  }
  if (url.pathname === "/api/admin/user" && req.method === "POST") {
    const admin = await requireOwnerAdmin(req);
    const body = await readJson(req);
    const user = await updateUserAdmin({ githubId: body.githubId, action: body.action, admin });
    sendJson(res, user ? 200 : 404, user ? { ok: true, user } : { error: "User not found." });
    return;
  }
  sendJson(res, 404, { error: "API route not found." });
}

async function route(req, res) {
  const url = parseUrl(req);
  const pathname = canonicalPathname(url.pathname);
  try {
    if (url.pathname.startsWith("/api/")) {
      applyApiHeaders(req, res);
      if (!originAllowed(req)) {
        sendJson(res, 403, { error: "Invalid request origin." });
        return;
      }
      if (req.method === "OPTIONS") {
        res.writeHead(204, res.__askAtlasApiHeaders || {});
        res.end();
        return;
      }
      await handleApi(req, res, url);
      return;
    }
    if (!pathname) {
      sendJson(res, 400, { error: "Invalid request path." });
      return;
    }
    if (pathname === "/ask") {
      serveStatic(res, "/ask.html");
      return;
    }
    if (pathname === "/admin" || pathname === "/admin.html") {
      try {
        await requireAdminViewer(req);
      } catch (error) {
        if (error.status === 401) {
          redirect(res, "/ask?admin=login-required");
          return;
        }
        throw error;
      }
      serveStatic(res, "/admin.html", { allowAdmin: true });
      return;
    }
    if (serveStatic(res, url.pathname)) return;
    sendJson(res, 404, { error: "Not found." });
  } catch (error) {
    sendJson(res, error.status || 500, { error: error.status ? error.message : "Internal server error." });
  }
}

if (fileURLToPath(import.meta.url) === path.resolve(process.argv[1] || "")) {
  validateRuntimeConfig();
  http.createServer(route).listen(CONFIG.port, () => {
    console.log(`Ask the Atlas listening on ${CONFIG.baseUrl}`);
    if (CONFIG.mockProvider) console.log("Mock provider enabled.");
    if (CONFIG.devAuth) console.log("Development GitHub auth enabled.");
  });
}

export { route };
