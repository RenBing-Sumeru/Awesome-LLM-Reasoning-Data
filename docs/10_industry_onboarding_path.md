# Industry Onboarding Path

## What you will learn

- A six-week route from beginner to reasoning-data builder.
- The artifacts expected from a practical onboarding process.
- How to use this atlas as a daily engineering reference.

## Core idea in one paragraph

An engineer joining an LLM post-training or reasoning-data team needs a map of data objects, verifiers, construction stacks, trajectory audits, scaling attribution, and release cards.

## Beginner explanation

Follow one week at a time. Each week has a reading set and a small artifact to produce. By Week 6, you should be able to design a small reasoning-data pipeline and write its release/verifier/risk cards.

## Technical view

### Week 1: Learn the map
- Read docs 00-04.
- Classify 20 papers.
- Explain three verification contracts.

### Week 2: Learn verifiers and rewards
- Read docs 06.
- Write 3 verifier cards.
- Compare answer verifier, code verifier, and rubric judge.

### Week 3: Learn construction pipelines
- Read docs 05.
- Draw a reasoning data construction stack.
- Compare distill-then-RL, pure RL, and self-play.

### Week 4: Learn agent trajectory data
- Read docs 07.
- Audit one web/tool/SWE/OS agent dataset.
- Identify state/action/observation/terminal predicate.

### Week 5: Learn scaling and audit
- Read docs 08-09.
- Compare two frontier model reports.
- Write a contamination checklist.

### Week 6: Build a mini reasoning-data pipeline
- Choose a small domain.
- Design prompt source and verifier.
- Generate rollout, filter, and write release/verifier/risk cards.

## Key examples

- Math RLVR mini-pipeline.
- SWE agent trajectory audit.
- Rubric reward card for a safety task.

## Practical checklist

- [ ] Produce one artifact each week.
- [ ] Keep unknowns explicit.
- [ ] Separate data, verifier, scaffold, and evaluation.

## Common traps

- Reading papers without extracting release fields.
- Confusing model reports with data releases.

## What to read next

- cards/release_card_template.md
- cards/verifier_card_template.md
- docs/index.html
