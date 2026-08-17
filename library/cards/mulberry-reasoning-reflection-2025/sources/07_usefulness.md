# Usefulness

- **Multimodal data builder:** given image questions with reference answers and several complementary VLMs, reuse CoMCTS to output effective rationale targets plus optional error-to-correction targets. Success requires higher correct-path coverage at a fixed search budget and an independent audit of accepted steps.
- **Reflection-data auditor:** use the public ShareGPT records and the paper's tree schema to sample reflection transitions, label whether the negative step is genuinely wrong and whether the correction addresses it, and output a false-reflection report.
- **Do not use when:** the task lacks a reliable final-answer reference, independent node review is impossible, or upstream image licenses cannot be reconciled; then neither the stopping rule nor redistribution boundary is trustworthy.
