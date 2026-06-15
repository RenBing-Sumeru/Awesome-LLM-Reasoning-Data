<!-- entry_id: livecodebench-holistic-and-contamination-free-evaluation-of-large-language-model-2024 -->
<!-- card_type: benchmarks -->
# LiveCodeBench: Holistic and contamination-free evaluation of large language models for code

> Curation level: L5_audit_ready
> Category: programmatic_math_code_proof, audit_failure_contamination_verifier_attacks, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2403.07974) · [🏛️ OpenReview](https://openreview.net/forum?id=chfJJYC3iL) · [🐙 Code](https://github.com/livecodebench/livecodebench) · [🌐 Project](https://livecodebench.github.io/)

## TL;DR

LiveCodeBench continuously collects recent programming problems to evaluate code generation, execution, repair, and test-output prediction under lower contamination risk.

It gives code-reasoning evaluation a moving-time-window design, making it harder to confuse memorized public problems with genuine coding capability.

## 1. What is this work?

- Year / venue: 2024 · arXiv.
- Atlas role: benchmark, audit_failure.
- Domains: code, contamination, execution.
- Current status: verified.
- Why it belongs: Contamination-aware code benchmark entry for execution-backed evaluation and live problem collection.

## 2. What data object does it expose?

- Prompt/source: recent coding-contest problems from platforms such as LeetCode, AtCoder, and Codeforces.
- Trace/action author: models generate code, repairs, or test-output predictions for newly collected problems.
- Answer/artifact format: program submission or code-related output evaluated by tests or task-specific checks.
- Process fields:
- problem release date, platform, prompt, generated code, tests, pass/fail result, evaluation window.
- Environment or substrate: code execution and benchmark leaderboard infrastructure.
- Terminal predicate: solution passes benchmark tests within the selected time window.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic.
- Recorded verifier/reward/environment: programmatic tests and task-specific correctness checks.
- Supervision granularity: answer_level, full_episode.

## 4. How is the data constructed?

- Base model: evaluated code and general LLMs vary across leaderboard versions.
- Teacher: contest tests and problem statements provide correctness signal.
- Generator: models produce code or code-related predictions.
- Filtering rule: problems are collected over time to reduce pretraining exposure.
- Sampling protocol: pin benchmark release window, problem count, and evaluation task type.
- Inference budget: pass@k, retries, and execution budget must be reported.
- Optimizer/scaffold: benchmark harness and live leaderboard.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, audit, test_time_compute.

Use it as a contamination-aware code benchmark and as a template for time-windowed reasoning evaluation.

## 6. What should readers audit?

- Which time window and platforms are included?
- Are problems grouped by collection date and task type?
- Could post-release model updates have seen earlier benchmark windows?
- Which leaderboard snapshot and problem set version is used?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Live benchmarks still become stale after release.
- Execution settings can affect pass/fail outcomes.
- Public leaderboard feedback can shape future training.

## 8. Why it matters for post-training reasoning data

It gives code-reasoning evaluation a moving-time-window design, making it harder to confuse memorized public problems with genuine coding capability.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2403.07974) · [🏛️ OpenReview](https://openreview.net/forum?id=chfJJYC3iL) · [🐙 Code](https://github.com/livecodebench/livecodebench) · [🌐 Project](https://livecodebench.github.io/)

- Data ID: `livecodebench-holistic-and-contamination-free-evaluation-of-large-language-model-2024`
- Citation status: verified
- Confidence: high
