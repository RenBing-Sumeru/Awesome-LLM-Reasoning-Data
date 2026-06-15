#!/usr/bin/env python3
from __future__ import annotations

from collections import Counter
import csv
import re
from typing import Any

from common import ROOT, load_yaml_json

PRIMARY_LINK_KEYS = ["paper", "arxiv", "venue", "openreview", "acl", "pmlr", "cvf", "doi"]
ARTIFACT_KEYS = [
    "paper", "arxiv", "venue", "openreview", "acl", "pmlr", "cvf", "doi",
    "code", "data", "huggingface", "project", "bibtex",
]
CURATION_LEVELS = [
    "L0_seeded",
    "L1_link_verified",
    "L2_artifact_verified",
    "L3_summary_ready",
    "L4_carded",
    "L5_audit_ready",
]


def as_list(value: Any) -> list[Any]:
    if isinstance(value, list):
        return [item for item in value if item not in (None, "")]
    return [value] if value not in (None, "") else []


def norm(value: Any) -> str:
    return re.sub(r"[^a-z0-9]+", " ", str(value or "").lower()).strip()


def slugify(value: Any, fallback: str = "entry") -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", str(value or "").lower()).strip("-")
    return slug or fallback


def entries() -> list[dict[str, Any]]:
    payload = load_yaml_json(ROOT / "data/papers.yaml")
    return payload if isinstance(payload, list) else []


def categories() -> list[dict[str, Any]]:
    payload = load_yaml_json(ROOT / "data/categories.yaml") or {}
    return payload.get("paper_categories", [])


def starter_packs() -> list[dict[str, Any]]:
    payload = load_yaml_json(ROOT / "data/starter_packs.yaml") or {}
    return payload.get("starter_packs", [])


def artifacts(entry: dict[str, Any]) -> dict[str, Any]:
    return entry.get("artifacts") or {}


def primary_link(entry: dict[str, Any]) -> str | None:
    data = artifacts(entry)
    for key in PRIMARY_LINK_KEYS:
        if data.get(key):
            return data[key]
    return None


def primary_link_kind(entry: dict[str, Any]) -> str | None:
    data = artifacts(entry)
    for key in PRIMARY_LINK_KEYS:
        if data.get(key):
            return key
    return None


def artifact_link_count(entry: dict[str, Any]) -> int:
    return sum(1 for key in ARTIFACT_KEYS if artifacts(entry).get(key))


def has_artifact(entry: dict[str, Any]) -> bool:
    return artifact_link_count(entry) > 0


def card_inventory() -> dict[str, str]:
    cards: dict[str, str] = {}
    pattern = re.compile(r"<!--\s*entry_id:\s*([^\s]+)\s*-->")
    for path in sorted((ROOT / "cards").glob("**/*.md")):
        rel = path.relative_to(ROOT).as_posix()
        if "template" in path.name or rel.startswith("cards/examples/") or rel == "cards/README.md":
            continue
        match = pattern.search(path.read_text(encoding="utf-8"))
        if match:
            cards[match.group(1)] = rel
    return cards


def curation_level(entry: dict[str, Any], card_path: str | None = None) -> str:
    explicit = entry.get("curation_level")
    if explicit in CURATION_LEVELS:
        return explicit
    if not primary_link(entry):
        return "L0_seeded"
    if card_path:
        return "L4_carded"
    if entry.get("one_line_summary") and entry.get("why_it_matters"):
        return "L3_summary_ready"
    if has_artifact(entry):
        return "L2_artifact_verified"
    return "L1_link_verified"


def one_line(entry: dict[str, Any]) -> str:
    return (
        entry.get("one_line_summary")
        or entry.get("one_line")
        or entry.get("inclusion_reason")
        or "Needs curator summary."
    )


def why_it_matters(entry: dict[str, Any]) -> str:
    return entry.get("why_it_matters") or entry.get("inclusion_reason") or "Needs curator rationale."


def link_parts(entry: dict[str, Any], card_path: str | None = None) -> list[str]:
    data = artifacts(entry)
    labels = {
        "paper": "Paper",
        "venue": "Venue",
        "arxiv": "arXiv",
        "openreview": "OpenReview",
        "acl": "ACL",
        "pmlr": "PMLR",
        "cvf": "CVF",
        "doi": "DOI",
        "code": "Code",
        "data": "Data",
        "huggingface": "HF",
        "project": "Project",
    }
    out = []
    seen = set()
    for key, label in labels.items():
        url = data.get(key)
        if url and url not in seen:
            out.append(f"[{label}]({url})")
            seen.add(url)
    if card_path:
        out.append(f"[Card](../{card_path})")
    if not out:
        out.append("needs_search")
    return out


def counts_by(entries_: list[dict[str, Any]], field: str) -> Counter:
    counter: Counter = Counter()
    for entry in entries_:
        value = entry.get(field)
        if "." in field:
            value = entry
            for part in field.split("."):
                value = (value or {}).get(part) if isinstance(value, dict) else None
        for item in as_list(value):
            counter[str(item)] += 1
    return counter


def starter_matches(entries_: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    by_title = {norm(entry.get("title")): entry for entry in entries_}
    by_id = {entry.get("id"): entry for entry in entries_}
    aliases = {
        "gsm8k": "gsm8k-grade-school-math-2021",
        "humaneval": "humaneval-code-generation-benchmark-2021",
        "star": "star-bootstrapping-reasoning-with-reasoning-2022",
        "swe bench": "swe-bench-can-language-models-resolve-real-world-github-issues-2023",
        "rewardbench": "rewardbench-evaluating-reward-models-for-language-modeling-2024",
        "livebench": "livebench-a-challenging-contamination-free-benchmark-for-large-language-models-2024",
        "math dataset": "measuring-mathematical-problem-solving-with-the-math-dataset-2021",
        "training verifiers to solve math word problems": "training-verifiers-to-solve-math-word-problems-2021",
    }
    out: dict[str, dict[str, Any]] = {}
    for pack in starter_packs():
        for title in pack.get("entries", []):
            key = norm(title)
            match = by_id.get(aliases.get(key, "")) or by_title.get(key)
            if not match:
                candidates = [
                    entry for entry in entries_
                    if key and (key in norm(entry.get("title")) or norm(entry.get("title")) in key)
                ]
                if candidates:
                    match = sorted(candidates, key=lambda entry: abs(len(norm(entry.get("title"))) - len(key)))[0]
            if match:
                out[title] = match
    return out


def write_csv(path, rows: list[dict[str, Any]], fieldnames: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)
