<!-- entry_id: rest-textsuperscriptem-2023 -->
<!-- card_type: recipes -->
# Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-textsuperscriptem-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-textsuperscriptem-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-textsuperscriptem-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, data_construction_open_release_recipes, training_usage_optimization_objectives
> Links: [Paper](https://arxiv.org/abs/2312.06585) · [DOI](https://doi.org/10.48550/arXiv.2312.06585)

## TL;DR

ReST^EM samples model solutions, filters them with binary feedback, and fine-tunes on accepted examples.

It shows how verifiable task feedback can become synthetic training data beyond human-written examples, while exposing verifier and accepted-sample bias risks.

## 1. What is this work?

- Year / venue: 2023 · arXiv.
- Atlas role: construction_recipe, scaling_study.
- Track decision: Track 01 · Self-training / STaR.
- Domains: math, code, problem_solving, self_training.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: MATH and APPS-style problem-solving tasks.
- Trace/action author: Current model samples candidate solutions.
- Answer/artifact format: Generated solution/answer candidate with binary feedback.
- Process fields: problem, sampled_solution, binary_feedback, accepted_sample, iteration.
- Environment or substrate: Offline self-training loop over math/code problem-solving tasks.
- Terminal predicate: Candidate passes the task feedback filter.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic.
- Recorded verifier/reward/environment: Binary correctness/verifiability feedback.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Self-generated samples filtered by feedback.
- Generator: Current model policy.
- Filtering rule: Generate samples, filter with binary feedback, fine-tune, repeat.
- Sampling protocol: Iterative EM-style self-training.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: ReST^EM self-training loop.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Audit verifier false positives and rejected-sample visibility.
- Check benchmark reuse and split policy.
- Separate gains from more samples, filtering, and model scale.

## 7. What is missing or risky?

- Official code/data/project links remain unknown.
- Closed model lineage and unreleased generated samples limit reproducibility.

## 8. Why it matters for post-training reasoning data

It shows how verifiable task feedback can become synthetic training data beyond human-written examples, while exposing verifier and accepted-sample bias risks.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2312.06585) · [DOI](https://doi.org/10.48550/arXiv.2312.06585)

- Data ID: `rest-textsuperscriptem-2023`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
