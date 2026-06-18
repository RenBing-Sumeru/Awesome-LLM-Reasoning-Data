import test from "node:test";
import assert from "node:assert/strict";
import { acceptUsageConsent, requireAdminViewer, requireOwnerAdmin, USAGE_CONSENT_VERSION } from "../src/auth.mjs";
import { signedValue } from "../src/crypto.mjs";
import { addFeedback, createRequestLog } from "../src/logging.mjs";
import { readStore, resetStoreForTests } from "../src/store.mjs";

function emptyStore() {
  return {
    users: {},
    sessions: {},
    usageDaily: {},
    requests: [],
    feedback: [],
    events: [],
    creditLedger: [],
    rateWindows: {},
  };
}

const owner = { githubId: "owner-1", login: "owner", role: "user" };
const stranger = { githubId: "stranger-1", login: "stranger", role: "user" };

test("usage consent records version and raw-question default", async () => {
  resetStoreForTests({
    ...emptyStore(),
    users: { "owner-1": { ...owner } },
  });
  const updated = await acceptUsageConsent(owner, { storeRawQuestionDefault: false });
  assert.equal(updated.usageConsentVersion, USAGE_CONSENT_VERSION);
  assert.equal(updated.storeRawQuestionDefault, false);
  assert.match(updated.usageConsentAcceptedAt, /^\d{4}-\d{2}-\d{2}T/);
});

test("feedback can only be submitted for the current user's answer", async () => {
  resetStoreForTests({
    ...emptyStore(),
    users: {
      "owner-1": { ...owner },
      "stranger-1": { ...stranger },
    },
  });
  const record = await createRequestLog({
    user: owner,
    question: "What is RLVR?",
    mode: "explain",
    model: "deepseek/deepseek-v4-pro",
    ip: "127.0.0.1",
    userAgent: "node-test",
    sources: [],
  });
  const item = await addFeedback({
    user: owner,
    requestId: record.requestId,
    rating: "up",
    reason: "helpful",
    comment: "",
  });
  assert.equal(item.rating, "up");

  await assert.rejects(
    () => addFeedback({ user: stranger, requestId: record.requestId, rating: "down", reason: "tamper", comment: "" }),
    /own answers/,
  );
  await assert.rejects(
    () => addFeedback({ user: owner, requestId: record.requestId, rating: "invalid", reason: "", comment: "" }),
    /up, down, or neutral/,
  );
  const rows = await readStore((store) => store.feedback);
  assert.equal(rows.length, 1);
});

test("allowlisted admin viewers cannot perform owner-only admin mutations", async () => {
  resetStoreForTests({
    ...emptyStore(),
    users: {
      "viewer-1": { githubId: "viewer-1", login: "trusted-viewer", role: "allowlisted" },
    },
    sessions: {
      session_viewer: { sessionId: "session_viewer", githubId: "viewer-1" },
    },
  });
  const req = { headers: { cookie: `ask_atlas_session=${signedValue("session_viewer")}` } };
  const viewer = await requireAdminViewer(req);
  assert.equal(viewer.login, "trusted-viewer");
  await assert.rejects(
    () => requireOwnerAdmin(req),
    /repository owner\/admin/,
  );
});
