# Construction Cookbook

## What you will learn

- How this topic fits into post-training reasoning data.
- Which data objects and feedback interfaces matter.
- What fields to inspect before trusting a result.

## Core idea in one paragraph

A reasoning-data pipeline is a stack: prompt sourcing, trace writing, search substrate, self-play anchor, reward/verifier layer, optimizer/scaffold, and release metadata.

## Beginner explanation

To build reasoning data, decide what problems to source, who writes traces, how attempts are searched or executed, what anchors truth, which verifier supplies feedback, and which training stage consumes the result.

## Technical view

Frontier recipes can share a GRPO/PPO-style scaffold while diverging upstream. Distill-then-RL, small warmup plus RL, pure RL, agent-native post-training, and generator-verifier co-evolution differ mainly in data orchestration.

## Key examples

- Web mining vs contest pools.
- Human/teacher/self-generated traces.
- Tool execution and proof-state transitions.
- Majority vote, interpreter, rubric, or archive anchors.

## Practical checklist

- [ ] Document prompt source.
- [ ] Document trace writer.
- [ ] Document search substrate.
- [ ] Document self-play anchor.
- [ ] Document verifier and budget.

## Common traps

- Confusing algorithm convergence with data convergence.
- Hiding failed rollouts.

## What to read next

- docs/06_verifiers_and_rewards.md
- cards/recipe_card_template.md
