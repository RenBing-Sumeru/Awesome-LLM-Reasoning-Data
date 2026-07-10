<!-- entry_id: reinforcement-learning-for-llm-post-training-a-survey-2024 -->
<!-- card_type: recipes -->
# Reinforcement Learning for LLM Post-Training: A Survey

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforcement-learning-for-llm-post-training-a-survey-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforcement-learning-for-llm-post-training-a-survey-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforcement-learning-for-llm-post-training-a-survey-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, preference_reward_feedback_data, programmatically_verifiable_outcome_data, rollout_search_test_time_trace_data, training_usage_optimization_objectives, scaling_rlvr_test_time_compute, audit_failure_contamination_verifier_attacks
> Links: [Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216)

## TL;DR

This survey connects RLHF, DPO, PPO/GRPO, and RLVR as LLM post-training methods.

It helps readers avoid conflating human preference rewards with programmatic or verifiable rewards in reasoning-data pipelines.

## 1. What is this work?

- Year / venue: 2024 · arXiv.
- Atlas role: survey_background.
- Track decision: Track 00 · Post-training surveys.
- Domains: post_training, rlhf, rlvr, preference_learning, policy_optimization.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: RL-based LLM post-training literature across SFT, RLHF, DPO, PPO, GRPO, and RLVR.
- Trace/action author: Survey authors unify post-training objectives and implementation details.
- Answer/artifact format: Technical taxonomy comparing RLHF and RLVR policy-gradient-style methods.
- Process fields: prompt_sampling, response_sampling, reward_source, gradient_coefficient, optimizer_family, implementation_detail.
- Environment or substrate: LLM post-training algorithms and reasoning tasks such as math and coding.
- Terminal predicate: Whether a method uses human reward, verifiable reward, direct preference objective, or policy-gradient optimization.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed, programmatic.
- Recorded verifier/reward/environment: Learned preference rewards, verifiable rewards, and policy-gradient objectives.
- Supervision granularity: scalar_reward, answer_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Literature covering SFT, human feedback, verifiable rewards, and post-training optimization.
- Generator: Technical survey and unified policy-gradient framework.
- Filtering rule: RL-based LLM post-training methods.
- Sampling protocol: Literature review.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Unified policy-gradient view of SFT, RLHF, RLVR, PPO, GRPO, and DPO.

## 5. How can it enter post-training?

Recorded training/evaluation use: reward_modeling, preference_learning, rlvr, audit.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Separate data source, reward contract, rollout policy, optimizer, model size, and inference budget.
- Check false positives, reward hacking, sampling budget, and benchmark reuse.
- Do not attribute gains to generic RL without naming the data and reward object.

## 7. What is missing or risky?

- No official code/data/project/HF links were verified.
- Survey claims require primary-source follow-up before artifact reuse.

## 8. Why it matters for post-training reasoning data

It helps readers avoid conflating human preference rewards with programmatic or verifiable rewards in reasoning-data pipelines.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216)

- Data ID: `reinforcement-learning-for-llm-post-training-a-survey-2024`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
