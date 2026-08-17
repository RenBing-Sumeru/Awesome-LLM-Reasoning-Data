# Developing

How this repository is generated. `README.md` is the reader-facing front page and is
itself generated; edit `scripts/render_docs.py` rather than the README.

Bilingual paper cards for post-training reasoning data, the bilingual site, and the
GitHub-facing documents generated from them. Part of
[Awesome-LLM-Reasoning-Data](https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data);
each card answers one question about a paper: what data object it releases, and
what verifies that object.

```text
paper_cards/
├── atlas.yaml              # publishing rules: integrated tracks, exclusions, detail blocks
├── library/                # the only source of truth
│   ├── categories.yaml     # the 14 research tracks
│   ├── vocabulary.yaml     # controlled vocabulary for the 5 classification facets
│   ├── reading_paths.yaml  # curated routes, stored as facet queries
│   └── cards/<entry_id>/
│       ├── paper.yaml          # metadata, facets, data object, recipe, audit ledger
│       ├── header_zh.json      # Chinese summary, reading priority, paper type
│       ├── institutions.json
│       ├── queue.json          # curation verdict — never written by these tools
│       ├── review.json         # review state — never written by these tools
│       └── sources/            # 9 English + 9 Chinese Markdown sections
├── scripts/
│   ├── atlas/              # shared: config, cards, vocabulary, labels, markdown, paths, cover
│   ├── data/               # generator inputs: Chinese replacements, the Ask page shell
│   ├── build_site.py       # library -> site
│   ├── render_docs.py      # library -> README, track pages, cover art
│   ├── normalize_library.py# fold vocabulary, fix ids and summary fields
│   ├── merge_batches.py    # resolve an incoming batch into the library
│   ├── dedupe_papers.py    # collapse one paper filed under several entry_ids
│   ├── inspect_batches.py  # read-only survey of an incoming batch
│   └── serve.py            # local preview
├── incoming/               # batch drop zone; archive/ holds merged batches
├── papers/                 # generated — one browsable page per track, both languages
├── assets/                 # generated — README cover art
├── site/                   # generated — safe to delete and rebuild
├── reports/                # generated — build, merge, and normalization findings
└── .backup/                # every card a tool overwrote, by timestamp
```

## Running it

```bash
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
.venv/bin/python scripts/build_site.py            # regenerate site/
.venv/bin/python scripts/render_docs.py           # regenerate README, papers/, assets/
.venv/bin/python scripts/build_site.py --check    # fail if site/ drifts from library/
.venv/bin/python scripts/render_docs.py --check   # fail if the documents drift
.venv/bin/python scripts/serve.py                 # preview at http://127.0.0.1:8787
```

The pages fetch JSON, so they need HTTP rather than `file://`. Use `serve.py`
rather than `python -m http.server`: the latter sends only `Last-Modified`, which
lets a browser keep showing a previous build without revalidating. `serve.py`
sends `no-store` and refuses to answer `304`. Every rebuild also stamps a content
digest onto the asset URLs (`site.js?v=…`), and `site.js` carries that stamp onto
its own data requests, so a cached `entries.json` can never be paired with a
newer `site.js`.

## What the site publishes

`build_site.py` emits a lean `entries.json` for search and filtering plus one
`site/assets/data/cards/<entry_id>.json` per card, loaded on demand when a reader
opens the detail drawer.

Three switches in `atlas.yaml` control what reaches it.

| Key | Effect |
|---|---|
| `integrated_tracks` | Tracks absent from the list render as pending even when a cross-tagged card mentions them, so the coverage figure stays honest. |
| `excluded_search_status`, `exclude_unreviewed`, `excluded_ids` | A card rejected by any curator, or that nobody ruled on, is dropped from the pool: no entry, no detail file, no count. |
| `show_detail_blocks` | While `false`, the curated data object, construction recipe, audit ledger, gap list, and verification record are neither rendered nor written into `site/assets/data/`, so unpublished curation cannot be read out of the JSON. |

## Reading paths

`library/reading_paths.yaml` stores each route as a facet query rather than a list of
papers, so a route re-resolves on every build and a new batch joins the routes it
belongs to without anyone editing a list. Keys inside `match` are ANDed, values within
a key are ORed, and results are ordered by reading priority, then by how many artifacts
the card pins, then by year. The site renders them in section 02 and the README repeats
them as collapsible lists.

## Ask the Atlas

`site/ask/` is the assistant's shell, generated from `scripts/data/ask.html`. It calls
no backend: it reads `mode`, `entry`, and `question` from the query string, keeps history
in localStorage, and renders a demo answer that is labelled as such. Card drawers and the
search results link into it with a prefilled question, so the reading surface and the
assistant are already connected when the backend arrives.

The backend on the upstream `wsf` branch is deliberately **not** merged: it needs
Postgres, Upstash Redis, GitHub OAuth, a model provider, and around fifty environment
variables. Bring it in once the site is published and the model budget is decided.

## Controlled vocabulary

`library/vocabulary.yaml` is the single definition of what a card may put in
`source_role`, `verification_contract`, `supervision_granularity`,
`training_use`, and `construction_layer`. Each facet lists canonical values with
bilingual labels plus the synonyms that fold onto them, because track owners
arrived with slightly different wordings. `verification_contract` is deliberately
kept to five values: a card has to commit to who checks the answer rather than
describe the reward's shape.

`build_site.py` fails when a published card uses a value that is neither
canonical nor a listed synonym, so a new batch cannot quietly widen the
vocabulary.

## Language separation

The two pages never mix languages. Chinese content comes only from
`header_zh.json` and `sources/*_ch.md`; English prose comes only from
`paper.yaml` and `sources/*.md`. A field with no counterpart is omitted rather
than filled from the other language, which is why `why_it_matters` and
`inclusion_reason` appear on the English page only. Paper titles stay in their
original language. The drawer's own EN/中文 toggle switches the whole card
between the two, so side-by-side reading stays possible without mixing a page.

## Adding a track

Batches arrive in different shapes, and the same paper often turns up in two of
them because two track owners each claimed it.

```bash
.venv/bin/python scripts/inspect_batches.py "incoming/<batch>"        # read-only survey
.venv/bin/python scripts/merge_batches.py  "incoming/<batch>"         # dry run
.venv/bin/python scripts/merge_batches.py  "incoming/<batch>" --apply
.venv/bin/python scripts/normalize_library.py                         # dry run
.venv/bin/python scripts/normalize_library.py --apply
.venv/bin/python scripts/dedupe_papers.py                             # dry run
.venv/bin/python scripts/dedupe_papers.py --apply
.venv/bin/python scripts/build_site.py
.venv/bin/python scripts/render_docs.py
```

`inspect_batches.py` reports card counts, track coverage, schema gaps, review
status, and collisions with the library. `merge_batches.py` resolves each
`entry_id` to a single card: the copy with the most content wins and brings its
own `category_ids`, a `rejected` verdict from any curator keeps the entry out of
the published pool, and an entry nobody ruled on stays unpublished. The ids it
prints under `excluded_ids` belong in `atlas.yaml`. Then add each new track id to
`integrated_tracks`.

`dedupe_papers.py` catches the case `merge_batches.py` cannot: two track owners each
wrote a card for the same paper under their own `entry_id`. The richest card survives,
absorbs the others' tracks, and adopts any artifact link they held and it lacked, since
a duplicate usually cites the same paper through a different venue.

`normalize_library.py` brings the new cards onto the shared conventions: facet
synonyms folded onto canonical values, a facet stored as a bare string turned
into a list, an arXiv or proceedings identifier stripped off an `entry_id`,
`one_line_summary` established as the only summary field, and any replacement
Chinese summary in `scripts/data/zh_summaries.yaml` written into
`header_zh.json`. It only touches published cards and never writes `queue.json`
or `review.json`, so every manual review verdict survives. Both tools are dry-run
by default and copy each card they overwrite into `.backup/<timestamp>/`.

Nothing else needs changing: track rows, facet counts, filter options, the
coverage chart, and the hero statistics are all derived from the library.

## Reports

Everything under `reports/` is regenerated, and it is where leftover work lives.

| File | Contents |
|---|---|
| `library_report.md` | Cards held back and why, facet vocabulary folded at build time, Chinese summaries still carrying English, `entry_id`s with an arXiv suffix. |
| `merge_report.md` | Duplicate resolution per `entry_id`, cards added or replaced, track distribution after the merge. |
| `dedupe_report.md` | Papers filed under several `entry_id`s, which card survived, and the links it adopted. |
| `normalize_report.md` | Every edit by kind, `entry_id` renames, renames skipped because the target already exists, removed divergent `one_line` text, and papers filed under more than one `entry_id`. |
