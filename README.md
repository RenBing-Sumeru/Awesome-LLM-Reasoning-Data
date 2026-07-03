<h1><a href="https://www.tsinghua.edu.cn/en/"><img align="right" src="assets/institutions/tsinghua-university.png" height="48" alt="Tsinghua University"></a><a href="https://english.pku.edu.cn/"><img align="right" src="assets/institutions/peking-university.png" height="48" alt="Peking University"></a>🌟 Awesome LLM Reasoning Data</h1>

> A learning repository for understanding post-training reasoning data: what it is, how it is built, how it is verified, how it enters training, and how to audit it.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Paper](https://img.shields.io/badge/arXiv-2606.02113-b31b1b)](https://arxiv.org/abs/2606.02113)
[![Local Atlas](https://img.shields.io/badge/site-searchable%20atlas-0f766e)](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/)
[![Ask the Atlas](https://img.shields.io/badge/Ask-launch%20pending-7c3aed)](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/)
[![Entries](https://img.shields.io/badge/entries-280-2563eb)](data/papers.yaml)
[![Verified](https://img.shields.io/badge/verified-165-0f766e)](reports/link_coverage.md)
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

Project website: [Searchable Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/).

Ask the Atlas: [source-grounded AI assistant · launch pending](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/).

---

## 🔥 Latest Updates

| Date | Update | Why it matters |
|---|---|---|
| 2026-06-15 | Promoted the atlas to **165 verified entries**, **87 linked cards**, and **53 L5 audit-ready cards**. | The front page can now be attractive without hiding uncertainty or inventing unverified links. |
| 2026-06-15 | Completed two artifact-verification rounds: **41 code**, **27 data**, **20 Hugging Face**, and **25 project** links are pinned. | Readers can jump from a paper to reusable artifacts when official sources exist. |
| 2026-06-15 | Rebuilt the searchable site, paper atlas, exports, QA reports, contribution workflow, and release notes from structured metadata. | Counts and public reports are reproducible instead of hand-maintained. |

> The atlas is intentionally conservative about metadata. If a paper/code/data/project link is not verified locally, it stays in [reports/needs_search.md](reports/needs_search.md) instead of being promoted into the verified lists.

## 🧭 Research Track Navigator

Most Awesome lists stop at "which papers exist." This atlas is organized around the extra questions that make post-training reasoning data reusable: **what data object is released, what verifies it, how it enters training, and how a reader should audit the claim**.

| Track | Subfields | Best for | Entries | Jump |
|---|---|---|---:|---|
| 🧭 Surveys & Primers | 🧭 Post-training surveys<br>🧠 Reasoning LLM surveys<br>📦 Data documentation / datasheets<br>🧪 RLHF / reward-model surveys<br>🌐 Agent data / tool-use surveys<br>🧯 Contamination / evaluation surveys | building the field map before reading primary papers | 41 | [Papers](papers/00_surveys_and_primers.md) |
| 🧱 Foundations | 🧱 Instruction tuning / SFT data<br>🤝 Human preference data / RLHF<br>⚖️ DPO / preference optimization<br>🧠 Chain-of-thought / rationale data<br>🔁 Self-training / STaR / Self-Instruct<br>🤖 RLAIF / synthetic feedback | understanding where reasoning-data objects came from | 59 | [Papers](papers/01_foundations_instruction_preference_alignment.md) |
| 🧮 Programmatic Verification | 📐 Math answer-verifiable data<br>🧮 Math RLVR datasets<br>💻 Code execution / unit-test data<br>🧾 Formal proof / Lean / theorem proving<br>🧪 Verifier robustness and answer extraction<br>🧰 Programmatic benchmarks | RLVR, answer-verifiable data, and executable reasoning tasks | 52 | [Papers](papers/02_programmatic_math_code_proof.md) |
| 🪜 Process Supervision & PRMs | 🪜 Human step-level labels<br>🧪 Process reward models<br>🔁 Rollout-value supervision<br>🛠️ Automatic process supervision<br>❌ First-error localization<br>📊 PRM benchmarks and evaluation | step-level rewards, PRM research, and verifier-model design | 23 | [Papers](papers/03_process_supervision_prm.md) |
| 🌐 Agent & Environment Data | 🛠️ Tool-use data<br>🌍 Web/browser agents<br>📱 App/mobile agents<br>🖥️ OS/desktop agents<br>🧑‍💻 SWE/repository agents<br>🔁 Replayable trajectory data<br>🧰 Agent benchmarks and terminal predicates | tool, web, OS, app, and repository-level trajectory data | 49 | [Papers](papers/04_environmental_agents_tools_web_swe.md) |
| ⚖️ Judgment-Required Data | ⚖️ LLM-as-judge data<br>🧑‍⚖️ Human/expert judgment<br>🩺 Medical reasoning / health rubrics<br>🛡️ Safety reasoning data<br>🧾 Factuality / grounding<br>⚖️ Legal reasoning<br>🏦 Financial reasoning<br>🧪 Rubric reward models | rubrics, LLM judges, high-stakes domains, and expert evaluation | 54 | [Papers](papers/05_judgment_required_rubrics_safety_domain.md) |
| 🏗️ Construction Recipes | 🧱 Prompt sourcing<br>✍️ Teacher trace generation<br>🔎 Rejection sampling / search-generated data<br>🔁 Self-play / self-improvement<br>🧪 Filtering and verifier refresh<br>🏗️ Open reasoning data releases<br>🧬 Data lineage and release metadata | building, filtering, releasing, and reproducing reasoning datasets | 84 | [Papers](papers/06_construction_recipes_open_reasoning_data.md) |
| 🚀 Frontier Reports | 🚀 DeepSeek-R1 family<br>🌙 Kimi reasoning reports<br>🐉 Qwen reasoning/math/code reports<br>🧠 Magistral / Phi / Nemotron style reports<br>🧪 RLVR recipe reports<br>🧬 What is disclosed vs hidden | reading model reports as partial data disclosures | 34 | [Papers](papers/07_frontier_model_reports.md) |
| 📈 Scaling & Test-Time Compute | 📈 Data scaling<br>🔁 Data reuse and uniqueness<br>⏱️ Test-time compute<br>🎲 pass@k / sampling budget<br>🧪 Verifier scaling<br>🏋️ RLVR optimization scaling<br>🔍 Scaling attribution | interpreting RLVR, data scaling, and inference-budget claims | 62 | [Papers](papers/08_scaling_test_time_compute_rlvr.md) |
| 🧯 Audit & Failure Modes | 🧯 Benchmark contamination<br>🔍 Search-time contamination<br>🧬 Hidden lineage / teacher leakage<br>🎮 Reward hacking<br>🧪 Verifier gaming<br>⚖️ LLM-as-judge attacks<br>🧨 Spurious rewards<br>📉 Reproducibility failures | auditing leakage, contamination, verifier gaming, and judge attacks | 54 | [Papers](papers/09_audit_failure_contamination_verifier_attacks.md) |
| 🧰 Benchmarks & Evaluation | 📐 Math benchmarks<br>💻 Code benchmarks<br>🧾 Proof benchmarks<br>🌐 Agent benchmarks<br>⚖️ Rubric/domain benchmarks<br>🧪 Reward-model benchmarks<br>🧯 Live / contamination-resistant benchmarks | choosing evaluation surfaces and reusable feedback contracts | 88 | [Papers](papers/10_benchmarks_evaluation.md) |

## 📚 Detailed Paper Directory

Only entries with verified official primary links are listed here. If a subfield still lacks verified entries, it is explicitly marked as needs search instead of receiving invented links. The `data` and `feedback` hints tell you whether a paper is the right kind of post-training reasoning-data work to open next.

### 🧭 Surveys & Primers

> building the field map before reading primary papers · [Full track page](papers/00_surveys_and_primers.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [🧭 Post-training surveys](papers/00_surveys_and_primers.md#post-training-surveys) | field-level maps of post-training, reasoning models, and data-centric LLM practice | [A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328) (2025, arXiv)<br><sub>data: taxonomy of reward-model data sources, objectives, applications, evaluations, and cha…; feedback: reward model as proxy objective for downstream post-training.</sub><br>[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216) (2024, arXiv)<br><sub>data: technical survey comparing RLHF and RLVR policy-gradient style post-training methods.…; feedback: learned preference rewards, verifiable rewards, and policy-gradient objecti…</sub><br>[A Survey of Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2312.14925) (2023, TMLR)<br><sub>data: survey taxonomy over feedback collection, reward modeling, and policy optimization.;…; feedback: learned reward model from human feedback.</sub> | survey taxonomy hides concrete data objects |
| [🧠 Reasoning LLM surveys](papers/00_surveys_and_primers.md#reasoning-llm-surveys) | reasoning model lineages, claims, and recurring evaluation patterns | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | model-centric framing obscures data and verifier details |
| [📦 Data documentation / datasheets](papers/00_surveys_and_primers.md#data-documentation-datasheets) | datasheets, data statements, lineage, license, and release metadata | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | reusable data lacks provenance or consent context |
| [🧪 RLHF / reward-model surveys](papers/00_surveys_and_primers.md#rlhf-reward-model-surveys) | background needed to connect preference data, reward models, and reasoning rewards | [A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328) (2025, arXiv)<br><sub>data: taxonomy of reward-model data sources, objectives, applications, evaluations, and cha…; feedback: reward model as proxy objective for downstream post-training.</sub><br>[A Survey on Human Preference Learning for Large Language Models](https://arxiv.org/abs/2406.11191) (2024, arXiv)<br><sub>data: preference-centered taxonomy over feedback data, preference modeling, preference usag…; feedback: human preference signal transformed into reward, preference loss, or evalua…</sub><br>[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216) (2024, arXiv)<br><sub>data: technical survey comparing RLHF and RLVR policy-gradient style post-training methods.…; feedback: learned preference rewards, verifiable rewards, and policy-gradient objecti…</sub><br>[A Survey of Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2312.14925) (2023, TMLR)<br><sub>data: survey taxonomy over feedback collection, reward modeling, and policy optimization.;…; feedback: learned reward model from human feedback.</sub> | generic alignment lessons are over-applied to verifiable reasoning |
| [🌐 Agent data / tool-use surveys](papers/00_surveys_and_primers.md#agent-data-tool-use-surveys) | orientation for tools, web tasks, OS tasks, and repository agents | [A Survey on Evaluation of LLM-based Agents](https://arxiv.org/abs/2503.16416) (2025, arXiv)<br><sub>data: survey taxonomy for agent evaluation tasks and environments.; process: task, environm…; feedback: environmental and benchmark evaluators summarized by the survey.</sub> | agent traces are treated as transcripts rather than replayable episodes |
| [🧯 Contamination / evaluation surveys](papers/00_surveys_and_primers.md#contamination-evaluation-surveys) | reproducibility, contamination, model collapse, and benchmark refresh | [LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314) (2024, arXiv) · [Card](cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)<br><sub>data: answer level; feedback: programmatic, mixed</sub><br>[Language Model Developers Should Report Train-Test Overlap](https://arxiv.org/abs/2410.08385) (2024, arXiv)<br><sub>data: overlap and reporting analysis.; process: training corpus, evaluation set, overlap es…; feedback: overlap analysis rather than a reward model.</sub> | benchmark deltas are accepted without data-overlap checks |

### 🧱 Foundations

> understanding where reasoning-data objects came from · [Full track page](papers/01_foundations_instruction_preference_alignment.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [🧱 Instruction tuning / SFT data](papers/01_foundations_instruction_preference_alignment.md#instruction-tuning-sft-data) | demonstrations, instruction mixtures, and target-answer records | [Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) (2024, arXiv) · [Card](cards/recipes/tulu-3.md)<br><sub>data: instruction-response examples, preference pairs, verifiable task outputs, and model-e…; feedback: mixture of preference labels, reward models, and verifiable rewards dependi…</sub><br>[Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560) (2023, ACL) · [Card](cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md)<br><sub>data: answer level; feedback: mixed</sub> | prompt sources and mixture weights are undisclosed |
| [🤝 Human preference data / RLHF](papers/01_foundations_instruction_preference_alignment.md#human-preference-data-rlhf) | comparisons, scalar rewards, reward models, and human feedback pipelines | [Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535) (2024, EMNLP) · [Card](cards/verifiers/prometheus-2.md)<br><sub>data: rubric-conditioned scalar score, critique, or pairwise preference output.; process: i…; feedback: Prometheus 2 judge output aligned against human/proprietary-judge benchmark…</sub><br>[Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685) (2023, NeurIPS Datasets and Benchmarks) · [Card](cards/verifiers/mt-bench-chatbot-arena.md)<br><sub>data: model response, judge score, pairwise preference, or arena battle outcome.; process:…; feedback: strong model judge and human preference comparisons.</sub><br>[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) (2022, NeurIPS) · [Card](cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md)<br><sub>data: pairwise preference; scalar reward; feedback: judgment required</sub><br>[A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328) (2025, arXiv)<br><sub>data: taxonomy of reward-model data sources, objectives, applications, evaluations, and cha…; feedback: reward model as proxy objective for downstream post-training.</sub> | annotator or reward-model assumptions are hidden |
| [⚖️ DPO / preference optimization](papers/01_foundations_instruction_preference_alignment.md#dpo-preference-optimization) | direct preference learning and pairwise data as policy supervision | [Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290) (2023, NeurIPS) · [Card](cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md)<br><sub>data: pairwise preference; feedback: judgment required</sub><br>[Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](https://arxiv.org/abs/2406.18629) (2024, arXiv)<br><sub>data: step-wise preference pairs; process: reasoning step, preferred continuation, rejected…; feedback: step-wise preference optimization objective</sub> | preference pairs are reused outside their collection context |
| [🧠 Chain-of-thought / rationale data](papers/01_foundations_instruction_preference_alignment.md#chain-of-thought-rationale-data) | rationales, traces, self-consistency, and reasoning-style supervision | [Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171) (2023, ICLR) · [Card](cards/recipes/self-consistency-chain-of-thought.md)<br><sub>data: multiple rationales and final answers for the same prompt.; process: sampling tempera…; feedback: majority or marginalization over sampled answers.</sub> | trace style is mistaken for faithful reasoning |
| [🔁 Self-training / STaR / Self-Instruct](papers/01_foundations_instruction_preference_alignment.md#self-training-star-self-instruct) | self-generated instructions, bootstrapped traces, critique loops, and filtering | [STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465) (2022, NeurIPS) · [Card](cards/recipes/star-bootstrapping-reasoning-with-reasoning.md)<br><sub>data: answer level; feedback: mixed</sub><br>[ReST-MCTS*](https://arxiv.org/abs/2406.03816) (2024, arXiv)<br><sub>data: reasoning trajectory with intermediate search states; process: node state, rollout ca…; feedback: process reward guided tree search</sub> | generated data collapses diversity or repeats teacher artifacts |
| [🤖 RLAIF / synthetic feedback](papers/01_foundations_instruction_preference_alignment.md#rlaif-synthetic-feedback) | model-generated preferences, critiques, and constitutional feedback | [UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377) (2023, ICML) · [Card](cards/releases/ultrafeedback.md)<br><sub>data: instruction, candidate responses, fine-grained ratings, textual critiques, and derive…; feedback: AI-generated scalar and textual feedback over response quality dimensions.</sub><br>[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073) (2022, arXiv preprint) · [Card](cards/recipes/constitutional-ai.md)<br><sub>data: original answer, self-critique, revised answer, preference pair, reward-model score.;…; feedback: AI preference model trained from comparisons guided by constitutional princ…</sub> | synthetic feedback encodes hidden judge behavior |

### 🧮 Programmatic Verification

> RLVR, answer-verifiable data, and executable reasoning tasks · [Full track page](papers/02_programmatic_math_code_proof.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [📐 Math answer-verifiable data](papers/02_programmatic_math_code_proof.md#math-answer-verifiable-data) | math problems, final answers, solution traces, and answer checkers | [OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560) (2024, ICLR) · [Card](cards/releases/openmathinstruct-2.md)<br><sub>data: problem-solution pair with natural-language mathematical reasoning and final answer.;…; feedback: answer checks and benchmark evaluation over math tasks.</sub><br>[Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122) (2024, arXiv) · [Card](cards/recipes/qwen2-5-math.md)<br><sub>data: math solution, final answer, optional tool/code execution trace, and reward-model sco…; feedback: math answer checks, reward model signals, and benchmark evaluations.</sub><br>[GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168) (2021, arXiv / OpenAI dataset) · [Card](cards/benchmarks/gsm8k-grade-school-math-8k.md)<br><sub>data: natural-language solution with final numeric answer; process: question, solution, fin…; feedback: answer extraction and arithmetic correctness checks</sub><br>[Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874) (2021, NeurIPS Datasets and Benchmarks) · [Card](cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md)<br><sub>data: answer level; feedback: programmatic</sub> | answer extraction and normalization inflate scores |
| [🧮 Math RLVR datasets](papers/02_programmatic_math_code_proof.md#math-rlvr-datasets) | math records used for rejection sampling, SFT, PRMs, and RLVR | [DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](https://arxiv.org/abs/2402.03300) (2024, arXiv) · [Card](cards/recipes/deepseekmath.md)<br><sub>data: natural-language mathematical solution plus final answer, sometimes sampled multiple…; feedback: answer correctness and GRPO-style reward over math tasks.</sub><br>[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) (2025, arXiv) · [Card](cards/releases/big_math.md)<br><sub>data: math problem, answer, and verification signal; process: problem, answer, verification…; feedback: answer-level math verifier</sub><br>[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951) (2025, ACL Findings) · [Card](cards/releases/kodcode.md)<br><sub>data: question-solution-test triplet; process: problem, solution, unit tests; code executio…; feedback: test-based self-verification</sub> | data reuse and contamination are not reported |
| [💻 Code execution / unit-test data](papers/02_programmatic_math_code_proof.md#code-execution-unit-test-data) | code problems, unit tests, generated tests, execution logs, and repair tasks | [LiveCodeBench: Holistic and contamination-free evaluation of large language models for code](https://arxiv.org/abs/2403.07974) (2024, arXiv) · [Card](cards/benchmarks/livecodebench.md)<br><sub>data: program submission or code-related output evaluated by tests or task-specific checks.…; feedback: programmatic tests and task-specific correctness checks.</sub><br>[Magicoder: Empowering code generation with OSS-instruct](https://arxiv.org/abs/2312.02120) (2024, ICML) · [Card](cards/recipes/magicoder.md)<br><sub>data: instruction-response coding example, often linked to a code reference or task scaffol…; feedback: coding benchmark pass rates and optional executable checks.</sub><br>[Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374) (2021, arXiv) · [Card](cards/benchmarks/evaluating-large-language-models-trained-on-code.md)<br><sub>data: executable Python function.; process: prompt, generated code, unit-test results, samp…; feedback: HumanEval tests and pass@k evaluation.</sub><br>[HumanEval: Hand-Written Evaluation Set](https://arxiv.org/abs/2107.03374) (2021, arXiv / OpenAI dataset) · [Card](cards/benchmarks/humaneval-hand-written-evaluation-set.md)<br><sub>data: Python function completion; process: prompt, canonical solution, unit tests; Python e…; feedback: unit tests</sub> | flaky or leaked tests become the reward |
| [🧾 Formal proof / Lean / theorem proving](papers/02_programmatic_math_code_proof.md#formal-proof-lean-theorem-proving) | Lean, proof scripts, tactic environments, theorem statements, and proof checkers | [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) (2025, arXiv) · [Card](cards/recipes/deepseek-prover-v2.md)<br><sub>data: subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: pr…; feedback: Lean verification and RL reward over formal proof success.</sub><br>[DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](https://arxiv.org/abs/2408.08152) (2024, arXiv) · [Card](cards/recipes/deepseek-prover-v1-5.md)<br><sub>data: Lean proof script, proof-search path, feedback signal, and verification result.; proc…; feedback: proof assistant feedback used for RL and search selection.</sub><br>[DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333) (2024, arXiv) · [Card](cards/recipes/deepseek-prover.md)<br><sub>data: Lean 4 theorem statement and proof script checked by Lean.; process: informal problem…; feedback: Lean kernel/checker acceptance.</sub><br>[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) (2023, NeurIPS Datasets and Benchmarks) · [Card](cards/agents/leandojo.md)<br><sub>data: Lean tactic sequence or proof script checked by Lean.; process: repository commit, th…; feedback: Lean checker and environment feedback.</sub> | proof succeeds only under an undocumented environment |
| [🧪 Verifier robustness and answer extraction](papers/02_programmatic_math_code_proof.md#verifier-robustness-and-answer-extraction) | false positives, false negatives, checker brittleness, and adversarial formats | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | model learns verifier quirks instead of task skill |
| [🧰 Programmatic benchmarks](papers/02_programmatic_math_code_proof.md#programmatic-benchmarks) | evaluation sets whose scoring can become a post-training signal | [Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) (2024, OpenAI / SWE-bench report) · [Card](cards/agents/swe-bench-verified.md)<br><sub>data: patch diff applied to a repository plus test execution results.; process: repository,…; feedback: post-patch unit tests plus human filtering of task validity.</sub><br>[SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168) (2024, NeurIPS Datasets and Benchmarks) · [Card](cards/benchmarks/scicode.md)<br><sub>data: code solution evaluated with scientist-annotated tests or expected outputs.; process:…; feedback: test cases and scientist-curated gold solutions.</sub><br>[R2E-Gym](https://arxiv.org/abs/2504.07164) (2025, arXiv) · [Card](cards/agents/r2e_gym.md)<br><sub>data: full episode; state action level; feedback: environmental, programmatic</sub><br>[SWE-Gym](https://arxiv.org/abs/2412.21139) (2025, arXiv) · [Card](cards/agents/swe_gym.md)<br><sub>data: full episode; state action level; feedback: environmental, programmatic</sub> | benchmark scoring is treated as a reusable training verifier without audit |

### 🪜 Process Supervision & PRMs

> step-level rewards, PRM research, and verifier-model design · [Full track page](papers/03_process_supervision_prm.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [🪜 Human step-level labels](papers/03_process_supervision_prm.md#human-step-level-labels) | human-labeled intermediate steps and first-error annotations | [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) (2023, arXiv) · [Card](cards/verifiers/prm800k.md)<br><sub>data: step-level labels and final answers; process: step, label, solution trace; offline ma…; feedback: process reward model trained from step labels</sub> | step boundaries and label policy are ambiguous |
| [🧪 Process reward models](papers/03_process_supervision_prm.md#process-reward-models) | PRMs, process verifiers, calibration, and reward-model training | [ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861) (2025, arXiv)<br><sub>data: step-level preference data with process scores and explanations; process: retrieval c…; feedback: process reward model plus process explanation model</sub><br>[ReST-MCTS*](https://arxiv.org/abs/2406.03816) (2024, arXiv)<br><sub>data: reasoning trajectory with intermediate search states; process: node state, rollout ca…; feedback: process reward guided tree search</sub> | process reward rises while final correctness does not |
| [🔁 Rollout-value supervision](papers/03_process_supervision_prm.md#rollout-value-supervision) | rollout values, search-derived labels, and automated progress signals | [Rewarding progress: Scaling automated process verifiers for LLM reasoning](https://arxiv.org/abs/2410.08146) (2024, ICLR) · [Card](cards/verifiers/rewarding-progress.md)<br><sub>data: step-level process advantage score plus final answer/correctness signal.; process: pr…; feedback: Process Advantage Verifier trained to predict progress toward correct answe…</sub><br>[Math-Shepherd](https://arxiv.org/abs/2312.08935) (2024, arXiv) · [Card](cards/verifiers/math_shepherd.md)<br><sub>data: step-level rollout-value labels; process: reasoning step, rollout result, process rew…; feedback: rollout-derived process reward signal</sub> | rollout policy leaks solver strength into labels |
| [🛠️ Automatic process supervision](papers/03_process_supervision_prm.md#automatic-process-supervision) | programmatic or model-generated process labels without dense human annotation | [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592) (2024, arXiv) · [Card](cards/verifiers/omegaprm.md)<br><sub>data: process supervision annotations; process: partial reasoning prefix, first-error signa…; feedback: automated process reward signal</sub><br>[PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456) (2025, arXiv)<br><sub>data: rollout with implicit process reward signal; process: policy rollout, outcome label,…; feedback: implicit process rewards derived from outcome labels</sub><br>[AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802) (2024, arXiv)<br><sub>data: step-level confidence-change annotations; process: reasoning step, verifier confidenc…; feedback: answer-trained verifier converted into process annotations</sub> | automatic labels silently inherit verifier bias |
| [❌ First-error localization](papers/03_process_supervision_prm.md#first-error-localization) | where a solution first becomes invalid and how that signal is used | [Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](https://arxiv.org/abs/2406.18629) (2024, arXiv)<br><sub>data: step-wise preference pairs; process: reasoning step, preferred continuation, rejected…; feedback: step-wise preference optimization objective</sub> | localized errors are not causally linked to final correction |
| [📊 PRM benchmarks and evaluation](papers/03_process_supervision_prm.md#prm-benchmarks-and-evaluation) | ProcessBench, PRMBench, Qwen PRM, and evaluation surfaces for process rewards | [PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124) (2025, arXiv) · [Card](cards/verifiers/prmbench.md)<br><sub>data: step-level labels or scores; process: step, label, error type; offline reasoning trac…; feedback: process-level reward model benchmark</sub><br>[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559) (2024, arXiv) · [Card](cards/verifiers/processbench.md)<br><sub>data: step labels or first-error markers; process: reasoning step, error marker, diagnostic…; feedback: process-error detector</sub> | PRM benchmark success does not transfer to training-time use |

### 🌐 Agent & Environment Data

> tool, web, OS, app, and repository-level trajectory data · [Full track page](papers/04_environmental_agents_tools_web_swe.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [🛠️ Tool-use data](papers/04_environmental_agents_tools_web_swe.md#tool-use-data) | tool calls, function signatures, API banks, and tool-use traces | [Toolformer: Language models can teach themselves to use tools](https://arxiv.org/abs/2302.04761) (2023, NeurIPS) · [Card](cards/agents/toolformer.md)<br><sub>data: text sequence with inserted API call and tool result markup.; process: candidate call…; feedback: language-model likelihood improvement after including tool result.</sub><br>[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789) (2023, ICLR) · [Card](cards/agents/toolllm_toolbench.md)<br><sub>data: tool-call trajectory plus final response; process: API call, arguments, tool response…; feedback: tool response validity and task success checks</sub> | tool schemas change or hide execution failures |
| [🌍 Web/browser agents](papers/04_environmental_agents_tools_web_swe.md#web-browser-agents) | web tasks, browser state, navigation traces, and page observations | [BrowserGym: A gym environment for web agents](https://arxiv.org/abs/2412.05467) (2024, arXiv) · [Card](cards/agents/browsergym.md)<br><sub>data: browser trajectory; process: DOM/state observation, action, reward/result; gym-style…; feedback: environment task evaluator</sub><br>[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854) (2023, ICLR) · [Card](cards/agents/webarena.md)<br><sub>data: environment interaction trajectory; process: observation, action, state; browser-acce…; feedback: task-specific success evaluator</sub> | web state is not replayable after collection |
| [📱 App/mobile agents](papers/04_environmental_agents_tools_web_swe.md#app-mobile-agents) | mobile apps, app-world tasks, UI actions, and user simulators | [AndroidWorld: A dynamic benchmarking environment for autonomous agents](https://arxiv.org/abs/2405.14573) (2024, arXiv) · [Card](cards/agents/androidworld.md)<br><sub>data: Android action trajectory; process: screen observation, UI action, state transition;…; feedback: task-specific success evaluator</sub><br>[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901) (2024, arXiv) · [Card](cards/agents/appworld.md)<br><sub>data: API/tool action trajectory; process: tool call, state transition, observation; simula…; feedback: programmatic environment assertions</sub> | UI state and app versions are not pinned |
| [🖥️ OS/desktop agents](papers/04_environmental_agents_tools_web_swe.md#os-desktop-agents) | desktop/OS tasks, filesystem state, shell actions, and multi-app workflows | [OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972) (2024, NeurIPS) · [Card](cards/agents/osworld.md)<br><sub>data: GUI/OS action trajectory; process: observation, action, environment state; desktop op…; feedback: task completion evaluator</sub> | hidden environment state makes episodes non-reproducible |
| [🧑‍💻 SWE/repository agents](papers/04_environmental_agents_tools_web_swe.md#swe-repository-agents) | GitHub issues, code patches, tests, commits, and repository repair episodes | [Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) (2024, OpenAI / SWE-bench report) · [Card](cards/agents/swe-bench-verified.md)<br><sub>data: patch diff applied to a repository plus test execution results.; process: repository,…; feedback: post-patch unit tests plus human filtering of task validity.</sub><br>[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) (2023, NeurIPS Datasets and Benchmarks) · [Card](cards/agents/leandojo.md)<br><sub>data: Lean tactic sequence or proof script checked by Lean.; process: repository commit, th…; feedback: Lean checker and environment feedback.</sub><br>[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770) (2023, ICLR) · [Card](cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md)<br><sub>data: full episode; state action level; feedback: environmental, programmatic</sub><br>[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741) (2024, ICLR) · [Card](cards/agents/openhands.md)<br><sub>data: tool/action/observation trajectory; process: plan, shell command, file edit; sandboxe…; feedback: task, test, or human-review outcome depending on benchmark</sub> | repository commit, tests, and scaffold are not pinned |
| [🔁 Replayable trajectory data](papers/04_environmental_agents_tools_web_swe.md#replayable-trajectory-data) | state-action-observation schemas, terminal predicates, and failure traces | [ReAct: Synergizing reasoning and acting in language models](https://arxiv.org/abs/2210.03629) (2023, ICLR) · [Card](cards/agents/react.md)<br><sub>data: trajectory containing reasoning note, action, observation, and final answer or task c…; feedback: environment success, answer correctness, or task-specific evaluation.</sub> | success transcript cannot be replayed or audited |
| [🧰 Agent benchmarks and terminal predicates](papers/04_environmental_agents_tools_web_swe.md#agent-benchmarks-and-terminal-predicates) | agent evaluation suites, task resets, terminal predicates, and success/failure labels | [Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) (2024, OpenAI / SWE-bench report) · [Card](cards/agents/swe-bench-verified.md)<br><sub>data: patch diff applied to a repository plus test execution results.; process: repository,…; feedback: post-patch unit tests plus human filtering of task validity.</sub><br>[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) (2023, NeurIPS Datasets and Benchmarks) · [Card](cards/agents/leandojo.md)<br><sub>data: Lean tactic sequence or proof script checked by Lean.; process: repository commit, th…; feedback: Lean checker and environment feedback.</sub><br>[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770) (2023, ICLR) · [Card](cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md)<br><sub>data: full episode; state action level; feedback: environmental, programmatic</sub><br>[R2E-Gym](https://arxiv.org/abs/2504.07164) (2025, arXiv) · [Card](cards/agents/r2e_gym.md)<br><sub>data: full episode; state action level; feedback: environmental, programmatic</sub> | benchmark score is reported without a replayable terminal predicate |

### ⚖️ Judgment-Required Data

> rubrics, LLM judges, high-stakes domains, and expert evaluation · [Full track page](papers/05_judgment_required_rubrics_safety_domain.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [⚖️ LLM-as-judge data](papers/05_judgment_required_rubrics_safety_domain.md#llm-as-judge-data) | model judges, preference judgments, judge prompts, and evaluator models | [Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535) (2024, EMNLP) · [Card](cards/verifiers/prometheus-2.md)<br><sub>data: rubric-conditioned scalar score, critique, or pairwise preference output.; process: i…; feedback: Prometheus 2 judge output aligned against human/proprietary-judge benchmark…</sub><br>[Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685) (2023, NeurIPS Datasets and Benchmarks) · [Card](cards/verifiers/mt-bench-chatbot-arena.md)<br><sub>data: model response, judge score, pairwise preference, or arena battle outcome.; process:…; feedback: strong model judge and human preference comparisons.</sub><br>[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794) (2025, arXiv) · [Card](cards/verifiers/one_token_to_fool_judge.md)<br><sub>data: scalar reward; feedback: judgment required</sub> | judge is sensitive to style, position, or prompt attacks |
| [🧑‍⚖️ Human/expert judgment](papers/05_judgment_required_rubrics_safety_domain.md#human-expert-judgment) | human labels, expert adjudication, disagreement handling, and rubric design | [Aegis2.0](https://arxiv.org/abs/2501.09004) (2025, arXiv) · [Card](cards/verifiers/aegis2.md)<br><sub>data: prompt or prompt-response sample with hazard taxonomy labels and safety annotations.;…; feedback: risk labels and guard-model evaluation signal.</sub><br>[TruthfulQA](https://arxiv.org/abs/2109.07958) (2022, ACL) · [Card](cards/benchmarks/truthfulqa.md)<br><sub>data: free-form generation or multiple-choice answer with truthfulness and informativeness…; feedback: human references plus automated/human scoring protocols for truthfulness an…</sub><br>[LegalBench](https://arxiv.org/abs/2308.11462) (2023, NeurIPS)<br><sub>data: answer level; feedback: judgment required, mixed</sub> | expertise and adjudication policy are not disclosed |
| [🩺 Medical reasoning / health rubrics](papers/05_judgment_required_rubrics_safety_domain.md#medical-reasoning-health-rubrics) | health, biomedical, scientific, and evidence-grounded reasoning tasks | [GPQA](https://arxiv.org/abs/2311.12022) (2023, arXiv) · [Card](cards/benchmarks/gpqa.md)<br><sub>data: multiple-choice answer with optional rationale and expert label.; process: domain, qu…; feedback: expert-authored answer key and validation protocol.</sub> | rubrics are not calibrated for high-stakes error |
| [🛡️ Safety reasoning data](papers/05_judgment_required_rubrics_safety_domain.md#safety-reasoning-data) | safety reasoning, refusals, jailbreaks, harmfulness, and guardrail data | [AbstentionBench](https://arxiv.org/abs/2506.09038) (2025, arXiv) · [Card](cards/benchmarks/abstentionbench.md)<br><sub>data: model response, abstention decision, and correctness/abstention judgment.; process: s…; feedback: human-validated judges and benchmark labels for abstention scenarios.</sub><br>[Leaky Thoughts](https://arxiv.org/abs/2506.15674) (2025, arXiv) · [Card](cards/failures/leaky-thoughts.md)<br><sub>data: internal reasoning trace, final answer, and leakage/extraction outcome.; process: sen…; feedback: extraction probes and agentic evaluations.</sub><br>[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949) (2025, arXiv) · [Card](cards/recipes/llama_nemotron.md)<br><sub>data: answer level; feedback: mixed</sub> | safe-looking refusals replace correct domain reasoning |
| [🧾 Factuality / grounding](papers/05_judgment_required_rubrics_safety_domain.md#factuality-grounding) | claims, citations, retrieval grounding, fact checking, and evidence quality | [Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511) (2023, ICLR) · [Card](cards/recipes/self-rag.md)<br><sub>data: generation with retrieval decisions, critique signals, and final answer.; process: qu…; feedback: critique signals and task-specific factuality/answer-quality evaluation.</sub> | citation style masks unsupported claims |
| [⚖️ Legal reasoning](papers/05_judgment_required_rubrics_safety_domain.md#legal-reasoning) | legal QA, statutes, case reasoning, contracts, and expert legal rubrics | [LegalBench](https://arxiv.org/abs/2308.11462) (2023, NeurIPS)<br><sub>data: answer level; feedback: judgment required, mixed</sub> | legal splits leak templates, memorized cases, or jurisdiction-specific assumptions |
| [🏦 Financial reasoning](papers/05_judgment_required_rubrics_safety_domain.md#financial-reasoning) | financial QA, tabular/text numerical reasoning, filings, and analyst-style judgments | [FinanceBench: A benchmark for financial question answering](https://arxiv.org/abs/2311.11944) (2023, arXiv)<br><sub>data: answer level; feedback: judgment required, mixed</sub><br>[TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance](https://aclanthology.org/2021.acl-long.254/) (2021, ACL)<br><sub>data: answer level; step level; feedback: mixed</sub><br>[FinQA: A dataset of numerical reasoning over financial data](https://aclanthology.org/2021.emnlp-main.300/) (2021, EMNLP)<br><sub>data: answer level; step level; feedback: mixed</sub> | financial splits leak templates, reports, or memorized company facts |
| [🧪 Rubric reward models](papers/05_judgment_required_rubrics_safety_domain.md#rubric-reward-models) | rubrics as trainable rewards and domain-conditioned reward models | [UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377) (2023, ICML) · [Card](cards/releases/ultrafeedback.md)<br><sub>data: instruction, candidate responses, fine-grained ratings, textual critiques, and derive…; feedback: AI-generated scalar and textual feedback over response quality dimensions.</sub><br>[HealthBench](https://arxiv.org/abs/2505.08775) (2025, arXiv) · [Card](cards/verifiers/healthbench.md)<br><sub>data: response with rubric/judge evaluation; process: prompt, response, rubric dimension; o…; feedback: rubric-guided expert/LLM judgment</sub><br>[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787) (2024, NeurIPS) · [Card](cards/verifiers/rewardbench.md)<br><sub>data: pairwise or scalar reward decisions; process: prompt, chosen/rejected response, rewar…; feedback: reward model or judge</sub><br>[A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328) (2025, arXiv)<br><sub>data: taxonomy of reward-model data sources, objectives, applications, evaluations, and cha…; feedback: reward model as proxy objective for downstream post-training.</sub> | rubric scores are optimized without semantic robustness |

### 🏗️ Construction Recipes

> building, filtering, releasing, and reproducing reasoning datasets · [Full track page](papers/06_construction_recipes_open_reasoning_data.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [🧱 Prompt sourcing](papers/06_construction_recipes_open_reasoning_data.md#prompt-sourcing) | question pools, seed sources, licenses, difficulty, and base-model pass rates | [OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560) (2024, ICLR) · [Card](cards/releases/openmathinstruct-2.md)<br><sub>data: problem-solution pair with natural-language mathematical reasoning and final answer.;…; feedback: answer checks and benchmark evaluation over math tasks.</sub><br>[Magicoder: Empowering code generation with OSS-instruct](https://arxiv.org/abs/2312.02120) (2024, ICML) · [Card](cards/recipes/magicoder.md)<br><sub>data: instruction-response coding example, often linked to a code reference or task scaffol…; feedback: coding benchmark pass rates and optional executable checks.</sub><br>[UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377) (2023, ICML) · [Card](cards/releases/ultrafeedback.md)<br><sub>data: instruction, candidate responses, fine-grained ratings, textual critiques, and derive…; feedback: AI-generated scalar and textual feedback over response quality dimensions.</sub><br>[Aegis2.0](https://arxiv.org/abs/2501.09004) (2025, arXiv) · [Card](cards/verifiers/aegis2.md)<br><sub>data: prompt or prompt-response sample with hazard taxonomy labels and safety annotations.;…; feedback: risk labels and guard-model evaluation signal.</sub> | prompt sources are mixed without attribution or deduplication |
| [✍️ Teacher trace generation](papers/06_construction_recipes_open_reasoning_data.md#teacher-trace-generation) | teacher models, trace policies, sampling settings, and distillation targets | [Subliminal Learning](https://arxiv.org/abs/2507.14805) (2025, arXiv) · [Card](cards/failures/subliminal-learning.md)<br><sub>data: generated data plus downstream behavioral evaluation of the student.; process: teache…; feedback: trait probes after student training.</sub><br>[Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318) (2025, arXiv) · [Card](cards/recipes/phi4_reasoning.md)<br><sub>data: answer level; feedback: mixed</sub><br>[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789) (2023, ICLR) · [Card](cards/agents/toolllm_toolbench.md)<br><sub>data: tool-call trajectory plus final response; process: API call, arguments, tool response…; feedback: tool response validity and task success checks</sub> | teacher identity or sampling protocol is hidden |
| [🔎 Rejection sampling / search-generated data](papers/06_construction_recipes_open_reasoning_data.md#rejection-sampling-search-generated-data) | candidate generation, search budget, filtering, and accepted/rejected examples | [DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](https://arxiv.org/abs/2408.08152) (2024, arXiv) · [Card](cards/recipes/deepseek-prover-v1-5.md)<br><sub>data: Lean proof script, proof-search path, feedback signal, and verification result.; proc…; feedback: proof assistant feedback used for RL and search selection.</sub><br>[Rewarding progress: Scaling automated process verifiers for LLM reasoning](https://arxiv.org/abs/2410.08146) (2024, ICLR) · [Card](cards/verifiers/rewarding-progress.md)<br><sub>data: step-level process advantage score plus final answer/correctness signal.; process: pr…; feedback: Process Advantage Verifier trained to predict progress toward correct answe…</sub><br>[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861) (2025, arXiv)<br><sub>data: step-level preference data with process scores and explanations; process: retrieval c…; feedback: process reward model plus process explanation model</sub> | only accepted traces are released, hiding verifier behavior |
| [🔁 Self-play / self-improvement](papers/06_construction_recipes_open_reasoning_data.md#self-play-self-improvement) | self-improvement, co-evolution, generator-verifier cycles, and curricula | [Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122) (2024, arXiv) · [Card](cards/recipes/qwen2-5-math.md)<br><sub>data: math solution, final answer, optional tool/code execution trace, and reward-model sco…; feedback: math answer checks, reward model signals, and benchmark evaluations.</sub><br>[Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335) (2025, arXiv preprint arXiv:2505.03335) · [Card](cards/recipes/absolute_zero.md)<br><sub>data: generated task, solution, and verified answer; process: proposed task, solution, veri…; feedback: executor-backed verifiable reward</sub><br>[AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802) (2024, arXiv)<br><sub>data: step-level confidence-change annotations; process: reasoning step, verifier confidenc…; feedback: answer-trained verifier converted into process annotations</sub> | feedback loop amplifies hidden biases or shortcuts |
| [🧪 Filtering and verifier refresh](papers/06_construction_recipes_open_reasoning_data.md#filtering-and-verifier-refresh) | answer filters, judge filters, decontamination, and verifier updates | [Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) (2024, arXiv) · [Card](cards/recipes/tulu-3.md)<br><sub>data: instruction-response examples, preference pairs, verifiable task outputs, and model-e…; feedback: mixture of preference labels, reward models, and verifiable rewards dependi…</sub><br>[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465) (2022, NeurIPS) · [Card](cards/recipes/star-bootstrapping-reasoning-with-reasoning.md)<br><sub>data: answer level; feedback: mixed</sub><br>[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) (2025, arXiv) · [Card](cards/releases/big_math.md)<br><sub>data: math problem, answer, and verification signal; process: problem, answer, verification…; feedback: answer-level math verifier</sub><br>[DAPO](https://arxiv.org/abs/2503.14476) (2025, arXiv) · [Card](cards/releases/dapo.md)<br><sub>data: answer level; feedback: programmatic</sub> | filter thresholds become undocumented training objectives |
| [🏗️ Open reasoning data releases](papers/06_construction_recipes_open_reasoning_data.md#open-reasoning-data-releases) | open datasets, code, HF releases, recipes, ablations, and reproducibility | [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) (2025, arXiv) · [Card](cards/releases/openthoughts.md)<br><sub>data: reasoning traces and final answers; process: question, reasoning trace, answer; offli…; feedback: filters, benchmark feedback, and recipe ablations</sub> | headline dataset is open but recipe details are not |
| [🧬 Data lineage and release metadata](papers/06_construction_recipes_open_reasoning_data.md#data-lineage-and-release-metadata) | datasheets, splits, lineage, licensing, versioning, and known failure modes | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | downstream reuse loses the release context |

### 🚀 Frontier Reports

> reading model reports as partial data disclosures · [Full track page](papers/07_frontier_model_reports.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [🚀 DeepSeek-R1 family](papers/07_frontier_model_reports.md#deepseek-r1-family) | RLVR, distillation, reasoning traces, and public recipe disclosure | [DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333) (2024, arXiv) · [Card](cards/recipes/deepseek-prover.md)<br><sub>data: Lean 4 theorem statement and proof script checked by Lean.; process: informal problem…; feedback: Lean kernel/checker acceptance.</sub><br>[DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025, arXiv) · [Card](cards/recipes/deepseek_r1.md)<br><sub>data: answer level; feedback: mixed</sub> | public report describes outcomes but not enough data partitions |
| [🌙 Kimi reasoning reports](papers/07_frontier_model_reports.md#kimi-reasoning-reports) | long-context reasoning, RL compute, and frontier inference budgets | [Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599) (2025, arXiv) · [Card](cards/recipes/kimi_k15.md)<br><sub>data: answer level; feedback: mixed</sub> | test-time compute is mixed with training-data effects |
| [🐉 Qwen reasoning/math/code reports](papers/07_frontier_model_reports.md#qwen-reasoning-math-code-reports) | math, code, PRM, and open-weight reasoning model families | [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (2025, arXiv) · [Card](cards/recipes/qwen3.md)<br><sub>data: answer level; feedback: mixed</sub> | release cards do not separate SFT, RLVR, and evaluation data |
| [🧠 Magistral / Phi / Nemotron style reports](papers/07_frontier_model_reports.md#magistral-phi-nemotron-style-reports) | open-weight reasoning reports with partial data and reward disclosures | [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585) (2025, arXiv preprint arXiv:2506.13585) · [Card](cards/recipes/minimax_m1.md)<br><sub>data: reasoning output, code/tool result, or agent task output; process: reasoning output,…; feedback: programmatic, environment, and benchmark feedback</sub><br>[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949) (2025, arXiv) · [Card](cards/recipes/llama_nemotron.md)<br><sub>data: answer level; feedback: mixed</sub><br>[Magistral](https://arxiv.org/abs/2506.10910) (2025, arXiv) · [Card](cards/recipes/magistral.md)<br><sub>data: answer level; feedback: mixed</sub><br>[Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318) (2025, arXiv) · [Card](cards/recipes/phi4_reasoning.md)<br><sub>data: answer level; feedback: mixed</sub> | model-card claims cannot be mapped to concrete data objects |
| [🧪 RLVR recipe reports](papers/07_frontier_model_reports.md#rlvr-recipe-reports) | reports that expose reward contracts, rollout policies, or RL scaffolds | [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) (2025, arXiv) · [Card](cards/recipes/deepseek-prover-v2.md)<br><sub>data: subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: pr…; feedback: Lean verification and RL reward over formal proof success.</sub><br>[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) (2024, arXiv) · [Card](cards/recipes/tulu-3.md)<br><sub>data: instruction-response examples, preference pairs, verifiable task outputs, and model-e…; feedback: mixture of preference labels, reward models, and verifiable rewards dependi…</sub><br>[DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](https://arxiv.org/abs/2402.03300) (2024, arXiv) · [Card](cards/recipes/deepseekmath.md)<br><sub>data: natural-language mathematical solution plus final answer, sometimes sampled multiple…; feedback: answer correctness and GRPO-style reward over math tasks.</sub><br>[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300) (2025, arXiv) · [Card](cards/recipes/scaling-behaviors-rl-post-training.md)<br><sub>data: problem, generated solution/answer, reward outcome, and training curve metrics.; proc…; feedback: answer-level reward for mathematical reasoning and scaling curves.</sub> | RL gains are attributed without verifier coverage |
| [🧬 What is disclosed vs hidden](papers/07_frontier_model_reports.md#what-is-disclosed-vs-hidden) | how reports reveal or hide data sources, filters, lineage, and safety mixtures | [Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122) (2024, arXiv) · [Card](cards/recipes/qwen2-5-math.md)<br><sub>data: math solution, final answer, optional tool/code execution trace, and reward-model sco…; feedback: math answer checks, reward model signals, and benchmark evaluations.</sub><br>[OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) (2025, arXiv) · [Card](cards/releases/openthoughts.md)<br><sub>data: reasoning traces and final answers; process: question, reasoning trace, answer; offli…; feedback: filters, benchmark feedback, and recipe ablations</sub><br>[Orca: Progressive learning from complex explanation traces of GPT-4](https://arxiv.org/abs/2306.02707) (2023, arXiv) · [Card](cards/recipes/orca.md)<br><sub>data: instruction response with detailed explanation, intermediate reasoning, and final ans…; feedback: downstream reasoning, exam, and benchmark evaluation rather than a single a…</sub> | opaque mixtures are reused as if they were open recipes |

### 📈 Scaling & Test-Time Compute

> interpreting RLVR, data scaling, and inference-budget claims · [Full track page](papers/08_scaling_test_time_compute_rlvr.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [📈 Data scaling](papers/08_scaling_test_time_compute_rlvr.md#data-scaling) | how number, diversity, and difficulty of examples affect reasoning performance | [Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) (2025, arXiv) · [Card](cards/releases/big_math.md)<br><sub>data: math problem, answer, and verification signal; process: problem, answer, verification…; feedback: answer-level math verifier</sub><br>[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891) (2025, arXiv) · [Card](cards/releases/openmathreasoning.md)<br><sub>data: answer level; feedback: programmatic</sub> | unique examples and repeated rollouts are conflated |
| [🔁 Data reuse and uniqueness](papers/08_scaling_test_time_compute_rlvr.md#data-reuse-and-uniqueness) | reuse counts, deduplication, repeated prompts, and train/test overlap | [Language Model Developers Should Report Train-Test Overlap](https://arxiv.org/abs/2410.08385) (2024, arXiv)<br><sub>data: overlap and reporting analysis.; process: training corpus, evaluation set, overlap es…; feedback: overlap analysis rather than a reward model.</sub> | same source examples are counted as fresh supervision |
| [⏱️ Test-time compute](papers/08_scaling_test_time_compute_rlvr.md#test-time-compute) | sampling, search, self-critique, thinking budgets, and inference-time scaling | [DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](https://arxiv.org/abs/2402.03300) (2024, arXiv) · [Card](cards/recipes/deepseekmath.md)<br><sub>data: natural-language mathematical solution plus final answer, sometimes sampled multiple…; feedback: answer correctness and GRPO-style reward over math tasks.</sub><br>[Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122) (2024, arXiv) · [Card](cards/recipes/qwen2-5-math.md)<br><sub>data: math solution, final answer, optional tool/code execution trace, and reward-model sco…; feedback: math answer checks, reward model signals, and benchmark evaluations.</sub><br>[The Art of Scaling Reinforcement Learning Compute for LLMs](https://arxiv.org/abs/2510.13786) (2025, arXiv) · [Card](cards/recipes/the-art-of-scaling-rl-compute.md)<br><sub>data: training runs, reward outcomes, validation curves, and ablation results.; process: lo…; feedback: compute-performance curves and recipe ablations.</sub><br>[s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025, arXiv) · [Card](cards/releases/s1.md)<br><sub>data: answer level; feedback: mixed</sub> | performance is compared under different inference budgets |
| [🎲 pass@k / sampling budget](papers/08_scaling_test_time_compute_rlvr.md#pass-k-sampling-budget) | pass@k, pass@(k,T), repeated sampling, and budget-aware evaluation | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | reported gains hide selection or budget changes |
| [🧪 Verifier scaling](papers/08_scaling_test_time_compute_rlvr.md#verifier-scaling) | how verifier strength, refresh, and coverage scale with training | [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) (2025, arXiv) · [Card](cards/verifiers/tinyv.md)<br><sub>data: candidate answer with recovered reward decision; process: original verifier verdict,…; feedback: small LLM verifier augmenting rules</sub><br>[DeepMath-103K](https://arxiv.org/abs/2504.11456) (2025, arXiv) · [Card](cards/releases/deepmath_103k.md)<br><sub>data: answer level; feedback: programmatic</sub><br>[Magistral](https://arxiv.org/abs/2506.10910) (2025, arXiv) · [Card](cards/recipes/magistral.md)<br><sub>data: answer level; feedback: mixed</sub><br>[Spurious Rewards](https://arxiv.org/abs/2506.10947) (2025, arXiv) · [Card](cards/verifiers/spurious_rewards.md)<br><sub>data: scalar reward; feedback: programmatic</sub> | the verifier becomes stale or easy to exploit |
| [🏋️ RLVR optimization scaling](papers/08_scaling_test_time_compute_rlvr.md#rlvr-optimization-scaling) | policy optimization, reward contracts, curriculum, and rollout policy | [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) (2025, arXiv) · [Card](cards/recipes/deepseek-prover-v2.md)<br><sub>data: subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: pr…; feedback: Lean verification and RL reward over formal proof success.</sub><br>[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) (2024, arXiv) · [Card](cards/recipes/tulu-3.md)<br><sub>data: instruction-response examples, preference pairs, verifiable task outputs, and model-e…; feedback: mixture of preference labels, reward models, and verifiable rewards dependi…</sub><br>[DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](https://arxiv.org/abs/2408.08152) (2024, arXiv) · [Card](cards/recipes/deepseek-prover-v1-5.md)<br><sub>data: Lean proof script, proof-search path, feedback signal, and verification result.; proc…; feedback: proof assistant feedback used for RL and search selection.</sub><br>[DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025, arXiv) · [Card](cards/recipes/deepseek_r1.md)<br><sub>data: answer level; feedback: mixed</sub> | optimizer/scaffold improvements are mistaken for data improvements |
| [🔍 Scaling attribution](papers/08_scaling_test_time_compute_rlvr.md#scaling-attribution) | separating data, verifier, optimizer, model, and inference-budget effects | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | ablation tables do not isolate the source of improvement |

### 🧯 Audit & Failure Modes

> auditing leakage, contamination, verifier gaming, and judge attacks · [Full track page](papers/09_audit_failure_contamination_verifier_attacks.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [🧯 Benchmark contamination](papers/09_audit_failure_contamination_verifier_attacks.md#benchmark-contamination) | train/test overlap, stale evaluations, and benchmark refresh | [LiveCodeBench: Holistic and contamination-free evaluation of large language models for code](https://arxiv.org/abs/2403.07974) (2024, arXiv) · [Card](cards/benchmarks/livecodebench.md)<br><sub>data: program submission or code-related output evaluated by tests or task-specific checks.…; feedback: programmatic tests and task-specific correctness checks.</sub><br>[GPQA](https://arxiv.org/abs/2311.12022) (2023, arXiv) · [Card](cards/benchmarks/gpqa.md)<br><sub>data: multiple-choice answer with optional rationale and expert label.; process: domain, qu…; feedback: expert-authored answer key and validation protocol.</sub><br>[TruthfulQA](https://arxiv.org/abs/2109.07958) (2022, ACL) · [Card](cards/benchmarks/truthfulqa.md)<br><sub>data: free-form generation or multiple-choice answer with truthfulness and informativeness…; feedback: human references plus automated/human scoring protocols for truthfulness an…</sub><br>[LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314) (2024, arXiv) · [Card](cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)<br><sub>data: answer level; feedback: programmatic, mixed</sub> | memorized items are reported as reasoning progress |
| [🔍 Search-time contamination](papers/09_audit_failure_contamination_verifier_attacks.md#search-time-contamination) | contamination introduced by search, tools, retrieval, or inference scaffolds | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | test-time tool access leaks answer traces |
| [🧬 Hidden lineage / teacher leakage](papers/09_audit_failure_contamination_verifier_attacks.md#hidden-lineage-teacher-leakage) | teacher-model traces, synthetic data inheritance, and hidden trait transfer | [Subliminal Learning](https://arxiv.org/abs/2507.14805) (2025, arXiv) · [Card](cards/failures/subliminal-learning.md)<br><sub>data: generated data plus downstream behavioral evaluation of the student.; process: teache…; feedback: trait probes after student training.</sub><br>[Leaky Thoughts](https://arxiv.org/abs/2506.15674) (2025, arXiv) · [Card](cards/failures/leaky-thoughts.md)<br><sub>data: internal reasoning trace, final answer, and leakage/extraction outcome.; process: sen…; feedback: extraction probes and agentic evaluations.</sub> | student behavior inherits undisclosed teacher artifacts |
| [🎮 Reward hacking](papers/09_audit_failure_contamination_verifier_attacks.md#reward-hacking) | ways reward models, tests, or judges can be optimized as shortcuts | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | reward rises while real task quality falls |
| [🧪 Verifier gaming](papers/09_audit_failure_contamination_verifier_attacks.md#verifier-gaming) | models exploiting checkers, answer formats, or judge blind spots | [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) (2025, arXiv) · [Card](cards/verifiers/tinyv.md)<br><sub>data: candidate answer with recovered reward decision; process: original verifier verdict,…; feedback: small LLM verifier augmenting rules</sub><br>[DeepMath-103K](https://arxiv.org/abs/2504.11456) (2025, arXiv) · [Card](cards/releases/deepmath_103k.md)<br><sub>data: answer level; feedback: programmatic</sub> | verifier-passing examples are semantically wrong |
| [⚖️ LLM-as-judge attacks](papers/09_audit_failure_contamination_verifier_attacks.md#llm-as-judge-attacks) | one-token attacks, position bias, verbosity bias, and prompt attacks | [Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685) (2023, NeurIPS Datasets and Benchmarks) · [Card](cards/verifiers/mt-bench-chatbot-arena.md)<br><sub>data: model response, judge score, pairwise preference, or arena battle outcome.; process:…; feedback: strong model judge and human preference comparisons.</sub><br>[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794) (2025, arXiv) · [Card](cards/verifiers/one_token_to_fool_judge.md)<br><sub>data: scalar reward; feedback: judgment required</sub> | judge score changes for non-semantic reasons |
| [🧨 Spurious rewards](papers/09_audit_failure_contamination_verifier_attacks.md#spurious-rewards) | shortcut rewards, memorization-triggered rewards, and reward signals that correlate with the wrong behavior | [Spurious Rewards](https://arxiv.org/abs/2506.10947) (2025, arXiv) · [Card](cards/verifiers/spurious_rewards.md)<br><sub>data: scalar reward; feedback: programmatic</sub> | the reward signal improves while the model learns a shortcut rather than reasoning |
| [📉 Reproducibility failures](papers/09_audit_failure_contamination_verifier_attacks.md#reproducibility-failures) | decoding, evaluation, scaffold, and data reporting failures | [Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) (2024, OpenAI / SWE-bench report) · [Card](cards/agents/swe-bench-verified.md)<br><sub>data: patch diff applied to a repository plus test execution results.; process: repository,…; feedback: post-patch unit tests plus human filtering of task validity.</sub><br>[AbstentionBench](https://arxiv.org/abs/2506.09038) (2025, arXiv) · [Card](cards/benchmarks/abstentionbench.md)<br><sub>data: model response, abstention decision, and correctness/abstention judgment.; process: s…; feedback: human-validated judges and benchmark labels for abstention scenarios.</sub><br>[HealthBench](https://arxiv.org/abs/2505.08775) (2025, arXiv) · [Card](cards/verifiers/healthbench.md)<br><sub>data: response with rubric/judge evaluation; process: prompt, response, rubric dimension; o…; feedback: rubric-guided expert/LLM judgment</sub> | reported gains disappear under controlled reruns |

### 🧰 Benchmarks & Evaluation

> choosing evaluation surfaces and reusable feedback contracts · [Full track page](papers/10_benchmarks_evaluation.md)

| Subfield | What this subfield studies | Representative papers with official links | Key audit risk |
|---|---|---|---|
| [📐 Math benchmarks](papers/10_benchmarks_evaluation.md#math-benchmarks) | math problem sets, answer extraction, verifier compatibility, and difficulty | [GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168) (2021, arXiv / OpenAI dataset) · [Card](cards/benchmarks/gsm8k-grade-school-math-8k.md)<br><sub>data: natural-language solution with final numeric answer; process: question, solution, fin…; feedback: answer extraction and arithmetic correctness checks</sub><br>[Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874) (2021, NeurIPS Datasets and Benchmarks) · [Card](cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md)<br><sub>data: answer level; feedback: programmatic</sub><br>[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) (2023, arXiv) · [Card](cards/verifiers/prm800k.md)<br><sub>data: step-level labels and final answers; process: step, label, solution trace; offline ma…; feedback: process reward model trained from step labels</sub><br>[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) (2025, arXiv) · [Card](cards/releases/big_math.md)<br><sub>data: math problem, answer, and verification signal; process: problem, answer, verification…; feedback: answer-level math verifier</sub> | short-answer normalization hides reasoning errors |
| [💻 Code benchmarks](papers/10_benchmarks_evaluation.md#code-benchmarks) | coding tasks, generated tests, hidden tests, repair tasks, and live coding | [LiveCodeBench: Holistic and contamination-free evaluation of large language models for code](https://arxiv.org/abs/2403.07974) (2024, arXiv) · [Card](cards/benchmarks/livecodebench.md)<br><sub>data: program submission or code-related output evaluated by tests or task-specific checks.…; feedback: programmatic tests and task-specific correctness checks.</sub><br>[Magicoder: Empowering code generation with OSS-instruct](https://arxiv.org/abs/2312.02120) (2024, ICML) · [Card](cards/recipes/magicoder.md)<br><sub>data: instruction-response coding example, often linked to a code reference or task scaffol…; feedback: coding benchmark pass rates and optional executable checks.</sub><br>[SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168) (2024, NeurIPS Datasets and Benchmarks) · [Card](cards/benchmarks/scicode.md)<br><sub>data: code solution evaluated with scientist-annotated tests or expected outputs.; process:…; feedback: test cases and scientist-curated gold solutions.</sub><br>[Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374) (2021, arXiv) · [Card](cards/benchmarks/evaluating-large-language-models-trained-on-code.md)<br><sub>data: executable Python function.; process: prompt, generated code, unit-test results, samp…; feedback: HumanEval tests and pass@k evaluation.</sub> | unit tests are brittle, leaked, or too narrow |
| [🧾 Proof benchmarks](papers/10_benchmarks_evaluation.md#proof-benchmarks) | formal proof datasets, proof assistants, theorem statements, and checking | [LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) (2023, NeurIPS Datasets and Benchmarks) · [Card](cards/agents/leandojo.md)<br><sub>data: Lean tactic sequence or proof script checked by Lean.; process: repository commit, th…; feedback: Lean checker and environment feedback.</sub><br>[miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110) (2021, ICLR) · [Card](cards/benchmarks/minif2f.md)<br><sub>data: formal proof accepted by a target proof assistant.; process: formal system, theorem s…; feedback: proof assistant kernel/checker acceptance.</sub> | proof checker version and imports are not pinned |
| [🌐 Agent benchmarks](papers/10_benchmarks_evaluation.md#agent-benchmarks) | web, tool, OS, app, and SWE environments with terminal predicates | [Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) (2024, OpenAI / SWE-bench report) · [Card](cards/agents/swe-bench-verified.md)<br><sub>data: patch diff applied to a repository plus test execution results.; process: repository,…; feedback: post-patch unit tests plus human filtering of task validity.</sub><br>[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770) (2023, ICLR) · [Card](cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md)<br><sub>data: full episode; state action level; feedback: environmental, programmatic</sub><br>[Leaky Thoughts](https://arxiv.org/abs/2506.15674) (2025, arXiv) · [Card](cards/failures/leaky-thoughts.md)<br><sub>data: internal reasoning trace, final answer, and leakage/extraction outcome.; process: sen…; feedback: extraction probes and agentic evaluations.</sub><br>[R2E-Gym](https://arxiv.org/abs/2504.07164) (2025, arXiv) · [Card](cards/agents/r2e_gym.md)<br><sub>data: full episode; state action level; feedback: environmental, programmatic</sub> | benchmark episodes cannot be replayed |
| [⚖️ Rubric/domain benchmarks](papers/10_benchmarks_evaluation.md#rubric-domain-benchmarks) | medical, safety, legal, finance, science, factuality, and expert rubrics | [AbstentionBench](https://arxiv.org/abs/2506.09038) (2025, arXiv) · [Card](cards/benchmarks/abstentionbench.md)<br><sub>data: model response, abstention decision, and correctness/abstention judgment.; process: s…; feedback: human-validated judges and benchmark labels for abstention scenarios.</sub><br>[Aegis2.0](https://arxiv.org/abs/2501.09004) (2025, arXiv) · [Card](cards/verifiers/aegis2.md)<br><sub>data: prompt or prompt-response sample with hazard taxonomy labels and safety annotations.;…; feedback: risk labels and guard-model evaluation signal.</sub><br>[GPQA](https://arxiv.org/abs/2311.12022) (2023, arXiv) · [Card](cards/benchmarks/gpqa.md)<br><sub>data: multiple-choice answer with optional rationale and expert label.; process: domain, qu…; feedback: expert-authored answer key and validation protocol.</sub><br>[TruthfulQA](https://arxiv.org/abs/2109.07958) (2022, ACL) · [Card](cards/benchmarks/truthfulqa.md)<br><sub>data: free-form generation or multiple-choice answer with truthfulness and informativeness…; feedback: human references plus automated/human scoring protocols for truthfulness an…</sub> | rubric or judge expertise is insufficiently disclosed |
| [🧪 Reward-model benchmarks](papers/10_benchmarks_evaluation.md#reward-model-benchmarks) | reward model, LLM-judge, PRM, and rubric evaluation suites | [Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535) (2024, EMNLP) · [Card](cards/verifiers/prometheus-2.md)<br><sub>data: rubric-conditioned scalar score, critique, or pairwise preference output.; process: i…; feedback: Prometheus 2 judge output aligned against human/proprietary-judge benchmark…</sub><br>[Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685) (2023, NeurIPS Datasets and Benchmarks) · [Card](cards/verifiers/mt-bench-chatbot-arena.md)<br><sub>data: model response, judge score, pairwise preference, or arena battle outcome.; process:…; feedback: strong model judge and human preference comparisons.</sub><br>[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787) (2024, NeurIPS) · [Card](cards/verifiers/rewardbench.md)<br><sub>data: pairwise or scalar reward decisions; process: prompt, chosen/rejected response, rewar…; feedback: reward model or judge</sub><br>[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794) (2025, arXiv) · [Card](cards/verifiers/one_token_to_fool_judge.md)<br><sub>data: scalar reward; feedback: judgment required</sub> | benchmark reward preference does not reflect downstream training value |
| [🧯 Live / contamination-resistant benchmarks](papers/10_benchmarks_evaluation.md#live-contamination-resistant-benchmarks) | live, refreshed, hidden, or contamination-aware evaluation | [LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314) (2024, arXiv) · [Card](cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)<br><sub>data: answer level; feedback: programmatic, mixed</sub> | static benchmark becomes a training target |

## 🧭 Contents

- 📚 Main Research Tracks
  - 🧭 Surveys & Primers: [Surveys & Primers](papers/00_surveys_and_primers.md)
    - [🧭 Post-training surveys](papers/00_surveys_and_primers.md#post-training-surveys)
    - [🧠 Reasoning LLM surveys](papers/00_surveys_and_primers.md#reasoning-llm-surveys)
    - [📦 Data documentation / datasheets](papers/00_surveys_and_primers.md#data-documentation-datasheets)
    - [🧪 RLHF / reward-model surveys](papers/00_surveys_and_primers.md#rlhf-reward-model-surveys)
    - [🌐 Agent data / tool-use surveys](papers/00_surveys_and_primers.md#agent-data-tool-use-surveys)
    - [🧯 Contamination / evaluation surveys](papers/00_surveys_and_primers.md#contamination-evaluation-surveys)
  - 🧱 Foundations: [Foundations](papers/01_foundations_instruction_preference_alignment.md)
    - [🧱 Instruction tuning / SFT data](papers/01_foundations_instruction_preference_alignment.md#instruction-tuning-sft-data)
    - [🤝 Human preference data / RLHF](papers/01_foundations_instruction_preference_alignment.md#human-preference-data-rlhf)
    - [⚖️ DPO / preference optimization](papers/01_foundations_instruction_preference_alignment.md#dpo-preference-optimization)
    - [🧠 Chain-of-thought / rationale data](papers/01_foundations_instruction_preference_alignment.md#chain-of-thought-rationale-data)
    - [🔁 Self-training / STaR / Self-Instruct](papers/01_foundations_instruction_preference_alignment.md#self-training-star-self-instruct)
    - [🤖 RLAIF / synthetic feedback](papers/01_foundations_instruction_preference_alignment.md#rlaif-synthetic-feedback)
  - 🧮 Programmatic Verification: [Programmatic Verification](papers/02_programmatic_math_code_proof.md)
    - [📐 Math answer-verifiable data](papers/02_programmatic_math_code_proof.md#math-answer-verifiable-data)
    - [🧮 Math RLVR datasets](papers/02_programmatic_math_code_proof.md#math-rlvr-datasets)
    - [💻 Code execution / unit-test data](papers/02_programmatic_math_code_proof.md#code-execution-unit-test-data)
    - [🧾 Formal proof / Lean / theorem proving](papers/02_programmatic_math_code_proof.md#formal-proof-lean-theorem-proving)
    - [🧪 Verifier robustness and answer extraction](papers/02_programmatic_math_code_proof.md#verifier-robustness-and-answer-extraction)
    - [🧰 Programmatic benchmarks](papers/02_programmatic_math_code_proof.md#programmatic-benchmarks)
  - 🪜 Process Supervision & PRMs: [Process Supervision & PRMs](papers/03_process_supervision_prm.md)
    - [🪜 Human step-level labels](papers/03_process_supervision_prm.md#human-step-level-labels)
    - [🧪 Process reward models](papers/03_process_supervision_prm.md#process-reward-models)
    - [🔁 Rollout-value supervision](papers/03_process_supervision_prm.md#rollout-value-supervision)
    - [🛠️ Automatic process supervision](papers/03_process_supervision_prm.md#automatic-process-supervision)
    - [❌ First-error localization](papers/03_process_supervision_prm.md#first-error-localization)
    - [📊 PRM benchmarks and evaluation](papers/03_process_supervision_prm.md#prm-benchmarks-and-evaluation)
  - 🌐 Agent & Environment Data: [Agent & Environment Data](papers/04_environmental_agents_tools_web_swe.md)
    - [🛠️ Tool-use data](papers/04_environmental_agents_tools_web_swe.md#tool-use-data)
    - [🌍 Web/browser agents](papers/04_environmental_agents_tools_web_swe.md#web-browser-agents)
    - [📱 App/mobile agents](papers/04_environmental_agents_tools_web_swe.md#app-mobile-agents)
    - [🖥️ OS/desktop agents](papers/04_environmental_agents_tools_web_swe.md#os-desktop-agents)
    - [🧑‍💻 SWE/repository agents](papers/04_environmental_agents_tools_web_swe.md#swe-repository-agents)
    - [🔁 Replayable trajectory data](papers/04_environmental_agents_tools_web_swe.md#replayable-trajectory-data)
    - [🧰 Agent benchmarks and terminal predicates](papers/04_environmental_agents_tools_web_swe.md#agent-benchmarks-and-terminal-predicates)
  - ⚖️ Judgment-Required Data: [Judgment-Required Data](papers/05_judgment_required_rubrics_safety_domain.md)
    - [⚖️ LLM-as-judge data](papers/05_judgment_required_rubrics_safety_domain.md#llm-as-judge-data)
    - [🧑‍⚖️ Human/expert judgment](papers/05_judgment_required_rubrics_safety_domain.md#human-expert-judgment)
    - [🩺 Medical reasoning / health rubrics](papers/05_judgment_required_rubrics_safety_domain.md#medical-reasoning-health-rubrics)
    - [🛡️ Safety reasoning data](papers/05_judgment_required_rubrics_safety_domain.md#safety-reasoning-data)
    - [🧾 Factuality / grounding](papers/05_judgment_required_rubrics_safety_domain.md#factuality-grounding)
    - [⚖️ Legal reasoning](papers/05_judgment_required_rubrics_safety_domain.md#legal-reasoning)
    - [🏦 Financial reasoning](papers/05_judgment_required_rubrics_safety_domain.md#financial-reasoning)
    - [🧪 Rubric reward models](papers/05_judgment_required_rubrics_safety_domain.md#rubric-reward-models)
  - 🏗️ Construction Recipes: [Construction Recipes](papers/06_construction_recipes_open_reasoning_data.md)
    - [🧱 Prompt sourcing](papers/06_construction_recipes_open_reasoning_data.md#prompt-sourcing)
    - [✍️ Teacher trace generation](papers/06_construction_recipes_open_reasoning_data.md#teacher-trace-generation)
    - [🔎 Rejection sampling / search-generated data](papers/06_construction_recipes_open_reasoning_data.md#rejection-sampling-search-generated-data)
    - [🔁 Self-play / self-improvement](papers/06_construction_recipes_open_reasoning_data.md#self-play-self-improvement)
    - [🧪 Filtering and verifier refresh](papers/06_construction_recipes_open_reasoning_data.md#filtering-and-verifier-refresh)
    - [🏗️ Open reasoning data releases](papers/06_construction_recipes_open_reasoning_data.md#open-reasoning-data-releases)
    - [🧬 Data lineage and release metadata](papers/06_construction_recipes_open_reasoning_data.md#data-lineage-and-release-metadata)
  - 🚀 Frontier Reports: [Frontier Reports](papers/07_frontier_model_reports.md)
    - [🚀 DeepSeek-R1 family](papers/07_frontier_model_reports.md#deepseek-r1-family)
    - [🌙 Kimi reasoning reports](papers/07_frontier_model_reports.md#kimi-reasoning-reports)
    - [🐉 Qwen reasoning/math/code reports](papers/07_frontier_model_reports.md#qwen-reasoning-math-code-reports)
    - [🧠 Magistral / Phi / Nemotron style reports](papers/07_frontier_model_reports.md#magistral-phi-nemotron-style-reports)
    - [🧪 RLVR recipe reports](papers/07_frontier_model_reports.md#rlvr-recipe-reports)
    - [🧬 What is disclosed vs hidden](papers/07_frontier_model_reports.md#what-is-disclosed-vs-hidden)
  - 📈 Scaling & Test-Time Compute: [Scaling & Test-Time Compute](papers/08_scaling_test_time_compute_rlvr.md)
    - [📈 Data scaling](papers/08_scaling_test_time_compute_rlvr.md#data-scaling)
    - [🔁 Data reuse and uniqueness](papers/08_scaling_test_time_compute_rlvr.md#data-reuse-and-uniqueness)
    - [⏱️ Test-time compute](papers/08_scaling_test_time_compute_rlvr.md#test-time-compute)
    - [🎲 pass@k / sampling budget](papers/08_scaling_test_time_compute_rlvr.md#pass-k-sampling-budget)
    - [🧪 Verifier scaling](papers/08_scaling_test_time_compute_rlvr.md#verifier-scaling)
    - [🏋️ RLVR optimization scaling](papers/08_scaling_test_time_compute_rlvr.md#rlvr-optimization-scaling)
    - [🔍 Scaling attribution](papers/08_scaling_test_time_compute_rlvr.md#scaling-attribution)
  - 🧯 Audit & Failure Modes: [Audit & Failure Modes](papers/09_audit_failure_contamination_verifier_attacks.md)
    - [🧯 Benchmark contamination](papers/09_audit_failure_contamination_verifier_attacks.md#benchmark-contamination)
    - [🔍 Search-time contamination](papers/09_audit_failure_contamination_verifier_attacks.md#search-time-contamination)
    - [🧬 Hidden lineage / teacher leakage](papers/09_audit_failure_contamination_verifier_attacks.md#hidden-lineage-teacher-leakage)
    - [🎮 Reward hacking](papers/09_audit_failure_contamination_verifier_attacks.md#reward-hacking)
    - [🧪 Verifier gaming](papers/09_audit_failure_contamination_verifier_attacks.md#verifier-gaming)
    - [⚖️ LLM-as-judge attacks](papers/09_audit_failure_contamination_verifier_attacks.md#llm-as-judge-attacks)
    - [🧨 Spurious rewards](papers/09_audit_failure_contamination_verifier_attacks.md#spurious-rewards)
    - [📉 Reproducibility failures](papers/09_audit_failure_contamination_verifier_attacks.md#reproducibility-failures)
  - 🧰 Benchmarks & Evaluation: [Benchmarks & Evaluation](papers/10_benchmarks_evaluation.md)
    - [📐 Math benchmarks](papers/10_benchmarks_evaluation.md#math-benchmarks)
    - [💻 Code benchmarks](papers/10_benchmarks_evaluation.md#code-benchmarks)
    - [🧾 Proof benchmarks](papers/10_benchmarks_evaluation.md#proof-benchmarks)
    - [🌐 Agent benchmarks](papers/10_benchmarks_evaluation.md#agent-benchmarks)
    - [⚖️ Rubric/domain benchmarks](papers/10_benchmarks_evaluation.md#rubric-domain-benchmarks)
    - [🧪 Reward-model benchmarks](papers/10_benchmarks_evaluation.md#reward-model-benchmarks)
    - [🧯 Live / contamination-resistant benchmarks](papers/10_benchmarks_evaluation.md#live-contamination-resistant-benchmarks)
- 🧩 Browse by Data Object
  - Prompt-answer, trace-answer, step label, rollout value, preference pair, reward record, agent trajectory, rubric record
- 🛠️ Browse by Training Use
  - SFT, distillation, reward modeling, process supervision, RLVR, agent training, evaluation, audit

## 🧩 Browse by Four Views

Post-training reasoning data is multi-axis. A math paper can be a benchmark, an SFT trace release, a PRM source, an RLVR verifier, and a contamination risk at the same time. Use these four views before deciding where a paper belongs.

| View | Question | Examples | Use it when... |
|---|---|---|---|
| 🔍 By feedback contract | Who decides correctness? | programmatic, environmental, judgment-required, mixed | you need to understand the verifier/reward/judge/environment behind a paper. |
| 📦 By data object | What is serialized? | answer, trace, step label, preference pair, reward, trajectory, rubric | you need to compare what the dataset actually stores. |
| 🛠️ By training use | How does it enter post-training? | SFT, distillation, PRM, RM, RLHF, RLVR, agent training, evaluation | you need to map papers to an engineering pipeline. |
| 🧪 By task domain | Where does it operate? | math, code, proof, tools, SWE, web, medical, safety, legal, finance | you need a domain-specific literature route. |

## 🔎 Browse by Research Question

| Research question | Best entry |
|---|---|
| What counts as post-training reasoning data? | [docs/01](docs/01_what_is_post_training_reasoning_data.md) + [Surveys](papers/00_surveys_and_primers.md) |
| How do we verify reasoning data? | [Programmatic](papers/02_programmatic_math_code_proof.md) + [Process supervision](papers/03_process_supervision_prm.md) + [Verifiers](docs/06_verifiers_and_rewards.md) |
| How are open reasoning datasets constructed? | [Construction recipes](papers/06_construction_recipes_open_reasoning_data.md) + [Release cards](cards/releases/) |
| What data does RLVR actually need? | [Programmatic verification](papers/02_programmatic_math_code_proof.md) + [Scaling/RLVR](papers/08_scaling_test_time_compute_rlvr.md) |
| How should agent trajectories be serialized? | [Agent data](papers/04_environmental_agents_tools_web_swe.md) + [docs/07](docs/07_agent_trajectory_data.md) |
| How do frontier reports disclose or hide data recipes? | [Frontier reports](papers/07_frontier_model_reports.md) |
| How do contamination and verifier gaming affect claims? | [Audit/failure modes](papers/09_audit_failure_contamination_verifier_attacks.md) |
| Which benchmarks are still useful for reasoning data? | [Benchmarks and evaluation](papers/10_benchmarks_evaluation.md) |

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
| 🧭 Research Tracks | Browse the field like an Awesome paper atlas | [jump](#-research-track-navigator) |
| 📚 Detailed Paper Directory | Subfield-level paper links with data/feedback hints | [jump](#-detailed-paper-directory) |
| 🧩 Four Views | Feedback contract, data object, training use, and domain | [jump](#-browse-by-four-views) |
| 🔎 Research Questions | Jump from a question to the right paper track | [jump](#-browse-by-research-question) |
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
| 🌱 Roadmap | High-impact priorities for making the atlas more citable | [ROADMAP](ROADMAP.md) |
| 🤝 Contribute | Add papers with metadata, not only links | [CONTRIBUTING](CONTRIBUTING.md) |

## Snapshot Stats

| Metric | Count |
|---|---:|
| Total structured entries | 280 |
| Verified official primary links | 165 |
| Entries with paper/arXiv/venue/DOI links | 165 |
| Unique entry-linked cards | 87 |
| Card files | 89 |
| L5 audit-ready entries | 53 |
| Needs search / metadata | 115 |
| Official code links | 41 |
| Official data links | 27 |
| Hugging Face links | 20 |
| Project links | 25 |

## Start Here

| I want to... | Go to |
|---|---|
| 🧭 understand the field | [docs/00_start_here.md](docs/00_start_here.md) |
| 📚 find papers by subfield | [papers/README.md](papers/README.md) |
| 🧮 study math/code/proof data | [papers/02_programmatic_math_code_proof.md](papers/02_programmatic_math_code_proof.md) |
| 🪜 study process supervision | [papers/03_process_supervision_prm.md](papers/03_process_supervision_prm.md) |
| 🌐 study agent trajectories | [papers/04_environmental_agents_tools_web_swe.md](papers/04_environmental_agents_tools_web_swe.md) |
| 🚀 study frontier model reports | [papers/07_frontier_model_reports.md](papers/07_frontier_model_reports.md) |
| 🔎 use the searchable atlas | [live atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/) |
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
| [ROADMAP.md](ROADMAP.md) | Public priorities for making the atlas more useful, citable, and contribution-friendly. |

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

## 🌱 High-Citation Roadmap

The repository becomes more useful and citable when it improves depth, trust, and reuse rather than raw length. The public roadmap is in [ROADMAP.md](ROADMAP.md).

| Priority | What to improve next | Why it helps readers cite or reuse the atlas |
|---:|---|---|
| P0 | Keep public hygiene clean: no private planning files, prompt/spec artifacts, or local OS metadata. | Readers should see a maintained research resource, not a build workspace. |
| P1 | Promote high-impact `L1_link_verified` entries into `L4_carded` or `L5_audit_ready`. | Deep cards are what make the repo useful beyond a paper list. |
| P1 | Add official code, data, Hugging Face, and project links for already verified papers. | Builders can jump from survey reading to reusable artifacts. |
| P1 | Strengthen thin subfields before adding long-tail seeds. | Researchers can trust the taxonomy as a balanced field map. |
| P2 | Improve bilingual polish and paper-specific citation metadata. | The atlas becomes easier to share in reading groups, surveys, and course notes. |

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

Open [the live atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/) or [docs/index.html](docs/index.html) locally. The site loads generated JSON on hosted pages and includes [docs/assets/atlas-data.js](docs/assets/atlas-data.js) as a local fallback for browsers that block direct JSON loading. It supports search plus filters for year, venue, source role, verification contract, supervision granularity, training use, curation level, status, and artifact availability.

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
