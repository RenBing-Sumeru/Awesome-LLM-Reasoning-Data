<!-- entry_id: toolsandbox-a-stateful-conversational-interactive-evaluation-benchmark-for-tool--2024 -->
<!-- card_type: agents -->
# 🌐 ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=toolsandbox-a-stateful-conversational-interactive-evaluation-benchmark-for-tool--2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=toolsandbox-a-stateful-conversational-interactive-evaluation-benchmark-for-tool--2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=toolsandbox-a-stateful-conversational-interactive-evaluation-benchmark-for-tool--2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🛠️ Tool-use data

## One-line takeaway

ToolSandbox evaluates conversational tool use as a stateful interaction, where intermediate tool calls and final environment state define the feedback contract.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, agent_environment`. Local verification contract: `environmental, programmatic`. Local training/evaluation use: `evaluation, audit, agent_training`. The current atlas status is `verified`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | tool-use, agents, conversational agents |
| Prompt/source | stateful conversational scenarios requiring tool calls |
| Trace/action author | tool-using model interacting with the sandbox state |
| Answer/artifact format | conversation, tool calls, tool responses, state updates, and final outcome |
| Process fields | user turn, assistant turn, tool call, tool result, sandbox state, milestone or final check |
| Environment/substrate | ToolSandbox stateful tool-use environment |
| Verifier/reward | programmatic scenario checks and state-based milestone/final predicates |
| Terminal predicate | required scenario state is reached without violating tool-use constraints |

## Verification contract

- Check parser behavior, tool-call execution, state update logic, milestone checks, and verifier false negatives.
- Check reset behavior, versioned state, observation/action schema, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented state transition, missing tool implementation, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, audit, agent_training`.
- Construction layer: `search_substrate, release_audit`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | benchmark authors and scenario designers |
| Generator | stateful ToolSandbox tasks and tool interfaces |
| Filtering rule | retain scenarios with reproducible state transitions and checkable outcomes |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | Apple ToolSandbox repository and scenario scaffold |

When reproducing this environment or trajectory artifact, fill these recipe fields before training. The missing knobs often matter more than the headline number of examples.

## How it can be used

- Reading map: compare it with neighboring entries in the same paper-category page.
- Engineering map: decide whether it supports SFT, distillation, RLVR, process supervision, reward modeling, agent training, evaluation, or audit.
- Audit map: open an issue for every `unknown` field that affects reproducibility, safety, or benchmark comparison.
- Teaching map: use it to show how reasoning data differs from plain instruction data.

## Audit checklist

- [ ] Official paper, code, data, project, and dataset links are checked.
- [ ] Source mixture, split policy, license, and lineage are recorded.
- [ ] Verifier, reward, judge, rubric, environment, or test suite is reproducible.
- [ ] Rejected/failed/ambiguous candidates are considered, not only successful examples.
- [ ] Contamination, benchmark leakage, false positives, false negatives, and reward hacking are documented.
- [ ] Training use is not broader than what the source supports.

## Known limitations / failure modes

- Source mixture: stateful tool-use scenarios; exact task inventory should be pinned.
- Split: unknown in local metadata.
- Decontamination: unknown.
- License: unknown in local metadata.
- Lineage: arXiv paper and Apple ToolSandbox GitHub repository.
- Known failure modes: state drift, partial-goal false positives, brittle tool schemas, hidden dependency changes, and benchmark contamination.

Local audit note: Official paper and code are verified; downstream reuse should preserve failed trajectories and state-check details, not only successful examples.

## Links

- arXiv: [https://arxiv.org/abs/2408.04682](https://arxiv.org/abs/2408.04682)
- Code: [https://github.com/apple/ToolSandbox](https://github.com/apple/ToolSandbox)

## Citation

- Title: ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities
- Year/source: 2024 · arXiv
- Authors in local data: Jiarui Lu, Thomas Holleis, Yizhe Zhang, Bernhard Aumayer, Feng Nan, Felix Bai, Shuang Ma, Shen Ma, Mengyu Li, Guoli Yin, Zirui Wang, Ruoming Pang
- Institutions in source: Apple
- Local status: `verified`
- Citation status: `verified` · metadata status: `L4_carded`
