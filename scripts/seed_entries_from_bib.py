#!/usr/bin/env python3
import re, shutil
from common import ROOT, PARENT, load_yaml_json, write_json
from build_bib_index import parse

def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", re.sub(r"[{}]", "", s).lower()).strip("-")[:80] or "unknown"

def norm_title(s):
    s = re.sub(r"[{}]", "", s or "")
    s = re.sub(r"[^a-z0-9]+", " ", s.lower())
    return re.sub(r"\s+", " ", s).strip()

def arxiv(*parts):
    m = re.search(r"arXiv[:\s]*([0-9]{4}\.[0-9]{4,5})", " ".join(parts), re.I)
    return f"https://arxiv.org/abs/{m.group(1)}" if m else None

def quality(row):
    score = 0
    tags = set(row.get("tags") or [])
    audit = row.get("audit") or {}
    status = row.get("status") or ""
    artifacts = row.get("artifacts") or {}
    if "seeded-from-bib" not in tags:
        score += 100
    if status in {"verified", "full"}:
        score += 50
    elif status == "partial":
        score += 20
    if audit.get("citation_status") == "verified":
        score += 20
    score += sum(1 for v in artifacts.values() if v)
    return score

def merge_prefer(a, b):
    keep, drop = (a, b) if quality(a) >= quality(b) else (b, a)
    keep = dict(keep)
    keep_artifacts = dict(keep.get("artifacts") or {})
    for key, value in (drop.get("artifacts") or {}).items():
        if value and not keep_artifacts.get(key):
            keep_artifacts[key] = value
    keep["artifacts"] = keep_artifacts
    notes = ((keep.get("audit") or {}).get("notes") or "").strip()
    dropped_id = drop.get("id", "unknown")
    if dropped_id not in notes:
        audit = dict(keep.get("audit") or {})
        audit["notes"] = (notes + " " if notes else "") + f"Deduplicated title collision; dropped lower-confidence id: {dropped_id}."
        keep["audit"] = audit
    return keep

def draft(e):
    title = re.sub(r"[{}]", "", e.get("title") or "unknown")
    y = re.search(r"\d{4}", e.get("year") or "")
    year = int(y.group(0)) if y else None
    return {"id": f"{slug(title)}-{year or 'unknown'}", "title": title, "year": year, "venue": e.get("journal") or "unknown", "authors": [], "source_role": ["survey_background"], "verification_contract": ["unknown"], "supervision_granularity": ["unknown"], "domains": [], "training_use": ["unknown"], "construction_layer": ["release_audit"], "artifacts": {"paper": None, "arxiv": arxiv(e.get("journal", ""), e.get("note", "")), "code": None, "data": None, "project": None, "huggingface": None, "doi": None}, "data_object": {"prompt_source": "unknown", "trace_author": "unknown", "answer_format": "unknown", "process_fields": [], "environment_or_substrate": "unknown", "verifier_or_reward": "unknown", "terminal_predicate": "unknown"}, "recipe_metadata": {"base_model": "unknown", "teacher": "unknown", "generator": "unknown", "filtering_rule": "unknown", "sampling_protocol": "unknown", "rollout_count": None, "temperature": None, "inference_budget": None, "optimizer_or_scaffold": "unknown"}, "audit": {"source_mixture": "unknown", "split": "unknown", "decontamination": "unknown", "license": "unknown", "lineage": "unknown", "known_failure_modes": [], "citation_status": "verified" if e.get("verified_bib") else "needs_verification", "confidence": "medium" if e.get("verified_bib") else "low", "notes": f"Seeded from BibTeX key {e.get('key')}."}, "inclusion_reason": "Seeded from local BibTeX for later atlas classification; needs curator review.", "related": [], "tags": ["seeded-from-bib"], "status": "partial" if e.get("verified_bib") else "needs_metadata"}

def main():
    p = ROOT / "data/papers.yaml"
    existing = load_yaml_json(p)
    if p.exists():
        shutil.copyfile(p, ROOT / "data/papers.yaml.bak")
    candidates = list(existing)
    for path, verified in [(PARENT / "EMNLP/build/references_verified.bib", True), (PARENT / "EMNLP/build/references.bib", False)]:
        for e in parse(path, verified)[0]:
            e["verified_bib"] = verified
            candidates.append(draft(e))
    by_title = {}
    removed = 0
    for row in candidates:
        key = norm_title(row.get("title")) or row.get("id")
        if key in by_title:
            by_title[key] = merge_prefer(by_title[key], row)
            removed += 1
        else:
            by_title[key] = row
    by_id = {}
    for row in by_title.values():
        if row["id"] in by_id:
            by_id[row["id"]] = merge_prefer(by_id[row["id"]], row)
            removed += 1
        else:
            by_id[row["id"]] = row
    write_json(p, sorted(by_id.values(), key=lambda x: (x.get("year") or 9999, x["id"])))
    print(f"papers: {len(by_id)}")
    print(f"deduplicated: {removed}")

if __name__ == "__main__":
    main()
