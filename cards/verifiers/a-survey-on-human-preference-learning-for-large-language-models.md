<!-- entry_id: a-survey-on-human-preference-learning-for-large-language-models-2024 -->
<!-- card_type: verifiers -->
# A Survey on Human Preference Learning for Large Language Models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-survey-on-human-preference-learning-for-large-language-models-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-survey-on-human-preference-learning-for-large-language-models-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-survey-on-human-preference-learning-for-large-language-models-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, preference_reward_feedback_data, judgment_rubric_domain_expert_data, training_usage_optimization_objectives, benchmarks_evaluation_surfaces
> Links: [Paper](https://arxiv.org/abs/2406.11191) · [DOI](https://doi.org/10.48550/arXiv.2406.11191)

## TL;DR

This survey reviews human preference feedback sources, formats, modeling methods, usage objectives, and evaluation.

It helps readers distinguish demonstrations, pairwise comparisons, scalar rewards, DPO-style objectives, and evaluation judgments.

## 1. What is this work?

- Year / venue: 2024 · arXiv.
- Atlas role: survey_background.
- Track decision: Track 00 · RLHF / reward-model surveys.
- Domains: human_preference, preference_learning, rlhf, alignment.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Human preference learning literature for LLM alignment.
- Trace/action author: Survey authors organize preference sources, formats, models, usage objectives, and evaluation methods.
- Answer/artifact format: Preference-centered taxonomy over feedback data, modeling, usage, and evaluation.
- Process fields: preference_source, preference_format, preference_model, optimization_objective, evaluation_protocol.
- Environment or substrate: LLM alignment pipelines using human preference signals.
- Terminal predicate: Whether a work collects, models, optimizes, or evaluates human preference signals.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required, mixed.
- Recorded verifier/reward/environment: Human preference transformed into reward, preference loss, or evaluation judgment.
- Supervision granularity: pairwise_preference, scalar_reward.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Human preference providers and preference-labeled datasets summarized by the survey.
- Generator: Survey taxonomy.
- Filtering rule: Preference-centered survey scope for LLM alignment.
- Sampling protocol: Literature review.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Preference modeling and preference optimization taxonomy.

## 5. How can it enter post-training?

Recorded training/evaluation use: preference_learning, reward_modeling, evaluation, audit.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Check annotator assumptions, preference format, and disagreement policy.
- Preference labels may not preserve reasoning correctness.
- Evaluation can conflate helpfulness, style, harmlessness, and reasoning quality.

## 7. What is missing or risky?

- No official code/data/project/HF links were verified.
- Dataset-level provenance remains primary-paper specific.

## 8. Why it matters for post-training reasoning data

It helps readers distinguish demonstrations, pairwise comparisons, scalar rewards, DPO-style objectives, and evaluation judgments.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2406.11191) · [DOI](https://doi.org/10.48550/arXiv.2406.11191)

- Data ID: `a-survey-on-human-preference-learning-for-large-language-models-2024`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
