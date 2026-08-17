#!/usr/bin/env python3
"""Generate the GitHub-facing documents from `library/`.

The site is only half the surface: an awesome list is found and judged through its
README. This writes the bilingual front pages, one browsable page per research track,
and the cover art, all derived from the same library the site is built from.

The hand-drawn figures in `assets/` are referenced, never rewritten.

Outputs (all generated, safe to delete):

    README.md, README_zh.md
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

from atlas import config, labels as L, paths as reading_paths
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
        "site": "Project website",
        "ask": "Ask the Atlas",
        "repo_title": "Awesome LLM Reasoning Data",
        "howto": "How to Use This Repo",
        "sample_lead": "A useful reasoning-data sample is rarely `prompt → answer`. It is usually:",
        "sample_alt": "task/context, trace/actions, answer/artifact, verifier/reward/judge/environment, metadata",
        "howto_lead": "Pick the path that matches your goal:",
        "goal": "Your goal",
        "route": "Suggested route",
        "updates": "Latest Updates",
        "date": "Date",
        "update": "Update",
        "conservative": "Review stays conservative: a card any curator rejected, or that nobody ruled on, "
                        "stays out of the published pool instead of being promoted.",
        "learning": "Learning Path",
        "learning_note": "Four stages, in reading order. Each stage starts from the learning guides, then "
                         "hands over to the matching reading path above.",
        "stage_reads": "Stage reading path",
        "website": "Project Website",
        "website_lead": "The site is generated from the same library as this README, so every number on it "
                        "matches the cards. It brings together:",
        "module": "Module",
        "can_do": "What you can do",
        "structure": "Repository structure",
        "contributing": "Contributing",
        "contributing_body": "Please do not submit only a paper title. A card carries official links, the "
                             "five classification facets, a bilingual one-line summary, and nine bilingual "
                             "reading sections written from the primary source. Start with "
                             "[CONTRIBUTING.md](CONTRIBUTING.md); the open work is listed in "
                             "[reports/library_report.md](reports/library_report.md) and [ROADMAP.md](ROADMAP.md).",
        "verdicts": "Review verdicts",
        "verdict": "Verdict",
        "meaning": "Meaning",
        "citation": "Citation",
        "citation_body": "If this repository helps your related work, dataset construction, verifier design, "
                         "or reading group, please cite the companion paper and link this repository. See "
                         "[CITATION.cff](CITATION.cff).",
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
        "site": "项目网站",
        "ask": "问答助手",
        "repo_title": "Awesome LLM Reasoning Data",
        "howto": "如何使用这个仓库",
        "sample_lead": "一份有用的推理数据样本很少只是 `prompt → answer`，它通常是：",
        "sample_alt": "任务与上下文、轨迹与动作、答案与产物、验证器与奖励与评审与环境、元数据",
        "howto_lead": "选择与你目标匹配的路线：",
        "goal": "你的目标",
        "route": "推荐路线",
        "updates": "最近更新",
        "date": "日期",
        "update": "更新内容",
        "conservative": "审核保持保守：任一策展人标记为拒绝、或无人裁决的卡片，都不进入发布池，而不是被顺势收录。",
        "learning": "学习路径",
        "learning_note": "四个阶段，按阅读顺序排列。每个阶段先读学习指南，再交给上面对应的阅读路径。",
        "stage_reads": "阶段阅读路径",
        "website": "项目网站",
        "website_lead": "网站与这份 README 由同一个卡片库生成，因此上面的每个数字都与卡片一致。它整合了：",
        "module": "模块",
        "can_do": "你可以做什么",
        "structure": "仓库结构",
        "contributing": "参与贡献",
        "contributing_body": "请不要只提交一个论文标题。一张卡片需要官方链接、五个分类维度、双语一句话摘要，"
                             "以及依据一手论文写成的九个双语阅读章节。请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)；"
                             "待办事项列在 [reports/library_report.md](reports/library_report.md) 与 [ROADMAP.md](ROADMAP.md)。",
        "verdicts": "审核裁决",
        "verdict": "裁决",
        "meaning": "含义",
        "citation": "引用",
        "citation_body": "如果这个仓库对你的相关研究、数据集构造、验证器设计或读书会有帮助，"
                         "请引用配套论文并链接本仓库，详见 [CITATION.cff](CITATION.cff)。",
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

GROUP_EMOJI = {
    "background_foundations": "🧭",
    "core_reasoning_data_types": "🧬",
    "data_lifecycle": "🛠️",
}


def contract_breakdown(track_id: str, entries: list, lang: str) -> str:
    """Which feedback contracts a track's cards actually commit to."""
    vocab = config.vocabulary()["verification_contract"]["values"]
    index = lang_index(lang)
    tally = {}
    for entry in entries:
        if track_id not in entry["tracks"]:
            continue
        for value in entry["verification_contract"]:
            tally[value] = tally.get(value, 0) + 1
    ordered = sorted(tally.items(), key=lambda item: -item[1])
    return ", ".join(f"{vocab.get(v, (v, v))[index]} {n}" for v, n in ordered)


def render_contents(tracks: list, counts: dict, entries: list, lang: str) -> str:
    s = I18N[lang]
    out = [f"## 📚 {s['contents']}", "", s["contents_note"], ""]
    for position, group in enumerate(L.GROUPS, 1):
        title = group["title_zh"] if lang == "zh" else group["title"]
        members = [t for t in tracks if t["group"] == group["id"]]
        span = f"`{members[0]['order']:02d}`" if len(members) == 1 else \
            f"`{members[0]['order']:02d}–{members[-1]['order']:02d}`"
        out += [f"### {GROUP_EMOJI[group['id']]} {position} · {title} {span}", "", "<blockquote>", ""]
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
                f"- {s['contract_col']}: {contract_breakdown(track['id'], entries, lang)}",
                "",
                "</details>",
                "",
            ]
        out += ["</blockquote>", ""]
    return "\n".join(out)


def render_paths(packs: list, by_id: dict, lang: str) -> str:
    s = I18N[lang]
    index = lang_index(lang)
    out = [f"### {s['paths']}", "", s["paths_note"], ""]
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


# Each stage of the learning path pairs the guides in `docs/` with a reading path.
LEARNING_PATH = [
    ("🌱", ["00_start_here", "01_what_is_post_training_reasoning_data", "02_verifier_anchored_taxonomy"],
     "beginner",
     ("Stage 1 · Build the mental model", "阶段 1 · 建立心智模型"),
     ("what the field studies and how the data is organized", "这个领域研究什么，数据如何组织")),
    ("🔬", ["03_reasoning_data_objects", "04_data_quality"], "verifier",
     ("Stage 2 · Know the data objects", "阶段 2 · 认识数据对象"),
     ("what a well-formed sample looks like and how quality is measured", "一份规范样本长什么样，质量如何衡量")),
    ("⚙️", ["05_construction_cookbook", "06_verifiers_and_rewards", "07_agent_trajectory_data",
            "08_scaling_and_test_time_compute"], "builder",
     ("Stage 3 · Construct, verify, and train", "阶段 3 · 构造、验证与训练"),
     ("how data is produced, scored, trained on, and scaled", "数据如何生成、打分、进入训练并规模化")),
    ("🕵️", ["09_audit_and_failure_modes", "10_industry_onboarding_path"], "audit",
     ("Stage 4 · Audit and practice", "阶段 4 · 审计与实践"),
     ("how to catch leakage and gaming, then apply it in engineering", "如何发现泄漏与作弊，再落到工程实践")),
]

GUIDE_TITLES = {
    "00_start_here": ("00 · Start here", "00 · 从这里开始"),
    "01_what_is_post_training_reasoning_data": ("01 · What is post-training reasoning data?", "01 · 什么是后训练推理数据"),
    "02_verifier_anchored_taxonomy": ("02 · Verifier-anchored taxonomy", "02 · 以验证器为锚的分类法"),
    "03_reasoning_data_objects": ("03 · Reasoning data objects", "03 · 推理数据对象"),
    "04_data_quality": ("04 · Data quality", "04 · 数据质量"),
    "05_construction_cookbook": ("05 · Construction cookbook", "05 · 构造手册"),
    "06_verifiers_and_rewards": ("06 · Verifiers and rewards", "06 · 验证器与奖励"),
    "07_agent_trajectory_data": ("07 · Agent trajectory data", "07 · 智能体轨迹数据"),
    "08_scaling_and_test_time_compute": ("08 · Scaling and test-time compute", "08 · 规模化与推理时计算"),
    "09_audit_and_failure_modes": ("09 · Audit and failure modes", "09 · 审计与失效模式"),
    "10_industry_onboarding_path": ("10 · Industry onboarding path", "10 · 工业上手路径"),
}

ROUTES = {
    "en": [
        ("New to the field", "Walk the [Learning Path](#-learning-path) from Stage 1, starting with "
                             "[00 · Start here](docs/00_start_here.md)"),
        ("Building a dataset", "Follow the [construction cookbook](docs/05_construction_cookbook.md), then take "
                               "the *Build a dataset* [reading path](#-reading-paths)"),
        ("Designing a verifier", "Start from [verifiers and rewards](docs/06_verifiers_and_rewards.md) and the "
                                 "*Design a verifier* [reading path](#-reading-paths)"),
        ("Auditing a claim", "Read [audit and failure modes](docs/09_audit_and_failure_modes.md), then the "
                             "*Audit a claim* [reading path](#-reading-paths)"),
        ("Looking for a specific paper", "Search the [project website]({site}), or grep "
                                          "[library/cards/](library/cards/)"),
        ("Contributing", "Read [CONTRIBUTING.md](CONTRIBUTING.md) and pick up open work from "
                         "[reports/library_report.md](reports/library_report.md)"),
    ],
    "zh": [
        ("刚接触这个领域", "从[学习路径](#-学习路径)的阶段 1 开始，先读 [00 · 从这里开始](docs/00_start_here.md)"),
        ("要构造一份数据集", "先读[构造手册](docs/05_construction_cookbook.md)，再走「构造一份数据集」[阅读路径](#-阅读路径)"),
        ("要设计验证器", "从[验证器与奖励](docs/06_verifiers_and_rewards.md)开始，再走「设计验证器与奖励」[阅读路径](#-阅读路径)"),
        ("要审计一个结论", "先读[审计与失效模式](docs/09_audit_and_failure_modes.md)，再走「审计一个结论」[阅读路径](#-阅读路径)"),
        ("在找某一篇具体论文", "用[项目网站]({site})检索，或直接 grep [library/cards/](library/cards/)"),
        ("想参与贡献", "阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，从 "
                   "[reports/library_report.md](reports/library_report.md) 里挑一项待办"),
    ],
}

MODULES = {
    "en": [
        ("🗂️ Track browsing", "Fourteen tracks in three groups, each showing how many cards it holds"),
        ("🛤️ Reading paths", "Six routes resolved live from the library, so a new card joins the route it belongs to"),
        ("⚖️ Contract filters", "Narrow by source role, verification contract, supervision granularity, "
                                "training use, and construction layer"),
        ("🔎 Full-text search", "Search titles, authors, summaries, tags, and domains across every published card"),
        ("🃏 Card drawer", "Open a card's nine sections in one language at a time, with every pinned artifact link"),
        ("🤖 Ask", "A source-grounded assistant, reachable from any card or from the current search slice"),
    ],
    "zh": [
        ("🗂️ 按方向浏览", "三大板块十四个方向，每个方向显示自己的卡片数"),
        ("🛤️ 阅读路径", "六条路线由卡片库实时解析，新卡片入库后自动进入所属路线"),
        ("⚖️ 契约筛选", "按论文角色、验证契约、监督粒度、训练用途与构造环节收窄范围"),
        ("🔎 全文检索", "在全部已发布卡片的标题、作者、摘要、标签与领域中检索"),
        ("🃏 卡片抽屉", "一次只用一种语言展开卡片的九个章节，并列出全部已核验的产物链接"),
        ("🤖 问答助手", "有据可依的助手，可从任意卡片或当前筛选结果直接进入"),
    ],
}

STRUCTURE = {
    "en": [
        ("[library/](library/cards/)", "The only source of truth: one directory per card with metadata, a Chinese "
                                        "header, and nine bilingual reading sections."),
        ("[library/vocabulary.yaml](library/vocabulary.yaml)", "Controlled vocabulary for the five classification "
                                                                "facets, with the synonyms that fold onto it."),
        ("[library/reading_paths.yaml](library/reading_paths.yaml)", "Each curated route stored as a facet query."),
        ("[atlas.yaml](atlas.yaml)", "Publishing rules: integrated tracks, review exclusions, and whether the "
                                     "curated detail blocks are published."),
        ("[papers/](papers/README.md)", "One browsable page per track in both languages, with a read-first table "
                                         "and an audit checklist."),
        ("[docs/](docs/)", "The learning guides and the generated project website."),
        ("[scripts/](scripts/)", "Generators and batch tooling; `scripts/atlas/` is the shared layer."),
        ("[reports/](reports/)", "What the library still owes: held-back cards, folded vocabulary, duplicates, "
                                  "and normalization edits."),
        ("[apps/ask-atlas/](apps/ask-atlas/)", "The Ask backend. The published page runs without it."),
    ],
    "zh": [
        ("[library/](library/cards/)", "唯一的数据真源：每张卡片一个目录，含元数据、中文头与九个双语阅读章节。"),
        ("[library/vocabulary.yaml](library/vocabulary.yaml)", "五个分类维度的受控词表，以及归并到它的同义词。"),
        ("[library/reading_paths.yaml](library/reading_paths.yaml)", "每条策展路线以 facet 查询的形式存储。"),
        ("[atlas.yaml](atlas.yaml)", "发布规则：已接入的方向、审核排除项，以及策展细节区块是否公开。"),
        ("[papers/](papers/README_zh.md)", "每个方向一页、中英各一份，含必读表格与审计清单。"),
        ("[docs/](docs/)", "学习指南与生成的项目网站。"),
        ("[scripts/](scripts/)", "生成器与批次工具，`scripts/atlas/` 是共享层。"),
        ("[reports/](reports/)", "卡片库尚欠的工作：未发布卡片、归并的词表、重复项与归一改动。"),
        ("[apps/ask-atlas/](apps/ask-atlas/)", "Ask 后端。已发布的问答页面不依赖它即可运行。"),
    ],
}

VERDICTS = {
    "en": [
        ("`promoted`", "A curator accepted the card; it publishes."),
        ("`candidate`", "Under consideration but complete; it publishes."),
        ("`rejected`", "A curator ruled it out; it stays in the library but never publishes."),
        ("no verdict", "Nobody ruled on it, so it is treated as unreviewed and stays unpublished."),
    ],
    "zh": [
        ("`promoted`", "策展人已接受，进入发布池。"),
        ("`candidate`", "仍在考虑但内容完整，进入发布池。"),
        ("`rejected`", "策展人已否决，留在库中但不发布。"),
        ("无裁决", "无人裁决，视为未审核，不发布。"),
    ],
}


def render_learning_path(packs: list, lang: str) -> str:
    s = I18N[lang]
    index = lang_index(lang)
    by_id = {pack["id"]: pack for pack in packs}
    anchor = "#-reading-paths" if lang == "en" else "#-阅读路径"
    out = [f"## 🛤️ {s['learning']}", "", s["learning_note"], ""]
    for emoji, guides, path_id, title, blurb in LEARNING_PATH:
        out += [f"**{emoji} {title[index]}** — {blurb[index]}", ""]
        for guide in guides:
            out.append(f"- [{GUIDE_TITLES[guide][index]}](docs/{guide}.md)")
        pack = by_id.get(path_id)
        if pack:
            out.append(f"- {s['stage_reads']}: [{pack['title'][index]}]({anchor}) · "
                       f"{pack['matched']} {s['matched']}")
        out.append("")
    return "\n".join(out)


def render_readme(tracks: list, counts: dict, packs: list, by_id: dict, entries: list, lang: str) -> str:
    s = I18N[lang]
    index = lang_index(lang)
    badge = (
        "[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)\n"
        f"[![Paper](https://img.shields.io/badge/arXiv-2606.02113-b31b1b)]({PAPER_URL})\n"
        f"[![Website](https://img.shields.io/badge/website-live-0f766e)]({SITE_URL})\n"
        f"[![Ask](https://img.shields.io/badge/Ask-demo%20preview-7c3aed)]({ASK_URL})\n"
        f"[![Cards](https://img.shields.io/badge/cards-{counts['cards']}-2563eb)](library/cards/)\n"
        f"[![Tracks](https://img.shields.io/badge/tracks-{counts['tracks_covered']}%2F{counts['tracks_total']}-0f766e)](papers/README{s['suffix']}.md)\n"
        f"[![Must read](https://img.shields.io/badge/must%20read-{counts['must_read']}-ea580c)]({SITE_URL})\n"
        "[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)"
    )
    routes = "\n".join(
        f"| {goal} | {route.format(site=SITE_URL)} |" for goal, route in ROUTES[lang]
    )
    modules = "\n".join(f"| {name} | {what} |" for name, what in MODULES[lang])
    structure = "\n".join(f"| {path} | {what} |" for path, what in STRUCTURE[lang])
    verdicts = "\n".join(f"| {verdict} | {meaning} |" for verdict, meaning in VERDICTS[lang])
    updates = "\n".join(f"| {date} | {text} |" for date, text in [
        ("2026-08-17", {
            "en": f"All **{counts['tracks_total']} tracks** are integrated. The library holds "
                  f"**{counts['cards']} published cards** with **{counts['sections']} bilingual sections**.",
            "zh": f"**{counts['tracks_total']} 个方向**全部接入，卡片库有 **{counts['cards']} 张已发布卡片**、"
                  f"**{counts['sections']} 个双语章节**。",
        }[lang]),
        ("2026-08-17", {
            "en": "Collapsed papers filed under more than one entry_id, folded the facet vocabulary onto "
                  "`library/vocabulary.yaml`, and made every Chinese field Chinese-only.",
            "zh": "合并了同一论文的重复条目，把各方向的词表归并到 `library/vocabulary.yaml`，"
                  "并让每个中文字段不再混入英文。",
        }[lang]),
        ("2026-08-17", {
            "en": f"Rebuilt the site, READMEs, and track pages from the library, so every count here is "
                  f"reproducible. **{counts['excluded']} cards** stay unpublished by review.",
            "zh": f"站点、README 与方向页全部由卡片库重建，因此这里的每个数字都可复现。"
                  f"**{counts['excluded']} 张卡片**因审核未通过而不发布。",
        }[lang]),
    ])
    out = [
        f"# 🌟 {s['repo_title']}",
        "",
        s["other"],
        "",
        f"> {s['tagline']}",
        "",
        badge,
        "",
        '<p align="center">',
        f'  <img src="assets/{s["cover"]}" width="92%" alt="{s["repo_title"]}">',
        "</p>",
        "",
        s["intro"],
        "",
        f"> {s['question']}",
        "",
        f"- 📄 {s['paper']}: [A Primer in Post-Training Reasoning Data]({PAPER_URL})",
        f"- 🌐 {s['site']}: [{SITE_URL}]({SITE_URL})",
        f"- 🤖 {s['ask']}: [{ASK_URL}]({ASK_URL})",
        f"- 🗂️ {s['index_title']}: [papers/README{s['suffix']}.md](papers/README{s['suffix']}.md)",
        "",
        f"## 🚀 {s['howto']}",
        "",
        s["sample_lead"],
        "",
        '<p align="center">',
        f'  <img src="assets/sample_shape{s["suffix"]}.svg" width="92%" alt="{s["sample_alt"]}">',
        "</p>",
        "",
        s["howto_lead"],
        "",
        f"| {s['goal']} | {s['route']} |",
        "|---|---|",
        routes,
        "",
        f"## 🔥 {s['updates']}",
        "",
        f"| {s['date']} | {s['update']} |",
        "|---|---|",
        updates,
        "",
        f"> {s['conservative']}",
        "",
        "<details>",
        f"<summary>📊 {s['stats']}</summary>",
        "",
        f"| {s['metric']} | {s['count']} |",
        "|---|---:|",
        f"| {s['total']} | {counts['cards']} |",
        f"| {s['tracks_live']} | {counts['tracks_covered']} / {counts['tracks_total']} |",
        f"| {s['must']} | {counts['must_read']} |",
        f"| {s['sections']} | {counts['sections']} |",
        f"| {s['held']} | {counts['excluded']} |",
        "",
        "</details>",
        "",
        render_contents(tracks, counts, entries, lang),
        render_learning_path(packs, lang),
        render_paths(packs, by_id, lang),
        f"## 🌐 {s['website']}",
        "",
        s["website_lead"],
        "",
        f"| {s['module']} | {s['can_do']} |",
        "|---|---|",
        modules,
        "",
        "<details>",
        f"<summary>🧩 {s['structure']}</summary>",
        "",
        f"| {s['path']} | {s['purpose']} |",
        "|---|---|",
        structure,
        "",
        "</details>",
        "",
        f"## 🤝 {s['contributing']}",
        "",
        s["contributing_body"],
        "",
        "<details>",
        f"<summary>🧱 {s['verdicts']}</summary>",
        "",
        f"| {s['verdict']} | {s['meaning']} |",
        "|---|---|",
        verdicts,
        "",
        "</details>",
        "",
        f"## 📜 {s['citation']}",
        "",
        s["citation_body"],
        "",
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

    # assets/cover*.svg and assets/sample_shape*.svg are hand-drawn and hand-tuned;
    # this generator references them and never rewrites them.
    for lang in ("en", "zh"):
        readme = "README.md" if lang == "en" else "README_zh.md"
        (target / readme).write_text(render_readme(tracks, counts, packs, by_id, entries, lang), encoding="utf-8")
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
        f"rendered README.md, README_zh.md, and {counts['tracks_total']} track pages "
        f"in both languages ({counts['cards']} cards)"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
