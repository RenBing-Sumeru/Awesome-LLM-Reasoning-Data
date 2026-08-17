#!/usr/bin/env python3
"""Generate the GitHub-facing documents from `library/`.

The site is only half the surface: an awesome list is found and judged through its
README. This writes the bilingual front pages, one browsable page per research track,
and the cover art, all derived from the same library the site is built from.

Outputs (all generated, safe to delete):

    README.md, README_zh.md
    assets/cover.svg, assets/cover_zh.svg
    papers/README.md
    papers/<group>/<nn>_<track>.md      (English)
    papers/<group>/<nn>_<track>_zh.md   (Chinese)
"""
from __future__ import annotations

import argparse
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from atlas import config, cover, labels as L, paths as reading_paths
from atlas.cards import build_counts, load_cards, load_tracks

ROOT = config.ROOT
REPO_URL = config.REPO_URL
SITE_URL = "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/"
ASK_URL = SITE_URL + "ask/"
PAPER_URL = "https://arxiv.org/abs/2606.02113"

I18N = {
    "en": {
        "suffix": "",
        "cover": "cover.svg",
        "other": "[简体中文](README_zh.md)",
        "tagline": "A curated, bilingual card atlas for post-training reasoning data: what data object "
                   "a paper releases, and what verifies it.",
        "question": "When a model becomes better at reasoning after post-training, what data record, "
                    "feedback signal, verifier, reward, environment, or judge actually made that possible?",
        "intro": "Every entry is a full reading card rather than a citation: nine sections written from "
                 "the primary source, plus the classification that makes the card reusable — who checks "
                 "the answer, at what granularity, and which objective consumes it.",
        "site": "Searchable site",
        "ask": "Ask the Atlas",
        "paper": "Companion paper",
        "contents": "Contents",
        "contents_note": "Fourteen tracks in three groups. Each track page carries a read-first table, "
                         "the full card list, and an audit checklist.",
        "papers": "cards",
        "paths": "Reading paths",
        "paths_note": "Routes through the collection for different goals. Each is a live query over the "
                      "library, so it stays in sync as cards land.",
        "matched": "matching cards",
        "stats": "Snapshot",
        "metric": "Metric",
        "count": "Count",
        "tracks_live": "Tracks with cards",
        "total": "Published cards",
        "must": "Must-read cards",
        "sections": "Bilingual sections",
        "held": "Held back by review",
        "structure": "Repository layout",
        "path": "Path",
        "purpose": "What it is for",
        "license": "License",
        "license_body": "MIT. See [LICENSE](LICENSE).",
        "read_first": "Read first",
        "all_cards": "All cards",
        "audit": "Audit checklist",
        "open_questions": "Open questions",
        "why_track": "Why this track exists",
        "how_to_read": "How to read this track",
        "back": "Back to all tracks",
        "card": "Card",
        "year": "Year",
        "venue": "Venue",
        "title_col": "Paper",
        "summary_col": "What it contributes",
        "contract_col": "Verified by",
        "index_title": "Research tracks",
        "index_note": "One page per track, generated from the card library.",
        "group_col": "Group",
        "track_col": "Track",
        "best_for": "Best for",
    },
    "zh": {
        "suffix": "_zh",
        "cover": "cover_zh.svg",
        "other": "[English](README.md)",
        "tagline": "后训练推理数据的双语卡片图谱：一篇论文发布了什么数据对象，又由什么来验证它。",
        "question": "当模型在后训练之后推理能力变强，究竟是哪份数据记录、哪种反馈信号、验证器、奖励、环境或评审让它成为可能？",
        "intro": "每个条目都是一张完整的阅读卡片，而不是一条引用：九个章节全部依据一手论文写成，"
                 "再加上让卡片可被复用的分类——答案由谁验证、验证到什么粒度、又被哪个训练目标消费。",
        "site": "可检索站点",
        "ask": "问答助手",
        "paper": "配套论文",
        "contents": "目录",
        "contents_note": "三大板块共十四个方向。每个方向页都包含必读表格、完整卡片列表与审计清单。",
        "papers": "张卡片",
        "paths": "阅读路径",
        "paths_note": "面向不同目标的阅读路线。每条都是对卡片库的实时查询，会随卡片入库自动更新。",
        "matched": "张匹配卡片",
        "stats": "数据快照",
        "metric": "指标",
        "count": "数量",
        "tracks_live": "已接入方向",
        "total": "已发布卡片",
        "must": "必读卡片",
        "sections": "双语章节",
        "held": "审核未通过",
        "structure": "仓库结构",
        "path": "路径",
        "purpose": "用途",
        "license": "许可",
        "license_body": "MIT，见 [LICENSE](LICENSE)。",
        "read_first": "必读",
        "all_cards": "全部卡片",
        "audit": "审计清单",
        "open_questions": "开放问题",
        "why_track": "这个方向为什么存在",
        "how_to_read": "如何读这个方向",
        "back": "返回全部方向",
        "card": "卡片",
        "year": "年份",
        "venue": "发表处",
        "title_col": "论文",
        "summary_col": "贡献了什么",
        "contract_col": "验证方式",
        "index_title": "研究方向",
        "index_note": "每个方向一页，由卡片库生成。",
        "group_col": "板块",
        "track_col": "方向",
        "best_for": "适合读者",
    },
}


def md_escape(text: str) -> str:
    return str(text or "").replace("|", "\\|").replace("\n", " ").strip()


def lang_index(lang: str) -> int:
    return 1 if lang == "zh" else 0


def track_page_path(track: dict, lang: str) -> str:
    group_dir = {
        "background_foundations": "00_background_foundations",
        "core_reasoning_data_types": "01_core_reasoning_data_types",
        "data_lifecycle": "02_data_lifecycle",
    }[track["group"]]
    stem = track["id"]
    return f"papers/{group_dir}/{track['order']:02d}_{stem}{I18N[lang]['suffix']}.md"


def contract_label(entry: dict, lang: str) -> str:
    vocab = config.vocabulary()["verification_contract"]["values"]
    index = lang_index(lang)
    seen = [vocab.get(v, (v, v))[index] for v in entry.get("verification_contract", [])]
    return " / ".join(dict.fromkeys(seen)) or "—"


def entry_link(entry: dict) -> str:
    title = md_escape(entry["title"])
    return f"[{title}]({entry['primary_link']})" if entry.get("primary_link") else title


def card_link(entry: dict, prefix: str = "") -> str:
    return f"[{I18N['en']['card']}]({prefix}{SITE_URL}#card={entry['id']})"


# ---------------------------------------------------------------- track pages

def render_track_page(track: dict, entries: list, lang: str) -> str:
    s = I18N[lang]
    index = lang_index(lang)
    name = track["title_zh"] if lang == "zh" else track["title"]
    mine = [e for e in entries if track["id"] in e["tracks"]]
    must = [e for e in mine if e["priority"] == "必读"]

    out = [
        f"# {track['emoji']} {track['order']:02d} · {name}",
        "",
        f"> {md_escape(track['summary'])}",
        "",
        f"[{s['back']}](README{s['suffix']}.md) · [{s['site']}]({SITE_URL}) · "
        f"**{len(mine)}** {s['papers']} · **{len(must)}** {s['read_first']}",
        "",
    ]
    if track.get("reader_promise"):
        out += [f"{md_escape(track['reader_promise'])}", ""]

    if track.get("why"):
        out += [f"## {s['why_track']}", ""]
        out += [f"- {md_escape(item)}" for item in track["why"]]
        out.append("")

    if must:
        out += [
            f"## {s['read_first']}",
            "",
            f"| {s['title_col']} | {s['year']} | {s['contract_col']} | {s['summary_col']} |",
            "|---|---:|---|---|",
        ]
        for entry in must[:12]:
            out.append(
                f"| {entry_link(entry)} | {entry.get('year') or '—'} | {contract_label(entry, lang)} "
                f"| {md_escape(entry['one_line'][index])} |"
            )
        out.append("")

    out += [
        f"## {s['all_cards']}",
        "",
        f"| {s['title_col']} | {s['year']} | {s['venue']} | {s['contract_col']} | {s['card']} |",
        "|---|---:|---|---|---|",
    ]
    for entry in mine:
        out.append(
            f"| {entry_link(entry)} | {entry.get('year') or '—'} | {md_escape(entry.get('venue'))} "
            f"| {contract_label(entry, lang)} | [{s['card']}]({SITE_URL}#card={entry['id']}) |"
        )
    out.append("")

    if track.get("how_to_read"):
        out += [f"## {s['audit']}", ""]
        out += [f"- [ ] {md_escape(item)}" for item in track["how_to_read"]]
        out.append("")
    if track.get("open_questions"):
        out += [f"## {s['open_questions']}", ""]
        out += [f"- {md_escape(item)}" for item in track["open_questions"]]
        out.append("")
    return "\n".join(out)


def render_track_index(tracks: list, counts: dict, lang: str) -> str:
    s = I18N[lang]
    out = [
        f"# {s['index_title']}",
        "",
        f"> {s['index_note']}",
        "",
        f"| {s['group_col']} | # | {s['track_col']} | {s['papers']} |",
        "|---|---:|---|---:|",
    ]
    for group in L.GROUPS:
        title = group["title_zh"] if lang == "zh" else group["title"]
        for track in [t for t in tracks if t["group"] == group["id"]]:
            name = track["title_zh"] if lang == "zh" else track["title"]
            page = Path(track_page_path(track, lang)).relative_to("papers")
            out.append(
                f"| {title} | {track['order']:02d} | [{track['emoji']} {name}]({page}) "
                f"| {counts['per_track'].get(track['id'], 0)} |"
            )
    out.append("")
    return "\n".join(out)


# ---------------------------------------------------------------- readme

def render_contents(tracks: list, counts: dict, lang: str) -> str:
    s = I18N[lang]
    out = [f"## 📚 {s['contents']}", "", s["contents_note"], ""]
    for group in L.GROUPS:
        title = group["title_zh"] if lang == "zh" else group["title"]
        members = [t for t in tracks if t["group"] == group["id"]]
        span = f"`{members[0]['order']:02d}`" if len(members) == 1 else \
            f"`{members[0]['order']:02d}–{members[-1]['order']:02d}`"
        out += [f"### {title} {span}", "", "<blockquote>", ""]
        for track in members:
            name = track["title_zh"] if lang == "zh" else track["title"]
            count = counts["per_track"].get(track["id"], 0)
            out += [
                "<details>",
                f"<summary><code>{track['order']:02d}</code> "
                f"<b><a href=\"{track_page_path(track, lang)}\">{track['emoji']} {name}</a></b> "
                f"· {count} {s['papers']}</summary>",
                "",
                f"{md_escape(track['summary'])}",
                "",
                f"- {s['best_for']}: {md_escape(track.get('reader_promise'))}",
                "",
                "</details>",
                "",
            ]
        out += ["</blockquote>", ""]
    return "\n".join(out)


def render_paths(packs: list, by_id: dict, lang: str) -> str:
    s = I18N[lang]
    index = lang_index(lang)
    out = [f"## 🛤️ {s['paths']}", "", s["paths_note"], ""]
    for pack in packs:
        out += [
            "<details>",
            f"<summary><b>{pack['title'][index]}</b> · {pack['matched']} {s['matched']}</summary>",
            "",
            f"{md_escape(pack['goal'][index])}",
            "",
        ]
        for position, entry_id in enumerate(pack["entries"], 1):
            entry = by_id.get(entry_id)
            if not entry:
                continue
            out.append(
                f"{position}. {entry_link(entry)} ({entry.get('year') or '—'}) — "
                f"{md_escape(entry['one_line'][index])}"
            )
        out += ["", "</details>", ""]
    return "\n".join(out)


def render_readme(tracks: list, counts: dict, packs: list, by_id: dict, lang: str) -> str:
    s = I18N[lang]
    badge = (
        f"[![cards](https://img.shields.io/badge/cards-{counts['cards']}-2563eb)]({SITE_URL})\n"
        f"[![tracks](https://img.shields.io/badge/tracks-{counts['tracks_covered']}%2F{counts['tracks_total']}-0f766e)](papers/README{s['suffix']}.md)\n"
        f"[![must read](https://img.shields.io/badge/must%20read-{counts['must_read']}-ea580c)]({SITE_URL})\n"
        f"[![bilingual sections](https://img.shields.io/badge/bilingual%20sections-{counts['sections']}-b0447c)]({SITE_URL})\n"
        "[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)"
    )
    out = [
        "# 🌟 Reasoning Data Card Atlas",
        "",
        s["other"],
        "",
        f"> {s['tagline']}",
        "",
        badge,
        "",
        f'<p align="center">',
        f'  <img src="assets/{s["cover"]}" width="92%" alt="Reasoning Data Card Atlas">',
        "</p>",
        "",
        s["intro"],
        "",
        f"> {s['question']}",
        "",
        f"- 🔎 {s['site']}: [{SITE_URL}]({SITE_URL})",
        f"- 🤖 {s['ask']}: [{ASK_URL}]({ASK_URL})",
        f"- 📄 {s['paper']}: [A Primer in Post-Training Reasoning Data]({PAPER_URL})",
        f"- 🗂️ {s['index_title']}: [papers/README{s['suffix']}.md](papers/README{s['suffix']}.md)",
        "",
        f"## 📊 {s['stats']}",
        "",
        f"| {s['metric']} | {s['count']} |",
        "|---|---:|",
        f"| {s['total']} | {counts['cards']} |",
        f"| {s['tracks_live']} | {counts['tracks_covered']} / {counts['tracks_total']} |",
        f"| {s['must']} | {counts['must_read']} |",
        f"| {s['sections']} | {counts['sections']} |",
        f"| {s['held']} | {counts['excluded']} |",
        "",
        render_contents(tracks, counts, lang),
        render_paths(packs, by_id, lang),
        f"## 📄 {s['license']}",
        "",
        s["license_body"],
        "",
    ]
    return "\n".join(out)


# ---------------------------------------------------------------- build

def build(target: Path) -> dict:
    tracks = load_tracks()
    entries, _details, _rows, dropped = load_cards(config.show_detail_blocks())
    counts = build_counts(entries, tracks)
    counts["excluded"] = len(dropped)
    packs = reading_paths.resolve(entries)
    by_id = {entry["id"]: entry for entry in entries}

    (target / "assets").mkdir(parents=True, exist_ok=True)
    for lang, name in (("en", "cover.svg"), ("zh", "cover_zh.svg")):
        (target / "assets" / name).write_text(cover.render(tracks, counts, lang), encoding="utf-8")

    for lang in ("en", "zh"):
        readme = "README.md" if lang == "en" else "README_zh.md"
        (target / readme).write_text(render_readme(tracks, counts, packs, by_id, lang), encoding="utf-8")
        index = target / f"papers/README{I18N[lang]['suffix']}.md"
        index.parent.mkdir(parents=True, exist_ok=True)
        index.write_text(render_track_index(tracks, counts, lang), encoding="utf-8")
        for track in tracks:
            page = target / track_page_path(track, lang)
            page.parent.mkdir(parents=True, exist_ok=True)
            page.write_text(render_track_page(track, entries, lang), encoding="utf-8")
    return counts


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="fail if the documents are stale")
    args = parser.parse_args()

    if args.check:
        with tempfile.TemporaryDirectory() as tmp:
            temp = Path(tmp)
            build(temp)
            problems = []
            for path in sorted(temp.rglob("*")):
                if not path.is_file():
                    continue
                rel = path.relative_to(temp)
                actual = ROOT / rel
                if not actual.exists():
                    problems.append(f"missing {rel}")
                elif actual.read_text(encoding="utf-8") != path.read_text(encoding="utf-8"):
                    problems.append(f"out of date: {rel}")
            for problem in problems[:30]:
                print("ERROR:", problem)
            if problems:
                print(f"{len(problems)} problem(s). Run: python scripts/render_docs.py")
                return 1
        print("generated documents are up to date")
        return 0

    counts = build(ROOT)
    print(
        f"rendered README.md, README_zh.md, assets/cover*.svg, and "
        f"{counts['tracks_total']} track pages in both languages "
        f"({counts['cards']} cards)"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
