# Contributor SOP

## Operating model

The repository is an atlas generated from independent Paper Cards. A Card is
the complete, editable record for one paper; the renderer, static site, reports,
and Review server read the Card library rather than a shared paper index.

| Concern | Canonical location |
| --- | --- |
| Taxonomy | `paper_cards/library/categories.yaml` |
| Paper metadata | `paper_cards/library/cards/<entry_id>/paper.yaml` |
| Bilingual analysis | `paper_cards/library/cards/<entry_id>/sources/` |
| Chinese header, institutions, decision, workflow state | The corresponding local JSON files in the same Card directory |
| Published atlas pages and site assets | Generated from the Card library |

## Add or update a paper

1. Verify primary links from official venues, arXiv, DOI pages, project pages,
   code repositories, or official data releases.
2. Create or update one Card directory. Its `paper.yaml.id` must equal the
   directory name.
3. Record metadata, data object, verification contract, construction details,
   audit notes, official artifacts, summary, and curation status in `paper.yaml`.
4. Start with one category in `category_ids`; manual maintenance may leave zero
   to two taxonomy IDs. Do not create a Track field.
5. Complete the bilingual 9-section source files. Do not invent missing facts;
   state what must be verified next.
6. Fill the local Chinese header and institution records. Add the manual
   decision to the local queue only after it has evidence.

## Card quality bar

For a useful L4 Card, `01_problem`, `02_core_idea`, `03_method`, and
`05_novelty` identify the primary source, data object, feedback contract,
pipeline, artifact checks, reproducibility limits, and concrete novelty. A
title and generic praise are not enough.

Keep the distinction between an official paper link and a reusable release:
links alone do not establish data availability, licenses, splits, or verifier
reliability. Mark unknown facts explicitly.

## Review workflow

Run:

```bash
python3 tools/paper_cards/card_tool.py check
python3 scripts/validate_data.py
PORT=8770 python3 tools/paper_cards/server.py
```

Use the Review UI at `http://127.0.0.1:8770/` to edit Chinese fields, choose up
to two controlled categories, save a manual decision, and promote eligible
Cards. Each write remains in the selected Card directory. Run
`python3 tools/paper_cards/migrate.py library-normalize` after a tooling update
to synchronize local category mirrors and remove deprecated field names.
The Python server checks and warms the ignored derived cache at
`tmp/paper_cards/review-index.json` before it binds the port. A missing or stale
cache is rebuilt automatically; if rebuilding fails, the server exits without
serving a partial list. Direct Card-folder changes are detected on the next
request.

## Generated files

Do not hand-edit generated atlas pages, README files, site assets, inventories,
or reports. Rebuild them from the library:

```bash
python3 scripts/render_papers.py
python3 scripts/collect_sources.py
python3 scripts/summarize_counts.py
python3 scripts/render_readme.py
python3 scripts/render_site.py
```

Then run the matching `--check` commands, link checks, and data validation
before submitting a change.

## Updating a checkout

Use the shared V2 remote only from a clean worktree:

```bash
git status --short
git fetch upstream V2
git merge --ff-only FETCH_HEAD
python3 tools/paper_cards/migrate.py library-normalize
python3 tools/paper_cards/card_tool.py check
python3 scripts/validate_data.py
```

Do not use `pull`, `reset`, or a non-fast-forward merge unless the maintainer
explicitly requests it.
