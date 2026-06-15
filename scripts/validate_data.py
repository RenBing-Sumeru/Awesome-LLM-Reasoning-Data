#!/usr/bin/env python3
from __future__ import annotations

from collections import Counter
import re
from pathlib import Path

from atlas_utils import (
    CURATION_LEVELS,
    as_list,
    card_inventory,
    curation_level,
    entries,
    norm,
    primary_link,
    starter_matches,
    starter_packs,
)
from common import ROOT, load_yaml_json

SCHEMA = load_yaml_json(ROOT / "data/schema.json")
ENUMS = SCHEMA.get("enums", {})
REQUIRED = SCHEMA.get("required", [])
URL_RE = re.compile(r"^https?://[^\s<>]+$")
DOI_RE = re.compile(r"^(https?://doi\.org/)?10\.\d{4,9}/\S+$", re.I)
LESSON_RE = re.compile(r"^\d\d_.*\.md$")
MIN_LESSON_WORDS = 700
PUBLIC_SCAN_ROOTS = ["README.md", "README_zh.md", "docs", "papers", "cards", "data", "reports", "scripts", ".github"]
LEAKAGE_TERMS = [
    "Codex " + "prompt",
    "Chat" + "GPT",
    "system " + "prompt",
    "developer " + "instruction",
    "our " + "conversation",
    "我们的" + "对话",
    "复制给" + "codex",
    "internal " + "prompt",
    "scratch" + "pad",
    "hidden " + "reasoning",
    "do not " + "stop until",
    "Builder " + "Agent",
    "Judge " + "Agent",
    "Supervisor " + "Agent",
]

CARD_REQUIRED_ANY = [
    ["## TL;DR", "## One-line takeaway"],
    ["## 1. What is this work?", "## Why this matters"],
    ["## 2. What data object does it expose?", "## What is the data object?"],
    ["## 3. What is the verifier / reward / judge / environment?", "## Verification contract"],
    ["## 4. How is the data constructed?", "## Construction recipe"],
    ["## 5. How can it enter post-training?", "## How it can be used"],
    ["## 6. What should readers audit?", "## Audit checklist"],
    ["## 7. What is missing or risky?", "## Known limitations / failure modes"],
    ["## 9. Links and citation", "## Links"],
]


def words(text: str) -> int:
    return len(re.findall(r"\b[\w'-]+\b", text))


def validate_docs(errors: list[str]) -> None:
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
    if not (docs_dir / "index.html").exists():
        errors.append("docs/index.html is missing")


def validate_yaml_payloads(errors: list[str]) -> None:
    for path in sorted((ROOT / "data").glob("*.yaml")):
        text = path.read_text(encoding="utf-8")
        if not text.strip():
            errors.append(f"empty YAML file: {path.relative_to(ROOT)}")
            continue
        payload = load_yaml_json(path)
        if payload in (None, [], {}):
            errors.append(f"empty YAML payload: {path.relative_to(ROOT)}")


def validate_entries(data: list[dict], errors: list[str], warnings: list[str]) -> None:
    ids, titles = Counter(), Counter()
    cards = card_inventory()
    for i, entry in enumerate(data):
        where = f"entry[{i}] {entry.get('id', '<missing-id>')}"
        for key in REQUIRED:
            if key not in entry:
                errors.append(f"{where}: missing {key}")
        for key in ["id", "title", "year", "source_role", "status"]:
            if not entry.get(key):
                errors.append(f"{where}: missing {key}")
        ids[entry.get("id")] += 1
        titles[norm(entry.get("title"))] += 1

        for field in ["source_role", "verification_contract", "supervision_granularity", "training_use", "construction_layer"]:
            allowed = set(ENUMS.get(field, []))
            for val in as_list(entry.get(field)):
                if val not in allowed:
                    errors.append(f"{where}: invalid {field}={val}")
        if entry.get("status") not in set(ENUMS.get("status", [])):
            errors.append(f"{where}: invalid status={entry.get('status')}")
        level = curation_level(entry, cards.get(entry.get("id")))
        if level not in CURATION_LEVELS:
            errors.append(f"{where}: invalid curation_level={entry.get('curation_level')}")
        if not entry.get("inclusion_reason"):
            errors.append(f"{where}: missing inclusion_reason")
        if entry.get("status") == "verified" and not primary_link(entry):
            errors.append(f"{where}: status verified requires official paper/arXiv/venue/DOI link")
        if level in {"L4_carded", "L5_audit_ready"} and not cards.get(entry.get("id")):
            errors.append(f"{where}: curation level {level} requires existing card")

        for key, value in (entry.get("artifacts") or {}).items():
            if value in (None, ""):
                continue
            if key == "bibtex":
                continue
            if not isinstance(value, str):
                errors.append(f"{where}: artifact {key} is not a string/null")
                continue
            if key == "doi":
                if not (DOI_RE.match(value) or URL_RE.match(value)):
                    errors.append(f"{where}: invalid DOI/link format for {key}: {value}")
            elif not URL_RE.match(value):
                errors.append(f"{where}: invalid link format for {key}: {value}")
        if entry.get("status") == "verified":
            if not entry.get("one_line_summary"):
                errors.append(f"{where}: verified entry missing one_line_summary")
            if not entry.get("why_it_matters"):
                errors.append(f"{where}: verified entry missing why_it_matters")
            verification = entry.get("verification") or {}
            if verification.get("link_verified") is not True:
                errors.append(f"{where}: verified entry missing verification.link_verified=true")

    for key, count in ids.items():
        if key and count > 1:
            errors.append(f"duplicate id: {key}")
    for key, count in titles.items():
        if key and count > 1:
            errors.append(f"duplicate normalized title: {key}")


def validate_starter_pack(data: list[dict], errors: list[str]) -> None:
    matches = starter_matches(data)
    pack = next((item for item in starter_packs() if item.get("id") == "beginner_20"), None)
    for title in (pack or {}).get("entries", []):
        entry = matches.get(title)
        if not entry:
            errors.append(f"beginner starter entry does not match data/papers.yaml: {title}")
        elif not primary_link(entry):
            errors.append(f"beginner starter entry missing official primary link: {title} -> {entry.get('id')}")


def validate_cards(data: list[dict], errors: list[str]) -> None:
    entry_ids = {entry.get("id") for entry in data}
    filled_cards = []
    cards_by_entry = card_inventory()
    for path in sorted((ROOT / "cards").glob("**/*.md")):
        rel = path.relative_to(ROOT).as_posix()
        if "template" in path.name or rel.startswith("cards/examples/") or rel == "cards/README.md":
            continue
        text = path.read_text(encoding="utf-8")
        filled_cards.append(rel)
        if not re.search(r"^#\s+\S", text, flags=re.M):
            errors.append(f"card missing title heading: {rel}")
        match = re.search(r"<!--\s*entry_id:\s*([^\s]+)\s*-->", text)
        if not match:
            errors.append(f"card missing entry_id comment: {rel}")
        elif match.group(1) not in entry_ids:
            errors.append(f"card entry_id not found in data/papers.yaml: {rel} -> {match.group(1)}")
        for alternatives in CARD_REQUIRED_ANY:
            if not any(heading in text for heading in alternatives):
                errors.append(f"card missing required section {alternatives[0]!r}: {rel}")
    if len(filled_cards) < 50:
        errors.append(f"expected at least 50 filled cards; found {len(filled_cards)}")

    # Beginner starter pack cards are required for the project front door.
    matches = starter_matches(data)
    beginner = next((pack for pack in starter_packs() if pack.get("id") == "beginner_20"), None)
    if beginner:
        for title in beginner.get("entries", []):
            entry = matches.get(title)
            if entry and not cards_by_entry.get(entry.get("id")):
                errors.append(f"beginner starter entry missing card: {title} -> {entry.get('id')}")


def scan_leakage(errors: list[str]) -> None:
    files: list[Path] = []
    for root in PUBLIC_SCAN_ROOTS:
        path = ROOT / root
        if path.is_file():
            files.append(path)
        elif path.is_dir():
            files.extend(p for p in path.glob("**/*") if p.is_file() and ".git" not in p.parts)
    for path in files:
        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for term in LEAKAGE_TERMS:
            if term in text:
                errors.append(f"possible prompt/conversation leakage term {term!r} in {path.relative_to(ROOT)}")


def validate_site(errors: list[str]) -> None:
    for rel in ["docs/assets/entries.json", "docs/assets/counts.json", "docs/assets/starter_packs.json"]:
        path = ROOT / rel
        if not path.exists() or not path.read_text(encoding="utf-8").strip():
            errors.append(f"missing generated site asset: {rel}")


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []
    data = entries()
    if not data:
        errors.append("data/papers.yaml must contain a non-empty list")
    validate_docs(errors)
    validate_yaml_payloads(errors)
    validate_entries(data, errors, warnings)
    validate_starter_pack(data, errors)
    validate_cards(data, errors)
    validate_site(errors)
    scan_leakage(errors)

    print(f"entries: {len(data)}")
    print(f"errors: {len(errors)}")
    print(f"warnings: {len(warnings)}")
    for msg in errors[:160]:
        print("ERROR:", msg)
    if len(errors) > 160:
        print(f"ERROR: ... {len(errors) - 160} more")
    for msg in warnings[:80]:
        print("WARNING:", msg)
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
