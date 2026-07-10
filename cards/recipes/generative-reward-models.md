<!-- entry_id: generative-reward-models-2024 -->
<!-- card_type: recipes -->
# Generative Reward Models

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=generative-reward-models-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=generative-reward-models-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=generative-reward-models-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives, data_construction_open_release_recipes
> Links: [arXiv](https://arxiv.org/abs/2410.12832)

## TL;DR

Generative Reward Models trains LLMs to generate rationales and synthetic preference judgments, combining RLHF-style labels with RLAIF-style feedback.

The reward object includes generated reasoning text. That text needs the same audit attention as the final preference label.

## 1. What is this work?

This paper studies generative reward models that output rationales and judgments, rather than only scalar scores. It compares STaR-SFT, STaR-DPO, rationale bootstrapping, and majority-vote variants.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- candidate response A,
- candidate response B,
- generated rationale,
- synthetic preference label,
- majority-vote samples,
- reward-model decision.

The local metadata records UltraFeedback and UltraInteract as training datasets, with RewardBench used for out-of-distribution evaluation.

## 3. What is the verifier / reward / judge / environment?

The verifier is a generative preference judge. It produces rationale text and a preference judgment, optionally aggregated by majority vote.

The generated rationale is not ground truth. It can rationalize a biased judgment.

## 4. How is the data constructed?

The reported recipe includes:

- train on human preference data,
- generate rationales and preference judgments,
- use STaR-style iterative rationale training,
- compare SFT and DPO variants,
- optionally bootstrap rationales from larger models,
- use majority vote over 32 samples for scoring.

Recorded models include Llama 3.1 8B Instruct, Llama 3.1 70B Instruct, and GPT-4 in bootstrap comparisons. Unknown locally: official code/data artifacts, exact train/eval split, temperature, and decontamination.

## 5. How can it enter post-training?

Recorded use:

- reward modeling,
- evaluation.

Use this card to classify generative reward-model feedback. Do not treat RewardBench gains or majority-vote gains as evidence that generated rationales are clean.

## 6. What should readers audit?

- Synthetic labels can inherit judge-model bias.
- Generated rationales may be persuasive but wrong.
- Majority vote can amplify shared model bias.
- UltraFeedback and UltraInteract licenses and revisions must be audited.
- Rationales may be off-policy relative to the base model being trained.

## 7. What is missing or risky?

- Exact UltraFeedback and UltraInteract revisions.
- Whether generated rationales are released.
- Model used for rationale bootstrapping.
- Sampling settings for majority vote.
- Whether rationales are evaluated independently.
- Source licenses and decontamination.

## 8. Why it matters for post-training reasoning data

Generative reward models blur the line between reward labels and reasoning traces. For the atlas, they make critique/rationale text a first-class part of preference-feedback data.

## 9. Links and citation

- Institution: Contextual AI; Stanford University.
- arXiv: https://arxiv.org/abs/2410.12832
- DOI: https://doi.org/10.48550/arXiv.2410.12832
- Code: null
- Data: null
- Data ID: `generative-reward-models-2024`
- Citation status: verified
- Confidence: medium
