import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  CURATION_LEVELS,
  canPersistLevelChange,
  createAnnotationRecord,
  filterEntries,
  lowLevelReviewHint,
  mergeAnnotations,
  nextUnannotatedEntryId,
  projectSourceLinks,
  renderEntryCard,
  reviewPacks,
  reviewLabels,
  saveButtonText,
  sortByProjectGeneratedOrder,
} from "./review.js";

test("defines the six curation levels in review order with Chinese review labels", () => {
  assert.deepEqual(Object.keys(CURATION_LEVELS), [
    "L0_seeded",
    "L1_link_verified",
    "L2_artifact_verified",
    "L3_summary_ready",
    "L4_carded",
    "L5_audit_ready",
  ]);
  assert.equal(CURATION_LEVELS.L0_seeded.title, "L0 线索种子");
  assert.match(CURATION_LEVELS.L5_audit_ready.reviewFocus, /复用/);
});

test("requires a non-empty human annotation but has no length limit", () => {
  const entry = { id: "paper-1", title: "Useful Paper", curation_level: "L3_summary_ready" };
  assert.throws(() => createAnnotationRecord(entry, { note: "", decision: "useful" }), /批注不能为空/);

  const record = createAnnotationRecord(entry, {
    note: "有用",
    decision: "representative",
    reviewer: "reviewer-a",
    targetLevel: "L4_carded",
    quote: "原始卡片中的一句话",
  });
  assert.equal(record.entry_id, "paper-1");
  assert.equal(record.title, "Useful Paper");
  assert.equal(record.decision, "representative");
  assert.equal(record.current_level, "L3_summary_ready");
  assert.equal(record.target_level, "L4_carded");
  assert.equal(Object.hasOwn(record, "reviewer"), false);
  assert.equal(Object.hasOwn(record, "quote"), false);
  assert.match(record.created_at, /^\d{4}-\d{2}-\d{2}T/);
});

test("allows writing L5 only when a human review note is present", () => {
  assert.equal(canPersistLevelChange("L4_carded", "L5_audit_ready", ""), false);
  assert.equal(canPersistLevelChange("L4_carded", "L5_audit_ready", "已复核卡片风险，可以 L5"), true);
  assert.equal(canPersistLevelChange("L3_summary_ready", "L4_carded", ""), true);
});

test("merges annotations by entry id without dropping previous records", () => {
  const previous = {
    schema_version: 1,
    annotations: {
      "paper-1": [{ note: "old", created_at: "2026-01-01T00:00:00.000Z" }],
    },
  };
  const merged = mergeAnnotations(previous, {
    entry_id: "paper-1",
    note: "new",
    created_at: "2026-01-02T00:00:00.000Z",
  });
  assert.equal(merged.annotations["paper-1"].length, 2);
  assert.equal(merged.annotations["paper-1"][1].note, "new");
});

test("filters entries by project-generated path, level, query, and annotation state", () => {
  const entries = [
    { id: "a", title: "Alpha Paper", curation_level: "L3_summary_ready", status: "verified" },
    { id: "b", title: "Beta Paper", curation_level: "L1_link_verified", status: "needs_metadata" },
  ];
  const packs = [
    { id: "builder_30", entries: [{ entry_id: "a" }, { entry_id: "missing" }] },
  ];
  const annotations = { annotations: { a: [{ note: "done" }] } };

  assert.deepEqual(
    filterEntries(entries, packs, annotations, {
      packId: "builder_30",
      level: "L3_summary_ready",
      query: "alpha",
      annotationState: "annotated",
    }).map((entry) => entry.id),
    ["a"],
  );
  assert.deepEqual(
    filterEntries(entries, packs, annotations, { annotationState: "unannotated" }).map((entry) => entry.id),
    ["b"],
  );
});

test("uses project-generated reading paths without filtering by id", () => {
  const packs = [
    { id: "beginner_20", title: "Beginner 20", entries: [] },
    { id: "builder_30", title: "Builder 30", entries: [] },
  ];
  assert.deepEqual(reviewPacks(packs).map((pack) => pack.id), ["beginner_20", "builder_30"]);
});

test("sorts review entries by project card generation order descending", () => {
  const entries = [
    { id: "uncarded-first", title: "Uncarded First" },
    { id: "card-a", title: "Card A", artifacts: { card: "cards/a.md" } },
    { id: "card-b", title: "Card B", artifacts: { card: "cards/b.md" } },
    { id: "uncarded-last", title: "Uncarded Last" },
  ];
  const cards = [
    { entry_id: "card-a", path: "cards/a.md" },
    { entry_id: "card-b", path: "cards/b.md" },
  ];
  assert.deepEqual(sortByProjectGeneratedOrder(entries, cards).map((entry) => entry.id), [
    "card-b",
    "card-a",
    "uncarded-last",
    "uncarded-first",
  ]);
});

test("exposes Chinese UI labels", () => {
  assert.equal(reviewLabels.rawToggle, "显示项目原始字段");
  assert.equal(reviewLabels.annotationToggle, "显示人工注解");
});

test("renders manual review form without reviewer or quote fields", () => {
  const html = renderEntryCard({
    id: "paper-1",
    title: "Useful Paper",
    curation_level: "L3_summary_ready",
    artifacts: {},
  }, { annotations: {} }, false, true);
  assert.match(html, /中文批注/);
  assert.doesNotMatch(html, /审阅人/);
  assert.doesNotMatch(html, /名字或缩写/);
  assert.doesNotMatch(html, /原文匹配 \/ 引用/);
  assert.doesNotMatch(html, /quote-selection/);
});

test("shows low-level review hints only as small reference text", () => {
  assert.match(lowLevelReviewHint("L0_seeded"), /先补官方链接/);
  assert.match(lowLevelReviewHint("L1_link_verified"), /补齐数据对象/);
  assert.match(lowLevelReviewHint("L2_artifact_verified"), /确认产物/);
  assert.equal(lowLevelReviewHint("L3_summary_ready"), "");

  const html = renderEntryCard({
    id: "paper-2",
    title: "Seed Paper",
    curation_level: "L1_link_verified",
    artifacts: {},
  }, { annotations: {} }, false, false);
  assert.match(html, /class="low-level-hint"/);
  assert.match(html, /仅供参考/);
});

test("builds source links for reading the original paper and card", () => {
  const entry = {
    primary_link: "https://arxiv.org/abs/1234.56789",
    artifacts: { card: "cards/math/example.md", code: "https://github.com/example/code" },
  };
  assert.deepEqual(projectSourceLinks(entry).map((link) => link.label), ["读论文原文", "读项目卡片", "代码"]);
  assert.equal(projectSourceLinks(entry)[1].href, "../cards/math/example.md");
});

test("keeps the level guide available but collapsed by default", () => {
  const html = fs.readFileSync(new URL("./index.html", import.meta.url), "utf8");
  assert.match(html, /<details class="level-section"/);
  assert.match(html, /<summary class="section-head"/);
  assert.doesNotMatch(html, /<details class="level-section" open/);
});

test("prioritizes useful and audit text before secondary card fields", () => {
  const html = renderEntryCard({
    id: "paper-3",
    title: "Focused Paper",
    curation_level: "L4_carded",
    why_it_matters: "这是优先判断是否有用的文字。",
    audit_focus: "这是优先判断风险的文字。",
    data_object: "二级字段",
    feedback_verifier: "二级字段",
    artifacts: {},
  }, { annotations: {} }, false, true);
  assert.match(html, /\breview-priority\b/);
  assert.ok(html.indexOf("为什么有用") < html.indexOf("数据对象"));
  assert.ok(html.indexOf("审计风险") < html.indexOf("验证 / 奖励"));
});

test("exposes explicit save button labels for idle and saving states", () => {
  assert.equal(saveButtonText(false), "保存批注并写回等级");
  assert.equal(saveButtonText(true), "保存中...");
});

test("selects the next unannotated entry after saving the current one", () => {
  const entries = [
    { id: "first", curation_level: "L3_summary_ready" },
    { id: "second", curation_level: "L3_summary_ready" },
    { id: "third", curation_level: "L3_summary_ready" },
  ];
  const annotations = {
    annotations: {
      second: [{ note: "done" }],
    },
  };
  assert.equal(nextUnannotatedEntryId(entries, [], annotations, {}, [], "second"), "first");
  assert.equal(nextUnannotatedEntryId(entries, [], annotations, {}, [], "first"), "third");
});
