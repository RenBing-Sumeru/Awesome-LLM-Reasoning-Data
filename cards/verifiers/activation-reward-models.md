<!-- entry_id: activation-reward-models-for-few-shot-model-alignment-2025 -->
<!-- card_type: verifiers -->
# Activation Reward Models for Few-Shot Model Alignment

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=activation-reward-models-for-few-shot-model-alignment-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=activation-reward-models-for-few-shot-model-alignment-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=activation-reward-models-for-few-shot-model-alignment-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, benchmarks_evaluation_surfaces, audit_failure_contamination_verifier_attacks
> Links: [arXiv](https://arxiv.org/abs/2507.01368)

## TL;DR

Activation Reward Models use a small set of preference examples to steer internal activations and derive reward scores without finetuning the model.

This is a reward-construction recipe, not a released broad preference dataset. Benchmark gains should not be treated as evidence that the activation reward is generally reliable.

## 1. What is this work?

The paper proposes a few-shot reward-modeling method that selects attention heads and applies activation steering so a model can score preferred versus rejected outputs.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- response pair,
- chosen label,
- few-shot preference examples,
- selected attention-head activations,
- reward score.

Sources recorded in local metadata: RewardBench, MultimodalRewardBench, and paper-introduced PreferenceHack.

## 3. What is the verifier / reward / judge / environment?

The verifier is an activation-steered reward model. It uses few-shot labeled preference examples and scores responses through token-probability decisions such as the probability of a positive answer token.

The feedback is learned from small preference examples and model internals. It is not an independent human audit of each new response.

## 4. How is the data constructed?

The reported recipe includes:

- collect a small preference set per split,
- extract internal activations,
- select attention heads with a REINFORCE-style optimization procedure,
- steer activations at inference time,
- score pairwise preferences or hacked/non-hacked alternatives.

Known local details: LLaVA-OneVision-7B and Qwen2.5-VL-7B are used; PreferenceHack uses 80 few-shot training examples and 920 evaluation examples per split; attention-head selection uses 600 optimization steps.

Unknown locally: official code URL, released PreferenceHack dataset URL, and temperature.

## 5. How can it enter post-training?

Recorded use:

- reward_modeling,
- evaluation.

Use this as a verifier/reward recipe for few-shot alignment experiments. Do not treat it as a plug-in replacement for a trained reward model without checking transfer stability.

## 6. What should readers audit?

- It requires access to internal activations, so it does not apply to closed-source models.
- Few-shot activation signals may overfit the small preference set.
- The method is reported mainly in single-turn settings.
- PreferenceHack uses synthetic bias injection, which may not cover real reward-hacking behavior.
- Benchmark improvements are not data-quality proof.

## 7. What is missing or risky?

- Official code and data release status.
- Exact PreferenceHack construction and license.
- Whether selected heads transfer across models, tasks, and modalities.
- Sensitivity to the few-shot example set.
- Whether the reward signal remains stable under paraphrase and adversarial style changes.
- Decontamination and benchmark overlap with RewardBench/MultimodalRewardBench.

## 8. Why it matters for post-training reasoning data

It broadens the Preference & Reward Feedback track beyond trained scalar reward models by exposing activation-derived rewards as another feedback object.

## 9. Links and citation

- Institution: UC Berkeley; Carnegie Mellon University; IBM Research; MIT-IBM Watson AI Lab.
- Official links: arXiv and DOI; official code/data links are null.
- arXiv: https://arxiv.org/abs/2507.01368
- DOI: https://doi.org/10.48550/arXiv.2507.01368
- Code: null
- Data: null
- Data ID: `activation-reward-models-for-few-shot-model-alignment-2025`
- Citation status: verified
- Confidence: medium
