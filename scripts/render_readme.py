#!/usr/bin/env python3
import argparse
from collections import Counter
from common import ROOT, load_yaml_json
def block(text, start, end, repl):
    return text[:text.index(start)+len(start)] + "\n" + repl.rstrip() + "\n" + text[text.index(end):]
def stats(entries):
    status = Counter(e.get("status") for e in entries); roles=Counter(); contracts=Counter()
    for e in entries: roles.update(e.get("source_role", [])); contracts.update(e.get("verification_contract", []))
    rows = [("| Metric | Count |"),("|---|---:|"),(f"| Total entries | {len(entries)} |"),(f"| Verified | {status.get('verified',0)} |"),(f"| Partial | {status.get('partial',0)} |"),(f"| Needs metadata/search | {status.get('needs_metadata',0)+status.get('needs_search',0)} |"),(f"| Data releases | {roles.get('data_release',0)} |"),(f"| Verifiers / rewards | {roles.get('verifier_reward',0)} |"),(f"| Agent environments | {roles.get('agent_environment',0)} |"),(f"| Scaling studies | {roles.get('scaling_study',0)} |"),(f"| Programmatic verification | {contracts.get('programmatic',0)} |"),(f"| Environmental verification | {contracts.get('environmental',0)} |"),(f"| Judgment-required verification | {contracts.get('judgment_required',0)} |")]
    return "\n".join(rows)
def selected(entries):
    rows = ["| Entry | Role | Contract | Why it matters |","|---|---|---|---|"]
    for e in [x for x in entries if "seeded-from-bib" not in x.get("tags", [])][:18]:
        link = e.get("artifacts",{}).get("arxiv") or e.get("artifacts",{}).get("paper")
        title = f"[{e['title']}]({link})" if link else e["title"]
        rows.append(f"| {title} | {', '.join(e.get('source_role', []))} | {', '.join(e.get('verification_contract', []))} | {e.get('inclusion_reason','')} |")
    return "\n".join(rows)
def main():
    ap=argparse.ArgumentParser(); ap.add_argument("--check", action="store_true"); args=ap.parse_args()
    p=ROOT/"README.md"; old=p.read_text(encoding="utf-8"); entries=load_yaml_json(ROOT/"data/papers.yaml")
    new=block(old,"<!-- BEGIN GENERATED STATS -->","<!-- END GENERATED STATS -->",stats(entries))
    new=block(new,"<!-- BEGIN SELECTED ENTRIES -->","<!-- END SELECTED ENTRIES -->",selected(entries))
    if args.check:
        print("README generated sections are " + ("up to date" if new==old else "out of date"))
        return 0 if new==old else 1
    p.write_text(new, encoding="utf-8"); print("README updated")
if __name__ == "__main__": raise SystemExit(main())
