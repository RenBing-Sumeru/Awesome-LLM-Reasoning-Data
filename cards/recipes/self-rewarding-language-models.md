<!-- entry_id: self-rewarding-lms-2024 -->
<!-- card_type: recipes -->
# Self-Rewarding Language Models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-rewarding-lms-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-rewarding-lms-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-rewarding-lms-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, preference_reward_feedback_data, data_construction_open_release_recipes, training_usage_optimization_objectives
> Links: [Paper](https://arxiv.org/abs/2401.10020) · [DOI](https://doi.org/10.48550/arXiv.2401.10020)

## TL;DR

Self-Rewarding Language Models use model-generated judgments as preference signals for iterative DPO.

It makes self-generated judge feedback a first-class post-training data object with clear risks around judge bias and reward hacking.

## 1. What is this work?

- Year / venue: 2024 · ICML.
- Atlas role: construction_recipe, verifier_reward.
- Track decision: Track 00 · RLHF / reward-model surveys.
- Domains: instruction_following, llm_as_judge, self_training, preference_feedback.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Instruction-following prompts; exact prompt mixture remains partially undisclosed.
- Trace/action author: Model generates responses and also judges responses via LLM-as-judge prompting.
- Answer/artifact format: Candidate responses with self-generated reward/judgment signal for iterative DPO.
- Process fields: prompt, candidate_response, self_reward, preference_pair_or_ranking, iteration.
- Environment or substrate: Offline iterative preference-training loop.
- Terminal predicate: Self-generated preferences used for iterative DPO improvement.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required.
- Recorded verifier/reward/environment: The language model itself acting as judge.
- Supervision granularity: pairwise_preference.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: The model-as-judge produces reward signal.
- Generator: The model produces candidate responses and judgments.
- Filtering rule: Self-generated reward/preference selection; exact rule requires full-paper audit.
- Sampling protocol: Three iterations reported by the paper.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Iterative DPO with self-rewarding judgments.

## 5. How can it enter post-training?

Recorded training/evaluation use: preference_learning.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Inspect judge prompt, response sampling, preference conversion, and iteration count.
- Check calibration against external human or benchmark signals.
- Watch for style bias, overconfidence, and feedback collapse.

## 7. What is missing or risky?

- Official code/data/project links remain unknown.
- Exact prompt mixture and preference-conversion rule require full-paper review.

## 8. Why it matters for post-training reasoning data

It makes self-generated judge feedback a first-class post-training data object with clear risks around judge bias and reward hacking.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2401.10020) · [DOI](https://doi.org/10.48550/arXiv.2401.10020)

- Data ID: `self-rewarding-lms-2024`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
