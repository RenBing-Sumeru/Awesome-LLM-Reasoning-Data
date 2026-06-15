# 📚 Paper Atlas

> A small-field navigation map for post-training reasoning data papers, verifiers, data releases, construction recipes, frontier reports, and audit work.

Use this folder when the README is too compact. Each category page gives a beginner-friendly explanation, read-first papers, full paper list, audit checklist, related cards, and open gaps.

## Category Map

| Category | What it helps with | Entries |
|---|---|---:|
| 🧭 [Surveys and Primers](00_surveys_and_primers.md) | Orientation material for post-training, reasoning models, verifier-bearing data, contamination, and data-centric LLM practice. | 34 |
| 🧱 [Foundations: Instruction, Preference, and Alignment Data](01_foundations_instruction_preference_alignment.md) | The older data objects that reasoning-data work inherits: instruction mixtures, demonstrations, preferences, reward models, self-improvement traces, and chain-of-thought prompting. | 52 |
| 🧮 [Programmatic Math, Code, and Proof Data](02_programmatic_math_code_proof.md) | Math answers, code execution, unit tests, theorem provers, and verifier robustness studies where correctness can often be checked by a rule or external tool. | 49 |
| 🪜 [Process Supervision and Process Reward Models](03_process_supervision_prm.md) | Step labels, rollout values, first-error localization, PRM datasets, process verifiers, and studies of when process rewards help or fail. | 22 |
| 🌐 [Environmental Agent, Tool, Web, and SWE Trajectory Data](04_environmental_agents_tools_web_swe.md) | Tool calls, browser tasks, app worlds, OS environments, repository-level software engineering, and replayable state-action episodes. | 44 |
| ⚖️ [Judgment-Required Rubrics, Safety, Medical, and Domain Data](05_judgment_required_rubrics_safety_domain.md) | Rubric rewards, health and safety benchmarks, factuality, legal/finance/science data, and LLM-as-judge systems where correctness cannot be reduced to a cheap programmatic predicate. | 42 |
| 🏗️ [Construction Recipes and Open Reasoning Data](06_construction_recipes_open_reasoning_data.md) | Prompt sourcing, teacher traces, filtering, self-play, generator-verifier loops, distill-then-RL, pure RL, and open reproduction pipelines. | 73 |
| 🚀 [Frontier Reasoning Model Reports](07_frontier_model_reports.md) | Public reasoning-model reports and open-weight model reports that disclose post-training data, reward stacks, scaling choices, or evaluation design. | 33 |
| 📈 [Scaling, Test-Time Compute, and RLVR](08_scaling_test_time_compute_rlvr.md) | RLVR scaling, data reuse, distillation scaling, pass@k/pass@(k,T), inference budget, search topology, and test-time reinforcement. | 55 |
| 🧯 [Audit, Failure, Contamination, and Verifier Attacks](09_audit_failure_contamination_verifier_attacks.md) | CoT faithfulness, leakage, contamination, reward hacking, judge attacks, synthetic-data collapse, live benchmarks, and verifier robustness. | 48 |
| 🧰 [Benchmarks and Evaluation Surfaces](10_benchmarks_evaluation.md) | Math/code/live/agent/domain/process/reward benchmarks organized by what they measure and what feedback they can support. | 75 |

## Starter Pack: 20 Must-Read Papers

| # | Work | Link | Card |
|---:|---|---|---|
| 1 | Datasheets for datasets | [Paper](https://arxiv.org/abs/1803.09010) | [Card](../cards/releases/datasheets-for-datasets.md) |
| 2 | Data statements for natural language processing | [Paper](https://aclanthology.org/Q18-1041/) | [Card](../cards/releases/data-statements-for-natural-language-processing.md) |
| 3 | Training language models to follow instructions with human feedback | [Paper](https://arxiv.org/abs/2203.02155) | [Card](../cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md) |
| 4 | Chain-of-thought prompting elicits reasoning in large language models | [Paper](https://arxiv.org/abs/2201.11903) | [Card](../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md) |
| 5 | Training verifiers to solve math word problems | [Paper](https://arxiv.org/abs/2110.14168) | [Card](../cards/verifiers/training-verifiers-to-solve-math-word-problems.md) |
| 6 | STaR: Bootstrapping reasoning with reasoning | [Paper](https://arxiv.org/abs/2203.14465) | [Card](../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md) |
| 7 | Self-Instruct: Aligning language models with self-generated instructions | [Paper](https://arxiv.org/abs/2212.10560) | [Card](../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) |
| 8 | Direct preference optimization: Your language model is secretly a reward model | [Paper](https://arxiv.org/abs/2305.18290) | [Card](../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md) |
| 9 | Let's Verify Step by Step | [Paper](https://arxiv.org/abs/2305.20050) | [Card](../cards/verifiers/prm800k.md) |
| 10 | GSM8K: Grade School Math 8K | [Paper](https://arxiv.org/abs/2110.14168) | [Card](../cards/benchmarks/gsm8k-grade-school-math-8k.md) |
| 11 | Measuring mathematical problem solving with the MATH dataset | [Paper](https://arxiv.org/abs/2103.03874) | [Card](../cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) |
| 12 | HumanEval: Hand-Written Evaluation Set | [Paper](https://arxiv.org/abs/2107.03374) | [Card](../cards/benchmarks/humaneval-hand-written-evaluation-set.md) |
| 13 | SWE-bench: Can language models resolve real-world GitHub issues? | [Paper](https://arxiv.org/abs/2310.06770) | [Card](../cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md) |
| 14 | RewardBench: Evaluating Reward Models for Language Modeling | [Paper](https://arxiv.org/abs/2403.13787) | [Card](../cards/verifiers/rewardbench.md) |
| 15 | HealthBench | [Paper](https://arxiv.org/abs/2505.08775) | [Card](../cards/verifiers/healthbench.md) |
| 16 | LiveBench: A challenging, contamination-free benchmark for large language models | [Paper](https://arxiv.org/abs/2406.19314) | [Card](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) |
| 17 | OpenThoughts: Data recipes for reasoning models | [Paper](https://arxiv.org/abs/2506.04178) | [Card](../cards/releases/openthoughts.md) |
| 18 | DeepSeek-R1 | [Paper](https://arxiv.org/abs/2501.12948) | [Card](../cards/recipes/deepseek_r1.md) |
| 19 | s1: Simple Test-Time Scaling | [Paper](https://arxiv.org/abs/2501.19393) | [Card](../cards/releases/s1.md) |
| 20 | A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility | [Paper](https://arxiv.org/abs/2504.07086) | [Card](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) |

## Legend

- 📄 paper link, 🏛️ venue link, 🐙 code, 🤗 data/model, 🌐 project, 🃏 card.
- ✅ verified entries have an official primary paper/arXiv/venue/DOI link.
- ⚠️ needs_search entries remain visible but are not promoted as verified.
- Curation levels run from `L0_seeded` to `L5_audit_ready`.

## Searchable Site

- [Open the searchable atlas](../docs/index.html)
- [Link coverage report](../reports/link_coverage.md)

## Reports

- [Needs-search report](../reports/needs_search.md)
- [Self-review](../reports/self_review.md)
