<!-- entry_id: towards-data-centric-rlhf-simple-metrics-for-preference-dataset-comparison-2024 -->
<!-- card_type: recipes -->
# Towards Data-Centric RLHF: Simple Metrics for Preference Dataset Comparison

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=towards-data-centric-rlhf-simple-metrics-for-preference-dataset-comparison-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=towards-data-centric-rlhf-simple-metrics-for-preference-dataset-comparison-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=towards-data-centric-rlhf-simple-metrics-for-preference-dataset-comparison-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, data_construction_open_release_recipes, training_usage_optimization_objectives, audit_failure_contamination_verifier_attacks
> Links: [OpenReview](https://openreview.net/forum?id=B6qsCHhMco) - [arXiv](https://arxiv.org/abs/2409.09603)

## TL;DR

Towards Data-Centric RLHF proposes simple dataset-level metrics for comparing public pairwise preference datasets used to train reward models.

It is an audit card, not a new preference dataset. Its metrics help ask better questions about preference-data quality, but they do not prove that a dataset will improve downstream RLHF policy behavior.

## 1. What is this work?

This paper studies how public preference datasets behave when used for reward-model training. It compares Anthropic HH-RLHF, UltraFeedback, LMSYS Arena Preferences, and PKU-SafeRLHF through scale, label-noise invariance, response-pair information content, in-domain accuracy, and RewardBench generalization.

It belongs in Preference & Reward Feedback because it gives curators a way to audit preference datasets before treating them as interchangeable RLHF inputs.

## 2. What data object does it expose?

The analyzed record is the pairwise preference example:

- prompt,
- chosen response,
- rejected response,
- preference label,
- source dataset,
- dataset size or subsample,
- label-noise condition,
- response-pair similarity,
- reward-model accuracy,
- RewardBench result.

The paper does not release a new preference corpus. Its data object is an audit/comparison record over existing preference datasets.

## 3. What is the verifier / reward / judge / environment?

The feedback contract is mixed:

- original pairwise preference labels from source datasets,
- Bradley-Terry reward models trained from those labels,
- in-domain held-out accuracy,
- RewardBench evaluation for generalization.

RewardBench is an evaluation proxy here. It should not be treated as proof that the source dataset is intrinsically high quality or safe for downstream RLHF.

## 4. How is the data constructed?

The analysis recipe includes:

- choose frequently used public preference datasets,
- train reward models from different base model sizes,
- vary dataset size to study scaling behavior,
- inject random label flips to study noise sensitivity,
- measure response-pair information content through similarity,
- evaluate in-domain and on RewardBench.

Unknown or not released in the local metadata: official code, exact dataset revisions, exact train/test split revisions, and complete preprocessing scripts.

## 5. How can it enter post-training?

Recorded use:

- audit,
- evaluation,
- data selection.

Use it to compare candidate preference datasets before reward-model training. Do not list it as a direct training-data release unless a separate official artifact is pinned.

## 6. What should readers audit?

- Dataset-level metrics can hide annotator disagreement and label policy.
- Random label flips are only a proxy for real preference noise.
- Response-pair similarity does not fully capture semantic difficulty or safety relevance.
- Reward-model accuracy depends on base model, objective, and source dataset.
- RewardBench generalization can become a leaderboard target.
- A dataset that helps a reward model score well may still fail downstream RLHF or safety evaluation.

## 7. What is missing or risky?

- Exact source dataset revisions for HH-RLHF, UltraFeedback, LMSYS Arena Preferences, and PKU-SafeRLHF.
- Whether preprocessing, filtering, and subsampling are reproducible.
- Whether source dataset licenses permit the intended audit or training use.
- Which reward-model base checkpoint and objective were used.
- Whether in-domain splits overlap with training data.
- Whether RewardBench examples could have influenced model or data selection.
- Whether a metric is being used for triage or as a hard quality guarantee.

## 8. Why it matters for post-training reasoning data

Preference datasets are often chosen by name recognition or size. This paper gives the atlas a better audit habit: compare what the preference pairs actually contain, how robust labels are, and whether reward-model behavior changes with dataset composition.

The reusable lesson is to separate data-selection evidence from downstream model-quality claims.

## 9. Links and citation

- Institution: Stanford University; Apple.
- OpenReview: https://openreview.net/forum?id=B6qsCHhMco
- arXiv: https://arxiv.org/abs/2409.09603
- DOI: https://doi.org/10.48550/arXiv.2409.09603
- Data ID: `towards-data-centric-rlhf-simple-metrics-for-preference-dataset-comparison-2024`
- Citation status: verified
- Confidence: high
