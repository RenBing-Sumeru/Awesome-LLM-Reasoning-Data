<!-- entry_id: agent-world-scaling-real-world-environment-synthesis-for-evolving-general-agent--2026 -->
<!-- card_type: agents -->
# 🌐 Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 📈 Scaling / RLVR / TTC (Track 10) -->
> Subfield: 🛠️ Tool-use data

## One-line takeaway

Self-evolving training arena for synthesizing real-world tool environments and training general agents.

## Why this matters

P0 Track 06 environment-synthesis entry: it targets scalable environment/task generation and co-evolution of agents and environments.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | topic-aligned databases and executable tool ecosystems from real-world environment themes |
| Trace/action author | self-evolving agent arena and multi-environment RL agents |
| Answer/artifact format | synthesized verifiable task, agent interaction trajectory, and benchmark outcome |
| Process fields | environment theme, tool ecosystem, synthesized task, difficulty control, agent trajectory, capability gap, RL update |
| Environment/substrate | self-evolving arena over scalable tool environments and MCP-style interfaces |
| Verifier/reward | verifiable synthesized tasks and benchmark outcomes across agent benchmarks |
| Terminal predicate | task solved in synthesized or benchmark environment |

## Observation/action/state schema

- Observation/state evidence: `self-evolving arena over scalable tool environments and MCP-style interfaces`.
- Action or trace fields: `environment theme, tool ecosystem, synthesized task, difficulty control, agent trajectory, capability gap, RL update`.
- Output artifact: `synthesized verifiable task, agent interaction trajectory, and benchmark outcome`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

self-evolving arena over scalable tool environments and MCP-style interfaces

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `environmental, programmatic`.
- Local verifier/reward description: verifiable synthesized tasks and benchmark outcomes across agent benchmarks.
- Terminal predicate: task solved in synthesized or benchmark environment.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `agent_training, rlvr, evaluation`.
- Construction layer: `self_play_anchor, trace_writing, search_substrate`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | agentic environment-task discovery and dynamic task synthesis |
| Filtering rule | controllable difficulty and capability-gap targeting |
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

- Working-in-progress 2026 preprint with environment fidelity and artifact-release uncertainty.
- Synthetic verifiable tasks may not reflect real operational failures.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2604.18292](https://arxiv.org/abs/2604.18292)
- arxiv: [https://arxiv.org/abs/2604.18292](https://arxiv.org/abs/2604.18292)

## Citation

- Title: Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence
- Year/source: 2026 · arXiv preprint arXiv:2604.18292
- Authors in local data: Guanting Dong, Junting Lu, Junjie Huang, Wanjun Zhong, Longxiang Liu, Shijue Huang, Zhenyu Li, Yang Zhao, Xiaoshuai Song, Xiaoxi Li, Jiajie Jin, Yutao Zhu, Hanbin Wang, Fangyu Lei, Qinyu Luo, Mingyang Chen, Zehui Chen, Jiazhan Feng, Ji-Rong Wen, Zhicheng Dou
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
