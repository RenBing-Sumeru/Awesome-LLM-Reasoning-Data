<!-- entry_id: rewardbench-2-advancing-reward-model-evaluation-2025 -->
<!-- card_type: verifiers -->
# RewardBench 2: Advancing Reward Model Evaluation

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-2-advancing-reward-model-evaluation-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-2-advancing-reward-model-evaluation-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-2-advancing-reward-model-evaluation-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, benchmarks_evaluation_surfaces, judgment_rubric_domain_expert_data
> Links: [arXiv](https://arxiv.org/abs/2506.01937) - [Data](https://huggingface.co/datasets/allenai/reward-bench-2) - [Code](https://github.com/allenai/reward-bench)

## TL;DR

RewardBench 2 extends reward-model evaluation to best-of-4 items across factuality, precise instruction following, math, safety, focus, and ties.

It is an evaluation surface for reward models. Its scores should not be treated as evidence that a reward model will improve downstream RLHF policies.

## 1. What is this work?

The paper releases a harder successor to RewardBench, with unseen human prompts, multi-candidate comparisons, and domain-specific label/verification procedures.

## 2. What data object does it expose?

The relevant record is:

- id,
- prompt,
- chosen/correct completion,
- rejected/incorrect completions,
- number of correct and incorrect completions,
- total completions,
- source models,
- subset,
- metadata.

The standard item is best-of-4: one chosen response and three rejected responses. The Ties subset differs because multiple answers can be acceptable.

## 3. What is the verifier / reward / judge / environment?

The verifier is mixed. Depending on subset, the paper uses manual verification, programmatic checks, rubrics, majority voting, human annotation, or multi-LLM-as-judge.

The evaluation predicate is whether a reward model ranks the chosen/correct completion above rejected/incorrect completions.

## 4. How is the data constructed?

The reported recipe includes:

- source prompts, mostly unseen human prompts from a WildChat pipeline plus manual and CoCoNot safety prompts,
- annotate prompt domains,
- generate candidate completions from 20 models or write them manually,
- filter with QuRater/topic classifiers, manual inspection, and subset-specific verification,
- decontaminate against downstream evaluations using the Tulu 3 toolkit.

Unknown locally: temperature for candidate generation.

## 5. How can it enter post-training?

Recorded use:

- evaluation,
- reward_modeling.

Use it to audit reward models and compare domain-specific failures. Do not use leaderboard accuracy as a proxy for dataset cleanliness or downstream policy quality.

## 6. What should readers audit?

- Aggregate score can hide domain-specific reward-model failures.
- Ties are not ordinary chosen/rejected preference pairs.
- Leaderboard exposure can create benchmark overfitting.
- Mixed verifier sources make label provenance subset-dependent.
- RewardBench 2 accuracy is not direct evidence of RLHF improvement.

## 7. What is missing or risky?

- Exact HF dataset revision.
- Subset-level label source and verifier rule.
- Ties handling in the evaluation harness.
- License constraints for dataset and code.
- Decontamination assumptions and overlap with local evaluation suites.
- Whether prompt sources fit the intended reward-model domain.

## 8. Why it matters for post-training reasoning data

It makes reward-model evaluation more granular: readers can inspect whether a scalar reward handles factuality, math, safety, and instruction-following rather than only aggregate preference accuracy.

## 9. Links and citation

- Institution: Allen Institute for AI; University of Washington; Cohere.
- Official links: arXiv, code, data, and leaderboard/project.
- arXiv: https://arxiv.org/abs/2506.01937
- DOI: https://doi.org/10.48550/arXiv.2506.01937
- Code: https://github.com/allenai/reward-bench
- Data: https://huggingface.co/datasets/allenai/reward-bench-2
- Project: https://huggingface.co/spaces/allenai/reward-bench
- Data ID: `rewardbench-2-advancing-reward-model-evaluation-2025`
- Citation status: verified
- Confidence: high
