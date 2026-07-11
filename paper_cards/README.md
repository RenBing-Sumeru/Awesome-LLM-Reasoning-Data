# Paper Card Library

`paper_cards/library/` is the only maintained store for paper-specific data.

```text
paper_cards/library/
├── categories.yaml
└── cards/
    └── <entry_id>/
        ├── paper.yaml          # canonical paper metadata and category_ids
        ├── header_zh.json      # Chinese header fields
        ├── institutions.json   # institution record
        ├── queue.json          # category mirror plus manual_annotation only
        ├── review.json         # workflow state
        └── sources/            # 9 English + 9 Chinese Markdown sections
```

Each new Card starts with one controlled category from `categories.yaml`. The
Review UI can manually add or remove categories, with zero to two IDs allowed.
There is no Track field. `paper.yaml.category_ids` is authoritative; local
header and queue records are synchronized to it by the editor and by
`library-normalize`.

Run:

```bash
python3 tools/paper_cards/card_tool.py check
python3 scripts/validate_data.py
python3 tools/paper_cards/migrate.py library-normalize
PORT=8770 python3 tools/paper_cards/server.py
```

The Card server writes only the selected Card directory. Validation reports
and `tmp/` caches are derived outputs, not editable sources.

## Hot-plug migration

The Review button **显示可迁移 Card 目录** shows the current canonical path,
`paper_cards/library/`; it does not create a ZIP, Markdown export, or second
Card copy. To move all Card data, copy that entire directory into the target
project. To add one Card, copy `library/cards/<entry_id>/` into the target
library's `cards/` directory after confirming its `category_ids` are defined
by the target `categories.yaml`.

Review writes hold a local Card-library lock and use atomic replacement for
Card records, source sections, and `tmp/` cache snapshots. Raw edits made
outside the server remain supported: an edit to another Card causes the next
server write to rebuild the global tmp index instead of committing a mixed
snapshot.

The Review form writes only `queue.json.manual_annotation`. Existing queue
fields describe collection context and never prefill a human decision; a Card
without this nested record starts as L4 and the form stays blank.

## Updating another V2 checkout

Copy `paper_cards/library/` into the target checkout, then run
`python3 tools/paper_cards/migrate.py library-normalize`, Card check, and data
validation. V2 has no shared-layout importer, ZIP export, or download state.
