# Paper Card Tracks Design

## Goal

Let a curator assign zero, one, or two editable Tracks to each Paper Card, then use them to locate related cards without changing the existing single knowledge-point classification or prompt-batch provenance.

## Data Model

- Add `tracks` to each record in `paper_cards/header_zh.json`.
- `tracks` is a list of zero to two display strings.
- Normalize each value by trimming and collapsing internal whitespace; reject blank values, values longer than 48 characters, and duplicates under Unicode case-folding.
- Existing records without `tracks` read as `[]`.
- Keep `data/papers.yaml.category`, `header_zh.category_ids`, `search_queue.track_guess`, and `prompt_batch_id` unchanged. They retain their existing single-classification and batch-validation semantics.
- Because header records are already included in the migration archive, Tracks migrate with the other local Card metadata.

## User Interface

- In Update mode, place a `Tracks` editor beneath the read-only knowledge-point classification.
- Render selected values as removable chips. The input supports Enter to add the typed value and an explicit add button for mouse users.
- Suggestions are the normalized union of Tracks already assigned to loaded cards. A typed value not in the suggestions is allowed and becomes available for later reuse after save.
- Disable the editor for L6 cards, consistently with the other header fields.
- Add an optional Track filter to the list controls. A card matches when it has the selected Track; no Track filter means all cards remain visible.
- Display assigned Tracks in each list row and in the Chinese assembled-card header.

## Persistence and Validation

- Extend the existing header save endpoint to accept and validate `tracks` together with the Chinese header fields.
- Reject invalid Track payloads with a 400 response and a clear error message. Rejecting a third Track must not write any change.
- The server remains the source of validation; browser checks only improve immediate feedback.

## Testing

- Unit-test normalization, zero-to-two limits, duplicate rejection, and backward-compatible empty defaults.
- Test the header save API accepts two Tracks and rejects three without altering the prior stored record.
- Test the UI source contract for the Track editor, manual-add path, and Track filter.
- Run the full Paper Card test suite, card check, migration verification, and data validation.

## Scope Exclusions

- Do not make knowledge-point categories multi-select.
- Do not add a separate Track catalog or remote collaboration service.
- Do not alter batch classification, review levels, or generated-card download behavior.
