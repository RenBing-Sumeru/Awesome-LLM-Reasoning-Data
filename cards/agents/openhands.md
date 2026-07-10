<!-- entry_id: openhands-2025 -->
<!-- card_type: agents -->
# 🌐 OpenHands: An Open Platform for AI Software Developers as Generalist Agents

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openhands-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openhands-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openhands-2025&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🤝 Preference & Reward Feedback (Track 02) · 🔁 Rollout / Search / TTC Trace (Track 05) · 🌐 Environment & Agent Trajectories (Track 06) · 🎯 Training Usage & Objectives (Track 09) · 🚀 Frontier Disclosure Ledger (Track 12) -->

## One-line takeaway

Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `infrastructure, agent_environment`. Local verification contract: `environmental, mixed`. Local training/evaluation use: `agent_training, evaluation`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | software_engineering, agents |
| Prompt/source | software-development tasks or GitHub issues |
| Trace/action author | coding agent |
| Answer/artifact format | tool/action/observation trajectory |
| Process fields | plan, shell command, file edit, browser/API action, observation |
| Environment/substrate | sandboxed software-development runtime |
| Verifier/reward | task, test, or human-review outcome depending on benchmark |
| Terminal predicate | software task resolved or benchmark pass |

## Verification contract

- Check reset behavior, versioned state, observation/action schema, hidden dependencies, and terminal predicate.
- Locate the boundary between programmatic checks, environment feedback, human judgment, and model judgment.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `agent_training, evaluation`.
- Construction layer: `search_substrate, optimizer_scaffold, release_audit`.

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

Local audit note: Primary arXiv, code, and project links verified; individual trajectory datasets built with OpenHands still need separate cards.

## Links

- arXiv: [https://arxiv.org/abs/2407.16741](https://arxiv.org/abs/2407.16741)
- Code: [https://github.com/All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands)
- Project: [https://www.openhands.dev/](https://www.openhands.dev/)

## Citation

- Title: OpenHands: An Open Platform for AI Software Developers as Generalist Agents
- Year/source: 2024 · ICLR
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
