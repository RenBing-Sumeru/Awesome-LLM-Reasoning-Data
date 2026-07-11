# Review Save Latency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Card saves return without synchronously rebuilding the full Review index.

**Architecture:** `refresh_after_card_write` invalidates the derived index and rebuilds only the changed Card cache. `review_index_payload` retains ownership of rebuilding the index on a later list read when its cache is absent or stale.

**Tech Stack:** Python 3, `unittest`, Card-local JSON/YAML storage, derived JSON Review cache.

## Global Constraints

- Preserve the existing Card data format and Review UI behavior.
- A save response must contain the freshly written Card.
- A later entries read must rebuild the invalidated index from canonical Cards.
- Do not push to GitHub.

---

### Task 1: Defer global Review-index rebuilding from Card saves

**Files:**
- Modify: `tools/paper_cards/server.py:200-205`
- Modify: `tests/paper_cards/test_server.py`

**Interfaces:**
- Consumes: `refresh_after_card_write(root, entry_id)` after Card-local file writes.
- Produces: invalidated `review-index.json` plus fresh `cards/<entry_id>.json` cache.

- [ ] **Step 1: Write the failing behavior test**

Add a test that patches `refresh_review_index` and asserts a successful Card write does not call it, removes the stale Review-index cache, and creates a fresh changed-Card cache. Then call `server.entries_payload(root)` and assert the index is rebuilt with the changed Card.

```python
with mock.patch.object(server, "refresh_review_index") as refresh:
    saved = server.save_chinese_sections(entry_id, {"01_problem_ch": "updated"}, root)
self.assertFalse(refresh.called)
self.assertFalse(server.review_cache_path(root).exists())
self.assertIn("updated", saved["card"]["sections"]["ch"]["01_problem_ch"])
self.assertIn(entry_id, {item["id"] for item in server.entries_payload(root)["entries"]})
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `python3 -m unittest tests.paper_cards.test_server.PaperCardServerTest.test_save_invalidates_index_without_full_refresh`

Expected: FAIL because `refresh_after_card_write` currently calls `refresh_review_index`.

- [ ] **Step 3: Make the minimal server change**

Replace the synchronous full refresh with:

```python
invalidate_review_index(root)
if entry_id:
    _card_cache_payload(entry_id, root)
```

- [ ] **Step 4: Run focused and server tests**

Run: `python3 -m unittest tests.paper_cards.test_server tests.paper_cards.test_frontend_ui`

Expected: all tests pass.

- [ ] **Step 5: Measure the fast path and commit locally**

Run: `python3 -m unittest discover -s tests/paper_cards -p 'test_*.py' && git diff --check`

Expected: all tests pass and diff check has no output.

Run: `git add tools/paper_cards/server.py tests/paper_cards/test_server.py docs/superpowers && git commit -m "perf: defer Review index rebuild after saves"`

Expected: commit is local only; do not run `git push`.
