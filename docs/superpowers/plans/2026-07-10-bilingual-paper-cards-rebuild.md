# Bilingual Paper Cards Rebuild Implementation Plan

> **For agentic workers:** Do not use agents for paper review, translation, annotation, or level changes. This plan is for local implementation only. No commit or push is required unless the user explicitly asks.

**Goal:** Replace the old card framework with a clean bilingual 9-section paper-card system where source content lives once, Python assembles previews/packages, and the web UI edits only Chinese section files.

**Architecture:** Keep `data/papers.yaml` as the single source for paper metadata and links. Move all card body text into `paper_cards/sources/<entry_id>/` as 9 English Markdown files plus 9 Chinese `_ch.md` files. Remove the old `cards/` framework and provide one Python tool plus one local web editor for checking, assembling, packaging, search queue maintenance, and package download.

**Tech Stack:** Python 3 standard library, existing YAML loader utilities, static HTML/CSS/JS served by a local Python server, zip packaging via Python `zipfile`, no new frontend framework.

## Global Constraints

- Delete the old `cards/` framework; do not maintain backwards-compatible card formats.
- Keep both English and Chinese card sources.
- English source files use the fixed 9-section filenames without suffix.
- Chinese source files use the same filenames with `_ch.md`.
- Only Chinese `_ch.md` files are editable in the web UI.
- English files are read-only in the web UI.
- Full assembled cards are never manually edited.
- Full assembled cards are generated only by Python.
- Assembled cards are build/package artifacts, not long-term source data.
- Keep `Ask the Atlas` as an entry link, but it must not participate in review, translation, or editing.
- Preserve useful old framework discipline: official-link priority, no guessed links, `unknown`/`needs_search`, track classification, reports, and CI checks.
- Preserve the existing local review frontend experience. The web work is an adaptation of the current `review/` UI, not a redesign.
- Keep frontend changes small: reuse the existing list/detail layout, filters, status chips, card metadata display, textarea editing pattern, and save-button behavior.
- Do not use agents for the paper-card review process.
- Do not commit unless the user explicitly asks.

---

## Target File Structure

Create:

```text
docs/paper_card_sop.md
paper_cards/
├── README.md
├── status.json
├── search_queue.json
├── sources/
│   └── <entry_id>/
│       ├── 01_problem.md
│       ├── 01_problem_ch.md
│       ├── 02_core_idea.md
│       ├── 02_core_idea_ch.md
│       ├── 03_method.md
│       ├── 03_method_ch.md
│       ├── 04_evidence.md
│       ├── 04_evidence_ch.md
│       ├── 05_novelty.md
│       ├── 05_novelty_ch.md
│       ├── 06_limitations.md
│       ├── 06_limitations_ch.md
│       ├── 07_usefulness.md
│       ├── 07_usefulness_ch.md
│       ├── 08_reading_notes.md
│       ├── 08_reading_notes_ch.md
│       ├── 09_citation.md
│       └── 09_citation_ch.md
└── packages/
    └── .gitignore
tools/paper_cards/
├── card_tool.py
├── server.py
├── index.html
├── app.js
└── style.css
tests/paper_cards/
├── test_card_tool.py
└── test_server.py
```

Delete:

```text
cards/
scripts/render_cards.py
scripts/add_card_ask_links.py
utils/level-review/
docs/assets/cards.json
data/_generated/cards.json
reports/five_task_quality_audit.md
```

Modify:

```text
README.md
README_zh.md
CONTRIBUTING.md
docs/contributor_sop.md
docs/contributor_sop_zh.md
docs/index.html
docs/assets/site.js
scripts/validate_data.py
scripts/render_site.py
scripts/render_papers.py
scripts/render_readme.py
.github/workflows/validate.yml
.github/PULL_REQUEST_TEMPLATE.md
```

## Data Rules

### Metadata Source

`data/papers.yaml` remains the only source for:

- `id`
- `title`
- `year`
- `venue`
- `authors`
- `category`
- `source_role`
- `verification_contract`
- `supervision_granularity`
- `training_use`
- `status`
- `curation_level`
- `artifacts`
- `primary_link`

### Card Text Source

`paper_cards/sources/<entry_id>/` is the only source for paper-card body text:

- English body: 9 files without suffix.
- Chinese body: 9 files with `_ch.md`.
- No title, author, venue, links, or status duplicated in the section files.

### Generated Output

Assembled card Markdown is generated only in memory or inside a downloaded zip package:

```text
assembled/<entry_id>_en.md
assembled/<entry_id>_ch.md
```

These files are not tracked as project source files.

## Fixed Section Set

```python
SECTIONS = [
    ("01_problem", "Problem: What question is this paper trying to answer?"),
    ("02_core_idea", "Core Idea: What is the paper's main contribution?"),
    ("03_method", "Method: How does it work?"),
    ("04_evidence", "Evidence: Why should we believe it?"),
    ("05_novelty", "Novelty: What is new compared with prior work?"),
    ("06_limitations", "Limitations: What are the weaknesses or hidden assumptions?"),
    ("07_usefulness", "Usefulness: How can I use this paper?"),
    ("08_reading_notes", "Reading Notes: What should I remember?"),
    ("09_citation", "Citation"),
]
```

Chinese assembled cards use translated headings generated by Python:

```python
SECTION_TITLES_CH = {
    "01_problem": "问题：这篇论文想回答什么问题？",
    "02_core_idea": "核心思想：这篇论文的主要贡献是什么？",
    "03_method": "方法：它是怎么工作的？",
    "04_evidence": "证据：为什么应该相信它？",
    "05_novelty": "新意：相比已有工作新在哪里？",
    "06_limitations": "局限：弱点或隐藏假设是什么？",
    "07_usefulness": "用途：我可以如何使用这篇论文？",
    "08_reading_notes": "阅读笔记：应该记住什么？",
    "09_citation": "引用",
}
```

## CLI Interface

One command owns the paper-card workflow:

```bash
python tools/paper_cards/card_tool.py check
python tools/paper_cards/card_tool.py build --entry <entry_id> --lang en
python tools/paper_cards/card_tool.py build --entry <entry_id> --lang ch
python tools/paper_cards/card_tool.py package --entries <entry_id>,<entry_id>
python tools/paper_cards/card_tool.py search-report
```

### Python Interfaces

`tools/paper_cards/card_tool.py` exposes:

```python
def load_entries() -> dict[str, dict]:
    """Return data/papers.yaml entries keyed by entry id."""

def card_source_dir(entry_id: str) -> Path:
    """Return paper_cards/sources/<entry_id>."""

def expected_files(entry_id: str) -> list[Path]:
    """Return the 18 required source file paths."""

def check_card(entry_id: str) -> list[str]:
    """Return validation errors for one bilingual card source."""

def assemble_card(entry: dict, lang: str) -> str:
    """Return assembled Markdown for lang 'en' or 'ch' from section source files."""

def write_package(entry_ids: list[str], package_dir: Path) -> Path:
    """Create a zip containing sources, assembled cards, and manifest files."""

def load_status() -> dict:
    """Return paper_cards/status.json payload."""

def update_status(entry_id: str, state: str, package_name: str | None = None) -> dict:
    """Update local maintenance state for one entry."""
```

## Package Format

Downloaded package:

```text
paper-card-package-YYYYMMDD-HHMMSS.zip
├── manifest.json
├── manifest.md
├── sources/
│   └── <entry_id>/
│       ├── 01_problem.md
│       ├── 01_problem_ch.md
│       ├── ...
│       └── 09_citation_ch.md
└── assembled/
    ├── <entry_id>_en.md
    └── <entry_id>_ch.md
```

`manifest.json` includes:

```json
{
  "schema_version": 1,
  "generated_at": "ISO-8601 timestamp",
  "entries": [
    {
      "entry_id": "paper-id",
      "title": "Paper title",
      "primary_link": "https://...",
      "status": "verified",
      "curation_level": "L3_summary_ready",
      "source_dir": "paper_cards/sources/paper-id",
      "assembled_en": "assembled/paper-id_en.md",
      "assembled_ch": "assembled/paper-id_ch.md",
      "check_errors": []
    }
  ]
}
```

## Web UI Requirements

Local URL:

```bash
python tools/paper_cards/server.py
```

Frontend migration rule:

- Use the current `review/` frontend as the interaction baseline.
- Do not redesign the page from scratch.
- Keep the previous dense review-tool feel: paper list on the left, metadata/detail panel, editable textarea area, compact controls, and clear status messages.
- Only change what the new card workflow requires: bilingual section tabs, read-only English reference, editable Chinese `_ch.md`, preview, package download, downloaded marker, and search queue maintenance.
- Keep the frontend independent from Ask/agent behavior. Ask links are navigation links only.

Page layout:

- Left column: paper list.
- Top filters: `new`, `edited`, `packaged`, `downloaded`, `needs_search`, `missing_chinese`.
- Center: read-only paper metadata from `data/papers.yaml`.
- Right: 9 section editor tabs.
- English section text shown read-only.
- Chinese `_ch.md` shown editable.
- Ask the Atlas link shown as a navigation link only.

Buttons:

- `保存中文修改`: writes one or all `_ch.md` files.
- `生成预览`: calls Python assembly and returns English/Chinese assembled Markdown for display.
- `生成并下载提交包`: calls Python package function and downloads zip.
- `标记为已下载`: updates `paper_cards/status.json`.
- `新增中文卡片源`: creates missing 18 source files for an existing `entry_id`.

Server API:

```text
GET  /api/entries
GET  /api/card/<entry_id>
POST /api/card/<entry_id>/sections
POST /api/card/<entry_id>/preview
POST /api/package
POST /api/status/<entry_id>
POST /api/init/<entry_id>
GET  /packages/<zip_name>
```

Important server rule:

- `POST /api/card/<entry_id>/sections` accepts only keys ending in `_ch`.
- No API endpoint writes English section files after initialization.
- No endpoint writes assembled Markdown into the project source tree.
- No endpoint calls Ask the Atlas or any agent.

## Search Queue Migration

Keep the old search discipline, but move it into the new framework:

```text
paper_cards/search_queue.json
```

Record shape:

```json
{
  "schema_version": 1,
  "entries": {
    "entry-id-or-temp-id": {
      "title": "Paper title",
      "candidate_links": {
        "paper": "https://...",
        "arxiv": null,
        "code": null,
        "data": null,
        "project": null,
        "huggingface": null,
        "doi": null
      },
      "track_guess": ["programmatically_verifiable_outcome_data"],
      "reason_to_include": "Specific relation to post-training reasoning data.",
      "search_status": "candidate",
      "review_note": ""
    }
  }
}
```

Allowed `search_status` values:

```text
candidate
link_verified
needs_search
rejected
promoted
```

The web UI may edit the search queue, but it must not directly promote a paper into `data/papers.yaml`. Promotion is represented in the downloaded package manifest for human review.

## Ask the Atlas Migration

Keep Ask links as generated header links:

English:

```markdown
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=<entry_id>&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=<entry_id>&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=<entry_id>&mode=compare)
```

Chinese:

```markdown
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=<entry_id>&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=<entry_id>&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=<entry_id>&mode=compare)
```

Ask links are generated by Python during preview/package assembly and are never stored inside section source files.

## L-Level Redefinition

Replace old card-based L4/L5 rules with bilingual source rules:

```text
L0_candidate_seeded       Candidate exists, relationship to project is stated.
L1_link_verified          Official primary source verified.
L2_english_sections_ready 9 English section files complete.
L3_chinese_sections_ready 9 Chinese section files complete.
L4_package_ready          Python check passes and bilingual preview assembles.
L5_human_recommended      Human review note exists and package is ready.
```

If the project keeps the old enum names in `data/schema.json`, map the new workflow states into `paper_cards/status.json` first and update `data/schema.json` only in a separate compatibility-breaking data migration.

## Task 1: Repair Current YAML Blocker

**Files:**

- Modify: `data/papers.yaml`

**Why:** The current YAML parse error blocks every renderer and validator.

**Steps:**

- [ ] Inspect [data/papers.yaml](/Users/admin/Desktop/Awesome-LLM-Reasoning-Data/data/papers.yaml:6565).
- [ ] Split `curation_level: L5_audit_ready- id: ...` into two valid YAML entries.
- [ ] Run:

```bash
python3 - <<'PY'
from pathlib import Path
import yaml
yaml.safe_load(Path("data/papers.yaml").read_text())
print("papers yaml parses")
PY
```

- [ ] Expected output:

```text
papers yaml parses
```

## Task 2: Add Project SOP

**Files:**

- Create: `docs/paper_card_sop.md`
- Create: `paper_cards/README.md`

**Steps:**

- [ ] Move the downloaded SOP into `docs/paper_card_sop.md` as an internal execution manual.
- [ ] Add project-specific rules: bilingual files, Python-only assembly, web-only Chinese editing, package download, Ask link separation, search queue.
- [ ] Add a short `paper_cards/README.md` explaining source-data rules and file naming.
- [ ] Run:

```bash
python3 -m py_compile tools/paper_cards/card_tool.py
```

- [ ] Expected output: no output and exit code 0 after Task 4 creates the tool.

## Task 3: Remove Old Card Framework

**Files:**

- Delete: `cards/`
- Delete: `scripts/render_cards.py`
- Delete: `scripts/add_card_ask_links.py`
- Delete: `utils/level-review/`
- Delete: `docs/assets/cards.json`
- Delete: `data/_generated/cards.json`
- Delete: `reports/five_task_quality_audit.md`

**Steps:**

- [ ] Delete the listed files/directories.
- [ ] Search for stale references:

```bash
rg -n "cards/|render_cards|add_card_ask_links|five_task_quality_audit|cards\\.json|level-review" README.md README_zh.md docs scripts papers reports .github
```

- [ ] Replace old references with new `paper_cards/` workflow references.

## Task 4: Implement Python Card Tool

**Files:**

- Create: `tools/paper_cards/card_tool.py`
- Create: `tests/paper_cards/test_card_tool.py`
- Create: `paper_cards/status.json`
- Create: `paper_cards/search_queue.json`
- Create: `paper_cards/packages/.gitignore`

**Steps:**

- [ ] Write tests for fixed section filenames and missing-file detection.
- [ ] Implement `SECTIONS`, `SECTION_TITLES_CH`, `expected_files`, and `check_card`.
- [ ] Write tests for English and Chinese assembly.
- [ ] Implement `assemble_card`.
- [ ] Write tests for package manifest and zip contents.
- [ ] Implement `write_package`.
- [ ] Write tests for status transitions.
- [ ] Implement `load_status` and `update_status`.
- [ ] Run:

```bash
python -m unittest tests.paper_cards.test_card_tool
```

- [ ] Expected result: all tests pass.

## Task 5: Add Sample Source Cards

**Files:**

- Create: `paper_cards/sources/<entry_id>/*.md`

**Steps:**

- [ ] Pick two existing entries from `data/papers.yaml`.
- [ ] Create 18 source files for each entry.
- [ ] Populate English files from existing useful card text or concise manual text.
- [ ] Populate Chinese `_ch.md` files with human-editable Chinese content.
- [ ] Run:

```bash
python tools/paper_cards/card_tool.py check
python tools/paper_cards/card_tool.py build --entry <entry_id> --lang en
python tools/paper_cards/card_tool.py build --entry <entry_id> --lang ch
```

- [ ] Expected result: no check errors and both assembled cards print valid Markdown.

## Task 6: Adapt Existing Local Web Editor

**Files:**

- Create: `tools/paper_cards/server.py`
- Create by adapting current `review/` frontend: `tools/paper_cards/index.html`
- Create by adapting current `review/` frontend: `tools/paper_cards/app.js`
- Create by adapting current `review/` frontend: `tools/paper_cards/style.css`
- Create: `tests/paper_cards/test_server.py`

**Steps:**

- [ ] Review the current `review/` page behavior and list the pieces to preserve: list/detail layout, filters, paper metadata card, compact action bar, textarea save flow, status feedback, and local-file persistence style.
- [ ] Add server tests for `GET /api/entries`.
- [ ] Add server tests for loading one card source.
- [ ] Add server tests proving English files cannot be modified.
- [ ] Add server tests proving Chinese `_ch.md` files can be modified.
- [ ] Add server tests for preview assembly.
- [ ] Add server tests for package zip download.
- [ ] Implement `server.py` by following the existing local-file API pattern from `review/server.py`, but write only under `paper_cards/`.
- [ ] Copy the current `review/index.html` structure into `tools/paper_cards/index.html` and change labels/data targets only where needed for bilingual paper-card sections.
- [ ] Copy the current `review/review.js` interaction model into `tools/paper_cards/app.js`, then replace annotation-specific logic with section loading, `_ch.md` saving, preview, package, and downloaded-status actions.
- [ ] Copy the current `review/style.css` visual system into `tools/paper_cards/style.css`, then make only small additions for section tabs, side-by-side English/Chinese panes, and package/download status chips.
- [ ] Preserve existing button density and page rhythm; do not introduce a new landing page, hero section, large decorative cards, or a new design language.
- [ ] Run:

```bash
python -m unittest tests.paper_cards.test_server
python tools/paper_cards/server.py
```

- [ ] Expected local URL:

```text
http://127.0.0.1:8768/
```

## Task 7: Migrate Search and Reports

**Files:**

- Modify: `tools/paper_cards/card_tool.py`
- Modify: `tools/paper_cards/app.js`
- Modify: `tools/paper_cards/server.py`
- Create through tool: `paper_cards/search_queue.json`

**Steps:**

- [ ] Add `search-report` command.
- [ ] Add queue editing API endpoints.
- [ ] Add web UI queue filters for `candidate`, `link_verified`, `needs_search`, `rejected`, `promoted`.
- [ ] Ensure queue promotion creates a package manifest item, not a direct write to `data/papers.yaml`.
- [ ] Run:

```bash
python tools/paper_cards/card_tool.py search-report
python -m unittest tests.paper_cards.test_card_tool tests.paper_cards.test_server
```

## Task 8: Update Site and Docs References

**Files:**

- Modify: `README.md`
- Modify: `README_zh.md`
- Modify: `CONTRIBUTING.md`
- Modify: `docs/contributor_sop.md`
- Modify: `docs/contributor_sop_zh.md`
- Modify: `.github/PULL_REQUEST_TEMPLATE.md`

**Steps:**

- [ ] Replace old card instructions with bilingual paper-card instructions.
- [ ] Replace old card paths with `paper_cards/sources/<entry_id>/`.
- [ ] Explain package download workflow.
- [ ] Explain Ask link separation.
- [ ] Search for stale old card text:

```bash
rg -n "cards/|Release cards|Verifier cards|render_cards|add_card_ask_links|L5 audit-ready card|Ask about this paper" README.md README_zh.md CONTRIBUTING.md docs .github
```

- [ ] Expected result: no stale references to the deleted card framework.

## Task 9: Update Renderers and Validators

**Files:**

- Modify: `scripts/validate_data.py`
- Modify: `scripts/render_site.py`
- Modify: `scripts/render_papers.py`
- Modify: `scripts/render_readme.py`
- Modify: `.github/workflows/validate.yml`

**Steps:**

- [ ] Remove dependency on old `card_inventory`.
- [ ] Add paper-card source inventory from `paper_cards/sources/`.
- [ ] Add validation for bilingual section source completeness.
- [ ] Remove generation and checking of `docs/assets/cards.json`.
- [ ] Replace old workflow steps:

```yaml
- name: Check bilingual paper cards
  run: python tools/paper_cards/card_tool.py check
```

- [ ] Run:

```bash
python scripts/validate_data.py
python tools/paper_cards/card_tool.py check
python scripts/render_site.py --check
python scripts/render_papers.py --check
python scripts/render_readme.py --check
```

## Task 10: Final Verification

**Commands:**

```bash
python tools/paper_cards/card_tool.py check
python tools/paper_cards/card_tool.py package --entries <entry_id>
python -m unittest tests.paper_cards.test_card_tool tests.paper_cards.test_server
python scripts/validate_data.py
python scripts/render_site.py --check
python scripts/render_papers.py --check
python scripts/render_readme.py --check
git diff --check
```

**Expected result:**

- Bilingual source files validate.
- Python assembly works for English and Chinese.
- Package zip downloads from the web UI.
- The web UI still feels like the previous local review frontend, with only small workflow-specific changes.
- Old card framework references are gone.
- Ask the Atlas links remain available in assembled card output.
- No generated assembled card is tracked as source.

## Migration Value From Old Framework

Keep these old-framework ideas:

- `data/papers.yaml` as metadata source.
- Official-link priority and no guessed links.
- `unknown`, `needs_search`, `partial`, and visible missing evidence.
- `data/categories.yaml` and `data/research_tracks.yaml` for filtering and navigation.
- Search queue and link coverage reporting.
- BibTeX and citation audit discipline.
- `--check` mode for generated artifacts.
- CI validation habit.
- Ask the Atlas entry links.

Remove these old-framework parts:

- Multiple card type directories.
- Metadata-heavy card prose.
- Hand-written assembled cards.
- Old Ask block insertion script.
- Old card index JSON files.
- Old level-review utility.

## Success Criteria

- A reviewer can edit Chinese paper-card text only through `_ch.md` files or the local web editor.
- A reviewer can inspect English source sections, but the web UI does not modify them.
- The local web editor reuses the previous review page's practical layout and controls rather than replacing it with a new frontend concept.
- Python is the only mechanism that assembles full cards.
- A downloaded package contains both English and Chinese assembled cards plus all source sections.
- The project source tree does not store assembled cards as maintained data.
- Old `cards/` framework is gone.
- Search/discovery discipline from the old framework survives in the new `paper_cards` workflow.
