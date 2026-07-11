from __future__ import annotations

import tempfile
import unittest
from contextlib import redirect_stderr
from io import StringIO
from pathlib import Path

from tools.paper_cards import card_tool
from tools.paper_cards import library
from tools.paper_cards import migrate


class PaperCardMigrateTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        (self.root / "data").mkdir()
        (self.root / "paper_cards" / "sources" / "sample-paper").mkdir(parents=True)
        (self.root / "data" / "categories.yaml").write_text(
            """
paper_categories:
- id: programmatically_verifiable_outcome_data
  title: Programmatic Verification
- id: scaling_rlvr_test_time_compute
  title: Scaling and RLVR
""".lstrip(),
            encoding="utf-8",
        )
        (self.root / "data" / "papers.yaml").write_text(
            """
- id: sample-paper
  title: Sample Paper
  year: 2025
  venue: arXiv
  authors: []
  status: verified
  category:
  - programmatically_verifiable_outcome_data
  artifacts:
    paper: https://arxiv.org/abs/2501.00001
""".lstrip(),
            encoding="utf-8",
        )
        for key, _title in card_tool.SECTIONS:
            for suffix, text in [("", "English"), ("_ch", "中文")]:
                (self.root / "paper_cards" / "sources" / "sample-paper" / f"{key}{suffix}.md").write_text(
                    f"{text} {key}\n",
                    encoding="utf-8",
                )
        (self.root / "paper_cards" / "header_zh.json").write_text(
            '{"entries": {"sample-paper": {"category_ids": ["programmatically_verifiable_outcome_data"]}}}',
            encoding="utf-8",
        )
        (self.root / "paper_cards" / "institutions.json").write_text(
            '{"entries": {"sample-paper": {"institutions": ["Example Lab"]}}}',
            encoding="utf-8",
        )
        (self.root / "paper_cards" / "search_queue.json").write_text(
            '{"entries": {"sample-paper": {"track_guess": ["programmatically_verifiable_outcome_data"], "search_status": "candidate"}}}',
            encoding="utf-8",
        )
        (self.root / "paper_cards" / "status.json").write_text(
            '{"entries": {"sample-paper": {"state": "reviewed"}}}',
            encoding="utf-8",
        )

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def test_initialize_library_moves_every_legacy_record_into_one_card(self) -> None:
        result = migrate.initialize_library(root=self.root)
        card = library.load_card("sample-paper", self.root)

        self.assertEqual(result["entry_ids"], ["sample-paper"])
        self.assertEqual(card["paper"]["category_ids"], ["programmatically_verifiable_outcome_data"])
        self.assertEqual(card["institutions"]["institutions"], ["Example Lab"])
        self.assertEqual(card["queue"]["category_ids"], ["programmatically_verifiable_outcome_data"])
        self.assertNotIn("track_guess", card["queue"])
        self.assertEqual(card["review"]["state"], "reviewed")

    def test_library_verify_confirms_the_import_before_cutover(self) -> None:
        migrate.initialize_library(root=self.root)

        result = migrate.verify_library_parity(root=self.root)

        self.assertEqual(result["entry_ids"], ["sample-paper"])

    def test_cutover_requires_confirmation_and_removes_legacy_layout(self) -> None:
        migrate.initialize_library(root=self.root)

        with self.assertRaisesRegex(ValueError, "confirmed=True"):
            migrate.cutover_library(root=self.root)
        migrate.cutover_library(confirmed=True, root=self.root)

        self.assertTrue((self.root / "paper_cards" / "library" / "cards" / "sample-paper" / "paper.yaml").exists())
        self.assertFalse((self.root / "data" / "papers.yaml").exists())
        self.assertFalse((self.root / "paper_cards" / "sources").exists())
        self.assertFalse((self.root / "paper_cards" / "header_zh.json").exists())

    def test_normalize_library_records_synchronizes_category_views(self) -> None:
        migrate.initialize_library(root=self.root)
        library.save_card_record(
            "sample-paper",
            "header_zh",
            {"category_ids": ["scaling_rlvr_test_time_compute"]},
            self.root,
        )
        library.save_card_record(
            "sample-paper",
            "queue",
            {"track_guess": ["programmatically_verifiable_outcome_data"]},
            self.root,
        )

        migrate.normalize_library_records(root=self.root)
        card = library.load_card("sample-paper", self.root)

        self.assertEqual(card["header_zh"]["category_ids"], ["programmatically_verifiable_outcome_data"])
        self.assertEqual(card["queue"]["category_ids"], ["programmatically_verifiable_outcome_data"])
        self.assertNotIn("track_guess", card["queue"])

    def test_cli_rejects_removed_legacy_batch_command(self) -> None:
        with redirect_stderr(StringIO()), self.assertRaises(SystemExit):
            migrate.parse_args(["batch", "--category", "programmatically_verifiable_outcome_data", "--entries", "sample-paper", "--request", "legacy"])

if __name__ == "__main__":
    unittest.main()
