import importlib.util
import json
import tempfile
import unittest
from pathlib import Path


SERVER_PATH = Path(__file__).with_name("server.py")
SPEC = importlib.util.spec_from_file_location("review_server", SERVER_PATH)
server = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(server)


class AnnotationStorageTest(unittest.TestCase):
    def setUp(self):
        self.original_annotations_path = server.ANNOTATIONS_PATH
        self.original_localizations_path = server.LOCALIZATIONS_PATH
        self.original_institutions_path = server.INSTITUTIONS_PATH
        self.tmpdir = tempfile.TemporaryDirectory()
        server.ANNOTATIONS_PATH = Path(self.tmpdir.name) / "annotations.json"
        server.LOCALIZATIONS_PATH = Path(self.tmpdir.name) / "localizations.json"
        server.INSTITUTIONS_PATH = Path(self.tmpdir.name) / "institutions" / "institutions.json"

    def tearDown(self):
        server.ANNOTATIONS_PATH = self.original_annotations_path
        server.LOCALIZATIONS_PATH = self.original_localizations_path
        server.INSTITUTIONS_PATH = self.original_institutions_path
        self.tmpdir.cleanup()

    def write_payload(self, payload):
        server.ANNOTATIONS_PATH.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")

    def test_load_annotations_keeps_only_latest_record_per_entry(self):
        self.write_payload({
            "schema_version": 1,
            "updated_at": "2026-01-02T00:00:00.000Z",
            "annotations": {
                "paper-1": [
                    {"entry_id": "paper-1", "note": "old", "created_at": "2026-01-01T00:00:00.000Z"},
                    {"entry_id": "paper-1", "note": "new", "created_at": "2026-01-02T00:00:00.000Z"},
                ]
            },
        })

        payload = server.load_annotations()

        self.assertEqual(len(payload["annotations"]["paper-1"]), 1)
        self.assertEqual(payload["annotations"]["paper-1"][0]["note"], "new")

    def test_replace_annotation_overwrites_existing_record(self):
        self.write_payload({
            "schema_version": 1,
            "updated_at": "2026-01-01T00:00:00.000Z",
            "annotations": {
                "paper-1": [
                    {"entry_id": "paper-1", "note": "old", "created_at": "2026-01-01T00:00:00.000Z"}
                ]
            },
        })

        payload = server.append_annotation({
            "entry_id": "paper-1",
            "note": "replacement",
            "created_at": "2026-01-02T00:00:00.000Z",
        })

        self.assertEqual(len(payload["annotations"]["paper-1"]), 1)
        self.assertEqual(payload["annotations"]["paper-1"][0]["note"], "replacement")

    def test_save_localization_replaces_existing_record_and_allows_empty_fields(self):
        server.save_record_file(server.LOCALIZATIONS_PATH, {
            "schema_version": 1,
            "entries": {
                "paper-1": {"entry_id": "paper-1", "one_line_summary": "old"}
            },
        })

        payload = server.replace_entry_record(server.LOCALIZATIONS_PATH, {
            "entry_id": "paper-1",
            "title": "Paper",
            "one_line_summary": "",
            "why_it_matters": "中文价值",
            "updated_at": "2026-01-03T00:00:00.000Z",
        })

        self.assertEqual(payload["entries"]["paper-1"]["one_line_summary"], "")
        self.assertEqual(payload["entries"]["paper-1"]["why_it_matters"], "中文价值")
        self.assertEqual(len(payload["entries"]), 1)

    def test_save_institutions_replaces_existing_record(self):
        server.save_record_file(server.INSTITUTIONS_PATH, {
            "schema_version": 1,
            "entries": {
                "paper-1": {"entry_id": "paper-1", "institutions": ["Old"], "has_more": False}
            },
        })

        payload = server.replace_entry_record(server.INSTITUTIONS_PATH, {
            "entry_id": "paper-1",
            "title": "Paper",
            "institutions": ["UW", "", "MIT", "", ""],
            "has_more": True,
            "updated_at": "2026-01-03T00:00:00.000Z",
        })

        self.assertEqual(payload["entries"]["paper-1"]["institutions"], ["UW", "", "MIT", "", ""])
        self.assertEqual(payload["entries"]["paper-1"]["has_more"], True)
        self.assertEqual(len(payload["entries"]), 1)


if __name__ == "__main__":
    unittest.main()
