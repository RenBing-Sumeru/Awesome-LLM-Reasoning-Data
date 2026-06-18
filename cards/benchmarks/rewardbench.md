<!-- entry_id: rewardbench-evaluating-reward-models-for-language-modeling-2024 -->
<!-- card_type: benchmarks -->
# 🧰 RewardBench Benchmark Lens

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-evaluating-reward-models-for-language-modeling-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-evaluating-reward-models-for-language-modeling-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-evaluating-reward-models-for-language-modeling-2024&mode=compare)
<!-- ask_atlas:end -->

## One-line takeaway

Reward benchmarks should be audited as feedback instruments, not only as leaderboard tables.

## Why this matters

This supplementary benchmark card gives readers a benchmark-first view of RewardBench. It complements the verifier card by asking how preference pairs, judge/reward scores, and subset mixtures affect what a reward model appears to know. A high-impact atlas needs this lens because many post-training data decisions are made by comparing reward models before anyone inspects their failure cases.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | preference and instruction-following prompts |
| Trace/action author | candidate language-model responses |
| Answer/artifact format | pairwise or scalar reward-model decisions |
| Process fields | prompt, chosen/rejected response, subset, score |
| Environment/substrate | offline reward-model benchmark |
| Verifier/reward | reward model or judge under evaluation |
| Terminal predicate | correct ranking or scoring under the benchmark split |

## Verification contract

- Contract: judgment-required and mixed.
- Key audit move: inspect whether the benchmark tests reward-model robustness or mainly reproduces its source mixture.
- Probe judge drift, distribution shift, verbosity/style bias, and safety-sensitive subsets.

## Supervision granularity

- Granularity: pairwise preference and scalar reward.
- Use: reward-model evaluation, preference-learning diagnostics, and judge calibration.
- Do not treat it as ordinary SFT data; the feedback object is the comparison/score.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Source mixture | unknown until primary metadata is curated |
| Filtering rule | benchmark construction and subset policy |
| Evaluation protocol | reward-model ranking/scoring on held-out prompts |

## How it can be used

- Compare reward models before RLHF/RLVR use.
- Identify subsets where preference signals are brittle.
- Add issue notes when a benchmark score hides failure mode diversity.
- Pair with `docs/06_verifiers_and_rewards.md` and `docs/09_audit_and_failure_modes.md`.

## Audit checklist

- [ ] Check the official source links before promoting new claims.
- [ ] Record source mixture, split policy, license, lineage, and decontamination status.
- [ ] Identify the verifier, judge, benchmark, or failure trigger that turns examples into feedback.
- [ ] Separate training use from evaluation use.
- [ ] Keep failed, rejected, and ambiguous cases visible when they explain risk.

## Known limitations / failure modes

- A benchmark can overfit reward-model families if source mixture and hidden evaluation rules are not clear.
- Pairwise labels can conflate helpfulness, harmlessness, style, verbosity, and reasoning quality.
- Local atlas metadata remains partial until source mixture and license are fully checked.

## Links

- arXiv: [https://arxiv.org/abs/2403.13787](https://arxiv.org/abs/2403.13787)
- Verifier card: [../verifiers/rewardbench.md](../verifiers/rewardbench.md)

## Citation

- Title: RewardBench: Evaluating Reward Models for Language Modeling
- Year/source: 2024 · NeurIPS/arXiv
- Local status: `partial` · citation status: `verified`
