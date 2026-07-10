---
name: curate-reasoning-track
description: "Orchestrate end-to-end expansion of an Awesome LLM Reasoning Data research track: understand the track, plan and verify candidate papers, draft evidence-backed metadata, create or improve Paper Cards, update source files safely, regenerate derived outputs, and perform pre-submission review. Use when asked to expand, curate, complete, audit, or run the workflow for one of the repository's 14 tracks or subfields."
---

# Curate a reasoning-data track

## Choose the mode

Infer the mode from the request. If the track is missing, ask for its ID or name.

- `analyze`: understand the track and gaps only; make no edits.
- `plan`: build and rank a candidate pool; make no source edits.
- `draft`: read approved papers and create staged metadata/card drafts; make no source edits.
- `apply`: run the full workflow and update repository source files.
- `review`: inspect the current branch and report readiness; make no edits unless asked to fix findings.

Default to `plan` when the user has not authorized repository changes. Do not commit, push, or open a pull request without explicit authorization.

## Load the repository contract

Before working, read:

- `AGENTS.md`;
- `docs/contributor_sop_zh.md`;
- `data/schema.json`;
- the assigned track blocks in `data/categories.yaml` and `data/research_tracks.yaml`.

Read [references/repo-contract.md](references/repo-contract.md). Load the remaining references only when their stage begins:

- metadata drafting: [references/metadata-contract.md](references/metadata-contract.md);
- card drafting: [references/card-contract.md](references/card-contract.md);
- candidate and draft artifacts: [references/output-schemas.md](references/output-schemas.md);
- final checks: [references/qa-contract.md](references/qa-contract.md).

## Establish a clean run

1. Confirm the repository root and required files.
2. Inspect the current branch, `git status`, and existing diff.
3. Preserve unrelated changes.
4. Run `scripts/init_run.py --track <category_id>` when durable staging artifacts are useful. Keep staging outside the repository by default.
5. Record the requested track, priority subfields, candidate target, entry target, card policy, concurrency, and mode.

## Stage 1: understand the track

Spawn `track_analyst` for the assigned track. Require repository-path evidence and a structured track brief.

The main agent reviews the result and fixes any confusion between:

- the track definition and its generated paper page;
- a core data-type track and a lifecycle tag;
- current coverage and recommended expansion.

Save the accepted brief as `track-brief.md` in the staging run when staging is enabled.

## Stage 2: plan candidate papers

Select 3-5 priority subfields unless the user names them. Spawn one `candidate_scout` per subfield in parallel, bounded by the requested concurrency.

Require official-source verification and duplicate checks against `data/papers.yaml`, cards, titles, IDs, and arXiv identifiers. Merge candidate results into a single table using [references/output-schemas.md](references/output-schemas.md).

Classify every row as `must_add`, `strong_candidate`, `background_only`, or `reject`. Keep rejected and unresolved leads out of `data/papers.yaml`.

In the default staged workflow, present the ranked shortlist and wait for approval before paper-level curation. Skip this gate only when the user explicitly requests `approval_mode=auto` and gives a clear entry target and inclusion policy.

## Stage 3: read papers and draft metadata

For each approved paper, spawn one `paper_curator`. Work in batches of 5-10 papers and do not exceed the configured concurrency.

Each curator must return both:

1. an evidence ledger;
2. a schema-compatible YAML draft.

The main agent validates drafts with `scripts/validate_drafts.py`, resolves duplicates, and checks unsupported enum or curation-level claims. Never accept a draft merely because it parses.

If the mode is `draft`, stop after producing the validated staging artifacts. If the mode is `apply`, the main agent merges accepted entries into `data/papers.yaml` sequentially.

## Stage 4: create or improve Paper Cards

Apply the requested card policy:

- `core-only`: cards for anchor works, reusable releases, verifiers, benchmarks, recipes, environments, frontier reports, or important failures;
- `all-accepted`: a card for every accepted entry when evidence is sufficient;
- `none`: metadata only.

Spawn one `card_writer` per selected paper. Provide the confirmed paper, accepted metadata, one same-type high-quality card, and [references/card-contract.md](references/card-contract.md).

The main agent checks the card draft against evidence and writes accepted cards sequentially. Generate Ask Atlas links with the repository script. Do not hand-write generated link blocks.

## Stage 5: regenerate and review

After source edits:

1. run the relevant renderers;
2. run `scripts/run_preflight.py --profile standard`;
3. inspect the complete diff for unrelated or suspicious changes;
4. spawn `atlas_reviewer` for an independent final pass;
5. fix blocking findings if the user requested implementation;
6. rerun affected checks;
7. report remaining unknowns and the exact readiness state.

Do not claim readiness when a required check did not run. Distinguish environment failures from content failures.

## Hard rules

- Never invent an official link or undisclosed metadata.
- Use `null` for unavailable links and `unknown` for undisclosed facts.
- Do not overstate `training_use`, verifier strength, release completeness, or reproducibility.
- Do not directly edit generated README, paper pages, site assets, reports, exports, or RAG corpus to make checks pass.
- Keep the main agent as the only writer to shared source files.
- Preserve failed checks, rejected candidates, and unresolved evidence honestly.
- Stop and ask when a scope decision would materially change which papers enter the atlas.
