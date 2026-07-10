<!-- entry_id: swe-rl-advancing-llm-reasoning-via-reinforcement-learning-on-open-software-evolu-2025 -->
<!-- card_type: agents -->
# 🌐 SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🎯 Training Usage & Objectives (Track 09) · 📈 Scaling / RLVR / TTC (Track 10) -->
> Subfield: 🧑‍💻 SWE/repository agents

## One-line takeaway

RL recipe for software-engineering reasoning using open software evolution records and rule-based rewards.

## Why this matters

P0 Track 06 SWE RL entry: it trains software agents from repository evolution traces and rule-based feedback.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | open-source software evolution records including code snapshots, code changes, issues, and pull requests |
| Trace/action author | LLM reasoning model trained with RL over software evolution data |
| Answer/artifact format | developer reasoning process and solution or patch-style output |
| Process fields | code snapshot, change history, issue or pull request, generated solution, rule-based reward |
| Environment/substrate | open-source software evolution data and SWE-bench Verified evaluation |
| Verifier/reward | lightweight rule-based reward and benchmark solve rate |
| Terminal predicate | software issue solved or solution similar to ground truth |

## Observation/action/state schema

- Observation/state evidence: `open-source software evolution data and SWE-bench Verified evaluation`.
- Action or trace fields: `code snapshot, change history, issue or pull request, generated solution, rule-based reward`.
- Output artifact: `developer reasoning process and solution or patch-style output`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

open-source software evolution data and SWE-bench Verified evaluation

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `programmatic, mixed`.
- Local verifier/reward description: lightweight rule-based reward and benchmark solve rate.
- Terminal predicate: software issue solved or solution similar to ground truth.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, answer_level`.
- Recorded training/evaluation use: `rlvr, agent_training, evaluation`.
- Construction layer: `reward_verifier_layer, trace_writing`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | rule-based reward over open software evolution data |
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

- Similarity rewards can reward superficial patches.
- Open-source evolution data may overlap with evaluation repositories.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2502.18449](https://arxiv.org/abs/2502.18449)
- arxiv: [https://arxiv.org/abs/2502.18449](https://arxiv.org/abs/2502.18449)

## Citation

- Title: SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution
- Year/source: 2025 · NeurIPS 2025 / arXiv preprint arXiv:2502.18449
- Authors in local data: Yuxiang Wei, Olivier Duchenne, Jade Copet, Quentin Carbonneaux, Lingming Zhang, Daniel Fried, Gabriel Synnaeve, Rishabh Singh, Sida I. Wang
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
