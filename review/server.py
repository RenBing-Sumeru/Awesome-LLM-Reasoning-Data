#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import re
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ANNOTATIONS_PATH = ROOT / "review" / "annotations.json"
PAPERS_PATH = ROOT / "data" / "papers.yaml"
PORT = int(os.environ.get("PORT", "9817"))
CURATION_LEVELS = {
    "L0_seeded",
    "L1_link_verified",
    "L2_artifact_verified",
    "L3_summary_ready",
    "L4_carded",
    "L5_audit_ready",
}


def load_annotations() -> dict:
    try:
        payload = json.loads(ANNOTATIONS_PATH.read_text(encoding="utf-8"))
    except FileNotFoundError:
        payload = {"schema_version": 1, "updated_at": None, "annotations": {}}
    if not isinstance(payload, dict) or not isinstance(payload.get("annotations"), dict):
        return {"schema_version": 1, "updated_at": None, "annotations": {}}
    payload.setdefault("schema_version", 1)
    return payload


def save_annotations(payload: dict) -> None:
    ANNOTATIONS_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def append_annotation(record: dict) -> dict:
    payload = load_annotations()
    entry_id = record["entry_id"]
    existing = payload["annotations"].get(entry_id, [])
    if not isinstance(existing, list):
        existing = []
    payload["annotations"][entry_id] = [*existing, record]
    payload["updated_at"] = record.get("created_at")
    save_annotations(payload)
    return payload


def has_card(entry_id: str) -> bool:
    pattern = re.compile(r"<!--\s*entry_id:\s*([^\s]+)\s*-->")
    for path in (ROOT / "cards").glob("**/*.md"):
        if path.name == "README.md" or "template" in path.name:
            continue
        try:
            match = pattern.search(path.read_text(encoding="utf-8"))
        except UnicodeDecodeError:
            continue
        if match and match.group(1) == entry_id:
            return True
    return False


def entry_block_pattern(entry_id: str) -> re.Pattern[str]:
    return re.compile(rf"^- id: {re.escape(entry_id)}\n(?:(?!^- id: ).*\n?)*", re.MULTILINE)


def current_level_from_block(block: str) -> str:
    match = re.search(r"^  curation_level:\s*(\S+)\s*$", block, flags=re.MULTILINE)
    return match.group(1) if match else "L0_seeded"


def replace_curation_level(text: str, entry_id: str, target_level: str) -> tuple[str, str]:
    pattern = entry_block_pattern(entry_id)
    match = pattern.search(text)
    if not match:
        raise ValueError(f"entry not found: {entry_id}")
    block = match.group(0)
    current_level = current_level_from_block(block)
    if re.search(r"^  curation_level:", block, flags=re.MULTILINE):
        new_block = re.sub(r"^  curation_level:\s*\S+\s*$", f"  curation_level: {target_level}", block, count=1, flags=re.MULTILINE)
    elif re.search(r"^  verification:", block, flags=re.MULTILINE):
        new_block = re.sub(r"^  verification:", f"  curation_level: {target_level}\n  verification:", block, count=1, flags=re.MULTILINE)
    else:
        new_block = block.rstrip() + f"\n  curation_level: {target_level}\n"
    return text[:match.start()] + new_block + text[match.end():], current_level


def update_entry_level(entry_id: str, target_level: str, note: str) -> dict:
    if target_level not in CURATION_LEVELS:
        raise ValueError(f"invalid curation level: {target_level}")
    if target_level == "L5_audit_ready" and not note.strip():
        raise ValueError("L5_audit_ready requires a human review note")
    if target_level in {"L4_carded", "L5_audit_ready"} and not has_card(entry_id):
        raise ValueError(f"{target_level} requires an existing local card")

    text = PAPERS_PATH.read_text(encoding="utf-8")
    updated, current_level = replace_curation_level(text, entry_id, target_level)
    if updated != text:
        PAPERS_PATH.write_text(updated, encoding="utf-8")
    return {"entry_id": entry_id, "previous_level": current_level, "target_level": target_level, "source_updated": updated != text}


class ReviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_json(self, payload: dict, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("content-type", "application/json; charset=utf-8")
        self.send_header("content-length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        if self.path == "/api/annotations":
            self.end_json(load_annotations())
            return
        super().do_GET()

    def do_POST(self) -> None:
        if self.path not in {"/api/annotations", "/api/review"}:
            self.send_error(404)
            return
        length = int(self.headers.get("content-length", "0"))
        raw = self.rfile.read(length)
        try:
            payload = json.loads(raw.decode("utf-8"))
        except json.JSONDecodeError as exc:
            self.end_json({"error": f"invalid JSON: {exc}"}, status=400)
            return
        if self.path == "/api/annotations":
            if not isinstance(payload, dict) or not isinstance(payload.get("annotations"), dict):
                self.end_json({"error": "payload must contain an annotations object"}, status=400)
                return
            payload.setdefault("schema_version", 1)
            save_annotations(payload)
            self.end_json({"ok": True, "path": "review/annotations.json"})
            return

        record = payload.get("record") if isinstance(payload, dict) else None
        if not isinstance(record, dict) or not record.get("entry_id") or not str(record.get("note", "")).strip():
            self.end_json({"error": "record.entry_id and non-empty record.note are required"}, status=400)
            return
        target_level = record.get("target_level") or record.get("current_level") or "L0_seeded"
        try:
            source_result = update_entry_level(record["entry_id"], target_level, str(record.get("note", "")))
            annotations = append_annotation(record)
        except ValueError as exc:
            self.end_json({"error": str(exc)}, status=400)
            return
        self.end_json({"ok": True, "source": source_result, "annotations": annotations})


def main() -> None:
    server = ThreadingHTTPServer(("127.0.0.1", PORT), ReviewHandler)
    print(f"Review server: http://127.0.0.1:{PORT}/review/")
    print("Annotations: review/annotations.json")
    server.serve_forever()


if __name__ == "__main__":
    main()
