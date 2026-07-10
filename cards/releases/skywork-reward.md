<!-- entry_id: skywork-reward-bag-of-tricks-for-reward-modeling-in-llms-2024 -->
<!-- card_type: releases -->
# Skywork-Reward: Bag of Tricks for Reward Modeling in LLMs

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=skywork-reward-bag-of-tricks-for-reward-modeling-in-llms-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=skywork-reward-bag-of-tricks-for-reward-modeling-in-llms-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=skywork-reward-bag-of-tricks-for-reward-modeling-in-llms-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, data_construction_open_release_recipes, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2410.18451) - [Data](https://huggingface.co/collections/Skywork/skywork-reward-data-collection-66d7fda6a5098dc77035336d) - [Models](https://huggingface.co/collections/Skywork/skywork-reward-model-66d7fbdebae0e60d00a6b60d)

## TL;DR

Skywork-Reward releases a curated 80K public preference collection and trains reward models with data-centric filtering and Bradley-Terry reward modeling.

The useful artifact is the source-accounted preference mixture. RewardBench scores are not evidence that the preference pairs are clean.

## 1. What is this work?

Skywork-Reward is a reward-model data release and training recipe. It curates public preference sources into Skywork Reward Preference 80K and releases trained Skywork reward models.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- chosen response,
- rejected response,
- dataset source,
- annotator or judge type,
- response generator,
- reward-model score.

The recorded source mixture is HelpSteer2, OffsetBias, WildGuardMix, Magpie Ultra, Magpie Pro Llama 3, Magpie Pro Llama 3.1, and Magpie Air.

## 3. What is the verifier / reward / judge / environment?

The training verifier is a Bradley-Terry-style scalar reward model over pairwise preferences.

The source labels mix human annotations, GPT-style LLM labels, and ArmoRM-guided labels depending on subset. Those sources should not be treated as interchangeable.

## 4. How is the data constructed?

The reported recipe includes:

- select public preference sources,
- curate Magpie-derived response pairs,
- preprocess and filter WildGuardMix,
- apply ArmoRM-guided scoring where relevant,
- build Skywork Reward Preference 80K,
- train Skywork-Reward-Gemma-2-27B and Skywork-Reward-Llama-3.1-8B,
- release v0.2 after removing RewardBench-contaminated Magpie Ultra prompts.

Recorded training settings include global batch size 128, AdamW, weight decay 1e-3, cosine learning-rate schedule, 2 epochs, learning rate 2e-6 for 8B, and 1e-6 for 27B.

Unknown locally: source-dataset licenses and exact train/validation split.

## 5. How can it enter post-training?

Recorded use:

- reward modeling,
- evaluation.

Use this release to study reward-model data curation. Do not use leaderboard rank as proof of data quality.

## 6. What should readers audit?

- LLM-judged and human-labeled subsets have different bias profiles.
- Source licenses require subset-level audit.
- RewardBench contamination is explicitly discussed and partially mitigated.
- Magpie-derived responses may carry generator-specific style.
- Filtering can improve leaderboard performance while narrowing coverage.

## 7. What is missing or risky?

- Exact Hugging Face dataset revision.
- Whether v0.1 or v0.2 is being used.
- Source-dataset licenses.
- Train/validation split.
- RewardBench decontamination script and n-gram settings.
- Whether source subset weights match the target use case.

## 8. Why it matters for post-training reasoning data

Skywork-Reward is a strong preference-feedback release because it exposes both curated pairwise data and trained reward models. The curation and contamination details are part of the data object, not afterthoughts.

## 9. Links and citation

- Institution: Skywork AI.
- arXiv: https://arxiv.org/abs/2410.18451
- Data: https://huggingface.co/collections/Skywork/skywork-reward-data-collection-66d7fda6a5098dc77035336d
- Models: https://huggingface.co/collections/Skywork/skywork-reward-model-66d7fbdebae0e60d00a6b60d
- DOI: https://doi.org/10.48550/arXiv.2410.18451
- Code: null
- Data ID: `skywork-reward-bag-of-tricks-for-reward-modeling-in-llms-2024`
- Citation status: verified
- Confidence: high
