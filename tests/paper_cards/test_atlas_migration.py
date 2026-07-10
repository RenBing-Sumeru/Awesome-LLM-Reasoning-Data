from __future__ import annotations

import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = ROOT / "scripts"
if str(SCRIPTS) not in sys.path:
    sys.path.insert(0, str(SCRIPTS))

import atlas_utils  # noqa: E402


class AtlasPaperCardMigrationTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        (self.root / "paper_cards" / "sources" / "sample-paper").mkdir(parents=True)

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def write_complete_source(self, entry_id: str = "sample-paper") -> None:
        base = self.root / "paper_cards" / "sources" / entry_id
        base.mkdir(parents=True, exist_ok=True)
        for key, _title in atlas_utils.PAPER_CARD_SECTIONS:
            (base / f"{key}.md").write_text(f"English {key}\n", encoding="utf-8")
            (base / f"{key}_ch.md").write_text(f"中文 {key}\n", encoding="utf-8")

    def test_paper_card_inventory_uses_new_source_directory(self) -> None:
        self.write_complete_source()

        inventory = atlas_utils.paper_card_inventory(root=self.root)

        self.assertEqual(inventory, {"sample-paper": "paper_cards/sources/sample-paper"})

    def test_incomplete_paper_card_source_is_not_counted(self) -> None:
        (self.root / "paper_cards" / "sources" / "sample-paper" / "01_problem.md").write_text(
            "English only\n",
            encoding="utf-8",
        )

        inventory = atlas_utils.paper_card_inventory(root=self.root)

        self.assertEqual(inventory, {})

    def test_link_parts_labels_new_paper_card_source(self) -> None:
        parts = atlas_utils.link_parts({"artifacts": {"paper": "https://example.com/paper"}}, "paper_cards/sources/sample-paper")

        self.assertIn("[Paper](https://example.com/paper)", parts)
        self.assertIn("[Paper Card Source](../paper_cards/sources/sample-paper)", parts)


if __name__ == "__main__":
    unittest.main()
