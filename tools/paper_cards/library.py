"""Card-local storage for the Paper Card library."""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError:  # pragma: no cover - dependency is required by the project
    yaml = None


RECORD_NAMES = {"header_zh", "institutions", "queue", "review"}


def project_root(root: Path | str | None = None) -> Path:
    return Path(root) if root is not None else Path(__file__).resolve().parents[2]


def library_root(root: Path | str | None = None) -> Path:
    return project_root(root) / "paper_cards" / "library"


def cards_root(root: Path | str | None = None) -> Path:
    return library_root(root) / "cards"


def card_dir(entry_id: str, root: Path | str | None = None) -> Path:
    cleaned = str(entry_id or "").strip()
    if not cleaned or cleaned != Path(cleaned).name or cleaned in {".", ".."}:
        raise ValueError("entry_id must be a simple directory name")
    return cards_root(root) / cleaned


def load_json_file(path: Path, default: dict[str, Any] | None = None) -> dict[str, Any]:
    if not path.exists():
        return dict(default or {})
    payload = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(payload, dict):
        raise ValueError(f"{path}: expected a JSON object")
    return payload


def load_yaml_file(path: Path) -> dict[str, Any]:
    if yaml is None:
        raise RuntimeError("PyYAML is required to read the Card library")
    payload = yaml.safe_load(path.read_text(encoding="utf-8"))
    if not isinstance(payload, dict):
        raise ValueError(f"{path}: expected a YAML object")
    return payload


def category_options(root: Path | str | None = None) -> list[dict[str, Any]]:
    payload = load_yaml_file(library_root(root) / "categories.yaml")
    categories = payload.get("paper_categories")
    if not isinstance(categories, list):
        raise ValueError("categories.yaml: paper_categories must be a list")
    return [item for item in categories if isinstance(item, dict) and item.get("id")]


def clean_category_ids(value: Any, root: Path | str | None = None) -> list[str]:
    category_ids = value if isinstance(value, list) else []
    cleaned = [str(item).strip() for item in category_ids if str(item).strip()]
    if len(cleaned) > 2:
        raise ValueError("分类最多保留两个")
    if len(set(cleaned)) != len(cleaned):
        raise ValueError("分类不能重复")
    known = {str(item["id"]) for item in category_options(root)}
    unknown = [category_id for category_id in cleaned if category_id not in known]
    if unknown:
        raise ValueError(f"未知分类：{', '.join(unknown)}")
    return cleaned


def load_card(entry_id: str, root: Path | str | None = None) -> dict[str, Any]:
    directory = card_dir(entry_id, root)
    paper = load_yaml_file(directory / "paper.yaml")
    if paper.get("id") != entry_id:
        raise ValueError(f"{directory / 'paper.yaml'}: id must match directory name")
    paper["category_ids"] = clean_category_ids(paper.get("category_ids"), root)
    return {
        "paper": paper,
        "header_zh": load_json_file(directory / "header_zh.json"),
        "institutions": load_json_file(directory / "institutions.json"),
        "queue": load_json_file(directory / "queue.json"),
        "review": load_json_file(directory / "review.json"),
        "sources": directory / "sources",
    }


def load_cards(root: Path | str | None = None) -> dict[str, dict[str, Any]]:
    directory = cards_root(root)
    if not directory.exists():
        return {}
    return {path.name: load_card(path.name, root) for path in sorted(directory.iterdir()) if path.is_dir()}


def save_card_paper(entry_id: str, paper: dict[str, Any], root: Path | str | None = None) -> dict[str, Any]:
    """Persist the canonical metadata record for one Card."""
    if yaml is None:
        raise RuntimeError("PyYAML is required to write the Card library")
    if not isinstance(paper, dict):
        raise ValueError("paper record must be an object")
    cleaned = dict(paper)
    if cleaned.get("id") != entry_id:
        raise ValueError("paper id must match the Card directory")
    cleaned["category_ids"] = clean_category_ids(cleaned.get("category_ids"), root)
    batch = cleaned.get("batch")
    if isinstance(batch, dict):
        batch = dict(batch)
        if cleaned["category_ids"]:
            if batch.get("primary_category_id") not in cleaned["category_ids"]:
                batch["primary_category_id"] = cleaned["category_ids"][0]
        else:
            batch.pop("primary_category_id", None)
        cleaned["batch"] = batch
    path = card_dir(entry_id, root) / "paper.yaml"
    path.write_text(
        yaml.safe_dump(cleaned, allow_unicode=True, sort_keys=False, width=120),
        encoding="utf-8",
    )
    return cleaned


def save_card_record(
    entry_id: str,
    name: str,
    record: dict[str, Any],
    root: Path | str | None = None,
) -> dict[str, Any]:
    if name not in RECORD_NAMES:
        raise ValueError(f"unsupported Card record: {name}")
    if not isinstance(record, dict):
        raise ValueError(f"{name} record must be an object")
    path = card_dir(entry_id, root) / f"{name}.json"
    path.write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return record
