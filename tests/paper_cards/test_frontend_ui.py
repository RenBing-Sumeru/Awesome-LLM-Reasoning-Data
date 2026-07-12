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

    def test_reviewed_cards_lock_update_saves_without_legacy_state_ui(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertIn("function canUpdateFields()", app)
        self.assertIn("!isL6Locked()", app)
        self.assertIn("markUpdateButtonDirty", app)
        self.assertNotIn("downloadedCount", html)
        self.assertNotIn("downloadedCount", app)
        self.assertNotIn('"downloaded"', app)
        self.assertNotIn("下载状态已重置为未下载", app)

    def test_paper_pool_defaults_to_l4_review(self) -> None:
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertIn('<option value="needs_annotation" selected>L4 中文 Review</option>', html)

    def test_header_keeps_only_the_workspace_brand_above_paper_pool(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertIn('class="brand"', html)
        self.assertNotIn('class="navlinks"', html)
        self.assertNotIn('class="hero"', html)
        self.assertNotIn('class="stats"', html)
        self.assertNotIn('id="totalCount"', html)
        self.assertNotIn('totalCount:', app)
        self.assertNotIn('sourceCount:', app)
        self.assertNotIn('invalidCount:', app)

    def test_initial_list_renders_from_the_server_injected_tmp_snapshot(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")
        init = app[app.index("async function init() {"):]

        self.assertIn('id="reviewBootstrap"', html)
        self.assertIn('id="workspace" class="workspace" hidden', html)
        self.assertNotIn("正在加载", html)
        self.assertIn("function readReviewBootstrap()", app)
        self.assertIn("const bootstrap = readReviewBootstrap();", init)
        self.assertIn("state.entries = bootstrap.entries || [];", init)
        self.assertIn("state.searchQueue = bootstrap.queue || {};", init)
        self.assertIn('state.activeEntryId = bootstrap.active_entry_id || "";', init)
        self.assertIn("state.activeCard = bootstrap.active_card || null;", init)
        self.assertIn("function markActiveListEntry", app)
        self.assertIn("renderList();", init)
        self.assertIn("renderDetail();", init)
        self.assertIn("els.workspace.hidden = false;", init)

    def test_complete_button_only_enables_for_l5_manual_annotation(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        self.assertIn('valid.level === "L5_review_ready"', app)
        self.assertIn('"等待人工标注"', app)
        self.assertIn('"完成修改该卡片"', app)
        self.assertIn('"已审阅"', app)

    def test_update_and_review_actions_follow_the_compact_workflow_order(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertNotIn('id="downgradeToL4"', html)
        self.assertIn(">L4 中文 Review</option>", html)
        self.assertIn(">L5 已人工标注</option>", html)
        self.assertIn(">L6 已审阅</option>", html)
        self.assertNotIn("function canDowngradeToL4", app)
        self.assertNotIn("/downgrade-l4", app)
        self.assertLess(html.index('class="institution-panel"'), html.index('class="header-zh-panel"'))
        self.assertLess(html.index('id="saveInstitutions"'), html.index('class="header-zh-panel"'))
        self.assertLess(html.index('id="saveHeaderZh"'), html.index('id="sectionTabs"'))
        self.assertLess(html.index('id="saveStatus"'), html.index('id="saveSection"'))
        self.assertLess(html.index('id="saveSection"'), html.index('id="goReviewFromUpdate"'))
        self.assertLess(html.index('id="queueStatusText"'), html.index('id="goUpdateFromReview"'))
        self.assertLess(html.index('id="goUpdateFromReview"'), html.index('id="completeCurrent"'))

    def test_saving_l4_annotation_keeps_it_at_l5_then_moves_to_next_l4(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        self.assertIn("function nextL4Entry", app)
        self.assertIn('validInfo(entry).level === "L4_chinese_review_ready"', app)
        self.assertIn("const next = nextL4Entry(annotatedId);", app)
        self.assertIn("await selectEntry(next.id);", app)
        self.assertIn("已保存人工标注", app)

    def test_l5_list_tag_shows_the_manual_annotation_status(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        self.assertIn("function manualAnnotationStatusLabel", app)
        self.assertIn("manual.search_status", app)
        self.assertIn('class="manual-annotation"', app)
        self.assertIn("manualAnnotationStatusLabel(entry)", app)

    def test_l5_list_does_not_duplicate_an_identical_level_label(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        self.assertIn("const levelStatus = levelLabel(valid);", app)
        self.assertIn("levelStatus !== poolStatus", app)

    def test_review_page_cache_busts_the_workspace_module(self) -> None:
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertRegex(html, r'src="app\.js\?v=[^"]+"')

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

    def test_l6_locks_everything_and_exposes_no_legacy_controls(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        self.assertIn("function isL6Locked", app)
        self.assertIn("function canEditQueueFields", app)
        self.assertIn("function updateFormLockState", app)
        self.assertIn('valid.pool !== "l6"', app)
        self.assertIn("els.queueStatus.disabled = locked || invalid", app)
        self.assertIn("els.queueReason.disabled = locked || invalid", app)
        self.assertIn("els.chineseSection.disabled = locked", app)

    def test_review_shows_the_canonical_library_location_without_download_controls(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertIn('id="libraryLocation"', html)
        self.assertIn(">显示可迁移 Card 目录</button>", html)
        self.assertIn("function showLibraryLocation", app)
        self.assertIn('api("/api/library-location")', app)
        self.assertIn("payload.library_directory", app)
        self.assertNotIn("payload.copy_directory", app)
        self.assertNotIn("downloadAllCards", app)
        self.assertNotIn("window.location.href", app)
        self.assertNotIn("state.selected", app)
        self.assertNotIn("data-select-entry", app)
        self.assertNotIn("downloadUndownloaded", app)
        self.assertNotIn("downloadSelected", app)

    def test_review_manual_annotation_and_balanced_workspace(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")
        css = (ROOT / "tools" / "paper_cards" / "style.css").read_text(encoding="utf-8")
        queue_form = app[app.index("function renderQueueForm()"):app.index("function renderReviewCheckResult")]

        self.assertIn("const manual = record.manual_annotation || {};", queue_form)
        self.assertIn('manual.search_status || ""', queue_form)
        self.assertIn('manual.decision_reason || ""', queue_form)
        self.assertNotIn("record.reason_to_include", queue_form)
        self.assertIn("manual_annotation: {", app)
        self.assertIn('<option value="">待选择</option>', html)
        self.assertLess(
            html.index('class="section-pane english-reference"'),
            html.index('class="section-pane chinese-maintenance"'),
        )
        self.assertIn("align-items: start", css)
        self.assertIn(".paper-list-panel {\n  min-height: 0;", css)
        self.assertIn("max-height: 72vh;", css)

    def test_workspace_uses_page_scroll_with_bounded_long_fields(self) -> None:
        css = (ROOT / "tools" / "paper_cards" / "style.css").read_text(encoding="utf-8")

        self.assertNotIn("height: calc(100vh - 160px);", css)
        self.assertIn(".workspace {\n  display: grid;\n  grid-template-columns: 390px minmax(0, 1fr);\n  gap: 16px;\n  align-items: start;", css)
        self.assertNotIn(".mode-shell {\n  flex: 1;", css)
        self.assertIn("grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);", css)
        fields = css[css.index(".section-readonly,"):css.index(".header-zh-panel,")]
        self.assertIn("height: 420px;", fields)
        self.assertIn("resize: none;", fields)
        self.assertNotIn("min-height: 340px", fields)

    def test_review_preview_keeps_all_content_in_a_bounded_field(self) -> None:
        css = (ROOT / "tools" / "paper_cards" / "style.css").read_text(encoding="utf-8")

        self.assertIn(".markdown-preview {\n  min-height: 420px;", css)
        self.assertIn("max-height: 64vh;", css)
        self.assertNotIn("height: 280px", css)

    def test_review_switches_merged_preview_language_and_keeps_header_compact(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")
        html = (ROOT / "tools" / "paper_cards" / "index.html").read_text(encoding="utf-8")

        self.assertIn('data-preview-language="ch"', html)
        self.assertIn('data-preview-language="en"', html)
        self.assertIn("英文合并版", html)
        self.assertIn('previewLanguage: "ch"', app)
        self.assertIn("payload[state.previewLanguage]", app)
        self.assertNotIn("entry.one_line_summary || entry.why_it_matters", app)
        self.assertNotIn('<p class="summary">', app)


if __name__ == "__main__":
    unittest.main()
