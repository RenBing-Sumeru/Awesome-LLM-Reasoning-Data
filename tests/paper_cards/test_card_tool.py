from __future__ import annotations

import json
import tempfile
import unittest
import zipfile
from pathlib import Path

from tools.paper_cards import card_tool


class CardToolTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        (self.root / "data").mkdir()
        (self.root / "paper_cards" / "sources").mkdir(parents=True)
        (self.root / "paper_cards" / "packages").mkdir(parents=True)
        (self.root / "data" / "categories.yaml").write_text(
            """
paper_categories:
- id: programmatically_verifiable_outcome_data
  title: Programmatic Verification
  summary: Machine-checkable outcomes.
""".strip()
            + "\n",
            encoding="utf-8",
        )
        (self.root / "data" / "papers.yaml").write_text(
            """
- id: sample-paper
  title: Sample Paper
  year: 2025
  venue: arXiv
  authors:
  - Ada Author
  status: verified
  curation_level: L3_summary_ready
  artifacts:
    paper: https://arxiv.org/abs/2501.00001
    code: https://github.com/example/sample
    data: null
    project: null
    huggingface: null
    doi: null
""".strip()
            + "\n",
            encoding="utf-8",
        )
        self.source_dir = self.root / "paper_cards" / "sources" / "sample-paper"
        self.source_dir.mkdir(parents=True)

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def write_complete_sections(self) -> None:
        for key, _title in card_tool.SECTIONS:
            (self.source_dir / f"{key}.md").write_text(f"English {key}\n", encoding="utf-8")
            (self.source_dir / f"{key}_ch.md").write_text(f"中文 {key}\n", encoding="utf-8")

    def make_review_ready(self) -> None:
        self.write_complete_sections()
        card_tool.save_header_zh(
            "sample-paper",
            {
                "one_line_summary_ch": "中文一句话评价。",
                "reading_priority_ch": "必读",
                "paper_type_ch": "验证器论文",
                "best_for_ch": "适合 reviewer。",
                "confidence_ch": "高",
                "authors_ch": "Ada Author",
                "category_ids": ["programmatically_verifiable_outcome_data"],
            },
            root=self.root,
        )
        card_tool.save_institutions("sample-paper", ["Example Lab"], root=self.root)
        card_tool.save_search_queue(
            {
                "schema_version": 1,
                "updated_at": "2026-07-10T00:00:00Z",
                "entries": {
                    "sample-paper": {
                        "search_status": "promoted",
                        "decision_reason": "人工确认有用。",
                    }
                },
            },
            root=self.root,
        )

    def test_expected_files_requires_english_and_chinese_sections(self) -> None:
        expected = [path.name for path in card_tool.expected_files("sample-paper", root=self.root)]

        self.assertEqual(len(expected), 18)
        self.assertIn("01_problem.md", expected)
        self.assertIn("01_problem_ch.md", expected)
        self.assertIn("09_citation.md", expected)
        self.assertIn("09_citation_ch.md", expected)

    def test_check_card_reports_missing_files(self) -> None:
        errors = card_tool.check_card("sample-paper", root=self.root)

        self.assertTrue(any("01_problem.md" in error for error in errors))
        self.assertTrue(any("09_citation_ch.md" in error for error in errors))

    def test_init_card_source_uses_rich_l4_collection_templates(self) -> None:
        card_tool.init_card_source("sample-paper", root=self.root)

        problem = (self.source_dir / "01_problem.md").read_text(encoding="utf-8")
        core_idea = (self.source_dir / "02_core_idea.md").read_text(encoding="utf-8")
        method = (self.source_dir / "03_method.md").read_text(encoding="utf-8")
        novelty = (self.source_dir / "05_novelty.md").read_text(encoding="utf-8")
        problem_ch = (self.source_dir / "01_problem_ch.md").read_text(encoding="utf-8")

        self.assertIn("Decision boundary", problem)
        self.assertIn("Primary source", problem)
        self.assertIn("Data object / evaluation surface", core_idea)
        self.assertIn("Feedback contract", core_idea)
        self.assertIn("Artifacts to verify", method)
        self.assertIn("Training/evaluation use", method)
        self.assertIn("Why this is a 2026 direction signal", novelty)
        self.assertIn("Prior work baseline", novelty)
        self.assertIn("决策边界", problem_ch)
        self.assertNotIn("needs review", problem)

    def test_assemble_card_uses_metadata_and_sections(self) -> None:
        self.write_complete_sections()
        entry = card_tool.load_entries(root=self.root)["sample-paper"]

        english = card_tool.assemble_card(entry, "en", root=self.root)
        chinese = card_tool.assemble_card(entry, "ch", root=self.root)

        self.assertIn("# Paper Card: Sample Paper", english)
        self.assertIn("**Links:** [Paper](https://arxiv.org/abs/2501.00001)", english)
        self.assertIn("## 1. Problem: What question is this paper trying to answer?", english)
        self.assertIn("English 01_problem", english)
        self.assertNotIn("Ask the Atlas", english)
        self.assertIn("# 论文卡片：Sample Paper", chinese)
        self.assertIn("## 1. 问题：这篇论文想回答什么问题？", chinese)
        self.assertIn("中文 01_problem", chinese)

    def test_write_package_contains_four_review_files_per_entry(self) -> None:
        self.make_review_ready()
        card_tool.update_status("sample-paper", "reviewed", root=self.root)

        package = card_tool.write_package(["sample-paper"], root=self.root)

        self.assertTrue(package.exists())
        with zipfile.ZipFile(package) as archive:
            names = set(archive.namelist())
            self.assertEqual(names, {
                "cards/sample-paper_en.md",
                "cards/sample-paper_ch.md",
                "annotations/sample-paper_zh_extra_fields.md",
                "annotations/sample-paper_human_annotation.md",
            })
            extra = archive.read("annotations/sample-paper_zh_extra_fields.md").decode("utf-8")
            annotation = archive.read("annotations/sample-paper_human_annotation.md").decode("utf-8")
        self.assertIn("中文一句话评价。", extra)
        self.assertIn("阅读优先级：必读", extra)
        self.assertIn("当前英文备注字段", extra)
        self.assertIn("人工确认有用。", annotation)
        self.assertFalse((self.root / "paper_cards" / "generated").exists())
        self.assertFalse((self.root / "review").exists())

    def test_write_package_accepts_l5_review_ready(self) -> None:
        self.make_review_ready()

        package = card_tool.write_package(["sample-paper"], root=self.root)

        self.assertTrue(package.exists())
        with zipfile.ZipFile(package) as archive:
            self.assertIn("cards/sample-paper_ch.md", archive.namelist())

    def test_write_package_rejects_entries_below_l5(self) -> None:
        self.write_complete_sections()

        with self.assertRaisesRegex(ValueError, "only L5 or L6 cards can be packaged"):
            card_tool.write_package(["sample-paper"], root=self.root)

    def test_write_package_does_not_mark_packaged(self) -> None:
        self.make_review_ready()
        card_tool.update_status("sample-paper", "reviewed", root=self.root)

        card_tool.write_package(["sample-paper"], root=self.root)

        status = card_tool.load_status(root=self.root)["entries"]["sample-paper"]
        self.assertEqual(status["state"], "reviewed")
        self.assertNotIn("packaged_at", status)

    def test_update_status_records_downloaded_package(self) -> None:
        payload = card_tool.update_status(
            "sample-paper",
            "downloaded",
            package_name="paper-card-package.zip",
            root=self.root,
        )

        record = payload["entries"]["sample-paper"]
        self.assertEqual(record["state"], "downloaded")
        self.assertEqual(record["last_package"], "paper-card-package.zip")
        self.assertIn("downloaded_at", record)

    def test_update_status_clears_download_marker_when_edited(self) -> None:
        card_tool.update_status("sample-paper", "reviewed", root=self.root)
        card_tool.update_status(
            "sample-paper",
            "downloaded",
            package_name="paper-card-package.zip",
            root=self.root,
        )

        payload = card_tool.update_status("sample-paper", "edited", root=self.root)

        record = payload["entries"]["sample-paper"]
        self.assertEqual(record["state"], "edited")
        self.assertNotIn("downloaded_at", record)
        self.assertNotIn("reviewed_at", record)

    def test_load_status_hides_stale_download_marker_for_modified_states(self) -> None:
        status_path = self.root / "paper_cards" / "status.json"
        status_path.write_text(
            json.dumps({
                "schema_version": 1,
                "updated_at": "2026-07-10T00:00:00Z",
                "entries": {
                    "sample-paper": {
                        "state": "new",
                        "updated_at": "2026-07-10T00:00:00Z",
                        "downloaded_at": "2026-07-10T00:00:00Z",
                    }
                },
            }),
            encoding="utf-8",
        )

        payload = card_tool.load_status(root=self.root)

        self.assertNotIn("downloaded_at", payload["entries"]["sample-paper"])

    def test_save_institutions_and_assemble_card_show_institution_line(self) -> None:
        self.write_complete_sections()
        card_tool.save_institutions(
            "sample-paper",
            ["MIT", "Stanford", "", "UW"],
            has_more=True,
            no_institution=False,
            root=self.root,
        )
        entry = card_tool.load_entries(root=self.root)["sample-paper"]

        chinese = card_tool.assemble_card(entry, "ch", root=self.root)

        self.assertIn("> **机构：** MIT · Stanford · UW · 等多个机构", chinese)
        self.assertNotIn("Ask the Atlas", chinese)

    def test_save_institutions_can_mark_no_institution(self) -> None:
        self.write_complete_sections()
        card_tool.save_institutions(
            "sample-paper",
            ["Ignored Lab"],
            has_more=True,
            no_institution=True,
            root=self.root,
        )
        entry = card_tool.load_entries(root=self.root)["sample-paper"]

        chinese = card_tool.assemble_card(entry, "ch", root=self.root)

        self.assertIn("> **机构：** 没有机构", chinese)

    def test_save_header_zh_overrides_chinese_frontmatter(self) -> None:
        self.write_complete_sections()
        (self.root / "data" / "categories.yaml").write_text(
            """
paper_categories:
- id: programmatically_verifiable_outcome_data
  title: Programmatically Verifiable Outcome Data
  summary: Math answers and verifier robustness.
""".strip()
            + "\n",
            encoding="utf-8",
        )
        card_tool.save_header_zh(
            "sample-paper",
            {
                "one_line_summary_ch": "中文一句话评价。",
                "reading_priority_ch": "必读",
                "paper_type_ch": "验证器修正论文",
                "best_for_ch": "适合做 RLVR verifier 复盘的人",
                "confidence_ch": "高",
                "authors_ch": "张三，李四",
                "category_ids": ["programmatically_verifiable_outcome_data"],
            },
            root=self.root,
        )
        entry = card_tool.load_entries(root=self.root)["sample-paper"]

        chinese = card_tool.assemble_card(entry, "ch", root=self.root)

        self.assertIn("> **一句话评价：** 中文一句话评价。", chinese)
        self.assertIn("> **阅读优先级：** 必读", chinese)
        self.assertIn("> **论文类型：** 验证器修正论文", chinese)
        self.assertIn("> **适合读者：** 适合做 RLVR verifier 复盘的人", chinese)
        self.assertIn("> **置信度：** 高", chinese)
        self.assertIn("> **作者：** 张三，李四", chinese)
        self.assertIn("> **知识点分类：** Programmatically Verifiable Outcome Data", chinese)

    def test_category_options_use_project_categories(self) -> None:
        (self.root / "data" / "categories.yaml").write_text(
            """
paper_categories:
- id: programmatically_verifiable_outcome_data
  title: Programmatically Verifiable Outcome Data
  summary: Math answers and verifier robustness.
""".strip()
            + "\n",
            encoding="utf-8",
        )

        options = card_tool.category_options(root=self.root)

        self.assertEqual(options[0]["id"], "programmatically_verifiable_outcome_data")
        self.assertEqual(options[0]["title"], "Programmatically Verifiable Outcome Data")

    def test_assembled_cards_do_not_include_removed_assistant_links(self) -> None:
        self.write_complete_sections()
        entry = card_tool.load_entries(root=self.root)["sample-paper"]

        card = card_tool.assemble_card(entry, "ch", root=self.root)

        self.assertNotIn("Ask the Atlas", card)
        self.assertNotIn("/ask/", card)

    def test_clean_category_ids_accepts_any_known_taxonomy_category(self) -> None:
        (self.root / "data" / "categories.yaml").write_text(
            """
paper_categories:
- id: benchmarks_evaluation_surfaces
  title: Benchmarks
  summary: Evaluation surfaces.
""".strip()
            + "\n",
            encoding="utf-8",
        )

        category_ids = card_tool.clean_category_ids(
            ["benchmarks_evaluation_surfaces"],
            root=self.root,
        )

        self.assertEqual(category_ids, ["benchmarks_evaluation_surfaces"])

    def test_header_zh_record_defaults_reading_priority(self) -> None:
        record = card_tool.header_zh_record("sample-paper", root=self.root)

        self.assertEqual(record["reading_priority_ch"], "可读")

    def test_init_card_source_writes_default_reading_priority(self) -> None:
        card_tool.init_card_source("sample-paper", root=self.root, overwrite=True)

        payload = json.loads((self.root / "paper_cards" / "header_zh.json").read_text(encoding="utf-8"))

        self.assertEqual(payload["entries"]["sample-paper"]["reading_priority_ch"], "可读")

    def test_valid_report_promotes_l5_review_ready_from_text_presence_only(self) -> None:
        self.make_review_ready()
        (self.source_dir / "08_reading_notes_ch.md").write_text("- 只有一条中文笔记也算有文本。\n", encoding="utf-8")

        report = card_tool.valid_report("sample-paper", root=self.root)

        self.assertFalse(report["ok"])
        self.assertTrue(report["review_ready"])
        self.assertEqual(report["level"], "L5_review_ready")
        self.assertEqual(report["pool"], "annotated")
        self.assertEqual(report["errors"], [])

    def test_valid_report_promotes_l6_after_reviewed_status(self) -> None:
        self.make_review_ready()
        card_tool.update_status("sample-paper", "reviewed", root=self.root)

        report = card_tool.valid_report("sample-paper", root=self.root)

        self.assertTrue(report["ok"])
        self.assertTrue(report["review_ready"])
        self.assertEqual(report["level"], "L6_reviewed")
        self.assertEqual(report["pool"], "l6")

    def test_write_package_does_not_persist_generated_review_files(self) -> None:
        self.make_review_ready()

        card_tool.write_package(["sample-paper"], root=self.root)

        self.assertFalse((self.root / "paper_cards" / "generated").exists())

    def test_valid_report_lists_missing_l5_text_fields(self) -> None:
        self.write_complete_sections()

        report = card_tool.valid_report("sample-paper", root=self.root)

        self.assertFalse(report["ok"])
        self.assertEqual(report["pool"], "needs_annotation")
        self.assertIn("缺少中文头字段：一句话评价", report["errors"])
        self.assertIn("缺少机构字段：填写至少一个机构，或勾选没有机构", report["errors"])
        self.assertIn("缺少人工标注：一句话描述理由", report["errors"])

    def test_valid_report_puts_missing_source_in_invalid_pool(self) -> None:
        self.source_dir.rmdir()

        report = card_tool.valid_report("sample-paper", root=self.root)

        self.assertFalse(report["ok"])
        self.assertEqual(report["pool"], "invalid")
        expected = f"缺少卡片源目录：{self.source_dir.relative_to(self.root).as_posix()}"
        self.assertIn(expected, report["blocking_errors"])

    def test_valid_report_rejects_freeform_reading_priority(self) -> None:
        self.write_complete_sections()
        card_tool.save_header_zh(
            "sample-paper",
            {
                "one_line_summary_ch": "中文一句话评价。",
                "reading_priority_ch": "特别花哨的自定义优先级",
                "paper_type_ch": "验证器论文",
                "best_for_ch": "适合 reviewer。",
                "confidence_ch": "高",
                "authors_ch": "Ada Author",
                "category_ids": ["programmatically_verifiable_outcome_data"],
            },
            root=self.root,
        )
        card_tool.save_institutions("sample-paper", ["Example Lab"], root=self.root)
        card_tool.save_search_queue(
            {
                "schema_version": 1,
                "updated_at": "2026-07-10T00:00:00Z",
                "entries": {
                    "sample-paper": {
                        "search_status": "promoted",
                        "decision_reason": "人工确认有用。",
                    }
                },
            },
            root=self.root,
        )

        report = card_tool.valid_report("sample-paper", root=self.root)

        self.assertFalse(report["ok"])
        self.assertEqual(report["pool"], "needs_annotation")
        self.assertIn("阅读优先级只能选择：必读、可读、暂缓、不推荐", report["errors"])


if __name__ == "__main__":
    unittest.main()
