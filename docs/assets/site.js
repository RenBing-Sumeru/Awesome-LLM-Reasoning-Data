const LANG = (document.documentElement.lang || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
const I = LANG === "zh" ? 1 : 0;
const PAGE = 24;

// The build stamp on this script's own URL is carried onto every data request, so a
// rebuild can never be mixed with JSON the browser cached from an earlier build.
const BUILD = (/[?&]v=([^&]+)/.exec(document.currentScript?.src || "") || [])[1] || "";
const bust = path => (BUILD ? `${path}?v=${BUILD}` : path);

const T = {
  en: {
    showingAll: n => `Showing all ${n} cards`,
    showingSome: (m, n) => `${m} of ${n} cards`,
    empty: "No cards match these filters.",
    loadError: "Could not load site data. Run: python scripts/build_site.py — and serve site/ over HTTP.",
    more: n => `Show ${n} more`,
    more_chips: n => `+${n} rare`,
    less: "show fewer",
    open: "Read card →",
    pending: "pending",
    cross: "cross-tagged",
    noSummary: "No summary yet.",
    detailError: "Could not load this card.",
    reading: "Reading sections",
    dataObject: "Data object",
    recipe: "Construction recipe",
    audit: "Audit ledger",
    needs: "Open gaps",
    verification: "Verification",
    why: "Why it matters",
    inclusion: "Why it is in the atlas",
    tags: "Tags",
    domains: "Domains",
    related: "Related",
    priority: "Priority",
    contract: "Contract",
    pathsMissing: "Reading paths are unavailable until the site data is rebuilt.",
    matched: n => `${n} matching cards`,
    ask: "Ask —",
    explain: "Explain",
    audit: "Audit",
    compare: "Compare",
    curatedQuoted: "",
    yes: "yes",
    no: "no",
    search: "search",
    track: "track",
    year: "year",
  },
  zh: {
    showingAll: n => `共 ${n} 张卡片`,
    showingSome: (m, n) => `匹配 ${m} / ${n} 张卡片`,
    empty: "没有符合当前筛选的卡片。",
    loadError: "无法加载站点数据。请运行 python scripts/build_site.py，并通过 HTTP 访问 site/。",
    more: n => `再显示 ${n} 张`,
    more_chips: n => `+${n} 个低频值`,
    less: "收起",
    open: "阅读卡片 →",
    pending: "待接入",
    cross: "跨标签",
    noSummary: "暂无摘要。",
    detailError: "无法加载这张卡片。",
    reading: "阅读章节",
    dataObject: "数据对象",
    recipe: "构造配方",
    audit: "审计账本",
    needs: "尚存缺口",
    verification: "核验记录",
    why: "为何重要",
    inclusion: "收录理由",
    tags: "标签",
    domains: "领域",
    related: "相关工作",
    priority: "优先级",
    contract: "验证契约",
    pathsMissing: "阅读路径数据尚未生成。",
    matched: n => `${n} 张匹配卡片`,
    ask: "提问 —",
    explain: "解读",
    audit: "审计",
    compare: "对比",
    curatedQuoted: "以下区块的字段名、判定与条目均已汉化；数字与标识符保持原样。如需与论文逐条对照，请切换到英文卡片。",
    yes: "是",
    no: "否",
    search: "关键词",
    track: "方向",
    year: "年份",
  },
}[LANG];

const GROUP_CLASS = {
  background_foundations: ["g-found", "c-found", "t-found"],
  core_reasoning_data_types: ["g-types", "c-types", "t-types"],
  data_lifecycle: ["g-life", "c-life", "t-life"],
};

const GROUP_TITLE = {
  background_foundations: ["Foundations", "基础与入门"],
  core_reasoning_data_types: ["Core Data Types", "核心数据类型"],
  data_lifecycle: ["Data Lifecycle", "数据生命周期"],
};

const PRIORITY_LABEL = { "必读": ["Must read", "必读"], "可读": ["Optional", "可读"], "暂缓": ["Deferred", "暂缓"] };
const PRIORITY_RANK = { "必读": 0, "可读": 1, "暂缓": 2 };

const state = {
  entries: [],
  tracks: [],
  facets: {},
  paths: [],
  activePath: "",
  trackById: new Map(),
  byId: new Map(),
  selected: {},
  openFacets: new Set(),
  limit: PAGE,
  detailLang: I,
};

const cache = new Map();

const el = id => document.getElementById(id);
const els = {
  q: el("q"),
  track: el("track"),
  year: el("year"),
  priority: el("priority"),
  reset: el("reset"),
  results: el("results"),
  resultSummary: el("resultSummary"),
  activeChips: el("activeChips"),
  trackGroups: el("trackGroups"),
  facetRows: el("facetRows"),
  pathTabs: el("pathTabs"),
  pathPanel: el("pathPanel"),
  sliceAsk: el("sliceAsk"),
  more: el("more"),
  moreWrap: el("moreWrap"),
  drawer: el("drawer"),
  drawerBody: el("drawerBody"),
  drawerCrumb: el("drawerCrumb"),
  drawerLang: el("drawerLang"),
};

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Labels always ship both languages, so falling back to the first is safe.
function pick(pair, index) {
  if (!Array.isArray(pair)) return String(pair ?? "");
  return pair[index ?? I] || pair[0] || "";
}

// Card content must not fall back: a page never shows the other language's prose.
function text(pair, index) {
  if (!Array.isArray(pair)) return String(pair ?? "");
  return pair[index ?? I] || "";
}

function trackLabel(id) {
  const track = state.trackById.get(id);
  if (!track) return id;
  return I ? track.title_zh : track.title;
}

function trackClass(id, slot) {
  const track = state.trackById.get(id);
  return (GROUP_CLASS[track?.group] || [])[slot] || "";
}

/* ---------- ask ---------- */

// The Ask page runs without a backend; these links prefill its composer.
function askUrl(params) {
  const url = new URL("ask/", location.href);
  if (I) url.searchParams.set("lang", "zh");
  Object.entries(params).forEach(([key, value]) => {
    const text = String(value ?? "").trim();
    if (text) url.searchParams.set(key, text);
  });
  return url.href;
}

function entryQuestion(card, mode) {
  const title = card.title || "this card";
  if (mode === "audit") {
    return I
      ? `请为《${title}》生成一份审计清单，覆盖数据对象、验证器或奖励信号、训练用途、污染风险、隐藏谱系与可复现性。`
      : `Generate an audit checklist for ${title}: data object, verifier or reward signal, training use, contamination risk, hidden lineage, and reproducibility.`;
  }
  if (mode === "compare") {
    return I
      ? `请把《${title}》与本图谱中的相关工作对比，重点看数据对象、验证契约、监督粒度、训练用途与失效模式。`
      : `Compare ${title} with related work in this atlas: data object, verification contract, supervision granularity, training use, and failure modes.`;
  }
  return I
    ? `请把《${title}》作为一篇后训练推理数据论文来解读：它发布的数据对象是什么，由什么验证，如何进入训练，为何重要。`
    : `Explain ${title} as a post-training reasoning-data paper: the data object, the verifier or reward signal, the training use, and why it matters.`;
}

function renderSliceAsk() {
  if (!els.sliceAsk) return;
  const parts = [];
  if (els.q.value.trim()) parts.push(`${T.search}: ${els.q.value.trim()}`);
  if (els.track.value) parts.push(`${T.track}: ${trackLabel(els.track.value)}`);
  Object.entries(state.selected).forEach(([, values]) =>
    values.forEach(value => parts.push(facetLabel(value))));
  const slice = parts.join("; ") || (I ? "全部卡片" : "the whole collection");
  els.sliceAsk.href = askUrl({
    mode: "find_papers",
    question: I
      ? `在当前筛选范围（${slice}）内，推荐最该先读的论文，并说明它们的数据对象、验证契约与审计风险。`
      : `Within the current slice (${slice}), recommend what to read first and explain the data objects, verification contracts, and audit risks.`,
  });
}

/* ---------- filtering ---------- */

function haystack(entry) {
  if (entry._hay) return entry._hay;
  entry._hay = [
    entry.title,
    entry.venue,
    entry.authors_zh,
    ...entry.authors,
    ...entry.tags,
    ...entry.domains,
    ...entry.tracks,
    ...entry.source_role,
    ...entry.verification_contract,
    ...entry.supervision_granularity,
    ...entry.training_use,
    ...entry.construction_layer,
    entry.one_line[0],
    entry.one_line[1],
    entry.why,
    entry.paper_type_zh,
    entry.best_for_zh,
  ].join(" ").toLowerCase();
  return entry._hay;
}

function matches(entry) {
  const query = els.q.value.trim().toLowerCase();
  if (query && !haystack(entry).includes(query)) return false;
  if (els.track.value && !entry.tracks.includes(els.track.value)) return false;
  if (els.year.value && String(entry.year) !== els.year.value) return false;
  if (els.priority.value && entry.priority !== els.priority.value) return false;
  for (const [facet, values] of Object.entries(state.selected)) {
    if (!values.size) continue;
    const owned = entry[facet] || [];
    if (![...values].some(value => owned.includes(value))) return false;
  }
  return true;
}

function sortEntries(items) {
  return [...items].sort((a, b) => {
    const pa = PRIORITY_RANK[a.priority] ?? 3;
    const pb = PRIORITY_RANK[b.priority] ?? 3;
    return pa - pb
      || (b.year || 0) - (a.year || 0)
      || b.link_count - a.link_count
      || String(a.title).localeCompare(String(b.title));
  });
}

/* ---------- grid ---------- */

function cardHtml(entry) {
  const first = entry.tracks[0];
  const meta = [entry.year || "n.d.", entry.venue || "—"];
  if (first) meta.push(trackLabel(first));
  const priority = entry.priority
    ? `<span class="${entry.priority === "必读" ? "must" : ""}">${esc(pick(PRIORITY_LABEL[entry.priority] || [entry.priority]))}</span>`
    : "";
  const links = entry.links
    .map(link => `<a href="${esc(link.url)}" target="_blank" rel="noreferrer">${esc(pick(link.label))}</a>`)
    .join("");
  const paper = entry.primary_link
    ? `<a href="${esc(entry.primary_link)}" target="_blank" rel="noreferrer">${I ? "论文" : "Paper"}</a>`
    : "";
  const facets = [...entry.verification_contract, ...entry.source_role].slice(0, 3)
    .map(value => esc(facetLabel(value)))
    .join(" · ");
  return `<article class="card ${trackClass(first, 1)}">
    <div class="cmeta"><span>${esc(meta.join(" · "))}</span>${priority}</div>
    <h3><button type="button" data-card="${esc(entry.id)}">${esc(entry.title)}</button></h3>
    <p class="csum">${esc(text(entry.one_line) || T.noSummary)}</p>
    ${facets ? `<p class="ctags">${facets}</p>` : ""}
    <div class="cfoot">${paper}${links}<button class="open" type="button" data-card="${esc(entry.id)}">${esc(T.open)}</button></div>
  </article>`;
}

function facetLabel(value) {
  for (const facet of Object.values(state.facets)) {
    const hit = facet.values.find(item => item.id === value);
    if (hit) return pick(hit.label);
  }
  return String(value).replaceAll("_", " ");
}

function render() {
  const shown = sortEntries(state.entries.filter(matches));
  els.resultSummary.textContent = shown.length === state.entries.length
    ? T.showingAll(state.entries.length)
    : T.showingSome(shown.length, state.entries.length);
  renderSliceAsk();
  els.results.innerHTML = shown.length
    ? shown.slice(0, state.limit).map(cardHtml).join("")
    : `<div class="empty">${esc(T.empty)}</div>`;
  const rest = shown.length - state.limit;
  els.moreWrap.hidden = rest <= 0;
  if (rest > 0) els.more.textContent = T.more(Math.min(rest, PAGE));
  renderActiveChips();
}

function renderActiveChips() {
  const chips = [];
  if (els.q.value.trim()) chips.push({ kind: "q", label: `${T.search}: ${els.q.value.trim()}` });
  if (els.track.value) chips.push({ kind: "track", label: `${T.track}: ${trackLabel(els.track.value)}` });
  if (els.year.value) chips.push({ kind: "year", label: `${T.year}: ${els.year.value}` });
  if (els.priority.value) {
    chips.push({ kind: "priority", label: `${T.priority}: ${pick(PRIORITY_LABEL[els.priority.value] || [els.priority.value])}` });
  }
  for (const [facet, values] of Object.entries(state.selected)) {
    values.forEach(value => chips.push({ kind: "facet", facet, value, label: facetLabel(value) }));
  }
  els.activeChips.innerHTML = chips.map(chip => (
    `<button type="button" data-kind="${esc(chip.kind)}" data-facet="${esc(chip.facet || "")}" data-value="${esc(chip.value || "")}">${esc(chip.label)}</button>`
  )).join("");
}

function renderTrackGroups() {
  const counts = {};
  state.entries.forEach(entry => entry.tracks.forEach(id => { counts[id] = (counts[id] || 0) + 1; }));
  els.trackGroups.innerHTML = Object.keys(GROUP_TITLE).map(group => {
    const rows = state.tracks
      .filter(track => track.group === group)
      .map(track => {
        const count = counts[track.id] || 0;
        const classes = [];
        if (!track.integrated) classes.push(count ? "cross" : "pending");
        if (track.id === els.track.value) classes.push("active");
        const attr = count ? ` href="#search" data-track="${esc(track.id)}"` : "";
        const tail = track.integrated || count
          ? `<span class="tcount">${count}</span>`
          : `<span class="tcount">—</span>`;
        return `<li><a class="${classes.join(" ")}"${attr}>
          <span class="tnum">${String(track.order).padStart(2, "0")}</span>
          <span class="tname">${esc(I ? track.title_zh : track.title)}</span>
          ${tail}
        </a></li>`;
      }).join("");
    return `<div class="group ${GROUP_CLASS[group][0]}">
      <h3>${esc(pick(GROUP_TITLE[group]))}</h3><ul>${rows}</ul>
    </div>`;
  }).join("");
}

function renderFacets() {
  els.facetRows.innerHTML = Object.entries(state.facets).map(([name, facet]) => {
    const chip = item => {
      const on = state.selected[name]?.has(item.id) ? " on" : "";
      return `<button class="chip${on}" type="button" data-facet="${esc(name)}" data-value="${esc(item.id)}">
        ${esc(pick(item.label))}<span class="n">${item.count}</span>
      </button>`;
    };
    // A selected long-tail value stays visible so the filter never hides its own state.
    const selected = state.selected[name] || new Set();
    const main = facet.values.filter(item => !item.minor || selected.has(item.id));
    const minor = facet.values.filter(item => item.minor && !selected.has(item.id));
    const open = state.openFacets.has(name);
    const toggle = minor.length
      ? `<button class="chip more" type="button" data-more="${esc(name)}">${
          open ? T.less : T.more_chips(minor.length)}</button>`
      : "";
    return `<div class="facetrow">
      <span class="flabel">${esc(pick(facet.label))}</span>
      <div class="chiprow">${main.map(chip).join("")}${open ? minor.map(chip).join("") : ""}${toggle}</div>
    </div>`;
  }).join("");
}

function renderPaths() {
  if (!els.pathTabs || !els.pathPanel) return;
  if (!state.paths.length) {
    els.pathPanel.innerHTML = `<p class="pathnote">${esc(T.pathsMissing)}</p>`;
    return;
  }
  if (!state.activePath) state.activePath = state.paths[0].id;
  els.pathTabs.innerHTML = state.paths.map(path => (
    `<button type="button" class="${path.id === state.activePath ? "active" : ""}" data-path="${esc(path.id)}">${esc(pick(path.title))}</button>`
  )).join("");
  const path = state.paths.find(p => p.id === state.activePath) || state.paths[0];
  const items = path.entries.map((id, index) => {
    const entry = state.byId.get(id);
    if (!entry) return "";
    const meta = [entry.year || "n.d.", entry.venue || "—"].join(" · ");
    return `<li>
      <span class="n">${index + 1}</span>
      <div>
        <strong><button type="button" data-card="${esc(entry.id)}">${esc(entry.title)}</button></strong>
        <small>${esc(meta)}</small>
      </div>
    </li>`;
  }).join("");
  els.pathPanel.innerHTML =
    `<p class="pathnote">${esc(pick(path.goal))} <span class="pathcount">${esc(T.matched(path.matched))}</span></p>
     <ol class="pathlist">${items}</ol>`;
}

function fillSelects() {
  const counts = {};
  state.entries.forEach(entry => entry.tracks.forEach(id => { counts[id] = (counts[id] || 0) + 1; }));
  state.tracks.filter(track => counts[track.id]).forEach(track => {
    const option = document.createElement("option");
    option.value = track.id;
    option.textContent = `${I ? track.title_zh : track.title} (${counts[track.id]})`;
    els.track.appendChild(option);
  });
  [...new Set(state.entries.map(entry => entry.year).filter(Boolean))]
    .sort((a, b) => b - a)
    .forEach(year => {
      const option = document.createElement("option");
      option.value = String(year);
      option.textContent = String(year);
      els.year.appendChild(option);
    });
  ["必读", "可读", "暂缓"].forEach(value => {
    const total = state.entries.filter(entry => entry.priority === value).length;
    if (!total) return;
    const option = document.createElement("option");
    option.value = value;
    option.textContent = `${pick(PRIORITY_LABEL[value])} (${total})`;
    els.priority.appendChild(option);
  });
}

/* ---------- drawer ---------- */

function kvBlock(title, rows) {
  if (!rows?.length) return "";
  // Values prefer value_zh on the Chinese page (stock verdicts plus per-card sentences).
  // Missing translations fall back to the English source.
  const zh = state.detailLang === 1;
  const body = rows.map(row => `<div class="kvrow">
    <dt>${esc(pick(row.label, state.detailLang))}</dt>
    <dd>${valueHtml(zh && row.value_zh ? row.value_zh : row.value)}</dd>
  </div>`).join("");
  return `<section class="dblock"><h3>${esc(title)}</h3><dl class="kv">${body}</dl></section>`;
}

function valueHtml(value) {
  if (!value) return "";
  if (value.kind === "list") return `<ul>${value.items.map(item => `<li>${item}</li>`).join("")}</ul>`;
  if (value.kind === "flag") return `<code>${value.value ? T.yes : T.no}</code>`;
  return value.html || "";
}

function drawerHtml(card) {
  const lang = state.detailLang;
  const zh = lang === 1;
  const badges = card.tracks.map(id => (
    `<span class="badge ${trackClass(id, 2)}">${esc(trackLabel(id))}</span>`
  ));
  if (card.priority) {
    badges.push(`<span class="badge${card.priority === "必读" ? " must" : ""}">${esc(pick(PRIORITY_LABEL[card.priority] || [card.priority], lang))}</span>`);
  }

  const authors = zh && card.authors_zh
    ? card.authors_zh
    : card.authors.slice(0, 12).join(", ") + (card.authors.length > 12 ? ", et al." : "");
  const pub = [card.year, card.venue].filter(Boolean).join(" · ");
  const links = card.artifacts.map(link => (
    `<a href="${esc(link.url)}" target="_blank" rel="noreferrer">${esc(pick(link.label, lang))} ↗</a>`
  )).join("");

  // Chinese lives in header_zh.json; English prose lives in paper.yaml. Neither crosses over.
  const meta = zh
    ? [card.paper_type_zh, card.best_for_zh]
        .filter(Boolean)
        .map(value => `<p class="note">${esc(value)}</p>`)
    : (card.inclusion_reason
        ? [`<section class="dblock"><h3>${esc(T.inclusion)}</h3><div class="prose"><p>${esc(card.inclusion_reason)}</p></div></section>`]
        : []);

  const sections = card.sections.map(section => {
    const html = section.html[lang];
    if (!html) return "";
    return `<section class="dblock">
      <h3><span class="n">${esc(section.key.slice(0, 2))}</span>${esc(pick(section.title, lang))}</h3>
      <div class="prose">${html}</div>
    </section>`;
  }).join("");

  const needs = card.needs?.length
    ? `<section class="dblock"><h3>${esc(T.needs)}</h3><ul class="needlist">${card.needs.map(need => (
        `<li><span class="nk">${esc(pick(need.label, lang))}</span><span class="nv">${need.html || "—"}</span></li>`
      )).join("")}</ul></section>`
    : "";

  // Both pages render these blocks. Headings, field labels, statuses, stock pointers,
  // and card-specific sentences are translated on the Chinese page when value_zh exists.
  const curated = [
    kvBlock(T.dataObject, card.data_object),
    kvBlock(T.recipe, card.recipe_metadata),
    kvBlock(T.audit, card.audit),
    needs,
    kvBlock(T.verification, card.verification),
  ].join("");
  const curatedNote = zh && card.data_object?.length
    ? `<p class="curatednote">${esc(T.curatedQuoted)}</p>`
    : "";

  const chips = list => list.map(item => `<span>${esc(item)}</span>`).join("");
  const tail = [];
  if (card.domains.length) {
    tail.push(`<section class="dblock"><h3>${esc(T.domains)}</h3><div class="tagcloud">${chips(card.domains)}</div></section>`);
  }
  if (card.tags.length) {
    tail.push(`<section class="dblock"><h3>${esc(T.tags)}</h3><div class="tagcloud">${chips(card.tags)}</div></section>`);
  }

  return `<div class="dhead">
      <div class="dbadges">${badges.join("")}</div>
      <h2 id="drawerTitle">${esc(card.title)}</h2>
      ${authors ? `<p class="authors">${esc(authors)}</p>` : ""}
      ${pub ? `<p class="pub">${esc(pub)}</p>` : ""}
      ${links ? `<div class="dlinks">${links}</div>` : ""}
      <div class="dask">${esc(T.ask)}${["explain", "audit", "compare"].map(mode =>
        `<a href="${esc(askUrl({ entry: card.id, mode, question: entryQuestion(card, mode) }))}">${
          esc(T[mode])}</a>`).join("")}</div>
      <p class="dsum">${esc(text(card.one_line, lang) || T.noSummary)}</p>
      ${!zh && card.why ? `<p class="dwhy">${esc(card.why)}</p>` : ""}
    </div>
    ${meta.join("")}
    ${sections}
    ${curatedNote}
    ${curated}
    ${tail.join("")}`;
}

async function openCard(id) {
  els.drawer.hidden = false;
  document.body.classList.add("locked");
  els.drawerLang.textContent = state.detailLang === 1 ? "EN" : "中文";
  els.drawerBody.innerHTML = "";
  els.drawerBody.scrollTop = 0;
  els.drawerCrumb.textContent = id;
  let card = cache.get(id);
  if (!card) {
    try {
      const response = await fetch(bust(`assets/data/cards/${id}.json`));
      if (!response.ok) throw new Error(response.statusText);
      card = await response.json();
      cache.set(id, card);
    } catch (_error) {
      els.drawerBody.innerHTML = `<div class="empty">${esc(T.detailError)}</div>`;
      return;
    }
  }
  state.openId = id;
  els.drawerCrumb.textContent = card.tracks.map(trackLabel).join(" · ") || id;
  els.drawerBody.innerHTML = drawerHtml(card);
  if (history.replaceState) history.replaceState(null, "", `#card=${id}`);
}

function closeCard() {
  els.drawer.hidden = true;
  document.body.classList.remove("locked");
  state.openId = null;
  if (history.replaceState) history.replaceState(null, "", location.pathname + location.search);
}

/* ---------- events ---------- */

function bind() {
  ["q", "track", "year", "priority"].forEach(id => {
    els[id].addEventListener("input", () => {
      state.limit = PAGE;
      if (id === "track") renderTrackGroups();
      render();
    });
  });

  els.reset.addEventListener("click", () => {
    els.q.value = "";
    ["track", "year", "priority"].forEach(id => { els[id].value = ""; });
    state.selected = {};
    state.openFacets = new Set();
    state.limit = PAGE;
    renderTrackGroups();
    renderFacets();
    render();
  });

  els.more.addEventListener("click", () => {
    state.limit += PAGE;
    render();
  });

  els.trackGroups.addEventListener("click", event => {
    const link = event.target.closest("[data-track]");
    if (!link) return;
    const id = link.dataset.track;
    els.track.value = els.track.value === id ? "" : id;
    state.limit = PAGE;
    renderTrackGroups();
    render();
  });

  els.pathTabs?.addEventListener("click", event => {
    const button = event.target.closest("[data-path]");
    if (!button) return;
    state.activePath = button.dataset.path;
    renderPaths();
  });

  els.pathPanel?.addEventListener("click", event => {
    const button = event.target.closest("[data-card]");
    if (button) openCard(button.dataset.card);
  });

  els.facetRows.addEventListener("click", event => {
    const more = event.target.closest("[data-more]");
    if (more) {
      const name = more.dataset.more;
      state.openFacets.has(name) ? state.openFacets.delete(name) : state.openFacets.add(name);
      renderFacets();
      return;
    }
    const chip = event.target.closest("[data-facet]");
    if (!chip) return;
    toggleFacet(chip.dataset.facet, chip.dataset.value);
  });

  els.activeChips.addEventListener("click", event => {
    const chip = event.target.closest("button");
    if (!chip) return;
    const { kind, facet, value } = chip.dataset;
    if (kind === "facet") {
      toggleFacet(facet, value);
      return;
    }
    if (kind === "q") els.q.value = "";
    else els[kind].value = "";
    state.limit = PAGE;
    renderTrackGroups();
    render();
  });

  els.results.addEventListener("click", event => {
    const button = event.target.closest("[data-card]");
    if (button) openCard(button.dataset.card);
  });

  els.drawer.addEventListener("click", event => {
    if (event.target.closest("[data-close]")) closeCard();
  });

  els.drawerLang.addEventListener("click", () => {
    state.detailLang = state.detailLang === 1 ? 0 : 1;
    els.drawerLang.textContent = state.detailLang === 1 ? "EN" : "中文";
    const card = cache.get(state.openId);
    if (card) {
      els.drawerBody.innerHTML = drawerHtml(card);
      els.drawerBody.scrollTop = 0;
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !els.drawer.hidden) closeCard();
  });
}

function toggleFacet(facet, value) {
  if (!state.selected[facet]) state.selected[facet] = new Set();
  const set = state.selected[facet];
  if (set.has(value)) set.delete(value);
  else set.add(value);
  state.limit = PAGE;
  renderFacets();
  render();
}

async function loadJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`${path}: ${response.statusText}`);
  return response.json();
}

async function init() {
  try {
    const [entries, tracks, facets, paths] = await Promise.all([
      loadJson(bust("assets/data/entries.json")),
      loadJson(bust("assets/data/tracks.json")),
      loadJson(bust("assets/data/facets.json")),
      loadJson(bust("assets/data/paths.json")).catch(() => []),
    ]);
    state.entries = entries;
    state.tracks = tracks;
    state.facets = facets;
    state.paths = paths || [];
    state.trackById = new Map(tracks.map(track => [track.id, track]));
    state.byId = new Map(entries.map(entry => [entry.id, entry]));
  } catch (_error) {
    els.resultSummary.textContent = T.loadError;
    els.results.innerHTML = `<div class="empty">${esc(T.loadError)}</div>`;
    return;
  }
  fillSelects();
  renderTrackGroups();
  renderPaths();
  renderFacets();
  bind();
  render();
  const match = /^#card=(.+)$/.exec(location.hash);
  if (match) openCard(decodeURIComponent(match[1]));
}

init();
