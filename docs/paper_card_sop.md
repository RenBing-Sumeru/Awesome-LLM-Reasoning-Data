# Paper Card SOP

## Source of truth

One paper is one self-contained directory:

```text
paper_cards/library/cards/<entry_id>/
├── paper.yaml
├── header_zh.json
├── institutions.json
├── queue.json
├── review.json
└── sources/
```

`paper.yaml` is the canonical record for title, links, status, summaries, and
`category_ids`. All other files are Card-local views or workflow records. The
global `paper_cards/library/categories.yaml` is a controlled taxonomy, not a
paper metadata index.

## Create or complete a Card

1. Create `paper_cards/library/cards/<entry_id>/paper.yaml` with an `id` equal
   to its directory name and the required metadata fields.
2. Set one controlled `category_ids` value initially. A maintainer can later
   remove it or add a second controlled category; zero to two are valid.
3. Create `sources/` with the 9 English and 9 Chinese section files. Sections
   01, 02, 03, and 05 must contain evidence-backed L4 detail.
4. Fill `header_zh.json`, `institutions.json`, and `queue.json` in the same
   Card. The Review UI is the preferred editor for Chinese fields.
5. Keep review state in `review.json`; validation reports are calculated on
   demand and are never maintained as a global cache.

## Category policy

- Use only IDs in `paper_cards/library/categories.yaml`.
- `paper.yaml.category_ids` is authoritative.
- The editor synchronizes `header_zh.json.category_ids` and
  `queue.json.category_ids` to the Card metadata.
- There is no per-paper Track field. If collection provenance is useful, keep
  an optional `batch` object in `paper.yaml`; its primary category does not
  prevent a second category.

## Review and validation

```bash
python3 tools/paper_cards/card_tool.py check
python3 scripts/validate_data.py
python3 tools/paper_cards/migrate.py library-normalize
PORT=8770 python3 tools/paper_cards/server.py
```

Open `http://127.0.0.1:8770/`. The Update view writes only the active Card.
The Review view records the manual decision in that Card's `queue.json` and
updates its `review.json` state when promotion succeeds.

## One-time repository migration

Only an older checkout with the former shared layout needs this sequence:

```bash
python3 tools/paper_cards/migrate.py library-init
python3 tools/paper_cards/migrate.py library-verify
python3 tools/paper_cards/migrate.py library-cutover --yes
python3 tools/paper_cards/migrate.py library-normalize
```

The cutover command verifies every Card before deleting the legacy files. Do
not recreate a shared metadata file after this point.
