<!-- entry_id: prm800k-2023 -->
<!-- card_type: verifiers -->
# 🧪 Let's Verify Step by Step

## One-line takeaway

Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning.

## Why this matters

This verifier card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `process_supervision, verifier_reward, data_release`. Local verification contract: `judgment_required, programmatic`. Local training/evaluation use: `process_supervision, reward_modeling, evaluation`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Verifier card |
| Domains | math |
| Prompt/source | math reasoning problems |
| Trace/action author | model-generated reasoning chains annotated by humans |
| Answer/artifact format | step-level labels and final answers |
| Process fields | step, label, solution trace |
| Environment/substrate | offline math reasoning traces |
| Verifier/reward | process reward model trained from step labels |
| Terminal predicate | step judged correct/incorrect |

## Verification contract

- Check parser behavior, answer extraction, unit-test strength, executable environment, and verifier false negatives.
- Check rubric text, rater expertise, judge model/version, calibration, and disagreement policy.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `step_level, process_reward`.
- Recorded training/evaluation use: `process_supervision, reward_modeling, evaluation`.
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

Local audit note: Primary arXiv link verified; exact annotation policy, annotator agreement, and data license still need local review.

## Links

- arXiv: [https://arxiv.org/abs/2305.20050](https://arxiv.org/abs/2305.20050)

## Citation

- Title: Let's Verify Step by Step
- Year/source: 2023 · arXiv
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
