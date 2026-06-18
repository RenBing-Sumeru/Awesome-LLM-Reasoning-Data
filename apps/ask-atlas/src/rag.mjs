import fs from "node:fs";
import path from "node:path";
import { CONFIG, REPO_ROOT, pagesUrl, repoUrl, safePrimerTextPath } from "./config.mjs";

const PUBLIC_TEXT_EXTENSIONS = new Set([".md", ".json", ".yaml", ".yml", ".txt"]);
const IGNORE_DIRS = new Set([".git", "apps", "site", "dist", "build", "__pycache__"]);
const STOPWORDS = new Set([
  "the", "and", "for", "with", "that", "this", "from", "into", "what", "which", "where",
  "when", "how", "should", "would", "could", "first", "read", "paper", "papers", "data",
  "object", "objects", "they", "their", "about", "using", "use", "used", "learn",
]);

let cachedIndex = null;

function readText(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (_error) {
    return "";
  }
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    if (IGNORE_DIRS.has(name)) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full, out);
    } else if (PUBLIC_TEXT_EXTENSIONS.has(path.extname(name))) {
      out.push(full);
    }
  }
  return out;
}

function cleanText(text) {
  return String(text || "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function chunkText(text, maxChars = 1600) {
  const paragraphs = cleanText(text).split(/\n\s*\n/).filter(Boolean);
  const chunks = [];
  let current = "";
  for (const paragraph of paragraphs) {
    if ((current + "\n\n" + paragraph).length > maxChars && current) {
      chunks.push(current.trim());
      current = "";
    }
    if (paragraph.length > maxChars) {
      const sentences = paragraph.match(/[^.!?。！？]+[.!?。！？]?/g) || [paragraph];
      for (const sentence of sentences) {
        if ((current + " " + sentence).length > maxChars && current) {
          chunks.push(current.trim());
          current = "";
        }
        current += `${sentence} `;
      }
    } else {
      current += current ? `\n\n${paragraph}` : paragraph;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

function sourceType(relPath) {
  if (relPath === "docs/companion_paper_primer.md" || relPath.startsWith("data/primer/")) return "primer";
  if (relPath === "README.md") return "readme";
  if (relPath.startsWith("cards/")) return "card";
  if (relPath.startsWith("papers/")) return "paper_map";
  if (relPath.startsWith("docs/")) return "guide";
  if (relPath.startsWith("data/")) return "metadata";
  return "repo";
}

function tokenize(text) {
  return [
    ...String(text || "")
      .toLowerCase()
      .matchAll(/[a-z0-9][a-z0-9_\-+.]{1,}|[\u4e00-\u9fa5]{2,}/g),
  ]
    .map((match) => match[0])
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
}

function expandTerms(question, terms) {
  const text = String(question || "").toLowerCase();
  const expanded = new Set(terms);
  const add = (items) => items.forEach((item) => tokenize(item).forEach((token) => expanded.add(token)));
  if (projectQuestion(text)) {
    add([
      "repository overview",
      "project guide",
      "learning repository",
      "learning guides",
      "paper maps",
      "paper atlas",
      "cards",
      "metadata",
      "starter pack",
      "readme",
      "contents",
      "docs",
      "glossary",
      "coverage",
      "Ask the Atlas",
    ]);
  }
  if (text.includes("prm") || text.includes("process reward") || text.includes("process supervision")) {
    add([
      "process reward model",
      "process supervision",
      "step-level labels",
      "rollout-value supervision",
      "first-error localization",
      "PRM800K",
      "Let's Verify Step by Step",
      "Math-Shepherd",
      "OmegaPRM",
      "PRMBench",
      "ProcessBench",
      "AutoPSV",
    ]);
  }
  if (text.includes("rlvr") || text.includes("verifiable reward")) {
    add(["reinforcement learning with verifiable rewards", "answer verifier", "math answer checks", "programmatic verification"]);
  }
  if (text.includes("agent") || text.includes("trajectory") || text.includes("tool")) {
    add(["agent trajectory", "environmental feedback", "tool use", "web agents", "SWE-bench", "replayable trajectory"]);
  }
  if (text.includes("audit") || text.includes("contamination") || text.includes("failure")) {
    add(["benchmark contamination", "verifier gaming", "reward hacking", "hidden lineage", "teacher leakage"]);
  }
  return [...expanded];
}

const DOMAIN_STRONG_TERMS = [
  "post-training", "post training", "post-training reasoning", "reasoning data",
  "reasoning dataset", "reasoning datasets", "reasoning model", "reasoning models",
  "reasoning trace", "reasoning traces", "llm reasoning", "rlhf", "rlvr", "verifier",
  "verifiers", "reward model", "reward models", "verifiable reward", "preference data",
  "preference optimization", "process supervision", "process reward", "process reward model",
  "prm", "orm", "dpo", "rlaif", "sft", "chain-of-thought", "chain of thought", "cot",
  "instruction tuning", "supervised fine-tuning", "test-time compute", "llm-as-judge",
  "llm as judge", "agent trajectory", "agent trajectories", "tool-use data", "tool use data",
  "benchmark contamination", "reward hacking", "verifier gaming", "teacher leakage",
  "formal proof", "theorem proving", "math reasoning", "code reasoning",
  "大模型", "大语言模型", "语言模型", "后训练", "推理数据", "推理模型", "推理轨迹",
  "可验证奖励", "验证器", "过程监督", "奖励模型", "偏好优化", "人类偏好",
  "指令微调", "监督微调", "链式思维", "思维链", "智能体轨迹", "工具使用",
  "基准污染", "奖励黑客", "测试时计算", "数学推理", "代码推理", "定理证明",
];

const DOMAIN_BROAD_TERMS = [
  "math", "code", "proof", "agent", "trajectory", "benchmark", "contamination", "audit",
  "dataset", "datasets", "data", "judge", "rubric", "alignment", "preference", "reward",
  "training", "evaluation", "paper", "papers", "model", "models", "trace", "traces",
  "数学", "代码", "证明", "智能体", "轨迹", "基准", "污染", "审计", "数据",
  "奖励", "验证", "评估", "论文", "偏好", "强化学习", "模型",
];

const DOMAIN_CONTEXT_TERMS = [
  "llm", "llms", "large language model", "large language models", "language model",
  "language models", "reasoning", "post-training", "post training", "openai", "deepseek",
  "qwen", "glm", "gpt", "claude", "gemini", "math-shepherd", "prm800k", "swe-bench",
  "大模型", "大语言模型", "语言模型", "推理", "后训练", "深度求索", "千问", "智谱",
];

const DOMAIN_PAIR_LEFT = [
  "data", "dataset", "datasets", "trace", "traces", "trajectory", "trajectories",
  "paper", "papers", "benchmark", "benchmarks", "数据", "轨迹", "论文", "基准",
];

const DOMAIN_PAIR_RIGHT = [
  "verifier", "verifiers", "reward", "judge", "rubric", "process", "preference",
  "agent", "tool", "rl", "sft", "cot", "proof", "math", "code", "audit",
  "验证", "奖励", "评判", "过程", "偏好", "智能体", "工具", "强化学习",
  "思维链", "证明", "数学", "代码", "审计",
];

const PROJECT_EXPLICIT_TERMS = [
  "awesome-llm-reasoning-data", "awesome llm reasoning data", "ask the atlas",
  "this repo", "this repository", "this project", "this github project", "this atlas",
  "this awesome", "current repo", "current repository", "current project", "repo readme",
  "repository readme", "project readme", "本项目", "本仓库", "这个项目", "这个仓库",
  "我们的项目", "我们的仓库", "这个 awesome", "这个atlas", "这个 atlas",
];

const PROJECT_MARKER_TERMS = [
  "repository", "repo", "project", "github", "awesome", "atlas", "readme", "starter pack",
  "learning path", "paper map", "paper maps", "cards", "metadata", "docs", "site",
  "仓库", "项目", "github", "awesome", "atlas", "readme", "文档", "论文卡片", "论文地图",
  "网站", "网页", "问答助手",
];

const PROJECT_NAV_TERMS = [
  "what is in", "what is inside", "what does", "show me", "tell me", "contents",
  "content", "table of contents", "directory", "structure", "overview", "guide",
  "beginner", "starter", "start", "learn", "learning", "navigate", "navigation",
  "category", "categories", "section", "sections", "track", "tracks", "how to use",
  "里面", "内容", "目录", "有哪些", "有什么", "结构", "总览", "概览", "指南",
  "入门", "初学者", "开始", "学习", "导航", "分类", "板块", "怎么用", "如何使用",
  "使用指南",
];

const PROJECT_CONTEXTUAL_QUERIES = [
  "what is the directory structure", "show me the table of contents",
  "what contents are here", "what content is here", "what is inside here",
  "where should i start", "how should a beginner learn", "what should a beginner read",
  "目录结构", "有哪些内容", "这里有什么", "从哪里开始", "初学者怎么学",
];

const CONTEXT_REFERENCE_TERMS = [
  "this card", "this paper", "this entry", "this track", "this category", "this section",
  "the card", "the paper", "the entry", "the track", "the category", "the section",
  "explain this", "summarize this", "what should i read first", "what should i read",
  "where should i start", "generate an audit checklist", "audit checklist",
  "compare with related work", "compare this", "how does this fit",
  "这篇论文", "这篇文章", "这张卡片", "这个卡片", "这个条目", "这个track",
  "这个 track", "这个分类", "这个方向", "这个领域", "这一节", "这个部分",
  "解释一下", "总结一下", "讲什么", "先读什么", "应该先读", "从哪里开始",
  "审计清单", "对比相关工作", "和相关工作对比",
];

function includesAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

export function projectQuestion(question) {
  const text = String(question || "").toLowerCase();
  if (includesAny(text, PROJECT_EXPLICIT_TERMS)) return true;
  if (includesAny(text, PROJECT_CONTEXTUAL_QUERIES)) return true;
  return includesAny(text, PROJECT_MARKER_TERMS) && includesAny(text, PROJECT_NAV_TERMS);
}

export function domainQuestion(question) {
  const text = String(question || "").toLowerCase();
  if (includesAny(text, DOMAIN_STRONG_TERMS)) return true;
  const hasBroadTerm = includesAny(text, DOMAIN_BROAD_TERMS);
  if (!hasBroadTerm) return false;
  if (includesAny(text, DOMAIN_CONTEXT_TERMS)) return true;
  return includesAny(text, DOMAIN_PAIR_LEFT) && includesAny(text, DOMAIN_PAIR_RIGHT);
}

function contextCandidates(value) {
  const raw = String(value || "").trim().toLowerCase();
  if (!raw) return [];
  const dashed = raw.replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/^-+|-+$/g, "");
  const underscored = raw.replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "_").replace(/^_+|_+$/g, "");
  const withoutTrailingYear = raw.replace(/[-_](19|20)\d{2}$/g, "");
  return [...new Set([raw, dashed, underscored, withoutTrailingYear, withoutTrailingYear.replaceAll("-", "_")].filter(Boolean))];
}

function knownContext(context = {}) {
  const trackTerms = contextCandidates(context.track);
  const entryTerms = contextCandidates(context.entry);
  const cardTerms = contextCandidates(context.card);
  if (!trackTerms.length && !entryTerms.length && !cardTerms.length) return false;
  const index = knowledgeIndex();
  return index.some((source) => {
    const haystack = `${source.id} ${source.path} ${source.title} ${source.text.slice(0, 500)}`.toLowerCase();
    if (trackTerms.length && trackTerms.some((term) => haystack.includes(term))) return true;
    if (entryTerms.length && entryTerms.some((term) => source.id.toLowerCase() === `entry:${term}` || haystack.includes(term))) return true;
    if (cardTerms.length && source.type === "card" && cardTerms.some((term) => haystack.includes(term))) return true;
    return false;
  });
}

export function contextQuestion(question, context = {}) {
  const text = String(question || "").toLowerCase();
  return knownContext(context) && includesAny(text, CONTEXT_REFERENCE_TERMS);
}

export function classifyQuestionScope(question, context = {}) {
  const text = String(question || "").trim();
  const allowedByContext = contextQuestion(text, context);
  const allowedByProject = projectQuestion(text);
  const allowedByDomain = domainQuestion(text);
  return {
    allowed: allowedByContext || allowedByProject || allowedByDomain,
    context: allowedByContext,
    project: allowedByProject,
    domain: allowedByDomain,
    reason: allowedByContext ? "context" : allowedByProject ? "project" : allowedByDomain ? "domain" : "out_of_scope",
  };
}

function titleFromPath(relPath) {
  return relPath
    .replace(/\.md$|\.json$|\.ya?ml$/i, "")
    .split("/")
    .pop()
    .replaceAll("_", " ")
    .replaceAll("-", " ");
}

function buildFileSources() {
  const roots = ["README.md", "docs", "papers", "cards"];
  const files = [];
  for (const root of roots) {
    const full = path.join(REPO_ROOT, root);
    if (fs.existsSync(full) && fs.statSync(full).isDirectory()) {
      walk(full, files);
    } else if (fs.existsSync(full)) {
      files.push(full);
    }
  }
  const primerTextPath = safePrimerTextPath();
  if (primerTextPath && fs.existsSync(primerTextPath)) {
    files.push(primerTextPath);
  }
  const sources = [];
  for (const file of files) {
    const rel = path.relative(REPO_ROOT, file);
    if (rel.startsWith("docs/assets/")) continue;
    const isPrimer = primerTextPath && path.resolve(file) === primerTextPath;
    const type = isPrimer ? "primer" : sourceType(rel);
    const text = readText(file);
    if (!text.trim()) continue;
    const chunks = chunkText(text);
    chunks.forEach((chunk, index) => {
      sources.push({
        id: `${rel}#chunk-${index + 1}`,
        title: type === "primer" ? "A Primer in Post-Training Reasoning Data" : titleFromPath(rel),
        path: rel,
        url: rel.startsWith("docs/")
          ? pagesUrl(rel)
          : repoUrl(rel),
        type,
        text: chunk,
        tokens: tokenize(`${rel} ${chunk}`),
      });
    });
  }
  sources.push(...buildEntrySources());
  return sources;
}

function buildEntrySources() {
  const file = path.join(REPO_ROOT, "data/_generated/entries.json");
  if (!fs.existsSync(file)) return [];
  let entries = [];
  try {
    entries = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (_error) {
    return [];
  }
  return entries.map((entry) => {
    const artifactLinks = Object.entries(entry.artifacts || {})
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    const text = cleanText(`
Title: ${entry.title}
Year: ${entry.year || "unknown"}
Venue: ${entry.venue || "unknown"}
Category: ${(entry.category || []).join(", ")}
Subfield: ${entry.subfield || "unknown"}
Source role: ${(entry.source_role || []).join(", ")}
Verification contract: ${(entry.verification_contract || []).join(", ")}
Supervision granularity: ${(entry.supervision_granularity || []).join(", ")}
Training use: ${(entry.training_use || []).join(", ")}
Summary: ${entry.one_line_summary || ""}
Why it matters: ${entry.why_it_matters || ""}
Data object: ${entry.data_object || ""}
Feedback / verifier: ${entry.feedback_verifier || ""}
Audit focus: ${entry.audit_focus || ""}
Status: ${entry.status || ""}
Artifacts:
${artifactLinks}
`);
    const cardPath = entry.artifacts?.card;
    return {
      id: `entry:${entry.id}`,
      title: entry.title,
      path: `data/_generated/entries.json#${entry.id}`,
      url: entry.primary_link || (cardPath ? repoUrl(cardPath) : repoUrl("data/_generated/entries.json")),
      type: "entry",
      text,
      tokens: tokenize(`${entry.id} ${entry.title} ${entry.subfield} ${(entry.tags || []).join(" ")} ${text}`),
    };
  });
}

export function buildIndex() {
  cachedIndex = buildFileSources();
  return cachedIndex;
}

export function knowledgeIndex() {
  if (!cachedIndex) buildIndex();
  return cachedIndex;
}

export function topicGate(question, context = {}) {
  return classifyQuestionScope(question, context).allowed;
}

export function retrieveSources({ question, mode = "explain", track = "", entry = "", card = "" }) {
  const terms = expandTerms(question, tokenize(`${question} ${mode} ${track} ${entry} ${card}`));
  const termSet = new Set(terms);
  const queryText = String(question || "").toLowerCase();
  const trackTerms = contextCandidates(track);
  const entryTerms = contextCandidates(entry);
  const cardTerms = contextCandidates(card);
  const primerSeeking = [
    "companion paper",
    "primer",
    "post-training reasoning data",
    "post training reasoning data",
    "organizing questions",
    "配套论文",
    "论文",
    "后训练推理数据",
  ].some((term) => queryText.includes(term));
  const index = knowledgeIndex();
  const scored = index.map((source) => {
    let score = 0;
    const sourceHaystack = `${source.id} ${source.path} ${source.title} ${source.text.slice(0, 1000)}`.toLowerCase();
    for (const token of source.tokens) {
      if (termSet.has(token)) score += 3;
      for (const queryToken of termSet) {
        if (queryToken.length > 4 && token.includes(queryToken)) score += 1;
      }
    }
    if (trackTerms.some((term) => sourceHaystack.includes(term))) score += 80;
    if (entryTerms.some((term) => source.id.toLowerCase() === `entry:${term}`)) score += 180;
    if (entryTerms.some((term) => sourceHaystack.includes(term))) score += 95;
    if (cardTerms.some((term) => source.type === "card" && sourceHaystack.includes(term))) score += 120;
    if (primerSeeking && source.type === "primer") score += 70;
    if (projectQuestion(queryText)) {
      if (source.path === "README.md") score += 100;
      if (source.path === "docs/00_start_here.md") score += 80;
      if (source.path === "docs/01_what_is_post_training_reasoning_data.md") score += 65;
      if (source.path === "docs/_sidebar.md") score += 45;
      if (source.path === "docs/glossary.md") score += 35;
      if (source.path === "cards/README.md") score += 45;
      if (source.path === "papers/README.md") score += 45;
      if (source.type === "readme") score += 25;
      if (source.type === "guide") score += 20;
      if (source.text.toLowerCase().includes("learning repository")) score += 30;
      if (source.text.toLowerCase().includes("paper maps")) score += 20;
      if (source.text.toLowerCase().includes("cards")) score += 15;
    }
    if ((queryText.includes("prm") || queryText.includes("process reward") || queryText.includes("process supervision"))) {
      if (source.path.includes("03_process_supervision_prm")) score += 80;
      if (source.path.includes("cards/verifiers/prm")) score += 55;
      if (source.path.includes("cards/verifiers/math_shepherd")) score += 45;
      if (source.path.includes("cards/verifiers/omegaprm")) score += 45;
      if (source.path.includes("cards/verifiers/processbench")) score += 35;
      if (source.text.toLowerCase().includes("process reward")) score += 15;
    }
    if (score > 0) {
      if (source.type === "primer") score += 6;
      if (source.type === "card") score += 7;
      if (source.type === "entry") score += 5;
      if (source.type === "paper_map") score += 4;
      if (source.type === "guide") score += 2;
    }
    return { ...source, score };
  });
  const diverse = [];
  const perPath = new Map();
  for (const source of scored
    .filter((source) => source.score > 0)
    .sort((a, b) => b.score - a.score)) {
    const count = perPath.get(source.path) || 0;
    if (count >= 2) continue;
    perPath.set(source.path, count + 1);
    diverse.push(source);
    if (diverse.length >= 9) break;
  }
  const results = diverse.map((source, index) => ({
      id: source.id,
      index: index + 1,
      title: source.title,
      path: source.path,
      url: source.url,
      type: source.type,
      snippet: source.text.slice(0, 900),
      score: source.score,
    }));
  const confidence = results.length ? Math.min(1, results[0].score / 25) : 0;
  return { results, confidence };
}
