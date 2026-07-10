<!-- entry_id: windows-agent-arena-evaluating-multi-modal-os-agents-at-scale-2024 -->
<!-- card_type: agents -->
# 🌐 Windows Agent Arena: Evaluating Multi-Modal OS Agents at Scale

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🧰 Agent benchmarks and terminal predicates

## One-line takeaway

Windows OS agent benchmark with scalable parallel evaluation and multimodal screen/action episodes.

## Why this matters

P0 Track 06 environment infrastructure entry: it provides a reproducible Windows OS benchmark for multimodal computer-use agents.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | Windows OS tasks adapted from OSWorld-style computer-use settings |
| Trace/action author | multimodal OS agents operating in Windows |
| Answer/artifact format | screen/action/task-completion episode in Windows applications and browsers |
| Process fields | screen observation, mouse/keyboard action, application state, Azure-parallel evaluation, task result |
| Environment/substrate | real Windows OS environment with applications, tools, and web browsers |
| Verifier/reward | task success in the Windows environment |
| Terminal predicate | Windows task completed according to benchmark criteria |

## Observation/action/state schema

- Observation/state evidence: `real Windows OS environment with applications, tools, and web browsers`.
- Action or trace fields: `screen observation, mouse/keyboard action, application state, Azure-parallel evaluation, task result`.
- Output artifact: `screen/action/task-completion episode in Windows applications and browsers`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

real Windows OS environment with applications, tools, and web browsers

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `environmental, programmatic`.
- Local verifier/reward description: task success in the Windows environment.
- Terminal predicate: Windows task completed according to benchmark criteria.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, agent_training`.
- Construction layer: `search_substrate, release_audit`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | adaptation of OSWorld framework and Windows task suite construction |
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

- Cloud/OS image versions can affect reproducibility.
- Task success may depend on application state and UI drift.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2409.08264](https://arxiv.org/abs/2409.08264)
- arxiv: [https://arxiv.org/abs/2409.08264](https://arxiv.org/abs/2409.08264)
- code: [https://github.com/microsoft/WindowsAgentArena](https://github.com/microsoft/WindowsAgentArena)
- project: [https://microsoft.github.io/WindowsAgentArena](https://microsoft.github.io/WindowsAgentArena)

## Citation

- Title: Windows Agent Arena: Evaluating Multi-Modal OS Agents at Scale
- Year/source: 2024 · arXiv preprint arXiv:2409.08264
- Authors in local data: Rogerio Bonatti, Dan Zhao, Francesco Bonacci, Dillon Dupont, Sara Abdali, Yinheng Li, Yadong Lu, Justin Wagle, Kazuhito Koishida, Arthur Bucker, Lawrence Jang, Zack Hui
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
