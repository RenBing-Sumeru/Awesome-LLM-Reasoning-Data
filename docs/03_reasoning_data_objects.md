# Reasoning Data Objects


## What you will learn

- Common object types in reasoning post-training.
- Native feedback and training use for each object.
- Why audit risk changes with object structure.

## Core idea in one paragraph

Reasoning data is a family of objects. A prompt-answer pair, step-labeled trace, rollout set, tool trajectory, full environment episode, verifier card, and rubric record expose different feedback surfaces.

## Beginner explanation

If you only keep the final answer, you can train outcome imitation. If you keep steps, tool calls, failures, retries, state diffs, verifier outputs, and lineage, you can debug why a model improved or failed.

## Technical view

| Data object | What it contains | Native feedback | Training use | Audit risk |
|---|---|---|---|---|
| Prompt-answer | task plus final answer | answer label | SFT, evaluation | extractor/verifier hidden |
| Prompt-trace-answer | task, trace, answer | final correctness | SFT, distillation | trace may be unfaithful |
| Step-labeled trace | segmented steps and labels | step correctness | PRM, process supervision | label provenance |
| Rollout set | multiple attempts | pass@k, selection | RLVR, filtering | sampling protocol hidden |
| Pairwise preference | chosen/rejected outputs | preference | DPO/RLHF/RLAIF | judge bias |
| Tool-use trajectory | goal, calls, observations | execution feedback | agent training | tool version |
| Full environment episode | state/action/observation/terminal predicate | environment success | agent RL, evaluation | replayability |
| Rubric/judge record | rubric, evidence, score | judgment | reward modeling | hidden prompt/judge shortcuts |
| Release lineage record | source, teacher, filter, split | attribution metadata | audit | missing ancestry |

## Key examples

- Math answer verification.
- Code unit-test execution.
- Agent trajectories with state diffs.
- Rubric-scored health or safety examples.

## Practical checklist

- [ ] Name the object type.
- [ ] Record native feedback.
- [ ] Record training use.
- [ ] Record missing audit fields.

## Common traps

- Treating cleaned transcripts as full trajectories.
- Treating all chain-of-thought as process supervision.

## What to read next

- docs/04_data_quality.md
- docs/05_construction_cookbook.md

## Practical field guide

The object shape determines what a team can train or audit. A final-answer record can support SFT or RLVR, but it cannot teach which step failed unless process fields are preserved. A trajectory can train an agent, but only if observations, actions, environment state, and success predicates remain serializable.

A practical review should sketch the record schema before reading benchmark numbers. Draw the columns you would need to store: context, generated behavior, artifact, feedback, metadata, and failure case. If a paper’s claimed contribution cannot be mapped to columns, the release will be hard to reuse even if the model result is strong.

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

Data object shape is the bridge between a paper and an implementation. A prompt-answer pair can be consumed by SFT. A rollout set can support rejection sampling or outcome reward learning. A step-labeled trace can train a PRM. A preference pair can train DPO or a reward model. A replayable episode can train or evaluate an agent. When a paper does not name the object shape, the reader cannot know which training methods are actually supported.

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
