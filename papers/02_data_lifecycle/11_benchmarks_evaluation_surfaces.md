# 🧰 Benchmarks and Evaluation Surfaces

> Math, code, proof, agent, rubric/domain, reward-model, live, hidden, and contamination-resistant benchmarks.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=benchmarks_evaluation_surfaces&mode=find_papers)
> Try: `What should I read first for 🧰 Benchmarks & Evaluation?`
> Try: `Compare the data objects and verifier types in 🧰 Benchmarks & Evaluation.`
> Try: `Generate an audit checklist for 🧰 Benchmarks & Evaluation.`

## 1. What This Track Studies

Use this track to understand what an evaluation surface measures and whether it can safely become a feedback source.

Benchmarks are not just scoreboards. In post-training reasoning, a benchmark can become a verifier, a filtering tool, a reward source, a test-time selection criterion, or a contamination risk. This track organizes evaluation surfaces by feedback contract and audit risk.

A good benchmark page should identify whether scoring is programmatic, environmental, judgment-required, mixed, live, hidden, or expert-driven. It should also state what happens if the benchmark becomes part of training data or public prompt pools.

For contributors, the goal is to make benchmark entries useful to builders: what can be scored, what can leak, what can be replayed, and what should not be reused as reward without extra checks.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 📐 Math benchmarks | math problem sets, answer extraction, verifier compatibility, and difficulty | short-answer normalization hides reasoning errors |
| 💻 Code benchmarks | coding tasks, generated tests, hidden tests, repair tasks, and live coding | unit tests are brittle, leaked, or too narrow |
| 🧾 Proof benchmarks | formal proof datasets, proof assistants, theorem statements, and checking | proof checker version and imports are not pinned |
| 🌐 Agent benchmarks | web, tool, OS, app, and SWE environments with terminal predicates | benchmark episodes cannot be replayed |
| ⚖️ Rubric/domain benchmarks | medical, safety, legal, finance, science, factuality, and expert rubrics | rubric or judge expertise is insufficiently disclosed |
| 🧪 Reward-model benchmarks | reward model, LLM-judge, PRM, and rubric evaluation suites | benchmark reward preference does not reflect training value |
| 🧯 Live / contamination-resistant benchmarks | live, refreshed, hidden, or contamination-aware evaluation | static benchmark becomes a training target |

### Contents

- [📐 Math benchmarks](#math-benchmarks)
- [💻 Code benchmarks](#code-benchmarks)
- [🧾 Proof benchmarks](#proof-benchmarks)
- [🌐 Agent benchmarks](#agent-benchmarks)
- [⚖️ Rubric/domain benchmarks](#rubric-domain-benchmarks)
- [🧪 Reward-model benchmarks](#reward-model-benchmarks)
- [🧯 Live / contamination-resistant benchmarks](#live-contamination-resistant-benchmarks)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865) | 2026 | [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/sources/agnostics-universal-learning-environment-2026) | Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings. | Programmatic execution verifier that judges behavior rather than language-specific syntax alone. | It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface. |
| [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975) | 2026 | [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/sources/featurebench-2026) | Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories. | Execution-based evaluation protocol using unit tests and repository behavior checks. | It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction. |
| [GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](https://arxiv.org/abs/2505.17653) | 2026 | [Paper](https://arxiv.org/abs/2505.17653) · [DOI](https://doi.org/10.48550/arXiv.2505.17653) · [Code](https://github.com/LiAuto-DSR/GeoGramBench) · [Data](https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench) · [Paper Card Source](../../paper_cards/sources/geogrambench-2026) | Procedural drawing code, geometry question, model answer, and benchmark score.; process: drawing program, geometry abstraction level, question; Programmatic drawing-code representation of geometric diagrams. | Benchmark answer checking over curated geometric reasoning problems. | It broadens Track 03 beyond text math and code execution into symbolic-to-spatial reasoning where programs define the object being verified. |
| [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/sources/leandojo-2023) | Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit. | Lean proof-environment response and terminal kernel acceptance. | It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it. |
| [MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](https://arxiv.org/abs/2109.00110) | 2022 | [Paper](https://arxiv.org/abs/2109.00110) · [Venue](https://openreview.net/forum?id=9ZPegFuFTFv) · [DOI](https://doi.org/10.48550/arXiv.2109.00110) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-2022) | Formal theorem statement, target proof-assistant language, candidate proof script, and checker verdict.; process: source problem, formal statement, proof assistant; Metamath, Lean, Isabelle, and HOL Light formal proof environments. | Native proof-assistant kernel/checker acceptance. | It separates rigorous proof checking from ordinary answer matching while exposing environment-version and formalization risks. |
| [Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938) | 2021 | [Paper](https://arxiv.org/abs/2105.09938) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html) · [DOI](https://doi.org/10.48550/arXiv.2105.09938) · [Code](https://github.com/hendrycks/apps) · [HF](https://huggingface.co/datasets/codeparrot/apps) · [Paper Card Source](../../paper_cards/sources/apps-2021) | Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases. | Functional correctness under test execution. | It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite. |
| [Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874) | 2021 | [Paper](https://arxiv.org/abs/2103.03874) · [Venue](https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html) · [DOI](https://doi.org/10.48550/arXiv.2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/sources/math-dataset-2021) | Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficulty, full solution; Dataset loader and evaluation scripts distributed with the official repository. | Extracted final-answer matching with task-specific normalization. | It establishes the central trade-off for math outcome data: inexpensive final-answer supervision is useful only when extraction, equivalence, and contamination are audited. |
| [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](https://arxiv.org/abs/2509.24210) | 2026 | [Paper](https://arxiv.org/abs/2509.24210) · [DOI](https://doi.org/10.48550/arXiv.2509.24210) · [Code](https://github.com/ctrl-gaurav/BeyondBench) · [Project](https://ctrl-gaurav.github.io/BeyondBench/) · [Paper Card Source](../../paper_cards/sources/beyondbench-2026) | Generated problem instance, model answer, and deterministic solution check.; process: task family, generator parameters, difficulty suite; Algorithmic problem generators and deterministic verifiers. | Mathematical/programmatic verifier with large combinatorial instance spaces. | It is a clean 03-direction candidate because the benchmark is built around generated instances, deterministic answer checks, and explicit contamination-resistance claims. |
| [Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](https://arxiv.org/abs/2604.10182) | 2026 | [Paper](https://arxiv.org/abs/2604.10182) · [DOI](https://doi.org/10.48550/arXiv.2604.10182) · [Paper Card Source](../../paper_cards/sources/credit-budgeted-icpc-style-coding-2026) | Coding problem, generated solution, local-test decisions, token/time/test spending, and accepted/rejected outcome.; process: token budget, test budget, elapsed time; USACOArena interactive ACM-ICPC-style coding arena. | Programmatic coding judge plus explicit credit economy over tokens, tests, and time. | It expands Track 03 from pure correctness to correctness under resource budgets, which is closer to real agent deployment and test-time compute accounting. |
| [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314) | 2024 | [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024) | Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks. | Dense process-based verifier reward models plus answer-level evaluation. | Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution. |

## 5. Full Paper List

### <a id="math-benchmarks"></a>📐 Math benchmarks

- 🧰 **[GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](https://arxiv.org/abs/2505.17653)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.17653) · [DOI](https://doi.org/10.48550/arXiv.2505.17653) · [Code](https://github.com/LiAuto-DSR/GeoGramBench) · [Data](https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench) · [Paper Card Source](../../paper_cards/sources/geogrambench-2026)
  _Data object:_ Procedural drawing code, geometry question, model answer, and benchmark score.; process: drawing program, geometry abstraction level, question; Programmatic drawing-code representation of geometric diagrams.
  _Feedback / verifier:_ Benchmark answer checking over curated geometric reasoning problems.
  _Recipe signal:_ teacher: Curated geometric program reasoning tasks and taxonomy.; generator: Benchmark construction pipeline creates program-to-geometry problems.
  _Audit focus:_ Answer checking may hide ambiguity in spatial interpretation., Procedural code can encode visual assumptions not captured by text., Sampling and long-response settings affect reported pass rates.
  _Why it matters:_ It broadens Track 03 beyond text math and code execution into symbolic-to-spatial reasoning where programs define the object being verified.
- 📈 **[Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314)**
  <sub>2024 · arXiv · 📈 scaling study · 🧪 verifier reward · mixed · judgment required · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024)
  _Data object:_ Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks.
  _Feedback / verifier:_ Dense process-based verifier reward models plus answer-level evaluation.
  _Recipe signal:_ teacher: Benchmark answers and trained verifier reward models provide selection signal.; generator: Policy model generates multiple candidate traces under a budget.
  _Audit focus:_ Verifier quality can dominate the measured scaling curve., Difficulty estimation can leak benchmark-specific assumptions., More samples can be mistaken for more unique data.
  _Why it matters:_ Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution.
- 📈 **[Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR 2023 · 📈 scaling study · 🏗️ construction recipe · judgment required · mixed · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [DOI](https://doi.org/10.48550/arXiv.2203.11171) · [Paper Card Source](../../paper_cards/sources/self-consistency-chain-of-thought-2023)
  _Data object:_ Prompt, sampled reasoning paths, extracted answers, vote distribution, and selected final answer.; process: sample index, chain-of-thought path, answer extraction; Repeated inference sampling over answer-verifiable and judgment-required reasoning tasks.
  _Feedback / verifier:_ Answer agreement and final-answer checking act as an implicit verifier.
  _Recipe signal:_ teacher: Few-shot chain-of-thought exemplars and benchmark answer keys.; generator: Policy model generates diverse traces at inference time.
  _Audit focus:_ More samples can hide answer-extraction bias., Majority vote can amplify a common wrong shortcut., Sampling budget may be incomparable across papers.
  _Why it matters:_ Top-conference paper that turns repeated sampled reasoning paths into a simple test-time compute scaling primitive.
- 🧰 **[Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS 2021 Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · sft · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Venue](https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html) · [DOI](https://doi.org/10.48550/arXiv.2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/sources/math-dataset-2021)
  _Data object:_ Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficulty, full solution; Dataset loader and evaluation scripts distributed with the official repository.
  _Feedback / verifier:_ Extracted final-answer matching with task-specific normalization.
  _Recipe signal:_ teacher: Curated source solutions and the AMPS auxiliary mathematics corpus.; generator: Human-authored competition problems and solutions.
  _Audit focus:_ Final-answer extraction can reject an otherwise correct derivation., Equivalent symbolic forms can be mishandled by brittle normalization., Public solutions create benchmark-contamination risk.
  _Why it matters:_ It establishes the central trade-off for math outcome data: inexpensive final-answer supervision is useful only when extraction, equivalence, and contamination are audited.

### <a id="code-benchmarks"></a>💻 Code benchmarks

- 📦 **[Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865)**
  <sub>2026 · ICLR 2026 · 📦 data release · 🧪 verifier reward · programmatic · environmental · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
  _Data object:_ Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings.
  _Feedback / verifier:_ Programmatic execution verifier that judges behavior rather than language-specific syntax alone.
  _Recipe signal:_ teacher: LLM rewrite pipeline for adapting coding datasets into I/O tasks.; generator: RLVR policy model emits target-language code.
  _Audit focus:_ I/O-only tests may miss semantic edge cases., Verifier containers can encode language-specific quirks., Dataset rewriting can change task intent.
  _Why it matters:_ It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface.
- 🧰 **[Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](https://arxiv.org/abs/2604.10182)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2604.10182) · [DOI](https://doi.org/10.48550/arXiv.2604.10182) · [Paper Card Source](../../paper_cards/sources/credit-budgeted-icpc-style-coding-2026)
  _Data object:_ Coding problem, generated solution, local-test decisions, token/time/test spending, and accepted/rejected outcome.; process: token budget, test budget, elapsed time; USACOArena interactive ACM-ICPC-style coding arena.
  _Feedback / verifier:_ Programmatic coding judge plus explicit credit economy over tokens, tests, and time.
  _Recipe signal:_ teacher: ICPC-style problem set and judge outcomes.; generator: Agents generate code and decide when to test or submit.
  _Audit focus:_ Budget settings can dominate model ranking., Local tests can be gamed or overused., Public programming problems can be contaminated.
  _Why it matters:_ It expands Track 03 from pure correctness to correctness under resource budgets, which is closer to real agent deployment and test-time compute accounting.
- 🧰 **[FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/sources/featurebench-2026)
  _Data object:_ Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories.
  _Feedback / verifier:_ Execution-based evaluation protocol using unit tests and repository behavior checks.
  _Recipe signal:_ teacher: Repository history and unit tests provide task construction signals.; generator: Automated task collection toolkit traces from tests along dependency graphs.
  _Audit focus:_ Unit tests may underspecify the intended feature., Repository tasks may be contaminated through public code., Feature extraction can break hidden dependencies.
  _Why it matters:_ It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction.
- 🧪 **[CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](https://arxiv.org/abs/2207.01780)**
  <sub>2022 · NeurIPS 2022 · 🧪 verifier reward · 🏗️ construction recipe · programmatic · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2207.01780) · [DOI](https://doi.org/10.48550/arXiv.2207.01780) · [Paper Card Source](../../paper_cards/sources/coderl-code-generation-rl-2022)
  _Data object:_ Problem, generated program, unit-test feedback, critic score, and final selected code.; process: problem statement, candidate program, unit-test result; Program execution and unit-test evaluation environment.
  _Feedback / verifier:_ Unit tests and a critic trained to predict functional correctness.
  _Recipe signal:_ teacher: Ground-truth programs, unit tests, and functional correctness signals.; generator: Actor model generates code and can regenerate using feedback.
  _Audit focus:_ Unit tests can be incomplete or overfit., Critic scores may reward test-passing shortcuts., Inference regeneration budget changes pass@k comparability.
  _Why it matters:_ Top-conference code RL paper that connects programmatic verifiers, learned critics, RL optimization, and inference-time resampling.
- 🧰 **[Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938)**
  <sub>2021 · NeurIPS 2021 Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · environmental · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2105.09938) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html) · [DOI](https://doi.org/10.48550/arXiv.2105.09938) · [Code](https://github.com/hendrycks/apps) · [HF](https://huggingface.co/datasets/codeparrot/apps) · [Paper Card Source](../../paper_cards/sources/apps-2021)
  _Data object:_ Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases.
  _Feedback / verifier:_ Functional correctness under test execution.
  _Recipe signal:_ teacher: Reference programs and tests.; generator: Curated coding-challenge tasks and downstream code-generation policies.
  _Audit focus:_ Tests can under-specify intended behavior., Public or leaked tests reward benchmark memorization., Sandbox and dependency differences can make execution non-reproducible.
  _Why it matters:_ It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite.

### <a id="proof-benchmarks"></a>🧾 Proof benchmarks

- 📦 **[LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS 2023 Datasets and Benchmarks · 📦 data release · 🧰 benchmark · programmatic · environmental · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/sources/leandojo-2023)
  _Data object:_ Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit.
  _Feedback / verifier:_ Lean proof-environment response and terminal kernel acceptance.
  _Recipe signal:_ teacher: Human-written mathlib proofs and premise-use annotations.; generator: The tactic model interacts with Lean and retrieves accessible premises.
  _Audit focus:_ Mismatched Lean, mathlib, or import versions change checker behavior., Proof-environment wrappers can misjudge valid proofs., Retrieval can mask memorization unless premise-aware splits are used.
  _Why it matters:_ It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it.
- 🧰 **[MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](https://arxiv.org/abs/2109.00110)**
  <sub>2022 · ICLR 2022 · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2109.00110) · [Venue](https://openreview.net/forum?id=9ZPegFuFTFv) · [DOI](https://doi.org/10.48550/arXiv.2109.00110) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-2022)
  _Data object:_ Formal theorem statement, target proof-assistant language, candidate proof script, and checker verdict.; process: source problem, formal statement, proof assistant; Metamath, Lean, Isabelle, and HOL Light formal proof environments.
  _Feedback / verifier:_ Native proof-assistant kernel/checker acceptance.
  _Recipe signal:_ teacher: Human formalizations and formal-system proof obligations.; generator: Neural theorem prover proposes proof steps or scripts.
  _Audit focus:_ A proof can depend on undocumented imports or library versions., Formalization choices can change the difficulty of the original problem., Kernel success does not validate an informal translation's faithfulness.
  _Why it matters:_ It separates rigorous proof checking from ordinary answer matching while exposing environment-version and formalization risks.

### <a id="agent-benchmarks"></a>🌐 Agent benchmarks

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="rubric-domain-benchmarks"></a>⚖️ Rubric/domain benchmarks

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="reward-model-benchmarks"></a>🧪 Reward-model benchmarks

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="live-contamination-resistant-benchmarks"></a>🧯 Live / contamination-resistant benchmarks

- 🧰 **[BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](https://arxiv.org/abs/2509.24210)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2509.24210) · [DOI](https://doi.org/10.48550/arXiv.2509.24210) · [Code](https://github.com/ctrl-gaurav/BeyondBench) · [Project](https://ctrl-gaurav.github.io/BeyondBench/) · [Paper Card Source](../../paper_cards/sources/beyondbench-2026)
  _Data object:_ Generated problem instance, model answer, and deterministic solution check.; process: task family, generator parameters, difficulty suite; Algorithmic problem generators and deterministic verifiers.
  _Feedback / verifier:_ Mathematical/programmatic verifier with large combinatorial instance spaces.
  _Recipe signal:_ teacher: Algorithmic task definitions and mathematical solution procedures.; generator: Problem generators produce fresh instances from large combinatorial spaces.
  _Audit focus:_ Generator bugs can invalidate deterministic guarantees., Models may exploit task templates if generators are exposed., Tool-use settings can dominate reasoning comparisons.
  _Why it matters:_ It is a clean 03-direction candidate because the benchmark is built around generated instances, deterministic answer checks, and explicit contamination-resistance claims.

### <a id="other-related-work"></a>Other related work

- 📈 **[Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601)**
  <sub>2023 · NeurIPS 2023 · 📈 scaling study · 🏗️ construction recipe · judgment required · mixed · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.10601) · [DOI](https://doi.org/10.48550/arXiv.2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm) · [Paper Card Source](../../paper_cards/sources/tree-of-thoughts-2023)
  _Data object:_ Problem, intermediate thought states, branch scores, search actions, and final solution.; process: thought node, branch candidates, state evaluation; Explicit tree search over language-model thought units.
  _Feedback / verifier:_ Self-evaluation, task-specific checks, and final outcome scoring.
  _Recipe signal:_ teacher: Task instructions and final evaluators.; generator: Policy model expands tree nodes into candidate thoughts.
  _Audit focus:_ Value estimates may be prompt-sensitive., Search budget can dominate model ranking., Small task suites can overfit scaffolds.
  _Why it matters:_ Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects.

## 6. What to Audit

- What does the benchmark measure and what feedback can it support?
- Is scoring objective, human-judged, LLM-judged, or mixed?
- How does the benchmark handle refresh, contamination, and hidden tests?

## 7. Open Problems

- Which benchmarks are still useful after becoming public training targets?
- How should live benchmarks expose enough information for trust without leaking answers?
- Can reward-model and PRM benchmarks predict downstream training value?
- How should agent benchmarks standardize replay metadata?

## 8. Related Paper-Card Sources

- [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
- [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](../../paper_cards/sources/beyondbench-2026)
- [Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](../../paper_cards/sources/credit-budgeted-icpc-style-coding-2026)
- [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](../../paper_cards/sources/featurebench-2026)
- [GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](../../paper_cards/sources/geogrambench-2026)
- [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024)
- [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](../../paper_cards/sources/leandojo-2023)
- [Self-Consistency Improves Chain of Thought Reasoning in Language Models](../../paper_cards/sources/self-consistency-chain-of-thought-2023)
- [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](../../paper_cards/sources/tree-of-thoughts-2023)
- [CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](../../paper_cards/sources/coderl-code-generation-rl-2022)
- [MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](../../paper_cards/sources/minif2f-2022)
- [Measuring Coding Challenge Competence With APPS](../../paper_cards/sources/apps-2021)
- [Measuring Mathematical Problem Solving With the MATH Dataset](../../paper_cards/sources/math-dataset-2021)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
