Artifact evidence establishes the following released-data ledger:

| File | Rows | Whitespace-normalized exact duplicate rows | Unique prompt strings |
|---|---:|---:|---:|
| Original | 56,878 | 2,503 | 54,375 |
| Extended | 72,444 | 24,025 | 48,419 |
| Hard | 13,451 | 611 | 12,840 |

The duplicate counts are curator measurements over the complete official JSON files at commit `3fdd9a07b4fb01e06005e6e74fc56690cde8a341`, not author-reported statistics. They show that nominal row count and unique prompt count differ materially, especially in the extended file. Because rows lack source and duplicate-group identifiers, reusers cannot recover whether duplicates reflect repeated upstream collection, deliberate weighting, or accidental aggregation.

An exact-string comparison found six normalized prompts shared by `orz_math_72k_collection_extended.json` and the bundled `eval_data/math500.json`. No exact matches were found between the configured original 57k file and MATH500, AIME2024, or GPQA Diamond, and none were found for AIME2024 or GPQA Diamond across the three released training files. This is a **release-surface risk**, not proof that a reported checkpoint trained on the six MATH500 items: released configs use 57k, while the paper describes later 129k curation without an immutable run manifest.

The NeurIPS final reports ORZ-32B scores of 48.1 on AIME 2024, 36.0 on AIME 2025, 92.2 on MATH500, and 55.5 on GPQA Diamond. It also reports mixed-domain transfer and model-scale results. These are author-reported system outcomes, not independent evidence that the prompt corpus is decontaminated, correctly licensed, deduplicated, or fully bound to the checkpoint.

Failure analysis is relevant but not released as data. In the ORZ-7B comparison, GRPO destabilizes near step 240 as truncation and repetition metrics approach 1.0, while PPO remains stable in the reported experiment. English-plus-Chinese data also underperforms the English-only setting. The response streams, language labels, filtered rows, failed GRPO checkpoints, and immutable logs needed to audit those findings are absent.

Artifact verification is nevertheless substantive: official code, Dockerfile, configs, prompt datasets, policy weights, critic weights, project page, repository license, and NeurIPS paper exist. It does not upgrade the missing run-level data or upstream rights lineage.
