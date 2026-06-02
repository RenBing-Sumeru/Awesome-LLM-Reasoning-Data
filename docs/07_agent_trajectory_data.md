# Agent Trajectory Data

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
