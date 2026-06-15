#!/usr/bin/env python3
from __future__ import annotations

from atlas_utils import artifacts, curation_level, entries, one_line, primary_link, why_it_matters, write_csv
from common import ROOT, write_json


def main() -> int:
    data = entries()
    rows = []
    for entry in data:
        art = artifacts(entry)
        rows.append({
            "id": entry.get("id"),
            "title": entry.get("title"),
            "year": entry.get("year"),
            "venue": entry.get("venue"),
            "status": entry.get("status"),
            "curation_level": curation_level(entry),
            "primary_link": primary_link(entry),
            "arxiv": art.get("arxiv"),
            "paper": art.get("paper"),
            "code": art.get("code"),
            "data": art.get("data"),
            "huggingface": art.get("huggingface"),
            "project": art.get("project"),
            "source_role": ";".join(entry.get("source_role") or []),
            "verification_contract": ";".join(entry.get("verification_contract") or []),
            "training_use": ";".join(entry.get("training_use") or []),
            "one_line_summary": one_line(entry),
            "why_it_matters": why_it_matters(entry),
        })
    fields = list(rows[0].keys()) if rows else []
    write_csv(ROOT / "exports/papers.csv", rows, fields)
    write_json(ROOT / "exports/papers.json", rows)
    print(f"exported {len(rows)} rows")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
