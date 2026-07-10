<!-- entry_id: ama-bench-evaluating-long-horizon-memory-for-agentic-applications-2026 -->
<!-- card_type: agents -->
# 🌐 AMA-Bench: Evaluating Long-Horizon Memory for Agentic Applications

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🔁 Replayable trajectory data

## One-line takeaway

Long-horizon agent-memory benchmark built around real and synthetic agent-environment trajectories.

## Why this matters

P0 Track 06 memory entry: it explicitly frames agent memory as state/action/observation/tool-output trajectories rather than dialogue-only context.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | real-world agent trajectories plus synthetic long-horizon trajectories |
| Trace/action author | agent systems and synthetic trajectory generator |
| Answer/artifact format | memory QA over agent-environment interaction history |
| Process fields | state, action, observation, tool output, memory record, question, answer |
| Environment/substrate | agent memory benchmark over continuous interaction trajectories |
| Verifier/reward | expert-curated QA and rule-based QA for synthetic trajectories |
| Terminal predicate | question answered correctly from long-horizon memory evidence |

## Observation/action/state schema

- Observation/state evidence: `agent memory benchmark over continuous interaction trajectories`.
- Action or trace fields: `state, action, observation, tool output, memory record, question, answer`.
- Output artifact: `memory QA over agent-environment interaction history`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

agent memory benchmark over continuous interaction trajectories

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `mixed, programmatic`.
- Local verifier/reward description: expert-curated QA and rule-based QA for synthetic trajectories.
- Terminal predicate: question answered correctly from long-horizon memory evidence.
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
| Generator | real trajectories plus synthetic trajectory generator |
| Filtering rule | expert curation and rule-based QA construction |
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

- Synthetic trajectories may overstate memory-system generalization.
- Similarity-based retrieval failures may depend on chosen tasks and QA construction.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2602.22769](https://arxiv.org/abs/2602.22769)
- arxiv: [https://arxiv.org/abs/2602.22769](https://arxiv.org/abs/2602.22769)
- project: [https://ama-bench.github.io/](https://ama-bench.github.io/)

## Citation

- Title: AMA-Bench: Evaluating Long-Horizon Memory for Agentic Applications
- Year/source: 2026 · arXiv preprint arXiv:2602.22769
- Authors in local data: Yujie Zhao, Boqin Yuan, Junbo Huang, Haocheng Yuan, Zhongming Yu, Haozhou Xu, Lanxiang Hu, Abhilash Shankarampeta, Zimeng Huang, Wentao Ni, Yuandong Tian, Jishen Zhao
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
