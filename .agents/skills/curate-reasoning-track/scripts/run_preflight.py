#!/usr/bin/env python3
from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
from pathlib import Path


def command_specs(profile: str) -> list[list[str]]:
    python = sys.executable
    standard = [
        [python, "scripts/validate_data.py"],
        [python, "scripts/render_cards.py", "--check"],
        [python, "scripts/render_papers.py", "--check"],
        [python, "scripts/render_readme.py", "--check"],
        [python, "scripts/render_site.py", "--check"],
        [python, "scripts/add_card_ask_links.py", "--check"],
        [python, "scripts/secret_scan.py"],
        ["git", "diff", "--check"],
    ]
    if profile == "fast":
        return [standard[0], standard[5], standard[6], standard[7]]
    return standard[:6] + [["npm", "--prefix", "apps/ask-atlas", "run", "rag:check"]] + standard[6:]


def main() -> int:
    parser = argparse.ArgumentParser(description="Run core Awesome LLM Reasoning Data pre-submission checks.")
    parser.add_argument("--profile", choices=("fast", "standard"), default="standard")
    parser.add_argument("--repo", type=Path, default=Path.cwd(), help="Repository root")
    args = parser.parse_args()

    repo = args.repo.resolve()
    if not (repo / "data" / "papers.yaml").exists() or not (repo / "scripts").is_dir():
        print("ERROR: --repo must point to the Awesome-LLM-Reasoning-Data root", file=sys.stderr)
        return 2

    failures: list[tuple[list[str], int]] = []
    skipped: list[list[str]] = []

    for command in command_specs(args.profile):
        executable = command[0]
        if executable != sys.executable and shutil.which(executable) is None:
            print(f"SKIP: {' '.join(command)} (executable not found)")
            skipped.append(command)
            continue

        print(f"RUN: {' '.join(command)}", flush=True)
        completed = subprocess.run(command, cwd=repo, check=False)
        if completed.returncode != 0:
            failures.append((command, completed.returncode))

    print("\nPreflight summary")
    print(f"- failed: {len(failures)}")
    print(f"- skipped: {len(skipped)}")
    for command, code in failures:
        print(f"- FAIL ({code}): {' '.join(command)}")
    for command in skipped:
        print(f"- SKIP: {' '.join(command)}")

    if skipped:
        print("Preflight is incomplete because required executables were unavailable.")
    return 1 if failures or skipped else 0


if __name__ == "__main__":
    raise SystemExit(main())
