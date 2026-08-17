import argparse
import collections
import hashlib
import json
import re
import shutil
import sys
import tempfile
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from atlas import config, cover, labels as L, paths as reading_paths
from atlas.cards import (
    ALIASES_APPLIED,
    UNKNOWN_VALUES,
    build_counts,
    build_facets,
    load_cards,
    load_tracks,
    write_json,
)

ROOT = config.ROOT
LIBRARY = config.LIBRARY
SITE = config.SITE
REPO_URL = config.REPO_URL
MINOR_FACET_COUNT = config.MINOR_FACET_COUNT

# Front-end sources live in the repo, not in the generated payload, so `--check`
# copies them into its scratch build instead of comparing them.
HAND_MAINTAINED = (
    "assets/site.css", "assets/site.js",
    "assets/ask.css", "assets/ask.js", "assets/ask-i18n.js",
)

# A Chinese field should not carry a long run of English prose: the two pages are
# meant to stay in one language each. Short Latin runs are model and dataset names a
# reader searches for, and `authors_ch` is Latin by design, so neither is checked.




# ---------------------------------------------------------------- markdown

# ---------------------------------------------------------------- helpers

# ---------------------------------------------------------------- coverage art

def coverage_svg(tracks, counts, lang: str) -> str:
    zh = lang == "zh"
    per_track = counts["per_track"]
    peak = max(per_track.values()) or 1
    group_color = {
        "background_foundations": "#0f766e",
        "core_reasoning_data_types": "#2563eb",
        "data_lifecycle": "#b0447c",
    }
    width, row = 560, 26
    top = 58
    height = top + row * len(tracks) + 34
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" '
        f'role="img" aria-label="{"14 个 track 的卡片覆盖度" if zh else "Card coverage across 14 tracks"}">',
        f'<rect width="{width}" height="{height}" fill="#ffffff"/>',
        '<g font-family="Inter, -apple-system, BlinkMacSystemFont, \'PingFang SC\', sans-serif">',
        f'<text x="24" y="30" font-size="11" letter-spacing="1.8" fill="#8f8a7d">'
        f'{"卡片覆盖度 · 14 个 TRACK" if zh else "CARD COVERAGE · 14 TRACKS"}</text>',
        f'<line x1="24" y1="42" x2="{width - 24}" y2="42" stroke="#e6e1d5"/>',
    ]
    bar_x, bar_max = 246, width - 24 - 246 - 34
    for index, track in enumerate(tracks):
        y = top + row * index
        count = per_track.get(track["id"], 0)
        live = track["integrated"]
        color = group_color.get(track["group"], "#8f8a7d")
        name = track["title_zh"] if zh else track["title"]
        limit = 18 if zh else 34
        if len(name) > limit:
            name = name[:limit - 1] + "…"
        parts.append(
            f'<text x="24" y="{y + 12}" font-size="9.5" font-family="ui-monospace, Menlo, monospace" '
            f'fill="#8f8a7d">{index:02d}</text>'
        )
        parts.append(
            f'<text x="46" y="{y + 12}" font-size="11" fill="{"#1d1b16" if live else "#b3ad9f"}">'
            f'{escape(name)}</text>'
        )
        if live:
            bar = max(3, round(bar_max * count / peak))
            parts.append(f'<rect x="{bar_x}" y="{y + 4}" width="{bar}" height="9" fill="{color}" fill-opacity="0.82"/>')
            parts.append(
                f'<text x="{bar_x + bar + 8}" y="{y + 12}" font-size="10" '
                f'font-family="ui-monospace, Menlo, monospace" fill="#6f6a5e">{count}</text>'
            )
        else:
            parts.append(
                f'<line x1="{bar_x}" y1="{y + 8.5}" x2="{bar_x + 26}" y2="{y + 8.5}" '
                f'stroke="#e6e1d5" stroke-width="2"/>'
            )
            tail = (
                (f"跨标签 {count}" if zh else f"CROSS-TAGGED {count}") if count
                else ("待接入" if zh else "PENDING")
            )
            parts.append(
                f'<text x="{bar_x + 34}" y="{y + 12}" font-size="9.5" letter-spacing="1.1" fill="#b3ad9f">'
                f'{escape(tail)}</text>'
            )
    footer = (
        f'{counts["cards"]} 张卡片 · {counts["tracks_covered"]} / {counts["tracks_total"]} 个 track 已接入'
        if zh else
        f'{counts["cards"]} cards · {counts["tracks_covered"]} of {counts["tracks_total"]} tracks integrated'
    )
    parts.append(f'<line x1="24" y1="{height - 26}" x2="{width - 24}" y2="{height - 26}" stroke="#e6e1d5"/>')
    parts.append(f'<text x="24" y="{height - 10}" font-size="10.5" fill="#6f6a5e">{footer}</text>')
    parts.append("</g></svg>")
    return "\n".join(parts)


# ---------------------------------------------------------------- page

STRINGS = {
    "en": {
        "lang": "en",
        "title": "Reasoning Data Card Atlas",
        "brand": "Awesome LLM Reasoning Data",
        "nav_repo": "GitHub",
        "nav_tracks": "Tracks",
        "nav_contracts": "Contracts",
        "nav_paths": "Paths",
        "nav_search": "Search",
        "nav_ask": "Ask ↗",
        "lang_switch": '<a class="lang" href="zh.html" lang="zh-CN">中文</a>',
        "eyebrow": "Bilingual paper cards for post-training reasoning data",
        "h1": "Every card names the data object and the thing that verifies it.",
        "lede": "Each entry is a full reading card, not a citation: nine sections written from the primary source — "
                "the problem, the core idea, the method, the evidence, what is new, what breaks, and how to read it.",
        "stat_cards": "cards",
        "stat_tracks": "tracks integrated",
        "stat_must": "must-read",
        "stat_sections": "bilingual sections",
        "s1_title": "Browse by track",
        "s1_note": "Fourteen tracks in three groups. Dark rows are integrated; faded rows only hold "
                   "cross-tagged cards; dashed rows are waiting for their batch.",
        "s2_title": "Reading paths",
        "s2_note": "Routes for different goals. Each is a live query over the library, so a new batch "
                   "joins the route it belongs to.",
        "s3_title": "Filter by feedback contract",
        "s3_note": "The metadata that makes a card reusable: who verifies the answer, and what consumes it.",
        "s4_title": "Search the collection",
        "s4_note": "Full text over titles, authors, summaries, tags, and domains.",
        "ask_slice": "🤖 Ask about this slice →",
        "placeholder": "Search {total} cards — try “rejection sampling”, “SWE agent”, “judge reward”…",
        "reset": "Reset all",
        "f_track": "Track",
        "f_year": "Year",
        "f_priority": "Priority",
        "f_all": "All",
        "loading": "Loading cards…",
        "footer_note": "Generated from library/ — the only source of truth.",
        "footer_repo": "Project repository",
    },
    "zh": {
        "lang": "zh-CN",
        "title": "推理数据论文卡片图谱",
        "brand": "大模型后训练推理数据",
        "nav_repo": "GitHub",
        "nav_tracks": "研究方向",
        "nav_contracts": "验证契约",
        "nav_paths": "阅读路径",
        "nav_search": "检索",
        "nav_ask": "问答 ↗",
        "lang_switch": '<a class="lang" href="./" lang="en">English</a>',
        "eyebrow": "后训练推理数据的双语论文卡片",
        "h1": "每张卡片都写清：<br>数据对象是什么，谁来验证它。",
        "lede": "每个条目都是一张完整的阅读卡片，而不是一条引用：九个章节全部依据原始论文写成——问题、核心思路、方法、证据、新意、局限与阅读要点。",
        "stat_cards": "张卡片",
        "stat_tracks": "个方向已接入",
        "stat_must": "篇必读",
        "stat_sections": "个双语章节",
        "s1_title": "按方向浏览",
        "s1_note": "三大板块共十四个方向。深色为已接入，浅色仅有跨标签卡片，破折号表示该批卡片尚未入库。",
        "s2_title": "阅读路径",
        "s2_note": "面向不同目标的阅读路线。每条都是对卡片库的实时查询，新卡片入库后会自动进入所属路线。",
        "s3_title": "按反馈契约筛选",
        "s3_note": "决定一张卡片能否被复用的元数据：答案由谁验证，又被什么消费。",
        "s4_title": "检索卡片",
        "s4_note": "支持标题、作者、摘要、标签与领域的全文检索。",
        "ask_slice": "🤖 就当前筛选提问 →",
        "placeholder": "检索 {total} 张卡片——试试「拒绝采样」、「SWE 智能体」、「裁判奖励」…",
        "reset": "全部重置",
        "f_track": "研究方向",
        "f_year": "年份",
        "f_priority": "阅读优先级",
        "f_all": "全部",
        "loading": "正在加载卡片…",
        "footer_note": "由 library/ 生成——唯一的数据真源。",
        "footer_repo": "项目仓库",
    },
}


def render_page(counts, lang: str, build: str) -> str:
    s = STRINGS[lang]
    total = counts["cards"]
    cover = "coverage_zh.svg" if lang == "zh" else "coverage.svg"
    return f"""<!doctype html>
<html lang="{s['lang']}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{s['title']}</title>
  <link rel="stylesheet" href="assets/site.css?v={build}">
</head>
<body>
  <header class="topbar">
    <div class="wrap">
      <a class="brand" href="{REPO_URL}">{s['brand']}</a>
      <nav class="navlinks" aria-label="Primary navigation">
        <a href="#tracks">{s['nav_tracks']}</a>
        <a href="#paths">{s['nav_paths']}</a>
        <a href="#contracts">{s['nav_contracts']}</a>
        <a href="#search">{s['nav_search']}</a>
        <a class="ask" href="ask/">{s['nav_ask']}</a>
        <a href="{REPO_URL}">{s['nav_repo']}</a>
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
          <b>{total}</b> {s['stat_cards']}<span class="sep">|</span>
          <b>{counts['tracks_covered']}/{counts['tracks_total']}</b> {s['stat_tracks']}<span class="sep">|</span>
          <b>{counts['must_read']}</b> {s['stat_must']}<span class="sep">|</span>
          <b>{counts['sections']}</b> {s['stat_sections']}
        </p>
      </div>
      <div class="hero-media"><img src="assets/{cover}?v={build}" alt="{s['s1_title']}"></div>
    </section>

    <section id="tracks">
      <div class="sechead">
        <span class="secnum">01</span>
        <h2>{s['s1_title']}</h2>
        <p>{s['s1_note']}</p>
      </div>
      <div id="trackGroups" class="groups"></div>
    </section>

    <section id="paths">
      <div class="sechead">
        <span class="secnum">02</span>
        <h2>{s['s2_title']}</h2>
        <p>{s['s2_note']}</p>
      </div>
      <div id="pathTabs" class="pathtabs"></div>
      <div id="pathPanel" class="pathpanel"></div>
    </section>

    <section id="contracts">
      <div class="sechead">
        <span class="secnum">03</span>
        <h2>{s['s3_title']}</h2>
        <p>{s['s3_note']}</p>
      </div>
      <div id="facetRows" class="facets"></div>
    </section>

    <section id="search">
      <div class="sechead">
        <span class="secnum">04</span>
        <h2>{s['s4_title']}</h2>
        <p>{s['s4_note']}</p>
      </div>
      <div class="searchbar">
        <input id="q" type="search" placeholder="{s['placeholder'].format(total=total)}">
        <button id="reset" class="fbtn" type="button">{s['reset']}</button>
      </div>
      <div class="filters">
        <label>{s['f_track']}<select id="track"><option value="">{s['f_all']}</option></select></label>
        <label>{s['f_year']}<select id="year"><option value="">{s['f_all']}</option></select></label>
        <label>{s['f_priority']}<select id="priority"><option value="">{s['f_all']}</option></select></label>
      </div>
      <div class="resultmeta">
        <span class="count" id="resultSummary">{s['loading']}</span>
        <span id="activeChips" class="chips"></span>
        <a id="sliceAsk" class="sliceask" href="ask/">{s['ask_slice']}</a>
      </div>
      <div id="results" class="cards" aria-live="polite"></div>
      <div id="moreWrap" class="morewrap" hidden><button id="more" class="fbtn" type="button"></button></div>
    </section>
  </main>

  <footer class="sitefooter">
    <div class="wrap">
      <span>{s['footer_note']}</span>
      <a href="{REPO_URL}">{s['footer_repo']}</a>
      <a href="assets/data/entries.json">entries.json</a>
    </div>
  </footer>

  <div id="drawer" class="drawer" hidden>
    <div class="scrim" data-close></div>
    <article class="panel" role="dialog" aria-modal="true" aria-labelledby="drawerTitle">
      <div class="panelbar">
        <span id="drawerCrumb" class="crumb"></span>
        <button id="drawerLang" class="fbtn ghost" type="button"></button>
        <button class="fbtn ghost" type="button" data-close>✕</button>
      </div>
      <div id="drawerBody" class="panelbody"></div>
    </article>
  </div>

  <script src="assets/site.js?v={build}"></script>
</body>
</html>
"""


# ---------------------------------------------------------------- ask shell

ASK_TEMPLATE = Path(__file__).resolve().parent / "data" / "ask.html"


def render_ask_page(build: str, prefix: str = "../assets") -> str:
    """Render the Ask shell for `ask/index.html` (default) or the site root `ask.html`.

    The page calls no backend: it reads `mode`, `entry`, and `question` from the query
    string, keeps history in localStorage, and renders a labelled demo answer.
    """
    html = ASK_TEMPLATE.read_text(encoding="utf-8")
    html = re.sub(r'"/assets/([a-z0-9.\-]+)(\?v=[^"]*)?"', rf'"{prefix}/\1?v={build}"', html)
    home = "../index.html" if prefix.startswith("..") else "index.html"
    html = html.replace("https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/", home)
    return html


# ---------------------------------------------------------------- build

def write_library_report(rows, dropped) -> None:
    """Report library issues without touching library/, which stays the source of truth."""
    conflicts = [row for row in rows if row["one_line_conflict"]]
    lines = [
        "# Library report",
        "",
        "Generated by `scripts/build_site.py`. Nothing here edits `library/`.",
        "",
        f"- cards scanned: {len(rows)}",
        f"- held back: {len(dropped)}",
        f"- published: {len(rows) - len(dropped)}",
        f"- cards carrying both `one_line` and a differing `one_line_summary`: {len(conflicts)}",
        "",
        "## Cards held back",
        "",
        "| entry_id | search_status | reason |",
        "|---|---|---|",
    ]
    lines += [
        f"| `{row['id']}` | {row['search_status'] or '—'} | {row['held_back']} |"
        for row in dropped
    ]
    if ALIASES_APPLIED:
        lines += [
            "",
            "## Facet vocabulary folded",
            "",
            "Track owners used slightly different controlled vocabularies. These synonyms map",
            "onto a canonical value at build time so one concept does not split into two filter",
            "chips. Cards keep the vocabulary their batch shipped with; the mapping lives in",
            "`FACET_ALIASES` in `scripts/labels.py`.",
            "",
            "| mapping | cards |",
            "|---|---:|",
        ]
        lines += [f"| `{key}` | {count} |" for key, count in ALIASES_APPLIED.most_common()]

    untranslated = [row for row in rows if row["zh_untranslated"]]
    if untranslated:
        lines += [
            "",
            "## Chinese fields carrying untranslated English",
            "",
            f"{len(untranslated)} cards, all held back from the published pool — the normalizer only",
            "touches published cards. Add a replacement to `scripts/data/zh_fields.yaml` and run",
            "the normalizer if one of these is ever promoted.",
            "",
            "| entry_id | published | field and untranslated run |",
            "|---|---|---|",
        ]
        lines += [
            f"| `{row['id']}` | {'yes' if not row['held_back'] else 'no'} | {row['zh_untranslated'][:90]} |"
            for row in untranslated
        ]

    suffixed = [row for row in rows if row["suffixed_id"]]
    if suffixed:
        lines += [
            "",
            "## entry_ids carrying a venue or arXiv identifier",
            "",
            f"{len(suffixed)} cards. `scripts/normalize_library.py` strips the suffix from published",
            "cards; anything left here is either held back or blocked because the stripped id is",
            "already taken by another card for the same paper.",
            "",
            "| entry_id | published |",
            "|---|---|",
        ]
        lines += [f"| `{row['id']}` | {'yes' if not row['held_back'] else 'no'} |" for row in suffixed]

    lines += [
        "",
        "## Divergent one-line summaries",
        "",
        "`one_line_summary` is canonical and is what the site shows. Published cards no longer",
        "carry `one_line` at all; the entries below are held-back cards, which the normalizer",
        "leaves alone so their review verdicts and content stay exactly as delivered.",
        "",
    ]
    for row in conflicts:
        lines.append(f"### `{row['id']}`")
        lines.append("")
        lines.append(f"- published: {row['kept_one_line']}")
        lines.append(f"- ignored `one_line`: {row['one_line_conflict']}")
        lines.append("")
    (ROOT / "reports").mkdir(exist_ok=True)
    (ROOT / "reports" / "library_report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def build_id(*payloads) -> str:
    """Content digest, so a rebuild changes every asset URL and no browser serves a stale build.

    Deterministic by design: identical library input yields an identical id, which keeps
    `--check` meaningful.
    """
    digest = hashlib.sha256()
    for payload in payloads:
        digest.update(json.dumps(payload, ensure_ascii=False, sort_keys=True).encode("utf-8"))
    for path in HAND_MAINTAINED:
        source = SITE / path
        if source.exists():
            digest.update(source.read_bytes())
    return digest.hexdigest()[:10]


def build(target: Path, report: bool = False, repo_root: Path = None) -> dict:
    """Write the site into `target`; `repo_root` receives the Ask compatibility export."""
    repo_root = repo_root or target.parent
    tracks = load_tracks()
    show_blocks = config.show_detail_blocks()
    entries, details, rows, dropped = load_cards(show_blocks)
    published_ids = {entry["id"] for entry in entries}
    offenders = {cid: sorted(v) for cid, v in UNKNOWN_VALUES.items() if cid in published_ids}
    if offenders:
        print("ERROR: published cards use values outside library/vocabulary.yaml:")
        for cid, values in sorted(offenders.items())[:20]:
            print(f"  {cid}: {', '.join(values)}")
        print(f"{len(offenders)} card(s). Add the value or a synonym to library/vocabulary.yaml,")
        print("or run: python scripts/normalize_library.py --apply")
        raise SystemExit(1)
    counts = build_counts(entries, tracks)
    counts["excluded"] = len(dropped)
    facets = build_facets(entries)
    stamp = build_id(entries, tracks, counts, facets, details)
    if report:
        write_library_report(rows, dropped)

    assets = target / "assets"
    data = assets / "data"
    if data.exists():
        shutil.rmtree(data)
    (data / "cards").mkdir(parents=True, exist_ok=True)

    write_json(data / "entries.json", entries)
    write_json(data / "tracks.json", tracks)
    write_json(data / "counts.json", counts)
    write_json(data / "facets.json", facets)
    write_json(data / "paths.json", reading_paths.resolve(entries))
    for cid, detail in details.items():
        write_json(data / "cards" / f"{cid}.json", detail)

    (assets / "coverage.svg").write_text(coverage_svg(tracks, counts, "en"), encoding="utf-8")
    (assets / "coverage_zh.svg").write_text(coverage_svg(tracks, counts, "zh"), encoding="utf-8")
    (target / "index.html").write_text(render_page(counts, "en", stamp), encoding="utf-8")
    (target / "zh.html").write_text(render_page(counts, "zh", stamp), encoding="utf-8")
    ask_dir = target / "ask"
    ask_dir.mkdir(parents=True, exist_ok=True)
    (ask_dir / "index.html").write_text(render_ask_page(stamp), encoding="utf-8")
    # `apps/ask-atlas` looks for its entrypoint at the site root as well as under `ask/`.
    (target / "ask.html").write_text(render_ask_page(stamp, prefix="assets"), encoding="utf-8")

    # The Ask RAG corpus builder reads this export rather than the site payload.
    write_json(repo_root / "data/_generated/entries.json", entries)
    write_json(repo_root / "data/_generated/counts.json", counts)
    counts["build"] = stamp
    return counts


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="verify the published site matches library/")
    args = parser.parse_args()

    site_name = SITE.name

    if args.check:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            temp = root / site_name
            for name in HAND_MAINTAINED:
                target = temp / name
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_text((SITE / name).read_text(encoding="utf-8"), encoding="utf-8")
            build(temp, repo_root=root)
            problems = []
            # Only files this build produced are compared, so the hand-written guides
            # that also live in the site directory are left alone.
            for path in sorted(root.rglob("*")):
                if not path.is_file():
                    continue
                rel = path.relative_to(root)
                in_site = rel.parts[0] == site_name
                if in_site and str(rel.relative_to(site_name)) in HAND_MAINTAINED:
                    continue
                actual = config.ROOT / rel
                if not actual.exists():
                    problems.append(f"missing {rel}")
                elif actual.read_text(encoding="utf-8") != path.read_text(encoding="utf-8"):
                    problems.append(f"out of date: {rel}")
            for problem in problems[:40]:
                print("ERROR:", problem)
            if problems:
                print(f"{len(problems)} problem(s). Run: python scripts/build_site.py")
                return 1
        print(f"{site_name}/ is up to date")
        return 0

    counts = build(SITE, report=True, repo_root=config.ROOT)
    print(
        f"built {site_name}/ — {counts['cards']} cards published, "
        f"{counts['excluded']} held back, "
        f"{counts['tracks_covered']}/{counts['tracks_total']} tracks, "
        f"{counts['must_read']} must-read, {counts['sections']} bilingual sections"
    )
    print("library report: reports/library_report.md")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
