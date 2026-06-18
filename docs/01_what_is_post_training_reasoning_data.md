# What Is Post-Training Reasoning Data?

> 🤖 **Ask the Atlas:** [Ask about this guide](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?mode=explain&question=Explain%20what%20post-training%20reasoning%20data%20is%20using%20this%20repository%20guide.) · [Open searchable atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/)

## What you will learn

- How this topic fits into post-training reasoning data.
- Which data objects and feedback interfaces matter.
- What fields to inspect before trusting a result.

## Core idea in one paragraph

Post-training reasoning data is data used after pretraining to teach, shape, reinforce, or audit reasoning behavior. It connects a task, model behavior, and feedback signal.

## Beginner explanation

A post-training reasoning-data item is a training or evaluation record that connects a task, a model behavior, and a feedback signal. The feedback signal can be a correct answer, a unit test, a proof checker, a process label, a reward model, a human rubric, an LLM judge, or an environment success condition.

## Technical view

Pretraining deposits broad priors. Post-training changes how those priors are expressed through SFT, distillation, preference learning, reward modeling, process supervision, RLVR, and agent training.

## Key examples

- SFT over distilled traces.
- RLVR over math/code answers.
- Process supervision with step labels.
- Agent training over trajectories.

## Practical checklist

- [ ] Identify task context.
- [ ] Identify model behavior.
- [ ] Identify feedback source.
- [ ] Identify training use.
- [ ] Record base, teacher, verifier, filter, split, budget, lineage.

## Common traps

- Prompt-answer without verifier context.
- Ignoring attribution metadata.

## What to read next

- docs/02_verifier_anchored_taxonomy.md
- docs/03_reasoning_data_objects.md

## Practical field guide

Reasoning data is useful only when the behavior and the feedback signal are both inspectable. A prompt-answer pair is the simplest case, but modern post-training data often contains traces, critiques, unit tests, rubric scores, process labels, rejected attempts, tool calls, or environment states. The first skill is to name which of those fields actually exist.

When reading a release, avoid asking “is this a reasoning dataset?” as a yes/no question. Ask what field would enter the loss, what field would enter a reward model, what field would be checked by a verifier, and what field would be needed to reproduce the result. Those questions quickly separate ordinary instruction data from verifier-bearing reasoning data.

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
- [Deepmath 103K](../cards/releases/deepmath_103k.md)
- [Openmathreasoning](../cards/releases/openmathreasoning.md)
- [Opencodereasoning Ii](../cards/releases/opencodereasoning_ii.md)
- [Prm800K](../cards/verifiers/prm800k.md)
- [Processbench](../cards/verifiers/processbench.md)
- [Healthbench](../cards/verifiers/healthbench.md)
- [Webarena](../cards/agents/webarena.md)
- [Swe Gym](../cards/agents/swe_gym.md)
- [Deepseek R1](../cards/recipes/deepseek_r1.md)
- [Kimi K15](../cards/recipes/kimi_k15.md)
- [S1](../cards/releases/s1.md)

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

The definition becomes practical when it changes what you log. A plain supervised example stores the target answer. A reasoning-data record should also preserve what made the answer acceptable: the trace, the action history, the verifier output, the reward score, the judge rubric, the environment state, or the selection rule. This is why two datasets with the same prompts can teach different behaviors. One may reward short final answers; another may reward search traces; another may reward robust tool use under a budget.

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
