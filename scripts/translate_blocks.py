#!/usr/bin/env python3
"""Translate the curated-block values that the hand-written table does not cover.

The data object, construction recipe, audit ledger, and verification record are written
once per paper, so most of their values are sentences that appear in exactly one card.
`scripts/data/zh_values.yaml` covers the verdicts and stock pointers that recur, which is
a fifth of the rows; the rest is roughly 23,000 distinct sentences. That is a machine
translation job, and this script is the three steps around it.

    python scripts/translate_blocks.py --extract          # what still needs translating
    python scripts/translate_blocks.py --translate        # call the API, append results
    python scripts/translate_blocks.py --check            # verify before trusting it

Translations land in `scripts/data/zh_block_values.json`, keyed by the exact source
string. They are never written back into `paper.yaml`: the English stays canonical and
traceable to the paper, the Chinese is a separate layer that can be reviewed, corrected,
regenerated, or thrown away without touching the library. Because the key is the source
string, a sentence shared by several cards is translated once.

Configure the endpoint with environment variables. Any OpenAI-compatible chat endpoint
works, and nothing is installed: the request goes out over urllib.

    TRANSLATE_API_KEY=...                 # required
    TRANSLATE_BASE_URL=...                # default https://api.openai.com/v1
    TRANSLATE_MODEL=...                   # default gpt-4o-mini

`--translate` is resumable and safe to interrupt: it skips whatever the memory already
holds and flushes after every batch, so a stop costs at most one batch.
"""
from __future__ import annotations

import argparse
import collections
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from atlas import config, labels as L  # noqa: E402
from atlas.cards import value_translations  # noqa: E402

BLOCKS = ("data_object", "recipe_metadata", "audit", "verification")
MEMORY = Path(__file__).resolve().parent / "data" / "zh_block_values.json"
QUEUE = config.REPORTS / "translate_queue.json"

# Values that carry no prose to translate. Dates, links, and bare numbers read the same in
# either language, and a single token is either an enum the hand table owns or the literal
# name of a field in the released data, which must survive unchanged.
SKIP = (
    re.compile(r"^\d{4}-\d{2}-\d{2}"),
    re.compile(r"^https?://\S+$"),
    re.compile(r"^[\d\s.,%/+×~<>≈-]+$"),
    re.compile(r"^[A-Za-z0-9][A-Za-z0-9._\-]*$"),
)

SYSTEM_PROMPT = """You translate structured research metadata from English into Chinese.

These strings describe reasoning-data papers: what a record contains, how a dataset was
built, and what an audit could not establish. A reader compares your translation against
the primary paper, so accuracy outranks fluency.

Rules:
- Translate into concise technical Chinese. No added commentary, no softening, no filler.
- Never add or drop a fact. Keep every number, unit, percentage, and date exactly as given.
- Keep dataset, model, benchmark, metric, and organisation names in their original form.
- Keep identifiers, field names, file names, flags, and anything in backticks unchanged.
- Keep the original sentence count and any list or bullet structure.
- If a string is already Chinese, or is only a name or identifier, return it unchanged.

Reply with a JSON array of translated strings, same length and order as the input array,
and nothing else."""


def load_memory() -> dict:
    if not MEMORY.exists():
        return {}
    try:
        return json.loads(MEMORY.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        sys.exit(f"{MEMORY} does not parse: {error}")


def save_memory(memory: dict) -> None:
    MEMORY.parent.mkdir(parents=True, exist_ok=True)
    # One entry per line and sorted, so a review reads as a diff rather than a blob.
    body = ",\n".join(
        f"  {json.dumps(key, ensure_ascii=False)}: {json.dumps(value, ensure_ascii=False)}"
        for key, value in sorted(memory.items())
    )
    MEMORY.write_text("{\n" + body + "\n}\n", encoding="utf-8")


def corpus() -> collections.Counter:
    """Every value in a published card's curated blocks, with how often it appears."""
    seen = collections.Counter()
    for directory in sorted(config.CARDS.iterdir()):
        if not directory.is_dir() or not (directory / "paper.yaml").exists():
            continue
        if not config.is_published(directory):
            continue
        paper = config.read_yaml(directory / "paper.yaml")
        for block in BLOCKS:
            obj = paper.get(block)
            if not isinstance(obj, dict):
                continue
            for value in obj.values():
                for item in (value if isinstance(value, list) else [value]):
                    if isinstance(item, bool) or item in (None, ""):
                        continue
                    text = str(item).strip()
                    if text:
                        seen[text] += 1
    return seen


def needs_translation(text: str) -> bool:
    if any(pattern.match(text) for pattern in SKIP):
        return False
    if re.search(r"[\u4e00-\u9fff]", text):
        return False
    return bool(re.search(r"[A-Za-z]", text))


def pending(memory: dict) -> list:
    """Untranslated values, most frequent first, so a partial run buys the most coverage."""
    hand = value_translations()
    out = []
    for text, count in corpus().most_common():
        if text in hand or text.lower() in hand or text in memory:
            continue
        if needs_translation(text):
            out.append({"source": text, "occurrences": count})
    return out


# ---------------------------------------------------------------- extract

def extract() -> int:
    memory = load_memory()
    queue = pending(memory)
    total = corpus()
    covered = sum(count for text, count in total.items()
                  if not needs_translation(text) or text in memory
                  or text in value_translations() or text.lower() in value_translations())
    QUEUE.parent.mkdir(parents=True, exist_ok=True)
    QUEUE.write_text(json.dumps(queue, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    occurrences = sum(count for count in total.values())
    print(f"values in published curated blocks: {occurrences} ({len(total)} distinct)")
    print(f"already covered:                    {covered} ({covered / occurrences * 100:.1f}%)")
    print(f"queued for translation:             {len(queue)} distinct, "
          f"{sum(item['occurrences'] for item in queue)} occurrences")
    print(f"characters to translate:            {sum(len(item['source']) for item in queue):,}")
    print(f"queue: {QUEUE.relative_to(config.ROOT)}")
    return 0


# ---------------------------------------------------------------- translate

def call_api(batch: list, base: str, key: str, model: str, timeout: int) -> list:
    payload = {
        "model": model,
        "temperature": 0,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": json.dumps(batch, ensure_ascii=False)},
        ],
    }
    request = urllib.request.Request(
        f"{base.rstrip('/')}/chat/completions",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {key}"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        body = json.loads(response.read())
    content = body["choices"][0]["message"]["content"].strip()
    content = re.sub(r"^```(?:json)?\s*|\s*```$", "", content)
    result = json.loads(content)
    if not isinstance(result, list) or len(result) != len(batch):
        raise ValueError(f"expected {len(batch)} translations, got {type(result).__name__} "
                         f"of length {len(result) if isinstance(result, list) else '?'}")
    return [str(item) for item in result]


def translate(batch_size: int, limit: int, timeout: int, retries: int) -> int:
    key = os.environ.get("TRANSLATE_API_KEY")
    if not key:
        sys.exit("TRANSLATE_API_KEY is not set. See the module docstring for the three variables.")
    base = os.environ.get("TRANSLATE_BASE_URL", "https://api.openai.com/v1")
    model = os.environ.get("TRANSLATE_MODEL", "gpt-4o-mini")

    memory = load_memory()
    queue = [item["source"] for item in pending(memory)]
    if limit:
        queue = queue[:limit]
    if not queue:
        print("nothing pending — the memory already covers every value.")
        return 0

    print(f"translating {len(queue)} values via {model} at {base}")
    done = failed = 0
    for start in range(0, len(queue), batch_size):
        batch = queue[start:start + batch_size]
        for attempt in range(1, retries + 1):
            try:
                for source, target in zip(batch, call_api(batch, base, key, model, timeout)):
                    memory[source] = target
                done += len(batch)
                break
            except (urllib.error.URLError, ValueError, KeyError, json.JSONDecodeError) as error:
                if attempt == retries:
                    failed += len(batch)
                    print(f"  batch at {start} failed after {retries} attempts: {error}")
                else:
                    time.sleep(2 * attempt)
        save_memory(memory)
        print(f"  {min(start + batch_size, len(queue))}/{len(queue)}", end="\r", flush=True)

    print(f"\ntranslated {done}, failed {failed}, memory now holds {len(memory)}")
    print(f"memory: {MEMORY.relative_to(config.ROOT)}")
    print("next: python scripts/translate_blocks.py --check")
    return 1 if failed else 0


# ---------------------------------------------------------------- check

NUMBER = re.compile(r"\d+(?:[.,]\d+)*")
CODE = re.compile(r"`([^`]+)`")

# A figure the translation dropped is the failure worth blocking on. A figure it gained is
# almost always correct Chinese: month names and spelled-out numbers become digits, so
# "August-November 2024" gains 8 and 11 and "Thirteen tasks" gains 13.
#
# A source number followed by a scale word is also exempt, because Chinese regroups by
# 万 and 亿 rather than by thousands: "10 billion" is properly written 100 亿, which changes
# the digits without changing the quantity.
SCALED = re.compile(r"(\d+(?:[.,]\d+)*)\s*(?:-|\s)?\s*(billion|million|trillion|thousand|bn|k|m|b)\b",
                    re.I)


def dropped_numbers(source: str, target: str) -> list:
    """Figures present in the source that no longer appear in the translation."""
    exempt = set(SCALED.findall(source) and [m[0] for m in SCALED.findall(source)])
    present = set(NUMBER.findall(target))
    return sorted(n for n in NUMBER.findall(source) if n not in present and n not in exempt)


def check() -> int:
    memory = load_memory()
    if not memory:
        print("no translation memory yet; run --translate first.")
        return 0

    total = corpus()
    problems = collections.Counter()
    examples = collections.defaultdict(list)

    def note(kind: str, source: str, target: str) -> None:
        problems[kind] += 1
        if len(examples[kind]) < 4:
            examples[kind].append(f"{source[:70]!r} -> {target[:70]!r}")

    for source, target in memory.items():
        if not str(target).strip():
            note("empty translation", source, target)
            continue
        # Only worth reporting when the model returned the source untouched and the source
        # was a sentence. A short value left alone is usually right: an identifier, a venue
        # string, or a name that should not be translated at all.
        if (target.strip() == source.strip() and len(source.split()) >= 4
                and not re.search(r"[\u4e00-\u9fff]", target)):
            note("returned unchanged", source, target)
        # These values get compared against the paper, so a figure the translation lost is
        # worse than no translation at all.
        missing = dropped_numbers(source, target)
        if missing:
            note(f"dropped the figure {', '.join(missing)}", source, target)
        if sorted(CODE.findall(source)) != sorted(CODE.findall(target)):
            note("backticked identifiers differ", source, target)
        if len(target) > max(120, len(source) * 2):
            note("suspiciously long result", source, target)

    orphans = [key for key in memory if key not in total]
    hand = value_translations()
    covered = sum(count for text, count in total.items()
                  if not needs_translation(text) or text in memory
                  or text in hand or text.lower() in hand)
    occurrences = sum(total.values())

    print(f"memory entries: {len(memory)}")
    print(f"coverage:       {covered}/{occurrences} values ({covered / occurrences * 100:.1f}%)")
    if orphans:
        print(f"stale entries:  {len(orphans)} no longer appear in any published card")
    if problems:
        print(f"\n{sum(problems.values())} problem(s):")
        for kind, count in problems.most_common():
            print(f"  {count:>5}  {kind}")
            for sample in examples[kind]:
                print(f"           {sample}")
    else:
        print("\nno problems found")
    # A lost figure, a mangled identifier, or an empty result blocks. Everything else is
    # review material: it needs a human eye, not a red build.
    blocking = (problems["backticked identifiers differ"] + problems["empty translation"]
                + sum(count for kind, count in problems.items() if kind.startswith("dropped the figure")))
    return 1 if blocking else 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--extract", action="store_true", help="report and queue what needs translating")
    mode.add_argument("--translate", action="store_true", help="translate the queue via the API")
    mode.add_argument("--check", action="store_true", help="verify the memory before trusting it")
    parser.add_argument("--batch-size", type=int, default=20, help="values per request (default 20)")
    parser.add_argument("--limit", type=int, default=0, help="stop after N values, for a trial run")
    parser.add_argument("--timeout", type=int, default=120, help="seconds per request (default 120)")
    parser.add_argument("--retries", type=int, default=3, help="attempts per batch (default 3)")
    args = parser.parse_args()

    if args.extract:
        return extract()
    if args.translate:
        return translate(args.batch_size, args.limit, args.timeout, args.retries)
    return check()


if __name__ == "__main__":
    raise SystemExit(main())
