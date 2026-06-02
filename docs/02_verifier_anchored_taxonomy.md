# Verifier-Anchored Taxonomy

## What you will learn

- How this topic fits into post-training reasoning data.
- Which data objects and feedback interfaces matter.
- What fields to inspect before trusting a result.

## Core idea in one paragraph

The most useful organizing axis is not domain, but the verification contract that turns behavior into signal.

## Beginner explanation

Math, code, web agents, and medical conversations can all be reasoning data, but a unit test, proof checker, browser state, and expert rubric create different training objects.

## Technical view

Group entries into programmatic verification, environmental verification, and judgment-required verification. Cross-cutting axes are supervision granularity, behavior bounds, and cross-generational lineage.

## Key examples

- Programmatic: math, code, formal proof.
- Environmental: tools, web, apps, OS, SWE.
- Judgment-required: medical, safety, factuality, legal, finance, expert rubrics, LLM judges.

## Practical checklist

- [ ] Classify native verifier.
- [ ] Record feedback granularity.
- [ ] Record failure modes.
- [ ] Record lineage.

## Common traps

- Classifying only by domain.
- Calling all rewards the same.

## What to read next

- docs/03_reasoning_data_objects.md
- docs/06_verifiers_and_rewards.md
