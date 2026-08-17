- Keep the release layers separate: the BF16 checkpoint, data collection, recipe repository, and project page are official artifacts, while private/vendor inputs remain in the disclosed ledger.
- Preserve the two reported data-scale figures without reconciling them: 226 datasets and 14.8T tokens in the model card, versus 20T pretraining tokens in the report.
- Record unified RLVR as asynchronous GRPO with batch 8,192, 16 rollouts per sample, and 48K-to-64K maximum generation; do not generalize those settings to every stage or deployment.
- Record MOPD separately: two iterations, dense specialist-teacher signals, 1,024 prompts per batch, one rollout per prompt, and 192K maximum generation.
- Treat the SWE hidden-test reward caveat, source-rights gaps, incomplete environment pins, and missing family-wide overlap audit as substantive limits.

