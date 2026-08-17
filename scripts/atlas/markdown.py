"""Minimal Markdown for card prose.

Card sections are plain paragraphs with the occasional link, emphasis, inline code,
or list, so a full Markdown dependency would be overkill. Everything is escaped
before any markup is applied.
"""
from __future__ import annotations

import re
from html import escape

BULLET = re.compile(r"^[-*]\s+")
NUMBERED = re.compile(r"^\d+[.)]\s+")
BLANK_LINE = re.compile(r"\n\s*\n")
CODE = re.compile(r"`([^`]+)`")
LINK = re.compile(r"\[([^\]]+)\]\((https?://[^\s)]+)\)")
BOLD = re.compile(r"\*\*([^*]+)\*\*")
ITALIC = re.compile(r"(?<!\*)\*([^*\n]+)\*(?!\*)")


def inline(text: str) -> str:
    out = escape(str(text or ""))
    out = CODE.sub(r"<code>\1</code>", out)
    out = LINK.sub(r'<a href="\2" target="_blank" rel="noreferrer">\1</a>', out)
    out = BOLD.sub(r"<strong>\1</strong>", out)
    out = ITALIC.sub(r"<em>\1</em>", out)
    return out


def _items(lines, pattern) -> str:
    return "".join("<li>" + inline(pattern.sub("", line)) + "</li>" for line in lines)


def to_html(text: str) -> str:
    body = str(text or "").strip()
    if not body:
        return ""
    html = []
    for block in BLANK_LINE.split(body):
        lines = [line.strip() for line in block.strip().split("\n") if line.strip()]
        if not lines:
            continue
        if all(BULLET.match(line) for line in lines):
            html.append("<ul>" + _items(lines, BULLET) + "</ul>")
        elif all(NUMBERED.match(line) for line in lines):
            html.append("<ol>" + _items(lines, NUMBERED) + "</ol>")
        else:
            html.append("<p>" + inline(" ".join(lines)) + "</p>")
    return "".join(html)
