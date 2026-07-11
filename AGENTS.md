# Local Agent Rules

## Paper Card Library

- `paper_cards/library/` is the canonical paper store. Each paper owns one directory at `paper_cards/library/cards/<entry_id>/` with `paper.yaml`, local JSON records, and `sources/`.
- `paper.yaml` owns paper metadata and `category_ids`. `header_zh.json`, `queue.json`, and the Review UI mirror the selected categories; do not create a second metadata index.
- Categories come only from `paper_cards/library/categories.yaml`. A new Card starts with one category; a maintainer may manually add or remove categories, leaving zero to two distinct controlled IDs. There is no separate per-paper track field.
- Keep every card-specific field inside its Card directory. `review.json` stores workflow state. Validation reports are derived when requested and are not saved as a shared cache.
- The review server may edit Chinese source files and the local JSON records. It must not write shared metadata files.

## Paper Workflow

- Treat a “论文 workflow” or “根据 workflow 判断下一步” request as the local collection path: select papers, create or update Card directories, complete them to L4, validate, and open the local review site. It is not a request to inspect CI, deployment, commits, or pull requests unless the user explicitly says so.
- When adding a paper, create `paper_cards/library/cards/<entry_id>/paper.yaml`, initialize its 9 English and 9 Chinese source sections, and complete the local header, institution, queue, and review records.
- After papers requested for local inclusion reach L4, run `python3 tools/paper_cards/card_tool.py check` and `python3 scripts/validate_data.py`, fix request-related failures, then start or reuse `PORT=8770 python3 tools/paper_cards/server.py` and return `http://127.0.0.1:8770/`.
- A Card may keep optional collection provenance under `paper.yaml.batch`. Its `primary_category_id` is only provenance; it is not a Track and does not prevent a second category.
- `tools/paper_cards/migrate.py library-normalize` synchronizes local category mirrors and removes deprecated field names. `library-init`, `library-verify`, and `library-cutover --yes` are one-time import commands for an older checkout, not daily maintenance commands.

## Updating to V2

- Before synchronizing, run `git status --short` and never merge into a dirty worktree.
- To update from the shared V2 branch, use `git fetch upstream V2` followed by `git merge --ff-only FETCH_HEAD` in a clean checkout. Do not use `pull`, `reset`, or a non-fast-forward merge without explicit user direction.
- After an update that changes Card tooling, run `python3 tools/paper_cards/migrate.py library-normalize`, `python3 tools/paper_cards/card_tool.py check`, and `python3 scripts/validate_data.py`.

## L4 Paper Card Content

Keep the 9-section card topics unchanged. Sections 1, 2, 3, and 5 must collect enough information for topic screening and L4 promotion:

- `01_problem`: primary source, venue/date, decision boundary, concrete problem, atlas relevance, data object or evaluation surface, L4 collection note.
- `02_core_idea`: one-sentence contribution, core mechanism, data object or evaluation surface, feedback contract, category rationale, closest comparisons.
- `03_method`: inputs, pipeline, outputs, verifier/reward/judge/environment, training or evaluation use, artifacts to verify, reproducibility notes.
- `05_novelty`: prior-work baseline, what changes, why it is a direction signal, quality signal, what is not new, reuse checks.
