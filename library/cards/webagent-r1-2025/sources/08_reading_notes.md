
- Keep the 9,460 public program-solver BC trajectories separate from the unreleased current-policy trajectories sampled on 647 RL tasks.
- Read the reward as a terminal task checker—string match, URL match, or program execution—not as a label of intermediate reasoning quality.
- Treat behavior cloning as part of the RL data contract: WebAgent-R1-Zero rarely reaches positive reward and does not improve in the reported ablation.
- Record interaction count as a test-time budget; longer multi-turn episodes, not longer single-turn responses, drive the paper's scaling analysis.
- Before reuse, request the M-GRPO group size, rollout count, seeds, task schedule, environment snapshot, online trajectories, checkpoints, and decontamination evidence.
