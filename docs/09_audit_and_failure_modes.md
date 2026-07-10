# Audit and Failure Modes


## What you will learn

- How this topic fits into post-training reasoning data.
- Which data objects and feedback interfaces matter.
- What fields to inspect before trusting a result.

## Core idea in one paragraph

Reasoning-data releases need audit fields because gains can come from leakage, benchmark contamination, soft contamination, hidden teacher traits, reward hacking, verifier gaming, or measurement changes.

## Beginner explanation

A data release can look clean and still leak through solution templates, search-time retrieval, private traces, hidden teacher regularities, or judge shortcuts.

## Technical view

Audit a release for leakage, benchmark contamination, search-time contamination, synthetic data collapse, hidden teacher traits, judge attacks, reward hacking, verifier false negatives, spurious rewards, privacy-bearing traces, license/provenance, compute disclosure, and release versioning.

## Key examples

- Soft contamination.
- Search-time contamination.
- Subliminal trait transfer.
- One-token judge attacks.
- Leaky reasoning traces.

## Practical checklist

- [ ] Check source and split.
- [ ] Check decontamination.
- [ ] Check verifier failures.
- [ ] Check privacy-bearing traces.
- [ ] Check license and compute disclosure.

## Common traps

- String dedup only.
- Synthetic means clean.
- Judge scores are stable.

## What to read next

- reports/needs_search.md
- paper_cards/README.md

## Practical field guide

Failure analysis is the atlas safety rail. Leakage, contamination, reward hacking, judge attacks, verifier false negatives, environment brittleness, and hidden trait transfer can all make progress look cleaner than it is. A release without failure notes is not fully described.

A good audit starts by asking how the model could win without solving the intended task. Then look for evidence: adversarial examples, independent checks, held-out splits, failed rollouts, judge sensitivity tests, and decontamination logs. The most useful cards record these risks before they become leaderboard surprises.

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

Audit work protects the atlas from becoming a hype list. Leakage, contamination, judge attacks, reward hacking, hidden trait transfer, and model collapse all show that more reasoning text is not automatically better data. Every failure paper should become a new field in release cards: what could leak, what could be gamed, what could be memorized, and what evidence would reveal it.

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

### Maintainer note

For future updates, keep this lesson connected to concrete paper entries. A useful edit should add an example, a failure mode, a verifier detail, or a missing metadata field. Avoid generic prose that sounds correct but does not help a reader decide whether a dataset is reusable, auditable, or only useful as background literature.
