from __future__ import annotations

from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[2]


class PaperCardFrontendUiTest(unittest.TestCase):
    def test_action_buttons_have_dirty_saved_disabled_states(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        css = (ROOT / "tools" / "paper_cards" / "style.css").read_text(encoding="utf-8")

        self.assertIn("markButtonDirty", app)
        self.assertIn("markButtonSaved", app)
        self.assertIn("updateActionAvailability", app)
        self.assertIn("dataset.state", app)
        self.assertIn('"dirty"', app)
        self.assertIn('"saved"', app)
        self.assertIn('button:disabled', css)
        self.assertIn('[data-state="dirty"]', css)
        self.assertIn('[data-state="saved"]', css)

    def test_update_saves_do_not_reload_or_repaint_the_editor(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        for function_name in ("saveCurrentSection", "saveHeaderZh", "saveInstitutions"):
            start = app.index(f"async function {function_name}()")
            end = app.find("\nasync function ", start + 1)
            block = app[start:] if end == -1 else app[start:end]
            self.assertNotIn("await loadEntries()", block, function_name)
            self.assertNotIn("renderDetail()", block, function_name)
        self.assertIn("syncSavedCard", app)

    def test_reviewed_cards_lock_update_saves_and_download_buttons_enable_for_downloadable_filters(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertIn("function canUpdateFields()", app)
        self.assertIn("!isL6Locked()", app)
        self.assertIn("markUpdateButtonDirty", app)
        self.assertIn("function isDownloadableEntry", app)
        self.assertIn('["annotated", "l6"].includes(validInfo(entry).pool)', app)
        self.assertIn("selectedDownloadableEntries", app)
        self.assertNotIn("L6 card download actions", html)

    def test_paper_pool_defaults_to_l4_review(self) -> None:
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertIn('<option value="needs_annotation" selected>L4 中文 Review</option>', html)

    def test_complete_button_only_enables_for_l5_manual_annotation(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        self.assertIn('valid.level === "L5_review_ready"', app)
        self.assertIn('"等待人工标注"', app)
        self.assertIn('"完成修改该卡片"', app)
        self.assertIn('"已审阅"', app)

    def test_review_can_downgrade_l5_to_l4_and_pool_filter_labels_show_levels(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertIn('id="downgradeToL4"', html)
        self.assertIn(">L4 中文 Review</option>", html)
        self.assertIn(">L5 已人工标注</option>", html)
        self.assertIn(">L6 已审阅</option>", html)
        self.assertIn("function canDowngradeToL4", app)
        self.assertIn('valid.level === "L5_review_ready"', app)
        self.assertIn("/downgrade-l4", app)
        self.assertIn("降级到 L4", app)

    def test_saving_l4_annotation_keeps_it_at_l5_then_moves_to_next_l4(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        self.assertIn("function nextL4Entry", app)
        self.assertIn('validInfo(entry).level === "L4_chinese_review_ready"', app)
        self.assertIn("const next = nextL4Entry(annotatedId);", app)
        self.assertIn("await selectEntry(next.id);", app)
        self.assertIn("已保存人工标注", app)

    def test_category_editor_allows_zero_to_two_controlled_values(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertIn("function renderCategoryEditor", app)
        self.assertIn("function selectedCategoryIds", app)
        self.assertIn("category_ids: selectedCategoryIds()", app)
        self.assertIn('data-category-id=', app)
        self.assertIn("selectedCategories.length >= 2", app)
        self.assertIn('class="category-context"', html)
        self.assertNotIn("function renderCategoryReadOnly", app)
        self.assertNotIn('type="radio" name="categoryId"', app)

    def test_l6_filter_sorts_by_review_time_descending(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        self.assertIn("function entriesForCurrentView()", app)
        self.assertIn('els.stateFilter.value !== "l6"', app)
        self.assertIn("reviewSortTimestamp", app)
        self.assertIn("reviewed_at", app)
        self.assertIn("rightTime.localeCompare(leftTime)", app)

    def test_l6_locks_everything_except_download_controls(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        self.assertIn("function isL6Locked", app)
        self.assertIn("function canEditQueueFields", app)
        self.assertIn("function updateFormLockState", app)
        self.assertIn('valid.pool !== "l6"', app)
        self.assertIn("els.queueStatus.disabled = locked || invalid", app)
        self.assertIn("els.queueReason.disabled = locked || invalid", app)
        self.assertIn("els.chineseSection.disabled = locked", app)

    def test_download_targets_selected_downloadable_cards_first(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertIn("function selectedDownloadableEntries(includeDownloaded = true)", app)
        self.assertIn("function downloadTargetIds(includeDownloaded, selectedOnly = false)", app)
        self.assertIn("if (selectedOnly) return selected.map((entry) => entry.id)", app)
        self.assertIn("downloadableEntries(includeDownloaded).map((entry) => entry.id)", app)
        self.assertIn("downloadSelected", app)
        self.assertIn('id="downloadSelected"', html)
        self.assertIn(">下载选中</button>", html)
        self.assertNotIn(">标注已下载</button>", html)
        self.assertIn("没有可下载的卡片。", app)
        self.assertIn("没有选中可下载的卡片。", app)


if __name__ == "__main__":
    unittest.main()
