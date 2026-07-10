<!-- entry_id: process-based-self-rewarding-language-models-2025 -->
<!-- card_type: recipes -->
# Process-based Self-Rewarding Language Models

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=process-based-self-rewarding-language-models-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=process-based-self-rewarding-language-models-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=process-based-self-rewarding-language-models-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, process_trace_supervision_data, data_construction_open_release_recipes, training_usage_optimization_objectives, audit_failure_contamination_verifier_attacks
> Links: [arXiv](https://arxiv.org/abs/2503.03746) - [Code](https://github.com/Shimao-Zhang/Process-Self-Rewarding) - [Data](https://github.com/Shimao-Zhang/Process-Self-Rewarding/tree/master/data)

## TL;DR

Process-based Self-Rewarding uses long-thought traces, step-wise LLM-as-a-judge feedback, and step-wise preference optimization for mathematical reasoning.

It bridges preference feedback and process supervision. The step labels are model-generated and should be audited as process rewards, not treated as ground-truth reasoning correctness.

## 1. What is this work?

The paper builds a process-based self-rewarding loop for math reasoning. It generates long-thought traces, segments reasoning steps, creates step-wise comparisons, and trains with step-wise DPO.

For this atlas, it is a recipe card that sits between Preference & Reward Feedback Data and Process / Trace Supervision Data.

## 2. What data object does it expose?

The relevant record can include:

- problem,
- long-thought trace,
- previous steps,
- candidate step,
- chosen step,
- rejected step,
- step judgment,
- judge explanation,
- final answer,
- iteration.

Seed sources include NuminaMath and PRM800K-derived process reward modeling components.

## 3. What is the verifier / reward / judge / environment?

The verifier is model-judged and mixed. Qwen2.5-72B PRM filters candidate steps; OpenAI o1 segments steps and generates detailed judgments; the policy loop produces step-wise self-judgments.

The terminal predicate is whether each reasoning step or trace segment is preferred by the step-wise self-judge signal.

## 4. How is the data constructed?

Reported construction details include:

- build IFT data from NuminaMath,
- use a PRM trained on PRM800K for candidate-step filtering,
- generate candidate next steps with MCTS,
- use OpenAI o1 for step segmentation and detailed judgments,
- keep pairwise judgments aligned with PRM assessments,
- swap pair order and keep only consistent comparisons,
- train with step-wise DPO.

Unknown locally: exact numeric generation temperature/top_p and full search-width rendering in the arXiv HTML.

## 5. How can it enter post-training?

Recorded use:

- preference_learning,
- process_supervision.

Use it for studying synthetic step-level preference data. Keep step segmentation, judge explanation, and PRM filtering provenance attached.

## 6. What should readers audit?

- Step-wise judges may reward surface reasoning style instead of valid reasoning.
- Long-thought traces can contain plausible but incorrect intermediate steps.
- Self-generated process rewards can amplify the model's own reasoning blind spots.
- Teacher step segmentation can introduce formatting or reasoning biases.
- Benchmark gains are not proof that step labels are correct.

## 7. What is missing or risky?

- Exact GitHub data revision.
- Repository license and source dataset licenses.
- Which split is IFT, EFT, train, or test.
- PRM checkpoint and filtering thresholds.
- Step segmentation prompt and judge prompt.
- Whether local tasks match the math-only construction setting.

## 8. Why it matters for post-training reasoning data

It makes process feedback a preference object: chosen and rejected reasoning steps can train a model, but the verifier provenance must travel with the trace.

## 9. Links and citation

- Institution: Nanjing University; University of Manchester; Microsoft Research Asia.
- Official links: arXiv, DOI, GitHub code, and GitHub data directory.
- arXiv: https://arxiv.org/abs/2503.03746
- DOI: https://doi.org/10.48550/arXiv.2503.03746
- Code: https://github.com/Shimao-Zhang/Process-Self-Rewarding
- Data: https://github.com/Shimao-Zhang/Process-Self-Rewarding/tree/master/data
- Project: null
- Hugging Face: null
- Data ID: `process-based-self-rewarding-language-models-2025`
- Citation status: verified
- Confidence: high