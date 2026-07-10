#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import sys
import tempfile
from pathlib import Path

from atlas_utils import as_list, categories, entries, infer_subfield, track_by_category
from common import ROOT

CARDS_DIR = ROOT / "cards"
ASK_START = "<!-- ask_atlas:start -->"
ASK_END = "<!-- ask_atlas:end -->"
TRACK_BLOCKQUOTE = re.compile(r"^> Track:.*$", re.MULTILINE)
TRACK_COMMENT = re.compile(r"^<!--\s*track:.*?-->\s*$", re.MULTILINE | re.IGNORECASE)
CATEGORY_LINE = re.compile(r"^> Category:.*$", re.MULTILINE)
SUBFIELD_LINE = re.compile(r"^> Subfield:.*$", re.MULTILINE)


def is_real_card(path: Path) -> bool:
    if path.name == "README.md":
        return False
    if "template" in path.name or "examples" in path.parts:
        return False
    return True


def category_order() -> dict[str, int]:
    return {cat["id"]: cat.get("order", 999) for cat in categories()}


def track_label(category_id: str) -> str:
    track = track_by_category().get(category_id, {})
    title = track.get("navigator_title") or category_id.replace("_", " ")
    order = category_order().get(category_id)
    if order is None:
        return title
    return f"{title} (Track {order:02d})"


def sorted_categories(category_ids: list[str]) -> list[str]:
    order = category_order()
    return sorted(category_ids, key=lambda cid: (order.get(cid, 999), cid))


def build_metadata_block(entry: dict) -> list[str]:
    category_ids = sorted_categories(as_list(entry.get("category")))
    if not category_ids:
        return []

    track_titles = [track_label(cid) for cid in category_ids]
    lines = [f"<!-- track: {' · '.join(track_titles)} -->"]

    primary = category_ids[0]
    subfield = infer_subfield(entry, primary)
    if subfield and subfield.get("name"):
        lines.append(f"> Subfield: {subfield['name']}")

    return lines


def strip_track_metadata(text: str) -> str:
    text = TRACK_BLOCKQUOTE.sub("", text)
    text = TRACK_COMMENT.sub("", text)
    text = CATEGORY_LINE.sub("", text)
    text = SUBFIELD_LINE.sub("", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


def insertion_index(lines: list[str]) -> int:
    for index, line in enumerate(lines):
        if line.strip() == ASK_END:
            return index + 1

    for index, line in enumerate(lines):
        if line.startswith("# "):
            return index + 1

    return 0


def update_text(text: str, entry: dict | None) -> tuple[str, str | None]:
    if not entry:
        return text, "missing papers.yaml entry"

    metadata = build_metadata_block(entry)
    if not metadata:
        return text, "missing category in papers.yaml"

    cleaned = strip_track_metadata(text)
    lines = cleaned.splitlines()
    insert_at = insertion_index(lines)

    while insert_at < len(lines) and not lines[insert_at].strip():
        insert_at += 1

    new_lines = lines[:insert_at] + [""] + metadata + [""] + lines[insert_at:]
    updated = re.sub(r"\n{3,}", "\n\n", "\n".join(new_lines)).rstrip() + "\n"
    return updated, None


def render(target_root: Path = ROOT) -> tuple[list[Path], list[str]]:
    entries_by_id = {entry.get("id"): entry for entry in entries() if entry.get("id")}
    changed: list[Path] = []
    errors: list[str] = []

    for path in sorted((target_root / "cards").rglob("*.md")):
        rel = path.relative_to(target_root)
        if not is_real_card(rel):
            continue

        original = path.read_text(encoding="utf-8")
        match = re.search(r"<!--\s*entry_id:\s*([^\s]+)\s*-->", original)
        if not match:
            errors.append(f"card missing entry_id comment: {rel}")
            continue

        entry_id = match.group(1)
        entry = entries_by_id.get(entry_id)
        updated, error = update_text(original, entry)
        if error:
            errors.append(f"{rel}: {error}")
            continue
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            changed.append(rel)

    return changed, errors


def check() -> int:
    with tempfile.TemporaryDirectory() as tmp:
        target = Path(tmp)
        (target / "cards").mkdir(parents=True)
        for path in CARDS_DIR.rglob("*.md"):
            rel = path.relative_to(CARDS_DIR)
            if not is_real_card(Path("cards") / rel):
                continue
            dest = target / "cards" / rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_text(path.read_text(encoding="utf-8"), encoding="utf-8")

        changed, errors = render(target)
        if errors:
            for item in errors:
                print(f"ERROR: {item}")
            return 1
        if changed:
            print("ERROR: cards are missing or out-of-date track metadata")
            for rel in changed[:20]:
                print(f"  - {rel}")
            if len(changed) > 20:
                print(f"  ... and {len(changed) - 20} more")
            return 1
        print("card track metadata is up to date")
        return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Add or refresh research-track metadata on cards.")
    parser.add_argument("--check", action="store_true", help="Verify cards match papers.yaml track metadata.")
    args = parser.parse_args()

    if args.check:
        return check()

    changed, errors = render()
    for item in errors:
        print(f"ERROR: {item}", file=sys.stderr)
    print(f"updated {len(changed)} cards")
    for rel in changed:
        print(f"  - {rel}")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
