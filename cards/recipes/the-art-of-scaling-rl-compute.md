<!-- entry_id: khatri-scaling-rl-2025 -->
<!-- card_type: recipes -->
# The Art of Scaling Reinforcement Learning Compute for LLMs

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=khatri-scaling-rl-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=khatri-scaling-rl-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=khatri-scaling-rl-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: scaling_rlvr_test_time_compute, data_construction_open_release_recipes
> Links: [📄 Paper](https://arxiv.org/abs/2510.13786) · [🏛️ OpenReview](https://openreview.net/forum?id=FMjeC9Msws)

## TL;DR

The Art of Scaling RL Compute studies RL compute scaling with large ablations and separates asymptotic performance from compute efficiency.

It gives atlas readers a framework for judging RL recipe claims: some choices move the ceiling, while others mostly change how cheaply the run reaches it.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas role: scaling_study, construction_recipe.
- Domains: scaling, rlvr.
- Current status: verified.
- Why it belongs: Scaling-study and recipe card for RL compute prediction, ScaleRL-style best practices, and asymptote-versus-efficiency analysis.

## 2. What data object does it expose?

- Prompt/source: RL training and validation tasks used to fit compute-performance curves.
- Trace/action author: policies trained under different RL recipes generate answers/trajectories.
- Answer/artifact format: training runs, reward outcomes, validation curves, and ablation results.
- Process fields: loss aggregation, normalization, curriculum, off-policy choice, compute budget, asymptote, efficiency.
- Environment or substrate: large-scale RL training experiments.
- Terminal predicate: validation performance under a specified RL compute budget.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed benchmark/reward evaluation over RL runs.
- Recorded verifier/reward/environment: compute-performance curves and recipe ablations.
- Supervision granularity: run-level scaling metrics plus answer/reward-level outcomes.

## 4. How is the data constructed?

- Base model: evaluated LLMs in large RL compute study.
- Teacher: reward signal and validation tasks.
- Generator: RL policies under ablated recipes.
- Filtering rule: recipe choices define accepted updates and training stability.
- Sampling protocol: many runs across compute budgets and algorithmic choices.
- Inference budget: training compute is the primary axis; evaluation budget must be fixed for comparison.
- Optimizer/scaffold: ScaleRL-style recipe and scaling-curve extrapolation.

## 5. How can it enter post-training?

Recorded training/evaluation use: rlvr, test_time_compute, evaluation.

Use it when comparing RL algorithms: ask whether a change improves the asymptote or merely reaches the same asymptote with less compute.

## 6. What should readers audit?

- Are asymptotic performance and compute efficiency reported separately?
- Can small-run extrapolations predict large runs?
- Are curriculum, normalization, and off-policy choices disclosed?
- Is the reward signal stable across scale?
- Are failed runs or instability cases included?

## 7. What is missing or risky?

- Compute-heavy studies can be hard to reproduce.
- Best-practice recipes may depend on task/reward families.
- Scaling curves can encourage overconfidence if validation tasks are narrow.

## 8. Why it matters for post-training reasoning data

It gives atlas readers a framework for judging RL recipe claims: some choices move the ceiling, while others mostly change how cheaply the run reaches it.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2510.13786) · [🏛️ OpenReview](https://openreview.net/forum?id=FMjeC9Msws)

- Data ID: `khatri-scaling-rl-2025`
- Citation status: verified
- Confidence: high
