# Independent Paper Card Library Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `paper_cards/library/cards/<entry_id>/` the sole editable source for each Card, with at most two controlled categories and a Review frontend that reads only that library.

**Architecture:** Add a library loader and a deterministic legacy-to-library migration. Store all paper-specific metadata, source sections, editorial records, status, and batch provenance inside each Card directory. Generate legacy indexes for static-site compatibility until every non-Review reader has moved to generated outputs.

**Tech Stack:** Python 3.9, PyYAML, JSON, vanilla HTML/CSS/JavaScript, `unittest`.

## Global Constraints

- `paper_cards/library/cards/<entry_id>/` is the only editable source for that paper after migration.
- `paper.yaml.category_ids` contains zero to two IDs from `paper_cards/library/categories.yaml`.
- A prompt batch uses the first category as its primary category; a second category never changes batch validation.
- The Review server loads Card directories directly and writes only the selected Card directory.
- Generated indexes are never edited by the Review UI.
- L6 Cards remain read-only except for package download state.

---

### Task 1: Library paths, schema, and Card-local loader

**Files:**
- Create: `paper_cards/library/categories.yaml`
- Create: `tools/paper_cards/library.py`
- Modify: `tests/paper_cards/test_card_tool.py`
- Test: `tests/paper_cards/test_library.py`

**Interfaces:**
- Produces `load_card(entry_id, root) -> dict`, `load_cards(root) -> dict[str, dict]`, and `save_card_record(entry_id, name, record, root) -> dict`.
- Each loaded Card has `paper`, `header_zh`, `institutions`, `queue`, `review`, and `sources` keys.

- [ ] **Step 1: Write failing loader tests**

```python
def test_load_card_reads_all_local_records(self) -> None:
    card = library.load_card("sample-paper", self.root)
    self.assertEqual(card["paper"]["id"], "sample-paper")
    self.assertEqual(card["header_zh"]["one_line_summary_ch"], "中文总结。")
    self.assertEqual(card["review"]["state"], "reviewed")

def test_category_ids_reject_more_than_two_values(self) -> None:
    with self.assertRaisesRegex(ValueError, "最多保留两个"):
        library.clean_category_ids(["a", "b", "c"], root=self.root)
```

- [ ] **Step 2: Verify RED**

Run: `PYTHONPATH=. python3 tests/paper_cards/test_library.py`

Expected: FAIL because `tools.paper_cards.library` does not exist.

- [ ] **Step 3: Implement the minimal library API**

```python
def card_dir(entry_id: str, root: Path | str | None = None) -> Path:
    return library_root(root) / "cards" / entry_id

def load_card(entry_id: str, root: Path | str | None = None) -> dict:
    directory = card_dir(entry_id, root)
    return {
        "paper": load_yaml_file(directory / "paper.yaml"),
        "header_zh": load_json_file(directory / "header_zh.json", {}),
        "institutions": load_json_file(directory / "institutions.json", {}),
        "queue": load_json_file(directory / "queue.json", {}),
        "review": load_json_file(directory / "review.json", {}),
        "sources": directory / "sources",
    }
```

- [ ] **Step 4: Verify GREEN**

Run: `PYTHONPATH=. python3 tests/paper_cards/test_library.py`

Expected: PASS.

### Task 2: One-time migration and parity validation

**Files:**
- Modify: `tools/paper_cards/migrate.py`
- Modify: `tests/paper_cards/test_migrate.py`
- Create: `paper_cards/library/cards/` entries for all current papers

**Interfaces:**
- Produces `migrate.py library-init --root .` and `migrate.py library-verify --root .`.
- `library-init` converts each current entry plus its local records into exactly one Card directory.

- [ ] **Step 1: Write failing migration parity tests**

```python
def test_library_init_preserves_every_legacy_record(self) -> None:
    result = migrate.initialize_library(root=self.root)
    card = library.load_card("sample-paper", self.root)
    self.assertEqual(result["entry_ids"], ["sample-paper"])
    self.assertEqual(card["paper"]["artifacts"]["paper"], "https://arxiv.org/abs/2501.00001")
    self.assertEqual(card["queue"]["search_status"], "candidate")
```

- [ ] **Step 2: Verify RED**

Run: `PYTHONPATH=. python3 tests/paper_cards/test_migrate.py`

Expected: FAIL because `initialize_library` is absent.

- [ ] **Step 3: Implement conversion and verification**

```python
def initialize_library(root: Path | str | None = None) -> dict:
    for entry_id, paper in card_tool.load_entries(root).items():
        write_library_card(entry_id, paper, root)
    return verify_library(root)
```

Copy the 18 source files, split each shared JSON record into its matching Card directory, and write batch provenance into `paper.yaml`. Reject duplicate IDs, missing source files, or more than two category IDs.

- [ ] **Step 4: Verify GREEN and current-library parity**

Run: `PYTHONPATH=. python3 tests/paper_cards/test_migrate.py && python3 tools/paper_cards/migrate.py library-verify`

Expected: PASS; output reports 17 valid Cards.

### Task 3: Switch Card tooling and Review API to the library

**Files:**
- Modify: `tools/paper_cards/card_tool.py`
- Modify: `tools/paper_cards/server.py`
- Modify: `tests/paper_cards/test_card_tool.py`
- Modify: `tests/paper_cards/test_server.py`

**Interfaces:**
- `card_tool.load_entries()` reads `library.load_cards()` and returns the `paper` map.
- Save endpoints write `header_zh.json`, `institutions.json`, `queue.json`, or `review.json` only under the requested Card directory.

- [ ] **Step 1: Write failing isolation tests**

```python
def test_saving_header_changes_only_the_selected_card_directory(self) -> None:
    server.save_header_zh_payload("sample-paper", {"one_line_summary_ch": "新总结。"}, root=self.root)
    self.assertEqual(library.load_card("second-paper", self.root)["header_zh"]["one_line_summary_ch"], "旧总结。")
```

- [ ] **Step 2: Verify RED**

Run: `PYTHONPATH=. python3 tests/paper_cards/test_server.py`

Expected: FAIL because the current server rewrites shared `header_zh.json`.

- [ ] **Step 3: Implement Card-local reads and writes**

Replace shared-record load/save calls with the library API. Keep endpoint paths and response shapes unchanged. Derive validation at read time instead of persisting `valid_status.json`.

- [ ] **Step 4: Verify GREEN**

Run: `PYTHONPATH=. python3 tests/paper_cards/test_card_tool.py && PYTHONPATH=. python3 tests/paper_cards/test_server.py`

Expected: PASS.

### Task 4: Category editor with zero-to-two selection and filtering

**Files:**
- Modify: `tools/paper_cards/index.html`
- Modify: `tools/paper_cards/app.js`
- Modify: `tools/paper_cards/style.css`
- Modify: `tests/paper_cards/test_frontend_ui.py`

**Interfaces:**
- `paper.yaml.category_ids` is a de-duplicated ordered list of at most two controlled IDs.
- The list matches a selected category when `category_ids.includes(selectedCategoryId)`.

- [ ] **Step 1: Write failing UI contract tests**

```python
def test_category_editor_supports_two_selected_categories_and_filtering(self) -> None:
    self.assertIn('id="categoryFilter"', html)
    self.assertIn("category_ids.length >= 2", app)
    self.assertIn("category_ids.includes", app)
```

- [ ] **Step 2: Verify RED**

Run: `PYTHONPATH=. python3 tests/paper_cards/test_frontend_ui.py`

Expected: FAIL because `categoryFilter` and two-category controls do not exist.

- [ ] **Step 3: Implement the UI**

Render category chips with remove controls, offer the remaining controlled categories as add controls, disable adds at two selections, and save `category_ids` through the existing header API. Add a filter select populated from `categories.yaml`.

- [ ] **Step 4: Verify GREEN**

Run: `PYTHONPATH=. python3 tests/paper_cards/test_frontend_ui.py`

Expected: PASS.

### Task 5: Generate compatibility outputs and remove legacy editable sources

**Files:**
- Modify: `scripts/generate_assets.py`
- Modify: `scripts/render_site.py`
- Modify: `scripts/render_readme.py`
- Modify: `scripts/validate_data.py`
- Modify: `paper_cards/README.md`
- Modify: `AGENTS.md`
- Remove: `data/papers.yaml`, `paper_cards/header_zh.json`, `paper_cards/institutions.json`, `paper_cards/search_queue.json`, `paper_cards/status.json`, `paper_cards/valid_status.json`, `paper_cards/sources/`, `paper_cards/prompt_batches/`

**Interfaces:**
- Build scripts consume the library loader and write generated indexes under `data/_generated/` and `docs/assets/`.
- Validation rejects any Card-local file that is missing, any invalid category list, or inconsistent batch provenance.

- [ ] **Step 1: Write failing generated-index tests**

```python
def test_generated_entries_are_derived_from_library_cards(self) -> None:
    generated = generate_assets.entries_from_library(root=self.root)
    self.assertEqual([item["id"] for item in generated], ["sample-paper"])
```

- [ ] **Step 2: Verify RED**

Run: `PYTHONPATH=. python3 tests/paper_cards/test_atlas_migration.py`

Expected: FAIL because generated assets still read `data/papers.yaml`.

- [ ] **Step 3: Implement output generation and delete legacy sources**

Use the library loader for all generators and validators. Run the migration converter for the repository's 17 Cards, generate compatibility assets, then remove the superseded editable files only after `library-verify` reports complete parity.

- [ ] **Step 4: Verify GREEN**

Run:

```bash
python3 tools/paper_cards/migrate.py library-verify
python3 tools/paper_cards/card_tool.py check
python3 scripts/validate_data.py
python3 scripts/render_site.py --check
python3 scripts/render_papers.py --check
python3 scripts/render_readme.py --check
for test_file in tests/paper_cards/test_*.py; do PYTHONPATH=. python3 "$test_file" || exit $?; done
```

Expected: all commands exit 0; validation reports 17 Cards and zero errors.
