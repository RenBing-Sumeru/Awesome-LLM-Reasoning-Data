import { CONFIG, isAdminUser, isAllowlistedUser, isOwnerAdminUser, pagesUrl } from "./config.mjs";
import { decrypt, encrypt, randomId, signedValue, verifySignedValue } from "./crypto.mjs";
import { clearCookie, parseCookies, redirect, setCookie } from "./http.mjs";
import { mutateStore, readStore } from "./store.mjs";

const SESSION_COOKIE = "ask_atlas_session";
const OAUTH_STATE_COOKIE = "ask_atlas_oauth_state";
export const USAGE_CONSENT_VERSION = "2026-06-17";

function originOf(value) {
  try {
    return new URL(value).origin;
  } catch (_error) {
    return "";
  }
}

function crossSiteCookieOptions(req) {
  const secure = CONFIG.baseUrl.startsWith("https://") || req.headers["x-forwarded-proto"] === "https";
  const crossSitePages = secure && originOf(CONFIG.baseUrl) !== originOf(CONFIG.pagesBaseUrl);
  return {
    secure,
    sameSite: crossSitePages ? "None" : "Lax",
  };
}

export function safeReturnTo(value, fallback = pagesUrl("ask.html")) {
  const raw = String(value || "").trim();
  if (!raw) return fallback;
  if (raw.startsWith("/") && !raw.startsWith("//")) return raw;
  try {
    const parsed = new URL(raw);
    const base = new URL(CONFIG.baseUrl);
    const pages = new URL(CONFIG.pagesBaseUrl);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return fallback;
    if (parsed.origin === base.origin) return parsed.href;
    const pagesPrefix = `${CONFIG.pagesBaseUrl.replace(/\/$/, "")}/`;
    if (parsed.origin === pages.origin && (parsed.href === CONFIG.pagesBaseUrl || parsed.href.startsWith(pagesPrefix))) {
      return parsed.href;
    }
  } catch (_error) {
    return fallback;
  }
  return fallback;
}

function returnToFromReq(req, fallback) {
  const url = new URL(req.url, CONFIG.baseUrl);
  return safeReturnTo(url.searchParams.get("return_to"), fallback);
}

function sessionCookie(sessionId, req) {
  return setCookie(SESSION_COOKIE, signedValue(sessionId), {
    maxAge: 60 * 60 * 24 * 30,
    ...crossSiteCookieOptions(req),
  });
}

export async function getSession(req) {
  const signed = parseCookies(req)[SESSION_COOKIE];
  const sessionId = verifySignedValue(signed);
  if (!sessionId) return null;
  return readStore((store) => store.sessions[sessionId] || null);
}

export async function getCurrentUser(req) {
  const session = await getSession(req);
  if (!session?.githubId) return null;
  const user = await readStore((store) => store.users[String(session.githubId)] || null);
  if (user?.encryptedAccessToken && accessTokenExpired(user)) {
    return mutateStore((store) => {
      const current = store.users[String(session.githubId)] || user;
      current.encryptedAccessToken = "";
      current.accessTokenUpdatedAt = "";
      current.updatedAt = new Date().toISOString();
      store.users[String(session.githubId)] = current;
      return current;
    });
  }
  return user;
}

export async function requireUser(req) {
  const user = await getCurrentUser(req);
  if (!user) {
    const error = new Error("GitHub login is required.");
    error.status = 401;
    throw error;
  }
  if (user.role === "banned") {
    const error = new Error("This account is not allowed to use Ask the Atlas.");
    error.status = 403;
    throw error;
  }
  return user;
}

export async function requireAdminViewer(req) {
  const user = await requireUser(req);
  if (!isAdminUser(user) && !isAllowlistedUser(user)) {
    const error = new Error("Admin access is restricted to RenBing-Sumeru and allowlisted users.");
    error.status = 403;
    throw error;
  }
  return user;
}

export async function requireOwnerAdmin(req) {
  const user = await requireUser(req);
  if (!isOwnerAdminUser(user)) {
    const error = new Error("This admin action is restricted to the repository owner/admin.");
    error.status = 403;
    throw error;
  }
  return user;
}

function oauthStateCookie(state, req) {
  return setCookie(OAUTH_STATE_COOKIE, signedValue(state), {
    maxAge: 60 * 10,
    ...crossSiteCookieOptions(req),
  });
}

export async function beginGithubLogin(req, res) {
  const state = randomId(18);
  const returnTo = returnToFromReq(req, pagesUrl("ask.html"));
  await mutateStore((store) => {
    store.events.push({ type: "oauth_state", state, returnTo, createdAt: new Date().toISOString(), expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString() });
    store.events = store.events.slice(-500);
  });
  const params = new URLSearchParams({
    client_id: CONFIG.githubClientId,
    redirect_uri: `${CONFIG.baseUrl}/api/auth/github/callback`,
    scope: "read:user",
    state,
  });
  redirect(res, `https://github.com/login/oauth/authorize?${params.toString()}`, {
    "set-cookie": oauthStateCookie(state, req),
  });
}

async function consumeState(req, state) {
  const cookieState = verifySignedValue(parseCookies(req)[OAUTH_STATE_COOKIE]);
  if (!cookieState || cookieState !== state) return false;
  const now = Date.now();
  return mutateStore((store) => {
    const index = store.events.findIndex((event) => event.type === "oauth_state" && event.state === state);
    if (index < 0) return false;
    if (Date.parse(store.events[index].expiresAt || "") < now) {
      store.events.splice(index, 1);
      return false;
    }
    const [event] = store.events.splice(index, 1);
    return { returnTo: safeReturnTo(event.returnTo, pagesUrl("ask.html")) };
  });
}

async function exchangeCode(code) {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      client_id: CONFIG.githubClientId,
      client_secret: CONFIG.githubClientSecret,
      code,
      redirect_uri: `${CONFIG.baseUrl}/api/auth/github/callback`,
    }),
  });
  const payload = await response.json();
  if (!response.ok || !payload.access_token) {
    throw new Error(payload.error_description || payload.error || "GitHub OAuth token exchange failed.");
  }
  return payload.access_token;
}

async function fetchGitHubUser(accessToken) {
  const response = await fetch("https://api.github.com/user", {
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${accessToken}`,
      "user-agent": "ask-atlas",
    },
  });
  const payload = await response.json();
  if (!response.ok || !payload.id) {
    throw new Error(payload.message || "Could not fetch GitHub profile.");
  }
  return payload;
}

export async function createDevSession(res, req) {
  const now = new Date().toISOString();
  const login = "RenBing-Sumeru";
  const githubId = "dev-renbing-sumeru";
  const sessionId = randomId();
  await mutateStore((store) => {
    store.users[githubId] = {
      githubId,
      login,
      avatarUrl: "",
      profileUrl: "https://github.com/RenBing-Sumeru",
      role: "admin",
      encryptedAccessToken: "",
      starVerified: true,
      forkVerified: true,
      createdAt: store.users[githubId]?.createdAt || now,
      lastSeenAt: now,
    };
    store.sessions[sessionId] = { sessionId, githubId, createdAt: now, lastSeenAt: now };
  });
  redirect(res, returnToFromReq(req, "/ask"), { "set-cookie": sessionCookie(sessionId, req) });
}

export async function handleGithubCallback(req, res, url) {
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const clearState = clearCookie(OAUTH_STATE_COOKIE, crossSiteCookieOptions(req));
  const consumed = code && state ? await consumeState(req, state) : null;
  if (!code || !state || !consumed) {
    redirect(res, "/ask?auth=failed", { "set-cookie": clearState });
    return;
  }
  const accessToken = await exchangeCode(code);
  const ghUser = await fetchGitHubUser(accessToken);
  const now = new Date().toISOString();
  const sessionId = randomId();
  const githubId = String(ghUser.id);
  await mutateStore((store) => {
    const existing = store.users[githubId] || {};
    const shouldStoreToken = CONFIG.githubTokenRetentionDays > 0;
    const user = {
      ...existing,
      githubId,
      login: ghUser.login,
      avatarUrl: ghUser.avatar_url,
      profileUrl: ghUser.html_url,
      role: existing.role || "user",
      encryptedAccessToken: shouldStoreToken ? encrypt(accessToken) : "",
      accessTokenUpdatedAt: shouldStoreToken ? now : "",
      createdAt: existing.createdAt || now,
      lastSeenAt: now,
    };
    if (isAdminUser(user)) user.role = "admin";
    store.users[githubId] = user;
    store.sessions[sessionId] = { sessionId, githubId, createdAt: now, lastSeenAt: now };
  });
  redirect(res, consumed.returnTo || pagesUrl("ask.html"), { "set-cookie": [clearState, sessionCookie(sessionId, req)] });
}

export function logout(res, req) {
  redirect(res, returnToFromReq(req, pagesUrl("ask.html")), { "set-cookie": clearCookie(SESSION_COOKIE, crossSiteCookieOptions(req)) });
}

export function logoutHeaders(req) {
  return { "set-cookie": clearCookie(SESSION_COOKIE, crossSiteCookieOptions(req)) };
}

export function logoutReturnTo(req) {
  return returnToFromReq(req, pagesUrl("ask.html"));
}

export async function acceptUsageConsent(user, { storeRawQuestionDefault = true } = {}) {
  const now = new Date().toISOString();
  return mutateStore((store) => {
    const current = store.users[user.githubId] || user;
    current.usageConsentAcceptedAt = now;
    current.usageConsentVersion = USAGE_CONSENT_VERSION;
    current.storeRawQuestionDefault = Boolean(storeRawQuestionDefault);
    current.updatedAt = now;
    store.users[user.githubId] = current;
    return current;
  });
}

function accessTokenExpired(user) {
  const retentionDays = CONFIG.githubTokenRetentionDays;
  if (!Number.isFinite(retentionDays) || retentionDays <= 0) return true;
  const updated = Date.parse(user?.accessTokenUpdatedAt || "");
  if (!Number.isFinite(updated)) return true;
  return Date.now() - updated > retentionDays * 24 * 60 * 60 * 1000;
}

export function accessTokenForUser(user) {
  if (accessTokenExpired(user)) return "";
  return decrypt(user?.encryptedAccessToken || "");
}
