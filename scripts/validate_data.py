#!/usr/bin/env python3
from collections import Counter
from common import ROOT, load_yaml_json
SCHEMA = load_yaml_json(ROOT / "data/schema.json")
ENUMS = SCHEMA.get("enums", {})
REQUIRED = SCHEMA.get("required", [])
def main():
    entries = load_yaml_json(ROOT / "data/papers.yaml")
    errors, warnings = [], []
    ids, titles = Counter(), Counter()
    for i, e in enumerate(entries):
        where = f"entry[{i}] {e.get('id', '<missing-id>')}"
        for key in REQUIRED:
            if key not in e: errors.append(f"{where}: missing {key}")
        ids[e.get("id")] += 1
        titles[(e.get("title") or "").lower()] += 1
        for field in ["source_role", "verification_contract", "supervision_granularity", "training_use", "construction_layer"]:
            allowed = set(ENUMS.get(field, []))
            for val in e.get(field, []):
                if val not in allowed: errors.append(f"{where}: invalid {field}={val}")
        if e.get("status") not in set(ENUMS.get("status", [])):
            errors.append(f"{where}: invalid status={e.get('status')}")
        if not e.get("inclusion_reason"): errors.append(f"{where}: missing inclusion_reason")
    for k, v in ids.items():
        if k and v > 1: errors.append(f"duplicate id: {k}")
    for k, v in titles.items():
        if k and v > 1: warnings.append(f"duplicate title: {k}")
    print(f"entries: {len(entries)}")
    print(f"errors: {len(errors)}")
    print(f"warnings: {len(warnings)}")
    for msg in errors[:80]: print("ERROR:", msg)
    for msg in warnings[:40]: print("WARNING:", msg)
    return 1 if errors else 0
if __name__ == "__main__": raise SystemExit(main())
