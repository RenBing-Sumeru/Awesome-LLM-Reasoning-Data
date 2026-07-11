#!/usr/bin/env python3
from __future__ import annotations

import argparse
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

try:
    from . import library
except ImportError:  # direct script execution
    import library

ROOT = Path(__file__).resolve().parents[2]
SECTIONS = [
    ("01_problem", "Problem: What question is this paper trying to answer?"),
    ("02_core_idea", "Core Idea: What is the paper's main contribution?"),
    ("03_method", "Method: How does it work?"),
    ("04_evidence", "Evidence: Why should we believe it?"),
    ("05_novelty", "Novelty: What is new compared with prior work?"),
    ("06_limitations", "Limitations: What are the weaknesses or hidden assumptions?"),
    ("07_usefulness", "Usefulness: How can I use this paper?"),
    ("08_reading_notes", "Reading Notes: What should I remember?"),
    ("09_citation", "Citation"),
]

SECTION_TITLES_CH = {
    "01_problem": "问题：这篇论文想回答什么问题？",
    "02_core_idea": "核心思想：这篇论文的主要贡献是什么？",
    "03_method": "方法：它是怎么工作的？",
    "04_evidence": "证据：为什么应该相信它？",
    "05_novelty": "新意：相比已有工作新在哪里？",
    "06_limitations": "局限：弱点或隐藏假设是什么？",
    "07_usefulness": "用途：我可以如何使用这篇论文？",
    "08_reading_notes": "阅读笔记：应该记住什么？",
    "09_citation": "引用",
}

RICH_SECTION_TEMPLATES = {
    "01_problem": {
        "en": """- Primary source:
- Venue/date:
- Decision boundary: why this paper belongs in the requested topic and what nearby topic it does not cover.
- Concrete problem: what research or engineering gap the paper is trying to close.
- Why it matters for this atlas: which reasoning-data, verifier, reward, environment, benchmark, or audit question it clarifies.
- Data object / evaluation surface: what one sample, episode, task, trace, or benchmark instance contains.
- L4 collection note: what official source and local card evidence make it ready to include without another topic-approval round.
""",
        "ch": """- 官方来源：
- 会议/日期：
- 决策边界：为什么它属于当前主题，以及它不覆盖的相邻主题是什么。
- 具体问题：它想解决哪个研究或工程缺口。
- 对本 atlas 的价值：它澄清了哪类 reasoning data、verifier、reward、environment、benchmark 或 audit 问题。
- 数据对象 / 评测面：一个样本、episode、任务、轨迹或 benchmark instance 里包含什么。
- L4 收录说明：哪些官方来源和本地 card 证据足以直接纳入，不再等待选题确认。
""",
    },
    "02_core_idea": {
        "en": """- One-sentence contribution:
- Core mechanism:
- Data object / evaluation surface:
- Feedback contract: what judges, verifies, scores, or terminates the behavior.
- Direction label: the short research direction this paper represents.
- What to compare against: closest datasets, benchmarks, methods, or failure papers already in the atlas.
""",
        "ch": """- 一句话贡献：
- 核心机制：
- 数据对象 / 评测面：
- 反馈契约：由什么系统判断、验证、打分或终止该行为。
- 方向标签：这篇论文代表的短研究方向名称。
- 应该对比什么：atlas 中最接近的数据集、benchmark、方法或 failure paper。
""",
    },
    "03_method": {
        "en": """- Inputs:
- Pipeline:
- Outputs:
- Verifier / reward / judge / environment:
- Training/evaluation use: SFT, distillation, preference learning, reward modeling, PRM, RLVR, agent training, evaluation, audit, or TTC.
- Artifacts to verify: paper, venue page, code, data, project, Hugging Face, DOI, benchmark harness, or license.
- Reproducibility notes: split, budget, sampling, scaffold, hidden tests, data lineage, and contamination controls.
""",
        "ch": """- 输入：
- 流程：
- 输出：
- Verifier / reward / judge / environment：
- 训练/评测用途：SFT、distillation、preference learning、reward modeling、PRM、RLVR、agent training、evaluation、audit 或 TTC。
- 需要核验的 artifact：论文、会议页、代码、数据、项目页、Hugging Face、DOI、benchmark harness 或 license。
- 可复现性备注：split、预算、采样、scaffold、hidden tests、data lineage 和 contamination controls。
""",
    },
    "05_novelty": {
        "en": """- Prior work baseline:
- What changes:
- Why this is a 2026 direction signal:
- Top-conference quality signal:
- What is not new:
- What to inspect before reuse:
""",
        "ch": """- 既有工作基线：
- 新变化：
- 为什么它是 2026 方向信号：
- 顶会质量信号：
- 哪些部分并不新：
- 复用前需要检查什么：
""",
    },
}

STATUS_STATES = {"new", "edited", "reviewed"}
SEARCH_STATUSES = {"candidate", "rejected", "promoted"}
SEARCH_STATUS_LABELS = {
    "candidate": "纳入候选池",
    "rejected": "不纳入",
    "promoted": "纳入正式池",
}
VALID_LEVELS = [
    "L0_seeded",
    "L1_link_verified",
    "L2_metadata_verified",
    "L3_card_source_ready",
    "L4_chinese_review_ready",
    "L5_review_ready",
    "L6_reviewed",
]
VALID_LEVEL_LABELS = {
    "L0_seeded": "L0 候选论文",
    "L1_link_verified": "L1 原文链接存在",
    "L2_metadata_verified": "L2 基础元数据存在",
    "L3_card_source_ready": "L3 英文卡片源存在",
    "L4_chinese_review_ready": "L4 中文 review 材料存在",
    "L5_review_ready": "L5 已人工标注",
    "L6_reviewed": "L6 已审阅",
}
VALID_POOL_LABELS = {
    "needs_annotation": "L4 中文 Review",
    "annotated": "L5 已人工标注",
    "l6": "L6 已审阅",
    "invalid": "不合法论文池",
}
PRIMARY_LINK_KEYS = ("paper", "arxiv", "venue", "openreview", "acl", "pmlr", "cvf", "doi")
HEADER_ZH_REQUIRED_FIELDS = [
    ("one_line_summary_ch", "一句话评价"),
    ("reading_priority_ch", "阅读优先级"),
    ("paper_type_ch", "论文类型"),
    ("best_for_ch", "适合读者"),
    ("confidence_ch", "置信度"),
    ("authors_ch", "作者显示"),
]
READING_PRIORITY_OPTIONS = ["必读", "可读", "暂缓", "不推荐"]
DEFAULT_READING_PRIORITY_CH = "可读"
def project_root(root: Path | str | None = None) -> Path:
    return Path(root) if root is not None else ROOT


def paper_cards_root(root: Path | str | None = None) -> Path:
    return project_root(root) / "paper_cards"


def now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def load_entries(root: Path | str | None = None) -> dict[str, dict]:
    cards = library.load_cards(root)
    return {
        entry_id: {**card["paper"], "category": list(card["paper"].get("category_ids") or [])}
        for entry_id, card in cards.items()
    }


def card_source_dir(entry_id: str, root: Path | str | None = None) -> Path:
    return library.card_dir(entry_id, root) / "sources"


def expected_files(entry_id: str, root: Path | str | None = None) -> list[Path]:
    base = card_source_dir(entry_id, root)
    paths: list[Path] = []
    for key, _title in SECTIONS:
        paths.append(base / f"{key}.md")
        paths.append(base / f"{key}_ch.md")
    return paths


def source_file(entry_id: str, key: str, lang: str, root: Path | str | None = None) -> Path:
    suffix = "_ch" if lang == "ch" else ""
    return card_source_dir(entry_id, root) / f"{key}{suffix}.md"


def read_section(entry_id: str, key: str, lang: str, root: Path | str | None = None) -> str:
    return source_file(entry_id, key, lang, root).read_text(encoding="utf-8").strip()


def check_card(entry_id: str, root: Path | str | None = None) -> list[str]:
    errors: list[str] = []
    base = card_source_dir(entry_id, root)
    if not base.exists():
        return [f"{entry_id}: missing source directory {base.relative_to(project_root(root))}"]
    for path in expected_files(entry_id, root):
        rel = path.relative_to(project_root(root))
        if not path.exists():
            errors.append(f"{entry_id}: missing {rel}")
        elif not path.read_text(encoding="utf-8").strip():
            errors.append(f"{entry_id}: empty {rel}")
    if library.card_dir(entry_id, root).exists():
        card = library.load_card(entry_id, root)
        errors.extend(library.card_header_errors(entry_id, card["header_zh"], card["institutions"], root))
    return errors


def link_parts(entry: dict) -> list[str]:
    artifacts = entry.get("artifacts") or {}
    labels = [
        ("paper", "Paper"),
        ("arxiv", "arXiv"),
        ("venue", "Venue"),
        ("openreview", "OpenReview"),
        ("acl", "ACL"),
        ("pmlr", "PMLR"),
        ("cvf", "CVF"),
        ("doi", "DOI"),
        ("code", "Code"),
        ("data", "Data"),
        ("project", "Project"),
        ("huggingface", "Hugging Face"),
        ("bibtex", "BibTeX"),
    ]
    out: list[str] = []
    seen: set[str] = set()
    for key, label in labels:
        value = artifacts.get(key)
        if value and value not in seen:
            out.append(f"[{label}]({value})")
            seen.add(value)
    return out


def frontmatter(
    entry: dict,
    lang: str,
    root: Path | str | None = None,
    records: dict | None = None,
) -> list[str]:
    title = entry.get("title") or entry.get("id") or "unknown"
    entry_id = str(entry.get("id"))
    authors = entry.get("authors") or []
    author_text = ", ".join(str(author) for author in authors) if authors else "unknown"
    links = " · ".join(link_parts(entry)) or "none"
    records = records or {}
    header_record = records.get("header_zh")
    institution_record_value = records.get("institutions")
    if lang == "ch":
        header = header_record if header_record is not None else header_zh_record(entry_id, root)
        author_text_ch = header.get("authors_ch") or (", ".join(str(author) for author in authors) if authors else "未知")
        lines = [
            f"# 论文卡片：{title}",
            "",
            f"> **一句话评价：** {header.get('one_line_summary_ch') or '待填写'}",
            f"> **阅读优先级：** {header.get('reading_priority_ch') or '待复核'}",
            f"> **论文类型：** {header.get('paper_type_ch') or '待选择'}",
            f"> **知识点分类：** {category_labels_for_entry(entry, header, root)}",
            f"> **适合读者：** {header.get('best_for_ch') or '待填写'}",
            f"> **置信度：** {header.get('confidence_ch') or chinese_confidence(audit_confidence(entry))}",
            f"> **年份 / 来源：** {entry.get('year') or 'unknown'} · {entry.get('venue') or 'unknown'}",
            f"> **作者：** {author_text_ch}",
            f"> **机构：** {institution_text(entry_id, lang, root, institution_record_value)}",
            f"> **链接：** {links}",
        ]
        return lines + ["", "---", ""]
    lines = [
        f"# Paper Card: {title}",
        "",
        f"> **One-sentence review:** {entry.get('one_line_summary') or entry.get('one_line') or 'unknown'}",
        f"> **Reading priority:** {entry.get('reading_priority') or 'needs review'}",
        f"> **Paper type:** {entry.get('paper_type') or 'needs review'}",
        f"> **Best for:** {entry.get('best_for') or 'needs review'}",
        f"> **Confidence:** {entry.get('confidence') or 'needs review'}",
        f"> **Year/source:** {entry.get('year') or 'unknown'} · {entry.get('venue') or 'unknown'}",
        f"> **Authors:** {author_text}",
        f"> **Institutions:** {institution_text(entry_id, lang, root, institution_record_value)}",
        f"> **Links:** {links}",
    ]
    return lines + ["", "---", ""]


def assemble_card(
    entry: dict,
    lang: str,
    root: Path | str | None = None,
    records: dict | None = None,
) -> str:
    if lang not in {"en", "ch"}:
        raise ValueError("lang must be 'en' or 'ch'")
    entry_id = str(entry.get("id"))
    lines = frontmatter(entry, lang, root, records)
    for index, (key, title) in enumerate(SECTIONS, 1):
        heading = SECTION_TITLES_CH[key] if lang == "ch" else title
        lines.append(f"## {index}. {heading}")
        lines.append("")
        lines.append(read_section(entry_id, key, lang, root))
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def category_options(root: Path | str | None = None) -> list[dict]:
    path = library.library_root(root) / "categories.yaml"
    return library.category_options(root) if path.exists() else []


def category_title_map(root: Path | str | None = None) -> dict[str, str]:
    return {item["id"]: item["title"] for item in category_options(root)}


def clean_category_ids(
    value: Any,
    label: str = "知识点分类",
    allow_empty: bool = True,
    root: Path | str | None = None,
) -> list[str]:
    category_ids = value if isinstance(value, list) else []
    cleaned = [str(item).strip() for item in category_ids if str(item).strip()]
    if not cleaned and allow_empty:
        return []
    if len(cleaned) > 2:
        raise ValueError(f"{label}最多保留两个标签")
    if len(set(cleaned)) != len(cleaned):
        raise ValueError(f"{label}不能重复")
    if not cleaned and allow_empty:
        return []
    if not cleaned:
        raise ValueError(f"{label}至少保留一个标签")
    known = {item["id"] for item in category_options(root)}
    if any(category_id not in known for category_id in cleaned):
        raise ValueError(f"{label}必须是 Card 分类目录中的合法知识点")
    return cleaned


def category_details(category_ids: list[str], root: Path | str | None = None) -> list[dict]:
    by_id = {item["id"]: item for item in category_options(root)}
    return [by_id[category_id] for category_id in category_ids if category_id in by_id]


def category_labels_for_entry(entry: dict, header: dict | None = None, root: Path | str | None = None) -> str:
    title_map = category_title_map(root)
    category_ids = (header or {}).get("category_ids") or entry.get("category") or []
    labels = [title_map.get(str(category_id), str(category_id)) for category_id in category_ids if str(category_id).strip()]
    return " · ".join(labels) if labels else "待选择"


def load_header_zh(root: Path | str | None = None) -> dict:
    cards = library.load_cards(root)
    return {"schema_version": 1, "updated_at": None, "entries": {entry_id: card["header_zh"] for entry_id, card in cards.items()}}


def clean_header_zh_record(record: dict, root: Path | str | None = None) -> dict:
    if not isinstance(record, dict):
        record = {}
    allowed_text = [
        "one_line_summary_ch",
        "reading_priority_ch",
        "paper_type_ch",
        "best_for_ch",
        "confidence_ch",
        "authors_ch",
    ]
    cleaned = {key: str(record.get(key) or "").strip() for key in allowed_text}
    if not cleaned["reading_priority_ch"]:
        cleaned["reading_priority_ch"] = DEFAULT_READING_PRIORITY_CH
    cleaned["category_ids"] = clean_category_ids(record.get("category_ids"), allow_empty=True, root=root)
    cleaned["updated_at"] = now_iso()
    return cleaned


def save_header_zh(entry_id: str, record: dict, root: Path | str | None = None) -> dict:
    entries = load_entries(root)
    if entry_id not in entries:
        raise ValueError(f"unknown entry_id: {entry_id}")
    cleaned = clean_header_zh_record(record, root)
    library.save_card_record(entry_id, "header_zh", cleaned, root)
    return cleaned


def header_zh_record(entry_id: str, root: Path | str | None = None) -> dict:
    record = dict(load_header_zh(root).get("entries", {}).get(entry_id) or {})
    if not str(record.get("reading_priority_ch") or "").strip():
        record["reading_priority_ch"] = DEFAULT_READING_PRIORITY_CH
    return record


def audit_confidence(entry: dict) -> str:
    audit = entry.get("audit") if isinstance(entry.get("audit"), dict) else {}
    verification = entry.get("verification") if isinstance(entry.get("verification"), dict) else {}
    return entry.get("confidence") or audit.get("confidence") or verification.get("confidence") or "needs review"


def chinese_confidence(value: str) -> str:
    return {
        "high": "高",
        "medium": "中",
        "low": "低",
        "needs review": "待复核",
        "unknown": "未知",
    }.get(str(value or "").strip().lower(), str(value or "待复核"))


def load_institutions(root: Path | str | None = None) -> dict:
    cards = library.load_cards(root)
    return {"schema_version": 1, "updated_at": None, "entries": {entry_id: card["institutions"] for entry_id, card in cards.items()}}


def clean_institution_record(
    institutions: list[str] | tuple[str, ...] | None,
    has_more: bool,
    no_institution: bool,
) -> dict:
    cleaned = []
    seen = set()
    if not no_institution:
        for item in institutions or []:
            name = str(item).strip()
            if name and name not in seen:
                cleaned.append(name)
                seen.add(name)
    return {
        "institutions": cleaned,
        "has_more": bool(has_more and not no_institution),
        "no_institution": bool(no_institution),
        "updated_at": now_iso(),
    }


def save_institutions(
    entry_id: str,
    institutions: list[str] | tuple[str, ...] | None,
    has_more: bool = False,
    no_institution: bool = False,
    root: Path | str | None = None,
) -> dict:
    entries = load_entries(root)
    if entry_id not in entries:
        raise ValueError(f"unknown entry_id: {entry_id}")
    record = clean_institution_record(institutions, has_more, no_institution)
    library.save_card_record(entry_id, "institutions", record, root)
    return record


def institution_record(entry_id: str, root: Path | str | None = None) -> dict:
    return load_institutions(root).get("entries", {}).get(entry_id) or {
        "institutions": [],
        "has_more": False,
        "no_institution": False,
    }


def institution_text(
    entry_id: str,
    lang: str,
    root: Path | str | None = None,
    record: dict | None = None,
) -> str:
    record = record if record is not None else institution_record(entry_id, root)
    if record.get("no_institution"):
        return "没有机构" if lang == "ch" else "No institution"
    names = [str(item).strip() for item in record.get("institutions") or [] if str(item).strip()]
    if not names:
        return "机构未填写" if lang == "ch" else "Not filled"
    if record.get("has_more"):
        return " · ".join(names + (["等多个机构"] if lang == "ch" else ["and more"]))
    return " · ".join(names)


def load_status(root: Path | str | None = None) -> dict:
    cards = library.load_cards(root)
    return {"schema_version": 1, "updated_at": None, "entries": {entry_id: card["review"] for entry_id, card in cards.items()}}


def update_status(
    entry_id: str,
    state: str,
    root: Path | str | None = None,
) -> dict:
    if state not in STATUS_STATES:
        raise ValueError(f"invalid state: {state}")
    timestamp = now_iso()
    record = dict(library.load_card(entry_id, root)["review"])
    record["state"] = state
    record["updated_at"] = timestamp
    if state == "reviewed":
        record["reviewed_at"] = timestamp
    if state in {"new", "edited"}:
        record.pop("reviewed_at", None)
    library.save_card_record(entry_id, "review", record, root)
    return load_status(root)


def load_search_queue(root: Path | str | None = None) -> dict:
    cards = library.load_cards(root)
    return {"schema_version": 1, "updated_at": None, "entries": {entry_id: card["queue"] for entry_id, card in cards.items()}}


def has_text(value: Any) -> bool:
    if isinstance(value, str):
        return bool(value.strip())
    if isinstance(value, list):
        return any(has_text(item) for item in value)
    if isinstance(value, tuple):
        return any(has_text(item) for item in value)
    return value is not None and bool(str(value).strip())


def primary_link(entry: dict) -> str:
    artifacts = entry.get("artifacts") if isinstance(entry.get("artifacts"), dict) else {}
    for key in PRIMARY_LINK_KEYS:
        value = artifacts.get(key)
        if has_text(value):
            return str(value).strip()
    return ""


def section_presence_errors(entry_id: str, lang: str, root: Path | str | None = None) -> list[str]:
    errors: list[str] = []
    base = card_source_dir(entry_id, root)
    if not base.exists():
        try:
            relative = base.relative_to(project_root(root)).as_posix()
        except ValueError:
            relative = base.as_posix()
        return [f"缺少卡片源目录：{relative}"]
    for key, _title in SECTIONS:
        path = source_file(entry_id, key, lang, root)
        label = "中文 section" if lang == "ch" else "英文 section"
        if not path.exists():
            errors.append(f"缺少{label}：{path.name}")
        elif not path.read_text(encoding="utf-8").strip():
            errors.append(f"缺少{label}文本：{path.name}")
    return errors


def header_zh_presence_errors(
    entry_id: str,
    root: Path | str | None = None,
    record: dict | None = None,
) -> list[str]:
    record = record if record is not None else header_zh_record(entry_id, root)
    errors = [
        f"缺少中文头字段：{label}"
        for key, label in HEADER_ZH_REQUIRED_FIELDS
        if not has_text(record.get(key))
    ]
    priority = str(record.get("reading_priority_ch") or "").strip()
    if priority and priority not in READING_PRIORITY_OPTIONS:
        errors.append(f"阅读优先级只能选择：{'、'.join(READING_PRIORITY_OPTIONS)}")
    if not has_text(record.get("category_ids")):
        errors.append("缺少中文头字段：知识点分类")
    return errors


def institution_presence_errors(
    entry_id: str,
    root: Path | str | None = None,
    record: dict | None = None,
) -> list[str]:
    record = record if record is not None else institution_record(entry_id, root)
    if record.get("no_institution"):
        return []
    if has_text(record.get("institutions")):
        return []
    return ["缺少机构字段：填写至少一个机构，或勾选没有机构"]


def review_annotation_presence_errors(
    entry_id: str,
    root: Path | str | None = None,
    record: dict | None = None,
) -> list[str]:
    record = record if record is not None else load_search_queue(root).get("entries", {}).get(entry_id) or {}
    manual = record.get("manual_annotation") if isinstance(record.get("manual_annotation"), dict) else {}
    errors: list[str] = []
    status = str(manual.get("search_status") or "").strip()
    if not status:
        errors.append("缺少人工标注：判决状态")
    elif status not in SEARCH_STATUSES:
        errors.append(f"判决状态只能选择：{'、'.join(SEARCH_STATUS_LABELS[status] for status in ['promoted', 'candidate', 'rejected'])}")
    if not has_text(manual.get("decision_reason")):
        errors.append("缺少人工标注：一句话描述理由")
    return errors


def valid_report(
    entry_id: str,
    root: Path | str | None = None,
    entry: dict | None = None,
    records: dict | None = None,
) -> dict:
    entries = load_entries(root) if entry is None else {}
    entry = entry or entries.get(entry_id)
    timestamp = now_iso()
    if not entry:
        return {
            "entry_id": entry_id,
            "ok": False,
            "review_ready": False,
            "level": "L0_seeded",
            "level_label": VALID_LEVEL_LABELS["L0_seeded"],
            "pool": "invalid",
            "pool_label": VALID_POOL_LABELS["invalid"],
            "errors": [f"未知论文条目：{entry_id}"],
            "blocking_errors": [f"未知论文条目：{entry_id}"],
            "checked_at": timestamp,
        }

    errors: list[str] = []
    blocking_errors: list[str] = []
    metadata_errors: list[str] = []
    for key, label in [("id", "entry_id"), ("title", "题目"), ("year", "年份"), ("venue", "来源"), ("status", "项目状态")]:
        if not has_text(entry.get(key)):
            metadata_errors.append(f"缺少基础字段：{label}")
    if not primary_link(entry):
        metadata_errors.append("缺少原文链接：paper/arXiv/venue/DOI 至少一个")
    errors.extend(metadata_errors)
    blocking_errors.extend(metadata_errors)

    level = "L0_seeded"
    if primary_link(entry):
        level = "L1_link_verified"
    if not metadata_errors:
        level = "L2_metadata_verified"

    english_errors = section_presence_errors(entry_id, "en", root)
    errors.extend(english_errors)
    blocking_errors.extend(english_errors)
    if not metadata_errors and not english_errors:
        level = "L3_card_source_ready"

    chinese_errors = section_presence_errors(entry_id, "ch", root)
    records = records or {}
    header_errors = header_zh_presence_errors(
        entry_id,
        root,
        (records.get("header_zh") or {}).get(entry_id),
    )
    institution_errors = institution_presence_errors(
        entry_id,
        root,
        (records.get("institutions") or {}).get(entry_id),
    )
    errors.extend(chinese_errors)
    errors.extend(header_errors)
    errors.extend(institution_errors)
    if not metadata_errors and not english_errors and not chinese_errors and not header_errors and not institution_errors:
        level = "L4_chinese_review_ready"

    annotation_errors = review_annotation_presence_errors(
        entry_id,
        root,
        (records.get("queue") or {}).get(entry_id),
    )
    errors.extend(annotation_errors)
    if (
        not metadata_errors
        and not english_errors
        and not chinese_errors
        and not header_errors
        and not institution_errors
        and not annotation_errors
    ):
        level = "L5_review_ready"

    status_record = (records.get("review") or {}).get(entry_id) or load_status(root).get("entries", {}).get(entry_id) or {}
    if level == "L5_review_ready" and status_record.get("reviewed_at"):
        level = "L6_reviewed"

    pool = "l6" if level == "L6_reviewed" else "annotated" if level == "L5_review_ready" else "invalid" if blocking_errors else "needs_annotation"
    review_ready = level in {"L5_review_ready", "L6_reviewed"}
    return {
        "entry_id": entry_id,
        "ok": level == "L6_reviewed" and not errors,
        "review_ready": review_ready,
        "level": level,
        "level_label": VALID_LEVEL_LABELS[level],
        "pool": pool,
        "pool_label": VALID_POOL_LABELS[pool],
        "errors": errors,
        "blocking_errors": blocking_errors,
        "checked_at": timestamp,
    }


def save_valid_report(report: dict, root: Path | str | None = None) -> dict:
    return {
        "schema_version": 1,
        "updated_at": report.get("checked_at") or now_iso(),
        "entries": {report["entry_id"]: report},
    }


def init_card_source(entry_id: str, root: Path | str | None = None, overwrite: bool = False) -> list[Path]:
    entries = load_entries(root)
    if entry_id not in entries:
        raise ValueError(f"unknown entry_id: {entry_id}")
    base = card_source_dir(entry_id, root)
    base.mkdir(parents=True, exist_ok=True)
    created = []
    for key, title in SECTIONS:
        en = base / f"{key}.md"
        ch = base / f"{key}_ch.md"
        template = RICH_SECTION_TEMPLATES.get(key)
        if overwrite or not en.exists():
            text = template["en"] if template else f"Fill this section: {title}\n"
            library.atomic_write_text(en, text.rstrip() + "\n")
            created.append(en)
        if overwrite or not ch.exists():
            text = template["ch"] if template else f"填写本节：{SECTION_TITLES_CH.get(key, title)}\n"
            library.atomic_write_text(ch, text.rstrip() + "\n")
            created.append(ch)
    existing_header = load_header_zh(root).get("entries", {}).get(entry_id) or {}
    if not str(existing_header.get("reading_priority_ch") or "").strip():
        save_header_zh(entry_id, {"reading_priority_ch": DEFAULT_READING_PRIORITY_CH}, root=root)
    update_status(entry_id, "new", root=root)
    return created


def source_entry_ids(root: Path | str | None = None) -> list[str]:
    return sorted(library.load_cards(root))


def check_all(root: Path | str | None = None) -> dict[str, list[str]]:
    return {entry_id: check_card(entry_id, root) for entry_id in source_entry_ids(root)}


def search_report(root: Path | str | None = None) -> str:
    queue = load_search_queue(root)
    lines = ["# Paper Card Manual Annotations", ""]
    grouped: dict[str, list[tuple[str, dict]]] = {status: [] for status in sorted(SEARCH_STATUSES)}
    grouped["unannotated"] = []
    for entry_id, record in queue.get("entries", {}).items():
        manual = record.get("manual_annotation") if isinstance(record.get("manual_annotation"), dict) else {}
        status = str(manual.get("search_status") or "").strip() or "unannotated"
        grouped.setdefault(status, []).append((entry_id, record))
    for status, records in grouped.items():
        lines += [f"## {status}", ""]
        if not records:
            lines += ["- None", ""]
            continue
        for entry_id, record in sorted(records):
            manual = record.get("manual_annotation") if isinstance(record.get("manual_annotation"), dict) else {}
            lines.append(f"- `{entry_id}` · {manual.get('decision_reason') or ''}")
        lines.append("")
    return "\n".join(lines)


def cmd_check(args: argparse.Namespace) -> int:
    results = check_all(args.root)
    errors = [error for entry_errors in results.values() for error in entry_errors]
    if not results:
        print("no paper card sources found")
    for entry_id, entry_errors in results.items():
        if entry_errors:
            for error in entry_errors:
                print(f"ERROR: {error}")
        else:
            print(f"ok: {entry_id}")
    return 1 if errors else 0


def cmd_build(args: argparse.Namespace) -> int:
    entries = load_entries(args.root)
    entry = entries.get(args.entry)
    if not entry:
        print(f"unknown entry_id: {args.entry}", file=sys.stderr)
        return 1
    print(assemble_card(entry, args.lang, args.root), end="")
    return 0


def cmd_init(args: argparse.Namespace) -> int:
    created = init_card_source(args.entry, root=args.root, overwrite=args.overwrite)
    for path in created:
        print(path)
    return 0


def cmd_search_report(args: argparse.Namespace) -> int:
    print(search_report(args.root), end="")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Manage bilingual paper-card sources.")
    parser.add_argument("--root", type=Path, default=ROOT)
    sub = parser.add_subparsers(dest="command", required=True)

    check = sub.add_parser("check")
    check.set_defaults(func=cmd_check)

    build = sub.add_parser("build")
    build.add_argument("--entry", required=True)
    build.add_argument("--lang", choices=["en", "ch"], required=True)
    build.set_defaults(func=cmd_build)

    init = sub.add_parser("init")
    init.add_argument("--entry", required=True)
    init.add_argument("--overwrite", action="store_true")
    init.set_defaults(func=cmd_init)

    report = sub.add_parser("search-report")
    report.set_defaults(func=cmd_search_report)
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    try:
        return args.func(args)
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
