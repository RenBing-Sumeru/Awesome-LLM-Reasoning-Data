#!/usr/bin/env python3
from __future__ import annotations

import argparse
import tempfile
from pathlib import Path
from urllib.parse import urlencode

from atlas_utils import (
    as_list,
    card_inventory,
    categories,
    compact_audit,
    compact_data_object,
    compact_feedback,
    compact_recipe,
    curation_level,
    entries,
    entry_search_text,
    infer_subfield,
    link_parts,
    one_line,
    primary_link,
    research_tracks,
    starter_matches,
    starter_packs,
    subfield_matches,
    why_it_matters,
)
from common import ROOT

PAPERS_DIR = ROOT / "papers"
ASK_URL = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/"

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

CROSSWALK_ROWS = [
    ("Math", "answer checker / symbolic verifier", "answer + trace / rollout", "SFT, PRM, RLVR, evaluation", "answer extraction, contamination, data reuse"),
    ("Code", "unit tests / execution", "code + tests + logs", "SFT, RLVR, evaluation", "flaky tests, hidden tests, generated-test leakage"),
    ("Formal proof", "proof checker", "theorem + proof script + imports", "SFT, RL/search, evaluation", "environment/version mismatch"),
    ("Agents", "terminal predicate / environment", "state-action-observation episode", "agent training, evaluation, RL", "non-replayable scaffold, hidden state"),
    ("Medical / safety", "rubric / expert judge", "question + rationale + rubric record", "RM, RLAIF, evaluation, audit", "judge bias, high-stakes errors"),
    ("Frontier reports", "partial reward/verifier disclosure", "data mixture + recipe clues", "distillation, RLVR, safety tuning", "undisclosed data partitions"),
    ("Audit work", "attack / contamination probe", "failure case + evaluator evidence", "evaluation, release audit", "benchmark leakage, verifier gaming"),
]

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


def display_roles(entry: dict) -> list[str]:
    categories_ = set(as_list(entry.get("category")))
    return [
        role for role in as_list(entry.get("source_role"))
        if role != "survey_background" or "surveys_and_primers" in categories_
    ]


def entry_badges(entry: dict) -> str:
    roles = " · ".join(f"{ROLE_EMOJI.get(role, '🏷️')} {role.replace('_', ' ')}" for role in display_roles(entry)[:2])
    contracts = " · ".join(contract.replace("_", " ") for contract in as_list(entry.get("verification_contract"))[:2])
    uses = " · ".join(use.replace("_", " ") for use in as_list(entry.get("training_use"))[:2])
    bits = [roles, contracts, uses, curation_level(entry)]
    return " · ".join(bit for bit in bits if bit)


def links(entry: dict, cards: dict[str, str]) -> str:
    return " · ".join(link_parts(entry, cards.get(entry.get("id"))))


def track_for_category(category_id: str) -> dict:
    for track in research_tracks():
        if track.get("category_id") == category_id:
            return track
    return {}


def subfield_slug(name: str) -> str:
    import re
    text = re.sub(r"<[^>]+>", "", name)
    text = re.sub(r"[^a-zA-Z0-9\u4e00-\u9fff]+", "-", text).strip("-").lower()
    return text or "subfield"


def subfield_links(track: dict) -> str:
    lines = []
    for subfield in track.get("subfields", []):
        name = subfield.get("name", "Subfield")
        lines.append(f"- [{name}](#{subfield_slug(name)})")
    return "\n".join(lines)


def subfield_navigator(track: dict) -> str:
    rows = ["| Subfield | What it helps you read | Key audit risk |", "|---|---|---|"]
    for subfield in track.get("subfields", []):
        rows.append(
            f"| {subfield.get('name')} | {subfield.get('focus', '')} | {subfield.get('key_risk', '')} |"
        )
    return "\n".join(rows)


def ask_track_block(category_id: str, track: dict) -> str:
    title = track.get("navigator_title") or category_id.replace("_", " ")
    href = f"{ASK_URL}?{urlencode({'track': category_id, 'mode': 'find_papers'})}"
    prompts = [
        f"What should I read first for {title}?",
        f"Compare the data objects and verifier types in {title}.",
        f"Generate an audit checklist for {title}.",
    ]
    prompt_lines = "\n".join(f"> Try: `{prompt}`" for prompt in prompts)
    return (
        f"> 🤖 **Ask about this track:** [Open Ask the Atlas]({href})\n"
        f"{prompt_lines}"
    )


def grouped_by_subfield(entries_: list[dict], category_id: str) -> list[tuple[str, list[dict]]]:
    track = track_for_category(category_id)
    ordered_names = [subfield.get("name") for subfield in track.get("subfields", [])]
    groups: dict[str, list[dict]] = {name: [] for name in ordered_names}
    groups["Other related work"] = []
    seen_by_group: dict[str, set[str]] = {name: set() for name in groups}
    for entry in entries_:
        subfield = infer_subfield(entry, category_id)
        primary_name = subfield.get("name") if subfield else "Other related work"
        groups.setdefault(primary_name, [])
        seen_by_group.setdefault(primary_name, set())
        entry_id = entry.get("id") or entry.get("title") or ""
        if entry_id not in seen_by_group[primary_name]:
            groups[primary_name].append(entry)
            seen_by_group[primary_name].add(entry_id)
        for candidate in track.get("subfields", []):
            candidate_name = candidate.get("name")
            if not candidate_name or candidate_name == primary_name:
                continue
            if subfield_matches(entry, category_id, candidate):
                groups.setdefault(candidate_name, [])
                seen_by_group.setdefault(candidate_name, set())
                if entry_id not in seen_by_group[candidate_name]:
                    groups[candidate_name].append(entry)
                    seen_by_group[candidate_name].add(entry_id)
    for grouped in groups.values():
        grouped.sort(key=paper_list_score)
    return [(name, groups[name]) for name in ordered_names + ["Other related work"] if groups.get(name)]


def compact_entry_table(entries_: list[dict], cards: dict[str, str], limit: int = 12) -> str:
    rows = [
        "| Work | Year | Links | Data object | Feedback / verifier | Why it matters |",
        "|---|---:|---|---|---|---|",
    ]
    for entry in entries_[:limit]:
        title = entry.get("title") or entry.get("id")
        title_md = f"[{title}]({primary_link(entry)})" if primary_link(entry) else title
        rows.append(
            f"| {title_md} | {entry.get('year') or ''} | {links(entry, cards)} | {compact_data_object(entry)} | {compact_feedback(entry)} | {why_it_matters(entry)} |"
        )
    return "\n".join(rows)


READ_FIRST_OVERRIDES = {
    "process_supervision_prm": [
        "prm800k-2023",
        "math-shepherd-2024",
        "rest-mcts-2024",
        "autopsv-automated-process-supervised-verifier-2024",
        "omegaprm-automated-process-supervision-2024",
        "step-dpo-step-wise-preference-optimization-for-long-chain-reasoning-of-llms-2024",
        "prime-process-reinforcement-through-implicit-rewards-2025",
        "rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025",
        "prmbench-a-fine-grained-and-challenging-benchmark-for-process-level-reward-model-2025",
        "processbench-identifying-process-errors-in-mathematical-reasoning-2025",
        "rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024",
    ],
}


def starter_link(label: str, href: str | None) -> str:
    return f"[{label}]({href})" if href else "needs_search"


def paper_item(entry: dict, cards: dict[str, str]) -> str:
    title = entry.get("title") or entry.get("id")
    title_md = f"[{title}]({primary_link(entry)})" if primary_link(entry) else title
    roles = display_roles(entry)
    return (
        f"- {ROLE_EMOJI.get(roles[0], '📄') if roles else '📄'} "
        f"**{title_md}**\n"
        f"  <sub>{entry.get('year') or 'n.d.'} · {entry.get('venue') or 'unknown venue'} · {entry_badges(entry)}</sub>\n"
        f"  {links(entry, cards)}\n"
        f"  _Data object:_ {compact_data_object(entry)}\n"
        f"  _Feedback / verifier:_ {compact_feedback(entry)}\n"
        f"  _Recipe signal:_ {compact_recipe(entry)}\n"
        f"  _Audit focus:_ {compact_audit(entry)}\n"
        f"  _Why it matters:_ {why_it_matters(entry)}"
    )


def is_metadata_rich(entry: dict) -> bool:
    if not primary_link(entry):
        return False
    if compact_data_object(entry) == "metadata pending":
        return False
    if compact_feedback(entry) == "metadata pending":
        return False
    if why_it_matters(entry).startswith("Verified citation waypoint"):
        return False
    return True


def is_prm_core_entry(entry: dict) -> bool:
    """Keep PRM core focused on process-level feedback rather than all verifier work."""
    if not is_metadata_rich(entry):
        return False
    hay = entry_search_text(entry)
    core_signals = [
        "process",
        "step-level",
        "step wise",
        "step-wise",
        "first-error",
        "first error",
        "rollout",
        "intermediate",
        "prm800k",
        "prmbench",
        "processbench",
        "math-shepherd",
        "omegaprm",
        "autopsv",
    ]
    return any(signal in hay for signal in core_signals)


def emerging_item(entry: dict, cards: dict[str, str]) -> str:
    title = entry.get("title") or entry.get("id")
    title_md = f"[{title}]({primary_link(entry)})" if primary_link(entry) else title
    return (
        f"- **{title_md}** "
        f"<sub>{entry.get('year') or 'n.d.'} · {entry.get('venue') or 'unknown venue'} · {curation_level(entry, cards.get(entry.get('id')))}</sub>\n"
        f"  {links(entry, cards)}\n"
        "  _Curation note:_ link verified; add paper-specific data object, verifier/reward contract, recipe signal, and audit notes before promoting it into the core PRM list."
    )


def paper_list_score(entry: dict) -> tuple:
    level_rank = {
        "L5_audit_ready": 0,
        "L4_carded": 1,
        "L3_summary_ready": 2,
        "L2_artifact_verified": 3,
        "L1_link_verified": 4,
        "L0_seeded": 5,
    }
    roles = set(as_list(entry.get("source_role")))
    category_bonus = 0 if roles - {"survey_background"} else 1
    return (
        level_rank.get(curation_level(entry), 6),
        category_bonus,
        0 if primary_link(entry) else 1,
        -(entry.get("year") or 0),
        entry.get("title") or "",
    )


def read_first_score(entry: dict, cards: dict[str, str], category_id: str | None = None) -> tuple:
    roles = set(as_list(entry.get("source_role")))
    uses = set(as_list(entry.get("training_use")))
    level_rank = {
        "L5_audit_ready": 0,
        "L4_carded": 1,
        "L3_summary_ready": 2,
        "L2_artifact_verified": 3,
        "L1_link_verified": 4,
        "L0_seeded": 5,
    }
    if category_id == "process_supervision_prm":
        category_bonus = 0 if roles & {"process_supervision", "verifier_reward"} else 2
        use_bonus = 0 if uses & {"process_supervision", "reward_modeling", "rlvr"} else 1
    else:
        category_bonus = 0 if "data_release" in roles else 1
        use_bonus = 0
    return (
        category_bonus,
        use_bonus,
        level_rank.get(curation_level(entry, cards.get(entry.get("id"))), 6),
        0 if cards.get(entry.get("id")) else 1,
        -(entry.get("year") or 0),
        entry.get("title") or "",
    )


def read_first(entries_: list[dict], cards: dict[str, str], category_id: str | None = None) -> str:
    picks = [entry for entry in entries_ if primary_link(entry) and entry.get("status") == "verified"]
    overrides = READ_FIRST_OVERRIDES.get(category_id or "", [])
    if overrides:
        by_id = {entry.get("id"): entry for entry in picks}
        selected = [by_id[item] for item in overrides if item in by_id]
        selected_ids = {entry.get("id") for entry in selected}
        tail = [entry for entry in picks if entry.get("id") not in selected_ids]
        tail.sort(key=lambda entry: read_first_score(entry, cards, category_id))
        picks = selected + tail
    else:
        picks.sort(key=lambda entry: read_first_score(entry, cards, category_id))
    return compact_entry_table(picks, cards, limit=10)


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


def paper_track_table() -> str:
    rows = ["| Track | Subfields | Best for | Entries | Jump |", "|---|---|---|---:|---|"]
    for cat in categories():
        track = track_for_category(cat["id"])
        subfields = "<br>".join(
            f"[{item.get('name')}]({cat.get('file')}#{subfield_slug(item.get('name', 'Subfield'))})"
            for item in (track.get("subfields") or [])
        )
        rows.append(
            f"| {track.get('navigator_title', cat.get('title'))} | {subfields} | {track.get('best_for', cat.get('summary', ''))} | {len(category_entries(cat['id']))} | [{cat.get('file')}]({cat.get('file')}) |"
        )
    return "\n".join(rows)


def crosswalk_matrix() -> str:
    rows = ["| Domain | Common feedback | Common data object | Common training use | Main risks |", "|---|---|---|---|---|"]
    for row in CROSSWALK_ROWS:
        rows.append("| " + " | ".join(row) + " |")
    return "\n".join(rows)


def awesome_contents() -> str:
    lines = ["- 📚 Main Research Tracks"]
    for cat in categories():
        track = track_for_category(cat["id"])
        title = track.get("navigator_title", cat.get("title"))
        lines.append(f"  - [{title}]({cat.get('file')})")
        for subfield in (track.get("subfields") or []):
            name = subfield.get("name", "Subfield")
            lines.append(f"    - [{name}]({cat.get('file')}#{subfield_slug(name)})")
    lines += [
        "- 🧩 Browse by Data Object",
        "  - prompt-answer, trace-answer, step label, rollout value, preference pair, reward record, agent trajectory, rubric record",
        "- 🛠️ Browse by Training Use",
        "  - SFT, distillation, reward modeling, process supervision, RLVR, agent training, evaluation, audit",
        "- 🧪 Browse by Feedback Contract",
        "  - programmatic, environmental, judgment-required, mixed, unknown",
    ]
    return "\n".join(lines)


def render_category(cat: dict, cards: dict[str, str]) -> str:
    cid = cat["id"]
    track = track_for_category(cid)
    entries_ = category_entries(cid)
    verified = [entry for entry in entries_ if entry.get("status") == "verified" and primary_link(entry)]
    needs = [entry for entry in entries_ if entry not in verified]
    lines = [
        f"# {cat.get('emoji', '📚')} {cat.get('title')}",
        "",
        f"> {cat.get('summary', '')}",
        "",
        ask_track_block(cid, track),
        "",
        "## 1. What This Track Studies",
        "",
        cat.get("reader_promise") or cat.get("summary") or "This category groups related post-training reasoning-data work.",
        "",
    ]
    for paragraph in (cat.get("why") or []):
        lines += [paragraph, ""]

    lines += [
        "## 2. Why It Matters for Post-Training Reasoning Data",
        "",
        "Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.",
        "",
        "## 3. Subfield Navigator",
        "",
        subfield_navigator(track) if track else "No structured subfield navigator is available yet.",
        "",
        "### Contents",
        "",
        subfield_links(track) if track else "- [Other related work](#other-related-work)",
        "",
        "## 4. Read First",
        "",
        read_first(entries_, cards, cid),
        "",
    ]

    if cid == "process_supervision_prm":
        metadata_rich_verified = [entry for entry in verified if is_metadata_rich(entry)]
        core_verified = [entry for entry in metadata_rich_verified if is_prm_core_entry(entry)]
        adjacent_verified = [entry for entry in metadata_rich_verified if entry not in core_verified]
        emerging_verified = [entry for entry in verified if entry not in metadata_rich_verified]
        lines += [
            "## 5. Core PRM Paper List",
            "",
            "These entries are promoted into the core list because they already expose a paper-specific data object, feedback/verifier contract, recipe signal, and audit focus. Link-only waypoints are kept in a separate section so they do not dilute the learning path.",
            "",
        ]
        group_map = dict(grouped_by_subfield(core_verified, cid))
        if track:
            for subfield in track.get("subfields") or []:
                group = subfield.get("name", "Subfield")
                grouped = group_map.get(group, [])
                lines += [f"### <a id=\"{subfield_slug(group)}\"></a>{group}", ""]
                if grouped:
                    lines += [paper_item(entry, cards) for entry in grouped[:80]]
                else:
                    lines += ["_No metadata-rich primary-source entries are assigned here yet. Keep link-only papers in Emerging Verified Work until their data object and verifier fields are curated._"]
                lines.append("")
        section_number = 6
        if adjacent_verified:
            lines += [
                f"## {section_number}. Adjacent Verified Work",
                "",
                "These entries are useful context for PRM readers, but they are not promoted as core PRM papers because they do not yet map cleanly onto a process-supervision subfield. Keep them visible without giving them equal weight in the main learning path.",
                "",
            ]
            lines += [paper_item(entry, cards) for entry in adjacent_verified[:80]]
            lines.append("")
            section_number += 1
        if emerging_verified:
            lines += [
                f"## {section_number}. Emerging Verified Work",
                "",
                "These papers have official primary links but still need paper-specific metadata before they become core teaching entries. Treat them as a watchlist, not as equal-weight canonical reads.",
                "",
            ]
            for group, grouped in grouped_by_subfield(emerging_verified, cid):
                lines += [f"### {group}", ""]
                lines += [emerging_item(entry, cards) for entry in grouped[:80]]
                lines.append("")
            section_number += 1
        if needs:
            lines += [
                f"## {section_number}. Needs Search or Metadata",
                "",
                "These entries are intentionally separated from verified work. Add official links and enough metadata to identify the data object and verifier before promoting them.",
                "",
            ]
            lines += [paper_item(entry, cards) for entry in needs[:60]]
            lines.append("")
            section_number += 1
        next_section = section_number
    else:
        lines += ["## 5. Full Paper List", ""]
        group_map = dict(grouped_by_subfield(verified, cid))
        if track:
            for subfield in track.get("subfields") or []:
                group = subfield.get("name", "Subfield")
                grouped = group_map.get(group, [])
                lines += [f"### <a id=\"{subfield_slug(group)}\"></a>{group}", ""]
                if grouped:
                    lines += [paper_item(entry, cards) for entry in grouped[:80]]
                else:
                    lines += ["_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._"]
                lines.append("")
            other = group_map.get("Other related work", [])
            if other:
                lines += [f"### <a id=\"{subfield_slug('Other related work')}\"></a>Other related work", ""]
                lines += [paper_item(entry, cards) for entry in other[:80]]
                lines.append("")
        else:
            for group, grouped in grouped_by_subfield(verified, cid):
                lines += [f"### <a id=\"{subfield_slug(group)}\"></a>{group}", ""]
                lines += [paper_item(entry, cards) for entry in grouped[:80]]
                lines.append("")
        if needs:
            lines += ["### ⚠️ Needs search or metadata", ""]
            lines += [paper_item(entry, cards) for entry in needs[:60]]
            lines.append("")
        next_section = 6

    lines += [f"## {next_section}. What to Audit", ""]
    lines += [f"- {item}" for item in AUDIT_CHECKLISTS.get(cid, ["Check official links, data object, verifier contract, training use, and missing metadata."])]
    lines += ["", f"## {next_section + 1}. Open Problems", ""]
    gaps = cat.get("open_questions") or ["More official links, cards, and audit notes are needed for this category."]
    lines += [f"- {gap}" for gap in gaps[:6]]
    lines += ["", f"## {next_section + 2}. Related Cards", ""]
    card_lines = related_cards(entries_, cards)
    lines += card_lines if card_lines else ["- No cards are linked for this category yet."]
    lines += ["", "## Back to Map", "", "- [Paper atlas README](README.md)", "- [Repository README](../README.md)"]
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
        "> A review-style Awesome map for post-training reasoning data papers, verifiers, data releases, construction recipes, frontier reports, and audit work.",
        "",
        "Use this folder when you want the repo to behave like a living survey. Each category page explains what the track studies, why it matters for post-training reasoning data, which subfields exist, what papers to read first, what each paper's data object/verifier/recipe looks like, and how to audit the claims.",
        "",
        "## Awesome-Style Contents",
        "",
        awesome_contents(),
        "",
        "## Research Track Navigator",
        "",
        paper_track_table(),
        "",
        "## Crosswalk Matrix",
        "",
        "The same paper can sit on multiple axes. Use this matrix to translate a domain into the data object, feedback signal, training use, and audit risk that matter for post-training reasoning.",
        "",
        crosswalk_matrix(),
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
        "- [Quality audit](../reports/five_task_quality_audit.md)",
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
