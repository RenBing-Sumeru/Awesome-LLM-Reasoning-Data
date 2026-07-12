#!/usr/bin/env python3
"""Export Card-local V2 papers into the four-file Paper Card package format."""

from __future__ import annotations

import argparse
import json
import re
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import quote

import yaml


ROOT = Path(__file__).resolve().parents[2]
LIBRARY = ROOT / "paper_cards" / "library"
CARDS = LIBRARY / "cards"

SECTION_KEYS = (
    "01_problem",
    "02_core_idea",
    "03_method",
    "04_evidence",
    "05_novelty",
    "06_limitations",
    "07_usefulness",
    "08_reading_notes",
    "09_citation",
)

EN_HEADINGS = (
    "Problem: What question is this paper trying to answer?",
    "Core Idea: What is the paper's main contribution?",
    "Method: How does it work?",
    "Evidence: Why should we believe it?",
    "Novelty: What is new compared with prior work?",
    "Limitations: What are the weaknesses or hidden assumptions?",
    "Usefulness: How can I use this paper?",
    "Reading Notes: What should I remember?",
    "Citation",
)

ZH_HEADINGS = (
    "问题：这篇论文想回答什么问题？",
    "核心思想：这篇论文的主要贡献是什么？",
    "方法：它是怎么工作的？",
    "证据：为什么应该相信它？",
    "新意：相比已有工作新在哪里？",
    "局限：弱点或隐藏假设是什么？",
    "用途：我可以如何使用这篇论文？",
    "阅读笔记：应该记住什么？",
    "引用",
)

EN_HEADER_LABELS = (
    "One-sentence review",
    "Reading priority",
    "Paper type",
    "Best for",
    "Confidence",
    "Year/source",
    "Authors",
    "Institutions",
    "Links",
    "Ask the Atlas",
)

ZH_HEADER_LABELS = (
    "一句话评价",
    "阅读优先级",
    "论文类型",
    "知识点分类",
    "适合读者",
    "置信度",
    "年份 / 来源",
    "作者",
    "机构",
    "链接",
    "Ask the Atlas",
)

SPECIFIC_MARKERS = {
    "en": (
        "Paper-specific backup note:",
        "Paper-specific evidence:",
        "Paper-specific limitations:",
        "Paper-specific use note:",
        "Paper-specific reading note:",
    ),
    "zh": (
        "论文特定补充：",
        "论文特定证据：",
        "论文特定局限：",
        "论文特定用途：",
        "论文特定阅读笔记：",
        "原中文引用备注：",
    ),
}


def load_yaml(path: Path) -> dict:
    with path.open(encoding="utf-8") as handle:
        return yaml.safe_load(handle) or {}


def load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as handle:
        return json.load(handle)


def scalar(value, fallback: str) -> str:
    if value is None:
        return fallback
    text = str(value).strip()
    return text if text else fallback


def sentence(value, fallback: str) -> str:
    text = scalar(value, fallback)
    if text == fallback or text.endswith((".", "!", "?", "。", "！", "？")):
        return text
    return text + "."


def humanize(values) -> str:
    if not values:
        return "needs review"
    if not isinstance(values, list):
        values = [values]
    return " / ".join(str(value).replace("_", " ") for value in values)


def strip_template_prefix(line: str) -> str:
    stripped = line.strip()
    if not stripped.startswith("- "):
        return stripped
    body = stripped[2:]
    labels = (
        "Primary source", "Venue/date", "Decision boundary", "Concrete problem",
        "Why it matters for this atlas", "Data object / evaluation surface",
        "L4 collection note", "One-sentence contribution", "Core mechanism",
        "Feedback contract", "Direction label", "What to compare against",
        "Inputs", "Pipeline", "Outputs", "Verifier / reward / judge / environment",
        "Training/evaluation use", "Artifacts to verify", "Reproducibility notes",
        "Prior work baseline", "What changes", "Why this is a 2026 direction signal",
        "Top-conference quality signal", "What is not new", "What to inspect before reuse",
        "官方来源", "会议/日期", "决策边界", "具体问题", "对本 atlas 的价值",
        "数据对象 / 评测面", "L4 收录说明", "一句话贡献", "核心机制",
        "反馈契约", "方向标签", "应该对比什么", "输入", "流程", "输出",
        "Verifier / reward / judge / environment", "训练/评测用途",
        "需要核验的 artifact", "可复现性备注", "既有工作基线", "新变化",
        "为什么它是 2026 方向信号", "顶会质量信号", "哪些部分并不新",
        "复用前需要检查什么",
    )
    for label in labels:
        for separator in (": ", "："):
            prefix = label + separator
            if body.startswith(prefix):
                return body[len(prefix):].strip()
    return stripped


def normalize_section(text: str, language: str, citation: bool = False) -> str:
    text = text.replace("\r\n", "\n").strip()
    if citation:
        return text

    for marker in SPECIFIC_MARKERS[language]:
        if marker in text:
            tail = text.split(marker, 1)[1].strip()
            if tail:
                text = tail
                break

    blocks = re.split(r"\n\s*\n", text)
    cleaned: list[str] = []
    seen: set[str] = set()
    for block in blocks:
        lines = [strip_template_prefix(line) for line in block.splitlines()]
        lines = [
            line for line in lines if line and "L4 collection note" not in line
            and "L4 收录说明" not in line and "Card-local" not in line
        ]
        if any(line.startswith("- ") for line in lines):
            block = "\n".join(lines).strip()
        else:
            block = " ".join(lines).strip()
        block = re.sub(r"\.{2,}", ".", block)
        key = re.sub(r"\s+", " ", block).strip().lower()
        if not key or key in seen:
            continue
        seen.add(key)
        cleaned.append(block)

    # The package gold sample uses short, readable sections rather than the
    # internal collection template. Keep the two strongest source-backed
    # blocks and leave the detailed audit record in the Card-local source.
    return "\n\n".join(cleaned[:2]).strip()


def category_titles() -> dict[str, str]:
    raw = load_yaml(LIBRARY / "categories.yaml")
    return {item["id"]: item["title"] for item in raw.get("paper_categories", [])}


def links_line(artifacts: dict) -> str:
    fields = (
        ("Paper", "paper"),
        ("DOI", "doi"),
        ("Code", "code"),
        ("Data", "data"),
        ("Project", "project"),
        ("Venue", "venue"),
        ("OpenReview", "openreview"),
        ("Hugging Face", "huggingface"),
    )
    result: list[str] = []
    seen: set[str] = set()
    for label, key in fields:
        url = artifacts.get(key)
        if not url or url in seen:
            continue
        seen.add(url)
        result.append(f"[{label}]({url})")
    return " · ".join(result) if result else "needs review"


def ask_links(entry_id: str, chinese: bool = False) -> str:
    base = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/"
    labels = (("解释", "explain"), ("审计", "audit"), ("对比", "compare")) if chinese else (
        ("Explain", "explain"),
        ("Audit", "audit"),
        ("Compare", "compare"),
    )
    return " · ".join(
        f"[{label}]({base}?entry={quote(entry_id)}&mode={mode})" for label, mode in labels
    )


def english_priority(chinese: str) -> str:
    return {
        "必读": "must read",
        "可读": "worth reading",
        "暂缓": "defer",
        "不推荐": "not recommended",
    }.get(chinese, "needs review")


def english_confidence(chinese: str, paper: dict) -> str:
    mapped = {"高": "high", "中高": "medium-high", "中": "medium", "低": "low"}.get(chinese)
    return mapped or scalar((paper.get("audit") or {}).get("confidence"), "needs review")


def temporary_bibtex(paper: dict) -> str:
    authors = " and ".join(paper.get("authors") or [])
    key = re.sub(r"[^a-z0-9]+", "_", paper["id"].lower()).strip("_")
    venue = scalar(paper.get("venue"), "needs review")
    return (
        "Temporary citation, to be replaced by official BibTeX after human review:\n\n"
        "```bibtex\n"
        f"@misc{{{key},\n"
        f"  title = {{{paper['title']}}},\n"
        f"  author = {{{authors}}},\n"
        f"  year = {{{paper.get('year', 'needs review')}}},\n"
        f"  howpublished = {{{venue}}}\n"
        "}\n```"
    )


def citation_section(card_dir: Path, paper: dict, language: str) -> str:
    suffix = "_ch" if language == "zh" else ""
    raw = (card_dir / "sources" / f"09_citation{suffix}.md").read_text(encoding="utf-8")
    match = re.search(r"```bibtex\s*(.*?)```", raw, re.DOTALL | re.IGNORECASE)
    if match:
        prefix = "临时引用，人工 review 后替换为官方 BibTeX：" if language == "zh" else (
            "Temporary citation, to be replaced by official BibTeX after human review:"
        )
        return f"{prefix}\n\n```bibtex\n{match.group(1).strip()}\n```"
    generated = temporary_bibtex(paper)
    if language == "zh":
        generated = generated.replace(
            "Temporary citation, to be replaced by official BibTeX after human review:",
            "临时引用，人工 review 后替换为官方 BibTeX：",
        )
    return generated


def read_sections(card_dir: Path, paper: dict, language: str) -> list[str]:
    sections: list[str] = []
    suffix = "_ch" if language == "zh" else ""
    for index, key in enumerate(SECTION_KEYS):
        if key == "09_citation":
            sections.append(citation_section(card_dir, paper, language))
            continue
        path = card_dir / "sources" / f"{key}{suffix}.md"
        raw = path.read_text(encoding="utf-8")
        normalized = raw.strip() if key == "08_reading_notes" else normalize_section(raw, language)
        sections.append(normalized or ("待人工审核" if language == "zh" else "needs review"))
    return sections


def render_card(
    paper: dict,
    header: dict,
    institutions: list[str],
    categories: dict[str, str],
    sections: list[str],
    language: str,
) -> str:
    entry_id = paper["id"]
    title = paper["title"]
    authors = ", ".join(paper.get("authors") or []) or "needs review"
    institution_text = " · ".join(institutions) if institutions else (
        "待人工审核" if language == "zh" else "needs review"
    )
    year_source = f"{paper.get('year', 'needs review')} · {scalar(paper.get('venue'), 'needs review')}"
    links = links_line(paper.get("artifacts") or {})

    if language == "en":
        values = (
            sentence(paper.get("one_line_summary") or paper.get("one_line"), "needs review"),
            english_priority(header.get("reading_priority_ch", "")),
            humanize(paper.get("source_role")) + " paper",
            "Readers interested in " + humanize(paper.get("domains")) + ".",
            english_confidence(header.get("confidence_ch", ""), paper),
            year_source,
            authors,
            institution_text,
            links,
            ask_links(entry_id),
        )
        top = [f"# Paper Card: {title}", ""]
        top.extend(f"> **{label}:** {value}" for label, value in zip(EN_HEADER_LABELS, values))
        headings = EN_HEADINGS
    else:
        category_text = " · ".join(
            categories.get(category_id, category_id) for category_id in paper.get("category_ids") or []
        ) or "待人工审核"
        values = (
            sentence(header.get("one_line_summary_ch"), "待人工审核"),
            scalar(header.get("reading_priority_ch"), "待人工审核"),
            scalar(header.get("paper_type_ch"), "待人工审核"),
            category_text,
            scalar(header.get("best_for_ch"), "待人工审核"),
            scalar(header.get("confidence_ch"), "待人工审核"),
            year_source,
            scalar(header.get("authors_ch"), authors),
            institution_text,
            links,
            ask_links(entry_id, chinese=True),
        )
        top = [f"# 论文卡片：{title}", ""]
        top.extend(f"> **{label}：** {value}" for label, value in zip(ZH_HEADER_LABELS, values))
        headings = ZH_HEADINGS

    top.extend(("", "---", ""))
    for index, (heading, content) in enumerate(zip(headings, sections), start=1):
        top.extend((f"## {index}. {heading}", "", content.strip(), ""))
    return "\n".join(top).rstrip() + "\n"


def render_human_annotation(paper: dict, generated_at: str) -> str:
    return (
        f"# 人工标注文本：{paper['title']}\n\n"
        f"- entry_id: `{paper['id']}`\n"
        f"- generated_at: `{generated_at}`\n"
        "- L 等级：待人工审核\n"
        "- 论文池：待人工审核\n"
        "- 判决状态：待人工审核\n"
        "- 一句话描述理由：待人工审核\n"
    )


def render_zh_extra(
    paper: dict,
    header: dict,
    institutions: list[str],
    categories: dict[str, str],
    generated_at: str,
) -> str:
    authors = ", ".join(paper.get("authors") or []) or "needs review"
    institution_text = " · ".join(institutions) if institutions else "待人工审核"
    en_review = sentence(paper.get("one_line_summary") or paper.get("one_line"), "needs review")
    return (
        f"# 备注中文额外修改字段：{paper['title']}\n\n"
        f"- entry_id: `{paper['id']}`\n"
        f"- generated_at: `{generated_at}`\n\n"
        "## 中文字段\n\n"
        f"- 一句话评价：{scalar(header.get('one_line_summary_ch'), '待人工审核')}\n"
        f"- 阅读优先级：{scalar(header.get('reading_priority_ch'), '待人工审核')}\n"
        f"- 论文类型：{scalar(header.get('paper_type_ch'), '待人工审核')}\n"
        f"- 知识点分类：{' · '.join(categories.get(item, item) for item in (paper.get('category_ids') or [])) or '待人工审核'}\n"
        f"- 适合读者：{scalar(header.get('best_for_ch'), '待人工审核')}\n"
        f"- 置信度：{scalar(header.get('confidence_ch'), '待人工审核')}\n"
        f"- 作者显示：{scalar(header.get('authors_ch'), authors)}\n"
        f"- 机构：{institution_text}\n\n"
        "## 当前英文备注字段\n\n"
        f"- One-sentence review: {en_review}\n"
        f"- Reading priority: {english_priority(header.get('reading_priority_ch', ''))}\n"
        f"- Paper type: {humanize(paper.get('source_role'))} paper\n"
        f"- Best for: Readers interested in {humanize(paper.get('domains'))}.\n"
        f"- Confidence: {english_confidence(header.get('confidence_ch', ''), paper)}\n"
        f"- Authors: {' · '.join(paper.get('authors') or []) or 'needs review'}\n"
    )


def export(output: Path, overwrite: bool = False) -> int:
    output = output.resolve()
    cards_out = output / "cards"
    review_out = output / "review"
    cards_out.mkdir(parents=True, exist_ok=overwrite)
    review_out.mkdir(parents=True, exist_ok=overwrite)
    categories = category_titles()
    generated_at = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")

    count = 0
    for paper_path in sorted(CARDS.glob("*/paper.yaml")):
        card_dir = paper_path.parent
        paper = load_yaml(paper_path)
        header = load_json(card_dir / "header_zh.json")
        institution_record = load_json(card_dir / "institutions.json")
        institutions = institution_record.get("institutions") or []
        entry_id = paper["id"]

        en_sections = read_sections(card_dir, paper, "en")
        zh_sections = read_sections(card_dir, paper, "zh")
        (cards_out / f"{entry_id}_en.md").write_text(
            render_card(paper, header, institutions, categories, en_sections, "en"), encoding="utf-8"
        )
        (cards_out / f"{entry_id}_ch.md").write_text(
            render_card(paper, header, institutions, categories, zh_sections, "zh"), encoding="utf-8"
        )
        (review_out / f"{entry_id}_human_annotation.md").write_text(
            render_human_annotation(paper, generated_at), encoding="utf-8"
        )
        (review_out / f"{entry_id}_zh_extra_fields.md").write_text(
            render_zh_extra(paper, header, institutions, categories, generated_at), encoding="utf-8"
        )
        count += 1
    return count


def validate(package: Path) -> list[str]:
    errors: list[str] = []
    cards_dir = package / "cards"
    review_dir = package / "review"
    en_ids = {path.name.removesuffix("_en.md") for path in cards_dir.glob("*_en.md")}
    zh_ids = {path.name.removesuffix("_ch.md") for path in cards_dir.glob("*_ch.md")}
    human_ids = {
        path.name.removesuffix("_human_annotation.md") for path in review_dir.glob("*_human_annotation.md")
    }
    extra_ids = {
        path.name.removesuffix("_zh_extra_fields.md") for path in review_dir.glob("*_zh_extra_fields.md")
    }
    if not en_ids:
        errors.append("package contains no English Cards")
    if not (en_ids == zh_ids == human_ids == extra_ids):
        errors.append("the four file groups do not contain identical entry IDs")

    for entry_id in sorted(en_ids | zh_ids | human_ids | extra_ids):
        en_path = cards_dir / f"{entry_id}_en.md"
        zh_path = cards_dir / f"{entry_id}_ch.md"
        human_path = review_dir / f"{entry_id}_human_annotation.md"
        extra_path = review_dir / f"{entry_id}_zh_extra_fields.md"
        for path in (en_path, zh_path, human_path, extra_path):
            if not path.exists():
                errors.append(f"{entry_id}: missing {path.name}")

        if en_path.exists():
            text = en_path.read_text(encoding="utf-8")
            for label in EN_HEADER_LABELS:
                if f"> **{label}:**" not in text:
                    errors.append(f"{entry_id}: English header missing {label}")
            for index, heading in enumerate(EN_HEADINGS, start=1):
                if f"## {index}. {heading}" not in text:
                    errors.append(f"{entry_id}: English section missing {heading}")
            parts = re.split(r"^## [1-9]\. ", text, flags=re.MULTILINE)[1:]
            if len(parts) == 9:
                for index, part in enumerate(parts, start=1):
                    body = part.split("\n", 1)[1].strip() if "\n" in part else ""
                    if len(body) < 40:
                        errors.append(f"{entry_id}: English section {index} is too short")
        if zh_path.exists():
            text = zh_path.read_text(encoding="utf-8")
            for label in ZH_HEADER_LABELS:
                if f"> **{label}：**" not in text:
                    errors.append(f"{entry_id}: Chinese header missing {label}")
            for index, heading in enumerate(ZH_HEADINGS, start=1):
                if f"## {index}. {heading}" not in text:
                    errors.append(f"{entry_id}: Chinese section missing {heading}")
            parts = re.split(r"^## [1-9]\. ", text, flags=re.MULTILINE)[1:]
            if len(parts) == 9:
                for index, part in enumerate(parts, start=1):
                    body = part.split("\n", 1)[1].strip() if "\n" in part else ""
                    if len(body) < 24:
                        errors.append(f"{entry_id}: Chinese section {index} is too short")
        if human_path.exists():
            text = human_path.read_text(encoding="utf-8")
            if text.count("待人工审核") != 4:
                errors.append(f"{entry_id}: pending human annotation must contain four pending values")
            if f"- entry_id: `{entry_id}`" not in text:
                errors.append(f"{entry_id}: human annotation entry ID mismatch")
            if not re.search(r"- generated_at: `\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z`", text):
                errors.append(f"{entry_id}: invalid human-annotation generated_at")
        if extra_path.exists():
            text = extra_path.read_text(encoding="utf-8")
            if f"- entry_id: `{entry_id}`" not in text:
                errors.append(f"{entry_id}: Chinese extra-fields entry ID mismatch")

    for path in list(cards_dir.glob("*.md")) + list(review_dir.glob("*.md")):
        text = path.read_text(encoding="utf-8")
        if re.search(r"\b(?:TODO|TBD|Fill this section)\b", text, re.IGNORECASE):
            errors.append(f"{path.name}: contains a template placeholder")
        if any(marker in text for marker in ("Card-local", "L4 collection note", "L4 收录说明")):
            errors.append(f"{path.name}: contains internal collection-template language")
    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, help="new package directory to create")
    parser.add_argument("--overwrite", action="store_true", help="replace files in an existing package")
    parser.add_argument("--check", type=Path, help="existing package directory to validate")
    args = parser.parse_args()
    if bool(args.output) == bool(args.check):
        parser.error("provide exactly one of --output or --check")
    if args.overwrite and not args.output:
        parser.error("--overwrite requires --output")
    if args.output:
        count = export(args.output, overwrite=args.overwrite)
        print(f"exported {count} papers to {args.output}")
        return 0
    errors = validate(args.check.resolve())
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        return 1
    print(f"package check passed: {args.check}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
