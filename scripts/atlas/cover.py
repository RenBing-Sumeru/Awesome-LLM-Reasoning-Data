"""The README cover: a blossoming tree whose 14 blooms are the research tracks.

Pure SMIL animation so GitHub renders it without JavaScript. Bloom radius scales with
each track's published card count, and the labels fade in one after another, so the
figure is generated from the library rather than drawn by hand.
"""
from __future__ import annotations

from html import escape

from . import labels as L

# Trunk, then the branches that reach each bloom cluster. Kept sparse on purpose: a
# twig crossing a cluster reads as a line through the blooms rather than behind them.
BRANCHES = [
    ("M600 425 C598 388 594 345 596 300 C598 268 602 240 599 212", 22),
    ("M599 240 C597 210 601 184 598 158 C598 144 599 134 598 128", 9),
    ("M597 312 C575 292 556 274 538 258", 11),
    ("M598 352 C570 340 548 330 528 318", 8),
    ("M598 302 C622 282 645 265 662 250", 11),
    ("M599 347 C628 336 652 326 672 312", 8),
]

# (x, y) per track, in `categories.yaml` order: foundations at the crown, the seven core
# data types on the left branch, the six lifecycle tracks on the right. Anchors are kept
# at least ~45px apart so neighbouring blooms read as separate flowers.
BLOOMS = [
    (600, 110),
    (415, 175), (462, 155), (508, 180), (430, 225), (476, 205), (520, 245), (455, 265),
    (676, 168), (722, 150), (768, 178), (690, 232), (736, 212), (772, 255),
]

GROUP_TONE = {
    "background_foundations": ("#16a34a", "#4ade80"),
    "core_reasoning_data_types": ("#2563eb", "#60a5fa"),
    "data_lifecycle": ("#b0447c", "#e879b8"),
}

LABEL_X = {"background_foundations": 450, "core_reasoning_data_types": 64, "data_lifecycle": 836}
DURATION = 12


def _bloom_radius(count: int, peak: int) -> float:
    if not count:
        return 5.0
    return round(9 + 13 * (count / peak) ** 0.5, 1)


def render(tracks: list, counts: dict, lang: str) -> str:
    zh = lang == "zh"
    per_track = counts["per_track"]
    peak = max(per_track.values()) or 1
    parts = [
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700" role="img" '
        f'aria-label="{"三大板块十四个方向的繁花之树" if zh else "A blossoming tree of 14 tracks in 3 groups"}">',
        '<rect width="900" height="700" fill="#ffffff"/>',
        '<g transform="translate(-300 78.75) scale(1.25)">',
        '<g stroke="#b49a7f" fill="none" stroke-linecap="round">',
    ]
    parts += [f'<path d="{path}" stroke-width="{width}"/>' for path, width in BRANCHES]
    parts.append("</g>")

    # Blooms open in track order; each holds until the whole set fades out together.
    for index, track in enumerate(tracks[: len(BLOOMS)]):
        x, y = BLOOMS[index]
        deep, light = GROUP_TONE.get(track["group"], ("#8f8a7d", "#d6d1c4"))
        radius = _bloom_radius(per_track.get(track["id"], 0), peak)
        start = 0.03 + index * 0.035
        keys = f"0;{start:.3f};{start + 0.03:.3f};{start + 0.05:.3f};0.86;0.93;1"
        parts.append(
            f'<g transform="translate({x} {y})"><g>'
            f'<animateTransform attributeName="transform" type="scale" '
            f'values="0;0;1.18;1;1;0;0" keyTimes="{keys}" dur="{DURATION}s" repeatCount="indefinite"/>'
            f'<circle r="{radius}" fill="{deep}" fill-opacity="0.5"/>'
            f'<circle r="{radius * 0.45:.1f}" cx="{radius * 0.5:.1f}" cy="{-radius * 0.45:.1f}" '
            f'fill="{light}" fill-opacity="0.55"/>'
            f"</g></g>"
        )
    parts.append("</g>")

    parts.append(
        '<g font-family="\'Helvetica Neue\', Helvetica, Arial, \'PingFang SC\', '
        "'Microsoft YaHei', sans-serif\" font-weight=\"700\">"
    )
    rows = {group: 0 for group in LABEL_X}
    for index, track in enumerate(tracks):
        group = track["group"]
        if group not in LABEL_X:
            continue
        deep, _light = GROUP_TONE[group]
        count = per_track.get(track["id"], 0)
        name = track["title_zh"] if zh else track["title"]
        anchor = "middle" if group == "background_foundations" else (
            "end" if group == "data_lifecycle" else "start")
        crown = group == "background_foundations"
        y = 128 if crown else 468 + rows[group] * 25
        rows[group] += 1
        start = 0.025 + index * 0.035
        keys = f"0;{start:.3f};{start + 0.035:.3f};0.86;0.93;1"
        label = f'{track["order"]:02d} · {name} · {count}'
        parts.append(
            f'<g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" '
            f'keyTimes="{keys}" dur="{DURATION}s" repeatCount="indefinite"/>'
            f'<text x="{LABEL_X[group]}" y="{y}" text-anchor="{anchor}" '
            f'font-size="{16 if crown else 15}" fill="{deep}">{escape(label)}</text></g>'
        )

    for group, x in LABEL_X.items():
        deep, _light = GROUP_TONE[group]
        title = next(g["title_zh"] if zh else g["title"] for g in L.GROUPS if g["id"] == group)
        anchor = "middle" if group == "background_foundations" else (
            "end" if group == "data_lifecycle" else "start")
        y = 100 if group == "background_foundations" else 442
        parts.append(
            f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-size="18" fill="{deep}">'
            f"{escape(title)}</text>"
        )

    footer = (
        f'{counts["cards"]} 张卡片 · 3 大板块 · 14 个方向'
        if zh else
        f'{counts["cards"]} cards · 3 groups · 14 tracks'
    )
    parts.append(f'<text x="450" y="680" text-anchor="middle" font-size="19" fill="#a18a72">{footer}</text>')
    parts.append("</g></svg>")
    return "\n".join(parts)
