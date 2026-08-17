#!/usr/bin/env python3
"""Inventory incoming card batches before merging them into `library/cards/`.

Batches arrive in different shapes: bare directories of cards, or a full library
with its own `categories.yaml`. This finds the card roots, then reports track
coverage, schema completeness, review status, and collisions with the library.
"""
from __future__ import annotations

import argparse
import collections
import json
import sys
from pathlib import Path

import yaml

sys.path.insert(0, str(Path(__file__).resolve().parent))
from atlas import config, labels as L  # noqa: E402

ROOT = config.ROOT
LIBRARY = config.CARDS
SECTION_KEYS = [key for key, _en, _zh in L.SECTIONS]


def is_card(path: Path) -> bool:
    return path.is_dir() and (path / "paper.yaml").exists()


def find_card_root(base: Path) -> Path | None:
    """A batch root is the directory whose children are card directories."""
    for candidate in (base, base / "cards", base / "library" / "cards"):
        if candidate.is_dir() and any(is_card(child) for child in candidate.iterdir()):
            return candidate
    return None


def read_json(path: Path) -> dict:
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8")) or {}
    except json.JSONDecodeError:
        return {}


def scan(root: Path) -> dict:
    cards = {}
    for directory in sorted(root.iterdir()):
        if not is_card(directory):
            continue
        try:
            paper = yaml.safe_load((directory / "paper.yaml").read_text(encoding="utf-8")) or {}
        except yaml.YAMLError as error:
            cards[directory.name] = {"error": f"unreadable paper.yaml: {error}"}
            continue
        header = read_json(directory / "header_zh.json")
        queue = read_json(directory / "queue.json")
        review = read_json(directory / "review.json")
        annotation = queue.get("manual_annotation") if isinstance(queue.get("manual_annotation"), dict) else {}
        sources = directory / "sources"
        missing = []
        for key in SECTION_KEYS:
            for suffix in ("", "_ch"):
                if not (sources / f"{key}{suffix}.md").exists():
                    missing.append(f"{key}{suffix}.md")
        cards[directory.name] = {
            "id": paper.get("id") or directory.name,
            "tracks": [t for t in (paper.get("category_ids") or []) if t],
            "year": paper.get("year"),
            "search_status": annotation.get("search_status") or "",
            "review_state": review.get("state") or "",
            "priority": header.get("reading_priority_ch") or "",
            "has_header_zh": bool(header),
            "has_queue": bool(queue),
            "missing_sources": missing,
            "one_line": bool(paper.get("one_line_summary") or paper.get("one_line")),
            "path": directory,
        }
    return cards


def digest(directory: Path) -> str:
    import hashlib
    sha = hashlib.sha256()
    for path in sorted(directory.rglob("*")):
        if path.is_file() and path.name != ".DS_Store":
            sha.update(path.relative_to(directory).as_posix().encode("utf-8"))
            sha.update(path.read_bytes())
    return sha.hexdigest()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("batches", nargs="+", help="batch directories to inspect")
    args = parser.parse_args()

    existing = scan(LIBRARY)
    print(f"library/cards: {len(existing)} cards\n")

    known_tracks = {cat["id"] for cat in (yaml.safe_load(
        (ROOT / "library" / "categories.yaml").read_text(encoding="utf-8")) or {}).get("paper_categories", [])}

    seen_ids = dict.fromkeys(existing, "library")
    grand_new = 0
    for name in args.batches:
        base = ROOT / name
        root = find_card_root(base) if base.exists() else None
        print("=" * 74)
        print(f"BATCH {name}")
        if root is None:
            print("  no card directories found — skipped\n")
            continue
        print(f"  card root: {root.relative_to(ROOT)}")
        cards = scan(root)
        broken = {k: v for k, v in cards.items() if "error" in v}
        cards = {k: v for k, v in cards.items() if "error" not in v}
        print(f"  cards: {len(cards)}" + (f"  (unreadable: {len(broken)})" if broken else ""))

        dupes_lib = [k for k in cards if k in existing]
        dupes_batch = [k for k in cards if k in seen_ids and k not in existing]
        identical = [k for k in dupes_lib if digest(cards[k]["path"]) == digest(existing[k]["path"])]
        new = [k for k in cards if k not in seen_ids]
        grand_new += len(new)

        tracks = collections.Counter()
        for card in cards.values():
            for track in card["tracks"]:
                tracks[track] += 1
        status = collections.Counter(card["search_status"] for card in cards.values())
        no_track = [k for k, v in cards.items() if not v["tracks"]]
        bad_track = sorted({t for v in cards.values() for t in v["tracks"]} - known_tracks)
        incomplete = [k for k, v in cards.items() if v["missing_sources"]]
        no_header = [k for k, v in cards.items() if not v["has_header_zh"]]
        no_queue = [k for k, v in cards.items() if not v["has_queue"]]
        no_summary = [k for k, v in cards.items() if not v["one_line"]]

        print(f"  new ids: {len(new)} | already in library: {len(dupes_lib)} "
              f"(byte-identical: {len(identical)}) | clashes with an earlier batch: {len(dupes_batch)}")
        print(f"  search_status: {dict(status)}")
        print("  tracks:")
        for track, count in tracks.most_common():
            mark = "" if track in known_tracks else "  <-- UNKNOWN TRACK"
            print(f"    {count:5d}  {track}{mark}")
        for label, items in (("no category_ids", no_track), ("missing header_zh.json", no_header),
                             ("missing queue.json", no_queue), ("no one-line summary", no_summary),
                             ("incomplete sources", incomplete)):
            if items:
                print(f"  {label}: {len(items)} -> {', '.join(items[:5])}"
                      + (" …" if len(items) > 5 else ""))
        if bad_track:
            print(f"  unknown track ids: {bad_track}")
        if dupes_lib and len(identical) != len(dupes_lib):
            differing = [k for k in dupes_lib if k not in identical]
            print(f"  DIFFERING duplicates ({len(differing)}): {', '.join(differing[:8])}"
                  + (" …" if len(differing) > 8 else ""))
        if dupes_batch:
            print(f"  cross-batch duplicate ids: {', '.join(dupes_batch[:8])}"
                  + (" …" if len(dupes_batch) > 8 else ""))
        for key in cards:
            seen_ids.setdefault(key, name)
        print()

    print("=" * 74)
    print(f"TOTAL new cards across batches: {grand_new}")
    print(f"library after merge would hold: {len(existing) + grand_new}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
