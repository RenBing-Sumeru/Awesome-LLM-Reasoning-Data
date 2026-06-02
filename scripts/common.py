#!/usr/bin/env python3
import json
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
PARENT = ROOT.parent
def load_yaml_json(path):
    text = Path(path).read_text(encoding="utf-8") if Path(path).exists() else ""
    if not text.strip(): return []
    try: return json.loads(text)
    except Exception:
        try:
            import yaml
            return yaml.safe_load(text)
        except Exception as exc:
            raise SystemExit(f"Could not parse {path}: {exc}")
def write_json(path, data):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    Path(path).write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
