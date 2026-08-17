The contribution in one sentence is: turn patch-derived code locations into a deterministic terminal verifier, use it to train terminal-search agents with repeated online rollouts, and publish the resulting full conversations—including failed siblings—rather than only a filtered success set.

The data/feedback object has four coupled layers. First, an issue and repository state define a search environment. Second, the current policy produces a terminal-tool trajectory with commands such as `rg`, `find`, `ls`, `grep`, and `sed`, plus observations. Third, `LocalizationFinish` serializes predicted locations as objects with required `file` and optional `class_name` and `function_name` fields. Fourth, a programmatic verifier compares predicted and patch-derived gold sets and records scalar reward components.

The localization reward is
\[
R_{\mathrm{loc}} = F1_{\mathrm{file}} + F1_{\mathrm{module}} + F1_{\mathrm{entity}},
\]
so it ranges from 0 to 3. In the release, the components are named `file_reward`, `module_reward`, and `entity_reward`, and their sum is `multilevel_localization_f1_reward`. CodeScout-14B also uses an independent binary `multiturn_reward`: it is 1 only when the rollout uses exactly four turns. The released dictionary stores the components separately rather than a top-level training total.

The terminal contract is stricter than "mention a plausible file." The generator expects exactly one valid `LocalizationFinish` action and applies last-step sanity checks; missing, duplicated, malformed, or co-issued finish calls receive zero localization reward. A rollout that reaches the maximum turn count without finishing is also loss-masked during training, although its zero-reward conversation may remain in the public artifact. No human annotator, learned judge, test execution, or process reward model grades intermediate steps.

The repeated-attempt release is as important as the verifier. CodeScout-14B has 9,760 groups of exactly four rows. CodeScout-4B has 1,979 instance-step groups: 1,973 contain eight rows, while six contain respectively 1, 2, 3, 4, 5, and 6 rows. Within the 14B data, 1,448 groups mix zero and positive localization outcomes; the 4B data has 869 such mixed groups. These siblings permit comparisons that a success-only corpus would erase.

This Card keeps the direct 4B/14B RL artifact separate from the paper's 1.7B path. For the latter, CodeScout-14B samples 7.7K tasks and only trajectories perfect at all three localization levels are retained, yielding 4K rejection-sampling fine-tuning examples before 1.7B RL on 800 disjoint tasks. The checked `CodeScout_Training_Rollouts` release contains no 1.7B configuration and should not be described as that filtered RFT set.
