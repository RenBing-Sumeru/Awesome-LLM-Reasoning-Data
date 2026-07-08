const state = {
  payload: null,
  selectedId: null,
  filter: 'all',
  search: '',
};

const els = {
  contextLine: document.querySelector('#contextLine'),
  changedOnly: document.querySelector('#changedOnly'),
  refreshButton: document.querySelector('#refreshButton'),
  searchInput: document.querySelector('#searchInput'),
  entryList: document.querySelector('#entryList'),
  listMeta: document.querySelector('#listMeta'),
  detail: document.querySelector('#detail'),
  segments: Array.from(document.querySelectorAll('.segment')),
};

function valueText(value) {
  if (Array.isArray(value)) return value.join(', ');
  if (value === null || value === undefined || value === '') return 'missing';
  return String(value);
}

function levelClass(level) {
  if (!level) return 'level-other';
  if (level.includes('L5')) return 'level-l5';
  if (level.includes('L4')) return 'level-l4';
  if (level.includes('L3')) return 'level-l3';
  return 'level-low';
}

function statusClass(status) {
  return `status-${String(status || '').toLowerCase()}`;
}

function setText(node, text) {
  node.textContent = text;
}

function itemMatchesFilter(item) {
  const filter = state.filter;
  if (filter === 'blocked') return item.review_status === 'BLOCKED';
  if (filter === 'warn') return item.review_status === 'WARN';
  if (filter === 'ok') return item.review_status === 'OK';
  if (filter === '06' || filter === '11') return (item.tracks || []).includes(filter);
  if (filter === 'l4') return item.curation_level === 'L4_carded';
  if (filter === 'l5') return item.curation_level === 'L5_audit_ready';
  return true;
}

function filteredItems() {
  const query = state.search.trim().toLowerCase();
  const items = state.payload ? state.payload.items : [];
  return items.filter((item) => {
    const haystack = `${item.title || ''} ${item.id || ''}`.toLowerCase();
    return itemMatchesFilter(item) && (!query || haystack.includes(query));
  });
}

function renderContext() {
  const payload = state.payload;
  if (!payload) {
    setText(els.contextLine, 'Loading review data...');
    return;
  }
  const counts = payload.status_counts || {};
  setText(
    els.contextLine,
    `Branch: ${payload.branch || 'unknown'} | Base: ${payload.base_ref || 'none'} | Items: ${payload.total_items} | OK ${counts.OK || 0} / WARN ${counts.WARN || 0} / BLOCKED ${counts.BLOCKED || 0}`,
  );
}

function makeBadge(text, className) {
  const badge = document.createElement('span');
  badge.className = `badge ${className || ''}`;
  badge.textContent = text;
  return badge;
}

function renderList() {
  const items = filteredItems();
  els.entryList.replaceChildren();
  els.listMeta.textContent = `${items.length} shown`;
  if (!items.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-list';
    empty.textContent = 'No entries match the current filters.';
    els.entryList.append(empty);
    renderDetail(null);
    return;
  }
  if (!state.selectedId || !items.some((item) => item.id === state.selectedId)) {
    state.selectedId = items[0].id;
  }
  for (const item of items) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `entry-row ${item.id === state.selectedId ? 'selected' : ''}`;
    button.addEventListener('click', () => {
      state.selectedId = item.id;
      renderList();
      renderDetail(item);
    });

    const title = document.createElement('strong');
    title.textContent = item.title || item.id;
    const id = document.createElement('span');
    id.className = 'entry-id';
    id.textContent = item.id || 'missing id';
    const badges = document.createElement('span');
    badges.className = 'row-badges';
    badges.append(
      makeBadge(item.review_status, statusClass(item.review_status)),
      makeBadge(item.curation_level || 'no level', levelClass(item.curation_level)),
    );
    for (const track of item.tracks || []) {
      badges.append(makeBadge(track, 'track'));
    }

    button.append(title, id, badges);
    els.entryList.append(button);
  }
  renderDetail(items.find((item) => item.id === state.selectedId));
}

function renderChecks(title, gate) {
  const section = document.createElement('section');
  section.className = 'panel';
  const heading = document.createElement('h3');
  heading.textContent = title;
  const note = document.createElement('p');
  note.className = 'panel-note';
  if (title.includes('L4')) {
    note.textContent = '判断是否具备 L4_carded 条件：有对应 card、card 结构完整、summary 不是明显占位。';
  } else {
    note.textContent = '判断是否具备 L5_audit_ready 的硬门槛：verified、官方主链接、link_verified、card 无 L5 placeholder。';
  }
  const result = document.createElement('div');
  result.className = `gate-result ${gate.ready ? 'ready' : 'blocked'}`;
  result.textContent = gate.ready ? '通过' : '未通过';
  section.append(heading, note, result);

  const list = document.createElement('ul');
  list.className = 'check-list';
  if (gate.blocking && gate.blocking.length) {
    for (const blocker of gate.blocking) {
      const li = document.createElement('li');
      li.textContent = blocker;
      list.append(li);
    }
  } else {
    const li = document.createElement('li');
    li.textContent = '未检测到硬阻塞。';
    list.append(li);
  }
  section.append(list);
  return section;
}

function renderUpgradeOptions(item) {
  const section = document.createElement('section');
  section.className = 'panel upgrade-panel';
  const heading = document.createElement('h3');
  heading.textContent = '升级选项';
  const note = document.createElement('p');
  note.className = 'panel-note';
  if (item.l5_path && item.l5_path.ready) {
    note.textContent = '硬门槛已通过。此工具只读，不直接改文件；可复制任务给 Codex 只登记 L5。人工审计建议不是硬阻塞。';
  } else {
    note.textContent = '暂不能升级到 L5。先按 L5 硬门槛修复阻塞项，再刷新页面复核。人工审计建议不是硬阻塞。';
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = item.l5_path && item.l5_path.ready ? '复制只登记 L5 任务' : '复制修复硬阻塞任务';
  button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(item.codex_task || '');
    button.textContent = '已复制';
    setTimeout(() => {
      button.textContent = item.l5_path && item.l5_path.ready ? '复制只登记 L5 任务' : '复制修复硬阻塞任务';
    }, 1200);
  });

  section.append(heading, note, button);
  return section;
}

function renderAdvisories(advisories) {
  const section = document.createElement('section');
  section.className = 'panel';
  const heading = document.createElement('h3');
  heading.textContent = '人工审计建议';
  const note = document.createElement('p');
  note.className = 'panel-note';
  note.textContent = '这些是给人工 reviewer 的复核提示，不是硬阻塞；缺失时不代表当前 L5 登记非法。';
  const result = document.createElement('div');
  const hasAdvisories = Boolean(advisories && advisories.length);
  result.className = `gate-result ${hasAdvisories ? 'advisory' : 'ready'}`;
  result.textContent = hasAdvisories ? '建议复核' : '无建议项';
  section.append(heading, note, result);

  const list = document.createElement('ul');
  list.className = 'check-list';
  if (hasAdvisories) {
    for (const advisory of advisories) {
      const li = document.createElement('li');
      li.textContent = advisory;
      list.append(li);
    }
  } else {
    const li = document.createElement('li');
    li.textContent = '未检测到缺失的人工审计提示项。';
    list.append(li);
  }
  section.append(list);
  return section;
}

function renderPrePanel(title, text, emptyText) {
  const section = document.createElement('section');
  section.className = 'panel';
  const heading = document.createElement('h3');
  heading.textContent = title;
  const pre = document.createElement('pre');
  pre.textContent = text && text.trim() ? text : emptyText;
  section.append(heading, pre);
  return section;
}

function renderDetail(item) {
  els.detail.replaceChildren();
  if (!item) {
    els.detail.className = 'detail empty';
    els.detail.textContent = '请选择左侧条目进行复核。';
    return;
  }
  els.detail.className = 'detail';

  const header = document.createElement('section');
  header.className = 'detail-header';
  const h2 = document.createElement('h2');
  h2.textContent = item.title || item.id;
  const meta = document.createElement('div');
  meta.className = 'meta-grid';
  const fields = [
    ['Entry ID / 条目 ID', item.id],
    ['Level / 当前等级', item.curation_level],
    ['Status / 元数据状态', item.status],
    ['Review / 复核结论', item.review_status],
    ['Track / 方向', item.tracks && item.tracks.length ? item.tracks.join(', ') : 'none'],
    ['Card / 卡片文件', item.card_path || 'No card found'],
    ['Primary link / 官方主链接', item.primary_link || 'missing'],
  ];
  for (const [label, value] of fields) {
    const labelNode = document.createElement('span');
    labelNode.className = 'meta-label';
    labelNode.textContent = label;
    const valueNode = document.createElement('span');
    valueNode.className = 'meta-value';
    valueNode.textContent = valueText(value);
    meta.append(labelNode, valueNode);
  }
  header.append(h2, meta);

  const actionBar = document.createElement('div');
  actionBar.className = 'action-bar';
  const copyButton = document.createElement('button');
  copyButton.type = 'button';
  copyButton.textContent = '复制升级任务';
  copyButton.addEventListener('click', async () => {
    await navigator.clipboard.writeText(item.codex_task || '');
    copyButton.textContent = '已复制';
    setTimeout(() => {
      copyButton.textContent = '复制升级任务';
    }, 1200);
  });
  actionBar.append(copyButton);
  header.append(actionBar);

  els.detail.append(
    header,
    renderUpgradeOptions(item),
    renderChecks('L4 门槛', item.l4_gate),
    renderChecks('L5 硬门槛', item.l5_path),
    renderAdvisories(item.audit_advisories),
    renderPrePanel('完整 Entry YAML', item.full_entry_yaml, 'No entry YAML found.'),
    renderPrePanel('完整 Card Markdown', item.card_markdown, 'No card found.'),
    renderPrePanel('YAML Diff vs main', item.yaml_diff, 'No YAML diff found for this review item.'),
    renderPrePanel('Card Diff vs main', item.card_diff, 'No card diff found for this review item.'),
    renderPrePanel('Codex 升级任务', item.codex_task, 'No task generated.'),
  );
}

async function loadReview() {
  els.refreshButton.disabled = true;
  setText(els.contextLine, '正在加载 review 数据...');
  const changedOnly = els.changedOnly.checked ? '1' : '0';
  try {
    const response = await fetch(`/api/review?changed_only=${changedOnly}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.payload = await response.json();
    if (!state.payload.items.some((item) => item.id === state.selectedId)) {
      state.selectedId = null;
    }
    renderContext();
    renderList();
  } catch (error) {
    state.payload = null;
    els.entryList.replaceChildren();
    els.detail.className = 'detail empty';
    els.detail.textContent = `加载 review 数据失败：${error.message}`;
    setText(els.contextLine, 'Review 数据加载失败。');
  } finally {
    els.refreshButton.disabled = false;
  }
}

els.refreshButton.addEventListener('click', loadReview);
els.changedOnly.addEventListener('change', loadReview);
els.searchInput.addEventListener('input', (event) => {
  state.search = event.target.value;
  renderList();
});
for (const segment of els.segments) {
  segment.addEventListener('click', () => {
    for (const item of els.segments) item.classList.remove('active');
    segment.classList.add('active');
    state.filter = segment.dataset.filter;
    renderList();
  });
}

loadReview();
