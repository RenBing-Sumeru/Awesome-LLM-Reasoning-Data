<!-- entry_id: measuring-mathematical-problem-solving-with-the-math-dataset-2021 -->
<!-- card_type: benchmarks -->
# Measuring mathematical problem solving with the MATH dataset

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=measuring-mathematical-problem-solving-with-the-math-dataset-2021&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=measuring-mathematical-problem-solving-with-the-math-dataset-2021&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=measuring-mathematical-problem-solving-with-the-math-dataset-2021&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: programmatic_math_code_proof, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2103.03874) · [🐙 Code](https://github.com/hendrycks/math)

## TL;DR

Introduces MATH, a competition-style math benchmark with challenging problems, subject categories, and step-by-step solutions.

MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems.

## 1. What is this work?

- Year / venue: 2021 · NeurIPS Datasets and Benchmarks.
- Atlas role: benchmark, data_release.
- Domains: math.
- Current status: verified.
- Why it belongs: Core math benchmark for difficult answer-level reasoning, category analysis, and SFT/evaluation reuse.

## 2. What data object does it expose?

- Prompt/source: competition-style math problems.
- Trace/action author: human solution writers.
- Answer/artifact format: problem statement, step-by-step solution, final answer.
- Process fields: subject category, difficulty, solution, answer.
- Environment or substrate: offline math benchmark.
- Terminal predicate: final answer equivalence after normalization.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic or rule-assisted answer matching.
- Recorded verifier/reward/environment: final-answer scoring with answer normalization.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: not applicable to dataset release.
- Teacher: human problem sources and solution writers.
- Generator: curated competition problems.
- Filtering rule: dataset curation by subject and difficulty.
- Sampling protocol: official split and category labels.
- Inference budget: not applicable to release.
- Optimizer/scaffold: commonly reused for SFT, evaluation, verifier training, and RLVR.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, sft.

Use it as hard answer-level math data; if you need step correctness, add explicit process annotation or verifier traces.

## 6. What should readers audit?

- Does answer normalization handle equivalent forms?
- Are categories and difficulty labels preserved?
- Has the problem appeared in training data?
- Are worked solutions treated as gold traces without step labels?
- Are derived datasets deduplicated against MATH?

## 7. What is missing or risky?

- Equivalent-answer scoring can be brittle.
- Competition problems are prone to contamination.
- Worked solutions are not automatically faithful process labels.

## 8. Why it matters for post-training reasoning data

MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2103.03874) · [🐙 Code](https://github.com/hendrycks/math)

- Data ID: `measuring-mathematical-problem-solving-with-the-math-dataset-2021`
- Citation status: verified
- Confidence: high
