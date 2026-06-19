import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { buildPlan, cleanHttpsBase, renderMarkdown, renderText, writeMarkdown } from "../scripts/launch-plan.mjs";

test("launch plan builds the GitHub OAuth callback from a clean backend URL", () => {
  const plan = buildPlan({ backendUrl: "https://ask-atlas.example.com/" });
  assert.equal(plan.backendUrl, "https://ask-atlas.example.com");
  assert.equal(plan.githubOAuth.authorizationCallbackUrl, "https://ask-atlas.example.com/api/auth/github/callback");
  assert.equal(plan.githubOAuth.requiredScope, "read:user");
  assert.equal(plan.publicQuotaPolicy.noStarDailyRequests, 2);
  assert.equal(plan.publicQuotaPolicy.verifiedStarDailyRequests, 10);
  assert.equal(plan.publicQuotaPolicy.starBonusCredits, 10);
  assert.equal(plan.publicQuotaPolicy.forkOneTimeCredits, 20);
  assert.equal(plan.valueGroups.githubVariables.find((item) => item.name === "ASK_ATLAS_BASE_URL").value, "https://ask-atlas.example.com");
  assert.equal(plan.valueGroups.githubSecrets.find((item) => item.name === "QIHOO_API_KEY").value, "<secret-manager-only>");
  assert.equal(plan.valueGroups.vercelRequired.find((item) => item.name === "DATABASE_URL").value, "<secret-manager-only>");
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
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  };
  process.env.QIHOO_API_KEY = "fk3586480723.secretSentinelShouldNotPrint";
  process.env.GITHUB_CLIENT_SECRET = "ghp_secretSentinelShouldNotPrint0123456789";
  process.env.DATABASE_URL = "postgres://secret-user:secret-pass@example.com/db";
  process.env.UPSTASH_REDIS_REST_URL = "redis://secret-user:secret-pass@example.com:6379";
  process.env.UPSTASH_REDIS_REST_TOKEN = "eyJsecretHeaderSentinelShouldNotPrint.eyJsecretBodySentinelShouldNotPrint.secretSignatureSentinel";
  try {
    const text = renderText(buildPlan({ backendUrl: "https://ask-atlas.example.com" }));
    const markdown = renderMarkdown(buildPlan({ backendUrl: "https://ask-atlas.example.com" }));
    assert.doesNotMatch(text, /fk3586480723/);
    assert.doesNotMatch(text, /ghp_secretSentinel/);
    assert.doesNotMatch(text, /postgres:\/\/secret-user/);
    assert.doesNotMatch(text, /redis:\/\/secret-user/);
    assert.doesNotMatch(text, /eyJsecretHeaderSentinel/);
    assert.doesNotMatch(markdown, /fk3586480723/);
    assert.doesNotMatch(markdown, /ghp_secretSentinel/);
    assert.doesNotMatch(markdown, /postgres:\/\/secret-user/);
    assert.doesNotMatch(markdown, /redis:\/\/secret-user/);
    assert.doesNotMatch(markdown, /eyJsecretHeaderSentinel/);
    assert.match(text, /Authorization callback URL: https:\/\/ask-atlas\.example\.com\/api\/auth\/github\/callback/);
    assert.match(markdown, /Ask the Atlas Launch Packet/);
    assert.match(markdown, /Verified star users get 10 questions per day/);
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});

test("launch plan can write a safe markdown packet", () => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ask-atlas-launch-"));
  const relativeTarget = path.relative(process.cwd(), path.join(tempRoot, "launch.md"));
  const outputPath = writeMarkdown(buildPlan({ backendUrl: "https://ask-atlas.example.com" }), relativeTarget);
  const markdown = fs.readFileSync(outputPath, "utf8");
  assert.match(markdown, /Authorization callback URL/);
  assert.match(markdown, /https:\/\/ask-atlas\.example\.com\/api\/auth\/github\/callback/);
  assert.match(markdown, /QIHOO_API_KEY/);
  assert.doesNotMatch(markdown, /Bearer\s+/);
  assert.doesNotMatch(markdown, /postgres(?:ql)?:\/\//);
});
