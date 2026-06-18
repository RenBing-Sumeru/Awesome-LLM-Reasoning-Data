# Construction Cookbook

> 🤖 **Ask the Atlas:** [Ask about this guide](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?mode=build&question=Use%20the%20Construction%20Cookbook%20to%20design%20a%20post-training%20reasoning-data%20pipeline.) · [Open searchable atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/)

## What you will learn

- How this topic fits into post-training reasoning data.
- Which data objects and feedback interfaces matter.
- What fields to inspect before trusting a result.

## Core idea in one paragraph

A reasoning-data pipeline is a stack: prompt sourcing, trace writing, search substrate, self-play anchor, reward/verifier layer, optimizer/scaffold, and release metadata.

## Beginner explanation

To build reasoning data, decide what problems to source, who writes traces, how attempts are searched or executed, what anchors truth, which verifier supplies feedback, and which training stage consumes the result.

## Technical view

Frontier recipes can share a GRPO/PPO-style scaffold while diverging upstream. Distill-then-RL, small warmup plus RL, pure RL, agent-native post-training, and generator-verifier co-evolution differ mainly in data orchestration.

## Key examples

- Web mining vs contest pools.
- Human/teacher/self-generated traces.
- Tool execution and proof-state transitions.
- Majority vote, interpreter, rubric, or archive anchors.

## Practical checklist

- [ ] Document prompt source.
- [ ] Document trace writer.
- [ ] Document search substrate.
- [ ] Document self-play anchor.
- [ ] Document verifier and budget.

## Common traps

- Confusing algorithm convergence with data convergence.
- Hiding failed rollouts.

## What to read next

- docs/06_verifiers_and_rewards.md
- cards/recipe_card_template.md

## Practical field guide

A construction recipe is a pipeline, not a slogan. Prompt sourcing, trace writing, search, verifier design, filtering, optimizer choice, and release metadata all shape the final behavior. Two datasets with the same headline domain can train very different models if their filters or reward contracts differ.

Use this lesson as a build ledger. Before generating more examples, write down what you will sample, who or what will write the trace, how candidates will be accepted, and which failures will be retained. A small honest ledger is more useful than a large release whose construction knobs are invisible.

### Review matrix

| Review question | Why it matters | Evidence to keep |
|---|---|---|
| What is the record shape? | Training code consumes fields, not paper slogans. | Prompt, trace/action, answer/artifact, metadata schema. |
| What supplies feedback? | The verifier or judge decides what behavior is reinforced. | Parser, tests, environment, reward model, rubric, judge prompt, version. |
| Where does supervision attach? | Answer-level, step-level, and trajectory-level data support different methods. | Granularity, labels, score format, terminal predicate. |
| How was it constructed? | Prompt sourcing, teacher traces, filtering, and search budget affect attribution. | Source mixture, teacher/generator, rollout count, filter rule, scaffold. |
| Can it be safely reused? | Leakage, license, split, and missing links can block training or evaluation. | Official links, license, decontamination note, card status, needs-search items. |

### How to apply this in practice

- Start by classifying three local cards before reading new papers; this calibrates your eye for fields and unknowns.
- Write one sentence for the verification contract and one sentence for the data object. If either sentence is vague, the entry needs more metadata.
- Decide a reuse class: safe for training, safe for evaluation only, reading reference only, or blocked pending verification.
- Separate official citation status from release completeness. A verified arXiv link does not prove that code, data, license, or verifier details are known.
- Keep a small audit note for every missing field that would change training behavior, evaluation validity, or reproducibility.

### Representative local cards

- [Openthoughts](../cards/releases/openthoughts.md)
- [Limo](../cards/releases/limo.md)
- [S1](../cards/releases/s1.md)
- [Dapo](../cards/releases/dapo.md)
- [Deepseek R1](../cards/recipes/deepseek_r1.md)
- [Kimi K15](../cards/recipes/kimi_k15.md)
- [Qwen3](../cards/recipes/qwen3.md)
- [Magistral](../cards/recipes/magistral.md)
- [Absolute Zero](../cards/recipes/absolute_zero.md)
- [Ttrl](../cards/recipes/ttrl.md)

### Common traps

- Treating a familiar benchmark or release name as proof that the data object is understood.
- Assuming a final-answer verifier justifies process supervision or trajectory training.
- Dropping failed rollouts, invalid actions, rejected samples, or judge disagreements because they make the release look messy.
- Mixing training and evaluation surfaces without writing a contamination or split note.
- Filling missing metadata from memory, secondary commentary, or plausible defaults instead of official links.

### Exercise / self-check

- Pick two cards from the list above and write their feedback contract without using the paper title.
- Find one `unknown` field that would block training reuse and explain which official source could verify it.
- Write a false-positive or false-negative failure mode for the verifier implied by one card.
- Convert one model-report claim into a row of the review matrix, including what remains undisclosed.
- Explain the lesson to a teammate in five sentences: object, feedback, granularity, construction, risk.


## Deep dive: turning the lesson into review behavior

A construction recipe is a controlled data experiment. If you change prompt sourcing, teacher model, rollout count, temperature, verifier, or pass-rate band, you have changed the training distribution. Good recipe papers make those knobs visible. Weak recipe papers collapse them into “high-quality reasoning data,” which prevents attribution. The cookbook mindset asks contributors to write the knobs before writing the headline result.

When you review a new paper, write three short artifacts before deciding whether it belongs in the atlas. First, write a one-line data-object statement: what fields would exist in one row of the dataset? Second, write a feedback-contract statement: what system decides whether the behavior is good, and what does it fail to observe? Third, write an audit statement: which missing field would change whether the work can be reused for training, evaluation, or only background reading? These three artifacts force the discussion away from vague enthusiasm and toward reproducible data engineering.

A strong review also separates confidence levels. `verified` should mean that the official paper or release link exists and the core metadata is consistent. `partial` should mean that the work is real and relevant but some important release details are still missing. `needs_search` should mean that the atlas knows the title or citation but still needs official links or metadata. This separation is what lets the repository be useful without pretending to be complete.

## Operating checklist for maintainers

- Keep the reader path obvious: README for orientation, `papers/` for density, `docs/` for lessons, `cards/` for audit records.
- Prefer official links: arXiv, OpenReview, ACL Anthology, project pages, official GitHub, and Hugging Face releases.
- Do not infer a code or dataset URL from a paper title. Missing links should remain `needs_search`.
- Make every new paper answer five questions: source, behavior, feedback, selection, audit.
- When a model report is vague, record that vagueness as a useful fact rather than filling the gap.
- When a benchmark is reused for training, add a contamination note and distinguish training/evaluation use.
- When a verifier is learned or judge-based, ask for calibration, robustness, and attack evidence.
- When a release has only successful traces, ask what failed attempts were dropped and why.
- When a scaling paper reports more compute, separate more samples from more unique tasks.
- When in doubt, add a card before adding a confident claim.

### Maintainer note

For future updates, keep this lesson connected to concrete paper entries. A useful edit should add an example, a failure mode, a verifier detail, or a missing metadata field. Avoid generic prose that sounds correct but does not help a reader decide whether a dataset is reusable, auditable, or only useful as background literature.
