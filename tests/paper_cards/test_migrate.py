from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from tools.paper_cards import card_tool
from tools.paper_cards import library
from tools.paper_cards import migrate


class PaperCardMigrateTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        (self.root / "data").mkdir()
        (self.root / "paper_cards" / "sources").mkdir(parents=True)
        (self.root / "data" / "categories.yaml").write_text(
            """
paper_categories:
- id: programmatically_verifiable_outcome_data
  order: 0
  title: Programmatic Verification
  summary: Machine-checkable outcomes.
- id: scaling_rlvr_test_time_compute
  order: 1
  title: Scaling, RLVR, and Test-Time Compute
  summary: Scaling and verifier optimization.
- id: benchmarks_evaluation_surfaces
  order: 2
  title: Benchmarks
  summary: Evaluation surfaces.
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
  authors: []
  status: verified
  curation_level: L3_summary_ready
  category:
  - programmatically_verifiable_outcome_data
  artifacts:
    paper: https://arxiv.org/abs/2501.00001
    code: null
    data: null
    project: null
    huggingface: null
    doi: null
""".strip()
            + "\n",
            encoding="utf-8",
        )
        card_tool.init_card_source("sample-paper", root=self.root, overwrite=True)
        for key, _title in card_tool.SECTIONS:
            card_tool.source_file("sample-paper", key, "en", self.root).write_text(f"English {key}\n", encoding="utf-8")
            card_tool.source_file("sample-paper", key, "ch", self.root).write_text(f"中文 {key}\n", encoding="utf-8")
        card_tool.save_header_zh(
            "sample-paper",
            {
                "one_line_summary_ch": "中文总结。",
                "reading_priority_ch": "必读",
                "paper_type_ch": "缩放论文",
                "best_for_ch": "研究者",
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
                        "title": "Sample Paper",
                        "track_guess": ["programmatically_verifiable_outcome_data"],
                        "search_status": "candidate",
                        "decision_reason": "Relevant.",
                    }
                },
            },
            root=self.root,
        )
        card_tool.update_status("sample-paper", "reviewed", root=self.root)

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def test_prompt_batch_forces_one_category_on_every_prompt_entry(self) -> None:
        batch = migrate.apply_prompt_batch(
            "ttc-scan",
            "scaling_rlvr_test_time_compute",
            ["sample-paper"],
            request_text="Find test-time compute papers.",
            root=self.root,
        )

        entry = card_tool.load_entries(self.root)["sample-paper"]
        header = card_tool.header_zh_record("sample-paper", self.root)
        queue = card_tool.load_search_queue(self.root)["entries"]["sample-paper"]
        self.assertEqual(batch["category_id"], "scaling_rlvr_test_time_compute")
        self.assertEqual(batch["entry_ids"], ["sample-paper"])
        self.assertEqual(entry["category"], ["scaling_rlvr_test_time_compute"])
        self.assertEqual(header["category_ids"], ["scaling_rlvr_test_time_compute"])
        self.assertEqual(queue["track_guess"], ["scaling_rlvr_test_time_compute"])
        self.assertEqual(entry["prompt_batch_id"], "ttc-scan")
        self.assertTrue(migrate.batch_path("ttc-scan", self.root).exists())

    def test_initialize_library_preserves_one_entry_and_its_local_records(self) -> None:
        migrate.apply_prompt_batch(
            "ttc-scan",
            "scaling_rlvr_test_time_compute",
            ["sample-paper"],
            request_text="Find test-time compute papers.",
            root=self.root,
        )

        result = migrate.initialize_library(root=self.root)
        card = library.load_card("sample-paper", self.root)

        self.assertEqual(result["entry_ids"], ["sample-paper"])
        self.assertEqual(card["paper"]["artifacts"]["paper"], "https://arxiv.org/abs/2501.00001")
        self.assertEqual(card["paper"]["category_ids"], ["scaling_rlvr_test_time_compute"])
        self.assertEqual(card["paper"]["batch"]["id"], "ttc-scan")
        self.assertEqual(card["header_zh"]["one_line_summary_ch"], "中文总结。")
        self.assertEqual(card["queue"]["search_status"], "candidate")
        self.assertEqual(card["review"]["state"], "reviewed")

    def test_cutover_requires_parity_then_removes_legacy_records(self) -> None:
        migrate.initialize_library(root=self.root)

        result = migrate.cutover_library(confirmed=True, root=self.root)

        self.assertEqual(result["entry_ids"], ["sample-paper"])
        self.assertTrue((self.root / "paper_cards" / "library" / "cards" / "sample-paper" / "paper.yaml").exists())
        self.assertFalse((self.root / "data" / "papers.yaml").exists())
        self.assertFalse((self.root / "paper_cards" / "header_zh.json").exists())
        self.assertFalse((self.root / "paper_cards" / "sources").exists())

    def test_prompt_batch_generates_a_batch_id_when_codex_only_supplies_the_prompt_decision(self) -> None:
        batch = migrate.apply_prompt_batch(
            None,
            "scaling_rlvr_test_time_compute",
            ["sample-paper"],
            request_text="Find test-time compute papers.",
            root=self.root,
        )

        self.assertTrue(batch["batch_id"].startswith("batch-"))
        self.assertTrue(migrate.batch_path(batch["batch_id"], self.root).exists())

    def test_export_clear_import_restores_local_records_exactly(self) -> None:
        migrate.apply_prompt_batch(
            "ttc-scan",
            "scaling_rlvr_test_time_compute",
            ["sample-paper"],
            request_text="Find test-time compute papers.",
            root=self.root,
        )
        archive = self.root / "backup.zip"

        manifest = migrate.export_records(archive, entry_ids=["sample-paper"], batch_ids=["ttc-scan"], root=self.root)
        migrate.clear_records(archive, confirmed=True, root=self.root)

        self.assertEqual(manifest["format"], "paper-card-local-records")
        self.assertFalse(card_tool.card_source_dir("sample-paper", self.root).exists())
        self.assertNotIn("sample-paper", card_tool.load_header_zh(self.root)["entries"])
        self.assertIn("sample-paper", card_tool.load_entries(self.root))

        migrate.import_records(archive, root=self.root)

        self.assertEqual(card_tool.source_file("sample-paper", "03_method", "ch", self.root).read_text(encoding="utf-8"), "中文 03_method\n")
        self.assertEqual(card_tool.header_zh_record("sample-paper", self.root)["category_ids"], ["scaling_rlvr_test_time_compute"])
        self.assertEqual(card_tool.load_search_queue(self.root)["entries"]["sample-paper"]["track_guess"], ["scaling_rlvr_test_time_compute"])
        self.assertEqual(card_tool.load_status(self.root)["entries"]["sample-paper"]["state"], "reviewed")

    def test_move_out_rejects_a_partial_prompt_batch_before_clearing_records(self) -> None:
        entries = migrate.current_entries_list(self.root)
        entries.append({**entries[0], "id": "second-paper", "title": "Second Paper"})
        migrate.save_entries_list(entries, self.root)
        migrate.apply_prompt_batch(
            "two-paper-batch",
            "scaling_rlvr_test_time_compute",
            ["sample-paper", "second-paper"],
            request_text="Find two test-time compute papers.",
            root=self.root,
        )

        with self.assertRaisesRegex(ValueError, "must include every batch entry"):
            migrate.move_out_records(
                self.root / "partial.zip",
                entry_ids=["sample-paper"],
                confirmed=True,
                root=self.root,
            )

        self.assertTrue(card_tool.card_source_dir("sample-paper", self.root).exists())

    def test_prompt_batch_rejects_unknown_category(self) -> None:
        with self.assertRaisesRegex(ValueError, "unknown category"):
            migrate.apply_prompt_batch(
                "bad-batch",
                "not-a-category",
                ["sample-paper"],
                root=self.root,
            )

    def test_prompt_batch_accepts_any_known_taxonomy_category(self) -> None:
        batch = migrate.apply_prompt_batch(
            "benchmark-scan",
            "benchmarks_evaluation_surfaces",
            ["sample-paper"],
            request_text="Find benchmark papers.",
            root=self.root,
        )

        entry = card_tool.load_entries(self.root)["sample-paper"]
        self.assertEqual(batch["category_id"], "benchmarks_evaluation_surfaces")
        self.assertEqual(entry["category"], ["benchmarks_evaluation_surfaces"])
        self.assertEqual(entry["prompt_batch_id"], "benchmark-scan")

    def test_verify_current_reports_unbatched_legacy_entries(self) -> None:
        result = migrate.verify_current_records(root=self.root)

        self.assertEqual(result["unbatched_entry_ids"], ["sample-paper"])

    def test_verify_current_rejects_a_batch_entry_with_multiple_labels(self) -> None:
        migrate.apply_prompt_batch(
            "ttc-scan",
            "scaling_rlvr_test_time_compute",
            ["sample-paper"],
            request_text="Find test-time compute papers.",
            root=self.root,
        )
        headers = card_tool.load_header_zh(self.root)
        headers["entries"]["sample-paper"]["category_ids"] = [
            "programmatically_verifiable_outcome_data",
            "scaling_rlvr_test_time_compute",
        ]
        card_tool.save_header_zh_payload(headers, self.root)

        with self.assertRaisesRegex(ValueError, "header category mismatch"):
            migrate.verify_current_records(root=self.root)

    def test_verify_current_rejects_a_batch_entry_without_provenance(self) -> None:
        migrate.apply_prompt_batch(
            "ttc-scan",
            "scaling_rlvr_test_time_compute",
            ["sample-paper"],
            request_text="Find test-time compute papers.",
            root=self.root,
        )
        entries = migrate.current_entries_list(self.root)
        entries[0].pop("prompt_batch_id")
        migrate.save_entries_list(entries, self.root)

        with self.assertRaisesRegex(ValueError, "batch provenance mismatch"):
            migrate.verify_current_records(root=self.root)


if __name__ == "__main__":
    unittest.main()
