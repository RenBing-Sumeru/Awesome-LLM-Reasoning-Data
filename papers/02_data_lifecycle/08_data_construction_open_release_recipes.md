# 🏗️ Data Construction and Open Release Recipes

> Prompt sourcing, teacher traces, rejection sampling, self-play, filtering, verifier refresh, open releases, lineage, and release metadata.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=data_construction_open_release_recipes&mode=find_papers)
> Try: `What should I read first for 🏗️ Construction & Open Releases?`
> Try: `Compare the data objects and verifier types in 🏗️ Construction & Open Releases.`
> Try: `Generate an audit checklist for 🏗️ Construction & Open Releases.`

## 1. What This Track Studies

Use this track to learn how reasoning datasets are actually built, filtered, packaged, and released.

A high-impact Awesome repo must teach recipes, not just cite papers. This track collects the construction pipeline: task sourcing, teacher trace generation, rollout/search expansion, rejection sampling, self-improvement, verifier refresh, filtering, deduplication, decontamination, release packaging, and metadata.

Open releases vary widely. Some expose data and scripts; others expose only a report. Contributors should identify what is reproducible and what is hidden: teacher models, sampling rules, prompts, filters, accepted/rejected traces, splits, license, lineage, and known failures.

This track is where students can turn a paper into operational knowledge: what should another lab do if it wants to build a similar dataset?

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧱 Prompt sourcing | question pools, seed sources, licenses, difficulty, and base-model pass rates | prompt sources are mixed without attribution |
| ✍️ Teacher trace generation | teacher models, trace policies, sampling settings, and distillation targets | teacher identity or sampling protocol is hidden |
| 🔎 Rejection sampling / search-generated data | candidate generation, search budget, filtering, and accepted/rejected examples | only accepted traces are released |
| 🔁 Self-play / self-improvement | self-improvement, co-evolution, generator-verifier cycles, and curricula | feedback loop amplifies hidden shortcuts |
| 🧪 Filtering and verifier refresh | answer filters, judge filters, decontamination, and verifier updates | filter thresholds become hidden objectives |
| 🏗️ Open reasoning data releases | open datasets, code, HF releases, recipes, ablations, and reproducibility | dataset is open but recipe details are not |
| 🧬 Data lineage and release metadata | datasheets, splits, lineage, licensing, versioning, and known failures | reuse loses the release context |

### Contents

- [🧱 Prompt sourcing](#prompt-sourcing)
- [✍️ Teacher trace generation](#teacher-trace-generation)
- [🔎 Rejection sampling / search-generated data](#rejection-sampling-search-generated-data)
- [🔁 Self-play / self-improvement](#self-play-self-improvement)
- [🧪 Filtering and verifier refresh](#filtering-and-verifier-refresh)
- [🏗️ Open reasoning data releases](#open-reasoning-data-releases)
- [🧬 Data lineage and release metadata](#data-lineage-and-release-metadata)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865) | 2026 | [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/sources/agnostics-universal-learning-environment-2026) | Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings. | Programmatic execution verifier that judges behavior rather than language-specific syntax alone. | It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface. |
| [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975) | 2026 | [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/sources/featurebench-2026) | Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories. | Execution-based evaluation protocol using unit tests and repository behavior checks. | It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction. |
| [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300) | 2024 | [Paper](https://arxiv.org/abs/2402.03300) · [DOI](https://doi.org/10.48550/arXiv.2402.03300) · [HF](https://huggingface.co/deepseek-ai/deepseek-math-7b-base) · [Paper Card Source](../../paper_cards/sources/deepseekmath-2024) | Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline. | GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation. | High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target. |
| [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/sources/leandojo-2023) | Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit. | Lean proof-environment response and terminal kernel acceptance. | It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it. |
| [Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938) | 2021 | [Paper](https://arxiv.org/abs/2105.09938) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html) · [DOI](https://doi.org/10.48550/arXiv.2105.09938) · [Code](https://github.com/hendrycks/apps) · [HF](https://huggingface.co/datasets/codeparrot/apps) · [Paper Card Source](../../paper_cards/sources/apps-2021) | Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases. | Functional correctness under test execution. | It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite. |
| [Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874) | 2021 | [Paper](https://arxiv.org/abs/2103.03874) · [Venue](https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html) · [DOI](https://doi.org/10.48550/arXiv.2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/sources/math-dataset-2021) | Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficulty, full solution; Dataset loader and evaluation scripts distributed with the official repository. | Extracted final-answer matching with task-specific normalization. | It establishes the central trade-off for math outcome data: inexpensive final-answer supervision is useful only when extraction, equivalence, and contamination are audited. |
| [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](https://arxiv.org/abs/2509.24210) | 2026 | [Paper](https://arxiv.org/abs/2509.24210) · [DOI](https://doi.org/10.48550/arXiv.2509.24210) · [Code](https://github.com/ctrl-gaurav/BeyondBench) · [Project](https://ctrl-gaurav.github.io/BeyondBench/) · [Paper Card Source](../../paper_cards/sources/beyondbench-2026) | Generated problem instance, model answer, and deterministic solution check.; process: task family, generator parameters, difficulty suite; Algorithmic problem generators and deterministic verifiers. | Mathematical/programmatic verifier with large combinatorial instance spaces. | It is a clean 03-direction candidate because the benchmark is built around generated instances, deterministic answer checks, and explicit contamination-resistance claims. |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) | 2025 | [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025) | candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack | small LLM verifier augmenting rules | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. |
| [Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](https://arxiv.org/abs/2312.06585) | 2024 | [Paper](https://arxiv.org/abs/2312.06585) · [DOI](https://doi.org/10.48550/arXiv.2312.06585) · [Paper Card Source](../../paper_cards/sources/rest-em-self-training-2024) | Prompt, generated sample, binary feedback result, filtered training example, and iteration number.; process: self-training round, sampled solution, binary verifier result; Expectation-maximization self-training loop over verifiable problem-solving tasks. | Binary correctness feedback from answer checks or execution-style evaluators. | Strong self-training scaling paper for data reuse, scalar feedback filtering, and verifier-mediated synthetic data generation. |

## 5. Full Paper List

### <a id="prompt-sourcing"></a>🧱 Prompt sourcing

- 🧰 **[Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS 2021 Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · sft · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Venue](https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html) · [DOI](https://doi.org/10.48550/arXiv.2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/sources/math-dataset-2021)
  _Data object:_ Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficulty, full solution; Dataset loader and evaluation scripts distributed with the official repository.
  _Feedback / verifier:_ Extracted final-answer matching with task-specific normalization.
  _Recipe signal:_ teacher: Curated source solutions and the AMPS auxiliary mathematics corpus.; generator: Human-authored competition problems and solutions.
  _Audit focus:_ Final-answer extraction can reject an otherwise correct derivation., Equivalent symbolic forms can be mishandled by brittle normalization., Public solutions create benchmark-contamination risk.
  _Why it matters:_ It establishes the central trade-off for math outcome data: inexpensive final-answer supervision is useful only when extraction, equivalence, and contamination are audited.

### <a id="teacher-trace-generation"></a>✍️ Teacher trace generation

- 📦 **[LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS 2023 Datasets and Benchmarks · 📦 data release · 🧰 benchmark · programmatic · environmental · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/sources/leandojo-2023)
  _Data object:_ Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit.
  _Feedback / verifier:_ Lean proof-environment response and terminal kernel acceptance.
  _Recipe signal:_ teacher: Human-written mathlib proofs and premise-use annotations.; generator: The tactic model interacts with Lean and retrieves accessible premises.
  _Audit focus:_ Mismatched Lean, mathlib, or import versions change checker behavior., Proof-environment wrappers can misjudge valid proofs., Retrieval can mask memorization unless premise-aware splits are used.
  _Why it matters:_ It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it.

### <a id="rejection-sampling-search-generated-data"></a>🔎 Rejection sampling / search-generated data

- 📦 **[Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865)**
  <sub>2026 · ICLR 2026 · 📦 data release · 🧪 verifier reward · programmatic · environmental · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
  _Data object:_ Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings.
  _Feedback / verifier:_ Programmatic execution verifier that judges behavior rather than language-specific syntax alone.
  _Recipe signal:_ teacher: LLM rewrite pipeline for adapting coding datasets into I/O tasks.; generator: RLVR policy model emits target-language code.
  _Audit focus:_ I/O-only tests may miss semantic edge cases., Verifier containers can encode language-specific quirks., Dataset rewriting can change task intent.
  _Why it matters:_ It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface.
- 🧰 **[BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](https://arxiv.org/abs/2509.24210)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2509.24210) · [DOI](https://doi.org/10.48550/arXiv.2509.24210) · [Code](https://github.com/ctrl-gaurav/BeyondBench) · [Project](https://ctrl-gaurav.github.io/BeyondBench/) · [Paper Card Source](../../paper_cards/sources/beyondbench-2026)
  _Data object:_ Generated problem instance, model answer, and deterministic solution check.; process: task family, generator parameters, difficulty suite; Algorithmic problem generators and deterministic verifiers.
  _Feedback / verifier:_ Mathematical/programmatic verifier with large combinatorial instance spaces.
  _Recipe signal:_ teacher: Algorithmic task definitions and mathematical solution procedures.; generator: Problem generators produce fresh instances from large combinatorial spaces.
  _Audit focus:_ Generator bugs can invalidate deterministic guarantees., Models may exploit task templates if generators are exposed., Tool-use settings can dominate reasoning comparisons.
  _Why it matters:_ It is a clean 03-direction candidate because the benchmark is built around generated instances, deterministic answer checks, and explicit contamination-resistance claims.

### <a id="self-play-self-improvement"></a>🔁 Self-play / self-improvement

- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- 🧰 **[Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938)**
  <sub>2021 · NeurIPS 2021 Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · environmental · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2105.09938) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html) · [DOI](https://doi.org/10.48550/arXiv.2105.09938) · [Code](https://github.com/hendrycks/apps) · [HF](https://huggingface.co/datasets/codeparrot/apps) · [Paper Card Source](../../paper_cards/sources/apps-2021)
  _Data object:_ Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases.
  _Feedback / verifier:_ Functional correctness under test execution.
  _Recipe signal:_ teacher: Reference programs and tests.; generator: Curated coding-challenge tasks and downstream code-generation policies.
  _Audit focus:_ Tests can under-specify intended behavior., Public or leaked tests reward benchmark memorization., Sandbox and dependency differences can make execution non-reproducible.
  _Why it matters:_ It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite.

### <a id="filtering-and-verifier-refresh"></a>🧪 Filtering and verifier refresh

- 📈 **[Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](https://arxiv.org/abs/2312.06585)**
  <sub>2024 · TMLR 2024 · 📈 scaling study · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.06585) · [DOI](https://doi.org/10.48550/arXiv.2312.06585) · [Paper Card Source](../../paper_cards/sources/rest-em-self-training-2024)
  _Data object:_ Prompt, generated sample, binary feedback result, filtered training example, and iteration number.; process: self-training round, sampled solution, binary verifier result; Expectation-maximization self-training loop over verifiable problem-solving tasks.
  _Feedback / verifier:_ Binary correctness feedback from answer checks or execution-style evaluators.
  _Recipe signal:_ teacher: Scalar feedback from verifiable math/code tasks.; generator: Current policy samples candidate solutions each ReST-EM round.
  _Audit focus:_ Filtered data may become repetitive., Verifier errors are amplified across rounds., Data reuse counts can be mistaken for new unique data.
  _Why it matters:_ Strong self-training scaling paper for data reuse, scalar feedback filtering, and verifier-mediated synthetic data generation.

### <a id="open-reasoning-data-releases"></a>🏗️ Open reasoning data releases

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="data-lineage-and-release-metadata"></a>🧬 Data lineage and release metadata

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="other-related-work"></a>Other related work

- 🧰 **[FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/sources/featurebench-2026)
  _Data object:_ Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories.
  _Feedback / verifier:_ Execution-based evaluation protocol using unit tests and repository behavior checks.
  _Recipe signal:_ teacher: Repository history and unit tests provide task construction signals.; generator: Automated task collection toolkit traces from tests along dependency graphs.
  _Audit focus:_ Unit tests may underspecify the intended feature., Repository tasks may be contaminated through public code., Feature extraction can break hidden dependencies.
  _Why it matters:_ It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction.
- 📦 **[DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 📦 data release · 📈 scaling study · programmatic · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [DOI](https://doi.org/10.48550/arXiv.2402.03300) · [HF](https://huggingface.co/deepseek-ai/deepseek-math-7b-base) · [Paper Card Source](../../paper_cards/sources/deepseekmath-2024)
  _Data object:_ Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline.
  _Feedback / verifier:_ GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation.
  _Recipe signal:_ teacher: Math corpus filters, instruction examples, and benchmark answer supervision.; generator: DeepSeekMath-Instruct/RL models generate solutions.
  _Audit focus:_ Web data filtering may preserve benchmark leakage., GRPO gains can be confused with data-scale gains., Self-consistency improves scores but costs 64 samples.
  _Why it matters:_ High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target.

## 6. What to Audit

- Are prompt sources, teacher models, sampling rules, and filters disclosed?
- Can another team reproduce the accepted and rejected examples?
- Is the release license and lineage clear enough for reuse?

## 7. Open Problems

- What is the minimum release metadata for safe reuse?
- Should rejected traces be released as first-class data?
- How can open projects document proprietary teacher effects?
- Which filtering rules become hidden training objectives?

## 8. Related Paper-Card Sources

- [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
- [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](../../paper_cards/sources/beyondbench-2026)
- [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](../../paper_cards/sources/featurebench-2026)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](../../paper_cards/sources/rest-em-self-training-2024)
- [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](../../paper_cards/sources/deepseekmath-2024)
- [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](../../paper_cards/sources/leandojo-2023)
- [Measuring Coding Challenge Competence With APPS](../../paper_cards/sources/apps-2021)
- [Measuring Mathematical Problem Solving With the MATH Dataset](../../paper_cards/sources/math-dataset-2021)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
