
#!/usr/bin/env python3
"""Generate polished SVG/PNG assets for the reasoning-data atlas.

The figures are intentionally plain SVG/Pillow outputs so they render on GitHub
without a build pipeline.  Design cues are taken from the local skill resources:
semantic color layers, architecture-style bands, infographic cards, and
research-paper wording that keeps uncertainty and audit fields visible.
"""
from __future__ import annotations

from pathlib import Path
import html

from common import ROOT
from atlas_utils import entries, paper_card_inventory

WIDE = (1280, 720)
SOCIAL = (1280, 640)
ASSET_DIR = ROOT / "assets"

COLORS = {
    "ink": "#0e0f12",
    "muted": "#5b6472",
    "subtle": "#7b8494",
    "paper": "#fbfcfe",
    "panel": "#ffffff",
    "line": "#d8dee8",
    "green": "#10a37f",
    "blue": "#2b8fff",
    "violet": "#7c3aed",
    "amber": "#f59e0b",
    "rose": "#e11d48",
    "cyan": "#06b6d4",
    "slate": "#334155",
    "dark": "#111827",
}

PALETTE = ["#e8f7f2", "#eaf3ff", "#f4efff", "#fff6df", "#ffecef", "#e8fbff"]
STROKES = [COLORS["green"], COLORS["blue"], COLORS["violet"], COLORS["amber"], COLORS["rose"], COLORS["cyan"]]


def esc(value: object) -> str:
    return html.escape(str(value), quote=True)


def wrap_label(text: str, limit: int = 32) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if len(candidate) <= limit:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines or [""]


def svg_open(width: int, height: int, title: str, desc: str, dark: bool = False) -> list[str]:
    bg = "#0e0f12" if dark else COLORS["paper"]
    title_fill = "#f8fafc" if dark else COLORS["ink"]
    sub_fill = "#cbd5e1" if dark else COLORS["muted"]
    panel_fill = "#111827" if dark else COLORS["panel"]
    panel_stroke = "#334155" if dark else COLORS["line"]
    return [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-labelledby="title desc">',
        f'  <title id="title">{esc(title)}</title>',
        f'  <desc id="desc">{esc(desc)}</desc>',
        '  <defs>',
        '    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">',
        '      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e5e7eb" stroke-width="0.7" opacity="0.55"/>',
        '    </pattern>',
        '    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">',
        '      <stop offset="0" stop-color="#10a37f"/>',
        '      <stop offset="0.35" stop-color="#2b8fff"/>',
        '      <stop offset="0.7" stop-color="#7c3aed"/>',
        '      <stop offset="1" stop-color="#f59e0b"/>',
        '    </linearGradient>',
        '    <marker id="arrow" markerWidth="11" markerHeight="11" refX="9" refY="5.5" orient="auto" markerUnits="strokeWidth">',
        '      <path d="M1,1 L10,5.5 L1,10 Z" fill="#64748b"/>',
        '    </marker>',
        '    <style><![CDATA[',
        f'      .bg{{fill:{bg};}} .grid{{fill:url(#grid);opacity:{0.16 if dark else 0.55};}}',
        f'      .panel{{fill:{panel_fill};stroke:{panel_stroke};stroke-width:1.5;}}',
        f'      .title{{font:800 44px Inter,Arial,sans-serif;fill:{title_fill};letter-spacing:0;}}',
        f'      .subtitle{{font:500 19px Inter,Arial,sans-serif;fill:{sub_fill};letter-spacing:0;}}',
        '      .eyebrow{font:800 12px Inter,Arial,sans-serif;fill:#64748b;letter-spacing:0.9px;text-transform:uppercase;}',
        '      .h{font:800 18px Inter,Arial,sans-serif;fill:#0e0f12;letter-spacing:0;}',
        '      .h-dark{font:800 18px Inter,Arial,sans-serif;fill:#f8fafc;letter-spacing:0;}',
        '      .body{font:500 13.5px Inter,Arial,sans-serif;fill:#4b5563;letter-spacing:0;}',
        '      .small{font:600 12px Inter,Arial,sans-serif;fill:#64748b;letter-spacing:0;}',
        '      .mono{font:700 13px "IBM Plex Mono",Menlo,monospace;fill:#334155;letter-spacing:0;}',
        '      .metric{font:900 30px Inter,Arial,sans-serif;fill:#0e0f12;letter-spacing:0;}',
        '      .chip{font:800 12px Inter,Arial,sans-serif;fill:#111827;letter-spacing:0;}',
        '      .chip-dark{font:800 12px Inter,Arial,sans-serif;fill:#f8fafc;letter-spacing:0;}',
        '      .arrow{stroke:#64748b;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round;marker-end:url(#arrow);}',
        '      .soft-arrow{stroke:#94a3b8;stroke-width:1.7;fill:none;stroke-linecap:round;stroke-linejoin:round;marker-end:url(#arrow);opacity:0.85;}',
        '    ]]></style>',
        '  </defs>',
        f'  <rect class="bg" width="{width}" height="{height}"/>',
        f'  <rect class="grid" width="{width}" height="{height}"/>',
    ]


def svg_close(parts: list[str]) -> str:
    parts.append('</svg>')
    return "\n".join(parts) + "\n"


def text(x: int | float, y: int | float, value: str, cls: str = "body", anchor: str | None = None) -> str:
    a = f' text-anchor="{anchor}"' if anchor else ""
    return f'  <text class="{cls}" x="{x}" y="{y}"{a}>{esc(value)}</text>'


def multiline(x: int, y: int, lines: list[str], cls: str = "body", lh: int = 17) -> list[str]:
    return [text(x, y + i * lh, line, cls) for i, line in enumerate(lines)]


def card(x: int, y: int, w: int, h: int, fill: str, stroke: str, title: str, lines: list[str], icon: str = "") -> list[str]:
    out = [f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="16" fill="{fill}" stroke="{stroke}" stroke-width="1.8"/>']
    if icon:
        out.append(f'  <text x="{x+18}" y="{y+32}" font-family="Segoe UI Emoji, Apple Color Emoji, Arial" font-size="22">{esc(icon)}</text>')
        tx = x + 52
    else:
        tx = x + 18
    out.append(text(tx, y + 31, title, "h"))
    out.extend(multiline(x + 18, y + 58, lines, "body", 17))
    return out


def badge(x: int, y: int, label: str, fill: str, stroke: str, dark: bool = False, width: int | None = None) -> str:
    w = width or max(72, 12 * len(label) + 24)
    cls = "chip-dark" if dark else "chip"
    return f'  <rect x="{x}" y="{y}" width="{w}" height="30" rx="15" fill="{fill}" stroke="{stroke}" stroke-width="1.4"/><text class="{cls}" x="{x+w/2:.1f}" y="{y+20}" text-anchor="middle">{esc(label)}</text>'


def load_counts() -> dict[str, int]:
    card_entries = entries()
    counts = {"entries": len(card_entries), "verified": 0, "partial": 0, "needs_metadata": 0, "cards": 0}
    for item in card_entries:
        status = str(item.get("status") or "").strip()
        if status in counts:
            counts[status] += 1
        elif status == "needs_search":
            counts["needs_metadata"] += 1
    counts["cards"] = len(paper_card_inventory())
    return counts


def render_overview(counts: dict[str, int]) -> str:
    parts = svg_open(*WIDE, "Awesome LLM Reasoning Data overview", "A verifier-bearing reasoning-data sample flows from task context to feedback, metadata, training use, and audit.")
    parts.append('  <rect class="panel" x="44" y="38" width="1192" height="644" rx="28"/>')
    parts.append('  <rect x="44" y="38" width="1192" height="7" rx="3.5" fill="url(#accent)"/>')
    parts.append(text(76, 92, "Awesome LLM Reasoning Data", "title"))
    parts.append(text(78, 126, "A field guide to the data objects, feedback contracts, and audit fields behind reasoning-model post-training.", "subtitle"))
    parts.append(badge(78, 148, f"{counts['entries']} entries", "#ecfdf5", COLORS["green"]))
    parts.append(badge(188, 148, f"{counts['partial']} partial", "#eff6ff", COLORS["blue"]))
    parts.append(badge(300, 148, f"{counts['needs_metadata']} metadata queue", "#fff7ed", COLORS["amber"], width=172))
    labels = [
        ("Task / context", "prompt, state, source, split", "🧭", PALETTE[1], COLORS["blue"]),
        ("Trace / actions", "steps, tool calls, rollouts", "✍️", PALETTE[3], COLORS["amber"]),
        ("Answer / artifact", "solution, patch, proof, outcome", "✅", PALETTE[0], COLORS["green"]),
        ("Feedback", "checker, reward, judge, env", "🧪", PALETTE[2], COLORS["violet"]),
        ("Metadata", "teacher, license, filters, risks", "🧬", PALETTE[4], COLORS["rose"]),
    ]
    x0, y0 = 82, 205
    for idx, (title, sub, icon, fill, stroke) in enumerate(labels):
        x = x0 + idx * 232
        parts.extend(card(x, y0, 194, 92, fill, stroke, title, [sub], icon))
        if idx < len(labels) - 1:
            parts.append(f'  <path class="arrow" d="M{x+200} {y0+46} H{x+224}"/>')
    parts.append('  <rect x="82" y="345" width="510" height="224" rx="22" fill="#f8fafc" stroke="#d8dee8" stroke-width="1.6"/>')
    parts.append(text(110, 388, "Why this is different from a paper list", "h"))
    bullets = [
        "Reads each release as a data instrument, not only a benchmark result.",
        "Keeps verifier, reward, judge, environment, and lineage fields visible.",
        "Separates evidence-backed links from metadata still needing verification.",
        "Gives builders cards, docs, scripts, and an audit queue they can extend.",
    ]
    for i, item in enumerate(bullets):
        parts.append(f'  <circle cx="116" cy="{424+i*35}" r="5" fill="{STROKES[i % len(STROKES)]}"/>')
        parts.append(text(132, 429 + i * 35, item, "body"))
    parts.append('  <rect x="630" y="345" width="560" height="224" rx="22" fill="#111827" stroke="#334155" stroke-width="1.6"/>')
    parts.append(text(662, 388, "Reading route", "h-dark"))
    route = [
        ("01", "Starter Pack", "20 papers to enter the field"),
        ("02", "Paper Map", "clusters by data object and feedback contract"),
        ("03", "Cards", "release, verifier, recipe, agent, failure templates"),
        ("04", "Audit Queue", "metadata gaps stay visible until checked"),
    ]
    for i, (n, h, b) in enumerate(route):
        y = 418 + i * 38
        parts.append(f'  <rect x="662" y="{y-20}" width="42" height="26" rx="13" fill="{STROKES[i]}" opacity="0.95"/>')
        parts.append(text(683, y - 2, n, "chip-dark", "middle"))
        parts.append(text(720, y - 2, h, "h-dark"))
        parts.append(text(890, y - 2, b, "small"))
    parts.append(text(76, 624, "Mental model", "eyebrow"))
    parts.append(text(76, 652, "prompt → trace/actions → answer/artifact → verifier/reward/judge/environment → attribution metadata", "mono"))
    return svg_close(parts)


def render_paper_map() -> str:
    parts = svg_open(*WIDE, "Core paper map", "A compact map from paper clusters to the data objects and audit questions they expose.")
    parts.append('  <rect class="panel" x="44" y="38" width="1192" height="644" rx="28"/>')
    parts.append('  <rect x="44" y="38" width="1192" height="7" rx="3.5" fill="url(#accent)"/>')
    parts.append(text(76, 92, "Core Paper Map", "title"))
    parts.append(text(78, 126, "Read papers by the feedback contract they reveal: checkers, PRMs, recipes, reports, agents, rubrics, scaling, and failures.", "subtitle"))
    parts.append('  <circle cx="640" cy="354" r="104" fill="#ffffff" stroke="#0e0f12" stroke-width="2.6"/>')
    parts.append(text(640, 330, "Verifier-bearing", "h", "middle"))
    parts.append(text(640, 360, "reasoning", "h", "middle"))
    parts.append(text(640, 390, "data", "h", "middle"))
    clusters = [
        (86, 164, 324, 104, "Programmatic", ["OpenMathReasoning", "DeepMath-103K · Big-Math"], "🧮", PALETTE[1], COLORS["blue"]),
        (458, 154, 284, 94, "Process supervision", ["Step labels", "PRMs · rollout values"], "🪜", "#fffbe8", COLORS["amber"]),
        (820, 164, 344, 104, "Open recipes", ["OpenThoughts · DAPO", "LIMO · s1"], "🏗️", "#ecfdf5", COLORS["green"]),
        (86, 318, 324, 104, "Frontier reports", ["DeepSeek-R1 · Kimi K1.5", "Qwen3 · Magistral"], "🚀", "#f4efff", COLORS["violet"]),
        (820, 318, 344, 104, "Agent environments", ["SWE-Gym · WebArena", "OSWorld · OpenHands"], "🌐", "#e8fbff", COLORS["cyan"]),
        (86, 492, 324, 104, "Rubrics and judges", ["HealthBench · RewardBench", "OnlineRubrics"], "⚖️", "#fff1f2", COLORS["rose"]),
        (458, 528, 284, 94, "Scaling claims", ["RL compute · pass@k", "test-time budget"], "📈", "#eff6ff", COLORS["blue"]),
        (820, 492, 344, 104, "Failure audits", ["Leaky Thoughts · One Token", "Spurious Rewards"], "🧯", "#fff7ed", COLORS["amber"]),
    ]
    for x, y, w, h, title, lines, icon, fill, stroke in clusters:
        cx, cy = x + w / 2, y + h / 2
        parts.append(f'  <path class="soft-arrow" d="M640 354 L{cx:.1f} {cy:.1f}"/>')
    for item in clusters:
        parts.extend(card(*item))
    parts.append('  <rect x="430" y="285" width="280" height="104" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4"/>')
    parts.append(text(640, 318, "Audit question", "eyebrow", "middle"))
    parts.append(text(640, 348, "What data object", "h", "middle"))
    parts.append(text(640, 374, "made the gain possible?", "h", "middle"))
    return svg_close(parts)


def render_taxonomy() -> str:
    parts = svg_open(*WIDE, "Verifier-anchored taxonomy", "A taxonomy that starts from the verification contract, then expands into granularity, lineage, training use, and risk.")
    parts.append('  <rect class="panel" x="44" y="38" width="1192" height="644" rx="28"/>')
    parts.append('  <rect x="44" y="38" width="1192" height="7" rx="3.5" fill="url(#accent)"/>')
    parts.append(text(76, 92, "Verifier-Anchored Taxonomy", "title"))
    parts.append(text(78, 126, "Start with who decides correctness; then classify the sample, feedback granularity, lineage, training use, and failure risk.", "subtitle"))
    top = [
        (76, 168, 352, 186, "Programmatic", ["answer checkers", "unit tests", "proof checkers", "canonicalizers"], "🧮", PALETTE[1], COLORS["blue"]),
        (464, 168, 352, 186, "Environmental", ["tool/web/OS state", "actions and observations", "terminal predicate", "replay metadata"], "🌐", "#e8fbff", COLORS["cyan"]),
        (852, 168, 352, 186, "Judgment-required", ["rubrics", "LLM judges", "domain experts", "adjudication"], "⚖️", "#fff1f2", COLORS["rose"]),
    ]
    for item in top:
        parts.extend(card(*item))
    axes = [
        (76, 404, "Granularity", ["answer", "step", "transition", "episode", "rollout set"], COLORS["green"]),
        (332, 404, "Data object", ["prompt-answer", "trace", "PRM record", "preference pair", "trajectory"], COLORS["blue"]),
        (588, 404, "Lineage", ["human", "teacher", "search", "self-play", "environment"], COLORS["violet"]),
        (844, 404, "Training use", ["SFT", "distill", "reward model", "RLVR", "evaluation"], COLORS["amber"]),
        (1040, 404, "Risk", ["leakage", "contamination", "gaming", "judge attack"], COLORS["rose"]),
    ]
    for x, y, h, chips, color in axes:
        w = 216 if x < 1000 else 164
        parts.append(f'  <rect x="{x}" y="{y}" width="{w}" height="172" rx="18" fill="#ffffff" stroke="{color}" stroke-width="1.7"/>')
        parts.append(text(x + 18, y + 34, h, "h"))
        yy = y + 56
        for chip in chips:
            parts.append(f'  <rect x="{x+18}" y="{yy}" width="{w-36}" height="24" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>')
            parts.append(text(x + 30, yy + 16, chip, "small"))
            yy += 28
    parts.append(text(76, 638, "Rule of thumb", "eyebrow"))
    parts.append(text(76, 664, "A domain label is secondary; the feedback contract determines what evidence must be released.", "mono"))
    return svg_close(parts)


def render_construction_stack() -> str:
    parts = svg_open(1280, 640, "Construction stack", "The layered construction stack for reasoning datasets, from prompt sourcing through release metadata.")
    parts.append('  <rect class="panel" x="44" y="38" width="1192" height="564" rx="28"/>')
    parts.append('  <rect x="44" y="38" width="1192" height="7" rx="3.5" fill="url(#accent)"/>')
    parts.append(text(76, 92, "Construction Stack", "title"))
    parts.append(text(78, 126, "Where a reasoning-data record is made, filtered, optimized, documented, and made auditable.", "subtitle"))
    layers = [
        ("Prompt sourcing", "source mix · license · split · base pass rate", COLORS["blue"], "📥"),
        ("Trace writing", "human · teacher · search · self-play · environment", COLORS["amber"], "✍️"),
        ("Search substrate", "rollouts · beam/MCTS · critique · scaffold budget", COLORS["violet"], "🔍"),
        ("Verifier layer", "checker · tests · proof · judge · terminal predicate", COLORS["green"], "🧪"),
        ("Filtering", "pass/fail bands · rejection reasons · ambiguity set", COLORS["rose"], "🧹"),
        ("Optimizer/scaffold", "SFT · PRM · RM · RLVR · agent training", COLORS["cyan"], "🏋️"),
        ("Release metadata", "lineage · cards · risks · reproducibility", "#64748b", "🧬"),
    ]
    x, y = 84, 170
    for i, (h, b, color, icon) in enumerate(layers):
        yy = y + i * 56
        parts.append(f'  <rect x="{x}" y="{yy}" width="782" height="44" rx="13" fill="#ffffff" stroke="{color}" stroke-width="1.8"/>')
        parts.append(f'  <rect x="{x}" y="{yy}" width="10" height="44" rx="5" fill="{color}"/>')
        parts.append(f'  <text x="{x+26}" y="{yy+29}" font-family="Segoe UI Emoji, Apple Color Emoji, Arial" font-size="19">{esc(icon)}</text>')
        parts.append(text(x + 60, yy + 28, h, "h"))
        parts.append(text(x + 292, yy + 28, b, "body"))
        if i < len(layers) - 1:
            parts.append(f'  <path class="soft-arrow" d="M{x+392} {yy+48} V{yy+56}"/>')
    parts.append('  <rect x="928" y="170" width="284" height="376" rx="20" fill="#111827" stroke="#334155" stroke-width="1.6"/>')
    parts.append(text(958, 214, "Evidence artifacts", "h-dark"))
    artifacts = ["dedupe report", "verifier logs", "filter script", "teacher lineage", "dataset card", "known failures"]
    for i, artifact in enumerate(artifacts):
        yy = 248 + i * 44
        parts.append(f'  <rect x="958" y="{yy-23}" width="212" height="30" rx="15" fill="#1f2937" stroke="{STROKES[i % len(STROKES)]}"/>')
        parts.append(text(1064, yy - 3, artifact, "chip-dark", "middle"))
    return svg_close(parts)


def render_quality_matrix() -> str:
    parts = svg_open(1280, 640, "Reasoning data quality matrix", "A two-dimensional matrix for judging reasoning-data release quality by verifier strength and metadata completeness.")
    parts.append('  <rect class="panel" x="44" y="38" width="1192" height="564" rx="28"/>')
    parts.append('  <rect x="44" y="38" width="1192" height="7" rx="3.5" fill="url(#accent)"/>')
    parts.append(text(76, 92, "Reasoning Data Quality Matrix", "title"))
    parts.append(text(78, 126, "Correctness is verifier-relative; reuse is metadata-relative. Useful releases need both.", "subtitle"))
    ox, oy, cw, ch = 256, 176, 392, 180
    cells = [
        (ox, oy, "Strong verifier / weak metadata", "Works once; hard to trust or reuse", "#fff7ed", COLORS["amber"]),
        (ox+cw, oy, "Strong verifier / strong metadata", "Reusable, auditable, citation-worthy", "#ecfdf5", COLORS["green"]),
        (ox, oy+ch, "Weak verifier / weak metadata", "Seed note only; keep out of claims", "#f8fafc", "#94a3b8"),
        (ox+cw, oy+ch, "Weak verifier / strong metadata", "Good for surveys; not optimization-ready", "#eff6ff", COLORS["blue"]),
    ]
    for x, y, h, b, fill, stroke in cells:
        parts.append(f'  <rect x="{x}" y="{y}" width="{cw}" height="{ch}" rx="18" fill="{fill}" stroke="{stroke}" stroke-width="1.8"/>')
        parts.append(text(x + 26, y + 48, h, "h"))
        parts.append(text(x + 26, y + 82, b, "body"))
        checks = ["verifier pinned", "lineage clear", "split/license known"] if "strong metadata" in h.lower() else ["missing link", "unknown filter", "unclear teacher"]
        for i, c in enumerate(checks):
            parts.append(f'  <circle cx="{x+34}" cy="{y+118+i*24}" r="4.5" fill="{stroke}"/>')
            parts.append(text(x + 48, y + 123 + i * 24, c, "small"))
    parts.append(text(650, 548, "Metadata completeness →", "eyebrow", "middle"))
    parts.append(f'  <path d="M258 542 H1034" stroke="{COLORS["ink"]}" stroke-width="2" marker-end="url(#arrow)"/>')
    parts.append(text(146, 364, "Verifier strength", "eyebrow", "middle"))
    parts.append(f'  <path d="M174 542 V180" stroke="{COLORS["ink"]}" stroke-width="2" marker-end="url(#arrow)"/>')
    return svg_close(parts)


def render_scaling_ledger() -> str:
    parts = svg_open(1280, 640, "Scaling attribution ledger", "A ledger for separating gains from data, verifier, optimizer, inference budget, and evaluation protocol changes.")
    parts.append('  <rect class="panel" x="44" y="38" width="1192" height="564" rx="28"/>')
    parts.append('  <rect x="44" y="38" width="1192" height="7" rx="3.5" fill="url(#accent)"/>')
    parts.append(text(76, 92, "Scaling Attribution Ledger", "title"))
    parts.append(text(78, 126, "Before believing a scaling claim, separate ceiling movement from efficiency movement and protocol movement.", "subtitle"))
    cols = [
        ("Data", "unique examples · reuse · difficulty bands", COLORS["blue"], "📚"),
        ("Verifier", "coverage · version · independence", COLORS["green"], "🧪"),
        ("Optimizer", "SFT/RLVR mix · reward shaping", COLORS["violet"], "⚙️"),
        ("Inference", "pass@k · budget forcing · search", COLORS["amber"], "⏱️"),
        ("Evaluation", "decontam · protocol · hidden tests", COLORS["rose"], "📏"),
    ]
    x0, y0, w, h = 78, 182, 222, 300
    for i, (name, sub, color, icon) in enumerate(cols):
        x = x0 + i * 238
        parts.append(f'  <rect x="{x}" y="{y0}" width="{w}" height="{h}" rx="20" fill="#ffffff" stroke="{color}" stroke-width="1.8"/>')
        parts.append(f'  <text x="{x+24}" y="{y0+48}" font-family="Segoe UI Emoji, Apple Color Emoji, Arial" font-size="26">{esc(icon)}</text>')
        parts.append(text(x + 62, y0 + 45, name, "h"))
        for j, line in enumerate(wrap_label(sub, 24)):
            parts.append(text(x + 24, y0 + 82 + j * 18, line, "body"))
        questions = [
            "What changed?",
            "Who measured it?",
            "Can it be rerun?",
            "What fails first?",
        ]
        for j, q in enumerate(questions):
            yy = y0 + 148 + j * 39
            parts.append(f'  <rect x="{x+24}" y="{yy-20}" width="{w-48}" height="27" rx="13.5" fill="#f8fafc" stroke="#e2e8f0"/>')
            parts.append(text(x + w / 2, yy - 2, q, "small", "middle"))
        if i < len(cols)-1:
            parts.append(f'  <path class="soft-arrow" d="M{x+w+8} {y0+150} H{x+238-10}"/>')
    parts.append('  <rect x="200" y="522" width="880" height="44" rx="22" fill="#111827" stroke="#334155"/>')
    parts.append(text(640, 550, "Claim type: higher asymptote? better sample efficiency? larger inference budget? easier benchmark slice?", "chip-dark", "middle"))
    return svg_close(parts)


def render_social_svg(counts: dict[str, int]) -> str:
    parts = svg_open(*SOCIAL, "Awesome LLM Reasoning Data social preview", "Social preview for the reasoning-data atlas.", dark=True)
    parts.append('  <rect x="0" y="0" width="1280" height="10" fill="url(#accent)"/>')
    parts.append(text(72, 112, "Awesome LLM", "title"))
    parts.append(text(72, 178, "Reasoning Data", "title"))
    parts.append(text(76, 232, "Post-training data · Verifiers · Rewards · Recipes · Audit fields", "subtitle"))
    parts.append(badge(76, 282, f"{counts['entries']} entries", "#111827", COLORS["green"], dark=True, width=150))
    parts.append(badge(244, 282, f"{counts['partial']} partial", "#111827", COLORS["blue"], dark=True, width=148))
    parts.append(badge(410, 282, f"{counts['needs_metadata']} to verify", "#111827", COLORS["amber"], dark=True, width=170))
    parts.append('  <rect x="700" y="86" width="430" height="418" rx="30" fill="#f8fafc" stroke="#334155"/>')
    parts.append(text(738, 148, "Verifier-bearing sample", "h"))
    items = [
        ("task/context", COLORS["blue"], "#eaf3ff"),
        ("trace/actions", COLORS["amber"], "#fff6df"),
        ("answer/artifact", COLORS["green"], "#e8f7f2"),
        ("verifier/reward/judge/env", COLORS["violet"], "#f4efff"),
        ("attribution metadata", COLORS["rose"], "#ffecef"),
    ]
    for i, (label, stroke, fill) in enumerate(items):
        y = 184 + i * 64
        parts.append(f'  <rect x="738" y="{y}" width="354" height="44" rx="14" fill="{fill}" stroke="{stroke}" stroke-width="1.8"/>')
        parts.append(text(766, y + 29, label, "h"))
        if i < len(items)-1:
            parts.append(f'  <path class="soft-arrow" d="M915 {y+48} V{y+60}"/>')
    parts.append(text(76, 398, "A learning-first atlas for the data layer behind reasoning-model post-training.", "subtitle"))
    parts.append(text(76, 442, "Use it to compare what was trained, what verified it, and what evidence is still missing.", "subtitle"))
    return svg_close(parts)


def render_social_png(counts: dict[str, int]) -> None:
    from PIL import Image, ImageDraw, ImageFont

    out = ASSET_DIR / "social-preview.png"
    img = Image.new("RGB", SOCIAL, "#0e0f12")
    draw = ImageDraw.Draw(img)

    def font(size: int, bold: bool = False):
        candidates = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
            "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
        ]
        for path in candidates:
            if Path(path).exists():
                return ImageFont.truetype(path, size)
        return ImageFont.load_default()

    title = font(58, True)
    subtitle = font(25)
    small = font(17, True)
    h = font(23, True)
    body = font(18)
    draw.rectangle((0, 0, 1280, 10), fill="#10a37f")
    draw.rectangle((426, 0, 853, 10), fill="#2b8fff")
    draw.rectangle((853, 0, 1280, 10), fill="#7c3aed")
    draw.text((72, 82), "Awesome LLM", fill="#f8fafc", font=title)
    draw.text((72, 150), "Reasoning Data", fill="#f8fafc", font=title)
    draw.text((76, 218), "Post-training data · Verifiers · Rewards · Recipes · Audit fields", fill="#cbd5e1", font=subtitle)
    badges = [(76, f"{counts['entries']} entries", "#10a37f"), (244, f"{counts['partial']} partial", "#2b8fff"), (410, f"{counts['needs_metadata']} to verify", "#f59e0b")]
    for x, label, color in badges:
        draw.rounded_rectangle((x, 282, x + 150, 326), radius=22, fill="#111827", outline=color, width=2)
        draw.text((x + 18, 294), label, fill="#f8fafc", font=small)
    draw.text((76, 398), "A learning-first atlas for the data layer behind", fill="#cbd5e1", font=subtitle)
    draw.text((76, 432), "reasoning-model post-training.", fill="#cbd5e1", font=subtitle)
    draw.text((76, 486), "Compare what was trained, what verified it,", fill="#94a3b8", font=body)
    draw.text((76, 514), "and what evidence is still missing.", fill="#94a3b8", font=body)
    draw.rounded_rectangle((700, 86, 1130, 504), radius=30, fill="#f8fafc", outline="#334155", width=2)
    draw.text((738, 126), "Verifier-bearing sample", fill="#0e0f12", font=h)
    items = [
        ("task/context", "#2b8fff", "#eaf3ff"),
        ("trace/actions", "#f59e0b", "#fff6df"),
        ("answer/artifact", "#10a37f", "#e8f7f2"),
        ("verifier/reward/judge/env", "#7c3aed", "#f4efff"),
        ("attribution metadata", "#e11d48", "#ffecef"),
    ]
    for i, (label, stroke, fill) in enumerate(items):
        y = 184 + i * 64
        draw.rounded_rectangle((738, y, 1092, y + 44), radius=14, fill=fill, outline=stroke, width=2)
        draw.text((766, y + 13), label, fill="#0e0f12", font=h)
        if i < len(items) - 1:
            draw.line((915, y + 48, 915, y + 60), fill="#64748b", width=3)
            draw.polygon([(909, y + 58), (921, y + 58), (915, y + 66)], fill="#64748b")
    img.save(out)


def main() -> int:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    counts = load_counts()
    assets = {
        "overview.svg": render_overview(counts),
        "paper_map.svg": render_paper_map(),
        "taxonomy.svg": render_taxonomy(),
        "construction_stack.svg": render_construction_stack(),
        "quality_matrix.svg": render_quality_matrix(),
        "scaling_ledger.svg": render_scaling_ledger(),
        "social-preview.svg": render_social_svg(counts),
    }
    for name, content in assets.items():
        (ASSET_DIR / name).write_text(content, encoding="utf-8")
    render_social_png(counts)
    print("generated assets:")
    for name in [*assets.keys(), "social-preview.png"]:
        print(f"- assets/{name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
