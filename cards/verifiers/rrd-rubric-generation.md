<!-- entry_id: rethinking-rubric-generation-for-improving-llm-judge-and-reward-modeling-for-open-ended-tasks-2026 -->
<!-- card_type: verifiers -->
# Rethinking Rubric Generation for Improving LLM-as-a-Judge and Reward Modeling for Open-Ended Tasks
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rethinking-rubric-generation-for-improving-llm-judge-and-reward-modeling-for-open-ended-tasks-2026&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rethinking-rubric-generation-for-improving-llm-judge-and-reward-modeling-for-open-ended-tasks-2026&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rethinking-rubric-generation-for-improving-llm-judge-and-reward-modeling-for-open-ended-tasks-2026&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, judgment_rubric_domain_expert_data, benchmarks_evaluation_surfaces, audit_failure_contamination_verifier_attacks
> Links: [arXiv](https://arxiv.org/abs/2602.05125)

## TL;DR

RRD studies recursive rubric generation and filtering to improve LLM judges and reward modeling for open-ended tasks.

Its main contribution for this atlas is a rubric-construction recipe: decompose, filter, weight, and audit rubric criteria before using them as judge or reward-model signals.

## 1. What is this work?

The paper argues that rubric generation is a key bottleneck for LLM-as-a-judge and reward modeling on open-ended tasks.

For this atlas, it is both a construction recipe and an audit reference: it treats rubric quality as part of the feedback data, not as a hidden prompt detail.

## 2. What data object does it expose?

The relevant record can include:

- prompt,
- candidate response,
- coarse rubric,
- decomposed criterion,
- filtered criterion,
- criterion weight,
- judge score,
- preference judgment,
- reward signal.

Prompt/evaluation sources include JudgeBench, PPE, WildChat, HealthBench-Hard, and BiGGen Bench.

## 3. What is the verifier / reward / judge / environment?

The verifier is model-judged and mixed. Recursively decomposed and filtered rubrics are used to improve judge scoring and reward-model signals.

The terminal predicate is whether a judge or reward model scores or ranks an open-ended response according to the generated rubric criteria.

## 4. How is the data constructed?

Reported construction details include:

- propose coarse rubrics,
- decompose them into finer criteria,
- filter misaligned or redundant criteria,
- terminate after rejected proposals,
- whiten correlated dimensions,
- evaluate on JudgeBench and PPE,
- use Dr.GRPO on a 4K English non-toxic de-duplicated WildChat prompt subset for policy training experiments.

Unknown locally: official code/data release, temperature, and exact inference budget.

## 5. How can it enter post-training?

Recorded use:

- evaluation,
- reward_modeling.

Use the recipe to inspect rubric construction for judges and reward models. Do not treat improved judge or RFT performance as proof that the rubric data is complete, unbiased, or reusable without review.

## 6. What should readers audit?

- Generated rubrics can miss preference dimensions that humans use.
- Redundant or correlated criteria can distort scalar rewards.
- Rubric-conditioned RFT gains are not evidence that the rubric data is clean.
- Rubric errors can contaminate both judge evaluation and reward-model training.
- No official code, data, or project artifact is pinned locally.

## 7. What is missing or risky?

- Whether official code/data/project links are released later.
- Exact prompt subsets and split construction.
- License constraints for JudgeBench, PPE, WildChat, HealthBench-Hard, and BiGGen Bench use.
- How criterion filtering and whitening are implemented.
- Whether the generated criteria cover the local task's actual preference dimensions.

## 8. Why it matters for post-training reasoning data

RRD moves rubric generation into the data pipeline. That makes reward feedback easier to audit because the criteria, weights, and filtering choices are visible parts of the training object.

## 9. Links and citation

- Institution: Meta.
- Official links: arXiv and DOI.
- arXiv: https://arxiv.org/abs/2602.05125
- DOI: https://doi.org/10.48550/arXiv.2602.05125
- Code: null
- Data: null
- Project: null
- Hugging Face: null
- Data ID: `rethinking-rubric-generation-for-improving-llm-judge-and-reward-modeling-for-open-ended-tasks-2026`
- Citation status: verified
- Confidence: high
