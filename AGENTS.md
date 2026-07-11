# Local Agent Rules

## Paper Card Library

- `paper_cards/library/` is the canonical paper store. Each paper owns one directory at `paper_cards/library/cards/<entry_id>/` with `paper.yaml`, local JSON records, and `sources/`.
- `paper.yaml` owns paper metadata and `category_ids`. `header_zh.json`, `queue.json`, and the Review UI mirror the selected categories; do not create a second metadata index. `queue.json.manual_annotation` is the only human Review record; collection context must not prefill or satisfy it.
- Categories come only from `paper_cards/library/categories.yaml`. A new Card starts with one category; a maintainer may manually add or remove categories, leaving zero to two distinct controlled IDs. There is no separate per-paper track field.
- Keep every card-specific field inside its Card directory. `review.json` stores workflow state. Validation reports are derived when requested and are not saved as a shared cache.
- `tmp/paper_cards/review-index.json` is an ignored, derived Review startup cache only. It is rebuilt automatically when missing or stale and is never canonical paper data.
- The review server may edit Chinese source files and the local JSON records. It must not write shared metadata files.
- Required Chinese header fields and institution disposition must never be empty. `card_tool check` and Card-header saves assert this; use `no_institution: true` when no institution is known.

## Paper Workflow

- Treat a “论文 workflow” or “根据 workflow 判断下一步” request as the local collection path: select papers, create or update Card directories, complete them to L4, validate, and open the local review site. It is not a request to inspect CI, deployment, commits, or pull requests unless the user explicitly says so.
- When adding a paper, create `paper_cards/library/cards/<entry_id>/paper.yaml`, initialize its 9 English and 9 Chinese source sections, and complete the local header, institution, queue, and review records.
- After papers requested for local inclusion reach L4, run `python3 tools/paper_cards/card_tool.py check` and `python3 scripts/validate_data.py`, fix request-related failures, then start or reuse `PORT=8770 python3 tools/paper_cards/server.py` and return `http://127.0.0.1:8770/`.
- A Card may keep optional collection provenance under `paper.yaml.batch`. Its `primary_category_id` is only provenance; it is not a Track and does not prevent a second category.
- `tools/paper_cards/migrate.py library-normalize` synchronizes Card-local category mirrors. There is no shared-layout importer or compatibility fallback in V2.

## Updating to V2

- Before synchronizing, run `git status --short` and never merge into a dirty worktree.
- To update from the shared V2 branch, use `git fetch upstream V2` followed by `git merge --ff-only FETCH_HEAD` in a clean checkout. Do not use `pull`, `reset`, or a non-fast-forward merge without explicit user direction.
- After an update that changes Card tooling, run `python3 tools/paper_cards/migrate.py library-normalize`, `python3 tools/paper_cards/card_tool.py check`, and `python3 scripts/validate_data.py`.
- Starting `python3 tools/paper_cards/server.py` warms the ignored Review cache before binding its port; a failed warmup exits non-zero instead of serving an unverified list.

## Codex instructions for historical checkouts

- Treat `paper_cards/library/` as the only Card data to migrate from a historical checkout. Do not restore deleted `data/papers.yaml`, shared sources, shared review JSON, or generated ZIP files.
- In the historical checkout, first run `git status --short`; preserve any user edits and do not reset them. Copy or merge only `paper_cards/library/` into the V2 checkout.
- Then run `python3 tools/paper_cards/migrate.py library-normalize`, `python3 tools/paper_cards/card_tool.py check`, and `python3 scripts/validate_data.py`. Fix missing Card-local fields before continuing.
- Start Review with `PORT=8770 python3 tools/paper_cards/server.py`; startup creates the ignored `tmp` caches. Never copy `tmp/` between versions.
- A suitable Codex handoff prompt is: `适配到 V2：只迁移 paper_cards/library，保留当前用户修改，删除 legacy 路径，运行 library-normalize、Card check、validate_data 和渲染检查，确认 Review 启动预热成功后再提交。`

## L4 Paper Card Content

Keep the 9-section card topics unchanged. Sections 1, 2, 3, and 5 must collect enough information for topic screening and L4 promotion:

- `01_problem`: primary source, venue/date, decision boundary, concrete problem, atlas relevance, data object or evaluation surface, L4 collection note.
- `02_core_idea`: one-sentence contribution, core mechanism, data object or evaluation surface, feedback contract, category rationale, closest comparisons.
- `03_method`: inputs, pipeline, outputs, verifier/reward/judge/environment, training or evaluation use, artifacts to verify, reproducibility notes.
- `05_novelty`: prior-work baseline, what changes, why it is a direction signal, quality signal, what is not new, reuse checks.
