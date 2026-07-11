#!/usr/bin/env python3
"""Move Paper Card local records across repository versions."""
from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import uuid
import zipfile
from pathlib import Path
from typing import Any

try:
    from . import card_tool
    from . import library
except ImportError:  # direct script execution
    import card_tool
    import library


FORMAT = "paper-card-local-records"
SCHEMA_VERSION = 1
def root_path(root: Path | str | None = None) -> Path:
    return card_tool.project_root(root)


def batches_root(root: Path | str | None = None) -> Path:
    return card_tool.paper_cards_root(root) / "prompt_batches"


def batch_path(batch_id: str, root: Path | str | None = None) -> Path:
    cleaned = str(batch_id or "").strip()
    if not cleaned or cleaned != Path(cleaned).name or cleaned in {".", ".."}:
        raise ValueError("batch_id must be a simple file name")
    return batches_root(root) / f"{cleaned}.json"


def json_bytes(payload: Any) -> bytes:
    return (json.dumps(payload, ensure_ascii=False, indent=2, default=str) + "\n").encode("utf-8")


def json_payload(raw: bytes, label: str) -> dict:
    try:
        payload = json.loads(raw.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise ValueError(f"invalid JSON in {label}: {exc}") from exc
    if not isinstance(payload, dict):
        raise ValueError(f"{label} must contain a JSON object")
    return payload


def sha256(raw: bytes) -> str:
    return hashlib.sha256(raw).hexdigest()


def current_entries_list(root: Path | str | None = None) -> list[dict]:
    payload = card_tool.load_yaml(root_path(root) / "data" / "papers.yaml")
    if not isinstance(payload, list):
        raise ValueError("data/papers.yaml must contain a list")
    return [item for item in payload if isinstance(item, dict)]


def save_entries_list(entries: list[dict], root: Path | str | None = None) -> None:
    if card_tool.yaml is None:
        raise RuntimeError("PyYAML is required to write data/papers.yaml")
    path = root_path(root) / "data" / "papers.yaml"
    path.write_text(
        card_tool.yaml.safe_dump(entries, allow_unicode=True, sort_keys=False, width=120),
        encoding="utf-8",
    )


def valid_category(category_id: str, root: Path | str | None = None) -> str:
    category_id = str(category_id or "").strip()
    known = {item["id"] for item in card_tool.category_options(root)}
    if category_id not in known:
        raise ValueError(f"unknown category: {category_id}")
    return category_id


def request_digest(request_text: str) -> str:
    return sha256(str(request_text or "").strip().encode("utf-8"))


def generated_batch_id(request_text: str) -> str:
    return f"batch-{request_digest(request_text)[:10]}-{uuid.uuid4().hex[:8]}"


def initialize_library(root: Path | str | None = None) -> dict:
    """Convert the current shared-record layout into Card-local directories."""
    project = root_path(root)
    target = library.library_root(project)
    cards = library.cards_root(project)
    if cards.exists() and any(cards.iterdir()):
        raise ValueError("Card library already contains records")
    target.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(project / "data" / "categories.yaml", target / "categories.yaml")
    cards.mkdir(exist_ok=True)

    entries = card_tool.load_entries(project)
    headers = card_tool.load_header_zh(project)["entries"]
    institutions = card_tool.load_institutions(project)["entries"]
    queue = card_tool.load_search_queue(project)["entries"]
    status = card_tool.load_status(project)["entries"]
    batches = {
        path.stem: json_payload(path.read_bytes(), path.name)
        for path in sorted(batches_root(project).glob("*.json"))
    }
    written = []
    for entry_id, entry in sorted(entries.items()):
        directory = library.card_dir(entry_id, project)
        directory.mkdir(parents=True)
        paper = dict(entry)
        paper["category_ids"] = list(paper.pop("category", []) or [])
        batch_id = paper.pop("prompt_batch_id", None)
        if batch_id:
            batch = batches.get(str(batch_id))
            if batch is None:
                raise ValueError(f"missing prompt batch for {entry_id}: {batch_id}")
            paper["batch"] = {
                "id": str(batch_id),
                "request_sha256": batch.get("request_sha256"),
                "primary_category_id": batch.get("category_id"),
            }
        library.clean_category_ids(paper["category_ids"], project)
        if card_tool.yaml is None:
            raise RuntimeError("PyYAML is required to write the Card library")
        (directory / "paper.yaml").write_text(
            card_tool.yaml.safe_dump(paper, allow_unicode=True, sort_keys=False, width=120),
            encoding="utf-8",
        )
        for name, records, default in [
            ("header_zh", headers, {}),
            ("institutions", institutions, {"institutions": [], "has_more": False, "no_institution": False}),
            ("queue", queue, {}),
            ("review", status, {"state": "new"}),
        ]:
            library.save_card_record(entry_id, name, dict(records.get(entry_id) or default), project)
        source = card_tool.card_source_dir(entry_id, project)
        if not source.exists():
            raise ValueError(f"missing Card sources for {entry_id}")
        shutil.copytree(source, directory / "sources")
        library.load_card(entry_id, project)
        written.append(entry_id)
    return {"entry_ids": written}


def apply_prompt_batch(
    batch_id: str | None,
    category_id: str,
    entry_ids: list[str],
    request_text: str = "",
    root: Path | str | None = None,
) -> dict:
    """Bind one prompt batch to one category and apply it to every entry."""
    category_id = valid_category(category_id, root)
    batch_id = str(batch_id or "").strip() or generated_batch_id(request_text)
    entry_ids = list(dict.fromkeys(str(item).strip() for item in entry_ids if str(item).strip()))
    if not entry_ids:
        raise ValueError("entry_ids are required")

    entries = current_entries_list(root)
    by_id = {str(item.get("id")): item for item in entries if item.get("id")}
    missing = [entry_id for entry_id in entry_ids if entry_id not in by_id]
    if missing:
        raise ValueError(f"unknown entry_ids: {', '.join(missing)}")
    for path in sorted(batches_root(root).glob("*.json")):
        existing = json_payload(path.read_bytes(), path.name)
        if path.stem == batch_id:
            continue
        overlap = sorted(set(entry_ids) & {str(item) for item in existing.get("entry_ids") or []})
        if overlap:
            raise ValueError(f"entries already belong to batch {path.stem}: {', '.join(overlap)}")
    for entry_id in entry_ids:
        by_id[entry_id]["category"] = [category_id]
        by_id[entry_id]["prompt_batch_id"] = batch_id
    save_entries_list(entries, root)

    headers = card_tool.load_header_zh(root)
    queue = card_tool.load_search_queue(root)
    for entry_id in entry_ids:
        header = dict(headers["entries"].get(entry_id) or {})
        header["category_ids"] = [category_id]
        headers["entries"][entry_id] = card_tool.clean_header_zh_record(header, root)

        record = dict(queue["entries"].get(entry_id) or {})
        record["title"] = str(record.get("title") or by_id[entry_id].get("title") or "").strip()
        record["track_guess"] = [category_id]
        record["updated_at"] = card_tool.now_iso()
        queue["entries"][entry_id] = record
    timestamp = card_tool.now_iso()
    headers["updated_at"] = timestamp
    queue["updated_at"] = timestamp
    card_tool.save_header_zh_payload(headers, root)
    card_tool.save_search_queue(queue, root)

    batch = {
        "schema_version": SCHEMA_VERSION,
        "batch_id": batch_id,
        "request_sha256": request_digest(request_text),
        "category_id": category_id,
        "entry_ids": entry_ids,
        "updated_at": timestamp,
    }
    path = batch_path(batch_id, root)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(json_bytes(batch))

    # Recompute cached validation after category/header changes.
    for entry_id in entry_ids:
        card_tool.save_valid_report(card_tool.valid_report(entry_id, root), root)
    return batch


def selected_entries(entry_ids: list[str] | None, root: Path | str | None = None) -> list[str]:
    entries = card_tool.load_entries(root)
    if entry_ids:
        selected = list(dict.fromkeys(str(item).strip() for item in entry_ids if str(item).strip()))
    else:
        selected = sorted(entries)
    missing = [entry_id for entry_id in selected if entry_id not in entries]
    if missing:
        raise ValueError(f"unknown entry_ids: {', '.join(missing)}")
    return selected


def selected_batches(batch_ids: list[str] | None, root: Path | str | None = None) -> list[str]:
    if batch_ids:
        selected = list(dict.fromkeys(str(item).strip() for item in batch_ids if str(item).strip()))
    else:
        selected = [path.stem for path in sorted(batches_root(root).glob("*.json"))]
    missing = [batch_id for batch_id in selected if not batch_path(batch_id, root).exists()]
    if missing:
        raise ValueError(f"unknown batch_ids: {', '.join(missing)}")
    return selected


def export_batches(
    entry_ids: list[str],
    batch_ids: list[str] | None,
    root: Path | str | None = None,
) -> list[str]:
    selected = set(entry_ids)
    candidates = selected_batches(batch_ids, root)
    if batch_ids is None:
        candidates = [
            batch_id
            for batch_id in candidates
            if selected & {str(item) for item in json_payload(batch_path(batch_id, root).read_bytes(), f"{batch_id}.json").get("entry_ids") or []}
        ]
    for batch_id in candidates:
        batch = json_payload(batch_path(batch_id, root).read_bytes(), f"{batch_id}.json")
        members = {str(item) for item in batch.get("entry_ids") or []}
        if not members <= selected:
            raise ValueError(f"batch {batch_id} must include every batch entry in the archive")
    return candidates


def archive_files(entry_ids: list[str], batch_ids: list[str], root: Path | str | None = None) -> dict[str, bytes]:
    entries = card_tool.load_entries(root)
    headers = card_tool.load_header_zh(root)["entries"]
    institutions = card_tool.load_institutions(root)["entries"]
    queue = card_tool.load_search_queue(root)["entries"]
    status = card_tool.load_status(root)["entries"]
    files: dict[str, bytes] = {}
    for entry_id in entry_ids:
        prefix = f"records/{entry_id}"
        files[f"{prefix}/entry.json"] = json_bytes(entries[entry_id])
        source_dir = card_tool.card_source_dir(entry_id, root)
        if source_dir.exists():
            for path in sorted(item for item in source_dir.rglob("*") if item.is_file()):
                relative = path.relative_to(source_dir).as_posix()
                files[f"{prefix}/sources/{relative}"] = path.read_bytes()
        for name, records in [
            ("header_zh", headers),
            ("institutions", institutions),
            ("search_queue", queue),
            ("status", status),
        ]:
            if entry_id in records:
                files[f"{prefix}/local/{name}.json"] = json_bytes(records[entry_id])
    for batch_id in batch_ids:
        files[f"batches/{batch_id}.json"] = batch_path(batch_id, root).read_bytes()
    return files


def export_records(
    output: Path | str,
    entry_ids: list[str] | None = None,
    batch_ids: list[str] | None = None,
    root: Path | str | None = None,
) -> dict:
    selected = selected_entries(entry_ids, root)
    batches = export_batches(selected, batch_ids, root)
    files = archive_files(selected, batches, root)
    manifest = {
        "format": FORMAT,
        "schema_version": SCHEMA_VERSION,
        "created_at": card_tool.now_iso(),
        "entry_ids": selected,
        "batch_ids": batches,
        "files": {name: sha256(raw) for name, raw in sorted(files.items())},
    }
    output = Path(output)
    output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(output, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        archive.writestr("manifest.json", json_bytes(manifest))
        for name, raw in sorted(files.items()):
            archive.writestr(name, raw)
    return manifest


def read_archive(archive_path: Path | str) -> tuple[dict, dict[str, bytes]]:
    archive_path = Path(archive_path)
    with zipfile.ZipFile(archive_path) as archive:
        names = set(archive.namelist())
        if "manifest.json" not in names:
            raise ValueError("archive is missing manifest.json")
        manifest = json_payload(archive.read("manifest.json"), "manifest.json")
        if manifest.get("format") != FORMAT or manifest.get("schema_version") != SCHEMA_VERSION:
            raise ValueError("unsupported local records archive")
        expected = manifest.get("files") if isinstance(manifest.get("files"), dict) else None
        if expected is None:
            raise ValueError("archive manifest is missing files")
        files = {name: archive.read(name) for name in expected}
    for name, digest in expected.items():
        if not isinstance(digest, str) or sha256(files[name]) != digest:
            raise ValueError(f"checksum mismatch: {name}")
    return manifest, files


def archive_records(manifest: dict, files: dict[str, bytes]) -> dict[str, dict]:
    records: dict[str, dict] = {}
    for entry_id in manifest.get("entry_ids") or []:
        entry_id = str(entry_id)
        prefix = f"records/{entry_id}/"
        entry_name = f"{prefix}entry.json"
        if entry_name not in files:
            raise ValueError(f"archive is missing {entry_name}")
        records[entry_id] = {
            "entry": json_payload(files[entry_name], entry_name),
            "sources": {
                name.removeprefix(f"{prefix}sources/"): raw
                for name, raw in files.items()
                if name.startswith(f"{prefix}sources/")
            },
            "local": {
                name.removeprefix(f"{prefix}local/").removesuffix(".json"): json_payload(raw, name)
                for name, raw in files.items()
                if name.startswith(f"{prefix}local/")
            },
        }
        if records[entry_id]["entry"].get("id") != entry_id:
            raise ValueError(f"entry id mismatch: {entry_id}")
    return records


def archive_batches(manifest: dict, files: dict[str, bytes]) -> dict[str, dict]:
    batches = {}
    for batch_id in manifest.get("batch_ids") or []:
        name = f"batches/{batch_id}.json"
        if name not in files:
            raise ValueError(f"archive is missing {name}")
        batch = json_payload(files[name], name)
        if batch.get("batch_id") != batch_id:
            raise ValueError(f"batch id mismatch: {batch_id}")
        batches[batch_id] = batch
    return batches


def validate_batch_categories(records: dict[str, dict], batches: dict[str, dict], root: Path | str | None = None) -> None:
    for batch_id, batch in batches.items():
        category_id = valid_category(str(batch.get("category_id") or ""), root)
        entry_ids = [str(item) for item in batch.get("entry_ids") or []]
        if not entry_ids:
            raise ValueError(f"batch {batch_id} has no entry_ids")
        for entry_id in entry_ids:
            record = records.get(entry_id)
            if record is None:
                raise ValueError(f"batch {batch_id} references an entry outside the archive: {entry_id}")
            if record["entry"].get("category") != [category_id]:
                raise ValueError(f"batch {batch_id} category mismatch for {entry_id}")
            if record["entry"].get("prompt_batch_id") != batch_id:
                raise ValueError(f"batch {batch_id} provenance mismatch for {entry_id}")
            header = record["local"].get("header_zh") or {}
            queue = record["local"].get("search_queue") or {}
            if header.get("category_ids") != [category_id]:
                raise ValueError(f"batch {batch_id} header category mismatch for {entry_id}")
            if queue.get("track_guess") != [category_id]:
                raise ValueError(f"batch {batch_id} search category mismatch for {entry_id}")


def update_local_payload(payload: dict, name: str, records: dict[str, dict]) -> None:
    entries = payload.setdefault("entries", {})
    for entry_id, record in records.items():
        if name in record["local"]:
            entries[entry_id] = record["local"][name]
        else:
            entries.pop(entry_id, None)
    payload["updated_at"] = card_tool.now_iso()


def import_records(archive_path: Path | str, root: Path | str | None = None) -> dict:
    manifest, files = read_archive(archive_path)
    records = archive_records(manifest, files)
    batches = archive_batches(manifest, files)
    validate_batch_categories(records, batches, root)

    entries = current_entries_list(root)
    indexes = {str(entry.get("id")): index for index, entry in enumerate(entries) if entry.get("id")}
    for entry_id, record in records.items():
        if entry_id in indexes:
            entries[indexes[entry_id]] = record["entry"]
        else:
            entries.append(record["entry"])
    save_entries_list(entries, root)

    for entry_id, record in records.items():
        source_dir = card_tool.card_source_dir(entry_id, root)
        if source_dir.exists():
            shutil.rmtree(source_dir)
        for relative, raw in record["sources"].items():
            destination = source_dir / relative
            if destination != source_dir and source_dir not in destination.parents:
                raise ValueError(f"unsafe source path: {relative}")
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(raw)

    payloads = {
        "header_zh": card_tool.load_header_zh(root),
        "institutions": card_tool.load_institutions(root),
        "search_queue": card_tool.load_search_queue(root),
        "status": card_tool.load_status(root),
    }
    for name, payload in payloads.items():
        update_local_payload(payload, name, records)
    card_tool.save_header_zh_payload(payloads["header_zh"], root)
    card_tool.save_institutions_payload(payloads["institutions"], root)
    card_tool.save_search_queue(payloads["search_queue"], root)
    card_tool.save_status(payloads["status"], root)

    for batch_id, batch in batches.items():
        path = batch_path(batch_id, root)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(json_bytes(batch))

    for entry_id in records:
        card_tool.save_valid_report(card_tool.valid_report(entry_id, root), root)
    return manifest


def clear_records(archive_path: Path | str, confirmed: bool = False, root: Path | str | None = None) -> dict:
    if not confirmed:
        raise ValueError("clear requires confirmed=True")
    manifest, files = read_archive(archive_path)
    records = archive_records(manifest, files)
    batches = archive_batches(manifest, files)
    for entry_id in records:
        source_dir = card_tool.card_source_dir(entry_id, root)
        if source_dir.exists():
            shutil.rmtree(source_dir)

    payloads = {
        "header_zh": card_tool.load_header_zh(root),
        "institutions": card_tool.load_institutions(root),
        "search_queue": card_tool.load_search_queue(root),
        "status": card_tool.load_status(root),
        "valid_status": card_tool.load_valid_status(root),
    }
    for payload in payloads.values():
        for entry_id in records:
            payload.setdefault("entries", {}).pop(entry_id, None)
        payload["updated_at"] = card_tool.now_iso()
    card_tool.save_header_zh_payload(payloads["header_zh"], root)
    card_tool.save_institutions_payload(payloads["institutions"], root)
    card_tool.save_search_queue(payloads["search_queue"], root)
    card_tool.save_status(payloads["status"], root)
    card_tool.save_valid_status(payloads["valid_status"], root)

    cleared_ids = set(records)
    for batch_id, batch in batches.items():
        if set(str(item) for item in batch.get("entry_ids") or []) <= cleared_ids:
            batch_path(batch_id, root).unlink(missing_ok=True)
    return manifest


def move_out_records(
    output: Path | str,
    entry_ids: list[str] | None = None,
    batch_ids: list[str] | None = None,
    confirmed: bool = False,
    root: Path | str | None = None,
) -> dict:
    if not confirmed:
        raise ValueError("move-out requires confirmed=True")
    manifest = export_records(output, entry_ids=entry_ids, batch_ids=batch_ids, root=root)
    clear_records(output, confirmed=True, root=root)
    return manifest


def verify_records(archive_path: Path | str, root: Path | str | None = None) -> dict:
    manifest, files = read_archive(archive_path)
    records = archive_records(manifest, files)
    batches = archive_batches(manifest, files)
    validate_batch_categories(records, batches, root)
    return manifest


def verify_current_records(root: Path | str | None = None) -> dict:
    entries = card_tool.load_entries(root)
    headers = card_tool.load_header_zh(root)["entries"]
    queue = card_tool.load_search_queue(root)["entries"]
    memberships: dict[str, str] = {}
    batch_count = 0
    for path in sorted(batches_root(root).glob("*.json")):
        batch = json_payload(path.read_bytes(), path.name)
        category = valid_category(str(batch.get("category_id") or ""), root)
        entry_ids = [str(entry_id) for entry_id in batch.get("entry_ids") or []]
        if not entry_ids:
            raise ValueError(f"batch {path.stem} has no entry_ids")
        for entry_id in entry_ids:
            if entry_id in memberships:
                raise ValueError(f"entry belongs to multiple batches: {entry_id}")
            memberships[entry_id] = path.stem
            entry_id = str(entry_id)
            entry = entries.get(entry_id)
            if not entry or entry.get("category") != [category]:
                raise ValueError(f"batch category mismatch: {path.stem}/{entry_id}")
            if entry.get("prompt_batch_id") != path.stem:
                raise ValueError(f"batch provenance mismatch: {path.stem}/{entry_id}")
            header = headers.get(entry_id)
            record = queue.get(entry_id)
            if not isinstance(header, dict) or header.get("category_ids") != [category]:
                raise ValueError(f"header category mismatch: {entry_id}")
            if not isinstance(record, dict) or record.get("track_guess") != [category]:
                raise ValueError(f"search category mismatch: {entry_id}")
        batch_count += 1
    unbatched_entry_ids = []
    for entry_id, entry in entries.items():
        prompt_batch_id = str(entry.get("prompt_batch_id") or "").strip()
        if not prompt_batch_id:
            unbatched_entry_ids.append(entry_id)
        elif memberships.get(entry_id) != prompt_batch_id:
            raise ValueError(f"entry provenance batch mismatch: {entry_id}")
    return {"entries": len(entries), "batches": batch_count, "unbatched_entry_ids": sorted(unbatched_entry_ids)}


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Export, restore, and validate Paper Card local records.")
    parser.add_argument("--root", help="project root; defaults to this repository")
    commands = parser.add_subparsers(dest="command", required=True)

    batch = commands.add_parser("batch", help="apply one category to a prompt batch")
    batch.add_argument("--batch", help="optional custom batch id; generated when omitted")
    batch.add_argument("--category", required=True)
    batch.add_argument("--entries", nargs="+", required=True)
    batch.add_argument("--request", required=True, help="request text is hashed, never stored")

    def export_args(command: argparse.ArgumentParser) -> None:
        command.add_argument("--output", required=True)
        command.add_argument("--entries", nargs="+")
        command.add_argument("--batches", nargs="+")

    export_args(commands.add_parser("export", help="write an immutable local-records archive"))
    importer = commands.add_parser("import", help="restore records from an archive")
    importer.add_argument("--input", required=True)
    clearer = commands.add_parser("clear", help="remove only local records listed in an archive")
    clearer.add_argument("--input", required=True)
    clearer.add_argument("--yes", action="store_true")
    move_out = commands.add_parser("move-out", help="export then clear local records")
    export_args(move_out)
    move_out.add_argument("--yes", action="store_true")
    move_in = commands.add_parser("move-in", help="restore and validate local records")
    move_in.add_argument("--input", required=True)
    verify = commands.add_parser("verify", help="validate archive checksums and batch categories")
    verify.add_argument("--input", required=True)
    commands.add_parser("verify-current", help="validate current library and local prompt batches")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    root = Path(args.root) if args.root else None
    if args.command == "batch":
        payload = apply_prompt_batch(args.batch, args.category, args.entries, args.request, root)
    elif args.command == "export":
        payload = export_records(args.output, args.entries, args.batches, root)
    elif args.command == "import":
        payload = import_records(args.input, root)
    elif args.command == "clear":
        payload = clear_records(args.input, args.yes, root)
    elif args.command == "move-out":
        payload = move_out_records(args.output, args.entries, args.batches, args.yes, root)
    elif args.command == "move-in":
        payload = import_records(args.input, root)
        verify_current_records(root)
    elif args.command == "verify-current":
        payload = verify_current_records(root)
    else:  # verify
        payload = verify_records(args.input, root)
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
