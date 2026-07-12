# Paper Card SOP

## Optional offline delivery

The Card-local library below remains the only editable and canonical store.
When the maintainer explicitly requests the external four-file reading format,
generate a derived delivery matching `../paper-card-package-20260710-141650/`:

```text
paper-card-package-<YYYYMMDD-HHMMSS>/
├── cards/
│   ├── <entry_id>_en.md
│   └── <entry_id>_ch.md
└── review/
    ├── <entry_id>_human_annotation.md
    └── <entry_id>_zh_extra_fields.md
```

```bash
python3 -B tools/paper_cards/export_package.py \
  --output paper-card-package-<YYYYMMDD-HHMMSS>
python3 -B tools/paper_cards/export_package.py \
  --check paper-card-package-<YYYYMMDD-HHMMSS>
```

This package is an offline delivery artifact, not a Review download state,
shared metadata index, or import source. New exports keep human annotation
pending unless a real manual decision already exists in the Card-local record.

### Full prose rebuild

Only on an explicit maintainer request, back up the current Card directories
outside the repository and use `tools/paper_cards/rebuild_cards.py` to rewrite
the 18 bilingual sections through a staging root. Run `library-normalize`,
Card check, and data validation before replacing the live directories. The
rewritten prose must be paper-specific and must not retain internal collection
labels such as `Decision boundary`, `L4 collection note`, or `Card-local`.
Structural validation alone is insufficient: inspect all staged bilingual
pairs and reject the rebuild if a Chinese section summarizes, truncates, or
otherwise fails to translate its rebuilt English counterpart completely.

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
   01, 02, 03, and 05 must contain evidence-backed L4 detail. Write and verify
   the English source first, then make each matching `*_ch.md` file a complete
   translation of that current English revision. Do not use a shorter Chinese
   summary as the corresponding section.
4. Fill `header_zh.json`, `institutions.json`, and `queue.json` in the same
   Card. The Review UI is the preferred editor for Chinese fields.
   `one_line_summary_ch`, `reading_priority_ch`, `paper_type_ch`,
   `best_for_ch`, `confidence_ch`, and `authors_ch` are required; institutions
   must be listed or explicitly marked with `no_institution: true`.
5. Keep review state in `review.json`; validation reports are calculated on
   demand and are never maintained as a global cache.

## Bilingual fidelity gate

A Card is not complete merely because all 18 source files exist. Before L4 or
before replacing a rebuilt staging tree, compare every English/Chinese pair.

- Preserve every claim, limitation, qualifier, number, budget, named entity,
  link meaning, and `needs review` marker from English in Chinese.
- Keep the same section boundary and the same informational paragraph and list
  units. Chinese may reorder words naturally, but it must not merge several
  English paragraphs into a short summary or introduce unsupported claims.
- When an English section changes, update and re-review its Chinese counterpart
  in the same change. The English file is the content baseline for this check.
- Translate the prose around citations, but preserve BibTeX, citation keys,
  URLs, code, model names, dataset names, and numeric values exactly where
  translation would corrupt them.
- Review technical terms in context. Prefer established forms such as
  `rollout`, `checkpoint`, `best-of-N`, `过程监督`, `验证器`, `测试时计算`,
  `RLVR`, `SFT`, `PRM`, and `MCTS`; do not accept literal everyday translations
  that change the technical meaning.
- Full English template sentences must not remain in Chinese prose. English
  acronyms and established proper names are allowed.

`card_tool.py check` and `validate_data.py` remain required, but they validate
structure and records rather than semantic translation completeness. The
bilingual comparison above is a separate mandatory content review.

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
On startup the Python server warms the ignored derived index at
`tmp/paper_cards/review-index.json` before binding the port. Missing or stale
cache data is rebuilt automatically; a failed rebuild stops startup. Manual
Card-folder changes are picked up on the next request.
Server mutations hold `tmp/paper_cards/.card-write.lock` and replace Card and
tmp files atomically. If a different Card changes while one save is in flight,
the server rebuilds the global tmp index rather than combining two versions.
The Review form reads and writes only `queue.json.manual_annotation`; source
collection reasons do not count as manual annotation and never populate the
form.

## V2 hot-plug update

Copy the whole `paper_cards/library/` directory, or one complete
`library/cards/<entry_id>/` directory, into the target V2 checkout. Then run
`library-normalize`, Card check, and data validation. V2 does not import a
shared layout and does not create ZIP exports or a download state.
