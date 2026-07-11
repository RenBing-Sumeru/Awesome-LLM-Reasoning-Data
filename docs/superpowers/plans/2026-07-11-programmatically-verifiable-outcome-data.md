# Programmatically Verifiable Outcome Data Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add ten recent, influential L4 Cards whose outcomes are deterministically programmatically verifiable.

**Architecture:** The Card library is the sole canonical store. Each candidate gets an independent directory in `paper_cards/library/cards/`, where `paper.yaml` owns metadata and category; no shared paper index is changed.

**Tech Stack:** Python 3, PyYAML, repository Card tooling, local Review server.

## Global Constraints

- Use papers first publicly released on or after 2025-07-11.
- Assign exactly `programmatically_verifiable_outcome_data` to every added Card.
- Use official venue, arXiv, OpenReview, or project pages as primary sources.
- Every Card has local JSON records plus nine English and nine Chinese L4 source sections.
- Do not push any commit or Card data to GitHub.

---

### Task 1: Select and verify ten candidates

**Files:**
- Create: `tools/paper_cards/add_programmatically_verifiable_2025_20.py`

**Interfaces:**
- Consumes: public primary-source metadata and `paper_cards/library/categories.yaml`.
- Produces: `PAPERS`, containing ten tuples `(id, title, year, venue, authors, url, verifier_kind, impact_signal)`.

- [ ] **Step 1: Write the candidate declaration**

```python
PAPERS = [
    ("entry-id", "Official title", 2025, "Venue", ["Author"],
     "https://primary.source", "unit tests", "accepted top conference"),
]
```

- [ ] **Step 2: Reject records before 2025-07-11 and duplicate Card titles**

Run: `python3 -c "from tools.paper_cards import library; print(len(library.load_cards()))"`

Expected: the current Card count prints and is used as the baseline.

- [ ] **Step 3: Commit the candidate generator locally**

Run: `git add tools/paper_cards/add_programmatically_verifiable_2025_20.py && git commit -m "feat: add verified outcome data card generator"`

### Task 2: Generate independent L4 Cards

**Files:**
- Create: `paper_cards/library/cards/<entry-id>/paper.yaml`
- Create: `paper_cards/library/cards/<entry-id>/header_zh.json`
- Create: `paper_cards/library/cards/<entry-id>/institutions.json`
- Create: `paper_cards/library/cards/<entry-id>/queue.json`
- Create: `paper_cards/library/cards/<entry-id>/review.json`
- Create: `paper_cards/library/cards/<entry-id>/sources/01_problem.md` through `09_citation.md`
- Create: `paper_cards/library/cards/<entry-id>/sources/01_problem_ch.md` through `09_citation_ch.md`

**Interfaces:**
- Consumes: Task 1 `PAPERS` records.
- Produces: ten `L4_carded` Cards loadable by `tools.paper_cards.library.load_cards()`.

- [ ] **Step 1: Emit local metadata with the fixed category**

```yaml
category_ids:
  - programmatically_verifiable_outcome_data
curation_level: L4_carded
verification:
  link_verified: true
```

- [ ] **Step 2: Make bilingual sections 01, 02, 03, and 05 substantive**

State the primary source, executable verifier contract, data object, pipeline, impact signal, comparison baseline, and reuse check in both languages.

- [ ] **Step 3: Generate Cards and verify the count rises by ten**

Run: `python3 tools/paper_cards/add_programmatically_verifiable_2025_20.py && find paper_cards/library/cards -mindepth 1 -maxdepth 1 -type d | wc -l`

Expected: exactly ten more than the Task 1 baseline.

- [ ] **Step 4: Commit generated Cards locally**

Run: `git add paper_cards/library/cards && git commit -m "feat: add recent programmatically verifiable outcome cards"`

### Task 3: Validate and refresh local presentation

**Files:**
- Modify: `papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md`
- Modify: `papers/README.md`, `README.md`, `README_zh.md`
- Modify: `docs/assets/atlas-data.js`, `docs/assets/counts.json`, `docs/assets/entries.json`, `docs/index.html`

**Interfaces:**
- Consumes: Cards from Task 2.
- Produces: derived atlas output and a warmed ignored Review cache.

- [ ] **Step 1: Run Card and schema validation**

Run: `python3 tools/paper_cards/card_tool.py check && python3 scripts/validate_data.py`

Expected: every Card reports `ok`; validation reports `errors: 0`.

- [ ] **Step 2: Regenerate then check derived output**

Run: `python3 scripts/render_papers.py && python3 scripts/render_readme.py && python3 scripts/render_site.py && python3 scripts/render_papers.py --check && python3 scripts/render_readme.py --check && python3 scripts/render_site.py --check`

Expected: every check reports up to date.

- [ ] **Step 3: Warm or reuse the local Review service**

Run: `PORT=8770 python3 tools/paper_cards/server.py`

Expected: cache warmup succeeds and `http://127.0.0.1:8770/` lists the cards.

- [ ] **Step 4: Check diff and commit derived output locally**

Run: `git diff --check && git add papers README.md README_zh.md docs && git commit -m "chore: refresh outcome data atlas" && git status --short`

Expected: no whitespace errors and a clean worktree; do not run `git push`.
