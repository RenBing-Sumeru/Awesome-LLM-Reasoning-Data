let entries = [];
let counts = {};
let starterPacks = [];
let researchTracks = [];
let activePackId = "";
let activeTrackId = "";
const REPO_BLOB_ROOT = "https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data/blob/main";
const ASK_ENTRY = "ask/";
const LANG = (document.documentElement.lang || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
const I18N = window.ATLAS_I18N || {};

const T = {
  en: {
    showingAll: n => `Showing all ${n} entries · verified first`,
    showingSome: (m, n) => `${m} of ${n} entries · verified first`,
    empty: "No entries match these filters.",
    loadError: "Could not load docs/assets/entries.json. Run python scripts/render_site.py.",
    ask: "Ask —",
    explain: "Explain",
    audit: "Audit",
    compare: "Compare",
    linkPending: "link pending",
    card: "Card",
    pending: "pending",
    unknownVenue: "unknown venue",
    noSummary: "No local summary yet.",
    pathsUnavailable: "Reading paths are unavailable until starter_packs.json is generated.",
  },
  zh: {
    showingAll: n => `共展示全部 ${n} 篇 · 已验证优先`,
    showingSome: (m, n) => `匹配 ${m} / ${n} 篇 · 已验证优先`,
    empty: "没有符合当前筛选的论文。",
    loadError: "无法加载 docs/assets/entries.json，请运行 python scripts/render_site.py。",
    ask: "提问 —",
    explain: "解读",
    audit: "审计",
    compare: "对比",
    linkPending: "链接整理中",
    card: "卡片",
    pending: "待补",
    unknownVenue: "发表处待补",
    noSummary: "暂无摘要。",
    pathsUnavailable: "阅读路径数据尚未生成。",
  },
}[LANG];

const GROUPS = [
  { id: "background_foundations", title: "Foundations", cls: "g-found", card: "c-found" },
  { id: "core_reasoning_data_types", title: "Core Data Types", cls: "g-types", card: "c-types" },
  { id: "data_lifecycle", title: "Data Lifecycle", cls: "g-life", card: "c-life" },
];

const ids = ["q", "category", "subfield", "year", "venue"];

const els = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
Object.assign(els, {
  reset: document.getElementById("reset"),
  results: document.getElementById("results"),
  resultSummary: document.getElementById("resultSummary"),
  trackGroups: document.getElementById("trackGroups"),
  sliceAsk: document.getElementById("sliceAsk"),
  pathTabs: document.getElementById("pathTabs"),
  pathPanel: document.getElementById("pathPanel"),
  totalEntries: document.getElementById("totalEntries"),
  verifiedEntries: document.getElementById("verifiedEntries"),
  cardedEntries: document.getElementById("cardedEntries")
});

function arr(value) {
  return Array.isArray(value) ? value.filter(Boolean) : value ? [value] : [];
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function display(value) {
  return String(value ?? "unknown").replaceAll("_", " ");
}

function stripEmoji(text) {
  return String(text || "").replace(/^[^\x00-\x7F]+\s*/, "").trim();
}

function repoBlob(path) {
  return `${REPO_BLOB_ROOT}/${String(path || "").replace(/^\.\.\//, "")}`;
}

function trackFor(categoryId) {
  return researchTracks.find(item => item.category_id === categoryId) || null;
}

function groupTitle(group) {
  if (LANG === "zh") return I18N.group_zh?.[group.id] || group.title;
  return group.title;
}

function categoryLabel(value) {
  const track = trackFor(value);
  if (!track) return display(value);
  if (LANG === "zh" && track.title_zh) return track.title_zh;
  return stripEmoji(track.navigator_title || track.short_title);
}

function subfieldLabel(value) {
  if (LANG === "zh") return I18N.subfield_zh?.[value] || value;
  return value;
}

function packTitle(pack) {
  if (LANG === "zh" && pack.title_zh) return pack.title_zh;
  return pack.title;
}

function packGoal(pack) {
  if (LANG === "zh" && pack.goal_zh) return pack.goal_zh;
  return pack.goal || "";
}

function cardClass(categoryId) {
  const track = trackFor(categoryId);
  const group = GROUPS.find(item => item.id === track?.group);
  return group ? group.card : "";
}

function askUrl(params = {}) {
  const url = new URL(ASK_ENTRY, window.location.href);
  if (LANG === "zh") url.searchParams.set("lang", "zh");
  Object.entries(params).forEach(([key, value]) => {
    const text = String(value ?? "").trim();
    if (text) url.searchParams.set(key, text);
  });
  return url.href;
}

function entryQuestion(entry, mode = "explain") {
  const title = entry?.title || "this atlas entry";
  if (mode === "audit") {
    return `Generate an audit checklist for ${title}. Focus on its data object, verifier or reward signal, training use, contamination risk, hidden lineage, and reproducibility.`;
  }
  if (mode === "compare") {
    return `Compare ${title} with related work in this atlas. Focus on data object, verifier type, supervision granularity, training use, and failure modes.`;
  }
  return `Explain ${title} as a post-training reasoning-data paper. Identify the data object, verifier or reward signal, training use, and why it matters.`;
}

function selectedFilterSummary() {
  const parts = [];
  const query = els.q.value.trim();
  if (query) parts.push(`search: ${query}`);
  const pairs = [
    ["category", "track", categoryLabel],
    ["subfield", "subfield", value => stripEmoji(value) || value],
    ["year", "year", display],
    ["venue", "venue", display],
  ];
  pairs.forEach(([id, label, formatter]) => {
    const value = els[id]?.value;
    if (value) parts.push(`${label}: ${formatter(value)}`);
  });
  return parts.length ? parts.join("; ") : "the full post-training reasoning-data collection";
}

function setText(id, value) {
  if (els[id]) els[id].textContent = value;
}

function loadOptions(id, values, labeler) {
  const select = els[id];
  const seen = [...new Set(values.filter(Boolean).map(String))].sort((a, b) => display(a).localeCompare(display(b)));
  seen.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = labeler ? labeler(value) : display(value);
    select.appendChild(option);
  });
}

function haystack(entry) {
  return [
    entry.title,
    entry.venue,
    ...arr(entry.authors),
    ...arr(entry.tags),
    ...arr(entry.domains),
    ...arr(entry.source_role),
    ...arr(entry.verification_contract),
    ...arr(entry.supervision_granularity),
    ...arr(entry.training_use),
    ...arr(entry.category),
    entry.subfield,
    entry.one_line_summary,
    entry.why_it_matters,
    entry.data_object,
    entry.feedback_verifier,
    entry.audit_focus,
    entry.status
  ].join(" ").toLowerCase();
}

function matches(entry) {
  const query = els.q.value.trim().toLowerCase();
  if (query && !haystack(entry).includes(query)) return false;
  if (els.year.value && String(entry.year) !== els.year.value) return false;
  if (els.category.value && !arr(entry.category).includes(els.category.value)) return false;
  if (els.subfield.value && entry.subfield !== els.subfield.value) return false;
  if (els.venue.value && entry.venue !== els.venue.value) return false;
  return true;
}

function sortEntries(items) {
  return [...items].sort((a, b) => {
    const aScore = (a.status === "verified" ? 4 : 0) + (a.artifacts?.card ? 2 : 0) + (a.primary_link ? 1 : 0);
    const bScore = (b.status === "verified" ? 4 : 0) + (b.artifacts?.card ? 2 : 0) + (b.primary_link ? 1 : 0);
    return bScore - aScore || (b.year || 0) - (a.year || 0) || String(a.title).localeCompare(String(b.title));
  });
}

function links(entry) {
  const labels = {
    paper: "Paper",
    venue: "Venue",
    arxiv: "arXiv",
    openreview: "OpenReview",
    acl: "ACL",
    doi: "DOI",
    code: "Code",
    data: "Data",
    huggingface: "HF",
    project: "Project"
  };
  const seen = new Set();
  const out = [];
  Object.entries(labels).forEach(([key, label]) => {
    const url = entry.artifacts?.[key];
    if (url && !seen.has(url)) {
      out.push(`<a href="${esc(url)}" target="_blank" rel="noreferrer">${label}</a>`);
      seen.add(url);
    }
  });
  if (entry.artifacts?.card) out.push(`<a href="${esc(repoBlob(entry.artifacts.card))}" target="_blank" rel="noreferrer">${esc(T.card)}</a>`);
  return out.join("");
}

function askAction(entry, mode, label) {
  return `<a href="${esc(askUrl({
    entry: entry.id,
    mode,
    question: entryQuestion(entry, mode),
  }))}">${esc(label)}</a>`;
}

function card(entry) {
  const firstCat = arr(entry.category)[0];
  const title = entry.primary_link
    ? `<a href="${esc(entry.primary_link)}" target="_blank" rel="noreferrer">${esc(entry.title)}</a>`
    : esc(entry.title);
  const meta = [entry.year || "n.d.", entry.venue || T.unknownVenue];
  if (firstCat) meta.push(categoryLabel(firstCat));
  return `<article class="card ${cardClass(firstCat)}">
    <div class="cmeta">${esc(meta.join(" · "))}</div>
    <h3>${title}</h3>
    <p class="csum">${esc(entry.one_line_summary || T.noSummary)}</p>
    ${entry.why_it_matters ? `<p class="cwhy">${esc(entry.why_it_matters)}</p>` : ""}
    <div class="cfoot">${links(entry) || `<span class="cstatus needs">${esc(T.linkPending)}</span>`}</div>
    <div class="cask">${esc(T.ask)}${askAction(entry, "explain", T.explain)}${askAction(entry, "audit", T.audit)}${askAction(entry, "compare", T.compare)}</div>
  </article>`;
}

function render() {
  const shown = sortEntries(entries.filter(matches));
  els.resultSummary.textContent = shown.length === entries.length
    ? T.showingAll(entries.length)
    : T.showingSome(shown.length, entries.length);
  renderSliceAsk();
  els.results.innerHTML = shown.length
    ? shown.slice(0, 220).map(card).join("")
    : `<div class='empty'>${esc(T.empty)}</div>`;
}

function renderSliceAsk() {
  if (!els.sliceAsk) return;
  const summary = selectedFilterSummary();
  const question = `Using the current atlas slice (${summary}), recommend the strongest papers to read first. Explain the data objects, verifier or reward contracts, and audit risks.`;
  els.sliceAsk.href = askUrl({ mode: "find_papers", question });
}

function renderTrackGroups() {
  if (!els.trackGroups) return;
  const countByCategory = {};
  entries.forEach(entry => {
    arr(entry.category).forEach(cat => {
      countByCategory[cat] = (countByCategory[cat] || 0) + 1;
    });
  });
  els.trackGroups.innerHTML = GROUPS.map(group => {
    const rows = researchTracks
      .map((track, index) => ({ track, index }))
      .filter(({ track }) => track.group === group.id)
      .map(({ track, index }) => {
        const id = track.category_id;
        const active = id === activeTrackId ? " class=\"active\"" : "";
        return `<li><a${active} href="#search" data-track="${esc(id)}">
          <span class="tnum">${String(index).padStart(2, "0")}</span>
          <span class="tname">${esc(categoryLabel(id))}</span>
          <span class="tcount">${countByCategory[id] || 0}</span>
        </a></li>`;
      }).join("");
    return `<div class="group ${group.cls}"><h3>${esc(groupTitle(group))}</h3><ul>${rows}</ul></div>`;
  }).join("");
}

function renderPaths() {
  if (!els.pathTabs || !els.pathPanel) return;
  if (!starterPacks.length) {
    els.pathPanel.innerHTML = `<p>${esc(T.pathsUnavailable)}</p>`;
    return;
  }
  if (!activePackId) activePackId = starterPacks[0].id;
  els.pathTabs.innerHTML = starterPacks.map(pack => (
    `<button type="button" class="${pack.id === activePackId ? "active" : ""}" data-pack="${esc(pack.id)}">${esc(packTitle(pack))}</button>`
  )).join("");
  const pack = starterPacks.find(item => item.id === activePackId) || starterPacks[0];
  const items = pack.entries.slice(0, 20).map((item, index) => {
    const entry = item.entry;
    const href = entry?.primary_link || repoBlob("reports/needs_search.md");
    const cardPath = entry?.artifacts?.card;
    const meta = [entry?.year || T.pending, entry?.venue || display(entry?.status || T.pending)];
    const cardLink = cardPath
      ? ` · <a href="${esc(repoBlob(cardPath))}" target="_blank" rel="noreferrer">${esc(T.card)}</a>`
      : "";
    return `<li>
      <span class="n">${index + 1}</span>
      <div>
        <strong><a href="${esc(href)}" target="_blank" rel="noreferrer">${esc(entry?.title || item.title)}</a></strong>
        <small>${esc(meta.join(" · "))}${cardLink}</small>
      </div>
    </li>`;
  }).join("");
  els.pathPanel.innerHTML = `<p>${esc(packGoal(pack))}</p><ol class="pathlist">${items}</ol>`;
}

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
  } catch (_error) {
    return fallback;
  }
}

function populateFilters() {
  loadOptions("category", entries.flatMap(entry => arr(entry.category)), categoryLabel);
  loadOptions("subfield", entries.map(entry => entry.subfield), subfieldLabel);
  loadOptions("year", entries.map(entry => entry.year).sort((a, b) => b - a));
  loadOptions("venue", entries.map(entry => entry.venue));
}

function bind() {
  ids.forEach(id => els[id].addEventListener("input", () => {
    if (id === "category") {
      activeTrackId = els.category.value;
      renderTrackGroups();
    }
    render();
  }));
  els.reset.addEventListener("click", () => {
    ids.forEach(id => { els[id].value = ""; });
    activeTrackId = "";
    renderTrackGroups();
    render();
  });
  els.trackGroups?.addEventListener("click", event => {
    const link = event.target.closest("[data-track]");
    if (!link) return;
    const id = link.dataset.track || "";
    activeTrackId = id === activeTrackId ? "" : id;
    els.category.value = activeTrackId;
    renderTrackGroups();
    render();
  });
  els.pathTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-pack]");
    if (!button) return;
    activePackId = button.dataset.pack;
    renderPaths();
  });
}

async function init() {
  const bundled = window.ATLAS_DATA || {};
  entries = await loadJson("assets/entries.json", bundled.entries || []);
  counts = await loadJson("assets/counts.json", bundled.counts || {});
  researchTracks = await loadJson("assets/research_tracks.json", bundled.research_tracks || []);
  starterPacks = await loadJson("assets/starter_packs.json", bundled.starter_packs || []);
  setText("totalEntries", counts.total_entries || entries.length);
  setText("verifiedEntries", counts.verified_entries || 0);
  setText("cardedEntries", counts.carded_entries || 0);
  if (!entries.length) {
    els.resultSummary.textContent = T.loadError;
    els.results.innerHTML = "<div class='empty'>No generated data available.</div>";
    return;
  }
  populateFilters();
  renderTrackGroups();
  renderPaths();
  bind();
  render();
}

init();
