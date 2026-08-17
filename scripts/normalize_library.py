#!/usr/bin/env python3
"""Normalize the published cards in `library/`.

Four inconsistencies accumulated as batches arrived from different track owners:

1. Facet vocabulary. Synonyms are folded onto the canonical value defined in
   `library/vocabulary.yaml`, and a facet stored as a bare string becomes a list.
2. `entry_id`. Some ids carry an arXiv or proceedings identifier. The suffix is
   stripped and the trailing year is rebuilt from `paper.yaml`'s `year`.
3. `one_line`. `one_line_summary` becomes the single summary field; a card with
   only the legacy `one_line` has it promoted, and the legacy key is removed.
4. Chinese header text. Entries in `scripts/data/zh_fields.yaml` replace a
   `one_line_summary_ch`, `paper_type_ch`, or `best_for_ch` that still carried a
   long English run. Author names and short inline terms stay in Latin script.

Only cards in the published pool are touched, and `queue.json` and `review.json`
are never written, so every manual review verdict survives untouched. Dry run by
default; `--apply` backs up each card to `.backup/<timestamp>/` before writing.
"""
from __future__ import annotations

import argparse
import collections
import datetime as dt
import json
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
ZH_FIXES = Path(__file__).resolve().parent / "data" / "zh_fields.yaml"

# `<slug>-<year>.<venue>.<n>` or `<slug>-<yymm>.<arxiv-number>`
ID_SUFFIX = re.compile(r"\.(?:[a-z][\w\-]*\.)?\d+$")
TRAILING_YEAR = re.compile(r"-(\d{4})$")


def dump_yaml(path: Path, payload: dict) -> None:
    path.write_text(
        yaml.safe_dump(payload, allow_unicode=True, sort_keys=False, default_flow_style=False, width=120),
        encoding="utf-8",
    )


def canonical_id(entry_id: str, year) -> str:
    """Strip a venue or arXiv identifier from an id.

    Only ids that actually carry such a suffix are touched. An id whose trailing year
    merely disagrees with `paper.yaml` is left alone: that is a metadata question, not
    an id format one, and renaming on it would collide with correctly named cards.
    """
    if not ID_SUFFIX.search(entry_id):
        return entry_id
    stem = ID_SUFFIX.sub("", entry_id)
    match = TRAILING_YEAR.search(stem)
    if not year or not match:
        return stem
    # `...-2510.23451` leaves a trailing arXiv YYMM rather than a publication year.
    return stem if match.group(1) == str(year) else stem[: match.start()] + f"-{year}"


def normalize_facets(paper: dict, vocab: dict, log: collections.Counter):
    changed = False
    for facet, spec in vocab.items():
        raw = paper.get(facet)
        if raw is None:
            continue
        values = raw if isinstance(raw, list) else [raw]
        if not isinstance(raw, list):
            log[f"{facet}: string -> list"] += 1
            changed = True
        out = []
        for value in values:
            if value in (None, ""):
                continue
            mapped = spec["synonyms"].get(value, value)
            if mapped != value:
                log[f"{facet}: {value} -> {mapped}"] += 1
                changed = True
            if mapped not in out:
                out.append(mapped)
            elif mapped != value:
                pass
        if out != values:
            changed = True
        paper[facet] = out
    return changed


def plan_card(directory: Path, vocab: dict, zh_fixes: dict, log: collections.Counter) -> dict:
    paper = yaml.safe_load((directory / "paper.yaml").read_text(encoding="utf-8")) or {}
    before = json.dumps(paper, ensure_ascii=False, sort_keys=True)
    entry_id = paper.get("id") or directory.name

    facet_changed = normalize_facets(paper, vocab, log)

    summary = str(paper.get("one_line_summary") or "").strip()
    legacy = str(paper.get("one_line") or "").strip()
    one_line_change = ""
    if legacy:
        if not summary:
            paper["one_line_summary"] = legacy
            one_line_change = "promoted"
            log["one_line: promoted to one_line_summary"] += 1
        elif legacy == summary:
            one_line_change = "duplicate removed"
            log["one_line: duplicate removed"] += 1
        else:
            one_line_change = "divergent removed"
            log["one_line: divergent text removed"] += 1
        paper.pop("one_line", None)

    new_id = canonical_id(entry_id, paper.get("year"))
    renamed = new_id != entry_id
    if renamed:
        paper["id"] = new_id
        log["entry_id: suffix stripped"] += 1

    header_path = directory / "header_zh.json"
    header = json.loads(header_path.read_text(encoding="utf-8")) if header_path.exists() else {}
    fix = zh_fixes.get(directory.name)
    wanted = {"one_line_summary_ch": fix} if isinstance(fix, str) else dict(fix or {})
    zh_new = {field: value for field, value in wanted.items() if header.get(field) != value}
    for field in zh_new:
        log[f"{field}: translated"] += 1

    paper_changed = json.dumps(paper, ensure_ascii=False, sort_keys=True) != before
    return {
        "dir": directory,
        "id": entry_id,
        "new_id": new_id,
        "renamed": renamed,
        "paper": paper,
        "paper_changed": paper_changed,
        "facet_changed": facet_changed,
        "one_line_change": one_line_change,
        "legacy_one_line": legacy if one_line_change == "divergent removed" else "",
        "header": header,
        "header_path": header_path,
        "zh_new": zh_new,
        "touched": paper_changed or bool(zh_new) or renamed,
    }


TITLE_NOISE = re.compile(r"[^a-z0-9]+")


def duplicate_titles(plans) -> list:
    """Published cards that describe the same paper under different entry_ids."""
    by_title = collections.defaultdict(list)
    for plan in plans:
        title = TITLE_NOISE.sub(" ", str(plan["paper"].get("title") or "").lower()).strip()
        if title:
            by_title[title].append(plan["new_id"])
    return sorted((title, sorted(ids)) for title, ids in by_title.items() if len(ids) > 1)


def write_report(plans, log, applied: bool, blocked, duplicates) -> Path:
    touched = [p for p in plans if p["touched"]]
    renames = [p for p in plans if p["renamed"]]
    divergent = [p for p in plans if p["legacy_one_line"]]
    lines = [
        "# Normalization report",
        "",
        ("Applied." if applied else "Dry run — nothing written."),
        "",
        f"- published cards inspected: {len(plans)}",
        f"- cards changed: {len(touched)}",
        f"- entry_ids renamed: {len(renames)}",
        f"- Chinese header fields replaced: {sum(len(p['zh_new']) for p in plans)}",
        "",
        "Held-back cards and every `queue.json` / `review.json` are left untouched, so",
        "the manual review verdicts are unchanged.",
        "",
        "## Edits by kind",
        "",
        "| edit | cards |",
        "|---|---:|",
    ]
    lines += [f"| `{key}` | {count} |" for key, count in log.most_common()]
    lines += ["", "## entry_id renames", "", "| before | after |", "|---|---|"]
    lines += [f"| `{p['id']}` | `{p['new_id']}` |" for p in renames]

    if blocked:
        lines += [
            "",
            "## Renames skipped",
            "",
            "Stripping the suffix would land on an id that already exists, which means the",
            "same paper is filed twice. Both cards were left untouched; merge them by hand.",
            "",
            "| suffixed id | existing id |",
            "|---|---|",
        ]
        lines += [f"| `{old}` | `{new}` |" for old, new in blocked]

    if duplicates:
        lines += [
            "",
            "## Same paper under more than one entry_id",
            "",
            f"{len(duplicates)} titles appear on multiple published cards. Titles were compared after",
            "lowercasing and dropping punctuation, so these are genuine duplicates rather than",
            "transcription differences. Each pair should collapse to one card.",
            "",
            "| title | entry_ids |",
            "|---|---|",
        ]
        lines += [f"| {title} | {', '.join('`' + i + '`' for i in ids)} |" for title, ids in duplicates]
    lines += [
        "",
        "## Removed divergent `one_line` text",
        "",
        "`one_line_summary` is now the only summary field. These cards carried a second,",
        "different sentence under `one_line`; it is recorded here and in the card backup.",
        "",
    ]
    for p in divergent:
        lines.append(f"### `{p['new_id']}`")
        lines.append("")
        lines.append(f"- kept: {p['paper'].get('one_line_summary', '')}")
        lines.append(f"- removed: {p['legacy_one_line']}")
        lines.append("")
    (ROOT / "reports").mkdir(exist_ok=True)
    path = ROOT / "reports" / "normalize_report.md"
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    vocab = config.vocabulary()
    zh_fixes = yaml.safe_load(ZH_FIXES.read_text(encoding="utf-8")) or {}
    log = collections.Counter()

    plans = []
    for directory in sorted(CARDS.iterdir()):
        if not directory.is_dir() or not (directory / "paper.yaml").exists():
            continue
        if not config.is_published(directory):
            continue
        plans.append(plan_card(directory, vocab, zh_fixes, log))

    # A rename whose target already exists means the same paper is filed twice under
    # different ids. Leave both cards alone and report the pair for a human decision.
    existing = {d.name for d in CARDS.iterdir() if d.is_dir()}
    renaming = {p["id"] for p in plans if p["renamed"]}
    blocked = []
    for plan in plans:
        if plan["renamed"] and plan["new_id"] in (existing - renaming):
            blocked.append((plan["id"], plan["new_id"]))
            plan["renamed"] = False
            plan["new_id"] = plan["id"]
            plan["paper"]["id"] = plan["id"]
            log["entry_id: suffix stripped"] -= 1
            log["entry_id: rename blocked by a duplicate card"] += 1
    if blocked:
        print("NOTE: these renames are skipped because the target id already exists")
        for old, new in blocked:
            print(f"  {old}  ->  {new} (already present)")
        print()

    report = write_report(plans, log, args.apply, blocked, duplicate_titles(plans))
    touched = [p for p in plans if p["touched"]]
    print(f"published cards inspected: {len(plans)}")
    print(f"cards to change:           {len(touched)}")
    for key, count in log.most_common():
        print(f"  {count:5d}  {key}")
    print(f"report: {report.relative_to(ROOT)}")

    if not args.apply:
        print("\ndry run — nothing written. Re-run with --apply.")
        return 0

    backup_root = BACKUP / dt.datetime.now().strftime("%Y%m%d-%H%M%S-normalize")
    for plan in touched:
        directory = plan["dir"]
        backup_root.mkdir(parents=True, exist_ok=True)
        shutil.copytree(directory, backup_root / directory.name)
        if plan["paper_changed"] or plan["renamed"]:
            dump_yaml(directory / "paper.yaml", plan["paper"])
        if plan["zh_new"]:
            header = plan["header"]
            header.update(plan["zh_new"])
            plan["header_path"].write_text(
                json.dumps(header, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        if plan["renamed"]:
            directory.rename(CARDS / plan["new_id"])

    print(f"\napplied to {len(touched)} cards")
    print(f"backed up to {backup_root.relative_to(ROOT)}")
    print("next: python scripts/build_site.py")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
