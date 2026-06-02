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
