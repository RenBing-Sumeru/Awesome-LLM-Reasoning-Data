import { CONFIG } from "./config.mjs";
import { hashValue } from "./crypto.mjs";
import { mutateStore } from "./store.mjs";

const REDIS_INCREMENT_SCRIPT = `
local results = {}
for i = 1, #KEYS do
  local current = redis.call("INCR", KEYS[i])
  if current == 1 then
    redis.call("EXPIRE", KEYS[i], ARGV[i])
  end
  results[i] = current
end
return results
`.trim();

function bucket(now, ttlSeconds) {
  return Math.floor(now / (ttlSeconds * 1000));
}

export function rateLimitKeys(user, ip, now = Date.now(), options = {}) {
  const scope = String(options.scope || "chat").replace(/[^a-zA-Z0-9_-]/g, "-");
  const userTtlSeconds = options.userTtlSeconds || 60;
  const ipTtlSeconds = options.ipTtlSeconds || 3600;
  const globalTtlSeconds = options.globalTtlSeconds || 60;
  const prefix = `ask-atlas:${CONFIG.appEnv}:rl:v1:${scope}`;
  return {
    userKey: `${prefix}:user:${user.githubId}:${bucket(now, userTtlSeconds)}`,
    ipKey: `${prefix}:ip:${hashValue(ip).slice(0, 16)}:${bucket(now, ipTtlSeconds)}`,
    globalKey: `${prefix}:global:${bucket(now, globalTtlSeconds)}`,
    userTtlSeconds,
    ipTtlSeconds,
    globalTtlSeconds,
  };
}

export function redisRateLimitEnabled() {
  return Boolean(CONFIG.upstashRedisRestUrl && CONFIG.upstashRedisRestToken);
}

async function upstashEval(command, fetchImpl = fetch) {
  const response = await fetchImpl(CONFIG.upstashRedisRestUrl, {
    method: "POST",
    headers: {
      authorization: `Bearer ${CONFIG.upstashRedisRestToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(command),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(payload.error || payload.message || "Redis rate limiter request failed.");
    error.status = 503;
    throw error;
  }
  const value = Array.isArray(payload.result) ? payload.result.map(Number) : Number(payload.result);
  const valid = Array.isArray(value) ? value.every(Number.isFinite) : Number.isFinite(value);
  if (!valid) {
    const error = new Error("Redis rate limiter returned an invalid counter.");
    error.status = 503;
    throw error;
  }
  return value;
}

function limitsForOptions(options = {}) {
  return {
    userLimit: options.userLimit ?? CONFIG.perUserMinuteLimit,
    ipLimit: options.ipLimit ?? CONFIG.perIpHourLimit,
    globalLimit: options.globalLimit ?? CONFIG.globalMinuteLimit,
    userTtlSeconds: options.userTtlSeconds || 60,
    ipTtlSeconds: options.ipTtlSeconds || 3600,
    globalTtlSeconds: options.globalTtlSeconds || 60,
  };
}

function evaluateCounts({ userCount, ipCount, globalCount, limits, backend }) {
  if (userCount > limits.userLimit) {
    return { ok: false, reason: "too many requests per minute", backend };
  }
  if (ipCount > limits.ipLimit) {
    return { ok: false, reason: "too many requests from this network", backend };
  }
  if (globalCount > limits.globalLimit) {
    return { ok: false, reason: "project-wide request rate is temporarily capped", backend };
  }
  return { ok: true, backend };
}

export async function checkRedisRateLimits(user, ip, fetchImpl = fetch, options = {}) {
  const limits = limitsForOptions(options);
  const { userKey, ipKey, globalKey, userTtlSeconds, ipTtlSeconds, globalTtlSeconds } = rateLimitKeys(user, ip, Date.now(), limits);
  const result = await upstashEval([
    "EVAL",
    REDIS_INCREMENT_SCRIPT,
    "3",
    userKey,
    ipKey,
    globalKey,
    String(userTtlSeconds),
    String(ipTtlSeconds),
    String(globalTtlSeconds),
  ], fetchImpl);
  const [userCount, ipCount, globalCount] = result;
  return evaluateCounts({ userCount, ipCount, globalCount, limits, backend: "redis" });
}

export async function checkLocalRateLimits(user, ip, now = Date.now(), options = {}) {
  const limits = limitsForOptions(options);
  const { userKey, ipKey, globalKey } = rateLimitKeys(user, ip, now, { ...options, ...limits });
  const scope = String(options.scope || "chat").replace(/[^a-zA-Z0-9_-]/g, "-");
  const currentKeys = new Set([userKey, ipKey, globalKey]);
  const localPrefix = `ask-atlas:${CONFIG.appEnv}:rl:v1:${scope}:`;
  return mutateStore((store) => {
    store.rateWindows ||= {};
    store.rateWindows[userKey] = (store.rateWindows[userKey] || 0) + 1;
    store.rateWindows[ipKey] = (store.rateWindows[ipKey] || 0) + 1;
    store.rateWindows[globalKey] = (store.rateWindows[globalKey] || 0) + 1;
    Object.keys(store.rateWindows).forEach((key) => {
      if (key.startsWith(localPrefix) && currentKeys.has(key)) return;
      if (key.startsWith("ask-atlas:")) delete store.rateWindows[key];
      if (key.startsWith("ask-atlas:")) return;
      delete store.rateWindows[key];
    });
    return evaluateCounts({
      userCount: store.rateWindows[userKey],
      ipCount: store.rateWindows[ipKey],
      globalCount: store.rateWindows[globalKey],
      limits,
      backend: "local",
    });
  });
}

export async function checkRateLimits(user, ip, options = {}) {
  if (!redisRateLimitEnabled()) {
    if (!CONFIG.devAuth && !CONFIG.mockProvider && !CONFIG.allowLocalRateLimit) {
      return {
        ok: false,
        reason: "production rate limiter is not configured",
        backend: "none",
      };
    }
    return checkLocalRateLimits(user, ip, options.now || Date.now(), options);
  }
  try {
    return await checkRedisRateLimits(user, ip, options.fetchImpl || fetch, options);
  } catch (error) {
    return {
      ok: false,
      reason: "rate limiter unavailable; request blocked to protect the project budget",
      backend: "redis",
      errorCode: error.status || 503,
    };
  }
}

export function checkAttemptRateLimits(user, ip, options = {}) {
  return checkRateLimits(user, ip, {
    ...options,
    scope: "attempt",
    userLimit: CONFIG.attemptPerUserMinuteLimit,
    ipLimit: CONFIG.attemptPerIpHourLimit,
    globalLimit: CONFIG.globalMinuteLimit * 2,
  });
}

export function checkRewardRefreshRateLimit(user, ip, options = {}) {
  return checkRateLimits(user, ip, {
    ...options,
    scope: "reward-refresh",
    userLimit: CONFIG.rewardRefreshHourlyLimit,
    userTtlSeconds: 3600,
    ipLimit: CONFIG.perIpHourLimit,
    ipTtlSeconds: 3600,
    globalLimit: CONFIG.globalMinuteLimit,
  });
}

export function checkFeedbackRateLimit(user, ip, options = {}) {
  return checkRateLimits(user, ip, {
    ...options,
    scope: "feedback",
    userLimit: 10,
    userTtlSeconds: 60,
    ipLimit: 100,
    ipTtlSeconds: 3600,
    globalLimit: CONFIG.globalMinuteLimit * 2,
  });
}
