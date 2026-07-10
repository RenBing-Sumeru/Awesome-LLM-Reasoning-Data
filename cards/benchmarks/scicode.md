<!-- entry_id: scicode-a-benchmark-for-scientific-code-generation-and-reasoning-2024 -->
<!-- card_type: benchmarks -->
# SciCode: A benchmark for scientific code generation and reasoning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scicode-a-benchmark-for-scientific-code-generation-and-reasoning-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scicode-a-benchmark-for-scientific-code-generation-and-reasoning-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scicode-a-benchmark-for-scientific-code-generation-and-reasoning-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧮 Programmatic Verification (Track 03) · 🔁 Rollout / Search / TTC Trace (Track 05) · ⚖️ Judgment / Rubric / Domain Expert (Track 07) · 🏗️ Construction & Open Releases (Track 08) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🧰 Programmatic benchmarks

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2407.13168) · [🏛️ Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [🐙 Code](https://github.com/scicode-bench/SciCode) · [🌐 Project](https://scicode-bench.github.io/)

## TL;DR

SciCode evaluates code generation for realistic scientific research problems decomposed into subproblems with tests and gold solutions.

It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests.

## 1. What is this work?

- Year / venue: 2024 · NeurIPS Datasets and Benchmarks.
- Atlas role: benchmark, data_release.
- Domains: scientific-code, research-problems, execution.
- Current status: verified.
- Why it belongs: Scientific code benchmark entry for research-problem decomposition, programmatic checking, and domain expert curation.

## 2. What data object does it expose?

- Prompt/source: scientist-curated research coding problems across natural-science and math domains.
- Trace/action author: models generate code for main problems or decomposed subproblems.
- Answer/artifact format: code solution evaluated with scientist-annotated tests or expected outputs.
- Process fields:
- domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.
- Environment or substrate: scientific Python/code execution benchmark harness.
- Terminal predicate: code solves the scientific subproblem or main problem under tests.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, judgment_required.
- Recorded verifier/reward/environment: test cases and scientist-curated gold solutions.
- Supervision granularity: answer_level, step_level.

## 4. How is the data constructed?

- Base model: evaluated frontier and open models vary by benchmark study.
- Teacher: scientists and AI researchers curate problems, decompositions, solutions, and tests.
- Generator: models produce code for subproblems and main problems.
- Filtering rule: problems are selected from real research needs and decomposed for graded evaluation.
- Sampling protocol: pin benchmark version, subproblem mode, provided background, and execution environment.
- Inference budget: tool access, retries, and subproblem solving mode change results.
- Optimizer/scaffold: scientific code benchmark harness.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, audit, test_time_compute.

Use it as a scientific-code evaluation surface and as a template for expert-curated code reasoning data.

## 6. What should readers audit?

- Which scientific domains and subdomains dominate the benchmark?
- Are background materials and tests held out from model training?
- Can research problems or code solutions be found in public repositories?
- Which scientist annotations define each gold solution and test?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Models can pass narrow tests without scientific validity.
- Domain background can leak solution hints.
- Execution environments can change numerical results.

## 8. Why it matters for post-training reasoning data

It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2407.13168) · [🏛️ Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [🐙 Code](https://github.com/scicode-bench/SciCode) · [🌐 Project](https://scicode-bench.github.io/)

- Data ID: `scicode-a-benchmark-for-scientific-code-generation-and-reasoning-2024`
- Citation status: verified
- Confidence: high
