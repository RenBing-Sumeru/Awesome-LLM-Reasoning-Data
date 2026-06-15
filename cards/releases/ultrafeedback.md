<!-- entry_id: ultrafeedback-boosting-language-models-with-high-quality-feedback-2023 -->
<!-- card_type: releases -->
# UltraFeedback: Boosting language models with high-quality feedback

> Curation level: L5_audit_ready
> Category: foundations_instruction_preference_alignment, judgment_required_rubrics_safety_domain, construction_recipes_open_reasoning_data
> Links: [📄 Paper](https://arxiv.org/abs/2310.01377) · [🐙 Code](https://github.com/OpenBMB/UltraFeedback) · [🗂️ Data](https://huggingface.co/datasets/openbmb/UltraFeedback)

## TL;DR

UltraFeedback releases large-scale AI feedback with fine-grained ratings and critiques over diverse instruction-response pairs.

It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels.

## 1. What is this work?

- Year / venue: 2023 · ICML.
- Atlas role: data_release, verifier_reward, construction_recipe.
- Domains: preference-data, ai-feedback, reward-modeling.
- Current status: verified.
- Why it belongs: Preference-data release entry for AI-feedback construction, reward modeling, and comparison-pair derivation.

## 2. What data object does it expose?

- Prompt/source: instructions sampled from UltraChat, ShareGPT, Evol-Instruct, TruthfulQA, FalseQA, and FLAN-style sources.
- Trace/action author: multiple models generate responses and a strong AI judge assigns ratings/critiques.
- Answer/artifact format: instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.
- Process fields:
- source dataset, model identity, response, rating dimension, critique text, corrected overall score.
- Environment or substrate: offline feedback generation and reward-model training pipeline.
- Terminal predicate: response is rated/preferred under rubric dimensions such as helpfulness, honesty, and truthfulness.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required.
- Recorded verifier/reward/environment: AI-generated scalar and textual feedback over response quality dimensions.
- Supervision granularity: answer_level, scalar_reward, pairwise_preference.

## 4. How is the data constructed?

- Base model: open and proprietary response generators plus reward/critic models trained from the release.
- Teacher: AI judge annotations and rubric instructions.
- Generator: candidate responses are sampled from a diverse model pool.
- Filtering rule: post-release correction adjusts faulty overall scores and documents limitations.
- Sampling protocol: record prompt source, sampled models, rubric dimension, and correction version.
- Inference budget: number of completions and judge calls controls comparison density.
- Optimizer/scaffold: preference-data construction, reward-model training, and critique-model training.

## 5. How can it enter post-training?

Recorded training/evaluation use: preference_learning, reward_modeling, sft, safety_alignment.

Use it for preference learning and reward modeling only after pinning dataset version and checking correction notes.

## 6. What should readers audit?

- Which prompt sources dominate the released mixture?
- Are prompts, responses, and derived pairwise comparisons split consistently?
- Could benchmark prompts or answers be reused as training instructions?
- Which release version includes corrected overall scores?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- AI feedback can encode judge-model bias.
- A corrected dataset version can change reward-model behavior.
- Fine-grained scores may not translate cleanly into pairwise preferences.

## 8. Why it matters for post-training reasoning data

It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2310.01377) · [🐙 Code](https://github.com/OpenBMB/UltraFeedback) · [🗂️ Data](https://huggingface.co/datasets/openbmb/UltraFeedback)

- Data ID: `ultrafeedback-boosting-language-models-with-high-quality-feedback-2023`
- Citation status: verified
- Confidence: high
