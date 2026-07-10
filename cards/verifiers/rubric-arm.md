<!-- entry_id: alternating-reinforcement-learning-for-rubric-based-reward-modeling-in-non-verifiable-llm-post-training-rubric-arm-2026 -->
<!-- card_type: verifiers -->
# Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=alternating-reinforcement-learning-for-rubric-based-reward-modeling-in-non-verifiable-llm-post-training-rubric-arm-2026&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=alternating-reinforcement-learning-for-rubric-based-reward-modeling-in-non-verifiable-llm-post-training-rubric-arm-2026&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=alternating-reinforcement-learning-for-rubric-based-reward-modeling-in-non-verifiable-llm-post-training-rubric-arm-2026&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, judgment_rubric_domain_expert_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2602.01511) - [Hugging Face](https://huggingface.co/collections/OpenRubrics/rubricarm)

## TL;DR

Rubric-ARM trains a rubric generator and rubric-conditioned judge with alternating reinforcement learning for non-verifiable preference feedback.

The central object is a generated rubric plus a judge trajectory over response pairs. Treat the rubric generator, judge, and policy updates as one coupled system rather than as independent proof of data quality.

## 1. What is this work?

The paper targets non-verifiable LLM post-training tasks where exact-answer checks are unavailable. It alternates between improving rubric generation and improving a rubric-conditioned judge.

For this atlas, it is useful as a reward-modeling recipe where the feedback contract is learned and rubric-conditioned.

## 2. What data object does it expose?

The relevant record can include:

- prompt,
- response A,
- response B,
- generated rubric,
- rubric dimension,
- judge reasoning,
- preference prediction,
- preference feedback,
- format reward,
- policy update signal.

Prompt sources are general-domain OpenRubrics plus non-verifiable evaluation domains.

## 3. What is the verifier / reward / judge / environment?

The verifier is model-judged and mixed. A rubric-conditioned judge is trained with preference-correctness and format rewards.

The terminal predicate is whether the judge predicts the preferred response under the generated rubric while satisfying the required output format.

## 4. How is the data constructed?

Reported construction details include:

- use Qwen-3-8B for rubric generator and judge,
- warm up from synthetic rubric/judge trajectories,
- use UltraFeedback, SkyWork, Magpie, and synthetic instruction-following data in the warmup mixture,
- split OpenRubrics into non-overlapping parts,
- cache rubrics during judge updates and randomize response order,
- run three alternating RL iterations.

Reported scaffolds include GRPO via ms-swift and DPO/IterDPO via LLaMA-Factory.

## 5. How can it enter post-training?

Recorded use:

- reward_modeling,
- evaluation.

Use it for studying rubric-conditioned reward modeling on open-ended tasks. Do not report downstream policy or benchmark gains as evidence that the generated rubrics are complete or human-aligned.

## 6. What should readers audit?

- Generated rubrics can drift away from human preference dimensions.
- Alternating updates can create non-stationary reward targets and reward hacking.
- A format-valid judge trajectory is not necessarily a correct feedback signal.
- Official code/data links are not pinned locally; checkpoint licenses need review.
- The same rubric generator may encode systematic omissions across many examples.

## 7. What is missing or risky?

- Exact Hugging Face checkpoint and collection revisions.
- Whether official code or data artifacts have been released.
- OpenRubrics split construction and overlap with local evaluations.
- License constraints for checkpoints and source datasets.
- Whether generated rubrics match the intended deployment task.

## 8. Why it matters for post-training reasoning data

Rubric-ARM makes the generated rubric part of the reward-training loop. That is a useful reminder that reward feedback can be a constructed object whose failure modes come from both the judge and the rubric writer.

## 9. Links and citation

- Institution: Emory University; ByteDance; University of Chicago; Purdue University; University at Albany.
- Official links: arXiv, DOI, and Hugging Face collection.
- arXiv: https://arxiv.org/abs/2602.01511
- DOI: https://doi.org/10.48550/arXiv.2602.01511
- Hugging Face: https://huggingface.co/collections/OpenRubrics/rubricarm
- Code: null
- Data: null
- Project: null
- Data ID: `alternating-reinforcement-learning-for-rubric-based-reward-modeling-in-non-verifiable-llm-post-training-rubric-arm-2026`
- Citation status: verified
- Confidence: high
