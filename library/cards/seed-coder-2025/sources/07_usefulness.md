This report is a strong construction blueprint when its missing artifacts are treated as requirements. A reproducible implementation should publish source/commit manifests, dedup and Tree-sitter versions, oracle prompts/explanations, scorer weights and per-language calibration, fastText seeds/rounds, category thresholds, and stage mixture accounting.

For SFT/DPO/RL, release generated and independent tests, sandbox images, compiler/runtime matrices, limits, all candidates and failures, preference rules, reward/parser code, and prompt-to-test-to-reward lineage. Ablate external teacher labels, fastText expansion, generated-test correction, DPO, warmup distillation, and GRPO under matched compute.

For audit, compare scorer judgments against humans and execution, measure site/language retention, test semantic/repository leakage beyond 10-grams, and separate code/weight MIT terms from source-data rights.

Reuse class: suitable as a recipe, ablation plan, and audit checklist. Released weights/code support inference research. Training reuse is blocked because the datasets, scorer, tests, sandbox, rewards, full configs, and source licenses are absent.
