import test from "node:test";
import assert from "node:assert/strict";
import { addFeedback, adminGaps, adminGapsExport, adminRequestDetail, adminRequests, createRequestLog, renderGapsMarkdown, updateRequestLog } from "../src/logging.mjs";
import { resetStoreForTests } from "../src/store.mjs";

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

const user = { githubId: "atlas-user", login: "atlas-user", role: "user" };

async function seedRequest(question, patch = {}) {
  const record = await createRequestLog({
    user,
    question,
    mode: patch.mode || "explain",
    model: "deepseek/deepseek-v4-pro",
    ip: "127.0.0.1",
    userAgent: "node-test",
    sources: [],
  });
  await updateRequestLog(record.requestId, patch);
  return record;
}

test("admin gaps builds actionable FAQ candidates and markdown export", async () => {
  resetStoreForTests({
    ...emptyStore(),
    users: { "atlas-user": { ...user } },
  });

  await seedRequest("How do PRM and ORM differ for process supervision?", {
    status: "blocked",
    errorCode: "low_retrieval_confidence",
    retrievalConfidence: 1,
  });
  await seedRequest("How do PRM and ORM differ for process supervision?", {
    status: "blocked",
    errorCode: "low_retrieval_confidence",
    retrievalConfidence: 1,
  });
  const downvoted = await seedRequest("How should I audit verifier gaming in RLVR?", {
    status: "success",
    retrievalConfidence: 4,
  });
  await addFeedback({
    user,
    requestId: downvoted.requestId,
    rating: "down",
    reason: "missing verifier failure modes",
    comment: "",
  });
  await seedRequest("Can you recommend a restaurant near campus?", {
    status: "out_of_scope",
  });

  const gaps = await adminGaps();
  assert.equal(gaps.summary.lowConfidence, 2);
  assert.equal(gaps.summary.downvoted, 1);
  assert.equal(gaps.summary.outOfScope, 1);
  assert.ok(gaps.recurringQuestions.length >= 1);
  assert.ok(gaps.faqCandidates.some((item) => item.target.includes("01_core_reasoning_data_types/04_process_trace_supervision_data")));
  assert.ok(gaps.downvoted.some((item) => item.target.includes("02_data_lifecycle/13_audit_failure")));

  const markdown = renderGapsMarkdown(gaps, { generatedAt: "2026-06-17T00:00:00.000Z" });
  assert.match(markdown, /Ask the Atlas Knowledge Gaps Digest/);
  assert.match(markdown, /FAQ Candidates/);
  assert.match(markdown, /papers\/01_core_reasoning_data_types\/04_process_trace_supervision_data\.md/);

  const exported = await adminGapsExport();
  assert.match(exported.issueTitle, /Ask the Atlas knowledge gaps/);
  assert.match(exported.markdown, /Suggested Repo Actions/);
});

test("admin request list is summarized while details include full traceability", async () => {
  resetStoreForTests({
    ...emptyStore(),
    users: { "atlas-user": { ...user } },
  });
  const record = await createRequestLog({
    user,
    question: "Which PRM source should I inspect first?",
    mode: "find_papers",
    model: "z-ai/glm-5.2",
    ip: "127.0.0.1",
    userAgent: "node-test",
    sources: [{
      id: "papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#chunk-1",
      index: 1,
      title: "process supervision prm",
      path: "papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md",
      url: "https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data/blob/main/papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md",
      type: "paper_map",
      snippet: "Process supervision papers and verifier contracts.",
      score: 42,
    }],
  });
  await updateRequestLog(record.requestId, {
    status: "success",
    answerText: "Start with Let's Verify Step by Step and PRM800K.",
    inputTokens: 120,
    outputTokens: 80,
    estimatedCostUsd: 0.001,
    retrievalConfidence: 0.8,
  });
  await addFeedback({
    user,
    requestId: record.requestId,
    rating: "down",
    reason: "missing citations",
    comment: "Needs more source detail.",
  });
  await addFeedback({
    user,
    requestId: record.requestId,
    rating: "up",
    reason: "fixed after rerun",
    comment: "Latest feedback should win.",
  });

  const rows = await adminRequests();
  assert.equal(rows.length, 1);
  assert.equal(rows[0].answerText, undefined);
  assert.match(rows[0].answerPreview, /Let's Verify Step by Step/);
  assert.equal(rows[0].feedback.rating, "up");
  assert.equal(rows[0].sourceCount, 1);

  const detail = await adminRequestDetail(record.requestId);
  assert.equal(detail.answerText, "Start with Let's Verify Step by Step and PRM800K.");
  assert.equal(detail.feedback.rating, "up");
  assert.equal(detail.feedbackHistory.length, 1);
  assert.equal(detail.feedbackHistory[0].reason, "fixed after rerun");
  assert.equal(detail.sourceDetails[0].path, "papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md");
  assert.match(detail.sourceDetails[0].snippet, /verifier contracts/);
});
