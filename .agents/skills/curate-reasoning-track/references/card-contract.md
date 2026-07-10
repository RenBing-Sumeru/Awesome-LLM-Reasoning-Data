# Paper Card contract

## Contents

1. Card selection
2. Location
3. Required structure
4. Type-specific requirements
5. Quality gate

## Card selection

Prioritize anchor papers, reusable releases, verifiers, reward models, benchmarks, environments, construction recipes, frontier disclosures, scaling evidence, and failure studies. A weakly related background citation does not need a card merely to increase card coverage.

## Location

- `cards/releases/`: datasets, trace releases, and reusable artifacts.
- `cards/verifiers/`: verifiers, rewards, PRMs, judges, and rubrics.
- `cards/agents/`: tool, web, OS, app, SWE, and replayable environments.
- `cards/recipes/`: construction pipelines, model reports, and recipes.
- `cards/benchmarks/`: evaluation surfaces and benchmark ledgers.
- `cards/failures/`: contamination, leakage, gaming, attacks, and reproducibility failures.

## Required structure

Start with the exact entry binding:

```markdown
<!-- entry_id: <data/papers.yaml id> -->
<!-- card_type: releases|verifiers|agents|recipes|benchmarks|failures -->
# <Title>
```

Use the repository's current L5-compatible structure:

```markdown
## TL;DR
## 1. What is this work?
## 2. What data object does it expose?
## 3. What is the verifier / reward / judge / environment?
## 4. How is the data constructed?
## 5. How can it enter post-training?
## 6. What should readers audit?
## 7. What is missing or risky?
## 8. Why it matters for post-training reasoning data
## 9. Links and citation
```

Let `scripts/add_card_ask_links.py` create or update the generated Ask Atlas link block.

## Type-specific requirements

- Agent cards: state, observation, action schema, reset, terminal predicate, failure preservation, replayability, scaffold, and budget.
- Verifier cards: inputs, outputs, native signal, intended use, false positives, false negatives, brittleness, gaming, version, and calibration.
- Recipe cards: sources, teacher/generator, search, filters, verifier/reward, training method, scaling knobs, attribution, and reproduction gaps.
- Benchmark cards: task source, split, scoring contract, hidden/public components, contamination exposure, and reuse limits.

## Quality gate

Reject or revise a card that:

- paraphrases only the abstract;
- hides unknowns;
- uses promotional language;
- describes results without the data object and feedback contract;
- omits construction and failure modes;
- contains guessed links;
- claims audit readiness without enough evidence.
