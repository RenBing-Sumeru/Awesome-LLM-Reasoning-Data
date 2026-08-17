- Treat length-normalized step entropy as a model-derived selection signal, not proof that a low-entropy step is semantically unnecessary or correct.
- Trace the 130K source mixture through 80% masking, the 4,096-token filter, 70K SFT set, and random 10K GRPO subset; no row-level lineage is released.
- Read the GRPO result as a joint optimization of answer correctness, skip ratio, skip number, and length, rather than a pure measurement of CoT compression.
- Verify any reuse claim against the code repository: it exposes scripts, but inspected official materials do not expose the reported trace corpus or reward logs.

