# Repository contract

## Contents

1. Source hierarchy
2. Required reading
3. Generated-file boundary
4. Evidence rules
5. Curation gates

## Source hierarchy

- `data/papers.yaml`: entry source of truth.
- `data/schema.json`: required fields and enum values.
- `data/categories.yaml`: track definitions and long-form rationale.
- `data/research_tracks.yaml`: subfields, focus, keywords, and key risks.
- `cards/`: human-authored audit records.
- `docs/`: human-authored learning material and contributor procedures.

## Required reading

For a track run, read only the relevant blocks rather than loading all large files blindly:

- assigned category block in `data/categories.yaml`;
- assigned track block in `data/research_tracks.yaml`;
- matching entries in `data/papers.yaml`;
- matching generated track page for the reader-facing result;
- same-type high-quality cards;
- relevant sections of `docs/contributor_sop_zh.md`.

## Generated-file boundary

README files, paper pages, website JSON, card index, reports, exports, and Ask Atlas corpus artifacts are derived outputs. Change their sources and run repository scripts. Generated diffs are expected after source changes, but handwritten generated-only changes are not acceptable.

## Evidence rules

- Prefer official primary sources.
- Never infer a URL from a title or organization name.
- Treat official citation verification separately from artifact completeness.
- Record undisclosed construction details as unknown rather than filling likely defaults.
- Preserve source-specific uncertainty in `audit.notes`, `needs`, and verification fields.

## Curation gates

- `L0_seeded`: title or lead only.
- `L1_link_verified`: official primary link confirmed.
- `L2_artifact_verified`: official code, data, project, venue, or related artifacts checked.
- `L3_summary_ready`: concrete summary, data object, use, and audit note.
- `L4_carded`: a real card linked by entry ID.
- `L5_audit_ready`: reusable audit record without material placeholders or unsupported certainty.
