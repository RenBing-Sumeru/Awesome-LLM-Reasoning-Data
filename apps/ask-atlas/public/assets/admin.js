const els = {
  logoutButton: document.getElementById("logoutButton"),
  refreshAdmin: document.getElementById("refreshAdmin"),
  adminError: document.getElementById("adminError"),
  metrics: document.getElementById("metrics"),
  readiness: document.getElementById("readiness"),
  readinessStamp: document.getElementById("readinessStamp"),
  publicAskLink: document.getElementById("publicAskLink"),
  caps: document.getElementById("caps"),
  costs: document.getElementById("costs"),
  gaps: document.getElementById("gaps"),
  exportGaps: document.getElementById("exportGaps"),
  gapExportPanel: document.getElementById("gapExportPanel"),
  gapIssueTitle: document.getElementById("gapIssueTitle"),
  gapExportText: document.getElementById("gapExportText"),
  copyGapExport: document.getElementById("copyGapExport"),
  users: document.getElementById("users"),
  userCount: document.getElementById("userCount"),
  requestSearch: document.getElementById("requestSearch"),
  requests: document.getElementById("requests"),
  requestDetail: document.getElementById("requestDetail"),
};

const state = {
  requests: [],
  selectedRequest: null,
  ownerAdmin: false,
  requestFilter: "all",
  requestSearch: "",
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

async function api(path, options = {}) {
  const response = await fetch(path, {
    credentials: "same-origin",
    headers: { "content-type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Request failed.");
  return payload;
}

function table(columns, rows) {
  if (!rows.length) return "<p class='sources-empty'>No rows yet.</p>";
  return `<table><thead><tr>${columns.map((col) => `<th>${esc(col.label)}</th>`).join("")}</tr></thead><tbody>${rows.map((row, rowIndex) => (
    `<tr>${columns.map((col) => `<td class="${col.className || ""}">${col.render ? col.render(row, rowIndex) : esc(row[col.key])}</td>`).join("")}</tr>`
  )).join("")}</tbody></table>`;
}

function renderOverview(data) {
  const today = data.today;
  const items = [
    ["Total users", today.totalUsers],
    ["Active users", today.activeUsers],
    ["Questions", today.totalQuestions],
    ["Blocked", today.blockedRequests],
    ["Input tokens", today.inputTokens],
    ["Output tokens", today.outputTokens],
    ["Cost USD", today.estimatedCostUsd],
    ["Top models", today.topModels.map(([m, c]) => `${m}: ${c}`).join(", ") || "none"],
  ];
  els.metrics.innerHTML = items.map(([label, value]) => (
    `<div class="metric"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`
  )).join("");
  els.caps.innerHTML = Object.entries(data.caps).map(([key, value]) => (
    `<div><span>${esc(key)}</span><strong>${esc(Array.isArray(value) ? value.join(", ") : value)}</strong></div>`
  )).join("");
}

function statusLabel(status) {
  if (status === "pass") return "pass";
  if (status === "warn") return "watch";
  if (status === "block") return "block";
  return status || "unknown";
}

function readinessGroupRows(checks) {
  const groups = new Map();
  for (const item of checks || []) {
    if (!groups.has(item.group)) groups.set(item.group, []);
    groups.get(item.group).push(item);
  }
  return [...groups.entries()].map(([group, items]) => {
    const blockCount = items.filter((item) => item.status === "block").length;
    const warnCount = items.filter((item) => item.status === "warn").length;
    const groupStatus = blockCount ? "block" : warnCount ? "warn" : "pass";
    return `
      <article class="readiness-group ${esc(groupStatus)}">
        <div class="readiness-group-head">
          <h3>${esc(group)}</h3>
          <span>${esc(statusLabel(groupStatus))}</span>
        </div>
        <div class="readiness-list">
          ${items.map((item) => `
            <div class="readiness-item ${esc(item.status)}">
              <div>
                <strong>${esc(item.label)}</strong>
                <p>${esc(item.detail)}</p>
                ${item.action && item.status !== "pass" ? `<small>${esc(item.action)}</small>` : ""}
              </div>
              <span>${esc(statusLabel(item.status))}</span>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function renderReadiness(data) {
  const counts = data.counts || {};
  const status = data.status || "unknown";
  els.readinessStamp.textContent = `${data.generatedAt || ""} · ${counts.block || 0} blockers · ${counts.warn || 0} warnings`;
  if (data.publicAskUrl) els.publicAskLink.href = data.publicAskUrl;
  const nextActions = data.nextActions?.length
    ? `<ol>${data.nextActions.map((item) => `<li>${esc(item)}</li>`).join("")}</ol>`
    : "<p class='sources-empty'>No launch blockers detected.</p>";
  const safe = data.safeConfig || {};
  els.readiness.innerHTML = `
    <div class="launch-overview">
      <div class="readiness-status ${esc(status)}">
        <span>Current status</span>
        <strong>${esc(status)}</strong>
        <p>${status === "ready" ? "The public Ask path is ready to promote." : "Resolve blockers before promoting Ask the Atlas publicly."}</p>
      </div>
      <div class="launch-facts">
        <div><span>Backend</span><strong>${esc(safe.backendBaseUrl || "not configured")}</strong></div>
        <div><span>Pages Ask</span><strong>${esc(data.publicAskUrl || "not configured")}</strong></div>
        <div><span>Pages backend</span><strong>${esc(safe.pagesBackendUrl || "not configured")}</strong></div>
        <div><span>Store</span><strong>${esc(safe.storeBackend || "")}</strong></div>
        <div><span>Models</span><strong>${esc((safe.allowedModels || []).join(", "))}</strong></div>
        <div><span>Quota</span><strong>${esc(safe.quotaPolicy ? `${safe.quotaPolicy.baseDailyRequests}/day · star +${safe.quotaPolicy.starBonusCredits} · fork +${safe.quotaPolicy.forkBonusCredits}` : "")}</strong></div>
      </div>
      <div class="next-actions">
        <h3>Next actions</h3>
        ${nextActions}
      </div>
    </div>
    <div class="readiness-groups">
      ${readinessGroupRows(data.checks || [])}
    </div>
  `;
}

function renderUsers(rows) {
  els.userCount.textContent = `${rows.length} users`;
  els.users.innerHTML = table([
    { label: "GitHub", render: (row) => `@${esc(row.login)}<br><small>${esc(row.githubId)}</small>` },
    { label: "Role", render: (row) => `<span class="pill">${esc(row.role)}</span>` },
    { label: "Star/Fork", render: (row) => `${row.starVerified ? "star" : "no star"} · ${row.forkVerified ? "fork" : "no fork"}` },
    { label: "Bonus left", key: "bonusCredits" },
    { label: "Used today", key: "usedToday" },
    { label: "Total", key: "totalQuestions" },
    { label: "Tokens", key: "totalTokens" },
    { label: "Cost", key: "totalEstimatedCostUsd" },
    { label: "Last active", key: "lastSeenAt" },
    { label: "Actions", render: (row) => state.ownerAdmin ? `
      <button class="mini-action" data-user-action="ban" data-github-id="${esc(row.githubId)}" type="button">ban</button>
      <button class="mini-action" data-user-action="unban" data-github-id="${esc(row.githubId)}" type="button">unban</button>
      <button class="mini-action" data-user-action="allowlist" data-github-id="${esc(row.githubId)}" type="button">allow</button>
      <button class="mini-action" data-user-action="grant_star_bonus" data-github-id="${esc(row.githubId)}" type="button"${row.starBonusAwardedAt ? " disabled" : ""}>grant star</button>
      <button class="mini-action" data-user-action="grant_fork_bonus" data-github-id="${esc(row.githubId)}" type="button"${row.forkBonusAwardedAt ? " disabled" : ""}>grant fork</button>
      <button class="mini-action" data-user-action="reset_bonus_used" data-github-id="${esc(row.githubId)}" type="button">reset bonus</button>
    ` : "<span class='muted'>view only</span>" },
  ], rows);
}

function renderCosts(rows) {
  els.costs.innerHTML = table([
    { label: "Model", key: "model" },
    { label: "Requests", key: "requests" },
    { label: "Input", key: "inputTokens" },
    { label: "Output", key: "outputTokens" },
    { label: "Cost USD", key: "estimatedCostUsd" },
  ], rows);
}

function compactList(items) {
  if (!items?.length) return "<p class='sources-empty'>No signals yet.</p>";
  return `<ul class="gap-list">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
}

function renderGaps(data) {
  const summary = data.summary || {};
  const recurringRows = (data.recurringQuestions || []).map((row) => ({
    ...row,
    statuses: Object.entries(row.statuses || {}).map(([k, v]) => `${k}:${v}`).join(", "),
    modes: Object.entries(row.modes || {}).map(([k, v]) => `${k}:${v}`).join(", "),
    examplesText: (row.examples || []).join(" | "),
  }));
  const faqRows = (data.faqCandidates || []).slice(0, 10);
  const lowRows = (data.lowConfidence || []).slice(0, 8);
  const downRows = (data.downvoted || []).slice(0, 8);
  const outRows = (data.outOfScope || []).slice(0, 8);
  els.gaps.innerHTML = `
    <div class="gap-summary">
      <div><span>low confidence</span><strong>${esc(summary.lowConfidence || 0)}</strong></div>
      <div><span>out of scope</span><strong>${esc(summary.outOfScope || 0)}</strong></div>
      <div><span>downvoted</span><strong>${esc(summary.downvoted || 0)}</strong></div>
      <div><span>recurring clusters</span><strong>${esc(summary.recurringQuestionClusters || 0)}</strong></div>
    </div>
    <div class="admin-grid">
      <article>
        <h3>Suggested Actions</h3>
        ${compactList(data.suggestedActions || [])}
      </article>
      <article>
        <h3>Recurring Question Clusters</h3>
        ${table([
          { label: "Cluster", key: "phrase" },
          { label: "Count", key: "count" },
          { label: "Target", key: "target" },
          { label: "Statuses", key: "statuses" },
          { label: "Examples", key: "examplesText", className: "preview" },
        ], recurringRows)}
      </article>
    </div>
    <article class="gap-candidates">
      <h3>FAQ / Card Candidates</h3>
      ${table([
        { label: "Signal", key: "signal" },
        { label: "Candidate", key: "title", className: "preview" },
        { label: "Suggested target", key: "target" },
        { label: "Patch prompt", key: "prompt", className: "preview" },
      ], faqRows)}
    </article>
    <div class="admin-grid">
      <article>
        <h3>Low Retrieval Confidence</h3>
        ${table([
          { label: "Time", key: "createdAt" },
          { label: "User", key: "githubLogin" },
          { label: "Mode", key: "mode" },
          { label: "Confidence", key: "confidence" },
          { label: "Target", key: "target" },
          { label: "Question", key: "question", className: "preview" },
        ], lowRows)}
      </article>
      <article>
        <h3>Downvoted Answers</h3>
        ${table([
          { label: "Time", key: "createdAt" },
          { label: "User", key: "githubLogin" },
          { label: "Mode", key: "mode" },
          { label: "Reason", key: "reason" },
          { label: "Target", key: "target" },
          { label: "Question", key: "question", className: "preview" },
        ], downRows)}
      </article>
    </div>
    <article class="gap-candidates">
      <h3>Out-of-Scope Review Queue</h3>
      ${table([
        { label: "Time", key: "createdAt" },
        { label: "User", key: "githubLogin" },
        { label: "Suggested target", key: "target" },
        { label: "Question", key: "question", className: "preview" },
      ], outRows)}
    </article>
  `;
}

function filteredRequests() {
  const search = state.requestSearch.toLowerCase();
  return (state.requests || []).filter((row) => {
    const rating = String(row.feedback?.rating || "").toLowerCase();
    const matchesFilter = state.requestFilter === "all"
      || (state.requestFilter === "blocked" && ["blocked", "out_of_scope", "error"].includes(row.status))
      || (state.requestFilter === "low-confidence" && Number(row.retrievalConfidence || 0) > 0 && Number(row.retrievalConfidence || 0) < 0.18)
      || (state.requestFilter === "downvoted" && rating === "down")
      || (state.requestFilter === "high-cost" && Number(row.estimatedCostUsd || 0) >= 0.02);
    if (!matchesFilter) return false;
    if (!search) return true;
    const haystack = [
      row.requestId,
      row.githubLogin,
      row.githubId,
      row.mode,
      row.model,
      row.status,
      row.errorCode,
      row.questionPreview,
      row.answerPreview,
      ...(row.sourceTitles || []),
      row.feedback?.rating,
      row.feedback?.reason,
    ].join(" ").toLowerCase();
    return haystack.includes(search);
  });
}

function renderRequestRows() {
  const rows = filteredRequests();
  els.requests.innerHTML = table([
    { label: "", render: (row) => `<button class="mini-action" data-request-id="${esc(row.requestId)}" type="button">details</button>` },
    { label: "Time", key: "createdAt" },
    { label: "User", key: "githubLogin" },
    { label: "Mode", key: "mode" },
    { label: "Model", key: "model" },
    { label: "Question", render: (row) => esc(row.questionPreview || `[raw hidden] ${String(row.questionHash || "").slice(0, 12)}`), className: "preview" },
    { label: "Status", render: (row) => `<span class="pill">${esc(row.status)}</span>` },
    { label: "Tokens", render: (row) => `${esc(row.inputTokens)} / ${esc(row.outputTokens)}` },
    { label: "Cost", key: "estimatedCostUsd" },
    { label: "Sources", render: (row) => esc((row.sourceTitles || []).slice(0, 3).join(" | ")) },
  ], rows);
}

function renderRequests(rows) {
  state.requests = rows || [];
  renderRequestRows();
}

function sourceDetailList(row) {
  const sources = row.sourceDetails || [];
  if (!sources.length) return "<p class='sources-empty'>No source details were recorded.</p>";
  return `<div class="detail-source-list">${sources.map((source) => `
    <a href="${safeHref(source.url)}" target="_blank" rel="noreferrer" class="detail-source">
      <strong>[${esc(source.index || "")}] ${esc(source.title || source.id)}</strong>
      <small>${esc(source.type || "source")} · ${esc(source.path || source.id || "")}</small>
      <p>${esc(source.snippet || "")}</p>
    </a>
  `).join("")}</div>`;
}

function regressionCase(row) {
  const answer = row.answerText || (row.answerHash ? `[raw answer not stored] ${row.answerHash}` : "_No answer text recorded._");
  return [
    "# Ask the Atlas Regression Case",
    "",
    `Request: ${row.requestId || ""}`,
    `User: @${row.githubLogin || ""} (${row.githubId || ""})`,
    `Mode: ${row.mode || ""}`,
    `Model: ${row.model || ""}`,
    `Status: ${row.status || ""}`,
    `Error: ${row.errorCode || "none"}`,
    `Retrieval confidence: ${row.retrievalConfidence || 0}`,
    "",
    "## Question",
    "",
    row.questionText || `[raw text not stored] ${row.questionHash || ""}`,
    "",
    "## Answer",
    "",
    answer,
    "",
    "## Sources",
    "",
    ...(row.sourceDetails || []).map((source) => `- [${source.index || ""}] ${source.title || source.id} (${source.path || source.url || ""})`),
    "",
    "## Suggested Fix",
    "",
    "- [ ] Reproduce the answer with current RAG sources.",
    "- [ ] Patch the relevant paper/card/doc if the source is missing.",
    "- [ ] Add this case to prompt/RAG regression checks.",
  ].join("\n");
}

function renderRequestDetail(row) {
  if (!row) {
    state.selectedRequest = null;
    els.requestDetail.hidden = true;
    els.requestDetail.innerHTML = "";
    return;
  }
  state.selectedRequest = row;
  const question = row.questionText || `[raw text not stored] ${row.questionHash || ""}`;
  const answer = row.answerText || (row.answerHash ? `[raw answer not stored] ${row.answerHash}` : "No answer text recorded.");
  const feedback = row.feedback
    ? `${row.feedback.rating || ""}${row.feedback.reason ? ` · ${row.feedback.reason}` : ""}${row.feedback.comment ? ` · ${row.feedback.comment}` : ""}`
    : "No feedback yet.";
  els.requestDetail.hidden = false;
  els.requestDetail.innerHTML = `
    <div class="section-title">
      <div>
        <h3>Question Detail</h3>
        <span>${esc(row.createdAt || "")} · @${esc(row.githubLogin || "")} · ${esc(row.requestId || "")}</span>
      </div>
      <div class="section-actions">
        <button class="mini-action" data-copy-detail="answer" type="button">copy answer</button>
        <button class="mini-action" data-copy-detail="regression" type="button">copy regression case</button>
        <button class="mini-action" data-close-detail type="button">close</button>
      </div>
    </div>
    <div class="detail-kv">
      <div><span>Status</span><strong>${esc(row.status || "")}</strong></div>
      <div><span>Mode</span><strong>${esc(row.mode || "")}</strong></div>
      <div><span>Model</span><strong>${esc(row.model || "")}</strong></div>
      <div><span>Tokens</span><strong>${esc(row.inputTokens || 0)} / ${esc(row.outputTokens || 0)}</strong></div>
      <div><span>Cost USD</span><strong>${esc(row.estimatedCostUsd || 0)}</strong></div>
      <div><span>Confidence</span><strong>${esc(row.retrievalConfidence || 0)}</strong></div>
      <div><span>Error code</span><strong>${esc(row.errorCode || "none")}</strong></div>
      <div><span>Feedback</span><strong>${esc(feedback)}</strong></div>
    </div>
    <div class="detail-grid">
      <section>
        <h4>Question</h4>
        <pre>${esc(question)}</pre>
      </section>
      <section>
        <h4>Answer</h4>
        <pre>${esc(answer)}</pre>
      </section>
    </div>
    <section>
      <h4>Sources Used</h4>
      ${sourceDetailList(row)}
    </section>
    <textarea class="detail-regression" readonly hidden>${esc(regressionCase(row))}</textarea>
  `;
  els.requestDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function refresh() {
  els.adminError.hidden = true;
  try {
    const [me, overview, readiness, users, requests, costs, gaps] = await Promise.all([
      api("/api/me"),
      api("/api/admin/overview"),
      api("/api/admin/readiness"),
      api("/api/admin/users"),
      api("/api/admin/requests"),
      api("/api/admin/costs"),
      api("/api/admin/gaps"),
    ]);
    state.ownerAdmin = Boolean(me.user?.ownerAdmin);
    renderOverview(overview);
    renderReadiness(readiness);
    renderUsers(users.users || []);
    renderRequests(requests.requests || []);
    renderCosts(costs.costs || []);
    renderGaps(gaps);
  } catch (error) {
    els.adminError.hidden = false;
    els.adminError.textContent = error.message;
  }
}

els.logoutButton.addEventListener("click", async () => {
  try {
    const payload = await api("/api/auth/logout?return_to=/ask", {
      method: "POST",
      body: "{}",
    });
    location.href = payload.returnTo || "/ask";
  } catch (_error) {
    location.href = "/ask";
  }
});
els.refreshAdmin.addEventListener("click", refresh);
els.requestSearch.addEventListener("input", () => {
  state.requestSearch = els.requestSearch.value;
  renderRequestRows();
});
document.querySelectorAll("[data-request-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state.requestFilter = button.dataset.requestFilter || "all";
    document.querySelectorAll("[data-request-filter]").forEach((item) => item.classList.toggle("active", item === button));
    renderRequestRows();
  });
});
els.exportGaps.addEventListener("click", async () => {
  els.exportGaps.disabled = true;
  els.exportGaps.textContent = "exporting...";
  try {
    const payload = await api("/api/admin/gaps/export");
    els.gapIssueTitle.value = payload.issueTitle || "";
    els.gapExportText.value = payload.markdown || payload.issueBody || "";
    els.gapExportPanel.hidden = false;
  } catch (error) {
    els.adminError.hidden = false;
    els.adminError.textContent = error.message;
  } finally {
    els.exportGaps.disabled = false;
    els.exportGaps.textContent = "export digest";
  }
});
els.copyGapExport.addEventListener("click", async () => {
  const value = els.gapExportText.value;
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
    els.copyGapExport.textContent = "copied";
    setTimeout(() => { els.copyGapExport.textContent = "copy markdown"; }, 1400);
  } catch (_error) {
    els.gapExportText.focus();
    els.gapExportText.select();
  }
});
els.users.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-user-action]");
  if (!button) return;
  button.disabled = true;
  try {
    await api("/api/admin/user", {
      method: "POST",
      body: JSON.stringify({
        githubId: button.dataset.githubId,
        action: button.dataset.userAction,
      }),
    });
    await refresh();
  } catch (error) {
    els.adminError.hidden = false;
    els.adminError.textContent = error.message;
  } finally {
    button.disabled = false;
  }
});
els.requests.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-request-id]");
  if (!button) return;
  button.disabled = true;
  try {
    const payload = await api(`/api/admin/request?id=${encodeURIComponent(button.dataset.requestId)}`);
    renderRequestDetail(payload.request);
  } catch (error) {
    els.adminError.hidden = false;
    els.adminError.textContent = error.message;
  } finally {
    button.disabled = false;
  }
});
els.requestDetail.addEventListener("click", async (event) => {
  const close = event.target.closest("[data-close-detail]");
  if (close) {
    renderRequestDetail(null);
    return;
  }
  const copy = event.target.closest("[data-copy-detail]");
  if (!copy) return;
  const value = copy.dataset.copyDetail === "regression"
    ? els.requestDetail.querySelector(".detail-regression")?.value || ""
    : state.selectedRequest?.answerText || (state.selectedRequest?.answerHash ? `[raw answer not stored] ${state.selectedRequest.answerHash}` : "");
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
    copy.textContent = "copied";
    setTimeout(() => {
      copy.textContent = copy.dataset.copyDetail === "regression" ? "copy regression case" : "copy answer";
    }, 1400);
  } catch (_error) {
    const fallback = els.requestDetail.querySelector(".detail-regression");
    if (fallback) {
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
    }
  }
});
refresh();
