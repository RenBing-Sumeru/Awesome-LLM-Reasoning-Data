<!-- entry_id: evaluating-large-language-models-trained-on-code-2021 -->
<!-- card_type: benchmarks -->
# Evaluating large language models trained on code

> Curation level: L5_audit_ready
> Category: programmatic_math_code_proof, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2107.03374) · [🐙 Code](https://github.com/openai/human-eval)

## TL;DR

The Codex evaluation paper introduces HumanEval and studies code generation through functional correctness, repeated sampling, and pass@k.

It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions.

## 1. What is this work?

- Year / venue: 2021 · arXiv.
- Atlas role: benchmark, data_release, scaling_study.
- Domains: code, software_engineering.
- Current status: verified.
- Why it belongs: Core code-model evaluation paper and HumanEval release entry for programmatic verification, pass@k, and code-generation safety limitations.

## 2. What data object does it expose?

- Prompt/source: hand-written programming tasks expressed as Python docstrings or function signatures.
- Trace/action author: models generate Python code completions.
- Answer/artifact format: executable Python function.
- Process fields: prompt, generated code, unit-test results, sample count.
- Environment or substrate: Python execution sandbox and test suite.
- Terminal predicate: generated function passes tests.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic unit-test execution.
- Recorded verifier/reward/environment: HumanEval tests and pass@k evaluation.
- Supervision granularity: executable artifact / answer-level correctness.

## 4. How is the data constructed?

- Base model: Codex-style code model evaluated in the paper.
- Teacher: benchmark authors and public code pretraining corpus context.
- Generator: model samples code completions.
- Filtering rule: tests determine functional correctness, while broader safety/security limits require separate review.
- Sampling protocol: repeated sampling with pass@k estimates.
- Inference budget: number of generated samples per problem strongly affects score.
- Optimizer/scaffold: evaluation harness for executable code generation.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, test_time_compute.

Use it when evaluating code reasoning or code-RLVR data; pass@k and unit-test strength must be reported alongside any claimed gain.

## 6. What should readers audit?

- Are tests hidden, complete, and deterministic?
- Is pass@k computed with the right estimator?
- Can generated code exploit weak tests?
- Is the execution sandbox pinned?
- Are safety/security impacts considered beyond benchmark correctness?

## 7. What is missing or risky?

- Small public benchmarks are easy to memorize.
- Unit tests can miss incorrect or insecure behavior.
- Repeated sampling can hide low single-sample reliability.

## 8. Why it matters for post-training reasoning data

It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2107.03374) · [🐙 Code](https://github.com/openai/human-eval)

- Data ID: `evaluating-large-language-models-trained-on-code-2021`
- Citation status: verified
- Confidence: high
