<!-- entry_id: swe-smith-scaling-data-construction-for-software-engineering-agents-2025 -->
<!-- card_type: agents -->
# 🌐 SWE-smith: Scaling Data for Software Engineering Agents

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🏗️ Construction & Open Releases (Track 08) · 📈 Scaling / RLVR / TTC (Track 10) -->
> Subfield: 🧑‍💻 SWE/repository agents

## One-line takeaway

Scalable pipeline for generating executable software-engineering agent training data from Python repositories.

## Why this matters

P0 Track 06 SWE data-construction entry: it scales executable repository-agent training instances and trajectories.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | Python GitHub repositories and synthesized task instances that break existing tests |
| Trace/action author | SWE-smith pipeline and trained SWE agents |
| Answer/artifact format | software engineering task instance, execution environment, patch, trajectory, and model output |
| Process fields | repository, execution environment, task instance, broken test, agent trajectory, patch, test result |
| Environment/substrate | Python repositories with constructed execution environments |
| Verifier/reward | test failures and test-based task resolution |
| Terminal predicate | patch resolves synthesized issue/tests in the execution environment |

## Observation/action/state schema

- Observation/state evidence: `Python repositories with constructed execution environments`.
- Action or trace fields: `repository, execution environment, task instance, broken test, agent trajectory, patch, test result`.
- Output artifact: `software engineering task instance, execution environment, patch, trajectory, and model output`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

Python repositories with constructed execution environments

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `programmatic, environmental`.
- Local verifier/reward description: test failures and test-based task resolution.
- Terminal predicate: patch resolves synthesized issue/tests in the execution environment.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `agent_training, sft, evaluation`.
- Construction layer: `trace_writing, release_audit`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | SWE-smith scalable task-generation pipeline |
| Filtering rule | construct environments and synthesize task instances that break existing tests |
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

- Generated tasks may be solvable through test artifacts rather than real issue understanding.
- Repository selection, license, and trajectory release details need audit.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2504.21798](https://arxiv.org/abs/2504.21798)
- arxiv: [https://arxiv.org/abs/2504.21798](https://arxiv.org/abs/2504.21798)
- project: [https://swesmith.com](https://swesmith.com)

## Citation

- Title: SWE-smith: Scaling Data for Software Engineering Agents
- Year/source: 2025 · arXiv preprint arXiv:2504.21798
- Authors in local data: John Yang, Kilian Lieret, Carlos E. Jimenez, Alexander Wettig, Kabir Khandpur, Yanzhe Zhang, Binyuan Hui, Ofir Press, Ludwig Schmidt, Diyi Yang
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
