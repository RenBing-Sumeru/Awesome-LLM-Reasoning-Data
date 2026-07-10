<!-- entry_id: dart-math-2024 -->
<!-- card_type: releases -->
# DART-Math

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=dart-math-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=dart-math-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=dart-math-2024&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

DART-Math releases two difficulty-aware, verifier-filtered synthetic math-CoT datasets for SFT. Its regex/SymPy check establishes final-answer acceptance, not the correctness of every reasoning step; current Hugging Face row counts and revisions need pinning before reuse.

## 1. What is this work?

- Year / venue: 2024 · NeurIPS 2024.
- Atlas roles: data release, construction recipe, and programmatic verifier.
- Domain / use: mathematical reasoning SFT.
- Status: partial, despite verified paper, code, collection, and data artifacts.

It compares uniform rejection sampling with allocation proportional to estimated prompt difficulty.

## 2. What data object does it expose?

The released object is an answer-level query/response pair with correctness and sampling metadata:

- prompts: MATH and GSM8K training queries plus original examples;
- trace author: DeepSeekMath-7B-RL;
- releases: Uniform and Hard query/response datasets, with accepted-response pools;
- fields: query, response, answer correctness, source metadata, sampling counts, and pass rate.

The metadata records 590,705 Uniform and 585,392 Hard viewer rows, but reproducible reuse requires pinning immutable dataset revisions and final row provenance.

## 3. What is the verifier / reward / judge / environment?

Regex answer extraction followed by SymPy symbolic calculation judges the final answer. A retained response is one whose extracted answer passes this equality judgment. It does not formally verify the chain of thought, and known erroneous GSM8K labels can affect acceptance; difficulty is also specific to the sampling generator.

## 4. How is the data constructed?

1. Take MATH/GSM8K training prompts and original examples.
2. Sample natural-language CoTs from DeepSeekMath-7B-RL through vLLM.
3. Extract and check final answers with regex and SymPy.
4. Retain accepted responses under either Uniform allocation or the Hard allocation, which is proportional to observed failure rate.
5. Train with the resulting answer-level pairs.

Final-data settings are `k_u=40`, `k_p=192`, maximum 2,048 tokens, `top-p=0.95`, and temperature 1.6. Complete raw trials and the full rejected pool are not confirmed.

## 5. How can it enter post-training?

It supports answer-level math SFT. It should not be treated as verified process supervision: a terminally correct answer can contain invalid or ungrounded intermediate reasoning. Any reuse should preserve source, generator, checker version, allocation rule, and acceptance outcome.

## 6. What should readers audit?

- Pin the Hugging Face collection/dataset revisions, manifests, and final row counts.
- Recheck MATH/GSM8K and original-example licenses, split membership, and source provenance.
- Preserve raw-trial caps, seeds, checker/parser versions, allocation logs, and failed samples.
- Audit semantic and model-pretraining overlap; no independent audit is reported.
- Inspect failures from malformed extraction, symbolic equivalence, and erroneous source labels.

## 7. What is missing or risky?

Final-answer correctness does not establish CoT validity. Complete rejected traces, immutable manifests, and an independent semantic/pretraining decontamination audit are not confirmed. The repository/cards display MIT, but upstream-license compatibility still requires review. Reported benchmark results measure a model/data combination and do not prove the released traces are generally high quality.

## 8. Why it matters for post-training reasoning data

It separates final-answer verification, trial budget, generator-dependent difficulty estimation, and the final SFT distribution. That makes the allocation policy inspectable, while also showing why its outcome verifier is insufficient evidence for process-quality claims.

## 9. Links and citation

- [NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/hash/0ef1afa0daa888d695dcd5e9513bafa3-Abstract-Conference.html)
- [arXiv](https://arxiv.org/abs/2407.13690)
- [Official code](https://github.com/hkust-nlp/dart-math)
- [Official data](https://huggingface.co/datasets/hkust-nlp/dart-math-hard)
- [Official collection](https://huggingface.co/collections/hkust-nlp/dart-math)
- [DOI](https://doi.org/10.52202/079017-0251)

Tong et al., *DART-Math: Difficulty-Aware Rejection Tuning for Mathematical Problem-Solving*, NeurIPS 2024.

- Data ID: `dart-math-2024`
- Citation status: verified
- Confidence: high
- Release status: partial
