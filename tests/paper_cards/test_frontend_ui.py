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

    def test_complete_button_only_enables_for_l5_manual_annotation(self) -> None:
        app = (ROOT / "tools" / "paper_cards" / "app.js").read_text(encoding="utf-8")

        self.assertIn('valid.level === "L5_review_ready"', app)
        self.assertIn('"等待人工标注"', app)
        self.assertIn('"完成修改该卡片"', app)
        self.assertIn('"已审阅"', app)

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
