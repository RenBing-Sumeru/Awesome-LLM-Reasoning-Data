<!-- entry_id: terminal-bench-a-benchmark-and-task-environment-for-terminal-agents-2026 -->
<!-- card_type: agents -->
# 🌐 Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=terminal-bench-a-benchmark-and-task-environment-for-terminal-agents-2026&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=terminal-bench-a-benchmark-and-task-environment-for-terminal-agents-2026&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=terminal-bench-a-benchmark-and-task-environment-for-terminal-agents-2026&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🧑‍💻 SWE/repository agents

## One-line takeaway

Terminal-Bench treats command-line work as replayable agent episodes where shell actions, files, tests, and final task predicates define success.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, agent_environment`. Local verification contract: `environmental, programmatic`. Local training/evaluation use: `evaluation, audit, agent_training`. The current atlas status is `verified`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | terminal, shell, agents |
| Prompt/source | hard command-line tasks in realistic terminal environments |
| Trace/action author | terminal-using agent issuing shell commands and editing files |
| Answer/artifact format | shell session, file changes, execution logs, and final task result |
| Process fields | task instruction, command, stdout/stderr, file state, test result, terminal predicate |
| Environment/substrate | containerized terminal task environment |
| Verifier/reward | programmatic tests or task-specific terminal/environment checks |
| Terminal predicate | required command-line task is completed under the benchmark evaluator |

## Verification contract

- Check parser behavior, command execution, filesystem state, tests, and verifier false negatives.
- Check reset behavior, container/image versioning, observation/action schema, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on moving package indexes, hidden tests, undocumented Docker images, missing setup scripts, or unclear task predicates, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, audit, agent_training`.
- Construction layer: `search_substrate, release_audit`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | benchmark authors and terminal-task designers |
| Generator | Terminal-Bench task environment and command-line benchmark suite |
| Filtering rule | retain tasks with reproducible setup and checkable terminal predicates |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | Terminal-Bench project and containerized task scaffold |

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

- Source mixture: command-line tasks and benchmark environments; exact task inventory and image versions should be pinned.
- Split: unknown in local metadata.
- Decontamination: unknown.
- License: unknown in local metadata.
- Lineage: official Terminal-Bench project, arXiv source, and Laude Institute GitHub repository.
- Known failure modes: package/version drift, hidden dependency failures, brittle tests, reward hacking through environment shortcuts, and benchmark contamination.

Local audit note: Official paper, project, and code are verified; downstream reuse should pin Docker images, package indexes, test scripts, and hidden evaluator behavior.

## Links

- arXiv: [https://arxiv.org/abs/2601.11868](https://arxiv.org/abs/2601.11868)
- Project: [https://www.tbench.ai/](https://www.tbench.ai/)
- Code: [https://github.com/laude-institute/terminal-bench](https://github.com/laude-institute/terminal-bench)

## Citation

- Title: Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces
- Year/source: 2026 · arXiv
- Authors in local data: Mike A. Merrill, Alexander G. Shaw, Nicholas Carlini, Boxuan Li, Harsh Raj, Ivan Bercovich, Lin Shi, Jeong Yeon Shin, Thomas Walshe, E. Kelly Buchanan, Junhong Shen, Guanghao Ye, Haowei Lin, Jason Poulos, Maoyu Wang, et al.
- Institutions in source: Stanford University; Laude Institute; Anthropic; Independent; Northeastern University; University of California, Santa Barbara; Cornell University; Snorkel AI; Reflection AI; Carnegie Mellon University; Massachusetts Institute of Technology; Peking University; LAION; JSC/FZJ; Tencent; National Technical University of Athens; Nerion; University of Michigan; National University of Singapore; Moonshot AI; University of Texas at Austin; Amazon; and other affiliations listed in the arXiv source
- Local status: `verified`
- Citation status: `verified` · metadata status: `L4_carded`
