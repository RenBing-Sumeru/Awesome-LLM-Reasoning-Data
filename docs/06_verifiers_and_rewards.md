# Verifiers and Rewards

> 🤖 **Ask the Atlas:** [Ask about this guide](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?mode=explain&question=Explain%20verifiers%20and%20rewards%20for%20post-training%20reasoning%20data%20and%20give%20me%20failure%20modes.) · [Open searchable atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/)

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

- paper_cards/README.md
- docs/09_audit_and_failure_modes.md

## Practical field guide

Verifiers and rewards are data-producing instruments. They decide which behaviors survive filtering, which rollouts receive credit, and which model updates look like progress. A reward model, unit-test suite, proof checker, judge prompt, or rubric should be audited with the same seriousness as the dataset itself.

The central review question is independence. If the generator, verifier, judge, and benchmark share hidden assumptions, the model may optimize style, formatting, or memorized artifacts instead of reasoning. A good verifier note records inputs, outputs, calibration, false positives, false negatives, and what happens when the policy optimizes against it.

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

- [Prm800K](../paper_cards/README.md)
- [Math Shepherd](../paper_cards/README.md)
- [Processbench](../paper_cards/README.md)
- [Prmbench](../paper_cards/README.md)
- [Rewardbench](../paper_cards/README.md)
- [Healthbench](../paper_cards/README.md)
- [One Token To Fool Judge](../paper_cards/README.md)
- [Spurious Rewards](../paper_cards/README.md)
- [Openmathreasoning](../paper_cards/README.md)
- [Opencodereasoning Ii](../paper_cards/README.md)

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

Verifier design should be reviewed as an attack surface. A parser can be brittle, unit tests can be incomplete, proof assistants can constrain expression, judges can be prompt-sensitive, and reward models can amplify style. The question is not whether a verifier exists, but what behavior it observes, what it ignores, and how a policy could exploit it. A good verifier card documents both intended signal and known blind spots.

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
