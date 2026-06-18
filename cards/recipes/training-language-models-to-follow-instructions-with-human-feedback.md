<!-- entry_id: training-language-models-to-follow-instructions-with-human-feedback-2022 -->
<!-- card_type: recipes -->
# Training language models to follow instructions with human feedback

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-language-models-to-follow-instructions-with-human-feedback-2022&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-language-models-to-follow-instructions-with-human-feedback-2022&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-language-models-to-follow-instructions-with-human-feedback-2022&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: foundations_instruction_preference_alignment
> Links: [📄 Paper](https://arxiv.org/abs/2203.02155)

## TL;DR

InstructGPT establishes the demonstration, preference-comparison, reward-model, and PPO pipeline that many later post-training recipes inherit.

It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models.

## 1. What is this work?

- Year / venue: 2022 · NeurIPS.
- Atlas role: survey_background, model_report.
- Domains: alignment, chat.
- Current status: verified.
- Why it belongs: Core RLHF reference for understanding how human demonstrations and preferences become post-training data and reward signals.

## 2. What data object does it expose?

- Prompt/source: prompts sampled from user-facing API traffic and labeler-written prompts.
- Trace/action author: human labelers write demonstrations and rank model outputs.
- Answer/artifact format: demonstrations, candidate responses, pairwise/ranked preferences, and reward-model training examples.
- Process fields: prompt, demonstration, sampled responses, preference ranking, reward score.
- Environment or substrate: offline instruction-following tasks plus PPO training loop.
- Terminal predicate: labeler preference and reward-model score, not exact-answer correctness.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: human_preference / learned_reward.
- Recorded verifier/reward/environment: reward model trained on labeler comparisons.
- Supervision granularity: demonstration, pairwise_preference, scalar_reward.

## 4. How is the data constructed?

- Base model: pretrained GPT-3 family model.
- Teacher: human labelers and reward model.
- Generator: supervised fine-tuned policy samples candidate responses.
- Filtering rule: labeler quality process and prompt/task selection.
- Sampling protocol: candidate responses are generated for ranking.
- Inference budget: multiple model outputs per prompt for comparison.
- Optimizer/scaffold: SFT followed by reward modeling and PPO.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, preference_learning, reward_modeling.

Use it as a template for mapping data stages: SFT data teaches behavior, preference data trains the reward model, and PPO consumes reward feedback.

## 6. What should readers audit?

- Are prompt sources and labeler instructions disclosed?
- Are demonstrations and preference comparisons separated?
- Is reward-model overoptimization monitored?
- Are labeler demographics and disagreement policy visible?
- Can safety/helpfulness tradeoffs be inspected?

## 7. What is missing or risky?

- Preference data can encode labeler and prompt-distribution bias.
- Reward models can be exploited by the policy.
- The released paper describes the recipe but does not release the full proprietary data.

## 8. Why it matters for post-training reasoning data

It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2203.02155)

- Data ID: `training-language-models-to-follow-instructions-with-human-feedback-2022`
- Citation status: verified
- Confidence: high
