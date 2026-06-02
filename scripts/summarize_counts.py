#!/usr/bin/env python3
from collections import Counter
from common import ROOT, load_yaml_json
FIELDS=["status","source_role","verification_contract","training_use","construction_layer","year"]
def vals(e,f): return e.get(f,[]) if isinstance(e.get(f),list) else [e.get(f)]
def main():
    entries=load_yaml_json(ROOT/"data/papers.yaml"); lines=["# Counts","",f"total: {len(entries)}",""]
    print(f"total: {len(entries)}")
    for f in FIELDS:
        c=Counter(v for e in entries for v in vals(e,f)); print(f)
        lines.append("## "+f)
        for k,v in sorted(c.items(), key=lambda x:str(x[0])): print(f"  {k}: {v}"); lines.append(f"- {k}: {v}")
        lines.append("")
    (ROOT/"reports/counts.md").write_text("\n".join(lines), encoding="utf-8")
if __name__ == "__main__": main()
