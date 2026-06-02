#!/usr/bin/env python3
from common import ROOT, load_yaml_json, write_json
PUBLIC = ["id","title","year","venue","source_role","verification_contract","supervision_granularity","domains","training_use","construction_layer","artifacts","audit","inclusion_reason","tags","status"]
def main():
    entries = load_yaml_json(ROOT/"data/papers.yaml")
    public = [{k: e.get(k) for k in PUBLIC} for e in entries]
    write_json(ROOT/"docs/assets/entries.json", public)
    write_json(ROOT/"data/_generated/entries.json", public)
    print(f"rendered entries: {len(public)}")
if __name__ == "__main__": main()
