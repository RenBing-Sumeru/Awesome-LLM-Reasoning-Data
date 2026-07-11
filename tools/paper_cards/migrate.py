#!/usr/bin/env python3
"""Card-local maintenance utilities for the V2 Paper Card library."""
from __future__ import annotations

import argparse
import json
from pathlib import Path

try:
    from . import library
except ImportError:  # direct script execution
    import library


def normalize_library_records(root: Path | str | None = None) -> dict[str, list[str]]:
    """Synchronize Card-local category mirrors from canonical `paper.yaml`."""
    cards = library.load_cards(root)
    normalized = []
    for entry_id, card in cards.items():
        paper = library.save_card_paper(entry_id, card["paper"], root)
        category_ids = list(paper["category_ids"])
        header = dict(card["header_zh"])
        header["category_ids"] = category_ids
        library.save_card_record(entry_id, "header_zh", header, root)
        queue = dict(card["queue"])
        queue["category_ids"] = category_ids
        library.save_card_record(entry_id, "queue", queue, root)
        normalized.append(entry_id)
    return {"entry_ids": normalized}


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Maintain the V2 Card-local Paper Card library.")
    parser.add_argument("--root", type=Path, help="project root; defaults to this repository")
    commands = parser.add_subparsers(dest="command", required=True)
    commands.add_parser("library-normalize", help="synchronize Card-local category views")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    payload = normalize_library_records(args.root)
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
