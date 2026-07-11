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
        ├── queue.json          # manual review decision
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

The Card server writes only the selected Card directory. Download packages and
validation reports are generated outputs, not editable sources.

## One-time legacy import

An older checkout can be converted only after its records have been backed up:

```bash
python3 tools/paper_cards/migrate.py library-init
python3 tools/paper_cards/migrate.py library-verify
python3 tools/paper_cards/migrate.py library-cutover --yes
python3 tools/paper_cards/migrate.py library-normalize
```

`library-cutover` verifies parity before deleting the former shared layout.
