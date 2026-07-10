<!-- entry_id: swe-rebench-an-automated-pipeline-for-task-collection-and-decontaminated-evaluat-2025 -->
<!-- card_type: agents -->
# 🌐 SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🧑‍💻 SWE/repository agents

## One-line takeaway

Automated pipeline for collecting interactive SWE-agent tasks and decontaminated evaluations from GitHub.

## Why this matters

P0 Track 06 SWE entry: it builds large-scale interactive repository-agent tasks and a fresh evaluation pipeline.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | GitHub repositories mined for fresh interactive software-engineering tasks |
| Trace/action author | SWE agents interacting with development environments |
| Answer/artifact format | interactive SWE task with code execution, adaptation, and patch outcome |
| Process fields | repository, task, environment, agent action, code execution, patch, test result |
| Environment/substrate | Python repository environments collected continuously from GitHub |
| Verifier/reward | task tests and contamination-free benchmark comparison |
| Terminal predicate | interactive SWE task solved by passing task-specific checks |

## Observation/action/state schema

- Observation/state evidence: `Python repository environments collected continuously from GitHub`.
- Action or trace fields: `repository, task, environment, agent action, code execution, patch, test result`.
- Output artifact: `interactive SWE task with code execution, adaptation, and patch outcome`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

Python repository environments collected continuously from GitHub

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `programmatic, environmental`.
- Local verifier/reward description: task tests and contamination-free benchmark comparison.
- Terminal predicate: interactive SWE task solved by passing task-specific checks.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `agent_training, evaluation, audit`.
- Construction layer: `trace_writing, release_audit`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | automated task-collection pipeline |
| Filtering rule | continuous extraction and decontamination methodology |
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

- Decontamination claims need independent audit.
- Automated task extraction may include brittle or underspecified issues.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2505.20411](https://arxiv.org/abs/2505.20411)
- arxiv: [https://arxiv.org/abs/2505.20411](https://arxiv.org/abs/2505.20411)
- data: [https://huggingface.co/datasets/nebius/SWE-rebench](https://huggingface.co/datasets/nebius/SWE-rebench)
- project: [https://swe-rebench.com](https://swe-rebench.com)

## Citation

- Title: SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents
- Year/source: 2025 · NeurIPS 2025 / arXiv preprint arXiv:2505.20411
- Authors in local data: Ibragim Badertdinov, Alexander Golubev, Maksim Nekrashevich, Anton Shevtsov, Simon Karasik, Andrei Andriushchenko, Maria Trofimova, Daria Litvintseva, Boris Yangel
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
