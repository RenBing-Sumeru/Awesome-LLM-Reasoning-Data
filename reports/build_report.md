# Build Report

## Current Branch

- Working branch: `upgrade-high-citation-atlas-v1`
- Base branch observed before upgrade: `main`
- Repository: `RenBing-Sumeru/Awesome-LLM-Reasoning-Data`
- Upgrade date: 2026-06-15

## Starting Snapshot

- Total structured entries: 269
- Entries with an existing primary paper/arXiv/DOI link: 113
- Entries marked `verified`: 0
- Entries with `curation_level`: 0
- Filled cards before this upgrade: 42
- Static site files already present: `docs/index.html`, `docs/assets/site.js`, `docs/assets/site.css`, `docs/assets/entries.json`
- Existing paper pages: `papers/README.md` plus 10 category pages

## Existing Prompt-Like Project File

The repository already tracks `CODEX_REDESIGN_SPEC_v2_Awesome_LLM_Reasoning_Data.md`. It predates this upgrade branch. This upgrade does not add new private execution notes, conversation transcripts, or local scratch files.

Private scratch work, if needed, must stay under `.codex_scratch/`, which is ignored by Git.

## Planned Public Deliverables

- Link coverage and needs-search reports that separate verified official links from unresolved entries.
- Structured metadata fields for curation levels and reader-facing summaries.
- Export files for papers as BibTeX, CSV, and JSON where available.
- A regenerated paper atlas with category pages that expose read-first papers, full lists, audit questions, related cards, and open gaps.
- At least 50 non-template cards across releases, verifiers, agents, recipes, benchmarks, and failures.
- A searchable static website that supports filtering beyond what the README can reasonably provide.
- Upgraded QA scripts, contribution guidance, PR template, release notes, and self-review.

## Latest Completion Snapshot

- Total structured entries: 271
- Verified entries with official primary links: 124/124
- Entries still needing primary-source search: 147
- Unique entry-linked cards: 63
- Card files: 65
- `L5_audit_ready` cards: 29
- Beginner 20 official-link coverage: 20/20
- Beginner 20 card coverage: 20/20
- Searchable site assets regenerated from structured metadata.
- Public reports regenerated from the current branch state.

## Validation Gates

The final branch should run:

```bash
python scripts/validate_data.py
python scripts/render_site.py --check
python scripts/render_papers.py --check
python scripts/render_readme.py --check
python scripts/render_cards.py --check
python scripts/coverage_report.py
python scripts/check_links.py --soft
node --check docs/assets/site.js
git diff --check
```

A prompt/conversation leakage scan must also pass before commit.
