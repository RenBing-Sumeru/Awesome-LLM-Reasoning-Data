<!-- entry_id: tan-scaling-rl-2025 -->
<!-- card_type: recipes -->
# Scaling Behaviors of LLM Reinforcement Learning Post-Training

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tan-scaling-rl-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tan-scaling-rl-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tan-scaling-rl-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: programmatically_verifiable_outcome_data, scaling_rlvr_test_time_compute, frontier_reports_data_disclosure_ledger
> Links: [📄 Paper](https://arxiv.org/abs/2509.25300)

## TL;DR

This study measures how model size, data volume, and compute budget interact during RL post-training for mathematical reasoning.

It helps turn RLVR from recipe folklore into a scaling problem: data reuse, optimization steps, and model size have different effects on learning efficiency and final performance.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas role: scaling_study, construction_recipe.
- Domains: math, scaling, rlvr.
- Current status: verified.
- Why it belongs: Scaling-study card for RL post-training compute, data reuse, and mathematical-reasoning performance prediction.

## 2. What data object does it expose?

- Prompt/source: mathematical reasoning training/evaluation problems used across RL post-training runs.
- Trace/action author: Qwen2.5-series models generate candidate answers during RL.
- Answer/artifact format: problem, generated solution/answer, reward outcome, and training curve metrics.
- Process fields: model size, data volume, compute budget, optimization steps, reward signal, validation performance.
- Environment or substrate: RL post-training experiments over math tasks.
- Terminal predicate: answer-level correctness under a verifiable reward or math benchmark score.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic math reward / benchmark scoring.
- Recorded verifier/reward/environment: answer-level reward for mathematical reasoning and scaling curves.
- Supervision granularity: answer-level reward and run-level scaling metrics.

## 4. How is the data constructed?

- Base model: Qwen2.5 dense model series from 0.5B to 72B in the reported experiments.
- Teacher: reward signal and math benchmark labels.
- Generator: RL policy rollouts during post-training.
- Filtering rule: high-quality math data and reward-valid examples should be tracked.
- Sampling protocol: vary model scale, data volume, and compute budget.
- Inference budget: training compute and evaluation compute are separate axes.
- Optimizer/scaffold: RL post-training with scaling-law analysis.

## 5. How can it enter post-training?

Recorded training/evaluation use: rlvr, evaluation.

Use it to ask whether an RLVR gain comes from larger models, more unique data, more reuse, or more optimization steps.

## 6. What should readers audit?

- Are compute, data volume, and model size varied independently?
- Is data reuse counted separately from unique-sample count?
- Do scaling laws fit both base and instruction-tuned models?
- Are reward false positives tracked?
- Are validation metrics comparable across model sizes?

## 7. What is missing or risky?

- Math-only scaling can overstate transfer to open-ended reasoning.
- Repeated data reuse can improve metrics while increasing overfitting risk.
- Power-law fits can hide reward or benchmark artifacts.

## 8. Why it matters for post-training reasoning data

It helps turn RLVR from recipe folklore into a scaling problem: data reuse, optimization steps, and model size have different effects on learning efficiency and final performance.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2509.25300)

- Data ID: `tan-scaling-rl-2025`
- Citation status: verified
- Confidence: high
