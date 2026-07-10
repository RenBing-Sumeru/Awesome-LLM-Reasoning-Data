<!-- entry_id: minimax-m1-scaling-test-time-compute-efficiently-with-lightning-attention-2025 -->
<!-- card_type: recipes -->
# 🏗️ MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=minimax-m1-scaling-test-time-compute-efficiently-with-lightning-attention-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=minimax-m1-scaling-test-time-compute-efficiently-with-lightning-attention-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=minimax-m1-scaling-test-time-compute-efficiently-with-lightning-attention-2025&mode=compare)
<!-- ask_atlas:end -->

## One-line takeaway

Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.

## Why this matters

This recipe card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `model_report, scaling_study, construction_recipe`. Local verification contract: `mixed, programmatic, environmental`. Local training/evaluation use: `rlvr, test_time_compute, agent_training, evaluation`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Recipe card |
| Domains | math, code, software_engineering, agents |
| Prompt/source | diverse RL and benchmark task mixtures |
| Trace/action author | MiniMax-M1 training/evaluation pipeline |
| Answer/artifact format | reasoning output, code/tool result, or agent task output |
| Process fields | reasoning output, benchmark result, thinking budget |
| Environment/substrate | math, code, SWE, tool-use, and long-context evaluation surfaces |
| Verifier/reward | programmatic, environment, and benchmark feedback |
| Terminal predicate | benchmark or environment success under stated thinking budget |

## Verification contract

- Check parser behavior, answer extraction, unit-test strength, executable environment, and verifier false negatives.
- Check reset behavior, versioned state, observation/action schema, hidden dependencies, and terminal predicate.
- Locate the boundary between programmatic checks, environment feedback, human judgment, and model judgment.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `answer_level, full_episode`.
- Recorded training/evaluation use: `rlvr, test_time_compute, agent_training, evaluation`.
- Construction layer: `frontier_pipeline, optimizer_scaffold, scaling_report`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | unknown |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | unknown |

When reproducing this recipe or model-report pipeline, fill these recipe fields before training. The missing knobs often matter more than the headline number of examples.

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

- Source mixture: unknown.
- Split: unknown.
- Decontamination: unknown.
- License: unknown.
- Lineage: unknown.
- Known failure modes: unknown; add false positives, false negatives, leakage, judge drift, and reward hacking notes when known.

Local audit note: Primary arXiv link and GitHub release link verified; data partitions, RL filters, and budget accounting need careful reading.

## Links

- arXiv: [https://arxiv.org/abs/2506.13585](https://arxiv.org/abs/2506.13585)
- Code: [https://github.com/MiniMax-AI/MiniMax-M1](https://github.com/MiniMax-AI/MiniMax-M1)

## Citation

- Title: MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention
- Year/source: 2025 · arXiv preprint arXiv:2506.13585
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
