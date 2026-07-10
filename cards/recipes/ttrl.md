<!-- entry_id: ttrl-test-time-reinforcement-learning-2025 -->
<!-- card_type: recipes -->
# 🏗️ TTRL: Test-Time Reinforcement Learning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=ttrl-test-time-reinforcement-learning-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=ttrl-test-time-reinforcement-learning-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=ttrl-test-time-reinforcement-learning-2025&mode=compare)
<!-- ask_atlas:end -->

## One-line takeaway

Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.

## Why this matters

This recipe card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `construction_recipe, scaling_study, verifier_reward`. Local verification contract: `mixed`. Local training/evaluation use: `rlvr, test_time_compute, evaluation`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Recipe card |
| Domains | reasoning, unlabeled_data |
| Prompt/source | unlabeled test-time/task data |
| Trace/action author | model adapted during test-time RL |
| Answer/artifact format | candidate response with reward/adaptation signal |
| Process fields | unlabeled input, rollout, reward signal, updated policy state |
| Environment/substrate | test-time task distribution |
| Verifier/reward | task-specific or learned reward used during adaptation |
| Terminal predicate | improved test-time performance under adaptation budget |

## Verification contract

- Locate the boundary between programmatic checks, environment feedback, human judgment, and model judgment.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `scalar_reward, answer_level`.
- Recorded training/evaluation use: `rlvr, test_time_compute, evaluation`.
- Construction layer: `optimizer_scaffold, reward_verifier_layer, scaling_report`.

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

When reproducing this recipe or model-report pipeline, fill these recipe fields before training. The missing knobs often matter more than the headline number of examples.

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

Local audit note: Primary arXiv link verified; reward construction, adaptation budget, and train/test boundary should be audited before comparing results.

## Links

- arXiv: [https://arxiv.org/abs/2504.16084](https://arxiv.org/abs/2504.16084)

## Citation

- Title: TTRL: Test-Time Reinforcement Learning
- Year/source: 2025 · arXiv preprint arXiv:2504.16084
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
