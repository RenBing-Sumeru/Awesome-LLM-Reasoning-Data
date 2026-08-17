For **Rollout, Search, and Test-Time Trace Data**, QED-Nano provides a useful budget ledger. A reuse study can keep four layers separate: nominally 128 offline Qwen3 attempts for difficulty statistics; 16 online QED-Nano rollouts per prompt for GRPO; three Reasoning-Cache refinement turns during training; and a test-time scaffold budget that can approach two million tokens. Reporting only “number of rollouts” would make these incomparable processes look equivalent.

FineProofs-RL can support prompt-level and statistical research without claiming access to hidden traces. Its released problem text, rubric, score population, count, mean, and standard deviation can be used to:

- study curriculum rules under the observed difficulty and variance statistics;
- stratify prompts for new rollout collection while retaining actual per-row list lengths;
- compare newly generated proofs against the released problem-level rubrics using a separately documented judge;
- audit how all-failure and very-easy filters reshape a training prompt distribution;
- design richer releases that align each score with proof text, judge output, model revision, seed, and token budget.

The data is not ready-made SFT proof text, preference pairs, process labels, or reward-model training data. FineProofs-SFT is the separate proof-text artifact used for distillation and SFT. FineProofs-RL may seed a new RLVR-style experiment only if the reuser supplies a policy generator and a clearly specified rubric grader, records the resulting attempts, and rechecks judge calibration. A list of historical scalar scores cannot train the paper’s policy without the corresponding actions.

The construction recipe is also useful for controlled ablations. Researchers can compare problem selection with and without zero-success removal, fixed versus variable offline sample counts, binary versus 0-7 rubric outcomes, single-turn versus summarized-state rollouts, and matched-budget inference scaffolds. Each comparison should hold the model, prompt set, judge, maximum response length, temperature, and total generated tokens as constant as possible.

For verifier research, the paper offers a concrete learned-judge audit surface. New work can reproduce a human comparison, measure false acceptance and false rejection by score band, test robustness to verbosity and stylistic variation, and probe reward hacking against individual rubric clauses. Because attempt-level inputs and outputs are missing from FineProofs-RL, these studies require fresh generations; they cannot retrospectively validate the released scores.

For test-time compute research, report generated tokens, calls, parallel width, sequential depth, truncation, latency, and compute cost alongside proof scores. The approximately 93,690-token single-turn and 2,045,764-token RSA averages demonstrate why matched-budget comparisons are necessary. A scaffold gain under twenty times the generation budget is evidence about the combined system, not proof that the base model or training data alone improved.

Before reuse, pin the official revisions, keep FineProofs-RL and FineProofs-RL-test as separate repositories and splits, preserve source labels, review upstream rights, and publish any new proof/judge records under stable IDs. The appropriate reuse class is **strong recipe and prompt/rubric/statistics reference; conditional research reuse; raw-trace analysis impossible without recollection; redistribution and production use pending source-rights review**.
