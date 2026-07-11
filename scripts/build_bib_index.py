#!/usr/bin/env python3
import re
from common import ROOT, PARENT, write_json
ENTRY_RE = re.compile(r"@(\w+)\s*\{\s*([^,]+),(.*?)(?=\n@|\Z)", re.S)
FIELD_RE = re.compile(r"(\w+)\s*=\s*[{'\"](.*?)[}'\"],?\s*(?=\n\s*\w+\s*=|\n\}|$)", re.S)
def parse(path, verified):
    text = path.read_text(encoding="utf-8", errors="replace") if path.exists() else ""
    out, failed = [], []
    for typ, key, body in ENTRY_RE.findall(text):
        fields = {k.lower(): re.sub(r"\s+", " ", v).strip() for k, v in FIELD_RE.findall(body)}
        if not fields.get("title"): failed.append(key.strip())
        out.append({"key": key.strip(), "type": typ, "title": fields.get("title", ""), "year": fields.get("year", ""), "author": fields.get("author", ""), "journal": fields.get("journal", fields.get("booktitle", "")), "note": fields.get("note", ""), "verified_bib": verified})
    return out, failed
def main():
    merged, failed = {}, []
    for path, verified in [(PARENT/"EMNLP/build/references_verified.bib", True), (PARENT/"EMNLP/build/references.bib", False)]:
        for e in parse(path, verified)[0]:
            if e["key"] not in merged or e["verified_bib"]: merged[e["key"]] = e
    entries = sorted(merged.values(), key=lambda x: x["key"])
    write_json(ROOT/"reports/bib_index.json", {"entries": entries, "failed_blocks": failed})
    lines = ["# BibTeX Index", "", f"Entries: {len(entries)}", ""]
    lines += [f"- `{e['key']}` ({'verified' if e['verified_bib'] else 'main'}): {e['title'] or 'unknown title'}" for e in entries]
    (ROOT/"reports/bib_index.md").write_text("\n".join(lines)+"\n", encoding="utf-8")
    print(f"entries: {len(entries)}")
if __name__ == "__main__": main()
