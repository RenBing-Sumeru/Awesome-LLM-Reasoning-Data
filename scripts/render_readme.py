#!/usr/bin/env python3
from __future__ import annotations

import argparse
import tempfile
from pathlib import Path

from atlas_utils import (
    CURATION_LEVELS,
    artifacts,
    card_inventory,
    curation_level,
    entries,
    primary_link,
    starter_matches,
    starter_packs,
    why_it_matters,
)
from common import ROOT


def stats() -> dict:
    data = entries()
    cards = card_inventory()
    return {
        "total": len(data),
        "verified": sum(1 for entry in data if entry.get("status") == "verified"),
        "primary": sum(1 for entry in data if primary_link(entry)),
        "cards": len(cards),
        "needs_search": sum(1 for entry in data if not primary_link(entry)),
        "data_releases": sum(1 for entry in data if "data_release" in (entry.get("source_role") or [])),
        "verifiers": sum(1 for entry in data if "verifier_reward" in (entry.get("source_role") or [])),
        "agents": sum(1 for entry in data if "agent_environment" in (entry.get("source_role") or [])),
    }


def starter_table() -> str:
    data = entries()
    cards = card_inventory()
    matches = starter_matches(data)
    beginner = next((pack for pack in starter_packs() if pack.get("id") == "beginner_20"), starter_packs()[0])
    rows = ["| # | Work | Link | Card | Why it matters |", "|---:|---|---|---|---|"]
    for index, title in enumerate(beginner.get("entries", []), 1):
        entry = matches.get(title)
        if not entry:
            rows.append(f"| {index} | {title} | needs_search | needs_card | Needs curator review. |")
            continue
        link = f"[Paper]({primary_link(entry)})" if primary_link(entry) else "needs_search"
        card = f"[Card]({cards[entry.get('id')]})" if cards.get(entry.get("id")) else "needs_card"
        rows.append(f"| {index} | {entry.get('title')} | {link} | {card} | {why_it_matters(entry)} |")
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
        f"| 2026-06-15 | Upgraded atlas metadata to **{s['verified']} verified entries** and **{s['cards']} cards**. | Readers can now separate official-link-verified work from the needs-search queue. |",
        "| 2026-06-15 | Added generated coverage, exports, paper pages, and searchable-site data. | Counts and public reports are reproducible from structured metadata. |",
        "| 2026-06-15 | Prepared v0.1.0 release notes and stricter contribution workflow. | Future PRs must include official links, classification metadata, and clear audit fields. |",
    ])


def readme_en() -> str:
    s = stats()
    return f"""# 🌟 Awesome LLM Reasoning Data

> A link-verified, searchable, learning-first atlas of post-training reasoning data, verifiers, reward signals, construction recipes, benchmarks, frontier reports, and audit fields.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Paper](https://img.shields.io/badge/arXiv-2606.02113-b31b1b)](https://arxiv.org/abs/2606.02113)
[![Entries](https://img.shields.io/badge/entries-{s['total']}-2563eb)](data/papers.yaml)
[![Verified](https://img.shields.io/badge/verified-{s['verified']}-0f766e)](reports/link_coverage.md)
[![Cards](https://img.shields.io/badge/cards-{s['cards']}-7c3aed)](cards/README.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="assets/overview.svg" width="92%" alt="Awesome LLM Reasoning Data overview">
</p>

## What Is This?

This repository is a living atlas for the data layer behind reasoning-model post-training. It focuses on the records that make reasoning behavior trainable, reinforceable, evaluable, and auditable:

`task/context -> trace/actions -> answer/artifact -> verifier/reward/judge/environment -> metadata`

It is intentionally narrower than a general LLM reasoning list. The goal is to help readers find official papers, understand what data object each work exposes, inspect the feedback contract, and decide whether a release or benchmark is reusable before opening every source paper.

Companion paper: [A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113).

## Latest Updates

{latest_updates()}

## Start Here

| I want to... | Go to |
|---|---|
| understand the field | [docs/00_start_here.md](docs/00_start_here.md) |
| find papers | [papers/README.md](papers/README.md) |
| study math/code/proof data | [papers/02_programmatic_math_code_proof.md](papers/02_programmatic_math_code_proof.md) |
| study process supervision | [papers/03_process_supervision_prm.md](papers/03_process_supervision_prm.md) |
| study agent data | [papers/04_environmental_agents_tools_web_swe.md](papers/04_environmental_agents_tools_web_swe.md) |
| study frontier model reports | [papers/07_frontier_model_reports.md](papers/07_frontier_model_reports.md) |
| use the searchable atlas | [docs/index.html](docs/index.html) |
| inspect link coverage | [reports/link_coverage.md](reports/link_coverage.md) |
| contribute a paper/card | [CONTRIBUTING.md](CONTRIBUTING.md) |

## Snapshot Stats

| Metric | Count |
|---|---:|
| Total entries | {s['total']} |
| Verified official primary links | {s['verified']} |
| Entries with paper/arXiv/venue/DOI links | {s['primary']} |
| Cards | {s['cards']} |
| Needs search | {s['needs_search']} |
| Data releases | {s['data_releases']} |
| Verifiers / rewards | {s['verifiers']} |
| Agent / environment entries | {s['agents']} |

## Starter Pack: 20 Must-Read Papers

{starter_table()}

## Paper Atlas

The long categorized lists live in [papers/](papers/README.md). Each category page includes a category explanation, read-first table, full paper list, audit checklist, related cards, and open gaps.

- [Surveys and Primers](papers/00_surveys_and_primers.md)
- [Foundations: Instruction, Preference, and Alignment Data](papers/01_foundations_instruction_preference_alignment.md)
- [Programmatic Math, Code, and Proof Data](papers/02_programmatic_math_code_proof.md)
- [Process Supervision and Process Reward Models](papers/03_process_supervision_prm.md)
- [Environmental Agent, Tool, Web, and SWE Trajectory Data](papers/04_environmental_agents_tools_web_swe.md)
- [Judgment-Required Rubrics, Safety, Medical, and Domain Data](papers/05_judgment_required_rubrics_safety_domain.md)
- [Construction Recipes and Open Reasoning Data](papers/06_construction_recipes_open_reasoning_data.md)
- [Frontier Reasoning Model Reports](papers/07_frontier_model_reports.md)
- [Scaling, Test-Time Compute, and RLVR](papers/08_scaling_test_time_compute_rlvr.md)
- [Audit, Failure, Contamination, and Verifier Attacks](papers/09_audit_failure_contamination_verifier_attacks.md)
- [Benchmarks and Evaluation Surfaces](papers/10_benchmarks_evaluation.md)

## Card Library

Cards turn citations into engineering decisions. They explain the data object, verifier/reward/environment, construction recipe, post-training use, audit questions, and risks.

- [Card index](cards/README.md)
- [Release cards](cards/releases/)
- [Verifier cards](cards/verifiers/)
- [Agent/environment cards](cards/agents/)
- [Recipe cards](cards/recipes/)
- [Failure/audit cards](cards/failures/)
- [Benchmark cards](cards/benchmarks/)

## Searchable Website

Open [docs/index.html](docs/index.html) locally or through GitHub Pages. The site is generated from [docs/assets/entries.json](docs/assets/entries.json) and supports search plus filters for year, venue, source role, verification contract, supervision granularity, training use, curation level, status, and artifact availability.

## Curation Levels

{level_table()}

## Contributing

Please do not submit only a paper title. A useful contribution includes official links, source role, verification contract, supervision granularity, training use, a one-line summary, a why-it-matters rationale, and card/audit fields when available. Start with [CONTRIBUTING.md](CONTRIBUTING.md).

## Citation

If this atlas helps your related work, dataset construction, verifier design, or reading group, please cite the companion paper and link this repository. See [CITATION.cff](CITATION.cff).

## License

MIT. See [LICENSE](LICENSE).
"""


def readme_zh() -> str:
    s = stats()
    return f"""# 🌟 Awesome LLM Reasoning Data

> 面向大模型后训练推理数据的可检索、可验证、学习优先的 atlas：覆盖数据集、验证器、奖励信号、构造 recipe、benchmark、前沿模型报告与审计字段。

[论文：A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113)

## 这个项目是什么？

这个仓库关注推理模型后训练背后的数据层，不只是收集论文标题，而是尽量回答：

`任务/上下文 -> 推理轨迹/动作 -> 答案/产物 -> 验证器/奖励/裁判/环境 -> 元数据`

读者可以用它快速找到官方论文链接，理解每篇工作暴露的数据对象、反馈契约、训练用途和审计风险。

## 快速入口

| 我想要... | 入口 |
|---|---|
| 快速理解领域 | [docs/00_start_here.md](docs/00_start_here.md) |
| 找论文地图 | [papers/README.md](papers/README.md) |
| 看可搜索网页 | [docs/index.html](docs/index.html) |
| 看卡片库 | [cards/README.md](cards/README.md) |
| 看链接覆盖率 | [reports/link_coverage.md](reports/link_coverage.md) |
| 贡献论文或卡片 | [CONTRIBUTING.md](CONTRIBUTING.md) |

## 当前快照

| 指标 | 数量 |
|---|---:|
| 总条目 | {s['total']} |
| 已验证官方主链接 | {s['verified']} |
| 有 paper/arXiv/venue/DOI 链接 | {s['primary']} |
| 卡片 | {s['cards']} |
| 仍需搜索 | {s['needs_search']} |

## Starter Pack：20 篇必读

{starter_table()}

## Curation Levels

{level_table()}

## 引用

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
