# 🧯 Audit, Failure, Contamination, and Verifier Attacks

> Benchmark contamination, search-time leakage, hidden lineage, reward hacking, verifier gaming, LLM-as-judge attacks, spurious rewards, and reproducibility failures.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=audit_failure_contamination_verifier_attacks&mode=find_papers)
> Try: `What should I read first for 🧯 Audit & Failure Modes?`
> Try: `Compare the data objects and verifier types in 🧯 Audit & Failure Modes.`
> Try: `Generate an audit checklist for 🧯 Audit & Failure Modes.`

## 1. What This Track Studies

Use this track when you want to know how reasoning-data claims can fail and how to audit them before reuse.

A trustworthy Awesome repo must make failure visible. Reasoning-data systems can leak benchmarks, memorize teacher artifacts, exploit judges, game verifiers, overfit public tests, optimize spurious rewards, and collapse under small evaluation changes. This track is the atlas safety rail.

The page is not a pessimistic appendix; it is practical infrastructure. Every data track needs an audit lens, and every paper card should contain enough failure analysis for builders to decide whether a resource is safe to reuse.

Contributors should use this track to collect both direct failure papers and audit-relevant benchmark or model-report analyses.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧯 Benchmark contamination | train/test overlap, stale evaluations, and benchmark refresh | memorized items are reported as reasoning progress |
| 🔍 Search-time contamination | contamination introduced by search, tools, retrieval, or inference scaffolds | test-time tool access leaks answer traces |
| 🧬 Hidden lineage / teacher leakage | teacher-model traces, synthetic data inheritance, and hidden trait transfer | student behavior inherits undisclosed teacher artifacts |
| 🎮 Reward hacking | ways reward models, tests, or judges can be optimized as shortcuts | reward rises while real quality falls |
| 🧪 Verifier gaming | models exploiting checkers, answer formats, or judge blind spots | verifier-passing examples are semantically wrong |
| ⚖️ LLM-as-judge attacks | one-token attacks, position bias, verbosity bias, and prompt attacks | judge score changes for non-semantic reasons |
| 🧨 Spurious rewards | shortcut rewards, memorization-triggered rewards, and wrong-behavior correlations | reward improves while model learns a shortcut |
| 📉 Reproducibility failures | decoding, evaluation, scaffold, and data reporting failures | reported gains disappear under controlled reruns |

### Contents

- [🧯 Benchmark contamination](#benchmark-contamination)
- [🔍 Search-time contamination](#search-time-contamination)
- [🧬 Hidden lineage / teacher leakage](#hidden-lineage-teacher-leakage)
- [🎮 Reward hacking](#reward-hacking)
- [🧪 Verifier gaming](#verifier-gaming)
- [⚖️ LLM-as-judge attacks](#llm-as-judge-attacks)
- [🧨 Spurious rewards](#spurious-rewards)
- [📉 Reproducibility failures](#reproducibility-failures)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975) | 2026 | [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/sources/featurebench-2026) | Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories. | Execution-based evaluation protocol using unit tests and repository behavior checks. | It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction. |
| [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/sources/leandojo-2023) | Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit. | Lean proof-environment response and terminal kernel acceptance. | It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it. |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [DOI](https://doi.org/10.48550/arXiv.2305.20050) · [Paper Card Source](../../paper_cards/sources/lets-verify-step-by-step-2023) | Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning. | Process reward model trained from human step-level labels. | Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection. |
| [MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](https://arxiv.org/abs/2109.00110) | 2022 | [Paper](https://arxiv.org/abs/2109.00110) · [Venue](https://openreview.net/forum?id=9ZPegFuFTFv) · [DOI](https://doi.org/10.48550/arXiv.2109.00110) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-2022) | Formal theorem statement, target proof-assistant language, candidate proof script, and checker verdict.; process: source problem, formal statement, proof assistant; Metamath, Lean, Isabelle, and HOL Light formal proof environments. | Native proof-assistant kernel/checker acceptance. | It separates rigorous proof checking from ordinary answer matching while exposing environment-version and formalization risks. |
| [Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938) | 2021 | [Paper](https://arxiv.org/abs/2105.09938) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html) · [DOI](https://doi.org/10.48550/arXiv.2105.09938) · [Code](https://github.com/hendrycks/apps) · [HF](https://huggingface.co/datasets/codeparrot/apps) · [Paper Card Source](../../paper_cards/sources/apps-2021) | Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases. | Functional correctness under test execution. | It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite. |
| [Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874) | 2021 | [Paper](https://arxiv.org/abs/2103.03874) · [Venue](https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html) · [DOI](https://doi.org/10.48550/arXiv.2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/sources/math-dataset-2021) | Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficulty, full solution; Dataset loader and evaluation scripts distributed with the official repository. | Extracted final-answer matching with task-specific normalization. | It establishes the central trade-off for math outcome data: inexpensive final-answer supervision is useful only when extraction, equivalence, and contamination are audited. |
| [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](https://arxiv.org/abs/2509.24210) | 2026 | [Paper](https://arxiv.org/abs/2509.24210) · [DOI](https://doi.org/10.48550/arXiv.2509.24210) · [Code](https://github.com/ctrl-gaurav/BeyondBench) · [Project](https://ctrl-gaurav.github.io/BeyondBench/) · [Paper Card Source](../../paper_cards/sources/beyondbench-2026) | Generated problem instance, model answer, and deterministic solution check.; process: task family, generator parameters, difficulty suite; Algorithmic problem generators and deterministic verifiers. | Mathematical/programmatic verifier with large combinatorial instance spaces. | It is a clean 03-direction candidate because the benchmark is built around generated instances, deterministic answer checks, and explicit contamination-resistance claims. |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) | 2025 | [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025) | candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack | small LLM verifier augmenting rules | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. |

## 5. Full Paper List

### <a id="benchmark-contamination"></a>🧯 Benchmark contamination

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
- 🧰 **[MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](https://arxiv.org/abs/2109.00110)**
  <sub>2022 · ICLR 2022 · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2109.00110) · [Venue](https://openreview.net/forum?id=9ZPegFuFTFv) · [DOI](https://doi.org/10.48550/arXiv.2109.00110) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-2022)
  _Data object:_ Formal theorem statement, target proof-assistant language, candidate proof script, and checker verdict.; process: source problem, formal statement, proof assistant; Metamath, Lean, Isabelle, and HOL Light formal proof environments.
  _Feedback / verifier:_ Native proof-assistant kernel/checker acceptance.
  _Recipe signal:_ teacher: Human formalizations and formal-system proof obligations.; generator: Neural theorem prover proposes proof steps or scripts.
  _Audit focus:_ A proof can depend on undocumented imports or library versions., Formalization choices can change the difficulty of the original problem., Kernel success does not validate an informal translation's faithfulness.
  _Why it matters:_ It separates rigorous proof checking from ordinary answer matching while exposing environment-version and formalization risks.
- 🧰 **[Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938)**
  <sub>2021 · NeurIPS 2021 Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · environmental · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2105.09938) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html) · [DOI](https://doi.org/10.48550/arXiv.2105.09938) · [Code](https://github.com/hendrycks/apps) · [HF](https://huggingface.co/datasets/codeparrot/apps) · [Paper Card Source](../../paper_cards/sources/apps-2021)
  _Data object:_ Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases.
  _Feedback / verifier:_ Functional correctness under test execution.
  _Recipe signal:_ teacher: Reference programs and tests.; generator: Curated coding-challenge tasks and downstream code-generation policies.
  _Audit focus:_ Tests can under-specify intended behavior., Public or leaked tests reward benchmark memorization., Sandbox and dependency differences can make execution non-reproducible.
  _Why it matters:_ It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite.
- 🧰 **[Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS 2021 Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · sft · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Venue](https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html) · [DOI](https://doi.org/10.48550/arXiv.2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/sources/math-dataset-2021)
  _Data object:_ Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficulty, full solution; Dataset loader and evaluation scripts distributed with the official repository.
  _Feedback / verifier:_ Extracted final-answer matching with task-specific normalization.
  _Recipe signal:_ teacher: Curated source solutions and the AMPS auxiliary mathematics corpus.; generator: Human-authored competition problems and solutions.
  _Audit focus:_ Final-answer extraction can reject an otherwise correct derivation., Equivalent symbolic forms can be mishandled by brittle normalization., Public solutions create benchmark-contamination risk.
  _Why it matters:_ It establishes the central trade-off for math outcome data: inexpensive final-answer supervision is useful only when extraction, equivalence, and contamination are audited.

### <a id="search-time-contamination"></a>🔍 Search-time contamination

- 📦 **[LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS 2023 Datasets and Benchmarks · 📦 data release · 🧰 benchmark · programmatic · environmental · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/sources/leandojo-2023)
  _Data object:_ Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit.
  _Feedback / verifier:_ Lean proof-environment response and terminal kernel acceptance.
  _Recipe signal:_ teacher: Human-written mathlib proofs and premise-use annotations.; generator: The tactic model interacts with Lean and retrieves accessible premises.
  _Audit focus:_ Mismatched Lean, mathlib, or import versions change checker behavior., Proof-environment wrappers can misjudge valid proofs., Retrieval can mask memorization unless premise-aware splits are used.
  _Why it matters:_ It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it.

### <a id="hidden-lineage-teacher-leakage"></a>🧬 Hidden lineage / teacher leakage

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="reward-hacking"></a>🎮 Reward hacking

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="verifier-gaming"></a>🧪 Verifier gaming

- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [DOI](https://doi.org/10.48550/arXiv.2305.20050) · [Paper Card Source](../../paper_cards/sources/lets-verify-step-by-step-2023)
  _Data object:_ Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning.
  _Feedback / verifier:_ Process reward model trained from human step-level labels.
  _Recipe signal:_ teacher: Human step-level labels over model-generated reasoning.; generator: Policy model produces candidate math traces.
  _Audit focus:_ Human step labels can encode style preferences., PRM scores can reward locally plausible but globally wrong paths., Verifier calls add TTC cost that must be disclosed.
  _Why it matters:_ Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection.

### <a id="llm-as-judge-attacks"></a>⚖️ LLM-as-judge attacks

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="spurious-rewards"></a>🧨 Spurious rewards

- 📦 **[LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS 2023 Datasets and Benchmarks · 📦 data release · 🧰 benchmark · programmatic · environmental · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/sources/leandojo-2023)
  _Data object:_ Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit.
  _Feedback / verifier:_ Lean proof-environment response and terminal kernel acceptance.
  _Recipe signal:_ teacher: Human-written mathlib proofs and premise-use annotations.; generator: The tactic model interacts with Lean and retrieves accessible premises.
  _Audit focus:_ Mismatched Lean, mathlib, or import versions change checker behavior., Proof-environment wrappers can misjudge valid proofs., Retrieval can mask memorization unless premise-aware splits are used.
  _Why it matters:_ It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it.

### <a id="reproducibility-failures"></a>📉 Reproducibility failures

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- What can leak, contaminate, or be optimized as a shortcut?
- Is the attack tested against the actual judge/verifier setup?
- Does the paper preserve enough evidence to reproduce the failure?

## 7. Open Problems

- How should open reasoning-data releases report contamination checks?
- Can verifier and judge attacks be standardized across domains?
- What is the right card schema for hidden lineage and teacher leakage?
- How should the atlas decide when to demote a benchmark or paper due to audit failures?

## 8. Related Paper-Card Sources

- [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](../../paper_cards/sources/beyondbench-2026)
- [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](../../paper_cards/sources/featurebench-2026)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](../../paper_cards/sources/leandojo-2023)
- [Let's Verify Step by Step](../../paper_cards/sources/lets-verify-step-by-step-2023)
- [MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](../../paper_cards/sources/minif2f-2022)
- [Measuring Coding Challenge Competence With APPS](../../paper_cards/sources/apps-2021)
- [Measuring Mathematical Problem Solving With the MATH Dataset](../../paper_cards/sources/math-dataset-2021)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
