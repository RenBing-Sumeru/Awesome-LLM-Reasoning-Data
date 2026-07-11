#!/usr/bin/env python3
from __future__ import annotations

import re

from atlas_utils import artifacts, entries, primary_link, slugify
from common import ROOT


def bib_key(entry: dict) -> str:
    explicit = artifacts(entry).get("bibtex")
    if explicit:
        return re.sub(r"[^A-Za-z0-9:_-]+", "", str(explicit))
    first = "atlas"
    authors = entry.get("authors") or []
    if authors:
        first = re.sub(r"[^A-Za-z0-9]+", "", str(authors[0]).split()[-1]).lower() or "atlas"
    title_word = slugify(entry.get("title"), "paper").split("-")[0]
    return f"{first}{entry.get('year') or 'nd'}{title_word}"


def escape(value) -> str:
    return str(value or "").replace("{", "\\{").replace("}", "\\}")


def main() -> int:
    items = []
    for entry in entries():
        link = primary_link(entry)
        if not link:
            continue
        authors = entry.get("authors") or []
        author_text = " and ".join(authors) if authors else "Unknown"
        art = artifacts(entry)
        fields = {
            "title": entry.get("title"),
            "author": author_text,
            "year": entry.get("year"),
            "url": link,
        }
        if art.get("doi"):
            fields["doi"] = art["doi"].replace("https://doi.org/", "")
        if art.get("arxiv"):
            match = re.search(r"arxiv\.org/abs/([^/?#]+)", art["arxiv"])
            if match:
                fields["eprint"] = match.group(1)
                fields["archivePrefix"] = "arXiv"
        body = ",\n".join(f"  {key} = {{{escape(value)}}}" for key, value in fields.items() if value)
        items.append(f"@misc{{{bib_key(entry)},\n{body}\n}}")
    out = "\n\n".join(items) + "\n"
    (ROOT / "exports").mkdir(exist_ok=True)
    (ROOT / "exports/papers.bib").write_text(out, encoding="utf-8")
    print(f"exported {len(items)} bibtex entries")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
