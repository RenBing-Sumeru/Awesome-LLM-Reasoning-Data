#!/usr/bin/env python3
"""Retired legacy BibTeX importer.

Paper metadata is now owned by `paper_cards/library/cards/<entry_id>/paper.yaml`.
Create a Card directory (including its local source files) instead of generating
a removed shared index.
"""
from __future__ import annotations


def main() -> int:
    raise SystemExit(
        "seed_entries_from_bib.py is retired: create Card directories under "
        "paper_cards/library/cards/ instead."
    )


if __name__ == "__main__":
    main()
