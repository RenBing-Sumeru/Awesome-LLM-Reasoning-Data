# Awesome-LLM-Reasoning-Data — Agent SOP

This repository is data-driven. The canonical sources are `data/papers.yaml`,
`data/schema.json`, `data/categories.yaml`, `data/research_tracks.yaml`,
`data/starter_packs.yaml`, and source card files under `cards/`. Generated
outputs include `README.md`, `README_zh.md`, `papers/**/*.md`,
`docs/index.html`, `docs/ask.html`, `docs/ask/index.html`,
`docs/assets/*.json`, `docs/assets/atlas-data.js`, `cards/README.md`,
`exports/*`, and generated reports such as `reports/counts.md`,
`reports/link_coverage.*`, `reports/needs_search.md`, and
`reports/research_log_public.md`.

## Iron Rules

1. **Do not hand-edit generated outputs.** Make content changes in YAML, card
   sources, or renderer scripts, then regenerate.
2. **Do not guess links.** Only write URLs that were actually opened and
   verified. If a source cannot be verified, leave the field `null`, use
   `status: needs_search` when appropriate, and explain the missing evidence in
   `needs:`.
3. **Evidence gates status.** `status: verified` requires an official primary
   link plus `verification.link_verified: true`. New entries should usually be
   `L0_seeded` or `L1_link_verified`; `L4_carded` and `L5_audit_ready` require
   real card files and validation.
4. **Use the current paper atlas renderer.** `scripts/render_papers.py`
   generates the 3-section atlas under `papers/00_background_foundations/`,
   `papers/01_core_reasoning_data_types/`, and `papers/02_data_lifecycle/`.
   Do not restore or run the removed legacy `render_paper_pages.py`.
5. **Fix source, not output.** If a check fails, correct the YAML, card source,
   or renderer script that produced the stale output, then rerun the renderer.
6. **Git requires explicit task authorization.** Commit only when the current
   task asks for it or after a human approves the review packet. Push only to a
   branch explicitly named by the human or by the current task.

## Python Environment

Use `~/.venvs/atlas/bin/python`. If it does not exist:

```bash
python3 -m venv ~/.venvs/atlas
~/.venvs/atlas/bin/pip install -r requirements.txt
```

## Regenerate Derived Outputs

```bash
P=~/.venvs/atlas/bin/python
$P scripts/render_papers.py
$P scripts/render_readme.py
$P scripts/render_site.py
$P scripts/render_cards.py
$P scripts/export_csv_json.py
$P scripts/export_bibtex.py
$P scripts/summarize_counts.py
$P scripts/coverage_report.py
```

## Validation Gate

```bash
P=~/.venvs/atlas/bin/python
$P scripts/validate_data.py
$P scripts/secret_scan.py
$P scripts/render_site.py --check
$P scripts/render_papers.py --check
$P scripts/render_readme.py --check
$P scripts/render_cards.py --check
```

## Common Operation

- Add or curate papers with `/add-papers` (see `.claude/commands/add-papers.md`).
