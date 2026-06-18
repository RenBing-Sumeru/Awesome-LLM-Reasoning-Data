#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path

from common import ROOT


ASK_NAME = "Ask the Atlas"
ASK_LINK_MARKERS = ("/ask/", "ask/")

REQUIRED_MARKDOWN = [
    "README.md",
    "README_zh.md",
    "docs/_sidebar.md",
    "docs/00_start_here.md",
    "docs/01_what_is_post_training_reasoning_data.md",
    "docs/02_verifier_anchored_taxonomy.md",
    "docs/03_reasoning_data_objects.md",
    "docs/04_data_quality.md",
    "docs/05_construction_cookbook.md",
    "docs/06_verifiers_and_rewards.md",
    "docs/07_agent_trajectory_data.md",
    "docs/08_scaling_and_test_time_compute.md",
    "docs/09_audit_and_failure_modes.md",
    "docs/10_industry_onboarding_path.md",
    "docs/companion_paper_primer.md",
    "docs/glossary.md",
]


def has_ask_entrypoint(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    return ASK_NAME in text and any(marker in text for marker in ASK_LINK_MARKERS)


def main() -> int:
    problems = []
    for rel in REQUIRED_MARKDOWN:
        path = ROOT / rel
        if not path.exists():
            problems.append(f"missing {rel}")
            continue
        if not has_ask_entrypoint(path):
            problems.append(f"missing Ask the Atlas entrypoint: {rel}")
    if problems:
        for problem in problems:
            print("ERROR:", problem)
        return 1
    print("Ask the Atlas entrypoints are present")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
