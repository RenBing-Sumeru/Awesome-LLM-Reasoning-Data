from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from tools.paper_cards import card_tool, library


class CardToolTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        library_root = self.root / "paper_cards" / "library"
        (library_root / "cards").mkdir(parents=True)
        (library_root / "categories.yaml").write_text(
            "paper_categories:\n"
            "- id: programmatically_verifiable_outcome_data\n"
            "  title: Programmatic Verification\n"
            "- id: scaling_rlvr_test_time_compute\n"
            "  title: Scaling and RLVR\n",
            encoding="utf-8",
        )
        self.card = self.add_card("sample-paper")

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def add_card(self, entry_id: str) -> Path:
        card = self.root / "paper_cards" / "library" / "cards" / entry_id
        sources = card / "sources"
        sources.mkdir(parents=True)
        (card / "paper.yaml").write_text(
            f"id: {entry_id}\n"
            "title: Sample Paper\n"
            "year: 2026\n"
            "venue: arXiv\n"
            "authors:\n- Ada Author\n"
            "status: verified\n"
            "artifacts:\n  paper: https://arxiv.org/abs/2601.00001\n"
            "category_ids:\n- programmatically_verifiable_outcome_data\n",
            encoding="utf-8",
        )
        library.save_card_record(
            entry_id,
            "header_zh",
            {
                "one_line_summary_ch": "中文一句话评价。",
                "reading_priority_ch": "必读",
                "paper_type_ch": "验证器论文",
                "best_for_ch": "适合 reviewer。",
                "confidence_ch": "高",
                "authors_ch": "Ada Author",
                "category_ids": ["programmatically_verifiable_outcome_data"],
            },
            self.root,
        )
        library.save_card_record(entry_id, "institutions", {"institutions": ["Example Lab"], "has_more": False, "no_institution": False}, self.root)
        library.save_card_record(entry_id, "queue", {"category_ids": ["programmatically_verifiable_outcome_data"]}, self.root)
        library.save_card_record(entry_id, "review", {"state": "new"}, self.root)
        for key, _title in card_tool.SECTIONS:
            (sources / f"{key}.md").write_text(f"English {key}\n", encoding="utf-8")
            (sources / f"{key}_ch.md").write_text(f"中文 {key}\n", encoding="utf-8")
        return card

    def test_card_local_source_files_are_complete_and_checked(self) -> None:
        expected = card_tool.expected_files("sample-paper", root=self.root)

        self.assertEqual(len(expected), 18)
        self.assertEqual(card_tool.check_card("sample-paper", root=self.root), [])
        self.assertEqual(card_tool.check_all(root=self.root), {"sample-paper": []})

    def test_missing_card_local_source_is_reported(self) -> None:
        (self.card / "sources" / "01_problem.md").unlink()

        errors = card_tool.check_card("sample-paper", root=self.root)

        self.assertTrue(any("01_problem.md" in error for error in errors))
        self.assertTrue(any("library/cards/sample-paper" in error for error in errors))

    def test_card_local_header_and_institution_edits_assemble_into_frontmatter(self) -> None:
        card_tool.save_header_zh(
            "sample-paper",
            {
                "one_line_summary_ch": "更新后的中文评价。",
                "reading_priority_ch": "可读",
                "paper_type_ch": "形式化验证论文",
                "best_for_ch": "维护者。",
                "confidence_ch": "中",
                "authors_ch": "Ada Author",
                "category_ids": ["programmatically_verifiable_outcome_data"],
            },
            root=self.root,
        )
        card_tool.save_institutions("sample-paper", ["Example Lab", "Second Lab"], has_more=True, root=self.root)

        entry = card_tool.load_entries(self.root)["sample-paper"]
        card = card_tool.assemble_card(entry, "ch", root=self.root)

        self.assertIn("更新后的中文评价。", card)
        self.assertIn("Example Lab · Second Lab · 等多个机构", card)
        self.assertFalse((self.root / "paper_cards" / "header_zh.json").exists())

    def test_manual_annotation_controls_l5_and_review_status_controls_l6(self) -> None:
        entry = card_tool.load_entries(self.root)["sample-paper"]
        self.assertEqual(card_tool.valid_report("sample-paper", root=self.root, entry=entry)["level"], "L4_chinese_review_ready")

        library.save_card_record(
            "sample-paper",
            "queue",
            {
                "category_ids": ["programmatically_verifiable_outcome_data"],
                "manual_annotation": {"search_status": "promoted", "decision_reason": "人工确认有用。"},
            },
            self.root,
        )
        self.assertEqual(card_tool.valid_report("sample-paper", root=self.root, entry=entry)["level"], "L5_review_ready")

        card_tool.update_status("sample-paper", "reviewed", root=self.root)
        self.assertEqual(card_tool.valid_report("sample-paper", root=self.root, entry=entry)["level"], "L6_reviewed")

    def test_categories_allow_zero_to_two_controlled_values(self) -> None:
        self.assertEqual(card_tool.clean_category_ids([], root=self.root), [])
        self.assertEqual(
            card_tool.clean_category_ids(
                ["programmatically_verifiable_outcome_data", "scaling_rlvr_test_time_compute"],
                root=self.root,
            ),
            ["programmatically_verifiable_outcome_data", "scaling_rlvr_test_time_compute"],
        )
        with self.assertRaisesRegex(ValueError, "最多保留两个"):
            card_tool.clean_category_ids(
                ["programmatically_verifiable_outcome_data", "scaling_rlvr_test_time_compute", "third"],
                root=self.root,
            )

    def test_search_report_reads_only_manual_annotation(self) -> None:
        library.save_card_record(
            "sample-paper",
            "queue",
            {
                "category_ids": ["programmatically_verifiable_outcome_data"],
                "manual_annotation": {"search_status": "promoted", "decision_reason": "人工确认有用。"},
            },
            self.root,
        )

        report = card_tool.search_report(self.root)

        self.assertIn("# Paper Card Manual Annotations", report)
        self.assertIn("`sample-paper` · 人工确认有用。", report)


if __name__ == "__main__":
    unittest.main()
