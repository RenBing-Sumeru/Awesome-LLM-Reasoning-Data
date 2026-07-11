# Review Cache Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Warm a derived Review index before the server listens, reuse it for fast page loads, and rebuild it automatically when Card files change.

**Architecture:** Add a small cache module in `tools/paper_cards/server.py` that fingerprints the canonical Card library, atomically writes `tmp/paper_cards/review-index.json`, and serves only matching snapshots. The server performs a synchronous warmup in `main()` before binding its port; write endpoints invalidate the snapshot, while direct filesystem edits are detected on the next request. Card loading and entry-report generation will use one in-memory library pass per rebuild.

**Tech Stack:** Python 3.9, JSON, pathlib, `unittest`, vanilla HTTP server.

## Global Constraints

- `paper_cards/library/cards/<entry_id>/` remains the only editable Card source.
- `tmp/paper_cards/review-index.json` is derived, ignored runtime data and may be deleted.
- Missing or stale caches rebuild automatically; a failed startup rebuild exits non-zero before binding the HTTP port.
- An empty Card library is valid and must not fall back to removed legacy files.
- Direct Card insertion, deletion, and edits must be detected without a manual cache command.

---

### Task 1: Add cache and fingerprint tests

**Files:**
- Modify: `tests/paper_cards/test_server.py`
- Modify: `tests/paper_cards/test_library.py` only if a library fixture helper is needed

**Interfaces:**
- Tests will exercise `server.review_index_payload`, `server.refresh_review_index`, `server.review_cache_path`, and `server.review_source_fingerprint` once defined.

- [ ] **Step 1: Write failing tests** for first build/reuse, stale rebuild after Card metadata change, direct Card insertion/deletion, corrupt cache recovery, and empty library behavior.
- [ ] **Step 2: Run the focused tests** with `python3 -m unittest tests.paper_cards.test_server -v` and confirm they fail because the cache interfaces do not exist.
- [ ] **Step 3: Add a startup test seam** that asserts warmup runs before the HTTP server binds, and a write-path test that confirms a successful Card edit invalidates the cache.
- [ ] **Step 4: Run the focused tests again** and keep the failures limited to the missing implementation.

### Task 2: Implement canonical cache loading

**Files:**
- Modify: `tools/paper_cards/server.py`
- Modify: `.gitignore`

**Interfaces:**
- `review_cache_path(root) -> Path`
- `review_source_fingerprint(root) -> str`
- `refresh_review_index(root) -> dict`
- `review_index_payload(root) -> dict`
- `invalidate_review_index(root) -> None`

- [ ] **Step 1: Implement fingerprinting** over taxonomy, Card directories, local JSON/YAML records, and 18 source files using path, size, and nanosecond mtime.
- [ ] **Step 2: Implement atomic JSON writes** beneath `tmp/paper_cards/`, with malformed or incompatible snapshots treated as stale.
- [ ] **Step 3: Implement one-pass rebuild** that loads Cards once, derives the existing entries/status payload, and returns an empty payload when no Cards exist.
- [ ] **Step 4: Make `review_index_payload` reuse matching snapshots and rebuild mismatches; make invalidation remove the snapshot safely.
- [ ] **Step 5: Add `tmp/` to `.gitignore` and run the Task 1 tests until green.

### Task 3: Integrate startup and write invalidation

**Files:**
- Modify: `tools/paper_cards/server.py`
- Modify: `tests/paper_cards/test_server.py`

**Interfaces:**
- `main()` must call `review_index_payload(ROOT)` before constructing `ThreadingHTTPServer`.
- `/api/entries` must return `review_index_payload(ROOT)`.

- [ ] **Step 1: Replace the live nested `/api/entries` calculation** with the cache loader.
- [ ] **Step 2: Warm the cache synchronously before port binding; catch rebuild exceptions, print a clear error, and return a non-zero exit code.
- [ ] **Step 3: Invalidate the cache after successful Card-local writes so the next list request cannot serve stale data.
- [ ] **Step 4: Run server tests and a timed local API request; confirm the warm path is fast and the first cold build happens before serving.

### Task 4: Update operating documentation and verify

**Files:**
- Modify: `AGENTS.md`
- Modify: `docs/contributor_sop.md`
- Modify: `docs/contributor_sop_zh.md`
- Modify: `docs/paper_card_sop.md`

- [ ] **Step 1: Document automatic startup warmup, cache invalidation, and the non-zero startup failure behavior.
- [ ] **Step 2: Run the full Paper Card test suite: `python3 -m unittest discover -s tests/paper_cards -p 'test_*.py' -v`.
- [ ] **Step 3: Run `python3 tools/paper_cards/card_tool.py check`, `python3 scripts/validate_data.py`, `python3 scripts/render_papers.py --check`, `python3 scripts/render_readme.py --check`, and `python3 scripts/render_site.py --check`.
- [ ] **Step 4: Run `git diff --check` and verify `git status --short` contains no generated cache files.
