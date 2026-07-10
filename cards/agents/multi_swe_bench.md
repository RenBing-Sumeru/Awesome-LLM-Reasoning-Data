<!-- entry_id: multi-swe-bench-a-multilingual-benchmark-for-issue-resolving-2025 -->
<!-- card_type: agents -->
# 🌐 Multi-SWE-bench: A Multilingual Benchmark for Issue Resolving

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🧑‍💻 SWE/repository agents

## One-line takeaway

Multilingual issue-resolving benchmark and RL-data seed for repository-level software agents.

## Why this matters

P0 Track 06 SWE entry: it extends repository-agent tasks beyond Python and releases RL-oriented issue-resolving instances.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | multilingual GitHub issues and repositories across Java, TypeScript, JavaScript, Go, Rust, C, and C++ |
| Trace/action author | SWE agents such as Agentless, SWE-agent, and OpenHands |
| Answer/artifact format | issue-resolving patch in a repository |
| Process fields | issue, repository, language, patch, expert annotation, test result |
| Environment/substrate | multilingual software repositories and issue-resolving benchmark instances |
| Verifier/reward | tests and expert annotation of benchmark candidates |
| Terminal predicate | issue resolved by a patch accepted under benchmark checks |

## Observation/action/state schema

- Observation/state evidence: `multilingual software repositories and issue-resolving benchmark instances`.
- Action or trace fields: `issue, repository, language, patch, expert annotation, test result`.
- Output artifact: `issue-resolving patch in a repository`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

multilingual software repositories and issue-resolving benchmark instances

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `programmatic, judgment_required`.
- Local verifier/reward description: tests and expert annotation of benchmark candidates.
- Terminal predicate: issue resolved by a patch accepted under benchmark checks.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode`.
- Recorded training/evaluation use: `evaluation, rlvr, agent_training`.
- Construction layer: `release_audit, trace_writing`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | expert annotation from candidate issue-resolving instances |
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

- Language imbalance and test coverage can skew agent comparisons.
- RL training release may blur train/eval boundaries.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2504.02605](https://arxiv.org/abs/2504.02605)
- arxiv: [https://arxiv.org/abs/2504.02605](https://arxiv.org/abs/2504.02605)

## Citation

- Title: Multi-SWE-bench: A Multilingual Benchmark for Issue Resolving
- Year/source: 2025 · arXiv preprint arXiv:2504.02605
- Authors in local data: Daoguang Zan, Zhirong Huang, Wei Liu, Hanwu Chen, Linhao Zhang, Shulin Xin, Lu Chen, Qi Liu, Xiaojian Zhong, Aoyan Li, Siyao Liu, Yongsheng Xiao, Liangqiang Chen, Yuyu Zhang, Jing Su, Tianyu Liu, Rui Long, Kai Shen, Liang Xiang
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
