# Build Report

## Summary

Redesign v2 converts the repository into a learning-first atlas for post-training reasoning data. The current submission folder now contains a richer README, bilingual overview, 11 long paper-category pages, 11 curriculum docs, 42 filled release/audit cards, structured YAML/JSON data, validation scripts, a static searchable site, and review reports.

This report supersedes the initial scaffold report. The repo is now on branch `redesign-learning-atlas-v2` and is intended to be committed and pushed as a review branch, not directly to `main`.

## Phase Read Confirmations

The redesign spec was reread before each major phase and logged in `reports/phase_log.md`.

## Repository Artifacts Updated

- `README.md` and `README_zh.md`: homepage redesigned as a visible learning atlas with emoji-based navigation, starter pack, category map, paper map, card index, and current counts.
- `data/papers.yaml`: 269 structured entries with separate `status` and `audit.citation_status` fields.
- `papers/`: 11 category pages generated from structured metadata, with needs-search entries separated from starter entries.
- `cards/`: 42 filled cards across releases, verifiers, agents, recipes, benchmarks, and failure lenses.
- `docs/`: 11 substantial learning pages plus static site assets.
- `reports/`: coverage, counts, needs-search, citation audit, link-source, phase, and self-review reports.
- `scripts/`: validation, site rendering, paper-page rendering, count summaries, and soft/live link checking.

## Current Data Counts

- Total entries: 269.
- Status distribution: 0 `verified`, 114 `partial`, 155 `needs_metadata`.
- Entries with at least one artifact link: 108.
- Filled cards: 42.
- Source-role leaders: survey_background=222, benchmark=16, construction_recipe=16, data_release=14, verifier_reward=10, agent_environment=10, scaling_study=10, model_report=8.
- Verification contracts: unknown=222, programmatic=21, mixed=21, environmental=12, judgment_required=10.
- Training-use leaders: unknown=222, evaluation=31, rlvr=19, sft=15, agent_training=12, distillation=10, reward_modeling=9, test_time_compute=7.

## Link and Citation Policy

Live/soft link checks are handled by `scripts/check_links.py`. Critical newly promoted links were checked from primary sources and recorded in `reports/link_sources_v2.md`. Metadata verification is intentionally stricter than URL verification: many entries have `audit.citation_status: verified` while remaining `status: partial` because source mixture, split, license, verifier internals, or lineage still require curator review.

## Validation Commands

The final validation pass should run:

```bash
python3 scripts/validate_data.py
python3 scripts/render_site_data.py
python3 scripts/render_readme.py --check
python3 scripts/check_links.py --soft
python3 scripts/check_links.py --live --workers 16
python3 scripts/summarize_counts.py
node --check docs/assets/site.js
```

## Remaining Manual Work

- Continue promoting `needs_metadata` BibTeX seeds only after official links and release metadata are checked.
- Add author metadata when citation policy for any companion paper is finalized.
- Decide whether GitHub Pages should serve `docs/index.html` directly or through a separate Pages branch.
