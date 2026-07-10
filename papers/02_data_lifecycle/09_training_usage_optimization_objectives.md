# 🎯 Training Usage and Optimization Objectives

> How data enters SFT, distillation, preference optimization, reward modeling, PRM training, RLVR, agent training, evaluation, reranking, and audit.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=training_usage_optimization_objectives&mode=find_papers)
> Try: `What should I read first for 🎯 Training Usage & Objectives?`
> Try: `Compare the data objects and verifier types in 🎯 Training Usage & Objectives.`
> Try: `Generate an audit checklist for 🎯 Training Usage & Objectives.`

## 1. What This Track Studies

Use this track to connect a data object to the objective or system component that consumes it.

The same paper can release examples, train a reward, evaluate a model, and disclose a model report. For builders, the crucial question is not only what the data is, but how it is consumed. This track organizes papers by training usage and optimization role.

It turns the atlas from a list into a design guide. A contributor should identify whether a record feeds SFT, distillation, DPO, reward modeling, PRM training, RLVR, agent training, reranking, evaluation, or audit. Those uses require different metadata and have different risks.

The track also prevents overclaiming. A benchmark score is not necessarily training data; a preference pair is not necessarily a robust reward; a verifier outcome is not necessarily a reusable RL signal without cost and false-positive analysis.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧱 SFT / instruction tuning | data used as supervised target behavior | target text hides verifier and source assumptions |
| 📚 Distillation | teacher outputs, traces, or policies distilled into a student | teacher lineage is hidden |
| ⚖️ Preference optimization | pairwise feedback for DPO/IPO/KTO-style objectives | pair context does not match downstream use |
| 🎚️ Reward modeling / ORM | scalar or pairwise data used to train outcome rewards | reward can be overoptimized |
| 🪜 PRM / process supervision | step-level or trace-level signals used to train process rewards | PRM rewards trace style |
| 🏋️ RLVR / verifier RL | programmatic or verifier rewards used in RL | verifier false positives become policy incentives |
| 🌐 Agent training | environment episodes, tool traces, or terminal rewards for agent policies | environment cannot be replayed |
| 🧪 Evaluation / reranking / audit | data used for scoring, selection, reporting, or failure analysis | evaluation data becomes training data |

### Contents

- [🧱 SFT / instruction tuning](#sft-instruction-tuning)
- [📚 Distillation](#distillation)
- [⚖️ Preference optimization](#preference-optimization)
- [🎚️ Reward modeling / ORM](#reward-modeling-orm)
- [🪜 PRM / process supervision](#prm-process-supervision)
- [🏋️ RLVR / verifier RL](#rlvr-verifier-rl)
- [🌐 Agent training](#agent-training)
- [🧪 Evaluation / reranking / audit](#evaluation-reranking-audit)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865) | 2026 | [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/sources/agnostics-universal-learning-environment-2026) | Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings. | Programmatic execution verifier that judges behavior rather than language-specific syntax alone. | It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface. |
| [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300) | 2024 | [Paper](https://arxiv.org/abs/2402.03300) · [DOI](https://doi.org/10.48550/arXiv.2402.03300) · [HF](https://huggingface.co/deepseek-ai/deepseek-math-7b-base) · [Paper Card Source](../../paper_cards/sources/deepseekmath-2024) | Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline. | GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation. | High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target. |
| [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/sources/leandojo-2023) | Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit. | Lean proof-environment response and terminal kernel acceptance. | It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it. |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [DOI](https://doi.org/10.48550/arXiv.2305.20050) · [Paper Card Source](../../paper_cards/sources/lets-verify-step-by-step-2023) | Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning. | Process reward model trained from human step-level labels. | Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection. |
| [Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938) | 2021 | [Paper](https://arxiv.org/abs/2105.09938) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html) · [DOI](https://doi.org/10.48550/arXiv.2105.09938) · [Code](https://github.com/hendrycks/apps) · [HF](https://huggingface.co/datasets/codeparrot/apps) · [Paper Card Source](../../paper_cards/sources/apps-2021) | Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases. | Functional correctness under test execution. | It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite. |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) | 2025 | [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025) | candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack | small LLM verifier augmenting rules | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. |
| [Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](https://arxiv.org/abs/2312.06585) | 2024 | [Paper](https://arxiv.org/abs/2312.06585) · [DOI](https://doi.org/10.48550/arXiv.2312.06585) · [Paper Card Source](../../paper_cards/sources/rest-em-self-training-2024) | Prompt, generated sample, binary feedback result, filtered training example, and iteration number.; process: self-training round, sampled solution, binary verifier result; Expectation-maximization self-training loop over verifiable problem-solving tasks. | Binary correctness feedback from answer checks or execution-style evaluators. | Strong self-training scaling paper for data reuse, scalar feedback filtering, and verifier-mediated synthetic data generation. |
| [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314) | 2024 | [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024) | Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks. | Dense process-based verifier reward models plus answer-level evaluation. | Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution. |
| [CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](https://arxiv.org/abs/2207.01780) | 2022 | [Paper](https://arxiv.org/abs/2207.01780) · [DOI](https://doi.org/10.48550/arXiv.2207.01780) · [Paper Card Source](../../paper_cards/sources/coderl-code-generation-rl-2022) | Problem, generated program, unit-test feedback, critic score, and final selected code.; process: problem statement, candidate program, unit-test result; Program execution and unit-test evaluation environment. | Unit tests and a critic trained to predict functional correctness. | Top-conference code RL paper that connects programmatic verifiers, learned critics, RL optimization, and inference-time resampling. |

## 5. Full Paper List

### <a id="sft-instruction-tuning"></a>🧱 SFT / instruction tuning

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="distillation"></a>📚 Distillation

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="preference-optimization"></a>⚖️ Preference optimization

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="reward-modeling-orm"></a>🎚️ Reward modeling / ORM

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="prm-process-supervision"></a>🪜 PRM / process supervision

- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [DOI](https://doi.org/10.48550/arXiv.2305.20050) · [Paper Card Source](../../paper_cards/sources/lets-verify-step-by-step-2023)
  _Data object:_ Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning.
  _Feedback / verifier:_ Process reward model trained from human step-level labels.
  _Recipe signal:_ teacher: Human step-level labels over model-generated reasoning.; generator: Policy model produces candidate math traces.
  _Audit focus:_ Human step labels can encode style preferences., PRM scores can reward locally plausible but globally wrong paths., Verifier calls add TTC cost that must be disclosed.
  _Why it matters:_ Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection.

### <a id="rlvr-verifier-rl"></a>🏋️ RLVR / verifier RL

- 📦 **[Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865)**
  <sub>2026 · ICLR 2026 · 📦 data release · 🧪 verifier reward · programmatic · environmental · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
  _Data object:_ Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings.
  _Feedback / verifier:_ Programmatic execution verifier that judges behavior rather than language-specific syntax alone.
  _Recipe signal:_ teacher: LLM rewrite pipeline for adapting coding datasets into I/O tasks.; generator: RLVR policy model emits target-language code.
  _Audit focus:_ I/O-only tests may miss semantic edge cases., Verifier containers can encode language-specific quirks., Dataset rewriting can change task intent.
  _Why it matters:_ It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface.
- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- 📈 **[Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](https://arxiv.org/abs/2312.06585)**
  <sub>2024 · TMLR 2024 · 📈 scaling study · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.06585) · [DOI](https://doi.org/10.48550/arXiv.2312.06585) · [Paper Card Source](../../paper_cards/sources/rest-em-self-training-2024)
  _Data object:_ Prompt, generated sample, binary feedback result, filtered training example, and iteration number.; process: self-training round, sampled solution, binary verifier result; Expectation-maximization self-training loop over verifiable problem-solving tasks.
  _Feedback / verifier:_ Binary correctness feedback from answer checks or execution-style evaluators.
  _Recipe signal:_ teacher: Scalar feedback from verifiable math/code tasks.; generator: Current policy samples candidate solutions each ReST-EM round.
  _Audit focus:_ Filtered data may become repetitive., Verifier errors are amplified across rounds., Data reuse counts can be mistaken for new unique data.
  _Why it matters:_ Strong self-training scaling paper for data reuse, scalar feedback filtering, and verifier-mediated synthetic data generation.
- 📦 **[DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 📦 data release · 📈 scaling study · programmatic · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [DOI](https://doi.org/10.48550/arXiv.2402.03300) · [HF](https://huggingface.co/deepseek-ai/deepseek-math-7b-base) · [Paper Card Source](../../paper_cards/sources/deepseekmath-2024)
  _Data object:_ Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline.
  _Feedback / verifier:_ GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation.
  _Recipe signal:_ teacher: Math corpus filters, instruction examples, and benchmark answer supervision.; generator: DeepSeekMath-Instruct/RL models generate solutions.
  _Audit focus:_ Web data filtering may preserve benchmark leakage., GRPO gains can be confused with data-scale gains., Self-consistency improves scores but costs 64 samples.
  _Why it matters:_ High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target.
- 📈 **[Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314)**
  <sub>2024 · arXiv · 📈 scaling study · 🧪 verifier reward · mixed · judgment required · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024)
  _Data object:_ Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks.
  _Feedback / verifier:_ Dense process-based verifier reward models plus answer-level evaluation.
  _Recipe signal:_ teacher: Benchmark answers and trained verifier reward models provide selection signal.; generator: Policy model generates multiple candidate traces under a budget.
  _Audit focus:_ Verifier quality can dominate the measured scaling curve., Difficulty estimation can leak benchmark-specific assumptions., More samples can be mistaken for more unique data.
  _Why it matters:_ Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution.
- 📦 **[LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS 2023 Datasets and Benchmarks · 📦 data release · 🧰 benchmark · programmatic · environmental · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [DOI](https://doi.org/10.48550/arXiv.2306.15626) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://leandojo.org/leandojo) · [Paper Card Source](../../paper_cards/sources/leandojo-2023)
  _Data object:_ Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit.
  _Feedback / verifier:_ Lean proof-environment response and terminal kernel acceptance.
  _Recipe signal:_ teacher: Human-written mathlib proofs and premise-use annotations.; generator: The tactic model interacts with Lean and retrieves accessible premises.
  _Audit focus:_ Mismatched Lean, mathlib, or import versions change checker behavior., Proof-environment wrappers can misjudge valid proofs., Retrieval can mask memorization unless premise-aware splits are used.
  _Why it matters:_ It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it.
- 🧪 **[CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](https://arxiv.org/abs/2207.01780)**
  <sub>2022 · NeurIPS 2022 · 🧪 verifier reward · 🏗️ construction recipe · programmatic · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2207.01780) · [DOI](https://doi.org/10.48550/arXiv.2207.01780) · [Paper Card Source](../../paper_cards/sources/coderl-code-generation-rl-2022)
  _Data object:_ Problem, generated program, unit-test feedback, critic score, and final selected code.; process: problem statement, candidate program, unit-test result; Program execution and unit-test evaluation environment.
  _Feedback / verifier:_ Unit tests and a critic trained to predict functional correctness.
  _Recipe signal:_ teacher: Ground-truth programs, unit tests, and functional correctness signals.; generator: Actor model generates code and can regenerate using feedback.
  _Audit focus:_ Unit tests can be incomplete or overfit., Critic scores may reward test-passing shortcuts., Inference regeneration budget changes pass@k comparability.
  _Why it matters:_ Top-conference code RL paper that connects programmatic verifiers, learned critics, RL optimization, and inference-time resampling.

### <a id="agent-training"></a>🌐 Agent training

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="evaluation-reranking-audit"></a>🧪 Evaluation / reranking / audit

- 🧰 **[Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938)**
  <sub>2021 · NeurIPS 2021 Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · environmental · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2105.09938) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html) · [DOI](https://doi.org/10.48550/arXiv.2105.09938) · [Code](https://github.com/hendrycks/apps) · [HF](https://huggingface.co/datasets/codeparrot/apps) · [Paper Card Source](../../paper_cards/sources/apps-2021)
  _Data object:_ Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases.
  _Feedback / verifier:_ Functional correctness under test execution.
  _Recipe signal:_ teacher: Reference programs and tests.; generator: Curated coding-challenge tasks and downstream code-generation policies.
  _Audit focus:_ Tests can under-specify intended behavior., Public or leaked tests reward benchmark memorization., Sandbox and dependency differences can make execution non-reproducible.
  _Why it matters:_ It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite.

## 6. What to Audit

- Which objective consumes the data: SFT, distillation, DPO, RM, PRM, RLVR, agent imitation, evaluation, or audit?
- Is the same data reused across training, validation, reward modeling, and evaluation?
- Are objective-specific fields preserved rather than collapsed into a generic prompt-answer pair?

## 7. Open Problems

- Which objective-specific metadata should be mandatory in paper cards?
- How can a repository detect unsafe reuse across training and evaluation?
- When should a benchmark be treated as a feedback source rather than only an evaluation surface?
- How should contributors tag multi-use frontier reports?

## 8. Related Paper-Card Sources

- [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](../../paper_cards/sources/rest-em-self-training-2024)
- [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](../../paper_cards/sources/deepseekmath-2024)
- [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024)
- [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](../../paper_cards/sources/leandojo-2023)
- [Let's Verify Step by Step](../../paper_cards/sources/lets-verify-step-by-step-2023)
- [CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](../../paper_cards/sources/coderl-code-generation-rl-2022)
- [Measuring Coding Challenge Competence With APPS](../../paper_cards/sources/apps-2021)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
