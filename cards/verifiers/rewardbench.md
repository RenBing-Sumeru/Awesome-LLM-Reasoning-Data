<!-- entry_id: rewardbench-evaluating-reward-models-for-language-modeling-2024 -->
<!-- card_type: verifiers -->
# RewardBench: Evaluating Reward Models for Language Modeling

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-evaluating-reward-models-for-language-modeling-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-evaluating-reward-models-for-language-modeling-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-evaluating-reward-models-for-language-modeling-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🤝 Preference & Reward Feedback (Track 02) · ⚖️ Judgment / Rubric / Domain Expert (Track 07) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🧪 Reward-model benchmarks

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2403.13787)

## TL;DR

RewardBench evaluates reward models on prompt/chosen/rejected trios spanning chat, reasoning, and safety, including structured preference failures.

It helps readers test whether a reward signal generalizes beyond helpfulness style into subtle factual, reasoning, refusal, and safety preferences.

## 1. What is this work?

- Year / venue: 2024 · NeurIPS.
- Atlas role: benchmark, verifier_reward.
- Domains: preference, safety, chat.
- Current status: verified.
- Why it belongs: Core reward-model benchmark for preference-signal evaluation and RLHF/RLAIF audit.

## 2. What data object does it expose?

- Prompt/source: curated prompts across chat, reasoning, and safety categories.
- Trace/action author: candidate model responses paired as chosen/rejected.
- Answer/artifact format: prompt, chosen response, rejected response.
- Process fields: preference pair, category, reward-model score or ranking.
- Environment or substrate: offline reward-model evaluation benchmark.
- Terminal predicate: reward model assigns higher score to chosen response.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required and mixed.
- Recorded verifier/reward/environment: pairwise preference benchmark for reward models.
- Supervision granularity: pairwise_preference and scalar_reward.

## 4. How is the data constructed?

- Base model: evaluated reward models vary.
- Teacher: benchmark preference labels.
- Generator: candidate response sources vary by subset.
- Filtering rule: curated subtle comparisons including reasoning and safety cases.
- Sampling protocol: category-balanced benchmark subsets.
- Inference budget: reward-model scoring, not rollout generation.
- Optimizer/scaffold: evaluation harness and leaderboard.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, reward_modeling, preference_learning.

Use it to audit reward models before using them in post-training; a reward model that wins easy style pairs may still fail reasoning or safety comparisons.

## 6. What should readers audit?

- Which subsets drive the score?
- Does the reward model over-prefer verbosity or refusal?
- Are reasoning examples separated from general chat?
- Are preference labels stable under paraphrase?
- Is leaderboard overfitting monitored?

## 7. What is missing or risky?

- Reward benchmarks can become optimization targets.
- Pairwise labels may encode hidden values.
- OOD reasoning and safety cases can fail even when aggregate scores look good.

## 8. Why it matters for post-training reasoning data

It helps readers test whether a reward signal generalizes beyond helpfulness style into subtle factual, reasoning, refusal, and safety preferences.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2403.13787)

- Data ID: `rewardbench-evaluating-reward-models-for-language-modeling-2024`
- Citation status: verified
- Confidence: high
