#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import tempfile
from pathlib import Path

from atlas_utils import (
    artifacts,
    card_inventory,
    categories,
    curation_level,
    entries,
    one_line,
    primary_link,
    starter_matches,
    starter_packs,
    why_it_matters,
)
from common import ROOT, write_json


def site_entries() -> list[dict]:
    cards = card_inventory()
    out = []
    for entry in entries():
        card_path = cards.get(entry.get("id"))
        art = artifacts(entry)
        out.append({
            "id": entry.get("id"),
            "title": entry.get("title"),
            "year": entry.get("year"),
            "venue": entry.get("venue"),
            "authors": entry.get("authors") or [],
            "source_role": entry.get("source_role") or [],
            "verification_contract": entry.get("verification_contract") or [],
            "supervision_granularity": entry.get("supervision_granularity") or [],
            "training_use": entry.get("training_use") or [],
            "domains": entry.get("domains") or [],
            "category": entry.get("category") or [],
            "tags": entry.get("tags") or [],
            "one_line_summary": one_line(entry),
            "why_it_matters": why_it_matters(entry),
            "curation_level": curation_level(entry, card_path),
            "status": entry.get("status"),
            "artifacts": {
                "paper": art.get("paper"),
                "venue": art.get("venue"),
                "arxiv": art.get("arxiv"),
                "openreview": art.get("openreview"),
                "acl": art.get("acl"),
                "pmlr": art.get("pmlr"),
                "cvf": art.get("cvf"),
                "doi": art.get("doi"),
                "code": art.get("code"),
                "data": art.get("data"),
                "huggingface": art.get("huggingface"),
                "project": art.get("project"),
                "bibtex": art.get("bibtex"),
                "card": card_path,
            },
            "primary_link": primary_link(entry),
        })
    return out


def site_counts(items: list[dict]) -> dict:
    def count_if(fn):
        return sum(1 for item in items if fn(item))

    return {
        "total_entries": len(items),
        "verified_entries": count_if(lambda item: item.get("status") == "verified"),
        "carded_entries": count_if(lambda item: item.get("artifacts", {}).get("card")),
        "data_releases": count_if(lambda item: "data_release" in item.get("source_role", [])),
        "verifiers_rewards": count_if(lambda item: "verifier_reward" in item.get("source_role", [])),
        "agent_environments": count_if(lambda item: "agent_environment" in item.get("source_role", [])),
        "scaling_studies": count_if(lambda item: "scaling_study" in item.get("source_role", [])),
        "needs_search": count_if(lambda item: item.get("status") != "verified" or not item.get("primary_link")),
    }


def site_starter_packs(items: list[dict]) -> list[dict]:
    by_id = {item["id"]: item for item in items}
    matches = starter_matches(entries())
    packs = []
    for pack in starter_packs():
        rendered = []
        for title in pack.get("entries", []):
            entry = matches.get(title)
            rendered.append({
                "title": title,
                "entry_id": entry.get("id") if entry else None,
                "matched": bool(entry),
                "entry": by_id.get(entry.get("id")) if entry else None,
            })
        packs.append({
            "id": pack.get("id"),
            "emoji": pack.get("emoji"),
            "title": pack.get("title"),
            "goal": pack.get("goal"),
            "entries": rendered,
        })
    return packs


def render(target_root: Path = ROOT) -> None:
    items = site_entries()
    counts = site_counts(items)
    cats = categories()
    packs = site_starter_packs(items)
    write_json(target_root / "docs/assets/entries.json", items)
    write_json(target_root / "docs/assets/counts.json", counts)
    write_json(target_root / "docs/assets/categories.json", cats)
    write_json(target_root / "docs/assets/starter_packs.json", packs)
    write_json(target_root / "data/_generated/entries.json", items)
    write_json(target_root / "data/_generated/counts.json", counts)
    fallback = {
        "entries": items,
        "counts": counts,
        "categories": cats,
        "starter_packs": packs,
    }
    payload = json.dumps(fallback, ensure_ascii=False, indent=2)
    (target_root / "docs/assets/atlas-data.js").write_text(f"window.ATLAS_DATA = {payload};\n", encoding="utf-8")


def check() -> int:
    with tempfile.TemporaryDirectory() as tmp:
        temp = Path(tmp)
        (temp / "docs/assets").mkdir(parents=True)
        (temp / "data/_generated").mkdir(parents=True)
        render(temp)
        checks = [
            ("docs/assets/entries.json", ROOT / "docs/assets/entries.json"),
            ("docs/assets/counts.json", ROOT / "docs/assets/counts.json"),
            ("docs/assets/categories.json", ROOT / "docs/assets/categories.json"),
            ("docs/assets/starter_packs.json", ROOT / "docs/assets/starter_packs.json"),
            ("docs/assets/atlas-data.js", ROOT / "docs/assets/atlas-data.js"),
        ]
        problems = []
        for rel, actual in checks:
            if not actual.exists():
                problems.append(f"missing {actual.relative_to(ROOT)}")
                continue
            if rel.endswith(".json"):
                expected = json.loads((temp / rel).read_text(encoding="utf-8"))
                current = json.loads(actual.read_text(encoding="utf-8"))
                if current != expected:
                    problems.append(f"out of date: {actual.relative_to(ROOT)}")
            else:
                expected = (temp / rel).read_text(encoding="utf-8")
                current = actual.read_text(encoding="utf-8")
                if current != expected:
                    problems.append(f"out of date: {actual.relative_to(ROOT)}")
        if problems:
            for problem in problems:
                print("ERROR:", problem)
            return 1
    print("site data is up to date")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if args.check:
        return check()
    render(ROOT)
    print("rendered site data")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
