<!-- entry_id: odysseybench-evaluating-llm-agents-on-long-horizon-complex-office-application--2025 -->
<!-- card_type: agents -->
# 🌐 OdysseyBench: Evaluating LLM Agents on Long-Horizon Complex Office Application Workflows

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🧰 Agent benchmarks and terminal predicates

## One-line takeaway

Long-horizon office workflow benchmark and generation framework for LLM agents.

## Why this matters

P0 Track 06 workflow entry: it targets long-horizon office workflows rather than atomic agent tasks.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | real-world and synthesized office application workflows |
| Trace/action author | LLM agents and HomerAgents task-generation framework |
| Answer/artifact format | multi-step office workflow completion over Word, Excel, PDF, Email, and Calendar |
| Process fields | interaction history, application state, task instruction, agent action, workflow output |
| Environment/substrate | office productivity applications and generated long-horizon workflows |
| Verifier/reward | task-specific workflow evaluation over long-horizon histories |
| Terminal predicate | office workflow task completed according to benchmark criteria |

## Observation/action/state schema

- Observation/state evidence: `office productivity applications and generated long-horizon workflows`.
- Action or trace fields: `interaction history, application state, task instruction, agent action, workflow output`.
- Output artifact: `multi-step office workflow completion over Word, Excel, PDF, Email, and Calendar`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

office productivity applications and generated long-horizon workflows

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `mixed, judgment_required`.
- Local verifier/reward description: task-specific workflow evaluation over long-horizon histories.
- Terminal predicate: office workflow task completed according to benchmark criteria.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, agent_training`.
- Construction layer: `trace_writing, release_audit`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | HomerAgents multi-agent framework |
| Filtering rule | environment exploration, task generation, and dialogue synthesis |
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

- Synthetic office workflows may simplify real workplace dependencies.
- Task scoring details need deeper artifact audit.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2508.09124](https://arxiv.org/abs/2508.09124)
- arxiv: [https://arxiv.org/abs/2508.09124](https://arxiv.org/abs/2508.09124)

## Citation

- Title: OdysseyBench: Evaluating LLM Agents on Long-Horizon Complex Office Application Workflows
- Year/source: 2025 · arXiv preprint arXiv:2508.09124
- Authors in local data: Weixuan Wang, Dongge Han, Daniel Madrigal Diaz, Jin Xu, Victor Rühle, Saravan Rajmohan
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
