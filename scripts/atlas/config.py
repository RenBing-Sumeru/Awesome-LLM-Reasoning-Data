"""Paths, `atlas.yaml`, `library/vocabulary.yaml`, and the publish decision.

Every CLI reads the publish rule from here so that the site, the normalizer, and
the merge tool always agree on which cards count as published.
"""
from __future__ import annotations

import functools
import json
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent.parent
LIBRARY = ROOT / "library"
CARDS = LIBRARY / "cards"
# GitHub Pages serves this repository from `docs/`, which also holds the hand-written
# learning guides. The generated site is written alongside them, never over them.
SITE = ROOT / "docs"
REPORTS = ROOT / "reports"
CONFIG_PATH = ROOT / "atlas.yaml"
VOCABULARY_PATH = LIBRARY / "vocabulary.yaml"
CATEGORIES_PATH = LIBRARY / "categories.yaml"

REPO_URL = "https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data"
# Facet values below this many cards collapse behind a "show more" control.
MINOR_FACET_COUNT = 5


def read_yaml(path: Path) -> dict:
    if not path.exists():
        return {}
    return yaml.safe_load(path.read_text(encoding="utf-8")) or {}


def read_json(path: Path) -> dict:
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8")) or {}
    except json.JSONDecodeError:
        return {}


@functools.lru_cache(maxsize=1)
def settings() -> dict:
    return read_yaml(CONFIG_PATH)


@functools.lru_cache(maxsize=1)
def vocabulary() -> dict:
    """{facet: {"label": [en, zh], "values": {...}, "synonyms": {...}}}."""
    facets = read_yaml(VOCABULARY_PATH).get("facets") or {}
    for spec in facets.values():
        spec.setdefault("synonyms", {})
        spec["synonyms"] = spec["synonyms"] or {}
    return facets


def search_status(directory: Path) -> str:
    annotation = read_json(directory / "queue.json").get("manual_annotation")
    if not isinstance(annotation, dict):
        return ""
    return (annotation.get("search_status") or "").strip()


def hold_reason(entry_id: str, status: str) -> str:
    """Why a card stays out of the published pool, or '' when it is published."""
    config = settings()
    if entry_id in set(config.get("excluded_ids") or []):
        return "rejected by another curator"
    if status in set(config.get("excluded_search_status") or []):
        return status
    if config.get("exclude_unreviewed") and not status:
        return "unreviewed"
    return ""


def is_published(directory: Path) -> bool:
    return not hold_reason(directory.name, search_status(directory))


def integrated_tracks() -> set:
    return set(settings().get("integrated_tracks") or [])


def show_detail_blocks() -> bool:
    return bool(settings().get("show_detail_blocks"))
