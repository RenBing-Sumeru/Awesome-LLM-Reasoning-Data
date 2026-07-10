#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import tempfile
from datetime import datetime, timezone
from pathlib import Path


def slug(value: str) -> str:
    normalized = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    if not normalized:
        raise ValueError("track must contain at least one letter or digit")
    return normalized


def main() -> int:
    parser = argparse.ArgumentParser(description="Create an isolated track-curation staging directory.")
    parser.add_argument("--track", required=True, help="Track category ID or name")
    parser.add_argument("--root", type=Path, help="Optional staging root; defaults to the OS temporary directory")
    args = parser.parse_args()

    timestamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    base = args.root or Path(tempfile.gettempdir()) / "awesome-llm-reasoning-data-runs"
    run_dir = base.expanduser().resolve() / f"{slug(args.track)}-{timestamp}"

    directories = [
        run_dir,
        run_dir / "evidence",
        run_dir / "metadata",
        run_dir / "cards",
        run_dir / "review",
    ]
    for directory in directories:
        directory.mkdir(parents=True, exist_ok=True)

    manifest = {
        "track": args.track,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "run_dir": str(run_dir),
        "status": "initialized",
    }
    (run_dir / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (run_dir / "track-brief.md").write_text("# Track brief\n\n", encoding="utf-8")
    (run_dir / "candidates.csv").write_text(
        "candidate_id,title,year,venue,subfield,official_primary_url,source_status,duplicate_entry_id,data_object,feedback_contract,training_use,construction_relevance,audit_risk,priority,decision_reason,unknowns\n",
        encoding="utf-8",
    )
    print(json.dumps(manifest, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
