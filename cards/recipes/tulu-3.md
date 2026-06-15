<!-- entry_id: tulu-3-pushing-frontiers-in-open-language-model-post-training-2024 -->
<!-- card_type: recipes -->
# Tulu 3: Pushing frontiers in open language model post-training

> Curation level: L5_audit_ready
> Category: frontier_model_reports, construction_recipes_open_reasoning_data, scaling_test_time_compute_rlvr, foundations_instruction_preference_alignment
> Links: [📄 Paper](https://arxiv.org/abs/2411.15124) · [🏛️ OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [🐙 Code](https://github.com/allenai/open-instruct) · [🗂️ Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [🌐 Project](https://allenai.org/blog/tulu-3-technical)

## TL;DR

Tulu 3 releases an open post-training stack with SFT data, preference data, RLVR recipes, code, models, and evaluation guidance.

It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.

## 1. What is this work?

- Year / venue: 2024 · arXiv.
- Atlas role: model_report, construction_recipe, data_release.
- Domains: open-post-training, instruction-tuning, rlvr.
- Current status: verified.
- Why it belongs: Open model-report and recipe entry for full-stack post-training data, preference learning, and RLVR.

## 2. What data object does it expose?

- Prompt/source: Tulu 3 SFT mixtures, preference mixtures, RLVR tasks, and evaluation/dev sets.
- Trace/action author: base models and post-trained variants produce responses under SFT, DPO/PPO-style, and RLVR stages.
- Answer/artifact format: instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.
- Process fields:
- dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.
- Environment or substrate: open-instruct training/evaluation stack and Hugging Face dataset/model releases.
- Terminal predicate: post-trained model improves target capabilities without leaking evaluation data or overfitting one benchmark.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed, programmatic, judgment_required.
- Recorded verifier/reward/environment: mixture of preference labels, reward models, and verifiable rewards depending on stage.
- Supervision granularity: answer_level, pairwise_preference, scalar_reward.

## 4. How is the data constructed?

- Base model: Llama 3.1-family base models in the reported Tulu 3 stack.
- Teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.
- Generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
- Filtering rule: decontamination and dataset curation rules are part of the release.
- Sampling protocol: pin dataset collections, model size, training stage, and evaluation suite.
- Inference budget: evaluation setup and RL rollout budget should be reported separately from SFT data size.
- Optimizer/scaffold: open-instruct SFT, preference optimization, and RLVR training code.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, preference_learning, rlvr, evaluation.

Use it as a reference implementation for open post-training stack design and release documentation.

## 6. What should readers audit?

- Which datasets enter each post-training stage?
- Are development and unseen evaluations separated?
- Which benchmark contamination filters were applied?
- Can each model checkpoint be traced to its recipe and data mixture?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Full-stack releases can obscure which component caused a gain.
- Evaluation suites can leak into data curation loops.
- RLVR improvements may be domain-specific.

## 8. Why it matters for post-training reasoning data

It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2411.15124) · [🏛️ OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [🐙 Code](https://github.com/allenai/open-instruct) · [🗂️ Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [🌐 Project](https://allenai.org/blog/tulu-3-technical)

- Data ID: `tulu-3-pushing-frontiers-in-open-language-model-post-training-2024`
- Citation status: verified
- Confidence: high
