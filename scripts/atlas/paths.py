"""Resolve the reading paths in `library/reading_paths.yaml` against published cards.

A path is stored as a facet query rather than a list of papers, so it re-resolves on
every build and cannot drift away from the library.
"""
from __future__ import annotations

from . import config

PRIORITY_RANK = {"必读": 0, "可读": 1, "暂缓": 2}


def _matches(entry: dict, criteria: dict) -> bool:
    for key, wanted in criteria.items():
        if key == "priority":
            if entry.get("priority") != wanted:
                return False
            continue
        owned = entry.get(key) or []
        if not isinstance(owned, list):
            owned = [owned]
        if not set(owned) & set(wanted if isinstance(wanted, list) else [wanted]):
            return False
    return True


def _rank(entry: dict):
    return (
        PRIORITY_RANK.get(entry.get("priority"), 3),
        -entry.get("link_count", 0),
        -(entry.get("year") or 0),
        str(entry.get("title") or "").lower(),
    )


def resolve(entries: list) -> list:
    """[{id, title: [en, zh], goal: [en, zh], entries: [entry_id], count}]."""
    spec = config.read_yaml(config.LIBRARY / "reading_paths.yaml").get("paths") or []
    out = []
    for path in spec:
        criteria = path.get("match") or {}
        hits = sorted((e for e in entries if _matches(e, criteria)), key=_rank)
        limit = path.get("limit") or 20
        out.append({
            "id": path.get("id"),
            "title": list(path.get("title") or [path.get("id"), path.get("id")]),
            "goal": list(path.get("goal") or ["", ""]),
            "entries": [e["id"] for e in hits[:limit]],
            "matched": len(hits),
        })
    return out
