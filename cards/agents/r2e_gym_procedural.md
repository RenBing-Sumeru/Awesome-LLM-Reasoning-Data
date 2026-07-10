<!-- entry_id: r2e-gym-procedural-training-environments-for-repository-level-code-agents-2025 -->
<!-- card_type: agents -->
# 🌐 R2E-Gym: Procedural Environments and Hybrid Verifiers for Scaling Open-Weights SWE Agents

<!-- track: 🧮 Programmatic Verification (Track 03) · 🌐 Environment & Agent Trajectories (Track 06) · 🎯 Training Usage & Objectives (Track 09) -->
> Subfield: 🧰 Programmatic benchmarks

## One-line takeaway

Procedural executable environments and hybrid verifiers for scaling open-weight repository-level SWE agents.

## Why this matters

P0 Track 06 environment infrastructure entry: it creates procedurally curated executable SWE-agent environments and verifiers.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | GitHub commits and procedurally curated executable repository environments |
| Trace/action author | SWE agents trained/evaluated in AgentGym/R2E-Gym environments |
| Answer/artifact format | repository task, generated patch, execution trace, verifier outcome |
| Process fields | repository, commit, synthetic task, test generation, agent trajectory, patch, test-based verifier, execution-free verifier |
| Environment/substrate | procedural executable gym environments for repository-level code agents |
| Verifier/reward | hybrid execution-based and execution-free verifiers |
| Terminal predicate | SWE task solved under verifier/test criteria |

## Observation/action/state schema

- Observation/state evidence: `procedural executable gym environments for repository-level code agents`.
- Action or trace fields: `repository, commit, synthetic task, test generation, agent trajectory, patch, test-based verifier, execution-free verifier`.
- Output artifact: `repository task, generated patch, execution trace, verifier outcome`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

procedural executable gym environments for repository-level code agents

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `programmatic, mixed`.
- Local verifier/reward description: hybrid execution-based and execution-free verifiers.
- Terminal predicate: SWE task solved under verifier/test criteria.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `agent_training, rlvr, evaluation`.
- Construction layer: `search_substrate, reward_verifier_layer, trace_writing`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | SYNGEN synthetic data curation recipe |
| Filtering rule | test-generation and back-translation from commits |
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

- Generated tests may create false positives.
- Execution-free verifiers can be biased by style or benchmark artifacts.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2504.07164](https://arxiv.org/abs/2504.07164)
- arxiv: [https://arxiv.org/abs/2504.07164](https://arxiv.org/abs/2504.07164)
- project: [https://r2e-gym.github.io/](https://r2e-gym.github.io/)

## Citation

- Title: R2E-Gym: Procedural Environments and Hybrid Verifiers for Scaling Open-Weights SWE Agents
- Year/source: 2025 · arXiv preprint arXiv:2504.07164
- Authors in local data: Naman Jain, Jaskirat Singh, Manish Shetty, Liang Zheng, Koushik Sen, Ion Stoica
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
