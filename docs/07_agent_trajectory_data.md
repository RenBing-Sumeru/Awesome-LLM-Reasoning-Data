# Agent Trajectory Data

> 🤖 **Ask the Atlas:** [Ask about this guide](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?mode=explain&question=Explain%20agent%20trajectory%20data%20and%20what%20fields%20make%20an%20episode%20replayable.) · [Open searchable atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/)

## What you will learn

- Why agent data is not just a cleaned transcript.
- Which fields make an episode replayable and auditable.
- How to distinguish model behavior from scaffold behavior.

## Core idea in one paragraph

Agent reasoning data is stateful. It should preserve state, action, observation, reward or feedback, terminal predicate, failures, retries, state diffs, scaffold metadata, budgets, and environment versions.

## Beginner explanation

For a repository task, the final patch is only the end. Useful data includes the initial repo, issue, tests, commands, failed commands, file diffs, tool outputs, retries, time budget, wrapper, and terminal predicate.

## Technical view

| Audit field | What should be released | Why it matters |
|---|---|---|
| Task state | initial state, files, UI state, repository snapshot, environment version | reset/replay |
| Goal and constraints | user goal, hidden tests, allowed/disallowed actions | task success vs compliance |
| Action schema | API/tool schema, grammar, timeout, permissions | action space |
| Observations | tool outputs, browser/app observations, logs, screenshots | available feedback |
| State diffs | file changes, patches, database changes, UI transitions | credit assignment |
| Failures and retries | invalid actions, failed calls, rejected patches, recovery attempts | branches erased by clean SFT |
| Terminal predicate | unit tests, grader, judge, environment predicate | success condition |
| Scaffold metadata | planner, wrapper, memory, prompt, loop, stopping rule | scaffold vs model |
| Budget and sampling | rollout count, token/time budget, temperature, pass@k | comparable compute |
| Lineage and split | generator, teacher, verifier version, filter, split, contamination audit | attribution |

## Key examples

- Tool-use traces with API schemas.
- Browser tasks with DOM observations.
- SWE trajectories with patches and tests.

## Practical checklist

- [ ] Preserve failed actions and retries.
- [ ] Record environment version.
- [ ] Record terminal predicate.
- [ ] Separate scaffold metadata from model output.

## Common traps

- Keeping only successful transcripts.
- Hiding tool wrappers and stopping rules.

## What to read next

- cards/agent_trajectory_card_template.md
- docs/08_scaling_and_test_time_compute.md

## Practical field guide

Agent trajectories are episodes in a stateful world. The data object contains task setup, observation stream, actions, tool outputs, budget, reset behavior, and terminal predicate. A clean success transcript is not enough if another team cannot replay the environment or inspect failed actions.

Read agent data as infrastructure plus behavior. Ask what the agent could see, what it could do, what hidden evaluator state existed, and how success was decided. For web, OS, app, tool, and SWE benchmarks, versioning and replayability often matter as much as the prompt itself.

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

- [Toolllm Toolbench](../cards/agents/toolllm_toolbench.md)
- [Webarena](../cards/agents/webarena.md)
- [Browsergym](../cards/agents/browsergym.md)
- [Osworld](../cards/agents/osworld.md)
- [Androidworld](../cards/agents/androidworld.md)
- [Appworld](../cards/agents/appworld.md)
- [Swe Gym](../cards/agents/swe_gym.md)
- [R2E Gym](../cards/agents/r2e_gym.md)
- [Openhands](../cards/agents/openhands.md)
- [Opencodereasoning Ii](../cards/releases/opencodereasoning_ii.md)

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

Agent trajectories need more metadata than static QA because the environment is part of the label. A browser task depends on DOM state, credentials, tool APIs, timing, and terminal criteria. A SWE task depends on repository state, tests, issue text, and patch application. A cleaned success transcript is useful for reading but weak for training if failed actions, observations, budgets, and replay conditions are missing.

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
