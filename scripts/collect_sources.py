#!/usr/bin/env python3
import re
from common import ROOT, write_json
URL = re.compile(r"https?://[^\s)>\]'}\"]+")
ARXIV = re.compile(r"arXiv[:\s]*([0-9]{4}\.[0-9]{4,5})", re.I)
EXCLUDED_PARTS = {".git", "__pycache__", ".codex_scratch", "skill_resources"}
EXCLUDED_PATH_TERMS = [
    ".DS_Store",
    "CODEX" + "_",
    "codex" + "_redesign",
    "redesign" + "_spec",
    "reference" + "_repo_redesign",
]


def is_public_source(path):
    rel = path.relative_to(ROOT).as_posix()
    if any(part in EXCLUDED_PARTS for part in path.parts):
        return False
    return not any(term.lower() in rel.lower() for term in EXCLUDED_PATH_TERMS)


def main():
    records = []
    for base in [ROOT]:
        for path in base.rglob("*"):
            if not path.is_file() or path.suffix.lower() not in {".md",".bib",".txt"}: continue
            if not is_public_source(path): continue
            text = path.read_text(encoding="utf-8", errors="replace")
            heads = [l for l in text.splitlines() if l.startswith("#")][:12]
            records.append({"path": str(path), "bytes": path.stat().st_size, "urls": URL.findall(text)[:50], "arxiv_ids": sorted(set(ARXIV.findall(text)))[:50], "headings": heads})
    write_json(ROOT/"reports/source_inventory.json", {"records": records})
    lines = ["# Source Inventory", "", f"Files scanned: {len(records)}", ""]
    for r in records:
        lines += [f"## `{r['path']}`", f"- bytes: {r['bytes']}", f"- arXiv IDs: {', '.join(r['arxiv_ids']) if r['arxiv_ids'] else 'none'}", ""]
    (ROOT/"reports/source_inventory.md").write_text("\n".join(lines), encoding="utf-8")
    print(f"files: {len(records)}")
if __name__ == "__main__": main()
