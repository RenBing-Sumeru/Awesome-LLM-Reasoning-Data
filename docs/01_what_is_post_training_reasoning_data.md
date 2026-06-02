# What Is Post-Training Reasoning Data?

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
