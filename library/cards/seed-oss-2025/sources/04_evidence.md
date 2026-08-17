The official repository and model card identify Seed-OSS as a 2025-08-20 ByteDance Seed release, not a paper. The official Hugging Face collection contains the three 36B checkpoints—Base, Base-woSyn, and Instruct—and each official model page identifies Apache-2.0.

The model card's Training Data section reports 12T pretraining tokens, three source classes, and a July 2024 knowledge cutoff. The same card names deduplication, desensitization, quality, CSAM and toxic-content filtering, plus algorithmic and manual PII checks. No per-class token totals or manifests are provided.

The repository's base-model table reports contrasting scores for the synthetic-augmented and woSyn weights. Examples include MATH 81.7 versus 61.3 and MBPP 80.6 versus 74.6 in favor of Base, while GPQA-D is 31.7 versus 35.2 and SimpleQA 5.8 versus 7.4 in favor of woSyn. These are single release-table comparisons without matched-training documentation, uncertainty, or significance.

The Thinking Budget section defines the serialization and behavior: no budget defaults to unlimited reasoning, zero requests a direct response, and positive budgets are recommended in 512-token multiples because those intervals were extensively trained. It shows fields named `seed:think` and `seed:cot_budget_reflect`. It does not disclose the budget-training distribution or verifier.

The Instruct evaluation table reports, among other results, AIME24 91.7, AIME25 84.7, LiveCodeBench v6 67.4, IFEval 85.8, TAU1-Retail 70.4, TAU1-Airline 46, SWE-bench/OpenHands 56, SWE-bench/AgentLess 47, Multi-SWE-bench 17, RULER-128K 94.6, and AIR-Bench 75.6. These figures are author-reported and scaffold-dependent; raw outputs and harness pins are not bundled.

The release explicitly says the ArcAGI-V2 official evaluation set was not used in training. This is a narrow negative-membership statement and cannot be generalized to other benchmarks. Evaluation sampling uses temperature 1.1/top-p 0.95, except TAU-bench at 1/0.7; these are inference settings.
