#!/usr/bin/env python3
from __future__ import annotations

from collections import Counter
import re
from common import ROOT, load_yaml_json, write_json

PUBLIC_FIELDS = [
    "id", "title", "year", "venue", "source_role", "verification_contract",
    "supervision_granularity", "domains", "training_use", "construction_layer",
    "artifacts", "audit", "inclusion_reason", "tags", "status",
]
ARTIFACT_LABELS = {
    "paper": "Paper",
    "arxiv": "arXiv",
    "code": "Code",
    "data": "Data",
    "project": "Project",
    "huggingface": "Hugging Face",
    "doi": "DOI",
}
ENTRY_RE = re.compile(r"<!--\s*entry_id:\s*([^\s]+)\s*-->")
TYPE_RE = re.compile(r"<!--\s*card_type:\s*([^\s]+)\s*-->")
TITLE_RE = re.compile(r"^#\s+(.+)$", re.MULTILINE)


def as_list(value):
    if isinstance(value, list):
        return [v for v in value if v]
    return [value] if value else []


def card_inventory():
    cards = []
    for path in sorted((ROOT / "cards").glob("**/*.md")):
        rel = path.relative_to(ROOT).as_posix()
        if "template" in path.name or rel.startswith("cards/examples/") or rel == "cards/README.md":
            continue
        text = path.read_text(encoding="utf-8")
        entry_match = ENTRY_RE.search(text)
        type_match = TYPE_RE.search(text)
        title_match = TITLE_RE.search(text)
        cards.append({
            "path": rel,
            "entry_id": entry_match.group(1) if entry_match else None,
            "type": type_match.group(1) if type_match else path.parent.name,
            "title": title_match.group(1).strip() if title_match else path.stem.replace("_", " ").title(),
        })
    return cards


def artifact_links(entry):
    links = []
    for key, label in ARTIFACT_LABELS.items():
        value = (entry.get("artifacts") or {}).get(key)
        if isinstance(value, str) and value:
            links.append({"kind": key, "label": label, "url": value})
    return links


def compact_summary(entry):
    reason = entry.get("inclusion_reason") or ""
    if reason and len(reason) <= 180:
        return reason
    roles = ", ".join(as_list(entry.get("source_role"))[:2]) or "atlas entry"
    contracts = ", ".join(as_list(entry.get("verification_contract"))[:2]) or "unknown contract"
    return f"{roles.replace('_', ' ')} with {contracts.replace('_', ' ')} verification metadata."


def count_by(entries, field):
    counts = Counter()
    for entry in entries:
        for value in as_list(entry.get(field)):
            counts[str(value)] += 1
    return dict(sorted(counts.items(), key=lambda item: (-item[1], item[0])))


def main():
    entries = load_yaml_json(ROOT / "data/papers.yaml")
    cards = card_inventory()
    card_by_entry = {card["entry_id"]: card["path"] for card in cards if card.get("entry_id")}

    public = []
    for entry in entries:
        item = {field: entry.get(field) for field in PUBLIC_FIELDS}
        item["artifact_links"] = artifact_links(entry)
        item["card"] = card_by_entry.get(entry.get("id"))
        item["one_line"] = compact_summary(entry)
        public.append(item)

    counts = {
        "total": len(public),
        "cards": len(cards),
        "verified": sum(1 for entry in public if entry.get("status") == "verified"),
        "source_role": count_by(public, "source_role"),
        "verification_contract": count_by(public, "verification_contract"),
        "training_use": count_by(public, "training_use"),
        "status": count_by(public, "status"),
        "year": count_by(public, "year"),
    }
    latest = sorted(public, key=lambda e: ((e.get("year") or 0), e.get("title") or ""), reverse=True)[:25]

    write_json(ROOT / "docs/assets/entries.json", public)
    write_json(ROOT / "docs/assets/cards.json", cards)
    write_json(ROOT / "docs/assets/counts.json", counts)
    write_json(ROOT / "docs/assets/latest.json", latest)
    write_json(ROOT / "data/_generated/entries.json", public)
    write_json(ROOT / "data/_generated/cards.json", cards)
    write_json(ROOT / "data/_generated/counts.json", counts)
    print(f"rendered entries: {len(public)} cards: {len(cards)}")


if __name__ == "__main__":
    main()
