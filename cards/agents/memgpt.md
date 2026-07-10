<!-- entry_id: memgpt-towards-llms-as-operating-systems-2023 -->
<!-- card_type: agents -->
# 🌐 MemGPT: Towards LLMs as Operating Systems

<!-- track: 🧭 Foundations & Primers (Track 00) · 🌐 Environment & Agent Trajectories (Track 06) -->

## One-line takeaway

OS-inspired virtual context manager for LLM agents with long-term memory and control-flow interrupts.

## Why this matters

P0 Track 06 historical memory anchor: it introduced an OS-inspired memory/control-flow design for persistent LLM agents.

This is a Track 06 Environment & Agent Trajectories card. It is L4 because the official primary source is pinned, the core metadata is filled in `data/papers.yaml`, and the card exposes the agent/environment data object and verifier contract. It is not L5 until release metadata, license, splits, replay/reset behavior, and failed-trajectory handling are audited from primary artifacts.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | multi-session chat and document-analysis contexts exceeding model windows |
| Trace/action author | memory-managed LLM agent |
| Answer/artifact format | agent response with virtual-context memory operations and interrupts |
| Process fields | working context, archival memory, recall memory, interrupt/control flow, response |
| Environment/substrate | virtual context manager for LLM agents |
| Verifier/reward | document-analysis and multi-session chat evaluation |
| Terminal predicate | task answer or conversation response supported by externalized memory |

## Observation/action/state schema

- Observation/state evidence: `virtual context manager for LLM agents`.
- Action or trace fields: `working context, archival memory, recall memory, interrupt/control flow, response`.
- Output artifact: `agent response with virtual-context memory operations and interrupts`.
- What still needs pinning before L5: exact serialized schema, environment version, reset policy, and whether intermediate failed actions are released.

## Environment/substrate

virtual context manager for LLM agents

For reuse, treat this substrate as version-sensitive. Agent trajectories can change when repositories, tools, browsers, operating systems, MCP servers, task data, memory stores, or external services drift.

## Verification / scoring contract

- Recorded verification contract: `mixed`.
- Local verifier/reward description: document-analysis and multi-session chat evaluation.
- Terminal predicate: task answer or conversation response supported by externalized memory.
- Do not treat headline benchmark scores as data-quality proof. The reusable object is the task/trajectory plus its verifier, not the reported model performance.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `agent_training, evaluation`.
- Construction layer: `optimizer_scaffold, release_audit`.

Full episodes, state/action traces, final answers, scalar rewards, and judge labels support different training objectives. Reuse should match the supervision level actually exposed by the source.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | virtual context paging between memory tiers |
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

- Memory operation traces may not be released in reusable form.
- Evaluation may not isolate memory quality from base-model capability.

Local audit note: Track 06 P0 upgraded to L3 from official arXiv/project leads on 2026-07-10; artifact details still need deeper L2-style reuse audit.

## Links

- paper: [https://arxiv.org/abs/2310.08560](https://arxiv.org/abs/2310.08560)
- arxiv: [https://arxiv.org/abs/2310.08560](https://arxiv.org/abs/2310.08560)
- code: [https://research.memgpt.ai](https://research.memgpt.ai)
- project: [https://memgpt.ai](https://memgpt.ai)

## Citation

- Title: MemGPT: Towards LLMs as Operating Systems
- Year/source: 2023 · arXiv preprint arXiv:2310.08560
- Authors in local data: Charles Packer, Sarah Wooders, Kevin Lin, Vivian Fang, Shishir G. Patil, Ion Stoica, Joseph E. Gonzalez
- Institutions: unknown / needs verification from primary source
- Local status: `verified`
- Citation status: `verified` · metadata status: `summary_ready`
