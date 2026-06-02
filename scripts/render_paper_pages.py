#!/usr/bin/env python3
"""Render the human-readable paper atlas pages from local paper metadata.

The renderer intentionally refuses to invent links. If data/papers.yaml does not
pin an official artifact, generated pages keep the entry and mark it as
needs_search for curator follow-up.
"""
from __future__ import annotations

import argparse
import json
import re
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any

from common import ROOT, load_yaml_json

PAPERS_DIR = ROOT / "papers"
REPORT = ROOT / "reports" / "paper_coverage_report.md"
CATEGORIES_PATH = ROOT / "data" / "categories.yaml"
STARTER_PACKS_PATH = ROOT / "data" / "starter_packs.yaml"

ROLE_EMOJI = {
    "survey_background": "🧭",
    "model_report": "🚀",
    "data_release": "📦",
    "benchmark": "🧰",
    "verifier_reward": "🧪",
    "process_supervision": "🪜",
    "agent_environment": "🌐",
    "construction_recipe": "🏗️",
    "scaling_study": "📈",
    "audit_failure": "🧯",
    "infrastructure": "🛠️",
    "related_awesome_list": "🔗",
}
CONTRACT_EMOJI = {
    "programmatic": "🧮",
    "environmental": "🌐",
    "judgment_required": "⚖️",
    "mixed": "🔀",
    "unknown": "❔",
}
STATUS_LABEL = {
    "verified": "✅ verified",
    "partial": "🟡 partial",
    "needs_url": "🔎 needs_url",
    "needs_metadata": "🔎 needs_search",
    "needs_search": "🔎 needs_search",
    "ambiguous": "⚠️ ambiguous",
    "misattributed": "⚠️ misattributed",
    "duplicate": "♻️ duplicate",
    "excluded": "⛔ excluded",
}


def norm(text: Any) -> str:
    return re.sub(r"\s+", " ", str(text or "").lower()).strip()


def words(text: str) -> int:
    return len(re.findall(r"\b[\w%@$().+-]+\b", text))


def has_link(entry: dict[str, Any]) -> bool:
    artifacts = entry.get("artifacts") or {}
    return any(artifacts.get(key) for key in ["paper", "arxiv", "doi", "project", "code", "data", "huggingface"])


def artifact_links(entry: dict[str, Any]) -> str:
    artifacts = entry.get("artifacts") or {}
    parts: list[str] = []
    if artifacts.get("paper"):
        parts.append(f"[📄 Paper]({artifacts['paper']})")
    if artifacts.get("arxiv"):
        parts.append(f"[📄 arXiv]({artifacts['arxiv']})")
    if artifacts.get("doi"):
        doi = artifacts["doi"]
        url = doi if str(doi).startswith("http") else f"https://doi.org/{doi}"
        parts.append(f"[🔖 DOI]({url})")
    if artifacts.get("code"):
        parts.append(f"[🐙 Code]({artifacts['code']})")
    if artifacts.get("data"):
        parts.append(f"[📦 Data]({artifacts['data']})")
    if artifacts.get("huggingface"):
        parts.append(f"[🤗 Hugging Face]({artifacts['huggingface']})")
    if artifacts.get("project"):
        parts.append(f"[🌐 Project]({artifacts['project']})")
    parts.append("[📚 BibTeX index](../reports/bib_index.md)")
    if not has_link(entry):
        parts.append("`needs_search: official links not pinned locally`")
    return " · ".join(parts)


def meta_line(entry: dict[str, Any]) -> str:
    roles = entry.get("source_role") or []
    contracts = entry.get("verification_contract") or []
    gran = entry.get("supervision_granularity") or []
    uses = entry.get("training_use") or []
    role_tags = [f"{ROLE_EMOJI.get(r, '🏷️')} {r.replace('_', ' ')}" for r in roles[:3]]
    contract_tags = [f"{CONTRACT_EMOJI.get(c, '🏷️')} {c.replace('_', ' ')}" for c in contracts[:2]]
    bits = [str(entry.get("year") or "unknown year"), entry.get("venue") or "unknown venue"]
    bits += role_tags + contract_tags
    if gran and gran != ["unknown"]:
        bits.append("🪜 " + ", ".join(g.replace("_", " ") for g in gran[:2]))
    if uses and uses != ["unknown"]:
        bits.append("🎯 " + ", ".join(u.replace("_", " ") for u in uses[:2]))
    status = STATUS_LABEL.get(entry.get("status"), entry.get("status") or "unknown")
    if entry.get("status") in {"needs_metadata", "needs_search", "needs_url"} or not has_link(entry):
        status = "🔎 needs_search"
    bits.append(status)
    return " · ".join(bits)


def why_entry(entry: dict[str, Any], category: dict[str, Any]) -> str:
    reason = (entry.get("inclusion_reason") or "").strip()
    is_seed = "seeded-from-bib" in (entry.get("tags") or []) or reason.startswith("Local BibTeX seed") or reason.startswith("Seeded from local BibTeX")
    if is_seed:
        return "Bibliography lead awaiting primary-source link and paper-specific metadata before promotion."
    if reason:
        return reason
    return "Curated entry for this category; add a paper-specific rationale when expanding metadata."


def entry_block(entry: dict[str, Any], category: dict[str, Any]) -> str:
    title = entry.get("title") or entry.get("id") or "Untitled entry"
    primary = (entry.get("artifacts") or {}).get("paper") or (entry.get("artifacts") or {}).get("arxiv")
    title_md = f"[{title}]({primary})" if primary else title
    return (
        f"- **{title_md}**  \n"
        f"  <sub>{meta_line(entry)}</sub>  \n"
        f"  {artifact_links(entry)}  \n"
        f"  _Why it matters:_ {why_entry(entry, category)}"
    )


def compact_entry(entry: dict[str, Any]) -> str:
    primary = (entry.get("artifacts") or {}).get("paper") or (entry.get("artifacts") or {}).get("arxiv")
    title = entry.get("title") or entry.get("id") or "Untitled entry"
    title_md = f"[{title}]({primary})" if primary else title
    status = STATUS_LABEL.get(entry.get("status"), entry.get("status") or "unknown")
    if not has_link(entry):
        status = "🔎 needs_search"
    return f"{title_md} ({entry.get('year') or 'n.d.'}) · {status}"


def matches_phrase(entry: dict[str, Any], phrase: str) -> bool:
    hay = " ".join(
        [
            norm(entry.get("title")),
            norm(entry.get("id")),
            " ".join(norm(t) for t in entry.get("tags", [])),
            norm(entry.get("inclusion_reason")),
        ]
    )
    return norm(phrase) in hay


def dedupe_key(entry: dict[str, Any]) -> str:
    artifacts = entry.get("artifacts") or {}
    for key in ["arxiv", "paper", "doi", "project"]:
        if artifacts.get(key):
            return f"{key}:{norm(artifacts[key])}"
    title = norm(entry.get("title"))
    title = re.sub(r"[^a-z0-9]+", " ", title)
    title = re.sub(r"\b(a|an|the|v[0-9]+|technical|report|dataset|benchmark)\b", " ", title)
    return "title:" + re.sub(r"\s+", " ", title).strip()


def entry_quality(entry: dict[str, Any], score: int) -> tuple[int, int, int, int, int]:
    status_rank = {"verified": 4, "partial": 3, "needs_metadata": 2, "needs_url": 1, "needs_search": 1}.get(entry.get("status"), 0)
    link_rank = 1 if has_link(entry) else 0
    seeded_rank = 0 if "seeded-from-bib" in (entry.get("tags") or []) else 1
    reason_rank = 1 if not (entry.get("inclusion_reason") or "").startswith("Seeded from local BibTeX") else 0
    return (status_rank, link_rank, seeded_rank, reason_rank, score)


def has_term(hay: str, term: str) -> bool:
    term = term.strip()
    if not term:
        return False
    # Short category tokens such as SWE or API must match as tokens, not inside words like "answer".
    return re.search(r"(?<![a-z0-9])" + re.escape(term) + r"(?![a-z0-9])", hay) is not None


def passes_category_gate(entry: dict[str, Any], category: dict[str, Any], hay: str) -> bool:
    cid = category.get("id")
    roles = set(entry.get("source_role") or [])
    contracts = set(entry.get("verification_contract") or [])
    if cid == "environmental_agents_tools_web_swe":
        env_terms = [
            "agent", "environment", "webarena", "browser", "web", "osworld",
            "android", "appworld", "tool", "api", "swe", "software", "computer",
            "trajectory", "terminal", "mobile", "openhands", "r2e-gym", "browsergym",
        ]
        return bool(roles & {"agent_environment", "infrastructure"}) or "environmental" in contracts or any(has_term(hay, term) for term in env_terms)
    if cid == "process_supervision_prm":
        process_terms = [
            "process", "prm", "process reward", "step", "first error", "verify step",
            "math-shepherd", "omegaprm", "processbench", "prmbench", "verifier",
        ]
        return "process_supervision" in roles or any(has_term(hay, term) for term in process_terms)
    return True


def score_entry(entry: dict[str, Any], category: dict[str, Any]) -> int:
    score = 0
    title = norm(entry.get("title"))
    hay = " ".join([title, norm(entry.get("id")), norm(entry.get("inclusion_reason")), " ".join(norm(t) for t in entry.get("tags", []))])
    if not passes_category_gate(entry, category, hay):
        return 0
    for phrase in category.get("match_any", []):
        p = norm(phrase)
        if p and p in hay:
            score += 8 if len(p) > 7 else 4
    for role in category.get("roles", []):
        if role in (entry.get("source_role") or []):
            score += 5
    for contract in category.get("contracts", []):
        if contract in (entry.get("verification_contract") or []):
            score += 5
    for use in category.get("training_use", []):
        if use in (entry.get("training_use") or []):
            score += 4
    for phrase in category.get("starter_match", []):
        if norm(phrase) in hay:
            score += 10

    # Quality bonuses should only promote entries already matched to this category.
    # Otherwise every verified linked entry leaks into every page.
    if score > 0:
        if entry.get("status") == "verified":
            score += 3
        elif entry.get("status") == "partial":
            score += 1
        if has_link(entry):
            score += 2

    # Avoid generic seeded survey entries dominating specialized pages unless title text matched.
    if "seeded-from-bib" in (entry.get("tags") or []) and score < 8:
        score = 0
    return score


def selected_entries(entries: list[dict[str, Any]], category: dict[str, Any]) -> list[dict[str, Any]]:
    best_by_key: dict[str, tuple[int, dict[str, Any]]] = {}
    for entry in entries:
        score = score_entry(entry, category)
        if score <= 0:
            continue
        key = dedupe_key(entry)
        current = best_by_key.get(key)
        if current is None or entry_quality(entry, score) > entry_quality(current[1], current[0]):
            best_by_key[key] = (score, entry)
    scored = list(best_by_key.values())
    scored.sort(
        key=lambda item: (
            -item[0],
            0 if item[1].get("status") == "verified" else 1,
            0 if has_link(item[1]) else 1,
            item[1].get("year") or 0,
            item[1].get("title") or "",
        )
    )
    return [entry for _score, entry in scored[: int(category.get("max_entries", 60))]]


def is_seed_entry(entry: dict[str, Any]) -> bool:
    return "seeded-from-bib" in (entry.get("tags") or []) or str(entry.get("one_line") or entry.get("inclusion_reason") or "").startswith("Local BibTeX seed")


def is_promoted_entry(entry: dict[str, Any]) -> bool:
    return has_link(entry) and not is_seed_entry(entry)


def starter_entries(chosen: list[dict[str, Any]], category: dict[str, Any]) -> list[dict[str, Any]]:
    eligible = [e for e in chosen if is_promoted_entry(e)]
    starters: list[dict[str, Any]] = []
    seen: set[str] = set()
    for phrase in category.get("starter_match", []):
        matches = [e for e in eligible if matches_phrase(e, phrase)]
        matches.sort(key=lambda e: (0 if e.get("audit", {}).get("citation_status") == "verified" else 1, e.get("year") or 9999))
        for entry in matches[:1]:
            if entry.get("id") not in seen:
                starters.append(entry)
                seen.add(entry.get("id"))
    for entry in eligible:
        if len(starters) >= 18:
            break
        if entry.get("id") not in seen:
            starters.append(entry)
            seen.add(entry.get("id"))
    return starters[:18]


def group_entries(chosen: list[dict[str, Any]], category: dict[str, Any]) -> dict[str, list[dict[str, Any]]]:
    groups: dict[str, list[dict[str, Any]]] = {s["name"]: [] for s in category.get("subtopics", [])}
    groups["📚 Additional local seeds"] = []
    used: set[str] = set()
    for entry in chosen:
        placed = False
        hay = " ".join([norm(entry.get("title")), norm(entry.get("id")), norm(entry.get("inclusion_reason"))])
        for subtopic in category.get("subtopics", []):
            if any(norm(k) in hay for k in subtopic.get("keywords", [])):
                groups[subtopic["name"]].append(entry)
                used.add(entry.get("id"))
                placed = True
                break
        if not placed:
            groups["📚 Additional local seeds"].append(entry)
    return {k: v for k, v in groups.items() if v}


def starter_table(starters: list[dict[str, Any]], category: dict[str, Any]) -> str:
    if not starters:
        return "_No promoted starter entries yet. Use the needs-search queue below to decide what to verify next._"
    rows = ["| Paper | Year | Why start here | Link status |", "|---|---:|---|---|"]
    for entry in starters:
        rows.append(
            "| "
            + compact_entry(entry)
            + f" | {entry.get('year') or 'n.d.'} | {why_entry(entry, category)} | linked |"
        )
    return "\n".join(rows)


def link_list(paths: list[str]) -> str:
    if not paths:
        return "- _No related local files listed yet._"
    return "\n".join(f"- [{Path(p).name}]({p})" for p in paths)


def render_page(category: dict[str, Any], chosen: list[dict[str, Any]]) -> str:
    starters = starter_entries(chosen, category)
    promoted = [entry for entry in chosen if is_promoted_entry(entry)]
    needs_queue = [entry for entry in chosen if not is_promoted_entry(entry)]
    groups = group_entries(promoted, category)
    parts: list[str] = []
    parts.append(f"# {category['emoji']} {category['title']}")
    parts.append("")
    parts.append(f"> {category['summary']}")
    parts.append("")
    parts.append("## Why this category matters")
    parts.append("")
    for paragraph in category.get("why", []):
        parts.append(paragraph)
        parts.append("")
    parts.append("## How to read this category")
    parts.append("")
    for item in category.get("how_to_read", []):
        parts.append(f"- {item}")
    parts.append("")
    parts.append("## Must-read starter set")
    parts.append("")
    parts.append(starter_table(starters, category))
    parts.append("")
    parts.append("## Promoted linked entries")
    parts.append("")
    parts.append(
        "This section only includes entries with at least one official artifact link and a non-seed local description. "
        "BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata."
    )
    parts.append("")
    for name, entries in groups.items():
        parts.append(f"### {name}")
        parts.append("")
        for entry in entries:
            parts.append(entry_block(entry, category))
        parts.append("")
    parts.append("## Needs-search / metadata queue")
    parts.append("")
    parts.append(
        "These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added."
    )
    parts.append("")
    if needs_queue:
        for entry in needs_queue[:80]:
            parts.append(entry_block(entry, category))
        if len(needs_queue) > 80:
            parts.append(f"- _{len(needs_queue) - 80} additional queue entries omitted from this page; see `data/papers.yaml`._")
        parts.append("")
    else:
        parts.append("_No queue entries for this category._")
        parts.append("")
    parts.append("## Open questions")
    parts.append("")
    for question in category.get("open_questions", []):
        parts.append(f"- {question}")
    parts.append("")
    parts.append("## Related docs")
    parts.append("")
    parts.append(link_list(category.get("related_docs", [])))
    parts.append("")
    parts.append("## Related cards")
    parts.append("")
    parts.append(link_list(category.get("related_cards", [])))
    parts.append("")
    parts.append("## Back to map")
    parts.append("")
    parts.append("- [📚 Paper atlas README](README.md)")
    parts.append("- [🌟 Repository README](../README.md)")
    parts.append("")
    return "\n".join(parts).rstrip() + "\n"


def render_readme(categories: list[dict[str, Any]], counts: dict[str, int], starters: dict[str, Any]) -> str:
    rows = ["| Page | What it helps with | Entries |", "|---|---|---:|"]
    for cat in categories:
        rows.append(f"| {cat['emoji']} [{cat['title']}]({cat['file']}) | {cat['summary']} | {counts.get(cat['id'], 0)} |")
    pack_rows = ["| Starter pack | Goal |", "|---|---|"]
    for pack in starters.get("starter_packs", []):
        pack_rows.append(f"| {pack.get('emoji', '📚')} **{pack['title']}** | {pack['goal']} |")
    return f"""# 📚 Paper Atlas

> A learning-first map of post-training reasoning data papers, verifiers, reward signals, construction recipes, scaling studies, and audit work.

The pages in this folder are generated from local metadata in `data/papers.yaml`, `data/categories.yaml`, and `data/starter_packs.yaml`. They intentionally keep uncertain entries visible but mark missing official links as `needs_search` instead of inventing URLs.

## Category Map

{chr(10).join(rows)}

## Starter Packs

{chr(10).join(pack_rows)}

## Reading Strategy

Start with 🧭 surveys if the vocabulary is new, then move into 🧮 programmatic data or ⚖️ judgment-required data depending on your domain. Builders should pair 🏗️ construction recipes with 🧯 audit failures before reusing any source mixture. Agent teams should read 🌐 environmental trajectory data together with 🧰 benchmark surfaces so training and evaluation splits stay clean.

## Local Caveats

- `data/papers.yaml` contains many BibTeX-seeded records whose metadata is intentionally conservative.
- `needs_search` means an official paper, code, data, project, or Hugging Face link should be verified before promotion.
- The atlas repeats important papers across categories when they play multiple roles, such as benchmark plus training environment, or model report plus construction recipe.

## Reports

- [Paper coverage report](../reports/paper_coverage_report.md)
- [BibTeX index](../reports/bib_index.md)
- [Needs-search report](../reports/needs_search.md)
"""


def render_report(entries: list[dict[str, Any]], categories: list[dict[str, Any]], page_stats: dict[str, dict[str, Any]]) -> str:
    status = Counter(e.get("status") for e in entries)
    contracts = Counter(c for e in entries for c in e.get("verification_contract", []))
    roles = Counter(r for e in entries for r in e.get("source_role", []))
    years = Counter(e.get("year") or "unknown" for e in entries)
    missing_links = [e for e in entries if not has_link(e)]
    needs = [e for e in entries if e.get("status") in {"needs_url", "needs_metadata", "needs_search", "ambiguous"} or not has_link(e)]

    def counter_table(counter: Counter, key_name: str) -> str:
        rows = [f"| {key_name} | Count |", "|---|---:|"]
        for key, value in counter.most_common():
            rows.append(f"| {key} | {value} |")
        return "\n".join(rows)

    page_rows = ["| Category page | Entries | Starter entries | Word count | Needs-search entries |", "|---|---:|---:|---:|---:|"]
    for cat in categories:
        stat = page_stats[cat["id"]]
        page_rows.append(
            f"| {cat['emoji']} [{cat['title']}](../papers/{cat['file']}) | {stat['entries']} | {stat['starters']} | {stat['words']} | {stat['needs_search']} |"
        )

    need_lines = []
    for entry in sorted(needs, key=lambda e: (0 if not has_link(e) else 1, e.get("year") or 0, e.get("title") or ""))[:80]:
        reason = "missing official artifact link" if not has_link(entry) else f"status={entry.get('status')}"
        need_lines.append(f"- `{entry.get('id')}` — {entry.get('title')} ({entry.get('year')}); {reason}")

    return f"""# Paper Coverage Report

Generated by `scripts/render_paper_pages.py` from local metadata.

## Summary

| Metric | Count |
|---|---:|
| Total local paper entries | {len(entries)} |
| Entries with at least one artifact link | {len(entries) - len(missing_links)} |
| Entries missing official artifact links | {len(missing_links)} |
| Entries needing search or metadata review | {len(needs)} |
| Generated paper category pages | {len(categories)} |

## Generated Pages

{chr(10).join(page_rows)}

## Entries by Source Role

{counter_table(roles, 'Source role')}

## Entries by Verification Contract

{counter_table(contracts, 'Verification contract')}

## Entries by Status

{counter_table(status, 'Status')}

## Entries by Year

{counter_table(Counter(dict(sorted(years.items(), key=lambda kv: str(kv[0])))), 'Year')}

## Needs Search / Metadata Review

These items are visible in category pages but should not be promoted to verified links until an official source is pinned in `data/papers.yaml`.

{chr(10).join(need_lines) if need_lines else '- No needs-search items found.'}

## Caveats

- Category membership is generated from local titles, roles, contracts, training-use tags, and curated keyword rules in `data/categories.yaml`.
- Some BibTeX-seeded records are intentionally conservative and may belong in multiple categories after curator review.
- The renderer does not modify `data/papers.yaml`; link enrichment should happen in a separate metadata phase.
"""


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="exit non-zero if generated files are out of date")
    args = parser.parse_args()

    entries = load_yaml_json(ROOT / "data" / "papers.yaml")
    categories_data = load_yaml_json(CATEGORIES_PATH)
    starter_data = load_yaml_json(STARTER_PACKS_PATH)
    categories = sorted(categories_data.get("paper_categories", []), key=lambda c: c.get("order", 0))

    PAPERS_DIR.mkdir(parents=True, exist_ok=True)
    generated: dict[Path, str] = {}
    counts: dict[str, int] = {}
    page_stats: dict[str, dict[str, Any]] = {}

    for category in categories:
        chosen = selected_entries(entries, category)
        page = render_page(category, chosen)
        starters = starter_entries(chosen, category)
        needs_count = sum(1 for e in chosen if not has_link(e) or e.get("status") in {"needs_url", "needs_metadata", "needs_search", "ambiguous"})
        counts[category["id"]] = len(chosen)
        page_stats[category["id"]] = {
            "entries": len(chosen),
            "starters": len(starters),
            "words": words(page),
            "needs_search": needs_count,
        }
        generated[PAPERS_DIR / category["file"]] = page

    generated[PAPERS_DIR / "README.md"] = render_readme(categories, counts, starter_data)
    generated[REPORT] = render_report(entries, categories, page_stats)

    if args.check:
        stale = [path for path, content in generated.items() if not path.exists() or path.read_text(encoding="utf-8") != content]
        if stale:
            print("out of date:")
            for path in stale:
                print(path.relative_to(ROOT))
            return 1
        print("paper pages are up to date")
        return 0

    for path, content in generated.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
    print(f"rendered paper pages: {len(categories)}")
    print(f"coverage report: {REPORT.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
