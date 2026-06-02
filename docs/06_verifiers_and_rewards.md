# Verifiers and Rewards

## What you will learn

- How this topic fits into post-training reasoning data.
- Which data objects and feedback interfaces matter.
- What fields to inspect before trusting a result.

## Core idea in one paragraph

Verifiers and rewards are data artifacts, not neutral wrappers. Their versions, failure modes, and attack surfaces determine what the policy learns.

## Beginner explanation

A verifier can be an answer checker, unit test, proof checker, process reward model, learned reward model, rubric judge, LLM judge, implicit selector, or environment terminal predicate.

## Technical view

Failure surfaces include false rejection, false acceptance, judge bias, reward hacking, verifier gaming, master-key attacks, spurious rewards, robustness gaps, hidden rubrics, and version drift. A verifier card should record inputs, outputs, native signal, calibration, robustness tests, and missing information.

## Key examples

- Code execution.
- Lean proof checking.
- PRM step scores.
- Rubric rewards.
- LLM-as-judge attacks.

## Practical checklist

- [ ] Record what is checked.
- [ ] Record input/output format.
- [ ] Record native signal.
- [ ] Record false positives/negatives.
- [ ] Record version and refresh policy.

## Common traps

- Treating LLM judges as ground truth.
- Forgetting answer extraction policy.

## What to read next

- cards/verifier_card_template.md
- docs/09_audit_and_failure_modes.md
