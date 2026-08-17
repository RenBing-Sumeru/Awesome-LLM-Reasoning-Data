Knowledge distillation, human-feedback RMs, execution rewards, math rewards, safety RLHF, and QAT all predate Gemma 3. Its distinct contribution is combining them across four open-weight scales while disclosing a precise 256-logit-per-token target and multiple reward families.

The useful data objects are sparse teacher distributions and heterogeneous feedback records, not merely raw web text. This exposes how teacher behavior, preferences, executable tests, mathematical predicates, and safety policies can all shape the checkpoint.

The report does not introduce an open reward stack or reproducible RL algorithm. “Improved BOND/WARM/WARP” omits modifications and rollout/merge rules. Reuse requires teacher IDs, preference records, RM components, sandbox/tests, math equivalence, rollout generation, objective weights, and checkpoint hashes.
