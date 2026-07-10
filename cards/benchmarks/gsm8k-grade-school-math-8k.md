<!-- entry_id: gsm8k-grade-school-math-2021 -->
<!-- card_type: benchmarks -->
# GSM8K: Grade School Math 8K

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=gsm8k-grade-school-math-2021&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=gsm8k-grade-school-math-2021&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=gsm8k-grade-school-math-2021&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: programmatically_verifiable_outcome_data, benchmarks_evaluation_surfaces
> Links: [📄 Paper](https://arxiv.org/abs/2110.14168) · [🐙 Code](https://github.com/openai/grade-school-math) · [🤗 Hugging Face](https://huggingface.co/datasets/openai/gsm8k)

## TL;DR

Canonical grade-school math benchmark with natural-language word problems, worked solutions, and final numeric answers.

It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training.

## 1. What is this work?

- Year / venue: 2021 · arXiv / OpenAI dataset.
- Atlas role: benchmark, data_release.
- Domains: math.
- Current status: verified.
- Why it belongs: Core math benchmark and data release for answer-level verification and natural-language solution traces.

## 2. What data object does it expose?

- Prompt/source: human-written grade-school math word problems.
- Trace/action author: human solution writers.
- Answer/artifact format: natural-language solution with final numeric answer.
- Process fields: question, solution, final answer.
- Environment or substrate: offline math benchmark.
- Terminal predicate: extracted numeric answer matches the gold answer.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic final-answer check.
- Recorded verifier/reward/environment: answer extraction and numeric comparison.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: not applicable to dataset release.
- Teacher: human problem and solution writers.
- Generator: human-authored examples.
- Filtering rule: curated grade-school math collection.
- Sampling protocol: train/test split in the official release.
- Inference budget: not applicable to the data release.
- Optimizer/scaffold: commonly used for SFT, verifier training, or evaluation.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, sft, reward_modeling.

Use it as answer-level data; process labels require additional annotation because worked solutions are not per-step verified labels.

## 6. What should readers audit?

- Is answer extraction robust to formatting?
- Is the official train/test split preserved?
- Has the benchmark leaked into training corpora?
- Are solutions used as traces or only as explanations?
- Are variants deduplicated across derived datasets?

## 7. What is missing or risky?

- Benchmark saturation and contamination are major risks.
- Numeric equality can miss reasoning errors.
- Small scope can overstate general math ability.

## 8. Why it matters for post-training reasoning data

It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2110.14168) · [🐙 Code](https://github.com/openai/grade-school-math) · [🤗 Hugging Face](https://huggingface.co/datasets/openai/gsm8k)

- Data ID: `gsm8k-grade-school-math-2021`
- Citation status: verified
- Confidence: high
