const state = {
  user: null,
  quota: null,
  mode: "explain",
  context: null,
  lastRequestId: "",
  history: [],
  lastSources: [],
};

const BACKEND_URL = String(window.ASK_ATLAS_BACKEND_URL || "").replace(/\/$/, "");
const PAGES_FRONTEND = window.ASK_ATLAS_FRONTEND === "pages";
const BACKEND_CONFIGURED = Boolean(BACKEND_URL) || !PAGES_FRONTEND;

const els = {
  loginButton: document.getElementById("loginButton"),
  logoutButton: document.getElementById("logoutButton"),
  adminLink: document.getElementById("adminLink"),
  userBadge: document.getElementById("userBadge"),
  quotaNumber: document.getElementById("quotaNumber"),
  modelSelect: document.getElementById("modelSelect"),
  modeList: document.getElementById("modeList"),
  refreshRewards: document.getElementById("refreshRewards"),
  rewardStatus: document.getElementById("rewardStatus"),
  privacyOptOut: document.getElementById("privacyOptOut"),
  acceptNotice: document.getElementById("acceptNotice"),
  consentStatus: document.getElementById("consentStatus"),
  suggestions: document.getElementById("suggestions"),
  contextPill: document.getElementById("contextPill"),
  messages: document.getElementById("messages"),
  askForm: document.getElementById("askForm"),
  question: document.getElementById("question"),
  charCount: document.getElementById("charCount"),
  askButton: document.getElementById("askButton"),
  sources: document.getElementById("sources"),
  history: document.getElementById("history"),
};

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeHref(value) {
  const raw = String(value || "").trim();
  if (!raw) return "#";
  try {
    const parsed = new URL(raw, location.origin);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") return esc(parsed.href);
  } catch (_error) {
    return "#";
  }
  return "#";
}

function text(value) {
  return String(value ?? "").trim();
}

function backendPath(path) {
  return BACKEND_URL ? `${BACKEND_URL}${path}` : path;
}

function humanize(value) {
  return text(value)
    .replace(/^docs\//, "")
    .replace(/\.md$/i, "")
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeMode(mode) {
  const allowed = new Set(["explain", "find_papers", "compare", "build", "audit", "quiz"]);
  return allowed.has(mode) ? mode : "explain";
}

function defaultPrompts() {
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
  if (context.type === "entry" || context.type === "card") {
    return [
      `Explain ${label} as a post-training reasoning-data paper.`,
      `What data object, verifier or reward, and training use does ${label} involve?`,
      `Generate an audit checklist for ${label}.`,
      `Compare ${label} with related work in this atlas.`,
    ];
  }
  return defaultPrompts();
}

function renderSuggestions(prompts = defaultPrompts()) {
  els.suggestions.innerHTML = prompts.map((prompt) => (
    `<button type="button" data-suggestion-prompt="${esc(prompt)}">${esc(prompt)}</button>`
  )).join("");
}

async function api(path, options = {}) {
  if (!BACKEND_CONFIGURED) {
    const error = new Error("Ask backend is not configured yet.");
    error.code = "backend_not_configured";
    throw error;
  }
  const response = await fetch(backendPath(path), {
    credentials: "include",
    headers: { "content-type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(payload.error || "Request failed.");
    error.payload = payload;
    throw error;
  }
  return payload;
}

function sourceCitation(line, sources) {
  return line.replace(/\[(\d+)\]/g, (match, number) => {
    const source = (sources || []).find((item) => String(item.index) === String(number));
    if (!source) return match;
    return `<a class="citation" href="${safeHref(source.url)}" target="_blank" rel="noreferrer">[${esc(number)}]</a>`;
  });
}

function renderAnswer(markdown, sources = []) {
  const lines = esc(markdown).split(/\n+/);
  return lines.map((line) => {
    if (!line.trim()) return "";
    const decorated = sourceCitation(line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"), sources);
    if (line.startsWith("## ")) return `<h3>${sourceCitation(line.slice(3), sources)}</h3>`;
    if (line.startsWith("# ")) return `<h3>${sourceCitation(line.slice(2), sources)}</h3>`;
    if (line.startsWith("- ")) return `<p>• ${sourceCitation(line.slice(2), sources)}</p>`;
    return `<p>${decorated}</p>`;
  }).join("");
}

function answerActions(meta = {}) {
  const firstSource = meta.sources?.[0]?.title || "the strongest retrieved source";
  const actions = [
    {
      mode: "audit",
      label: "Generate audit checklist",
      prompt: `Create an audit checklist for the data/verifier claims in ${firstSource}.`,
    },
    {
      mode: "compare",
      label: "Compare with another thread",
      prompt: `Compare ${firstSource} with another post-training reasoning data line from the atlas. Focus on data object, verifier type, training use, and failure modes.`,
    },
    {
      mode: "quiz",
      label: "Quiz me",
      prompt: "Quiz me on the concepts in the previous answer, then reveal concise explanations after each question.",
    },
  ];
  return `<div class="answer-actions">${actions.map((action) => (
    `<button type="button" data-action-mode="${esc(action.mode)}" data-action-prompt="${esc(action.prompt)}">${esc(action.label)}</button>`
  )).join("")}</div>`;
}

function evidenceMeta(mode = "") {
  const normalized = text(mode).toLowerCase();
  if (!normalized) return null;
  if (normalized.includes("companion paper + atlas")) {
    return { label: "Evidence · Companion + Atlas", className: "evidence-pill evidence-paper" };
  }
  if (normalized.includes("companion paper")) {
    return { label: "Evidence · Companion paper", className: "evidence-pill evidence-paper" };
  }
  if (normalized.includes("atlas grounded")) {
    return { label: "Evidence · Repository atlas", className: "evidence-pill evidence-atlas" };
  }
  if (normalized.includes("model background") || normalized.includes("limited atlas")) {
    return { label: "Evidence · Limited atlas + model", className: "evidence-pill evidence-mixed" };
  }
  if (normalized.includes("no repository")) {
    return { label: "Evidence · No repository support", className: "evidence-pill evidence-none" };
  }
  return { label: `Evidence · ${mode}`, className: "evidence-pill" };
}

function usageMeta(meta = {}) {
  const chips = [];
  const evidence = evidenceMeta(meta.evidenceMode);
  if (evidence) chips.push(evidence);
  if (meta.model) chips.push({ label: meta.model, className: "" });
  if (meta.sources?.length) chips.push({ label: `${meta.sources.length} sources`, className: "" });
  if (meta.usage?.retrievalConfidence !== undefined) {
    chips.push({
      label: `confidence ${Math.round(Number(meta.usage.retrievalConfidence || 0) * 100)}%`,
      className: "",
    });
  }
  if (meta.usage?.estimatedCostUsd !== undefined) {
    chips.push({ label: `est. $${meta.usage.estimatedCostUsd}`, className: "" });
  }
  return chips.length ? `<div class="answer-meta">${chips.map((chip) => (
    `<span class="${esc(chip.className)}">${esc(chip.label)}</span>`
  )).join("")}</div>` : "";
}

function addMessage(role, body, meta = {}) {
  const item = document.createElement("article");
  item.className = `message ${role}`;
  item.innerHTML = role === "assistant" ? renderAnswer(body, meta.sources || []) : `<p>${esc(body)}</p>`;
  if (role === "assistant" && meta.requestId) {
    item.insertAdjacentHTML("beforeend", `
      ${usageMeta(meta)}
      ${answerActions(meta)}
      <div class="feedback-actions" data-request-id="${esc(meta.requestId)}">
        <span>Was this useful?</span>
        <button type="button" data-feedback="up" data-reason="helpful">Helpful</button>
        <button type="button" data-feedback="down" data-reason="needs_work">Needs work</button>
      </div>
    `);
  }
  els.messages.appendChild(item);
  els.messages.scrollTop = els.messages.scrollHeight;
}

function addLoadingMessage() {
  const item = document.createElement("article");
  item.className = "message assistant loading";
  item.innerHTML = `
    <p><strong>Retrieving atlas sources</strong></p>
    <div class="loading-steps">
      <span>topic gate</span>
      <span>RAG search</span>
      <span>quota reserve</span>
      <span>model route</span>
    </div>
  `;
  els.messages.appendChild(item);
  els.messages.scrollTop = els.messages.scrollHeight;
  return item;
}

function consentAccepted() {
  return Boolean(state.user && !state.user.consentRequired);
}

function renderConsent() {
  if (!BACKEND_CONFIGURED) {
    els.acceptNotice.disabled = true;
    els.acceptNotice.textContent = "Launch pending";
    els.consentStatus.innerHTML = `The public frontend is ready. Connect the secure backend URL in <code>docs/assets/ask-config.js</code> after deployment.`;
    els.askButton.disabled = true;
    els.askButton.textContent = "Backend setup required";
    return;
  }
  if (!state.user) {
    els.acceptNotice.disabled = false;
    els.acceptNotice.textContent = "Sign in to accept";
    els.consentStatus.textContent = "Sign in with GitHub to accept this notice.";
    els.askButton.disabled = false;
    els.askButton.textContent = "Ask Atlas";
    return;
  }
  els.privacyOptOut.checked = state.user.storeRawQuestionDefault === false;
  if (consentAccepted()) {
    els.acceptNotice.disabled = true;
    els.acceptNotice.textContent = "Notice accepted";
    const logging = state.user.storeRawQuestionDefault === false ? "raw question logging off" : "raw question logging on";
    els.consentStatus.textContent = `Accepted ${state.user.usageConsentAcceptedAt || ""} · ${logging}`.trim();
    els.askButton.disabled = false;
    els.askButton.textContent = "Ask Atlas";
    return;
  }
  els.acceptNotice.disabled = false;
  els.acceptNotice.textContent = "I understand and agree";
  els.consentStatus.textContent = "Accept the usage notice before asking questions.";
  els.askButton.disabled = true;
  els.askButton.textContent = "Accept notice first";
}

function renderLaunchPending() {
  els.userBadge.textContent = "Launch pending";
  els.quotaNumber.textContent = "soon";
  els.loginButton.hidden = false;
  els.loginButton.textContent = "Launch guide";
  els.logoutButton.hidden = true;
  els.adminLink.hidden = true;
  els.refreshRewards.disabled = true;
  els.rewardStatus.textContent = "GitHub login, star/fork rewards, quota, and admin analytics activate after the secure backend is deployed.";
  els.sources.className = "source-list";
  els.sources.innerHTML = `
    <a class="source-item" href="https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data/blob/main/apps/ask-atlas/PRODUCTION.md" target="_blank" rel="noreferrer">
      <strong>Launch checklist</strong>
      <small><span>setup</span> · GitHub OAuth, Vercel, Postgres, Upstash, and provider secrets</small>
    </a>
    <a class="source-item" href="https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data/tree/main/apps/ask-atlas" target="_blank" rel="noreferrer">
      <strong>Ask backend source</strong>
      <small><span>code</span> · secure API, quota, RAG, model routing, and admin dashboard</small>
    </a>
  `;
  els.history.className = "sources-empty";
  els.history.textContent = "History appears after GitHub login is connected.";
  if (!els.messages.querySelector("[data-launch-pending]")) {
    els.messages.innerHTML = `
      <article class="message assistant launch-message" data-launch-pending="true">
        <h3>Ask the Atlas is ready to launch</h3>
        <p>The website UI is already wired for GitHub login, source-grounded answers, star/fork rewards, feedback, and a private admin dashboard.</p>
        <p>The final step is connecting the secure backend URL. API keys, cost caps, token logs, and user analytics must stay on the backend, so this public GitHub Pages frontend intentionally waits until that backend is configured.</p>
        <div class="answer-meta">
          <span class="evidence-pill evidence-atlas">Frontend ready</span>
          <span>Backend pending</span>
          <span>Secrets protected</span>
        </div>
      </article>
    `;
  }
  renderConsent();
}

function renderQuota() {
  if (!BACKEND_CONFIGURED) {
    renderLaunchPending();
    return;
  }
  if (!state.user) {
    els.userBadge.textContent = "Not signed in";
    els.quotaNumber.textContent = "0";
    els.loginButton.hidden = false;
    els.logoutButton.hidden = true;
    els.adminLink.hidden = true;
    renderConsent();
    return;
  }
  els.userBadge.textContent = `@${state.user.login}`;
  els.quotaNumber.textContent = state.quota?.totalAvailableToday ?? "0";
  els.loginButton.hidden = true;
  els.logoutButton.hidden = false;
  els.adminLink.hidden = !(state.user.admin || state.user.allowlisted);
  els.adminLink.href = backendPath("/admin");
  const parts = [];
  if (state.quota?.starBonusAwarded) parts.push("star bonus awarded");
  if (state.quota?.forkBonusAwarded) parts.push("fork bonus awarded");
  if (state.quota?.bonusCredits) parts.push(`${state.quota.bonusCredits} bonus left`);
  if ((state.quota?.totalAvailableToday || 0) <= 0) {
    els.rewardStatus.textContent = "Quota is empty. Star the repo for +10 one-time questions or fork it for +20.";
  } else {
    els.rewardStatus.textContent = parts.join(" · ") || "No bonus credits yet.";
  }
  renderConsent();
}

function renderSources(items) {
  if (!items?.length) {
    els.sources.className = "sources-empty";
    els.sources.textContent = "No sources returned.";
    return;
  }
  els.sources.className = "source-list";
  els.sources.innerHTML = items.map((source) => `
    <a class="source-item" href="${safeHref(source.url)}" target="_blank" rel="noreferrer">
      <strong>[${source.index}] ${esc(source.title)}</strong>
      <small><span>${esc(source.type)}</span> · ${esc(source.path)}</small>
    </a>
  `).join("");
}

function renderHistory(items) {
  state.history = items || [];
  if (!state.user) {
    els.history.className = "sources-empty";
    els.history.textContent = "Sign in to see your recent questions.";
    return;
  }
  if (!items?.length) {
    els.history.className = "sources-empty";
    els.history.textContent = "No questions yet.";
    return;
  }
  els.history.className = "history-list";
  els.history.innerHTML = items.slice(0, 8).map((item, index) => {
    const question = item.questionText || `Raw question hidden · ${item.questionHash?.slice(0, 10) || "hash only"}`;
    const canReuse = Boolean(item.questionText);
    return `
      <button type="button" ${canReuse ? `data-history-index="${index}"` : "disabled"} class="${canReuse ? "" : "muted"}">
        <strong>${esc(question)}</strong>
        <small>${esc(item.mode)} · ${esc(item.status)} · ${esc(item.createdAt || "")}</small>
      </button>
    `;
  }).join("");
}

function setContextFromUrl() {
  const params = new URLSearchParams(location.search);
  const track = params.get("track");
  const card = params.get("card");
  const entry = params.get("entry");
  const mode = normalizeMode(params.get("mode") || "");
  if (mode) setMode(mode);
  const value = track || card || entry || "";
  const type = track ? "track" : card ? "card" : entry ? "entry" : "";
  state.context = value ? { type, value } : null;
  if (state.context) {
    const label = type === "track" ? "Track context" : type === "card" ? "Card context" : "Entry context";
    els.contextPill.hidden = false;
    els.contextPill.innerHTML = `<strong>${esc(label)}</strong><span>${esc(humanize(value))}</span>`;
    renderSuggestions(contextPrompts(state.context));
  } else {
    renderSuggestions(defaultPrompts());
  }
  const seededQuestion = params.get("question") || params.get("q");
  if (seededQuestion) {
    els.question.value = seededQuestion.slice(0, els.question.maxLength || 4000);
    updateCount();
  }
}

function setMode(mode) {
  state.mode = normalizeMode(mode);
  [...els.modeList.querySelectorAll("button")].forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
}

async function loadMe() {
  const payload = await api("/api/me");
  state.user = payload.user;
  state.quota = payload.quota;
  els.modelSelect.innerHTML = `<option value="auto">Auto Recommended</option>` + payload.models.map((model) => (
    `<option value="${esc(model.id)}">${esc(model.label)}</option>`
  )).join("");
  if (payload.limits?.maxInputChars) {
    els.question.maxLength = payload.limits.maxInputChars;
  }
  renderQuota();
  if (state.user) await loadHistory();
}

async function loadHistory() {
  if (!state.user) {
    renderHistory([]);
    return;
  }
  try {
    const payload = await api("/api/history");
    renderHistory(payload.history || []);
  } catch (_error) {
    els.history.className = "sources-empty";
    els.history.textContent = "History is unavailable right now.";
  }
}

async function savePrivacyPreference() {
  if (!BACKEND_CONFIGURED || !state.user) return;
  if (!consentAccepted()) {
    els.consentStatus.textContent = "This privacy preference will be saved when you accept the usage notice.";
    return;
  }
  const previousDefault = state.user.storeRawQuestionDefault !== false;
  const nextDefault = !els.privacyOptOut.checked;
  els.consentStatus.textContent = "Saving privacy preference...";
  try {
    const payload = await api("/api/privacy", {
      method: "POST",
      body: JSON.stringify({ storeRawQuestionDefault: nextDefault }),
    });
    state.user = payload.user || state.user;
    renderQuota();
    els.consentStatus.textContent = `Privacy preference saved · raw question logging ${nextDefault ? "on" : "off"}.`;
  } catch (error) {
    els.privacyOptOut.checked = previousDefault === false;
    els.consentStatus.textContent = `Could not save privacy preference: ${error.message}`;
  }
}

async function submitQuestion() {
  const question = text(els.question.value);
  if (!question) return;
  if (!BACKEND_CONFIGURED) {
    addMessage("assistant", "Ask the Atlas is staged, but the secure backend URL is not connected yet. The backend is where GitHub login, quotas, RAG, model calls, token accounting, and admin analytics run without exposing secrets.");
    return;
  }
  if (!state.user) {
    location.href = backendPath(`/api/auth/github/login?return_to=${encodeURIComponent(location.href)}`);
    return;
  }
  if (!consentAccepted()) {
    addMessage("assistant", "Please accept the usage notice before asking. This protects the maintainer budget and makes logging transparent.");
    renderConsent();
    return;
  }
  addMessage("user", question);
  els.question.value = "";
  updateCount();
  els.askButton.disabled = true;
  els.askButton.textContent = "Thinking...";
  const loading = addLoadingMessage();
  const params = new URLSearchParams(location.search);
  try {
    const payload = await api("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        question,
        mode: state.mode,
        model: els.modelSelect.value,
        storeRawQuestion: !els.privacyOptOut.checked,
        track: params.get("track") || "",
        card: params.get("card") || "",
        entry: params.get("entry") || "",
      }),
    });
    state.lastRequestId = payload.requestId || "";
    state.quota = payload.quota || state.quota;
    state.lastSources = payload.sources || [];
    loading.remove();
    addMessage("assistant", payload.answer || "No answer returned.", {
      requestId: payload.requestId,
      sources: state.lastSources,
      model: payload.model,
      usage: payload.usage,
      evidenceMode: payload.evidenceMode,
      question,
    });
    renderSources(state.lastSources);
    renderQuota();
    await loadHistory();
  } catch (error) {
    loading.remove();
    if (error.payload?.consentRequired) {
      state.user = { ...state.user, consentRequired: true };
      renderConsent();
    }
    addMessage("assistant", `Request failed: ${error.message}`);
  } finally {
    renderConsent();
  }
}

function updateCount() {
  els.charCount.textContent = `${els.question.value.length} / ${els.question.maxLength}`;
}

els.loginButton.addEventListener("click", () => {
  if (!BACKEND_CONFIGURED) {
    location.href = "https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data/blob/main/apps/ask-atlas/PRODUCTION.md";
    return;
  }
  location.href = backendPath(`/api/auth/github/login?return_to=${encodeURIComponent(location.href)}`);
});
els.logoutButton.addEventListener("click", async () => {
  try {
    const payload = await api(`/api/auth/logout?return_to=${encodeURIComponent(location.href)}`, {
      method: "POST",
      body: "{}",
    });
    location.href = payload.returnTo || location.href;
  } catch (_error) {
    location.reload();
  }
});
els.acceptNotice.addEventListener("click", async () => {
  if (!state.user) {
    location.href = backendPath(`/api/auth/github/login?return_to=${encodeURIComponent(location.href)}`);
    return;
  }
  els.acceptNotice.disabled = true;
  els.consentStatus.textContent = "Saving consent...";
  try {
    const payload = await api("/api/consent", {
      method: "POST",
      body: JSON.stringify({ storeRawQuestionDefault: !els.privacyOptOut.checked }),
    });
    state.user = payload.user || state.user;
    renderQuota();
  } catch (error) {
    els.acceptNotice.disabled = false;
    els.consentStatus.textContent = error.message;
  }
});
els.modeList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (button) setMode(button.dataset.mode);
});
els.suggestions.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (button) els.question.value = button.dataset.suggestionPrompt || button.textContent;
  updateCount();
  els.question.focus();
});
document.querySelectorAll("[data-fill]").forEach((button) => {
  button.addEventListener("click", () => {
    els.question.value = button.dataset.fill;
    updateCount();
    els.question.focus();
  });
});
els.history.addEventListener("click", (event) => {
  const button = event.target.closest("[data-history-index]");
  if (!button) return;
  els.question.value = state.history[Number(button.dataset.historyIndex)]?.questionText || "";
  updateCount();
  els.question.focus();
});
els.messages.addEventListener("click", async (event) => {
  const actionButton = event.target.closest("[data-action-prompt]");
  if (actionButton) {
    setMode(actionButton.dataset.actionMode || state.mode);
    els.question.value = actionButton.dataset.actionPrompt || "";
    updateCount();
    els.question.focus();
    return;
  }
  const button = event.target.closest("[data-feedback]");
  if (!button) return;
  const box = button.closest("[data-request-id]");
  if (!box) return;
  button.disabled = true;
  try {
    await api("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        requestId: box.dataset.requestId,
        rating: button.dataset.feedback,
        reason: button.dataset.reason || "",
        comment: "",
      }),
    });
    box.innerHTML = "<span>Feedback saved. Thank you.</span>";
  } catch (error) {
    button.disabled = false;
    box.insertAdjacentHTML("beforeend", `<small class="feedback-error">${esc(error.message)}</small>`);
  }
});
els.refreshRewards.addEventListener("click", async () => {
  if (!state.user) {
    location.href = backendPath(`/api/auth/github/login?return_to=${encodeURIComponent(location.href)}`);
    return;
  }
  els.rewardStatus.textContent = "Checking GitHub star and fork status...";
  try {
    const payload = await api("/api/rewards/refresh", { method: "POST", body: "{}" });
    state.quota = payload.quota;
    renderQuota();
  } catch (error) {
    els.rewardStatus.textContent = error.message;
  }
});
els.askForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitQuestion();
});
els.question.addEventListener("input", updateCount);
els.privacyOptOut.addEventListener("change", savePrivacyPreference);

setContextFromUrl();
if (BACKEND_CONFIGURED) {
  loadMe().catch(() => renderQuota());
} else {
  renderQuota();
}
updateCount();
