# Contributing

This repository is a link-verified, learning-first atlas for post-training reasoning data. A good contribution makes the atlas more useful and auditable, not merely longer.

## What Counts as a Good Entry?

Do not submit only a paper title or a bare link. A useful entry explains what the work contributes to reasoning-data practice:

- Is it a data release, benchmark, verifier/reward model, process-supervision dataset, agent environment, construction recipe, model report, scaling study, audit/failure analysis, or survey/background work?
- What data object is exposed: prompt-answer record, reasoning trace, process label, preference pair, scalar reward, verifier record, tool-use trajectory, environment episode, benchmark task, or model-report data?
- What feedback contract is used: programmatic, environmental, judgment-required, mixed, or unknown?
- How could it enter post-training: SFT, distillation, preference learning, reward modeling, process supervision, RLVR, agent training, evaluation, safety alignment, test-time compute, or audit?

## Official Link Priority

Prefer official sources in this order:

1. Venue page: ACL Anthology, OpenReview, PMLR, NeurIPS proceedings, CVF, ACM, IEEE, Springer, Nature/Science, or official conference page.
2. arXiv abs page, not a raw PDF link when the abs page exists.
3. DOI page.
4. Official project page from authors or organization.
5. Official code repository from authors or organization.
6. Official dataset/model page, including Hugging Face when it is the release source.
7. Secondary sources only when no primary paper exists; label them clearly.

Never guess arXiv IDs, GitHub repositories, DOI links, or Hugging Face pages. If unsure, set the missing field to `null` and mark the entry as `needs_search`.

## Required Metadata

For `data/papers.yaml`, include:

- `id`, `title`, `year`, `venue`, `authors`
- `source_role`
- `verification_contract`
- `supervision_granularity`
- `domains`
- `training_use`
- `construction_layer`
- `artifacts` with official links or `null`
- `data_object`
- `recipe_metadata`
- `audit`
- `one_line_summary`
- `why_it_matters`
- `tags`
- `status`
- `curation_level`

Use `unknown`, `needs_search`, or `ambiguous` when evidence is missing. Do not fill uncertain fields with plausible-sounding guesses.

## Writing Summaries

`one_line_summary` should be one factual sentence about what the work is.

Good:

> Introduces GSM8K, a grade-school math benchmark with natural-language solutions and final numeric answers.

`why_it_matters` should explain why the work matters for post-training reasoning data.

Good:

> GSM8K is an early anchor for answer-level math verification and verifier-based selection.

Avoid generic praise such as "important paper for LLMs" or "useful for reasoning."

## Adding a Card

Cards live under `cards/releases/`, `cards/verifiers/`, `cards/agents/`, `cards/recipes/`, `cards/failures/`, or `cards/benchmarks/`.

Each card should include:

- TL;DR
- What the work is
- Data object
- Verifier / reward / judge / environment
- Construction recipe
- Post-training use
- Audit questions
- Risks / limitations
- Official links and citation notes

If information is unknown, write `unknown` and explain what should be checked next.

## Marking `needs_search`

Use `needs_search` when an official paper, venue, arXiv, DOI, code, data, or project page is not yet pinned. Missing links should remain visible in `reports/needs_search.md`; do not hide them inside verified sections.

## Local Validation

Before opening a PR, run:

```bash
python scripts/validate_data.py
python scripts/render_site.py --check
python scripts/render_papers.py --check
python scripts/render_readme.py --check
python scripts/coverage_report.py
python scripts/check_links.py --soft
```

If you changed generated artifacts, run the corresponding renderer without `--check` first.
