#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import tempfile
from pathlib import Path
from urllib.parse import urlencode

from common import ROOT

CARDS_DIR = ROOT / "cards"
ASK_URL = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/"
START = "<!-- ask_atlas:start -->"
END = "<!-- ask_atlas:end -->"


def is_real_card(path: Path) -> bool:
    if path.name == "README.md":
        return False
    if "template" in path.name or "examples" in path.parts:
        return False
    return True


def entry_id(text: str, path: Path) -> str:
    match = re.search(r"<!--\s*entry_id:\s*([^>]+?)\s*-->", text)
    if match:
        return match.group(1).strip()
    return path.stem


def ask_block(entry: str) -> str:
    explain = f"{ASK_URL}?{urlencode({'entry': entry, 'mode': 'explain'})}"
    audit = f"{ASK_URL}?{urlencode({'entry': entry, 'mode': 'audit'})}"
    compare = f"{ASK_URL}?{urlencode({'entry': entry, 'mode': 'compare'})}"
    return "\n".join([
        START,
        (
            f"> 🤖 **Ask about this paper:** "
            f"[Explain this card]({explain}) · "
            f"[Generate audit checklist]({audit}) · "
            f"[Compare with related work]({compare})"
        ),
        END,
        "",
    ])


def update_text(text: str, path: Path) -> str:
    entry = entry_id(text, path)
    block = ask_block(entry)
    existing = re.compile(rf"\n?{re.escape(START)}[\s\S]*?{re.escape(END)}\n?", re.MULTILINE)
    text = existing.sub("\n", text)
    lines = text.splitlines()
    for index, line in enumerate(lines):
        if line.startswith("# "):
            insert_at = index + 1
            rest = lines[insert_at:]
            while rest and not rest[0].strip():
                rest = rest[1:]
            return "\n".join(lines[:insert_at] + ["", block.rstrip(), ""] + rest).rstrip() + "\n"
    return text.rstrip() + "\n\n" + block


def render(target_root: Path = ROOT) -> list[Path]:
    changed: list[Path] = []
    cards_root = target_root / "cards"
    for path in sorted(cards_root.rglob("*.md")):
        rel = path.relative_to(target_root)
        if not is_real_card(rel):
            continue
        original = path.read_text(encoding="utf-8")
        updated = update_text(original, rel)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            changed.append(rel)
    return changed


def check() -> int:
    with tempfile.TemporaryDirectory() as tmp:
        temp_root = Path(tmp)
        temp_cards = temp_root / "cards"
        temp_cards.mkdir(parents=True)
        for path in sorted(CARDS_DIR.rglob("*.md")):
            dest = temp_cards / path.relative_to(CARDS_DIR)
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_text(path.read_text(encoding="utf-8"), encoding="utf-8")
        changed = render(temp_root)
        if changed:
            for path in changed:
                print(f"ERROR: out of date: {path}")
            return 1
    print("card Ask links are up to date")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if args.check:
        return check()
    changed = render(ROOT)
    print(f"updated {len(changed)} card files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
