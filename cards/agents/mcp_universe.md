<!-- entry_id: mcp-universe-benchmarking-large-language-models-with-real-world-model-context--2025 -->
<!-- card_type: agents -->
# 🌐 MCP-Universe: Benchmarking Large Language Models with Real-World Model Context Protocol Servers

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🛠️ Tool-use data

## One-line takeaway

Benchmark and infrastructure for LLM agents interacting with real-world MCP servers.

## Why this matters

P0 Track 06 infrastructure entry: it evaluates agents through real MCP server interfaces and execution-based evaluators.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | tasks over real-world MCP servers across navigation, repositories, finance, 3D design, browser automation, and web search |
| Trace/action author | LLM agents interacting with MCP servers |
| Answer/artifact format | MCP tool/server interaction episode with final answer or artifact |
| Process fields | MCP server, tool call, format compliance, static evaluator, dynamic evaluator, task result |
| Environment/substrate | real-world Model Context Protocol servers |
| Verifier/reward | format, static, and dynamic execution-based evaluators |
| Terminal predicate | task passes MCP-Universe evaluator for the server/domain |

## Observation/action/state schema

- Observation/state evidence: `real-world Model Context Protocol servers`.
- Action or trace fields: `MCP server, tool call, format compliance, static evaluator, dynamic evaluator, task result`.
- Output artifact: `MCP tool/server interaction episode with final answer or artifact`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

real-world Model Context Protocol servers

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `environmental, programmatic, mixed`.
- Local verifier/reward description: format, static, and dynamic execution-based evaluators.
- Terminal predicate: task passes MCP-Universe evaluator for the server/domain.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, agent_training, audit`.
- Construction layer: `search_substrate, release_audit`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | domain/server selection and evaluator implementation |
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

- Real-time dynamic evaluators can drift.
- Unknown-tool challenge may conflate documentation quality with agent skill.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2508.14704](https://arxiv.org/abs/2508.14704)
- arxiv: [https://arxiv.org/abs/2508.14704](https://arxiv.org/abs/2508.14704)
- project: [https://mcp-universe.github.io](https://mcp-universe.github.io)

## Citation

- Title: MCP-Universe: Benchmarking Large Language Models with Real-World Model Context Protocol Servers
- Year/source: 2025 · arXiv preprint arXiv:2508.14704
- Authors in local data: Ziyang Luo, Zhiqi Shen, Wenzhuo Yang, Zirui Zhao, Prathyusha Jwalapuram, Amrita Saha, Doyen Sahoo, Silvio Savarese, Caiming Xiong, Junnan Li
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
