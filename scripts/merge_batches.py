#!/usr/bin/env python3
"""Merge incoming card batches into `library/cards/`.

Resolution policy, decided per batch round:

* One card per entry_id wins on content volume. With `--union-tracks` it also
  absorbs the `category_ids` every other copy claimed, because two curators filing
  the same paper is evidence that it belongs to both of their tracks.
* A verdict of `rejected` from any curator keeps the entry out of the published
  pool, even when the winning copy says `promoted`. Those ids are printed for
  `excluded_ids` in `atlas.yaml` rather than written into the card, so the
  library keeps every batch exactly as it arrived.
* An entry no curator ever marked stays unpublished as unreviewed.

Dry run by default. `--apply` copies, and backs up any library card it replaces.
"""
from __future__ import annotations

import argparse
import collections
import datetime as dt
import json
import shutil
import sys
from pathlib import Path

import yaml

sys.path.insert(0, str(Path(__file__).resolve().parent))

from atlas import config  # noqa: E402

ROOT = config.ROOT
LIBRARY = config.CARDS
BACKUP = ROOT / ".backup"
IGNORED = {".DS_Store"}


def is_card(path: Path) -> bool:
    return path.is_dir() and (path / "paper.yaml").exists()


def find_card_root(base: Path):
    for candidate in (base, base / "cards", base / "library" / "cards"):
        if candidate.is_dir() and any(is_card(child) for child in candidate.iterdir()):
            return candidate
    return None


def card_bytes(directory: Path) -> int:
    return sum(f.stat().st_size for f in directory.rglob("*") if f.is_file() and f.name not in IGNORED)


def card_facts(directory: Path) -> dict:
    paper = yaml.safe_load((directory / "paper.yaml").read_text(encoding="utf-8")) or {}
    queue_path = directory / "queue.json"
    queue = {}
    if queue_path.exists():
        try:
            queue = json.loads(queue_path.read_text(encoding="utf-8")) or {}
        except json.JSONDecodeError:
            queue = {}
    annotation = queue.get("manual_annotation") if isinstance(queue.get("manual_annotation"), dict) else {}
    return {
        "path": directory,
        "bytes": card_bytes(directory),
        "tracks": [t for t in (paper.get("category_ids") or []) if t],
        "search_status": (annotation.get("search_status") or "").strip(),
        "reason": (annotation.get("decision_reason") or "").strip(),
        "level": paper.get("curation_level") or "",
    }


def collect(batch_names) -> dict:
    sources = collections.OrderedDict()

    def add(source: str, root: Path):
        for directory in sorted(root.iterdir()):
            if not is_card(directory):
                continue
            sources.setdefault(directory.name, []).append((source, card_facts(directory)))

    add("library", LIBRARY)
    for name in batch_names:
        base = ROOT / name
        root = find_card_root(base) if base.exists() else None
        if root is None:
            print(f"WARNING: no cards found in {name}, skipped")
            continue
        add(name, root)
    return sources


def resolve(sources: dict, union_tracks: bool = False) -> dict:
    plan = {}
    for cid, copies in sources.items():
        winner_source, winner = max(copies, key=lambda item: item[1]["bytes"])
        if union_tracks and len(copies) > 1:
            # Two curators filing the same paper is evidence it spans both tracks.
            merged = list(winner["tracks"])
            for _source, facts in copies:
                for track in facts["tracks"]:
                    if track not in merged:
                        merged.append(track)
            winner["added_tracks"] = [t for t in merged if t not in winner["tracks"]]
            winner["tracks"] = merged
        statuses = {facts["search_status"] for _s, facts in copies if facts["search_status"]}
        if "rejected" in statuses:
            publish, why = False, "rejected by a curator"
        else:
            # Judge the copy that will actually land, using the same rule as the site,
            # so this projection cannot disagree with the next build.
            why = config.hold_reason(cid, winner["search_status"])
            publish = not why
        plan[cid] = {
            "copies": copies,
            "winner_source": winner_source,
            "winner": winner,
            "statuses": sorted(statuses),
            "conflict": len(statuses) > 1,
            "publish": publish,
            "reason": why,
            "action": ("keep" if winner_source == "library"
                       else ("replace" if any(s == "library" for s, _f in copies) else "add")),
        }
    return plan


def write_report(plan: dict, batch_names) -> Path:
    adds = [c for c, p in plan.items() if p["action"] == "add"]
    replaces = {c: p for c, p in plan.items() if p["action"] == "replace"}
    duplicates = {c: p for c, p in plan.items() if len(p["copies"]) > 1}
    conflicts = {c: p for c, p in duplicates.items() if p["conflict"]}
    unpublished = {c: p for c, p in plan.items() if not p["publish"]}
    hidden_conflict = {c: p for c, p in conflicts.items() if not p["publish"] and "rejected" in p["statuses"]
                       and p["winner"]["search_status"] != "rejected"}

    lines = [
        "# Merge report",
        "",
        f"Batches: {', '.join(batch_names)}",
        "",
        f"- cards in library before merge: {sum(1 for p in plan.values() if any(s == 'library' for s, _f in p['copies']))}",
        f"- cards added: {len(adds)}",
        f"- library cards replaced by a larger batch copy: {len(replaces)}",
        f"- entry_ids present in more than one source: {len(duplicates)}",
        f"- of those, with disagreeing verdicts: {len(conflicts)}",
        f"- library total after merge: {len(plan)}",
        f"- published pool after merge: {sum(1 for p in plan.values() if p['publish'])}",
        f"- held back: {len(unpublished)}",
        "",
        "## Ids to list under `excluded_ids` in atlas.yaml",
        "",
        "The winning copy of each of these says it is publishable, but another curator",
        "rejected it. Listing the id keeps the strict verdict without editing the card.",
        "",
    ]
    lines += [f"  - {cid}" for cid in sorted(hidden_conflict)] or ["  (none)"]
    absorbed = {c: p for c, p in duplicates.items() if p["winner"].get("added_tracks")}
    if absorbed:
        lines += [
            "",
            "## Tracks absorbed from a duplicate",
            "",
            "| entry_id | winner's own tracks | absorbed |",
            "|---|---|---|",
        ]
        for cid, p in sorted(absorbed.items()):
            own = [t for t in p["winner"]["tracks"] if t not in p["winner"]["added_tracks"]]
            lines.append(f"| `{cid}` | {', '.join(own)} | {', '.join(p['winner']['added_tracks'])} |")

    lines += ["", "## Duplicate resolution", "",
              "| entry_id | winner | bytes | losers | tracks kept | verdicts | published |",
              "|---|---|---:|---|---|---|---|"]
    for cid in sorted(duplicates):
        p = plan[cid]
        losers = ", ".join(f"{s} ({f['bytes']})" for s, f in p["copies"] if s != p["winner_source"])
        lines.append(
            f"| `{cid}` | {p['winner_source']} | {p['winner']['bytes']} | {losers} | "
            f"{', '.join(p['winner']['tracks']) or '—'} | {', '.join(p['statuses']) or '—'} | "
            f"{'yes' if p['publish'] else 'no · ' + p['reason']} |"
        )
    lines += ["", "## Held back from the published pool", "",
              "| entry_id | verdicts | reason |", "|---|---|---|"]
    for cid in sorted(unpublished):
        p = plan[cid]
        lines.append(f"| `{cid}` | {', '.join(p['statuses']) or '—'} | {p['reason']} |")

    lines += ["", "## Track distribution after merge", "",
              "| track | published cards |", "|---|---:|"]
    tracks = collections.Counter()
    for p in plan.values():
        if p["publish"]:
            for track in p["winner"]["tracks"]:
                tracks[track] += 1
    for track, count in tracks.most_common():
        lines.append(f"| `{track}` | {count} |")

    (ROOT / "reports").mkdir(exist_ok=True)
    path = ROOT / "reports" / "merge_report.md"
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return path


def apply_plan(plan: dict) -> tuple:
    stamp = dt.datetime.now().strftime("%Y%m%d-%H%M%S")
    backup_root = BACKUP / stamp
    added = replaced = 0
    for cid, p in plan.items():
        if p["action"] == "keep":
            continue
        target = LIBRARY / cid
        if p["action"] == "replace":
            backup_root.mkdir(parents=True, exist_ok=True)
            shutil.copytree(target, backup_root / cid)
            shutil.rmtree(target)
            replaced += 1
        else:
            added += 1
        shutil.copytree(
            p["winner"]["path"], target,
            ignore=shutil.ignore_patterns(*IGNORED),
        )
        if p["winner"].get("added_tracks"):
            paper_path = target / "paper.yaml"
            paper = yaml.safe_load(paper_path.read_text(encoding="utf-8")) or {}
            paper["category_ids"] = p["winner"]["tracks"]
            paper_path.write_text(
                yaml.safe_dump(paper, allow_unicode=True, sort_keys=False,
                               default_flow_style=False, width=120),
                encoding="utf-8")
    return added, replaced, (backup_root if replaced else None)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("batches", nargs="+")
    parser.add_argument("--apply", action="store_true", help="perform the merge")
    parser.add_argument("--union-tracks", action="store_true",
                        help="give the winning card every track its duplicates claimed")
    args = parser.parse_args()

    sources = collect(args.batches)
    plan = resolve(sources, args.union_tracks)
    report = write_report(plan, args.batches)

    adds = sum(1 for p in plan.values() if p["action"] == "add")
    replaces = sum(1 for p in plan.values() if p["action"] == "replace")
    published = sum(1 for p in plan.values() if p["publish"])
    print(f"library after merge: {len(plan)} cards ({adds} added, {replaces} replaced)")
    print(f"published pool:      {published}  (held back: {len(plan) - published})")
    print(f"report:              {report.relative_to(ROOT)}")

    if not args.apply:
        print("\ndry run — nothing written. Re-run with --apply.")
        return 0

    added, replaced, backup = apply_plan(plan)
    print(f"\nmerged: {added} added, {replaced} replaced")
    if backup:
        print(f"replaced cards backed up to {backup.relative_to(ROOT)}")
    print("next: python scripts/build_site.py")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
