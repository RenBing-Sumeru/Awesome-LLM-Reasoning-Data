<!-- entry_id: generative-agents-interactive-simulacra-of-human-behavior-2023 -->
<!-- card_type: agents -->
# 🌐 Generative Agents: Interactive Simulacra of Human Behavior

<!-- track: 🧭 Foundations & Primers (Track 00) · 🌐 Environment & Agent Trajectories (Track 06) -->

## One-line takeaway

Classic sandbox-agent architecture combining observation, memory, reflection, planning, and social action.

## Why this matters

P0 Track 06 historical memory/workflow anchor: it made memory, reflection, planning, and sandbox interaction central to LLM-agent behavior.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | interactive sandbox scenario and agent experiences |
| Trace/action author | simulated generative agents and user interactions |
| Answer/artifact format | agent behavior, memory, reflection, and plan within a sandbox town |
| Process fields | observation, memory, reflection, plan, action, social interaction |
| Environment/substrate | interactive sandbox simulation inspired by The Sims |
| Verifier/reward | human/believability evaluation and architecture ablations |
| Terminal predicate | believable behavior or scenario outcome in the sandbox |

## Observation/action/state schema

- Observation/state evidence: `interactive sandbox simulation inspired by The Sims`.
- Action or trace fields: `observation, memory, reflection, plan, action, social interaction`.
- Output artifact: `agent behavior, memory, reflection, and plan within a sandbox town`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

interactive sandbox simulation inspired by The Sims

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `judgment_required, mixed`.
- Local verifier/reward description: human/believability evaluation and architecture ablations.
- Terminal predicate: believable behavior or scenario outcome in the sandbox.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, agent_training`.
- Construction layer: `optimizer_scaffold, trace_writing`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | memory retrieval, reflection synthesis, and planning architecture |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | unknown |

## How it can be used

- Map what the agent sees, does, stores, or edits during an episode.
- Compare verifier contracts across memory, workflow, SWE, OS, tool, and environment-synthesis settings.
- Use for agent training or evaluation only within the recorded `training_use` limits.
- Keep as L4, not L5, until the source artifacts prove replayability, licensing, splits, and failure handling.

## Reset/replay assumptions

- Reset behavior: unknown unless the official artifact explicitly documents it.
- Replay behavior: unknown unless released environments, repositories, task states, or traces can be deterministically reconstructed.
- Version pins needed: environment/runtime version, dependency versions, data snapshot, evaluator version, and any hidden/private test policy.
- If replay depends on live services or moving web/tool state, mark downstream reuse as evaluation-only or audit-only until pinned.

## Failure traces and environment drift

- Failed or rejected trajectories: unknown unless the release explicitly includes them.
- Ambiguous tasks or partial successes: unknown unless the paper/artifact documents adjudication.
- Drift risks: tool APIs, web pages, OS/app versions, repository dependencies, memory stores, judge prompts, or generated task distributions can change the terminal predicate.

## Audit checklist

- [ ] Official paper, code, data, project, and dataset links are checked.
- [ ] Source mixture, split policy, license, and lineage are recorded.
- [ ] Observation/action/state schema is pinned to a concrete artifact.
- [ ] Environment reset/replay behavior and versioned state are documented.
- [ ] Verifier, reward, judge, rubric, environment, or test suite is reproducible.
- [ ] Failed, rejected, ambiguous, or filtered trajectories are considered.
- [ ] Training use is not broader than what the source supports.

## Known limitations / failure modes

- Believability judgments are subjective.
- Sandbox behavior may not transfer to operational environments.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2304.03442](https://arxiv.org/abs/2304.03442)
- arxiv: [https://arxiv.org/abs/2304.03442](https://arxiv.org/abs/2304.03442)

## Citation

- Title: Generative Agents: Interactive Simulacra of Human Behavior
- Year/source: 2023 · arXiv preprint arXiv:2304.03442
- Authors in local data: Joon Sung Park, Joseph C. O'Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, Michael S. Bernstein
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
