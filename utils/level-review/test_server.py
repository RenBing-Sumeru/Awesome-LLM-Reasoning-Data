#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import subprocess
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
SERVER_PATH = ROOT / "utils/level-review/server.py"


def load_server():
    spec = importlib.util.spec_from_file_location("level_review_server", SERVER_PATH)
    module = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    spec.loader.exec_module(module)
    return module


def write_project(root: Path, entry_yaml: str, card_markdown: str | None = None) -> None:
    (root / "data").mkdir(parents=True, exist_ok=True)
    (root / "cards/agents").mkdir(parents=True, exist_ok=True)
    (root / "data/papers.yaml").write_text(entry_yaml.strip() + "\n", encoding="utf-8")
    if card_markdown is not None:
        (root / "cards/agents/example.md").write_text(card_markdown.strip() + "\n", encoding="utf-8")


def git(root: Path, *args: str) -> None:
    subprocess.run(["git", *args], cwd=root, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)


def entry_yaml(extra: str = "") -> str:
    return f"""
- id: example-agent-2026
  title: Example Agent Benchmark
  year: 2026
  venue: ExampleConf
  authors: []
  source_role: [benchmark, agent_environment]
  verification_contract: [environmental]
  supervision_granularity: [full_episode]
  domains: [agents]
  training_use: [evaluation]
  construction_layer: [release_audit]
  category: [environment_agent_trajectory_data, benchmarks_evaluation_surfaces]
  one_line_summary: Evaluates browser-style agent trajectories with reproducible task outcomes.
  why_it_matters: It exposes an environment-backed benchmark surface for reviewing agent data.
  inclusion_reason: Example benchmark for level review tests.
  status: verified
  curation_level: L4_carded
  artifacts:
    arxiv: https://arxiv.org/abs/2601.00001
    code: https://github.com/example/agent-benchmark
  verification:
    link_verified: true
  data_object:
    answer_format: full episode trajectory
    environment_or_substrate: browser benchmark v1
  recipe_metadata: {{}}
  audit:
{extra}
  related: []
  tags: []
"""


def complete_card(entry_id: str = "example-agent-2026") -> str:
    return f"""
<!-- entry_id: {entry_id} -->
# Example Agent Benchmark

## TL;DR
Short review text.

## 1. What is this work?
It is a benchmark.

## 2. What data object does it expose?
It exposes episodes.

## 3. What is the verifier / reward / judge / environment?
It uses an environment.

## 4. How is the data constructed?
It is released by the benchmark authors.

## 5. How can it enter post-training?
It can be used for evaluation.

## 6. What should readers audit?
Readers should audit splits and environment versions.

## 7. What is missing or risky?
Environment drift is the main risk.

## 9. Links and citation
https://arxiv.org/abs/2601.00001
"""


class LevelReviewServerTests(unittest.TestCase):
    def test_static_assets_exist_and_frontend_reads_review_api(self) -> None:
        index = ROOT / "utils/level-review/index.html"
        app = ROOT / "utils/level-review/app.js"
        styles = ROOT / "utils/level-review/styles.css"

        for path in [index, app, styles]:
            self.assertTrue(path.exists(), f"{path.name} should exist")

        app_text = app.read_text(encoding="utf-8")
        self.assertIn("/api/review", app_text)
        self.assertIn("升级选项", app_text)
        self.assertIn("L5 硬门槛", app_text)
        self.assertIn("人工审计建议", app_text)
        self.assertIn("不是硬阻塞", app_text)
        self.assertNotIn("L4_carded:", app_text)
        self.assertNotIn("L5_audit_ready:", app_text)

    def test_review_payload_includes_full_entry_yaml_and_full_card_markdown(self) -> None:
        server = load_server()
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            write_project(
                root,
                entry_yaml(
                    """
    license: documented
    split: documented
    decontamination: documented
    lineage: official release
    environment_version: browser benchmark v1
    availability: code and data available
"""
                ),
                complete_card(),
            )

            payload = server.build_review_payload(root=root, base_ref=None, changed_only=False)

        item = payload["items"][0]
        self.assertIn("Example Agent Benchmark", item["full_entry_yaml"])
        self.assertIn("verification:", item["full_entry_yaml"])
        self.assertIn("## 9. Links and citation", item["card_markdown"])
        self.assertEqual(item["card_path"], "cards/agents/example.md")

    def test_l4_to_l5_path_treats_missing_audit_evidence_as_advisory(self) -> None:
        server = load_server()
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            write_project(root, entry_yaml("    license: unknown\n"), complete_card())

            payload = server.build_review_payload(root=root, base_ref=None, changed_only=False)

        item = payload["items"][0]
        self.assertTrue(item["l5_path"]["ready"])
        self.assertEqual([], item["l5_path"]["blocking"])
        self.assertIn("audit.license is missing or unknown", item["audit_advisories"])
        self.assertIn("audit.split is missing or unknown", item["audit_advisories"])

    def test_l5_placeholder_detection_is_case_insensitive(self) -> None:
        server = load_server()
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            write_project(
                root,
                entry_yaml(
                    """
    license: documented
    split: documented
    decontamination: documented
    lineage: official release
    environment_version: browser benchmark v1
    availability: code and data available
"""
                ),
                complete_card() + "\nNeeds curator review\n",
            )

            payload = server.build_review_payload(root=root, base_ref=None, changed_only=False)

        item = payload["items"][0]
        self.assertFalse(item["l5_path"]["ready"])
        self.assertIn("card contains placeholder marker: needs curator review", item["l5_path"]["blocking"])

    def test_card_diff_is_available_when_current_card_loses_entry_id(self) -> None:
        server = load_server()
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            write_project(
                root,
                entry_yaml(
                    """
    license: documented
    split: documented
    decontamination: documented
    lineage: official release
    environment_version: browser benchmark v1
    availability: code and data available
"""
                ),
                complete_card(),
            )
            git(root, "init")
            git(root, "config", "user.email", "review@example.com")
            git(root, "config", "user.name", "Review Test")
            git(root, "add", "data/papers.yaml", "cards/agents/example.md")
            git(root, "commit", "-m", "base")
            git(root, "branch", "-M", "main")
            (root / "cards/agents/example.md").write_text(complete_card().replace("<!-- entry_id: example-agent-2026 -->\n", ""), encoding="utf-8")

            payload = server.build_review_payload(root=root, base_ref="main", changed_only=True)

        item = payload["items"][0]
        self.assertEqual("cards/agents/example.md", item["card_path"])
        self.assertIn("entry_id: example-agent-2026", item["card_diff"])

    def test_l5_environment_version_gap_is_advisory_not_hard_blocker(self) -> None:
        server = load_server()
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            write_project(
                root,
                entry_yaml(
                    """
    license: documented
    split: documented
    decontamination: documented
    lineage: official release
    availability: code and data available
"""
                ),
                complete_card(),
            )

            payload = server.build_review_payload(root=root, base_ref=None, changed_only=False)

        item = payload["items"][0]
        self.assertTrue(item["l5_path"]["ready"])
        self.assertEqual([], item["l5_path"]["blocking"])
        self.assertIn("audit.environment_version is missing or unknown", item["audit_advisories"])

    def test_l4_to_l5_path_is_ready_when_all_evidence_is_present(self) -> None:
        server = load_server()
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            write_project(
                root,
                entry_yaml(
                    """
    license: documented
    split: documented
    decontamination: documented
    lineage: official release
    environment_version: browser benchmark v1
    availability: code and data available
"""
                ),
                complete_card(),
            )

            payload = server.build_review_payload(root=root, base_ref=None, changed_only=False)

        item = payload["items"][0]
        self.assertTrue(item["l5_path"]["ready"])
        self.assertEqual([], item["l5_path"]["blocking"])
        self.assertEqual("OK", item["review_status"])
        self.assertIn("只登记 L5", item["codex_task"])

    def test_codex_task_explains_blocked_l5_upgrade(self) -> None:
        server = load_server()
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            write_project(root, entry_yaml("    license: documented\n"), complete_card() + "\nKnown failure modes: unknown\n")

            payload = server.build_review_payload(root=root, base_ref=None, changed_only=False)

        item = payload["items"][0]
        self.assertFalse(item["l5_path"]["ready"])
        self.assertIn("先修复硬阻塞", item["codex_task"])
        self.assertIn("card contains placeholder marker", item["codex_task"])


if __name__ == "__main__":
    unittest.main()
