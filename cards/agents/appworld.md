<!-- entry_id: appworld-a-controllable-world-of-apps-and-people-for-benchmarking-interactive-co-2024 -->
<!-- card_type: agents -->
# 🌐 AppWorld: A controllable world of apps and people for benchmarking interactive coding agents

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=appworld-a-controllable-world-of-apps-and-people-for-benchmarking-interactive-co-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=appworld-a-controllable-world-of-apps-and-people-for-benchmarking-interactive-co-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=appworld-a-controllable-world-of-apps-and-people-for-benchmarking-interactive-co-2024&mode=compare)
<!-- ask_atlas:end -->

## One-line takeaway

Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, agent_environment`. Local verification contract: `environmental, programmatic`. Local training/evaluation use: `evaluation, agent_training`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | apps, agents, code |
| Prompt/source | app/user task scenarios |
| Trace/action author | interactive coding or tool-use agent |
| Answer/artifact format | API/tool action trajectory |
| Process fields | tool call, state transition, observation, outcome |
| Environment/substrate | simulated app ecosystem with users and APIs |
| Verifier/reward | programmatic environment assertions |
| Terminal predicate | task satisfied in app state |

## Verification contract

- Check parser behavior, answer extraction, unit-test strength, executable environment, and verifier false negatives.
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

Local audit note: Primary arXiv link verified; exact app database seeds and task splits should be checked before training reuse.

## Links

- arXiv: [https://arxiv.org/abs/2407.18901](https://arxiv.org/abs/2407.18901)

## Citation

- Title: AppWorld: A controllable world of apps and people for benchmarking interactive coding agents
- Year/source: 2024 · arXiv
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
