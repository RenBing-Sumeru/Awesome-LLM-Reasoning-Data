import { CONFIG, isAdminUser, isAllowlistedUser } from "./config.mjs";
import { randomId } from "./crypto.mjs";
import { verifyFork, verifyStar } from "./github.mjs";
import { mutateStore, readStore } from "./store.mjs";

export function dayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function usageKey(githubId, date = dayKey()) {
  return `${githubId}:${date}`;
}

function baseLimit(user) {
  if (isAdminUser(user) || isAllowlistedUser(user)) return CONFIG.adminDailyRequests;
  if (user?.starVerified) return Math.max(CONFIG.baseDailyRequests, CONFIG.starDailyRequests);
  return CONFIG.baseDailyRequests;
}

function ensureUsage(store, user, date = dayKey()) {
  ensureCollections(store);
  const key = usageKey(user.githubId, date);
  if (!store.usageDaily[key]) {
    store.usageDaily[key] = {
      githubId: user.githubId,
      login: user.login,
      date,
      requestCount: 0,
      blockedCount: 0,
      inputTokens: 0,
      outputTokens: 0,
      estimatedCostUsd: 0,
      bonusCreditsUsed: 0,
      pendingRequests: 0,
      pendingInputTokens: 0,
      pendingOutputTokens: 0,
      pendingEstimatedCostUsd: 0,
      pendingBonusCredits: 0,
      updatedAt: new Date().toISOString(),
    };
  }
  const usage = store.usageDaily[key];
  usage.pendingRequests ||= 0;
  usage.pendingInputTokens ||= 0;
  usage.pendingOutputTokens ||= 0;
  usage.pendingEstimatedCostUsd ||= 0;
  usage.pendingBonusCredits ||= 0;
  return store.usageDaily[key];
}

function ensureCollections(store) {
  store.creditLedger ||= [];
  store.usageDaily ||= {};
  store.users ||= {};
  store.rateWindows ||= {};
  store.quotaReservations ||= {};
}

function ledgerFor(store, user) {
  ensureCollections(store);
  seedLegacyLedger(store, user);
  return store.creditLedger.filter((item) => item.githubId === user.githubId);
}

function ledgerBalance(store, user) {
  const rows = ledgerFor(store, user);
  return rows.reduce((sum, item) => sum + Number(item.delta || 0), 0);
}

function ledgerAwarded(store, user, creditType) {
  return ledgerFor(store, user).some((item) => item.creditType === creditType && Number(item.delta || 0) > 0);
}

function addCredit(store, { user, creditType, delta, reason, relatedRepo = "", requestId = "", createdByGithubId = "" }) {
  ensureCollections(store);
  const item = {
    id: randomId(12),
    githubId: user.githubId,
    githubLogin: user.login,
    creditType,
    delta,
    reason,
    relatedRepo,
    requestId,
    createdByGithubId,
    createdAt: new Date().toISOString(),
  };
  store.creditLedger.unshift(item);
  store.creditLedger = store.creditLedger.slice(0, 10000);
  return item;
}

function seedLegacyLedger(store, user) {
  ensureCollections(store);
  if (!user?.githubId) return;
  const current = store.users[user.githubId] || user;
  const rows = store.creditLedger.filter((item) => item.githubId === current.githubId);
  const hasGrantOrMigration = rows.some((item) => Number(item.delta || 0) > 0 || item.creditType === "legacy_migration");
  if (hasGrantOrMigration) return;
  const grants = [];
  if ((current.starBonusCredits || 0) > 0) {
    grants.push(["star_bonus", current.starBonusCredits, "legacy star bonus migration"]);
  }
  if ((current.forkBonusCredits || 0) > 0) {
    grants.push(["fork_bonus", current.forkBonusCredits, "legacy fork bonus migration"]);
  }
  if ((current.bonusCreditsUsed || 0) > 0) {
    grants.push(["legacy_migration", -current.bonusCreditsUsed, "legacy spent bonus migration"]);
  }
  if (!grants.length) return;
  for (const [creditType, delta, reason] of grants) {
    addCredit(store, {
      user: current,
      creditType,
      delta,
      reason,
      relatedRepo: `${CONFIG.repoOwner}/${CONFIG.repoName}`,
    });
  }
  addCredit(store, {
    user: current,
    creditType: "legacy_migration",
    delta: 0,
    reason: "legacy credit fields seeded into ledger",
    relatedRepo: `${CONFIG.repoOwner}/${CONFIG.repoName}`,
  });
}

function snapshotFromStore(store, user) {
  cleanupStaleReservations(store);
  const usage = ensureUsage(store, user);
  const storedUser = store.users[user.githubId] || user;
  const limit = baseLimit(storedUser);
  const bonus = Math.max(0, ledgerBalance(store, storedUser) - (usage.pendingBonusCredits || 0));
  const committed = usage.requestCount + (usage.pendingRequests || 0);
  const baseRemaining = Math.max(0, limit - committed);
  return {
    date: usage.date,
    baseDailyLimit: limit,
    baseRemainingToday: baseRemaining,
    bonusCredits: Math.max(0, bonus),
    totalAvailableToday: baseRemaining + bonus,
    usedToday: usage.requestCount,
    pendingRequests: usage.pendingRequests || 0,
    dailyQuestionLimit: limit + bonus,
    starDailyLimit: CONFIG.starDailyRequests,
    starDailyUnlocked: Boolean(storedUser.starVerified) && limit >= CONFIG.starDailyRequests,
    tokenCap: CONFIG.userDailyTokenCap,
    costCapUsd: CONFIG.userDailyCostCap,
    inputTokens: usage.inputTokens,
    outputTokens: usage.outputTokens,
    estimatedCostUsd: usage.estimatedCostUsd,
    starVerified: Boolean(storedUser.starVerified),
    forkVerified: Boolean(storedUser.forkVerified),
    starBonusAwarded: ledgerAwarded(store, storedUser, "star_bonus") || Boolean(storedUser.starBonusAwardedAt),
    forkBonusAwarded: ledgerAwarded(store, storedUser, "fork_bonus") || Boolean(storedUser.forkBonusAwardedAt),
  };
}

export async function quotaSnapshot(user) {
  return mutateStore((store) => snapshotFromStore(store, user));
}

export async function refreshRewards(user) {
  const [starred, forked] = await Promise.all([verifyStar(user), verifyFork(user)]);
  return applyRewardStatus(user, { starred, forked });
}

export function applyRewardStatus(user, { starred = false, forked = false } = {}) {
  const now = new Date().toISOString();
  return mutateStore((store) => {
    ensureCollections(store);
    const current = store.users[user.githubId] || user;
    if (starred && !current.starVerifiedAt) current.starVerifiedAt = now;
    if (forked && !ledgerAwarded(store, current, "fork_bonus") && !current.forkBonusAwardedAt) {
      addCredit(store, {
        user: current,
        creditType: "fork_bonus",
        delta: CONFIG.forkBonusCredits,
        reason: "one-time GitHub fork reward",
        relatedRepo: `${CONFIG.repoOwner}/${CONFIG.repoName}`,
      });
      current.forkBonusCredits = (current.forkBonusCredits || 0) + CONFIG.forkBonusCredits;
      current.forkBonusAwardedAt = now;
    }
    current.starVerified = starred;
    current.forkVerified = forked;
    current.lastRewardCheckAt = now;
    store.users[user.githubId] = current;
    return snapshotFromStore(store, current);
  });
}

export async function grantManualReward(user, creditType, admin = null) {
  if (!["star_bonus", "fork_bonus"].includes(creditType)) {
    const error = new Error("Manual reward type must be star_bonus or fork_bonus.");
    error.status = 400;
    throw error;
  }
  const now = new Date().toISOString();
  return mutateStore((store) => {
    ensureCollections(store);
    const current = store.users[user.githubId] || user;
    const isStar = creditType === "star_bonus";
    const alreadyAwarded = ledgerAwarded(store, current, creditType) || Boolean(isStar ? current.starBonusAwardedAt : current.forkBonusAwardedAt);
    if (!alreadyAwarded) {
      const delta = isStar ? CONFIG.starBonusCredits : CONFIG.forkBonusCredits;
      addCredit(store, {
        user: current,
        creditType,
        delta,
        reason: `owner-admin manual ${isStar ? "star" : "fork"} reward`,
        relatedRepo: `${CONFIG.repoOwner}/${CONFIG.repoName}`,
        createdByGithubId: admin?.githubId || "",
      });
      if (isStar) {
        current.starBonusCredits = (current.starBonusCredits || 0) + delta;
        current.starBonusAwardedAt = now;
      } else {
        current.forkBonusCredits = (current.forkBonusCredits || 0) + delta;
        current.forkBonusAwardedAt = now;
      }
    }
    if (isStar) current.starVerified = true;
    else current.forkVerified = true;
    current.lastRewardCheckAt = now;
    current.updatedAt = now;
    store.users[user.githubId] = current;
    return snapshotFromStore(store, current);
  });
}

export async function checkQuota(user) {
  return mutateStore((store) => {
    cleanupStaleReservations(store);
    const usage = ensureUsage(store, user);
    const global = ensureUsage(store, { githubId: "__global__", login: "__global__" });
    const storedUser = store.users[user.githubId] || user;
    const dailyLimit = baseLimit(storedUser);
    const committed = usage.requestCount + (usage.pendingRequests || 0);
    const baseRemaining = committed < dailyLimit;
    const bonusRemaining = ledgerBalance(store, storedUser) - (usage.pendingBonusCredits || 0) > 0;
    const reasons = [];
    if (!baseRemaining && !bonusRemaining) reasons.push("daily question quota reached");
    if (usage.inputTokens + usage.outputTokens + (usage.pendingInputTokens || 0) + (usage.pendingOutputTokens || 0) >= CONFIG.userDailyTokenCap) reasons.push("daily token cap reached");
    if (usage.estimatedCostUsd + (usage.pendingEstimatedCostUsd || 0) >= CONFIG.userDailyCostCap) reasons.push("daily cost cap reached");
    if (global.estimatedCostUsd + (global.pendingEstimatedCostUsd || 0) >= CONFIG.globalDailyCostCap) reasons.push("global daily cost cap reached");
    if (reasons.length) {
      usage.blockedCount += 1;
      usage.updatedAt = new Date().toISOString();
      return { ok: false, reasons, quota: snapshotFromStore(store, storedUser) };
    }
    return { ok: true, quota: snapshotFromStore(store, storedUser) };
  });
}

function releasePendingUsage(usage, reservation) {
  usage.pendingRequests = Math.max(0, (usage.pendingRequests || 0) - 1);
  usage.pendingInputTokens = Math.max(0, (usage.pendingInputTokens || 0) - (reservation.projectedInputTokens || 0));
  usage.pendingOutputTokens = Math.max(0, (usage.pendingOutputTokens || 0) - (reservation.projectedOutputTokens || 0));
  usage.pendingEstimatedCostUsd = Math.max(0, Number(((usage.pendingEstimatedCostUsd || 0) - (reservation.projectedCostUsd || 0)).toFixed(6)));
  if (reservation.usesBonus) {
    usage.pendingBonusCredits = Math.max(0, (usage.pendingBonusCredits || 0) - 1);
  }
  usage.updatedAt = new Date().toISOString();
}

function cleanupStaleReservations(store) {
  ensureCollections(store);
  const ttl = Math.max(30_000, CONFIG.quotaReservationTtlMs || 5 * 60 * 1000);
  const now = Date.now();
  let released = 0;
  for (const [reservationId, reservation] of Object.entries(store.quotaReservations || {})) {
    const created = Date.parse(reservation.createdAt || "");
    if (Number.isFinite(created) && now - created <= ttl) continue;
    const user = store.users[reservation.githubId] || {
      githubId: reservation.githubId,
      login: reservation.githubLogin || reservation.githubId,
    };
    const usage = ensureUsage(store, user, reservation.date);
    const global = ensureUsage(store, { githubId: "__global__", login: "__global__" }, reservation.date);
    releasePendingUsage(usage, reservation);
    releasePendingUsage(global, { ...reservation, usesBonus: false });
    delete store.quotaReservations[reservationId];
    released += 1;
  }
  if (released) {
    store.events ||= [];
    store.events.push({
      type: "stale_quota_reservations_released",
      count: released,
      createdAt: new Date().toISOString(),
    });
    store.events = store.events.slice(-500);
  }
}

export async function reserveQuota(user, projectedDelta = {}) {
  return mutateStore((store) => {
    ensureCollections(store);
    cleanupStaleReservations(store);
    const usage = ensureUsage(store, user);
    const global = ensureUsage(store, { githubId: "__global__", login: "__global__" });
    const storedUser = store.users[user.githubId] || user;
    const dailyLimit = baseLimit(storedUser);
    const projectedInputTokens = projectedDelta.inputTokens || 0;
    const projectedOutputTokens = projectedDelta.outputTokens || 0;
    const projectedCostUsd = projectedDelta.estimatedCostUsd || 0;
    const committed = usage.requestCount + (usage.pendingRequests || 0);
    const usesBonus = committed >= dailyLimit;
    const availableBonus = ledgerBalance(store, storedUser) - (usage.pendingBonusCredits || 0);
    const reasons = [];
    if (usesBonus && availableBonus <= 0) reasons.push("daily question quota reached");
    if (usage.inputTokens + usage.outputTokens + (usage.pendingInputTokens || 0) + (usage.pendingOutputTokens || 0) + projectedInputTokens + projectedOutputTokens > CONFIG.userDailyTokenCap) {
      reasons.push("projected request would exceed user daily token cap");
    }
    if (usage.estimatedCostUsd + (usage.pendingEstimatedCostUsd || 0) + projectedCostUsd > CONFIG.userDailyCostCap) {
      reasons.push("projected request would exceed user daily cost cap");
    }
    if (projectedCostUsd > CONFIG.maxSingleRequestCostUsd) {
      reasons.push("projected request would exceed single-request cost cap");
    }
    if (global.estimatedCostUsd + (global.pendingEstimatedCostUsd || 0) + projectedCostUsd > CONFIG.globalDailyCostCap) {
      reasons.push("projected request would exceed global daily cost cap");
    }
    if (reasons.length) {
      usage.blockedCount += 1;
      usage.updatedAt = new Date().toISOString();
      return { ok: false, reasons, quota: snapshotFromStore(store, storedUser) };
    }
    const reservationId = randomId(14);
    const reservation = {
      reservationId,
      githubId: storedUser.githubId,
      githubLogin: storedUser.login,
      date: usage.date,
      usesBonus,
      projectedInputTokens,
      projectedOutputTokens,
      projectedCostUsd,
      requestId: projectedDelta.requestId || "",
      createdAt: new Date().toISOString(),
    };
    usage.pendingRequests += 1;
    usage.pendingInputTokens += projectedInputTokens;
    usage.pendingOutputTokens += projectedOutputTokens;
    usage.pendingEstimatedCostUsd = Number(((usage.pendingEstimatedCostUsd || 0) + projectedCostUsd).toFixed(6));
    if (usesBonus) usage.pendingBonusCredits += 1;
    usage.updatedAt = reservation.createdAt;
    global.pendingRequests += 1;
    global.pendingInputTokens += projectedInputTokens;
    global.pendingOutputTokens += projectedOutputTokens;
    global.pendingEstimatedCostUsd = Number(((global.pendingEstimatedCostUsd || 0) + projectedCostUsd).toFixed(6));
    global.updatedAt = reservation.createdAt;
    store.quotaReservations[reservationId] = reservation;
    return { ok: true, reservation, quota: snapshotFromStore(store, storedUser) };
  });
}

export async function releaseQuotaReservation(user, reservationId) {
  return mutateStore((store) => {
    ensureCollections(store);
    const reservation = store.quotaReservations[reservationId];
    if (!reservation || reservation.githubId !== user.githubId) return quotaSnapshotFromStoreOnly(store, user);
    const usage = ensureUsage(store, user, reservation.date);
    const global = ensureUsage(store, { githubId: "__global__", login: "__global__" }, reservation.date);
    releasePendingUsage(usage, reservation);
    releasePendingUsage(global, { ...reservation, usesBonus: false });
    delete store.quotaReservations[reservationId];
    return snapshotFromStore(store, store.users[user.githubId] || user);
  });
}

function quotaSnapshotFromStoreOnly(store, user) {
  return snapshotFromStore(store, store.users[user.githubId] || user);
}

export async function finalizeQuotaReservation(user, reservationId, usageDelta) {
  return mutateStore((store) => {
    ensureCollections(store);
    cleanupStaleReservations(store);
    const reservation = store.quotaReservations[reservationId];
    if (!reservation || reservation.githubId !== user.githubId) {
      return consumeQuotaWithoutMutationWarning(store, user, usageDelta);
    }
    const usage = ensureUsage(store, user, reservation.date);
    const global = ensureUsage(store, { githubId: "__global__", login: "__global__" }, reservation.date);
    const storedUser = store.users[user.githubId] || user;
    releasePendingUsage(usage, reservation);
    releasePendingUsage(global, { ...reservation, usesBonus: false });
    usage.requestCount += 1;
    usage.inputTokens += usageDelta.inputTokens || 0;
    usage.outputTokens += usageDelta.outputTokens || 0;
    usage.estimatedCostUsd += usageDelta.estimatedCostUsd || 0;
    usage.updatedAt = new Date().toISOString();
    global.requestCount += 1;
    global.inputTokens += usageDelta.inputTokens || 0;
    global.outputTokens += usageDelta.outputTokens || 0;
    global.estimatedCostUsd += usageDelta.estimatedCostUsd || 0;
    global.updatedAt = usage.updatedAt;
    const actualCostUsd = usageDelta.estimatedCostUsd || 0;
    const projectedCostUsd = reservation.projectedCostUsd || 0;
    const overrunReasons = [];
    if (actualCostUsd > CONFIG.maxSingleRequestCostUsd) overrunReasons.push("single_request_cost_cap");
    if (projectedCostUsd && actualCostUsd > projectedCostUsd * 1.1) overrunReasons.push("actual_cost_exceeded_projection");
    if (usage.estimatedCostUsd > CONFIG.userDailyCostCap) overrunReasons.push("user_daily_cost_cap_after_finalize");
    if (global.estimatedCostUsd > CONFIG.globalDailyCostCap) overrunReasons.push("global_daily_cost_cap_after_finalize");
    if (overrunReasons.length) {
      store.events ||= [];
      store.events.push({
        type: "quota_cost_overrun_after_finalize",
        githubId: storedUser.githubId,
        githubLogin: storedUser.login,
        requestId: usageDelta.requestId || reservation.requestId || "",
        reservationId,
        projectedCostUsd,
        actualCostUsd,
        reasons: overrunReasons,
        createdAt: usage.updatedAt,
      });
      store.events = store.events.slice(-500);
    }
    if (reservation.usesBonus) {
      addCredit(store, {
        user: storedUser,
        creditType: "usage",
        delta: -1,
        reason: "reserved bonus question consumed after base daily quota",
        relatedRepo: `${CONFIG.repoOwner}/${CONFIG.repoName}`,
        requestId: usageDelta.requestId || reservation.requestId || "",
      });
      storedUser.bonusCreditsUsed = Math.min(
        (storedUser.bonusCreditsUsed || 0) + 1,
        (storedUser.starBonusCredits || 0) + (storedUser.forkBonusCredits || 0),
      );
    }
    delete store.quotaReservations[reservationId];
    store.users[user.githubId] = storedUser;
    return snapshotFromStore(store, storedUser);
  });
}

function consumeQuotaWithoutMutationWarning(store, user, usageDelta) {
  const usage = ensureUsage(store, user);
  const global = ensureUsage(store, { githubId: "__global__", login: "__global__" });
  const storedUser = store.users[user.githubId] || user;
  const usedBefore = usage.requestCount;
  usage.requestCount += 1;
  usage.inputTokens += usageDelta.inputTokens || 0;
  usage.outputTokens += usageDelta.outputTokens || 0;
  usage.estimatedCostUsd += usageDelta.estimatedCostUsd || 0;
  usage.updatedAt = new Date().toISOString();
  global.requestCount += 1;
  global.inputTokens += usageDelta.inputTokens || 0;
  global.outputTokens += usageDelta.outputTokens || 0;
  global.estimatedCostUsd += usageDelta.estimatedCostUsd || 0;
  global.updatedAt = usage.updatedAt;
  if (usedBefore >= baseLimit(storedUser)) {
    addCredit(store, {
      user: storedUser,
      creditType: "usage",
      delta: -1,
      reason: "bonus question consumed after base daily quota",
      relatedRepo: `${CONFIG.repoOwner}/${CONFIG.repoName}`,
      requestId: usageDelta.requestId || "",
    });
  }
  store.users[user.githubId] = storedUser;
  return snapshotFromStore(store, storedUser);
}

export async function consumeQuota(user, usageDelta) {
  return mutateStore((store) => {
    return consumeQuotaWithoutMutationWarning(store, user, usageDelta);
  });
}
