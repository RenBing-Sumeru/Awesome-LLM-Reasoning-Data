<!-- entry_id: reinforcement-learning-for-llm-post-training-a-survey-2024 -->
<!-- card_type: recipes -->
# Reinforcement Learning for LLM Post-Training: A Survey

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforcement-learning-for-llm-post-training-a-survey-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforcement-learning-for-llm-post-training-a-survey-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforcement-learning-for-llm-post-training-a-survey-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, preference_reward_feedback_data, programmatically_verifiable_outcome_data, rollout_search_test_time_trace_data, training_usage_optimization_objectives, scaling_rlvr_test_time_compute, audit_failure_contamination_verifier_attacks
> Links: [arXiv](https://arxiv.org/abs/2407.16216)

## TL;DR

This survey unifies RLHF, DPO, PPO/GRPO, and RLVR as LLM post-training methods.

It is background taxonomy, not a reusable dataset. Use it to separate reward sources and optimization scaffolds.

## 1. What is this work?

The survey organizes reinforcement-learning-based LLM post-training methods and compares human preference rewards, AI feedback, verifiable rewards, and direct preference objectives.

For this atlas, it is a recipe/background card.

## 2. What data object does it expose?

The relevant record is literature-level, not instance-level. It can include:

- prompt sampling,
- response sampling,
- reward source,
- gradient coefficient,
- optimizer family.

No standalone dataset is released by this survey.

## 3. What is the verifier / reward / judge / environment?

The verifier surface is conceptual: learned preference rewards, verifiable rewards, and policy-gradient objectives.

The survey should not be treated as evidence that any particular reward data source is clean.

## 4. How is the data constructed?

Reported construction is a literature review and unified policy-gradient framing of SFT, RLHF, RLVR, PPO, GRPO, and DPO.

Unknown locally: no code/data artifact is provided as a primary reusable release.

## 5. How can it enter post-training?

Recorded use:

- audit.

Use it to map reward contracts before curating primary papers. Do not cite it as a data release.

## 6. What should readers audit?

- Method comparisons can mix data effects with optimizer and sampling-budget effects.
- RLHF and RLVR rewards are often discussed together despite different verification contracts.
- Survey papers do not provide reusable training data objects.
- Implementation details can dominate reported gains if not separated from data quality.

## 7. What is missing or risky?

- Which primary paper or dataset a claim comes from.
- Whether the reward is human, AI-generated, programmatic, or learned.
- Whether optimization details are separated from data quality.
- Whether a cited method has official artifacts.

## 8. Why it matters for post-training reasoning data

It helps distinguish human preference rewards, AI feedback, verifiable rewards, and direct preference objectives.

## 9. Links and citation

- Institution: Salesforce AI Research and collaborators; exact affiliations should be verified from PDF if needed.
- Official links: arXiv and DOI.
- arXiv: https://arxiv.org/abs/2407.16216
- DOI: https://doi.org/10.48550/arXiv.2407.16216
- Code: null
- Data: null
- Project: null
- Hugging Face: null
- Data ID: `reinforcement-learning-for-llm-post-training-a-survey-2024`
- Citation status: verified
- Confidence: high