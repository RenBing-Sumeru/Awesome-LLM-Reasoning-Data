# Awesome LLM Reasoning Data agent rules

## Repository purpose

- Treat this repository as an auditable atlas of post-training reasoning data, not a paper-title list.
- Every accepted entry must identify its source, data object, feedback contract, construction or selection process, intended use, and audit risk.

## Source files

- Add or update entries in `data/papers.yaml`.
- Write human-facing Paper Cards under `cards/`.
- Change `data/categories.yaml` or `data/research_tracks.yaml` only when the taxonomy itself changes.
- Use `data/schema.json` and `docs/contributor_sop_zh.md` as the field and contribution contracts.

## Generated files

Do not hand-edit generated content to bypass a renderer, including:

- `README.md` and `README_zh.md`;
- generated pages under `papers/`;
- `cards/README.md` and generated Ask Atlas link blocks;
- generated website assets under `docs/assets/`;
- generated reports, exports, and RAG corpus files.

Change the relevant source files, run the renderer, and review the resulting diff.

## Evidence policy

- Never invent paper, venue, DOI, code, data, project, or Hugging Face links.
- Prefer official venue pages, arXiv abstract pages, official project pages, official repositories, and official release pages.
- Use `null` for an unavailable link and `unknown` for an undisclosed fact.
- Keep unresolved work at an honest status such as `needs_search`, `needs_url`, `needs_metadata`, or `partial`.
- Do not broaden `training_use` beyond the paper evidence.
- Do not mark an entry `L4_carded` without a real linked card.
- Do not mark an entry `L5_audit_ready` while material placeholders, unsupported claims, or unresolved audit blockers remain.

## Multi-agent workflow

- Use `$curate-reasoning-track` for end-to-end track expansion.
- Delegate track analysis, subfield search, single-paper reading, card drafting, and final review to the matching custom agents.
- Parallelize read-heavy tasks. Keep the main agent as the only writer to shared source files, especially `data/papers.yaml`.
- Subagents must return evidence-backed drafts. They must not commit, push, open a PR, or modify shared source files.
- Work in bounded batches. Start with 5-10 candidates or papers before scaling up.

## Git and scope

- Inspect `git status` and the current diff before editing.
- Preserve unrelated user changes.
- Keep one pull request focused on one track or a small set of closely related subfields.
- Do not commit, push, or open a pull request unless the user explicitly requests it.

## Required checks

Before declaring the work ready, run the checks required by `docs/contributor_sop_zh.md`, including data validation, renderer checks, Ask Atlas RAG checks when applicable, secret scan, and `git diff --check`.
