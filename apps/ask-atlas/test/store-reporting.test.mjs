import assert from "node:assert/strict";
import test from "node:test";
import { reportingRowsFromSnapshot } from "../src/store.mjs";

test("reporting mirror rows normalize operational data for SQL analytics", () => {
  const rows = reportingRowsFromSnapshot({
    users: {
      "124": {
        githubId: "124",
        login: "RenBing-Sumeru",
        role: "admin",
        encryptedAccessToken: "encrypted-token",
        starVerified: true,
        forkVerified: true,
        createdAt: "2026-06-18T00:00:00.000Z",
        lastSeenAt: "2026-06-18T00:05:00.000Z",
      },
    },
    usageDaily: {
      "124:2026-06-18": {
        githubId: "124",
        login: "RenBing-Sumeru",
        date: "2026-06-18",
        requestCount: 1,
        inputTokens: 100,
        outputTokens: 50,
        estimatedCostUsd: 0.02,
      },
    },
    quotaReservations: {
      r1: {
        reservationId: "r1",
        githubId: "124",
        githubLogin: "RenBing-Sumeru",
        date: "2026-06-18",
        usesBonus: true,
        projectedInputTokens: 10,
        projectedOutputTokens: 20,
        projectedCostUsd: 0.001,
        createdAt: "2026-06-18T00:01:00.000Z",
      },
    },
    creditLedger: [
      {
        githubId: "124",
        githubLogin: "RenBing-Sumeru",
        creditType: "star_bonus",
        delta: 10,
        reason: "one-time GitHub star reward",
        createdAt: "2026-06-18T00:02:00.000Z",
      },
    ],
    requests: [
      {
        requestId: "req1",
        githubId: "124",
        githubLogin: "RenBing-Sumeru",
        mode: "explain",
        model: "deepseek/deepseek-v4-pro",
        questionText: "What is RLVR?",
        questionHash: "hash-q",
        rawQuestionStored: true,
        answerText: "answer",
        answerHash: "hash-a",
        inputTokens: 100,
        outputTokens: 50,
        estimatedCostUsd: 0.02,
        retrievalConfidence: 0.45,
        sourceIds: ["source-1"],
        sourceTitles: ["RLVR guide"],
        sourceDetails: [{ id: "source-1", title: "RLVR guide" }],
        status: "success",
        createdAt: "2026-06-18T00:03:00.000Z",
        updatedAt: "2026-06-18T00:04:00.000Z",
      },
    ],
    feedback: [
      {
        requestId: "req1",
        githubId: "124",
        githubLogin: "RenBing-Sumeru",
        rating: "up",
        reason: "useful",
        createdAt: "2026-06-18T00:06:00.000Z",
      },
    ],
  });

  assert.equal(rows.users.length, 1);
  assert.equal(rows.users[0].githubId, "124");
  assert.equal(rows.users[0].role, "admin");
  assert.equal(rows.users[0].encryptedAccessToken, undefined);
  assert.equal(rows.usageDaily[0].usageDate, "2026-06-18");
  assert.equal(rows.quotaReservations[0].usesBonus, true);
  assert.match(rows.creditLedger[0].id, /^ledger-0-124$/);
  assert.equal(rows.requests[0].sourceDetails[0].title, "RLVR guide");
  assert.match(rows.feedback[0].id, /^feedback-0-req1$/);
  assert.deepEqual(rows.providerUsage, [
    {
      provider: "360",
      modelName: "deepseek/deepseek-v4-pro",
      usageDate: "2026-06-18",
      requests: 1,
      inputTokens: 100,
      outputTokens: 50,
      estimatedCostUsd: 0.02,
    },
  ]);
});

test("reporting mirror is conservative for legacy privacy and invalid enum values", () => {
  const rows = reportingRowsFromSnapshot({
    users: {
      u1: { githubId: "u1", login: "reader", role: "unexpected-role" },
    },
    creditLedger: [
      { githubId: "u1", githubLogin: "reader", creditType: "unknown-credit", delta: 1, reason: "legacy" },
      { githubId: "u1", githubLogin: "reader", creditType: "star_bonus", delta: 10, reason: "star" },
      { githubId: "u1", githubLogin: "reader", creditType: "star_bonus", delta: 10, reason: "duplicate star" },
    ],
    requests: [
      {
        requestId: "legacy-raw",
        githubId: "u1",
        githubLogin: "reader",
        mode: "explain",
        model: "z-ai/glm-5.2",
        questionText: "legacy text exists",
        questionHash: "hash-legacy",
        status: "surprising-new-status",
      },
      {
        requestId: "explicit-hidden",
        githubId: "u1",
        githubLogin: "reader",
        mode: "explain",
        model: "z-ai/glm-5.2",
        questionText: "",
        questionHash: "hash-hidden",
        rawQuestionStored: false,
        status: "success",
      },
    ],
    feedback: [
      {
        requestId: "legacy-raw",
        githubId: "u1",
        githubLogin: "reader",
        rating: "angry",
      },
    ],
  });

  assert.equal(rows.users[0].role, "user");
  assert.equal(rows.creditLedger[0].creditType, "legacy_migration");
  assert.equal(rows.creditLedger.filter((item) => item.creditType === "star_bonus").length, 1);
  assert.equal(rows.requests.find((item) => item.requestId === "legacy-raw").rawQuestionStored, true);
  assert.equal(rows.requests.find((item) => item.requestId === "legacy-raw").status, "error");
  assert.equal(rows.requests.find((item) => item.requestId === "explicit-hidden").rawQuestionStored, false);
  assert.equal(rows.feedback[0].rating, "neutral");
});

test("reporting mirror aggregates provider usage across models and dates", () => {
  const rows = reportingRowsFromSnapshot({
    users: {
      u1: { githubId: "u1", login: "reader" },
      u2: { githubId: "u2", login: "builder" },
    },
    requests: [
      {
        requestId: "r1",
        githubId: "u1",
        githubLogin: "reader",
        model: "deepseek/deepseek-v4-pro",
        status: "success",
        inputTokens: 10,
        outputTokens: 5,
        estimatedCostUsd: 0.001,
        createdAt: "2026-06-18T01:00:00.000Z",
      },
      {
        requestId: "r2",
        githubId: "u2",
        githubLogin: "builder",
        model: "deepseek/deepseek-v4-pro",
        status: "success",
        inputTokens: 20,
        outputTokens: 10,
        estimatedCostUsd: 0.002,
        createdAt: "2026-06-18T02:00:00.000Z",
      },
      {
        requestId: "r3",
        githubId: "u1",
        githubLogin: "reader",
        model: "z-ai/glm-5.2",
        status: "success",
        inputTokens: 30,
        outputTokens: 15,
        estimatedCostUsd: 0.003,
        createdAt: "2026-06-19T01:00:00.000Z",
      },
      {
        requestId: "blocked",
        githubId: "u1",
        githubLogin: "reader",
        model: "z-ai/glm-5.2",
        status: "blocked",
        inputTokens: 999,
        outputTokens: 999,
        estimatedCostUsd: 9,
        createdAt: "2026-06-19T01:00:00.000Z",
      },
    ],
  });

  assert.deepEqual(rows.providerUsage, [
    {
      provider: "360",
      modelName: "deepseek/deepseek-v4-pro",
      usageDate: "2026-06-18",
      requests: 2,
      inputTokens: 30,
      outputTokens: 15,
      estimatedCostUsd: 0.003,
    },
    {
      provider: "360",
      modelName: "z-ai/glm-5.2",
      usageDate: "2026-06-19",
      requests: 1,
      inputTokens: 30,
      outputTokens: 15,
      estimatedCostUsd: 0.003,
    },
  ]);
});
