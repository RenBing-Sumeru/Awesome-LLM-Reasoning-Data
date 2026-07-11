- Verification contract: mixed. Outcome labels come from task verifiers; process rewards are inferred and updated online.
- Recorded verifier/reward/environment: implicit PRM plus outcome verifier.
- Supervision granularity: answer_level, step_level, and process_reward.

- Base model: Qwen2.5-Math-7B-Base is reported for the main PRIME model lineage.
- Teacher: outcome verifiers rather than dense human process labels.
- Generator: policy rollouts from the current training policy.
- Filtering rule: prompts can be filtered by policy accuracy band, then outcome and implicit process rewards are combined for advantage estimation.
- Sampling protocol: on-policy RL rollouts; exact rollout counts and task mixtures should be pinned before reuse.
- Optimizer/scaffold: online RL with implicit PRM updates and policy optimization.
