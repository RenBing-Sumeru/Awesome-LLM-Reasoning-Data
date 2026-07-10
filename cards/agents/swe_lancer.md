<!-- entry_id: swe-lancer-can-frontier-llms-earn-1-million-from-real-world-freelance-software--2025 -->
<!-- card_type: agents -->
# 🌐 SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🧑‍💻 SWE/repository agents

## One-line takeaway

Freelance software-engineering benchmark mapping agent task success to real-world payout value.

## Why this matters

P0 Track 06 SWE/workflow entry: it grounds software-agent evaluation in economically valued freelance tasks with executable checks.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | Upwork freelance software engineering tasks |
| Trace/action author | frontier LLM agents producing engineering outputs or proposal choices |
| Answer/artifact format | freelance task solution, implementation patch, or managerial proposal decision |
| Process fields | task description, payout value, repository or proposal context, model output, test or manager-choice label |
| Environment/substrate | Dockerized freelance SWE task environment and public SWE-Lancer Diamond split |
| Verifier/reward | end-to-end tests triple-verified by software engineers or original manager choices |
| Terminal predicate | task solved or managerial choice matches reference decision |

## Observation/action/state schema

- Observation/state evidence: `Dockerized freelance SWE task environment and public SWE-Lancer Diamond split`.
- Action or trace fields: `task description, payout value, repository or proposal context, model output, test or manager-choice label`.
- Output artifact: `freelance task solution, implementation patch, or managerial proposal decision`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

Dockerized freelance SWE task environment and public SWE-Lancer Diamond split

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `programmatic, judgment_required`.
- Local verifier/reward description: end-to-end tests triple-verified by software engineers or original manager choices.
- Terminal predicate: task solved or managerial choice matches reference decision.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode`.
- Recorded training/evaluation use: `evaluation, audit`.
- Construction layer: `release_audit`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | task curation from freelance work and expert verification |
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

- Private task data and public Diamond split may differ.
- Managerial-choice labels may encode workplace-specific preferences.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2502.12115](https://arxiv.org/abs/2502.12115)
- arxiv: [https://arxiv.org/abs/2502.12115](https://arxiv.org/abs/2502.12115)
- code: [https://github.com/openai/SWELancer-Benchmark](https://github.com/openai/SWELancer-Benchmark)

## Citation

- Title: SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?
- Year/source: 2025 · arXiv preprint arXiv:2502.12115
- Authors in local data: Samuel Miserendino, Michele Wang, Tejal Patwardhan, Johannes Heidecke
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
