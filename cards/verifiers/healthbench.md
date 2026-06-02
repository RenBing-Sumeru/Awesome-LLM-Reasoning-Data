<!-- entry_id: healthbench-2025 -->
<!-- card_type: verifiers -->
# 🧪 HealthBench

## One-line takeaway

Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification.

## Why this matters

This verifier card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, verifier_reward`. Local verification contract: `judgment_required`. Local training/evaluation use: `evaluation, reward_modeling, safety_alignment`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Verifier card |
| Domains | health, safety, medical |
| Prompt/source | health-oriented evaluation prompts |
| Trace/action author | candidate assistant responses |
| Answer/artifact format | response with rubric/judge evaluation |
| Process fields | prompt, response, rubric dimension, score or label |
| Environment/substrate | offline health evaluation benchmark |
| Verifier/reward | rubric-guided expert/LLM judgment |
| Terminal predicate | response meets health-quality and safety criteria |

## Verification contract

- Check rubric text, rater expertise, judge model/version, calibration, and disagreement policy.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `scalar_reward, answer_level`.
- Recorded training/evaluation use: `evaluation, reward_modeling, safety_alignment`.
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

Local audit note: Primary arXiv link verified; medical safety, rater expertise, and rubric drift should remain explicit audit fields.

## Links

- arXiv: [https://arxiv.org/abs/2505.08775](https://arxiv.org/abs/2505.08775)

## Citation

- Title: HealthBench
- Year/source: 2025 · arXiv
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
