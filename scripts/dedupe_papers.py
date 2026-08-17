#!/usr/bin/env python3
"""Collapse published cards that describe the same paper under different entry_ids.

`merge_batches.py` deduplicates by `entry_id`, so it cannot catch the case where two
track owners each wrote a card for the same paper and each chose their own id. Those
survive as separate published cards, which double-counts the paper in the track
totals and the headline figures.

Resolution follows the batch rule: the card with the most content wins and absorbs
the `category_ids` of the ones it replaces, because the duplication is itself
evidence that the paper spans both tracks. It also adopts any artifact link the
duplicates held and it lacked, since a duplicate usually cites the same paper
through a different venue. Losing cards move out of `library/` into the backup
rather than being deleted.

Papers are matched on title after lowercasing and dropping punctuation. Held-back
cards are ignored, and `queue.json` and `review.json` are never written.
"""
from __future__ import annotations

import argparse
import collections
import datetime as dt
import re
import shutil
import sys
from pathlib import Path

import yaml

sys.path.insert(0, str(Path(__file__).resolve().parent))

from atlas import config  # noqa: E402

ROOT = config.ROOT
CARDS = config.CARDS
BACKUP = ROOT / ".backup"
TITLE_NOISE = re.compile(r"[^a-z0-9]+")


def card_bytes(directory: Path) -> int:
    return sum(f.stat().st_size for f in directory.rglob("*") if f.is_file() and f.name != ".DS_Store")


def normalized_title(title: str) -> str:
    return TITLE_NOISE.sub(" ", str(title or "").lower()).strip()


def collect() -> dict:
    groups = collections.defaultdict(list)
    for directory in sorted(CARDS.iterdir()):
        if not directory.is_dir() or not (directory / "paper.yaml").exists():
            continue
        if not config.is_published(directory):
            continue
        paper = yaml.safe_load((directory / "paper.yaml").read_text(encoding="utf-8")) or {}
        title = normalized_title(paper.get("title"))
        if not title:
            continue
        groups[title].append({
            "dir": directory,
            "id": directory.name,
            "title": paper.get("title"),
            "year": paper.get("year"),
            "tracks": [t for t in (paper.get("category_ids") or []) if t],
            "bytes": card_bytes(directory),
            "paper": paper,
        })
    return {title: cards for title, cards in groups.items() if len(cards) > 1}


def merge_artifacts(winner: dict, losers: list) -> dict:
    """Adopt links the winner lacks.

    A duplicate usually cites the same paper through a different venue, so the loser
    often holds an arXiv, OpenReview, or proceedings URL the winner never recorded.
    Existing keys are never overwritten and a URL already present is never repeated.
    """
    artifacts = winner["paper"].get("artifacts")
    artifacts = dict(artifacts) if isinstance(artifacts, dict) else {}
    known_urls = {url for url in artifacts.values() if isinstance(url, str) and url.startswith("http")}
    added = {}
    for loser in losers:
        extra = loser["paper"].get("artifacts")
        if not isinstance(extra, dict):
            continue
        for key, url in extra.items():
            if not isinstance(url, str) or not url.startswith("http"):
                continue
            if artifacts.get(key) or url in known_urls:
                continue
            artifacts[key] = url
            known_urls.add(url)
            added[key] = url
    return artifacts, added


def plan(groups: dict) -> list:
    plans = []
    for title, cards in sorted(groups.items()):
        winner = max(cards, key=lambda c: c["bytes"])
        losers = [c for c in cards if c is not winner]
        merged = list(winner["tracks"])
        for loser in losers:
            for track in loser["tracks"]:
                if track not in merged:
                    merged.append(track)
        artifacts, added_links = merge_artifacts(winner, losers)
        plans.append({
            "title": title,
            "display_title": winner["title"],
            "winner": winner,
            "losers": losers,
            "tracks": merged,
            "added_tracks": [t for t in merged if t not in winner["tracks"]],
            "artifacts": artifacts,
            "added_links": added_links,
        })
    return plans


def write_report(plans, applied: bool) -> Path:
    removed = sum(len(p["losers"]) for p in plans)
    absorbed = [p for p in plans if p["added_tracks"]]
    lines = [
        "# Duplicate paper report",
        "",
        ("Applied." if applied else "Dry run — nothing written."),
        "",
        f"- papers filed under more than one published entry_id: {len(plans)}",
        f"- cards removed from the published library: {removed}",
        f"- surviving cards that absorbed a track: {len(absorbed)}",
        f"- artifact links adopted from a duplicate: {sum(len(p['added_links']) for p in plans)}",
        "",
        "The surviving card is the one with the most content. Removed cards are copied",
        "into `.backup/<timestamp>-dedupe/` first, so nothing is lost.",
        "",
        "## Resolution",
        "",
        "| paper | kept | bytes | removed | tracks after | links adopted |",
        "|---|---|---:|---|---|---|",
    ]
    for p in plans:
        losers = ", ".join(f"`{l['id']}` ({l['bytes']})" for l in p["losers"])
        adopted = ", ".join(sorted(p["added_links"])) or "—"
        lines.append(
            f"| {p['display_title']} | `{p['winner']['id']}` | {p['winner']['bytes']} | "
            f"{losers} | {', '.join(p['tracks'])} | {adopted} |"
        )
    (ROOT / "reports").mkdir(exist_ok=True)
    path = ROOT / "reports" / "dedupe_report.md"
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    groups = collect()
    plans = plan(groups)
    report = write_report(plans, args.apply)

    removed = sum(len(p["losers"]) for p in plans)
    print(f"duplicate papers: {len(plans)}")
    print(f"cards to remove:  {removed}")
    print(f"cards absorbing a track: {sum(1 for p in plans if p['added_tracks'])}")
    print(f"report: {report.relative_to(ROOT)}")

    if not args.apply:
        print("\ndry run — nothing written. Re-run with --apply.")
        return 0

    backup_root = BACKUP / (dt.datetime.now().strftime("%Y%m%d-%H%M%S") + "-dedupe")
    backup_root.mkdir(parents=True, exist_ok=True)
    for p in plans:
        if p["added_tracks"] or p["added_links"]:
            paper = p["winner"]["paper"]
            paper["category_ids"] = p["tracks"]
            paper["artifacts"] = p["artifacts"]
            (p["winner"]["dir"] / "paper.yaml").write_text(
                yaml.safe_dump(paper, allow_unicode=True, sort_keys=False,
                               default_flow_style=False, width=120),
                encoding="utf-8")
        for loser in p["losers"]:
            shutil.copytree(loser["dir"], backup_root / loser["id"])
            shutil.rmtree(loser["dir"])

    print(f"\nremoved {removed} duplicate cards")
    print(f"backed up to {backup_root.relative_to(ROOT)}")
    print("next: python scripts/build_site.py")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
