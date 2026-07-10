<!-- entry_id: androidworld-a-dynamic-benchmarking-environment-for-autonomous-agents-2025 -->
<!-- card_type: agents -->
# 🌐 AndroidWorld: A dynamic benchmarking environment for autonomous agents

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=androidworld-a-dynamic-benchmarking-environment-for-autonomous-agents-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=androidworld-a-dynamic-benchmarking-environment-for-autonomous-agents-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=androidworld-a-dynamic-benchmarking-environment-for-autonomous-agents-2025&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🔁 Rollout / Search / TTC Trace (Track 05) · 🌐 Environment & Agent Trajectories (Track 06) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) -->

## One-line takeaway

Android tasks turn mobile UI state and action histories into evaluable agent trajectories.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, agent_environment`. Local verification contract: `environmental`. Local training/evaluation use: `evaluation, agent_training`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | mobile, agents |
| Prompt/source | mobile task instructions |
| Trace/action author | autonomous mobile agent |
| Answer/artifact format | Android action trajectory |
| Process fields | screen observation, UI action, state transition, result |
| Environment/substrate | Android device/emulator environment |
| Verifier/reward | task-specific success evaluator |
| Terminal predicate | goal state reached in mobile app |

## Verification contract

- Check reset behavior, versioned state, observation/action schema, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
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

Local audit note: Primary arXiv link verified; device images, app versions, and task resets should be pinned for reproducibility.

## Links

- arXiv: [https://arxiv.org/abs/2405.14573](https://arxiv.org/abs/2405.14573)

## Citation

- Title: AndroidWorld: A dynamic benchmarking environment for autonomous agents
- Year/source: 2024 · arXiv
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
