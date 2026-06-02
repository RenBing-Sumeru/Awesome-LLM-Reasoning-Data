<!-- entry_id: rewardbench-evaluating-reward-models-for-language-modeling-2024 -->
<!-- card_type: verifiers -->
# 🧪 RewardBench: Evaluating Reward Models for Language Modeling

## One-line takeaway

Reward-model benchmark for understanding where preference/judge signals generalize and where they fail under distribution shift.

## Why this matters

This verifier card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, verifier_reward`. Local verification contract: `judgment_required, mixed`. Local training/evaluation use: `evaluation, reward_modeling, preference_learning`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Verifier card |
| Domains | preference, safety, chat |
| Prompt/source | preference and instruction-following prompts |
| Trace/action author | candidate model responses |
| Answer/artifact format | pairwise or scalar reward decisions |
| Process fields | prompt, chosen/rejected response, reward model score |
| Environment/substrate | offline preference benchmark |
| Verifier/reward | reward model or judge |
| Terminal predicate | preference ranking correctness |

## Verification contract

- Check rubric text, rater expertise, judge model/version, calibration, and disagreement policy.
- Locate the boundary between programmatic checks, environment feedback, human judgment, and model judgment.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `pairwise_preference, scalar_reward`.
- Recorded training/evaluation use: `evaluation, reward_modeling, preference_learning`.
- Construction layer: `reward_verifier_layer, release_audit`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | unknown |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | unknown |

When reproducing this verifier or reward surface, fill these recipe fields before training. The missing knobs often matter more than the headline number of examples.

## How it can be used

- Reading map: compare it with neighboring entries in the same paper-category page.
- Engineering map: decide whether it supports SFT, distillation, RLVR, process supervision, reward modeling, agent training, evaluation, or audit.
- Audit map: open an issue for every `unknown` field that affects reproducibility, safety, or benchmark comparison.
- Teaching map: use it to show how reasoning data differs from plain instruction data.

## Audit checklist

- [ ] Official paper, code, data, project, and dataset links are checked.
- [ ] Source mixture, split policy, license, and lineage are recorded.
- [ ] Verifier, reward, judge, rubric, environment, or test suite is reproducible.
- [ ] Rejected/failed/ambiguous candidates are considered, not only successful examples.
- [ ] Contamination, benchmark leakage, false positives, false negatives, and reward hacking are documented.
- [ ] Training use is not broader than what the source supports.

## Known limitations / failure modes

- Source mixture: unknown.
- Split: unknown.
- Decontamination: unknown.
- License: unknown.
- Lineage: unknown.
- Known failure modes: unknown; add false positives, false negatives, leakage, judge drift, and reward hacking notes when known.

Local audit note: Primary arXiv link verified; dataset mixture, judge model versions, and safety-sensitive subsets need explicit review.

## Links

- arXiv: [https://arxiv.org/abs/2403.13787](https://arxiv.org/abs/2403.13787)

## Citation

- Title: RewardBench: Evaluating Reward Models for Language Modeling
- Year/source: 2024 · NeurIPS
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
