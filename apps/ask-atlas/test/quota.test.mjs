import test from "node:test";
import assert from "node:assert/strict";
import { applyRewardStatus, checkQuota, consumeQuota, finalizeQuotaReservation, grantManualReward, quotaSnapshot, releaseQuotaReservation, reserveQuota } from "../src/quota.mjs";
import { readStore, resetStoreForTests } from "../src/store.mjs";

const user = {
  githubId: "42",
  login: "ordinary-user",
  role: "user",
  forkBonusCredits: 20,
  bonusCreditsUsed: 0,
};

test("base quota plus one-time bonus credits are consumed after base daily allowance", async () => {
  resetStoreForTests({
    users: { "42": { ...user } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  let snapshot = await quotaSnapshot(user);
  assert.equal(snapshot.baseDailyLimit, 2);
  assert.equal(snapshot.bonusCredits, 20);
  assert.equal(snapshot.dailyQuestionLimit, 22);

  for (let i = 0; i < 3; i += 1) {
    assert.equal((await checkQuota(user)).ok, true);
    snapshot = await consumeQuota(user, { inputTokens: 10, outputTokens: 5, estimatedCostUsd: 0 });
  }
  assert.equal(snapshot.usedToday, 3);
  assert.equal(snapshot.bonusCredits, 19);
  assert.equal(snapshot.totalAvailableToday, 19);
});

test("quota rejects requests after all base and bonus credits are used", async () => {
  resetStoreForTests({
    users: { "42": { ...user, forkBonusCredits: 0 } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  await consumeQuota({ ...user, forkBonusCredits: 0 }, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  await consumeQuota({ ...user, forkBonusCredits: 0 }, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  const result = await checkQuota({ ...user, forkBonusCredits: 0 });
  assert.equal(result.ok, false);
  assert.match(result.reasons.join(" "), /daily question quota/);
});

test("spent bonus credits do not reset with a fresh daily usage record", async () => {
  const spentUser = { ...user, bonusCreditsUsed: 20 };
  resetStoreForTests({
    users: { "42": { ...spentUser } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  let snapshot = await quotaSnapshot(spentUser);
  assert.equal(snapshot.bonusCredits, 0);
  assert.equal(snapshot.totalAvailableToday, 2);
  assert.equal((await checkQuota(spentUser)).ok, true);
  await consumeQuota(spentUser, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  assert.equal((await checkQuota(spentUser)).ok, true);
  await consumeQuota(spentUser, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  const blocked = await checkQuota(spentUser);
  assert.equal(blocked.ok, false);
  assert.match(blocked.reasons.join(" "), /daily question quota/);
});

test("verified star users get ten daily questions without consuming bonus credits", async () => {
  const plainUser = {
    githubId: "98",
    login: "star-daily",
    role: "user",
  };
  resetStoreForTests({
    users: { "98": { ...plainUser } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  let snapshot = await applyRewardStatus(plainUser, { starred: true, forked: false });
  assert.equal(snapshot.baseDailyLimit, 10);
  assert.equal(snapshot.starDailyUnlocked, true);
  assert.equal(snapshot.bonusCredits, 0);
  assert.equal(snapshot.dailyQuestionLimit, 10);
  for (let i = 0; i < 10; i += 1) {
    assert.equal((await checkQuota(plainUser)).ok, true);
    snapshot = await consumeQuota(plainUser, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  }
  assert.equal(snapshot.usedToday, 10);
  const blocked = await checkQuota(plainUser);
  assert.equal(blocked.ok, false);
  assert.match(blocked.reasons.join(" "), /daily question quota/);
  const rows = await readStore((store) => store.creditLedger);
  assert.equal(rows.filter((item) => item.creditType === "star_bonus").length, 0);
});

test("fork rewards are awarded once through the credit ledger", async () => {
  const plainUser = {
    githubId: "99",
    login: "ledger-user",
    role: "user",
  };
  resetStoreForTests({
    users: { "99": { ...plainUser } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  let snapshot = await applyRewardStatus(plainUser, { starred: true, forked: true });
  assert.equal(snapshot.baseDailyLimit, 10);
  assert.equal(snapshot.bonusCredits, 20);
  snapshot = await applyRewardStatus(plainUser, { starred: true, forked: true });
  assert.equal(snapshot.bonusCredits, 20);
  const rows = await readStore((store) => store.creditLedger);
  assert.equal(rows.filter((item) => item.creditType === "star_bonus").length, 0);
  assert.equal(rows.filter((item) => item.creditType === "fork_bonus").length, 1);
});

test("bonus usage writes a negative credit ledger entry", async () => {
  const plainUser = {
    githubId: "100",
    login: "spender",
    role: "user",
  };
  resetStoreForTests({
    users: { "100": { ...plainUser } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  await applyRewardStatus(plainUser, { starred: false, forked: true });
  await consumeQuota(plainUser, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  await consumeQuota(plainUser, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  const snapshot = await consumeQuota(plainUser, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0, requestId: "req_1" });
  assert.equal(snapshot.bonusCredits, 19);
  const rows = await readStore((store) => store.creditLedger);
  const usage = rows.find((item) => item.creditType === "usage");
  assert.equal(usage.delta, -1);
  assert.equal(usage.requestId, "req_1");
});

test("one-time rewards are not clawed back if star or fork status later disappears", async () => {
  const plainUser = {
    githubId: "101",
    login: "keeps-bonus",
    role: "user",
  };
  resetStoreForTests({
    users: { "101": { ...plainUser } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  let snapshot = await applyRewardStatus(plainUser, { starred: true, forked: true });
  assert.equal(snapshot.baseDailyLimit, 10);
  assert.equal(snapshot.bonusCredits, 20);
  snapshot = await applyRewardStatus(plainUser, { starred: false, forked: false });
  assert.equal(snapshot.baseDailyLimit, 2);
  assert.equal(snapshot.bonusCredits, 20);
  assert.equal(snapshot.starVerified, false);
  assert.equal(snapshot.forkVerified, false);
});

test("owner manual reward grants use the same one-time credit ledger", async () => {
  const plainUser = {
    githubId: "101-manual",
    login: "manual-reward",
    role: "user",
  };
  const admin = {
    githubId: "owner-admin",
    login: "RenBing-Sumeru",
    role: "admin",
  };
  resetStoreForTests({
    users: { "101-manual": { ...plainUser }, "owner-admin": { ...admin } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  let snapshot = await grantManualReward(plainUser, "star_bonus", admin);
  assert.equal(snapshot.bonusCredits, 10);
  assert.equal(snapshot.starVerified, true);
  snapshot = await grantManualReward(plainUser, "star_bonus", admin);
  assert.equal(snapshot.bonusCredits, 10);
  snapshot = await grantManualReward(plainUser, "fork_bonus", admin);
  assert.equal(snapshot.bonusCredits, 30);
  const rows = await readStore((store) => store.creditLedger.filter((item) => item.githubId === "101-manual"));
  assert.equal(rows.filter((item) => item.creditType === "star_bonus").length, 1);
  assert.equal(rows.filter((item) => item.creditType === "fork_bonus").length, 1);
  assert.equal(rows.find((item) => item.creditType === "star_bonus").createdByGithubId, "owner-admin");
  await assert.rejects(
    () => grantManualReward(plainUser, "admin_grant", admin),
    /star_bonus or fork_bonus/,
  );
});

test("legacy bonus fields are seeded into the ledger before bonus usage", async () => {
  const legacy = {
    githubId: "102",
    login: "legacy-user",
    role: "user",
    starBonusCredits: 10,
    starBonusAwardedAt: "2026-06-01T00:00:00.000Z",
    bonusCreditsUsed: 0,
  };
  resetStoreForTests({
    users: { "102": { ...legacy } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  let snapshot = await quotaSnapshot(legacy);
  assert.equal(snapshot.bonusCredits, 10);
  await consumeQuota(legacy, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  await consumeQuota(legacy, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  snapshot = await consumeQuota(legacy, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0, requestId: "legacy_req" });
  assert.equal(snapshot.bonusCredits, 9);
  const rows = await readStore((store) => store.creditLedger.filter((item) => item.githubId === "102"));
  assert.equal(rows.filter((item) => item.creditType === "star_bonus").length, 1);
  assert.equal(rows.some((item) => item.creditType === "legacy_migration"), true);
  assert.equal(rows.some((item) => item.creditType === "usage" && item.requestId === "legacy_req"), true);
});

test("quota reservations block concurrent requests before model calls", async () => {
  const plainUser = {
    githubId: "200",
    login: "reservation-user",
    role: "user",
  };
  resetStoreForTests({
    users: { "200": { ...plainUser } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  const first = await reserveQuota(plainUser, { requestId: "r1", inputTokens: 10, outputTokens: 10, estimatedCostUsd: 0 });
  const second = await reserveQuota(plainUser, { requestId: "r2", inputTokens: 10, outputTokens: 10, estimatedCostUsd: 0 });
  const third = await reserveQuota(plainUser, { requestId: "r3", inputTokens: 10, outputTokens: 10, estimatedCostUsd: 0 });
  assert.equal(first.ok, true);
  assert.equal(second.ok, true);
  assert.equal(third.ok, false);
  assert.match(third.reasons.join(" "), /daily question quota/);
  let snapshot = await releaseQuotaReservation(plainUser, first.reservation.reservationId);
  assert.equal(snapshot.pendingRequests, 1);
  const afterRelease = await reserveQuota(plainUser, { requestId: "r4", inputTokens: 10, outputTokens: 10, estimatedCostUsd: 0 });
  assert.equal(afterRelease.ok, true);
});

test("reserved bonus credits are held during pending calls and finalized once", async () => {
  const bonusUser = {
    githubId: "201",
    login: "reserved-bonus",
    role: "user",
  };
  resetStoreForTests({
    users: { "201": { ...bonusUser } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  });
  await applyRewardStatus(bonusUser, { starred: false, forked: true });
  await consumeQuota(bonusUser, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  await consumeQuota(bonusUser, { inputTokens: 1, outputTokens: 1, estimatedCostUsd: 0 });
  const reserved = await reserveQuota(bonusUser, { requestId: "bonus_req", inputTokens: 10, outputTokens: 10, estimatedCostUsd: 0 });
  assert.equal(reserved.ok, true);
  let snapshot = await quotaSnapshot(bonusUser);
  assert.equal(snapshot.pendingRequests, 1);
  assert.equal(snapshot.bonusCredits, 19);
  snapshot = await finalizeQuotaReservation(bonusUser, reserved.reservation.reservationId, {
    requestId: "bonus_req",
    inputTokens: 3,
    outputTokens: 4,
    estimatedCostUsd: 0,
  });
  assert.equal(snapshot.pendingRequests, 0);
  assert.equal(snapshot.usedToday, 3);
  assert.equal(snapshot.bonusCredits, 19);
  const rows = await readStore((store) => store.creditLedger.filter((item) => item.githubId === "201"));
  assert.equal(rows.filter((item) => item.creditType === "usage" && item.requestId === "bonus_req").length, 1);
});

test("stale reservations are released before quota snapshots", async () => {
  const pendingUser = {
    githubId: "202",
    login: "stale-reservation",
    role: "user",
  };
  const old = new Date(Date.now() - 20 * 60 * 1000).toISOString();
  const today = new Date().toISOString().slice(0, 10);
  resetStoreForTests({
    users: { "202": { ...pendingUser } },
    sessions: {},
    usageDaily: {
      [`202:${today}`]: {
        githubId: "202",
        login: "stale-reservation",
        date: today,
        requestCount: 0,
        blockedCount: 0,
        inputTokens: 0,
        outputTokens: 0,
        estimatedCostUsd: 0,
        bonusCreditsUsed: 0,
        pendingRequests: 1,
        pendingInputTokens: 100,
        pendingOutputTokens: 100,
        pendingEstimatedCostUsd: 0.01,
        pendingBonusCredits: 0,
      },
      [`__global__:${today}`]: {
        githubId: "__global__",
        login: "__global__",
        date: today,
        requestCount: 0,
        blockedCount: 0,
        inputTokens: 0,
        outputTokens: 0,
        estimatedCostUsd: 0,
        bonusCreditsUsed: 0,
        pendingRequests: 1,
        pendingInputTokens: 100,
        pendingOutputTokens: 100,
        pendingEstimatedCostUsd: 0.01,
        pendingBonusCredits: 0,
      },
    },
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    quotaReservations: {
      stale_1: {
        reservationId: "stale_1",
        githubId: "202",
        githubLogin: "stale-reservation",
        date: today,
        usesBonus: false,
        projectedInputTokens: 100,
        projectedOutputTokens: 100,
        projectedCostUsd: 0.01,
        requestId: "stale_req",
        createdAt: old,
      },
    },
    rateWindows: {},
  });
  const snapshot = await quotaSnapshot(pendingUser);
  assert.equal(snapshot.pendingRequests, 0);
  const state = await readStore((store) => store);
  assert.equal(Object.keys(state.quotaReservations).length, 0);
  assert.equal(state.events.some((item) => item.type === "stale_quota_reservations_released"), true);
});

test("actual provider cost overruns are logged after finalize", async () => {
  const costlyUser = {
    githubId: "203",
    login: "cost-overrun",
    role: "user",
  };
  resetStoreForTests({
    users: { "203": { ...costlyUser } },
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    quotaReservations: {},
    rateWindows: {},
  });
  const reserved = await reserveQuota(costlyUser, { requestId: "cost_req", inputTokens: 10, outputTokens: 10, estimatedCostUsd: 0.01 });
  assert.equal(reserved.ok, true);
  await finalizeQuotaReservation(costlyUser, reserved.reservation.reservationId, {
    requestId: "cost_req",
    inputTokens: 10,
    outputTokens: 10,
    estimatedCostUsd: 0.2,
  });
  const events = await readStore((store) => store.events);
  const event = events.find((item) => item.type === "quota_cost_overrun_after_finalize");
  assert.ok(event);
  assert.equal(event.requestId, "cost_req");
  assert.ok(event.reasons.includes("single_request_cost_cap"));
});
