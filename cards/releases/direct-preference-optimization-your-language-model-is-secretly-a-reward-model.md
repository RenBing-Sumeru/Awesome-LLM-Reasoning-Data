<!-- entry_id: direct-preference-optimization-your-language-model-is-secretly-a-reward-model-2023 -->
<!-- card_type: releases -->
# Direct preference optimization: Your language model is secretly a reward model

> Curation level: L5_audit_ready
> Category: foundations_instruction_preference_alignment
> Links: [📄 Paper](https://arxiv.org/abs/2305.18290)

## TL;DR

DPO trains a policy directly from preference pairs by turning the reward-model objective into a supervised contrastive optimization problem.

It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization.

## 1. What is this work?

- Year / venue: 2023 · NeurIPS.
- Atlas role: survey_background.
- Domains: alignment, preference.
- Current status: verified.
- Why it belongs: Core preference-learning objective for reasoning-data readers who need to distinguish data format from optimizer choice.

## 2. What data object does it expose?

- Prompt/source: preference datasets containing prompts and paired responses.
- Trace/action author: candidate responses from models; chosen/rejected labels from humans or preference sources.
- Answer/artifact format: prompt, chosen response, rejected response.
- Process fields: pairwise comparison and reference-policy likelihoods during training.
- Environment or substrate: offline preference-learning dataset.
- Terminal predicate: chosen response should be preferred under the target preference distribution.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: pairwise human/model preference.
- Recorded verifier/reward/environment: implicit reward induced by preference labels and reference policy.
- Supervision granularity: pairwise_preference.

## 4. How is the data constructed?

- Base model: supervised or pretrained policy plus reference policy.
- Teacher: preference labels.
- Generator: candidate response models.
- Filtering rule: retain reliable chosen/rejected pairs.
- Sampling protocol: offline preference dataset sampling.
- Inference budget: not central; training uses stored pairs.
- Optimizer/scaffold: DPO objective with temperature/beta controlling preference strength.

## 5. How can it enter post-training?

Recorded training/evaluation use: preference_learning.

Use it when the artifact is comparison data; do not treat DPO as evidence that preference labels are correct or complete.

## 6. What should readers audit?

- Who produced preference labels?
- Are chosen/rejected responses diverse enough?
- Does the objective overfit style rather than correctness?
- Is the reference policy specified?
- Are reasoning tasks evaluated separately from general helpfulness?

## 7. What is missing or risky?

- Preference labels can reward style over truth.
- The beta/reference-policy choice changes behavior.
- Pairwise wins may not imply robust reasoning under distribution shift.

## 8. Why it matters for post-training reasoning data

It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2305.18290)

- Data ID: `direct-preference-optimization-your-language-model-is-secretly-a-reward-model-2023`
- Citation status: verified
- Confidence: high
