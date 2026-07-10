<!-- entry_id: deep-reinforcement-learning-from-human-preferences-2017 -->
<!-- card_type: verifiers -->
# Deep Reinforcement Learning from Human Preferences

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deep-reinforcement-learning-from-human-preferences-2017&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deep-reinforcement-learning-from-human-preferences-2017&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deep-reinforcement-learning-from-human-preferences-2017&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, preference_reward_feedback_data, judgment_rubric_domain_expert_data, training_usage_optimization_objectives, scaling_rlvr_test_time_compute
> Links: [Paper](https://arxiv.org/abs/1706.03741) · [Venue](https://papers.nips.cc/paper/7017-deep-reinforcement-learning-from-human-preferences) · [DOI](https://doi.org/10.48550/arXiv.1706.03741)

## TL;DR

This paper shows how pairwise human preferences over trajectory segments can train a reward model for RL.

It gives the atlas a foundational reward-model data object: trajectory clips, human comparisons, learned scalar rewards, and proxy-risk audits.

## 1. What is this work?

- Year / venue: 2017 · NeurIPS.
- Atlas role: verifier_reward, survey_background.
- Track decision: Track 00 · RLHF / reward-model surveys.
- Domains: rlhf, reward_modeling, alignment, reinforcement_learning.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: RL environments such as Atari and simulated locomotion tasks.
- Trace/action author: RL policy generates trajectory segments; humans compare segment pairs.
- Answer/artifact format: Pairwise preference labels over short trajectory clips plus learned scalar rewards.
- Process fields: trajectory_segment_a, trajectory_segment_b, human_preference, learned_reward, policy_rollout.
- Environment or substrate: Atari and simulated control environments.
- Terminal predicate: Higher learned reward under policy optimization, not programmatic correctness.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required.
- Recorded verifier/reward/environment: Reward model trained from human preferences between trajectory segments.
- Supervision granularity: pairwise_preference, scalar_reward.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Non-expert human preference labelers.
- Generator: RL policy rollouts.
- Filtering rule: Preference queries selected over trajectory segments.
- Sampling protocol: Policy-dependent rollout and comparison collection.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Reward model plus RL policy optimization.

## 5. How can it enter post-training?

Recorded training/evaluation use: reward_modeling, preference_learning.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Audit labeler instructions, segment-selection policy, and reward-model calibration.
- Clip-level preferences may miss long-horizon failures.
- Optimizing learned rewards can exploit proxy errors.

## 7. What is missing or risky?

- Official code/data/project links remain unknown.
- Reusable preference-query logs, license, and split metadata are unknown.

## 8. Why it matters for post-training reasoning data

It gives the atlas a foundational reward-model data object: trajectory clips, human comparisons, learned scalar rewards, and proxy-risk audits.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/1706.03741) · [Venue](https://papers.nips.cc/paper/7017-deep-reinforcement-learning-from-human-preferences) · [DOI](https://doi.org/10.48550/arXiv.1706.03741)

- Data ID: `deep-reinforcement-learning-from-human-preferences-2017`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
