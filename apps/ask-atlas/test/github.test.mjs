import test from "node:test";
import assert from "node:assert/strict";
import { verifyFork } from "../src/github.mjs";

function jsonResponse({ ok = true, status = 200, payload = {} } = {}) {
  return {
    ok,
    status,
    async json() {
      return payload;
    },
  };
}

test("fork verification scans beyond the first fork page", async () => {
  const originalFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url) => {
    calls.push(String(url));
    if (String(url).includes("/repos/later-forker/")) {
      return jsonResponse({ ok: false, status: 404, payload: { message: "Not Found" } });
    }
    if (String(url).includes("&page=1")) {
      return jsonResponse({
        payload: Array.from({ length: 100 }, (_, index) => ({ owner: { login: `other-${index}` } })),
      });
    }
    if (String(url).includes("&page=2")) {
      return jsonResponse({ payload: [{ owner: { login: "later-forker" } }] });
    }
    return jsonResponse({ ok: false, status: 404, payload: {} });
  };
  try {
    const found = await verifyFork({ githubId: "later", login: "later-forker" });
    assert.equal(found, true);
    assert.equal(calls.some((url) => url.includes("&page=2")), true);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
