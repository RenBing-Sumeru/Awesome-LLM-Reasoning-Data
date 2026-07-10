<!-- entry_id: scaling-laws-for-reward-model-overoptimization-2022 -->
<!-- card_type: failures -->
# Scaling Laws for Reward Model Overoptimization

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-laws-for-reward-model-overoptimization-2022&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-laws-for-reward-model-overoptimization-2022&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-laws-for-reward-model-overoptimization-2022&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, preference_reward_feedback_data, scaling_rlvr_test_time_compute, audit_failure_contamination_verifier_attacks
> Links: [Paper](https://arxiv.org/abs/2210.10760) · [Venue](https://proceedings.mlr.press/v202/gao23h.html) · [OpenReview](https://openreview.net/forum?id=bBLjms8nZE) · [DOI](https://doi.org/10.48550/arXiv.2210.10760)

## TL;DR

This failure study measures when optimizing an imperfect proxy reward starts reducing gold-reward quality.

It gives reward-model readers a concrete audit lens for separating proxy reward gains from real preference improvement.

## 1. What is this work?

- Year / venue: 2022 · ICML.
- Atlas role: scaling_study, audit_failure, verifier_reward.
- Track decision: Track 00 · RLHF / reward-model surveys.
- Domains: rlhf, reward_modeling, reward_overoptimization, alignment.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Synthetic RLHF setup using a fixed gold reward model as stand-in for human preferences.
- Trace/action author: Policies generate candidate outputs optimized by RL or best-of-n sampling.
- Answer/artifact format: Proxy reward scores, gold reward scores, KL budget, optimization method, and scale variables.
- Process fields: proxy_reward_score, gold_reward_score, optimization_method, kl_penalty, best_of_n_budget, reward_model_size.
- Environment or substrate: Synthetic reward-model overoptimization experiments.
- Terminal predicate: Gold reward improves or degrades as proxy reward is optimized.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed.
- Recorded verifier/reward/environment: Proxy reward model compared against a stronger gold reward model.
- Supervision granularity: pairwise_preference, scalar_reward.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Fixed gold reward model used as synthetic human labeler.
- Generator: Policy optimized via RL or best-of-n sampling.
- Filtering rule: Synthetic preference labels from the gold reward model.
- Sampling protocol: RL optimization and best-of-n sampling across scale variables.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Reward-model optimization with KL penalty and best-of-n selection.

## 5. How can it enter post-training?

Recorded training/evaluation use: audit, evaluation, reward_modeling.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Check proxy/gold reward separation, KL budget, and best-of-n budget.
- Do not treat reward score improvement as data-quality proof.
- Verify whether conclusions transfer to each domain's feedback contract.

## 7. What is missing or risky?

- Official code/data/project links remain unknown.
- The synthetic gold reward is a stand-in for human validation.

## 8. Why it matters for post-training reasoning data

It gives reward-model readers a concrete audit lens for separating proxy reward gains from real preference improvement.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2210.10760) · [Venue](https://proceedings.mlr.press/v202/gao23h.html) · [OpenReview](https://openreview.net/forum?id=bBLjms8nZE) · [DOI](https://doi.org/10.48550/arXiv.2210.10760)

- Data ID: `scaling-laws-for-reward-model-overoptimization-2022`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
