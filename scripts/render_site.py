#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import tempfile
from pathlib import Path

from atlas_utils import (
    artifacts,
    card_inventory,
    categories,
    compact_audit,
    compact_data_object,
    compact_feedback,
    curation_level,
    entries,
    infer_subfield,
    one_line,
    primary_link,
    research_tracks,
    starter_matches,
    starter_packs,
    why_it_matters,
)
from common import ROOT, write_json
from render_readme import CATEGORY_GROUPS, SUBFIELD_ZH, TRACK_ZH
from set_ask_backend_url import validate_public_config_text

REPO_URL = "https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data"
REPO_BLOB = f"{REPO_URL}/blob/main"
ASK_ASSET_VERSION = "ask-atlas-pages-20260714-2"
ASK_SITE_PATH = "ask/"

PACK_ZH = {
    "beginner_20": "新手 20：推理数据入门",
    "builder_30": "构造 30：数据构造与发布实践",
    "verifier_reward_25": "验证与奖励 25",
    "agent_data_25": "智能体数据 25",
    "scaling_20": "规模化 20",
    "audit_failure_20": "审计与失效 20",
    "industry_onboarding_40": "工业实践 40",
}

PACK_GOAL_ZH = {
    "beginner_20": "在钻进具体配方之前，先建立后训练推理数据的基本概念体系。",
    "builder_30": "学习开源推理数据配方如何选题、生成轨迹、过滤、审计并发布产物。",
    "verifier_reward_25": "对比程序化验证器、过程奖励模型、评分标准奖励、大模型评审与失效诊断。",
    "agent_data_25": "理解轨迹、工具调用、网页与应用与操作系统任务，以及软件工程环境。",
    "scaling_20": "读懂强化学习算力、数据规模、蒸馏与推理时计算预算的规模化结论。",
    "audit_failure_20": "养成检查数据泄漏、污染、奖励作弊与评审稳健性的习惯。",
    "industry_onboarding_40": "一条面向大模型后训练数据团队的实用上手路径。",
}

STRINGS = {
    "en": {
        "lang": "en",
        "title": "Awesome LLM Reasoning Data",
        "nav_papers": "Papers",
        "nav_cards": "Cards",
        "nav_coverage": "Coverage",
        "nav_ask": "Ask ↗",
        "nav_readme": REPO_URL + "#readme",
        "ask_href": ASK_SITE_PATH,
        "lang_switch": '<a class="lang" href="zh.html" lang="zh-CN">中文</a>',
        "eyebrow": "A curated field map of post-training reasoning data",
        "h1": "What data actually teaches a model to reason?",
        "lede": "Every entry answers one practical question: when a model becomes better at reasoning after post-training, which data record, feedback signal, verifier, reward, environment, or judge made that possible.",
        "cover": "cover.svg",
        "cover_alt": "Awesome LLM Reasoning Data: a blossoming tree of 14 tracks in 3 groups",
        "stat_entries": "entries",
        "stat_verified": "verified",
        "stat_cards": "cards",
        "updated": "updated June 2026",
        "s1_title": "Browse by track",
        "s1_note": "Fourteen tracks, numbered as in the README contents. Click one to filter the collection below.",
        "s2_title": "Reading paths",
        "s2_note": "Curated routes for different readers.",
        "s3_title": "Search the collection",
        "s3_note": "Full-text over titles, authors, tags, summaries, venues.",
        "placeholder": "Search {total} entries — try “process reward”, “Lean”, “contamination”…",
        "f_track": "Track",
        "f_track_all": "All tracks",
        "f_subfield": "Subfield",
        "f_subfield_all": "All subfields",
        "f_year": "Year",
        "f_year_all": "All years",
        "f_venue": "Venue",
        "f_venue_all": "All venues",
        "reset": "Reset",
        "loading": "Loading data…",
        "slice_ask": "🤖 Ask about this slice →",
        "footer_note": "Generated from structured metadata.",
        "footer_linkcheck": "link check",
        "footer_license": "MIT license",
    },
    "zh": {
        "lang": "zh-CN",
        "title": "大模型后训练推理数据精选",
        "nav_papers": "论文目录",
        "nav_cards": "论文卡片",
        "nav_coverage": "链接覆盖",
        "nav_ask": "问答 ↗",
        "nav_readme": REPO_BLOB + "/README_zh.md",
        "ask_href": ASK_SITE_PATH + "?lang=zh",
        "lang_switch": '<a class="lang" href="./" lang="en">English</a>',
        "eyebrow": "后训练推理数据的精选领域地图",
        "h1": "什么样的数据，<br>真正教会模型推理？",
        "lede": "每条论文条目都回答一个实际问题：当模型在后训练之后推理能力变强，是哪份数据记录、哪种反馈信号、验证器、奖励、环境或评审让它成为可能。",
        "cover": "cover_zh.svg",
        "cover_alt": "大模型后训练推理数据精选：三大板块十四个方向的繁花之树",
        "stat_entries": "篇论文",
        "stat_verified": "篇已验证",
        "stat_cards": "张卡片",
        "updated": "更新于 2026 年 6 月",
        "s1_title": "按方向浏览",
        "s1_note": "十四个方向，编号与 README 目录一致。点击任意方向即可筛选下方论文。",
        "s2_title": "阅读路径",
        "s2_note": "为不同读者准备的阅读顺序。",
        "s3_title": "检索论文",
        "s3_note": "支持标题、作者、标签、摘要、发表处全文检索。",
        "placeholder": "检索 {total} 篇论文——试试 “process reward”、“Lean”、“contamination”…",
        "f_track": "方向",
        "f_track_all": "全部方向",
        "f_subfield": "子方向",
        "f_subfield_all": "全部子方向",
        "f_year": "年份",
        "f_year_all": "全部年份",
        "f_venue": "发表处",
        "f_venue_all": "全部发表处",
        "reset": "重置",
        "loading": "正在加载数据…",
        "slice_ask": "🤖 就当前筛选提问 →",
        "footer_note": "由结构化元数据生成。",
        "footer_linkcheck": "链接检查",
        "footer_license": "MIT 许可证",
    },
}


def site_entries() -> list[dict]:
    cards = card_inventory()
    out = []
    for entry in entries():
        card_path = cards.get(entry.get("id"))
        art = artifacts(entry)
        category_ids = entry.get("category") or []
        first_category = category_ids[0] if category_ids else None
        subfield = infer_subfield(entry, first_category)
        link = primary_link(entry)
        needs_search = entry.get("status") != "verified" or not link
        out.append({
            "id": entry.get("id"),
            "title": entry.get("title"),
            "year": entry.get("year"),
            "venue": entry.get("venue"),
            "authors": entry.get("authors") or [],
            "source_role": entry.get("source_role") or [],
            "verification_contract": entry.get("verification_contract") or [],
            "supervision_granularity": entry.get("supervision_granularity") or [],
            "training_use": entry.get("training_use") or [],
            "domains": entry.get("domains") or [],
            "category": category_ids,
            "subfield": subfield.get("name") if subfield else "Other related work",
            "tags": entry.get("tags") or [],
            "one_line_summary": one_line(entry),
            "why_it_matters": why_it_matters(entry),
            "data_object": compact_data_object(entry),
            "feedback_verifier": compact_feedback(entry),
            "audit_focus": compact_audit(entry),
            "curation_level": curation_level(entry, card_path),
            "status": entry.get("status"),
            "needs_search": needs_search,
            "artifacts": {
                "paper": art.get("paper"),
                "venue": art.get("venue"),
                "arxiv": art.get("arxiv"),
                "openreview": art.get("openreview"),
                "acl": art.get("acl"),
                "pmlr": art.get("pmlr"),
                "cvf": art.get("cvf"),
                "doi": art.get("doi"),
                "code": art.get("code"),
                "data": art.get("data"),
                "huggingface": art.get("huggingface"),
                "project": art.get("project"),
                "bibtex": art.get("bibtex"),
                "card": card_path,
            },
            "primary_link": link,
        })
    return out


def site_counts(items: list[dict]) -> dict:
    def count_if(fn):
        return sum(1 for item in items if fn(item))

    return {
        "total_entries": len(items),
        "verified_entries": count_if(lambda item: item.get("status") == "verified"),
        "carded_entries": count_if(lambda item: item.get("artifacts", {}).get("card")),
        "data_releases": count_if(lambda item: "data_release" in item.get("source_role", [])),
        "verifiers_rewards": count_if(lambda item: "verifier_reward" in item.get("source_role", [])),
        "agent_environments": count_if(lambda item: "agent_environment" in item.get("source_role", [])),
        "scaling_studies": count_if(lambda item: "scaling_study" in item.get("source_role", [])),
        "needs_search": count_if(lambda item: item.get("needs_search")),
        "audit_ready_entries": count_if(lambda item: item.get("curation_level") == "L5_audit_ready"),
    }


def site_starter_packs(items: list[dict]) -> list[dict]:
    by_id = {item["id"]: item for item in items}
    matches = starter_matches(entries())
    packs = []
    for pack in starter_packs():
        rendered = []
        for title in pack.get("entries", []):
            entry = matches.get(title)
            rendered.append({
                "title": title,
                "entry_id": entry.get("id") if entry else None,
                "matched": bool(entry),
                "entry": by_id.get(entry.get("id")) if entry else None,
            })
        packs.append({
            "id": pack.get("id"),
            "emoji": pack.get("emoji"),
            "title": pack.get("title"),
            "goal": pack.get("goal"),
            "entries": rendered,
        })
    return packs


def render_index_html(counts: dict, lang: str = "en") -> str:
    s = STRINGS[lang]
    total = counts.get("total_entries", 0)
    return f"""<!doctype html>
<html lang="{s['lang']}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{s['title']}</title>
  <link rel="stylesheet" href="assets/site.css">
</head>
<body>
  <header class="topbar">
    <div class="wrap">
      <a class="brand" href="{REPO_URL}">Awesome LLM Reasoning Data</a>
      <nav class="navlinks" aria-label="Primary navigation">
        <a href="{REPO_URL}">GitHub</a>
        <a href="{s['nav_readme']}">README</a>
        <a href="{REPO_BLOB}/papers/README.md">{s['nav_papers']}</a>
        <a href="{REPO_BLOB}/cards/README.md">{s['nav_cards']}</a>
        <a href="{REPO_BLOB}/reports/link_coverage.md">{s['nav_coverage']}</a>
        <a class="ask" href="{s['ask_href']}">{s['nav_ask']}</a>
        {s['lang_switch']}
      </nav>
    </div>
  </header>

  <main class="wrap">
    <section class="hero">
      <div class="hero-text">
        <p class="eyebrow">{s['eyebrow']}</p>
        <h1>{s['h1']}</h1>
        <p class="lede">{s['lede']}</p>
        <p class="statline">
          <b id="totalEntries">{total}</b> {s['stat_entries']}<span class="sep">|</span>
          <b id="verifiedEntries">{counts.get('verified_entries', 0)}</b> {s['stat_verified']}<span class="sep">|</span>
          <b id="cardedEntries">{counts.get('carded_entries', 0)}</b> {s['stat_cards']}<span class="sep">|</span>
          {s['updated']}
        </p>
      </div>
      <div class="hero-media"><img class="hero-art" src="assets/{s['cover']}" alt="{s['cover_alt']}"></div>
    </section>

    <section>
      <div class="sechead">
        <span class="secnum">01</span>
        <h2>{s['s1_title']}</h2>
        <p>{s['s1_note']}</p>
      </div>
      <div id="trackGroups" class="groups"></div>
    </section>

    <section>
      <div class="sechead">
        <span class="secnum">02</span>
        <h2>{s['s2_title']}</h2>
        <p>{s['s2_note']}</p>
      </div>
      <div id="pathTabs" class="pathtabs"></div>
      <div id="pathPanel" class="pathpanel"></div>
    </section>

    <section id="search">
      <div class="sechead">
        <span class="secnum">03</span>
        <h2>{s['s3_title']}</h2>
        <p>{s['s3_note']}</p>
      </div>
      <div class="searchbar">
        <input id="q" type="search" placeholder="{s['placeholder'].format(total=total)}">
        <button id="reset" class="fbtn" type="button">{s['reset']}</button>
      </div>
      <div class="filters">
        <label>{s['f_track']}<select id="category"><option value="">{s['f_track_all']}</option></select></label>
        <label>{s['f_subfield']}<select id="subfield"><option value="">{s['f_subfield_all']}</option></select></label>
        <label>{s['f_year']}<select id="year"><option value="">{s['f_year_all']}</option></select></label>
        <label>{s['f_venue']}<select id="venue"><option value="">{s['f_venue_all']}</option></select></label>
      </div>
      <div class="resultmeta">
        <span class="count" id="resultSummary">{s['loading']}</span>
        <a id="sliceAsk" href="{s['ask_href']}">{s['slice_ask']}</a>
      </div>
      <section id="results" class="cards" aria-live="polite"></section>
    </section>
  </main>

  <footer class="sitefooter">
    <div class="wrap">
      <span>{s['footer_note']}</span>
      <a href="{REPO_BLOB}/data/papers.yaml">data/papers.yaml</a>
      <a href="assets/entries.json">entries.json</a>
      <a href="{REPO_BLOB}/reports/link_check.md">{s['footer_linkcheck']}</a>
      <a href="{REPO_BLOB}/LICENSE">{s['footer_license']}</a>
    </div>
  </footer>

  <script src="assets/atlas-data.js"></script>
  <script src="assets/i18n.js"></script>
  <script src="assets/site.js"></script>
</body>
</html>
"""


def render_ask_html(asset_prefix: str = "assets") -> str:
    html = (ROOT / "apps/ask-atlas/public/ask.html").read_text(encoding="utf-8")
    html = re.sub(
        r'href="/assets/ask\.css(?:\?v=[^"]*)?"',
        f'href="{asset_prefix}/ask.css?v={ASK_ASSET_VERSION}"',
        html,
    )
    html = re.sub(
        r'<script src="/assets/ask-i18n\.js(?:\?v=[^"]*)?"></script>',
        f'<script src="{asset_prefix}/ask-i18n.js?v={ASK_ASSET_VERSION}"></script>',
        html,
    )
    html = re.sub(
        r'<script src="/assets/ask\.js(?:\?v=[^"]*)?" type="module"></script>',
        f'<script src="{asset_prefix}/ask-config.js?v={ASK_ASSET_VERSION}"></script>\n  <script src="{asset_prefix}/ask.js?v={ASK_ASSET_VERSION}" type="module"></script>',
        html,
    )
    return html


def copy_ask_frontend_assets(target_root: Path) -> None:
    source_root = ROOT / "apps/ask-atlas/public/assets"
    dest_root = target_root / "docs/assets"
    dest_root.mkdir(parents=True, exist_ok=True)
    for name in ("ask.css", "ask.js", "ask-i18n.js"):
        (dest_root / name).write_text((source_root / name).read_text(encoding="utf-8"), encoding="utf-8")


def ensure_ask_config(path: Path) -> None:
    default = 'window.ASK_ATLAS_FRONTEND = "pages";\nwindow.ASK_ATLAS_BACKEND_URL = "";\n'
    if not path.exists():
        path.write_text(default, encoding="utf-8")
        return
    text = path.read_text(encoding="utf-8")
    if "ASK_ATLAS_FRONTEND" not in text:
        path.write_text('window.ASK_ATLAS_FRONTEND = "pages";\n' + text, encoding="utf-8")


def render(target_root: Path = ROOT) -> None:
    items = site_entries()
    counts = site_counts(items)
    cats = categories()
    tracks = research_tracks()
    cat_group = {cat.get("id"): cat.get("group") for cat in cats}
    for track in tracks:
        track["group"] = cat_group.get(track.get("category_id"))
        track["title_zh"] = TRACK_ZH.get(track.get("category_id"))
    packs = site_starter_packs(items)
    for pack in packs:
        pack["title_zh"] = PACK_ZH.get(pack.get("id"))
        pack["goal_zh"] = PACK_GOAL_ZH.get(pack.get("id"))
    write_json(target_root / "docs/assets/entries.json", items)
    write_json(target_root / "docs/assets/counts.json", counts)
    write_json(target_root / "docs/assets/categories.json", cats)
    write_json(target_root / "docs/assets/research_tracks.json", tracks)
    write_json(target_root / "docs/assets/starter_packs.json", packs)
    write_json(target_root / "data/_generated/entries.json", items)
    write_json(target_root / "data/_generated/counts.json", counts)
    fallback = {
        "entries": items,
        "counts": counts,
        "categories": cats,
        "research_tracks": tracks,
        "starter_packs": packs,
    }
    payload = json.dumps(fallback, ensure_ascii=False, indent=2)
    (target_root / "docs/assets/atlas-data.js").write_text(f"window.ATLAS_DATA = {payload};\n", encoding="utf-8")
    i18n = {
        "group_zh": {group["id"]: group["zh_title"] for group in CATEGORY_GROUPS},
        "subfield_zh": {**SUBFIELD_ZH, "Other related work": "其他相关工作"},
    }
    i18n_payload = json.dumps(i18n, ensure_ascii=False, indent=2)
    (target_root / "docs/assets/i18n.js").write_text(f"window.ATLAS_I18N = {i18n_payload};\n", encoding="utf-8")
    for name in ("cover.svg", "cover_zh.svg"):
        (target_root / "docs/assets" / name).write_text((ROOT / "assets" / name).read_text(encoding="utf-8"), encoding="utf-8")
    (target_root / "docs/index.html").write_text(render_index_html(counts, "en"), encoding="utf-8")
    (target_root / "docs/zh.html").write_text(render_index_html(counts, "zh"), encoding="utf-8")
    copy_ask_frontend_assets(target_root)
    ask_config = target_root / "docs/assets/ask-config.js"
    ensure_ask_config(ask_config)
    (target_root / "docs/ask.html").write_text(render_ask_html("assets"), encoding="utf-8")
    (target_root / "docs/ask").mkdir(parents=True, exist_ok=True)
    (target_root / "docs/ask/index.html").write_text(render_ask_html("../assets"), encoding="utf-8")


def check() -> int:
    with tempfile.TemporaryDirectory() as tmp:
        temp = Path(tmp)
        (temp / "docs/assets").mkdir(parents=True)
        (temp / "data/_generated").mkdir(parents=True)
        render(temp)
        checks = [
            ("docs/assets/entries.json", ROOT / "docs/assets/entries.json"),
            ("docs/assets/counts.json", ROOT / "docs/assets/counts.json"),
            ("docs/assets/categories.json", ROOT / "docs/assets/categories.json"),
            ("docs/assets/research_tracks.json", ROOT / "docs/assets/research_tracks.json"),
            ("docs/assets/starter_packs.json", ROOT / "docs/assets/starter_packs.json"),
            ("docs/assets/atlas-data.js", ROOT / "docs/assets/atlas-data.js"),
            ("docs/assets/i18n.js", ROOT / "docs/assets/i18n.js"),
            ("docs/assets/cover.svg", ROOT / "docs/assets/cover.svg"),
            ("docs/assets/cover_zh.svg", ROOT / "docs/assets/cover_zh.svg"),
            ("docs/assets/ask.css", ROOT / "docs/assets/ask.css"),
            ("docs/assets/ask.js", ROOT / "docs/assets/ask.js"),
            ("docs/assets/ask-i18n.js", ROOT / "docs/assets/ask-i18n.js"),
            ("docs/ask.html", ROOT / "docs/ask.html"),
            ("docs/ask/index.html", ROOT / "docs/ask/index.html"),
            ("docs/index.html", ROOT / "docs/index.html"),
            ("docs/zh.html", ROOT / "docs/zh.html"),
        ]
        problems = []
        for rel, actual in checks:
            if not actual.exists():
                problems.append(f"missing {actual.relative_to(ROOT)}")
                continue
            if rel.endswith(".json"):
                expected = json.loads((temp / rel).read_text(encoding="utf-8"))
                current = json.loads(actual.read_text(encoding="utf-8"))
                if current != expected:
                    problems.append(f"out of date: {actual.relative_to(ROOT)}")
            else:
                expected = (temp / rel).read_text(encoding="utf-8")
                current = actual.read_text(encoding="utf-8")
                if current != expected:
                    problems.append(f"out of date: {actual.relative_to(ROOT)}")
        ask_config = ROOT / "docs/assets/ask-config.js"
        if not ask_config.exists():
            problems.append("missing docs/assets/ask-config.js")
        else:
            ask_config_text = ask_config.read_text(encoding="utf-8")
            for required_key in ("ASK_ATLAS_FRONTEND", "ASK_ATLAS_BACKEND_URL"):
                if required_key not in ask_config_text:
                    problems.append(f"docs/assets/ask-config.js missing {required_key}")
            for problem in validate_public_config_text(ask_config_text):
                problems.append(f"docs/assets/ask-config.js unsafe backend URL: {problem}")
        if problems:
            for problem in problems:
                print("ERROR:", problem)
            return 1
    print("site data is up to date")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if args.check:
        return check()
    render(ROOT)
    print("rendered site data")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
