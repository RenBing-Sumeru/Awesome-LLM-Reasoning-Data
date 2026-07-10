# Metadata contract

## Contents

1. Draft shape
2. Evidence discipline
3. Status rules
4. Review checklist

## Draft shape

Start from the current `data/schema.json` and a nearby high-quality entry in `data/papers.yaml`. At minimum, include all schema-required fields plus the repository's common fields:

```yaml
id:
title:
year:
venue:
authors: []
source_role: []
verification_contract: []
supervision_granularity: []
domains: []
training_use: []
construction_layer: []
artifacts: {}
data_object: {}
recipe_metadata: {}
audit: {}
inclusion_reason:
related: []
tags: []
status:
category: []
one_line_summary:
why_it_matters:
card: null
needs: []
curation_level:
verification: {}
```

Use the exact current repository structure for nested `artifacts`, `data_object`, `recipe_metadata`, `audit`, and `verification` fields.

## Evidence discipline

- Attach an evidence ledger to every draft.
- Distinguish statements directly supported by the paper from curator interpretations.
- Record the exact official source supporting title, year, venue, code, data, and project links.
- Do not use a benchmark score as evidence that the dataset or verifier is high quality.
- Do not infer unreported base models, teachers, filters, rollout counts, temperatures, splits, licenses, or decontamination procedures.

## Status rules

- `verified` requires an official primary paper, venue, arXiv, or DOI link.
- A verified citation can still have partial release metadata.
- Missing official sources remain `needs_search` or `needs_url`.
- Use `needs_metadata` when the work belongs but important fields are incomplete.
- Do not propose L4 without an existing or accepted card.
- Do not propose L5 while material unknowns block reuse or audit.

## Review checklist

- Exact-title and arXiv-ID duplicate search completed.
- Proposed ID follows lowercase kebab-case and does not collide.
- Enum values exist in `data/schema.json`.
- Categories are supported by concrete data objects or lifecycle relevance.
- `one_line_summary` states what the work actually exposes or does.
- `why_it_matters` explains post-training reasoning-data relevance.
- At least one concrete failure or audit risk is recorded.
- All unavailable links are null, not guessed.
