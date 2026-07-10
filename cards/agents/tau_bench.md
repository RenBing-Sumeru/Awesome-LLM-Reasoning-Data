<!-- entry_id: tau-bench-a-benchmark-for-tool-agent-user-interaction-in-real-world-domains-2024 -->
<!-- card_type: agents -->
# 🌐 tau-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tau-bench-a-benchmark-for-tool-agent-user-interaction-in-real-world-domains-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tau-bench-a-benchmark-for-tool-agent-user-interaction-in-real-world-domains-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tau-bench-a-benchmark-for-tool-agent-user-interaction-in-real-world-domains-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🧰 Agent benchmarks and terminal predicates

## One-line takeaway

tau-bench turns realistic tool-agent-user interaction into stateful episodes where final success depends on both tool use and simulated user cooperation.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, agent_environment`. Local verification contract: `environmental, programmatic`. Local training/evaluation use: `evaluation, audit, agent_training`. The current atlas status is `verified`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | tool-use, agents, customer-service |
| Prompt/source | domain tasks requiring interaction with a user simulator and tools |
| Trace/action author | tool-using agent interacting with a simulated user and backend tools |
| Answer/artifact format | multi-turn dialogue plus tool calls, tool responses, and final task outcome |
| Process fields | user utterance, agent response, tool call, tool result, state update, final success label |
| Environment/substrate | tau-bench task environments and domain-specific tools |
| Verifier/reward | programmatic task success checks over final environment state |
| Terminal predicate | user goal is satisfied under the domain task constraints |

## Verification contract

- Check parser behavior, tool-call execution, final-state evaluator, and verifier false negatives.
- Check reset behavior, user-simulator behavior, versioned state, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a moving service, undocumented state transition, hidden judge prompt, missing tool implementation, or unclear success predicate, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, audit, agent_training`.
- Construction layer: `search_substrate, release_audit`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | benchmark authors and domain task designers |
| Generator | tau-bench environments with user simulation and tool backends |
| Filtering rule | retain tasks whose final state can be programmatically judged |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | tau-bench code/data scaffold |

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

- Source mixture: domain-specific interactive tasks; exact task inventory should be pinned.
- Split: unknown in local metadata.
- Decontamination: unknown.
- License: unknown in local metadata.
- Lineage: arXiv paper and official Sierra Research GitHub repository.
- Known failure modes: user-simulator drift, brittle terminal predicates, hidden state mismatch, overfitting to domain templates, and public benchmark leakage.

Local audit note: Official paper and repository are verified; downstream use should pin simulator behavior, tool versions, and final-state predicates.

## Links

- arXiv: [https://arxiv.org/abs/2406.12045](https://arxiv.org/abs/2406.12045)
- Code/Data: [https://github.com/sierra-research/tau-bench](https://github.com/sierra-research/tau-bench)

## Citation

- Title: tau-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains
- Year/source: 2024 · arXiv
- Authors in local data: Shunyu Yao, Noah Shinn, Pedram Razavi, Karthik Narasimhan
- Institutions in source: Sierra
- Local status: `verified`
- Citation status: `verified` · metadata status: `L4_carded`
