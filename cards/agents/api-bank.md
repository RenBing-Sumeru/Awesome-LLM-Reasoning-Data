<!-- entry_id: api-bank-a-benchmark-for-tool-augmented-llms-2023 -->
<!-- card_type: agents -->
# 🌐 API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=api-bank-a-benchmark-for-tool-augmented-llms-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=api-bank-a-benchmark-for-tool-augmented-llms-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=api-bank-a-benchmark-for-tool-augmented-llms-2023&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🛠️ Tool-use data

## One-line takeaway

API-use dialogues become tool-augmented agent trajectories when user requests, API calls, tool responses, and final task completion checks are recorded together.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, data_release, agent_environment`. Local verification contract: `environmental, programmatic`. Local training/evaluation use: `sft, agent_training, evaluation`. The current atlas status is `verified`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | tool-use, API calling, agents |
| Prompt/source | user requests that require one or more API calls |
| Trace/action author | benchmark authors and annotators curate tool-use dialogues |
| Answer/artifact format | multi-turn dialogue with API name, arguments, tool response, dialogue state, and final answer |
| Process fields | user instruction, API call, API arguments, tool response, dialogue state, final answer |
| Environment/substrate | released API-Bank benchmark and API-call task collection |
| Verifier/reward | API-call validity, tool-response consistency, and task-completion checks |
| Terminal predicate | requested task is completed through valid API selection and use |

## Verification contract

- Check parser behavior, answer extraction, executable API behavior, and verifier false negatives.
- Check reset behavior, versioned API schemas, observation/action schema, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented execution environment, missing checks, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `sft, agent_training, evaluation`.
- Construction layer: `trace_writing, release_audit`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | benchmark authors and annotators |
| Generator | curated API-Bank task and dialogue construction |
| Filtering rule | retain examples judged executable and semantically valid under the API specification |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | API-Bank API-call benchmark scaffold |

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

- Source mixture: API-use dialogues and benchmark tasks; exact annotation mixture should be checked before training reuse.
- Split: unknown in local metadata; verify train/dev/test boundaries against the released repository.
- Decontamination: unknown.
- License: unknown in local metadata.
- Lineage: arXiv paper plus AlibabaResearch/DAMO-ConvAI API-Bank release.
- Known failure modes: API schema drift, format-only success, ambiguous tool responses, hidden evaluator gaps, and public benchmark contamination.

Local audit note: The official paper and repository link are verified; the evaluator strength should be checked before treating API-Bank as executable tool-use supervision.

## Links

- arXiv: [https://arxiv.org/abs/2304.08244](https://arxiv.org/abs/2304.08244)
- Code/Data: [https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/api-bank](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/api-bank)

## Citation

- Title: API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs
- Year/source: 2023 · EMNLP
- Authors in local data: Minghao Li, Yingxiu Zhao, Bowen Yu, Feifan Song, Hangyu Li, Haiyang Yu, Zhoujun Li, Fei Huang, Yongbin Li
- Institutions in source: Alibaba Group; Hong Kong University of Science and Technology; Peking University; Shenzhen Intelligent Strong Technology Co., Ltd.
- Local status: `verified`
- Citation status: `verified` · metadata status: `L4_carded`
