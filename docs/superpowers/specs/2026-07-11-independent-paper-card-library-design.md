# Independent Paper Card Library Design

## Goal

Make each Paper Card directory the only hand-maintained source for that paper. The review frontend reads the Card library directly; `data/papers.yaml` and site indexes become generated compatibility artifacts rather than editable sources.

## Canonical Library

```text
paper_cards/library/
  categories.yaml
  cards/<entry_id>/
    paper.yaml
    header_zh.json
    institutions.json
    queue.json
    review.json
    sources/
      01_problem.md
      01_problem_ch.md
      ...
      09_citation.md
      09_citation_ch.md
```

- `paper.yaml` holds the complete paper metadata, artifacts, curation level, up to two controlled `category_ids`, and prompt-batch provenance.
- `categories.yaml` is the shared controlled vocabulary. It is library configuration, not per-paper information.
- `header_zh.json`, `institutions.json`, `queue.json`, and `review.json` contain only the named Card's local data.
- Every Card folder can be copied, reviewed, migrated, deleted, or edited without changing another Card's source files.
- No shared mutable header, institution, queue, status, validity, or batch JSON remains outside the Card directories.

## Categories and Batch Provenance

- A Card starts with one selected category and may have zero to two `category_ids` after manual editing.
- Categories must exist in `paper_cards/library/categories.yaml`; arbitrary typed categories are not accepted.
- The first category is the primary category. If a Card belongs to a prompt batch, its batch provenance is stored inside `paper.yaml` as `batch_id`, `request_sha256`, and `primary_category_id`.
- Batch validation scans the Card library: every Card sharing a `batch_id` must have the same request hash and primary category, and that primary category must be present in `category_ids`.
- The optional second category is an independent cross-classification label and does not alter the batch's primary-category rule.

## Derived Compatibility Outputs

- A build command scans `paper_cards/library/cards/`, validates every Card, and writes `data/papers.yaml`, `data/_generated/entries.json`, site assets, counts, and reports.
- Generated outputs are never edited by the review frontend or by Card-generation agents.
- Existing site scripts consume the generated index during the transition. The review server consumes the library directly.
- Cached validity reports are regenerated from the library and are not canonical records.

## Migration

1. Add a converter that reads the current metadata, Card sources, and local JSON records and writes one complete library directory per entry.
2. Validate count, IDs, metadata, categories, source-file checksums, Chinese header fields, institutions, queue records, review state, and batch provenance against the old layout.
3. Switch the review server and Card tooling to the library loader.
4. Generate compatibility outputs and compare them with the existing generated outputs.
5. Remove the old hand-maintained `data/papers.yaml`, shared local JSON files, `sources/`, and batch-record layout only after a clean-clone validation passes.

## Review UI

- The server lists and loads Card directories directly from `paper_cards/library/cards/`.
- The editor changes only the active Card directory.
- Category controls show removable chips, permit one initial category plus one additional category, and prevent more than two.
- The list supports filtering by either assigned category.
- L6 Cards remain read-only except for downloads.

## Verification

- Unit tests cover library loading, per-Card writes, migration parity, category limits, batch-primary consistency, generated-index parity, and isolation of writes to one Card directory.
- CI runs library validation, Card checks, generated-output checks, and the full Paper Card test suite from a clean checkout.

## Scope Exclusions

- No database, remote authentication, live collaboration, or unrestricted free-text category creation.
- No duplicate editable metadata sources during or after the migration.
