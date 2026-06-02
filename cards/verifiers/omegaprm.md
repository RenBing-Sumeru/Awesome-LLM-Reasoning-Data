<!-- entry_id: omegaprm-automated-process-supervision-2024 -->
<!-- card_type: verifiers -->
# 🧪 OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision

## One-line takeaway

Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.

## Why this matters

This verifier card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `process_supervision, verifier_reward, construction_recipe`. Local verification contract: `programmatic, mixed`. Local training/evaluation use: `process_supervision, reward_modeling, test_time_compute`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Verifier card |
| Domains | math |
| Prompt/source | math reasoning problems |
| Trace/action author | model rollouts under MCTS-style search |
| Answer/artifact format | process supervision annotations |
| Process fields | partial reasoning prefix, first-error signal, positive/negative step examples |
| Environment/substrate | offline math search tree |
| Verifier/reward | automated process reward signal |
| Terminal predicate | localized step accepted/rejected by search-based supervision |

## Verification contract

- Check parser behavior, answer extraction, unit-test strength, executable environment, and verifier false negatives.
- Locate the boundary between programmatic checks, environment feedback, human judgment, and model judgment.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `step_level, process_reward`.
- Recorded training/evaluation use: `process_supervision, reward_modeling, test_time_compute`.
- Construction layer: `reward_verifier_layer, optimizer_scaffold`.

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

Local audit note: Primary arXiv link verified; search budget, verifier calibration, and generated-label noise require curator review.

## Links

- arXiv: [https://arxiv.org/abs/2406.06592](https://arxiv.org/abs/2406.06592)

## Citation

- Title: OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision
- Year/source: 2024 · arXiv
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
