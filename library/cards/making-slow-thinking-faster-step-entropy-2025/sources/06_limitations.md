The public repository does not verify a paper-matched 130K/70K corpus, raw step-entropy scores, `[SKIP]` masks, source-row identifiers, splits, source revisions, or retained/rejected traces. Source licenses, decontamination, decoding parameters, seeds, retries, and rollout counts are undisclosed. These omissions prevent independent data-lineage and selection-bias audits.

Step boundaries depend on model-generated double newlines, so formatting or segmentation changes can alter the entropy ranking and removed content. The fixed 80% ratio is validated mainly on mathematical tasks and selected MMLU domains. The final-answer extraction/checker and per-completion GRPO reward logs are not released, so correctness feedback and reward attribution cannot be independently reconstructed.

