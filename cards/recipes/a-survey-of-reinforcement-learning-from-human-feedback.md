<!-- entry_id: a-survey-of-reinforcement-learning-from-human-feedback-2023 -->
<!-- card_type: recipes -->
# A Survey of Reinforcement Learning from Human Feedback

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-survey-of-reinforcement-learning-from-human-feedback-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-survey-of-reinforcement-learning-from-human-feedback-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-survey-of-reinforcement-learning-from-human-feedback-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, preference_reward_feedback_data, judgment_rubric_domain_expert_data, training_usage_optimization_objectives, audit_failure_contamination_verifier_attacks
> Links: [Paper](https://arxiv.org/abs/2312.14925) · [Venue](https://openreview.net/forum?id=f7OkIurx4b) · [DOI](https://doi.org/10.48550/arXiv.2312.14925)

## TL;DR

This survey maps RLHF as a feedback-to-reward-to-policy pipeline.

It helps readers distinguish human feedback, reward modeling, and policy optimization before comparing them with verifiable-reward reasoning data.

## 1. What is this work?

- Year / venue: 2023 · TMLR.
- Atlas role: survey_background.
- Track decision: Track 00 · RLHF / reward-model surveys.
- Domains: rlhf, reward_modeling, alignment.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: RLHF and preference-based RL literature across control, robotics, and LLM settings.
- Trace/action author: Survey authors synthesize RLHF pipelines and feedback taxonomies.
- Answer/artifact format: Survey taxonomy over feedback collection, reward modeling, and policy optimization.
- Process fields: feedback_source, preference_format, reward_model_objective, policy_optimization_loop, application_domain.
- Environment or substrate: RLHF pipelines spanning LLMs and broader RL domains.
- Terminal predicate: Classifies whether a paper uses human feedback as reward source.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required, mixed.
- Recorded verifier/reward/environment: Human feedback transformed into learned reward or policy-optimization signal.
- Supervision granularity: pairwise_preference, scalar_reward.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Human feedback providers summarized across the literature.
- Generator: Survey taxonomy.
- Filtering rule: RLHF/PbRL literature scope.
- Sampling protocol: Literature review.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: RLHF reward-model and policy-optimization scaffold.

## 5. How can it enter post-training?

Recorded training/evaluation use: reward_modeling, preference_learning, audit.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Do not infer reusable datasets from survey descriptions alone.
- Follow primary sources for provenance, license, split, and annotator details.
- Avoid overgeneralizing broad RLHF lessons to verifiable reasoning.

## 7. What is missing or risky?

- No official code/data artifacts were verified.
- Survey taxonomy does not settle dataset-level metadata.

## 8. Why it matters for post-training reasoning data

It helps readers distinguish human feedback, reward modeling, and policy optimization before comparing them with verifiable-reward reasoning data.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2312.14925) · [Venue](https://openreview.net/forum?id=f7OkIurx4b) · [DOI](https://doi.org/10.48550/arXiv.2312.14925)

- Data ID: `a-survey-of-reinforcement-learning-from-human-feedback-2023`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
