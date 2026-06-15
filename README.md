# 🌟 Awesome LLM Reasoning Data

> A link-verified, searchable, learning-first atlas of post-training reasoning data, verifiers, reward signals, construction recipes, benchmarks, frontier reports, and audit fields.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Paper](https://img.shields.io/badge/arXiv-2606.02113-b31b1b)](https://arxiv.org/abs/2606.02113)
[![Entries](https://img.shields.io/badge/entries-271-2563eb)](data/papers.yaml)
[![Verified](https://img.shields.io/badge/verified-148-0f766e)](reports/link_coverage.md)
[![Cards](https://img.shields.io/badge/cards-87-7c3aed)](cards/README.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="assets/overview.svg" width="92%" alt="Awesome LLM Reasoning Data overview">
</p>

## What Is This?

This repository is a living atlas for the data layer behind reasoning-model post-training. It focuses on the records that make reasoning behavior trainable, reinforceable, evaluable, and auditable:

`task/context -> trace/actions -> answer/artifact -> verifier/reward/judge/environment -> metadata`

It is intentionally narrower than a general LLM reasoning list. The goal is to help readers find official papers, understand what data object each work exposes, inspect the feedback contract, and decide whether a release or benchmark is reusable before opening every source paper.

Companion paper: [A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113).

## Latest Updates

| Date | Update | Why it matters |
|---|---|---|
| 2026-06-15 | Upgraded atlas metadata to **148 verified entries** and **87 cards**. | Readers can now separate official-link-verified work from the needs-search queue. |
| 2026-06-15 | Added generated coverage, exports, paper pages, and searchable-site data. | Counts and public reports are reproducible from structured metadata. |
| 2026-06-15 | Prepared v0.1.0 release notes and stricter contribution workflow. | Future PRs must include official links, classification metadata, and clear audit fields. |

## Start Here

| I want to... | Go to |
|---|---|
| understand the field | [docs/00_start_here.md](docs/00_start_here.md) |
| find papers | [papers/README.md](papers/README.md) |
| study math/code/proof data | [papers/02_programmatic_math_code_proof.md](papers/02_programmatic_math_code_proof.md) |
| study process supervision | [papers/03_process_supervision_prm.md](papers/03_process_supervision_prm.md) |
| study agent data | [papers/04_environmental_agents_tools_web_swe.md](papers/04_environmental_agents_tools_web_swe.md) |
| study frontier model reports | [papers/07_frontier_model_reports.md](papers/07_frontier_model_reports.md) |
| use the searchable atlas | [docs/index.html](docs/index.html) |
| inspect link coverage | [reports/link_coverage.md](reports/link_coverage.md) |
| contribute a paper/card | [CONTRIBUTING.md](CONTRIBUTING.md) |

## Snapshot Stats

| Metric | Count |
|---|---:|
| Total entries | 271 |
| Verified official primary links | 148 |
| Entries with paper/arXiv/venue/DOI links | 148 |
| Cards | 87 |
| Needs search | 123 |
| Data releases | 32 |
| Verifiers / rewards | 17 |
| Agent / environment entries | 16 |

## Starter Pack: 20 Must-Read Papers

| # | Work | Link | Card | Why it matters |
|---:|---|---|---|---|
| 1 | Datasheets for datasets | [Paper](https://arxiv.org/abs/1803.09010) | [Card](cards/releases/datasheets-for-datasets.md) | It gives reasoning-data releases a minimum disclosure standard before anyone reuses prompts, traces, labels, rewards, or benchmark items. |
| 2 | Data statements for natural language processing | [Paper](https://aclanthology.org/Q18-1041/) | [Card](cards/releases/data-statements-for-natural-language-processing.md) | Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization. |
| 3 | Training language models to follow instructions with human feedback | [Paper](https://arxiv.org/abs/2203.02155) | [Card](cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md) | It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models. |
| 4 | Chain-of-thought prompting elicits reasoning in large language models | [Paper](https://arxiv.org/abs/2201.11903) | [Card](cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md) | It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets. |
| 5 | Training verifiers to solve math word problems | [Paper](https://arxiv.org/abs/2110.14168) | [Card](cards/verifiers/training-verifiers-to-solve-math-word-problems.md) | It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows. |
| 6 | STaR: Bootstrapping reasoning with reasoning | [Paper](https://arxiv.org/abs/2203.14465) | [Card](cards/recipes/star-bootstrapping-reasoning-with-reasoning.md) | It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering. |
| 7 | Self-Instruct: Aligning language models with self-generated instructions | [Paper](https://arxiv.org/abs/2212.10560) | [Card](cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) | It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion. |
| 8 | Direct preference optimization: Your language model is secretly a reward model | [Paper](https://arxiv.org/abs/2305.18290) | [Card](cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md) | It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization. |
| 9 | Let's Verify Step by Step | [Paper](https://arxiv.org/abs/2305.20050) | [Card](cards/verifiers/prm800k.md) | It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation. |
| 10 | GSM8K: Grade School Math 8K | [Paper](https://arxiv.org/abs/2110.14168) | [Card](cards/benchmarks/gsm8k-grade-school-math-8k.md) | It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training. |
| 11 | Measuring mathematical problem solving with the MATH dataset | [Paper](https://arxiv.org/abs/2103.03874) | [Card](cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) | MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems. |
| 12 | HumanEval: Hand-Written Evaluation Set | [Paper](https://arxiv.org/abs/2107.03374) | [Card](cards/benchmarks/humaneval-hand-written-evaluation-set.md) | It made unit-test execution a standard verifier for code reasoning, pass@k reporting, and later code-data filtering recipes. |
| 13 | SWE-bench: Can language models resolve real-world GitHub issues? | [Paper](https://arxiv.org/abs/2310.06770) | [Card](cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md) | It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes. |
| 14 | RewardBench: Evaluating Reward Models for Language Modeling | [Paper](https://arxiv.org/abs/2403.13787) | [Card](cards/verifiers/rewardbench.md) | It helps readers test whether a reward signal generalizes beyond helpfulness style into subtle factual, reasoning, refusal, and safety preferences. |
| 15 | HealthBench | [Paper](https://arxiv.org/abs/2505.08775) | [Card](cards/verifiers/healthbench.md) | It is a high-stakes example of judgment-required reasoning data where rubric design matters more than exact-match scoring. |
| 16 | LiveBench: A challenging, contamination-free benchmark for large language models | [Paper](https://arxiv.org/abs/2406.19314) | [Card](cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) | It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items. |
| 17 | OpenThoughts: Data recipes for reasoning models | [Paper](https://arxiv.org/abs/2506.04178) | [Card](cards/releases/openthoughts.md) | It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance. |
| 18 | DeepSeek-R1 | [Paper](https://arxiv.org/abs/2501.12948) | [Card](cards/recipes/deepseek_r1.md) | It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior. |
| 19 | s1: Simple Test-Time Scaling | [Paper](https://arxiv.org/abs/2501.19393) | [Card](cards/releases/s1.md) | It is a useful counterpoint to massive-data recipes: careful small-set curation plus inference-budget control can materially change reasoning performance. |
| 20 | A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility | [Paper](https://arxiv.org/abs/2504.07086) | [Card](cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) | It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains. |

## Paper Atlas

The long categorized lists live in [papers/](papers/README.md). Each category page includes a category explanation, read-first table, full paper list, audit checklist, related cards, and open gaps.

- [Surveys and Primers](papers/00_surveys_and_primers.md)
- [Foundations: Instruction, Preference, and Alignment Data](papers/01_foundations_instruction_preference_alignment.md)
- [Programmatic Math, Code, and Proof Data](papers/02_programmatic_math_code_proof.md)
- [Process Supervision and Process Reward Models](papers/03_process_supervision_prm.md)
- [Environmental Agent, Tool, Web, and SWE Trajectory Data](papers/04_environmental_agents_tools_web_swe.md)
- [Judgment-Required Rubrics, Safety, Medical, and Domain Data](papers/05_judgment_required_rubrics_safety_domain.md)
- [Construction Recipes and Open Reasoning Data](papers/06_construction_recipes_open_reasoning_data.md)
- [Frontier Reasoning Model Reports](papers/07_frontier_model_reports.md)
- [Scaling, Test-Time Compute, and RLVR](papers/08_scaling_test_time_compute_rlvr.md)
- [Audit, Failure, Contamination, and Verifier Attacks](papers/09_audit_failure_contamination_verifier_attacks.md)
- [Benchmarks and Evaluation Surfaces](papers/10_benchmarks_evaluation.md)

## Card Library

Cards turn citations into engineering decisions. They explain the data object, verifier/reward/environment, construction recipe, post-training use, audit questions, and risks.

- [Card index](cards/README.md)
- [Release cards](cards/releases/)
- [Verifier cards](cards/verifiers/)
- [Agent/environment cards](cards/agents/)
- [Recipe cards](cards/recipes/)
- [Failure/audit cards](cards/failures/)
- [Benchmark cards](cards/benchmarks/)

## Searchable Website

Open [docs/index.html](docs/index.html) locally or through GitHub Pages. The site loads generated JSON on hosted pages and includes [docs/assets/atlas-data.js](docs/assets/atlas-data.js) as a local fallback for browsers that block direct JSON loading. It supports search plus filters for year, venue, source role, verification contract, supervision granularity, training use, curation level, status, and artifact availability.

## Curation Levels

| Level | Meaning |
|---|---|
| `L0_seeded` | Only a title or bibliography seed is known. |
| `L1_link_verified` | Official paper, arXiv, venue, or DOI link is pinned. |
| `L2_artifact_verified` | Code, data, project, or model artifact links are also checked. |
| `L3_summary_ready` | One-line summary and why-it-matters rationale are present. |
| `L4_carded` | A local card explains data object, verifier, use, and audit fields. |
| `L5_audit_ready` | The card includes concrete risks, missing fields, and audit questions. |

## Contributing

Please do not submit only a paper title. A useful contribution includes official links, source role, verification contract, supervision granularity, training use, a one-line summary, a why-it-matters rationale, and card/audit fields when available. Start with [CONTRIBUTING.md](CONTRIBUTING.md).

## Citation

If this atlas helps your related work, dataset construction, verifier design, or reading group, please cite the companion paper and link this repository. See [CITATION.cff](CITATION.cff).

## License

MIT. See [LICENSE](LICENSE).
