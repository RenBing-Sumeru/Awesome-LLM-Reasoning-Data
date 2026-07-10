#!/usr/bin/env python3
from __future__ import annotations

from collections import Counter
from pathlib import Path
from atlas_utils import paper_card_inventory
from common import ROOT, load_yaml_json

FIELDS = ["status", "category", "source_role", "verification_contract", "training_use", "construction_layer", "year"]


def vals(entry, field):
    value = entry.get(field)
    if isinstance(value, list):
        return value or ["unknown"]
    return [value if value not in (None, "") else "unknown"]


def count_paper_card_sources():
    counts = Counter()
    files = sorted(paper_card_inventory().values())
    for rel in files:
        counts[Path(rel).parent.name] += 1
    return counts, files


def missing_link_entries(entries):
    out = []
    for entry in entries:
        artifacts = entry.get("artifacts") or {}
        if not any(artifacts.get(k) for k in ["paper", "arxiv", "doi"]):
            out.append(entry)
    return out


def main():
    entries = load_yaml_json(ROOT / "data/papers.yaml")
    card_counts, card_files = count_paper_card_sources()
    missing_links = missing_link_entries(entries)
    needs_search = [e for e in entries if e.get("status") in {"needs_search", "needs_url", "needs_metadata", "partial"}]

    lines = [
        "# Counts Report",
        "",
        f"total entries: {len(entries)}",
        f"complete bilingual paper-card sources: {len(card_files)}",
        f"missing primary paper/arXiv/DOI links: {len(missing_links)}",
        f"needs search / partial metadata: {len(needs_search)}",
        "",
    ]
    print(f"total: {len(entries)}")
    print(f"paper-card sources: {len(card_files)}")

    for field in FIELDS:
        counts = Counter(v for entry in entries for v in vals(entry, field))
        lines.append(f"## {field}")
        print(field)
        for key, value in sorted(counts.items(), key=lambda item: (-item[1], str(item[0]))):
            lines.append(f"- {key}: {value}")
            print(f"  {key}: {value}")
        lines.append("")

    lines.append("## paper-card sources")
    for key, value in sorted(card_counts.items()):
        lines.append(f"- {key}: {value}")
    lines.append("")

    lines.append("## missing primary links (first 80)")
    for entry in missing_links[:80]:
        lines.append(f"- `{entry.get('id')}` · {entry.get('title')} · status `{entry.get('status')}`")
    if len(missing_links) > 80:
        lines.append(f"- ... {len(missing_links) - 80} more")
    lines.append("")

    lines.append("## needs search / partial metadata (first 80)")
    for entry in needs_search[:80]:
        lines.append(f"- `{entry.get('id')}` · {entry.get('title')} · status `{entry.get('status')}`")
    if len(needs_search) > 80:
        lines.append(f"- ... {len(needs_search) - 80} more")

    report = "\n".join(lines) + "\n"
    (ROOT / "reports/counts.md").write_text(report, encoding="utf-8")


if __name__ == "__main__":
    main()
