#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import tempfile
from pathlib import Path

from atlas_utils import (
    CURATION_LEVELS,
    ARTIFACT_KEYS,
    artifacts,
    card_inventory,
    categories,
    curation_level,
    entries,
    primary_link,
    research_tracks,
)
from common import ROOT
from set_ask_backend_url import extract_backend_url, validate_public_config_text

_ENTRIES_CACHE: list[dict] | None = None
_CARDS_CACHE: dict[str, str] | None = None
_TRACKS_CACHE: list[dict] | None = None
PAGES_URL = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/"
ASK_URL = f"{PAGES_URL.rstrip('/')}/ask/"
ASK_CONFIG = ROOT / "docs/assets/ask-config.js"

CATEGORY_GROUPS = [
    {
        "id": "background_foundations",
        "emoji": "🧭",
        "title": "Background / Foundations",
        "zh_title": "基础与入门",
        "promise": "build the shared vocabulary before opening dense primary papers.",
        "zh_promise": "先建立共同语言，再进入信息密度更高的一手论文。",
    },
    {
        "id": "core_reasoning_data_types",
        "emoji": "🧬",
        "title": "Core Reasoning Data Types",
        "zh_title": "核心数据类型",
        "promise": "compare the actual records: demonstrations, preferences, verifiable outcomes, process labels, rollout traces, agent episodes, and rubrics.",
        "zh_promise": "逐类比较真实的数据记录：示范、偏好、可验证结果、过程标注、采样轨迹、智能体轨迹与评分标准。",
    },
    {
        "id": "data_lifecycle",
        "emoji": "🛠️",
        "title": "Data Lifecycle",
        "zh_title": "数据生命周期",
        "promise": "follow the lifecycle from construction recipes to training use, scaling, benchmarks, frontier disclosures, and failure audits.",
        "zh_promise": "沿构造、训练、规模化、评测、前沿披露与失效审计的完整链条阅读。",
    },
]

TRACK_ZH = {
    "foundations_and_primers": "🧭 基础入门与综述",
    "instruction_demonstration_rationale_data": "🧱 指令、示范与思维链数据",
    "preference_reward_feedback_data": "🤝 偏好与奖励反馈数据",
    "programmatically_verifiable_outcome_data": "🧮 可程序验证的结果数据",
    "process_trace_supervision_data": "🪜 过程与步骤监督数据",
    "rollout_search_test_time_trace_data": "🔁 采样、搜索与推理时轨迹数据",
    "environment_agent_trajectory_data": "🌐 环境与智能体轨迹数据",
    "judgment_rubric_domain_expert_data": "⚖️ 评审、评分标准与领域专家数据",
    "data_construction_open_release_recipes": "🏗️ 数据构造与开源发布",
    "training_usage_optimization_objectives": "🎯 训练用途与优化目标",
    "scaling_rlvr_test_time_compute": "📈 规模化、RLVR 与推理时计算",
    "benchmarks_evaluation_surfaces": "🧰 基准与评测",
    "frontier_reports_data_disclosure_ledger": "🚀 前沿模型报告与数据披露",
    "audit_failure_contamination_verifier_attacks": "🧯 审计、污染与失效模式",
}

SUBFIELD_ZH = {
    "🧭 Post-training surveys": "🧭 后训练综述",
    "🧠 Reasoning LLM surveys": "🧠 推理大模型综述",
    "📦 Data documentation / datasheets": "📦 数据文档与数据说明书",
    "🧪 RLHF / reward-model surveys": "🧪 RLHF 与奖励模型综述",
    "🌐 Agent data / tool-use surveys": "🌐 智能体与工具使用综述",
    "🧯 Contamination / evaluation surveys": "🧯 数据污染与评测综述",
    "🧱 Instruction tuning / SFT data": "🧱 指令微调数据",
    "🧑‍🏫 Human demonstrations": "🧑‍🏫 人工示范数据",
    "🤖 Synthetic instruction data": "🤖 合成指令数据",
    "🧠 Chain-of-thought / rationale data": "🧠 思维链与解题理由数据",
    "🔁 Self-training / STaR": "🔁 自我训练（STaR 系）",
    "✂️ Long/short CoT distillation": "✂️ 长短思维链蒸馏",
    "🤝 Human preference data / RLHF": "🤝 人类偏好数据（RLHF）",
    "⚖️ DPO / preference optimization": "⚖️ 偏好优化（DPO 系）",
    "🎚️ Scalar reward / ORM data": "🎚️ 标量奖励与结果奖励数据",
    "🤖 RLAIF / synthetic feedback": "🤖 AI 反馈与合成偏好（RLAIF）",
    "🧪 Reward-model benchmarks": "🧪 奖励模型基准",
    "🧾 Rubric-conditioned rewards": "🧾 基于评分标准的奖励",
    "📐 Math answer-verifiable data": "📐 数学答案可验证数据",
    "🧮 Math RLVR datasets": "🧮 数学 RLVR 数据集",
    "💻 Code execution / unit-test data": "💻 代码执行与单元测试数据",
    "🧾 Formal proof / Lean / theorem proving": "🧾 形式化证明与定理证明（Lean）",
    "🧪 Verifier robustness and answer extraction": "🧪 验证器稳健性与答案抽取",
    "🧰 Programmatic benchmarks": "🧰 程序化评测基准",
    "🪜 Human step-level labels": "🪜 人工步骤级标注",
    "🧪 Process reward models": "🧪 过程奖励模型（PRM）",
    "🔁 Rollout-value supervision": "🔁 采样价值监督",
    "🛠️ Automatic process supervision": "🛠️ 自动过程监督",
    "❌ First-error localization": "❌ 首个错误定位",
    "📊 PRM benchmarks and evaluation": "📊 过程奖励模型评测",
    "🎲 Multiple rollouts / best-of-N": "🎲 多次采样与 best-of-N",
    "🌳 Search trees / MCTS": "🌳 搜索树与蒙特卡洛树搜索",
    "🔎 Rejection sampling traces": "🔎 拒绝采样轨迹",
    "🧠 Self-consistency / repeated sampling": "🧠 自洽性与重复采样",
    "⏱️ Test-time compute logs": "⏱️ 推理时计算记录",
    "✂️ Long2short / distill-from-search": "✂️ 长变短与搜索蒸馏",
    "🛠️ Tool-use data": "🛠️ 工具使用数据",
    "🌍 Web/browser agents": "🌍 网页浏览智能体",
    "📱 App/mobile agents": "📱 移动应用智能体",
    "🖥️ OS/desktop agents": "🖥️ 操作系统与桌面智能体",
    "🧑‍💻 SWE/repository agents": "🧑‍💻 软件工程与代码仓库智能体",
    "🔁 Replayable trajectory data": "🔁 可回放轨迹数据",
    "🧰 Agent benchmarks and terminal predicates": "🧰 智能体基准与终止判定",
    "⚖️ LLM-as-judge data": "⚖️ 大模型评审数据",
    "🧑‍⚖️ Human/expert judgment": "🧑‍⚖️ 人类与专家评审",
    "🩺 Medical reasoning / health rubrics": "🩺 医疗推理与健康评分标准",
    "🛡️ Safety reasoning data": "🛡️ 安全推理数据",
    "🧾 Factuality / grounding": "🧾 事实性与依据核查",
    "⚖️ Legal reasoning": "⚖️ 法律推理",
    "🏦 Financial reasoning": "🏦 金融推理",
    "🧪 Rubric reward models": "🧪 评分标准奖励模型",
    "🧱 Prompt sourcing": "🧱 题目与提示来源",
    "✍️ Teacher trace generation": "✍️ 教师模型轨迹生成",
    "🔎 Rejection sampling / search-generated data": "🔎 拒绝采样与搜索生成数据",
    "🔁 Self-play / self-improvement": "🔁 自博弈与自我提升",
    "🧪 Filtering and verifier refresh": "🧪 数据过滤与验证器更新",
    "🏗️ Open reasoning data releases": "🏗️ 开源推理数据发布",
    "🧬 Data lineage and release metadata": "🧬 数据谱系与发布元数据",
    "🧱 SFT / instruction tuning": "🧱 监督微调（SFT）",
    "📚 Distillation": "📚 蒸馏",
    "⚖️ Preference optimization": "⚖️ 偏好优化",
    "🎚️ Reward modeling / ORM": "🎚️ 奖励建模（ORM）",
    "🪜 PRM / process supervision": "🪜 过程监督（PRM）",
    "🏋️ RLVR / verifier RL": "🏋️ 可验证奖励强化学习（RLVR）",
    "🌐 Agent training": "🌐 智能体训练",
    "🧪 Evaluation / reranking / audit": "🧪 评测、重排与审计",
    "📈 Data scaling": "📈 数据规模化",
    "🔁 Data reuse and uniqueness": "🔁 数据复用与去重",
    "⏱️ Test-time compute": "⏱️ 推理时计算",
    "🎲 pass@k / sampling budget": "🎲 pass@k 与采样预算",
    "🧪 Verifier scaling": "🧪 验证器规模化",
    "🏋️ RLVR optimization scaling": "🏋️ RLVR 优化规模化",
    "🔍 Scaling attribution": "🔍 规模化收益归因",
    "📐 Math benchmarks": "📐 数学基准",
    "💻 Code benchmarks": "💻 代码基准",
    "🧾 Proof benchmarks": "🧾 证明基准",
    "🌐 Agent benchmarks": "🌐 智能体基准",
    "⚖️ Rubric/domain benchmarks": "⚖️ 评分标准与领域基准",
    "🧯 Live / contamination-resistant benchmarks": "🧯 动态与抗污染基准",
    "🚀 DeepSeek-R1 family": "🚀 DeepSeek-R1 系列",
    "🌙 Kimi reasoning reports": "🌙 Kimi 推理报告",
    "🐉 Qwen reasoning/math/code reports": "🐉 Qwen 推理、数学与代码报告",
    "🧠 Magistral / Phi / Nemotron style reports": "🧠 Magistral、Phi、Nemotron 类报告",
    "🧪 RLVR recipe reports": "🧪 RLVR 配方报告",
    "🧬 What is disclosed vs hidden": "🧬 披露了什么、隐藏了什么",
    "🧯 Benchmark contamination": "🧯 基准污染",
    "🔍 Search-time contamination": "🔍 搜索阶段污染",
    "🧬 Hidden lineage / teacher leakage": "🧬 隐藏谱系与教师泄漏",
    "🎮 Reward hacking": "🎮 奖励投机",
    "🧪 Verifier gaming": "🧪 验证器欺骗",
    "⚖️ LLM-as-judge attacks": "⚖️ 大模型评审攻击",
    "🧨 Spurious rewards": "🧨 虚假奖励",
    "📉 Reproducibility failures": "📉 可复现性失效",
}


def all_entries() -> list[dict]:
    global _ENTRIES_CACHE
    if _ENTRIES_CACHE is None:
        _ENTRIES_CACHE = entries()
    return _ENTRIES_CACHE


def all_cards() -> dict[str, str]:
    global _CARDS_CACHE
    if _CARDS_CACHE is None:
        _CARDS_CACHE = card_inventory()
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
        "card_files": len([
            path for path in (ROOT / "cards").glob("**/*.md")
            if path.name != "README.md" and "template" not in path.name and "/examples/" not in path.as_posix()
        ]),
        "needs_search": sum(1 for entry in data if not primary_link(entry)),
        "l5": sum(1 for level in levels if level == "L5_audit_ready"),
        "code": artifact_counts["code"],
        "data": artifact_counts["data"],
        "hf": artifact_counts["huggingface"],
        "project": artifact_counts["project"],
    }


def ask_launch_status() -> dict[str, str]:
    if not ASK_CONFIG.exists():
        return {
            "badge": "https://img.shields.io/badge/Ask-launch%20pending-7c3aed",
            "en_text": "source-grounded AI assistant · launch pending",
            "zh_text": "问答助手（即将上线）",
        }
    text = ASK_CONFIG.read_text(encoding="utf-8")
    problems = validate_public_config_text(text)
    if problems:
        raise RuntimeError("Unsafe Ask the Atlas public config: " + "; ".join(problems))
    backend_url = extract_backend_url(text)
    if backend_url:
        return {
            "badge": "https://img.shields.io/badge/Ask-live-16a34a",
            "en_text": "source-grounded AI assistant · live",
            "zh_text": "问答助手（已上线）",
        }
    return {
        "badge": "https://img.shields.io/badge/Ask-launch%20pending-7c3aed",
        "en_text": "source-grounded AI assistant · launch pending",
        "zh_text": "问答助手（即将上线）",
    }


def category_count(category_id: str) -> int:
    return sum(1 for entry in all_entries() if category_id in (entry.get("category") or []))


def category_file(category_id: str) -> str:
    for category in categories():
        if category.get("id") == category_id:
            return category.get("file") or "README.md"
    return "README.md"


def tracks_for_group(group_id: str) -> list[dict]:
    tracks_by_id = {track.get("category_id"): track for track in all_tracks()}
    out = []
    for category in categories():
        if category.get("group") == group_id and tracks_by_id.get(category.get("id")):
            out.append(tracks_by_id[category["id"]])
    return out


def subfield_slug(name: str) -> str:
    text = re.sub(r"<[^>]+>", "", name)
    text = re.sub(r"[^a-zA-Z0-9一-鿿]+", "-", text).strip("-").lower()
    return text or "subfield"


def contents_tree(zh: bool = False) -> str:
    zh_ordinals = ["一", "二", "三"]
    blocks = []
    number = 0
    for index, group in enumerate(CATEGORY_GROUPS):
        group_tracks = tracks_for_group(group["id"])
        if not group_tracks:
            continue
        start, end = number, number + len(group_tracks) - 1
        span = f"{start:02d}" if start == end else f"{start:02d}–{end:02d}"
        title = group["zh_title"] if zh else group["title"]
        promise = group["zh_promise"] if zh else group["promise"]
        ordinal = f"{zh_ordinals[index]}、" if zh else f"{index + 1} · "
        blocks.append(f"### {group['emoji']} {ordinal}{title} `{span}`")
        blocks.append(f"*{promise}*")
        details = []
        for track in group_tracks:
            cid = track.get("category_id")
            label = TRACK_ZH.get(cid, track.get("navigator_title")) if zh else track.get("navigator_title")
            count = category_count(cid)
            unit = "篇" if zh else ("paper" if count == 1 else "papers")
            page = f"papers/{category_file(cid)}"
            subs = "\n".join(
                f"- [{SUBFIELD_ZH.get(sf.get('name', 'Subfield'), sf.get('name', 'Subfield')) if zh else sf.get('name', 'Subfield')}]"
                f"({page}#{subfield_slug(sf.get('name', 'Subfield'))})"
                for sf in track.get("subfields") or []
            )
            details.append(
                "<details>\n"
                f'<summary><code>{number:02d}</code> <b><a href="{page}">{label}</a></b> · {count} {unit}</summary>\n\n'
                f"{subs}\n\n"
                "</details>"
            )
            number += 1
        blocks.append("<blockquote>\n\n" + "\n\n".join(details) + "\n\n</blockquote>")
    return "\n\n".join(blocks)


def latest_updates(zh: bool = False) -> str:
    s = stats()
    if zh:
        return "\n".join([
            "| 日期 | 更新 |",
            "|---|---|",
            f"| 2026-06-15 | 已验证条目达 **{s['verified']} 条**，关联卡片 **{s['cards']} 张**，其中 **{s['l5']} 张**达到可审计级别。 |",
            f"| 2026-06-15 | 完成两轮制品核验：固定 **{s['code']} 个代码**、**{s['data']} 个数据**、**{s['hf']} 个 Hugging Face**、**{s['project']} 个项目主页**官方链接。 |",
            "| 2026-06-15 | 检索网站、论文目录、导出文件与质检报告全部由结构化元数据自动生成，所有数字可复现。 |",
        ])
    return "\n".join([
        "| Date | Update |",
        "|---|---|",
        f"| 2026-06-15 | Promoted the collection to **{s['verified']} verified entries**, **{s['cards']} linked cards**, and **{s['l5']} L5 audit-ready cards**. |",
        f"| 2026-06-15 | Pinned official artifacts: **{s['code']} code**, **{s['data']} data**, **{s['hf']} Hugging Face**, and **{s['project']} project** links. |",
        "| 2026-06-15 | Rebuilt the searchable site, paper pages, exports, and QA reports from structured metadata, so every count stays reproducible. |",
    ])


def snapshot_details(zh: bool = False) -> str:
    s = stats()
    if zh:
        rows = [
            ("总条目", s["total"]),
            ("已验证官方主链接", s["verified"]),
            ("含论文、arXiv、会议或 DOI 链接", s["primary"]),
            ("关联卡片", s["cards"]),
            ("卡片文件", s["card_files"]),
            ("可审计条目（L5）", s["l5"]),
            ("待补链接或元数据", s["needs_search"]),
            ("官方代码链接", s["code"]),
            ("官方数据链接", s["data"]),
            ("Hugging Face 链接", s["hf"]),
            ("项目主页链接", s["project"]),
        ]
        header = "📊 数据规模"
        head_row = "| 指标 | 数量 |"
    else:
        rows = [
            ("Total structured entries", s["total"]),
            ("Verified official primary links", s["verified"]),
            ("Entries with paper/arXiv/venue/DOI links", s["primary"]),
            ("Unique entry-linked cards", s["cards"]),
            ("Card files", s["card_files"]),
            ("L5 audit-ready entries", s["l5"]),
            ("Needs search / metadata", s["needs_search"]),
            ("Official code links", s["code"]),
            ("Official data links", s["data"]),
            ("Hugging Face links", s["hf"]),
            ("Project links", s["project"]),
        ]
        header = "📊 Snapshot stats"
        head_row = "| Metric | Count |"
    table = "\n".join([head_row, "|---|---:|"] + [f"| {label} | {value} |" for label, value in rows])
    return f"<details>\n<summary>{header}</summary>\n\n{table}\n\n</details>"


def learning_path(zh: bool = False) -> str:
    if zh:
        stages = [
            ("🌱", "第一阶段 · 建立心智模型", "这个领域在研究什么，数据按什么逻辑分类", [
                ("🧭", "00 · 从这里开始", "docs/00_start_here.md", "领域速览与阅读路线"),
                ("🧠", "01 · 什么是后训练推理数据", "docs/01_what_is_post_training_reasoning_data.md", "带验证器的样本这一核心模型"),
                ("🗺️", "02 · 以验证器为锚的分类", "docs/02_verifier_anchored_taxonomy.md", "按反馈契约而非领域给论文归类"),
            ]),
            ("🔬", "第二阶段 · 认识数据对象", "一条合格的样本长什么样，质量如何衡量", [
                ("📦", "03 · 推理数据对象", "docs/03_reasoning_data_objects.md", "每类数据对象需要记录哪些字段"),
                ("🎯", "04 · 数据质量", "docs/04_data_quality.md", "准确率之外的质量维度"),
            ]),
            ("⚙️", "第三阶段 · 构造、验证与训练", "数据如何生产、由什么打分、如何进入训练并规模化", [
                ("🏗️", "05 · 构造手册", "docs/05_construction_cookbook.md", "题目来源、教师轨迹、过滤与发布元数据"),
                ("⚖️", "06 · 验证器与奖励", "docs/06_verifiers_and_rewards.md", "如何审计校验器、评审、评分标准与奖励"),
                ("🌐", "07 · 智能体轨迹数据", "docs/07_agent_trajectory_data.md", "工具、网页、系统与软件工程任务的字段要求"),
                ("📈", "08 · 规模化与推理时计算", "docs/08_scaling_and_test_time_compute.md", "区分数据、验证器、优化器与预算的贡献"),
            ]),
            ("🛡️", "第四阶段 · 审计与实战", "如何识别泄漏与投机，如何把方法落到工程里", [
                ("🧯", "09 · 审计与失效模式", "docs/09_audit_and_failure_modes.md", "泄漏、污染、验证器欺骗与评审攻击"),
                ("🛠️", "10 · 工程实践路线", "docs/10_industry_onboarding_path.md", "工程师进入该领域的实用路径"),
            ]),
        ]
        papers_line = "- 📜 本阶段必读论文：整理中"
        dash = "——"
    else:
        stages = [
            ("🌱", "Stage 1 · Build the mental model", "what the field studies and how the data is organized", [
                ("🧭", "00 · Start here", "docs/00_start_here.md", "zero-to-field overview and reading paths"),
                ("🧠", "01 · What is post-training reasoning data?", "docs/01_what_is_post_training_reasoning_data.md", "the verifier-bearing sample mental model"),
                ("🗺️", "02 · Verifier-anchored taxonomy", "docs/02_verifier_anchored_taxonomy.md", "classify papers by feedback contract, not only domain"),
            ]),
            ("🔬", "Stage 2 · Know the data objects", "what a well-formed sample looks like and how quality is measured", [
                ("📦", "03 · Reasoning data objects", "docs/03_reasoning_data_objects.md", "what fields each data object must serialize"),
                ("🎯", "04 · Data quality", "docs/04_data_quality.md", "quality dimensions beyond accuracy"),
            ]),
            ("⚙️", "Stage 3 · Construct, verify, and train", "how data is produced, scored, trained on, and scaled", [
                ("🏗️", "05 · Construction cookbook", "docs/05_construction_cookbook.md", "prompt sourcing, teacher traces, filtering, release metadata"),
                ("⚖️", "06 · Verifiers and rewards", "docs/06_verifiers_and_rewards.md", "how to audit checkers, judges, rubrics, and rewards"),
                ("🌐", "07 · Agent trajectory data", "docs/07_agent_trajectory_data.md", "state/action/replay fields for tools, web, OS, and SWE"),
                ("📈", "08 · Scaling and test-time compute", "docs/08_scaling_and_test_time_compute.md", "separate data, verifier, optimizer, and budget effects"),
            ]),
            ("🛡️", "Stage 4 · Audit and practice", "how to catch leakage and gaming, then apply it in engineering", [
                ("🧯", "09 · Audit and failure modes", "docs/09_audit_and_failure_modes.md", "leakage, contamination, verifier gaming, judge attacks"),
                ("🛠️", "10 · Industry onboarding path", "docs/10_industry_onboarding_path.md", "a practical path for engineers entering the field"),
            ]),
        ]
        papers_line = "- 📜 Stage must-reads: curation in progress"
        dash = " — "
    blocks = []
    for stage_emoji, stage_title, stage_goal, guides in stages:
        lines = [f"**{stage_emoji} {stage_title}**{dash}{stage_goal}", ""]
        lines += [f"- {emoji} [{title}]({path}){dash}{blurb}" for emoji, title, path, blurb in guides]
        lines.append(papers_line)
        blocks.append("\n".join(lines))
    return "\n\n".join(blocks)


def repo_structure_details(zh: bool = False) -> str:
    if zh:
        rows = [
            ("[docs/](docs/)", "系统学习材料：核心概念、分类方法、构造手册、验证器、智能体轨迹、规模化与失效模式。"),
            ("[papers/](papers/README.md)", "论文导航：每个方向一页，含优先阅读表、完整列表与审计清单。"),
            ("[cards/](cards/README.md)", "论文卡片：概括数据对象、验证器、构造配方、风险与官方链接。"),
            ("[data/papers.yaml](data/papers.yaml)", "结构化数据源：元数据、角色、契约、摘要、链接与整理等级。"),
            ("[docs/index.html](docs/index.html)", "检索网站（制作中）：由结构化数据自动生成。"),
            ("[reports/](reports/)", "质检与覆盖率报告：链接覆盖、待补清单、发布说明与质量审查。"),
            ("[exports/](exports/)", "CSV、JSON 与 BibTeX 导出，方便复用本仓库数据。"),
            ("[scripts/](scripts/)", "可复现的生成与校验脚本。"),
            ("[ROADMAP.md](ROADMAP.md)", "公开路线图与贡献优先级。"),
        ]
        header = "🧩 仓库结构"
        head_row = "| 路径 | 用途 |"
    else:
        rows = [
            ("[docs/](docs/)", "Conceptual lessons: mental model, taxonomy, construction cookbook, verifiers, agent trajectories, scaling, and failure modes."),
            ("[papers/](papers/README.md)", "Field navigation: one page per track with read-first tables, full paper lists, and audit checklists."),
            ("[cards/](cards/README.md)", "Learning cards: paper/data/verifier/recipe/benchmark/failure summaries with links and audit questions."),
            ("[data/papers.yaml](data/papers.yaml)", "Structured source of truth for paper metadata, roles, contracts, summaries, links, and curation levels."),
            ("[docs/index.html](docs/index.html)", "Searchable web index (in progress), generated from structured data."),
            ("[reports/](reports/)", "Public QA and coverage: link coverage, needs-search, release notes, and quality audits."),
            ("[exports/](exports/)", "CSV, JSON, and BibTeX exports for readers who want to reuse the data."),
            ("[scripts/](scripts/)", "Reproducible generators and validators."),
            ("[ROADMAP.md](ROADMAP.md)", "Public priorities for making the collection more useful and citable."),
        ]
        header = "🧩 Repository structure"
        head_row = "| Path | What it is for |"
    table = "\n".join([head_row, "|---|---|"] + [f"| {path} | {desc} |" for path, desc in rows])
    return f"<details>\n<summary>{header}</summary>\n\n{table}\n\n</details>"


def level_table(zh: bool = False) -> str:
    if zh:
        labels = {
            "L0_seeded": "只有题目或书目线索。",
            "L1_link_verified": "已核实论文、arXiv、会议或 DOI 官方链接。",
            "L2_artifact_verified": "代码、数据、项目或模型等制品链接也已核实。",
            "L3_summary_ready": "已有一句话摘要与价值说明。",
            "L4_carded": "已有本地卡片，解释数据对象、验证器、用途与审计要点。",
            "L5_audit_ready": "卡片包含具体风险、缺失字段与审计问题。",
        }
        rows = ["| 等级 | 含义 |", "|---|---|"]
    else:
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


def badges() -> str:
    s = stats()
    ask = ask_launch_status()
    return f"""[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Paper](https://img.shields.io/badge/arXiv-2606.02113-b31b1b)](https://arxiv.org/abs/2606.02113)
[![Site](https://img.shields.io/badge/site-in%20progress-6b7280)]({PAGES_URL})
[![Ask]({ask["badge"]})]({ASK_URL})
[![Entries](https://img.shields.io/badge/entries-{s['total']}-2563eb)](data/papers.yaml)
[![Verified](https://img.shields.io/badge/verified-{s['verified']}-0f766e)](reports/link_coverage.md)
[![Cards](https://img.shields.io/badge/cards-{s['cards']}-7c3aed)](cards/README.md)
[![L5](https://img.shields.io/badge/L5%20audit--ready-{s['l5']}-ea580c)](reports/five_task_quality_audit.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)"""


def readme_en() -> str:
    ask = ask_launch_status()
    return f"""# 🌟 Awesome LLM Reasoning Data

> A curated, field-learning repository for post-training reasoning data: what it is, how it is built, how it is verified, how it enters training, and how to audit it.

{badges()}

<p align="center">
  <img src="assets/cover.svg" width="92%" alt="Awesome LLM Reasoning Data">
</p>

**Awesome LLM Reasoning Data** is a field map, not just a paper list: learning guides explain the concepts, category pages organize the papers by subfield, cards summarize data objects and risks, and a searchable site indexes the structured metadata. Everything is organized around one practical question:

> When a model becomes better at reasoning after post-training, what data record, feedback signal, verifier, reward, environment, or judge actually made that possible?

📄 Companion paper: [A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113) · 🔎 Searchable site: in progress · 🤖 Ask: [{ask["en_text"]}]({ASK_URL})

## 🚀 How to Use This Repo

A useful reasoning-data sample is rarely `prompt -> answer`. It is usually:

`task/context -> trace/actions -> answer/artifact -> verifier/reward/judge/environment -> metadata`

Pick the path that matches your goal:

- 🧭 **New to the field** — walk the [Learning Path](#-learning-path) from Stage 1, starting with [00 · Start here](docs/00_start_here.md).
- 🏗️ **Building a dataset** — follow the [construction cookbook](docs/05_construction_cookbook.md), then compare [release cards](cards/releases/) and [recipe cards](cards/recipes/).
- 🧪 **Auditing verifiers or claims** — start from [verifiers and rewards](docs/06_verifiers_and_rewards.md) and [audit and failure modes](docs/09_audit_and_failure_modes.md).
- 🔎 **Looking for a specific paper** — jump into the [Contents](#-contents) below, or grep [data/papers.yaml](data/papers.yaml) and [exports/](exports/).
- 🤝 **Contributing** — pick a gap from [needs_search](reports/needs_search.md) and read [CONTRIBUTING.md](CONTRIBUTING.md).

## 🔥 Latest Updates

{latest_updates()}

> Metadata stays conservative: links that are not verified locally remain in [needs_search](reports/needs_search.md) instead of being promoted.

{snapshot_details()}

## 📚 Contents

Each track page includes a track explanation, a read-first table, the full paper list, and an audit checklist.

{contents_tree()}

## 🧭 Learning Path

Four stages, in reading order. Each stage starts from the learning guides; the must-read papers for each stage are being curated and will land here.

{learning_path()}

## 🔎 Searchable Website (In Progress)

The searchable site is still being built. Once it ships, it will support search plus filters for year, venue, source role, verification contract, supervision granularity, training use, curation level, status, and artifact availability. Until then, use the [Contents](#-contents) above and the [exports/](exports/) files.

{repo_structure_details()}

## 🤝 Contributing

Please do not submit only a paper title. A useful contribution includes official links, source role, verification contract, supervision granularity, training use, and a one-line summary, with card and audit fields when available. Start with [CONTRIBUTING.md](CONTRIBUTING.md); open gaps live in [needs_search](reports/needs_search.md) and [ROADMAP.md](ROADMAP.md).

<details>
<summary>🧱 Curation levels</summary>

{level_table()}

</details>

## 📜 Citation

If this repository helps your related work, dataset construction, verifier design, or reading group, please cite the companion paper and link this repository. See [CITATION.cff](CITATION.cff).

## 📄 License

MIT. See [LICENSE](LICENSE).
"""


def readme_zh() -> str:
    ask = ask_launch_status()
    return f"""# 🌟 Awesome LLM Reasoning Data

> 系统学习大模型后训练推理数据的精选仓库：数据是什么、如何构造、如何验证、如何进入训练、如何审计。

{badges()}

<p align="center">
  <img src="assets/cover_zh.svg" width="92%" alt="大模型后训练推理数据精选">
</p>

**本仓库是一份领域地图，而不只是论文清单**：学习指南讲清概念，分类页按子方向组织论文，论文卡片概括数据对象与风险，检索网站索引全部结构化元数据。所有内容围绕一个核心问题展开：

> 模型经过后训练后推理能力变强，背后究竟是哪条数据记录、哪种反馈信号、哪个验证器、奖励、环境或评审在起作用？

📄 配套论文：[A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113) · 🔎 检索网站：制作中 · 🤖 {ask["zh_text"].split("（")[0]}：[{ask["zh_text"]}]({ASK_URL})

## 🚀 如何使用本仓库

一条有用的推理数据样本，通常不是 `提问 -> 答案`，而是：

`任务/上下文 -> 推理轨迹/动作 -> 答案/产物 -> 验证器/奖励/评审/环境 -> 元数据`

按你的目标选择路径：

- 🧭 **初学者**——沿[学习路径](#-学习路径)从第一阶段读起，第一篇是[00 · 从这里开始](docs/00_start_here.md)。
- 🏗️ **要构造数据集**——按[05 · 构造手册](docs/05_construction_cookbook.md)走一遍，再对照[发布卡片](cards/releases/)与[配方卡片](cards/recipes/)。
- 🧪 **要审计验证器或结论**——从[06 · 验证器与奖励](docs/06_verifiers_and_rewards.md)和[09 · 审计与失效模式](docs/09_audit_and_failure_modes.md)入手。
- 🔎 **要查某篇论文**——直接进下方[分类目录](#-分类目录)，或检索 [data/papers.yaml](data/papers.yaml) 与[导出文件](exports/)。
- 🤝 **想参与贡献**——从[待补清单](reports/needs_search.md)挑一条，读[贡献指南](CONTRIBUTING.md)。

## 🔥 最新动态

{latest_updates(zh=True)}

> 元数据从严处理：未经本地核验的链接一律留在[待补清单](reports/needs_search.md)，不会被提前收录。

{snapshot_details(zh=True)}

## 📚 分类目录

每个方向都有独立页面，包含方向说明、优先阅读表、完整论文列表与审计清单。

{contents_tree(zh=True)}

## 🧭 学习路径

四个阶段循序渐进。每个阶段先读学习指南搭好框架，各阶段的必读论文正在整理，会陆续补充进来。

{learning_path(zh=True)}

## 🔎 检索网站（制作中）

检索网站正在制作中。上线后将支持关键词检索，并可按年份、会议、来源角色、验证契约、监督粒度、训练用途、整理等级、状态与制品可用性筛选。上线前可先使用上方[分类目录](#-分类目录)与[导出文件](exports/)。

{repo_structure_details(zh=True)}

## 🤝 参与贡献

请不要只提交论文标题。一次有价值的贡献应包含官方链接、来源角色、验证契约、监督粒度、训练用途和一句话摘要，有条件时再补卡片与审计字段。入口见[贡献指南](CONTRIBUTING.md)；待补条目见[待补清单](reports/needs_search.md)与[路线图](ROADMAP.md)。

<details>
<summary>🧱 整理等级</summary>

{level_table(zh=True)}

</details>

## 📜 引用

如果本仓库对你的研究、数据构造、验证器设计或读书会有帮助，请引用配套论文并链接本仓库，格式见 [CITATION.cff](CITATION.cff)。

## 📄 许可

MIT，见 [LICENSE](LICENSE)。
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
