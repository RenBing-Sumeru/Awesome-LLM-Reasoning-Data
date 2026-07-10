<!-- entry_id: spurious-rewards-2025 -->
<!-- card_type: verifiers -->
# Spurious Rewards: Rethinking Training Signals in RLVR

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spurious-rewards-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spurious-rewards-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spurious-rewards-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, programmatically_verifiable_outcome_data, training_usage_optimization_objectives, scaling_rlvr_test_time_compute, audit_failure_contamination_verifier_attacks
> Links: [arXiv](https://arxiv.org/abs/2506.10947)

## TL;DR

Spurious Rewards shows that RLVR can improve math benchmark scores even under rewards with little or negative correctness signal.

It is a reward-signal audit: rising reward or benchmark score should not be treated as proof that the verifier teaches genuine reasoning.

## 1. What is this work?

The paper studies RLVR under ground-truth and spurious reward variants across model families.

For this atlas, it belongs as a verifier/reward card because the object of study is the reward signal itself.

## 2. What data object does it expose?

The relevant record can include:

- problem,
- response,
- reward type,
- verifier reward,
- model family,
- training step,
- code-reasoning indicator,
- evaluation result.

Prompt sources include math reasoning tasks such as MATH-500-style evaluation.

## 3. What is the verifier / reward / judge / environment?

The verifier includes ground-truth, random, format, incorrect-label, one-shot RL, majority-voting, or other spurious reward signals.

The terminal predicate is whether gains reflect real correctness or amplification of high-prior/spurious behaviors.

## 4. How is the data constructed?

Reported construction details include:

- run GRPO-based RLVR,
- compare ground-truth and spurious rewards,
- study Qwen2.5-Math-7B, Llama3, and OLMo2 families,
- inspect whether reward variants amplify existing priors,
- compare reward and evaluation outcomes.

Unknown locally: official code/data, rollout count, temperature, and exact split details.

## 5. How can it enter post-training?

Recorded use:

- audit,
- evaluation,
- rlvr.

Use it to audit verifiable reward design. Do not use benchmark gains as evidence that the reward signal is valid.

## 6. What should readers audit?

- Reward increases can reflect shortcut exploitation rather than capability gains.
- Qwen2.5-Math code-reasoning priors may be amplified by spurious rewards.
- Results are model-family dependent and may not generalize.
- Benchmark gains should not be treated as proof that the reward signal is valid.
- Official code/data artifacts are not pinned.

## 7. What is missing or risky?

- Whether official code/data has appeared.
- Exact math task mixture and split.
- Reward definition for each spurious variant.
- Model family and initialization.
- Whether local improvements are capability gains or prior amplification.

## 8. Why it matters for post-training reasoning data

It warns that verifiable or scalar rewards can surface pretrained shortcuts rather than teach genuine reasoning.

## 9. Links and citation

- Institution: University of Washington; Allen Institute for AI; exact full affiliations should be verified from the PDF if needed.
- Official links: arXiv and DOI.
- arXiv: https://arxiv.org/abs/2506.10947
- DOI: https://doi.org/10.48550/arXiv.2506.10947
- Code: null
- Data: null
- Project: null
- Hugging Face: null
- Data ID: `spurious-rewards-2025`
- Citation status: verified
- Confidence: high