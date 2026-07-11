#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse
from common import ROOT, load_yaml_json
from atlas_utils import entries

MD_LINK_RE = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
URL_RE = re.compile(r"^https?://[^\s<>]+$")
PROBE_HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; Awesome-LLM-Reasoning-Data/1.0; +https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}


def is_external(target: str) -> bool:
    return urlparse(target).scheme in {"http", "https"}


def clean_target(target: str) -> str:
    return target.strip().split("#", 1)[0]


def collect_artifact_urls(entries):
    urls = []
    bad = []
    for entry in entries:
        where = entry.get("id", "<missing-id>")
        for key, value in (entry.get("artifacts") or {}).items():
            if not value:
                continue
            if isinstance(value, str) and (URL_RE.match(value) or key == "doi"):
                if URL_RE.match(value):
                    urls.append((where, key, value))
            else:
                bad.append(f"{where}: invalid artifact link for {key}: {value}")
    return urls, bad


def markdown_files():
    roots = [ROOT / "README.md", ROOT / "README_zh.md"]
    files = [p for p in roots if p.exists()]
    for base in [ROOT / "docs", ROOT / "papers", ROOT / "cards", ROOT / "reports"]:
        if base.exists():
            files.extend(sorted(base.glob("**/*.md")))
    return files


def collect_markdown_links():
    local_missing = []
    external = []
    checked = 0
    for path in markdown_files():
        text = path.read_text(encoding="utf-8")
        for raw in MD_LINK_RE.findall(text):
            target = clean_target(raw)
            if not target or target.startswith("mailto:") or target.startswith("#"):
                continue
            checked += 1
            if is_external(target):
                external.append((path.relative_to(ROOT).as_posix(), target))
                continue
            if target.startswith("/"):
                candidate = ROOT / target.lstrip("/")
            else:
                candidate = (path.parent / target).resolve()
            try:
                candidate.relative_to(ROOT.resolve())
            except ValueError:
                local_missing.append(f"{path.relative_to(ROOT)}: link escapes repo: {raw}")
                continue
            if target and not candidate.exists():
                local_missing.append(f"{path.relative_to(ROOT)}: missing local link: {raw}")
    return checked, external, local_missing


def probe(url: str) -> tuple[str, bool, str]:
    last = "not checked"
    # A few official archives intermittently reject short HEAD probes or slow
    # requests. Retry politely before treating an official URL as broken.
    for attempt in range(3):
        for method, timeout in [("HEAD", 12), ("GET", 20)]:
            try:
                req = urllib.request.Request(url, method=method, headers=PROBE_HEADERS)
                with urllib.request.urlopen(req, timeout=timeout) as resp:
                    if resp.status < 400:
                        return url, True, str(resp.status)
                    last = str(resp.status)
            except Exception as exc:
                last = type(exc).__name__
        if attempt < 2:
            time.sleep(1 + attempt)
    return url, False, last


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--soft", action="store_true", help="skip live network probes but still fail on local Markdown/artifact URL problems")
    parser.add_argument("--strict", action="store_true", help="probe external URLs and fail on broken verified links")
    parser.add_argument("--live", action="store_true", help="probe external URLs with HEAD/GET requests")
    parser.add_argument("--limit", type=int, default=0, help="optional maximum live URLs to probe; 0 means all")
    parser.add_argument("--workers", type=int, default=12, help="parallel workers for --live")
    args = parser.parse_args()

    paper_entries = entries()
    artifact_urls, bad_artifacts = collect_artifact_urls(paper_entries)
    md_checked, md_external, local_missing = collect_markdown_links()
    failures = bad_artifacts + local_missing

    all_external = []
    seen = set()
    for _, _, url in artifact_urls:
        if url not in seen:
            all_external.append(url); seen.add(url)
    for _, url in md_external:
        if url not in seen:
            all_external.append(url); seen.add(url)

    offline_failures = list(failures)
    live_failures = []
    live_checked = 0
    if args.strict:
        args.live = True

    if args.live:
        targets = all_external[: args.limit or None]
        with ThreadPoolExecutor(max_workers=max(1, args.workers)) as ex:
            futures = [ex.submit(probe, url) for url in targets]
            for fut in as_completed(futures):
                live_checked += 1
                url, ok, info = fut.result()
                if not ok:
                    live_failures.append(f"{url}: {info}")
        failures.extend(sorted(live_failures))

    lines = [
        "# Link Check",
        "",
        "Link validation for local files, artifact URL formats, and optional live external probes.",
        "",
        f"- artifact URLs discovered: {len(artifact_urls)}",
        f"- markdown links checked: {md_checked}",
        f"- external markdown links discovered: {len(md_external)}",
        f"- unique external URLs discovered: {len(all_external)}",
        f"- live URLs checked: {live_checked}",
        f"- failures: {len(failures)}",
        "",
    ]
    if failures:
        lines.append("## Failures")
        lines.extend(f"- {msg}" for msg in failures[:300])
        if len(failures) > 300:
            lines.append(f"- ... {len(failures) - 300} more")
        lines.append("")
    lines.append("## Artifact URLs")
    lines.extend(f"- `{where}` {key}: {url}" for where, key, url in artifact_urls[:250])
    if len(artifact_urls) > 250:
        lines.append(f"- ... {len(artifact_urls) - 250} more")
    if args.soft:
        lines.append("\nNetwork probing skipped because `--soft` was used.")
    (ROOT / "reports/link_check.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    from common import write_json
    write_json(ROOT / "reports/link_check.json", {
        "artifact_urls": len(artifact_urls),
        "markdown_links_checked": md_checked,
        "external_markdown_links": len(md_external),
        "unique_external_urls": len(all_external),
        "live_urls_checked": live_checked,
        "failures": failures,
        "bad_artifacts": bad_artifacts,
        "local_missing": local_missing,
        "live_failures": live_failures,
        "mode": "strict" if args.strict else "live" if args.live else "soft" if args.soft else "offline",
    })
    print(f"artifact_urls: {len(artifact_urls)} markdown_links: {md_checked} external_urls: {len(all_external)} live_checked: {live_checked} failures: {len(failures)}")
    if offline_failures:
        return 1
    if args.live and live_failures:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
