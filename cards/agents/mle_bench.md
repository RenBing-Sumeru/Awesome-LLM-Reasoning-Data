<!-- entry_id: mle-bench-evaluating-machine-learning-agents-on-machine-learning-engineering-2024 -->
<!-- card_type: agents -->
# 🌐 MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 📈 Scaling / RLVR / TTC (Track 10) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🧰 Agent benchmarks and terminal predicates

## One-line takeaway

Machine-learning engineering benchmark where agents solve Kaggle-style competitions through code, training, and submissions.

## Why this matters

P0 Track 06 ML-engineering entry: it makes model training and experiment execution a long-horizon agent environment.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | Kaggle ML engineering competitions curated into agent tasks |
| Trace/action author | AI research/ML-engineering agents using scaffolds such as AIDE |
| Answer/artifact format | competition submission, code, trained model, and leaderboard score |
| Process fields | competition, dataset, agent code/actions, submission, metric score, resource-scaling condition |
| Environment/substrate | Kaggle-style ML engineering environments |
| Verifier/reward | competition metric and leaderboard-medal thresholds |
| Terminal predicate | submission reaches benchmark score or medal threshold |

## Observation/action/state schema

- Observation/state evidence: `Kaggle-style ML engineering environments`.
- Action or trace fields: `competition, dataset, agent code/actions, submission, metric score, resource-scaling condition`.
- Output artifact: `competition submission, code, trained model, and leaderboard score`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

Kaggle-style ML engineering environments

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `programmatic, environmental`.
- Local verifier/reward description: competition metric and leaderboard-medal thresholds.
- Terminal predicate: submission reaches benchmark score or medal threshold.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode`.
- Recorded training/evaluation use: `evaluation, audit`.
- Construction layer: `release_audit, search_substrate`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | competition curation and human leaderboard baseline comparison |
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

- Public competition data can leak into model pretraining.
- Leaderboard scores may reward competition-specific tricks over general ML engineering.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2410.07095](https://arxiv.org/abs/2410.07095)
- arxiv: [https://arxiv.org/abs/2410.07095](https://arxiv.org/abs/2410.07095)
- code: [https://github.com/openai/mle-bench/](https://github.com/openai/mle-bench/)

## Citation

- Title: MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering
- Year/source: 2024 · ICLR / arXiv preprint arXiv:2410.07095
- Authors in local data: Jun Shern Chan, Neil Chowdhury, Oliver Jaffe, James Aung, Dane Sherburn, Evan Mays, Giulio Starace, Kevin Liu, Leon Maksin, Tejal Patwardhan, Lilian Weng, Aleksander Madry
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
