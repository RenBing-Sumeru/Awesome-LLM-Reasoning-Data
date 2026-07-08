# L Review

Read-only local review tool for L4/L5 curation levels.

## Start

```bash
python3 utils/level-review/server.py
```

Open:

```text
http://127.0.0.1:8766
```

Use another base branch if needed:

```bash
python3 utils/level-review/server.py --base main
```

## What It Reads

- `data/papers.yaml`
- `cards/**/*.md`
- `git diff main...HEAD`
- `git status --porcelain`

The frontend does not embed project entries or card data. It renders data returned by `/api/review`.

## What It Does Not Write

This tool does not modify files. It does not edit YAML, card markdown, generated files, or curation levels.

Use the `Copy Codex Task` button when an entry needs content fixes before L5 review.

## Upgrade Option

The page includes an upgrade option panel for each entry:

- If L5 hard gates pass, the button copies a Codex task for only registering
  `curation_level: L5_audit_ready`.
- If L5 hard gates fail, the button copies a Codex task for fixing hard blockers
  first.

The page remains read-only. It never writes the upgrade itself.

## Review Rules

L4 is ready when:

- the entry has a card
- the card has the matching `entry_id`
- required card sections are present
- summary fields are not obvious placeholders

L5 is ready when:

- L4 is ready
- `status` is `verified`
- an official primary link exists
- `verification.link_verified` is `true`
- the card has no L5 placeholder markers

Audit advisories are shown separately. Missing audit evidence for license, split,
decontamination, lineage, environment version, or code/data availability is not
treated as a hard L5 legality failure by this tool, because the project
validator does not currently require those fields for `L5_audit_ready`.
- audit evidence covers license, split, decontamination, lineage, environment version, and code/data availability

## Tests

```bash
python3 utils/level-review/test_server.py
```
