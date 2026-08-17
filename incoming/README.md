# incoming/

Drop zone for card batches that have not been merged yet.

A batch may arrive as a bare directory of `<entry_id>/` folders or as a whole
library with its own `categories.yaml`; both shapes are detected automatically.

```bash
.venv/bin/python scripts/inspect_batches.py "incoming/<batch>"
.venv/bin/python scripts/merge_batches.py  "incoming/<batch>"           # dry run
.venv/bin/python scripts/merge_batches.py  "incoming/<batch>" --apply
```

`archive/` holds batches already merged into `library/cards/`. They are kept
rather than deleted because duplicate resolution discards the smaller copy of a
card, and that copy only exists here.
