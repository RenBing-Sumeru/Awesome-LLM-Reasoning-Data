import assert from "node:assert/strict";
import test from "node:test";
import { buildPlan, cleanHttpsBase, renderText } from "../scripts/launch-plan.mjs";

test("launch plan builds the GitHub OAuth callback from a clean backend URL", () => {
  const plan = buildPlan({ backendUrl: "https://ask-atlas.example.com/" });
  assert.equal(plan.backendUrl, "https://ask-atlas.example.com");
  assert.equal(plan.githubOAuth.authorizationCallbackUrl, "https://ask-atlas.example.com/api/auth/github/callback");
  assert.equal(plan.githubOAuth.requiredScope, "read:user");
  assert.equal(plan.publicQuotaPolicy.noStarDailyRequests, 2);
  assert.equal(plan.publicQuotaPolicy.verifiedStarDailyRequests, 10);
  assert.equal(plan.publicQuotaPolicy.forkOneTimeCredits, 20);
});

test("launch plan rejects unsafe public backend URLs", () => {
  assert.equal(cleanHttpsBase("https://ask-atlas.example.com///"), "https://ask-atlas.example.com");
  assert.throws(() => cleanHttpsBase("http://ask-atlas.example.com"), /HTTPS/);
  assert.throws(() => cleanHttpsBase("https://ask-atlas.example.com?token=abc"), /query/);
  assert.throws(() => cleanHttpsBase("https://user:pass@ask-atlas.example.com"), /credentials/);
  assert.throws(() => cleanHttpsBase("https://localhost:8787"), /localhost/);
});

test("launch plan text never prints secret-like environment values", () => {
  const previous = {
    QIHOO_API_KEY: process.env.QIHOO_API_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  };
  process.env.QIHOO_API_KEY = "fk3586480723.secretSentinelShouldNotPrint";
  process.env.DATABASE_URL = "postgres://secret-user:secret-pass@example.com/db";
  process.env.UPSTASH_REDIS_REST_TOKEN = "redis-token-secret-sentinel";
  try {
    const text = renderText(buildPlan({ backendUrl: "https://ask-atlas.example.com" }));
    assert.doesNotMatch(text, /fk3586480723/);
    assert.doesNotMatch(text, /postgres:\/\/secret-user/);
    assert.doesNotMatch(text, /redis-token-secret-sentinel/);
    assert.match(text, /Authorization callback URL: https:\/\/ask-atlas\.example\.com\/api\/auth\/github\/callback/);
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});
