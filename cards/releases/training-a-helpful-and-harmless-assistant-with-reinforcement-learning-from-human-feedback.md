<!-- entry_id: training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-2022 -->
<!-- card_type: releases -->
# Training a Helpful and Harmless Assistant with RLHF

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-2022&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-2022&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-2022&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, instruction_demonstration_rationale_data, preference_reward_feedback_data, judgment_rubric_domain_expert_data, data_construction_open_release_recipes, training_usage_optimization_objectives
> Links: [Paper](https://arxiv.org/abs/2204.05862) · [Data](https://github.com/anthropics/hh-rlhf) · [HF](https://huggingface.co/datasets/Anthropic/hh-rlhf) · [DOI](https://doi.org/10.48550/arXiv.2204.05862)

## TL;DR

HH-RLHF releases helpfulness and harmlessness chosen/rejected preference pairs for reward-model training.

It is a concrete open assistant feedback object: prompt context, chosen response, rejected response, split, and safety-specific reward-modeling risks.

## 1. What is this work?

- Year / venue: 2022 · arXiv.
- Atlas role: data_release, verifier_reward, construction_recipe, survey_background.
- Track decision: Track 00 + Track 01 · RLHF / reward-model surveys.
- Domains: alignment, safety, rlhf, chat.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Helpfulness and harmlessness assistant conversations.
- Trace/action author: Assistant model outputs compared by human preference labelers.
- Answer/artifact format: Chosen/rejected text pairs for helpfulness and harmlessness preference modeling.
- Process fields: conversation_prompt, chosen_response, rejected_response, tranche, train_test_split.
- Environment or substrate: Offline assistant preference-modeling dataset.
- Terminal predicate: Chosen response preferred over rejected response by the feedback process.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required.
- Recorded verifier/reward/environment: Human preference labels used to train preference/reward models.
- Supervision granularity: pairwise_preference, scalar_reward.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Human preference labelers.
- Generator: Assistant policies including base, rejection-sampled, and online policy samples.
- Filtering rule: Preference collection, reward-model training, and RLHF stage selection.
- Sampling protocol: Prompt batches and response candidates across helpful/harmless settings.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Preference model plus RLHF policy optimization.

## 5. How can it enter post-training?

Recorded training/evaluation use: preference_learning, reward_modeling, safety_alignment.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Audit labeler instructions, prompt sources, tranche differences, and safety coverage.
- Do not treat chosen responses as safe SFT targets without extra review.
- Handle harmful/offensive content carefully.

## 7. What is missing or risky?

- Decontamination details and full labeler disagreement policy remain unknown.
- Official code/project links remain null.

## 8. Why it matters for post-training reasoning data

It is a concrete open assistant feedback object: prompt context, chosen response, rejected response, split, and safety-specific reward-modeling risks.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2204.05862) · [Data](https://github.com/anthropics/hh-rlhf) · [HF](https://huggingface.co/datasets/Anthropic/hh-rlhf) · [DOI](https://doi.org/10.48550/arXiv.2204.05862)

- Data ID: `training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-2022`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
