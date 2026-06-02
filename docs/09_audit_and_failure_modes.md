# Audit and Failure Modes

## What you will learn

- How this topic fits into post-training reasoning data.
- Which data objects and feedback interfaces matter.
- What fields to inspect before trusting a result.

## Core idea in one paragraph

Reasoning-data releases need audit fields because gains can come from leakage, benchmark contamination, soft contamination, hidden teacher traits, reward hacking, verifier gaming, or measurement changes.

## Beginner explanation

A data release can look clean and still leak through solution templates, search-time retrieval, private traces, hidden teacher regularities, or judge shortcuts.

## Technical view

Audit a release for leakage, benchmark contamination, search-time contamination, synthetic data collapse, hidden teacher traits, judge attacks, reward hacking, verifier false negatives, spurious rewards, privacy-bearing traces, license/provenance, compute disclosure, and release versioning.

## Key examples

- Soft contamination.
- Search-time contamination.
- Subliminal trait transfer.
- One-token judge attacks.
- Leaky reasoning traces.

## Practical checklist

- [ ] Check source and split.
- [ ] Check decontamination.
- [ ] Check verifier failures.
- [ ] Check privacy-bearing traces.
- [ ] Check license and compute disclosure.

## Common traps

- String dedup only.
- Synthetic means clean.
- Judge scores are stable.

## What to read next

- reports/needs_search.md
- cards/release_card_template.md
