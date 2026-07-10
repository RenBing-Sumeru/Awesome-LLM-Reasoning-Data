<!-- entry_id: dart-math-2024 -->
<!-- card_type: releases -->
# DART-Math

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=dart-math-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=dart-math-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=dart-math-2024&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

DART-Math releases difficulty-aware, verifier-filtered math CoTs for SFT.

## 1. What is this work?

It allocates rejection-sampling targets by estimated prompt difficulty.

## 2. What data object does it expose?

Uniform and Hard query/response releases plus accepted-response pools and sampling metadata.

## 3. What is the verifier / reward / judge / environment?

Regex extraction and SymPy symbolic comparison judge final answers.

## 4. How is the data constructed?

DeepSeekMath-7B-RL samples MATH/GSM8K CoTs; accepted answers are retained under Uniform or proportional-to-difficulty allocation.

## 5. How can it enter post-training?

It supports answer-level math SFT, not verified process supervision.

## 6. What should readers audit?

Pin HF revisions, source licenses, raw-trial limits, allocation logs, and benchmark-overlap controls.

## 7. What is missing or risky?

Final-answer correctness does not establish CoT validity; complete rejected traces and immutable manifests are not confirmed.

## 8. Why it matters for post-training reasoning data

It separates verifier-filtered acceptance, trial budget, difficulty estimation, and final SFT distribution.

## 9. Links and citation

- [NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/hash/0ef1afa0daa888d695dcd5e9513bafa3-Abstract-Conference.html)
- [Official code](https://github.com/hkust-nlp/dart-math)
- [Official collection](https://huggingface.co/collections/hkust-nlp/dart-math)
