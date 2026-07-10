#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any

import yaml


def load_entries(path: Path) -> list[dict[str, Any]]:
    value = yaml.safe_load(path.read_text(encoding="utf-8"))
    if isinstance(value, dict):
        return [value]
    if isinstance(value, list) and all(isinstance(item, dict) for item in value):
        return value
    raise ValueError(f"{path}: expected one YAML mapping or a list of mappings")


def as_values(value: Any) -> list[Any]:
    if isinstance(value, list):
        return value
    return [value]


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate staged metadata drafts against the repository schema contract.")
    parser.add_argument("drafts", nargs="+", type=Path, help="YAML draft files")
    parser.add_argument("--repo", type=Path, default=Path.cwd(), help="Repository root")
    args = parser.parse_args()

    repo = args.repo.resolve()
    schema_path = repo / "data" / "schema.json"
    papers_path = repo / "data" / "papers.yaml"
    if not schema_path.exists() or not papers_path.exists():
        print("ERROR: --repo must point to the Awesome-LLM-Reasoning-Data root", file=sys.stderr)
        return 2

    schema = json.loads(schema_path.read_text(encoding="utf-8"))
    required = set(schema.get("required", []))
    enums: dict[str, list[Any]] = schema.get("enums", {})
    existing = load_entries(papers_path)
    existing_ids = {entry.get("id") for entry in existing}
    existing_titles = {str(entry.get("title", "")).strip().casefold() for entry in existing}

    errors: list[str] = []
    warnings: list[str] = []
    seen_ids: set[str] = set()

    for draft_path in args.drafts:
        try:
            entries = load_entries(draft_path)
        except Exception as exc:
            errors.append(str(exc))
            continue

        for index, entry in enumerate(entries):
            label = f"{draft_path}[{index}]"
            missing = sorted(field for field in required if field not in entry)
            if missing:
                errors.append(f"{label}: missing required fields: {', '.join(missing)}")

            entry_id = entry.get("id")
            if not isinstance(entry_id, str) or not entry_id:
                errors.append(f"{label}: id must be a non-empty string")
            else:
                if entry_id in seen_ids:
                    errors.append(f"{label}: duplicate draft id: {entry_id}")
                seen_ids.add(entry_id)
                if entry_id in existing_ids:
                    warnings.append(f"{label}: id already exists and will update an existing entry: {entry_id}")

            title = str(entry.get("title", "")).strip().casefold()
            if title and title in existing_titles and entry_id not in existing_ids:
                warnings.append(f"{label}: title matches an existing entry; inspect for duplication")

            for field, allowed in enums.items():
                if field not in entry:
                    continue
                invalid = [value for value in as_values(entry[field]) if value not in allowed]
                if invalid:
                    errors.append(f"{label}: invalid {field} values: {invalid}; allowed: {allowed}")

            artifacts = entry.get("artifacts")
            if isinstance(artifacts, dict):
                for key, value in artifacts.items():
                    if value is not None and not isinstance(value, str):
                        errors.append(f"{label}: artifacts.{key} must be a string or null")

            if entry.get("status") == "verified" and isinstance(artifacts, dict):
                primary = [artifacts.get(key) for key in ("paper", "arxiv", "venue", "doi", "openreview", "acl", "pmlr", "cvf")]
                if not any(primary):
                    errors.append(f"{label}: verified status requires an official primary citation link")

            level = entry.get("curation_level")
            card = entry.get("card")
            if level in {"L4_carded", "L5_audit_ready"} and not card:
                errors.append(f"{label}: {level} requires a real card path")

    for message in warnings:
        print(f"WARNING: {message}")
    for message in errors:
        print(f"ERROR: {message}", file=sys.stderr)

    print(f"validated {len(args.drafts)} draft file(s): {len(errors)} error(s), {len(warnings)} warning(s)")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
