<!-- entry_id: rewardbench-evaluating-reward-models-for-language-modeling-2024 -->
<!-- card_type: verifiers -->
# RewardBench: Evaluating Reward Models for Language Modeling

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-evaluating-reward-models-for-language-modeling-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-evaluating-reward-models-for-language-modeling-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-evaluating-reward-models-for-language-modeling-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: preference_reward_feedback_data, benchmarks_evaluation_surfaces, judgment_rubric_domain_expert_data
> Links: [arXiv](https://arxiv.org/abs/2403.13787) - [Code](https://github.com/allenai/reward-bench) - [Data](https://huggingface.co/datasets/allenai/reward-bench)

## TL;DR

RewardBench evaluates reward models on prompt/chosen/rejected trios spanning chat, reasoning, and safety.

It is a reward-model evaluation surface. A high RewardBench score should not be treated as proof that a reward model will improve downstream post-training or that its training data is clean.

## 1. What is this work?

RewardBench is a benchmark and leaderboard for evaluating whether reward models assign higher scores to preferred responses than rejected responses.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- chosen response,
- rejected response,
- subset,
- category,
- reward-model score.

The benchmark mixes chat, chat-hard, safety, reasoning, and prior preference-test sources.

## 3. What is the verifier / reward / judge / environment?

The verifier is the reward model being evaluated. The benchmark label says which response should be preferred; the reward model passes an item when it scores the chosen response above the rejected response.

The contract is judgment-required and mixed because labels come from benchmark curation and preference-style comparisons rather than a single programmatic oracle.

## 4. How is the data constructed?

The reported recipe includes:

- collect prompt/chosen/rejected trios from several categories,
- include easier and harder chat comparisons,
- include safety and reasoning comparisons,
- run reward models over chosen/rejected pairs,
- report accuracy by category and aggregate leaderboard score.

Unknown locally: exact HF dataset license and subset revision to pin for reuse.

## 5. How can it enter post-training?

Recorded use:

- evaluation,
- reward_modeling.

Use it to audit reward models before relying on them as objectives or selectors. Do not use leaderboard rank as evidence that the underlying preference data is clean or that policy optimization will be safe.

## 6. What should readers audit?

- Aggregate accuracy can hide subset-specific failures.
- Leaderboard exposure can create benchmark overfitting.
- Pairwise labels may encode hidden style or value preferences.
- RewardBench accuracy is not proof of downstream RLHF policy quality.
- Safety and reasoning subsets should be inspected separately.

## 7. What is missing or risky?

- Exact HF dataset revision and license.
- Category/subset definitions.
- Whether local reward models have trained on overlapping prompts.
- How safety-sensitive examples are handled.
- Whether the evaluation harness treats ties and formatting consistently.
- Domain-level failures rather than only aggregate accuracy.

## 8. Why it matters for post-training reasoning data

RewardBench gives the track a concrete feedback-bearing benchmark object: prompt, chosen, rejected, subset, and reward score. It helps distinguish reward-model evaluation from reward-model training data.

## 9. Links and citation

- Institution: Allen Institute for AI; University of Washington; Berkman Klein Center, Harvard Law.
- Official links: arXiv, code, data, and leaderboard/project.
- arXiv: https://arxiv.org/abs/2403.13787
- DOI: https://doi.org/10.48550/arXiv.2403.13787
- Code: https://github.com/allenai/reward-bench
- Data: https://huggingface.co/datasets/allenai/reward-bench
- Project: https://huggingface.co/spaces/allenai/reward-bench
- Data ID: `rewardbench-evaluating-reward-models-for-language-modeling-2024`
- Citation status: verified
- Confidence: high
