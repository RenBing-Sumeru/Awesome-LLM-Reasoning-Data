let entries = [];
let counts = {};
let starterPacks = [];
let activePackId = "";

const ids = [
  "q", "year", "venue", "sourceRole", "contract", "granularity",
  "trainingUse", "curation", "status", "artifact"
];

const els = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
Object.assign(els, {
  reset: document.getElementById("reset"),
  results: document.getElementById("results"),
  resultSummary: document.getElementById("resultSummary"),
  pathTabs: document.getElementById("pathTabs"),
  pathPanel: document.getElementById("pathPanel"),
  totalEntries: document.getElementById("totalEntries"),
  verifiedEntries: document.getElementById("verifiedEntries"),
  cardedEntries: document.getElementById("cardedEntries"),
  needsSearch: document.getElementById("needsSearch"),
  dataReleases: document.getElementById("dataReleases"),
  verifiersRewards: document.getElementById("verifiersRewards"),
  agentEnvironments: document.getElementById("agentEnvironments"),
  scalingStudies: document.getElementById("scalingStudies")
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

function setText(id, value) {
  if (els[id]) els[id].textContent = value;
}

function loadOptions(id, values) {
  const select = els[id];
  const seen = [...new Set(values.filter(Boolean).map(String))].sort((a, b) => display(a).localeCompare(display(b)));
  seen.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = display(value);
    select.appendChild(option);
  });
}

function artifactAvailable(entry, kind) {
  if (!kind) return true;
  const artifacts = entry.artifacts || {};
  if (kind === "primary") return Boolean(entry.primary_link);
  if (kind === "data_or_hf") return Boolean(artifacts.data || artifacts.huggingface);
  return Boolean(artifacts[kind]);
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
    entry.one_line_summary,
    entry.why_it_matters,
    entry.curation_level,
    entry.status
  ].join(" ").toLowerCase();
}

function matches(entry) {
  const query = els.q.value.trim().toLowerCase();
  if (query && !haystack(entry).includes(query)) return false;
  if (els.year.value && String(entry.year) !== els.year.value) return false;
  if (els.venue.value && entry.venue !== els.venue.value) return false;
  if (els.sourceRole.value && !arr(entry.source_role).includes(els.sourceRole.value)) return false;
  if (els.contract.value && !arr(entry.verification_contract).includes(els.contract.value)) return false;
  if (els.granularity.value && !arr(entry.supervision_granularity).includes(els.granularity.value)) return false;
  if (els.trainingUse.value && !arr(entry.training_use).includes(els.trainingUse.value)) return false;
  if (els.curation.value && entry.curation_level !== els.curation.value) return false;
  if (els.status.value && entry.status !== els.status.value) return false;
  if (!artifactAvailable(entry, els.artifact.value)) return false;
  return true;
}

function sortEntries(items) {
  return [...items].sort((a, b) => {
    const aScore = (a.status === "verified" ? 4 : 0) + (a.artifacts?.card ? 2 : 0) + (a.primary_link ? 1 : 0);
    const bScore = (b.status === "verified" ? 4 : 0) + (b.artifacts?.card ? 2 : 0) + (b.primary_link ? 1 : 0);
    return bScore - aScore || (b.year || 0) - (a.year || 0) || String(a.title).localeCompare(String(b.title));
  });
}

function tag(value, kind = "") {
  return `<span class="tag ${esc(kind)}">${esc(display(value))}</span>`;
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
  if (entry.artifacts?.card) out.push(`<a href="../${esc(entry.artifacts.card)}">Card</a>`);
  return out.join("");
}

function card(entry) {
  const title = entry.primary_link
    ? `<a href="${esc(entry.primary_link)}" target="_blank" rel="noreferrer">${esc(entry.title)}</a>`
    : esc(entry.title);
  return `<article class="entry-card">
    <div class="meta">${esc(entry.year || "n.d.")} · ${esc(entry.venue || "unknown venue")}</div>
    <h3>${title}</h3>
    <div class="tags">
      ${arr(entry.source_role).slice(0, 2).map(v => tag(v)).join("")}
      ${arr(entry.verification_contract).slice(0, 2).map(v => tag(v)).join("")}
      ${tag(entry.status || "unknown", entry.status === "verified" ? "verified" : "needs")}
      ${tag(entry.curation_level || "L0_seeded", entry.curation_level)}
    </div>
    <p class="summary">${esc(entry.one_line_summary || "No local summary yet.")}</p>
    <p class="why">${esc(entry.why_it_matters || "Needs curator rationale.")}</p>
    <div class="links">${links(entry) || "<span class='tag needs'>needs search</span>"}</div>
  </article>`;
}

function render() {
  const shown = sortEntries(entries.filter(matches));
  els.resultSummary.textContent = `${shown.length} of ${entries.length} entries match the current filters.`;
  els.results.innerHTML = shown.length
    ? shown.slice(0, 220).map(card).join("")
    : "<div class='empty'>No entries match these filters.</div>";
}

function renderPaths() {
  if (!starterPacks.length) {
    els.pathPanel.innerHTML = "<p>Reading paths are unavailable until starter_packs.json is generated.</p>";
    return;
  }
  if (!activePackId) activePackId = starterPacks[0].id;
  els.pathTabs.innerHTML = starterPacks.map(pack => (
    `<button type="button" class="${pack.id === activePackId ? "active" : ""}" data-pack="${esc(pack.id)}">${esc(pack.emoji || "")} ${esc(pack.title)}</button>`
  )).join("");
  const pack = starterPacks.find(item => item.id === activePackId) || starterPacks[0];
  const items = pack.entries.slice(0, 20).map((item, index) => {
    const entry = item.entry;
    const href = entry?.primary_link || "../reports/needs_search.md";
    const cardPath = entry?.artifacts?.card;
    return `<li>
      <strong>${index + 1}. <a href="${esc(href)}">${esc(entry?.title || item.title)}</a></strong>
      <small>${esc(entry?.year || "pending")} · ${esc(entry?.status || "needs_search")} · ${esc(entry?.curation_level || "L0_seeded")}</small>
      ${cardPath ? `<a href="../${esc(cardPath)}">Card</a>` : ""}
    </li>`;
  }).join("");
  els.pathPanel.innerHTML = `<h3>${esc(pack.title)}</h3><p>${esc(pack.goal || "")}</p><ol>${items}</ol>`;
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
  loadOptions("year", entries.map(entry => entry.year).sort((a, b) => b - a));
  loadOptions("venue", entries.map(entry => entry.venue));
  loadOptions("sourceRole", entries.flatMap(entry => arr(entry.source_role)));
  loadOptions("contract", entries.flatMap(entry => arr(entry.verification_contract)));
  loadOptions("granularity", entries.flatMap(entry => arr(entry.supervision_granularity)));
  loadOptions("trainingUse", entries.flatMap(entry => arr(entry.training_use)));
  loadOptions("curation", entries.map(entry => entry.curation_level));
  loadOptions("status", entries.map(entry => entry.status));
  [
    ["primary", "Paper / venue / DOI"],
    ["code", "Code"],
    ["data_or_hf", "Data or Hugging Face"],
    ["project", "Project"],
    ["card", "Card"]
  ].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    els.artifact.appendChild(option);
  });
}

function bind() {
  ids.forEach(id => els[id].addEventListener("input", render));
  els.reset.addEventListener("click", () => {
    ids.forEach(id => { els[id].value = ""; });
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
  starterPacks = await loadJson("assets/starter_packs.json", bundled.starter_packs || []);
  setText("totalEntries", counts.total_entries || entries.length);
  setText("verifiedEntries", counts.verified_entries || 0);
  setText("cardedEntries", counts.carded_entries || 0);
  setText("needsSearch", counts.needs_search || 0);
  setText("dataReleases", counts.data_releases || 0);
  setText("verifiersRewards", counts.verifiers_rewards || 0);
  setText("agentEnvironments", counts.agent_environments || 0);
  setText("scalingStudies", counts.scaling_studies || 0);
  if (!entries.length) {
    els.resultSummary.textContent = "Could not load docs/assets/entries.json. Run python scripts/render_site.py.";
    els.results.innerHTML = "<div class='empty'>No generated data available.</div>";
    return;
  }
  populateFilters();
  renderPaths();
  bind();
  render();
}

init();
