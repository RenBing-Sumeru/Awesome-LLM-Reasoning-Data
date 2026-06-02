#!/usr/bin/env python3
"""Suggest primary-source search queries for entries that still need links.

This script intentionally does not invent links. It reads `data/papers.yaml` and
prints search queries for entries without paper/arXiv/DOI/code/data/project links.
Curators can run the queries, verify primary sources, then update the YAML.
"""
from __future__ import annotations

import argparse
from common import ROOT, load_yaml_json

ARTIFACT_KEYS = ["paper", "arxiv", "doi", "code", "data", "project", "huggingface"]


def has_artifact(entry: dict) -> bool:
    artifacts = entry.get("artifacts") or {}
    return any(artifacts.get(key) for key in ARTIFACT_KEYS)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=50, help="maximum entries to print")
    parser.add_argument("--status", default="needs_metadata,needs_search,needs_url,partial", help="comma-separated statuses to inspect")
    args = parser.parse_args()
    statuses = {item.strip() for item in args.status.split(",") if item.strip()}
    entries = load_yaml_json(ROOT / "data/papers.yaml")
    selected = [e for e in entries if e.get("status") in statuses and not has_artifact(e)]
    print(f"entries needing primary links: {len(selected)}")
    for entry in selected[: args.limit]:
        title = entry.get("title") or entry.get("id")
        year = entry.get("year") or ""
        print(f"- {entry.get('id')} :: {title} {year} arXiv official GitHub dataset")
    if len(selected) > args.limit:
        print(f"... {len(selected) - args.limit} more")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
