from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from tools.paper_cards import library
from tools.paper_cards import card_tool


class PaperCardLibraryTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        library_root = self.root / "paper_cards" / "library"
        (library_root / "cards" / "sample-paper" / "sources").mkdir(parents=True)
        (library_root / "categories.yaml").write_text(
            """
paper_categories:
- id: programmatic_verification
  title: Programmatic Verification
- id: scaling_rlvr
  title: Scaling and RLVR
""".lstrip(),
            encoding="utf-8",
        )
        (library_root / "cards" / "sample-paper" / "paper.yaml").write_text(
            """
id: sample-paper
title: Sample Paper
category_ids:
- programmatic_verification
""".lstrip(),
            encoding="utf-8",
        )
        for name, payload in {
            "header_zh.json": {"one_line_summary_ch": "中文总结。"},
            "institutions.json": {"institutions": ["Example Lab"]},
            "queue.json": {"search_status": "candidate"},
            "review.json": {"state": "reviewed"},
        }.items():
            (library_root / "cards" / "sample-paper" / name).write_text(
                json.dumps(payload, ensure_ascii=False), encoding="utf-8"
            )

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def test_load_card_reads_all_local_records(self) -> None:
        card = library.load_card("sample-paper", self.root)

        self.assertEqual(card["paper"]["id"], "sample-paper")
        self.assertEqual(card["header_zh"]["one_line_summary_ch"], "中文总结。")
        self.assertEqual(card["review"]["state"], "reviewed")
        self.assertEqual(card["sources"], self.root / "paper_cards" / "library" / "cards" / "sample-paper" / "sources")

    def test_category_ids_accept_zero_to_two_known_categories(self) -> None:
        self.assertEqual(library.clean_category_ids([], self.root), [])
        self.assertEqual(
            library.clean_category_ids(["programmatic_verification", "scaling_rlvr"], self.root),
            ["programmatic_verification", "scaling_rlvr"],
        )

    def test_category_ids_reject_more_than_two_values(self) -> None:
        with self.assertRaisesRegex(ValueError, "最多保留两个"):
            library.clean_category_ids(
                ["programmatic_verification", "scaling_rlvr", "programmatic_verification"], self.root
            )

    def test_card_tool_reads_entries_and_sources_from_the_library(self) -> None:
        entries = card_tool.load_entries(self.root)

        self.assertEqual(entries["sample-paper"]["category"], ["programmatic_verification"])
        self.assertEqual(
            card_tool.card_source_dir("sample-paper", self.root),
            self.root / "paper_cards" / "library" / "cards" / "sample-paper" / "sources",
        )


if __name__ == "__main__":
    unittest.main()
