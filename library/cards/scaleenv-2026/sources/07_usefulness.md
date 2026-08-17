**Supported uses**

- RLVR and agent training are directly evidenced: Qwen3-8B and Qwen3-32B are trained for 48 GRPO steps with rollout batches 1,024 and 2,048.
- The 16-domain, 2,560-task recipe supports research on executable environment synthesis, state-grounded intents, rule-based reward, and environment-diversity scaling.
- Procedural success, anticipated rejection, and unexpected failure can supervise environment debugging before policy rollout.

**Uses requiring a release**

- Offline policy training needs complete successful and failed trajectories, user feedback, state transitions, terminal rewards, and lineage; none is verified public.
- Environment reuse needs licensed tool/database code, tests, state snapshots, reset/isolation interfaces, dependency locks, and safety controls.
- Reproduction needs generator prompts and model revisions, seeds, rollout grouping, decoding, simulator/checker settings, compute topology, and retained failures.

`training_use` therefore remains RLVR and agent training. The Card does not infer SFT, public trajectory training, or reward-model training from the paper.
