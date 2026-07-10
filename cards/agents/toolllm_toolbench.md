<!-- entry_id: toolllm-facilitating-large-language-models-to-master-16000-real-world-apis-2024 -->
<!-- card_type: agents -->
# 🌐 ToolLLM: Facilitating large language models to master 16000+ real-world APIs

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=toolllm-facilitating-large-language-models-to-master-16000-real-world-apis-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=toolllm-facilitating-large-language-models-to-master-16000-real-world-apis-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=toolllm-facilitating-large-language-models-to-master-16000-real-world-apis-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧱 Instruction / Demo / Rationale (Track 01) · 🧮 Programmatic Verification (Track 03) · 🌐 Environment & Agent Trajectories (Track 06) · 🏗️ Construction & Open Releases (Track 08) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🧱 Instruction tuning / SFT data

## One-line takeaway

Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `data_release, benchmark, agent_environment`. Local verification contract: `environmental, programmatic`. Local training/evaluation use: `sft, agent_training, evaluation`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | tools, apis, agents |
| Prompt/source | API/task instructions |
| Trace/action author | tool-using model and synthetic/user prompts |
| Answer/artifact format | tool-call trajectory plus final response |
| Process fields | API call, arguments, tool response, final answer |
| Environment/substrate | real-world API/tool catalog |
| Verifier/reward | tool response validity and task success checks |
| Terminal predicate | API task completion |

## Verification contract

- Check parser behavior, answer extraction, unit-test strength, executable environment, and verifier false negatives.
- Check reset behavior, versioned state, observation/action schema, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `state_action_level`.
- Recorded training/evaluation use: `sft, agent_training, evaluation`.
- Construction layer: `prompt_sourcing, trace_writing, release_audit`.

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

- Source mixture: unknown.
- Split: unknown.
- Decontamination: unknown.
- License: unknown.
- Lineage: unknown.
- Known failure modes: unknown; add false positives, false negatives, leakage, judge drift, and reward hacking notes when known.

Local audit note: Primary arXiv link verified; API availability and generated-instruction lineage need review before reuse.

## Links

- arXiv: [https://arxiv.org/abs/2307.16789](https://arxiv.org/abs/2307.16789)

## Citation

- Title: ToolLLM: Facilitating large language models to master 16000+ real-world APIs
- Year/source: 2023 · ICLR
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
