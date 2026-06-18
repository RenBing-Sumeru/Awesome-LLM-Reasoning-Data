<!-- entry_id: livebench-a-challenging-contamination-free-benchmark-for-large-language-models-2024 -->
<!-- card_type: failures -->
# LiveBench: A challenging, contamination-free benchmark for large language models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=livebench-a-challenging-contamination-free-benchmark-for-large-language-models-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=livebench-a-challenging-contamination-free-benchmark-for-large-language-models-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=livebench-a-challenging-contamination-free-benchmark-for-large-language-models-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: surveys_and_primers, audit_failure_contamination_verifier_attacks, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2406.19314) · [🏛️ OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [🌐 Project](https://livebench.ai/)

## TL;DR

LiveBench is a frequently updated, contamination-limited benchmark that uses recent sources and objective scoring across math, code, reasoning, language, instruction following, and data analysis.

It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.

## 1. What is this work?

- Year / venue: 2024 · arXiv.
- Atlas role: benchmark, audit_failure.
- Domains: evaluation, math, code, reasoning.
- Current status: verified.
- Why it belongs: Core contamination-audit benchmark for fresh item sourcing, objective scoring, and benchmark-refresh methodology.

## 2. What data object does it expose?

- Prompt/source: recently released math competitions, arXiv papers, news, datasets, and harder variants of existing tasks.
- Trace/action author: models generate final answers; benchmark authors construct fresh tasks.
- Answer/artifact format: task prompt and model answer.
- Process fields: task source, expected answer, scoring rule, release/update cycle.
- Environment or substrate: online/offline benchmark leaderboard with refreshed tasks.
- Terminal predicate: automatic objective score against ground truth.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic/objective scoring.
- Recorded verifier/reward/environment: automatic scoring functions over refreshed benchmark items.
- Supervision granularity: answer_level and benchmark_release_level.

## 4. How is the data constructed?

- Base model: evaluated models vary.
- Teacher: benchmark task sources and answer keys.
- Generator: benchmark authors source and transform recent tasks.
- Filtering rule: avoid stale, contaminated, or judge-biased items.
- Sampling protocol: periodic updates across task families.
- Inference budget: model evaluation settings must be reported.
- Optimizer/scaffold: benchmark refresh and leaderboard infrastructure.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, audit.

Use it as an audit reference whenever a paper claims reasoning gains on static benchmarks.

## 6. What should readers audit?

- Are tasks recent enough to reduce contamination?
- Is scoring objective rather than judge-dependent?
- Are update dates and versions cited?
- Can models exploit source patterns?
- Are prompt and decoding settings reported?

## 7. What is missing or risky?

- Fresh tasks can still leak after release.
- Automatic scoring may miss partial-credit reasoning.
- Version drift makes comparisons hard unless benchmark snapshots are cited.

## 8. Why it matters for post-training reasoning data

It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2406.19314) · [🏛️ OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [🌐 Project](https://livebench.ai/)

- Data ID: `livebench-a-challenging-contamination-free-benchmark-for-large-language-models-2024`
- Citation status: verified
- Confidence: high
