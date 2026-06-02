<!-- entry_id: osworld-benchmarking-multimodal-agents-for-open-ended-tasks-in-real-computer-env-2024 -->
<!-- card_type: agents -->
# 🌐 OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments

## One-line takeaway

Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, agent_environment`. Local verification contract: `environmental`. Local training/evaluation use: `evaluation, agent_training`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | computer_use, agents, multimodal |
| Prompt/source | realistic computer-use task descriptions |
| Trace/action author | multimodal software agent |
| Answer/artifact format | GUI/OS action trajectory |
| Process fields | observation, action, environment state, result |
| Environment/substrate | desktop operating-system environment |
| Verifier/reward | task completion evaluator |
| Terminal predicate | successful completion of an OS-level task |

## Verification contract

- Check reset behavior, versioned state, observation/action schema, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `full_episode`.
- Recorded training/evaluation use: `evaluation, agent_training`.
- Construction layer: `search_substrate, release_audit`.

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

When reproducing this environment or trajectory artifact, fill these recipe fields before training. The missing knobs often matter more than the headline number of examples.

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

Local audit note: Primary arXiv link verified; reproduce with exact environment/image/task versions before using results comparatively.

## Links

- arXiv: [https://arxiv.org/abs/2404.07972](https://arxiv.org/abs/2404.07972)

## Citation

- Title: OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments
- Year/source: 2024 · NeurIPS
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
