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
        self.tmpdir = tempfile.TemporaryDirectory()
        server.ANNOTATIONS_PATH = Path(self.tmpdir.name) / "annotations.json"

    def tearDown(self):
        server.ANNOTATIONS_PATH = self.original_annotations_path
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


if __name__ == "__main__":
    unittest.main()
