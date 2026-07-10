<!-- entry_id: large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024 -->
<!-- card_type: recipes -->
# Large Language Monkeys: Scaling Inference Compute with Repeated Sampling

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: rollout_search_test_time_trace_data
> Links: [📄 Paper](https://arxiv.org/abs/2407.21787)

## TL;DR

Large Language Monkeys studies repeated sampling as a simple way to scale inference compute across math, code, formal proof, and repository-repair tasks.

It matters because it separates two different questions: whether any sampled attempt solves the problem, and whether the system can reliably identify that successful attempt without an oracle.

## 1. What is this work?

- Year / venue: 2024 · arXiv.
- Atlas role: scaling_study, construction_recipe.
- Domains: math, code, formal_proofs, software_engineering, test_time_compute.
- Current status: verified.
- Why it belongs: Core repeated-sampling reference for pass@k, coverage, verifier availability, sample selection, and inference-budget attribution.

## 2. What data object does it expose?

- Prompt/source: GSM8K, MATH, MiniF2F-MATH, CodeContests, and SWE-bench Lite tasks.
- Trace/action author: language models sampled repeatedly at positive temperature; SWE-bench samples are full multi-turn agent attempts.
- Answer/artifact format: a candidate solution set for each problem, containing final answers, programs, Lean proofs, or repository patches depending on the task.
- Process fields: task, model, sample count, pass@k, coverage, verifier type, selected-answer method, and inference cost or FLOPs.
- Environment or substrate: math benchmarks, Lean4 proof checking, programming tests, and SWE-bench Lite repository test suites.
- Terminal predicate: at least one candidate passes the task verifier, or a selected candidate matches the benchmark answer.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic for code, Lean, and repository tests; mixed for math tasks where answer selection may rely on oracle checks, majority voting, or reward-model scoring.
- Recorded verifier/reward/environment: unit tests, proof checker feedback, benchmark answer checks, majority vote, and reward-model selection.
- Supervision granularity: answer-level candidates and full SWE-bench agent attempts.

## 4. How is the data constructed?

- Base model: Llama 3, Gemma, Pythia, and DeepSeek-Coder-V2-Instruct models in the reported experiments.
- Teacher: benchmark labels, unit tests, proof checkers, and selection methods rather than a teacher model.
- Generator: models repeatedly sample independent candidate solutions for each task.
- Filtering rule: use automatic verifiers where available; compare majority voting and reward-model scoring when no automatic verifier is available.
- Sampling protocol: repeated independent sampling across large budgets, including up to 10,000 samples for several tasks and 250 SWE-bench Lite attempts.
- Inference budget: sample count, pass@k/coverage curves, FLOP estimates, and SWE-bench Lite per-attempt costs.
- Optimizer/scaffold: inference-time repeated sampling; Moatless Tools scaffold for SWE-bench Lite attempts.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, test_time_compute.

Use it as an audit baseline before attributing a reasoning gain to a new dataset, RL objective, or model family. If more samples plus a verifier explains the gain, the contribution may be inference-budget scaling rather than better training data.

## 6. What should readers audit?

- Is the comparison matched for sample count, cost, and wall-clock constraints?
- Are reported gains based on oracle coverage or on a deployable selector?
- Which tasks have automatic verifiers, and which require a learned or heuristic selector?
- Are rejected or failed candidates visible enough to study selection precision?
- Does the verifier reward the intended task or only a narrow test harness?
- Is a full agent attempt counted as one sample in SWE-bench-style tasks?

## 7. What is missing or risky?

- Coverage can grow with sample budget even when practical selection precision remains poor.
- Automatic-verifier domains can overstate transfer to open-ended or judgment-required tasks.
- Comparing repeated sampling against single attempts can conflate model quality with inference budget.
- Reward models and majority voting can plateau in no-verifier settings, leaving a gap between oracle coverage and usable performance.
- The paper is an evaluation/scaling study, not a released training dataset; reuse should preserve the benchmark and verifier context.

## 8. Why it matters for post-training reasoning data

It gives atlas readers a concrete way to audit whether a reasoning gain comes from more samples, a usable verifier, a better selector, or a genuinely stronger model or training recipe.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, sampled candidates, verifier, selected answer, budget, and failed attempts all matter.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2407.21787)

- Data ID: `large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024`
- Citation status: verified
- Confidence: high
