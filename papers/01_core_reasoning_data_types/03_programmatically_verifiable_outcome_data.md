# 🧮 Programmatically Verifiable Outcome Data

> Math answers, code execution, unit tests, proof checkers, symbolic predicates, answer extraction, and verifier robustness studies.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=programmatically_verifiable_outcome_data&mode=find_papers)
> Try: `What should I read first for 🧮 Programmatic Verification?`
> Try: `Compare the data objects and verifier types in 🧮 Programmatic Verification.`
> Try: `Generate an audit checklist for 🧮 Programmatic Verification.`

## 1. What This Track Studies

Use this track for the cleanest verifier-bearing reasoning records: final answers or artifacts checked by code, rules, tests, or formal systems.

Programmatic verification is central to post-training reasoning data because it can turn correctness into a relatively cheap feedback signal. Math answer checkers, code unit tests, compilers, and proof assistants make outcome supervision concrete enough for filtering, rejection sampling, RLVR, benchmark evaluation, and sometimes training rewards.

The clean surface is also dangerous. A model can learn answer-format shortcuts, leaked tests, brittle normalizers, proof-environment quirks, or benchmark-specific patterns. Good curation therefore records not just the dataset name but the verifier, false-positive risks, split policy, and whether the release exposes traces, failed attempts, or only accepted solutions.

This page is the natural assignment for contributors working on math, code, and proof papers, but many of those papers should also be tagged as construction recipes, scaling studies, benchmarks, or frontier disclosures when appropriate.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 📐 Math answer-verifiable data | math problems, final answers, solution traces, and answer checkers | answer extraction and normalization inflate scores |
| 🧮 Math RLVR datasets | math records used for rejection sampling, SFT, PRMs, and RLVR | data reuse and contamination are not reported |
| 💻 Code execution / unit-test data | code problems, unit tests, generated tests, execution logs, and repair tasks | flaky or leaked tests become the reward |
| 🧾 Formal proof / Lean / theorem proving | Lean, proof scripts, tactic environments, theorem statements, and proof checkers | proof succeeds only under an undocumented environment |
| 🧪 Verifier robustness and answer extraction | false positives, false negatives, checker brittleness, and adversarial formats | model learns verifier quirks instead of task skill |
| 🧰 Programmatic benchmarks | evaluation sets whose scoring can become a post-training signal | benchmark scoring is reused as reward without audit |

### Contents

- [📐 Math answer-verifiable data](#math-answer-verifiable-data)
- [🧮 Math RLVR datasets](#math-rlvr-datasets)
- [💻 Code execution / unit-test data](#code-execution-unit-test-data)
- [🧾 Formal proof / Lean / theorem proving](#formal-proof-lean-theorem-proving)
- [🧪 Verifier robustness and answer extraction](#verifier-robustness-and-answer-extraction)
- [🧰 Programmatic benchmarks](#programmatic-benchmarks)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865) | 2026 | [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/sources/agnostics-universal-learning-environment-2026) | Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings. | Programmatic execution verifier that judges behavior rather than language-specific syntax alone. | It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface. |
| [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975) | 2026 | [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/sources/featurebench-2026) | Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories. | Execution-based evaluation protocol using unit tests and repository behavior checks. | It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction. |
| [GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](https://arxiv.org/abs/2505.17653) | 2026 | [Paper](https://arxiv.org/abs/2505.17653) · [DOI](https://doi.org/10.48550/arXiv.2505.17653) · [Code](https://github.com/LiAuto-DSR/GeoGramBench) · [Data](https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench) · [Paper Card Source](../../paper_cards/sources/geogrambench-2026) | Procedural drawing code, geometry question, model answer, and benchmark score.; process: drawing program, geometry abstraction level, question; Programmatic drawing-code representation of geometric diagrams. | Benchmark answer checking over curated geometric reasoning problems. | It broadens Track 03 beyond text math and code execution into symbolic-to-spatial reasoning where programs define the object being verified. |
| [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300) | 2024 | [Paper](https://arxiv.org/abs/2402.03300) · [DOI](https://doi.org/10.48550/arXiv.2402.03300) · [HF](https://huggingface.co/deepseek-ai/deepseek-math-7b-base) · [Paper Card Source](../../paper_cards/sources/deepseekmath-2024) | Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline. | GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation. | High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target. |
| [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/sources/leandojo-2023) | Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit. | Lean proof-environment response and terminal kernel acceptance. | It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it. |
| [MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](https://arxiv.org/abs/2109.00110) | 2022 | [Paper](https://arxiv.org/abs/2109.00110) · [Venue](https://openreview.net/forum?id=9ZPegFuFTFv) · [DOI](https://doi.org/10.48550/arXiv.2109.00110) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-2022) | Formal theorem statement, target proof-assistant language, candidate proof script, and checker verdict.; process: source problem, formal statement, proof assistant; Metamath, Lean, Isabelle, and HOL Light formal proof environments. | Native proof-assistant kernel/checker acceptance. | It separates rigorous proof checking from ordinary answer matching while exposing environment-version and formalization risks. |
| [Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938) | 2021 | [Paper](https://arxiv.org/abs/2105.09938) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html) · [DOI](https://doi.org/10.48550/arXiv.2105.09938) · [Code](https://github.com/hendrycks/apps) · [HF](https://huggingface.co/datasets/codeparrot/apps) · [Paper Card Source](../../paper_cards/sources/apps-2021) | Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases. | Functional correctness under test execution. | It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite. |
| [Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874) | 2021 | [Paper](https://arxiv.org/abs/2103.03874) · [Venue](https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html) · [DOI](https://doi.org/10.48550/arXiv.2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/sources/math-dataset-2021) | Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficulty, full solution; Dataset loader and evaluation scripts distributed with the official repository. | Extracted final-answer matching with task-specific normalization. | It establishes the central trade-off for math outcome data: inexpensive final-answer supervision is useful only when extraction, equivalence, and contamination are audited. |
| [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](https://arxiv.org/abs/2509.24210) | 2026 | [Paper](https://arxiv.org/abs/2509.24210) · [DOI](https://doi.org/10.48550/arXiv.2509.24210) · [Code](https://github.com/ctrl-gaurav/BeyondBench) · [Project](https://ctrl-gaurav.github.io/BeyondBench/) · [Paper Card Source](../../paper_cards/sources/beyondbench-2026) | Generated problem instance, model answer, and deterministic solution check.; process: task family, generator parameters, difficulty suite; Algorithmic problem generators and deterministic verifiers. | Mathematical/programmatic verifier with large combinatorial instance spaces. | It is a clean 03-direction candidate because the benchmark is built around generated instances, deterministic answer checks, and explicit contamination-resistance claims. |
| [Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](https://arxiv.org/abs/2604.10182) | 2026 | [Paper](https://arxiv.org/abs/2604.10182) · [DOI](https://doi.org/10.48550/arXiv.2604.10182) · [Paper Card Source](../../paper_cards/sources/credit-budgeted-icpc-style-coding-2026) | Coding problem, generated solution, local-test decisions, token/time/test spending, and accepted/rejected outcome.; process: token budget, test budget, elapsed time; USACOArena interactive ACM-ICPC-style coding arena. | Programmatic coding judge plus explicit credit economy over tokens, tests, and time. | It expands Track 03 from pure correctness to correctness under resource budgets, which is closer to real agent deployment and test-time compute accounting. |

## 5. Full Paper List

### <a id="math-answer-verifiable-data"></a>📐 Math answer-verifiable data

- 📈 **[Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](https://arxiv.org/abs/2312.06585)**
  <sub>2024 · TMLR 2024 · 📈 scaling study · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.06585) · [DOI](https://doi.org/10.48550/arXiv.2312.06585) · [Paper Card Source](../../paper_cards/sources/rest-em-self-training-2024)
  _Data object:_ Prompt, generated sample, binary feedback result, filtered training example, and iteration number.; process: self-training round, sampled solution, binary verifier result; Expectation-maximization self-training loop over verifiable problem-solving tasks.
  _Feedback / verifier:_ Binary correctness feedback from answer checks or execution-style evaluators.
  _Recipe signal:_ teacher: Scalar feedback from verifiable math/code tasks.; generator: Current policy samples candidate solutions each ReST-EM round.
  _Audit focus:_ Filtered data may become repetitive., Verifier errors are amplified across rounds., Data reuse counts can be mistaken for new unique data.
  _Why it matters:_ Strong self-training scaling paper for data reuse, scalar feedback filtering, and verifier-mediated synthetic data generation.
- 🧰 **[Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS 2021 Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · sft · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Venue](https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html) · [DOI](https://doi.org/10.48550/arXiv.2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/sources/math-dataset-2021)
  _Data object:_ Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficulty, full solution; Dataset loader and evaluation scripts distributed with the official repository.
  _Feedback / verifier:_ Extracted final-answer matching with task-specific normalization.
  _Recipe signal:_ teacher: Curated source solutions and the AMPS auxiliary mathematics corpus.; generator: Human-authored competition problems and solutions.
  _Audit focus:_ Final-answer extraction can reject an otherwise correct derivation., Equivalent symbolic forms can be mishandled by brittle normalization., Public solutions create benchmark-contamination risk.
  _Why it matters:_ It establishes the central trade-off for math outcome data: inexpensive final-answer supervision is useful only when extraction, equivalence, and contamination are audited.

### <a id="math-rlvr-datasets"></a>🧮 Math RLVR datasets

- 📦 **[DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 📦 data release · 📈 scaling study · programmatic · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [DOI](https://doi.org/10.48550/arXiv.2402.03300) · [HF](https://huggingface.co/deepseek-ai/deepseek-math-7b-base) · [Paper Card Source](../../paper_cards/sources/deepseekmath-2024)
  _Data object:_ Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline.
  _Feedback / verifier:_ GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation.
  _Recipe signal:_ teacher: Math corpus filters, instruction examples, and benchmark answer supervision.; generator: DeepSeekMath-Instruct/RL models generate solutions.
  _Audit focus:_ Web data filtering may preserve benchmark leakage., GRPO gains can be confused with data-scale gains., Self-consistency improves scores but costs 64 samples.
  _Why it matters:_ High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target.

### <a id="code-execution-unit-test-data"></a>💻 Code execution / unit-test data

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

### <a id="formal-proof-lean-theorem-proving"></a>🧾 Formal proof / Lean / theorem proving

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

### <a id="verifier-robustness-and-answer-extraction"></a>🧪 Verifier robustness and answer extraction

- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

### <a id="programmatic-benchmarks"></a>🧰 Programmatic benchmarks

- 🧰 **[BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](https://arxiv.org/abs/2509.24210)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2509.24210) · [DOI](https://doi.org/10.48550/arXiv.2509.24210) · [Code](https://github.com/ctrl-gaurav/BeyondBench) · [Project](https://ctrl-gaurav.github.io/BeyondBench/) · [Paper Card Source](../../paper_cards/sources/beyondbench-2026)
  _Data object:_ Generated problem instance, model answer, and deterministic solution check.; process: task family, generator parameters, difficulty suite; Algorithmic problem generators and deterministic verifiers.
  _Feedback / verifier:_ Mathematical/programmatic verifier with large combinatorial instance spaces.
  _Recipe signal:_ teacher: Algorithmic task definitions and mathematical solution procedures.; generator: Problem generators produce fresh instances from large combinatorial spaces.
  _Audit focus:_ Generator bugs can invalidate deterministic guarantees., Models may exploit task templates if generators are exposed., Tool-use settings can dominate reasoning comparisons.
  _Why it matters:_ It is a clean 03-direction candidate because the benchmark is built around generated instances, deterministic answer checks, and explicit contamination-resistance claims.
- 🧰 **[FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/sources/featurebench-2026)
  _Data object:_ Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories.
  _Feedback / verifier:_ Execution-based evaluation protocol using unit tests and repository behavior checks.
  _Recipe signal:_ teacher: Repository history and unit tests provide task construction signals.; generator: Automated task collection toolkit traces from tests along dependency graphs.
  _Audit focus:_ Unit tests may underspecify the intended feature., Repository tasks may be contaminated through public code., Feature extraction can break hidden dependencies.
  _Why it matters:_ It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction.
- 🧰 **[GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](https://arxiv.org/abs/2505.17653)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.17653) · [DOI](https://doi.org/10.48550/arXiv.2505.17653) · [Code](https://github.com/LiAuto-DSR/GeoGramBench) · [Data](https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench) · [Paper Card Source](../../paper_cards/sources/geogrambench-2026)
  _Data object:_ Procedural drawing code, geometry question, model answer, and benchmark score.; process: drawing program, geometry abstraction level, question; Programmatic drawing-code representation of geometric diagrams.
  _Feedback / verifier:_ Benchmark answer checking over curated geometric reasoning problems.
  _Recipe signal:_ teacher: Curated geometric program reasoning tasks and taxonomy.; generator: Benchmark construction pipeline creates program-to-geometry problems.
  _Audit focus:_ Answer checking may hide ambiguity in spatial interpretation., Procedural code can encode visual assumptions not captured by text., Sampling and long-response settings affect reported pass rates.
  _Why it matters:_ It broadens Track 03 beyond text math and code execution into symbolic-to-spatial reasoning where programs define the object being verified.

## 6. What to Audit

- Is the answer normalizer, unit-test harness, proof checker, or execution environment reproducible?
- Are false positives, false negatives, and formatting shortcuts discussed?
- Are train/test split and contamination checks visible?

## 7. Open Problems

- How should math releases expose answer normalizers and edge cases?
- Can public code benchmarks remain useful once they become training signals?
- What metadata is needed to replay proof-checking environments?
- How should accepted and rejected programmatic rollouts be released?

## 8. Related Paper-Card Sources

- [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
- [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](../../paper_cards/sources/beyondbench-2026)
- [Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](../../paper_cards/sources/credit-budgeted-icpc-style-coding-2026)
- [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](../../paper_cards/sources/featurebench-2026)
- [GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](../../paper_cards/sources/geogrambench-2026)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](../../paper_cards/sources/rest-em-self-training-2024)
- [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](../../paper_cards/sources/deepseekmath-2024)
- [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](../../paper_cards/sources/leandojo-2023)
- [CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](../../paper_cards/sources/coderl-code-generation-rl-2022)
- [MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](../../paper_cards/sources/minif2f-2022)
- [Measuring Coding Challenge Competence With APPS](../../paper_cards/sources/apps-2021)
- [Measuring Mathematical Problem Solving With the MATH Dataset](../../paper_cards/sources/math-dataset-2021)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
