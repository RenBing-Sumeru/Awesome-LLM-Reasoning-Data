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
        library_root = self.root / "paper_cards" / "library"
        (library_root / "cards").mkdir(parents=True)
        (library_root / "categories.yaml").write_text(
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
        self.add_card("sample-paper", "Sample Paper", 2025)

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def add_card(self, entry_id: str, title: str, year: int) -> Path:
        card = self.root / "paper_cards" / "library" / "cards" / entry_id
        sources = card / "sources"
        sources.mkdir(parents=True)
        (card / "paper.yaml").write_text(
            f"id: {entry_id}\ntitle: {title}\nyear: {year}\nvenue: arXiv\nstatus: verified\n"
            "category_ids:\n- programmatically_verifiable_outcome_data\n"
            "artifacts:\n  paper: https://arxiv.org/abs/2501.00001\n",
            encoding="utf-8",
        )
        for name in ("header_zh.json", "institutions.json", "queue.json", "review.json"):
            (card / name).write_text("{}\n", encoding="utf-8")
        for key, _title in card_tool.SECTIONS:
            (sources / f"{key}.md").write_text(f"{title} English section\n", encoding="utf-8")
            (sources / f"{key}_ch.md").write_text(f"{title} 中文 section\n", encoding="utf-8")
        return card

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
                "manual_annotation": {
                    "search_status": "promoted",
                    "decision_reason": "人工确认有用。",
                },
            },
            root=self.root,
        )

    def test_entries_include_source_status(self) -> None:
        payload = server.entries_payload(root=self.root)

        entry = payload["entries"][0]
        self.assertEqual(entry["id"], "sample-paper")
        self.assertEqual(entry["paper_card"]["source_exists"], True)
        self.assertGreater(entry["paper_card"]["missing_count"], 0)

    def test_entries_follow_project_order_descending(self) -> None:
        import shutil

        shutil.rmtree(self.root / "paper_cards" / "library" / "cards" / "sample-paper")
        self.add_card("first-paper", "First Paper", 2024)
        self.add_card("second-paper", "Second Paper", 2025)

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
        text = (self.root / "paper_cards" / "library" / "cards" / "sample-paper" / "sources" / "01_problem_ch.md").read_text(encoding="utf-8")
        self.assertEqual(text, "人工中文修改。\n")

    def test_save_chinese_sections_uses_atomic_replace_for_the_source_file(self) -> None:
        with patch.object(card_tool.library.os, "replace", wraps=card_tool.library.os.replace) as replace:
            server.save_chinese_sections(
                "sample-paper",
                {"01_problem_ch": "原子写入。"},
                root=self.root,
            )

        targets = {call.args[1].name for call in replace.call_args_list}
        self.assertIn("01_problem_ch.md", targets)

    def test_save_chinese_sections_acquires_the_card_library_write_lock(self) -> None:
        with patch.object(card_tool.library, "card_write_lock", create=True) as write_lock:
            server.save_chinese_sections(
                "sample-paper",
                {"01_problem_ch": "加锁写入。"},
                root=self.root,
            )

        self.assertTrue(any(call.args == (self.root,) for call in write_lock.call_args_list))

    def test_save_chinese_sections_marks_the_card_edited(self) -> None:
        payload = server.save_chinese_sections(
            "sample-paper",
            {"01_problem_ch": "保存后的中文修改。"},
            root=self.root,
        )

        self.assertEqual(payload["status"]["entries"]["sample-paper"]["state"], "edited")

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
        path = self.root / "paper_cards" / "library" / "cards" / "sample-paper" / "institutions.json"
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
        path = self.root / "paper_cards" / "library" / "cards" / "sample-paper" / "header_zh.json"
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

    def test_save_search_queue_item_stores_manual_annotation_separately(self) -> None:
        payload = server.save_search_queue_item(
            "sample-paper",
            {
                "manual_annotation": {
                    "search_status": "promoted",
                    "decision_reason": "人工确认有用。",
                },
            },
            root=self.root,
        )

        self.assertEqual(
            payload["entry"]["manual_annotation"],
            {
                "search_status": "promoted",
                "decision_reason": "人工确认有用。",
                "updated_at": payload["entry"]["manual_annotation"]["updated_at"],
            },
        )
        self.assertNotIn("decision_reason", payload["entry"])

    def test_legacy_queue_reason_does_not_count_as_a_manual_annotation(self) -> None:
        entry = card_tool.load_entries(self.root)["sample-paper"]
        report = card_tool.valid_report(
            "sample-paper",
            root=self.root,
            entry=entry,
            records={
                "queue": {
                    "sample-paper": {
                        "search_status": "promoted",
                        "decision_reason": "自动收录理由。",
                    }
                }
            },
        )

        self.assertIn("缺少人工标注：判决状态", report["errors"])
        self.assertIn("缺少人工标注：一句话描述理由", report["errors"])

    def test_preview_payload_assembles_both_languages(self) -> None:
        payload = server.preview_payload("sample-paper", root=self.root)

        self.assertIn("# Paper Card: Sample Paper", payload["en"])
        self.assertIn("# 论文卡片：Sample Paper", payload["ch"])
        self.assertNotIn("Ask the Atlas", payload["ch"])

    def test_card_payload_returns_header_zh_and_read_only_category_label(self) -> None:
        payload = server.card_payload("sample-paper", root=self.root)

        self.assertIn("header_zh", payload)
        self.assertEqual(payload["category_labels"][0]["id"], "programmatically_verifiable_outcome_data")

    def test_library_location_payload_returns_canonical_directory(self) -> None:
        self.assertTrue(hasattr(server, "library_location_payload"))

        payload = server.library_location_payload(root=self.root)

        self.assertEqual(payload, {
            "ok": True,
            "library_directory": str(self.root / "paper_cards" / "library"),
        })
        self.assertFalse((self.root / "paper_cards" / "packages").exists())


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

    def test_save_search_queue_item_preserves_collection_categories(self) -> None:
        server.save_search_queue_item(
            "sample-paper",
            {
                "manual_annotation": {
                    "search_status": "candidate",
                    "decision_reason": "人工理由。",
                },
            },
            root=self.root,
        )

        self.assertEqual(
            card_tool.load_entries(self.root)["sample-paper"]["category"],
            ["programmatically_verifiable_outcome_data"],
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
        self.assertFalse(status_path.exists())

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

    def test_l6_blocks_all_mutations(self) -> None:
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
                    "manual_annotation": {
                        "search_status": "candidate",
                        "decision_reason": "L6 should not change.",
                    },
                },
                root=self.root,
            ),
        ]

        for mutation in mutations:
            with self.assertRaisesRegex(ValueError, "L6 卡片不可修改"):
                mutation()

        after_status = card_tool.load_status(root=self.root)["entries"]["sample-paper"]
        self.assertEqual(after_status, before_status)



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
        with patch.object(server, "warm_review_cache", side_effect=RuntimeError("broken cache")):
            with patch.object(server, "ThreadingHTTPServer") as http_server:
                result = server.main()

        self.assertEqual(result, 1)
        http_server.assert_not_called()

    def test_saving_chinese_section_invalidates_index_without_full_refresh(self) -> None:
        self.add_card("first-card")
        server.review_index_payload(self.root)
        review_cache = server.review_cache_path(self.root)
        card_cache = server.card_cache_path("first-card", self.root)

        with patch.object(server, "refresh_review_index", wraps=server.refresh_review_index) as refresh:
            payload = server.save_chinese_sections(
                "first-card", {"01_problem_ch": "updated\n"}, root=self.root
            )

        self.assertFalse(refresh.called)
        self.assertTrue(review_cache.exists())
        self.assertTrue(card_cache.exists())
        self.assertEqual(payload["card"]["sections"]["ch"]["01_problem_ch"], "updated\n")

        cached = server.entries_payload(self.root)
        self.assertEqual(cached["entries"][0]["paper_card"]["status"]["state"], "edited")
        self.assertTrue(cached["entries"][0]["paper_card"]["source_exists"])

    def test_external_card_change_during_save_rebuilds_the_global_snapshot(self) -> None:
        self.add_card("first-card")
        self.add_card("second-card")
        server.warm_review_cache(self.root)
        original_save = card_tool.library.save_card_record

        def save_with_external_change(entry_id: str, name: str, record: dict, root: Path) -> dict:
            saved = original_save(entry_id, name, record, root)
            if entry_id == "first-card":
                original_save(
                    "second-card",
                    "queue",
                    {"manual_annotation": {"decision_reason": "external change"}},
                    root,
                )
            return saved

        with (
            patch.object(card_tool.library, "save_card_record", side_effect=save_with_external_change),
            patch.object(server, "refresh_review_index", wraps=server.refresh_review_index) as refresh,
        ):
            server.save_search_queue_item(
                "first-card",
                {
                    "manual_annotation": {
                        "search_status": "candidate",
                        "decision_reason": "first save",
                    }
                },
                root=self.root,
            )

        self.assertTrue(refresh.called)
        queue = server.search_queue_payload(self.root)["queue"]
        self.assertEqual(
            queue["entries"]["second-card"]["manual_annotation"]["decision_reason"],
            "external change",
        )

    def test_search_queue_reads_the_review_snapshot_without_loading_cards(self) -> None:
        self.add_card("first-card")
        server.review_index_payload(self.root)

        with patch.object(card_tool, "load_search_queue", side_effect=AssertionError("should read tmp")):
            payload = server.search_queue_payload(self.root)

        self.assertEqual(payload["queue"]["entries"], {"first-card": {}})

    def test_saving_search_queue_uses_only_the_current_card_tmp(self) -> None:
        self.add_card("first-card")
        server.warm_review_cache(self.root)

        with (
            patch.object(card_tool, "load_entries", side_effect=AssertionError("should not scan all Cards")),
            patch.object(card_tool, "load_search_queue", side_effect=AssertionError("should not scan all queues")),
            patch.object(card_tool, "load_status", side_effect=AssertionError("should not scan all reviews")),
        ):
            payload = server.save_search_queue_item(
                "first-card",
                {
                    "manual_annotation": {
                        "search_status": "candidate",
                        "decision_reason": "tmp save",
                    }
                },
                root=self.root,
            )

        self.assertEqual(
            payload["queue"]["entries"]["first-card"]["manual_annotation"]["decision_reason"],
            "tmp save",
        )

    def test_saving_institutions_uses_only_the_current_card_tmp(self) -> None:
        self.add_card("first-card")
        server.warm_review_cache(self.root)

        with (
            patch.object(card_tool, "load_entries", side_effect=AssertionError("should not scan all Cards")),
            patch.object(card_tool, "load_institutions", side_effect=AssertionError("should not scan all institutions")),
            patch.object(card_tool, "load_status", side_effect=AssertionError("should not scan all reviews")),
        ):
            payload = server.save_institutions_payload(
                "first-card",
                {"institutions": ["Local Lab"], "has_more": False, "no_institution": False},
                root=self.root,
            )

        self.assertEqual(payload["institutions"]["institutions"], ["Local Lab"])
        self.assertEqual(payload["status"]["entries"]["first-card"]["state"], "edited")

    def test_saving_chinese_section_uses_only_the_current_card_tmp(self) -> None:
        self.add_card("first-card")
        server.warm_review_cache(self.root)

        with (
            patch.object(card_tool, "load_entries", side_effect=AssertionError("should not scan all Cards")),
            patch.object(card_tool, "load_status", side_effect=AssertionError("should not scan all reviews")),
        ):
            payload = server.save_chinese_sections(
                "first-card", {"01_problem_ch": "local section\n"}, root=self.root
            )

        self.assertEqual(payload["card"]["sections"]["ch"]["01_problem_ch"], "local section\n")
        self.assertEqual(payload["status"]["entries"]["first-card"]["state"], "edited")

    def test_saving_header_uses_only_the_current_card_tmp(self) -> None:
        card = self.add_card("first-card")
        (card / "institutions.json").write_text(json.dumps({"no_institution": True}), encoding="utf-8")
        server.warm_review_cache(self.root)

        with (
            patch.object(card_tool, "load_entries", side_effect=AssertionError("should not scan all Cards")),
            patch.object(card_tool, "load_search_queue", side_effect=AssertionError("should not scan all queues")),
            patch.object(card_tool, "load_header_zh", side_effect=AssertionError("should not scan all headers")),
            patch.object(card_tool, "load_status", side_effect=AssertionError("should not scan all reviews")),
        ):
            payload = server.save_header_zh_payload(
                "first-card",
                {
                    "one_line_summary_ch": "一句话",
                    "reading_priority_ch": "必读",
                    "paper_type_ch": "基准",
                    "best_for_ch": "研究者",
                    "confidence_ch": "高",
                    "authors_ch": "作者",
                    "category_ids": ["programmatic_verification"],
                },
                root=self.root,
            )

        self.assertEqual(payload["header_zh"]["one_line_summary_ch"], "一句话")
        self.assertEqual(payload["status"]["entries"]["first-card"]["state"], "edited")

    def test_review_promotion_uses_only_the_current_card_tmp(self) -> None:
        card = self.add_card("first-card")
        (card / "header_zh.json").write_text(
            json.dumps(
                {
                    "one_line_summary_ch": "一句话",
                    "reading_priority_ch": "必读",
                    "paper_type_ch": "基准",
                    "best_for_ch": "研究者",
                    "confidence_ch": "高",
                    "authors_ch": "作者",
                    "category_ids": ["programmatic_verification"],
                },
                ensure_ascii=False,
            ),
            encoding="utf-8",
        )
        (card / "institutions.json").write_text(
            json.dumps({"institutions": ["Lab"], "has_more": False, "no_institution": False}),
            encoding="utf-8",
        )
        (card / "queue.json").write_text(
            json.dumps(
                {"manual_annotation": {"search_status": "candidate", "decision_reason": "ready"}}
            ),
            encoding="utf-8",
        )
        (card / "review.json").write_text(json.dumps({"state": "edited"}), encoding="utf-8")
        server.warm_review_cache(self.root)

        with (
            patch.object(card_tool, "load_entries", side_effect=AssertionError("should not scan all Cards")),
            patch.object(card_tool, "load_search_queue", side_effect=AssertionError("should not scan all queues")),
            patch.object(card_tool, "load_status", side_effect=AssertionError("should not scan all reviews")),
        ):
            payload = server.review_payload("first-card", root=self.root)

        self.assertTrue(payload["ok"])
        self.assertEqual(payload["valid"]["level"], "L6_reviewed")

    def test_review_page_embeds_the_warmed_tmp_snapshot(self) -> None:
        self.add_card("first-card")
        server.warm_review_cache(self.root)

        page = server.review_page_html(self.root)

        self.assertIn('id="reviewBootstrap"', page)
        self.assertIn('"id": "first-card"', page)
        self.assertIn('"active_entry_id": "first-card"', page)
        self.assertIn('"active_card"', page)
        self.assertNotIn('data-entry="first-card"', page)

    def test_card_and_preview_payloads_write_card_local_cache(self) -> None:
        self.add_card("first-card")

        server.card_payload("first-card", self.root)
        server.preview_payload("first-card", self.root)

        cache_path = server.card_cache_path("first-card", self.root)
        snapshot = json.loads(cache_path.read_text(encoding="utf-8"))
        self.assertIn("card", snapshot["payload"])
        self.assertIn("preview", snapshot["payload"])

    def test_card_cache_missing_queue_is_rebuilt(self) -> None:
        self.add_card("first-card")
        server.card_payload("first-card", self.root)
        cache_path = server.card_cache_path("first-card", self.root)
        snapshot = json.loads(cache_path.read_text(encoding="utf-8"))
        del snapshot["payload"]["card"]["queue"]
        cache_path.write_text(json.dumps(snapshot), encoding="utf-8")

        payload = server.card_payload("first-card", self.root)

        self.assertEqual(payload["queue"], {})


if __name__ == "__main__":
    unittest.main()
