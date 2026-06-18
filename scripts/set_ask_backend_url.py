#!/usr/bin/env python3
"""Safely update the public Ask the Atlas backend URL config.

The generated file is committed to GitHub Pages, so it must contain only public
frontend markers and a clean HTTPS backend base URL. Secrets, query strings,
URL credentials, fragments, localhost URLs, and token-like parameters are
rejected here before they can land in docs/assets/ask-config.js.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from urllib.parse import urlparse


REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_CONFIG = REPO_ROOT / "docs" / "assets" / "ask-config.js"
SECRET_PATTERN = re.compile(
    r"QIHOO_API_KEY|GITHUB_CLIENT_SECRET|ASK_ATLAS_SESSION_SECRET|"
    r"ASK_ATLAS_TOKEN_ENCRYPTION_SECRET|UPSTASH_REDIS_REST_TOKEN|DATABASE_URL|"
    r"Authorization\s*:\s*Bearer|Bearer\s+[A-Za-z0-9_.-]{12,}|"
    r"fk[0-9A-Za-z_.-]{12,}|"
    r"[?&][^=\s]*(?:api[_-]?key|access[_-]?token|auth[_-]?token|"
    r"client[_-]?secret|secret|password|bearer)[^=\s]*=",
    re.IGNORECASE,
)
LOCAL_HOSTS = {"localhost", "127.0.0.1", "::1", "[::1]"}
CONFIG_ASSIGNMENT_PATTERN = re.compile(r'^window\.(ASK_ATLAS_FRONTEND|ASK_ATLAS_BACKEND_URL)\s*=\s*"([^"\\\r\n]*)"\s*;$')
UNSAFE_PUBLIC_URL_CHAR_PATTERN = re.compile(r"[\s\"'\\\x00-\x1f\x7f]")


def extract_backend_url(text: str) -> str:
    parsed, _issues = parse_public_config(text)
    return parsed.get("ASK_ATLAS_BACKEND_URL", "")


def parse_public_config(text: str) -> tuple[dict[str, str], list[str]]:
    values: dict[str, str] = {}
    issues: list[str] = []
    for raw_line in text.splitlines():
        line = raw_line.strip()
        if not line:
            continue
        match = CONFIG_ASSIGNMENT_PATTERN.match(line)
        if not match:
            if re.match(r"^window\.ASK_ATLAS_(?:FRONTEND|BACKEND_URL)\s*=", line):
                issues.append("invalid public config assignment")
            else:
                issues.append("unexpected executable content")
            continue
        name, value = match.groups()
        if name in values:
            issues.append(f"duplicate {name}")
        if UNSAFE_PUBLIC_URL_CHAR_PATTERN.search(value):
            issues.append(f"{name} contains unsafe characters")
        values[name] = value.rstrip("/") if name == "ASK_ATLAS_BACKEND_URL" else value
    return values, sorted(set(issues))


def validate_backend_url(url: str, *, allow_empty: bool = False) -> list[str]:
    problems: list[str] = []
    raw = url.strip()
    if not raw:
        return [] if allow_empty else ["ASK_ATLAS_BACKEND_URL is empty"]
    if raw != url:
        problems.append("URL must not have leading or trailing whitespace")
    if any(ord(ch) < 32 or ord(ch) == 127 for ch in raw):
        problems.append("URL must not contain control characters")
    if UNSAFE_PUBLIC_URL_CHAR_PATTERN.search(raw):
        problems.append("URL must not contain whitespace, quotes, or backslashes")
    if SECRET_PATTERN.search(raw):
        problems.append("URL contains secret-like names or token-like values")
    parsed = urlparse(raw)
    if parsed.scheme != "https":
        problems.append("URL must use https")
    if not parsed.netloc:
        problems.append("URL must include a host")
    if parsed.username or parsed.password:
        problems.append("URL must not contain username or password")
    if parsed.hostname and parsed.hostname.lower() in LOCAL_HOSTS:
        problems.append("URL must not point to localhost")
    if parsed.query:
        problems.append("URL must not contain a query string")
    if parsed.fragment:
        problems.append("URL must not contain a fragment")
    return problems


def validate_public_config_text(text: str, *, require_url: bool = False) -> list[str]:
    problems: list[str] = []
    values, structural_issues = parse_public_config(text)
    problems.extend(structural_issues)
    if SECRET_PATTERN.search(text):
        problems.append("config file contains secret-like names or token-like values")
    if values.get("ASK_ATLAS_FRONTEND") != "pages":
        problems.append("ASK_ATLAS_FRONTEND must be exactly pages")
    if "ASK_ATLAS_BACKEND_URL" not in values:
        problems.append("ASK_ATLAS_BACKEND_URL assignment is missing")
    else:
        problems.extend(validate_backend_url(values["ASK_ATLAS_BACKEND_URL"], allow_empty=not require_url))
    return sorted(set(problems))


def render_config(url: str) -> str:
    encoded_url = json.dumps(url.rstrip("/"))
    return (
        'window.ASK_ATLAS_FRONTEND = "pages";\n'
        f"window.ASK_ATLAS_BACKEND_URL = {encoded_url};\n"
    )


def display_path(path: Path) -> str:
    try:
        return str(path.relative_to(REPO_ROOT))
    except ValueError:
        return str(path)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("backend_url", nargs="?", help="Deployed HTTPS backend base URL.")
    parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG, help="Path to docs/assets/ask-config.js.")
    parser.add_argument("--clear", action="store_true", help="Clear the backend URL for a safe pre-deployment Pages build.")
    parser.add_argument("--check", action="store_true", help="Validate the current config instead of writing it.")
    parser.add_argument("--require-url", action="store_true", help="With --check, fail when the backend URL is empty.")
    args = parser.parse_args()

    config_path = args.config if args.config.is_absolute() else REPO_ROOT / args.config

    if args.check:
        text = config_path.read_text(encoding="utf-8") if config_path.exists() else ""
        problems = validate_public_config_text(text, require_url=args.require_url)
        if problems:
            print("Ask backend config is unsafe:", file=sys.stderr)
            for problem in sorted(set(problems)):
                print(f"- {problem}", file=sys.stderr)
            return 1
        print("Ask backend config is safe.")
        return 0

    if args.clear:
        url = ""
    else:
        if not args.backend_url:
            parser.error("backend_url is required unless --clear or --check is used")
        url = args.backend_url.strip().rstrip("/")
        problems = validate_backend_url(url)
        if problems:
            print("Refusing to write unsafe Ask backend URL:", file=sys.stderr)
            for problem in sorted(set(problems)):
                print(f"- {problem}", file=sys.stderr)
            return 1

    config_path.parent.mkdir(parents=True, exist_ok=True)
    config_path.write_text(render_config(url), encoding="utf-8")
    print(f"Updated {display_path(config_path)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
