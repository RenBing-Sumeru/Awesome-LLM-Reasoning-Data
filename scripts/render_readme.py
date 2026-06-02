#!/usr/bin/env python3
"""README consistency checks for redesign v2.

The redesign README is curated rather than marker-rendered. This script keeps
CI compatibility by checking that the key generated artifacts exist and that the
visible entry count agrees with data/papers.yaml.
"""
import argparse
import re
from common import ROOT, load_yaml_json


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    entries = load_yaml_json(ROOT / "data/papers.yaml") or []
    required = [
        ROOT / "README.md",
        ROOT / "README_zh.md",
        ROOT / "papers/README.md",
        ROOT / "docs/index.html",
        ROOT / "docs/assets/entries.json",
    ]
    missing = [str(p.relative_to(ROOT)) for p in required if not p.exists()]
    if missing:
        print("missing README artifacts: " + ", ".join(missing))
        return 1

    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    problems = []
    if "# 🌟 Awesome LLM Reasoning Data" not in readme:
        problems.append("README missing redesign title")
    if "## 🚀 60-second version" not in readme:
        problems.append("README missing 60-second version")
    if "papers/README.md" not in readme:
        problems.append("README missing paper atlas link")
    if str(len(entries)) not in readme:
        problems.append(f"README does not mention current entry count {len(entries)}")
    if not re.search(r"assets/(overview|paper_map)\.svg", readme):
        problems.append("README missing hero/map visual")

    if problems:
        for item in problems:
            print("ERROR:", item)
        return 1
    print("README generated sections are up to date")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
