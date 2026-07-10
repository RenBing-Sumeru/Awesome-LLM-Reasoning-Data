<!-- entry_id: magicoder-empowering-code-generation-with-oss-instruct-2024 -->
<!-- card_type: recipes -->
# Magicoder: Empowering code generation with OSS-instruct

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=magicoder-empowering-code-generation-with-oss-instruct-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=magicoder-empowering-code-generation-with-oss-instruct-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=magicoder-empowering-code-generation-with-oss-instruct-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: programmatically_verifiable_outcome_data, data_construction_open_release_recipes, benchmarks_evaluation_surfaces
> Links: [📄 Paper](https://arxiv.org/abs/2312.02120) · [🏛️ PMLR](https://proceedings.mlr.press/v235/wei24h.html) · [🐙 Code](https://github.com/ise-uiuc/magicoder) · [🗂️ Data](https://huggingface.co/datasets/ise-uiuc/Magicoder-OSS-Instruct-75K) · [🤗 HF](https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B)

## TL;DR

Magicoder introduces OSS-Instruct, a code-data recipe that uses open-source code snippets to generate more realistic instruction data.

It is a strong code-data construction example because it grounds synthetic coding instructions in real open-source references rather than free-floating prompt invention.

## 1. What is this work?

- Year / venue: 2024 · ICML.
- Atlas role: construction_recipe, data_release, model_report.
- Domains: code, synthetic-data, open-source-context.
- Current status: verified.
- Why it belongs: Code-data recipe entry for OSS-Instruct, synthetic instruction generation, and code-model SFT.

## 2. What data object does it expose?

- Prompt/source: open-source code snippets used as references for synthetic instruction generation.
- Trace/action author: teacher model generates coding instructions and responses conditioned on open-source snippets.
- Answer/artifact format: instruction-response coding example, often linked to a code reference or task scaffold.
- Process fields:
- source snippet, generated instruction, solution response, model family, benchmark result.
- Environment or substrate: offline code-data generation and code benchmark evaluation.
- Terminal predicate: fine-tuned code model solves programming benchmarks better than comparable baselines.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, mixed.
- Recorded verifier/reward/environment: coding benchmark pass rates and optional executable checks.
- Supervision granularity: answer_level, step_level.

## 4. How is the data constructed?

- Base model: CodeLlama and DeepSeek-Coder variants in the Magicoder family.
- Teacher: GPT-3.5-series teacher model for synthetic instruction generation.
- Generator: OSS-Instruct prompts the teacher with open-source code snippets.
- Filtering rule: open-source references are used to reduce bias and improve realism of generated tasks.
- Sampling protocol: pin dataset version, teacher model, source-code sampling, and benchmark suite.
- Inference budget: teacher calls scale with the 75K instruction-generation target.
- Optimizer/scaffold: SFT over OSS-Instruct code examples.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, evaluation, distillation.

Use it as a recipe for grounded synthetic code instruction data and as a license/provenance audit case.

## 6. What should readers audit?

- Which repositories and licenses source the snippets?
- Are code references separated from benchmark problems?
- Could benchmark solutions appear in open-source snippets?
- Can each instruction be traced back to its source snippet?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Synthetic code tasks can inherit license issues.
- Reference snippets may leak benchmark patterns.
- Teacher-generated solutions can be plausible but wrong.

## 8. Why it matters for post-training reasoning data

It is a strong code-data construction example because it grounds synthetic coding instructions in real open-source references rather than free-floating prompt invention.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2312.02120) · [🏛️ PMLR](https://proceedings.mlr.press/v235/wei24h.html) · [🐙 Code](https://github.com/ise-uiuc/magicoder) · [🗂️ Data](https://huggingface.co/datasets/ise-uiuc/Magicoder-OSS-Instruct-75K) · [🤗 HF](https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B)

- Data ID: `magicoder-empowering-code-generation-with-oss-instruct-2024`
- Citation status: verified
- Confidence: high
