#!/usr/bin/env python3
"""Rebuild every V2 Card section as concise gold-package prose."""

from __future__ import annotations

import argparse
import json
import re
import shutil
from pathlib import Path

import yaml

try:
    from . import export_package
except ImportError:
    import export_package


SECTION_KEYS = export_package.SECTION_KEYS

EN_SPECIFIC_MARKERS = {
    "01_problem": "Paper-specific backup note:",
    "02_core_idea": "Paper-specific backup note:",
    "03_method": "Paper-specific backup note:",
    "04_evidence": "Paper-specific evidence:",
    "05_novelty": "Paper-specific backup note:",
    "06_limitations": "Paper-specific limitations:",
    "07_usefulness": "Paper-specific use note:",
    "08_reading_notes": "Paper-specific reading note:",
}

ZH_SPECIFIC_MARKERS = {
    "01_problem": "论文特定补充：",
    "02_core_idea": "论文特定补充：",
    "03_method": "论文特定补充：",
    "04_evidence": "论文特定证据：",
    "05_novelty": "论文特定补充：",
    "06_limitations": "论文特定局限：",
    "07_usefulness": "论文特定用途：",
    "08_reading_notes": "论文特定阅读笔记：",
}

INTERNAL_PHRASES = (
    "Decision boundary",
    "L4 collection note",
    "Card-local",
    "this atlas",
    "for this atlas",
    "this card",
    "website review",
    "Track 05",
    "决策边界",
    "L4 收录说明",
    "本 Card",
    "本 atlas",
    "归入 Track 05",
    "网站审核",
)


def load_yaml(path: Path) -> dict:
    with path.open(encoding="utf-8") as handle:
        return yaml.safe_load(handle) or {}


def load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as handle:
        return json.load(handle)


def tidy(text: str) -> str:
    text = re.sub(r"\s+", " ", str(text or "")).strip()
    text = re.sub(r"\.{2,}", ".", text)
    return text


def end_sentence(text: str) -> str:
    text = tidy(text)
    if not text:
        return text
    return text if text.endswith((".", "!", "?", "。", "！", "？")) else text + "."


def join_terms(value) -> str:
    if isinstance(value, list):
        return ", ".join(str(item).replace("_", " ") for item in value if item)
    return tidy(value)


def data_fields(paper: dict) -> str:
    data = paper.get("data_object") or {}
    fields = data.get("process_fields") or []
    return ", ".join(str(item) for item in fields) or tidy(data.get("answer_format"))


def extract_specific(raw: str, marker: str | None) -> str | None:
    if not marker or marker not in raw:
        return None
    tail = raw.split(marker, 1)[1].strip()
    if "reading note" in marker.lower() or "阅读笔记" in marker:
        notes = [line.strip() for line in tail.splitlines() if line.strip().startswith("- ")]
        if notes:
            return "\n".join(notes[:6])
    blocks = []
    skip_prefixes = ("Primary source:", "Venue/date:", "官方来源：", "会议/日期：")
    for raw_block in re.split(r"\n\s*\n", tail):
        block = tidy(raw_block)
        if not block or block.startswith(skip_prefixes):
            continue
        block = re.sub(
            r"^(?:Concrete problem|Atlas relevance|Data object / evaluation surface|One-sentence contribution|"
            r"Core mechanism|Inputs|Pipeline|Outputs|Main evidence|Evidence limits|Prior-work baseline|"
            r"What changes|Direction signal|Quality signal|What is not new|Main limitations|Audit risks|"
            r"Missing or fragile details|Usefulness|Research use|Engineering use|Review use):\s*",
            "",
            block,
        )
        if any(phrase.lower() in block.lower() for phrase in INTERNAL_PHRASES):
            continue
        if block and block[0].islower():
            block = block[0].upper() + block[1:]
        block = block.replace(".,", ".").replace(",.", ".")
        blocks.append(block)
    return "\n\n".join(blocks[:2]) or None


def compact_english(raw: str) -> str:
    blocks: list[str] = []
    for block in re.split(r"\n\s*\n", raw):
        lines = []
        for line in block.splitlines():
            line = export_package.strip_template_prefix(line)
            if line and not any(phrase.lower() in line.lower() for phrase in INTERNAL_PHRASES):
                lines.append(line)
        text = tidy(" ".join(lines))
        if len(text) >= 40 and text not in blocks:
            blocks.append(text)
    return "\n\n".join(blocks[:2])


def compact_chinese(raw: str, fallback: str) -> str:
    raw = re.sub(r"\[[^\]]+\]\([^\)]+\)", "", raw)
    sentences = re.split(r"(?<=[。！？])\s*|\n+", raw)
    selected: list[str] = []
    total = 0
    for sentence in sentences:
        sentence = export_package.strip_template_prefix(sentence).removeprefix("- ")
        sentence = sentence.replace("；具体最近邻比较见下文", "").replace("具体最近邻比较见下文。", "")
        sentence = tidy(sentence)
        if not sentence or any(phrase.lower() in sentence.lower() for phrase in INTERNAL_PHRASES):
            continue
        if len(re.findall(r"[\u4e00-\u9fff]", sentence)) < 8:
            continue
        if sentence in selected:
            continue
        if total + len(sentence) > 700 and selected:
            break
        selected.append(sentence)
        total += len(sentence)
        if len(selected) == 3:
            break
    if not selected:
        return end_sentence(fallback or "待人工审核")
    midpoint = 2 if len(selected) > 2 else len(selected)
    first = "".join(end_sentence(item) for item in selected[:midpoint])
    second = "".join(end_sentence(item) for item in selected[midpoint:])
    return first + ("\n\n" + second if second else "")


def structured_english(key: str, paper: dict) -> str:
    data = paper.get("data_object") or {}
    recipe = paper.get("recipe_metadata") or {}
    audit = paper.get("audit") or {}
    title = paper.get("title") or paper.get("id")
    summary = end_sentence(paper.get("one_line_summary") or paper.get("one_line"))
    problem = end_sentence(data.get("prompt_source"))
    trace = end_sentence(data.get("trace_author"))
    object_text = (tidy(data.get("answer_format")) or data_fields(paper)).rstrip(".")
    verifier = end_sentence(data.get("verifier_or_reward"))
    terminal = end_sentence(data.get("terminal_predicate"))
    generator = end_sentence(recipe.get("generator"))
    sampling = end_sentence(recipe.get("sampling_protocol"))
    filtering = end_sentence(recipe.get("filtering_rule"))
    uses = join_terms(paper.get("training_use")) or "needs review"
    why = end_sentence(paper.get("inclusion_reason") or paper.get("why_it_matters"))
    use_note = end_sentence(paper.get("why_it_matters") or paper.get("inclusion_reason"))
    why = re.sub(r"^Direct Track 05 study of\s+", "Study of ", why, flags=re.IGNORECASE)

    if key == "01_problem":
        return f"{problem}\n\nThe reusable object is {object_text}. {why}"
    if key == "02_core_idea":
        return f"{summary}\n\n{trace} The feedback contract is: {verifier} The terminal condition is: {terminal}"
    if key == "03_method":
        return (
            f"{generator} {sampling} {filtering}\n\n"
            f"The resulting record contains {object_text}. The reported use is {uses}."
        )
    if key == "05_novelty":
        return (
            f"Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: "
            f"{summary or end_sentence(title)}\n\n"
            "The reusable novelty is the paper-specific connection between generation, selection or verification, "
            "and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components."
        )
    if key == "06_limitations":
        failures = [end_sentence(item) for item in audit.get("known_failure_modes") or []]
        first = " ".join(failures) or "The paper's main failure modes still require human review."
        return (
            f"{first}\n\nReproduction also depends on split policy ({tidy(audit.get('split')) or 'needs review'}), "
            f"decontamination ({tidy(audit.get('decontamination')) or 'needs review'}), and license provenance "
            f"({tidy(audit.get('license')) or 'needs review'})."
        )
    if key == "07_usefulness":
        fields = data_fields(paper) or "prompt, candidates, feedback, selected output, and budget"
        return f"{use_note}\n\nFor reuse, preserve {fields}, together with model/version, split, stopping rule, and total compute."
    if key == "08_reading_notes":
        need_items = [
            str(item) for item in paper.get("needs") or []
            if not any(phrase.lower() in str(item).lower() for phrase in INTERNAL_PHRASES)
        ]
        needs = "; ".join(need_items) or "human review of unresolved metadata"
        return (
            f"- Sampling protocol: {tidy(recipe.get('sampling_protocol')) or 'needs review'}\n"
            f"- Inference budget: {tidy(recipe.get('inference_budget')) or 'needs review'}\n"
            f"- Rollout count: {tidy(recipe.get('rollout_count')) or 'needs review'}\n"
            f"- Temperature: {tidy(recipe.get('temperature')) or 'needs review'}\n"
            f"- Feedback contract: {tidy(data.get('verifier_or_reward')) or 'needs review'}\n"
            f"- Remaining checks: {needs}"
        )
    raise KeyError(key)


def structured_chinese(key: str, paper: dict, header: dict) -> str:
    data = paper.get("data_object") or {}
    recipe = paper.get("recipe_metadata") or {}
    summary = end_sentence(header.get("one_line_summary_ch") or paper.get("one_line_summary") or "待人工审核")
    problem = end_sentence(data.get("prompt_source"))
    trace = end_sentence(data.get("trace_author"))
    fields = data_fields(paper) or tidy(data.get("answer_format")) or "待人工审核"
    verifier = end_sentence(data.get("verifier_or_reward"))
    generator = end_sentence(recipe.get("generator"))
    sampling = end_sentence(recipe.get("sampling_protocol"))
    filtering = end_sentence(recipe.get("filtering_rule"))
    uses = join_terms(paper.get("training_use")) or "待人工审核"

    if key == "01_problem":
        return f"{summary} 原文界定的问题是：{problem}\n\n一个可复用记录包括：{fields}。"
    if key == "02_core_idea":
        return f"{summary}\n\n核心机制是：{trace} 反馈契约是：{verifier}"
    if key == "03_method":
        return (
            f"生成与搜索流程是：{generator} 采样或搜索协议是：{sampling} 筛选规则是：{filtering}\n\n"
            f"最终记录包含：{fields}。论文报告的用途包括 {uses}。"
        )
    if key == "05_novelty":
        return (
            f"相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：{summary}\n\n"
            "可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；"
            "通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。"
        )
    raise KeyError(key)


def rebuild_card(source: Path, output: Path) -> None:
    output.mkdir(parents=True, exist_ok=False)
    for name in ("paper.yaml", "institutions.json", "queue.json", "review.json"):
        shutil.copy2(source / name, output / name)
    (output / "sources").mkdir()

    paper = load_yaml(source / "paper.yaml")
    header = load_json(source / "header_zh.json")
    if "Track 05" in str(header.get("paper_type_ch") or ""):
        role_labels = {
            "construction_recipe": "数据构造",
            "process_supervision": "过程监督",
            "scaling_study": "扩展规律与计算预算",
            "agent_environment": "Agent 轨迹与环境",
            "benchmark": "Benchmark",
            "verifier_reward": "Verifier 与奖励",
            "frontier_report": "前沿模型报告",
        }
        roles = [role_labels.get(role, str(role).replace("_", " ")) for role in paper.get("source_role") or []]
        header["paper_type_ch"] = " / ".join(roles) + "论文"
    (output / "header_zh.json").write_text(
        json.dumps(header, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    zh_fallback = header.get("one_line_summary_ch") or "待人工审核"

    for key in SECTION_KEYS:
        en_source = source / "sources" / f"{key}.md"
        zh_source = source / "sources" / f"{key}_ch.md"
        if key == "09_citation":
            en_text = export_package.citation_section(source, paper, "en")
            zh_text = export_package.citation_section(source, paper, "zh")
        else:
            en_raw = en_source.read_text(encoding="utf-8")
            zh_raw = zh_source.read_text(encoding="utf-8")
            if key in {"01_problem", "02_core_idea", "03_method", "05_novelty", "06_limitations", "07_usefulness", "08_reading_notes"}:
                en_text = structured_english(key, paper)
            else:
                en_text = extract_specific(en_raw, EN_SPECIFIC_MARKERS.get(key))
                if not en_text:
                    en_text = compact_english(en_raw)
            zh_text = extract_specific(zh_raw, ZH_SPECIFIC_MARKERS.get(key))
            if not zh_text:
                if key in {"01_problem", "02_core_idea", "03_method", "05_novelty"}:
                    zh_text = structured_chinese(key, paper, header)
                else:
                    zh_text = compact_chinese(zh_raw, zh_fallback)
        (output / "sources" / f"{key}.md").write_text(en_text.strip() + "\n", encoding="utf-8")
        (output / "sources" / f"{key}_ch.md").write_text(zh_text.strip() + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    source = args.source.resolve()
    output = args.output.resolve()
    output.mkdir(parents=True, exist_ok=False)
    count = 0
    for paper_path in sorted(source.glob("*/paper.yaml")):
        rebuild_card(paper_path.parent, output / paper_path.parent.name)
        count += 1
    print(f"rebuilt {count} Card directories in {output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
