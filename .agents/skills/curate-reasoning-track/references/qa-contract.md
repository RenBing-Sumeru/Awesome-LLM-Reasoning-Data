# QA contract

## Contents

1. Source validation
2. Generated-output workflow
3. Standard preflight
4. Final review

## Source validation

Before rendering:

- search for duplicate titles, IDs, and arXiv identifiers;
- validate required fields and enums;
- verify card `entry_id` bindings;
- inspect the diff for guessed links, placeholders, and over-promoted levels.

## Generated-output workflow

After modifying source data or cards, run the relevant repository generation commands from `docs/contributor_sop_zh.md`. Do not make generated-only edits to force a passing check.

Typical generation sequence:

```bash
python scripts/add_card_ask_links.py
python scripts/render_cards.py
python scripts/render_papers.py
python scripts/render_readme.py
python scripts/render_site.py
python scripts/coverage_report.py
```

Run the Ask Atlas corpus generator when the changed content affects its RAG inputs and the repository SOP requires it.

## Standard preflight

Run:

```bash
python .agents/skills/curate-reasoning-track/scripts/run_preflight.py --profile standard
```

The helper runs the core schema, renderer, RAG, secret, and diff checks. If a required executable is unavailable, report the skipped command and do not claim full readiness.

## Final review

Spawn `atlas_reviewer` only after the main agent has inspected the diff. Treat its findings as an independent gate. Resolve blockers, rerun affected checks, and report:

- ready or not ready;
- checks passed, failed, or skipped;
- remaining unknowns;
- entries and cards added or changed;
- generated files refreshed;
- suggested PR title and summary.
