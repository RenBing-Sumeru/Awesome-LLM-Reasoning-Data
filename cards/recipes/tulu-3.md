<!-- entry_id: tulu-3-pushing-frontiers-in-open-language-model-post-training-2024 -->
<!-- card_type: recipes -->
# Tulu 3: Pushing frontiers in open language model post-training

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tulu-3-pushing-frontiers-in-open-language-model-post-training-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tulu-3-pushing-frontiers-in-open-language-model-post-training-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tulu-3-pushing-frontiers-in-open-language-model-post-training-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: preference_reward_feedback_data, data_construction_open_release_recipes, training_usage_optimization_objectives, frontier_reports_data_disclosure_ledger
> Links: [Paper](https://arxiv.org/abs/2411.15124) - [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) - [Code](https://github.com/allenai/open-instruct) - [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) - [Project](https://allenai.org/blog/tulu-3-technical)

## TL;DR

Tulu 3 is an open post-training recipe and model report that exposes SFT mixtures, preference data, RLVR tasks, training code, model releases, and evaluation guidance.

For the Preference & Reward Feedback track, read it as a multi-stage ledger: preference pairs, reward models, and verifiable rewards appear in different parts of the pipeline and should not be collapsed into one feedback signal.

## 1. What is this work?

Tulu 3 is a full-stack open post-training release from the Allen Institute for AI and the University of Washington. It builds on Llama 3.1-family base models and reports SFT, preference tuning, RLVR, data curation, decontamination, evaluation, and infrastructure choices.

It is not a single preference dataset. It is a recipe/report that helps readers map data objects to the objective stage that consumes them.

## 2. What data object does it expose?

The public data object is a mixture of stage-specific records:

- SFT instruction-response examples,
- preference pairs for preference tuning,
- verifiable task outputs for RLVR,
- model-evaluation records,
- dataset shard and objective-stage metadata,
- decontamination and evaluation split notes where disclosed.

The data object should be read with the training stage attached. A prompt-response record, a chosen/rejected pair, and an RLVR task are different feedback-bearing objects even when they appear in the same post-training stack.

## 3. What is the verifier / reward / judge / environment?

The feedback contract is mixed:

- judgment-required preference labels or reward-model signals for preference tuning,
- programmatic/verifiable rewards for RLVR tasks,
- benchmark and evaluation signals for reporting and model selection.

The paper's benchmark results are useful for understanding the recipe, but they are not proof that any single data mixture is high quality. Data quality still depends on source mixture, split policy, decontamination, reward contract, and stage attribution.

## 4. How is the data constructed?

The recipe includes:

- prompt sourcing and curation for SFT and downstream stages,
- synthetic and public data sources for target skills,
- preference-tuning data and optimization choices,
- RLVR tasks with verifiable rewards,
- open-instruct training/evaluation infrastructure,
- development and unseen evaluation organization,
- decontamination procedures discussed in the report.

Unknown or still worth pinning before reuse: exact per-shard license details, exact sampling settings for every source, rollout counts, temperature, and inference budget for every stage.

## 5. How can it enter post-training?

Recorded uses:

- SFT,
- preference learning,
- reward modeling where the stage exposes reward signals,
- RLVR,
- evaluation and reporting.

Use Tulu 3 as a reproducible recipe reference, not as a single reusable preference dataset. Any downstream reuse should name the exact dataset collection, model size, objective stage, and evaluation split.

## 6. What should readers audit?

- Full-stack releases can hide which component caused a gain.
- Preference labels, reward models, and verifiable rewards can be conflated.
- Evaluation suites can leak into data curation loops.
- RLVR gains may be domain-specific and verifier-specific.
- Decontamination may be reported at the recipe level while a downstream user needs per-shard evidence.
- Benchmark improvements should not be treated as direct evidence that the preference data alone is high quality.

## 7. What is missing or risky?

- Exact Hugging Face dataset collection and revision.
- Which shard enters SFT, preference tuning, RLVR, evaluation, or ablation.
- License and provenance for each source mixture.
- Decontamination method and target benchmark list.
- Whether preference data, reward-model data, and RLVR data are separated in downstream training.
- Whether evaluation prompts are excluded from training, filtering, and model selection.
- Which model checkpoint corresponds to which data mixture and objective stage.

## 8. Why it matters for post-training reasoning data

Tulu 3 is useful because it makes modern post-training less opaque. It shows how open projects can publish data mixtures, objective stages, training code, evaluation infrastructure, and partial audit evidence together.

The reusable lesson is not "this benchmark score proves the data is good." The lesson is that every post-training claim should preserve the data object, feedback signal, objective stage, and audit trail that produced it.

## 9. Links and citation

- Institution: Allen Institute for AI; University of Washington.
- Paper: https://arxiv.org/abs/2411.15124
- OpenReview: https://openreview.net/forum?id=i1uGbfHHpH
- Code: https://github.com/allenai/open-instruct
- Data: https://huggingface.co/collections/allenai/tulu-3-datasets
- Project: https://allenai.org/blog/tulu-3-technical
- Data ID: `tulu-3-pushing-frontiers-in-open-language-model-post-training-2024`
- Citation status: verified
- Confidence: high
