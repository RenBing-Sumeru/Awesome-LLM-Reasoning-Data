#!/usr/bin/env python3
from __future__ import annotations

from collections import Counter
import re
from common import ROOT, load_yaml_json

SCHEMA = load_yaml_json(ROOT / "data/schema.json")
ENUMS = SCHEMA.get("enums", {})
REQUIRED = SCHEMA.get("required", [])
URL_RE = re.compile(r"^https?://[^\s<>]+$")
DOI_RE = re.compile(r"^(https?://doi\.org/)?10\.\d{4,9}/\S+$", re.I)
LESSON_RE = re.compile(r"^\d\d_.*\.md$")
MIN_LESSON_WORDS = 700
CARD_REQUIRED_HEADINGS = [
    "## One-line takeaway",
    "## Why this matters",
    "## What is the data object?",
    "## Verification contract",
    "## Supervision granularity",
    "## Construction recipe",
    "## How it can be used",
    "## Audit checklist",
    "## Known limitations / failure modes",
    "## Links",
    "## Citation",
]


def words(text: str) -> int:
    return len(re.findall(r"\b[\w'-]+\b", text))


def as_list(value):
    if isinstance(value, list):
        return value
    return [value] if value else []


def validate_docs(errors, warnings):
    docs_dir = ROOT / "docs"
    for path in sorted(docs_dir.glob("*.md")):
        text = path.read_text(encoding="utf-8")
        if not text.strip():
            errors.append(f"empty docs page: {path.relative_to(ROOT)}")
            continue
        if LESSON_RE.match(path.name):
            count = words(text)
            if count < MIN_LESSON_WORDS:
                errors.append(f"shallow lesson doc: {path.relative_to(ROOT)} has {count} words; expected >= {MIN_LESSON_WORDS}")
            for heading in ["## What you will learn", "## Practical field guide", "### Review matrix", "### Exercise / self-check"]:
                if heading not in text:
                    errors.append(f"lesson missing heading {heading!r}: {path.relative_to(ROOT)}")
    index = docs_dir / "index.html"
    if not index.exists() or not index.read_text(encoding="utf-8").strip():
        errors.append("docs/index.html is missing or empty")


def validate_yaml_payloads(errors):
    for path in sorted((ROOT / "data").glob("*.yaml")):
        text = path.read_text(encoding="utf-8")
        if not text.strip():
            errors.append(f"empty YAML file: {path.relative_to(ROOT)}")
            continue
        payload = load_yaml_json(path)
        if payload in (None, [], {}):
            errors.append(f"empty YAML payload: {path.relative_to(ROOT)}")


def validate_entries(entries, errors, warnings):
    ids, titles = Counter(), Counter()
    for i, entry in enumerate(entries):
        where = f"entry[{i}] {entry.get('id', '<missing-id>')}"
        for key in REQUIRED:
            if key not in entry:
                errors.append(f"{where}: missing {key}")
        for key in ["id", "title", "year", "source_role", "status"]:
            if not entry.get(key):
                label = "category/source_role" if key == "source_role" else key
                errors.append(f"{where}: missing {label}")
        ids[entry.get("id")] += 1
        titles[(entry.get("title") or "").strip().lower()] += 1

        for field in ["source_role", "verification_contract", "supervision_granularity", "training_use", "construction_layer"]:
            allowed = set(ENUMS.get(field, []))
            for val in as_list(entry.get(field)):
                if val not in allowed:
                    errors.append(f"{where}: invalid {field}={val}")
        if entry.get("status") not in set(ENUMS.get("status", [])):
            errors.append(f"{where}: invalid status={entry.get('status')}")
        if not entry.get("inclusion_reason"):
            errors.append(f"{where}: missing inclusion_reason")

        artifacts = entry.get("artifacts") or {}
        for key, value in artifacts.items():
            if value in (None, ""):
                continue
            if not isinstance(value, str):
                errors.append(f"{where}: artifact {key} is not a string/null")
                continue
            if key == "doi":
                if not (DOI_RE.match(value) or URL_RE.match(value)):
                    errors.append(f"{where}: invalid DOI/link format for {key}: {value}")
            elif not URL_RE.match(value):
                errors.append(f"{where}: invalid link format for {key}: {value}")
        if entry.get("status") == "verified" and not (artifacts.get("paper") or artifacts.get("arxiv") or artifacts.get("doi")):
            errors.append(f"{where}: status verified requires paper, arxiv, or doi link")

    for key, count in ids.items():
        if key and count > 1:
            errors.append(f"duplicate id: {key}")
    for key, count in titles.items():
        if key and count > 1:
            warnings.append(f"duplicate title: {key}")


def validate_cards(entries, errors):
    entry_ids = {entry.get("id") for entry in entries}
    filled_cards = []
    for path in sorted((ROOT / "cards").glob("**/*.md")):
        rel = path.relative_to(ROOT).as_posix()
        if "template" in path.name or rel.startswith("cards/examples/"):
            continue
        text = path.read_text(encoding="utf-8")
        if not text.strip():
            errors.append(f"empty card file: {rel}")
            continue
        if rel == "cards/README.md":
            continue
        filled_cards.append(rel)
        if not re.search(r"^#\s+\S", text, flags=re.M):
            errors.append(f"card missing title heading: {rel}")
        for heading in CARD_REQUIRED_HEADINGS:
            if heading not in text:
                errors.append(f"card missing required heading {heading!r}: {rel}")
        match = re.search(r"<!--\s*entry_id:\s*([^\s]+)\s*-->", text)
        if not match:
            errors.append(f"card missing entry_id comment: {rel}")
        elif match.group(1) not in entry_ids:
            errors.append(f"card entry_id not found in data/papers.yaml: {rel} -> {match.group(1)}")
    if len(filled_cards) < 25:
        errors.append(f"expected at least 25 filled cards; found {len(filled_cards)}")


def main():
    errors, warnings = [], []
    entries = load_yaml_json(ROOT / "data/papers.yaml")
    if not isinstance(entries, list) or not entries:
        errors.append("data/papers.yaml must contain a non-empty list")
        entries = []

    validate_docs(errors, warnings)
    validate_yaml_payloads(errors)
    validate_entries(entries, errors, warnings)
    validate_cards(entries, errors)

    print(f"entries: {len(entries)}")
    print(f"errors: {len(errors)}")
    print(f"warnings: {len(warnings)}")
    for msg in errors[:120]:
        print("ERROR:", msg)
    if len(errors) > 120:
        print(f"ERROR: ... {len(errors) - 120} more")
    for msg in warnings[:80]:
        print("WARNING:", msg)
    if len(warnings) > 80:
        print(f"WARNING: ... {len(warnings) - 80} more")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
