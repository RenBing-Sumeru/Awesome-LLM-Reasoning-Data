#!/usr/bin/env python3
"""Validate the shape of every card in `library/`.

The render checks only prove that the generated files match the library. They cannot
catch a card that is malformed, is missing a required field, uses a value outside the
controlled vocabulary, or still carries a field left over from a batch import. This
does.

Errors block a merge. Warnings describe residue that is harmless today but should not
spread: an unexpected top-level key, a field the loaders ignore, or a card whose review
records disagree.
"""
from __future__ import annotations

import argparse
import collections
import json
import re
import sys
from pathlib import Path

import yaml

sys.path.insert(0, str(Path(__file__).resolve().parent))

from atlas import config, labels as L

ROOT = config.ROOT

# Without these a card cannot be published correctly: the site, the exports, or the
# track pages would be wrong rather than merely thin.
CRITICAL = [
    "id", "title", "year", "venue", "category_ids", "status",
    "verification_contract", "source_role", "artifacts",
]

# Curation depth. A card missing one of these is thin, not broken, so it is reported as
# a warning and tracked in reports/ rather than blocking a merge.
DESCRIPTIVE = [
    "supervision_granularity", "training_use", "construction_layer", "domains",
    "data_object", "recipe_metadata", "audit", "inclusion_reason", "tags",
    "curation_level", "verification",
]

REQUIRED = CRITICAL + DESCRIPTIVE

# Fields a card may carry beyond the required set. Anything else is batch residue.
#
# `batch` records which mining run or candidate file a card came from and `track0_subfield`
# carries a subfield label that exists nowhere else in the library, so both are legitimate
# rather than residue. `one_line` is legacy and warned about separately.
OPTIONAL = {
    "authors", "one_line_summary", "why_it_matters", "needs", "related",
    "card", "card_recommendation", "card_recommendation_reason", "one_line",
    "batch", "track0_subfield",
}

LIST_FIELDS = {
    "source_role", "verification_contract", "supervision_granularity",
    "training_use", "construction_layer", "domains", "tags", "category_ids",
    "needs", "related", "authors",
}

DICT_FIELDS = {"artifacts", "data_object", "recipe_metadata", "audit", "verification"}

SECTION_KEYS = [key for key, _en, _zh in L.SECTIONS]
ZH_HEADER_FIELDS = ("one_line_summary_ch", "reading_priority_ch", "paper_type_ch",
                    "best_for_ch", "confidence_ch", "authors_ch")
PRIORITIES = {"必读", "可读", "暂缓", "不推荐"}
UNTRANSLATED = re.compile(r"[A-Za-z][A-Za-z ,\-']{34,}")


def check_card(directory: Path, tracks: set, vocab: dict, published: bool):
    errors, warnings = [], []
    name = directory.name

    try:
        paper = yaml.safe_load((directory / "paper.yaml").read_text(encoding="utf-8")) or {}
    except yaml.YAMLError as error:
        return [f"{name}: paper.yaml does not parse: {error}"], []
    if not isinstance(paper, dict):
        return [f"{name}: paper.yaml is not a mapping"], []

    if paper.get("id") != name:
        errors.append(f"{name}: paper.yaml id is {paper.get('id')!r}, expected the directory name")

    for field in CRITICAL:
        if paper.get(field) in (None, "", [], {}):
            errors.append(f"{name}: missing required field {field}")
    for field in DESCRIPTIVE:
        if paper.get(field) in (None, "", [], {}):
            warnings.append(f"{name}: missing curation field {field}")

    if published:
        for field in sorted(set(paper) - set(REQUIRED) - OPTIONAL):
            warnings.append(f"{name}: unexpected field {field}")
        if "one_line" in paper:
            warnings.append(f"{name}: still carries the legacy one_line field")

    for field in LIST_FIELDS & set(paper):
        if paper[field] is not None and not isinstance(paper[field], list):
            errors.append(f"{name}: {field} must be a list, found {type(paper[field]).__name__}")
    for field in DICT_FIELDS & set(paper):
        if paper[field] is not None and not isinstance(paper[field], dict):
            errors.append(f"{name}: {field} must be a mapping, found {type(paper[field]).__name__}")

    for track in paper.get("category_ids") or []:
        if track not in tracks:
            errors.append(f"{name}: category_ids has unknown track {track}")

    for facet, spec in vocab.items():
        values = paper.get(facet)
        values = values if isinstance(values, list) else ([values] if values else [])
        for value in values:
            if value in spec["values"] or value in spec["synonyms"]:
                continue
            errors.append(f"{name}: {facet} value {value!r} is not in library/vocabulary.yaml")

    year = paper.get("year")
    if year is not None and not (isinstance(year, int) and 1990 <= year <= 2100):
        errors.append(f"{name}: year {year!r} is not a plausible publication year")

    artifacts = paper.get("artifacts")
    if isinstance(artifacts, dict):
        urls = [v for v in artifacts.values() if isinstance(v, str) and v.strip()]
        if not any(u.startswith("http") for u in urls) and published:
            warnings.append(f"{name}: no artifact link starts with http")

    header_path = directory / "header_zh.json"
    if not header_path.exists():
        errors.append(f"{name}: header_zh.json is missing")
    else:
        try:
            header = json.loads(header_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as error:
            errors.append(f"{name}: header_zh.json does not parse: {error}")
            header = {}
        for field in ZH_HEADER_FIELDS:
            if not str(header.get(field) or "").strip():
                (errors if published and field == "one_line_summary_ch" else warnings).append(
                    f"{name}: header_zh.json is missing {field}")
        priority = header.get("reading_priority_ch")
        if priority and priority not in PRIORITIES:
            (errors if published else warnings).append(
                f"{name}: reading_priority_ch is {priority!r}, expected one of {sorted(PRIORITIES)}")
        if published:
            for field in ("one_line_summary_ch", "paper_type_ch", "best_for_ch"):
                if UNTRANSLATED.search(str(header.get(field) or "")):
                    errors.append(f"{name}: {field} carries a long run of English")

    sources = directory / "sources"
    if not sources.is_dir():
        errors.append(f"{name}: sources/ is missing")
    else:
        for key in SECTION_KEYS:
            for suffix, label in (("", "English"), ("_ch", "Chinese")):
                path = sources / f"{key}{suffix}.md"
                if not path.exists():
                    (errors if published else warnings).append(
                        f"{name}: sources/{key}{suffix}.md is missing ({label})")
                elif not path.read_text(encoding="utf-8").strip():
                    (errors if published else warnings).append(
                        f"{name}: sources/{key}{suffix}.md is empty ({label})")
        stray = sorted(p.name for p in sources.iterdir()
                       if p.is_file() and not re.fullmatch(r"\d\d_[a-z_]+(_ch)?\.md", p.name))
        for item in stray:
            warnings.append(f"{name}: sources/{item} does not follow the section naming")

    return errors, warnings


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--strict", action="store_true",
                        help="treat warnings as failures; only published cards are counted")
    parser.add_argument("--max-warnings", type=int, default=None, metavar="N",
                        help="fail when the warning count exceeds N. CI pins this to today's "
                             "count so the remaining curation gaps stay visible without blocking, "
                             "while any new gap fails the build.")
    args = parser.parse_args()

    tracks = {cat["id"] for cat in config.read_yaml(config.CATEGORIES_PATH).get("paper_categories", [])}
    vocab = config.vocabulary()

    errors, warnings = [], []
    scanned = published_count = 0
    for directory in sorted(config.CARDS.iterdir()):
        if not directory.is_dir():
            continue
        if not (directory / "paper.yaml").exists():
            errors.append(f"{directory.name}: paper.yaml is missing")
            continue
        scanned += 1
        published = config.is_published(directory)
        published_count += published
        card_errors, card_warnings = check_card(directory, tracks, vocab, published)
        errors += card_errors
        warnings += card_warnings

    print(f"validated {scanned} cards ({published_count} published)")
    if warnings:
        kinds = collections.Counter(w.split(": ", 1)[1].split(" ")[0] for w in warnings)
        print(f"\n{len(warnings)} warning(s), by kind: {dict(kinds)}")
        for warning in warnings[:20]:
            print("  WARN", warning)
        if len(warnings) > 20:
            print(f"  … {len(warnings) - 20} more")
    if errors:
        print(f"\n{len(errors)} error(s):")
        for error in errors[:40]:
            print("  ERROR", error)
        if len(errors) > 40:
            print(f"  … {len(errors) - 40} more")
        return 1
    if args.max_warnings is not None and len(warnings) > args.max_warnings:
        print(f"\nfailed: {len(warnings)} warning(s) exceeds the ceiling of {args.max_warnings}.")
        print("Fill in the missing fields, or raise the ceiling deliberately.")
        return 1
    if warnings and args.strict:
        print("\n--strict: warnings treated as failures")
        return 1
    print("\nno errors")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
