#!/usr/bin/env python3
"""Verified post-2025-07-11 candidates for programmatically checked outcomes.

This declaration is intentionally side-effect free.  Task 2 consumes it to create
Card directories only after the candidates have passed the review gate.
"""
from __future__ import annotations

from datetime import date
from pathlib import Path

if __package__:
    from . import library
else:  # pragma: no cover - exercised by the documented script entry point
    import library


CATEGORY_ID = "programmatically_verifiable_outcome_data"
EARLIEST_RELEASE_DATE = date(2025, 7, 11)

# (id, title, year, venue, authors, primary_url, verifier_kind, impact_signal)
PAPERS = [
    (
        "formalproofbench-2026",
        "FormalProofBench: Can Models Write Graduate Level Math Proofs That Are Formally Verified?",
        2026,
        "ICLR 2026 VerifAI-2 Workshop / arXiv",
        [
            "Nikil Ravi",
            "Kexing Ying",
            "Vasilii Nesterov",
            "Rayan Krishnan",
            "Elif Uskuplu",
            "Bingyu Xia",
            "Janitha Aswedige",
            "Langston Nashold",
        ],
        "https://arxiv.org/abs/2603.26996",
        "Lean 4 kernel acceptance of a submitted proof",
        "ICLR 2026 VerifAI-2 paper; graduate-level Lean benchmark from Vals AI and EPFL authors",
    ),
    (
        "verisoftbench-2026",
        "VeriSoftBench: Repository-Scale Formal Verification Benchmarks for Lean",
        2026,
        "arXiv",
        ["Yutong Xin", "Qiaochu Chen", "Greg Durrett", "Işil Dillig"],
        "https://arxiv.org/abs/2602.18307",
        "Lean 4 type checker on repository-context proof obligations",
        "Open 500-obligation software-verification benchmark from UT Austin formal-methods researchers",
    ),
    (
        "ntp4vc-2026",
        "Neural Theorem Proving for Verification Conditions: A Real-World Benchmark",
        2026,
        "ICLR 2026",
        [
            "Qiyuan Xu",
            "Xiaokun Luan",
            "Renxi Wang",
            "Joshua Ong Jun Leang",
            "Peixin Wang",
            "Haonan Li",
            "Wenda Li",
            "Conrad Watt",
        ],
        "https://arxiv.org/abs/2601.18944",
        "Isabelle, Lean, and Rocq proof-checker acceptance for verification conditions",
        "ICLR 2026 conference paper; first real-world multi-language VC-proving benchmark",
    ),
    (
        "leap-formal-mathematics-2026",
        "LEAP: Supercharging LLMs for Formal Mathematics with Agentic Frameworks",
        2026,
        "arXiv",
        [
            "Po-Nien Kung",
            "Linfeng Song",
            "Dawsen Hwang",
            "Jinsung Yoon",
            "Chun-Liang Li",
            "Simone Severini",
            "Mirek Olšák",
            "Edward Lockhart",
            "Quoc V. Le",
            "Burak Gokturk",
            "Thang Luong",
            "Tomas Pfister",
            "Nanyun Peng",
        ],
        "https://arxiv.org/abs/2606.03303",
        "Lean compiler checks every generated proof and proof-DAG composition",
        "Google research technical report; introduces Lean-IMO-Bench and reports all 12 2025 Putnam problems solved",
    ),
    (
        "hilbert-recursively-building-formal-proofs-2025",
        "Hilbert: Recursively Building Formal Proofs with Informal Reasoning",
        2025,
        "ICLR 2026",
        ["Sumanth Varambally", "Thomas Voice", "Yanchao Sun", "Zhifeng Chen", "Rose Yu", "Ke Ye"],
        "https://arxiv.org/abs/2509.22819",
        "Lean 4 proof-assistant acceptance and feedback during recursive proof repair",
        "ICLR 2026 conference paper from Apple/UC San Diego; public-model PutnamBench best reported result",
    ),
    (
        "mcpmark-2025",
        "MCPMark: A Benchmark for Stress-Testing Realistic and Comprehensive MCP Use",
        2025,
        "ICLR 2026",
        [
            "Zijian Wu",
            "Xiangyan Liu",
            "Xinyuan Zhang",
            "Lingjun Chen",
            "Fanqing Meng",
            "Lingxiao Du",
            "Yiran Zhao",
            "Fanshi Zhang",
            "Yaoqi Ye",
            "Jiawei Wang",
            "Zirui Wang",
            "Jinjie Ni",
            "Yufan Yang",
            "Arvin Xu",
            "Michael Qizhe Shieh",
        ],
        "https://arxiv.org/abs/2509.24002",
        "Task-specific programmatic scripts check final state across MCP tool environments",
        "ICLR 2026 conference benchmark with 127 stateful MCP tasks and released execution tooling",
    ),
    (
        "gvpo-interactive-coding-agents-2025",
        "Group Verification-based Policy Optimization for Interactive Coding Agents",
        2025,
        "ICLR 2026",
        [
            "Silong Dai",
            "Changzhi Sun",
            "Haolun Wu",
            "Huanran Zheng",
            "Tao Ji",
            "Junchi Yan",
            "Yuanbin Wu",
            "Dell Zhang",
            "Xiaoling Wang",
            "Xuelong Li",
        ],
        "https://openreview.net/forum?id=RY47Tq0VsV",
        "AppWorld goal tests plus deterministic compilation, exception, and partial-test feedback",
        "ICLR 2026 conference paper; directly combines outcome- and process-verifiable reward signals",
    ),
    (
        "utrl-unit-test-adversarial-rl-2025",
        "Learning to Generate Unit Test via Adversarial Reinforcement Learning",
        2025,
        "ICLR 2026",
        ["Dongjun Lee", "Changho Hwang", "Kimin Lee"],
        "https://openreview.net/forum?id=VqjNYF9nbP",
        "Executable unit-test pass/fail and discrimination rewards",
        "ICLR 2026 conference paper from KAIST and Microsoft Research; generated tests outperform GPT-4.1/GPT-4o in reported evaluation",
    ),
    (
        "recode-h-2025",
        "RECODE-H: A Benchmark for Research Code Development with Interactive Human Feedback",
        2025,
        "ICLR 2026",
        [
            "Chunyu Miao",
            "Henry Peng Zou",
            "Yangning Li",
            "Yankai Chen",
            "Yibo Wang",
            "Fangxin Wang",
            "Yifan Li",
            "Wooseong Yang",
            "Bowei He",
            "Xinni Zhang",
            "Dianzhi Yu",
            "Hanchen Yang",
            "Hoang H. Nguyen",
            "Yue Zhou",
            "Jie Yang",
            "Jizhou Guo",
            "Wenzhe Fan",
            "Chin-Yuan Yeh",
            "Panpan Meng",
            "Liancheng Fang",
            "Jinhu Qi",
            "Wei-Chieh Huang",
            "Zhengyao Gu",
            "Yuwei Han",
            "Langzhou He",
            "Yuyao Yang",
            "Yinghui Li",
            "Hai-Tao Zheng",
            "Xue Liu",
            "Irwin King",
            "Philip S. Yu",
        ],
        "https://openreview.net/forum?id=IKnuyyPHCV",
        "Repository unit tests decide executable research-code task completion",
        "ICLR 2026 conference benchmark: 102 paper/repository tasks with executable unit tests and interactive-feedback protocol",
    ),
    (
        "impossiblebench-2025",
        "ImpossibleBench: Measuring LLMs' Propensity of Exploiting Test Cases",
        2025,
        "ICLR 2026",
        ["Ziqian Zhong", "Aditi Raghunathan", "Nicholas Carlini"],
        "https://openreview.net/forum?id=SeO4vyAj7E",
        "Unit-test outcome: passing a deliberately impossible task deterministically flags specification-violating behavior",
        "ICLR 2026 conference paper from Carnegie Mellon and Anthropic; released framework exposes test-suite exploitation",
    ),
]


RELEASE_DATES = {
    "formalproofbench-2026": "2026-03-02",
    "verisoftbench-2026": "2026-02-20",
    "ntp4vc-2026": "2025-09-19",
    "leap-formal-mathematics-2026": "2026-06-02",
    "hilbert-recursively-building-formal-proofs-2025": "2025-09-26",
    "mcpmark-2025": "2025-09-19",
    "gvpo-interactive-coding-agents-2025": "2025-09-19",
    "utrl-unit-test-adversarial-rl-2025": "2025-08-28",
    "recode-h-2025": "2025-09-05",
    "impossiblebench-2025": "2025-10-23",
}


def validate_candidates(root: Path | str | None = None) -> list[tuple]:
    """Return the reviewed candidates after checking library and source constraints."""
    known_categories = {str(category["id"]) for category in library.category_options(root)}
    if CATEGORY_ID not in known_categories:
        raise ValueError(f"missing required category: {CATEGORY_ID}")

    if len(PAPERS) != 10:
        raise ValueError(f"expected 10 candidates, found {len(PAPERS)}")
    if any(len(paper) != 8 for paper in PAPERS):
        raise ValueError("each candidate must have exactly eight fields")

    entry_ids = [paper[0] for paper in PAPERS]
    titles = [paper[1] for paper in PAPERS]
    if len(set(entry_ids)) != len(entry_ids):
        raise ValueError("candidate IDs must be unique")
    if len({title.casefold() for title in titles}) != len(titles):
        raise ValueError("candidate titles must be unique")
    if set(RELEASE_DATES) != set(entry_ids):
        raise ValueError("release-date audit must cover exactly the candidate IDs")

    for entry_id, title, year, venue, authors, url, verifier_kind, impact_signal in PAPERS:
        if not all((entry_id, title, venue, verifier_kind, impact_signal)):
            raise ValueError(f"{entry_id}: candidate fields must be non-empty")
        if not isinstance(year, int) or year < 2025:
            raise ValueError(f"{entry_id}: year must be 2025 or later")
        if not isinstance(authors, list) or not authors or not all(isinstance(author, str) and author for author in authors):
            raise ValueError(f"{entry_id}: authors must be a non-empty list")
        if not isinstance(url, str) or not url.startswith("https://"):
            raise ValueError(f"{entry_id}: primary URL must use HTTPS")
        try:
            released_at = date.fromisoformat(RELEASE_DATES[entry_id])
        except (TypeError, ValueError) as error:
            raise ValueError(f"{entry_id}: release date must use ISO format") from error
        if released_at < EARLIEST_RELEASE_DATE:
            raise ValueError(f"{entry_id}: released before {EARLIEST_RELEASE_DATE.isoformat()}")

    cards = library.load_cards(root)
    existing_titles = {
        str(card["paper"].get("title") or "").casefold()
        for card in cards.values()
    }
    duplicate_ids = sorted(set(entry_ids) & set(cards))
    duplicate_titles = sorted({title.casefold() for title in titles} & existing_titles)
    if duplicate_ids or duplicate_titles:
        collisions = duplicate_ids + duplicate_titles
        raise ValueError(f"candidate Cards already exist: {', '.join(collisions)}")

    return PAPERS


if __name__ == "__main__":
    print(f"verified candidates: {len(validate_candidates())}")
