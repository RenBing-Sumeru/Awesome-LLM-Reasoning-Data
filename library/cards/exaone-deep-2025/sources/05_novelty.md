EXAONE Deep is valuable to the disclosure ledger because it exposes a compact but nontrivial set of post-training facts: exact aggregate stage counts, SFT token volume, a process-tag format, three base-to-checkpoint lineages, SimPER DPO, and a GRPO-derived Online-RL stage. These facts support a more precise description than “trained for reasoning,” while still leaving the underlying records and feedback unknown.

The key distinction is between release layers. LG provides executable model artifacts for three scales and documents how to prompt and deploy them. It does not provide the 1.6M SFT traces, 20K preference records, 10K Online-RL instances, or a source manifest. Nor does an algorithm name establish a reward contract: “designed GRPO variant” does not reveal what was rewarded, who or what judged it, whether correctness was executable, or when a rollout was accepted.

For this track, the novelty is thus methodological transparency at aggregate level combined with an explicit audit boundary. Research-purpose weight access is real and useful, but it is a different artifact class from reasoning-data release.

