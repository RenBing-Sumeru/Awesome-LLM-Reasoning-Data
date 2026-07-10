<!-- entry_id: gdpval-evaluating-ai-model-performance-on-real-world-economically-valuable-tasks-2025 -->
<!-- card_type: agents -->
# 🌐 GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🧰 Agent benchmarks and terminal predicates

## One-line takeaway

Benchmark for real-world economically valuable work tasks with expert deliverable grading.

## Why this matters

P0 Track 06 workflow entry: it broadens agent evaluation toward economically valuable professional deliverables and scaffolding effects.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | representative work tasks from industry professionals across occupations and sectors |
| Trace/action author | AI models or scaffolded agents producing professional deliverables |
| Answer/artifact format | work deliverable judged against expert-quality criteria |
| Process fields | occupation/task context, deliverable, expert reference or grading service, reasoning effort/scaffolding condition |
| Environment/substrate | real-world economically valuable professional tasks |
| Verifier/reward | expert-quality grading and public automated grading service for a gold subset |
| Terminal predicate | deliverable judged acceptable for the task |

## Observation/action/state schema

- Observation/state evidence: `real-world economically valuable professional tasks`.
- Action or trace fields: `occupation/task context, deliverable, expert reference or grading service, reasoning effort/scaffolding condition`.
- Output artifact: `work deliverable judged against expert-quality criteria`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

real-world economically valuable professional tasks

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `judgment_required, mixed`.
- Local verifier/reward description: expert-quality grading and public automated grading service for a gold subset.
- Terminal predicate: deliverable judged acceptable for the task.
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
| Filtering rule | industry-professional task construction and gold subset release |
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

- Gold subset may not represent full private benchmark.
- Expert grading policies and occupational coverage need audit before training reuse.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2510.04374](https://arxiv.org/abs/2510.04374)
- arxiv: [https://arxiv.org/abs/2510.04374](https://arxiv.org/abs/2510.04374)
- project: [https://evals.openai.com](https://evals.openai.com)

## Citation

- Title: GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks
- Year/source: 2025 · arXiv preprint arXiv:2510.04374
- Authors in local data: Tejal Patwardhan, Rachel Dias, Elizabeth Proehl, Grace Kim, Michele Wang, Olivia Watkins, Simon Posada Fishman, Marwan Aljubeh, Phoebe Thacker, Laurance Fauconnet, Natalie S. Kim, Patrick Chao, Samuel Miserendino, Gildas Chabot, David Li, Michael Sharman, Alexandra Barr, Amelia Glaese, Jerry Tworek
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
