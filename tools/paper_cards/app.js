const SECTION_LABELS = [
  ["01_problem", "问题"],
  ["02_core_idea", "核心思想"],
  ["03_method", "方法"],
  ["04_evidence", "证据"],
  ["05_novelty", "新意"],
  ["06_limitations", "局限"],
  ["07_usefulness", "用途"],
  ["08_reading_notes", "阅读笔记"],
  ["09_citation", "引用"],
];

const state = {
  entries: [],
  activeEntryId: "",
  activeCard: null,
  activeSection: "01_problem",
  activeMode: "update",
  selected: new Set(),
  searchQueue: {},
  lastPackage: "",
  lastDownloadIds: [],
};

const $ = (id) => document.getElementById(id);

const els = {
  totalCount: $("totalCount"),
  sourceCount: $("sourceCount"),
  downloadedCount: $("downloadedCount"),
  invalidCount: $("invalidCount"),
  stateFilter: $("stateFilter"),
  query: $("query"),
  resultSummary: $("resultSummary"),
  paperList: $("paperList"),
  emptyState: $("emptyState"),
  entryDetail: $("entryDetail"),
  updateShell: $("updateShell"),
  reviewShell: $("reviewShell"),
  sectionTabs: $("sectionTabs"),
  oneLineSummaryCh: $("oneLineSummaryCh"),
  readingPriorityCh: $("readingPriorityCh"),
  paperTypeCh: $("paperTypeCh"),
  bestForCh: $("bestForCh"),
  confidenceCh: $("confidenceCh"),
  authorsCh: $("authorsCh"),
  categoryOptions: $("categoryOptions"),
  saveHeaderZh: $("saveHeaderZh"),
  englishSection: $("englishSection"),
  chineseSection: $("chineseSection"),
  saveSection: $("saveSection"),
  saveInstitutions: $("saveInstitutions"),
  goReviewFromUpdate: $("goReviewFromUpdate"),
  goUpdateFromReview: $("goUpdateFromReview"),
  downgradeToL4: $("downgradeToL4"),
  saveStatus: $("saveStatus"),
  institutionMore: $("institutionMore"),
  noInstitution: $("noInstitution"),
  selectionSummary: $("selectionSummary"),
  completeCurrent: $("completeCurrent"),
  reviewCheckResult: $("reviewCheckResult"),
  downloadControls: $("downloadControls"),
  batchDownload: $("batchDownload"),
  downloadUndownloaded: $("downloadUndownloaded"),
  downloadSelected: $("downloadSelected"),
  reviewMarkdown: $("reviewMarkdown"),
  queueStatus: $("queueStatus"),
  queueReason: $("queueReason"),
  saveQueue: $("saveQueue"),
  queueStatusText: $("queueStatusText"),
};

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function arr(value) {
  return Array.isArray(value) ? value.filter(Boolean) : value ? [value] : [];
}

function shortText(value, limit = 180) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text.length > limit ? `${text.slice(0, limit - 1)}...` : text;
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: options.body ? { "content-type": "application/json" } : {},
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const payload = await response.json();
  if (!response.ok || payload.error) throw new Error(payload.error || response.statusText);
  return payload;
}

function setMessage(message) {
  if (els.saveStatus) els.saveStatus.textContent = message;
  if (els.queueStatusText && state.activeMode === "review") els.queueStatusText.textContent = message;
}

function setButtonState(button, visualState, disabled = false) {
  if (!button) return;
  button.disabled = Boolean(disabled);
  if (visualState) button.dataset.state = visualState;
  else delete button.dataset.state;
}

function markButtonDirty(button) {
  setButtonState(button, "dirty", false);
}

function markButtonSaved(button) {
  setButtonState(button, "saved", false);
}

function markButtonDisabled(button) {
  setButtonState(button, "", true);
}

function currentValid() {
  return state.activeCard?.valid || activeEntry()?.paper_card?.valid || {};
}

function canUpdateFields() {
  return Boolean(state.activeCard && state.activeEntryId && state.activeMode === "update" && !isL6Locked());
}

function markUpdateButtonDirty(button) {
  if (canUpdateFields()) markButtonDirty(button);
  else markButtonDisabled(button);
}

function paperStatus(entry) {
  return entry.paper_card?.status?.state || "new";
}

function statusLabel(entry) {
  const status = paperStatus(entry);
  if (status === "downloaded") return "已下载";
  if (status === "reviewed") return "已审阅";
  if (status === "edited") return "已修改未下载";
  return "未下载";
}

function validInfo(entry) {
  return entry?.paper_card?.valid || entry?.valid || {};
}

function poolLabel(valid) {
  return valid?.pool_label || {
    needs_annotation: "L4 中文 Review",
    annotated: "L5 已人工标注",
    l6: "L6 已审阅",
    invalid: "不合法论文池",
  }[valid?.pool] || "需要人工标注";
}

function levelLabel(valid) {
  return valid?.level_label || valid?.level || "L0 候选论文";
}

function canPromoteToL6(valid = currentValid()) {
  return valid.level === "L5_review_ready";
}

function canDowngradeToL4(valid = currentValid()) {
  return valid.level === "L5_review_ready";
}

function isL6Locked(valid = currentValid()) {
  return valid.pool === "l6";
}

function isDownloadableEntry(entry) {
  return ["annotated", "l6"].includes(validInfo(entry).pool);
}

function canEditQueueFields(valid = currentValid()) {
  return Boolean(state.activeCard && state.activeEntryId && state.activeMode === "review" && valid.pool !== "invalid" && valid.pool !== "l6");
}

function updateFormLockState(valid = currentValid()) {
  const locked = isL6Locked(valid);
  const invalid = valid.pool === "invalid";
  [
    els.oneLineSummaryCh,
    els.readingPriorityCh,
    els.paperTypeCh,
    els.bestForCh,
    els.confidenceCh,
    els.authorsCh,
  ].forEach((control) => {
    control.disabled = locked;
  });
  els.chineseSection.disabled = locked;
  const institutionDisabled = locked || els.noInstitution.checked;
  institutionInputs().forEach((input) => {
    input.disabled = institutionDisabled;
  });
  els.institutionMore.disabled = locked || els.noInstitution.checked;
  els.noInstitution.disabled = locked;
  els.queueStatus.disabled = locked || invalid;
  els.queueReason.disabled = locked || invalid;
  const selectedCategories = selectedCategoryIds();
  els.categoryOptions.querySelectorAll("[data-category-id]").forEach((control) => {
    control.disabled = locked || (!control.checked && selectedCategories.length >= 2);
  });
}

function institutionText(record) {
  const item = record || {};
  if (item.no_institution) return "没有机构";
  const names = arr(item.institutions).map((name) => String(name).trim()).filter(Boolean);
  if (!names.length) return "机构未填写";
  return item.has_more ? `${names.join(" · ")} · 等多个机构` : names.join(" · ");
}

function activeEntry() {
  return state.entries.find((entry) => entry.id === state.activeEntryId) || null;
}

function matchesFilters(entry) {
  const query = els.query.value.trim().toLowerCase();
  if (els.stateFilter.value && validInfo(entry).pool !== els.stateFilter.value) return false;
  if (!query) return true;
  const valid = validInfo(entry);
  const haystack = [
    entry.id,
    entry.title,
    entry.venue,
    entry.status,
    entry.curation_level,
    valid.level,
    valid.pool_label,
    entry.one_line_summary,
    entry.why_it_matters,
    institutionText(entry.paper_card?.institutions),
    ...arr(entry.category),
    ...arr(entry.source_role),
    ...arr(entry.training_use),
    ...arr(entry.tags),
  ].join(" ").toLowerCase();
  return haystack.includes(query);
}

function needsModification(entry) {
  return ["needs_annotation", "annotated"].includes(validInfo(entry).pool);
}

function downloadableEntries(includeDownloaded = true) {
  return state.entries.filter((entry) => {
    if (!matchesFilters(entry) || !isDownloadableEntry(entry)) return false;
    return includeDownloaded || paperStatus(entry) !== "downloaded";
  });
}

function selectedDownloadableEntries(includeDownloaded = true) {
  return Array.from(state.selected)
    .map((id) => state.entries.find((entry) => entry.id === id))
    .filter(Boolean)
    .filter((entry) => isDownloadableEntry(entry))
    .filter((entry) => includeDownloaded || paperStatus(entry) !== "downloaded");
}

function reviewSortTimestamp(entry) {
  const status = entry?.paper_card?.status || {};
  return status.reviewed_at || status.updated_at || "";
}

function entriesForCurrentView() {
  const shown = state.entries.filter(matchesFilters);
  if (els.stateFilter.value !== "l6") return shown;
  return [...shown].sort((left, right) => {
    const leftTime = reviewSortTimestamp(left);
    const rightTime = reviewSortTimestamp(right);
    const timeOrder = rightTime.localeCompare(leftTime);
    if (timeOrder) return timeOrder;
    return (right.paper_card?.source_order ?? -1) - (left.paper_card?.source_order ?? -1);
  });
}

function updateDownloadButtons() {
  if (!els.downloadControls) return;
  els.downloadControls.hidden = false;
  const all = downloadTargetIds(true).length;
  const undownloaded = downloadTargetIds(false).length;
  const selected = downloadTargetIds(true, true).length;
  setButtonState(els.batchDownload, all ? "saved" : "", !all);
  setButtonState(els.downloadUndownloaded, undownloaded ? "saved" : "", !undownloaded);
  setButtonState(els.downloadSelected, selected ? "saved" : "", !selected);
}

function renderDownloadControls() {
  updateDownloadButtons();
}

function updateActionAvailability() {
  const hasActive = Boolean(state.activeCard && state.activeEntryId);
  const valid = currentValid();
  const inUpdate = state.activeMode === "update";
  const inReview = state.activeMode === "review";
  updateFormLockState(valid);

  if (hasActive && inUpdate && !isL6Locked(valid)) {
    markButtonSaved(els.saveHeaderZh);
    markButtonSaved(els.saveSection);
    markButtonSaved(els.saveInstitutions);
  } else {
    markButtonDisabled(els.saveHeaderZh);
    markButtonDisabled(els.saveSection);
    markButtonDisabled(els.saveInstitutions);
  }

  if (hasActive && inReview && canEditQueueFields(valid)) markButtonSaved(els.saveQueue);
  else markButtonDisabled(els.saveQueue);

  const canReview = hasActive && inReview && canPromoteToL6(valid);
  if (canReview) markButtonSaved(els.completeCurrent);
  else markButtonDisabled(els.completeCurrent);

  const canDowngrade = hasActive && inReview && canDowngradeToL4(valid);
  if (canDowngrade) markButtonSaved(els.downgradeToL4);
  else markButtonDisabled(els.downgradeToL4);

  updateDownloadButtons();
}

function renderStats() {
  const needs = state.entries.filter((entry) => validInfo(entry).pool === "needs_annotation").length;
  const downloadable = state.entries.filter((entry) => isDownloadableEntry(entry)).length;
  const invalid = state.entries.filter((entry) => validInfo(entry).pool === "invalid").length;
  els.totalCount.textContent = state.entries.length;
  els.sourceCount.textContent = needs;
  els.downloadedCount.textContent = downloadable;
  if (els.invalidCount) els.invalidCount.textContent = invalid;
  renderDownloadControls();
}

function renderList() {
  const shown = entriesForCurrentView();
  els.resultSummary.textContent = `${shown.length} / ${state.entries.length} 条 · 已选中 ${state.selected.size} 条`;
  els.paperList.innerHTML = shown.length ? shown.map((entry) => {
    const active = entry.id === state.activeEntryId ? "active" : "";
    const selected = state.selected.has(entry.id) ? "checked" : "";
    const valid = validInfo(entry);
    const errors = arr(valid.errors).length;
    const poolClass = `pool-${valid.pool || "needs_annotation"}`;
    return `<div class="paper-row ${active}">
      <label class="row-check" title="选择下载">
        <input type="checkbox" data-select-entry="${esc(entry.id)}" ${selected}>
      </label>
      <button class="row-main" type="button" data-entry="${esc(entry.id)}">
        <span class="row-title">${esc(entry.title)}</span>
        <span class="row-meta">${esc(entry.year || "n.d.")} · ${esc(entry.venue || "unknown")}</span>
        <span class="row-tags">
          <b class="${esc(poolClass)}">${esc(poolLabel(valid))}</b>
          <em>${esc(levelLabel(valid))}</em>
          ${paperStatus(entry) !== "new" ? `<em>${esc(statusLabel(entry))}</em>` : ""}
          ${errors ? `<em>${errors} 缺项</em>` : ""}
          ${state.selected.has(entry.id) ? "<em>已选中</em>" : ""}
        </span>
      </button>
    </div>`;
  }).join("") : "<div class='empty small'>没有匹配的论文。</div>";
  renderSelectionSummary();
  renderDownloadControls();
}

function links(entry) {
  const artifacts = entry.artifacts || {};
  const primary = entry.primary_link || artifacts.paper || artifacts.arxiv;
  const items = [];
  if (primary) items.push(`<a href="${esc(primary)}" target="_blank" rel="noreferrer">原文</a>`);
  if (artifacts.code) items.push(`<a href="${esc(artifacts.code)}" target="_blank" rel="noreferrer">代码</a>`);
  if (artifacts.data) items.push(`<a href="${esc(artifacts.data)}" target="_blank" rel="noreferrer">数据</a>`);
  if (artifacts.project) items.push(`<a href="${esc(artifacts.project)}" target="_blank" rel="noreferrer">项目</a>`);
  return items.join("");
}

function renderDetail() {
  if (!state.activeCard) {
    els.emptyState.hidden = false;
    els.entryDetail.hidden = true;
    els.updateShell.hidden = true;
    els.reviewShell.hidden = true;
    return;
  }
  const entry = state.activeCard.entry;
  const valid = state.activeCard.valid || {};
  const status = activeEntry() ? statusLabel(activeEntry()) : statusLabel({ paper_card: { status: state.activeCard.status } });
  els.emptyState.hidden = true;
  els.entryDetail.hidden = false;
  els.updateShell.hidden = state.activeMode !== "update";
  els.reviewShell.hidden = state.activeMode !== "review";
  els.entryDetail.innerHTML = `<div class="mode-switch" aria-label="Update and Review views">
    <button type="button" data-mode="update" class="${state.activeMode === "update" ? "active" : ""}">Update</button>
    <button type="button" data-mode="review" class="${state.activeMode === "review" ? "active" : ""}">Review</button>
  </div>
  <div class="detail-head">
    <div>
      <p class="entry-id">${esc(entry.id)}</p>
      <h2>${esc(entry.title)}</h2>
      <p class="meta-line">${esc(entry.year || "n.d.")} · ${esc(entry.venue || "unknown")} · ${esc(entry.status || "unknown")} · ${esc(levelLabel(valid))} · ${esc(poolLabel(valid))} · ${esc(status)}</p>
      <p class="institution-line">机构：${esc(institutionText(state.activeCard.institutions))}</p>
    </div>
    <div class="linkbar">${links(entry)}</div>
  </div>
  <p class="summary">${esc(shortText(entry.one_line_summary || entry.why_it_matters || ""))}</p>
  ${state.activeCard.check_errors.length ? `<div class="errors">${state.activeCard.check_errors.map((error) => `<p>${esc(error)}</p>`).join("")}</div>` : ""}`;

  if (state.activeMode === "update") {
    renderHeaderZh();
    renderTabs();
    renderSection();
    renderInstitutions();
  } else {
    renderReview();
  }
}

function renderHeaderZh() {
  const header = state.activeCard?.header_zh || {};
  const entry = state.activeCard?.entry || {};
  const authors = arr(entry.authors).join(", ");
  els.oneLineSummaryCh.value = header.one_line_summary_ch || "";
  els.readingPriorityCh.value = header.reading_priority_ch || "";
  els.paperTypeCh.value = header.paper_type_ch || "";
  els.bestForCh.value = header.best_for_ch || "";
  els.confidenceCh.value = header.confidence_ch || "";
  els.authorsCh.value = header.authors_ch || authors || "";
  renderCategoryEditor();
  updateActionAvailability();
}

function selectedCategoryIds() {
  return Array.from(els.categoryOptions.querySelectorAll("[data-category-id]:checked"))
    .map((control) => control.dataset.categoryId)
    .filter(Boolean);
}

function renderCategoryEditor() {
  const selected = new Set(arr(state.activeCard?.entry?.category));
  const options = state.activeCard?.category_options || [];
  els.categoryOptions.innerHTML = options.map((item) => {
    const checked = selected.has(item.id) ? " checked" : "";
    return `<label class="category-option"><input type="checkbox" data-category-id="${esc(item.id)}"${checked}>${esc(item.title)}</label>`;
  }).join("") || "<span class='category-unbound'>没有可用分类</span>";
}

function renderTabs() {
  els.sectionTabs.innerHTML = SECTION_LABELS.map(([key, label], index) => (
    `<button type="button" class="${key === state.activeSection ? "active" : ""}" data-section="${esc(key)}">${index + 1}. ${esc(label)}</button>`
  )).join("");
}

function renderSection() {
  const key = state.activeSection;
  els.englishSection.textContent = state.activeCard?.sections?.en?.[key] || "";
  els.chineseSection.value = state.activeCard?.sections?.ch?.[`${key}_ch`] || "";
  updateActionAvailability();
}

function institutionInputs() {
  return Array.from(document.querySelectorAll(".institution-input"));
}

function renderInstitutions() {
  const record = state.activeCard?.institutions || {};
  const names = arr(record.institutions);
  institutionInputs().forEach((input, index) => {
    input.value = names[index] || "";
  });
  els.institutionMore.checked = Boolean(record.has_more);
  els.noInstitution.checked = Boolean(record.no_institution);
  applyInstitutionDisabled();
  updateActionAvailability();
}

function applyInstitutionDisabled() {
  const disabled = isL6Locked() || els.noInstitution.checked;
  institutionInputs().forEach((input) => {
    input.disabled = disabled;
  });
  els.institutionMore.disabled = disabled;
  els.noInstitution.disabled = isL6Locked();
}

function currentQueueRecord() {
  return state.searchQueue?.entries?.[state.activeEntryId] || null;
}

function renderQueueForm() {
  const record = currentQueueRecord() || {};
  els.queueStatus.value = record.search_status || "candidate";
  els.queueReason.value = record.decision_reason || record.reason_to_include || "";
  updateActionAvailability();
}

function renderReviewCheckResult(valid = state.activeCard?.valid || {}) {
  if (!els.reviewCheckResult) return;
  const errors = arr(valid.errors);
  if (valid.pool === "invalid") {
    els.reviewCheckResult.className = "valid-result fail";
    els.reviewCheckResult.innerHTML = `<div class="valid-result-head">
      <strong>未通过 · ${esc(levelLabel(valid))}</strong>
      <span>${esc(poolLabel(valid))}</span>
    </div>
    <p>当前论文需由维护脚本修复后再进入人工 review。</p>`;
    return;
  }
  const readyForL6 = canPromoteToL6(valid);
  const reviewed = valid.pool === "l6";
  const status = reviewed ? "已审阅" : readyForL6 ? "人工标注完成" : "等待人工标注";
  const detail = errors.length
    ? `<ul>${errors.map((error) => `<li>${esc(error)}</li>`).join("")}</ul>`
    : reviewed
      ? "<p>当前卡片已进入 L6。</p>"
      : readyForL6
        ? "<p>当前卡片已完成人工标注，可以点击完成修改该卡片晋升 L6。</p>"
        : "<p>请先保存人工标注，进入 L5 后再完成修改该卡片。</p>";
  els.reviewCheckResult.className = `valid-result ${valid.ok || readyForL6 ? "ok" : errors.length ? "fail" : ""}`;
  els.reviewCheckResult.innerHTML = `<div class="valid-result-head">
    <strong>${esc(status)} · ${esc(levelLabel(valid))}</strong>
    <span>${esc(poolLabel(valid))}</span>
  </div>
  ${detail}`;
}

function renderReviewActionButton() {
  const valid = state.activeCard?.valid || {};
  const reviewed = valid.pool === "l6";
  els.downgradeToL4.textContent = canDowngradeToL4(valid) ? "降级到 L4" : "仅 L5 可降级";
  els.completeCurrent.textContent = reviewed
    ? "已审阅"
    : canPromoteToL6(valid)
      ? "完成修改该卡片"
      : "等待人工标注";
  updateActionAvailability();
}

function renderSelectionSummary() {
  if (!els.selectionSummary) return;
  const selectedEntries = Array.from(state.selected).map((id) => state.entries.find((entry) => entry.id === id)).filter(Boolean);
  const ready = selectedEntries.filter((entry) => isDownloadableEntry(entry));
  els.selectionSummary.textContent = selectedEntries.length
    ? `已选中 ${selectedEntries.length} 条，其中 ${ready.length} 条可下载。`
    : "未选中卡片。";
  updateActionAvailability();
}

function inlineMarkdown(text) {
  let out = esc(text);
  out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  return out;
}

function renderMarkdown(markdown) {
  const lines = String(markdown || "").split(/\r?\n/);
  const html = [];
  let paragraph = [];
  let listOpen = false;
  let codeOpen = false;

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };
  const closeList = () => {
    if (listOpen) {
      html.push("</ul>");
      listOpen = false;
    }
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      flushParagraph();
      closeList();
      html.push(codeOpen ? "</code></pre>" : "<pre><code>");
      codeOpen = !codeOpen;
      continue;
    }
    if (codeOpen) {
      html.push(esc(line));
      continue;
    }
    if (!line.trim()) {
      flushParagraph();
      closeList();
      continue;
    }
    if (line === "---") {
      flushParagraph();
      closeList();
      html.push("<hr>");
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const level = Math.min(heading[1].length, 4);
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }
    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      closeList();
      html.push(`<blockquote>${inlineMarkdown(quote[1])}</blockquote>`);
      continue;
    }
    const bullet = line.match(/^\s*[-*]\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${inlineMarkdown(bullet[1])}</li>`);
      continue;
    }
    paragraph.push(line.trim());
  }
  flushParagraph();
  closeList();
  if (codeOpen) html.push("</code></pre>");
  return html.join("\n");
}

async function loadReviewMarkdown() {
  if (!state.activeEntryId) return;
  const entry = activeEntry();
  if (!entry?.paper_card?.source_exists) {
    els.reviewMarkdown.innerHTML = "<div class='empty'>当前论文在不合法论文池中，暂不能预览。</div>";
    return;
  }
  const payload = await api(`/api/card/${encodeURIComponent(state.activeEntryId)}/preview`, { method: "POST" });
  els.reviewMarkdown.innerHTML = renderMarkdown(payload.ch);
}

function renderReview() {
  renderSelectionSummary();
  renderQueueForm();
  renderReviewCheckResult();
  renderReviewActionButton();
  loadReviewMarkdown().catch((error) => {
    els.reviewMarkdown.innerHTML = `<div class="errors"><p>${esc(error.message)}</p></div>`;
  });
}

async function loadEntries() {
  const payload = await api("/api/entries");
  state.entries = payload.entries || [];
  renderStats();
  renderList();
}

async function loadSearchQueue() {
  const payload = await api("/api/search-queue");
  state.searchQueue = payload.queue || {};
}

async function refreshActiveCard() {
  if (!state.activeEntryId) return;
  state.activeCard = await api(`/api/card/${encodeURIComponent(state.activeEntryId)}`);
  renderDetail();
}

async function selectEntry(entryId) {
  state.activeEntryId = entryId;
  state.activeCard = await api(`/api/card/${encodeURIComponent(entryId)}`);
  state.activeSection = "01_problem";
  renderList();
  renderDetail();
}

async function switchMode(mode) {
  state.activeMode = mode;
  renderDetail();
}

async function saveCurrentSection() {
  if (!state.activeEntryId) return;
  markButtonDisabled(els.saveSection);
  const key = `${state.activeSection}_ch`;
  const payload = await api(`/api/card/${encodeURIComponent(state.activeEntryId)}/sections`, {
    method: "POST",
    body: { sections: { [key]: els.chineseSection.value } },
  });
  state.activeCard = payload.card;
  setMessage("已保存中文 section，下载状态已重置为未下载。");
  await loadEntries();
  renderDetail();
}

async function saveHeaderZh() {
  if (!state.activeEntryId) return;
  markButtonDisabled(els.saveHeaderZh);
  const payload = await api(`/api/card/${encodeURIComponent(state.activeEntryId)}/header-zh`, {
    method: "POST",
    body: {
      header_zh: {
        one_line_summary_ch: els.oneLineSummaryCh.value,
        reading_priority_ch: els.readingPriorityCh.value,
        paper_type_ch: els.paperTypeCh.value,
        best_for_ch: els.bestForCh.value,
        confidence_ch: els.confidenceCh.value,
        authors_ch: els.authorsCh.value,
        category_ids: selectedCategoryIds(),
      },
    },
  });
  state.activeCard = payload.card;
  setMessage("已保存中文头字段，下载状态已重置为未下载。");
  await loadEntries();
  renderDetail();
}

async function saveInstitutions() {
  if (!state.activeEntryId) return;
  markButtonDisabled(els.saveInstitutions);
  const payload = await api(`/api/card/${encodeURIComponent(state.activeEntryId)}/institutions`, {
    method: "POST",
    body: {
      institutions: {
        institutions: institutionInputs().map((input) => input.value),
        has_more: els.institutionMore.checked,
        no_institution: els.noInstitution.checked,
      },
    },
  });
  state.activeCard = payload.card;
  setMessage("已保存机构字段，下载状态已重置为未下载。");
  await loadEntries();
  renderDetail();
}

function toggleSelected(entryId, checked) {
  if (checked) state.selected.add(entryId);
  else state.selected.delete(entryId);
  renderList();
}

function nextNeedingModification(currentId) {
  const currentIndex = state.entries.findIndex((entry) => entry.id === currentId);
  const candidates = state.entries
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => matchesFilters(entry) && needsModification(entry));
  return (
    candidates.find(({ index }) => index > currentIndex)?.entry ||
    candidates.find(({ index }) => index < currentIndex)?.entry ||
    null
  );
}

function nextL4Entry(currentId) {
  const currentIndex = state.entries.findIndex((entry) => entry.id === currentId);
  const candidates = state.entries
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => matchesFilters(entry) && validInfo(entry).level === "L4_chinese_review_ready");
  return (
    candidates.find(({ index }) => index > currentIndex)?.entry ||
    candidates.find(({ index }) => index < currentIndex)?.entry ||
    null
  );
}

async function completeCurrent() {
  if (!state.activeEntryId) return;
  markButtonDisabled(els.completeCurrent);
  const completedId = state.activeEntryId;
  const payload = await api(`/api/card/${encodeURIComponent(completedId)}/review`, { method: "POST" });
  state.activeCard = payload.card;
  if (!payload.ok) {
    await loadEntries();
    renderDetail();
    setMessage(`审阅前检查未通过：${arr(payload.valid?.errors).length} 个缺项。`);
    return;
  }
  state.selected.delete(completedId);
  await loadEntries();
  const next = nextNeedingModification(completedId);
  if (next) {
    setMessage(`已审阅：${completedId}，已切换到下一篇需要人工 review 的论文。`);
    await selectEntry(next.id);
    return;
  }
  await selectEntry(completedId);
  setMessage(`已审阅：${completedId}。当前筛选下没有下一篇需要人工 review 的论文。`);
}

async function downgradeToL4() {
  if (!state.activeEntryId) return;
  markButtonDisabled(els.downgradeToL4);
  const downgradedId = state.activeEntryId;
  const payload = await api(`/api/card/${encodeURIComponent(downgradedId)}/downgrade-l4`, { method: "POST" });
  state.selected.delete(downgradedId);
  state.activeCard = payload.card;
  await loadSearchQueue();
  await loadEntries();
  await selectEntry(downgradedId);
  setMessage(`已降级到 L4：${downgradedId}。人工标注已清空，可重新标注。`);
}

function downloadTargetIds(includeDownloaded, selectedOnly = false) {
  const selected = selectedDownloadableEntries(includeDownloaded);
  if (selectedOnly) return selected.map((entry) => entry.id);
  return downloadableEntries(includeDownloaded).map((entry) => entry.id);
}

async function downloadCards(includeDownloaded, selectedOnly = false) {
  const ids = downloadTargetIds(includeDownloaded, selectedOnly);
  if (!ids.length) {
    setMessage(selectedOnly ? "没有选中可下载的卡片。" : includeDownloaded ? "没有可下载的卡片。" : "没有未下载的卡片。");
    return;
  }
  if (selectedOnly) markButtonDisabled(els.downloadSelected);
  else if (includeDownloaded) markButtonDisabled(els.batchDownload);
  else markButtonDisabled(els.downloadUndownloaded);
  const payload = await api("/api/package", {
    method: "POST",
    body: { entry_ids: ids },
  });
  state.lastPackage = payload.package;
  state.lastDownloadIds = ids;
  setMessage(`已生成下载包：${payload.package}`);
  window.location.href = payload.download_url;
  await loadEntries();
  await refreshActiveCard();
}

async function batchDownload() {
  await downloadCards(true);
}

async function downloadUndownloaded() {
  await downloadCards(false);
}

async function downloadSelected() {
  await downloadCards(true, true);
}

async function saveQueueItem() {
  if (!state.activeCard) return;
  markButtonDisabled(els.saveQueue);
  const annotatedId = state.activeEntryId;
  const entry = state.activeCard.entry;
  const artifacts = entry.artifacts || {};
  const record = {
    title: entry.title,
    candidate_links: {
      paper: entry.primary_link || artifacts.paper || artifacts.arxiv || "",
      code: artifacts.code || "",
      data: artifacts.data || artifacts.project || "",
    },
    category_ids: arr(entry.category),
    reason_to_include: els.queueReason.value,
    decision_reason: els.queueReason.value,
    search_status: els.queueStatus.value,
    review_note: "",
  };
  const payload = await api(`/api/search-queue/${encodeURIComponent(state.activeEntryId)}`, {
    method: "POST",
    body: { record },
  });
  state.searchQueue = payload.queue;
  await loadEntries();
  const annotated = state.entries.find((item) => item.id === annotatedId);
  if (validInfo(annotated).level !== "L5_review_ready") {
    await refreshActiveCard();
    setMessage(`人工标注未完成：${annotatedId} 仍停留在 L4。`);
    return;
  }
  const next = nextL4Entry(annotatedId);
  if (next) {
    setMessage(`已保存人工标注：${annotatedId}，已切换到下一篇 L4 论文。`);
    await selectEntry(next.id);
    return;
  }
  await refreshActiveCard();
  setMessage(`已保存人工标注：${annotatedId}。当前没有其他 L4 论文。`);
}

function bind() {
  [els.stateFilter, els.query].forEach((el) => {
    el.addEventListener("input", renderList);
  });
  els.paperList.addEventListener("click", (event) => {
    const checkbox = event.target.closest("[data-select-entry]");
    if (checkbox) {
      toggleSelected(checkbox.dataset.selectEntry, checkbox.checked);
      return;
    }
    const button = event.target.closest("[data-entry]");
    if (button) selectEntry(button.dataset.entry).catch((error) => setMessage(error.message));
  });
  els.entryDetail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (button) switchMode(button.dataset.mode);
  });
  els.sectionTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-section]");
    if (!button) return;
    state.activeSection = button.dataset.section;
    renderTabs();
    renderSection();
  });
  [els.oneLineSummaryCh, els.paperTypeCh, els.bestForCh, els.confidenceCh, els.authorsCh].forEach((input) => {
    input.addEventListener("input", () => markUpdateButtonDirty(els.saveHeaderZh));
  });
  els.readingPriorityCh.addEventListener("change", () => markUpdateButtonDirty(els.saveHeaderZh));
  els.categoryOptions.addEventListener("change", (event) => {
    if (!event.target.matches("[data-category-id]")) return;
    if (selectedCategoryIds().length > 2) {
      event.target.checked = false;
      setMessage("知识点分类最多选择两个。");
    }
    updateFormLockState();
    markUpdateButtonDirty(els.saveHeaderZh);
  });
  els.chineseSection.addEventListener("input", () => markUpdateButtonDirty(els.saveSection));
  institutionInputs().forEach((input) => {
    input.addEventListener("input", () => markUpdateButtonDirty(els.saveInstitutions));
  });
  els.institutionMore.addEventListener("change", () => markUpdateButtonDirty(els.saveInstitutions));
  els.noInstitution.addEventListener("change", () => {
    applyInstitutionDisabled();
    markUpdateButtonDirty(els.saveInstitutions);
  });
  els.queueStatus.addEventListener("change", () => {
    if (canEditQueueFields()) markButtonDirty(els.saveQueue);
    else markButtonDisabled(els.saveQueue);
  });
  els.queueReason.addEventListener("input", () => {
    if (canEditQueueFields()) markButtonDirty(els.saveQueue);
    else markButtonDisabled(els.saveQueue);
  });
  els.saveHeaderZh.addEventListener("click", () => saveHeaderZh().catch((error) => {
    markUpdateButtonDirty(els.saveHeaderZh);
    setMessage(error.message);
  }));
  els.saveSection.addEventListener("click", () => saveCurrentSection().catch((error) => {
    markUpdateButtonDirty(els.saveSection);
    setMessage(error.message);
  }));
  els.saveInstitutions.addEventListener("click", () => saveInstitutions().catch((error) => {
    markUpdateButtonDirty(els.saveInstitutions);
    setMessage(error.message);
  }));
  els.goReviewFromUpdate.addEventListener("click", () => switchMode("review"));
  els.goUpdateFromReview.addEventListener("click", () => switchMode("update"));
  els.downgradeToL4.addEventListener("click", () => downgradeToL4().catch((error) => {
    updateActionAvailability();
    setMessage(error.message);
  }));
  els.completeCurrent.addEventListener("click", () => completeCurrent().catch((error) => {
    updateActionAvailability();
    setMessage(error.message);
  }));
  els.batchDownload.addEventListener("click", () => batchDownload().catch((error) => {
    updateActionAvailability();
    setMessage(error.message);
  }));
  els.downloadUndownloaded.addEventListener("click", () => downloadUndownloaded().catch((error) => {
    updateActionAvailability();
    setMessage(error.message);
  }));
  els.downloadSelected.addEventListener("click", () => downloadSelected().catch((error) => {
    updateActionAvailability();
    setMessage(error.message);
  }));
  els.saveQueue.addEventListener("click", () => saveQueueItem().catch((error) => {
    if (canEditQueueFields()) markButtonDirty(els.saveQueue);
    else markButtonDisabled(els.saveQueue);
    els.queueStatusText.textContent = error.message;
  }));
}

async function init() {
  bind();
  await loadSearchQueue();
  await loadEntries();
  if (state.entries.length) {
    const first = (
      state.entries.find((entry) => validInfo(entry).pool === "needs_annotation") ||
      state.entries.find((entry) => validInfo(entry).pool === "annotated") ||
      state.entries.find((entry) => validInfo(entry).pool === "l6") ||
      state.entries[0]
    );
    await selectEntry(first.id);
  }
}

init().catch((error) => {
  setMessage(error.message);
});
