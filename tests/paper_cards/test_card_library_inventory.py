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
import validate_data  # noqa: E402


class CardLibraryInventoryTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def write_complete_source(self, entry_id: str = "sample-paper") -> None:
        base = self.root / "paper_cards" / "sources" / entry_id
        base.mkdir(parents=True, exist_ok=True)
        for key, _title in atlas_utils.PAPER_CARD_SECTIONS:
            (base / f"{key}.md").write_text(f"English {key}\n", encoding="utf-8")
            (base / f"{key}_ch.md").write_text(f"中文 {key}\n", encoding="utf-8")

    def test_paper_card_inventory_uses_card_local_source_directory(self) -> None:
        source = self.root / "paper_cards" / "library" / "cards" / "sample-paper" / "sources"
        source.mkdir(parents=True)
        for key, _title in atlas_utils.PAPER_CARD_SECTIONS:
            (source / f"{key}.md").write_text(f"English {key}\n", encoding="utf-8")
            (source / f"{key}_ch.md").write_text(f"中文 {key}\n", encoding="utf-8")

        inventory = atlas_utils.paper_card_inventory(root=self.root)

        self.assertEqual(inventory, {"sample-paper": "paper_cards/library/cards/sample-paper/sources"})

    def test_incomplete_noncanonical_source_is_not_counted(self) -> None:
        source = self.root / "paper_cards" / "sources" / "sample-paper" / "01_problem.md"
        source.parent.mkdir(parents=True)
        source.write_text(
            "English only\n",
            encoding="utf-8",
        )

        inventory = atlas_utils.paper_card_inventory(root=self.root)

        self.assertEqual(inventory, {})

    def test_complete_shared_source_is_not_a_valid_card_library_record(self) -> None:
        self.write_complete_source()

        inventory = atlas_utils.paper_card_inventory(root=self.root)

        self.assertEqual(inventory, {})

    def test_link_parts_labels_card_local_source(self) -> None:
        parts = atlas_utils.link_parts(
            {"artifacts": {"paper": "https://example.com/paper"}},
            "paper_cards/library/cards/sample-paper/sources",
        )

        self.assertIn("[Paper](https://example.com/paper)", parts)
        self.assertIn("[Paper Card Source](../paper_cards/library/cards/sample-paper/sources)", parts)

    def test_validation_allows_two_controlled_categories(self) -> None:
        entry = dict(atlas_utils.entries()[0])
        entry["category"] = [
            "programmatically_verifiable_outcome_data",
            "scaling_rlvr_test_time_compute",
        ]
        errors: list[str] = []
        warnings: list[str] = []

        validate_data.validate_entries([entry], errors, warnings)

        self.assertFalse(any("category" in error for error in errors))


if __name__ == "__main__":
    unittest.main()
