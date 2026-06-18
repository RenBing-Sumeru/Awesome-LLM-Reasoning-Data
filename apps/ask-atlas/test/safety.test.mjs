import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createRequestLog, updateRequestLog } from "../src/logging.mjs";
import { ensureTrustLayerFormat, resolveModel } from "../src/provider360.mjs";
import { classifyQuestionScope, retrieveSources, topicGate } from "../src/rag.mjs";
import { collectLaunchReadiness, publicFrontendConfigIssues } from "../src/readiness.mjs";
import { readStore, resetStoreForTests } from "../src/store.mjs";

const appRoot = fileURLToPath(new URL("..", import.meta.url));

const baseStore = () => ({
  users: {},
  sessions: {},
  usageDaily: {},
  requests: [],
  feedback: [],
  events: [],
  creditLedger: [],
  rateWindows: {},
});

const user = {
  githubId: "101",
  login: "privacy-user",
  role: "user",
};

test("raw text opt-out stores only hashes and metadata", async () => {
  resetStoreForTests(baseStore());
  const record = await createRequestLog({
    user,
    question: "How should I audit RLVR verifier gaming?",
    mode: "audit",
    model: "deepseek/deepseek-v4-pro",
    ip: "127.0.0.1",
    userAgent: "node-test",
    sources: [],
    storeRawQuestion: false,
  });
  await updateRequestLog(record.requestId, {
    status: "success",
    answerText: "",
    answerHash: "a".repeat(64),
    rawAnswerStored: false,
  });
  assert.equal(record.questionText, "");
  assert.equal(record.rawQuestionStored, false);
  assert.match(record.questionHash, /^[a-f0-9]{64}$/);
  const stored = await readStore((store) => store.requests[0]);
  assert.equal(stored.questionText, "");
  assert.equal(stored.rawQuestionStored, false);
  assert.equal(stored.answerText, "");
  assert.equal(stored.rawAnswerStored, false);
  assert.match(stored.answerHash, /^[a-f0-9]{64}$/);
});

test("public Pages config rejects secret-like backend URL material", () => {
  const clean = `
    window.ASK_ATLAS_FRONTEND = "pages";
    window.ASK_ATLAS_BACKEND_URL = "https://ask.example.test";
  `;
  assert.deepEqual(publicFrontendConfigIssues(clean), []);

  const withCredentials = `
    window.ASK_ATLAS_FRONTEND = "pages";
    window.ASK_ATLAS_BACKEND_URL = "https://user:pass@ask.example.test";
  `;
  assert.ok(publicFrontendConfigIssues(withCredentials).includes("URL credentials"));

  const withTokenQuery = `
    window.ASK_ATLAS_FRONTEND = "pages";
    window.ASK_ATLAS_BACKEND_URL = "https://ask.example.test?api_key=public-mistake";
  `;
  assert.ok(publicFrontendConfigIssues(withTokenQuery).includes("secret-like names or token-like values"));
  assert.ok(publicFrontendConfigIssues(withTokenQuery).includes("query string on backend URL"));

  const withFragment = `
    window.ASK_ATLAS_FRONTEND = "pages";
    window.ASK_ATLAS_BACKEND_URL = "https://ask.example.test#token";
  `;
  assert.ok(publicFrontendConfigIssues(withFragment).includes("fragment on backend URL"));

  const withInjectedJs = `
    window.ASK_ATLAS_FRONTEND = "pages";
    window.ASK_ATLAS_BACKEND_URL = "https://ask.example.test";window.INJECTED="1";
  `;
  assert.ok(publicFrontendConfigIssues(withInjectedJs).includes("invalid public config assignment"));

  const withWhitespace = `
    window.ASK_ATLAS_FRONTEND = "pages";
    window.ASK_ATLAS_BACKEND_URL = "https://ask.example.test bad";
  `;
  assert.ok(publicFrontendConfigIssues(withWhitespace).includes("ASK_ATLAS_BACKEND_URL contains unsafe characters"));
});

test("backend URL helper rejects JavaScript injection values", () => {
  const configPath = path.join(os.tmpdir(), `ask-config-injection-${Date.now()}.js`);
  try {
    const injected = 'https://ask.example.test";window.INJECTED="1';
    const result = spawnSync("python3", ["../../scripts/set_ask_backend_url.py", "--config", configPath, injected], {
      cwd: appRoot,
      encoding: "utf8",
    });
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /Refusing to write unsafe Ask backend URL/);
    assert.match(result.stderr, /quotes|backslashes|unsafe/i);
    assert.equal(fs.existsSync(configPath), false);
  } finally {
    fs.rmSync(configPath, { force: true });
  }
});

test("launch readiness rejects public backend URLs with query or fragment material", () => {
  const configPath = path.join(appRoot, "..", "..", "docs", "assets", "ask-config.js");
  const original = fs.readFileSync(configPath, "utf8");
  try {
    fs.writeFileSync(configPath, [
      'window.ASK_ATLAS_FRONTEND = "pages";',
      'window.ASK_ATLAS_BACKEND_URL = "https://ask.example.test?token=mistake";',
      "",
    ].join("\n"));
    const withQuery = collectLaunchReadiness();
    assert.equal(withQuery.checks.find((item) => item.id === "pages-config-backend").status, "block");
    assert.equal(withQuery.safeConfig.pagesBackendUrl, "");

    fs.writeFileSync(configPath, [
      'window.ASK_ATLAS_FRONTEND = "pages";',
      'window.ASK_ATLAS_BACKEND_URL = "https://ask.example.test#secret";',
      "",
    ].join("\n"));
    const withFragment = collectLaunchReadiness();
    assert.equal(withFragment.checks.find((item) => item.id === "pages-config-backend").status, "block");
    assert.equal(withFragment.safeConfig.pagesBackendUrl, "");
  } finally {
    fs.writeFileSync(configPath, original);
  }
});

test("auto model routes long or paper-finding requests to the long-context model", () => {
  const model = resolveModel("auto", {
    mode: "find_papers",
    question: "Which papers should I read for process reward models?",
    sources: [],
  });
  assert.equal(model, "z-ai/glm-5.2");
});

test("auto model routes audit/build/compare requests to the strong reasoning model", () => {
  const model = resolveModel("auto", {
    mode: "audit",
    question: "Create an audit checklist for a reasoning dataset release.",
    sources: [],
  });
  assert.equal(model, "deepseek/deepseek-v4-pro");
});

test("project navigation questions are in scope and retrieve project guides", () => {
  const questions = [
    "你可以告诉我项目里面有哪些东西，可以让我这个初学者了解么",
    "What is in this repository and how should a beginner learn it?",
    "What is the directory structure?",
    "Show me the table of contents",
    "What contents are here?",
  ];
  for (const question of questions) {
    const scope = classifyQuestionScope(question);
    assert.equal(scope.allowed, true, question);
    assert.equal(scope.project, true, question);
    assert.equal(topicGate(question), true, question);
  }
  const retrieval = retrieveSources({ question: questions[0], mode: "explain" });
  assert.ok(retrieval.results.length > 0);
  assert.ok(
    retrieval.results.some((source) => ["README.md", "docs/00_start_here.md", "docs/01_what_is_post_training_reasoning_data.md"].includes(source.path)),
    retrieval.results.map((source) => source.path).join(", "),
  );
});

test("valid card and track context allows short referential questions", () => {
  const cases = [
    ["Explain this card", { entry: "math-shepherd-2024" }],
    ["Summarize this paper", { entry: "math-shepherd-2024" }],
    ["这篇论文讲什么？", { entry: "math-shepherd-2024" }],
    ["解释一下这张卡片", { card: "math_shepherd" }],
    ["What should I read first?", { track: "process_supervision_prm" }],
    ["这个 track 应该先读什么？", { track: "process_supervision_prm" }],
  ];
  for (const [question, context] of cases) {
    const scope = classifyQuestionScope(question, context);
    assert.equal(scope.allowed, true, question);
    assert.equal(scope.context, true, question);
    assert.equal(topicGate(question, context), true, question);
  }
});

test("context-only paper questions retrieve the referenced paper before unrelated cards", () => {
  const retrieval = retrieveSources({
    question: "这篇论文讲什么？",
    mode: "explain",
    entry: "math-shepherd-2024",
  });
  assert.ok(retrieval.results.length > 0);
  assert.equal(
    retrieval.results[0].path.includes("math_shepherd") || retrieval.results[0].id === "entry:math-shepherd-2024",
    true,
    retrieval.results.map((source) => `${source.id}:${source.path}`).join(", "),
  );
  assert.equal(retrieval.results.some((source) => source.path.includes("cards/agents/androidworld.md")), false);
});

test("referential questions without known context stay out of scope", () => {
  const cases = [
    ["Explain this card", {}],
    ["这篇论文讲什么？", {}],
    ["What should I read first?", { track: "not-a-real-track" }],
  ];
  for (const [question, context] of cases) {
    const scope = classifyQuestionScope(question, context);
    assert.equal(scope.allowed, false, question);
    assert.equal(topicGate(question, context), false, question);
  }
});

test("unrelated questions stay out of scope", () => {
  const questions = [
    "附近有什么好吃的餐厅，帮我推荐一下",
    "What is the best mobile data plan in Shanghai?",
    "How do I fix this JavaScript code for a todo app?",
    "今天北京天气数据怎么样？",
    "帮我写一篇关于猫的论文",
  ];
  for (const question of questions) {
    const scope = classifyQuestionScope(question);
    assert.equal(scope.allowed, false, question);
    assert.equal(topicGate(question), false, question);
  }
});

test("post-training reasoning questions with broad words remain in scope", () => {
  const questions = [
    "How should I build LLM math reasoning data?",
    "Which code reasoning datasets are useful for RLVR?",
    "大模型后训练推理数据应该如何构建？",
    "什么是过程监督和奖励模型？",
  ];
  for (const question of questions) {
    const scope = classifyQuestionScope(question);
    assert.equal(scope.allowed, true, question);
    assert.equal(scope.domain, true, question);
    assert.equal(topicGate(question), true, question);
  }
});

test("companion paper primer seed is retrieved as the paper evidence layer", () => {
  const retrieval = retrieveSources({
    question: "What are the organizing questions for post-training reasoning data in the primer?",
    mode: "explain",
  });
  assert.ok(retrieval.results.length > 0);
  assert.equal(
    retrieval.results.some((source) => source.type === "primer" && source.path === "docs/companion_paper_primer.md"),
    true,
    retrieval.results.map((source) => `${source.type}:${source.path}`).join(", "),
  );
});

test("mock answers expose the three trust layers", () => {
  const script = `
    const { callModel } = await import('./src/provider360.mjs');
    const result = await callModel({
      question: '你可以告诉我项目里面有哪些东西，可以让我这个初学者了解么',
      mode: 'explain',
      model: 'auto',
      retrievalConfidence: 0.9,
      sources: [{
        index: 1,
        title: 'README',
        type: 'readme',
        path: 'README.md',
        url: 'https://example.test/README.md',
        snippet: 'A learning repository for understanding post-training reasoning data.'
      }]
    });
    console.log(result.text);
  `;
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", script], {
    cwd: appRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      ASK_ATLAS_MOCK_PROVIDER: "1",
      ASK_ATLAS_REQUIRE_MODEL_RATES: "0",
      QIHOO_API_KEY: "",
    },
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Companion paper evidence/);
  assert.match(result.stdout, /Repository atlas evidence/);
  assert.match(result.stdout, /Model background knowledge/);
});

test("provider answers are wrapped with trust layers when the model omits them", () => {
  const text = ensureTrustLayerFormat("A plain provider answer without the required evidence sections.", [{
    index: 1,
    title: "README",
    type: "readme",
    path: "README.md",
    url: "https://example.test/README.md",
    snippet: "A learning repository for understanding post-training reasoning data.",
  }]);
  assert.match(text, /## Short answer/);
  assert.match(text, /Companion paper evidence/);
  assert.match(text, /Repository atlas evidence/);
  assert.match(text, /Model background knowledge/);
  assert.match(text, /\[1\] README \(README\.md\)/);
});
