from __future__ import annotations

import importlib
import json
import tempfile
import unittest
from datetime import date
from pathlib import Path

from tools.paper_cards import card_tool, library


PRIMARY_RELEASE_DATES = {
    "formalproofbench-2026": "2026-03-27",
    "ntp4vc-2026": "2026-01-26",
    "mcpmark-2025": "2025-09-28",
}


class ProgrammaticallyVerifiable2025CandidatesTest(unittest.TestCase):
    def test_candidates_are_ten_recent_unique_programmatically_verified_papers(self) -> None:
        module = importlib.import_module(
            "tools.paper_cards.add_programmatically_verifiable_2025_20"
        )
        candidates = module.PAPERS

        self.assertEqual(len(candidates), 10)
        self.assertEqual(len({paper[0] for paper in candidates}), 10)
        self.assertEqual(len({paper[1] for paper in candidates}), 10)
        for paper in candidates:
            self.assertEqual(len(paper), 8)
            entry_id, title, year, venue, authors, url, verifier_kind, impact_signal = paper
            self.assertTrue(entry_id)
            self.assertTrue(title)
            self.assertGreaterEqual(year, 2025)
            self.assertTrue(venue)
            self.assertTrue(authors)
            self.assertTrue(url.startswith("https://"))
            self.assertTrue(verifier_kind)
            self.assertTrue(impact_signal)
            self.assertGreaterEqual(
                date.fromisoformat(module.RELEASE_DATES[entry_id]), date(2025, 7, 11)
            )

        self.assertEqual(set(module.RELEASE_DATES), {paper[0] for paper in candidates})
        for entry_id, expected_date in PRIMARY_RELEASE_DATES.items():
            self.assertEqual(module.RELEASE_DATES[entry_id], expected_date)
        with tempfile.TemporaryDirectory() as temporary_directory:
            root = Path(temporary_directory)
            categories_path = root / "paper_cards" / "library" / "categories.yaml"
            categories_path.parent.mkdir(parents=True)
            categories_path.write_text(
                (library.library_root() / "categories.yaml").read_text(encoding="utf-8"),
                encoding="utf-8",
            )
            self.assertEqual(module.validate_candidates(root), candidates)

    def test_validation_rejects_a_library_without_the_required_category(self) -> None:
        module = importlib.import_module(
            "tools.paper_cards.add_programmatically_verifiable_2025_20"
        )
        with tempfile.TemporaryDirectory() as temporary_directory:
            root = Path(temporary_directory)
            categories_path = root / "paper_cards" / "library" / "categories.yaml"
            categories_path.parent.mkdir(parents=True)
            categories_path.write_text(
                "paper_categories:\n- id: a_different_category\n", encoding="utf-8"
            )

            with self.assertRaisesRegex(
                ValueError, "programmatically_verifiable_outcome_data"
            ):
                module.validate_candidates(root)

            self.assertFalse((root / "paper_cards" / "library" / "cards").exists())

    def test_generator_creates_complete_card_local_l4_records(self) -> None:
        module = importlib.import_module(
            "tools.paper_cards.add_programmatically_verifiable_2025_20"
        )
        with tempfile.TemporaryDirectory() as temporary_directory:
            root = Path(temporary_directory)
            categories_path = root / "paper_cards" / "library" / "categories.yaml"
            categories_path.parent.mkdir(parents=True)
            categories_path.write_text(
                (library.library_root() / "categories.yaml").read_text(encoding="utf-8"),
                encoding="utf-8",
            )

            created = module.generate_cards(root)

            self.assertEqual(
                created,
                [library.card_dir(paper[0], root) for paper in module.PAPERS],
            )
            cards = library.load_cards(root)
            self.assertEqual(set(cards), {paper[0] for paper in module.PAPERS})
            self.assertFalse((root / "data" / "papers.yaml").exists())
            self.assertEqual(card_tool.check_all(root), {entry_id: [] for entry_id in cards})

            schema = json.loads((library.project_root() / "data" / "schema.json").read_text(encoding="utf-8"))
            for card in cards.values():
                for field in (
                    "source_role",
                    "verification_contract",
                    "supervision_granularity",
                    "training_use",
                    "construction_layer",
                ):
                    self.assertTrue(
                        set(card["paper"][field]).issubset(set(schema["enums"][field])),
                        f"{card['paper']['id']}: invalid {field}",
                    )

            for entry_id, title, _year, _venue, _authors, url, verifier_kind, impact_signal in module.PAPERS:
                card = cards[entry_id]
                self.assertEqual(card["paper"]["category_ids"], [module.CATEGORY_ID])
                self.assertEqual(card["header_zh"]["category_ids"], [module.CATEGORY_ID])
                self.assertEqual(card["queue"]["category_ids"], [module.CATEGORY_ID])
                self.assertEqual(card["paper"]["curation_level"], "L4_carded")
                institutions = card["institutions"]
                self.assertFalse(
                    any("待人工复核" in institution for institution in institutions["institutions"])
                )
                self.assertTrue(institutions["institutions"] or institutions["no_institution"])
                for source_key in ("01_problem", "02_core_idea", "03_method", "05_novelty"):
                    english = (card["sources"] / f"{source_key}.md").read_text(encoding="utf-8")
                    chinese = (card["sources"] / f"{source_key}_ch.md").read_text(encoding="utf-8")
                    self.assertIn(title, english)
                    self.assertIn(url, english)
                    self.assertIn(verifier_kind, english)
                    self.assertIn(impact_signal, english)
                    self.assertIn(title, chinese)
                    self.assertIn(url, chinese)


if __name__ == "__main__":
    unittest.main()
