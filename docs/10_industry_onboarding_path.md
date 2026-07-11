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
- Classify the three current starter papers.
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

- paper_cards/README.md
- paper_cards/README.md
- docs/index.html

## Practical field guide

The onboarding path turns the atlas into weekly artifacts. A new post-training data engineer should not merely read papers; they should produce schemas, cards, link audits, verifier notes, failure analyses, and small reproducible pipelines. Each artifact builds judgment about what data can safely enter training.

Use the six-week path as a hiring or ramp-up scaffold. By the end, the learner should be able to classify a release, audit a verifier, critique a scaling claim, and write a concise metadata issue. That is the practical difference between knowing the literature and being useful on a data team.

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

- [Openthoughts](../paper_cards/README.md)
- [Deepmath 103K](../paper_cards/README.md)
- [Openmathreasoning](../paper_cards/README.md)
- [Opencodereasoning Ii](../paper_cards/README.md)
- [Prm800K](../paper_cards/README.md)
- [Processbench](../paper_cards/README.md)
- [Healthbench](../paper_cards/README.md)
- [Webarena](../paper_cards/README.md)
- [Swe Gym](../paper_cards/README.md)
- [Deepseek R1](../paper_cards/README.md)
- [Kimi K15](../paper_cards/README.md)
- [S1](../paper_cards/README.md)

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

The six-week path is meant to produce judgment, not just reading volume. By the end, a trainee should classify unfamiliar papers, write release cards, inspect verifier robustness, identify contamination risks, and compare frontier reports as data recipes. The capstone is deliberately small: build or audit one mini-pipeline with explicit source, behavior, feedback, selection, and release metadata.

When you review a new paper, write three short artifacts before deciding whether it belongs in the atlas. First, write a one-line data-object statement: what fields would exist in one row of the dataset? Second, write a feedback-contract statement: what system decides whether the behavior is good, and what does it fail to observe? Third, write an audit statement: which missing field would change whether the work can be reused for training, evaluation, or only background reading? These three artifacts force the discussion away from vague enthusiasm and toward reproducible data engineering.

A strong review also separates confidence levels. `verified` should mean that the official paper or release link exists and the core metadata is consistent. `partial` should mean that the work is real and relevant but some important release details are still missing. `needs_search` should mean that the atlas knows the title or citation but still needs official links or metadata. This separation is what lets the repository be useful without pretending to be complete.

## Operating checklist for maintainers

- Keep the reader path obvious: README for orientation, `papers/` for density, `docs/` for lessons, `paper_cards/` for audit records.
- Prefer official links: arXiv, OpenReview, ACL Anthology, project pages, official GitHub, and Hugging Face releases.
- Do not infer a code or dataset URL from a paper title. Missing links should remain `needs_search`.
- Make every new paper answer five questions: source, behavior, feedback, selection, audit.
- When a model report is vague, record that vagueness as a useful fact rather than filling the gap.
- When a benchmark is reused for training, add a contamination note and distinguish training/evaluation use.
- When a verifier is learned or judge-based, ask for calibration, robustness, and attack evidence.
- When a release has only successful traces, ask what failed attempts were dropped and why.
- When a scaling paper reports more compute, separate more samples from more unique tasks.
- When in doubt, add a card before adding a confident claim.
