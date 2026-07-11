# Strict V2 Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `executing-plans` task by task. Steps use checkbox syntax for tracking.

**Goal:** Remove all obsolete Paper Card storage, generator, ZIP-download, and documentation paths so only Card-local V2 remains.

**Architecture:** `paper_cards/library/` is the sole source of truth. Review reads and writes one Card directory plus derived `tmp/`; it exposes the canonical directory for hot-plug but no archive/download state. Normal tooling never falls back to the former shared layout.

**Tech Stack:** Python 3, unittest, vanilla JavaScript, YAML/JSON Card records.

## Global Constraints

- Do not commit or push.
- Preserve the three existing Card directories and their manual annotations.
- Remove only paths identified by the strict-V2 audit; do not modify research content.
- Use atomic Card writes for remaining writable records.

---

### Task 1: Lock the strict V2 boundary with a failing regression test

**Files:**
- Create: `tests/paper_cards/test_strict_v2_cleanup.py`
- Test: `tests/paper_cards/test_strict_v2_cleanup.py`

- [x] **Step 1: Write failing tests for the removed surface**

```python
def test_empty_library_never_loads_shared_metadata(self):
    (self.root / "data").mkdir(parents=True)
    (self.root / "data" / "papers.yaml").write_text("- id: legacy\n", encoding="utf-8")
    (self.root / "paper_cards" / "library" / "cards").mkdir(parents=True)
    self.assertEqual(card_tool.load_entries(self.root), {})

def test_obsolete_generators_and_package_directory_are_absent(self):
    self.assertFalse((ROOT / "tools/paper_cards/add_programmatically_verifiable_2025_20.py").exists())
    self.assertFalse((ROOT / "tools/paper_cards/add_scaling_rlvr_20.py").exists())
    self.assertFalse((ROOT / "paper_cards/packages").exists())

def test_card_tool_help_has_no_package_command(self):
    result = subprocess.run([sys.executable, str(ROOT / "tools/paper_cards/card_tool.py"), "--help"], capture_output=True, text=True)
    self.assertNotIn("package", result.stdout)
```

- [x] **Step 2: Run the test and verify the expected failure**

Run: `python3 -m unittest tests.paper_cards.test_strict_v2_cleanup`

Expected: failure because fallback, old files, and `package` command still exist.

### Task 2: Remove unsafe generators and stale archive artifacts

**Files:**
- Delete: `tools/paper_cards/add_programmatically_verifiable_2025_20.py`
- Delete: `tools/paper_cards/add_scaling_rlvr_20.py`
- Delete: `tests/paper_cards/test_programmatically_verifiable_2025_20.py`
- Delete: `scripts/seed_entries_from_bib.py`
- Delete: `paper_cards/packages/`
- Modify: `README.md`
- Modify: old dated files under `docs/superpowers/plans/` and `docs/superpowers/specs/`

- [x] **Step 1: Delete only obsolete executables and their dedicated test**

Remove the two generators because they can recreate deleted Card sets and use
the obsolete queue schema. Remove the retired BibTeX stub and ignored ZIP
archives because neither is part of Card hot-plug.

- [x] **Step 2: Remove obsolete documentation rather than preserving executable instructions**

Delete dated plans/specs that direct a maintainer to run either generator or
create/download ZIP packages. Keep this design and this plan as the current
cleanup record.

- [x] **Step 3: Update the README promise**

Replace “generated submission packages” with Card-local bilingual review and
hot-plug library wording.

### Task 3: Remove package/download behavior from Card tooling and Review

**Files:**
- Modify: `tools/paper_cards/card_tool.py`
- Modify: `tools/paper_cards/server.py`
- Modify: `tools/paper_cards/app.js`
- Modify: `tests/paper_cards/test_card_tool.py`
- Modify: `tests/paper_cards/test_server.py`
- Modify: `tests/paper_cards/test_frontend_ui.py`

- [x] **Step 1: Delete package/download-only public functions and imports**

Remove `packages_root`, ZIP imports, package manifest/export functions and CLI
subcommand, `downloaded` state, `downloaded_at`, `last_package`, and download
eligibility helpers. Retain only normal `new`, `edited`, and reviewed workflow
records that active UI routes use.

- [x] **Step 2: Delete corresponding server endpoints**

Remove `/packages/*`, `/api/status/batch`, `/api/status/*`,
`/api/card/*/downgrade-l4`, and `/api/init/*`, together with their payload
functions. Preserve `/api/library-location` as the sole hot-plug hand-off API.

- [x] **Step 3: Replace stale UI acknowledgements**

Use “已保存中文 section。”, “已保存中文头字段。” and “已保存机构字段。”;
do not mention a download state.

- [x] **Step 4: Delete obsolete tests and adapt L6 expectations**

Delete ZIP/download/downgrade/hidden-initialization tests. Make the remaining
tests assert that L6 has no write-status exception and that no package directory
is created by fixtures.

### Task 4: Remove normal shared-layout fallbacks and obsolete migration commands

**Files:**
- Modify: `tools/paper_cards/card_tool.py`
- Modify: `tools/paper_cards/migrate.py`
- Modify: `scripts/atlas_utils.py`
- Modify: `scripts/validate_data.py`
- Modify: `tests/paper_cards/test_card_tool.py`
- Modify: `tests/paper_cards/test_library.py`
- Modify: `tests/paper_cards/test_atlas_migration.py`

- [x] **Step 1: Make normal helpers Card-library-only**

`load_entries` returns records from `library.load_cards`; an empty or missing
Card library returns `{}`. Remove shared header/institution/queue/status
fallbacks and their path helpers. `atlas_utils` and validation scan only
`paper_cards/library/cards/`.

- [x] **Step 2: Reduce migration to local category normalization**

Delete `library-init`, `library-verify`, and `library-cutover` commands plus
their shared-layout conversion code. Keep `library-normalize` for synchronizing
Card-local category mirrors.

- [x] **Step 3: Replace legacy fixtures with Card-local fixtures**

Each test creates `paper_cards/library/categories.yaml` and a complete local
Card directory. No test creates `data/papers.yaml`, shared source directories,
shared JSON records, or packages.

### Task 5: Synchronize current documentation and generated artifacts

**Files:**
- Modify: `AGENTS.md`
- Modify: `paper_cards/README.md`
- Modify: `docs/paper_card_sop.md`
- Modify: generated `README.md`, `README_zh.md`, `papers/**`, `docs/assets/**`, `reports/**`

- [x] **Step 1: State the one supported maintenance path**

Document only Card-local creation, `library-normalize`, validation, and copying
`paper_cards/library/` for hot-plug. State that `manual_annotation` is the only
human record and no ZIP/archive/download state exists.

- [x] **Step 2: Regenerate and check derived output**

Run `render_papers.py`, `render_readme.py`, `render_site.py`,
`coverage_report.py`, and `summarize_counts.py`, then run each `--check` mode.

### Task 6: Verify deletion, behavior, and Review prewarm

**Files:**
- Test: `tests/paper_cards/`

- [x] **Step 1: Run the strict regression test**

Run: `python3 -m unittest tests.paper_cards.test_strict_v2_cleanup`

Expected: all tests pass.

- [x] **Step 2: Run the full Card and project checks**

Run: `python3 -m unittest discover -s tests/paper_cards -p 'test_*.py'`,
`python3 tools/paper_cards/card_tool.py check`,
`python3 scripts/validate_data.py`, `python3 scripts/check_links.py --soft`,
and `git diff --check`.

- [ ] **Step 3: Restart Review and verify Card-only output**

Stop the existing server, clear derived `tmp/paper_cards`, start
`PORT=8770 python3 tools/paper_cards/server.py`, and query `/api/entries`.
Expected: exactly the existing three Card IDs and no package/download route.
