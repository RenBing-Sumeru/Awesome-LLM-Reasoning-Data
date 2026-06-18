import test from "node:test";
import assert from "node:assert/strict";
import { checkLocalRateLimits, checkRedisRateLimits, rateLimitKeys } from "../src/rate-limit.mjs";
import { resetStoreForTests } from "../src/store.mjs";

const user = {
  githubId: "rate-user",
  login: "rate-user",
};

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

test("local fallback blocks after the per-user minute limit", async () => {
  resetStoreForTests(emptyStore());
  const now = Date.parse("2026-06-17T00:00:00.000Z");
  assert.equal((await checkLocalRateLimits(user, "127.0.0.1", now)).ok, true);
  assert.equal((await checkLocalRateLimits(user, "127.0.0.1", now)).ok, true);
  const blocked = await checkLocalRateLimits(user, "127.0.0.1", now);
  assert.equal(blocked.ok, false);
  assert.match(blocked.reason, /per minute/);
});

test("rate limit keys hash IPs and keep raw addresses out of storage keys", () => {
  const keys = rateLimitKeys(user, "203.0.113.42", Date.parse("2026-06-17T00:00:00.000Z"));
  assert.match(keys.userKey, /^ask-atlas:dev:rl:v1:chat:user:rate-user:/);
  assert.match(keys.ipKey, /^ask-atlas:dev:rl:v1:chat:ip:[a-f0-9]{16}:/);
  assert.match(keys.globalKey, /^ask-atlas:dev:rl:v1:chat:global:/);
  assert.equal(keys.ipKey.includes("203.0.113.42"), false);
});

test("redis limiter uses one atomic EVAL for user, ip, and global counters", async () => {
  const commands = [];
  const fakeFetch = async (_url, options) => {
    commands.push(JSON.parse(options.body));
    return {
      ok: true,
      async json() {
        return { result: [1, 1, 1] };
      },
    };
  };
  const result = await checkRedisRateLimits(user, "127.0.0.1", fakeFetch);
  assert.equal(result.ok, true);
  assert.equal(result.backend, "redis");
  assert.equal(commands.length, 1);
  assert.equal(commands[0][0], "EVAL");
  assert.equal(commands[0][2], "3");
  assert.equal(commands[0][6], "60");
  assert.equal(commands[0][7], "3600");
  assert.equal(commands[0][8], "60");
});

test("redis limiter reports blocked when counters exceed limits", async () => {
  const fakeFetch = async () => ({
    ok: true,
    async json() {
      return { result: [3, 1, 1] };
    },
  });
  const result = await checkRedisRateLimits(user, "127.0.0.1", fakeFetch);
  assert.equal(result.ok, false);
  assert.match(result.reason, /per minute/);
});
