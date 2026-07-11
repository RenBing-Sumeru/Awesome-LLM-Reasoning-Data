# 🧮 Programmatically Verifiable Outcome Data

> Math answers, code execution, unit tests, proof checkers, symbolic predicates, answer extraction, and verifier robustness studies.

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
| [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975) | 2026 | [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/library/cards/featurebench-2026/sources) | Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories. | Execution-based evaluation protocol using unit tests and repository behavior checks. | It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction. |
| [FormalProofBench: Can Models Write Graduate Level Math Proofs That Are Formally Verified?](https://arxiv.org/abs/2603.26996) | 2026 | [Paper](https://arxiv.org/abs/2603.26996) · [Paper Card Source](../../paper_cards/library/cards/formalproofbench-2026/sources) | Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; A model receives a formal theorem and its imported context, writes a Lean proof, and the benchmark records compilation success or failure from Lean 4. | Lean 4 kernel acceptance of a submitted proof | It exposes Lean 4 kernel acceptance of a submitted proof as a reusable, auditable outcome contract. |
| [GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](https://arxiv.org/abs/2505.17653) | 2026 | [Paper](https://arxiv.org/abs/2505.17653) · [DOI](https://doi.org/10.48550/arXiv.2505.17653) · [Code](https://github.com/LiAuto-DSR/GeoGramBench) · [Data](https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench) · [Paper Card Source](../../paper_cards/library/cards/geogrambench-2026/sources) | Procedural drawing code, geometry question, model answer, and benchmark score.; process: drawing program, geometry abstraction level, question; Programmatic drawing-code representation of geometric diagrams. | Benchmark answer checking over curated geometric reasoning problems. | It broadens Track 03 beyond text math and code execution into symbolic-to-spatial reasoning where programs define the object being verified. |
| [Neural Theorem Proving for Verification Conditions: A Real-World Benchmark](https://arxiv.org/abs/2601.18944) | 2026 | [Paper](https://arxiv.org/abs/2601.18944) · [Paper Card Source](../../paper_cards/library/cards/ntp4vc-2026/sources) | Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; The benchmark presents a verification condition with its target-language context, a model synthesizes a proof, and Isabelle, Lean, or Rocq decides whether that proof is accepted. | Isabelle, Lean, and Rocq proof-checker acceptance for verification conditions | It exposes Isabelle, Lean, and Rocq proof-checker acceptance for verification conditions as a reusable, auditable outcome contract. |
| [VeriSoftBench: Repository-Scale Formal Verification Benchmarks for Lean](https://arxiv.org/abs/2602.18307) | 2026 | [Paper](https://arxiv.org/abs/2602.18307) · [Paper Card Source](../../paper_cards/library/cards/verisoftbench-2026/sources) | Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; For each obligation, the system supplies the checked-out Lean repository context; a model proposes proof code and Lean 4 type-checking supplies the terminal verdict. | Lean 4 type checker on repository-context proof obligations | It exposes Lean 4 type checker on repository-context proof obligations as a reusable, auditable outcome contract. |
| [Learning to Generate Unit Test via Adversarial Reinforcement Learning](https://openreview.net/forum?id=VqjNYF9nbP) | 2025 | [Paper](https://openreview.net/forum?id=VqjNYF9nbP) · [Paper Card Source](../../paper_cards/library/cards/utrl-unit-test-adversarial-rl-2025/sources) | Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; The policy generates a unit test, runs it against candidate programs in a sandbox, receives pass/fail and discrimination outcomes, and updates the test generator with the adversarial reward. | Executable unit-test pass/fail and discrimination rewards | It exposes Executable unit-test pass/fail and discrimination rewards as a reusable, auditable outcome contract. |
| [MCPMark: A Benchmark for Stress-Testing Realistic and Comprehensive MCP Use](https://arxiv.org/abs/2509.24002) | 2025 | [Paper](https://arxiv.org/abs/2509.24002) · [Paper Card Source](../../paper_cards/library/cards/mcpmark-2025/sources) | Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; An agent invokes MCP tools across the configured servers; after the trajectory, a task-specific program examines the resulting state and returns success or failure. | Task-specific programmatic scripts check final state across MCP tool environments | It exposes Task-specific programmatic scripts check final state across MCP tool environments as a reusable, auditable outcome contract. |
| [RECODE-H: A Benchmark for Research Code Development with Interactive Human Feedback](https://openreview.net/forum?id=IKnuyyPHCV) | 2025 | [Paper](https://openreview.net/forum?id=IKnuyyPHCV) · [Paper Card Source](../../paper_cards/library/cards/recode-h-2025/sources) | Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; An agent reads a paper/repository task, edits the project through iterative feedback, and the released unit-test environment evaluates whether the final implementation completes the task. | Repository unit tests decide executable research-code task completion | It exposes Repository unit tests decide executable research-code task completion as a reusable, auditable outcome contract. |
| [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/library/cards/leandojo-2023/sources) | Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit. | Lean proof-environment response and terminal kernel acceptance. | It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it. |
| [MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](https://arxiv.org/abs/2109.00110) | 2022 | [Paper](https://arxiv.org/abs/2109.00110) · [Venue](https://openreview.net/forum?id=9ZPegFuFTFv) · [DOI](https://doi.org/10.48550/arXiv.2109.00110) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/library/cards/minif2f-2022/sources) | Formal theorem statement, target proof-assistant language, candidate proof script, and checker verdict.; process: source problem, formal statement, proof assistant; Metamath, Lean, Isabelle, and HOL Light formal proof environments. | Native proof-assistant kernel/checker acceptance. | It separates rigorous proof checking from ordinary answer matching while exposing environment-version and formalization risks. |

## 5. Full Paper List

### <a id="math-answer-verifiable-data"></a>📐 Math answer-verifiable data

- 🧰 **[FormalProofBench: Can Models Write Graduate Level Math Proofs That Are Formally Verified?](https://arxiv.org/abs/2603.26996)**
  <sub>2026 · ICLR 2026 VerifAI-2 Workshop / arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2603.26996) · [Paper Card Source](../../paper_cards/library/cards/formalproofbench-2026/sources)
  _Data object:_ Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; A model receives a formal theorem and its imported context, writes a Lean proof, and the benchmark records compilation success or failure from Lean 4.
  _Feedback / verifier:_ Lean 4 kernel acceptance of a submitted proof
  _Recipe signal:_ teacher: Deterministic verifier or environment outcome.; generator: A model receives a formal theorem and its imported context, writes a Lean proof, and the benchmark records compilation success or failure from Lean 4.
  _Audit focus:_ Pin the Lean/mathlib version, theorem imports, split provenance, and statement licenses before treating accepted proofs as reusable training data.
  _Why it matters:_ It exposes Lean 4 kernel acceptance of a submitted proof as a reusable, auditable outcome contract.
- 🧰 **[Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS 2021 Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · sft · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Venue](https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html) · [DOI](https://doi.org/10.48550/arXiv.2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/library/cards/math-dataset-2021/sources)
  _Data object:_ Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficulty, full solution; Dataset loader and evaluation scripts distributed with the official repository.
  _Feedback / verifier:_ Extracted final-answer matching with task-specific normalization.
  _Recipe signal:_ teacher: Curated source solutions and the AMPS auxiliary mathematics corpus.; generator: Human-authored competition problems and solutions.
  _Audit focus:_ Final-answer extraction can reject an otherwise correct derivation., Equivalent symbolic forms can be mishandled by brittle normalization., Public solutions create benchmark-contamination risk.
  _Why it matters:_ It establishes the central trade-off for math outcome data: inexpensive final-answer supervision is useful only when extraction, equivalence, and contamination are audited.

### <a id="math-rlvr-datasets"></a>🧮 Math RLVR datasets

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="code-execution-unit-test-data"></a>💻 Code execution / unit-test data

- 🧰 **[ImpossibleBench: Measuring LLMs' Propensity of Exploiting Test Cases](https://openreview.net/forum?id=SeO4vyAj7E)**
  <sub>2025 · ICLR 2026 · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=SeO4vyAj7E) · [Paper Card Source](../../paper_cards/library/cards/impossiblebench-2025/sources)
  _Data object:_ Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; A model receives an impossible task and visible tests, writes a program, and the harness executes it; passing tests deterministically flags test-case exploitation for that task.
  _Feedback / verifier:_ Unit-test outcome: passing a deliberately impossible task deterministically flags specification-violating behavior
  _Recipe signal:_ teacher: Deterministic verifier or environment outcome.; generator: A model receives an impossible task and visible tests, writes a program, and the harness executes it; passing tests deterministically flags test-case exploitation for that task.
  _Audit focus:_ Audit the proof that each task is impossible, sandbox behavior, checker implementation, and false positives caused by ambiguous specifications rather than exploitation.
  _Why it matters:_ It exposes Unit-test outcome: passing a deliberately impossible task deterministically flags specification-violating behavior as a reusable, auditable outcome contract.
- 🧪 **[Learning to Generate Unit Test via Adversarial Reinforcement Learning](https://openreview.net/forum?id=VqjNYF9nbP)**
  <sub>2025 · ICLR 2026 · 🧪 verifier reward · 📦 data release · programmatic · rlvr · agent training · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=VqjNYF9nbP) · [Paper Card Source](../../paper_cards/library/cards/utrl-unit-test-adversarial-rl-2025/sources)
  _Data object:_ Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; The policy generates a unit test, runs it against candidate programs in a sandbox, receives pass/fail and discrimination outcomes, and updates the test generator with the adversarial reward.
  _Feedback / verifier:_ Executable unit-test pass/fail and discrimination rewards
  _Recipe signal:_ teacher: Deterministic verifier or environment outcome.; generator: The policy generates a unit test, runs it against candidate programs in a sandbox, receives pass/fail and discrimination outcomes, and updates the test generator with the adversarial reward.
  _Audit focus:_ Audit sandbox isolation, hidden reference implementations, reward balance, flaky-test filtering, and whether the test suite overfits the sampled candidate programs.
  _Why it matters:_ It exposes Executable unit-test pass/fail and discrimination rewards as a reusable, auditable outcome contract.
- 🧰 **[Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938)**
  <sub>2021 · NeurIPS 2021 Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · environmental · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2105.09938) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html) · [DOI](https://doi.org/10.48550/arXiv.2105.09938) · [Code](https://github.com/hendrycks/apps) · [HF](https://huggingface.co/datasets/codeparrot/apps) · [Paper Card Source](../../paper_cards/library/cards/apps-2021/sources)
  _Data object:_ Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases.
  _Feedback / verifier:_ Functional correctness under test execution.
  _Recipe signal:_ teacher: Reference programs and tests.; generator: Curated coding-challenge tasks and downstream code-generation policies.
  _Audit focus:_ Tests can under-specify intended behavior., Public or leaked tests reward benchmark memorization., Sandbox and dependency differences can make execution non-reproducible.
  _Why it matters:_ It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite.

### <a id="formal-proof-lean-theorem-proving"></a>🧾 Formal proof / Lean / theorem proving

- 🚀 **[LEAP: Supercharging LLMs for Formal Mathematics with Agentic Frameworks](https://arxiv.org/abs/2606.03303)**
  <sub>2026 · arXiv · 🚀 model report · 🧰 benchmark · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2606.03303) · [Paper Card Source](../../paper_cards/library/cards/leap-formal-mathematics-2026/sources)
  _Data object:_ Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; Agents decompose a Lean theorem into subgoals, search and verify candidate subproofs with the Lean compiler, then compose accepted nodes into a final proof DAG.
  _Feedback / verifier:_ Lean compiler checks every generated proof and proof-DAG composition
  _Recipe signal:_ teacher: Deterministic verifier or environment outcome.; generator: Agents decompose a Lean theorem into subgoals, search and verify candidate subproofs with the Lean compiler, then compose accepted nodes into a final proof DAG.
  _Audit focus:_ Audit the agent search budget, theorem translation, Lean-IMO-Bench split and license, and the exact protocol behind the reported Putnam results.
  _Why it matters:_ It exposes Lean compiler checks every generated proof and proof-DAG composition as a reusable, auditable outcome contract.
- 🧰 **[Neural Theorem Proving for Verification Conditions: A Real-World Benchmark](https://arxiv.org/abs/2601.18944)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2601.18944) · [Paper Card Source](../../paper_cards/library/cards/ntp4vc-2026/sources)
  _Data object:_ Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; The benchmark presents a verification condition with its target-language context, a model synthesizes a proof, and Isabelle, Lean, or Rocq decides whether that proof is accepted.
  _Feedback / verifier:_ Isabelle, Lean, and Rocq proof-checker acceptance for verification conditions
  _Recipe signal:_ teacher: Deterministic verifier or environment outcome.; generator: The benchmark presents a verification condition with its target-language context, a model synthesizes a proof, and Isabelle, Lean, or Rocq decides whether that proof is accepted.
  _Audit focus:_ Check prover versions, imported libraries, condition extraction provenance, and whether metrics compare equivalent search budgets across assistants.
  _Why it matters:_ It exposes Isabelle, Lean, and Rocq proof-checker acceptance for verification conditions as a reusable, auditable outcome contract.
- 🧰 **[VeriSoftBench: Repository-Scale Formal Verification Benchmarks for Lean](https://arxiv.org/abs/2602.18307)**
  <sub>2026 · arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.18307) · [Paper Card Source](../../paper_cards/library/cards/verisoftbench-2026/sources)
  _Data object:_ Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; For each obligation, the system supplies the checked-out Lean repository context; a model proposes proof code and Lean 4 type-checking supplies the terminal verdict.
  _Feedback / verifier:_ Lean 4 type checker on repository-context proof obligations
  _Recipe signal:_ teacher: Deterministic verifier or environment outcome.; generator: For each obligation, the system supplies the checked-out Lean repository context; a model proposes proof code and Lean 4 type-checking supplies the terminal verdict.
  _Audit focus:_ Reproduce from pinned repository commits and dependency locks; audit obligation provenance, benchmark splits, and each repository license.
  _Why it matters:_ It exposes Lean 4 type checker on repository-context proof obligations as a reusable, auditable outcome contract.
- 🚀 **[Hilbert: Recursively Building Formal Proofs with Informal Reasoning](https://arxiv.org/abs/2509.22819)**
  <sub>2025 · ICLR 2026 · 🚀 model report · 🪜 process supervision · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2509.22819) · [Paper Card Source](../../paper_cards/library/cards/hilbert-recursively-building-formal-proofs-2025/sources)
  _Data object:_ Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; The system proposes an informal decomposition, generates Lean subproofs, compiles them, feeds failures back into recursive repair, and terminates only on Lean 4 acceptance.
  _Feedback / verifier:_ Lean 4 proof-assistant acceptance and feedback during recursive proof repair
  _Recipe signal:_ teacher: Deterministic verifier or environment outcome.; generator: The system proposes an informal decomposition, generates Lean subproofs, compiles them, feeds failures back into recursive repair, and terminates only on Lean 4 acceptance.
  _Audit focus:_ Separate gains from informal hints, recursion depth, model choice, and search budget; pin Lean versions and inspect PutnamBench split overlap.
  _Why it matters:_ It exposes Lean 4 proof-assistant acceptance and feedback during recursive proof repair as a reusable, auditable outcome contract.
- 📦 **[LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS 2023 Datasets and Benchmarks · 📦 data release · 🧰 benchmark · programmatic · environmental · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/library/cards/leandojo-2023/sources)
  _Data object:_ Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit.
  _Feedback / verifier:_ Lean proof-environment response and terminal kernel acceptance.
  _Recipe signal:_ teacher: Human-written mathlib proofs and premise-use annotations.; generator: The tactic model interacts with Lean and retrieves accessible premises.
  _Audit focus:_ Mismatched Lean, mathlib, or import versions change checker behavior., Proof-environment wrappers can misjudge valid proofs., Retrieval can mask memorization unless premise-aware splits are used.
  _Why it matters:_ It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it.
- 🧰 **[MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](https://arxiv.org/abs/2109.00110)**
  <sub>2022 · ICLR 2022 · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2109.00110) · [Venue](https://openreview.net/forum?id=9ZPegFuFTFv) · [DOI](https://doi.org/10.48550/arXiv.2109.00110) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/library/cards/minif2f-2022/sources)
  _Data object:_ Formal theorem statement, target proof-assistant language, candidate proof script, and checker verdict.; process: source problem, formal statement, proof assistant; Metamath, Lean, Isabelle, and HOL Light formal proof environments.
  _Feedback / verifier:_ Native proof-assistant kernel/checker acceptance.
  _Recipe signal:_ teacher: Human formalizations and formal-system proof obligations.; generator: Neural theorem prover proposes proof steps or scripts.
  _Audit focus:_ A proof can depend on undocumented imports or library versions., Formalization choices can change the difficulty of the original problem., Kernel success does not validate an informal translation's faithfulness.
  _Why it matters:_ It separates rigorous proof checking from ordinary answer matching while exposing environment-version and formalization risks.

### <a id="verifier-robustness-and-answer-extraction"></a>🧪 Verifier robustness and answer extraction

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="programmatic-benchmarks"></a>🧰 Programmatic benchmarks

- 🧰 **[BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](https://arxiv.org/abs/2509.24210)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2509.24210) · [DOI](https://doi.org/10.48550/arXiv.2509.24210) · [Code](https://github.com/ctrl-gaurav/BeyondBench) · [Project](https://ctrl-gaurav.github.io/BeyondBench/) · [Paper Card Source](../../paper_cards/library/cards/beyondbench-2026/sources)
  _Data object:_ Generated problem instance, model answer, and deterministic solution check.; process: task family, generator parameters, difficulty suite; Algorithmic problem generators and deterministic verifiers.
  _Feedback / verifier:_ Mathematical/programmatic verifier with large combinatorial instance spaces.
  _Recipe signal:_ teacher: Algorithmic task definitions and mathematical solution procedures.; generator: Problem generators produce fresh instances from large combinatorial spaces.
  _Audit focus:_ Generator bugs can invalidate deterministic guarantees., Models may exploit task templates if generators are exposed., Tool-use settings can dominate reasoning comparisons.
  _Why it matters:_ It is a clean 03-direction candidate because the benchmark is built around generated instances, deterministic answer checks, and explicit contamination-resistance claims.
- 🧰 **[FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/library/cards/featurebench-2026/sources)
  _Data object:_ Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories.
  _Feedback / verifier:_ Execution-based evaluation protocol using unit tests and repository behavior checks.
  _Recipe signal:_ teacher: Repository history and unit tests provide task construction signals.; generator: Automated task collection toolkit traces from tests along dependency graphs.
  _Audit focus:_ Unit tests may underspecify the intended feature., Repository tasks may be contaminated through public code., Feature extraction can break hidden dependencies.
  _Why it matters:_ It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction.
- 🧰 **[GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](https://arxiv.org/abs/2505.17653)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.17653) · [DOI](https://doi.org/10.48550/arXiv.2505.17653) · [Code](https://github.com/LiAuto-DSR/GeoGramBench) · [Data](https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench) · [Paper Card Source](../../paper_cards/library/cards/geogrambench-2026/sources)
  _Data object:_ Procedural drawing code, geometry question, model answer, and benchmark score.; process: drawing program, geometry abstraction level, question; Programmatic drawing-code representation of geometric diagrams.
  _Feedback / verifier:_ Benchmark answer checking over curated geometric reasoning problems.
  _Recipe signal:_ teacher: Curated geometric program reasoning tasks and taxonomy.; generator: Benchmark construction pipeline creates program-to-geometry problems.
  _Audit focus:_ Answer checking may hide ambiguity in spatial interpretation., Procedural code can encode visual assumptions not captured by text., Sampling and long-response settings affect reported pass rates.
  _Why it matters:_ It broadens Track 03 beyond text math and code execution into symbolic-to-spatial reasoning where programs define the object being verified.
- 🌐 **[Group Verification-based Policy Optimization for Interactive Coding Agents](https://openreview.net/forum?id=RY47Tq0VsV)**
  <sub>2025 · ICLR 2026 · 🌐 agent environment · 🧪 verifier reward · programmatic · environmental · rlvr · agent training · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=RY47Tq0VsV) · [Paper Card Source](../../paper_cards/library/cards/gvpo-interactive-coding-agents-2025/sources)
  _Data object:_ Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; For each AppWorld task, the method samples a group of trajectories, evaluates final goal tests plus compilation, exception, and partial-test feedback, then optimizes from the verified signals.
  _Feedback / verifier:_ AppWorld goal tests plus deterministic compilation, exception, and partial-test feedback
  _Recipe signal:_ teacher: Deterministic verifier or environment outcome.; generator: For each AppWorld task, the method samples a group of trajectories, evaluates final goal tests plus compilation, exception, and partial-test feedback, then optimizes from the verified signals.
  _Audit focus:_ Check the AppWorld release, task seeds, scaffold permissions, partial-test weights, and whether process feedback leaks task solutions.
  _Why it matters:_ It exposes AppWorld goal tests plus deterministic compilation, exception, and partial-test feedback as a reusable, auditable outcome contract.
- 🧰 **[MCPMark: A Benchmark for Stress-Testing Realistic and Comprehensive MCP Use](https://arxiv.org/abs/2509.24002)**
  <sub>2025 · ICLR 2026 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2509.24002) · [Paper Card Source](../../paper_cards/library/cards/mcpmark-2025/sources)
  _Data object:_ Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; An agent invokes MCP tools across the configured servers; after the trajectory, a task-specific program examines the resulting state and returns success or failure.
  _Feedback / verifier:_ Task-specific programmatic scripts check final state across MCP tool environments
  _Recipe signal:_ teacher: Deterministic verifier or environment outcome.; generator: An agent invokes MCP tools across the configured servers; after the trajectory, a task-specific program examines the resulting state and returns success or failure.
  _Audit focus:_ Recreate server images, reset policies, credentials, task seeds, and checker scripts; a state checker can still under-specify intended user behavior.
  _Why it matters:_ It exposes Task-specific programmatic scripts check final state across MCP tool environments as a reusable, auditable outcome contract.
- 🧰 **[RECODE-H: A Benchmark for Research Code Development with Interactive Human Feedback](https://openreview.net/forum?id=IKnuyyPHCV)**
  <sub>2025 · ICLR 2026 · 🧰 benchmark · 🌐 agent environment · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=IKnuyyPHCV) · [Paper Card Source](../../paper_cards/library/cards/recode-h-2025/sources)
  _Data object:_ Candidate artifact together with the executable verifier result.; process: task context, candidate output, verifier result; An agent reads a paper/repository task, edits the project through iterative feedback, and the released unit-test environment evaluates whether the final implementation completes the task.
  _Feedback / verifier:_ Repository unit tests decide executable research-code task completion
  _Recipe signal:_ teacher: Deterministic verifier or environment outcome.; generator: An agent reads a paper/repository task, edits the project through iterative feedback, and the released unit-test environment evaluates whether the final implementation completes the task.
  _Audit focus:_ Inspect feedback collection, environment pinning, test completeness, paper/repository licenses, and the distinction between human guidance and ground-truth verification.
  _Why it matters:_ It exposes Repository unit tests decide executable research-code task completion as a reusable, auditable outcome contract.

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

- [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](../../paper_cards/library/cards/beyondbench-2026/sources)
- [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](../../paper_cards/library/cards/featurebench-2026/sources)
- [FormalProofBench: Can Models Write Graduate Level Math Proofs That Are Formally Verified?](../../paper_cards/library/cards/formalproofbench-2026/sources)
- [GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](../../paper_cards/library/cards/geogrambench-2026/sources)
- [LEAP: Supercharging LLMs for Formal Mathematics with Agentic Frameworks](../../paper_cards/library/cards/leap-formal-mathematics-2026/sources)
- [Neural Theorem Proving for Verification Conditions: A Real-World Benchmark](../../paper_cards/library/cards/ntp4vc-2026/sources)
- [VeriSoftBench: Repository-Scale Formal Verification Benchmarks for Lean](../../paper_cards/library/cards/verisoftbench-2026/sources)
- [Group Verification-based Policy Optimization for Interactive Coding Agents](../../paper_cards/library/cards/gvpo-interactive-coding-agents-2025/sources)
- [Hilbert: Recursively Building Formal Proofs with Informal Reasoning](../../paper_cards/library/cards/hilbert-recursively-building-formal-proofs-2025/sources)
- [ImpossibleBench: Measuring LLMs' Propensity of Exploiting Test Cases](../../paper_cards/library/cards/impossiblebench-2025/sources)
- [Learning to Generate Unit Test via Adversarial Reinforcement Learning](../../paper_cards/library/cards/utrl-unit-test-adversarial-rl-2025/sources)
- [MCPMark: A Benchmark for Stress-Testing Realistic and Comprehensive MCP Use](../../paper_cards/library/cards/mcpmark-2025/sources)
- [RECODE-H: A Benchmark for Research Code Development with Interactive Human Feedback](../../paper_cards/library/cards/recode-h-2025/sources)
- [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](../../paper_cards/library/cards/leandojo-2023/sources)
- [MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](../../paper_cards/library/cards/minif2f-2022/sources)
- [Measuring Coding Challenge Competence With APPS](../../paper_cards/library/cards/apps-2021/sources)
- [Measuring Mathematical Problem Solving With the MATH Dataset](../../paper_cards/library/cards/math-dataset-2021/sources)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
