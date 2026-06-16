# 🌟 Awesome LLM Reasoning Data <a href="https://english.pku.edu.cn/"><img src="assets/institutions/peking-university.png" height="64" alt="Peking University"></a> <a href="https://www.tsinghua.edu.cn/en/"><img src="assets/institutions/tsinghua-university.png" height="64" alt="Tsinghua University"></a>

> A learning repository for understanding post-training reasoning data: what it is, how it is built, how it is verified, how it enters training, and how to audit it.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Paper](https://img.shields.io/badge/arXiv-2606.02113-b31b1b)](https://arxiv.org/abs/2606.02113)
[![Local Atlas](https://img.shields.io/badge/site-searchable%20atlas-0f766e)](docs/index.html)
[![Entries](https://img.shields.io/badge/entries-271-2563eb)](data/papers.yaml)
[![Verified](https://img.shields.io/badge/verified-148-0f766e)](reports/link_coverage.md)
[![Cards](https://img.shields.io/badge/cards-87-7c3aed)](cards/README.md)
[![L5](https://img.shields.io/badge/L5%20audit--ready-53-ea580c)](reports/five_task_quality_audit.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="assets/overview.svg" width="92%" alt="Awesome LLM Reasoning Data overview">
</p>

**Awesome LLM Reasoning Data** is designed as a field-learning repository, not just a paper list.
If you want to understand large-model post-training reasoning data, you should be able to start here, learn the core vocabulary, follow a reading path, inspect representative papers, open paper cards, and gradually build a mental model of the whole area.

The repository is organized around one practical question:

> When a model becomes better at reasoning after post-training, what data record, feedback signal, verifier, reward, environment, or judge actually made that possible?

To answer that, the repo combines four layers:

- 🧭 **Learning guides** that explain concepts and reading paths.
- 📚 **Paper maps** that organize work by subfield rather than by publication date.
- 🗂️ **Cards** that summarize data objects, construction recipes, verifiers, risks, and links.
- 🔎 **Searchable structured metadata** so readers can filter by verifier type, training use, curation level, and artifact availability.

Companion paper: [A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113).

---

## 🎯 What You Can Learn Here

| Learning goal | What this repo gives you |
|---|---|
| 🧠 Build the mental model | Understand why reasoning data is not just `prompt -> answer`, but a record with traces, actions, feedback, and metadata. |
| 🧮 Understand verifiable reasoning data | Learn how math answers, code tests, theorem provers, and executable environments create training and evaluation signals. |
| 🪜 Understand process supervision | Compare outcome rewards, step labels, process reward models, rollout values, and first-error localization. |
| 🏗️ Understand data construction recipes | Track prompt sourcing, teacher generation, search, filtering, deduplication, decontamination, and release metadata. |
| 🌐 Understand agent trajectory data | Learn what must be stored for tool use, browser tasks, app worlds, OS tasks, and repository-level SWE episodes. |
| ⚖️ Understand judges and rubrics | Study rubric-conditioned evaluation, open evaluator models, reward models, human preference data, and judge attacks. |
| 📈 Understand scaling and RLVR claims | Separate data scale, verifier quality, optimization scaffold, and inference budget when reading frontier reports. |
| 🧯 Learn how to audit failures | Look for leakage, contamination, verifier gaming, reward hacking, hidden lineage, and benchmark fragility. |

## 🧑‍💻 Who Is This For?

| Reader | Best path through the repo |
|---|---|
| New student / newcomer | Start with the 60-second model, then read the Starter Pack and the first two docs pages. |
| Researcher entering post-training | Use the paper atlas to locate subfields, then read L5 cards before opening full papers. |
| Dataset builder | Follow the construction stack and release-card checklist before building or releasing data. |
| RLVR / verifier engineer | Use the verifier audit sections, process-supervision papers, and programmatic benchmark cards. |
| Agent researcher | Follow the agent trajectory section and compare SWE-bench, SWE-bench Verified, ReAct, Toolformer, and environment cards. |
| Reading group organizer | Use the Starter Pack and category pages as a week-by-week syllabus. |
| Open-source contributor | Add verified links, metadata, cards, or missing artifacts through the contribution workflow. |

---

## 🚀 60-second Version

> **Post-training reasoning data** is the data used after pretraining to teach, reinforce, or audit reasoning behavior.
>
> A useful sample is usually not only:
>
> `prompt -> answer`
>
> but:
>
> `task/context -> trace/actions -> answer/artifact -> verifier/reward/judge/environment -> metadata`
>
> This repo helps you compare those records across math, code, proof, agents, rubric judging, frontier model reports, scaling studies, and failure audits.

Read this repository if you want to answer questions like:

- 🧪 What exactly verified the answer: unit tests, a proof checker, a reward model, an LLM judge, a rubric, or an environment?
- 🪜 Was feedback attached to the final answer, each step, a rollout set, a state-action transition, or a full episode?
- 🧬 Which teacher, base model, prompt source, filtering rule, split, license, and contamination check produced the released data?
- 📈 Did a result improve the asymptote, the sample efficiency, the inference budget curve, or only the reported pass rate?
- 🧯 Where can the verifier fail, leak, overfit, reward-hack, or silently encode lineage artifacts?

---

## 📌 Contents

| Section | What you will learn | Go |
|---|---|---|
| 🧭 Start Here | Zero-to-field overview and reading paths | [docs/00](docs/00_start_here.md) |
| 🎯 What You Can Learn | The repository as a learning roadmap | [jump](#-what-you-can-learn-here) |
| 🧑‍💻 Who It Is For | Paths for students, builders, researchers, and auditors | [jump](#-who-is-this-for) |
| 🧠 60-second Model | The verifier-bearing sample mental model | [jump](#-60-second-version) |
| 🔥 Latest Updates | What changed recently in this atlas | [jump](#latest-updates) |
| 📊 Snapshot | Current verified/card/artifact coverage | [jump](#snapshot-stats) |
| 🛣️ Learning Roadmap | Learn the field in 6 stages | [jump](#-learning-roadmap) |
| 🧭 Starter Pack | 20 papers to read first | [jump](#-starter-pack-20-must-read-papers) |
| 🧮 Core Paper Map | The compact map from data objects to papers | [jump](#-core-paper-map) |
| 🗺️ Category Map | Programmatic, environmental, judgment-required, scaling, audit | [jump](#-category-map) |
| 🧰 Build Data | Construction stack for reasoning datasets | [jump](#-how-to-build-a-reasoning-dataset) |
| 🧪 Audit Verifiers | How to inspect rewards, judges, checkers, and rubrics | [jump](#-how-to-audit-a-verifier) |
| 🌐 Agent Trajectories | State/action/replay fields for tools, web, OS, SWE | [jump](#-how-to-audit-agent-trajectory-data) |
| 📈 Scaling Claims | RLVR, reuse, pass@k, test-time compute, inference budget | [jump](#-how-to-interpret-scaling-claims) |
| 🧩 Repo Structure | How files, docs, cards, and reports fit together | [jump](#-repository-structure) |
| 📚 Paper Atlas | Category pages, cards, exports, searchable website | [jump](#-full-paper-atlas) |
| 🤝 Contribute | Add papers with metadata, not only links | [CONTRIBUTING](CONTRIBUTING.md) |

## Latest Updates

| Date | Update | Why it matters |
|---|---|---|
| 2026-06-15 | Promoted the atlas to **148 verified entries**, **87 linked cards**, and **53 L5 audit-ready cards**. | The front page can now be attractive without hiding uncertainty or inventing unverified links. |
| 2026-06-15 | Completed two artifact-verification rounds: **35 code**, **24 data**, **18 Hugging Face**, and **20 project** links are pinned. | Readers can jump from a paper to reusable artifacts when official sources exist. |
| 2026-06-15 | Rebuilt the searchable site, paper atlas, exports, QA reports, contribution workflow, and release notes from structured metadata. | Counts and public reports are reproducible instead of hand-maintained. |

> The atlas is intentionally conservative about metadata. If a paper/code/data/project link is not verified locally, it stays in [reports/needs_search.md](reports/needs_search.md) instead of being promoted into the verified lists.

## Snapshot Stats

| Metric | Count |
|---|---:|
| Total structured entries | 271 |
| Verified official primary links | 148 |
| Entries with paper/arXiv/venue/DOI links | 148 |
| Unique entry-linked cards | 87 |
| Card files | 89 |
| L5 audit-ready entries | 53 |
| Needs search / metadata | 123 |
| Official code links | 35 |
| Official data links | 24 |
| Hugging Face links | 18 |
| Project links | 20 |

## Start Here

| I want to... | Go to |
|---|---|
| 🧭 understand the field | [docs/00_start_here.md](docs/00_start_here.md) |
| 📚 find papers by subfield | [papers/README.md](papers/README.md) |
| 🧮 study math/code/proof data | [papers/02_programmatic_math_code_proof.md](papers/02_programmatic_math_code_proof.md) |
| 🪜 study process supervision | [papers/03_process_supervision_prm.md](papers/03_process_supervision_prm.md) |
| 🌐 study agent trajectories | [papers/04_environmental_agents_tools_web_swe.md](papers/04_environmental_agents_tools_web_swe.md) |
| 🚀 study frontier model reports | [papers/07_frontier_model_reports.md](papers/07_frontier_model_reports.md) |
| 🔎 use the searchable atlas | [docs/index.html](docs/index.html) |
| 📊 inspect link coverage | [reports/link_coverage.md](reports/link_coverage.md) |
| 🤝 contribute a paper/card | [CONTRIBUTING.md](CONTRIBUTING.md) |

## 🛣️ Learning Roadmap

This repository should work like a small open course. You do not need to read every paper first. Use the route below and open papers only when a concept becomes important.

| Stage | Learn | Main resources | Output you should have |
|---:|---|---|---|
| 1 | Vocabulary and mental model | [60-second version](#-60-second-version), [docs/00](docs/00_start_here.md), [docs/01](docs/01_what_is_post_training_reasoning_data.md) | You can explain the difference between answer data, trace data, reward data, verifier data, and trajectory data. |
| 2 | Feedback contracts | [docs/02](docs/02_verifier_anchored_taxonomy.md), [docs/06](docs/06_verifiers_and_rewards.md), [Verifier cards](cards/verifiers/) | You can identify whether a work uses programmatic, environmental, judgment-required, or mixed verification. |
| 3 | Core papers | [Starter Pack](#-starter-pack-20-must-read-papers), [papers/README.md](papers/README.md), [cards/README.md](cards/README.md) | You can locate the canonical papers for math, code, process supervision, agents, RLVR, and audit. |
| 4 | Data construction | [docs/05](docs/05_construction_cookbook.md), [Release cards](cards/releases/), [Recipe cards](cards/recipes/) | You can describe prompt sourcing, teacher generation, filtering, verifier pinning, and release metadata. |
| 5 | Specialized tracks | [programmatic data](papers/02_programmatic_math_code_proof.md), [agents](papers/04_environmental_agents_tools_web_swe.md), [rubrics](papers/05_judgment_required_rubrics_safety_domain.md), [scaling](papers/08_scaling_test_time_compute_rlvr.md) | You can choose a subfield and follow its top papers and audit questions. |
| 6 | Audit and contribution | [docs/09](docs/09_audit_and_failure_modes.md), [reports/link_coverage.md](reports/link_coverage.md), [CONTRIBUTING.md](CONTRIBUTING.md) | You can tell what is verified, what is missing, and how to improve an entry without hallucinating links. |

## 🧭 Starter Pack: 20 Must-Read Papers

Read these as a learning path, not as a citation dump. The rightmost columns tell you what question each paper should answer before you move on.

| # | Paper / report | Lens | Start with this question | Card |
|---:|---|---|---|---|
| 1 | [Datasheets for datasets](https://arxiv.org/abs/1803.09010) | 📋 release docs | What must be disclosed before anyone reuses a dataset? | [Card](cards/releases/datasheets-for-datasets.md) |
| 2 | [Data statements for natural language processing](https://aclanthology.org/Q18-1041/) | 🧬 provenance | Which population, language, and annotation assumptions travel with the data? | [Card](cards/releases/data-statements-for-natural-language-processing.md) |
| 3 | [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) | 🧑‍🏫 RLHF pipeline | How do demonstrations, preferences, rewards, and policy optimization separate? | [Card](cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md) |
| 4 | [Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903) | 🧠 traces | When does a rationale become a reusable training object? | [Card](cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md) |
| 5 | [Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168) | 🧪 verifier | What exactly scores a generated solution? | [Card](cards/verifiers/training-verifiers-to-solve-math-word-problems.md) |
| 6 | [STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465) | 🔁 self-improvement | Which generated traces survive answer-based filtering? | [Card](cards/recipes/star-bootstrapping-reasoning-with-reasoning.md) |
| 7 | [Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560) | 🏗️ synthetic data | How do generated instructions get filtered before training? | [Card](cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) |
| 8 | [Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290) | ⚖️ preference data | What changes when preference pairs directly train the policy? | [Card](cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md) |
| 9 | [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 🪜 process supervision | What does step-level feedback buy over outcome-only labels? | [Card](cards/verifiers/prm800k.md) |
| 10 | [GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168) | 🧮 answer checks | Why is a small verifiable math set still a useful sanity check? | [Card](cards/benchmarks/gsm8k-grade-school-math-8k.md) |
| 11 | [Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874) | 🧮 hard math | How do harder problems change trace and verifier requirements? | [Card](cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) |
| 12 | [HumanEval: Hand-Written Evaluation Set](https://arxiv.org/abs/2107.03374) | 💻 unit tests | What makes executable tests a feedback contract? | [Card](cards/benchmarks/humaneval-hand-written-evaluation-set.md) |
| 13 | [SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770) | 🌐 agent environment | What fields make repository repair a replayable episode? | [Card](cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md) |
| 14 | [RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787) | 🏅 reward eval | When does a reward model fail outside generic chat helpfulness? | [Card](cards/verifiers/rewardbench.md) |
| 15 | [HealthBench](https://arxiv.org/abs/2505.08775) | ⚕️ rubrics | How do high-stakes rubrics become auditable? | [Card](cards/verifiers/healthbench.md) |
| 16 | [LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314) | 🧯 contamination | How can benchmarks stay fresh against memorization? | [Card](cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) |
| 17 | [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | 🏗️ open recipe | Which prompt, trace, filtering, and ablation fields are disclosed? | [Card](cards/releases/openthoughts.md) |
| 18 | [DeepSeek-R1](https://arxiv.org/abs/2501.12948) | 🚀 RLVR report | What can and cannot be inferred from a public frontier report? | [Card](cards/recipes/deepseek_r1.md) |
| 19 | [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) | ⏱️ test-time compute | When is inference budget part of the data story? | [Card](cards/releases/s1.md) |
| 20 | [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086) | 🔍 reproducibility | Which reported gains survive decoding and evaluation audits? | [Card](cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) |

Next steps:

- Newcomer: read [docs/00_start_here.md](docs/00_start_here.md) and [docs/01_what_is_post_training_reasoning_data.md](docs/01_what_is_post_training_reasoning_data.md).
- Builder: read [docs/05_construction_cookbook.md](docs/05_construction_cookbook.md) and compare release cards in [cards/releases/](cards/releases/).
- Auditor: read [docs/09_audit_and_failure_modes.md](docs/09_audit_and_failure_modes.md) and compare three L5 cards from [cards/README.md](cards/README.md).

---

## 🧮 Core Paper Map

<p align="center">
  <img src="assets/paper_map.svg" width="92%" alt="Core paper map for reasoning data">
</p>

| Cluster | Representative entries | What to inspect |
|---|---|---|
| 🧮 Programmatic math/code/proof | [OpenMathInstruct-2](https://arxiv.org/abs/2410.01560), [DeepSeek-Prover-V2](https://arxiv.org/abs/2504.21801), [SciCode](https://arxiv.org/abs/2407.13168) | answer checker, unit tests, proof checker, pass-rate bands, decontamination |
| 🪜 Process supervision and PRMs | [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050), [Math-Shepherd](https://arxiv.org/abs/2312.08935), [Rewarding Progress](https://arxiv.org/abs/2410.08146) | step labels, rollout values, first-error localization, reward-model calibration |
| 🏗️ Open construction recipes | [OpenThoughts](https://arxiv.org/abs/2506.04178), [Self-RAG](https://arxiv.org/abs/2310.11511), [Magicoder](https://arxiv.org/abs/2312.02120) | prompt source, teacher trace, filtering rule, optimizer/scaffold, ablation fields |
| 🚀 Frontier and model reports | [DeepSeek-R1](https://arxiv.org/abs/2501.12948), [Qwen2.5-Math](https://arxiv.org/abs/2409.12122), [Tulu 3](https://arxiv.org/abs/2411.15124) | disclosed data partitions, reward contract, RLVR setup, distillation path |
| 🌐 Agent and environment data | [SWE-bench](https://arxiv.org/abs/2310.06770), [SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/), [ReAct](https://arxiv.org/abs/2210.03629) | state/action/observation schema, terminal predicate, replayability, scaffold metadata |
| ⚖️ Judgment-required rubrics | [HealthBench](https://arxiv.org/abs/2505.08775), [RewardBench](https://arxiv.org/abs/2403.13787), [Prometheus 2](https://arxiv.org/abs/2405.01535) | rubric provenance, judge prompts, adjudication, domain expertise, calibration |
| 🧯 Audit and failure modes | [LiveBench](https://arxiv.org/abs/2406.19314), [A Sober Look](https://arxiv.org/abs/2504.07086), [TruthfulQA](https://arxiv.org/abs/2109.07958) | leakage, contamination, verifier gaming, judge attack, hidden trait transfer |

---

## 🗺️ Category Map

<p align="center">
  <img src="assets/taxonomy.svg" width="86%" alt="Verifier-anchored taxonomy">
</p>

A reasoning-data taxonomy should start from the feedback contract, not only the academic domain. The same math problem can be an SFT trace, an RLVR answer record, a PRM step record, a rejection-sampling candidate, or a contamination probe.

| Axis | Values | Reader question |
|---|---|---|
| 🧪 Verification contract | programmatic, environmental, judgment-required, mixed, unknown | Who or what says the sample is correct? |
| 🪜 Granularity | answer, step, transition, full episode, rollout set, scalar reward | Where does feedback attach? |
| 🧩 Data object | prompt-answer, trace-answer, PRM record, preference pair, trajectory, rubric record | What fields must be serialized? |
| 🧬 Lineage | human, teacher model, search, self-play, environment, synthetic mix | Where did the behavior come from? |
| 🧰 Training use | SFT, distillation, reward modeling, RLVR, agent training, evaluation, audit | How could this data enter a post-training pipeline? |
| 🧯 Risk | leakage, contamination, verifier failure, judge attack, reward hacking, license ambiguity | What can make the gain misleading? |

---

## 🧰 How to Build a Reasoning Dataset

Use the construction stack from [docs/05_construction_cookbook.md](docs/05_construction_cookbook.md):

<p align="center">
  <img src="assets/construction_stack.svg" width="90%" alt="Reasoning dataset construction stack">
</p>

| Layer | Builder checklist | Common evidence |
|---|---|---|
| 1. 📥 Prompt sourcing | Describe source mix, license, split, difficulty, and base-model pass rate. | prompt pool, dedupe report, contamination checks |
| 2. ✍️ Trace writing | Say whether traces are human-written, teacher-generated, search-generated, or self-played. | teacher model, sampling temperature, rollout count |
| 3. 🔍 Search substrate | Record beam/search/MCTS/self-critique/scaffold details. | search budget, candidate count, pruning rules |
| 4. 🧪 Verifier layer | Pin the checker, judge, environment, rubric, or reward model. | tests, proof checker version, judge prompt, rubric |
| 5. 🧹 Filtering | Keep pass/fail bands, rejection reasons, and ambiguous cases. | filter script, verifier logs, disagreement set |
| 6. 🏋️ Optimizer/scaffold | State whether data is used for SFT, distillation, RLVR, PRM, or agent training. | loss, reward, rollout policy, curriculum |
| 7. 🧬 Release metadata | Preserve attribution, lineage, splits, license, and known failure modes. | card, datasheet, citation, changelog |

> Minimal release question: Could a different team reproduce the data object, rerun the verifier, and explain what would fail if the verifier were wrong?

---

## 🧪 How to Audit a Verifier

A verifier is not just a score. It is a data-producing instrument.

<p align="center">
  <img src="assets/quality_matrix.svg" width="90%" alt="Reasoning data quality matrix">
</p>

| Verifier type | Audit focus | Red flag |
|---|---|---|
| 🧮 Answer checker | canonicalization, tolerance, symbolic equivalence | formatting hacks count as reasoning gains |
| 💻 Unit tests | hidden tests, flaky tests, generated tests, coverage | model learns test style rather than task skill |
| 🧾 Proof checker | version, imports, tactic environment, timeout | proof succeeds only under an undocumented environment |
| 🪜 PRM | step boundary, label policy, calibration, rollout values | reward rises while final correctness falls |
| ⚖️ Rubric judge | rubric source, domain expertise, adjudication, prompt | judge is sensitive to wording or verbosity |
| 🧑‍⚖️ LLM-as-judge | model version, prompt, decoding, attack suite | one token or style cue flips the verdict |
| 🌐 Environment | terminal predicate, reset, observation schema, replay | success transcript cannot be replayed |

---

## 🌐 How to Audit Agent Trajectory Data

Agent data is more than a cleaned success transcript. A trainable or auditable episode should expose the environment contract.

| Field | Why it matters |
|---|---|
| 🧭 Task and initial state | Defines what the agent was actually asked to solve. |
| 👀 Observation stream | Separates visible context from hidden evaluator state. |
| 🛠️ Action schema | Makes tool, browser, OS, code, or API calls inspectable. |
| ⏱️ Budget | Records step limit, time, token budget, and retries. |
| 🧪 Terminal predicate | States exactly how success or failure is decided. |
| 🔁 Replay metadata | Lets another team re-run the episode and verify the result. |
| 🧱 Scaffold metadata | Captures planner, memory, retrieval, tool wrapper, and guardrails. |
| 🧯 Failure trace | Keeps near-misses and verifier failures instead of deleting them. |

---

## 📈 How to Interpret Scaling Claims

Scaling claims become much clearer when you treat the training data, verifier, and inference budget as part of the same ledger.

<p align="center">
  <img src="assets/scaling_ledger.svg" width="90%" alt="Scaling attribution ledger">
</p>

| Claim | Ask for | Watch out |
|---|---|---|
| RLVR improves reasoning | reward contract, verifier coverage, base-model pass rate | reward hacking or easy-example filtering |
| More data improves performance | unique examples, reuse count, source mixture | repeated prompts counted as fresh data |
| Test-time compute scales | pass@k, pass@(k,T), budget, search topology | hidden inference budget changes |
| Distillation transfers reasoning | teacher identity, trace policy, filtering | teacher leakage or style imitation |
| Frontier report shows recipe | data partitions, curricula, ablations | optimizer details without data details |

---

## 🧩 Repository Structure

| Path | What it is for |
|---|---|
| [docs/](docs/) | Conceptual lessons: mental model, taxonomy, construction cookbook, verifiers, agent trajectories, scaling, and failure modes. |
| [papers/](papers/README.md) | Field navigation map: category pages with read-first tables, full paper lists, audit checklists, related cards, and open gaps. |
| [cards/](cards/README.md) | Learning cards: paper/data/verifier/recipe/benchmark/failure summaries with links and audit questions. |
| [data/papers.yaml](data/papers.yaml) | Structured source of truth for paper metadata, roles, contracts, summaries, links, and curation levels. |
| [docs/index.html](docs/index.html) | Searchable web atlas generated from structured data. |
| [reports/](reports/) | Public QA and coverage: link coverage, needs-search, release notes, quality audits, and live-link reports. |
| [exports/](exports/) | CSV, JSON, and BibTeX exports for readers who want to reuse the atlas data. |
| [scripts/](scripts/) | Reproducible generators and validators for README, paper pages, cards, site data, exports, and QA. |

## 🧪 How to Use This Repo in Practice

| If your question is... | Use this path |
|---|---|
| "I am new. What should I read first?" | Start with [docs/00](docs/00_start_here.md), then the [Starter Pack](#-starter-pack-20-must-read-papers). |
| "I want to build a reasoning dataset." | Read [docs/05](docs/05_construction_cookbook.md), then inspect [release cards](cards/releases/) and [recipe cards](cards/recipes/). |
| "I want to know whether a benchmark is reusable." | Open the relevant benchmark card, then check its verifier, data split, contamination risk, and official links. |
| "I want to understand RLVR." | Follow programmatic math/code/proof papers, verifier cards, and scaling/RLVR category pages. |
| "I want to study agents." | Follow [agent papers](papers/04_environmental_agents_tools_web_swe.md), then inspect action schema, terminal predicate, and replay fields. |
| "I want to contribute." | Pick an item from [needs_search](reports/needs_search.md), verify official links, then add structured metadata and a card. |

---

## 📚 Full Paper Atlas

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

## 🗂️ Card Library

Cards turn citations into engineering decisions. They explain the data object, verifier/reward/environment, construction recipe, post-training use, audit questions, and risks.

- [Card index](cards/README.md)
- [Release cards](cards/releases/)
- [Verifier cards](cards/verifiers/)
- [Agent/environment cards](cards/agents/)
- [Recipe cards](cards/recipes/)
- [Failure/audit cards](cards/failures/)
- [Benchmark cards](cards/benchmarks/)

## 🔎 Searchable Website

Open [docs/index.html](docs/index.html) locally or through GitHub Pages. The site loads generated JSON on hosted pages and includes [docs/assets/atlas-data.js](docs/assets/atlas-data.js) as a local fallback for browsers that block direct JSON loading. It supports search plus filters for year, venue, source role, verification contract, supervision granularity, training use, curation level, status, and artifact availability.

## 🧱 Curation Levels

| Level | Meaning |
|---|---|
| `L0_seeded` | Only a title or bibliography seed is known. |
| `L1_link_verified` | Official paper, arXiv, venue, or DOI link is pinned. |
| `L2_artifact_verified` | Code, data, project, or model artifact links are also checked. |
| `L3_summary_ready` | One-line summary and why-it-matters rationale are present. |
| `L4_carded` | A local card explains data object, verifier, use, and audit fields. |
| `L5_audit_ready` | The card includes concrete risks, missing fields, and audit questions. |

## 🤝 Contributing

Please do not submit only a paper title. A useful contribution includes official links, source role, verification contract, supervision granularity, training use, a one-line summary, a why-it-matters rationale, and card/audit fields when available. Start with [CONTRIBUTING.md](CONTRIBUTING.md).

## 📖 Citation

If this atlas helps your related work, dataset construction, verifier design, or reading group, please cite the companion paper and link this repository. See [CITATION.cff](CITATION.cff).

## 📄 License

MIT. See [LICENSE](LICENSE).
