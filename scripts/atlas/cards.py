"""Load `library/cards/` into the shapes the site and the generated docs consume.

`load_cards` returns three things: lean entries for search and filtering, a rich detail
payload per published card, and an audit row per card for the reports. Facet values are
folded onto `library/vocabulary.yaml` on the way through, and anything outside that
vocabulary is recorded so a caller can refuse to publish it.
"""
from __future__ import annotations

import collections
import functools
import json
import re
from pathlib import Path

import yaml

from . import config, labels as L
from .markdown import to_html as md_to_html

LIBRARY = config.LIBRARY
MINOR_FACET_COUNT = config.MINOR_FACET_COUNT

# A Chinese field should not carry a long run of English prose: the two pages are meant
# to stay in one language each. Short Latin runs are names a reader searches for, and
# `authors_ch` is Latin by design, so neither is checked.
UNTRANSLATED = re.compile(r"[A-Za-z][A-Za-z ,\-']{34,}")
ZH_CHECKED_FIELDS = ("one_line_summary_ch", "paper_type_ch", "best_for_ch")
# arXiv or proceedings identifiers that leaked into an entry_id.
VENUE_SUFFIX = re.compile(r"\.(findings-)?[a-z]+[\-a-z]*\.\d+$|\.\d{3,}$")


ALIASES_APPLIED = collections.Counter()
UNKNOWN_VALUES = collections.defaultdict(set)


def as_list(value):
    if isinstance(value, list):
        return [item for item in value if item not in (None, "")]
    return [value] if value not in (None, "", [], {}) else []


def facet_values(entry_id: str, paper: dict, facet: str) -> list:
    """Read a facet, folding vocabulary synonyms onto their canonical value."""
    spec = config.vocabulary().get(facet, {})
    aliases = spec.get("synonyms", {})
    canonical = spec.get("values", {})
    out = []
    for raw in as_list(paper.get(facet)):
        value = aliases.get(raw, raw)
        if value != raw:
            ALIASES_APPLIED[f"{facet}: {raw} -> {value}"] += 1
        if value not in canonical:
            UNKNOWN_VALUES[entry_id].add(f"{facet}: {raw}")
        if value not in out:
            out.append(value)
    return out


def write_json(path: Path, payload) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")


@functools.lru_cache(maxsize=1)
def value_translations() -> dict:
    """Chinese renderings for the values that recur across cards.

    See `scripts/data/zh_values.yaml` for what belongs here and what deliberately does
    not. Anything absent is emitted unchanged, so an untranslated value degrades to the
    source wording rather than disappearing.
    """
    data = config.read_yaml(Path(__file__).resolve().parent.parent / "data" / "zh_values.yaml")
    table = {}
    for group in ("status", "phrase"):
        for key, zh in (data.get(group) or {}).items():
            table[str(key).strip()] = str(zh)
            table[str(key).strip().lower()] = str(zh)
    return table


def zh_value(text: str) -> str:
    table = value_translations()
    raw = str(text).strip()
    return table.get(raw) or table.get(raw.lower()) or str(text)


def render_value(value, zh: bool = False):
    """Normalize a nested-object value into {kind, ...} for the client."""
    pick = (lambda item: zh_value(item)) if zh else (lambda item: item)
    if isinstance(value, list):
        return {"kind": "list",
                "items": [md_to_html(str(pick(item))) for item in value if item not in (None, "")]}
    if isinstance(value, bool):
        return {"kind": "flag", "value": value}
    return {"kind": "text", "html": md_to_html(str(pick(value)))}


def pairs_payload(spec, obj):
    """Both languages for every pair, so the Chinese card is not an empty shell.

    The labels were always bilingual; only the values were English, which is why the
    Chinese page used to link across to the English one instead of rendering these blocks.
    """
    out = []
    for key, label_en, label_zh, value in L.ordered_pairs(spec, obj):
        row = {"key": key, "label": [label_en, label_zh], "value": render_value(value)}
        # Only carry a Chinese value when it differs. Most values are card-specific
        # sentences with no entry in the table, and shipping a byte-identical copy of
        # them would double this payload to say nothing; the client falls back to `value`.
        translated = render_value(value, zh=True)
        if translated != row["value"]:
            row["value_zh"] = translated
        out.append(row)
    return out


NEED_PREFIX = re.compile(r"^\s*(needs_[a-z_]+|unknown)\s*(?::\s*(.+))?\s*$", re.S)


def split_need(text: str):
    """Needs come in three shapes: `needs_x: detail`, a bare `needs_x` tag, or free text."""
    match = NEED_PREFIX.match(str(text or ""))
    if not match:
        return {"kind": None, "label": ["Gap", "缺口"], "html": md_to_html(str(text))}
    kind = match.group(1)
    stem = kind.replace("needs_", "")
    label = L.NEEDS.get(kind, (L.humanize(stem),) * 2)
    return {"kind": kind, "label": list(label), "html": md_to_html((match.group(2) or "").strip())}


def artifact_links(artifacts):
    out = []
    if not isinstance(artifacts, dict):
        return out
    order = L.PRIMARY_ARTIFACTS + L.GRID_ARTIFACTS
    seen_urls = set()

    def add(key, url):
        if not isinstance(url, str) or not url.startswith("http") or url in seen_urls:
            return
        seen_urls.add(url)
        label = L.ARTIFACTS.get(key, (L.humanize(key),) * 2)
        out.append({"key": key, "label": list(label), "url": url})

    for key in order:
        add(key, artifacts.get(key))
    for key, url in artifacts.items():
        if key not in order:
            add(key, url)
    return out


# ---------------------------------------------------------------- tracks

def load_tracks():
    data = config.read_yaml(LIBRARY / "categories.yaml")
    integrated = config.integrated_tracks()
    tracks = []
    for cat in data.get("paper_categories", []):
        cid = cat.get("id")
        tracks.append({
            "id": cid,
            "order": cat.get("order", 99),
            "group": cat.get("group"),
            "emoji": cat.get("emoji", ""),
            "title": L.TRACK_SHORT.get(cid, cat.get("title", cid)),
            "title_zh": L.TRACK_ZH.get(cid, cat.get("title", cid)),
            "summary": cat.get("summary", ""),
            "summary_zh": cat.get("summary_zh", ""),
            "reader_promise": cat.get("reader_promise", ""),
            "reader_promise_zh": cat.get("reader_promise_zh", ""),
            "subfields": cat.get("subfields") or [],
            "page": cat.get("file", ""),
            "integrated": cid in integrated,
        })
    tracks.sort(key=lambda item: item["order"])
    return tracks


# ---------------------------------------------------------------- cards

def canonical_one_line(paper: dict):
    """`one_line_summary` is canonical; `one_line` is an earlier draft kept in some cards."""
    summary = str(paper.get("one_line_summary") or "").strip()
    draft = str(paper.get("one_line") or "").strip()
    conflict = bool(summary and draft and summary != draft)
    return (summary or draft), (draft if conflict else "")


def load_card(directory: Path, show_blocks: bool):
    paper = config.read_yaml(directory / "paper.yaml")
    header = config.read_json(directory / "header_zh.json")
    queue = config.read_json(directory / "queue.json")
    review = config.read_json(directory / "review.json")

    cid = paper.get("id") or directory.name
    tracks = as_list(paper.get("category_ids")) or as_list(header.get("category_ids"))
    artifacts = paper.get("artifacts") if isinstance(paper.get("artifacts"), dict) else {}
    links = artifact_links(artifacts)
    primary = next((link["url"] for link in links if link["key"] in L.PRIMARY_ARTIFACTS), None)
    one_line, one_line_conflict = canonical_one_line(paper)
    priority = header.get("reading_priority_ch") or ""
    verification = paper.get("verification") if isinstance(paper.get("verification"), dict) else {}
    annotation = queue.get("manual_annotation") if isinstance(queue.get("manual_annotation"), dict) else {}

    sections = []
    for key, title_en, title_zh in L.SECTIONS:
        en = directory / "sources" / f"{key}.md"
        zh = directory / "sources" / f"{key}_ch.md"
        html_en = md_to_html(en.read_text(encoding="utf-8")) if en.exists() else ""
        html_zh = md_to_html(zh.read_text(encoding="utf-8")) if zh.exists() else ""
        if html_en or html_zh:
            sections.append({
                "key": key,
                "title": [title_en, title_zh],
                "html": [html_en, html_zh],
            })

    entry = {
        "id": cid,
        "title": paper.get("title") or cid,
        "year": paper.get("year"),
        "venue": paper.get("venue") or "",
        "authors": as_list(paper.get("authors")),
        "authors_zh": header.get("authors_ch") or "",
        "tracks": tracks,
        "source_role": facet_values(cid, paper, "source_role"),
        "verification_contract": facet_values(cid, paper, "verification_contract"),
        "supervision_granularity": facet_values(cid, paper, "supervision_granularity"),
        "training_use": facet_values(cid, paper, "training_use"),
        "construction_layer": facet_values(cid, paper, "construction_layer"),
        "domains": as_list(paper.get("domains")),
        "tags": as_list(paper.get("tags")),
        "status": paper.get("status") or "",
        "priority": priority,
        "paper_type_zh": header.get("paper_type_ch") or "",
        "best_for_zh": header.get("best_for_ch") or "",
        "confidence": (verification.get("confidence") or "") if verification else "",
        "one_line": [one_line, header.get("one_line_summary_ch") or ""],
        "why": paper.get("why_it_matters") or "",
        "primary_link": primary,
        "links": [link for link in links if link["key"] in L.GRID_ARTIFACTS][:4],
        "link_count": len(links),
        "sections": len(sections),
    }

    detail = {
        "id": cid,
        "title": entry["title"],
        "year": entry["year"],
        "venue": entry["venue"],
        "authors": entry["authors"],
        "authors_zh": entry["authors_zh"],
        "tracks": tracks,
        "priority": priority,
        "paper_type_zh": entry["paper_type_zh"],
        "best_for_zh": entry["best_for_zh"],
        "one_line": entry["one_line"],
        "why": entry["why"],
        "inclusion_reason": paper.get("inclusion_reason") or "",
        "tags": entry["tags"],
        "domains": entry["domains"],
        "facets": {
            key: entry[key]
            for key in ("source_role", "verification_contract", "supervision_granularity",
                        "training_use", "construction_layer")
        },
        "artifacts": links,
        "sections": sections,
        "related": as_list(paper.get("related")),
    }
    if show_blocks:
        detail.update({
            "data_object": pairs_payload(L.DATA_OBJECT, paper.get("data_object")),
            "recipe_metadata": pairs_payload(L.RECIPE_METADATA, paper.get("recipe_metadata")),
            "audit": pairs_payload(L.AUDIT, paper.get("audit")),
            "verification": pairs_payload(L.VERIFICATION, verification),
            "needs": [split_need(item) for item in as_list(paper.get("needs"))],
        })

    untranslated = []
    for field in ZH_CHECKED_FIELDS:
        found = UNTRANSLATED.search(header.get(field) or "")
        if found:
            untranslated.append(f"{field}: {found.group(0).strip()}")
    audit_row = {
        "id": cid,
        "search_status": annotation.get("search_status") or "",
        "review_state": review.get("state") or "",
        "one_line_conflict": one_line_conflict,
        "kept_one_line": one_line if one_line_conflict else "",
        "zh_untranslated": "; ".join(untranslated),
        "suffixed_id": bool(VENUE_SUFFIX.search(cid)),
    }
    return entry, detail, audit_row


def load_cards(show_blocks: bool):
    entries, details, rows, dropped = [], {}, [], []
    for directory in sorted((LIBRARY / "cards").iterdir()):
        if not directory.is_dir() or not (directory / "paper.yaml").exists():
            continue
        entry, detail, row = load_card(directory, show_blocks)
        rows.append(row)
        row["held_back"] = config.hold_reason(row["id"], row["search_status"])
        if row["held_back"]:
            dropped.append(row)
            continue
        entries.append(entry)
        details[entry["id"]] = detail
    entries.sort(key=lambda item: (-(item["year"] or 0), item["title"].lower()))
    return entries, details, rows, dropped


# ---------------------------------------------------------------- aggregates

def build_facets(entries):
    out = {}
    for name, spec in config.vocabulary().items():
        counts = {}
        for entry in entries:
            for value in entry.get(name, []):
                counts[value] = counts.get(value, 0) + 1
        known = list(spec["values"].keys())
        ordered = [v for v in known if v in counts] + sorted(v for v in counts if v not in known)
        out[name] = {
            "label": list(spec["label"]),
            "values": [
                {
                    "id": value,
                    "label": list(spec["values"].get(value, (L.humanize(value),) * 2)),
                    "count": counts[value],
                    # Long-tail values stay reachable but collapsed, so a facet row
                    # does not turn into a wall of single-card chips.
                    "minor": counts[value] < MINOR_FACET_COUNT,
                }
                for value in ordered
            ],
        }
    return out


def build_counts(entries, tracks):
    per_track = {track["id"]: 0 for track in tracks}
    per_track_primary = {track["id"]: 0 for track in tracks}
    for entry in entries:
        for index, tid in enumerate(entry["tracks"]):
            per_track[tid] = per_track.get(tid, 0) + 1
            if index == 0:
                per_track_primary[tid] = per_track_primary.get(tid, 0) + 1
    priority = {}
    for entry in entries:
        if entry["priority"]:
            priority[entry["priority"]] = priority.get(entry["priority"], 0) + 1
    integrated = {track["id"] for track in tracks if track["integrated"]}
    return {
        "cards": len(entries),
        "tracks_total": len(tracks),
        "tracks_covered": len(integrated),
        "cross_tagged": sum(1 for e in entries if len(e["tracks"]) > 1),
        "outside_scope": sum(1 for e in entries if not (set(e["tracks"]) & integrated)),
        "must_read": priority.get("必读", 0),
        "with_code": sum(1 for e in entries if any(l["key"] == "code" for l in e["links"])),
        "with_data": sum(1 for e in entries if any(l["key"] in ("data", "huggingface") for l in e["links"])),
        "verified": sum(1 for e in entries if e["status"] == "verified"),
        "sections": sum(e["sections"] for e in entries) * 2,
        "per_track": per_track,
        "per_track_primary": per_track_primary,
        "priority": priority,
        "years": sorted({e["year"] for e in entries if e["year"]}, reverse=True),
    }


