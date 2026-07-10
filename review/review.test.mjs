import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  CURATION_LEVELS,
  canPersistLevelChange,
  createAnnotationRecord,
  createInstitutionRecord,
  createLocalizationRecord,
  filterEntries,
  institutionSummary,
  lowLevelReviewHint,
  mergeAnnotations,
  mergeInstitutions,
  mergeLocalizations,
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

test("keeps only one annotation per entry by replacing the previous record", () => {
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
  assert.equal(merged.annotations["paper-1"].length, 1);
  assert.equal(merged.annotations["paper-1"][0].note, "new");
});

test("creates and replaces one localization record per entry while allowing empty Chinese fields", () => {
  const entry = { id: "paper-zh", title: "Paper ZH" };
  const record = createLocalizationRecord(entry, {
    one_line_summary: "",
    why_it_matters: "中文价值",
    data_object: "",
  }, new Date("2026-01-02T00:00:00.000Z"));

  assert.equal(record.entry_id, "paper-zh");
  assert.equal(record.title, "Paper ZH");
  assert.equal(record.one_line_summary, "");
  assert.equal(record.why_it_matters, "中文价值");
  assert.equal(record.data_object, "");

  const merged = mergeLocalizations({
    schema_version: 1,
    entries: {
      "paper-zh": { entry_id: "paper-zh", why_it_matters: "旧中文" },
    },
  }, record);
  assert.equal(Object.keys(merged.entries).length, 1);
  assert.equal(merged.entries["paper-zh"].why_it_matters, "中文价值");
});

test("creates and replaces one institution record per entry with five boxes and a many flag", () => {
  const entry = { id: "paper-inst", title: "Institution Paper" };
  const record = createInstitutionRecord(entry, {
    institution_0: "UW",
    institution_1: "",
    institution_2: "MIT",
    institution_3: "",
    institution_4: "",
    has_more_institutions: "on",
  }, new Date("2026-01-03T00:00:00.000Z"));

  assert.deepEqual(record.institutions, ["UW", "", "MIT", "", ""]);
  assert.equal(record.has_more, true);
  assert.deepEqual(institutionSummary(record), { names: ["UW", "MIT"], hasMore: true });

  const merged = mergeInstitutions({
    schema_version: 1,
    entries: {
      "paper-inst": { entry_id: "paper-inst", institutions: ["Old"], has_more: false },
    },
  }, record);
  assert.deepEqual(merged.entries["paper-inst"].institutions, ["UW", "", "MIT", "", ""]);
  assert.equal(merged.entries["paper-inst"].has_more, true);
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

test("renders Chinese field editor and institution editor from local review data", () => {
  const html = renderEntryCard({
    id: "paper-ui",
    title: "UI Paper",
    curation_level: "L3_summary_ready",
    one_line_summary: "English summary",
    why_it_matters: "English value",
    artifacts: {},
  }, {
    annotations: {},
    localizations: {
      entries: {
        "paper-ui": {
          entry_id: "paper-ui",
          one_line_summary: "中文摘要",
          why_it_matters: "中文价值",
        },
      },
    },
    institutions: {
      entries: {
        "paper-ui": {
          entry_id: "paper-ui",
          institutions: ["UW", "", "MIT", "", ""],
          has_more: true,
        },
      },
    },
  }, false, true);

  assert.match(html, /机构一览/);
  assert.match(html, /UW/);
  assert.match(html, /MIT/);
  assert.match(html, /多个机构/);
  assert.match(html, /name="institution_4"/);
  assert.match(html, /中文字段/);
  assert.match(html, /原始字段/);
  assert.match(html, /name="one_line_summary"/);
  assert.match(html, /中文摘要/);
  assert.match(html, /保存中文字段/);
  assert.match(html, /保存机构/);
});

test("renders only the latest annotation when legacy data has multiple records", () => {
  const html = renderEntryCard({
    id: "paper-legacy",
    title: "Legacy Paper",
    curation_level: "L3_summary_ready",
    artifacts: {},
  }, {
    annotations: {
      "paper-legacy": [
        { note: "旧批注", current_level: "L3_summary_ready", target_level: "L3_summary_ready", created_at: "2026-01-01T00:00:00.000Z" },
        { note: "最新批注", current_level: "L3_summary_ready", target_level: "L4_carded", created_at: "2026-01-02T00:00:00.000Z" },
      ],
    },
  }, false, true);
  assert.match(html, /最新批注/);
  assert.doesNotMatch(html, /旧批注/);
  assert.doesNotMatch(html, /annotation-history/);
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
