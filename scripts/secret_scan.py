#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path

from common import ROOT


SKIP_DIRS = {
    ".git",
    ".venv",
    "__pycache__",
    "node_modules",
}

SKIP_FILES = {
    "package-lock.json",
}

PATTERNS = [
    ("360 API key", re.compile(r"\bfk[0-9]{6,}\.[A-Za-z0-9_.-]{16,}\b")),
    ("360 bearer token", re.compile(r"\bBearer\s+fk[0-9A-Za-z_.-]{16,}\b", re.IGNORECASE)),
    ("GitHub token", re.compile(r"\bgh[pousr]_[A-Za-z0-9_]{20,}\b")),
    ("OpenAI-style API key", re.compile(r"\bsk-[A-Za-z0-9]{32,}\b")),
    ("Anthropic API key", re.compile(r"\bsk-ant-[A-Za-z0-9_-]{24,}\b")),
    ("AWS access key", re.compile(r"\bAKIA[0-9A-Z]{16}\b")),
    ("Postgres URL with password", re.compile(r"\bpostgres(?:ql)?://[^:\s/@]+:[^@\s]+@[^/\s]+/[^\s\"']+", re.IGNORECASE)),
]

ALLOWLIST_SUBSTRINGS = [
    "sentinel",
    "placeholder",
    "replace-with",
    "REPLACE_WITH",
    "PASTE_POSITIVE_NUMBER",
    "localhost",
    "127.0.0.1",
    "example.com",
    "example.test",
    "your-secure-backend.example",
    "<postgres connection string>",
]

ALLOWLIST_PATH_PARTS = [
    ("apps", "ask-atlas", "test"),
]


def skip_path(path: Path) -> bool:
    rel_parts = path.relative_to(ROOT).parts
    if any(part in SKIP_DIRS for part in rel_parts):
        return True
    if path.name in SKIP_FILES:
        return True
    return False


def allowlisted(path: Path, line: str) -> bool:
    rel_parts = path.relative_to(ROOT).parts
    for parts in ALLOWLIST_PATH_PARTS:
        if rel_parts[: len(parts)] == parts:
            return True
    return any(marker in line for marker in ALLOWLIST_SUBSTRINGS)


def scan_file(path: Path) -> list[str]:
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return []
    findings = []
    for line_no, line in enumerate(text.splitlines(), start=1):
        if allowlisted(path, line):
            continue
        for label, pattern in PATTERNS:
            if pattern.search(line):
                rel = path.relative_to(ROOT)
                findings.append(f"{rel}:{line_no}: possible {label}")
    return findings


def main() -> int:
    findings = []
    for path in ROOT.rglob("*"):
        if not path.is_file() or skip_path(path):
            continue
        findings.extend(scan_file(path))
    if findings:
        print("Potential secret material found:")
        for finding in findings:
            print(f"- {finding}")
        return 1
    print("secret scan passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
