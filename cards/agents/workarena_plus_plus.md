<!-- entry_id: workarena-plus-plus-towards-compositional-planning-and-reasoning-based-common--2024 -->
<!-- card_type: agents -->
# 🌐 WorkArena++: Towards Compositional Planning and Reasoning-based Common Knowledge Work Tasks

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🖥️ OS/desktop agents

## One-line takeaway

Enterprise workflow benchmark with compositional planning tasks and generated observation/action traces.

## Why this matters

P0 Track 06 workflow entry: it extends WorkArena with compositional planning tasks and trace generation for agent training.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | realistic knowledge-work workflows in enterprise web applications |
| Trace/action author | web agents and generated ground-truth trace mechanism |
| Answer/artifact format | observation/action trace plus workflow task outcome |
| Process fields | web observation, agent action, workflow state, reasoning/planning requirement, task result |
| Environment/substrate | ServiceNow-style enterprise workflow environment |
| Verifier/reward | workflow task success and generated ground-truth traces |
| Terminal predicate | enterprise workflow completed according to task criteria |

## Observation/action/state schema

- Observation/state evidence: `ServiceNow-style enterprise workflow environment`.
- Action or trace fields: `web observation, agent action, workflow state, reasoning/planning requirement, task result`.
- Output artifact: `observation/action trace plus workflow task outcome`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

ServiceNow-style enterprise workflow environment

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `environmental, mixed`.
- Local verifier/reward description: workflow task success and generated ground-truth traces.
- Terminal predicate: enterprise workflow completed according to task criteria.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, sft, agent_training`.
- Construction layer: `trace_writing, release_audit`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | compositional task design and generated ground-truth observation/action traces |
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

- Generated traces may simplify workflows.
- Hosted enterprise environments can drift across versions.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2407.05291](https://arxiv.org/abs/2407.05291)
- arxiv: [https://arxiv.org/abs/2407.05291](https://arxiv.org/abs/2407.05291)
- code: [https://github.com/ServiceNow/WorkArena](https://github.com/ServiceNow/WorkArena)
- project: [https://github.com/ServiceNow/WorkArena](https://github.com/ServiceNow/WorkArena)

## Citation

- Title: WorkArena++: Towards Compositional Planning and Reasoning-based Common Knowledge Work Tasks
- Year/source: 2024 · arXiv preprint arXiv:2407.05291
- Authors in local data: Leo Boisvert, Megh Thakkar, Maxime Gasse, Massimo Caccia, Thibault Le Sellier De Chezelles, Quentin Cappart, Nicolas Chapados, Alexandre Lacoste, Alexandre Drouin
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
