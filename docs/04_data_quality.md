# Data Quality

## What you will learn

- How this topic fits into post-training reasoning data.
- Which data objects and feedback interfaces matter.
- What fields to inspect before trusting a result.

## Core idea in one paragraph

Good reasoning data is relational: correctness is verifier-relative, trace quality is trajectory-relative, difficulty is base-relative, and coverage is lineage-relative.

## Beginner explanation

A correct answer is not enough. You need to know who checked it, which base found it hard, whether the trace supports the answer, and where the sample came from.

## Technical view

Report extractor, verifier version, filtering rule, known failure modes, base model, sampling protocol, temperature, rollout count, pass-rate band, source mixture, teacher, split, decontamination, and lineage.

## Key examples

- Verifier-version pinning.
- Step labels and Monte-Carlo scores.
- Base-relative pass-rate bands.
- Lineage for synthetic data.

## Practical checklist

- [ ] State verifier.
- [ ] State base model.
- [ ] State sampling budget.
- [ ] State filter.
- [ ] State lineage and contamination checks.

## Common traps

- Long trace = good reasoning.
- Harder = better.
- More data = more coverage.
- Optimizer explains the gain.

## What to read next

- docs/05_construction_cookbook.md
- docs/09_audit_and_failure_modes.md
