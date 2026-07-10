<!-- entry_id: theagentcompany-benchmarking-llm-agents-on-consequential-real-world-tasks-2025 -->
<!-- card_type: agents -->
# 🌐 TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🧑‍💻 SWE/repository agents

## One-line takeaway

Company-like workplace benchmark where agents browse, code, run programs, and communicate with coworkers.

## Why this matters

P0 Track 06 workplace entry: it defines a company-like environment for long-horizon digital-worker agents.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | professional tasks in a self-contained software-company environment |
| Trace/action author | LLM agents using web, code, programs, and coworker communication |
| Answer/artifact format | digital-worker task episode with browsing, code, program, and communication actions |
| Process fields | task instruction, web action, code/program action, communication, environment state, task outcome |
| Environment/substrate | self-contained company-like environment with internal websites and data |
| Verifier/reward | task-specific completion checks in the simulated workplace |
| Terminal predicate | professional task completed in the company environment |

## Observation/action/state schema

- Observation/state evidence: `self-contained company-like environment with internal websites and data`.
- Action or trace fields: `task instruction, web action, code/program action, communication, environment state, task outcome`.
- Output artifact: `digital-worker task episode with browsing, code, program, and communication actions`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

self-contained company-like environment with internal websites and data

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `environmental, mixed`.
- Local verifier/reward description: task-specific completion checks in the simulated workplace.
- Terminal predicate: professional task completed in the company environment.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, audit`.
- Construction layer: `release_audit, search_substrate`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | curated workplace tasks and self-contained environment setup |
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

- Simulated company tasks may not capture real organizational constraints.
- Long-horizon task success may depend on environment snapshot details.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2412.14161](https://arxiv.org/abs/2412.14161)
- arxiv: [https://arxiv.org/abs/2412.14161](https://arxiv.org/abs/2412.14161)
- project: [https://the-agent-company.com](https://the-agent-company.com)

## Citation

- Title: TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks
- Year/source: 2025 · arXiv preprint arXiv:2412.14161
- Authors in local data: Frank F. Xu, Yufan Song, Boxuan Li, Yuxuan Tang, Kritanjali Jain, Mengxue Bao, Zora Z. Wang, Xuhui Zhou, Zhitong Guo, Murong Cao, Mingyang Yang, Hao Yang Lu, Amaad Martin, Zhe Su, Leander Maben, Raj Mehta, Wayne Chi, Lawrence Jang, Yiqing Xie, Shuyan Zhou, Graham Neubig
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
