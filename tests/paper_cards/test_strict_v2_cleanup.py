from __future__ import annotations

import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

from tools.paper_cards import card_tool


ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = ROOT / "scripts"
if str(SCRIPTS) not in sys.path:
    sys.path.insert(0, str(SCRIPTS))

import render_readme  # noqa: E402


class StrictV2CleanupTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def test_empty_or_missing_card_library_never_loads_shared_metadata(self) -> None:
        for library_state in ("missing", "empty"):
            with self.subTest(library_state=library_state):
                root = self.root / library_state
                (root / "data").mkdir(parents=True)
                (root / "data" / "papers.yaml").write_text("- id: legacy\n", encoding="utf-8")
                if library_state == "empty":
                    (root / "paper_cards" / "library" / "cards").mkdir(parents=True)

                self.assertEqual(card_tool.load_entries(root), {})

    def test_obsolete_generators_and_package_directory_are_absent(self) -> None:
        self.assertFalse((ROOT / "tools/paper_cards/add_programmatically_verifiable_2025_20.py").exists())
        self.assertFalse((ROOT / "tools/paper_cards/add_scaling_rlvr_20.py").exists())
        self.assertFalse((ROOT / "paper_cards/packages").exists())
        self.assertFalse((ROOT / "scripts/render_site_data.py").exists())

    def test_card_tool_help_has_no_package_command(self) -> None:
        result = subprocess.run(
            [sys.executable, str(ROOT / "tools/paper_cards/card_tool.py"), "--help"],
            capture_output=True,
            text=True,
            check=False,
        )

        self.assertNotIn("package", result.stdout)

    def test_migration_cli_only_normalizes_card_local_records(self) -> None:
        result = subprocess.run(
            [sys.executable, str(ROOT / "tools/paper_cards/migrate.py"), "--help"],
            capture_output=True,
            text=True,
            check=False,
        )

        self.assertIn("library-normalize", result.stdout)
        self.assertNotIn("library-init", result.stdout)
        self.assertNotIn("library-verify", result.stdout)
        self.assertNotIn("library-cutover", result.stdout)

    def test_server_has_no_hidden_downgrade_or_initialization_routes(self) -> None:
        source = (ROOT / "tools" / "paper_cards" / "server.py").read_text(encoding="utf-8")

        self.assertNotIn("downgrade_to_l4_payload", source)
        self.assertNotIn('"/downgrade-l4"', source)
        self.assertNotIn("init_payload", source)
        self.assertNotIn('"/api/init/"', source)

    def test_starter_pack_heading_uses_the_current_card_count(self) -> None:
        starter_count = len(render_readme.starter_packs()[0]["entries"])

        self.assertIn(f"Starter Pack: {starter_count} Must-Read Papers", render_readme.readme_en())
        self.assertIn(f"Starter Pack：{starter_count} 篇必读", render_readme.readme_zh())

    def test_ci_uses_only_current_card_checks(self) -> None:
        workflow = (ROOT / ".github" / "workflows" / "validate.yml").read_text(encoding="utf-8")

        self.assertNotIn("verify-current", workflow)
        self.assertNotIn("test_migrate.py", workflow)
        self.assertIn("python3 -m unittest discover -s tests/paper_cards -p 'test_*.py'", workflow)


if __name__ == "__main__":
    unittest.main()
