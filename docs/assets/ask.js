const els = {
  form: document.getElementById("askForm"),
  question: document.getElementById("question"),
  askButton: document.getElementById("askButton"),
  modelSelect: document.getElementById("modelSelect"),
  modeList: document.getElementById("modeList"),
  suggestions: document.getElementById("suggestions"),
  historySection: document.getElementById("historySection"),
  historyList: document.getElementById("historyList"),
  clearHistory: document.getElementById("clearHistory"),
  contextPill: document.getElementById("contextPill"),
  answerSection: document.getElementById("answerSection"),
  answerQuestion: document.getElementById("answerQuestion"),
  answerBody: document.getElementById("answerBody"),
  sources: document.getElementById("sources"),
};

const HISTORY_KEY = "ask_atlas_history";
const HISTORY_LIMIT = 10;

const state = {
  mode: "explain",
  context: null,
  lastQuestion: "",
};

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isZh() {
  return (document.documentElement.lang || "").toLowerCase().startsWith("zh");
}

function hasCjk(value) {
  return /[㐀-鿿]/.test(String(value || ""));
}

function normalizeMode(mode) {
  const allowed = new Set(["explain", "find_papers", "compare", "build", "audit", "quiz"]);
  return allowed.has(mode) ? mode : "explain";
}

function humanize(value) {
  return String(value || "")
    .replace(/^docs\//, "")
    .replace(/\.md$/i, "")
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ---------- mode ---------- */

function setMode(mode) {
  state.mode = normalizeMode(mode);
  els.modeList.querySelectorAll("button[data-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
}

/* ---------- context & suggestions ---------- */

function defaultPrompts() {
  if (isZh()) {
    return [
      "什么是后训练推理数据？",
      "应该先读哪些 PRM 论文？",
      "如何构建数学 RLVR 数据集？",
      "智能体轨迹数据应该审计什么？",
    ];
  }
  return [
    "What is post-training reasoning data?",
    "Which PRM papers should I read first?",
    "How should I build a math RLVR dataset?",
    "What should I audit in agent trajectory data?",
  ];
}

function contextPrompts(context) {
  if (!context?.value) return defaultPrompts();
  const label = humanize(context.value);
  if (context.type === "track") {
    return [
      `What should I read first for the ${label} track?`,
      `Compare the data objects and verifier types in ${label}.`,
      `Generate an audit checklist for ${label}.`,
      `Which papers in ${label} matter most for a beginner?`,
    ];
  }
  return [
    `Explain ${label} as a post-training reasoning-data paper.`,
    `What data object, verifier or reward, and training use does ${label} involve?`,
    `Generate an audit checklist for ${label}.`,
    `Compare ${label} with related work in this atlas.`,
  ];
}

function renderContextPill() {
  if (!state.context?.value) {
    els.contextPill.hidden = true;
    return;
  }
  const label = humanize(state.context.value);
  const kind = state.context.type === "track"
    ? (isZh() ? "方向上下文" : "Track context")
    : (isZh() ? "卡片上下文" : "Card context");
  els.contextPill.textContent = `${kind} · ${label}`;
  els.contextPill.hidden = false;
}

function renderSuggestions() {
  const prompts = contextPrompts(state.context);
  els.suggestions.innerHTML = prompts.map((prompt, index) => (
    `<li><button type="button" data-prompt="${esc(prompt)}">` +
    `<span class="n">0${index + 1}</span>${esc(prompt)}</button></li>`
  )).join("");
}

/* ---------- history (local, private) ---------- */

function readHistory() {
  try {
    const raw = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    return Array.isArray(raw) ? raw.filter((item) => typeof item === "string" && item.trim()) : [];
  } catch (_error) {
    return [];
  }
}

function writeHistory(items) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(0, HISTORY_LIMIT)));
  } catch (_error) { /* private mode */ }
}

function pushHistory(question) {
  const items = readHistory().filter((item) => item !== question);
  items.unshift(question);
  writeHistory(items);
  renderHistory();
}

function renderHistory() {
  const items = readHistory();
  if (!items.length) {
    els.historySection.hidden = true;
    return;
  }
  els.historyList.innerHTML = items.map((question, index) => (
    `<li><button type="button" data-prompt="${esc(question)}">` +
    `<span class="n">${String(index + 1).padStart(2, "0")}</span>${esc(question)}</button></li>`
  )).join("");
  els.historySection.hidden = false;
}

/* ---------- demo preview answer ---------- */

function previewSources() {
  const zh = isZh();
  return [
    {
      index: 1,
      title: zh ? "配套论文 · 后训练推理数据入门" : "Companion paper · A Primer in Post-Training Reasoning Data",
      type: zh ? "论文" : "Paper",
      url: "https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data/blob/main/docs/companion_paper_primer.md",
    },
    {
      index: 2,
      title: zh ? "入门指南 · Start Here" : "Start Here guide",
      type: zh ? "指南" : "Guide",
      url: "https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data/blob/main/docs/00_start_here.md",
    },
    {
      index: 3,
      title: zh ? "论文地图 · papers/README" : "Paper atlas · papers/README",
      type: zh ? "地图" : "Map",
      url: "https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data/tree/main/papers",
    },
    {
      index: 4,
      title: zh ? "仓库自述 · README" : "Repository README",
      type: "README",
      url: "https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data#readme",
    },
  ];
}

function previewAnswer(question) {
  if (isZh() || hasCjk(question)) {
    return `## 启动预览
这是一个本地演示预览：不调用模型、不消耗额度、不记录你的问题。后端上线后，回答会按以下优先级检索证据。
**配套论文证据** — 优先检索配套入门论文的本地文本索引；未检索到对应段落时，回答会明确标注"论文证据不足"。[1]
**仓库图鉴证据** — 其次检索入门指南、论文地图与 280+ 张论文卡片，回答"该读哪些论文、这个方向有什么"。[2][3][4]
**模型背景知识** — 仅在论文与仓库证据不足时补充，且标注为较低可信度，不会伪装成论文或仓库证据。`;
  }
  return `## Launch preview
This is a local demo preview: it does not call a model, spend quota, or log your question. Once the backend launches, answers retrieve evidence in this order.
**Companion paper evidence** — the safe local index of the companion primer is checked first; if no passage is retrieved, the answer says so explicitly. [1]
**Repository atlas evidence** — next come the guides, the paper map, and 280+ paper cards, so "what should I read" questions get grounded answers. [2][3][4]
**Model background knowledge** — used only when paper and atlas evidence run out, and always labeled as lower-confidence fallback.`;
}

function renderAnswerBody(markdown, sources) {
  const linkCitations = (line) => line.replace(/\[(\d+)\]/g, (match, number) => {
    const source = sources.find((item) => String(item.index) === String(number));
    if (!source) return match;
    return `<a class="cite" href="${esc(source.url)}" target="_blank" rel="noreferrer">[${esc(number)}]</a>`;
  });
  return esc(markdown).split(/\n+/).map((line) => {
    if (!line.trim()) return "";
    if (line.startsWith("## ")) return `<h3>${linkCitations(line.slice(3))}</h3>`;
    const bolded = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return `<p>${linkCitations(bolded)}</p>`;
  }).join("");
}

function renderSources(sources) {
  els.sources.innerHTML = sources.map((source) => (
    `<li><span class="n">[${esc(source.index)}]</span>` +
    `<a href="${esc(source.url)}" target="_blank" rel="noreferrer">${esc(source.title)}</a>` +
    `<span class="type">${esc(source.type)}</span></li>`
  )).join("");
}

function renderAnswer(question) {
  const sources = previewSources();
  els.answerQuestion.textContent = question;
  els.answerBody.innerHTML = renderAnswerBody(previewAnswer(question), sources);
  renderSources(sources);
  els.answerSection.hidden = false;
}

/* ---------- events ---------- */

function bindEvents() {
  els.modeList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (button) setMode(button.dataset.mode);
  });

  const fillFromList = (event) => {
    const button = event.target.closest("button[data-prompt]");
    if (!button) return;
    els.question.value = button.dataset.prompt;
    els.question.focus();
  };
  els.suggestions.addEventListener("click", fillFromList);
  els.historyList.addEventListener("click", fillFromList);

  els.clearHistory.addEventListener("click", () => {
    writeHistory([]);
    renderHistory();
  });

  els.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = els.question.value.trim();
    if (!question) {
      els.question.focus();
      return;
    }
    state.lastQuestion = question;
    pushHistory(question);
    renderAnswer(question);
    els.answerSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  window.addEventListener("ask-atlas-lang", () => {
    renderSuggestions();
    renderContextPill();
    if (!els.answerSection.hidden && state.lastQuestion) renderAnswer(state.lastQuestion);
  });
}

/* ---------- init ---------- */

function init() {
  const params = new URLSearchParams(window.location.search);
  setMode(params.get("mode") || "explain");
  const entry = (params.get("entry") || params.get("card") || "").trim();
  const track = (params.get("track") || "").trim();
  if (entry) state.context = { type: "card", value: entry };
  else if (track) state.context = { type: "track", value: track };
  const question = (params.get("question") || "").trim();
  if (question) els.question.value = question;

  renderContextPill();
  renderSuggestions();
  renderHistory();
  bindEvents();
}

init();
