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

PLACEHOLDER_MARKERS = [
    "Local BibTeX seed",
    "needs curator review",
    "Official paper link is pinned",
    "curator should next add",
    "Needs curator summary",
    "Needs curator rationale",
]

_ENTRIES_CACHE: list[dict[str, Any]] | None = None
_CATEGORIES_CACHE: list[dict[str, Any]] | None = None
_RESEARCH_TRACKS_CACHE: list[dict[str, Any]] | None = None
_STARTER_PACKS_CACHE: list[dict[str, Any]] | None = None


def as_list(value: Any) -> list[Any]:
    if isinstance(value, list):
        return [item for item in value if item not in (None, "")]
    return [value] if value not in (None, "") else []


def norm(value: Any) -> str:
    return re.sub(r"[^a-z0-9]+", " ", str(value or "").lower()).strip()


def contains_term(haystack: str, keyword: str) -> bool:
    key = norm(keyword)
    if not key:
        return False
    return re.search(rf"(^|\s){re.escape(key)}($|\s)", haystack) is not None


def slugify(value: Any, fallback: str = "entry") -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", str(value or "").lower()).strip("-")
    return slug or fallback


def entries() -> list[dict[str, Any]]:
    global _ENTRIES_CACHE
    if _ENTRIES_CACHE is None:
        payload = load_yaml_json(ROOT / "data/papers.yaml")
        _ENTRIES_CACHE = payload if isinstance(payload, list) else []
    return _ENTRIES_CACHE


def categories() -> list[dict[str, Any]]:
    global _CATEGORIES_CACHE
    if _CATEGORIES_CACHE is None:
        payload = load_yaml_json(ROOT / "data/categories.yaml") or {}
        _CATEGORIES_CACHE = payload.get("paper_categories", [])
    return _CATEGORIES_CACHE


def research_tracks() -> list[dict[str, Any]]:
    global _RESEARCH_TRACKS_CACHE
    if _RESEARCH_TRACKS_CACHE is None:
        payload = load_yaml_json(ROOT / "data/research_tracks.yaml") or {}
        _RESEARCH_TRACKS_CACHE = payload.get("research_tracks", [])
    return _RESEARCH_TRACKS_CACHE


def track_by_category() -> dict[str, dict[str, Any]]:
    return {track.get("category_id"): track for track in research_tracks()}


def starter_packs() -> list[dict[str, Any]]:
    global _STARTER_PACKS_CACHE
    if _STARTER_PACKS_CACHE is None:
        payload = load_yaml_json(ROOT / "data/starter_packs.yaml") or {}
        _STARTER_PACKS_CACHE = payload.get("starter_packs", [])
    return _STARTER_PACKS_CACHE


def artifacts(entry: dict[str, Any]) -> dict[str, Any]:
    return entry.get("artifacts") or {}


def is_placeholder_text(value: Any) -> bool:
    text = str(value or "")
    return any(marker.lower() in text.lower() for marker in PLACEHOLDER_MARKERS)


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
        summary_bits = " ".join(str(entry.get(key) or "") for key in ["one_line", "one_line_summary", "why_it_matters", "inclusion_reason"])
        if explicit in {"L3_summary_ready", "L4_carded", "L5_audit_ready"} and is_placeholder_text(summary_bits):
            return "L1_link_verified" if primary_link(entry) else "L0_seeded"
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
    value = (
        entry.get("one_line_summary")
        or entry.get("one_line")
        or entry.get("inclusion_reason")
        or "Needs curator summary."
    )
    if is_placeholder_text(value):
        return "Official source is linked; detailed reasoning-data summary is still pending."
    return value


def why_it_matters(entry: dict[str, Any]) -> str:
    value = entry.get("why_it_matters") or entry.get("inclusion_reason") or "Needs curator rationale."
    if is_placeholder_text(value):
        return "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read."
    return value


def compact_data_object(entry: dict[str, Any]) -> str:
    data = entry.get("data_object") or {}
    fields = []
    categories_ = set(as_list(entry.get("category")))
    answer = data.get("answer_format")
    substrate = data.get("environment_or_substrate")
    process_fields = data.get("process_fields") or []
    background_categories = {"foundations_and_primers"}
    if answer and answer != "unknown" and (answer != "survey_background" or categories_ & background_categories):
        fields.append(str(answer).replace("_", " "))
    if process_fields:
        fields.append("process: " + ", ".join(str(item).replace("_", " ") for item in process_fields[:3]))
    if substrate and substrate != "unknown":
        fields.append(str(substrate).replace("_", " "))
    if not fields:
        granularities = [str(item).replace("_", " ") for item in as_list(entry.get("supervision_granularity")) if item != "unknown"]
        roles = [
            str(item).replace("_", " ")
            for item in as_list(entry.get("source_role"))[:2]
            if item != "survey_background" or categories_ & background_categories
        ]
        fields = granularities or roles or ["metadata pending"]
    return "; ".join(fields[:3])


def compact_feedback(entry: dict[str, Any]) -> str:
    data = entry.get("data_object") or {}
    verifier = data.get("verifier_or_reward")
    if verifier and verifier != "unknown":
        return str(verifier).replace("_", " ")
    contracts = [str(item).replace("_", " ") for item in as_list(entry.get("verification_contract")) if item != "unknown"]
    if contracts:
        return ", ".join(contracts[:2])
    return "metadata pending"


def compact_recipe(entry: dict[str, Any]) -> str:
    recipe = entry.get("recipe_metadata") or {}
    fields = []
    for key in ["teacher", "generator", "filtering_rule", "optimizer_or_scaffold"]:
        value = recipe.get(key)
        if value and value != "unknown":
            fields.append(f"{key.replace('_', ' ')}: {value}")
    if fields:
        return "; ".join(fields[:2])
    layers = [str(item).replace("_", " ") for item in as_list(entry.get("construction_layer"))]
    uses = [str(item).replace("_", " ") for item in as_list(entry.get("training_use")) if item != "unknown"]
    return "; ".join((layers + uses)[:3]) or "recipe pending"


def compact_audit(entry: dict[str, Any]) -> str:
    audit = entry.get("audit") or {}
    failures = audit.get("known_failure_modes") or []
    if failures:
        return ", ".join(str(item).replace("_", " ") for item in failures[:3])
    checks = []
    for key in ["decontamination", "lineage", "license", "split"]:
        value = audit.get(key)
        if value and value != "unknown":
            checks.append(f"{key}: {value}")
    if checks:
        return "; ".join(checks[:2])
    return "check links, lineage, verifier, split, and contamination"


def entry_search_text(entry: dict[str, Any]) -> str:
    data = entry.get("data_object") or {}
    audit = entry.get("audit") or {}
    recipe = entry.get("recipe_metadata") or {}
    fields: list[str] = [
        norm(entry.get("id")),
        norm(entry.get("title")),
        norm(entry.get("venue")),
        " ".join(norm(item) for item in as_list(entry.get("source_role"))),
        " ".join(norm(item) for item in as_list(entry.get("verification_contract"))),
        " ".join(norm(item) for item in as_list(entry.get("training_use"))),
        " ".join(norm(item) for item in as_list(entry.get("domains"))),
        " ".join(norm(item) for item in as_list(entry.get("tags"))),
        " ".join(norm(item) for item in as_list(entry.get("construction_layer"))),
        norm(one_line(entry)),
        norm(why_it_matters(entry)),
        " ".join(norm(value) for value in data.values() if not isinstance(value, list)),
        " ".join(norm(item) for value in data.values() if isinstance(value, list) for item in value),
        " ".join(norm(value) for value in audit.values() if not isinstance(value, list)),
        " ".join(norm(item) for value in audit.values() if isinstance(value, list) for item in value),
        " ".join(norm(value) for value in recipe.values() if not isinstance(value, list)),
    ]
    return " ".join(item for item in fields if item)


def infer_subfield(entry: dict[str, Any], category_id: str | None = None) -> dict[str, Any] | None:
    category_id = category_id or (as_list(entry.get("category"))[0] if as_list(entry.get("category")) else None)
    track = track_by_category().get(category_id)
    if not track:
        return None
    title_hay = norm(entry.get("title"))
    hay = " ".join([
        title_hay,
        norm(entry.get("venue")),
        " ".join(norm(item) for item in as_list(entry.get("verification_contract"))),
        " ".join(norm(item) for item in as_list(entry.get("training_use"))),
        " ".join(norm(item) for item in as_list(entry.get("domains"))),
        " ".join(norm(item) for item in as_list(entry.get("tags"))),
        norm(one_line(entry)),
        norm(why_it_matters(entry)),
    ])
    subfields = track.get("subfields") or []
    best = None
    best_score = -1
    for subfield in subfields:
        score = 0
        for keyword in subfield.get("keywords", []):
            if contains_term(title_hay, keyword):
                score += 3
            elif contains_term(hay, keyword):
                score += 1
        if score > best_score:
            best = subfield
            best_score = score
    return best if best_score > 0 else None


def force_include_subfield(entry: dict[str, Any], category_id: str | None, subfield_name: str | None) -> bool:
    """Allow a few cross-cutting research doors to reuse strong verified entries."""
    if not category_id or not subfield_name:
        return False
    name = norm(subfield_name)
    hay = entry_search_text(entry)
    label_hay = " ".join([
        norm(entry.get("id")),
        norm(entry.get("title")),
        norm(entry.get("venue")),
        " ".join(norm(item) for item in as_list(entry.get("domains"))),
        " ".join(norm(item) for item in as_list(entry.get("tags"))),
    ])
    roles = set(as_list(entry.get("source_role")))

    if category_id == "environment_agent_trajectory_data" and "agent benchmarks" in name:
        if {"benchmark", "agent_environment"} <= roles:
            return True
        return any(contains_term(hay, term) for term in [
            "agentbench",
            "appworld",
            "androidworld",
            "browsergym",
            "terminal bench",
            "tau bench",
            "webarena",
            "web arena",
            "osworld",
            "os world",
            "swe bench",
            "swebench",
            "r2e gym",
            "terminal predicate",
            "environment predicate",
        ])

    if category_id == "foundations_and_primers" and "rlhf reward model surveys" in name:
        has_survey_signal = contains_term(label_hay, "survey") or contains_term(label_hay, "reward model survey")
        has_reward_signal = any(contains_term(label_hay, term) for term in [
            "rlhf",
            "reinforcement learning from human feedback",
            "reward model",
            "reward models",
            "reward modeling",
            "human preference",
            "preference learning",
            "preference modeling",
            "preference optimization",
        ])
        return has_survey_signal and has_reward_signal

    if category_id == "judgment_rubric_domain_expert_data" and "legal reasoning" in name:
        return any(contains_term(label_hay, term) for term in [
            "legal",
            "legalbench",
            "law",
            "statute",
            "casehold",
            "contract",
            "court",
            "jurisdiction",
        ])

    if category_id == "judgment_rubric_domain_expert_data" and "financial reasoning" in name:
        return any(contains_term(label_hay, term) for term in [
            "finance",
            "financial",
            "financebench",
            "finqa",
            "tat qa",
            "earnings",
            "filing",
            "financial statement",
        ])

    if category_id == "audit_failure_contamination_verifier_attacks" and "spurious rewards" in name:
        return any(contains_term(hay, term) for term in [
            "spurious",
            "spurious reward",
            "spurious rewards",
            "shortcut",
            "shortcuts",
            "memorization shortcut",
            "reward paradox",
        ])

    return False


def subfield_matches(entry: dict[str, Any], category_id: str | None, subfield: dict[str, Any]) -> bool:
    inferred = infer_subfield(entry, category_id)
    name = subfield.get("name")
    return (
        bool(inferred and inferred.get("name") == name)
        or force_include_subfield(entry, category_id, name)
    )


def subfield_name(entry: dict[str, Any], category_id: str | None = None) -> str:
    subfield = infer_subfield(entry, category_id)
    return subfield.get("name", "Other related work") if subfield else "Other related work"


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
