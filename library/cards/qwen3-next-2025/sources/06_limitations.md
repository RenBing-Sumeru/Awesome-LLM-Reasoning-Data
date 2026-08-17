The 15T pretraining disclosure omits source composition, document provenance, per-source permissions, revisions, filters, deduplication, decontamination, and train/evaluation split controls. Apache-2.0 covers the released repository artifacts; it does not establish rights to the training sources or synthetic outputs.

Post-training prompts, candidate responses, thinking traces, preference or correctness labels, rejected samples, group membership, counts, mixtures, and immutable manifests are not released. The Qwen3-Next-specific reward source, verifier or judge contract, terminal predicate, calibration, error analysis, rollout policy, sampling settings, optimizer, coefficients, schedule, compute, and intermediate checkpoints are unknown.

The generic GSPO objective cannot fill these gaps because the Qwen3-Next instantiation is not documented. Benchmark tables also combine architecture, pretraining, post-training, reward design, and inference-budget effects, so they cannot isolate data quality or the contribution of any one stage. Lack of a Qwen3-Next-specific archival paper, training code, data release, and benchmark-overlap audit further limits reproducibility.

