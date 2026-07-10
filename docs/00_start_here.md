# Start Here

> 🤖 **Ask the Atlas:** [Ask about this guide](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?mode=explain&question=Explain%20the%20Start%20Here%20guide%20and%20turn%20it%20into%20a%20learning%20plan.) · [Open searchable atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/)

## What you will learn

- How this topic fits into post-training reasoning data.
- Which data objects and feedback interfaces matter.
- What fields to inspect before trusting a result.

## Core idea in one paragraph

This repository is a learning-first atlas. README gives the map, docs teach concepts, data files store structured entries, cards turn papers into auditable release records, and the website makes the atlas searchable.

## Beginner explanation

Start with the idea that the useful sample is not just a question and answer. It is a task, behavior, feedback signal, and attribution record.

## Technical view

Use four layers: taxonomy, quality, construction, and scaling. Each layer asks what object was trained on, what verified it, and what metadata attributes the gain.

## Key examples

- Beginner path: docs 00-04.
- Builder path: docs 05-06 plus cards.
- Agent path: docs 07.
- Scaling path: docs 08-09.

## Practical checklist

- [ ] Pick a path.
- [ ] Use data/papers.yaml for metadata.
- [ ] Use cards when adding resources.
- [ ] Keep unknowns explicit.

## Common traps

- Treating this as only a paper list.
- Promoting partial metadata to verified.

## What to read next

- docs/01_what_is_post_training_reasoning_data.md
- docs/02_verifier_anchored_taxonomy.md

## Practical field guide

Start by treating the atlas as a set of work routes rather than a pile of papers. A newcomer should first learn the recurring objects: prompt, trace, answer, verifier, reward, environment, split, and audit note. Once those objects are visible, the repository becomes less intimidating: README gives the map, docs give the curriculum, cards give audit examples, and paper pages give the bibliography queue.

For your first pass, choose one starter paper and write a mini card for it. Identify the sample, the feedback contract, the intended training use, and the unknown metadata. If you cannot name the verifier or terminal predicate, that is already a useful discovery rather than a failure.

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

Use this page as a triage board. A newcomer should first learn the vocabulary, then inspect one paper category, then open a card and ask whether the public metadata is enough to reuse the work. A builder should move faster: choose a data object, choose a verifier, write the release card before collecting examples, and only then design the training loop. An auditor should start from the opposite direction: pick a model report claim, ask what data could have produced the gain, then list every undisclosed field that would change the interpretation.

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
