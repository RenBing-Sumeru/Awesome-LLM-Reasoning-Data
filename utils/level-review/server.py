#!/usr/bin/env python3
from __future__ import annotations

import argparse
import difflib
import json
import re
import subprocess
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

try:
    import yaml
except Exception:  # pragma: no cover - validate_data.py already requires pyyaml.
    yaml = None


ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
PRIMARY_LINK_KEYS = ["paper", "arxiv", "venue", "openreview", "acl", "pmlr", "cvf", "doi"]
ARTIFACT_KEYS = ["code", "data", "huggingface", "project"]
CURATION_LEVEL_ORDER = {
    "L0_seeded": 0,
    "L1_link_verified": 1,
    "L2_artifact_verified": 2,
    "L3_summary_ready": 3,
    "L4_carded": 4,
    "L5_audit_ready": 5,
}
TRACK_LABELS = {
    "environment_agent_trajectory_data": "06",
    "benchmarks_evaluation_surfaces": "11",
}
CARD_REQUIRED_ANY = [
    ["## TL;DR", "## One-line takeaway"],
    ["## 1. What is this work?", "## Why this matters"],
    ["## 2. What data object does it expose?", "## What is the data object?"],
    ["## 3. What is the verifier / reward / judge / environment?", "## Verification contract"],
    ["## 4. How is the data constructed?", "## Construction recipe"],
    ["## 5. How can it enter post-training?", "## How it can be used"],
    ["## 6. What should readers audit?", "## Audit checklist"],
    ["## 7. What is missing or risky?", "## Known limitations / failure modes"],
    ["## 9. Links and citation", "## Links"],
]
CARD_PLACEHOLDER_MARKERS = [
    "needs curator review",
    "Official paper link is pinned",
    "curator should next add",
    "Local BibTeX seed",
    "Prompt/source: unknown",
    "Trace/action author: unknown",
    "Answer/artifact format: unknown",
    "Recorded verifier/reward/environment: unknown",
    "Known failure modes: unknown",
]
SUMMARY_PLACEHOLDER_MARKERS = [
    "Local BibTeX seed",
    "needs curator review",
    "Official paper link is pinned",
    "curator should next add",
    "Needs curator summary",
    "Needs curator rationale",
]


def load_yaml(path: Path):
    if not path.exists():
        return []
    text = path.read_text(encoding="utf-8")
    if not text.strip():
        return []
    if yaml is None:
        return json.loads(text)
    return yaml.safe_load(text) or []


def dump_yaml(value) -> str:
    if yaml is None:
        return json.dumps(value, indent=2, ensure_ascii=False)
    return yaml.safe_dump(value, allow_unicode=True, sort_keys=False).strip()


def as_list(value) -> list:
    if isinstance(value, list):
        return [item for item in value if item not in (None, "")]
    return [value] if value not in (None, "") else []


def rel(path: Path, root: Path) -> str:
    return path.relative_to(root).as_posix()


def run_git(root: Path, args: list[str]) -> str:
    try:
        result = subprocess.run(
            ["git", *args],
            cwd=root,
            check=False,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
    except FileNotFoundError:
        return ""
    return result.stdout if result.returncode == 0 else ""


def git_file(root: Path, ref: str, path: str) -> str:
    return run_git(root, ["show", f"{ref}:{path}"])


def git_changed_paths(root: Path, base_ref: str | None) -> set[str]:
    if not base_ref:
        return set()
    paths = set(run_git(root, ["diff", "--name-only", f"{base_ref}...HEAD"]).splitlines())
    status = run_git(root, ["status", "--porcelain"])
    for line in status.splitlines():
        if not line:
            continue
        path = line[3:].strip()
        if " -> " in path:
            path = path.split(" -> ", 1)[1]
        if path:
            paths.add(path)
    return paths


def file_diff(root: Path, path: str, base_ref: str | None) -> str:
    current = root / path
    if not base_ref:
        return ""
    diff = run_git(root, ["diff", base_ref, "--", path])
    if diff.strip():
        return diff
    status = run_git(root, ["status", "--porcelain", "--", path])
    if status.startswith("??") and current.exists():
        body = current.read_text(encoding="utf-8", errors="replace")
        added = "".join(f"+{line}" for line in body.splitlines(keepends=True))
        return f"diff --git a/{path} b/{path}\nnew file mode 100644\n--- /dev/null\n+++ b/{path}\n@@\n{added}"
    return ""


def extract_entry_blocks(text: str) -> dict[str, str]:
    blocks: dict[str, str] = {}
    current: list[str] = []
    current_id: str | None = None

    def flush() -> None:
        if current_id and current:
            blocks[current_id] = "".join(current).strip()

    for line in text.splitlines(keepends=True):
        if line.startswith("- "):
            flush()
            current = [line]
            match = re.match(r"-\s+id:\s*['\"]?([^'\"\s#]+)", line)
            current_id = match.group(1) if match else None
        elif current:
            current.append(line)
    flush()
    return blocks


def load_entries_with_yaml(root: Path) -> tuple[list[dict], dict[str, str]]:
    path = root / "data/papers.yaml"
    text = path.read_text(encoding="utf-8") if path.exists() else ""
    entries = load_yaml(path)
    blocks = extract_entry_blocks(text)
    by_id = {}
    for entry in entries if isinstance(entries, list) else []:
        entry_id = entry.get("id")
        if entry_id and entry_id not in blocks:
            by_id[entry_id] = "- " + dump_yaml(entry).replace("\n", "\n  ")
    blocks.update(by_id)
    return entries if isinstance(entries, list) else [], blocks


def entry_id_from_card(text: str) -> str | None:
    match = re.search(r"<!--\s*entry_id:\s*([^\s]+)\s*-->", text)
    return match.group(1) if match else None


def card_inventory(root: Path) -> dict[str, dict[str, str]]:
    cards: dict[str, dict[str, str]] = {}
    cards_root = root / "cards"
    if not cards_root.exists():
        return cards
    for path in sorted(cards_root.glob("**/*.md")):
        path_rel = rel(path, root)
        if "template" in path.name or path_rel.startswith("cards/examples/") or path_rel == "cards/README.md":
            continue
        text = path.read_text(encoding="utf-8", errors="replace")
        entry_id = entry_id_from_card(text)
        if entry_id:
            cards[entry_id] = {"path": path_rel, "markdown": text}
    return cards


def card_inventory_from_tree(root: Path, base_ref: str | None) -> dict[str, dict[str, str]]:
    cards: dict[str, dict[str, str]] = {}
    if not base_ref:
        return cards
    files = run_git(root, ["ls-tree", "-r", "--name-only", base_ref, "cards"]).splitlines()
    for path in files:
        if not path.endswith(".md"):
            continue
        name = Path(path).name
        if "template" in name or path.startswith("cards/examples/") or path == "cards/README.md":
            continue
        text = git_file(root, base_ref, path)
        entry_id = entry_id_from_card(text)
        if entry_id:
            cards[entry_id] = {"path": path, "markdown": text}
    return cards


def base_entries(root: Path, base_ref: str | None) -> dict[str, dict]:
    if not base_ref:
        return {}
    text = git_file(root, base_ref, "data/papers.yaml")
    if not text.strip() or yaml is None:
        return {}
    payload = yaml.safe_load(text) or []
    return {entry.get("id"): entry for entry in payload if isinstance(entry, dict) and entry.get("id")}


def base_entry_blocks(root: Path, base_ref: str | None) -> dict[str, str]:
    if not base_ref:
        return {}
    return extract_entry_blocks(git_file(root, base_ref, "data/papers.yaml"))


def changed_entry_ids(root: Path, entries: list[dict], cards: dict[str, dict[str, str]], base_ref: str | None) -> set[str]:
    if not base_ref:
        return {entry.get("id") for entry in entries if entry.get("id")}
    ids: set[str] = set()
    current_by_id = {entry.get("id"): entry for entry in entries if entry.get("id")}
    base_by_id = base_entries(root, base_ref)
    for entry_id, entry in current_by_id.items():
        base_entry = base_by_id.get(entry_id)
        current_level = entry.get("curation_level")
        base_level = (base_entry or {}).get("curation_level")
        is_level_review_item = current_level in {"L4_carded", "L5_audit_ready"} or base_level in {"L4_carded", "L5_audit_ready"}
        if base_entry is None and is_level_review_item:
            ids.add(entry_id)
        elif base_entry and current_level != base_level:
            ids.add(entry_id)
        elif is_level_review_item and base_entry != entry:
            ids.add(entry_id)

    for path in git_changed_paths(root, base_ref):
        if not path.startswith("cards/") or not path.endswith(".md"):
            continue
        current_path = root / path
        current_text = current_path.read_text(encoding="utf-8", errors="replace") if current_path.exists() else ""
        base_text = git_file(root, base_ref, path)
        for text in [current_text, base_text]:
            entry_id = entry_id_from_card(text)
            if entry_id:
                ids.add(entry_id)

    for entry_id in cards:
        if entry_id not in base_by_id and entry_id in current_by_id:
            ids.add(entry_id)
    return ids


def unified_text_diff(base_text: str, current_text: str, fromfile: str, tofile: str) -> str:
    if base_text == current_text:
        return ""
    return "".join(
        difflib.unified_diff(
            base_text.splitlines(keepends=True),
            current_text.splitlines(keepends=True),
            fromfile=fromfile,
            tofile=tofile,
        )
    )


def has_placeholder(value: str, markers: list[str]) -> bool:
    text = str(value or "").lower()
    return any(marker.lower() in text for marker in markers)


def primary_link(entry: dict) -> str | None:
    artifacts = entry.get("artifacts") or {}
    for key in PRIMARY_LINK_KEYS:
        if artifacts.get(key):
            return artifacts[key]
    return None


def card_section_blockers(markdown: str | None) -> list[str]:
    if not markdown:
        return ["card is missing"]
    blockers = []
    for alternatives in CARD_REQUIRED_ANY:
        if not any(heading in markdown for heading in alternatives):
            blockers.append(f"card missing section: {alternatives[0]}")
    return blockers


def l4_blockers(entry: dict, card: dict[str, str] | None) -> list[str]:
    blockers = []
    if not card:
        blockers.append("card is missing")
    else:
        blockers.extend(card_section_blockers(card.get("markdown")))

    summary_bits = " ".join(
        str(entry.get(key) or "")
        for key in ["one_line", "one_line_summary", "why_it_matters", "inclusion_reason"]
    )
    if has_placeholder(summary_bits, SUMMARY_PLACEHOLDER_MARKERS):
        blockers.append("entry summary contains placeholder text")
    return blockers


def known(value) -> bool:
    if value in (None, "", [], {}):
        return False
    return str(value).strip().lower() not in {"unknown", "metadata pending", "needs curator review", "pending"}


def l5_blockers(entry: dict, card: dict[str, str] | None) -> list[str]:
    blockers = l4_blockers(entry, card)
    if entry.get("status") != "verified":
        blockers.append("status is not verified")
    if not primary_link(entry):
        blockers.append("official primary link is missing")
    if (entry.get("verification") or {}).get("link_verified") is not True:
        blockers.append("verification.link_verified is not true")
    markdown = card.get("markdown") if card else ""
    for marker in CARD_PLACEHOLDER_MARKERS:
        if marker.lower() in markdown.lower():
            blockers.append(f"card contains placeholder marker: {marker}")
    return blockers


def audit_advisories(entry: dict) -> list[str]:
    advisories = []
    audit = entry.get("audit") or {}
    artifacts = entry.get("artifacts") or {}
    for key in ["license", "split", "decontamination", "lineage"]:
        if not known(audit.get(key)):
            advisories.append(f"audit.{key} is missing or unknown")
    if not known(audit.get("environment_version")):
        advisories.append("audit.environment_version is missing or unknown")
    if not (known(audit.get("availability")) or any(known(artifacts.get(key)) for key in ARTIFACT_KEYS)):
        advisories.append("code/data availability is missing or unknown")
    return advisories


def track_labels(entry: dict) -> list[str]:
    labels = []
    for category in as_list(entry.get("category")):
        if category in TRACK_LABELS:
            labels.append(TRACK_LABELS[category])
    return labels


def review_status(level: str, l4: list[str], l5: list[str], advisories: list[str]) -> str:
    if level == "L5_audit_ready":
        if l5:
            return "BLOCKED"
        return "WARN" if advisories else "OK"
    if level == "L4_carded":
        if l4:
            return "BLOCKED"
        return "WARN" if l5 or advisories else "OK"
    if CURATION_LEVEL_ORDER.get(level, 0) < 4:
        return "WARN"
    return "WARN"


def codex_task(entry: dict, l5_missing: list[str], advisories: list[str]) -> str:
    hard_missing = "\n".join(f"- {item}" for item in l5_missing) or "- No hard blockers detected"
    advisory_missing = "\n".join(f"- {item}" for item in advisories) or "- No audit advisories detected"
    entry_id = entry.get("id", "<missing-id>")
    if l5_missing:
        action = "先修复硬阻塞，再复核是否可以登记 L5。"
    else:
        action = "只登记 L5：硬门槛已通过，可把 curation_level 设置为 L5_audit_ready；人工审计建议只作为复核提醒。"
    return f"""Please prepare entry `{entry_id}` for L5_audit_ready review.

Upgrade action:
{action}

Only modify:
- data/papers.yaml entry `{entry_id}`
- the corresponding cards/**/*.md file
- generated files required by the project render scripts

Hard blockers:
{hard_missing}

Audit advisories to review:
{advisory_missing}

After editing, run:
python3 scripts/validate_data.py
python3 scripts/render_cards.py --check
python3 scripts/render_papers.py --check
python3 scripts/render_readme.py --check
python3 scripts/render_site.py --check
git diff --check
"""


def build_item(
    root: Path,
    entry: dict,
    entry_yaml: str,
    base_entry_yaml: str,
    card: dict[str, str] | None,
    base_card: dict[str, str] | None,
    base_ref: str | None,
) -> dict:
    level = entry.get("curation_level") or "L0_seeded"
    card_path = (card or base_card or {}).get("path")
    l4_missing = l4_blockers(entry, card)
    l5_missing = l5_blockers(entry, card)
    advisories = audit_advisories(entry)
    yaml_diff = unified_text_diff(
        base_entry_yaml,
        entry_yaml,
        f"{base_ref or 'base'}:data/papers.yaml#{entry.get('id')}",
        f"worktree:data/papers.yaml#{entry.get('id')}",
    )
    card_diff_parts = []
    for path in sorted({item.get("path") for item in [card, base_card] if item and item.get("path")}):
        diff = file_diff(root, path, base_ref)
        if diff.strip():
            card_diff_parts.append(diff)
    card_diff = "\n".join(card_diff_parts)
    return {
        "id": entry.get("id"),
        "title": entry.get("title"),
        "year": entry.get("year"),
        "venue": entry.get("venue"),
        "status": entry.get("status"),
        "curation_level": level,
        "categories": as_list(entry.get("category")),
        "tracks": track_labels(entry),
        "review_status": review_status(level, l4_missing, l5_missing, advisories),
        "l4_gate": {"ready": not l4_missing, "blocking": l4_missing},
        "l5_path": {"ready": not l5_missing, "blocking": l5_missing},
        "audit_advisories": advisories,
        "primary_link": primary_link(entry),
        "card_path": card_path,
        "has_card": bool(card),
        "full_entry_yaml": entry_yaml,
        "card_markdown": card.get("markdown") if card else "",
        "yaml_diff": yaml_diff,
        "card_diff": card_diff,
        "codex_task": codex_task(entry, l5_missing, advisories),
    }


def build_review_payload(root: Path = ROOT, base_ref: str | None = "main", changed_only: bool = True) -> dict:
    root = Path(root)
    entries, blocks = load_entries_with_yaml(root)
    base_blocks = base_entry_blocks(root, base_ref)
    cards = card_inventory(root)
    base_cards = card_inventory_from_tree(root, base_ref)
    changed_ids = changed_entry_ids(root, entries, cards, base_ref)
    items = []
    for entry in entries:
        entry_id = entry.get("id")
        if not entry_id:
            continue
        if changed_only and entry_id not in changed_ids:
            continue
        item = build_item(
            root,
            entry,
            blocks.get(entry_id, dump_yaml(entry)),
            base_blocks.get(entry_id, ""),
            cards.get(entry_id),
            base_cards.get(entry_id),
            base_ref,
        )
        items.append(item)

    def sort_key(item: dict) -> tuple[int, str]:
        is_new_card = 0 if item.get("card_path") and item["id"] in changed_ids else 1
        status_weight = {"BLOCKED": 0, "WARN": 1, "OK": 2}.get(item.get("review_status"), 3)
        return (is_new_card, status_weight, str(item.get("title") or ""))

    items.sort(key=sort_key)
    status_counts: dict[str, int] = {}
    for item in items:
        status_counts[item["review_status"]] = status_counts.get(item["review_status"], 0) + 1
    return {
        "base_ref": base_ref,
        "branch": run_git(root, ["branch", "--show-current"]).strip(),
        "changed_only": changed_only,
        "total_items": len(items),
        "status_counts": status_counts,
        "items": items,
    }


class ReviewHandler(BaseHTTPRequestHandler):
    root = ROOT
    base_ref = "main"

    def log_message(self, fmt, *args):  # noqa: N802
        return

    def send_json(self, payload: dict, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def send_file(self, path: Path, content_type: str) -> None:
        body = path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):  # noqa: N802
        parsed = urlparse(self.path)
        if parsed.path == "/api/review":
            query = parse_qs(parsed.query)
            changed_only = query.get("changed_only", ["1"])[0] != "0"
            try:
                payload = build_review_payload(self.root, self.base_ref, changed_only)
            except Exception as exc:  # pragma: no cover - surfaced in browser.
                self.send_json({"error": str(exc)}, 500)
                return
            self.send_json(payload)
            return
        if parsed.path in {"/", "/index.html"}:
            self.send_file(HERE / "index.html", "text/html; charset=utf-8")
            return
        if parsed.path == "/app.js":
            self.send_file(HERE / "app.js", "application/javascript; charset=utf-8")
            return
        if parsed.path == "/styles.css":
            self.send_file(HERE / "styles.css", "text/css; charset=utf-8")
            return
        self.send_error(404)


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the read-only L4/L5 level review workbench.")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8766)
    parser.add_argument("--base", default="main")
    args = parser.parse_args()
    ReviewHandler.base_ref = args.base
    server = ThreadingHTTPServer((args.host, args.port), ReviewHandler)
    print(f"Level review: http://{args.host}:{args.port}")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
