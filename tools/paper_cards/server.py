#!/usr/bin/env python3
from __future__ import annotations

import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

try:
    from . import card_tool
except ImportError:  # direct script execution
    import card_tool


ROOT = card_tool.ROOT
PORT = int(os.environ.get("PORT", "8768"))
STATIC_ROOT = Path(__file__).resolve().parent


def entries_payload(root: Path | str | None = None) -> dict:
    entries = []
    status = card_tool.load_status(root)
    institutions = card_tool.load_institutions(root)
    header_zh = card_tool.load_header_zh(root)
    for source_order, entry in enumerate(card_tool.load_entries(root).values()):
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
                "institutions": institutions.get("entries", {}).get(entry_id) or card_tool.institution_record(entry_id, root),
                "header_zh": header_zh.get("entries", {}).get(entry_id) or {},
                "valid": card_tool.valid_report(entry_id, root, entry=entry),
            },
        })
    entries.sort(key=lambda item: item.get("paper_card", {}).get("source_order", -1), reverse=True)
    return {"entries": entries, "status": status}


def section_maps(entry_id: str, root: Path | str | None = None) -> dict:
    english = {}
    chinese = {}
    for key, _title in card_tool.SECTIONS:
        en_path = card_tool.source_file(entry_id, key, "en", root)
        ch_path = card_tool.source_file(entry_id, key, "ch", root)
        english[key] = en_path.read_text(encoding="utf-8") if en_path.exists() else ""
        chinese[f"{key}_ch"] = ch_path.read_text(encoding="utf-8") if ch_path.exists() else ""
    return {"en": english, "ch": chinese}


def card_payload(entry_id: str, root: Path | str | None = None) -> dict:
    entries = card_tool.load_entries(root)
    if entry_id not in entries:
        raise ValueError(f"unknown entry_id: {entry_id}")
    category_ids = card_tool.clean_category_ids(
        entries[entry_id].get("category"),
        "论文知识点分类",
        root=root,
    )
    return {
        "entry": entries[entry_id],
        "sections": section_maps(entry_id, root),
        "institutions": card_tool.institution_record(entry_id, root),
        "header_zh": card_tool.header_zh_record(entry_id, root),
        "category_labels": card_tool.category_details(category_ids, root),
        "check_errors": card_tool.check_card(entry_id, root),
        "valid": card_tool.valid_report(entry_id, root, entry=entries[entry_id]),
        "status": card_tool.load_status(root).get("entries", {}).get(entry_id) or {"state": "new"},
    }


def valid_chinese_key(key: str) -> bool:
    if not key.endswith("_ch"):
        return False
    base = key[:-3]
    return any(section_key == base for section_key, _title in card_tool.SECTIONS)


def assert_not_l6(entry_id: str, operation: str, root: Path | str | None = None) -> None:
    entries = card_tool.load_entries(root)
    entry = entries.get(entry_id)
    if not entry:
        return
    report = card_tool.valid_report(entry_id, root, entry=entry)
    if report.get("level") == "L6_reviewed":
        raise ValueError(f"L6 卡片只允许下载，不能执行：{operation}")


def save_chinese_sections(entry_id: str, sections: dict, root: Path | str | None = None) -> dict:
    entries = card_tool.load_entries(root)
    if entry_id not in entries:
        raise ValueError(f"unknown entry_id: {entry_id}")
    assert_not_l6(entry_id, "修改中文 section", root)
    if not isinstance(sections, dict) or not sections:
        raise ValueError("sections object is required")
    for key, value in sections.items():
        if not valid_chinese_key(key):
            raise ValueError(f"only Chinese section keys may be written: {key}")
        base = key[:-3]
        path = card_tool.source_file(entry_id, base, "ch", root)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(str(value).rstrip() + "\n", encoding="utf-8")
    status = card_tool.update_status(entry_id, "edited", root=root)
    return {"ok": True, "card": card_payload(entry_id, root), "status": status}


def save_institutions_payload(entry_id: str, payload: dict, root: Path | str | None = None) -> dict:
    assert_not_l6(entry_id, "修改机构", root)
    if not isinstance(payload, dict):
        raise ValueError("institutions object is required")
    record = card_tool.save_institutions(
        entry_id,
        payload.get("institutions") if isinstance(payload.get("institutions"), list) else [],
        has_more=bool(payload.get("has_more")),
        no_institution=bool(payload.get("no_institution")),
        root=root,
    )
    status = card_tool.update_status(entry_id, "edited", root=root)
    return {"ok": True, "institutions": record, "card": card_payload(entry_id, root), "status": status}


def save_header_zh_payload(entry_id: str, payload: dict, root: Path | str | None = None) -> dict:
    assert_not_l6(entry_id, "修改中文头字段", root)
    if not isinstance(payload, dict):
        raise ValueError("header_zh object is required")
    entry = card_tool.load_entries(root).get(entry_id) or {}
    entry_categories = card_tool.clean_category_ids(entry.get("category"), "论文知识点分类", root=root)
    raw_categories = payload.get("category_ids")
    if raw_categories is not None and card_tool.clean_category_ids(raw_categories, root=root) != entry_categories:
        raise ValueError("知识点分类必须与论文库标签一致")
    saved_payload = {**payload, "category_ids": entry_categories}
    record = card_tool.save_header_zh(entry_id, saved_payload, root=root)
    status = card_tool.update_status(entry_id, "edited", root=root)
    return {"ok": True, "header_zh": record, "card": card_payload(entry_id, root), "status": status}


def preview_payload(entry_id: str, root: Path | str | None = None) -> dict:
    entries = card_tool.load_entries(root)
    if entry_id not in entries:
        raise ValueError(f"unknown entry_id: {entry_id}")
    return {
        "entry_id": entry_id,
        "en": card_tool.assemble_card(entries[entry_id], "en", root),
        "ch": card_tool.assemble_card(entries[entry_id], "ch", root),
        "check_errors": card_tool.check_card(entry_id, root),
    }


def review_payload(entry_id: str, root: Path | str | None = None) -> dict:
    entries = card_tool.load_entries(root)
    if entry_id not in entries:
        raise ValueError(f"unknown entry_id: {entry_id}")
    report = card_tool.valid_report(entry_id, root, entry=entries[entry_id])
    if report.get("level") != "L5_review_ready":
        if report.get("level") == "L6_reviewed":
            report = {
                **report,
                "ok": False,
                "review_ready": False,
                "errors": ["当前卡片已是 L6，不能重复执行 L5 到 L6 晋升"],
            }
        card_tool.save_valid_report(report, root)
        return {"ok": False, "valid": report, "card": card_payload(entry_id, root), "status": card_tool.load_status(root)}
    status = card_tool.update_status(entry_id, "reviewed", root=root)
    report = card_tool.valid_report(entry_id, root, entry=entries[entry_id])
    card_tool.save_valid_report(report, root)
    return {"ok": True, "valid": report, "card": card_payload(entry_id, root), "status": status}


def downgrade_to_l4_payload(entry_id: str, root: Path | str | None = None) -> dict:
    entries = card_tool.load_entries(root)
    if entry_id not in entries:
        raise ValueError(f"unknown entry_id: {entry_id}")
    report = card_tool.valid_report(entry_id, root, entry=entries[entry_id])
    if report.get("level") != "L5_review_ready":
        raise ValueError(f"{entry_id}: 只能从 L5 降级到 L4")

    queue = card_tool.load_search_queue(root)
    record = dict(queue.get("entries", {}).get(entry_id) or {})
    for key in ["search_status", "decision_reason", "reason_to_include", "review_note"]:
        record.pop(key, None)
    record["updated_at"] = card_tool.now_iso()
    queue["entries"][entry_id] = record
    queue["updated_at"] = record["updated_at"]
    card_tool.save_search_queue(queue, root)

    status = card_tool.update_status(entry_id, "edited", root=root)
    report = card_tool.valid_report(entry_id, root, entry=entries[entry_id])
    card_tool.save_valid_report(report, root)
    return {"ok": True, "valid": report, "card": card_payload(entry_id, root), "status": status}


def package_payload(entry_ids: list[str], root: Path | str | None = None) -> dict:
    package = card_tool.write_package(entry_ids, root=root)
    return {"ok": True, "entry_ids": entry_ids, "package": package.name, "download_url": f"/packages/{package.name}"}


def mark_downloaded_payload(
    entry_ids: list[str],
    package_name: str | None = None,
    root: Path | str | None = None,
) -> dict:
    if not entry_ids:
        raise ValueError("entry_ids are required")
    known = card_tool.load_entries(root)
    status = card_tool.load_status(root)
    for entry_id in entry_ids:
        if entry_id not in known:
            raise ValueError(f"unknown entry_id: {entry_id}")
        report = card_tool.valid_report(entry_id, root, entry=known[entry_id])
        if not card_tool.is_downloadable_report(report):
            raise ValueError(f"{entry_id}: only L5 or L6 cards can be marked downloaded")
    for entry_id in entry_ids:
        status = card_tool.update_status(entry_id, "downloaded", package_name, root)
    return {"ok": True, "status": status}


def init_payload(entry_id: str, root: Path | str | None = None) -> dict:
    assert_not_l6(entry_id, "重新初始化卡片源", root)
    created = card_tool.init_card_source(entry_id, root=root)
    return {"ok": True, "created": [path.name for path in created], "card": card_payload(entry_id, root)}


def search_queue_payload(root: Path | str | None = None) -> dict:
    return {"queue": card_tool.load_search_queue(root)}


def save_search_queue_item(queue_id: str, record: dict, root: Path | str | None = None) -> dict:
    queue_id = queue_id.strip()
    if not queue_id:
        raise ValueError("queue id is required")
    assert_not_l6(queue_id, "修改人工标注", root)
    if not isinstance(record, dict):
        raise ValueError("record object is required")
    search_status = record.get("search_status") or "candidate"
    if search_status not in card_tool.SEARCH_STATUSES:
        raise ValueError(f"invalid search_status: {search_status}")
    candidate_links = record.get("candidate_links") if isinstance(record.get("candidate_links"), dict) else {}
    allowed_link_keys = ["paper", "arxiv", "code", "data", "project", "huggingface", "doi"]
    cleaned_links = {key: str(candidate_links.get(key) or "").strip() or None for key in allowed_link_keys}
    entry = card_tool.load_entries(root).get(queue_id) or {}
    entry_categories = entry.get("category") if isinstance(entry.get("category"), list) else []
    expected_categories = card_tool.clean_category_ids(entry_categories, "论文知识点分类", root=root) if entry_categories else None
    raw_track_guess = record.get("track_guess") if isinstance(record.get("track_guess"), list) else []
    track_guess = expected_categories if not raw_track_guess and expected_categories else card_tool.clean_category_ids(
        raw_track_guess,
        "搜索知识点分类",
        root=root,
    )
    if expected_categories and track_guess != expected_categories:
        raise ValueError("搜索知识点分类必须与论文库标签一致")
    cleaned_record = {
        "title": str(record.get("title") or "").strip(),
        "candidate_links": cleaned_links,
        "track_guess": track_guess,
        "reason_to_include": str(record.get("reason_to_include") or "").strip(),
        "decision_reason": str(record.get("decision_reason") or record.get("reason_to_include") or "").strip(),
        "search_status": search_status,
        "review_note": str(record.get("review_note") or "").strip(),
        "updated_at": card_tool.now_iso(),
    }
    if card_tool.library.card_dir(queue_id, root).exists():
        card_tool.library.save_card_record(queue_id, "queue", cleaned_record, root)
        queue = card_tool.load_search_queue(root)
        return {"ok": True, "queue": queue, "entry": cleaned_record}
    queue = card_tool.load_search_queue(root)
    queue["entries"][queue_id] = cleaned_record
    queue["updated_at"] = cleaned_record["updated_at"]
    card_tool.save_search_queue(queue, root)
    return {"ok": True, "queue": queue, "entry": cleaned_record}


def status_payload(
    entry_id: str,
    state: str,
    package_name: str | None = None,
    root: Path | str | None = None,
) -> dict:
    entries = card_tool.load_entries(root)
    entry = entries.get(entry_id)
    if entry:
        report = card_tool.valid_report(entry_id, root, entry=entry)
        if state == "downloaded":
            if not card_tool.is_downloadable_report(report):
                raise ValueError(f"{entry_id}: only L5 or L6 cards can be marked downloaded")
        elif report.get("level") == "L6_reviewed":
            raise ValueError(f"L6 卡片只允许下载，不能执行：修改状态为 {state}")
        elif state == "reviewed":
            raise ValueError("请通过完成修改该卡片执行 L5 到 L6 晋升")
    return {"ok": True, "status": card_tool.update_status(entry_id, state, package_name, root)}


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
            if path == "/api/entries":
                self.end_json(entries_payload(ROOT))
                return
            if path == "/api/search-queue":
                self.end_json(search_queue_payload(ROOT))
                return
            if path.startswith("/api/card/"):
                entry_id = unquote(path.removeprefix("/api/card/")).strip("/")
                self.end_json(card_payload(entry_id, ROOT))
                return
            if path.startswith("/packages/"):
                name = Path(unquote(path.removeprefix("/packages/"))).name
                package = card_tool.packages_root(ROOT) / name
                if not package.exists():
                    self.send_error(404)
                    return
                body = package.read_bytes()
                self.send_response(200)
                self.send_header("content-type", "application/zip")
                self.send_header("content-disposition", f'attachment; filename="{name}"')
                self.send_header("content-length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
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
            if path.startswith("/api/card/") and path.endswith("/downgrade-l4"):
                entry_id = unquote(path.removeprefix("/api/card/").removesuffix("/downgrade-l4")).strip("/")
                self.end_json(downgrade_to_l4_payload(entry_id, ROOT))
                return
            if path == "/api/package":
                entry_ids = payload.get("entry_ids") or []
                if isinstance(entry_ids, str):
                    entry_ids = [item.strip() for item in entry_ids.split(",") if item.strip()]
                self.end_json(package_payload(entry_ids, ROOT))
                return
            if path == "/api/status/batch":
                entry_ids = payload.get("entry_ids") or []
                if isinstance(entry_ids, str):
                    entry_ids = [item.strip() for item in entry_ids.split(",") if item.strip()]
                self.end_json(mark_downloaded_payload(entry_ids, payload.get("package"), ROOT))
                return
            if path.startswith("/api/status/"):
                entry_id = unquote(path.removeprefix("/api/status/")).strip("/")
                state = payload.get("state") or "downloaded"
                package_name = payload.get("package")
                self.end_json(status_payload(entry_id, state, package_name, ROOT))
                return
            if path.startswith("/api/init/"):
                entry_id = unquote(path.removeprefix("/api/init/")).strip("/")
                self.end_json(init_payload(entry_id, ROOT))
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
    server = ThreadingHTTPServer(("127.0.0.1", PORT), PaperCardHandler)
    print(f"Paper card editor: http://127.0.0.1:{PORT}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping paper card editor.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
