import { CONFIG, isAdminUser, isAllowlistedUser } from "./config.mjs";
import { hashValue, randomId } from "./crypto.mjs";
import { mutateStore, readStore } from "./store.mjs";

function creditBalance(store, githubId) {
  const rows = store.creditLedger || [];
  const matching = rows.filter((item) => item.githubId === githubId);
  const nonMarker = matching.filter((item) => Number(item.delta || 0) !== 0);
  if (!nonMarker.length) {
    const user = store.users[githubId] || {};
    return (user.starBonusCredits || 0) + (user.forkBonusCredits || 0) - (user.bonusCreditsUsed || 0);
  }
  return nonMarker.reduce((sum, item) => sum + Number(item.delta || 0), 0);
}

function creditSpent(store, githubId) {
  return (store.creditLedger || [])
    .filter((item) => item.githubId === githubId && item.creditType === "usage")
    .reduce((sum, item) => sum + Math.abs(Number(item.delta || 0)), 0);
}

export async function createRequestLog({ user, question, mode, model, ip, userAgent, sources, status = "pending", storeRawQuestion = true }) {
  const now = new Date().toISOString();
  const requestId = randomId(12);
  return mutateStore((store) => {
    const record = {
      requestId,
      githubId: user.githubId,
      githubLogin: user.login,
      mode,
      model,
      questionText: storeRawQuestion ? question : "",
      questionHash: hashValue(question),
      rawQuestionStored: Boolean(storeRawQuestion),
      answerText: "",
      answerHash: "",
      rawAnswerStored: false,
      sourceIds: sources.map((source) => source.id),
      sourceTitles: sources.map((source) => source.title),
      sourceDetails: sources.map((source) => ({
        id: source.id,
        index: source.index,
        title: source.title,
        path: source.path,
        url: source.url,
        type: source.type,
        snippet: String(source.snippet || "").slice(0, 360),
        score: source.score || 0,
      })),
      inputTokens: 0,
      outputTokens: 0,
      estimatedCostUsd: 0,
      latencyMs: 0,
      retrievalConfidence: 0,
      status,
      errorCode: "",
      ipHash: hashValue(ip).slice(0, 16),
      userAgentHash: hashValue(userAgent).slice(0, 16),
      createdAt: now,
      updatedAt: now,
    };
    store.requests.unshift(record);
    store.requests = store.requests.slice(0, 5000);
    return record;
  });
}

export async function updateRequestLog(requestId, patch) {
  return mutateStore((store) => {
    const record = store.requests.find((item) => item.requestId === requestId);
    if (!record) return null;
    Object.assign(record, patch, { updatedAt: new Date().toISOString() });
    if (Object.hasOwn(patch, "answerText") && patch.answerText) record.answerHash = hashValue(patch.answerText);
    return record;
  });
}

export async function addFeedback({ user, requestId, rating, reason, comment }) {
  return mutateStore((store) => {
    const request = (store.requests || []).find((item) => item.requestId === requestId);
    if (!request) {
      const error = new Error("Request not found.");
      error.status = 404;
      throw error;
    }
    if (request.githubId !== user.githubId) {
      const error = new Error("Feedback can only be submitted for your own answers.");
      error.status = 403;
      throw error;
    }
    const normalizedRating = String(rating || "").toLowerCase();
    if (!["up", "down", "neutral"].includes(normalizedRating)) {
      const error = new Error("Feedback rating must be up, down, or neutral.");
      error.status = 400;
      throw error;
    }
    const normalizedReason = String(reason || "").slice(0, 80);
    const normalizedComment = String(comment || "").slice(0, 1000);
    const existingIndex = (store.feedback || []).findIndex((row) => row.requestId === requestId && row.githubId === user.githubId);
    const existing = existingIndex >= 0 ? store.feedback[existingIndex] : null;
    const item = {
      id: existing?.id || randomId(10),
      requestId,
      githubId: user.githubId,
      githubLogin: user.login,
      rating: normalizedRating,
      reason: normalizedReason,
      comment: normalizedComment,
      createdAt: new Date().toISOString(),
      updated: Boolean(existing),
    };
    if (existingIndex >= 0) store.feedback.splice(existingIndex, 1);
    store.feedback.unshift(item);
    store.feedback = store.feedback.slice(0, 2000);
    return item;
  });
}

export async function adminOverview() {
  return readStore((store) => {
    const today = new Date().toISOString().slice(0, 10);
    const todayRequests = store.requests.filter((item) => item.createdAt?.startsWith(today));
    const users = Object.values(store.users);
    const success = todayRequests.filter((item) => item.status === "success");
    const blocked = todayRequests.filter((item) => item.status === "blocked" || item.status === "out_of_scope");
    const modelCounts = {};
    for (const request of todayRequests) {
      modelCounts[request.model] = (modelCounts[request.model] || 0) + 1;
    }
    return {
      today: {
        totalUsers: users.length,
        activeUsers: new Set(todayRequests.map((item) => item.githubId)).size,
        totalQuestions: todayRequests.length,
        successfulQuestions: success.length,
        blockedRequests: blocked.length,
        inputTokens: success.reduce((sum, item) => sum + (item.inputTokens || 0), 0),
        outputTokens: success.reduce((sum, item) => sum + (item.outputTokens || 0), 0),
        estimatedCostUsd: Number(success.reduce((sum, item) => sum + (item.estimatedCostUsd || 0), 0).toFixed(6)),
        topModels: Object.entries(modelCounts).sort((a, b) => b[1] - a[1]).slice(0, 6),
      },
      caps: {
        baseDailyRequests: CONFIG.baseDailyRequests,
        starBonusCredits: CONFIG.starBonusCredits,
        forkBonusCredits: CONFIG.forkBonusCredits,
        maxInputChars: CONFIG.maxInputChars,
        maxOutputTokens: CONFIG.maxOutputTokens,
        userDailyTokenCap: CONFIG.userDailyTokenCap,
        userDailyCostCapUsd: CONFIG.userDailyCostCap,
        globalDailyCostCapUsd: CONFIG.globalDailyCostCap,
        perUserMinuteLimit: CONFIG.perUserMinuteLimit,
        perIpHourLimit: CONFIG.perIpHourLimit,
        attemptPerUserMinuteLimit: CONFIG.attemptPerUserMinuteLimit,
        attemptPerIpHourLimit: CONFIG.attemptPerIpHourLimit,
        rewardRefreshHourlyLimit: CONFIG.rewardRefreshHourlyLimit,
        globalMinuteLimit: CONFIG.globalMinuteLimit,
        githubForkScanPages: CONFIG.githubForkScanPages,
        allowedModels: CONFIG.allowedModels,
      },
    };
  });
}

export async function adminUsers() {
  return readStore((store) => {
    return Object.values(store.users)
      .map((user) => {
        const userRequests = store.requests.filter((item) => item.githubId === user.githubId);
        const totalCost = userRequests.reduce((sum, item) => sum + (item.estimatedCostUsd || 0), 0);
        const today = new Date().toISOString().slice(0, 10);
        const todayRequests = userRequests.filter((item) => item.createdAt?.startsWith(today));
        return {
          githubId: user.githubId,
          login: user.login,
          avatarUrl: user.avatarUrl,
          role: user.role || "user",
          admin: isAdminUser(user),
          allowlisted: isAllowlistedUser(user),
          starVerified: Boolean(user.starVerified),
          forkVerified: Boolean(user.forkVerified),
          starBonusAwardedAt: user.starBonusAwardedAt || "",
          forkBonusAwardedAt: user.forkBonusAwardedAt || "",
          bonusCredits: Math.max(0, creditBalance(store, user.githubId)),
          usedToday: todayRequests.filter((item) => item.status === "success").length,
          totalQuestions: userRequests.length,
          totalTokens: userRequests.reduce((sum, item) => sum + (item.inputTokens || 0) + (item.outputTokens || 0), 0),
          totalEstimatedCostUsd: Number(totalCost.toFixed(6)),
          lastSeenAt: user.lastSeenAt || "",
          riskFlag: user.role === "banned" ? "banned" : "",
        };
      })
      .sort((a, b) => String(b.lastSeenAt).localeCompare(String(a.lastSeenAt)));
  });
}

function latestFeedbackByRequest(feedback = []) {
  const map = new Map();
  for (const item of feedback) {
    if (!map.has(item.requestId)) map.set(item.requestId, item);
  }
  return map;
}

function sourceDetailsFor(item) {
  return item.sourceDetails || (item.sourceIds || []).map((id, index) => ({
    id,
    index: index + 1,
    title: item.sourceTitles?.[index] || id,
    path: "",
    url: "",
    type: "",
    snippet: "",
    score: 0,
  }));
}

function feedbackSummary(item) {
  if (!item) return null;
  return {
    rating: item.rating || "",
    reason: item.reason || "",
    comment: item.comment || "",
    createdAt: item.createdAt || "",
  };
}

export async function adminRequests() {
  return readStore((store) => {
    const feedbackByRequest = latestFeedbackByRequest(store.feedback || []);
    return store.requests.slice(0, 300).map((item) => ({
      requestId: item.requestId,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      githubId: item.githubId,
      githubLogin: item.githubLogin,
      mode: item.mode,
      model: item.model,
      questionPreview: questionPreview(item).slice(0, 220),
      rawQuestionStored: Boolean(item.rawQuestionStored),
      questionHash: item.questionHash || "",
      answerPreview: item.answerText ? item.answerText.slice(0, 220) : answerPreview(item),
      rawAnswerStored: Boolean(item.rawAnswerStored),
      inputTokens: item.inputTokens || 0,
      outputTokens: item.outputTokens || 0,
      estimatedCostUsd: item.estimatedCostUsd || 0,
      latencyMs: item.latencyMs || 0,
      retrievalConfidence: item.retrievalConfidence || 0,
      status: item.status,
      errorCode: item.errorCode || "",
      sourceCount: (item.sourceIds || []).length,
      sourceTitles: item.sourceTitles || [],
      feedback: feedbackSummary(feedbackByRequest.get(item.requestId)),
    }));
  });
}

export async function adminRequestDetail(requestId) {
  return readStore((store) => {
    const item = (store.requests || []).find((row) => row.requestId === requestId);
    if (!item) return null;
    const feedbackHistory = (store.feedback || []).filter((row) => row.requestId === requestId);
    return {
      ...item,
      sourceDetails: sourceDetailsFor(item),
      feedback: feedbackSummary(feedbackHistory[0]),
      feedbackHistory: feedbackHistory.map(feedbackSummary),
    };
  });
}

export async function userHistory(user, limit = 20) {
  return readStore((store) => {
    return (store.requests || [])
      .filter((item) => item.githubId === user.githubId)
      .slice(0, limit)
      .map((item) => ({
        requestId: item.requestId,
        createdAt: item.createdAt,
        mode: item.mode,
        model: item.model,
        status: item.status,
        questionText: item.questionText || "",
        rawQuestionStored: Boolean(item.rawQuestionStored),
        questionHash: item.questionHash || "",
        answerPreview: item.answerText ? item.answerText.slice(0, 220) : answerPreview(item),
        rawAnswerStored: Boolean(item.rawAnswerStored),
        sourceTitles: item.sourceTitles || [],
      }));
  });
}

export async function adminCosts() {
  return readStore((store) => {
    const byModel = {};
    for (const item of store.requests) {
      if (item.status !== "success") continue;
      byModel[item.model] ||= { model: item.model, requests: 0, inputTokens: 0, outputTokens: 0, estimatedCostUsd: 0 };
      byModel[item.model].requests += 1;
      byModel[item.model].inputTokens += item.inputTokens || 0;
      byModel[item.model].outputTokens += item.outputTokens || 0;
      byModel[item.model].estimatedCostUsd += item.estimatedCostUsd || 0;
    }
    return Object.values(byModel).map((item) => ({
      ...item,
      estimatedCostUsd: Number(item.estimatedCostUsd.toFixed(6)),
    }));
  });
}

function questionPreview(item) {
  if (item.questionText) return item.questionText;
  return item.questionHash ? `[raw text not stored] ${item.questionHash.slice(0, 12)}` : "";
}

function answerPreview(item) {
  if (item.answerText) return item.answerText;
  return item.answerHash ? `[raw answer not stored] ${item.answerHash.slice(0, 12)}` : "";
}

function phraseKey(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^a-z0-9\u4e00-\u9fff\s-]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length >= 3 && !["what", "which", "about", "should", "could", "would", "please", "paper", "papers", "data", "model", "models", "reasoning", "training", "post", "llm", "large", "language"].includes(word))
    .slice(0, 8)
    .join(" ");
}

function contentTarget(text) {
  const value = String(text || "").toLowerCase();
  if (/prm|process reward|process supervision|step[- ]level|first[- ]error|math[- ]shepherd|prm800k/.test(value)) {
    return "papers/03_process_supervision_prm.md";
  }
  if (/contamination|leak|reward hacking|gaming|attack|failure|reproducib|audit/.test(value)) {
    return "papers/09_audit_failure_contamination_verifier_attacks.md";
  }
  if (/rlvr|test[- ]time|scaling|pass@k|sampling budget|verifier scaling|reuse|unique/.test(value)) {
    return "papers/08_scaling_test_time_compute_rlvr.md";
  }
  if (/agent|tool|browser|web|swe|environment|trajectory|terminal|desktop|mobile/.test(value)) {
    return "papers/04_environmental_agents_tools_web_swe.md";
  }
  if (/judge|rubric|medical|health|legal|financial|safety|factuality|grounding/.test(value)) {
    return "papers/05_judgment_required_rubrics_safety_domain.md";
  }
  if (/benchmark|evaluation|eval|live|rewardbench|math|code|proof/.test(value)) {
    return "papers/10_benchmarks_evaluation.md";
  }
  if (/recipe|construct|teacher|trace|filter|rejection|self[- ]play|lineage|release metadata/.test(value)) {
    return "papers/06_construction_recipes_open_reasoning_data.md";
  }
  if (/preference|rlhf|dpo|sft|instruction|rlaif|chain[- ]of[- ]thought|rationale/.test(value)) {
    return "papers/01_foundations_instruction_preference_alignment.md";
  }
  return "docs/glossary.md";
}

function rowsToMarkdown(rows, columns) {
  if (!rows.length) return "_No rows yet._";
  const header = `| ${columns.map((column) => column.label).join(" | ")} |`;
  const rule = `| ${columns.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${columns.map((column) => {
    const value = column.value(row);
    return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
  }).join(" | ")} |`);
  return [header, rule, ...body].join("\n");
}

function faqPrompt(question) {
  const target = contentTarget(question);
  return [
    `Question: ${question || "[raw text hidden]"}`,
    `Suggested target: ${target}`,
    "Repo action: add a short FAQ answer, then link to the most relevant paper map and card.",
  ].join("\n");
}

export async function adminGaps() {
  return readStore((store) => {
    const requests = store.requests || [];
    const feedback = store.feedback || [];
    const recent = requests.slice(0, 500);
    const lowConfidence = recent
      .filter((item) => item.status === "blocked" || item.errorCode === "low_retrieval_confidence" || (item.status === "success" && Number(item.retrievalConfidence || 0) < CONFIG.minRetrievalConfidence))
      .slice(0, 20)
      .map((item) => ({
        createdAt: item.createdAt,
        githubLogin: item.githubLogin,
        mode: item.mode,
        status: item.status,
        confidence: Number(item.retrievalConfidence || 0),
        question: questionPreview(item),
        target: contentTarget(questionPreview(item)),
        sources: item.sourceTitles || [],
      }));
    const outOfScope = recent
      .filter((item) => item.status === "out_of_scope")
      .slice(0, 20)
      .map((item) => ({
        createdAt: item.createdAt,
        githubLogin: item.githubLogin,
        question: questionPreview(item),
        target: contentTarget(questionPreview(item)),
      }));
    const feedbackByRequest = latestFeedbackByRequest(feedback);
    const downvoted = recent
      .filter((item) => ["down", "negative", "bad"].includes(String(feedbackByRequest.get(item.requestId)?.rating || "").toLowerCase()))
      .slice(0, 20)
      .map((item) => {
        const fb = feedbackByRequest.get(item.requestId);
        return {
          createdAt: item.createdAt,
          githubLogin: item.githubLogin,
          mode: item.mode,
          model: item.model,
          question: questionPreview(item),
          reason: fb?.reason || "",
          comment: fb?.comment || "",
          target: contentTarget(questionPreview(item)),
        };
      });
    const phrases = new Map();
    for (const item of recent) {
      const key = phraseKey(item.questionText);
      if (!key) continue;
      const row = phrases.get(key) || { phrase: key, count: 0, statuses: {}, modes: {}, examples: [], target: contentTarget(key) };
      row.count += 1;
      row.statuses[item.status] = (row.statuses[item.status] || 0) + 1;
      row.modes[item.mode] = (row.modes[item.mode] || 0) + 1;
      if (row.examples.length < 3) row.examples.push(questionPreview(item));
      phrases.set(key, row);
    }
    const recurringQuestions = [...phrases.values()]
      .filter((item) => item.count > 1)
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);
    const faqCandidates = [
      ...recurringQuestions.slice(0, 8).map((item) => ({
        title: item.phrase,
        signal: `${item.count} recurring asks`,
        target: item.target,
        prompt: faqPrompt(item.examples[0] || item.phrase),
      })),
      ...lowConfidence.slice(0, 5).map((item) => ({
        title: item.question.slice(0, 96),
        signal: `low confidence ${item.confidence}`,
        target: item.target,
        prompt: faqPrompt(item.question),
      })),
      ...downvoted.slice(0, 5).map((item) => ({
        title: item.question.slice(0, 96),
        signal: "downvoted answer",
        target: item.target,
        prompt: faqPrompt(item.question),
      })),
    ].slice(0, 12);
    const suggestedActions = [
      lowConfidence.length ? "Add docs or cards for low-confidence questions before they become user-visible confusion." : "",
      outOfScope.length ? "Review out-of-scope prompts; if many are actually relevant, widen the topic gate with repository-backed sources." : "",
      downvoted.length ? "Turn downvoted answers into prompt/RAG regression cases and patch the related paper cards." : "",
      recurringQuestions.length ? "Promote recurring question clusters into FAQ pages or track-level reading guides." : "",
      faqCandidates.length ? "Export this digest into a weekly repo-update issue and close the highest-repeat FAQ gaps first." : "",
    ].filter(Boolean);
    return {
      summary: {
        lowConfidence: lowConfidence.length,
        outOfScope: outOfScope.length,
        downvoted: downvoted.length,
        recurringQuestionClusters: recurringQuestions.length,
      },
      lowConfidence,
      outOfScope,
      downvoted,
      recurringQuestions,
      faqCandidates,
      suggestedActions,
    };
  });
}

export function renderGapsMarkdown(data, { generatedAt = new Date().toISOString() } = {}) {
  const summary = data.summary || {};
  const lines = [
    "# Ask the Atlas Knowledge Gaps Digest",
    "",
    `Generated: ${generatedAt}`,
    "",
    "## Summary",
    "",
    `- Low retrieval confidence: ${summary.lowConfidence || 0}`,
    `- Out of scope: ${summary.outOfScope || 0}`,
    `- Downvoted answers: ${summary.downvoted || 0}`,
    `- Recurring question clusters: ${summary.recurringQuestionClusters || 0}`,
    "",
    "## Suggested Repo Actions",
    "",
    ...(data.suggestedActions?.length ? data.suggestedActions.map((item) => `- [ ] ${item}`) : ["- [ ] No action signals yet."]),
    "",
    "## FAQ Candidates",
    "",
    rowsToMarkdown(data.faqCandidates || [], [
      { label: "Signal", value: (row) => row.signal },
      { label: "Candidate question", value: (row) => row.title },
      { label: "Suggested target", value: (row) => row.target },
    ]),
    "",
    "## Recurring Question Clusters",
    "",
    rowsToMarkdown(data.recurringQuestions || [], [
      { label: "Cluster", value: (row) => row.phrase },
      { label: "Count", value: (row) => row.count },
      { label: "Suggested target", value: (row) => row.target },
      { label: "Examples", value: (row) => (row.examples || []).join(" / ") },
    ]),
    "",
    "## Low Retrieval Confidence",
    "",
    rowsToMarkdown(data.lowConfidence || [], [
      { label: "Time", value: (row) => row.createdAt },
      { label: "User", value: (row) => row.githubLogin },
      { label: "Confidence", value: (row) => row.confidence },
      { label: "Suggested target", value: (row) => row.target },
      { label: "Question", value: (row) => row.question },
    ]),
    "",
    "## Downvoted Answers",
    "",
    rowsToMarkdown(data.downvoted || [], [
      { label: "Time", value: (row) => row.createdAt },
      { label: "User", value: (row) => row.githubLogin },
      { label: "Reason", value: (row) => row.reason || row.comment },
      { label: "Suggested target", value: (row) => row.target },
      { label: "Question", value: (row) => row.question },
    ]),
    "",
    "## Out-of-Scope Review",
    "",
    rowsToMarkdown(data.outOfScope || [], [
      { label: "Time", value: (row) => row.createdAt },
      { label: "User", value: (row) => row.githubLogin },
      { label: "Suggested target", value: (row) => row.target },
      { label: "Question", value: (row) => row.question },
    ]),
  ];
  return `${lines.join("\n")}\n`;
}

export async function adminGapsExport() {
  const data = await adminGaps();
  const generatedAt = new Date().toISOString();
  const markdown = renderGapsMarkdown(data, { generatedAt });
  return {
    generatedAt,
    issueTitle: `Ask the Atlas knowledge gaps - ${generatedAt.slice(0, 10)}`,
    issueBody: markdown,
    markdown,
    faqCandidates: data.faqCandidates || [],
  };
}

export async function updateUserAdmin({ githubId, action, admin = null }) {
  const allowedActions = new Set(["ban", "unban", "allowlist", "admin", "reset_bonus_used"]);
  if (!allowedActions.has(action)) {
    const error = new Error("Unknown admin user action.");
    error.status = 400;
    throw error;
  }
  return mutateStore((store) => {
    const user = store.users[String(githubId)];
    if (!user) return null;
    if (action === "ban") user.role = "banned";
    if (action === "unban") user.role = "user";
    if (action === "allowlist") user.role = "allowlisted";
    if (action === "admin") user.role = "admin";
    if (action === "reset_bonus_used") {
      const spent = creditSpent(store, user.githubId);
      user.bonusCreditsUsed = 0;
      if (spent > 0) {
        store.creditLedger ||= [];
        store.creditLedger.unshift({
          id: randomId(12),
          githubId: user.githubId,
          githubLogin: user.login,
          creditType: "reset",
          delta: spent,
          reason: "admin reset bonus usage",
          relatedRepo: CONFIG.repoOwner && CONFIG.repoName ? `${CONFIG.repoOwner}/${CONFIG.repoName}` : "",
          requestId: "",
          createdByGithubId: admin?.githubId || "",
          createdAt: new Date().toISOString(),
        });
      }
    }
    user.updatedAt = new Date().toISOString();
    return user;
  });
}
