# Awesome LLM Reasoning Data

> A learning-first atlas of post-training reasoning data, verifiers, reward signals, construction recipes, and audit fields.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)
![Status](https://img.shields.io/badge/status-local%20build-blue)
![License](https://img.shields.io/badge/license-MIT-green)

<p align="center"><img src="assets/overview.svg" width="88%" alt="Awesome LLM Reasoning Data overview"></p>

This repository is a structured map of post-training reasoning data for large language models. It is not only a paper list. It organizes public work around the data objects, verification contracts, reward signals, construction recipes, scaling claims, and audit fields that make reasoning-model gains inspectable.

Post-training reasoning data is not just a prompt and an answer. A useful reasoning-data item often packages a task context, model behavior, trace or action trajectory, feedback from a verifier/reward/judge/environment, and metadata about base model, teacher, filter, split, budget, scaffold, and lineage.

## What is post-training reasoning data?

Post-training reasoning data is data used after pretraining to teach, shape, reinforce, or audit reasoning behavior. It can enter supervised fine-tuning, distillation, preference learning, reward modeling, process supervision, RLVR, agent training, evaluation, or test-time adaptation.

## Why this repository exists

Reasoning-model reports increasingly disclose optimizer details while leaving the data object under-specified. This atlas asks a data-first question: what was the model actually trained against, who or what verified it, and which fields are needed to attribute the gain?

## How to use this repository

- Start with the learning path below.
- Use `docs/` as a mini-course.
- Use `data/papers.yaml` as the structured atlas.
- Use `docs/index.html` as the searchable local site.
- Use `cards/` when adding a new release, verifier, recipe, or agent trajectory.

## The map in one page

<p align="center"><img src="assets/taxonomy.svg" width="80%" alt="Verifier-anchored taxonomy"></p>

The core unit is a **verifier-bearing sample**: a task and model behavior connected to feedback from a programmatic checker, an environment, a rubric, a judge, a reward model, or another auditable signal.

## Learning path

### Beginner Path

1. `docs/00_start_here.md`
2. `docs/01_what_is_post_training_reasoning_data.md`
3. `docs/02_verifier_anchored_taxonomy.md`
4. `docs/03_reasoning_data_objects.md`
5. `docs/04_data_quality.md`

### Builder Path

1. `docs/05_construction_cookbook.md`
2. `docs/06_verifiers_and_rewards.md`
3. `cards/release_card_template.md`
4. `cards/recipe_card_template.md`
5. `cards/verifier_card_template.md`

### Agent Path

1. `docs/07_agent_trajectory_data.md`
2. `cards/agent_trajectory_card_template.md`
3. `docs/index.html`

### Scaling / Frontier Report Path

1. `docs/08_scaling_and_test_time_compute.md`
2. `docs/09_audit_and_failure_modes.md`
3. Scaling and model-report entries in the atlas.

## Data Atlas

<!-- BEGIN GENERATED STATS -->
| Metric | Count |
|---|---:|
| Total entries | 265 |
| Verified | 26 |
| Partial | 64 |
| Needs metadata/search | 175 |
| Data releases | 8 |
| Verifiers / rewards | 4 |
| Agent environments | 2 |
| Scaling studies | 6 |
| Programmatic verification | 10 |
| Environmental verification | 2 |
| Judgment-required verification | 6 |
<!-- END GENERATED STATS -->

## Selected Core Entries

<!-- BEGIN SELECTED ENTRIES -->
| Entry | Role | Contract | Why it matters |
|---|---|---|---|
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | process_supervision, verifier_reward | programmatic, judgment_required | Landmark process supervision dataset with explicit step labels. |
| [Math-Shepherd](https://arxiv.org/abs/2312.08935) | process_supervision, verifier_reward | programmatic | Monte-Carlo-style process signal reference for step supervision. |
| [AbstentionBench](https://arxiv.org/abs/2506.09038) | benchmark, audit_failure | judgment_required | Benchmark for epistemic boundaries and non-answering behavior. |
| [Aegis2.0](https://arxiv.org/abs/2501.09004) | data_release, benchmark | judgment_required | Safety dataset with risk categories and label provenance. |
| [Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) | data_release | programmatic | Math data release used for base-relative pass-rate fields. |
| [DAPO](https://arxiv.org/abs/2503.14476) | construction_recipe, scaling_study | programmatic | GRPO-lineage RLVR recipe where filtering changes what reaches the gradient. |
| [DeepMath-103K](https://arxiv.org/abs/2504.11456) | data_release | programmatic | Math release highlighted for verifier pinning and decontamination. |
| [DeepSeek-R1](https://arxiv.org/abs/2501.12948) | model_report, construction_recipe | mixed | Frontier reasoning report central to public RLVR and reasoning post-training recipes. |
| [HealthBench](https://arxiv.org/abs/2505.08775) | benchmark, verifier_reward | judgment_required | Rubric-based health benchmark showing judgment-required data. |
| [The Art of Scaling Reinforcement Learning Compute for LLMs](https://arxiv.org/abs/2510.13786) | scaling_study | mixed | Scaling study anchoring asymptote-versus-efficiency decomposition. |
| [Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599) | model_report, scaling_study | mixed | Frontier report used for long-context RL and scaling discussion. |
| [Leaky Thoughts](https://arxiv.org/abs/2506.15674) | audit_failure | judgment_required | Shows reasoning traces can expose private fields. |
| [LIMO: Less Is More for Reasoning](https://arxiv.org/abs/2502.03387) | data_release, construction_recipe | mixed | Small-set curation reference distinguishing elicitation from broad coverage. |
| [Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949) | model_report, data_release | mixed | Mixed post-training corpus reference for reasoning, chat, and safety partitions. |
| [Magistral](https://arxiv.org/abs/2506.10910) | model_report, construction_recipe | mixed | Reasoning report illustrating reward-stack pinning and prompt-corpus cycling. |
| [One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794) | audit_failure, verifier_reward | judgment_required | Verifier-attack paper showing trivial cue tokens can flip judge verdicts. |
| [OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891) | data_release | programmatic | Large-scale math reasoning trace release for programmatic verification. |
| [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | data_release, construction_recipe | mixed | Open reasoning-data recipe exposing trace sourcing, filtering, and ablation practice. |
<!-- END SELECTED ENTRIES -->

## Construction Cookbook

The construction docs organize reasoning-data pipelines around prompt sourcing, trace writing, search substrate, self-play anchors, reward/verifier layers, optimizer/scaffold, and release metadata. See `docs/05_construction_cookbook.md`.

## Release Cards

- `cards/release_card_template.md`
- `cards/verifier_card_template.md`
- `cards/recipe_card_template.md`
- `cards/agent_trajectory_card_template.md`

## Companion Paper

The companion paper is not committed as a PDF in this repository. Public linking and citation metadata should follow the anonymity and release constraints recorded in `docs/anonymity_note.md`.

## Contributing

Contributions should add structured metadata, not only a link. See `CONTRIBUTING.md` and the PR template.

## Citation

Citation metadata currently uses anonymous-review-safe placeholders. See `CITATION.cff` and `docs/anonymity_note.md`.

## Related Awesome Lists

- [Awesome Dataset Distillation](https://github.com/Guang000/Awesome-Dataset-Distillation)
- [Awesome LLM Post-training](https://github.com/mbzuai-oryx/awesome-llm-post-training)
- [Awesome LLM Reasoning](https://github.com/atfortes/awesome-llm-reasoning)
