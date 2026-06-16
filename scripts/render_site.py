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
    compact_audit,
    compact_data_object,
    compact_feedback,
    curation_level,
    entries,
    infer_subfield,
    one_line,
    primary_link,
    research_tracks,
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
        category_ids = entry.get("category") or []
        first_category = category_ids[0] if category_ids else None
        subfield = infer_subfield(entry, first_category)
        link = primary_link(entry)
        needs_search = entry.get("status") != "verified" or not link
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
            "category": category_ids,
            "subfield": subfield.get("name") if subfield else "Other related work",
            "tags": entry.get("tags") or [],
            "one_line_summary": one_line(entry),
            "why_it_matters": why_it_matters(entry),
            "data_object": compact_data_object(entry),
            "feedback_verifier": compact_feedback(entry),
            "audit_focus": compact_audit(entry),
            "curation_level": curation_level(entry, card_path),
            "status": entry.get("status"),
            "needs_search": needs_search,
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
            "primary_link": link,
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
        "needs_search": count_if(lambda item: item.get("needs_search")),
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


def render_index_html(counts: dict) -> str:
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Awesome LLM Reasoning Data Atlas</title>
  <link rel="stylesheet" href="assets/site.css">
</head>
<body>
  <header class="site-header">
    <nav class="topbar" aria-label="Primary navigation">
      <a class="brand" href="../README.md">Awesome LLM Reasoning Data</a>
      <div class="navlinks">
        <a href="https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data">GitHub</a>
        <a href="../README.md">README</a>
        <a href="../papers/README.md">Papers</a>
        <a href="../cards/README.md">Cards</a>
        <a href="../reports/link_coverage.md">Coverage</a>
      </div>
    </nav>
    <section class="hero">
      <div>
        <p class="eyebrow">Searchable research atlas</p>
        <h1>Browse reasoning-data papers by research track, data object, verifier, and audit signal.</h1>
        <p class="lede">Use this page like a lightweight literature database: start from a field tab, narrow by subfield or feedback contract, then open the paper, card, code, data, or project link.</p>
      </div>
      <div class="stat-panel" aria-label="Atlas statistics">
        <div><strong id="totalEntries">{counts.get('total_entries', 0)}</strong><span>entries</span></div>
        <div><strong id="verifiedEntries">{counts.get('verified_entries', 0)}</strong><span>verified</span></div>
        <div><strong id="cardedEntries">{counts.get('carded_entries', 0)}</strong><span>carded</span></div>
        <div><strong id="needsSearch">{counts.get('needs_search', 0)}</strong><span>needs search</span></div>
      </div>
    </section>
  </header>

  <main>
    <section class="quick-stats" aria-label="Role statistics">
      <div><strong id="dataReleases">{counts.get('data_releases', 0)}</strong><span>data releases</span></div>
      <div><strong id="verifiersRewards">{counts.get('verifiers_rewards', 0)}</strong><span>verifiers/rewards</span></div>
      <div><strong id="agentEnvironments">{counts.get('agent_environments', 0)}</strong><span>agent environments</span></div>
      <div><strong id="scalingStudies">{counts.get('scaling_studies', 0)}</strong><span>scaling studies</span></div>
    </section>

    <section class="track-section">
      <div class="section-head">
        <h2>Research Tracks</h2>
        <p>Jump by field first, then use filters for data object, verifier, training use, and artifact coverage.</p>
      </div>
      <div id="trackTabs" class="track-tabs"></div>
    </section>

    <section class="controls" aria-label="Search and filters">
      <label class="search"><span>Search</span><input id="q" type="search" placeholder="title, author, tag, summary, venue"></label>
      <label><span>Research area</span><select id="category"><option value="">All areas</option></select></label>
      <label><span>Subfield</span><select id="subfield"><option value="">All subfields</option></select></label>
      <label><span>Year</span><select id="year"><option value="">All years</option></select></label>
      <label><span>Venue</span><select id="venue"><option value="">All venues</option></select></label>
      <label><span>Source role</span><select id="sourceRole"><option value="">All roles</option></select></label>
      <label><span>Contract</span><select id="contract"><option value="">All contracts</option></select></label>
      <label><span>Granularity</span><select id="granularity"><option value="">All granularities</option></select></label>
      <label><span>Training use</span><select id="trainingUse"><option value="">All uses</option></select></label>
      <label><span>Curation</span><select id="curation"><option value="">All levels</option></select></label>
      <label><span>Status</span><select id="status"><option value="">All statuses</option></select></label>
      <label><span>Artifact</span><select id="artifact"><option value="">Any artifact</option></select></label>
      <button id="reset" type="button">Reset</button>
    </section>

    <section class="path-section">
      <div class="section-head">
        <h2>Reading Paths</h2>
        <p>Curated paths for different readers: begin with the essentials, then branch into verifiers, agent environments, construction recipes, or audit work.</p>
      </div>
      <div id="pathTabs" class="path-tabs"></div>
      <div id="pathPanel" class="path-panel"></div>
    </section>

    <section class="results-head">
      <h2>Results</h2>
      <p id="resultSummary">Loading atlas data...</p>
    </section>
    <section id="results" class="result-grid" aria-live="polite"></section>
  </main>

  <footer class="site-footer">
    <span>Generated from structured atlas metadata.</span>
    <a href="../data/papers.yaml">data/papers.yaml</a>
    <a href="assets/entries.json">entries.json</a>
    <a href="../reports/link_check.md">link check</a>
  </footer>

  <script src="assets/atlas-data.js"></script>
  <script src="assets/site.js"></script>
</body>
</html>
"""


def render(target_root: Path = ROOT) -> None:
    items = site_entries()
    counts = site_counts(items)
    cats = categories()
    tracks = research_tracks()
    packs = site_starter_packs(items)
    write_json(target_root / "docs/assets/entries.json", items)
    write_json(target_root / "docs/assets/counts.json", counts)
    write_json(target_root / "docs/assets/categories.json", cats)
    write_json(target_root / "docs/assets/research_tracks.json", tracks)
    write_json(target_root / "docs/assets/starter_packs.json", packs)
    write_json(target_root / "data/_generated/entries.json", items)
    write_json(target_root / "data/_generated/counts.json", counts)
    fallback = {
        "entries": items,
        "counts": counts,
        "categories": cats,
        "research_tracks": tracks,
        "starter_packs": packs,
    }
    payload = json.dumps(fallback, ensure_ascii=False, indent=2)
    (target_root / "docs/assets/atlas-data.js").write_text(f"window.ATLAS_DATA = {payload};\n", encoding="utf-8")
    (target_root / "docs/index.html").write_text(render_index_html(counts), encoding="utf-8")


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
            ("docs/assets/research_tracks.json", ROOT / "docs/assets/research_tracks.json"),
            ("docs/assets/starter_packs.json", ROOT / "docs/assets/starter_packs.json"),
            ("docs/assets/atlas-data.js", ROOT / "docs/assets/atlas-data.js"),
            ("docs/index.html", ROOT / "docs/index.html"),
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
