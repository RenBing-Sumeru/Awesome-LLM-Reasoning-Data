export const reviewLabels = {
  rawToggle: "显示项目原始字段",
  annotationToggle: "显示人工注解",
};

export const CURATION_LEVELS = {
  L0_seeded: {
    title: "L0 线索种子",
    meaning: "只知道题名或 BibTeX 线索，官方链接、数据对象、验证器和审计信息都可能缺失。",
    reviewFocus: "先确认这篇是否真实、是否有官方论文链接，以及是否属于当前 track。",
    promoteWhen: "找到官方 paper/arXiv/venue/DOI 后，才能升到 L1。",
  },
  L1_link_verified: {
    title: "L1 链接已核验",
    meaning: "官方论文、arXiv、venue 或 DOI 已固定，引用对象可信。",
    reviewFocus: "读摘要和方法，判断数据对象、验证/奖励机制、训练用途是否能说清。",
    promoteWhen: "补齐 data object、verifier/reward、construction recipe、audit note 后升到 L3。",
  },
  L2_artifact_verified: {
    title: "L2 产物已核验",
    meaning: "除论文链接外，代码、数据、项目页、模型或 Hugging Face 等产物链接也已检查。",
    reviewFocus: "确认 artifact 是否真的可复用，license、版本、数据切分和运行环境是否可审计。",
    promoteWhen: "写出读者可用的一句话总结和风险说明后升到 L3。",
  },
  L3_summary_ready: {
    title: "L3 摘要可读",
    meaning: "已有 one-line summary、why-it-matters、数据对象和审计提示，适合进入阅读池。",
    reviewFocus: "检查摘要是否准确，是否过度宣传，是否遗漏 verifier、reward、contamination、budget。",
    promoteWhen: "写成完整 card 后升到 L4。",
  },
  L4_carded: {
    title: "L4 已有卡片",
    meaning: "本地 card 已解释数据对象、验证器、构造方法、训练用途和审计字段。",
    reviewFocus: "逐段检查 card 是否有占位话术、弱证据、错误链接或不清楚的复用边界。",
    promoteWhen: "card 里的风险、缺失字段和审计问题足够具体后升到 L5。",
  },
  L5_audit_ready: {
    title: "L5 可审计复用",
    meaning: "card 已足够具体，可支持是否复用、如何复现、如何防污染/防 reward hacking 的判断。",
    reviewFocus: "重点复核复用风险、license、数据泄漏、验证器弱点、搜索预算和失败模式。",
    promoteWhen: "通常不再升级；后续维护是跟踪新链接、复现问题和失效 artifact。",
  },
};

const STORAGE_KEY = "awesome-llm-reasoning-review-annotations";
const DEFAULT_ANNOTATIONS = { schema_version: 1, annotations: {} };

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

function shortText(value, limit = 230) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text.length > limit ? `${text.slice(0, limit - 1)}…` : text;
}

function annotationList(payload, entryId) {
  const notes = arr(payload?.annotations?.[entryId]);
  return notes.length ? [notes.at(-1)] : [];
}

function normalizeAnnotations(payload) {
  if (!payload || typeof payload !== "object") return structuredClone(DEFAULT_ANNOTATIONS);
  const annotations = {};
  if (payload.annotations && typeof payload.annotations === "object") {
    Object.entries(payload.annotations).forEach(([entryId, value]) => {
      const notes = arr(value);
      if (notes.length) annotations[entryId] = [notes.at(-1)];
    });
  }
  return {
    schema_version: payload.schema_version || 1,
    updated_at: payload.updated_at || null,
    annotations,
  };
}

function packEntryId(item) {
  return item?.entry_id || item?.entry?.id || item?.id || null;
}

export function canPersistLevelChange(currentLevel, targetLevel, note) {
  if (!targetLevel || targetLevel === currentLevel) return true;
  if (targetLevel === "L5_audit_ready" && !String(note || "").trim()) return false;
  return true;
}

export function projectSourceLinks(entry) {
  const artifacts = entry.artifacts || {};
  const links = [];
  if (entry.primary_link) links.push({ label: "读论文原文", href: entry.primary_link });
  if (artifacts.card) links.push({ label: "读项目卡片", href: `../${artifacts.card}`, cardPath: artifacts.card });
  if (artifacts.code) links.push({ label: "代码", href: artifacts.code });
  if (artifacts.data) links.push({ label: "数据", href: artifacts.data });
  if (artifacts.project) links.push({ label: "项目页", href: artifacts.project });
  if (artifacts.huggingface) links.push({ label: "Hugging Face", href: artifacts.huggingface });
  return links;
}

export function createAnnotationRecord(entry, values = {}, now = new Date()) {
  const note = String(values.note || "").trim();
  if (!note) {
    throw new Error("批注不能为空。请用中文写一行人工 review。");
  }
  const targetLevel = values.targetLevel || entry.curation_level || "L0_seeded";
  if (!canPersistLevelChange(entry.curation_level, targetLevel, note)) {
    throw new Error("更新为 L5_audit_ready 必须先写人工 review 批注。");
  }
  return {
    entry_id: entry.id,
    title: entry.title,
    current_level: entry.curation_level || "L0_seeded",
    target_level: targetLevel,
    decision: values.decision || "needs_more_review",
    note,
    created_at: now.toISOString(),
  };
}

export function mergeAnnotations(previous, record) {
  const payload = normalizeAnnotations(previous);
  return {
    ...payload,
    updated_at: record.created_at,
    annotations: {
      ...payload.annotations,
      [record.entry_id]: [record],
    },
  };
}

export function filterEntries(entries, starterPacks, annotations, state = {}) {
  const query = String(state.query || "").trim().toLowerCase();
  const pack = state.packId ? starterPacks.find((item) => item.id === state.packId) : null;
  const allowedIds = pack ? new Set(arr(pack.entries).map(packEntryId).filter(Boolean)) : null;

  return entries.filter((entry) => {
    if (allowedIds && !allowedIds.has(entry.id)) return false;
    if (state.level && entry.curation_level !== state.level) return false;
    if (state.status && entry.status !== state.status) return false;
    if (state.annotationState === "annotated" && !annotationList(annotations, entry.id).length) return false;
    if (state.annotationState === "unannotated" && annotationList(annotations, entry.id).length) return false;
    if (!query) return true;
    const haystack = [
      entry.title,
      entry.venue,
      entry.year,
      entry.status,
      entry.curation_level,
      entry.one_line_summary,
      entry.why_it_matters,
      entry.data_object,
      entry.feedback_verifier,
      entry.audit_focus,
      ...arr(entry.authors),
      ...arr(entry.tags),
      ...arr(entry.category),
      ...arr(entry.source_role),
      ...arr(entry.training_use),
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

export function reviewPacks(packs) {
  return arr(packs);
}

export function sortByProjectGeneratedOrder(entries, cards = []) {
  const entryIndexes = new Map(arr(entries).map((entry, index) => [entry.id, index]));
  const cardIndexes = new Map();
  arr(cards).forEach((card, index) => {
    if (card.entry_id) cardIndexes.set(card.entry_id, index);
    if (card.path) cardIndexes.set(card.path, index);
  });
  const cardIndexFor = (entry) => {
    if (cardIndexes.has(entry.id)) return cardIndexes.get(entry.id);
    const cardPath = entry.artifacts?.card;
    return cardIndexes.has(cardPath) ? cardIndexes.get(cardPath) : null;
  };

  return arr(entries).slice().sort((left, right) => {
    const leftCardIndex = cardIndexFor(left);
    const rightCardIndex = cardIndexFor(right);
    if (leftCardIndex !== null && rightCardIndex !== null) return rightCardIndex - leftCardIndex;
    if (leftCardIndex !== null) return -1;
    if (rightCardIndex !== null) return 1;
    return (entryIndexes.get(right.id) ?? 0) - (entryIndexes.get(left.id) ?? 0);
  });
}

export function lowLevelReviewHint(level) {
  return {
    L0_seeded: "先补官方链接、arXiv/DOI/venue，再判断是否属于当前项目生成路径。",
    L1_link_verified: "补齐数据对象、验证/奖励、训练用途和审计风险，再考虑升到 L3。",
    L2_artifact_verified: "确认产物是否可复用，补 license、版本、数据切分和运行边界。",
  }[level] || "";
}

export function saveButtonText(isSaving) {
  return isSaving ? "保存中..." : "保存批注并写回等级";
}

export function nextUnannotatedEntryId(entries, starterPacks, annotations, state = {}, cards = [], currentId = null) {
  const ordered = sortByProjectGeneratedOrder(filterEntries(entries, starterPacks, annotations, state), cards);
  if (!ordered.length) return null;
  const foundIndex = ordered.findIndex((entry) => entry.id === currentId);
  const currentIndex = foundIndex >= 0 ? foundIndex : -1;
  for (let offset = 1; offset <= ordered.length; offset += 1) {
    const candidate = ordered[(currentIndex + offset) % ordered.length];
    if (!annotationList(annotations, candidate.id).length) return candidate.id;
  }
  return null;
}

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
  } catch (_error) {
    return fallback;
  }
}

async function loadAnnotations() {
  const fromApi = await loadJson("/api/annotations", null);
  if (fromApi) return normalizeAnnotations(fromApi);
  const fromFile = await loadJson("annotations.json", null);
  const fromStorage = localStorage.getItem(STORAGE_KEY);
  if (fromStorage) {
    try {
      return normalizeAnnotations(JSON.parse(fromStorage));
    } catch (_error) {
      return normalizeAnnotations(fromFile);
    }
  }
  return normalizeAnnotations(fromFile);
}

async function saveAnnotations(payload) {
  const normalized = normalizeAnnotations(payload);
  try {
    const response = await fetch("/api/annotations", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(normalized, null, 2),
    });
    if (!response.ok) throw new Error(await response.text());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return "file";
  } catch (_error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return "browser";
  }
}

async function persistReview(record) {
  try {
    const response = await fetch("/api/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ record }, null, 2),
    });
    if (!response.ok) throw new Error(await response.text());
    return await response.json();
  } catch (error) {
    if (record.target_level !== record.current_level) {
      throw new Error(`等级修改需要本地 review server 写回项目数据：${error.message}`);
    }
    return null;
  }
}

function annotationDownloadHref(payload) {
  const blob = new Blob([JSON.stringify(normalizeAnnotations(payload), null, 2)], {
    type: "application/json",
  });
  return URL.createObjectURL(blob);
}

function selectedState() {
  return {
    packId: document.getElementById("packFilter").value,
    level: document.getElementById("levelFilter").value,
    status: document.getElementById("statusFilter").value,
    annotationState: document.getElementById("annotationState").value,
    query: document.getElementById("query").value,
  };
}

function renderLevelGuide(root) {
  root.innerHTML = Object.entries(CURATION_LEVELS).map(([level, info]) => `
    <article class="level-card ${esc(level)}">
      <div class="level-code">${esc(level)}</div>
      <h3>${esc(info.title)}</h3>
      <p>${esc(info.meaning)}</p>
      <dl>
        <div><dt>Review</dt><dd>${esc(info.reviewFocus)}</dd></div>
        <div><dt>Next</dt><dd>${esc(info.promoteWhen)}</dd></div>
      </dl>
    </article>
  `).join("");
}

function renderPackOptions(select, packs) {
  const options = reviewPacks(packs)
    .map((pack) => `<option value="${esc(pack.id)}">${esc(pack.title)}</option>`)
    .join("");
  select.innerHTML = `<option value="">全部项目生成路径</option>${options}`;
}

function renderStatus(message, mode = "info") {
  const target = document.getElementById("saveStatus");
  target.textContent = message;
  target.dataset.mode = mode;
}

function setFormSaving(form, isSaving) {
  const button = form.querySelector("button[type=\"submit\"]");
  if (!button) return;
  form.dataset.saving = isSaving ? "true" : "false";
  button.disabled = isSaving;
  button.textContent = saveButtonText(isSaving);
}

function renderAnnotationsForEntry(payload, entryId) {
  const note = annotationList(payload, entryId).at(-1);
  if (!note) return "<p class=\"empty-note\">还没有人工注解。</p>";
  return `<div class="annotation-current">
    <strong>${esc(note.decision || "review")}</strong>
    <span>${esc(note.current_level || "")} -> ${esc(note.target_level || "")} · ${esc(note.created_at || "")}</span>
    <p>${esc(note.note || "")}</p>
  </div>`;
}

function links(entry) {
  const seen = new Set();
  return projectSourceLinks(entry).filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  }).map((link) => `<a href="${esc(link.href)}" target="_blank" rel="noreferrer">${esc(link.label)}</a>`).join("");
}

function cardSourceBlock(entry) {
  const cardPath = entry.artifacts?.card;
  if (!cardPath) {
    return `<details class="card-source">
      <summary>项目原始文本</summary>
      <p>这个条目还没有本地 card。当前页面展示的是项目生成字段；如果要升到 L4/L5，先补 card。</p>
    </details>`;
  }
  return `<details class="card-source" data-card-path="${esc(cardPath)}">
    <summary>项目卡片原文</summary>
    <div class="source-actions">
      <button type="button" class="load-card">加载卡片原文</button>
    </div>
    <pre class="card-text">尚未加载。</pre>
  </details>`;
}

export function renderEntryCard(entry, annotations, showRaw, showAnnotations) {
  const level = CURATION_LEVELS[entry.curation_level] || CURATION_LEVELS.L0_seeded;
  const lowHint = lowLevelReviewHint(entry.curation_level);
  const noteCount = annotationList(annotations, entry.id).length;
  const rawBlock = showRaw ? `
    <details class="raw-fields" open>
      <summary>项目原始字段</summary>
      <dl>
        <div><dt>source_role</dt><dd>${esc(arr(entry.source_role).join(", ") || "unknown")}</dd></div>
        <div><dt>verification_contract</dt><dd>${esc(arr(entry.verification_contract).join(", ") || "unknown")}</dd></div>
        <div><dt>training_use</dt><dd>${esc(arr(entry.training_use).join(", ") || "unknown")}</dd></div>
        <div><dt>category</dt><dd>${esc(arr(entry.category).join(", ") || "unknown")}</dd></div>
        <div><dt>tags</dt><dd>${esc(arr(entry.tags).join(", ") || "none")}</dd></div>
      </dl>
    </details>
  ` : "";
  const annotationsBlock = showAnnotations ? `
    <section class="annotation-panel" data-entry-id="${esc(entry.id)}">
      <div class="annotation-head">
        <strong>人工注解</strong>
        <span>${noteCount ? "已填写" : "未填写"}</span>
      </div>
      ${renderAnnotationsForEntry(annotations, entry.id)}
      <form class="annotation-form" data-entry-id="${esc(entry.id)}">
        <label>判断
          <select name="decision">
            <option value="representative">代表性论文</option>
            <option value="useful">有用，保留</option>
            <option value="needs_more_review">需要继续审</option>
            <option value="not_useful">不适合当前池子</option>
          </select>
        </label>
        <label>建议目标等级
          <select name="targetLevel">
            ${Object.keys(CURATION_LEVELS).map((key) => `<option value="${esc(key)}"${key === entry.curation_level ? " selected" : ""}>${esc(key)}</option>`).join("")}
          </select>
        </label>
        <label class="note-field">中文批注
          <textarea name="note" required placeholder="写一行中文人工 review：为什么有用、哪里存疑、是否能升到目标等级。"></textarea>
        </label>
        <button type="submit">${esc(saveButtonText(false))}</button>
      </form>
    </section>
  ` : "";

  return `<article class="paper-card" id="${esc(entry.id)}">
    <div class="paper-meta">
      <span>${esc(entry.year || "n.d.")}</span>
      <span>${esc(entry.venue || "unknown venue")}</span>
      <span>${esc(entry.status || "unknown")}</span>
      <span class="level-badge">${esc(entry.curation_level || "L0_seeded")}</span>
    </div>
    <h3>${entry.primary_link ? `<a href="${esc(entry.primary_link)}" target="_blank" rel="noreferrer">${esc(entry.title)}</a>` : esc(entry.title)}</h3>
    <div class="paper-links">${links(entry) || "<span>缺少官方链接</span>"}</div>
    <p class="zh-summary">${esc(entry.one_line_summary || "还没有摘要。")}</p>
    <div class="review-focus">
      <strong>${esc(level.title)}</strong>
      <span>${esc(level.reviewFocus)}</span>
    </div>
    ${lowHint ? `<p class="low-level-hint">低等级参考：${esc(lowHint)} 仅供参考。</p>` : ""}
    <dl class="review-fields review-priority">
      <div><dt>为什么有用</dt><dd>${esc(shortText(entry.why_it_matters || "needs rationale"))}</dd></div>
      <div><dt>审计风险</dt><dd>${esc(shortText(entry.audit_focus || "check links, lineage, verifier, split, and contamination"))}</dd></div>
    </dl>
    <details class="secondary-fields">
      <summary>数据对象 / 验证信息</summary>
      <dl class="review-fields review-secondary">
        <div><dt>数据对象</dt><dd>${esc(shortText(entry.data_object || "metadata pending"))}</dd></div>
        <div><dt>验证 / 奖励</dt><dd>${esc(shortText(entry.feedback_verifier || "metadata pending"))}</dd></div>
      </dl>
    </details>
    ${cardSourceBlock(entry)}
    ${rawBlock}
    ${annotationsBlock}
  </article>`;
}

function updateExportLink(payload) {
  const link = document.getElementById("downloadAnnotations");
  const previous = link.href;
  link.href = annotationDownloadHref(payload);
  link.download = "annotations.json";
  if (previous?.startsWith("blob:")) URL.revokeObjectURL(previous);
}

function renderReviewList(state, data) {
  const showRaw = document.getElementById("showRaw").checked;
  const showAnnotations = document.getElementById("showAnnotations").checked;
  const filtered = sortByProjectGeneratedOrder(
    filterEntries(data.entries, data.packs, data.annotations, selectedState()),
    data.cards,
  );
  document.getElementById("resultSummary").textContent = `${filtered.length} / ${data.entries.length} 篇符合当前筛选`;
  document.getElementById("annotatedCount").textContent = data.entries
    .filter((entry) => annotationList(data.annotations, entry.id).length)
    .length;
  document.getElementById("paperList").innerHTML = filtered.length
    ? filtered.slice(0, 120).map((entry) => renderEntryCard(entry, data.annotations, showRaw, showAnnotations)).join("")
    : "<div class=\"empty-state\">没有匹配论文。</div>";
  updateExportLink(data.annotations);
}

async function initReviewPage() {
  const root = document.getElementById("reviewApp");
  if (!root) return;
  const data = {
    entries: await loadJson("../docs/assets/entries.json", []),
    packs: await loadJson("../docs/assets/starter_packs.json", []),
    cards: await loadJson("../docs/assets/cards.json", []),
    annotations: await loadAnnotations(),
  };

  renderLevelGuide(document.getElementById("levelGuide"));
  renderPackOptions(document.getElementById("packFilter"), data.packs);
  document.getElementById("totalCount").textContent = data.entries.length;
  document.getElementById("verifiedCount").textContent = data.entries.filter((entry) => entry.status === "verified").length;
  renderReviewList(selectedState(), data);

  document.getElementById("controls").addEventListener("input", () => renderReviewList(selectedState(), data));
  document.getElementById("paperList").addEventListener("submit", async (event) => {
    const form = event.target.closest(".annotation-form");
    if (!form) return;
    event.preventDefault();
    const entry = data.entries.find((item) => item.id === form.dataset.entryId);
    const values = Object.fromEntries(new FormData(form).entries());
    setFormSaving(form, true);
    try {
      const record = createAnnotationRecord(entry, values);
      await persistReview(record);
      data.annotations = mergeAnnotations(data.annotations, record);
      entry.curation_level = record.target_level;
      const mode = await saveAnnotations(data.annotations);
      const targetId = nextUnannotatedEntryId(data.entries, data.packs, data.annotations, selectedState(), data.cards, entry.id);
      renderStatus(mode === "file" ? "已写入 review/annotations.json，并已写回 data/papers.yaml 的等级" : "已保存到浏览器本地；等级写回需要本地 review server", mode);
      renderReviewList(selectedState(), data);
      document.getElementById(targetId || entry.id)?.scrollIntoView({ block: "center" });
    } catch (error) {
      setFormSaving(form, false);
      renderStatus(error.message, "error");
    }
  });
  document.getElementById("paperList").addEventListener("click", async (event) => {
    const loadButton = event.target.closest(".load-card");
    if (loadButton) {
      const details = loadButton.closest(".card-source");
      const pre = details.querySelector(".card-text");
      const path = details.dataset.cardPath;
      pre.textContent = "加载中...";
      try {
        const response = await fetch(`../${path}`, { cache: "no-store" });
        if (!response.ok) throw new Error(response.statusText);
        pre.textContent = await response.text();
      } catch (error) {
        pre.textContent = `加载失败：${error.message}`;
      }
    }
  });
}

if (typeof document !== "undefined") {
  initReviewPage();
}
