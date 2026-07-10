<!-- entry_id: opencodereasoning-advancing-data-distillation-for-competitive-coding-2025 -->
<!-- card_type: releases -->
# OpenCodeReasoning: Advancing Data Distillation for Competitive Coding

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=opencodereasoning-advancing-data-distillation-for-competitive-coding-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=opencodereasoning-advancing-data-distillation-for-competitive-coding-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=opencodereasoning-advancing-data-distillation-for-competitive-coding-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: programmatically_verifiable_outcome_data, data_construction_open_release_recipes, training_usage_optimization_objectives, scaling_rlvr_test_time_compute
> Links: [Paper](https://arxiv.org/abs/2504.01943) · [COLM](https://colmweb.org/2025/AcceptedPapers.html) · [Code](https://github.com/NVIDIA/NeMo-Skills) · [Hugging Face](https://huggingface.co/datasets/nvidia/OpenCodeReasoning)

## TL;DR

OpenCodeReasoning releases a large competitive-programming reasoning corpus distilled from DeepSeek-R1 for supervised fine-tuning.

Read it as a construction recipe for code-reasoning SFT data: where the questions come from, how teacher traces are generated, which post-processing filters are applied, and which reuse risks remain.

## 1. What is this work?

- Year / venue: 2025 · COLM 2025.
- Atlas role: data_release, construction_recipe, scaling_study.
- Domains: code, competitive_programming, python.
- Current status: verified.
- Why it belongs: The paper and dataset expose a concrete open recipe for turning public competitive-programming questions into teacher-generated reasoning traces and code solutions for SFT.

## 2. What data object does it expose?

**Data object:** competitive-programming question plus DeepSeek-R1 response, reasoning trace, extracted code solution, source metadata, license field, split field, difficulty label, and dataset/source identifiers.

| Field | Local value |
|---|---|
| Prompt/source | TACO, APPS, CodeContests, and OpenR1 CodeForces / CodeForces-derived sources after exact-match deduplication |
| Trace/action author | DeepSeek-R1 |
| Answer/artifact format | Python response with reasoning trace, final code block, and extracted solution code |
| Process fields | `id`, `input`, `output`, `solution`, `dataset`, `split`, `source`, `license`, `difficulty`, `index` |
| Environment or substrate | Offline SFT corpus; code execution is used in ablations and benchmark evaluation, not as a full guarantee for every released sample |
| Terminal predicate | Retained samples pass post-processing format/syntax checks; downstream benchmark pass rates are evaluation outcomes, not data-quality proof |

## 3. What is the verifier / reward / judge / environment?

**Feedback / verifier:** mixed programmatic and judgment-based checks.

- Format checks require reasoning-trace tags and code blocks in the expected places.
- Tree-sitter parsing checks syntactic validity of extracted code.
- Benchmark-contamination screening uses embedding similarity, LLM judges, and manual inspection.
- Unit tests are used for a CodeContests ablation and benchmark evaluation.
- Unknown: the released dataset should not be assumed to contain only unit-test-passing solutions.

Supervision granularity: answer_level. The released target text includes reasoning traces, but the local schema should not treat those traces as independently labeled step or process supervision.

## 4. How is the data constructed?

**Construction recipe:**

- Collect competitive-programming questions from public sources.
- Deduplicate questions by exact match.
- Screen possible benchmark overlap before generation.
- Generate multiple teacher solutions with DeepSeek-R1, mainly in Python.
- Use nucleus sampling with temperature `0.6`, top-p `0.95`, and maximum output length of 16k tokens.
- Post-process for reasoning tags, code blocks, and Tree-sitter parseability.
- Scale the corpus in stages and report data-scaling behavior.

Known recipe fields:

| Recipe field | Local value |
|---|---|
| Base model | Qwen2.5-Instruct student models reported in the paper |
| Teacher | DeepSeek-R1 |
| Generator | DeepSeek-R1 via SGLang |
| Filtering rule | Deduplication, contamination screening, reasoning/code-format checks, Tree-sitter parsing |
| Rollout count | unknown |
| Optimizer/scaffold | SFT pipeline using NVIDIA NeMo-Skills |

## 5. How can it enter post-training?

**Training or evaluation use:** sft, distillation.

Use it as SFT/distillation data for code reasoning. Do not label it as RLVR data: the paper discusses code execution and rule-based rewards in the broader literature, but this release is primarily a teacher-distilled SFT corpus.

For evaluation, benchmark results in the paper help characterize trained models, but they do not prove that every released trace is correct or reusable.

## 6. What should readers audit?

**Audit risks:**

- Syntax-valid code can still be semantically wrong.
- Incorrect teacher solutions may transfer useful patterns but can also teach wrong reasoning.
- Unit-test filtering was studied, but the main release should not be treated as fully execution-verified.
- Benchmark-contamination checks may miss semantic overlap.
- Public competitive-programming sources can carry split, license, and reuse constraints.
- The paper reports 736,712 Python samples after refinement, while the Hugging Face dataset card lists 735,255 samples; pin the release version before reuse.

## 7. What is missing or risky?

- Rollout count per problem is not pinned in the local metadata.
- No DOI is pinned.
- No separate project page is pinned beyond arXiv, COLM, GitHub, and Hugging Face.
- OpenReview is not pinned locally because the official title match was not verified from a static/source-readable page.
- The dataset license is CC-BY-4.0 at the release level, but the dataset card warns users to check the licenses of underlying sources.

## 8. What to verify before reuse

- Confirm the exact Hugging Face dataset revision and sample count.
- Check source-specific licenses for the intended commercial or research use.
- Re-run or inspect benchmark-overlap checks for the evaluation suite you care about.
- Decide whether you need execution-passing solutions only; if so, build a separate verifier pass.
- Keep `output` reasoning traces and extracted `solution` code distinct during training.
- Report whether you use `split_0`, `split_1`, or both.
- Do not use benchmark scores as a substitute for auditing source mixture, split, license, lineage, and verifier behavior.

## 9. Links and citation

**Official links:**

- Paper: [https://arxiv.org/abs/2504.01943](https://arxiv.org/abs/2504.01943)
- COLM accepted papers page: [https://colmweb.org/2025/AcceptedPapers.html](https://colmweb.org/2025/AcceptedPapers.html)
- Code / pipeline: [https://github.com/NVIDIA/NeMo-Skills](https://github.com/NVIDIA/NeMo-Skills)
- Hugging Face dataset: [https://huggingface.co/datasets/nvidia/OpenCodeReasoning](https://huggingface.co/datasets/nvidia/OpenCodeReasoning)

- Data ID: `opencodereasoning-advancing-data-distillation-for-competitive-coding-2025`
- Citation status: verified
- Confidence: high
