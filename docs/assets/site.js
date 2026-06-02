const fieldMap = { role: 'source_role', contract: 'verification_contract', use: 'training_use' };
let entries = [];
let counts = {};
let cards = [];

const els = {
  q: document.getElementById('q'),
  status: document.getElementById('status'),
  role: document.getElementById('role'),
  contract: document.getElementById('contract'),
  use: document.getElementById('use'),
  cards: document.getElementById('cards'),
  resultSummary: document.getElementById('resultSummary'),
  shownCount: document.getElementById('shownCount'),
  totalCount: document.getElementById('totalCount'),
  cardCount: document.getElementById('cardCount'),
  verifiedCount: document.getElementById('verifiedCount'),
  countChips: document.getElementById('countChips'),
  latestList: document.getElementById('latestList'),
  reset: document.getElementById('resetFilters')
};

function arr(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return value ? [value] : [];
}

function values(entry, filterId) {
  return arr(entry[fieldMap[filterId] || filterId]).map(String);
}

function optionize(filterId) {
  const select = els[filterId];
  const seen = new Set();
  entries.forEach(entry => values(entry, filterId).forEach(value => seen.add(value)));
  [...seen].sort((a, b) => a.localeCompare(b)).forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value.replaceAll('_', ' ');
    select.appendChild(option);
  });
}

function primaryLink(entry) {
  const artifacts = entry.artifacts || {};
  return artifacts.paper || artifacts.arxiv || artifacts.project || artifacts.code || artifacts.data || artifacts.huggingface || '';
}

function entryMatches(entry) {
  const query = els.q.value.trim().toLowerCase();
  const haystack = [entry.title, entry.venue, entry.status, entry.inclusion_reason, entry.one_line, ...(entry.tags || []), ...(entry.domains || []), ...(entry.source_role || []), ...(entry.verification_contract || []), ...(entry.training_use || [])].join(' ').toLowerCase();
  if (query && !haystack.includes(query)) return false;
  return ['status', 'role', 'contract', 'use'].every(id => !els[id].value || values(entry, id).includes(els[id].value));
}

function tag(text, kind = '') {
  return `<span class="tag ${kind}">${String(text).replaceAll('_', ' ')}</span>`;
}

function renderEntry(entry) {
  const link = primaryLink(entry);
  const title = link ? `<a href="${link}">${entry.title}</a>` : entry.title;
  const card = entry.card ? `<a href="../${entry.card}">Card</a>` : '';
  const artifacts = entry.artifact_links || [];
  const artifactLinks = artifacts.slice(0, 4).map(item => `<a href="${item.url}">${item.label}</a>`).join('');
  const tags = [
    ...arr(entry.source_role).slice(0, 2).map(x => tag(x)),
    ...arr(entry.verification_contract).slice(0, 2).map(x => tag(x, 'contract')),
    tag(entry.status || 'unknown', 'status')
  ].join('');
  return `<article class="entry-card">
    <div class="meta">${entry.year || 'unknown'} · ${entry.venue || 'unknown'}</div>
    <h3>${title}</h3>
    <div class="tags">${tags}</div>
    <p>${entry.one_line || entry.inclusion_reason || 'No local summary yet.'}</p>
    <div class="card-links">${artifactLinks}${card}</div>
  </article>`;
}

function renderCounts() {
  const roleCounts = counts.source_role || {};
  els.countChips.innerHTML = Object.entries(roleCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 14)
    .map(([name, count]) => `<span class="chip"><strong>${count}</strong> ${name.replaceAll('_', ' ')}</span>`)
    .join('');
}

function renderLatest() {
  const latest = entries
    .filter(entry => entry.year)
    .sort((a, b) => (b.year || 0) - (a.year || 0) || String(a.title).localeCompare(String(b.title)))
    .slice(0, 7);
  els.latestList.innerHTML = latest.map(entry => {
    const href = entry.card ? `../${entry.card}` : primaryLink(entry) || '../data/papers.yaml';
    return `<div><a href="${href}">${entry.title}</a><span>${entry.year} · ${(entry.source_role || []).slice(0, 2).join(', ') || 'atlas entry'} · ${entry.status}</span></div>`;
  }).join('');
}

function render() {
  const shown = entries.filter(entryMatches);
  els.shownCount.textContent = `${shown.length} shown`;
  els.resultSummary.textContent = `${shown.length} of ${entries.length} entries match the current filters.`;
  els.cards.innerHTML = shown.length ? shown.slice(0, 160).map(renderEntry).join('') : '<div class="empty">No entries match these filters.</div>';
}

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
  } catch (error) {
    return fallback;
  }
}

async function init() {
  entries = await loadJson('assets/entries.json', []);
  counts = await loadJson('assets/counts.json', {});
  cards = await loadJson('assets/cards.json', []);
  els.totalCount.textContent = entries.length;
  els.cardCount.textContent = cards.length;
  els.verifiedCount.textContent = entries.filter(entry => entry.status === 'verified').length;
  ['status', 'role', 'contract', 'use'].forEach(optionize);
  ['q', 'status', 'role', 'contract', 'use'].forEach(id => els[id].addEventListener('input', render));
  els.reset.addEventListener('click', () => {
    els.q.value = '';
    ['status', 'role', 'contract', 'use'].forEach(id => { els[id].value = ''; });
    render();
  });
  renderCounts();
  renderLatest();
  render();
}

init();
