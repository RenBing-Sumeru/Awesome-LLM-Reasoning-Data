#!/usr/bin/env python3
from __future__ import annotations

import json
import hashlib
import os
import sys
import inspect
import threading
from functools import wraps
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from datetime import datetime, timezone
from urllib.parse import unquote, urlparse

try:
    from . import card_tool
except ImportError:  # direct script execution
    import card_tool


ROOT = card_tool.ROOT
PORT = int(os.environ.get("PORT", "8768"))
HOST = os.environ.get("HOST", "127.0.0.1")
STATIC_ROOT = Path(__file__).resolve().parent
CACHE_SCHEMA_VERSION = 1
CARD_CACHE_SCHEMA_VERSION = 2
_WRITE_CONTEXT = threading.local()


def review_cache_path(root: Path | str | None = None) -> Path:
    project_root = card_tool.project_root(root)
    return project_root / "tmp" / "paper_cards" / "review-index.json"


def card_cache_path(entry_id: str, root: Path | str | None = None) -> Path:
    return card_tool.project_root(root) / "tmp" / "paper_cards" / "cards" / f"{entry_id}.json"


def card_source_fingerprint(entry_id: str, root: Path | str | None = None) -> str:
    project_root = card_tool.project_root(root)
    card_dir = card_tool.library.card_dir(entry_id, root)
    paths = [card_tool.library.library_root(root) / "categories.yaml"]
    if card_dir.exists():
        paths.extend(path for path in card_dir.rglob("*") if path.is_file())
    digest = hashlib.sha256()
    for path in sorted(paths):
        try:
            stat = path.stat()
            digest.update(
                f"{path.relative_to(project_root).as_posix()}\0{stat.st_size}\0{stat.st_mtime_ns}\n".encode()
            )
        except FileNotFoundError:
            digest.update(f"missing\0{path.relative_to(project_root).as_posix()}\n".encode())
    return digest.hexdigest()


def review_source_manifest(root: Path | str | None = None) -> dict[str, tuple[int, int] | None]:
    project_root = card_tool.project_root(root)
    library_root = card_tool.library.library_root(root)
    paths = [library_root / "categories.yaml"]
    cards_root = card_tool.library.cards_root(root)
    if cards_root.exists():
        paths.extend(path for path in cards_root.rglob("*") if path.is_file())
    manifest = {}
    for path in sorted(paths):
        relative = path.relative_to(project_root).as_posix()
        try:
            stat = path.stat()
            manifest[relative] = (stat.st_size, stat.st_mtime_ns)
        except FileNotFoundError:
            manifest[relative] = None
    return manifest


def fingerprint_source_manifest(manifest: dict[str, tuple[int, int] | None]) -> str:
    digest = hashlib.sha256()
    for relative, signature in sorted(manifest.items()):
        if signature is None:
            digest.update(f"missing\0{relative}\n".encode())
        else:
            digest.update(f"{relative}\0{signature[0]}\0{signature[1]}\n".encode())
    return digest.hexdigest()


def review_source_fingerprint(root: Path | str | None = None) -> str:
    return fingerprint_source_manifest(review_source_manifest(root))


def _load_review_cache(path: Path, fingerprint: str | None = None) -> dict | None:
    if not path.exists():
        return None
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return None
    cached_payload = payload.get("payload") if isinstance(payload, dict) else None
    if (
        not isinstance(payload, dict)
        or payload.get("schema_version") != CACHE_SCHEMA_VERSION
        or (fingerprint is not None and payload.get("fingerprint") != fingerprint)
        or not isinstance(cached_payload, dict)
        or not isinstance(cached_payload.get("entries"), list)
        or not isinstance(cached_payload.get("status"), dict)
        or not isinstance(cached_payload.get("queue"), dict)
    ):
        return None
    return cached_payload


def _write_review_cache(path: Path, fingerprint: str, payload: dict) -> None:
    snapshot = {
        "schema_version": CACHE_SCHEMA_VERSION,
        "fingerprint": fingerprint,
        "built_at": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "payload": payload,
    }
    card_tool.library.atomic_write_text(path, json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n")


def _review_cache_fingerprint(path: Path) -> str | None:
    try:
        snapshot = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return None
    if not isinstance(snapshot, dict) or snapshot.get("schema_version") != CACHE_SCHEMA_VERSION:
        return None
    fingerprint = snapshot.get("fingerprint")
    return fingerprint if isinstance(fingerprint, str) else None


def _load_card_cache(path: Path, fingerprint: str) -> dict | None:
    if not path.exists():
        return None
    try:
        snapshot = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return None
    payload = snapshot.get("payload") if isinstance(snapshot, dict) else None
    if (
        not isinstance(snapshot, dict)
        or snapshot.get("schema_version") != CARD_CACHE_SCHEMA_VERSION
        or snapshot.get("fingerprint") != fingerprint
        or not isinstance(payload, dict)
        or not isinstance(payload.get("card"), dict)
        or not isinstance(payload.get("preview"), dict)
        or not isinstance(payload["card"].get("queue"), dict)
    ):
        return None
    return payload


def _write_card_cache(path: Path, fingerprint: str, payload: dict) -> None:
    snapshot = {
        "schema_version": CARD_CACHE_SCHEMA_VERSION,
        "fingerprint": fingerprint,
        "built_at": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "payload": payload,
    }
    card_tool.library.atomic_write_text(path, json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n")


def _live_entries_payload(root: Path | str | None = None) -> dict:
    entries = []
    cards = card_tool.library.load_cards(root)
    entries_map = {
        entry_id: {**card["paper"], "category": list(card["paper"].get("category_ids") or [])}
        for entry_id, card in cards.items()
    }
    records = {
        "review": {entry_id: card["review"] for entry_id, card in cards.items()},
        "institutions": {entry_id: card["institutions"] for entry_id, card in cards.items()},
        "header_zh": {entry_id: card["header_zh"] for entry_id, card in cards.items()},
        "queue": {entry_id: card["queue"] for entry_id, card in cards.items()},
    }
    status = {"schema_version": 1, "updated_at": None, "entries": records["review"]}
    institutions = {"schema_version": 1, "updated_at": None, "entries": records["institutions"]}
    header_zh = {"schema_version": 1, "updated_at": None, "entries": records["header_zh"]}
    for source_order, entry in enumerate(entries_map.values()):
        entry_id = entry["id"]
        errors = card_tool.check_card(entry_id, root) if card_tool.card_source_dir(entry_id, root).exists() else []
        entries.append({
            **entry,
            "paper_card": {
                "source_exists": card_tool.card_source_dir(entry_id, root).exists(),
                "missing_count": len(errors),
                "errors": errors,
                "source_order": source_order,
                "status": status.get("entries", {}).get(entry_id) or {"state": "new"},
                "institutions": (
                    institutions.get("entries", {}).get(entry_id)
                    or {"institutions": [], "has_more": False, "no_institution": False}
                ),
                "header_zh": header_zh.get("entries", {}).get(entry_id) or {},
                "valid": card_tool.valid_report(entry_id, root, entry=entry, records=records),
            },
        })
    entries.sort(key=lambda item: item.get("paper_card", {}).get("source_order", -1), reverse=True)
    return {
        "entries": entries,
        "status": status,
        "queue": {"schema_version": 1, "updated_at": None, "entries": records["queue"]},
    }


def refresh_review_index(root: Path | str | None = None) -> dict:
    fingerprint = review_source_fingerprint(root)
    payload = _live_entries_payload(root)
    _write_review_cache(review_cache_path(root), fingerprint, payload)
    return payload


def review_index_payload(root: Path | str | None = None) -> dict:
    fingerprint = review_source_fingerprint(root)
    cached = _load_review_cache(review_cache_path(root), fingerprint)
    return cached if cached is not None else refresh_review_index(root)


def serialized_card_write(func):
    """Run one server mutation under the Card-library process lock."""
    signature = inspect.signature(func)

    @wraps(func)
    def locked(*args, **kwargs):
        root = signature.bind_partial(*args, **kwargs).arguments.get("root")
        with card_tool.library.card_write_lock(root):
            outermost = not hasattr(_WRITE_CONTEXT, "source_manifest")
            if outermost:
                _WRITE_CONTEXT.source_manifest = review_source_manifest(root)
            try:
                return func(*args, **kwargs)
            finally:
                if outermost:
                    del _WRITE_CONTEXT.source_manifest

    return locked


def _review_entry_from_card_payload(
    card: dict, source_order: int, root: Path | str | None = None
) -> dict:
    entry = card["entry"]
    errors = card.get("check_errors") or []
    return {
        **entry,
        "paper_card": {
            "source_exists": card_tool.card_source_dir(entry["id"], root).exists(),
            "missing_count": len(errors),
            "errors": errors,
            "source_order": source_order,
            "status": card.get("status") or {"state": "new"},
            "institutions": card.get("institutions") or {"institutions": [], "has_more": False, "no_institution": False},
            "header_zh": card.get("header_zh") or {},
            "valid": card.get("valid") or {},
        },
    }


def _sync_review_cache_entry(snapshot: dict, entry_id: str, card: dict, root: Path | str | None = None) -> None:
    entries = snapshot.setdefault("entries", [])
    existing = next((item for item in entries if item.get("id") == entry_id), None)
    source_order = (
        existing.get("paper_card", {}).get("source_order", 0)
        if existing
        else max((item.get("paper_card", {}).get("source_order", -1) for item in entries), default=-1) + 1
    )
    updated = _review_entry_from_card_payload(card, source_order, root)
    if existing is None:
        entries.append(updated)
    else:
        entries[entries.index(existing)] = updated
    entries.sort(key=lambda item: item.get("paper_card", {}).get("source_order", -1), reverse=True)

    status = snapshot.setdefault("status", {"schema_version": 1, "updated_at": None, "entries": {}})
    status.setdefault("entries", {})[entry_id] = card.get("status") or {"state": "new"}
    queue = snapshot.setdefault("queue", {"schema_version": 1, "updated_at": None, "entries": {}})
    queue.setdefault("entries", {})[entry_id] = card.get("queue") or {}


def refresh_after_card_write(root: Path | str | None = None, entry_id: str | None = None) -> None:
    """Refresh the changed Card cache and patch the global tmp snapshot in place."""
    if not entry_id:
        return
    before = getattr(_WRITE_CONTEXT, "source_manifest", None)
    after = review_source_manifest(root)
    path = review_cache_path(root)
    active_card_prefix = (
        card_tool.library.card_dir(entry_id, root)
        .relative_to(card_tool.project_root(root))
        .as_posix()
        + "/"
    )
    changed_paths = {
        source_path
        for source_path in set(before or {}) | set(after)
        if (before or {}).get(source_path) != after.get(source_path)
    }
    requires_rebuild = (
        before is None
        or _review_cache_fingerprint(path) != fingerprint_source_manifest(before or {})
        or any(not source_path.startswith(active_card_prefix) for source_path in changed_paths)
    )
    if requires_rebuild:
        refresh_review_index(root)
        return
    card_snapshot = _card_cache_payload(entry_id, root)["card"]
    snapshot = _load_review_cache(path)
    if snapshot is None:
        refresh_review_index(root)
        return
    _sync_review_cache_entry(snapshot, entry_id, card_snapshot, root)
    _write_review_cache(path, fingerprint_source_manifest(after), snapshot)


def entries_payload(root: Path | str | None = None) -> dict:
    return review_index_payload(root)


def warm_review_cache(root: Path | str | None = None) -> dict:
    """Build or verify every tmp artifact before the Review server starts."""
    snapshot = review_index_payload(root)
    for entry in snapshot["entries"]:
        _card_cache_payload(entry["id"], root)
    return snapshot


def section_maps(entry_id: str, root: Path | str | None = None) -> dict:
    english = {}
    chinese = {}
    for key, _title in card_tool.SECTIONS:
        en_path = card_tool.source_file(entry_id, key, "en", root)
        ch_path = card_tool.source_file(entry_id, key, "ch", root)
        english[key] = en_path.read_text(encoding="utf-8") if en_path.exists() else ""
        chinese[f"{key}_ch"] = ch_path.read_text(encoding="utf-8") if ch_path.exists() else ""
    return {"en": english, "ch": chinese}


def _live_card_payload(entry_id: str, root: Path | str | None = None) -> dict:
    if not card_tool.library.card_dir(entry_id, root).exists():
        raise ValueError(f"unknown entry_id: {entry_id}; Card 库中不存在该卡片")
    card = card_tool.library.load_card(entry_id, root)
    entry = {**card["paper"], "category": list(card["paper"].get("category_ids") or [])}
    category_ids = card_tool.clean_category_ids(
        entry.get("category"),
        "论文知识点分类",
        allow_empty=True,
        root=root,
    )
    return {
        "entry": entry,
        "sections": section_maps(entry_id, root),
        "institutions": card["institutions"] or {"institutions": [], "has_more": False, "no_institution": False},
        "header_zh": card["header_zh"],
        "queue": card["queue"],
        "category_labels": card_tool.category_details(category_ids, root),
        "category_options": card_tool.category_options(root),
        "check_errors": card_tool.check_card(entry_id, root),
            "valid": card_tool.valid_report(
                entry_id,
                root,
                entry=entry,
                records={
                    "header_zh": {entry_id: card["header_zh"]},
                    "institutions": {entry_id: card["institutions"]},
                    "queue": {entry_id: card["queue"]},
                    "review": {entry_id: card["review"] or {"state": "new"}},
                },
            ),
        "status": card["review"] or {"state": "new"},
    }


def _live_preview_payload(entry_id: str, card: dict, root: Path | str | None = None) -> dict:
    records = {
        "header_zh": card["header_zh"],
        "institutions": card["institutions"],
    }
    try:
        english = card_tool.assemble_card(card["entry"], "en", root, records)
        chinese = card_tool.assemble_card(card["entry"], "ch", root, records)
    except FileNotFoundError:
        english = ""
        chinese = ""
    return {
        "entry_id": entry_id,
        "en": english,
        "ch": chinese,
        "check_errors": card.get("check_errors") or [],
    }


def _card_cache_payload(entry_id: str, root: Path | str | None = None) -> dict:
    fingerprint = card_source_fingerprint(entry_id, root)
    path = card_cache_path(entry_id, root)
    cached = _load_card_cache(path, fingerprint)
    if cached is not None:
        return cached
    card = _live_card_payload(entry_id, root)
    payload = {"card": card, "preview": _live_preview_payload(entry_id, card, root)}
    _write_card_cache(path, fingerprint, payload)
    return payload


def card_payload(entry_id: str, root: Path | str | None = None) -> dict:
    return _card_cache_payload(entry_id, root)["card"]


def valid_chinese_key(key: str) -> bool:
    if not key.endswith("_ch"):
        return False
    base = key[:-3]
    return any(section_key == base for section_key, _title in card_tool.SECTIONS)


def assert_not_l6(entry_id: str, operation: str, root: Path | str | None = None) -> dict:
    if not card_tool.library.card_dir(entry_id, root).exists():
        raise ValueError(f"unknown entry_id: {entry_id}; Card 库中不存在该卡片")
    card = card_payload(entry_id, root)
    if card.get("valid", {}).get("level") == "L6_reviewed":
        raise ValueError(f"L6 卡片不可修改：{operation}")
    return card


def write_card_edited_status(entry_id: str, card: dict, root: Path | str | None = None) -> tuple[dict, str]:
    timestamp = card_tool.now_iso()
    status_record = dict(card.get("status") or {})
    status_record.update({"state": "edited", "updated_at": timestamp})
    status_record.pop("reviewed_at", None)
    card_tool.library.save_card_record(entry_id, "review", status_record, root)
    return status_record, timestamp


@serialized_card_write
def save_chinese_sections(entry_id: str, sections: dict, root: Path | str | None = None) -> dict:
    card = assert_not_l6(entry_id, "修改中文 section", root)
    if not isinstance(sections, dict) or not sections:
        raise ValueError("sections object is required")
    for key, value in sections.items():
        if not valid_chinese_key(key):
            raise ValueError(f"only Chinese section keys may be written: {key}")
        base = key[:-3]
        path = card_tool.source_file(entry_id, base, "ch", root)
        card_tool.library.atomic_write_text(path, str(value).rstrip() + "\n")
    status_record, timestamp = write_card_edited_status(entry_id, card, root)
    refresh_after_card_write(root, entry_id)
    return {
        "ok": True,
        "card": card_payload(entry_id, root),
        "status": {"schema_version": 1, "updated_at": timestamp, "entries": {entry_id: status_record}},
    }


@serialized_card_write
def save_institutions_payload(entry_id: str, payload: dict, root: Path | str | None = None) -> dict:
    card = assert_not_l6(entry_id, "修改机构", root)
    if not isinstance(payload, dict):
        raise ValueError("institutions object is required")
    record = card_tool.clean_institution_record(
        payload.get("institutions") if isinstance(payload.get("institutions"), list) else [],
        has_more=bool(payload.get("has_more")),
        no_institution=bool(payload.get("no_institution")),
    )
    card_tool.library.save_card_record(entry_id, "institutions", record, root)
    status_record, timestamp = write_card_edited_status(entry_id, card, root)
    refresh_after_card_write(root, entry_id)
    return {
        "ok": True,
        "institutions": record,
        "card": card_payload(entry_id, root),
        "status": {"schema_version": 1, "updated_at": timestamp, "entries": {entry_id: status_record}},
    }


@serialized_card_write
def save_header_zh_payload(entry_id: str, payload: dict, root: Path | str | None = None) -> dict:
    card = assert_not_l6(entry_id, "修改中文头字段", root)
    if not isinstance(payload, dict):
        raise ValueError("header_zh object is required")
    entry_categories = card_tool.clean_category_ids(
        card["entry"].get("category"),
        "论文知识点分类",
        allow_empty=True,
        root=root,
    )
    raw_categories = payload.get("category_ids")
    selected_categories = (
        entry_categories
        if raw_categories is None
        else card_tool.clean_category_ids(raw_categories, "论文知识点分类", allow_empty=True, root=root)
    )
    record = card_tool.clean_header_zh_record({**payload, "category_ids": selected_categories}, root)
    existing_card = card_tool.library.load_card(entry_id, root)
    header_errors = [
        error
        for error in card_tool.library.card_header_errors(
            entry_id,
            record,
            existing_card["institutions"],
            root,
        )
        if "institutions must be filled" not in error
    ]
    if header_errors:
        raise ValueError("; ".join(header_errors))
    paper = existing_card["paper"]
    paper["category_ids"] = selected_categories
    card_tool.library.save_card_paper(entry_id, paper, root)
    queue = dict(existing_card["queue"])
    queue["category_ids"] = selected_categories
    card_tool.library.save_card_record(entry_id, "queue", queue, root)
    card_tool.library.save_card_record(entry_id, "header_zh", record, root)
    status_record, timestamp = write_card_edited_status(entry_id, card, root)
    refresh_after_card_write(root, entry_id)
    return {
        "ok": True,
        "header_zh": record,
        "card": card_payload(entry_id, root),
        "status": {"schema_version": 1, "updated_at": timestamp, "entries": {entry_id: status_record}},
    }


def preview_payload(entry_id: str, root: Path | str | None = None) -> dict:
    return _card_cache_payload(entry_id, root)["preview"]


def local_card_records(entry_id: str, card: dict, review: dict | None = None) -> dict:
    return {
        "header_zh": {entry_id: card.get("header_zh") or {}},
        "institutions": {entry_id: card.get("institutions") or {}},
        "queue": {entry_id: card.get("queue") or {}},
        "review": {entry_id: review or card.get("status") or {"state": "new"}},
    }


@serialized_card_write
def review_payload(entry_id: str, root: Path | str | None = None) -> dict:
    card = card_payload(entry_id, root)
    report = card_tool.valid_report(
        entry_id,
        root,
        entry=card["entry"],
        records=local_card_records(entry_id, card),
    )
    if report.get("level") != "L5_review_ready":
        if report.get("level") == "L6_reviewed":
            report = {
                **report,
                "ok": False,
                "review_ready": False,
                "errors": ["当前卡片已是 L6，不能重复执行 L5 到 L6 晋升"],
            }
        return {
            "ok": False,
            "valid": report,
            "card": card,
            "status": {"schema_version": 1, "updated_at": None, "entries": {entry_id: card["status"]}},
        }
    timestamp = card_tool.now_iso()
    reviewed = dict(card.get("status") or {})
    reviewed.update({"state": "reviewed", "updated_at": timestamp, "reviewed_at": timestamp})
    card_tool.library.save_card_record(entry_id, "review", reviewed, root)
    report = card_tool.valid_report(
        entry_id,
        root,
        entry=card["entry"],
        records=local_card_records(entry_id, card, reviewed),
    )
    refresh_after_card_write(root, entry_id)
    return {
        "ok": True,
        "valid": report,
        "card": card_payload(entry_id, root),
        "status": {"schema_version": 1, "updated_at": timestamp, "entries": {entry_id: reviewed}},
    }


def library_location_payload(root: Path | str | None = None) -> dict:
    """Return the canonical directory a maintainer can copy to migrate Card data."""
    return {"ok": True, "library_directory": str(card_tool.library.library_root(root))}


def search_queue_payload(root: Path | str | None = None) -> dict:
    return {"queue": review_index_payload(root)["queue"]}


@serialized_card_write
def save_search_queue_item(queue_id: str, record: dict, root: Path | str | None = None) -> dict:
    queue_id = queue_id.strip()
    if not queue_id:
        raise ValueError("queue id is required")
    card = assert_not_l6(queue_id, "修改人工标注", root)
    if not isinstance(record, dict):
        raise ValueError("record object is required")
    manual_payload = record.get("manual_annotation") if isinstance(record.get("manual_annotation"), dict) else {}
    search_status = str(manual_payload.get("search_status") or "").strip()
    if search_status and search_status not in card_tool.SEARCH_STATUSES:
        raise ValueError(f"invalid search_status: {search_status}")
    manual_annotation = {
        "search_status": search_status,
        "decision_reason": str(manual_payload.get("decision_reason") or "").strip(),
        "updated_at": card_tool.now_iso(),
    }
    cleaned_record = dict(card["queue"])
    cleaned_record["manual_annotation"] = manual_annotation
    cleaned_record["updated_at"] = manual_annotation["updated_at"]
    card_tool.library.save_card_record(queue_id, "queue", cleaned_record, root)
    refresh_after_card_write(root, queue_id)
    return {"ok": True, "queue": search_queue_payload(root)["queue"], "entry": cleaned_record}


def review_page_html(root: Path | str | None = None) -> str:
    template = (STATIC_ROOT / "index.html").read_text(encoding="utf-8")
    marker = '<script id="reviewBootstrap" type="application/json"></script>'
    if marker not in template:
        raise ValueError("reviewBootstrap placeholder is missing from index.html")
    snapshot = review_index_payload(root)
    initial_entry = next(
        (
            entry
            for entry in snapshot["entries"]
            if entry.get("paper_card", {}).get("valid", {}).get("pool") == "needs_annotation"
        ),
        next(iter(snapshot["entries"]), None),
    )
    active_entry_id = initial_entry.get("id") if initial_entry else None
    bootstrap_payload = dict(snapshot)
    if active_entry_id:
        bootstrap_payload["active_entry_id"] = active_entry_id
        bootstrap_payload["active_card"] = card_payload(active_entry_id, root)
    bootstrap = json.dumps(bootstrap_payload, ensure_ascii=False).replace("</", "<\\/")
    return template.replace(marker, f'<script id="reviewBootstrap" type="application/json">{bootstrap}</script>')


class PaperCardHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(STATIC_ROOT), **kwargs)

    def end_json(self, payload: dict, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("content-type", "application/json; charset=utf-8")
        self.send_header("content-length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def end_html(self, html: str) -> None:
        body = html.encode("utf-8")
        self.send_response(200)
        self.send_header("content-type", "text/html; charset=utf-8")
        self.send_header("content-length", str(len(body)))
        self.send_header("cache-control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def read_json(self) -> dict:
        length = int(self.headers.get("content-length", "0"))
        raw = self.rfile.read(length)
        if not raw:
            return {}
        return json.loads(raw.decode("utf-8"))

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        path = parsed.path
        try:
            if path in {"/", "/index.html"}:
                self.end_html(review_page_html(ROOT))
                return
            if path == "/api/entries":
                self.end_json(entries_payload(ROOT))
                return
            if path == "/api/search-queue":
                self.end_json(search_queue_payload(ROOT))
                return
            if path == "/api/library-location":
                self.end_json(library_location_payload(ROOT))
                return
            if path.startswith("/api/card/"):
                entry_id = unquote(path.removeprefix("/api/card/")).strip("/")
                self.end_json(card_payload(entry_id, ROOT))
                return
        except Exception as exc:
            self.end_json({"error": str(exc)}, status=400)
            return
        super().do_GET()

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        path = parsed.path
        try:
            payload = self.read_json()
            if path.startswith("/api/card/") and path.endswith("/sections"):
                entry_id = unquote(path.removeprefix("/api/card/").removesuffix("/sections")).strip("/")
                self.end_json(save_chinese_sections(entry_id, payload.get("sections") or {}, ROOT))
                return
            if path.startswith("/api/card/") and path.endswith("/institutions"):
                entry_id = unquote(path.removeprefix("/api/card/").removesuffix("/institutions")).strip("/")
                self.end_json(save_institutions_payload(entry_id, payload.get("institutions") or {}, ROOT))
                return
            if path.startswith("/api/card/") and path.endswith("/header-zh"):
                entry_id = unquote(path.removeprefix("/api/card/").removesuffix("/header-zh")).strip("/")
                self.end_json(save_header_zh_payload(entry_id, payload.get("header_zh") or {}, ROOT))
                return
            if path.startswith("/api/card/") and path.endswith("/preview"):
                entry_id = unquote(path.removeprefix("/api/card/").removesuffix("/preview")).strip("/")
                self.end_json(preview_payload(entry_id, ROOT))
                return
            if path.startswith("/api/card/") and path.endswith("/review"):
                entry_id = unquote(path.removeprefix("/api/card/").removesuffix("/review")).strip("/")
                self.end_json(review_payload(entry_id, ROOT))
                return
            if path.startswith("/api/search-queue/"):
                queue_id = unquote(path.removeprefix("/api/search-queue/")).strip("/")
                self.end_json(save_search_queue_item(queue_id, payload.get("record") or {}, ROOT))
                return
        except json.JSONDecodeError as exc:
            self.end_json({"error": f"invalid JSON: {exc}"}, status=400)
            return
        except Exception as exc:
            self.end_json({"error": str(exc)}, status=400)
            return
        self.send_error(404)


def main() -> int:
    try:
        warm_review_cache(ROOT)
    except Exception as exc:
        print(f"Review cache warmup failed; server not started: {exc}", file=sys.stderr)
        return 1
    server = ThreadingHTTPServer((HOST, PORT), PaperCardHandler)
    print(f"Paper card editor: http://{HOST}:{PORT}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping paper card editor.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
