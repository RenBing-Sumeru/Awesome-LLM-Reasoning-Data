#!/usr/bin/env python3
from __future__ import annotations

import argparse
import tempfile
from pathlib import Path

from atlas_utils import (
    as_list,
    card_inventory,
    categories,
    curation_level,
    entries,
    link_parts,
    one_line,
    primary_link,
    starter_matches,
    starter_packs,
    why_it_matters,
)
from common import ROOT

PAPERS_DIR = ROOT / "papers"

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
}

AUDIT_CHECKLISTS = {
    "surveys_and_primers": [
        "Does the taxonomy separate data objects, verifier contracts, and training uses?",
        "Does the survey cite primary sources rather than only secondary summaries?",
        "Are missing metadata fields called out instead of smoothed over?",
    ],
    "foundations_instruction_preference_alignment": [
        "What exactly is supervised: demonstration, preference pair, critique, scalar reward, or rationale?",
        "Are annotator, judge, or reward-model assumptions disclosed?",
        "Can later reasoning-data claims be separated from general helpfulness or safety tuning?",
    ],
    "programmatic_math_code_proof": [
        "Is the answer normalizer, unit-test harness, proof checker, or execution environment reproducible?",
        "Are false positives, false negatives, and formatting shortcuts discussed?",
        "Are train/test split and contamination checks visible?",
    ],
    "process_supervision_prm": [
        "Where does feedback attach: step, transition, rollout, or final answer?",
        "How were first-error labels, rollout values, or process rewards produced?",
        "Does process reward improve final correctness or only intermediate-looking scores?",
    ],
    "environmental_agents_tools_web_swe": [
        "Can the state, observation stream, action schema, and terminal predicate be replayed?",
        "Are tool wrappers, browser state, repository commits, and time/token budgets pinned?",
        "Are failed and near-miss trajectories preserved?",
    ],
    "judgment_required_rubrics_safety_domain": [
        "Who wrote the rubric and who adjudicates disagreements?",
        "Is the judge prompt/model/version/domain expertise disclosed?",
        "Does the benchmark test judge brittleness, style sensitivity, and unsafe shortcuts?",
    ],
    "construction_recipes_open_reasoning_data": [
        "Are prompt sources, teacher models, sampling rules, and filters disclosed?",
        "Can another team reproduce the accepted and rejected examples?",
        "Is the release license and lineage clear enough for reuse?",
    ],
    "frontier_model_reports": [
        "Which data partitions and reward contracts are actually disclosed?",
        "Can model gains be attributed to data, optimizer, scaffold, or inference budget?",
        "Are distillation, RLVR, safety, and chat data separated?",
    ],
    "scaling_test_time_compute_rlvr": [
        "Does the claim improve asymptote, sample efficiency, or inference budget allocation?",
        "Are pass@k, rollout budget, verifier refresh, and reuse count reported?",
        "Can data scale be separated from test-time compute scale?",
    ],
    "audit_failure_contamination_verifier_attacks": [
        "What can leak, contaminate, or be optimized as a shortcut?",
        "Is the attack tested against the actual judge/verifier setup?",
        "Does the paper preserve enough evidence to reproduce the failure?",
    ],
    "benchmarks_evaluation": [
        "What does the benchmark measure and what feedback can it support?",
        "Is scoring objective, human-judged, LLM-judged, or mixed?",
        "How does the benchmark handle refresh, contamination, and hidden tests?",
    ],
}


def entry_badges(entry: dict) -> str:
    roles = " · ".join(f"{ROLE_EMOJI.get(role, '🏷️')} {role.replace('_', ' ')}" for role in as_list(entry.get("source_role"))[:2])
    contracts = " · ".join(contract.replace("_", " ") for contract in as_list(entry.get("verification_contract"))[:2])
    uses = " · ".join(use.replace("_", " ") for use in as_list(entry.get("training_use"))[:2])
    bits = [roles, contracts, uses, curation_level(entry)]
    return " · ".join(bit for bit in bits if bit)


def links(entry: dict, cards: dict[str, str]) -> str:
    return " · ".join(link_parts(entry, cards.get(entry.get("id"))))


def starter_link(label: str, href: str | None) -> str:
    return f"[{label}]({href})" if href else "needs_search"


def paper_item(entry: dict, cards: dict[str, str]) -> str:
    title = entry.get("title") or entry.get("id")
    title_md = f"[{title}]({primary_link(entry)})" if primary_link(entry) else title
    return (
        f"- {ROLE_EMOJI.get(as_list(entry.get('source_role'))[0], '📄') if as_list(entry.get('source_role')) else '📄'} "
        f"**{title_md}**\n"
        f"  <sub>{entry.get('year') or 'n.d.'} · {entry.get('venue') or 'unknown venue'} · {entry_badges(entry)}</sub>\n"
        f"  {links(entry, cards)}\n"
        f"  _Why it matters:_ {why_it_matters(entry)}"
    )


def read_first(entries_: list[dict], cards: dict[str, str]) -> str:
    picks = [entry for entry in entries_ if primary_link(entry) and entry.get("status") == "verified"]
    picks.sort(key=lambda entry: (
        0 if cards.get(entry.get("id")) else 1,
        0 if "data_release" in as_list(entry.get("source_role")) else 1,
        -(entry.get("year") or 0),
        entry.get("title") or "",
    ))
    rows = ["| Work | Year | Venue | Links | Why it matters |", "|---|---:|---|---|---|"]
    for entry in picks[:10]:
        title = entry.get("title") or entry.get("id")
        rows.append(
            f"| {title} | {entry.get('year') or ''} | {entry.get('venue') or 'unknown'} | {links(entry, cards)} | {why_it_matters(entry)} |"
        )
    return "\n".join(rows)


def group_entries(entries_: list[dict]) -> dict[str, list[dict]]:
    groups: dict[str, list[dict]] = {}
    for entry in entries_:
        role = as_list(entry.get("source_role"))[0] if as_list(entry.get("source_role")) else "other"
        label = f"{ROLE_EMOJI.get(role, '📄')} {role.replace('_', ' ').title()}"
        groups.setdefault(label, []).append(entry)
    return groups


def category_entries(category_id: str) -> list[dict]:
    out = [entry for entry in entries() if category_id in as_list(entry.get("category"))]
    out.sort(key=lambda entry: (
        0 if entry.get("status") == "verified" else 1,
        0 if primary_link(entry) else 1,
        -(entry.get("year") or 0),
        entry.get("title") or "",
    ))
    return out


def related_cards(entries_: list[dict], cards: dict[str, str]) -> list[str]:
    out = []
    for entry in entries_:
        path = cards.get(entry.get("id"))
        if path:
            out.append(f"- [{entry.get('title')}]({ROOT.joinpath(path).relative_to(ROOT.parent).as_posix() if False else '../' + path})")
    return out[:18]


def render_category(cat: dict, cards: dict[str, str]) -> str:
    cid = cat["id"]
    entries_ = category_entries(cid)
    verified = [entry for entry in entries_ if entry.get("status") == "verified" and primary_link(entry)]
    needs = [entry for entry in entries_ if entry not in verified]
    lines = [
        f"# {cat.get('emoji', '📚')} {cat.get('title')}",
        "",
        f"> {cat.get('summary', '')}",
        "",
        "## What this category means",
        "",
        cat.get("reader_promise") or cat.get("summary") or "This category groups related post-training reasoning-data work.",
        "",
    ]
    for paragraph in (cat.get("why") or [])[:3]:
        lines += [paragraph, ""]

    lines += ["## Read first", "", read_first(entries_, cards), "", "## Full paper list", ""]
    for group, grouped in group_entries(verified).items():
        lines += [f"### {group}", ""]
        lines += [paper_item(entry, cards) for entry in grouped[:80]]
        lines.append("")
    if needs:
        lines += ["### ⚠️ Needs search or metadata", ""]
        lines += [paper_item(entry, cards) for entry in needs[:60]]
        lines.append("")

    lines += ["## What to audit", ""]
    lines += [f"- {item}" for item in AUDIT_CHECKLISTS.get(cid, ["Check official links, data object, verifier contract, training use, and missing metadata."])]
    lines += ["", "## Related cards", ""]
    card_lines = related_cards(entries_, cards)
    lines += card_lines if card_lines else ["- No cards are linked for this category yet."]
    lines += ["", "## Open gaps", ""]
    gaps = cat.get("open_questions") or ["More official links, cards, and audit notes are needed for this category."]
    lines += [f"- {gap}" for gap in gaps[:6]]
    lines += ["", "## Back to map", "", "- [Paper atlas README](README.md)", "- [Repository README](../README.md)"]
    return "\n".join(lines) + "\n"


def render_readme(cards: dict[str, str]) -> str:
    data = entries()
    cat_rows = ["| Category | What it helps with | Entries |", "|---|---|---:|"]
    for cat in categories():
        count = len(category_entries(cat["id"]))
        cat_rows.append(f"| {cat.get('emoji', '')} [{cat.get('title')}]({cat.get('file')}) | {cat.get('summary', '')} | {count} |")

    matches = starter_matches(data)
    starter_rows = ["| # | Work | Link | Card |", "|---:|---|---|---|"]
    first_pack = next((pack for pack in starter_packs() if pack.get("id") == "beginner_20"), starter_packs()[0])
    for index, title in enumerate(first_pack.get("entries", []), 1):
        entry = matches.get(title)
        if entry:
            card_path = cards.get(entry.get("id"))
            starter_rows.append(
                f"| {index} | {entry.get('title')} | {starter_link('Paper', primary_link(entry))} | {starter_link('Card', '../' + card_path if card_path else None)} |"
            )
        else:
            starter_rows.append(f"| {index} | {title} | needs_search | needs_card |")

    return "\n".join([
        "# 📚 Paper Atlas",
        "",
        "> A small-field navigation map for post-training reasoning data papers, verifiers, data releases, construction recipes, frontier reports, and audit work.",
        "",
        "Use this folder when the README is too compact. Each category page gives a beginner-friendly explanation, read-first papers, full paper list, audit checklist, related cards, and open gaps.",
        "",
        "## Category Map",
        "",
        "\n".join(cat_rows),
        "",
        "## Starter Pack: 20 Must-Read Papers",
        "",
        "\n".join(starter_rows),
        "",
        "## Legend",
        "",
        "- 📄 paper link, 🏛️ venue link, 🐙 code, 🤗 data/model, 🌐 project, 🃏 card.",
        "- ✅ verified entries have an official primary paper/arXiv/venue/DOI link.",
        "- ⚠️ needs_search entries remain visible but are not promoted as verified.",
        "- Curation levels run from `L0_seeded` to `L5_audit_ready`.",
        "",
        "## Searchable Site",
        "",
        "- [Open the searchable atlas](../docs/index.html)",
        "- [Link coverage report](../reports/link_coverage.md)",
        "",
        "## Reports",
        "",
        "- [Needs-search report](../reports/needs_search.md)",
        "- [Self-review](../reports/self_review.md)",
    ]) + "\n"


def render(target_root: Path = ROOT) -> None:
    cards = card_inventory()
    out_dir = target_root / "papers"
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "README.md").write_text(render_readme(cards), encoding="utf-8")
    for cat in categories():
        (out_dir / cat["file"]).write_text(render_category(cat, cards), encoding="utf-8")


def check() -> int:
    with tempfile.TemporaryDirectory() as tmp:
        temp = Path(tmp)
        render(temp)
        problems = []
        for expected in sorted((temp / "papers").glob("*.md")):
            actual = ROOT / "papers" / expected.name
            if not actual.exists():
                problems.append(f"missing papers/{expected.name}")
            elif actual.read_text(encoding="utf-8") != expected.read_text(encoding="utf-8"):
                problems.append(f"out of date: papers/{expected.name}")
        if problems:
            for problem in problems:
                print("ERROR:", problem)
            return 1
    print("paper atlas pages are up to date")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if args.check:
        return check()
    render(ROOT)
    print("rendered paper atlas")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
