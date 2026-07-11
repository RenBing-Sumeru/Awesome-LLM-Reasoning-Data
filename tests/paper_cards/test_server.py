from __future__ import annotations

import tempfile
import unittest
import json
from unittest.mock import patch
from pathlib import Path

from tools.paper_cards import card_tool
from tools.paper_cards import server


class PaperCardServerTest(unittest.TestCase):
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
- id: benchmarks_evaluation_surfaces
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

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def make_review_ready(self) -> None:
        server.save_header_zh_payload(
            "sample-paper",
            {
                "one_line_summary_ch": "中文一句话。",
                "reading_priority_ch": "必读",
                "paper_type_ch": "验证器论文",
                "best_for_ch": "适合 RLVR 复盘",
                "confidence_ch": "高",
                "authors_ch": "张三，李四",
                "category_ids": ["programmatically_verifiable_outcome_data"],
            },
            root=self.root,
        )
        server.save_institutions_payload(
            "sample-paper",
            {
                "institutions": ["Example Lab"],
                "has_more": False,
                "no_institution": False,
            },
            root=self.root,
        )
        server.save_search_queue_item(
            "sample-paper",
            {
                "title": "Sample Paper",
                "search_status": "promoted",
                "decision_reason": "人工确认有用。",
            },
            root=self.root,
        )

    def test_entries_include_source_status(self) -> None:
        payload = server.entries_payload(root=self.root)

        entry = payload["entries"][0]
        self.assertEqual(entry["id"], "sample-paper")
        self.assertEqual(entry["paper_card"]["source_exists"], True)
        self.assertEqual(entry["paper_card"]["missing_count"], 0)

    def test_entries_follow_project_order_descending(self) -> None:
        (self.root / "data" / "papers.yaml").write_text(
            """
- id: first-paper
  title: First Paper
  year: 2024
  venue: arXiv
  artifacts: {}
- id: second-paper
  title: Second Paper
  year: 2025
  venue: arXiv
  artifacts: {}
""".strip()
            + "\n",
            encoding="utf-8",
        )

        payload = server.entries_payload(root=self.root)

        self.assertEqual([entry["id"] for entry in payload["entries"]], ["second-paper", "first-paper"])

    def test_card_payload_returns_english_and_chinese_sections(self) -> None:
        payload = server.card_payload("sample-paper", root=self.root)

        self.assertEqual(payload["entry"]["id"], "sample-paper")
        self.assertIn("01_problem", payload["sections"]["en"])
        self.assertIn("01_problem_ch", payload["sections"]["ch"])

    def test_save_chinese_sections_rejects_english_keys(self) -> None:
        with self.assertRaises(ValueError):
            server.save_chinese_sections("sample-paper", {"01_problem": "do not write"}, root=self.root)

    def test_save_chinese_sections_writes_chinese_file(self) -> None:
        payload = server.save_chinese_sections(
            "sample-paper",
            {"01_problem_ch": "人工中文修改。"},
            root=self.root,
        )

        self.assertEqual(payload["status"]["entries"]["sample-paper"]["state"], "edited")
        text = (self.root / "paper_cards" / "sources" / "sample-paper" / "01_problem_ch.md").read_text(encoding="utf-8")
        self.assertEqual(text, "人工中文修改。\n")

    def test_save_chinese_sections_resets_downloaded_status(self) -> None:
        card_tool.update_status(
            "sample-paper",
            "downloaded",
            package_name="paper-card-package.zip",
            root=self.root,
        )

        payload = server.save_chinese_sections(
            "sample-paper",
            {"01_problem_ch": "下载后再次修改。"},
            root=self.root,
        )

        record = payload["status"]["entries"]["sample-paper"]
        self.assertEqual(record["state"], "edited")
        self.assertNotIn("downloaded_at", record)

    def test_save_institutions_payload_writes_local_file_and_marks_edited(self) -> None:
        payload = server.save_institutions_payload(
            "sample-paper",
            {
                "institutions": ["MIT", "Stanford", "", "UW", ""],
                "has_more": True,
                "no_institution": False,
            },
            root=self.root,
        )

        self.assertEqual(payload["institutions"]["institutions"], ["MIT", "Stanford", "UW"])
        self.assertEqual(payload["institutions"]["has_more"], True)
        self.assertEqual(payload["status"]["entries"]["sample-paper"]["state"], "edited")
        path = self.root / "paper_cards" / "institutions.json"
        self.assertTrue(path.exists())

    def test_save_header_zh_payload_writes_local_file_and_marks_edited(self) -> None:
        payload = server.save_header_zh_payload(
            "sample-paper",
            {
                "one_line_summary_ch": "中文一句话。",
                "reading_priority_ch": "必读",
                "paper_type_ch": "验证器论文",
                "best_for_ch": "适合 RLVR 复盘",
                "confidence_ch": "高",
                "authors_ch": "张三，李四",
                "category_ids": ["programmatically_verifiable_outcome_data"],
            },
            root=self.root,
        )

        self.assertEqual(payload["header_zh"]["one_line_summary_ch"], "中文一句话。")
        self.assertEqual(payload["header_zh"]["category_ids"], ["programmatically_verifiable_outcome_data"])
        self.assertEqual(payload["status"]["entries"]["sample-paper"]["state"], "edited")
        path = self.root / "paper_cards" / "header_zh.json"
        self.assertTrue(path.exists())

    def test_save_header_zh_payload_rejects_more_than_two_categories(self) -> None:
        with self.assertRaisesRegex(ValueError, "最多保留两个"):
            server.save_header_zh_payload(
                "sample-paper",
                {
                    "one_line_summary_ch": "中文一句话。",
                    "reading_priority_ch": "必读",
                    "paper_type_ch": "验证器论文",
                    "best_for_ch": "适合 RLVR 复盘",
                    "confidence_ch": "高",
                    "authors_ch": "张三，李四",
                    "category_ids": [
                        "programmatically_verifiable_outcome_data",
                        "scaling_rlvr_test_time_compute",
                        "third-category",
                    ],
                },
                root=self.root,
            )

    def test_save_header_zh_payload_inherits_entry_category_when_the_review_form_omits_it(self) -> None:
        payload = server.save_header_zh_payload(
            "sample-paper",
            {
                "one_line_summary_ch": "中文一句话。",
                "reading_priority_ch": "必读",
                "paper_type_ch": "验证器论文",
                "best_for_ch": "适合 RLVR 复盘",
                "confidence_ch": "高",
                "authors_ch": "张三，李四",
            },
            root=self.root,
        )

        self.assertEqual(payload["header_zh"]["category_ids"], ["programmatically_verifiable_outcome_data"])

    def test_mark_downloaded_payload_marks_multiple_entries(self) -> None:
        self.make_review_ready()
        server.review_payload("sample-paper", root=self.root)

        payload = server.mark_downloaded_payload(
            ["sample-paper"],
            package_name="paper-card-package.zip",
            root=self.root,
        )

        record = payload["status"]["entries"]["sample-paper"]
        self.assertEqual(record["state"], "downloaded")
        self.assertEqual(record["last_package"], "paper-card-package.zip")

    def test_mark_downloaded_payload_accepts_l5_review_ready(self) -> None:
        self.make_review_ready()

        payload = server.mark_downloaded_payload(
            ["sample-paper"],
            package_name="paper-card-package.zip",
            root=self.root,
        )

        record = payload["status"]["entries"]["sample-paper"]
        self.assertEqual(record["state"], "downloaded")
        self.assertEqual(record["last_package"], "paper-card-package.zip")

    def test_mark_downloaded_payload_rejects_entries_below_l5(self) -> None:
        with self.assertRaisesRegex(ValueError, "only L5 or L6 cards can be marked downloaded"):
            server.mark_downloaded_payload(
                ["sample-paper"],
                package_name="paper-card-package.zip",
                root=self.root,
            )

    def test_preview_payload_assembles_both_languages(self) -> None:
        payload = server.preview_payload("sample-paper", root=self.root)

        self.assertIn("# Paper Card: Sample Paper", payload["en"])
        self.assertIn("# 论文卡片：Sample Paper", payload["ch"])
        self.assertNotIn("Ask the Atlas", payload["ch"])

    def test_card_payload_returns_header_zh_and_read_only_category_label(self) -> None:
        payload = server.card_payload("sample-paper", root=self.root)

        self.assertIn("header_zh", payload)
        self.assertEqual(payload["category_labels"][0]["id"], "programmatically_verifiable_outcome_data")

    def test_package_payload_returns_zip_name(self) -> None:
        self.make_review_ready()
        server.review_payload("sample-paper", root=self.root)

        payload = server.package_payload(["sample-paper"], root=self.root)

        self.assertTrue(payload["package"].endswith(".zip"))
        self.assertTrue((self.root / "paper_cards" / "packages" / payload["package"]).exists())


    def test_save_search_queue_item_rejects_unknown_card_without_creating_shared_queue(self) -> None:
        with self.assertRaisesRegex(ValueError, "unknown entry_id"):
            server.save_search_queue_item(
                "candidate-paper",
                {
                    "title": "Candidate Paper",
                    "candidate_links": {"paper": "https://arxiv.org/abs/2501.12345"},
                    "category_ids": ["programmatically_verifiable_outcome_data"],
                    "reason_to_include": "Relevant verifier paper.",
                    "search_status": "candidate",
                    "review_note": "Needs official code check.",
                },
                root=self.root,
            )

        self.assertFalse((self.root / "paper_cards" / "search_queue.json").exists())

    def test_save_search_queue_item_rejects_invalid_status(self) -> None:
        with self.assertRaises(ValueError):
            server.save_search_queue_item(
                "candidate-paper",
                {"title": "Candidate Paper", "search_status": "not-a-status"},
                root=self.root,
            )

    def test_save_search_queue_item_rejects_more_than_two_categories(self) -> None:
        with self.assertRaisesRegex(ValueError, "最多保留两个"):
            server.save_search_queue_item(
                "sample-paper",
                {
                    "title": "Candidate Paper",
                    "category_ids": [
                        "programmatically_verifiable_outcome_data",
                        "scaling_rlvr_test_time_compute",
                        "third-category",
                    ],
                    "search_status": "candidate",
                },
                root=self.root,
            )

    def test_save_search_queue_item_rejects_removed_statuses(self) -> None:
        with self.assertRaises(ValueError):
            server.save_search_queue_item(
                "candidate-paper",
                {"title": "Candidate Paper", "search_status": "link_verified"},
                root=self.root,
            )

    def test_review_payload_failure_writes_valid_status_and_returns_reasons(self) -> None:
        payload = server.review_payload("sample-paper", root=self.root)

        self.assertFalse(payload["ok"])
        self.assertEqual(payload["valid"]["level"], "L3_card_source_ready")
        self.assertIn("缺少中文头字段：一句话评价", payload["valid"]["errors"])
        status_path = self.root / "paper_cards" / "valid_status.json"
        self.assertTrue(status_path.exists())
        saved = json.loads(status_path.read_text(encoding="utf-8"))
        self.assertEqual(saved["entries"]["sample-paper"]["level"], "L3_card_source_ready")

    def test_review_payload_cannot_promote_before_human_annotation(self) -> None:
        server.save_header_zh_payload(
            "sample-paper",
            {
                "one_line_summary_ch": "中文一句话。",
                "reading_priority_ch": "必读",
                "paper_type_ch": "验证器论文",
                "best_for_ch": "适合 RLVR 复盘",
                "confidence_ch": "高",
                "authors_ch": "张三，李四",
                "category_ids": ["programmatically_verifiable_outcome_data"],
            },
            root=self.root,
        )
        server.save_institutions_payload(
            "sample-paper",
            {
                "institutions": ["Example Lab"],
                "has_more": False,
                "no_institution": False,
            },
            root=self.root,
        )

        payload = server.review_payload("sample-paper", root=self.root)

        self.assertFalse(payload["ok"])
        self.assertEqual(payload["valid"]["level"], "L4_chinese_review_ready")
        self.assertEqual(payload["valid"]["pool"], "needs_annotation")
        status = payload["status"]["entries"]["sample-paper"]
        self.assertEqual(status["state"], "edited")
        self.assertNotIn("reviewed_at", status)

    def test_review_payload_promotes_l6_after_review_ready_check(self) -> None:
        self.make_review_ready()

        payload = server.review_payload("sample-paper", root=self.root)

        self.assertTrue(payload["ok"])
        self.assertEqual(payload["valid"]["level"], "L6_reviewed")
        self.assertEqual(payload["valid"]["pool"], "l6")
        status = payload["status"]["entries"]["sample-paper"]
        self.assertEqual(status["state"], "reviewed")
        self.assertIn("reviewed_at", status)

    def test_downgrade_l5_to_l4_clears_human_annotation(self) -> None:
        self.make_review_ready()

        payload = server.downgrade_to_l4_payload("sample-paper", root=self.root)

        self.assertTrue(payload["ok"])
        self.assertEqual(payload["valid"]["level"], "L4_chinese_review_ready")
        self.assertEqual(payload["valid"]["pool"], "needs_annotation")
        status = payload["status"]["entries"]["sample-paper"]
        self.assertEqual(status["state"], "edited")
        self.assertNotIn("downloaded_at", status)
        self.assertNotIn("reviewed_at", status)
        queue_record = card_tool.load_search_queue(root=self.root)["entries"]["sample-paper"]
        self.assertNotIn("search_status", queue_record)
        self.assertNotIn("decision_reason", queue_record)
        self.assertNotIn("reason_to_include", queue_record)

    def test_downgrade_to_l4_rejects_l6_cards(self) -> None:
        self.make_review_ready()
        server.review_payload("sample-paper", root=self.root)

        with self.assertRaisesRegex(ValueError, "只能从 L5 降级到 L4"):
            server.downgrade_to_l4_payload("sample-paper", root=self.root)

    def test_review_payload_only_promotes_from_l5_once(self) -> None:
        self.make_review_ready()
        first = server.review_payload("sample-paper", root=self.root)
        first_reviewed_at = first["status"]["entries"]["sample-paper"]["reviewed_at"]

        second = server.review_payload("sample-paper", root=self.root)

        self.assertFalse(second["ok"])
        self.assertEqual(second["valid"]["level"], "L6_reviewed")
        self.assertEqual(
            second["valid"]["errors"],
            ["当前卡片已是 L6，不能重复执行 L5 到 L6 晋升"],
        )
        self.assertEqual(second["status"]["entries"]["sample-paper"]["reviewed_at"], first_reviewed_at)

    def test_l6_blocks_all_mutations_except_download(self) -> None:
        self.make_review_ready()
        server.review_payload("sample-paper", root=self.root)
        before_status = card_tool.load_status(root=self.root)["entries"]["sample-paper"]

        mutations = [
            lambda: server.save_chinese_sections(
                "sample-paper",
                {"01_problem_ch": "L6 should not change."},
                root=self.root,
            ),
            lambda: server.save_header_zh_payload(
                "sample-paper",
                {
                    "one_line_summary_ch": "L6 should not change.",
                    "reading_priority_ch": "必读",
                    "paper_type_ch": "验证器论文",
                    "best_for_ch": "适合 RLVR 复盘",
                    "confidence_ch": "高",
                    "authors_ch": "张三，李四",
                    "category_ids": ["programmatically_verifiable_outcome_data"],
                },
                root=self.root,
            ),
            lambda: server.save_institutions_payload(
                "sample-paper",
                {"institutions": ["Changed Lab"], "has_more": False, "no_institution": False},
                root=self.root,
            ),
            lambda: server.save_search_queue_item(
                "sample-paper",
                {
                    "title": "Sample Paper",
                    "search_status": "candidate",
                    "decision_reason": "L6 should not change.",
                },
                root=self.root,
            ),
            lambda: server.status_payload("sample-paper", "edited", root=self.root),
            lambda: server.init_payload("sample-paper", root=self.root),
        ]

        for mutation in mutations:
            with self.assertRaisesRegex(ValueError, "L6 卡片只允许下载"):
                mutation()

        after_status = card_tool.load_status(root=self.root)["entries"]["sample-paper"]
        self.assertEqual(after_status, before_status)

        package = server.package_payload(["sample-paper"], root=self.root)
        self.assertTrue(package["package"].endswith(".zip"))
        downloaded = server.mark_downloaded_payload(
            ["sample-paper"],
            package_name=package["package"],
            root=self.root,
        )
        self.assertEqual(downloaded["status"]["entries"]["sample-paper"]["state"], "downloaded")


class ReviewCacheTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        library_root = self.root / "paper_cards" / "library"
        cards_root = library_root / "cards"
        cards_root.mkdir(parents=True)
        (library_root / "categories.yaml").write_text(
            "paper_categories:\n- id: programmatic_verification\n  title: Programmatic Verification\n",
            encoding="utf-8",
        )

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def add_card(self, entry_id: str) -> Path:
        card = self.root / "paper_cards" / "library" / "cards" / entry_id
        sources = card / "sources"
        sources.mkdir(parents=True)
        (card / "paper.yaml").write_text(
            f"id: {entry_id}\ntitle: {entry_id}\nyear: 2025\nvenue: arXiv\n"
            "status: verified\ncategory_ids:\n- programmatic_verification\n"
            "artifacts:\n  paper: https://arxiv.org/abs/2501.00001\n",
            encoding="utf-8",
        )
        for name in ("header_zh.json", "institutions.json", "queue.json", "review.json"):
            (card / name).write_text("{}\n", encoding="utf-8")
        for key, _title in card_tool.SECTIONS:
            (sources / f"{key}.md").write_text(f"{entry_id} en\n", encoding="utf-8")
            (sources / f"{key}_ch.md").write_text(f"{entry_id} ch\n", encoding="utf-8")
        return card

    def test_review_index_builds_and_reuses_snapshot(self) -> None:
        self.add_card("first-card")

        first = server.review_index_payload(self.root)
        cache_path = server.review_cache_path(self.root)
        second = server.review_index_payload(self.root)

        self.assertTrue(cache_path.exists())
        self.assertEqual([entry["id"] for entry in first["entries"]], ["first-card"])
        self.assertEqual(first, second)

    def test_review_index_rebuilds_after_direct_card_insertion_and_deletion(self) -> None:
        first_card = self.add_card("first-card")
        server.review_index_payload(self.root)
        self.add_card("second-card")

        inserted = server.review_index_payload(self.root)
        self.assertEqual({entry["id"] for entry in inserted["entries"]}, {"first-card", "second-card"})

        import shutil

        shutil.rmtree(first_card)
        deleted = server.review_index_payload(self.root)
        self.assertEqual([entry["id"] for entry in deleted["entries"]], ["second-card"])

    def test_empty_library_builds_an_empty_index(self) -> None:
        payload = server.review_index_payload(self.root)

        self.assertEqual(payload["entries"], [])
        self.assertTrue(server.review_cache_path(self.root).exists())

    def test_corrupt_cache_is_rebuilt(self) -> None:
        self.add_card("first-card")
        cache_path = server.review_cache_path(self.root)
        cache_path.parent.mkdir(parents=True)
        cache_path.write_text("not json\n", encoding="utf-8")

        payload = server.review_index_payload(self.root)

        self.assertEqual([entry["id"] for entry in payload["entries"]], ["first-card"])
        self.assertEqual(server.review_index_payload(self.root), payload)

    def test_startup_does_not_bind_when_cache_warmup_fails(self) -> None:
        with patch.object(server, "review_index_payload", side_effect=RuntimeError("broken cache")):
            with patch.object(server, "ThreadingHTTPServer") as http_server:
                result = server.main()

        self.assertEqual(result, 1)
        http_server.assert_not_called()

    def test_saving_chinese_section_refreshes_cache_after_local_write(self) -> None:
        self.add_card("first-card")
        server.review_index_payload(self.root)

        server.save_chinese_sections("first-card", {"01_problem_ch": "updated\n"}, root=self.root)

        snapshot = json.loads(server.review_cache_path(self.root).read_text(encoding="utf-8"))
        self.assertEqual(snapshot["fingerprint"], server.review_source_fingerprint(self.root))
        self.assertEqual(snapshot["payload"]["status"]["entries"]["first-card"]["state"], "edited")


if __name__ == "__main__":
    unittest.main()
