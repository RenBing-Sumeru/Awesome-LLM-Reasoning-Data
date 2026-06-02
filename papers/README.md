# 📚 Paper Atlas

> A learning-first map of post-training reasoning data papers, verifiers, reward signals, construction recipes, scaling studies, and audit work.

The pages in this folder are generated from local metadata in `data/papers.yaml`, `data/categories.yaml`, and `data/starter_packs.yaml`. They intentionally keep uncertain entries visible but mark missing official links as `needs_search` instead of inventing URLs.

## Category Map

| Page | What it helps with | Entries |
|---|---|---:|
| 🧭 [Surveys and Primers](00_surveys_and_primers.md) | Orientation material for post-training, reasoning models, verifier-bearing data, contamination, and data-centric LLM practice. | 42 |
| 🧱 [Foundations: Instruction, Preference, and Alignment Data](01_foundations_instruction_preference_alignment.md) | The older data objects that reasoning-data work inherits: instruction mixtures, demonstrations, preferences, reward models, self-improvement traces, and chain-of-thought prompting. | 54 |
| 🧮 [Programmatic Math, Code, and Proof Data](02_programmatic_math_code_proof.md) | Math answers, code execution, unit tests, theorem provers, and verifier robustness studies where correctness can often be checked by a rule or external tool. | 53 |
| 🪜 [Process Supervision and Process Reward Models](03_process_supervision_prm.md) | Step labels, rollout values, first-error localization, PRM datasets, process verifiers, and studies of when process rewards help or fail. | 23 |
| 🌐 [Environmental Agent, Tool, Web, and SWE Trajectory Data](04_environmental_agents_tools_web_swe.md) | Tool calls, browser tasks, app worlds, OS environments, repository-level software engineering, and replayable state-action episodes. | 35 |
| ⚖️ [Judgment-Required Rubrics, Safety, Medical, and Domain Data](05_judgment_required_rubrics_safety_domain.md) | Rubric rewards, health and safety benchmarks, factuality, legal/finance/science data, and LLM-as-judge systems where correctness cannot be reduced to a cheap programmatic predicate. | 47 |
| 🏗️ [Construction Recipes and Open Reasoning Data](06_construction_recipes_open_reasoning_data.md) | Prompt sourcing, teacher traces, filtering, self-play, generator-verifier loops, distill-then-RL, pure RL, and open reproduction pipelines. | 73 |
| 🚀 [Frontier Reasoning Model Reports](07_frontier_model_reports.md) | Public reasoning-model reports and open-weight model reports that disclose post-training data, reward stacks, scaling choices, or evaluation design. | 38 |
| 📈 [Scaling, Test-Time Compute, and RLVR](08_scaling_test_time_compute_rlvr.md) | RLVR scaling, data reuse, distillation scaling, pass@k/pass@(k,T), inference budget, search topology, and test-time reinforcement. | 59 |
| 🧯 [Audit, Failure, Contamination, and Verifier Attacks](09_audit_failure_contamination_verifier_attacks.md) | CoT faithfulness, leakage, contamination, reward hacking, judge attacks, synthetic-data collapse, live benchmarks, and verifier robustness. | 51 |
| 🧰 [Benchmarks and Evaluation Surfaces](10_benchmarks_evaluation.md) | Math/code/live/agent/domain/process/reward benchmarks organized by what they measure and what feedback they can support. | 79 |

## Starter Packs

| Starter pack | Goal |
|---|---|
| 🌱 **Beginner 20: Reasoning Data Orientation** | Build the vocabulary for post-training reasoning data before diving into recipes. |
| 🏗️ **Builder 30: Data Construction and Release Practice** | Learn how open reasoning-data recipes source prompts, write traces, filter, audit, and report artifacts. |
| 🧪 **Verifier and Reward 25** | Compare programmatic verifiers, PRMs, rubric rewards, LLM judges, and failure diagnostics. |
| 🌐 **Agent Data 25** | Understand trajectories, tool calls, browser/app/OS tasks, and SWE environments. |
| 📈 **Scaling 20** | Read scaling claims across RL compute, data size, distillation, and test-time inference budget. |
| 🧯 **Audit and Failure 20** | Build the habit of checking leakage, contamination, reward hacking, and judge robustness. |
| 🏭 **Industry Onboarding 40** | A practical path for becoming useful on an LLM post-training data team. |

## Reading Strategy

Start with 🧭 surveys if the vocabulary is new, then move into 🧮 programmatic data or ⚖️ judgment-required data depending on your domain. Builders should pair 🏗️ construction recipes with 🧯 audit failures before reusing any source mixture. Agent teams should read 🌐 environmental trajectory data together with 🧰 benchmark surfaces so training and evaluation splits stay clean.

## Local Caveats

- `data/papers.yaml` contains many BibTeX-seeded records whose metadata is intentionally conservative.
- `needs_search` means an official paper, code, data, project, or Hugging Face link should be verified before promotion.
- The atlas repeats important papers across categories when they play multiple roles, such as benchmark plus training environment, or model report plus construction recipe.

## Reports

- [Paper coverage report](../reports/paper_coverage_report.md)
- [BibTeX index](../reports/bib_index.md)
- [Needs-search report](../reports/needs_search.md)
