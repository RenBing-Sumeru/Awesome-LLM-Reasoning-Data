# Scaling and Test-Time Compute


## What you will learn

- Why benchmark gains are not self-explanatory.
- How to separate ceiling movers from efficiency movers.
- What release fields are needed for scaling attribution.

## Core idea in one paragraph

Reasoning post-training scaling should be read through two parameters: an asymptote or ceiling, often moved by data substrate, and an efficiency exponent, often moved by optimizer/scaffold choices.

## Beginner explanation

If one model scores higher, ask what changed: data source, verifier, base, teacher, optimizer, search budget, inference budget, contamination, or evaluation protocol.

## Technical view

| Scaling knob | May move ceiling | May move efficiency | Required release fields |
|---|---|---|---|
| Prompt source | yes | sometimes | source mixture, pass-rate band, base, filter |
| Data uniqueness/reuse | sometimes | yes | unique items, reuse rate, epochs, active band |
| Teacher distillation | yes | yes | teacher, gap, decoding policy, verifier |
| SFT to RL handoff | yes | yes | entropy at handoff, base, SFT corpus |
| Inference-time compute | sometimes | yes | pass@k, pass@(k,T), budget, topology |
| Search substrate | yes | yes | environment image, tools, terminal predicate |
| Verifier refresh | yes | yes | verifier version, refresh log, attack tests |
| Evaluation protocol | no | apparent | seed, split, contamination audit, budget |

## Key examples

- Asymptote/efficiency decomposition.
- Data repetition and small-pool curation.
- Agentic substrate gains.

## Practical checklist

- [ ] Identify the reported delta.
- [ ] List changed knobs.
- [ ] Separate data substrate from optimizer/scaffold.
- [ ] Record inference budget.

## Common traps

- Treating +N points as pure capability.
- Comparing pass@1 and pass@k as the same observable.

## What to read next

- docs/09_audit_and_failure_modes.md
- paper_cards/README.md

## Practical field guide

Scaling claims are ledger claims. A reported gain may come from more unique prompts, more rollouts per prompt, a stronger verifier, a larger RL budget, longer inference, better search, or a changed evaluation surface. Without a ledger, those factors blur into one number.

When reading scaling work, separate training-time compute from test-time compute and data reuse from fresh data. Record pass@k, inference budget, rollout count, filter rate, verifier strength, and benchmark overlap. The goal is not to reject scaling claims, but to make attribution possible.

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

- [S1](../paper_cards/README.md)
- [Dapo](../paper_cards/README.md)
- [Deepseek R1](../paper_cards/README.md)
- [Kimi K15](../paper_cards/README.md)
- [Minimax M1](../paper_cards/README.md)
- [Ttrl](../paper_cards/README.md)
- [Absolute Zero](../paper_cards/README.md)
- [Llama Nemotron](../paper_cards/README.md)
- [Phi4 Reasoning](../paper_cards/README.md)
- [Qwen3](../paper_cards/README.md)

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

Scaling claims should be decomposed into unique tasks, repeated attempts, inference budget, verifier calls, and model updates. A pass@k improvement can come from better search, more diverse samples, stronger verifier selection, easier tasks, or genuine model improvement. Without a ledger, readers may mistake compute reuse for data scaling or mistake evaluation-time search for training-time capability.

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
