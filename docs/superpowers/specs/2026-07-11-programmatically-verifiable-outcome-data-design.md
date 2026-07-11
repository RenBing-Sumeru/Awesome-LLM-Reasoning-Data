# Programmatically Verifiable Outcome Data: 10 recent influential Cards

## Scope

Add ten L4 Paper Cards to the existing `programmatically_verifiable_outcome_data` category. The repository's V2 Card library is canonical: every new paper is stored only at `paper_cards/library/cards/<entry_id>/`; no `data/papers.yaml` is created or updated.

## Selection rule

- Time window: papers first publicly released from 2025-07-11 onward.
- Quality: prioritize accepted top-conference papers; when necessary, include a public report from a frontier or leading research organization with clear external adoption, benchmark usage, or research impact.
- Topic: the paper's outcome must be automatically decidable by executable tests, a formal prover, an exact-answer checker, a simulator/environment, or another deterministic programmatic judge.
- Exclusions: subjective LLM-as-a-judge-only evaluation and papers whose programmatic checking is incidental rather than central.

## Card contract

Each Card has `paper.yaml`, `header_zh.json`, `institutions.json`, `queue.json`, `review.json`, and all nine English plus nine Chinese source sections. The card has exactly the singleton category `programmatically_verifiable_outcome_data`; it remains at L4, without manual-review decisions.

## Validation and delivery

Use a primary official source for each paper, record its quality and impact signal in the Card, then run Card check, data validation, render checks, and Review-cache warmup. The work is local-only and must not be pushed to GitHub.
