<!-- entry_id: humaneval-code-generation-benchmark-2021 -->
<!-- card_type: benchmarks -->
# HumanEval: Hand-Written Evaluation Set

> Curation level: L5_audit_ready
> Category: programmatic_math_code_proof, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2107.03374) · [🐙 Code](https://github.com/openai/human-eval)

## TL;DR

HumanEval provides hand-written Python programming problems with unit tests for executable code-generation evaluation.

It made unit-test execution a standard verifier for code reasoning, pass@k reporting, and later code-data filtering recipes.

## 1. What is this work?

- Year / venue: 2021 · arXiv / OpenAI dataset.
- Atlas role: benchmark, data_release.
- Domains: code.
- Current status: verified.
- Why it belongs: Core code benchmark for executable answer verification and pass@k evaluation.

## 2. What data object does it expose?

- Prompt/source: hand-written Python function specifications and docstrings.
- Trace/action author: benchmark authors write prompts and tests; models generate code.
- Answer/artifact format: Python function completion.
- Process fields: prompt, generated code, unit-test outcomes.
- Environment or substrate: Python execution sandbox.
- Terminal predicate: generated code passes the test suite.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic unit tests.
- Recorded verifier/reward/environment: Python test execution.
- Supervision granularity: executable_artifact and answer_level.

## 4. How is the data constructed?

- Base model: not applicable to dataset release.
- Teacher: benchmark authors.
- Generator: evaluated code models.
- Filtering rule: hand-written tasks and tests.
- Sampling protocol: pass@k over multiple generated samples.
- Inference budget: k samples per problem affects score.
- Optimizer/scaffold: evaluation benchmark; later reused for filtering and RLVR-style code tasks.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation.

Use it to reason about executable verification, but remember that passing public tests is weaker than proving functional correctness.

## 6. What should readers audit?

- Are tests hidden or public?
- Can generated code exploit test weakness?
- Is pass@k computed correctly?
- Is the execution environment pinned?
- Has the small benchmark been memorized?

## 7. What is missing or risky?

- Small benchmark size encourages overfitting.
- Unit tests can be incomplete.
- Sandbox and dependency assumptions affect reproducibility.

## 8. Why it matters for post-training reasoning data

It made unit-test execution a standard verifier for code reasoning, pass@k reporting, and later code-data filtering recipes.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2107.03374) · [🐙 Code](https://github.com/openai/human-eval)

- Data ID: `humaneval-code-generation-benchmark-2021`
- Citation status: verified
- Confidence: high
