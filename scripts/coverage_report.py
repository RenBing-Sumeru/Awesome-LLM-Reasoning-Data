#!/usr/bin/env python3
from __future__ import annotations

from collections import Counter
from datetime import date
import json

from atlas_utils import (
    ARTIFACT_KEYS,
    CURATION_LEVELS,
    PRIMARY_LINK_KEYS,
    artifact_link_count,
    artifacts,
    curation_level,
    entries,
    paper_card_inventory,
    primary_link,
    starter_matches,
    starter_packs,
)
from common import ROOT, write_json


def pct(num: int, den: int) -> str:
    return "0.0%" if den == 0 else f"{num / den * 100:.1f}%"


def main() -> int:
    data = entries()
    cards = paper_card_inventory()
    levels = Counter(curation_level(entry, cards.get(entry.get("id"))) for entry in data)
    verified = [entry for entry in data if entry.get("status") == "verified"]
    primary_verified = [entry for entry in verified if primary_link(entry)]
    starters = starter_matches(data)
    beginner_pack = next((pack for pack in starter_packs() if pack.get("id") == "beginner_20"), None)
    beginner_titles = beginner_pack.get("entries", []) if beginner_pack else []
    starter_entries = [starters[title] for title in beginner_titles if title in starters]
    starter_primary = [entry for entry in starter_entries if primary_link(entry)]
    starter_carded = [entry for entry in starter_entries if cards.get(entry.get("id"))]

    artifact_counts = {
        key: sum(1 for entry in data if artifacts(entry).get(key))
        for key in ARTIFACT_KEYS
    }
    missing_primary = [entry for entry in data if not primary_link(entry)]
    needs_search = [
        entry for entry in data
        if entry.get("status") in {"needs_search", "needs_url", "needs_metadata"} or not primary_link(entry)
    ]
    ambiguous = [entry for entry in data if entry.get("status") == "ambiguous"]
    duplicates = [entry for entry in data if entry.get("status") == "duplicate"]

    report = {
        "generated_at": date.today().isoformat(),
        "total_entries": len(data),
        "verified_entries": len(verified),
        "verified_with_primary_link": len(primary_verified),
        "verified_primary_link_coverage": pct(len(primary_verified), len(verified)),
        "curation_levels": {level: levels.get(level, 0) for level in CURATION_LEVELS},
        "official_link_coverage": {
            "paper_or_primary": sum(1 for entry in data if primary_link(entry)),
            **artifact_counts,
        },
        "starter_pack_20": {
            "total_matched": len(starter_entries),
            "with_primary_link": len(starter_primary),
            "paper_card_sources": len(starter_carded),
            "primary_link_coverage": pct(len(starter_primary), len(starter_entries)),
            "paper_card_source_coverage": pct(len(starter_carded), len(starter_entries)),
        },
        "needs_search": len(needs_search),
        "ambiguous": len(ambiguous),
        "duplicate": len(duplicates),
        "missing_primary_link": len(missing_primary),
        "paper_card_sources": len(cards),
        "artifact_verified_entries": sum(1 for entry in data if artifact_link_count(entry) > 1),
    }

    lines = [
        "# Link Coverage",
        "",
        "Public coverage report generated from the Card library and its local source inventory.",
        "",
        "## Summary",
        "",
        f"- Total entries: {report['total_entries']}",
        f"- Verified entries: {report['verified_entries']}",
        f"- Verified entries with official paper/arXiv/venue/DOI links: {report['verified_with_primary_link']} ({report['verified_primary_link_coverage']})",
        f"- Needs search: {report['needs_search']}",
        f"- Ambiguous: {report['ambiguous']}",
        f"- Duplicate: {report['duplicate']}",
        f"- Paper-card sources: {report['paper_card_sources']}",
        "",
        "## Curation Levels",
        "",
    ]
    for level in CURATION_LEVELS:
        lines.append(f"- {level}: {report['curation_levels'][level]}")

    lines += [
        "",
        "## Official Link Coverage",
        "",
        f"- Official primary paper/arXiv/venue/DOI coverage: {report['official_link_coverage']['paper_or_primary']}",
        f"- arXiv coverage: {artifact_counts['arxiv']}",
        f"- OpenReview coverage: {artifact_counts['openreview']}",
        f"- ACL coverage: {artifact_counts['acl']}",
        f"- PMLR coverage: {artifact_counts['pmlr']}",
        f"- CVF coverage: {artifact_counts['cvf']}",
        f"- DOI coverage: {artifact_counts['doi']}",
        f"- Code coverage: {artifact_counts['code']}",
        f"- Data coverage: {artifact_counts['data']}",
        f"- Hugging Face coverage: {artifact_counts['huggingface']}",
        f"- Project page coverage: {artifact_counts['project']}",
        f"- Paper-card source coverage: {len(cards)}",
        "",
        "## Starter Pack Coverage",
        "",
        f"- Matched Starter Pack entries: {len(starter_entries)}",
        f"- Official primary links: {len(starter_primary)}/{len(starter_entries)} ({report['starter_pack_20']['primary_link_coverage']})",
        f"- Paper-card source coverage: {len(starter_carded)}/{len(starter_entries)} ({report['starter_pack_20']['paper_card_source_coverage']})",
        f"- Code/data/Hugging Face coverage: {sum(1 for entry in starter_entries if any(artifacts(entry).get(k) for k in ['code', 'data', 'huggingface']))}/{len(starter_entries)}",
        "",
        "## Missing Primary Links",
        "",
    ]
    for entry in missing_primary[:120]:
        lines.append(f"- `{entry.get('id')}` · {entry.get('title')} · status `{entry.get('status')}`")
    if len(missing_primary) > 120:
        lines.append(f"- ... {len(missing_primary) - 120} more")

    write_json(ROOT / "reports/link_coverage.json", report)
    (ROOT / "reports/link_coverage.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    needs_lines = [
        "# Needs Search",
        "",
        "Entries below are intentionally not promoted as verified until an official primary source is pinned.",
        "",
    ]
    for entry in needs_search:
        title = entry.get("title") or entry.get("id")
        missing = []
        art = artifacts(entry)
        if not primary_link(entry):
            missing.append("official paper / arXiv / venue / DOI")
        for key in ["code", "data", "huggingface", "project"]:
            if not art.get(key):
                missing.append(key)
        needs_lines += [
            f"## {title}",
            "",
            f"- Current status: `{entry.get('status')}`",
            f"- Possible category: {', '.join(entry.get('category') or []) or 'unknown'}",
            "- Missing:",
        ]
        needs_lines += [f"  - {item}" for item in missing]
        needs_lines += [
            "- Search queries:",
            f"  - `\"{title}\" arXiv`",
            f"  - `\"{title}\" OpenReview`",
            f"  - `\"{title}\" GitHub`",
            f"  - `\"{title}\" Hugging Face`",
            f"- Notes: {entry.get('inclusion_reason') or 'Needs curator review.'}",
            "",
        ]
    (ROOT / "reports/needs_search.md").write_text("\n".join(needs_lines), encoding="utf-8")

    research_lines = [
        "# Public Research Log",
        "",
        "This public log summarizes source verification progress without including private execution notes.",
        "",
        f"- Generated at: {report['generated_at']}",
        f"- Entries with verified primary links: {report['verified_with_primary_link']}",
        f"- Entries still needing primary-source search: {report['missing_primary_link']}",
        f"- Starter Pack primary-link coverage: {report['starter_pack_20']['primary_link_coverage']}",
        f"- Starter Pack paper-card source coverage: {report['starter_pack_20']['paper_card_source_coverage']}",
        "",
        "## Verification Policy",
        "",
        "- Prefer official venue pages, arXiv abs pages, OpenReview, ACL Anthology, PMLR, CVF, DOI pages, author project pages, official GitHub repositories, and official Hugging Face pages.",
        "- Do not mark an entry verified unless an official primary paper, venue, arXiv, or DOI link is pinned.",
        "- Keep unresolved items visible in `reports/needs_search.md` instead of inventing links.",
    ]
    (ROOT / "reports/research_log_public.md").write_text("\n".join(research_lines) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
