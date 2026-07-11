# Review Workflow Simplification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify Review to language-switched merged reading, all-Card download, and a compact manual-annotation action flow.

**Architecture:** Frontend state owns only the active preview language and submits every loaded entry ID to the existing package endpoint. The package writer accepts known Cards at every L level without changing Card status.

**Tech Stack:** Vanilla HTML/CSS/JavaScript, Python 3, `unittest`.

## Global Constraints

- Package every known Card without writing a downloaded state.
- Remove row selection and downloaded UI, but preserve Card-local content and Review promotion.
- Default merged preview language is Chinese and English is selectable.
- Do not push to GitHub.

---

### Task 1: Replace download eligibility with all-Card packaging

**Files:**
- Modify: `tools/paper_cards/card_tool.py:990-1008`
- Modify: `tests/paper_cards/test_card_tool.py`

- [ ] **Step 1: Write a failing L4 package test**

Replace the L4-rejection assertion with:

```python
def test_write_package_accepts_l4_card(self) -> None:
    self.write_complete_sections()
    package = card_tool.write_package(["sample-paper"], root=self.root)
    self.assertTrue(package.exists())
```

- [ ] **Step 2: Verify RED**

Run: `python3 -m unittest tests.paper_cards.test_card_tool.PaperCardToolTest.test_write_package_accepts_l4_card`

Expected: failure because `write_package` only permits L5/L6.

- [ ] **Step 3: Remove the L-level package guard**

Keep unknown-entry checking, then create the same ZIP contents for every known Card.

- [ ] **Step 4: Verify GREEN**

Run: `python3 -m unittest tests.paper_cards.test_card_tool`

Expected: all Card-tool tests pass.

### Task 2: Simplify Review controls and language preview

**Files:**
- Modify: `tools/paper_cards/index.html`
- Modify: `tools/paper_cards/app.js`
- Modify: `tools/paper_cards/style.css`
- Modify: `tests/paper_cards/test_frontend_ui.py`

- [ ] **Step 1: Write failing UI source assertions**

Assert `英文合并版`, `previewLanguage`, and a single `一键下载全部 Card` action are present; assert `state.selected`, row checkbox attributes, `downloadUndownloaded`, `downloadSelected`, `downgradeToL4`, and the detail summary expression are absent. Assert the queue action ordering is save annotation, enter Update, complete review, and that the institution panel follows the annotation controls.

- [ ] **Step 2: Verify RED**

Run: `python3 -m unittest tests.paper_cards.test_frontend_ui`

Expected: failures for absent language toggle and still-present obsolete controls.

- [ ] **Step 3: Apply the smallest layout and state changes**

Render preview with `payload[state.previewLanguage]`; move institution markup below queue annotation; place the three specified Review actions in one action bar; remove selection/download-state code; submit `state.entries.map((entry) => entry.id)` for the one download action.

- [ ] **Step 4: Verify GREEN**

Run: `python3 -m unittest tests.paper_cards.test_frontend_ui`

Expected: all UI tests pass.

### Task 3: Verify and commit locally

**Files:**
- Modify: files from Tasks 1–2 only.

- [ ] **Step 1: Run complete Card checks**

Run: `python3 -m unittest discover -s tests/paper_cards -p 'test_*.py' && python3 tools/paper_cards/card_tool.py check && python3 scripts/validate_data.py && git diff --check`

Expected: tests pass, all Cards are `ok`, data errors are zero, and diff check has no output.

- [ ] **Step 2: Restart local Review and verify it serves**

Run: `PORT=8770 python3 tools/paper_cards/server.py`

Expected: Review cache warmup succeeds and `http://127.0.0.1:8770/` responds.

- [ ] **Step 3: Commit locally**

Run: `git add tools/paper_cards/card_tool.py tools/paper_cards/index.html tools/paper_cards/app.js tools/paper_cards/style.css tests/paper_cards && git commit -m "feat: simplify Review reading and download controls"`

Expected: no push command is run.
