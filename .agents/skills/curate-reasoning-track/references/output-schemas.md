# Staging output schemas

## Contents

1. Track brief
2. Candidate table
3. Evidence ledger
4. Metadata and card drafts
5. Run summary

## Track brief

Write `track-brief.md` with:

- track ID and name;
- scope and reader promise;
- inclusion and exclusion rules;
- subfields and key risks;
- current anchor works and cards;
- coverage gaps;
- recommended expansion order;
- search vocabulary;
- repository evidence paths.

## Candidate table

Write `candidates.csv` with these columns:

```text
candidate_id,title,year,venue,subfield,official_primary_url,source_status,duplicate_entry_id,data_object,feedback_contract,training_use,construction_relevance,audit_risk,priority,decision_reason,unknowns
```

Allowed priority values:

```text
must_add
strong_candidate
background_only
reject
```

An unverified search result must not use `source_status=verified`.

## Evidence ledger

Write one `evidence/<candidate_id>.md` file per paper. For every metadata claim record:

- field or claim;
- supported value;
- official source URL or local paper path;
- section, page, table, appendix, or repository location;
- confidence;
- curator note.

## Metadata and card drafts

- `metadata/<candidate_id>.yaml`: one entry mapping, not a prose wrapper.
- `cards/<candidate_id>.md`: complete Markdown card draft without a handwritten Ask Atlas block.

## Run summary

Write `run-summary.md` with counts for searched, deduplicated, rejected, approved, drafted, applied, carded, and blocked items. List failed checks and unresolved evidence explicitly.
