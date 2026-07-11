#!/usr/bin/env python3
"""One-time migration utilities for the independent Paper Card library."""
from __future__ import annotations

import argparse
import json
import shutil
from pathlib import Path
from typing import Any

try:
    from . import card_tool
    from . import library
except ImportError:  # direct script execution
    import card_tool
    import library


def root_path(root: Path | str | None = None) -> Path:
    return card_tool.project_root(root)


def json_payload(raw: bytes, label: str) -> dict[str, Any]:
    try:
        payload = json.loads(raw.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise ValueError(f"invalid JSON in {label}: {exc}") from exc
    if not isinstance(payload, dict):
        raise ValueError(f"{label} must contain a JSON object")
    return payload


def legacy_entries(project: Path) -> dict[str, dict[str, Any]]:
    payload = card_tool.load_yaml(project / "data" / "papers.yaml")
    if not isinstance(payload, list):
        raise ValueError("legacy shared paper metadata must contain a list")
    entries = {str(item.get("id")): dict(item) for item in payload if isinstance(item, dict) and item.get("id")}
    if not entries:
        raise ValueError("legacy shared paper metadata has no entries")
    return entries


def legacy_records(project: Path, filename: str) -> dict[str, dict[str, Any]]:
    payload = card_tool.load_json_file(project / "paper_cards" / filename, {"entries": {}})
    entries = payload.get("entries") if isinstance(payload.get("entries"), dict) else {}
    return {str(entry_id): dict(record) for entry_id, record in entries.items() if isinstance(record, dict)}


def legacy_batches(project: Path) -> dict[str, dict[str, Any]]:
    directory = project / "paper_cards" / "prompt_batches"
    if not directory.exists():
        return {}
    return {path.stem: json_payload(path.read_bytes(), path.name) for path in sorted(directory.glob("*.json"))}


def card_paper_from_legacy(entry: dict[str, Any], batches: dict[str, dict[str, Any]], project: Path) -> dict[str, Any]:
    paper = dict(entry)
    paper["category_ids"] = list(paper.pop("category", []) or [])
    batch_id = str(paper.pop("prompt_batch_id", "") or "").strip()
    if batch_id:
        batch = batches.get(batch_id)
        if batch is None:
            raise ValueError(f"missing legacy prompt batch for {paper.get('id')}: {batch_id}")
        paper["batch"] = {
            "id": batch_id,
            "request_sha256": batch.get("request_sha256"),
            "primary_category_id": batch.get("category_id"),
        }
    library.clean_category_ids(paper["category_ids"], project)
    return paper


def initialize_library(root: Path | str | None = None) -> dict[str, list[str]]:
    """Copy a legacy shared layout into self-contained Card directories."""
    project = root_path(root)
    cards = library.cards_root(project)
    if cards.exists() and any(cards.iterdir()):
        raise ValueError("Card library already contains records")
    legacy_categories = project / "data" / "categories.yaml"
    if not legacy_categories.exists():
        raise ValueError("legacy category catalog is missing")
    library.library_root(project).mkdir(parents=True, exist_ok=True)
    shutil.copyfile(legacy_categories, library.library_root(project) / "categories.yaml")
    cards.mkdir(exist_ok=True)

    entries = legacy_entries(project)
    headers = legacy_records(project, "header_zh.json")
    institutions = legacy_records(project, "institutions.json")
    queue = legacy_records(project, "search_queue.json")
    status = legacy_records(project, "status.json")
    batches = legacy_batches(project)
    written = []
    for entry_id, entry in sorted(entries.items()):
        directory = library.card_dir(entry_id, project)
        directory.mkdir(parents=True)
        library.save_card_paper(entry_id, card_paper_from_legacy(entry, batches, project), project)
        local_records = {
            "header_zh": headers.get(entry_id, {}),
            "institutions": institutions.get(entry_id, {"institutions": [], "has_more": False, "no_institution": False}),
            "queue": queue.get(entry_id, {}),
            "review": status.get(entry_id, {"state": "new"}),
        }
        legacy_category_ids = local_records["queue"].pop("track_guess", None)
        if not isinstance(local_records["queue"].get("category_ids"), list) and isinstance(legacy_category_ids, list):
            local_records["queue"]["category_ids"] = legacy_category_ids
        for name, record in local_records.items():
            library.save_card_record(entry_id, name, record, project)
        source = project / "paper_cards" / "sources" / entry_id
        if not source.exists():
            raise ValueError(f"missing Card sources for {entry_id}")
        shutil.copytree(source, directory / "sources")
        library.load_card(entry_id, project)
        written.append(entry_id)
    return {"entry_ids": written}


def verify_library_parity(root: Path | str | None = None) -> dict[str, list[str]]:
    """Verify that every legacy record was copied unchanged into its Card."""
    project = root_path(root)
    entries = legacy_entries(project)
    cards = library.load_cards(project)
    if set(entries) != set(cards):
        raise ValueError("Card IDs do not match legacy paper IDs")
    headers = legacy_records(project, "header_zh.json")
    institutions = legacy_records(project, "institutions.json")
    queue = legacy_records(project, "search_queue.json")
    status = legacy_records(project, "status.json")
    batches = legacy_batches(project)
    for entry_id, entry in entries.items():
        card = cards[entry_id]
        if card["paper"] != card_paper_from_legacy(entry, batches, project):
            raise ValueError(f"Card metadata mismatch: {entry_id}")
        expected_queue = dict(queue.get(entry_id, {}))
        legacy_category_ids = expected_queue.pop("track_guess", None)
        if not isinstance(expected_queue.get("category_ids"), list) and isinstance(legacy_category_ids, list):
            expected_queue["category_ids"] = legacy_category_ids
        expected_records = {
            "header_zh": headers.get(entry_id, {}),
            "institutions": institutions.get(entry_id, {"institutions": [], "has_more": False, "no_institution": False}),
            "queue": expected_queue,
            "review": status.get(entry_id, {"state": "new"}),
        }
        for name, expected in expected_records.items():
            if card[name] != expected:
                raise ValueError(f"Card {name} mismatch: {entry_id}")
        source = project / "paper_cards" / "sources" / entry_id
        original_files = {path.relative_to(source).as_posix(): path.read_bytes() for path in source.rglob("*") if path.is_file()}
        copied_files = {
            path.relative_to(card["sources"]).as_posix(): path.read_bytes()
            for path in card["sources"].rglob("*")
            if path.is_file()
        }
        if copied_files != original_files:
            raise ValueError(f"Card source mismatch: {entry_id}")
    return {"entry_ids": sorted(cards)}


def cutover_library(confirmed: bool = False, root: Path | str | None = None) -> dict[str, list[str]]:
    """Delete the legacy layout only after a byte-for-byte parity check."""
    if not confirmed:
        raise ValueError("library cutover requires confirmed=True")
    result = verify_library_parity(root)
    normalize_library_records(root)
    project = root_path(root)
    for path in [
        project / "data" / "papers.yaml",
        project / "data" / "categories.yaml",
        project / "paper_cards" / "header_zh.json",
        project / "paper_cards" / "institutions.json",
        project / "paper_cards" / "search_queue.json",
        project / "paper_cards" / "status.json",
        project / "paper_cards" / "valid_status.json",
    ]:
        path.unlink(missing_ok=True)
    for path in [project / "paper_cards" / "sources", project / "paper_cards" / "prompt_batches"]:
        shutil.rmtree(path, ignore_errors=True)
    return result


def normalize_library_records(root: Path | str | None = None) -> dict[str, list[str]]:
    """Synchronize Card-local category views to canonical `paper.yaml` metadata."""
    cards = library.load_cards(root)
    if not cards:
        raise ValueError("Card library has no records to normalize")
    normalized = []
    for entry_id, card in cards.items():
        paper = library.save_card_paper(entry_id, card["paper"], root)
        category_ids = list(paper["category_ids"])
        header = dict(card["header_zh"])
        header["category_ids"] = category_ids
        library.save_card_record(entry_id, "header_zh", header, root)
        queue = dict(card["queue"])
        queue.pop("track_guess", None)
        queue["category_ids"] = category_ids
        library.save_card_record(entry_id, "queue", queue, root)
        normalized.append(entry_id)
    return {"entry_ids": normalized}


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Migrate a legacy checkout into the independent Paper Card library.")
    parser.add_argument("--root", help="project root; defaults to this repository")
    commands = parser.add_subparsers(dest="command", required=True)
    commands.add_parser("library-init", help="copy legacy records into Card directories")
    commands.add_parser("library-verify", help="verify legacy records match the Card library")
    commands.add_parser("library-normalize", help="synchronize Card-local category views")
    cutover = commands.add_parser("library-cutover", help="verify then delete the legacy layout")
    cutover.add_argument("--yes", action="store_true")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    root = Path(args.root) if args.root else None
    if args.command == "library-init":
        payload = initialize_library(root)
    elif args.command == "library-verify":
        payload = verify_library_parity(root)
    elif args.command == "library-normalize":
        payload = normalize_library_records(root)
    else:
        payload = cutover_library(args.yes, root)
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
