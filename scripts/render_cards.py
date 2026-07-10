#!/usr/bin/env python3
from __future__ import annotations

import argparse
import tempfile
from collections import defaultdict
from pathlib import Path

from atlas_utils import card_inventory, entries, one_line
from common import ROOT

CARDS_README = ROOT / "cards/README.md"

GROUPS = [
    ("releases", "Release cards", "datasets, trace releases, documentation foundations, and reusable data artifacts"),
    ("verifiers", "Verifier cards", "verifiers, rewards, process supervision, judges, and rubrics"),
    ("agents", "Agent/environment cards", "tool, web, app, OS, and SWE trajectories"),
    ("recipes", "Recipe cards", "construction recipes, model reports, and training pipelines"),
    ("benchmarks", "Benchmark cards", "evaluation surfaces and benchmark ledgers"),
    ("failures", "Failure cards", "contamination, leakage, reward hacking, and verifier attacks"),
]


def render(target_root: Path = ROOT) -> str:
    data = {entry.get("id"): entry for entry in entries()}
    cards = card_inventory()
    grouped: dict[str, list[tuple[str, str, str]]] = defaultdict(list)
    for entry_id, rel in sorted(cards.items(), key=lambda item: item[1]):
        parts = Path(rel).parts
        group = parts[1] if len(parts) > 1 else "other"
        entry = data.get(entry_id, {})
        grouped[group].append((entry.get("title") or entry_id, rel, one_line(entry)))

    rows = ["| Type | Count | Use it for |", "|---|---:|---|"]
    for group, title, promise in GROUPS:
        rows.append(f"| [{title}](#{title.lower().replace('/', '').replace(' ', '-')}) | {len(grouped.get(group, []))} | {promise} |")

    lines = [
        "# Release Cards and Audit Cards",
        "",
        "Cards are the practical layer of the atlas. Each one answers the reader-facing questions that a citation alone cannot: what is the data object, what verifies it, how can it enter post-training, and what should be audited before reuse.",
        "",
        "\n".join(rows),
        "",
        "## Card Index",
        "",
    ]
    for group, title, _promise in GROUPS:
        lines += [f"### {title}", ""]
        items = grouped.get(group, [])
        if not items:
            lines += ["- No cards in this group yet.", ""]
            continue
        for card_title, rel, summary in items:
            card_rel = Path(rel).relative_to("cards").as_posix()
            lines.append(f"- [{card_title}]({card_rel}) - {summary}")
        lines.append("")

    lines += [
        "## How To Improve A Card",
        "",
        "- Replace `unknown` only after checking primary artifacts.",
        "- Add code, data, project, or Hugging Face links only when they are official.",
        "- Record false positives, false negatives, leakage risks, license constraints, and replay assumptions as soon as they are known.",
        "- Keep card language concise enough for scanning, but specific enough that a new reader can classify the artifact without opening the paper first.",
        "",
    ]
    text = "\n".join(lines)
    if target_root == ROOT:
        CARDS_README.write_text(text, encoding="utf-8")
    return text


def check() -> int:
    with tempfile.TemporaryDirectory() as tmp:
        expected = render(Path(tmp))
    current = CARDS_README.read_text(encoding="utf-8") if CARDS_README.exists() else ""
    if current != expected:
        print("ERROR: cards/README.md is out of date")
        return 1
    print("cards README is up to date")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if args.check:
        return check()
    render(ROOT)
    print("rendered cards README")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
