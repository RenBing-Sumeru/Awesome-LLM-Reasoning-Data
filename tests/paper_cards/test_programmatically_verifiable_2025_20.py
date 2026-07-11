from __future__ import annotations

import importlib
import tempfile
import unittest
from datetime import date
from pathlib import Path


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
        self.assertEqual(module.validate_candidates(), candidates)

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


if __name__ == "__main__":
    unittest.main()
