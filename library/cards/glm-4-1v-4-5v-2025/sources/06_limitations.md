- **No record-level corpus:** source families and large counts are disclosed, but final unique examples, mixture weights, immutable snapshots, filtering yields, stage splits, and source-to-record mappings are not.

- **Rights remain stage-specific:** Apache-2.0 covers repository code and MIT labels the released weights; neither licenses the hidden public/web/proprietary/human/synthetic training mixtures or generated traces.

- **SFT lineage is missing:** the size, generators, prompts, checker identities, per-domain composition, easy/hard thresholds, and RL-checkpoint-to-record mapping of the long-CoT corpus are unknown.

- **Curriculum is not reproducible:** domain proportions, pass@k values and `k`, human-label protocol, difficulty bins, iteration weights, ratio-EMA coefficients, selected rollout groups, and random seeds are not published.

- **Outcome reward can reinforce bad reasoning:** the report explicitly observes correct answers reached through incorrect steps; most released verifier logic evaluates final outputs rather than process faithfulness.

- **Model-judge coverage is uncertain:** LLM and reward-model identities, prompts, calibration, judge disagreement, false accepts/rejects, and model-based semantic thresholds are not reported.

- **Reward hacking and cross-domain collapse remain risks:** vague answers can fool weak judges, and a faulty verifier in one domain can degrade unrelated capabilities during mixed training.

- **Decontamination is not auditable:** the report mentions manual/automated review and modality deduplication but provides no benchmark signatures, thresholds, removal counts, or corpus-wide overlap report.

- **Training budget is incomplete:** pre-training/SFT schedules are reported, but RL rollouts, batch, learning rate, clipping values, total steps, tokens, compute, reward-model cost, and infrastructure implementation are missing.

- **Model limitations persist:** the report cites incorrect reasoning, RL sensitivity, clutter/occlusion/ambiguity failures, and guesswork; the repository additionally lists overthinking, repetition, answer restatement, counting/person-identification, and pure-text weaknesses.

