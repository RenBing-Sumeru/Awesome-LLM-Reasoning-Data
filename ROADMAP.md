# Roadmap

This roadmap keeps the repository focused on becoming a high-signal, citable learning atlas for post-training reasoning data. The goal is not to make the longest paper list. The goal is to make the most reusable map of data objects, verifier contracts, construction recipes, and audit risks.

## North Star

Readers should be able to use this repository to answer five questions quickly:

1. What kinds of post-training reasoning data exist?
2. Which papers or reports define each subfield?
3. What data object, verifier, reward, judge, environment, or benchmark does each work expose?
4. Which links, code, data, cards, and metadata are verified?
5. What can fail through contamination, hidden lineage, verifier gaming, reward hacking, or weak reproducibility?

## High-Impact Milestones

| Priority | Milestone | Why it matters |
|---:|---|---|
| P0 | Keep public hygiene clean: no private planning files, no prompt/spec artifacts, no local OS metadata. | Public trust matters for an Awesome repository. |
| P0 | Keep README, `papers/`, cards, site data, and reports generated from the same metadata source. | Readers should not see conflicting counts or stale links. |
| P1 | Promote the most important `L1_link_verified` entries to `L4_carded` or `L5_audit_ready`. | Deep summaries are what make the atlas useful beyond a paper list. |
| P1 | Add official code/data/Hugging Face/project links for already verified papers. | Artifact links make the repository reusable for builders. |
| P1 | Strengthen thin subfields before adding long-tail seeds. | A balanced taxonomy is more useful than raw volume. |
| P2 | Improve bilingual polish in `README_zh.md`. | The repository should be usable for both Chinese and English readers. |
| P2 | Add more paper-specific BibTeX and citation metadata. | Better citation metadata increases reuse in surveys and reading groups. |
| P2 | Enable and advertise GitHub Pages for the searchable atlas. | A browsable site makes the project easier to share. |

## Content Priorities

Use this order when deciding what to add next:

1. Core papers in under-filled subfields with official paper links.
2. Verified artifacts for existing core entries: code, data, model, Hugging Face, project page.
3. Cards for high-impact entries that already have official links.
4. Audit details for verified entries: split, license, lineage, decontamination, known failure modes.
5. Representative negative results, contamination studies, and verifier failures.
6. Frontier model reports only when the public report reveals useful data/reward/recipe information.

## Curation Rules

- Prefer fewer verified, useful entries over many guessed links.
- Keep `needs_search` visible until official primary sources are pinned.
- Do not promote an entry as curated unless it explains data object, feedback contract, training use, and audit risk.
- Keep the 14-track taxonomy for browsing, but assign every library paper exactly one primary review label: 03 programmatically verifiable outcome data or 10 scaling/RLVR/test-time compute.
- Avoid generic LLM reasoning papers that do not expose a post-training data, verifier, reward, environment, benchmark, or audit lesson.

## Release Checklist

Before publishing a public update, run:

```bash
python3 scripts/validate_data.py
python3 scripts/render_readme.py --check
python3 scripts/render_papers.py --check
python3 scripts/render_site.py --check
python3 scripts/render_cards.py --check
python3 scripts/check_links.py --soft
node --check docs/assets/site.js
git diff --check
```

For larger releases, also run a live external-link sample:

```bash
python3 scripts/check_links.py --live --limit 100 --workers 8
```

## What Not To Add

- Private implementation notes, prompt/spec files, or local scratch files.
- Unverified arXiv, GitHub, DOI, Hugging Face, or project links.
- Generic reasoning-method papers without a data/verifier/reward/environment/audit contribution.
- Duplicate seed entries when a verified curated entry already exists.
- Long-tail volume that makes important subfields harder to scan.
