#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import tempfile
from pathlib import Path

from atlas_utils import (
    CURATION_LEVELS,
    ARTIFACT_KEYS,
    as_list,
    artifacts,
    categories,
    compact_data_object,
    compact_feedback,
    contains_term,
    curation_level,
    entries,
    entry_search_text,
    link_parts,
    norm,
    one_line,
    paper_card_inventory,
    primary_link,
    primary_link_kind,
    research_tracks,
    starter_matches,
    starter_packs,
    subfield_matches,
    why_it_matters,
)
from common import ROOT

_ENTRIES_CACHE: list[dict] | None = None
_CARDS_CACHE: dict[str, str] | None = None
_TRACKS_CACHE: list[dict] | None = None
PAGES_URL = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/"

CATEGORY_GROUPS = [
    {
        "id": "background_foundations",
        "emoji": "🧭",
        "title": "Background / Foundations",
        "zh_title": "Background / Foundations（入门与基础）",
        "promise": "Build the shared vocabulary before opening dense primary papers.",
        "zh_promise": "先建立共同词汇和领域地图，再进入细分论文。",
    },
    {
        "id": "core_reasoning_data_types",
        "emoji": "🧬",
        "title": "Core Reasoning Data Types",
        "zh_title": "Core Reasoning Data Types（核心数据类型）",
        "promise": "Compare the actual records: demonstrations, preferences, verifiable outcomes, process labels, rollout traces, agent episodes, and rubrics.",
        "zh_promise": "按真实数据对象理解论文：demonstration、preference、verifiable outcome、process label、rollout trace、agent episode、rubric。",
    },
    {
        "id": "data_lifecycle",
        "emoji": "🛠️",
        "title": "Data Lifecycle",
        "zh_title": "Data Lifecycle（构造、训练、评测与审计）",
        "promise": "Follow the lifecycle from construction recipes to training use, scaling, benchmarks, frontier disclosures, and failure audits.",
        "zh_promise": "沿着构造、训练、scaling、benchmark、frontier report 和 failure audit 的生命周期阅读。",
    },
]


def all_entries() -> list[dict]:
    global _ENTRIES_CACHE
    if _ENTRIES_CACHE is None:
        _ENTRIES_CACHE = entries()
    return _ENTRIES_CACHE


def all_cards() -> dict[str, str]:
    global _CARDS_CACHE
    if _CARDS_CACHE is None:
        _CARDS_CACHE = paper_card_inventory()
    return _CARDS_CACHE


def all_tracks() -> list[dict]:
    global _TRACKS_CACHE
    if _TRACKS_CACHE is None:
        _TRACKS_CACHE = research_tracks()
    return _TRACKS_CACHE


def stats() -> dict:
    data = all_entries()
    cards = all_cards()
    levels = [curation_level(entry, cards.get(entry.get("id"))) for entry in data]
    artifact_counts = {
        key: sum(1 for entry in data if artifacts(entry).get(key))
        for key in ARTIFACT_KEYS
    }
    return {
        "total": len(data),
        "verified": sum(1 for entry in data if entry.get("status") == "verified"),
        "primary": sum(1 for entry in data if primary_link(entry)),
        "cards": len(cards),
        "card_files": len(cards),
        "needs_search": sum(1 for entry in data if not primary_link(entry)),
        "data_releases": sum(1 for entry in data if "data_release" in (entry.get("source_role") or [])),
        "verifiers": sum(1 for entry in data if "verifier_reward" in (entry.get("source_role") or [])),
        "agents": sum(1 for entry in data if "agent_environment" in (entry.get("source_role") or [])),
        "l5": sum(1 for level in levels if level == "L5_audit_ready"),
        "code": artifact_counts["code"],
        "data": artifact_counts["data"],
        "hf": artifact_counts["huggingface"],
        "project": artifact_counts["project"],
    }


TRACK_BEST_FOR_ZH = {
    "foundations_and_primers": "先建立领域地图，再进入一手论文",
    "instruction_demonstration_rationale_data": "理解 instruction、demonstration、rationale 和 teacher trace 如何成为训练数据",
    "preference_reward_feedback_data": "比较 preference、reward、DPO、RLAIF、rubric reward 和 judge feedback",
    "programmatically_verifiable_outcome_data": "学习 math/code/proof 中可程序验证的 outcome 数据",
    "process_trace_supervision_data": "定位 step-level label、PRM、rollout value 和 first-error 监督",
    "rollout_search_test_time_trace_data": "阅读 rollout、search、best-of-N、pass@k 和 test-time trace 数据",
    "environment_agent_trajectory_data": "研究工具、网页、OS、App 和代码仓库级 agent 轨迹数据",
    "judgment_rubric_domain_expert_data": "理解 rubric、LLM judge、高风险领域和专家评估数据",
    "data_construction_open_release_recipes": "学习推理数据如何构造、过滤、发布和复现",
    "training_usage_optimization_objectives": "判断数据如何进入 SFT、DPO、RM、PRM、RLVR、agent training、evaluation 或 audit",
    "frontier_reports_data_disclosure_ledger": "把前沿模型报告当作部分公开的数据配方来阅读",
    "scaling_rlvr_test_time_compute": "拆解 RLVR、数据规模和 test-time compute 的贡献",
    "audit_failure_contamination_verifier_attacks": "审计污染、泄漏、verifier gaming、reward hacking 和 judge attack",
    "benchmarks_evaluation_surfaces": "选择评测面、benchmark 和可复用反馈契约",
}


def by_id() -> dict[str, dict]:
    return {entry.get("id"): entry for entry in all_entries()}


def entry_md(entry_id: str, label: str | None = None) -> str:
    entry = by_id().get(entry_id)
    if not entry:
        return label or entry_id
    text = label or entry.get("title") or entry_id
    href = primary_link(entry)
    return f"[{text}]({href})" if href else text


def card_md(entry_id: str, label: str = "Paper Card Source") -> str:
    path = all_cards().get(entry_id)
    return f"[{label}]({path})" if path else "needs_paper_card_source"


STARTER_LENS = {
    "Datasheets for datasets": ("📋 release docs", "What must be disclosed before anyone reuses a dataset?"),
    "Data statements for natural language processing": ("🧬 provenance", "Which population, language, and annotation assumptions travel with the data?"),
    "Training language models to follow instructions with human feedback": ("🧑‍🏫 RLHF pipeline", "How do demonstrations, preferences, rewards, and policy optimization separate?"),
    "Chain-of-thought prompting elicits reasoning in large language models": ("🧠 traces", "When does a rationale become a reusable training object?"),
    "Training verifiers to solve math word problems": ("🧪 verifier", "What exactly scores a generated solution?"),
    "STaR": ("🔁 self-improvement", "Which generated traces survive answer-based filtering?"),
    "Self-Instruct": ("🏗️ synthetic data", "How do generated instructions get filtered before training?"),
    "Direct preference optimization": ("⚖️ preference data", "What changes when preference pairs directly train the policy?"),
    "Let's Verify Step by Step": ("🪜 process supervision", "What does step-level feedback buy over outcome-only labels?"),
    "GSM8K": ("🧮 answer checks", "Why is a small verifiable math set still a useful sanity check?"),
    "MATH dataset": ("🧮 hard math", "How do harder problems change trace and verifier requirements?"),
    "HumanEval": ("💻 unit tests", "What makes executable tests a feedback contract?"),
    "SWE-bench": ("🌐 agent environment", "What fields make repository repair a replayable episode?"),
    "RewardBench": ("🏅 reward eval", "When does a reward model fail outside generic chat helpfulness?"),
    "HealthBench": ("⚕️ rubrics", "How do high-stakes rubrics become auditable?"),
    "LiveBench": ("🧯 contamination", "How can benchmarks stay fresh against memorization?"),
    "OpenThoughts": ("🏗️ open recipe", "Which prompt, trace, filtering, and ablation fields are disclosed?"),
    "DeepSeek-R1": ("🚀 RLVR report", "What can and cannot be inferred from a public frontier report?"),
    "s1": ("⏱️ test-time compute", "When is inference budget part of the data story?"),
    "A Sober Look at Progress in Language Model Reasoning": ("🔍 reproducibility", "Which reported gains survive decoding and evaluation audits?"),
}


def starter_table() -> str:
    data = all_entries()
    cards = all_cards()
    matches = starter_matches(data)
    beginner = next((pack for pack in starter_packs() if pack.get("id") == "beginner_20"), starter_packs()[0])
    rows = ["| # | Paper / report | Lens | Start with this question | Paper Card Source |", "|---:|---|---|---|---|"]
    for index, title in enumerate(beginner.get("entries", []), 1):
        entry = matches.get(title)
        lens, question = STARTER_LENS.get(title, ("📚 waypoint", "What data object, verifier, and audit risk does this work expose?"))
        if not entry:
            rows.append(f"| {index} | {title} | {lens} | {question} | needs_paper_card_source |")
            continue
        link = f"[{entry.get('title')}]({primary_link(entry)})" if primary_link(entry) else entry.get("title")
        card = f"[Paper Card Source]({cards[entry.get('id')]})" if cards.get(entry.get("id")) else "needs_paper_card_source"
        rows.append(f"| {index} | {link} | {lens} | {question} | {card} |")
    return "\n".join(rows)


def level_table() -> str:
    labels = {
        "L0_seeded": "Only a title or bibliography seed is known.",
        "L1_link_verified": "Official paper, arXiv, venue, or DOI link is pinned.",
        "L2_artifact_verified": "Code, data, project, or model artifact links are also checked.",
        "L3_summary_ready": "One-line summary and why-it-matters rationale are present.",
        "L4_carded": "A local card explains data object, verifier, use, and audit fields.",
        "L5_audit_ready": "The card includes concrete risks, missing fields, and audit questions.",
    }
    rows = ["| Level | Meaning |", "|---|---|"]
    for level in CURATION_LEVELS:
        rows.append(f"| `{level}` | {labels[level]} |")
    return "\n".join(rows)


def latest_updates() -> str:
    s = stats()
    return "\n".join([
        "| Date | Update | Why it matters |",
        "|---|---|---|",
        f"| 2026-06-15 | Promoted the atlas to **{s['verified']} verified entries**, **{s['cards']} bilingual paper-card sources**, and **{s['l5']} high-curation entries**. | The front page can now be attractive without hiding uncertainty or inventing unverified links. |",
        f"| 2026-06-15 | Completed two artifact-verification rounds: **{s['code']} code**, **{s['data']} data**, **{s['hf']} Hugging Face**, and **{s['project']} project** links are pinned. | Readers can jump from a paper to reusable artifacts when official sources exist. |",
        "| 2026-06-15 | Rebuilt the searchable site, paper atlas, exports, QA reports, contribution workflow, and release notes from structured metadata. | Counts and public reports are reproducible instead of hand-maintained. |",
    ])


def category_count(category_id: str) -> int:
    return sum(1 for entry in all_entries() if category_id in (entry.get("category") or []))


def category_file(category_id: str) -> str:
    for category in categories():
        if category.get("id") == category_id:
            return category.get("file") or "README.md"
    return "README.md"


def category_meta(category_id: str) -> dict:
    for category in categories():
        if category.get("id") == category_id:
            return category
    return {}


def paper_link(category_id: str) -> str:
    return f"papers/{category_file(category_id)}"


def tracks_for_group(group_id: str) -> list[dict]:
    tracks_by_id = {track.get("category_id"): track for track in all_tracks()}
    out = []
    for category in categories():
        if category.get("group") == group_id and tracks_by_id.get(category.get("id")):
            out.append(tracks_by_id[category["id"]])
    return out


def subfield_slug(name: str) -> str:
    text = re.sub(r"<[^>]+>", "", name)
    text = re.sub(r"[^a-zA-Z0-9\u4e00-\u9fff]+", "-", text).strip("-").lower()
    return text or "subfield"


def cell(text: str) -> str:
    return str(text or "").replace("\n", " ").replace("|", "\\|")


def short(text: str, limit: int = 115) -> str:
    text = " ".join(str(text or "").split())
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


def category_entries(category_id: str) -> list[dict]:
    data = [
        entry for entry in all_entries()
        if category_id in as_list(entry.get("category")) and primary_link(entry) and entry.get("status") == "verified"
    ]
    cards = all_cards()
    data.sort(key=lambda entry: (
        0 if cards.get(entry.get("id")) else 1,
        0 if curation_level(entry, cards.get(entry.get("id"))) == "L5_audit_ready" else 1,
        -sum(1 for key in ["code", "data", "huggingface", "project"] if artifacts(entry).get(key)),
        -(entry.get("year") or 0),
        entry.get("title") or "",
    ))
    return data


def homepage_rich_entry(entry: dict) -> bool:
    if not primary_link(entry):
        return False
    if compact_data_object(entry) == "metadata pending":
        return False
    if compact_feedback(entry) == "metadata pending":
        return False
    if why_it_matters(entry).startswith("Verified citation waypoint"):
        return False
    return True


def homepage_prm_core_entry(entry: dict) -> bool:
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


def subfield_label_text(entry: dict) -> str:
    title_hay = norm(entry.get("title"))
    return " ".join([
        norm(entry.get("id")),
        title_hay,
        norm(entry.get("venue")),
        " ".join(norm(item) for item in as_list(entry.get("verification_contract"))),
        " ".join(norm(item) for item in as_list(entry.get("training_use"))),
        " ".join(norm(item) for item in as_list(entry.get("domains"))),
        " ".join(norm(item) for item in as_list(entry.get("tags"))),
        " ".join(norm(item) for item in as_list(entry.get("construction_layer"))),
        norm(one_line(entry)),
    ])


def subfield_label_score(entry: dict, subfield: dict) -> int:
    """Prefer entries whose visible title/tags/domains match the subfield, not only audit boilerplate."""
    title_hay = norm(entry.get("title"))
    label_hay = subfield_label_text(entry)
    score = 0
    for keyword in subfield.get("keywords", []):
        if contains_term(title_hay, keyword):
            score += 6
        elif contains_term(label_hay, keyword):
            score += 3
    return score


def subfield_entries(category_id: str, subfield: dict, limit: int = 4) -> list[dict]:
    matched = []
    cards = all_cards()
    for entry in category_entries(category_id):
        if subfield_matches(entry, category_id, subfield):
            if category_id == "process_trace_supervision_data" and not homepage_prm_core_entry(entry):
                continue
            matched.append(entry)
    subfield_name_hay = norm(subfield.get("name"))
    if category_id == "foundations_and_primers" and (
        contains_term(subfield_name_hay, "survey") or contains_term(subfield_name_hay, "surveys")
    ) and not contains_term(subfield_name_hay, "contamination"):
        matched = [
            entry for entry in matched
            if contains_term(subfield_label_text(entry), "survey") or contains_term(subfield_label_text(entry), "primer")
        ]
    strong = [entry for entry in matched if subfield_label_score(entry, subfield) > 0]
    if strong:
        matched = sorted(
            strong,
            key=lambda entry: (
                -subfield_label_score(entry, subfield),
                0 if cards.get(entry.get("id")) else 1,
                0 if curation_level(entry, cards.get(entry.get("id"))) == "L5_audit_ready" else 1,
                -(entry.get("year") or 0),
                entry.get("title") or "",
            ),
        )
    rich = [
        entry for entry in matched
        if homepage_rich_entry(entry) and (
            cards.get(entry.get("id")) or curation_level(entry, cards.get(entry.get("id"))) in {
            "L2_artifact_verified",
            "L3_summary_ready",
            "L4_carded",
            "L5_audit_ready",
            }
        )
    ]
    if len(rich) >= min(2, limit):
        return rich[:limit]
    metadata_rich = [entry for entry in matched if homepage_rich_entry(entry)]
    return (metadata_rich or matched)[:limit]


def paper_chip(entry: dict, cards: dict[str, str]) -> str:
    title = cell(entry.get("title") or entry.get("id"))
    href = primary_link(entry)
    year = entry.get("year") or "n.d."
    venue = cell(entry.get("venue") or primary_link_kind(entry) or "primary")
    card = f" · [Paper Card Source]({cards[entry.get('id')]})" if cards.get(entry.get("id")) else ""
    link = f"[{title}]({href})" if href else title
    return f"{link} ({year}, {venue}){card}"


def representative_papers(category_id: str, subfield: dict, limit: int = 4) -> str:
    cards = all_cards()
    picks = subfield_entries(category_id, subfield, limit=limit)
    if not picks:
        return "Needs verified primary-source additions; see [needs_search](reports/needs_search.md)."
    lines = []
    for entry in picks:
        data = short(compact_data_object(entry), 86)
        feedback = short(compact_feedback(entry), 76)
        lines.append(f"{paper_chip(entry, cards)}<br><sub>data: {cell(data)}; feedback: {cell(feedback)}</sub>")
    return "<br>".join(lines)


def research_track_table(prefix: str = "papers/", zh: bool = False) -> str:
    lines = []
    for group in CATEGORY_GROUPS:
        group_tracks = tracks_for_group(group["id"])
        if not group_tracks:
            continue
        heading = group["zh_title"] if zh else group["title"]
        promise = group["zh_promise"] if zh else group["promise"]
        lines += [f"### {group['emoji']} {heading}", "", promise, ""]
        if zh:
            rows = ["| 研究轨道 | 二级方向 | 适合用来做什么 | 条目数 | 入口 |", "|---|---|---|---:|---|"]
        else:
            rows = ["| Track | Subfields | Best for | Entries | Jump |", "|---|---|---|---:|---|"]
        for track in group_tracks:
            subfields = "<br>".join(item.get("name") or "" for item in (track.get("subfields") or []))
            cid = track.get("category_id")
            best_for = TRACK_BEST_FOR_ZH.get(cid, track.get("best_for")) if zh else track.get("best_for")
            jump_label = "进入" if zh else "Papers"
            rows.append(
                f"| {track.get('navigator_title')} | {cell(subfields)} | {cell(best_for)} | {category_count(cid)} | [{jump_label}]({prefix}{category_file(cid)}) |"
            )
        lines += ["\n".join(rows), ""]
    return "\n".join(lines).rstrip()


def research_contents(prefix: str = "papers/") -> str:
    lines = ["- 📚 Main Research Tracks"]
    for group in CATEGORY_GROUPS:
        group_tracks = tracks_for_group(group["id"])
        if not group_tracks:
            continue
        lines.append(f"  - {group['emoji']} {group['title']}")
        for track in group_tracks:
            cid = track.get("category_id")
            lines.append(f"    - {track.get('navigator_title')}: [{track.get('short_title')}]({prefix}{category_file(cid)})")
            for subfield in (track.get("subfields") or []):
                lines.append(f"      - [{subfield.get('name')}]({prefix}{category_file(cid)}#{subfield_slug(subfield.get('name', 'subfield'))})")
    lines += [
        "- 🧩 Browse by Data Object",
        "  - Prompt-answer, trace-answer, step label, rollout value, preference pair, reward record, agent trajectory, rubric record",
        "- 🛠️ Browse by Training Use",
        "  - SFT, distillation, reward modeling, process supervision, RLVR, agent training, evaluation, audit",
    ]
    return "\n".join(lines)


def detailed_paper_directory(prefix: str = "papers/", zh: bool = False) -> str:
    intro = (
        "下面只展示已经有官方主链接的代表论文；如果某个子方向还没有 verified 条目，它会明确标成 needs search，而不是伪造链接。每行的 `data` 和 `feedback` 帮你判断这篇论文是不是你要读的那类后训练推理数据。"
        if zh else
        "Only entries with verified official primary links are listed here. If a subfield still lacks verified entries, it is explicitly marked as needs search instead of receiving invented links. The `data` and `feedback` hints tell you whether a paper is the right kind of post-training reasoning-data work to open next."
    )
    labels = {
        "subfield": "子方向" if zh else "Subfield",
        "focus": "这个方向看什么" if zh else "What this subfield studies",
        "papers": "代表论文直达" if zh else "Representative papers with official links",
        "risk": "审计风险" if zh else "Key audit risk",
        "full": "完整页面" if zh else "Full track page",
    }
    lines = [intro, ""]
    for group in CATEGORY_GROUPS:
        group_tracks = tracks_for_group(group["id"])
        if not group_tracks:
            continue
        heading = group["zh_title"] if zh else group["title"]
        lines += [f"### {group['emoji']} {heading}", ""]
        for track in group_tracks:
            cid = track.get("category_id")
            file = category_file(cid)
            lines += [
                f"#### {track.get('navigator_title')}",
                "",
                f"> {track.get('best_for')} · [{labels['full']}]({prefix}{file})",
                "",
                f"| {labels['subfield']} | {labels['focus']} | {labels['papers']} | {labels['risk']} |",
                "|---|---|---|---|",
            ]
            for subfield in track.get("subfields") or []:
                name = subfield.get("name", "Subfield")
                anchor = f"{prefix}{file}#{subfield_slug(name)}"
                lines.append(
                    f"| [{cell(name)}]({anchor}) | {cell(subfield.get('focus', ''))} | {representative_papers(cid, subfield)} | {cell(subfield.get('key_risk', ''))} |"
                )
            lines.append("")
    return "\n".join(lines).rstrip()


def four_views_table() -> str:
    return "\n".join([
        "| View | Question | Examples | Use it when... |",
        "|---|---|---|---|",
        "| 🔍 By feedback contract | Who decides correctness? | programmatic, environmental, judgment-required, mixed | you need to understand the verifier/reward/judge/environment behind a paper. |",
        "| 📦 By data object | What is serialized? | answer, trace, step label, preference pair, reward, trajectory, rubric | you need to compare what the dataset actually stores. |",
        "| 🛠️ By training use | How does it enter post-training? | SFT, distillation, PRM, RM, RLHF, RLVR, agent training, evaluation | you need to map papers to an engineering pipeline. |",
        "| 🧪 By task domain | Where does it operate? | math, code, proof, tools, SWE, web, medical, safety, legal, finance | you need a domain-specific literature route. |",
    ])


def research_question_table() -> str:
    return "\n".join([
        "| Research question | Best entry |",
        "|---|---|",
        f"| What counts as post-training reasoning data? | [docs/01](docs/01_what_is_post_training_reasoning_data.md) + [Foundations](papers/{category_file('foundations_and_primers')}) |",
        f"| How do we verify reasoning data? | [Programmatic](papers/{category_file('programmatically_verifiable_outcome_data')}) + [Process supervision](papers/{category_file('process_trace_supervision_data')}) + [Verifiers](docs/06_verifiers_and_rewards.md) |",
        f"| How are open reasoning datasets constructed? | [Construction recipes](papers/{category_file('data_construction_open_release_recipes')}) + [Card library](paper_cards/library/cards/) |",
        f"| What data does RLVR actually need? | [Programmatic verification](papers/{category_file('programmatically_verifiable_outcome_data')}) + [Scaling/RLVR](papers/{category_file('scaling_rlvr_test_time_compute')}) |",
        f"| How should agent trajectories be serialized? | [Agent data](papers/{category_file('environment_agent_trajectory_data')}) + [docs/07](docs/07_agent_trajectory_data.md) |",
        f"| How do frontier reports disclose or hide data recipes? | [Frontier reports](papers/{category_file('frontier_reports_data_disclosure_ledger')}) |",
        f"| How do contamination and verifier gaming affect claims? | [Audit/failure modes](papers/{category_file('audit_failure_contamination_verifier_attacks')}) |",
        f"| Which benchmarks are still useful for reasoning data? | [Benchmarks and evaluation](papers/{category_file('benchmarks_evaluation_surfaces')}) |",
    ])


def readme_en() -> str:
    s = stats()
    return f"""<h1><a href="https://www.tsinghua.edu.cn/en/"><img align="right" src="assets/institutions/tsinghua-university.png" height="48" alt="Tsinghua University"></a><a href="https://english.pku.edu.cn/"><img align="right" src="assets/institutions/peking-university.png" height="48" alt="Peking University"></a>🌟 Awesome LLM Reasoning Data</h1>

> A learning repository for understanding post-training reasoning data: what it is, how it is built, how it is verified, how it enters training, and how to audit it.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Paper](https://img.shields.io/badge/arXiv-2606.02113-b31b1b)](https://arxiv.org/abs/2606.02113)
[![Local Atlas](https://img.shields.io/badge/site-searchable%20atlas-0f766e)]({PAGES_URL})
[![Entries](https://img.shields.io/badge/entries-{s['total']}-2563eb)](paper_cards/library/cards/)
[![Verified](https://img.shields.io/badge/verified-{s['verified']}-0f766e)](reports/link_coverage.md)
[![Paper Cards](https://img.shields.io/badge/paper--card%20sources-{s['cards']}-7c3aed)](paper_cards/README.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="assets/overview.svg" width="92%" alt="Awesome LLM Reasoning Data overview">
</p>

**Awesome LLM Reasoning Data** is designed as a field-learning repository, not just a paper list.
If you want to understand large-model post-training reasoning data, you should be able to start here, learn the core vocabulary, follow a reading path, inspect representative papers, open paper-card sources, and gradually build a mental model of the whole area.

The repository is organized around one practical question:

> When a model becomes better at reasoning after post-training, what data record, feedback signal, verifier, reward, environment, or judge actually made that possible?

To answer that, the repo combines four layers:

- 🧭 **Learning guides** that explain concepts and reading paths.
- 📚 **Paper maps** that organize work by subfield rather than by publication date.
- 🗂️ **Paper-card sources** that support bilingual review, local editing, and generated submission packages.
- 🔎 **Searchable structured metadata** so readers can filter by verifier type, training use, curation level, and artifact availability.

Companion paper: [A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113).

Project website: [Awesome-LLM-Reasoning-Data.github.io]({PAGES_URL}).

---

## 🔥 Latest Updates

{latest_updates()}

> The atlas is intentionally conservative about metadata. If a paper/code/data/project link is not verified locally, it stays in [reports/needs_search.md](reports/needs_search.md) instead of being promoted into the verified lists.

## 🧭 Research Track Navigator

Most Awesome lists stop at "which papers exist." This atlas is organized around the extra questions that make post-training reasoning data reusable: **what data object is released, what verifies it, how it enters training, and how a reader should audit the claim**.

{research_track_table()}

## 📚 Detailed Paper Directory

{detailed_paper_directory()}

## 🧭 Contents

{research_contents()}

## 🧩 Browse by Four Views

Post-training reasoning data is multi-axis. A math paper can be a benchmark, an SFT trace release, a PRM source, an RLVR verifier, and a contamination risk at the same time. Use these four views before deciding where a paper belongs.

{four_views_table()}

## 🔎 Browse by Research Question

{research_question_table()}

---

## 🎯 What You Can Learn Here

| Learning goal | What this repo gives you |
|---|---|
| 🧠 Build the mental model | Understand why reasoning data is not just `prompt -> answer`, but a record with traces, actions, feedback, and metadata. |
| 🧮 Understand verifiable reasoning data | Learn how math answers, code tests, theorem provers, and executable environments create training and evaluation signals. |
| 🪜 Understand process supervision | Compare outcome rewards, step labels, process reward models, rollout values, and first-error localization. |
| 🏗️ Understand data construction recipes | Track prompt sourcing, teacher generation, search, filtering, deduplication, decontamination, and release metadata. |
| 🌐 Understand agent trajectory data | Learn what must be stored for tool use, browser tasks, app worlds, OS tasks, and repository-level SWE episodes. |
| ⚖️ Understand judges and rubrics | Study rubric-conditioned evaluation, open evaluator models, reward models, human preference data, and judge attacks. |
| 📈 Understand scaling and RLVR claims | Separate data scale, verifier quality, optimization scaffold, and inference budget when reading frontier reports. |
| 🧯 Learn how to audit failures | Look for leakage, contamination, verifier gaming, reward hacking, hidden lineage, and benchmark fragility. |

## 🧑‍💻 Who Is This For?

| Reader | Best path through the repo |
|---|---|
| New student / newcomer | Start with the 60-second model, then read the Starter Pack and the first two docs pages. |
| Researcher entering post-training | Use the paper atlas to locate subfields, then read reviewed paper-card sources before opening full papers. |
| Dataset builder | Follow the construction stack and release-card checklist before building or releasing data. |
| RLVR / verifier engineer | Use the verifier audit sections, process-supervision papers, and programmatic benchmark sources. |
| Agent researcher | Follow the agent trajectory section and compare SWE-bench, SWE-bench Verified, ReAct, Toolformer, and environment entries. |
| Reading group organizer | Use the Starter Pack and category pages as a week-by-week syllabus. |
| Open-source contributor | Add verified links, metadata, paper-card sources, or missing artifacts through the contribution workflow. |

---

## 🚀 60-second Version

> **Post-training reasoning data** is the data used after pretraining to teach, reinforce, or audit reasoning behavior.
>
> A useful sample is usually not only:
>
> `prompt -> answer`
>
> but:
>
> `task/context -> trace/actions -> answer/artifact -> verifier/reward/judge/environment -> metadata`
>
> This repo helps you compare those records across math, code, proof, agents, rubric judging, frontier model reports, scaling studies, and failure audits.

Read this repository if you want to answer questions like:

- 🧪 What exactly verified the answer: unit tests, a proof checker, a reward model, an LLM judge, a rubric, or an environment?
- 🪜 Was feedback attached to the final answer, each step, a rollout set, a state-action transition, or a full episode?
- 🧬 Which teacher, base model, prompt source, filtering rule, split, license, and contamination check produced the released data?
- 📈 Did a result improve the asymptote, the sample efficiency, the inference budget curve, or only the reported pass rate?
- 🧯 Where can the verifier fail, leak, overfit, reward-hack, or silently encode lineage artifacts?

---

## 📌 Contents

| Section | What you will learn | Go |
|---|---|---|
| 🧭 Start Here | Zero-to-field overview and reading paths | [docs/00](docs/00_start_here.md) |
| 🎯 What You Can Learn | The repository as a learning roadmap | [jump](#-what-you-can-learn-here) |
| 🧑‍💻 Who It Is For | Paths for students, builders, researchers, and auditors | [jump](#-who-is-this-for) |
| 🧠 60-second Model | The verifier-bearing sample mental model | [jump](#-60-second-version) |
| 🔥 Latest Updates | What changed recently in this atlas | [jump](#latest-updates) |
| 🧭 Research Tracks | Browse the field like an Awesome paper atlas | [jump](#-research-track-navigator) |
| 📚 Detailed Paper Directory | Subfield-level paper links with data/feedback hints | [jump](#-detailed-paper-directory) |
| 🧩 Four Views | Feedback contract, data object, training use, and domain | [jump](#-browse-by-four-views) |
| 🔎 Research Questions | Jump from a question to the right paper track | [jump](#-browse-by-research-question) |
| 📊 Snapshot | Current verified/card/artifact coverage | [jump](#snapshot-stats) |
| 🛣️ Learning Roadmap | Learn the field in 6 stages | [jump](#-learning-roadmap) |
| 🧭 Starter Pack | 20 papers to read first | [jump](#-starter-pack-20-must-read-papers) |
| 🧮 Core Paper Map | The compact map from data objects to papers | [jump](#-core-paper-map) |
| 🗺️ Category Map | Programmatic, environmental, judgment-required, scaling, audit | [jump](#-category-map) |
| 🧰 Build Data | Construction stack for reasoning datasets | [jump](#-how-to-build-a-reasoning-dataset) |
| 🧪 Audit Verifiers | How to inspect rewards, judges, checkers, and rubrics | [jump](#-how-to-audit-a-verifier) |
| 🌐 Agent Trajectories | State/action/replay fields for tools, web, OS, SWE | [jump](#-how-to-audit-agent-trajectory-data) |
| 📈 Scaling Claims | RLVR, reuse, pass@k, test-time compute, inference budget | [jump](#-how-to-interpret-scaling-claims) |
| 🧩 Repo Structure | How files, docs, paper-card sources, and reports fit together | [jump](#-repository-structure) |
| 📚 Paper Atlas | Category pages, paper-card sources, exports, searchable website | [jump](#-full-paper-atlas) |
| 🌱 Roadmap | High-impact priorities for making the atlas more citable | [ROADMAP](ROADMAP.md) |
| 🤝 Contribute | Add papers with metadata, not only links | [CONTRIBUTING](CONTRIBUTING.md) |

## Snapshot Stats

| Metric | Count |
|---|---:|
| Total structured entries | {s['total']} |
| Verified official primary links | {s['verified']} |
| Entries with paper/arXiv/venue/DOI links | {s['primary']} |
| Complete bilingual paper-card sources | {s['cards']} |
| Source directories | {s['card_files']} |
| L5 audit-ready entries | {s['l5']} |
| Needs search / metadata | {s['needs_search']} |
| Official code links | {s['code']} |
| Official data links | {s['data']} |
| Hugging Face links | {s['hf']} |
| Project links | {s['project']} |

## Start Here

| I want to... | Go to |
|---|---|
| 🧭 understand the field | [docs/00_start_here.md](docs/00_start_here.md) |
| 📚 find papers by subfield | [papers/README.md](papers/README.md) |
| 🧮 study math/code/proof data | [{paper_link('programmatically_verifiable_outcome_data')}]({paper_link('programmatically_verifiable_outcome_data')}) |
| 🪜 study process supervision | [{paper_link('process_trace_supervision_data')}]({paper_link('process_trace_supervision_data')}) |
| 🌐 study agent trajectories | [{paper_link('environment_agent_trajectory_data')}]({paper_link('environment_agent_trajectory_data')}) |
| 🚀 study frontier model reports | [{paper_link('frontier_reports_data_disclosure_ledger')}]({paper_link('frontier_reports_data_disclosure_ledger')}) |
| 🔎 use the searchable atlas | [live atlas]({PAGES_URL}) |
| 📊 inspect link coverage | [reports/link_coverage.md](reports/link_coverage.md) |
| 🤝 contribute a paper/card | [CONTRIBUTING.md](CONTRIBUTING.md) |

## 🛣️ Learning Roadmap

This repository should work like a small open course. You do not need to read every paper first. Use the route below and open papers only when a concept becomes important.

| Stage | Learn | Main resources | Output you should have |
|---:|---|---|---|
| 1 | Vocabulary and mental model | [60-second version](#-60-second-version), [docs/00](docs/00_start_here.md), [docs/01](docs/01_what_is_post_training_reasoning_data.md) | You can explain the difference between answer data, trace data, reward data, verifier data, and trajectory data. |
| 2 | Feedback contracts | [docs/02](docs/02_verifier_anchored_taxonomy.md), [docs/06](docs/06_verifiers_and_rewards.md), [Card library](paper_cards/library/cards/) | You can identify whether a work uses programmatic, environmental, judgment-required, or mixed verification. |
| 3 | Core papers | [Starter Pack](#-starter-pack-20-must-read-papers), [papers/README.md](papers/README.md), [paper_cards/README.md](paper_cards/README.md) | You can locate the canonical papers for math, code, process supervision, agents, RLVR, and audit. |
| 4 | Data construction | [docs/05](docs/05_construction_cookbook.md), [Card library](paper_cards/library/cards/) | You can describe prompt sourcing, teacher generation, filtering, verifier pinning, and release metadata. |
| 5 | Specialized tracks | [programmatic data]({paper_link('programmatically_verifiable_outcome_data')}), [agents]({paper_link('environment_agent_trajectory_data')}), [rubrics]({paper_link('judgment_rubric_domain_expert_data')}), [scaling]({paper_link('scaling_rlvr_test_time_compute')}) | You can choose a subfield and follow its top papers and audit questions. |
| 6 | Audit and contribution | [docs/09](docs/09_audit_and_failure_modes.md), [reports/link_coverage.md](reports/link_coverage.md), [CONTRIBUTING.md](CONTRIBUTING.md) | You can tell what is verified, what is missing, and how to improve an entry without hallucinating links. |

## 🧭 Starter Pack: 20 Must-Read Papers

Read these as a learning path, not as a citation dump. The rightmost columns tell you what question each paper should answer before you move on.

{starter_table()}

Next steps:

- Newcomer: read [docs/00_start_here.md](docs/00_start_here.md) and [docs/01_what_is_post_training_reasoning_data.md](docs/01_what_is_post_training_reasoning_data.md).
- Builder: read [docs/05_construction_cookbook.md](docs/05_construction_cookbook.md) and compare Card-local sources in [paper_cards/library/cards/](paper_cards/library/cards/).
- Auditor: read [docs/09_audit_and_failure_modes.md](docs/09_audit_and_failure_modes.md) and compare reviewed paper-card sources from [paper_cards/README.md](paper_cards/README.md).

---

## 🧮 Core Paper Map

<p align="center">
  <img src="assets/paper_map.svg" width="92%" alt="Core paper map for reasoning data">
</p>

| Cluster | Representative entries | What to inspect |
|---|---|---|
| 🧮 Programmatic math/code/proof | {entry_md('openmathinstruct-2-accelerating-ai-for-math-with-massive-open-source-instruction-2024', 'OpenMathInstruct-2')}, {entry_md('deepseek-prover-v2-advancing-formal-mathematical-reasoning-via-reinforcement-lea-2025', 'DeepSeek-Prover-V2')}, {entry_md('scicode-a-benchmark-for-scientific-code-generation-and-reasoning-2024', 'SciCode')} | answer checker, unit tests, proof checker, pass-rate bands, decontamination |
| 🪜 Process supervision and PRMs | {entry_md('prm800k-2023', "Let's Verify Step by Step")}, {entry_md('math-shepherd-2024', 'Math-Shepherd')}, {entry_md('rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024', 'Rewarding Progress')} | step labels, rollout values, first-error localization, reward-model calibration |
| 🏗️ Open construction recipes | {entry_md('openthoughts3-2025', 'OpenThoughts')}, {entry_md('self-rag-learning-to-retrieve-generate-and-critique-through-self-reflection-2023', 'Self-RAG')}, {entry_md('magicoder-empowering-code-generation-with-oss-instruct-2024', 'Magicoder')} | prompt source, teacher trace, filtering rule, optimizer/scaffold, ablation fields |
| 🚀 Frontier and model reports | {entry_md('deepseek-r1-2025', 'DeepSeek-R1')}, {entry_md('qwen2-5-math-technical-report-toward-mathematical-expert-model-via-self-improvem-2024', 'Qwen2.5-Math')}, {entry_md('tulu-3-pushing-frontiers-in-open-language-model-post-training-2024', 'Tulu 3')} | disclosed data partitions, reward contract, RLVR setup, distillation path |
| 🌐 Agent and environment data | {entry_md('swe-bench-can-language-models-resolve-real-world-github-issues-2023', 'SWE-bench')}, {entry_md('introducing-swe-bench-verified-2024', 'SWE-bench Verified')}, {entry_md('react-synergizing-reasoning-and-acting-in-language-models-2023', 'ReAct')} | state/action/observation schema, terminal predicate, replayability, scaffold metadata |
| ⚖️ Judgment-required rubrics | {entry_md('healthbench-2025', 'HealthBench')}, {entry_md('rewardbench-evaluating-reward-models-for-language-modeling-2024', 'RewardBench')}, {entry_md('prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024', 'Prometheus 2')} | rubric provenance, judge prompts, adjudication, domain expertise, calibration |
| 🧯 Audit and failure modes | {entry_md('livebench-a-challenging-contamination-free-benchmark-for-large-language-models-2024', 'LiveBench')}, {entry_md('a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-repro-2025', 'A Sober Look')}, {entry_md('truthfulqa-2022', 'TruthfulQA')} | leakage, contamination, verifier gaming, judge attack, hidden trait transfer |

---

## 🗺️ Category Map

<p align="center">
  <img src="assets/taxonomy.svg" width="86%" alt="Verifier-anchored taxonomy">
</p>

A reasoning-data taxonomy should start from the feedback contract, not only the academic domain. The same math problem can be an SFT trace, an RLVR answer record, a PRM step record, a rejection-sampling candidate, or a contamination probe.

| Axis | Values | Reader question |
|---|---|---|
| 🧪 Verification contract | programmatic, environmental, judgment-required, mixed, unknown | Who or what says the sample is correct? |
| 🪜 Granularity | answer, step, transition, full episode, rollout set, scalar reward | Where does feedback attach? |
| 🧩 Data object | prompt-answer, trace-answer, PRM record, preference pair, trajectory, rubric record | What fields must be serialized? |
| 🧬 Lineage | human, teacher model, search, self-play, environment, synthetic mix | Where did the behavior come from? |
| 🧰 Training use | SFT, distillation, reward modeling, RLVR, agent training, evaluation, audit | How could this data enter a post-training pipeline? |
| 🧯 Risk | leakage, contamination, verifier failure, judge attack, reward hacking, license ambiguity | What can make the gain misleading? |

---

## 🧰 How to Build a Reasoning Dataset

Use the construction stack from [docs/05_construction_cookbook.md](docs/05_construction_cookbook.md):

<p align="center">
  <img src="assets/construction_stack.svg" width="90%" alt="Reasoning dataset construction stack">
</p>

| Layer | Builder checklist | Common evidence |
|---|---|---|
| 1. 📥 Prompt sourcing | Describe source mix, license, split, difficulty, and base-model pass rate. | prompt pool, dedupe report, contamination checks |
| 2. ✍️ Trace writing | Say whether traces are human-written, teacher-generated, search-generated, or self-played. | teacher model, sampling temperature, rollout count |
| 3. 🔍 Search substrate | Record beam/search/MCTS/self-critique/scaffold details. | search budget, candidate count, pruning rules |
| 4. 🧪 Verifier layer | Pin the checker, judge, environment, rubric, or reward model. | tests, proof checker version, judge prompt, rubric |
| 5. 🧹 Filtering | Keep pass/fail bands, rejection reasons, and ambiguous cases. | filter script, verifier logs, disagreement set |
| 6. 🏋️ Optimizer/scaffold | State whether data is used for SFT, distillation, RLVR, PRM, or agent training. | loss, reward, rollout policy, curriculum |
| 7. 🧬 Release metadata | Preserve attribution, lineage, splits, license, and known failure modes. | card, datasheet, citation, changelog |

> Minimal release question: Could a different team reproduce the data object, rerun the verifier, and explain what would fail if the verifier were wrong?

---

## 🧪 How to Audit a Verifier

A verifier is not just a score. It is a data-producing instrument.

<p align="center">
  <img src="assets/quality_matrix.svg" width="90%" alt="Reasoning data quality matrix">
</p>

| Verifier type | Audit focus | Red flag |
|---|---|---|
| 🧮 Answer checker | canonicalization, tolerance, symbolic equivalence | formatting hacks count as reasoning gains |
| 💻 Unit tests | hidden tests, flaky tests, generated tests, coverage | model learns test style rather than task skill |
| 🧾 Proof checker | version, imports, tactic environment, timeout | proof succeeds only under an undocumented environment |
| 🪜 PRM | step boundary, label policy, calibration, rollout values | reward rises while final correctness falls |
| ⚖️ Rubric judge | rubric source, domain expertise, adjudication, prompt | judge is sensitive to wording or verbosity |
| 🧑‍⚖️ LLM-as-judge | model version, prompt, decoding, attack suite | one token or style cue flips the verdict |
| 🌐 Environment | terminal predicate, reset, observation schema, replay | success transcript cannot be replayed |

---

## 🌐 How to Audit Agent Trajectory Data

Agent data is more than a cleaned success transcript. A trainable or auditable episode should expose the environment contract.

| Field | Why it matters |
|---|---|
| 🧭 Task and initial state | Defines what the agent was actually asked to solve. |
| 👀 Observation stream | Separates visible context from hidden evaluator state. |
| 🛠️ Action schema | Makes tool, browser, OS, code, or API calls inspectable. |
| ⏱️ Budget | Records step limit, time, token budget, and retries. |
| 🧪 Terminal predicate | States exactly how success or failure is decided. |
| 🔁 Replay metadata | Lets another team re-run the episode and verify the result. |
| 🧱 Scaffold metadata | Captures planner, memory, retrieval, tool wrapper, and guardrails. |
| 🧯 Failure trace | Keeps near-misses and verifier failures instead of deleting them. |

---

## 📈 How to Interpret Scaling Claims

Scaling claims become much clearer when you treat the training data, verifier, and inference budget as part of the same ledger.

<p align="center">
  <img src="assets/scaling_ledger.svg" width="90%" alt="Scaling attribution ledger">
</p>

| Claim | Ask for | Watch out |
|---|---|---|
| RLVR improves reasoning | reward contract, verifier coverage, base-model pass rate | reward hacking or easy-example filtering |
| More data improves performance | unique examples, reuse count, source mixture | repeated prompts counted as fresh data |
| Test-time compute scales | pass@k, pass@(k,T), budget, search topology | hidden inference budget changes |
| Distillation transfers reasoning | teacher identity, trace policy, filtering | teacher leakage or style imitation |
| Frontier report shows recipe | data partitions, curricula, ablations | optimizer details without data details |

---

## 🧩 Repository Structure

| Path | What it is for |
|---|---|
| [docs/](docs/) | Conceptual lessons: mental model, taxonomy, construction cookbook, verifiers, agent trajectories, scaling, and failure modes. |
| [papers/](papers/README.md) | Field navigation map: category pages with read-first tables, full paper lists, audit checklists, related paper-card sources, and open gaps. |
| [paper_cards/](paper_cards/README.md) | Bilingual paper-card source files and local review workflow. |
| [paper_cards/library/cards/](paper_cards/library/cards/) | Structured source of truth: each Card owns its paper metadata, local review records, and bilingual sources. |
| [docs/index.html](docs/index.html) | Searchable web atlas generated from structured data. |
| [reports/](reports/) | Public QA and coverage: link coverage, needs-search, release notes, quality audits, and live-link reports. |
| [exports/](exports/) | CSV, JSON, and BibTeX exports for readers who want to reuse the atlas data. |
| [scripts/](scripts/) | Reproducible generators and validators for README, paper pages, paper-card sources, site data, exports, and QA. |
| [ROADMAP.md](ROADMAP.md) | Public priorities for making the atlas more useful, citable, and contribution-friendly. |

## 🧪 How to Use This Repo in Practice

| If your question is... | Use this path |
|---|---|
| "I am new. What should I read first?" | Start with [docs/00](docs/00_start_here.md), then the [Starter Pack](#-starter-pack-20-must-read-papers). |
| "I want to build a reasoning dataset." | Read [docs/05](docs/05_construction_cookbook.md), then inspect relevant paper-card sources. |
| "I want to know whether a benchmark is reusable." | Open the relevant paper-card source, then check its verifier, data split, contamination risk, and official links. |
| "I want to understand RLVR." | Follow programmatic math/code/proof papers, verifier/reward sources, and scaling/RLVR category pages. |
| "I want to study agents." | Follow [agent papers]({paper_link('environment_agent_trajectory_data')}), then inspect action schema, terminal predicate, and replay fields. |
| "I want to contribute." | Pick an item from [needs_search](reports/needs_search.md), verify official links, then add structured metadata and bilingual paper-card sources. |

---

## 🌱 High-Citation Roadmap

The repository becomes more useful and citable when it improves depth, trust, and reuse rather than raw length. The public roadmap is in [ROADMAP.md](ROADMAP.md).

| Priority | What to improve next | Why it helps readers cite or reuse the atlas |
|---:|---|---|
| P0 | Keep public hygiene clean: no private planning files, prompt/spec artifacts, or local OS metadata. | Readers should see a maintained research resource, not a build workspace. |
| P1 | Promote high-impact entries into reviewed bilingual paper-card sources. | Deep paper-card sources are what make the repo useful beyond a paper list. |
| P1 | Add official code, data, Hugging Face, and project links for already verified papers. | Builders can jump from survey reading to reusable artifacts. |
| P1 | Strengthen thin subfields before adding long-tail seeds. | Researchers can trust the taxonomy as a balanced field map. |
| P2 | Improve bilingual polish and paper-specific citation metadata. | The atlas becomes easier to share in reading groups, surveys, and course notes. |

---

## 📚 Full Paper Atlas

The long categorized lists live in [papers/](papers/README.md). Each category page includes a category explanation, read-first table, full paper list, audit checklist, related paper-card sources, and open gaps.

- [Foundations and Primers]({paper_link('foundations_and_primers')})
- [Instruction, Demonstration, and Rationale Data]({paper_link('instruction_demonstration_rationale_data')})
- [Preference and Reward Feedback Data]({paper_link('preference_reward_feedback_data')})
- [Programmatically Verifiable Outcome Data]({paper_link('programmatically_verifiable_outcome_data')})
- [Process and Trace Supervision Data]({paper_link('process_trace_supervision_data')})
- [Rollout, Search, and Test-Time Trace Data]({paper_link('rollout_search_test_time_trace_data')})
- [Environment and Agent Trajectory Data]({paper_link('environment_agent_trajectory_data')})
- [Judgment, Rubric, and Domain-Expert Data]({paper_link('judgment_rubric_domain_expert_data')})
- [Data Construction and Open Release Recipes]({paper_link('data_construction_open_release_recipes')})
- [Training Usage and Optimization Objectives]({paper_link('training_usage_optimization_objectives')})
- [Scaling, RLVR, and Test-Time Compute]({paper_link('scaling_rlvr_test_time_compute')})
- [Benchmarks and Evaluation Surfaces]({paper_link('benchmarks_evaluation_surfaces')})
- [Frontier Reports and Data Disclosure Ledger]({paper_link('frontier_reports_data_disclosure_ledger')})
- [Audit, Failure, Contamination, and Verifier Attacks]({paper_link('audit_failure_contamination_verifier_attacks')})

## 🗂️ Paper-Card Sources

Paper-card sources turn citations into reviewable bilingual sections. The full assembled cards are generated by Python and are not maintained by hand.

- [Paper-card workflow](paper_cards/README.md)
- [Card library](paper_cards/library/cards/)

## 🔎 Searchable Website

Open [the live atlas]({PAGES_URL}) or [docs/index.html](docs/index.html) locally. The site loads generated JSON on hosted pages and includes [docs/assets/atlas-data.js](docs/assets/atlas-data.js) as a local fallback for browsers that block direct JSON loading. It supports search plus filters for year, venue, source role, verification contract, supervision granularity, training use, curation level, status, and artifact availability.

## 🧱 Curation Levels

{level_table()}

## 🤝 Contributing

Please do not submit only a paper title. A useful contribution includes official links, source role, verification contract, supervision granularity, training use, a one-line summary, a why-it-matters rationale, and card/audit fields when available. Start with [CONTRIBUTING.md](CONTRIBUTING.md).

## 📖 Citation

If this atlas helps your related work, dataset construction, verifier design, or reading group, please cite the companion paper and link this repository. See [CITATION.cff](CITATION.cff).

## 📄 License

MIT. See [LICENSE](LICENSE).
"""


def readme_zh() -> str:
    s = stats()
    return f"""# 🌟 Awesome LLM Reasoning Data

> 一个系统学习“大模型后训练推理数据”的开源仓库：从概念、论文、数据构造、验证器、奖励信号、Agent 轨迹、RLVR、benchmark 到审计风险。

[论文：A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113)

[🌐 网页版 Atlas]({PAGES_URL}) · [📚 论文分类地图](papers/README.md)

<p align="center">
  <img src="assets/overview.svg" width="92%" alt="Awesome LLM Reasoning Data overview">
</p>

## 这个项目是什么？

这个仓库不是只为了收集论文标题，也不是为了复刻论文综述的写法。它的目标是成为一个**学习型仓库**：让想了解大模型后训练推理数据的人，可以沿着这里的学习路线，从基本概念一路学到数据构造、verifier/reward、RLVR、Agent 轨迹、frontier model report 和 failure audit。

它重点回答一个问题：

> 一个模型经过后训练之后推理能力变强，背后到底是什么数据记录、反馈信号、验证器、奖励、环境或裁判在起作用？

所以这里关注的不是单纯的 `paper list`，而是每篇工作公开了什么数据对象、反馈契约、构造流程、训练用途、官方链接和审计风险。

核心记录通常不是：

`prompt -> answer`

而更像：

`任务/上下文 -> 推理轨迹/动作 -> 答案/产物 -> 验证器/奖励/裁判/环境 -> 元数据`

## 🔥 最新状态

| 指标 | 数量 |
|---|---:|
| 总条目 | {s['total']} |
| 已验证官方主链接 | {s['verified']} |
| 有 paper/arXiv/venue/DOI 链接 | {s['primary']} |
| 完整双语 paper-card source | {s['cards']} |
| L5 audit-ready | {s['l5']} |
| 仍需搜索 | {s['needs_search']} |
| 官方 code 链接 | {s['code']} |
| 官方 data 链接 | {s['data']} |
| Hugging Face 链接 | {s['hf']} |
| project 链接 | {s['project']} |

## 🧭 按研究领域浏览

其他 Awesome 往往只告诉读者“有哪些论文”。这个仓库还需要告诉读者：每类后训练推理数据解决什么问题、论文公开了什么 data object、verifier/reward/recipe 是什么、以及应该如何审计。

{research_track_table(zh=True)}

## 📚 详细论文分类目录

{detailed_paper_directory(zh=True)}

## 🧩 四种浏览视角

后训练推理数据具有多轴属性，但论文库当前将每篇论文固定为一个主 review 标签：03 programmatically verifiable outcome data 或 10 scaling/RLVR/test-time compute。其他 benchmark、SFT trace、PRM、verifier 和 contamination 信息通过四个浏览视角呈现：

{four_views_table()}

## 🔎 按研究问题进入

{research_question_table()}

## 🎯 你可以在这里学到什么

| 学习目标 | 这个仓库提供什么 |
|---|---|
| 🧠 建立整体认知 | 解释 post-training reasoning data 为什么不只是 prompt-answer，而是 trace、action、feedback、metadata 的组合。 |
| 🧮 理解可验证推理数据 | 学习 math answer checker、code unit tests、proof checker、可执行环境如何产生训练和评测信号。 |
| 🪜 理解过程监督 | 比较 outcome reward、step label、PRM、rollout value、first-error localization。 |
| 🏗️ 理解数据构造 recipe | 跟踪 prompt sourcing、teacher generation、search、filtering、dedup、decontamination、release metadata。 |
| 🌐 理解 Agent 轨迹数据 | 看 tool use、browser、app world、OS task、repository-level SWE episode 需要存储哪些字段。 |
| ⚖️ 理解裁判和 rubric | 学习 rubric evaluation、open evaluator model、reward model、人类偏好数据和 judge attack。 |
| 📈 理解 RLVR 和 scaling | 区分 data scale、verifier quality、optimizer scaffold、inference budget。 |
| 🧯 学会审计失败 | 识别 leakage、contamination、verifier gaming、reward hacking、hidden lineage、benchmark fragility。 |

## 👥 适合谁阅读？

| 读者 | 推荐路径 |
|---|---|
| 刚入门的同学 | 先看 60 秒版本，再看 Starter Pack 和 docs 前两章。 |
| 想进入后训练方向的研究者 | 先用 papers/ 找子方向，再看已复核的 paper-card source，最后打开原论文。 |
| 数据集构造者 | 按 construction stack 检查 prompt、trace、verifier、filter、metadata 是否齐全。 |
| RLVR / verifier 工程师 | 看 verifier audit、process supervision、programmatic benchmark 和 scaling 页面。 |
| Agent 研究者 | 看 agent trajectory 章节和 SWE-bench/ReAct/Toolformer/environment 条目。 |
| 读书会组织者 | 直接把 Starter Pack 和 category pages 当作分周 syllabus。 |

## 🚀 60 秒版本

一个有用的后训练推理数据样本，通常不只是：

`prompt -> answer`

而更像：

`任务/上下文 -> 推理轨迹/动作 -> 答案/产物 -> 验证器/奖励/裁判/环境 -> 元数据`

这个仓库希望帮读者快速回答：

- 🧪 答案到底由什么验证：单元测试、证明器、奖励模型、LLM 裁判、rubric，还是环境？
- 🪜 反馈是挂在最终答案、每一步、rollout、状态动作转移，还是完整 episode 上？
- 🧬 released data 来自哪个 teacher/base model/prompt source/filter/split/license？
- 📈 性能提升来自更多数据、更好 verifier、更多 inference budget，还是报告口径？
- 🧯 verifier 会在哪里失败、泄漏、过拟合、被 reward hack？

## 📌 快速入口

| 我想要... | 入口 |
|---|---|
| 📚 按研究领域找论文 | [papers/README.md](papers/README.md) |
| 🧭 看完整 Research Track Navigator | [按研究领域浏览](#-按研究领域浏览) |
| 📚 看细分方向代表论文 | [详细论文分类目录](#-详细论文分类目录) |
| 🧭 快速理解领域 | [docs/00_start_here.md](docs/00_start_here.md) |
| 📚 找论文地图 | [papers/README.md](papers/README.md) |
| 🧮 看数学/代码/证明数据 | [{paper_link('programmatically_verifiable_outcome_data')}]({paper_link('programmatically_verifiable_outcome_data')}) |
| 🪜 看过程监督/PRM | [{paper_link('process_trace_supervision_data')}]({paper_link('process_trace_supervision_data')}) |
| 🌐 看 Agent 环境数据 | [{paper_link('environment_agent_trajectory_data')}]({paper_link('environment_agent_trajectory_data')}) |
| 🔎 看可搜索网页 | [在线网页]({PAGES_URL}) |
| 🗂️ 看双语卡片源 | [paper_cards/README.md](paper_cards/README.md) |
| 📊 看链接覆盖率 | [reports/link_coverage.md](reports/link_coverage.md) |
| 🤝 贡献论文或卡片 | [CONTRIBUTING.md](CONTRIBUTING.md) |

## 🛣️ 学习路线

这个仓库应该像一门小型公开课，而不是一个静态目录。你不需要一开始读完所有论文，可以按下面路线逐层进入。

| 阶段 | 学什么 | 主要入口 | 学完应该能做到什么 |
|---:|---|---|---|
| 1 | 基础概念和 mental model | [docs/00](docs/00_start_here.md)、[docs/01](docs/01_what_is_post_training_reasoning_data.md) | 能解释 answer data、trace data、reward data、verifier data、trajectory data 的区别。 |
| 2 | 反馈契约 | [docs/02](docs/02_verifier_anchored_taxonomy.md)、[docs/06](docs/06_verifiers_and_rewards.md) | 能判断一篇工作使用 programmatic、environmental、judgment-required 还是 mixed verification。 |
| 3 | 核心论文 | [Starter Pack](#-starter-pack20-篇必读)、[papers/README.md](papers/README.md)、[paper_cards/README.md](paper_cards/README.md) | 能定位 math/code/process/agent/RLVR/audit 的代表性工作。 |
| 4 | 数据构造 | [docs/05](docs/05_construction_cookbook.md)、[Card 库](paper_cards/library/cards/) | 能描述 prompt sourcing、teacher generation、filtering、verifier pinning、release metadata。 |
| 5 | 专题深入 | [math/code/proof]({paper_link('programmatically_verifiable_outcome_data')})、[agents]({paper_link('environment_agent_trajectory_data')})、[rubrics]({paper_link('judgment_rubric_domain_expert_data')})、[scaling]({paper_link('scaling_rlvr_test_time_compute')}) | 能沿一个子领域继续读论文、看双语卡片源、查官方链接。 |
| 6 | 审计与贡献 | [docs/09](docs/09_audit_and_failure_modes.md)、[reports/link_coverage.md](reports/link_coverage.md)、[CONTRIBUTING.md](CONTRIBUTING.md) | 能判断什么已经验证、什么还缺失，并且可以给仓库补高质量条目。 |

## 🧭 Starter Pack：20 篇必读

把这 20 篇当作学习路线，而不是简单引用列表。每篇都对应一个你需要掌握的问题。

{starter_table()}

## 🧮 核心地图

<p align="center">
  <img src="assets/paper_map.svg" width="92%" alt="Core paper map for reasoning data">
</p>

| 方向 | 代表入口 | 重点看什么 |
|---|---|---|
| 🧮 数学/代码/证明 | [Programmatically Verifiable Outcome Data]({paper_link('programmatically_verifiable_outcome_data')}) | answer checker、unit tests、proof checker、去污染 |
| 🪜 过程监督 | [Process and Trace Supervision Data]({paper_link('process_trace_supervision_data')}) | step labels、PRM、first-error、rollout value |
| 🏗️ 构造 recipe | [Data Construction and Open Release Recipes]({paper_link('data_construction_open_release_recipes')}) | prompt source、teacher trace、filtering、ablation |
| 🌐 Agent 环境 | [Environment and Agent Trajectory Data]({paper_link('environment_agent_trajectory_data')}) | state/action/observation、terminal predicate、replay |
| ⚖️ Rubric/Judge | [Judgment, Rubric, and Domain-Expert Data]({paper_link('judgment_rubric_domain_expert_data')}) | rubric provenance、judge prompt、校准与攻击 |
| 📈 Scaling/RLVR | [Scaling, RLVR, and Test-Time Compute]({paper_link('scaling_rlvr_test_time_compute')}) | 数据复用、pass@k、inference budget、reward contract |
| 🧯 Failure/Audit | [Audit and Failure Modes]({paper_link('audit_failure_contamination_verifier_attacks')}) | leakage、contamination、verifier gaming、judge attack |

## 🧰 构造和审计框架

<p align="center">
  <img src="assets/construction_stack.svg" width="90%" alt="Reasoning dataset construction stack">
</p>

| 层 | 需要记录什么 |
|---|---|
| 📥 Prompt sourcing | source mix、license、split、difficulty、base-model pass rate |
| ✍️ Trace writing | human/teacher/search/self-play trace、采样参数、rollout 数 |
| 🔍 Search substrate | beam/search/MCTS/self-critique/scaffold 细节 |
| 🧪 Verifier layer | checker、judge、environment、rubric、reward model 版本 |
| 🧹 Filtering | pass/fail bands、rejection reasons、ambiguous cases |
| 🏋️ Optimizer/scaffold | SFT、distillation、RLVR、PRM、agent training 的进入方式 |
| 🧬 Release metadata | attribution、lineage、splits、license、known failure modes |

## 🧩 仓库结构

| 路径 | 用途 |
|---|---|
| [docs/](docs/) | 系统学习材料：概念、taxonomy、construction cookbook、verifier、agent trajectory、scaling、failure modes。 |
| [papers/](papers/README.md) | 论文导航地图：按子领域组织 read-first、full list、audit checklist、related paper-card sources。 |
| [paper_cards/](paper_cards/README.md) | 双语 paper-card 源文件和本地 review 工作流。 |
| [paper_cards/library/cards/](paper_cards/library/cards/) | 结构化唯一来源：每个 Card 独立维护元数据、局部 review 记录和双语正文。 |
| [docs/index.html](docs/index.html) | 可搜索网页 atlas：可以按 year、role、contract、training use、curation level 等过滤。 |
| [reports/](reports/) | QA 和覆盖率报告：link coverage、needs search、release notes、质量审查、link check。 |
| [exports/](exports/) | CSV、JSON、BibTeX，方便复用这个 atlas。 |
| [ROADMAP.md](ROADMAP.md) | 高引用路线和后续贡献优先级。 |

## 🧪 实际怎么用？

| 你的问题 | 推荐路径 |
|---|---|
| “我是新手，先读什么？” | [docs/00](docs/00_start_here.md) -> [Starter Pack](#-starter-pack20-篇必读) -> [paper_cards/README.md](paper_cards/README.md) |
| “我想构造一个 reasoning dataset。” | [docs/05](docs/05_construction_cookbook.md) -> 相关双语 paper-card source。 |
| “我想判断一个 benchmark 能不能复用。” | 打开对应 paper-card source，看 verifier、split、contamination、official links。 |
| “我想理解 RLVR。” | 看 [programmatic data]({paper_link('programmatically_verifiable_outcome_data')})、verifier/reward 相关条目、scaling/RLVR 页面。 |
| “我想研究 Agent 数据。” | 看 [agent papers]({paper_link('environment_agent_trajectory_data')}), 重点检查 action schema、terminal predicate、replay metadata。 |
| “我想给仓库贡献。” | 从 [needs_search](reports/needs_search.md) 找条目，验证官方链接，再补 metadata 和双语 paper-card source。 |

## 🌱 高引用路线

这个仓库想要变得更容易被收藏、引用和复用，关键不是继续堆最长列表，而是提升**深度、可信度和可复用性**。完整路线见 [ROADMAP.md](ROADMAP.md)。

| 优先级 | 下一步最值得做什么 | 为什么有助于高引用 |
|---:|---|---|
| P0 | 保持公开仓库干净：不能出现私有规划文件、prompt/spec 文件、本地系统文件。 | 读者看到的是维护良好的研究资源，而不是构建工作区。 |
| P1 | 把高影响力 `L1_link_verified` 条目提升到 `L4_carded` 或 `L5_audit_ready`。 | 深度卡片让仓库不只是 paper list。 |
| P1 | 给已 verified 的核心论文补官方 code/data/Hugging Face/project 链接。 | 数据构造者可以直接复用官方资源。 |
| P1 | 优先补薄弱子方向，再加长尾条目。 | 科研读者更容易把它当作平衡的领域地图。 |
| P2 | 继续润色中文版和论文引用元数据。 | 更适合读书会、课程、综述和中文社区传播。 |

## 🧱 Curation Levels

{level_table()}

## 🔎 可搜索网页

可以直接打开 [在线网页]({PAGES_URL})，也可以本地打开 [docs/index.html](docs/index.html)。它支持按 year、venue、source role、verification contract、granularity、training use、curation level、status、artifact availability 过滤。

## 📖 引用

如果这个 atlas 对你的相关工作、数据构造、验证器设计或 reading group 有帮助，请引用配套论文并链接本仓库。引用信息见 [CITATION.cff](CITATION.cff)。
"""


def render(target_root: Path = ROOT) -> None:
    (target_root / "README.md").write_text(readme_en(), encoding="utf-8")
    (target_root / "README_zh.md").write_text(readme_zh(), encoding="utf-8")


def check() -> int:
    with tempfile.TemporaryDirectory() as tmp:
        temp = Path(tmp)
        render(temp)
        problems = []
        for rel in ["README.md", "README_zh.md"]:
            actual = ROOT / rel
            expected = temp / rel
            if not actual.exists() or actual.read_text(encoding="utf-8") != expected.read_text(encoding="utf-8"):
                problems.append(f"out of date: {rel}")
        if problems:
            for problem in problems:
                print("ERROR:", problem)
            return 1
    print("README files are up to date")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if args.check:
        return check()
    render(ROOT)
    print("rendered README files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
