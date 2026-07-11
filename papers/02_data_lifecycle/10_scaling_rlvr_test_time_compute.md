# 📈 Scaling, RLVR, and Test-Time Compute

> Data scaling, data reuse, RLVR optimization, verifier scaling, pass@k, sampling budgets, test-time compute, and scaling attribution.

## 1. What This Track Studies

Use this track to interpret claims about how much data, verifier strength, RL, and inference budget contribute to reasoning gains.

Scaling claims are central to modern reasoning models. Papers report more data, stronger verifiers, larger rollout budgets, better RL optimization, longer thinking, and better pass@k. This track helps readers separate those factors instead of treating every gain as a generic reasoning-data improvement.

RLVR makes the data/verifier link especially visible. A verifier can generate reward, filter samples, guide search, and evaluate final answers. The same benchmark can also become a training target. Good curation records the reward contract, data reuse, rollout policy, and inference budget.

For high-impact use, this track should become the place readers visit before believing a scaling curve.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 📈 Data scaling | number, diversity, difficulty, and uniqueness of examples | unique examples and repeated rollouts are conflated |
| 🔁 Data reuse and uniqueness | reuse counts, deduplication, repeated prompts, and train/test overlap | same source examples are counted as fresh data |
| ⏱️ Test-time compute | sampling, search, self-critique, thinking budgets, and inference-time scaling | different inference budgets are compared |
| 🎲 pass@k / sampling budget | pass@k, repeated sampling, best-of-N, and budget-aware evaluation | reported gains hide selection or budget changes |
| 🧪 Verifier scaling | how verifier strength, refresh, and coverage scale with training | verifier becomes stale or easy to exploit |
| 🏋️ RLVR optimization scaling | policy optimization, reward contracts, curriculum, and rollout policy | optimizer/scaffold gains are mistaken for data gains |
| 🔍 Scaling attribution | separating data, verifier, optimizer, model, and inference-budget effects | ablation tables do not isolate the source of improvement |

### Contents

- [📈 Data scaling](#data-scaling)
- [🔁 Data reuse and uniqueness](#data-reuse-and-uniqueness)
- [⏱️ Test-time compute](#test-time-compute)
- [🎲 pass@k / sampling budget](#pass-k-sampling-budget)
- [🧪 Verifier scaling](#verifier-scaling)
- [🏋️ RLVR optimization scaling](#rlvr-optimization-scaling)
- [🔍 Scaling attribution](#scaling-attribution)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865) | 2026 | [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/library/cards/agnostics-universal-learning-environment-2026/sources) | Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings. | Programmatic execution verifier that judges behavior rather than language-specific syntax alone. | It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface. |
| [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300) | 2024 | [Paper](https://arxiv.org/abs/2402.03300) · [DOI](https://doi.org/10.48550/arXiv.2402.03300) · [HF](https://huggingface.co/deepseek-ai/deepseek-math-7b-base) · [Paper Card Source](../../paper_cards/library/cards/deepseekmath-2024/sources) | Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline. | GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation. | High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target. |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [DOI](https://doi.org/10.48550/arXiv.2305.20050) · [Paper Card Source](../../paper_cards/library/cards/lets-verify-step-by-step-2023/sources) | Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning. | Process reward model trained from human step-level labels. | Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection. |
| [Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](https://arxiv.org/abs/2604.10182) | 2026 | [Paper](https://arxiv.org/abs/2604.10182) · [DOI](https://doi.org/10.48550/arXiv.2604.10182) · [Paper Card Source](../../paper_cards/library/cards/credit-budgeted-icpc-style-coding-2026/sources) | Coding problem, generated solution, local-test decisions, token/time/test spending, and accepted/rejected outcome.; process: token budget, test budget, elapsed time; USACOArena interactive ACM-ICPC-style coding arena. | Programmatic coding judge plus explicit credit economy over tokens, tests, and time. | It expands Track 03 from pure correctness to correctness under resource budgets, which is closer to real agent deployment and test-time compute accounting. |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) | 2025 | [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/library/cards/tinyv-2025/sources) | candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack | small LLM verifier augmenting rules | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. |
| [Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](https://arxiv.org/abs/2312.06585) | 2024 | [Paper](https://arxiv.org/abs/2312.06585) · [DOI](https://doi.org/10.48550/arXiv.2312.06585) · [Paper Card Source](../../paper_cards/library/cards/rest-em-self-training-2024/sources) | Prompt, generated sample, binary feedback result, filtered training example, and iteration number.; process: self-training round, sampled solution, binary verifier result; Expectation-maximization self-training loop over verifiable problem-solving tasks. | Binary correctness feedback from answer checks or execution-style evaluators. | Strong self-training scaling paper for data reuse, scalar feedback filtering, and verifier-mediated synthetic data generation. |
| [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314) | 2024 | [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources) | Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks. | Dense process-based verifier reward models plus answer-level evaluation. | Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution. |
| [Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171) | 2023 | [Paper](https://arxiv.org/abs/2203.11171) · [DOI](https://doi.org/10.48550/arXiv.2203.11171) · [Paper Card Source](../../paper_cards/library/cards/self-consistency-chain-of-thought-2023/sources) | Prompt, sampled reasoning paths, extracted answers, vote distribution, and selected final answer.; process: sample index, chain-of-thought path, answer extraction; Repeated inference sampling over answer-verifiable and judgment-required reasoning tasks. | Answer agreement and final-answer checking act as an implicit verifier. | Top-conference paper that turns repeated sampled reasoning paths into a simple test-time compute scaling primitive. |
| [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601) | 2023 | [Paper](https://arxiv.org/abs/2305.10601) · [DOI](https://doi.org/10.48550/arXiv.2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm) · [Paper Card Source](../../paper_cards/library/cards/tree-of-thoughts-2023/sources) | Problem, intermediate thought states, branch scores, search actions, and final solution.; process: thought node, branch candidates, state evaluation; Explicit tree search over language-model thought units. | Self-evaluation, task-specific checks, and final outcome scoring. | Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects. |
| [CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](https://arxiv.org/abs/2207.01780) | 2022 | [Paper](https://arxiv.org/abs/2207.01780) · [DOI](https://doi.org/10.48550/arXiv.2207.01780) · [Paper Card Source](../../paper_cards/library/cards/coderl-code-generation-rl-2022/sources) | Problem, generated program, unit-test feedback, critic score, and final selected code.; process: problem statement, candidate program, unit-test result; Program execution and unit-test evaluation environment. | Unit tests and a critic trained to predict functional correctness. | Top-conference code RL paper that connects programmatic verifiers, learned critics, RL optimization, and inference-time resampling. |

## 5. Full Paper List

### <a id="data-scaling"></a>📈 Data scaling

- 📈 **[Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](https://arxiv.org/abs/2312.06585)**
  <sub>2024 · TMLR 2024 · 📈 scaling study · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.06585) · [DOI](https://doi.org/10.48550/arXiv.2312.06585) · [Paper Card Source](../../paper_cards/library/cards/rest-em-self-training-2024/sources)
  _Data object:_ Prompt, generated sample, binary feedback result, filtered training example, and iteration number.; process: self-training round, sampled solution, binary verifier result; Expectation-maximization self-training loop over verifiable problem-solving tasks.
  _Feedback / verifier:_ Binary correctness feedback from answer checks or execution-style evaluators.
  _Recipe signal:_ teacher: Scalar feedback from verifiable math/code tasks.; generator: Current policy samples candidate solutions each ReST-EM round.
  _Audit focus:_ Filtered data may become repetitive., Verifier errors are amplified across rounds., Data reuse counts can be mistaken for new unique data.
  _Why it matters:_ Strong self-training scaling paper for data reuse, scalar feedback filtering, and verifier-mediated synthetic data generation.
- 📦 **[DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 📦 data release · 📈 scaling study · programmatic · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [DOI](https://doi.org/10.48550/arXiv.2402.03300) · [HF](https://huggingface.co/deepseek-ai/deepseek-math-7b-base) · [Paper Card Source](../../paper_cards/library/cards/deepseekmath-2024/sources)
  _Data object:_ Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline.
  _Feedback / verifier:_ GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation.
  _Recipe signal:_ teacher: Math corpus filters, instruction examples, and benchmark answer supervision.; generator: DeepSeekMath-Instruct/RL models generate solutions.
  _Audit focus:_ Web data filtering may preserve benchmark leakage., GRPO gains can be confused with data-scale gains., Self-consistency improves scores but costs 64 samples.
  _Why it matters:_ High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target.

### <a id="data-reuse-and-uniqueness"></a>🔁 Data reuse and uniqueness

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="test-time-compute"></a>⏱️ Test-time compute

- 🧰 **[Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](https://arxiv.org/abs/2604.10182)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2604.10182) · [DOI](https://doi.org/10.48550/arXiv.2604.10182) · [Paper Card Source](../../paper_cards/library/cards/credit-budgeted-icpc-style-coding-2026/sources)
  _Data object:_ Coding problem, generated solution, local-test decisions, token/time/test spending, and accepted/rejected outcome.; process: token budget, test budget, elapsed time; USACOArena interactive ACM-ICPC-style coding arena.
  _Feedback / verifier:_ Programmatic coding judge plus explicit credit economy over tokens, tests, and time.
  _Recipe signal:_ teacher: ICPC-style problem set and judge outcomes.; generator: Agents generate code and decide when to test or submit.
  _Audit focus:_ Budget settings can dominate model ranking., Local tests can be gamed or overused., Public programming problems can be contaminated.
  _Why it matters:_ It expands Track 03 from pure correctness to correctness under resource budgets, which is closer to real agent deployment and test-time compute accounting.
- 📈 **[Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314)**
  <sub>2024 · arXiv · 📈 scaling study · 🧪 verifier reward · mixed · judgment required · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources)
  _Data object:_ Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks.
  _Feedback / verifier:_ Dense process-based verifier reward models plus answer-level evaluation.
  _Recipe signal:_ teacher: Benchmark answers and trained verifier reward models provide selection signal.; generator: Policy model generates multiple candidate traces under a budget.
  _Audit focus:_ Verifier quality can dominate the measured scaling curve., Difficulty estimation can leak benchmark-specific assumptions., More samples can be mistaken for more unique data.
  _Why it matters:_ Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution.
- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [DOI](https://doi.org/10.48550/arXiv.2305.20050) · [Paper Card Source](../../paper_cards/library/cards/lets-verify-step-by-step-2023/sources)
  _Data object:_ Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning.
  _Feedback / verifier:_ Process reward model trained from human step-level labels.
  _Recipe signal:_ teacher: Human step-level labels over model-generated reasoning.; generator: Policy model produces candidate math traces.
  _Audit focus:_ Human step labels can encode style preferences., PRM scores can reward locally plausible but globally wrong paths., Verifier calls add TTC cost that must be disclosed.
  _Why it matters:_ Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection.
- 📈 **[Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601)**
  <sub>2023 · NeurIPS 2023 · 📈 scaling study · 🏗️ construction recipe · judgment required · mixed · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.10601) · [DOI](https://doi.org/10.48550/arXiv.2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm) · [Paper Card Source](../../paper_cards/library/cards/tree-of-thoughts-2023/sources)
  _Data object:_ Problem, intermediate thought states, branch scores, search actions, and final solution.; process: thought node, branch candidates, state evaluation; Explicit tree search over language-model thought units.
  _Feedback / verifier:_ Self-evaluation, task-specific checks, and final outcome scoring.
  _Recipe signal:_ teacher: Task instructions and final evaluators.; generator: Policy model expands tree nodes into candidate thoughts.
  _Audit focus:_ Value estimates may be prompt-sensitive., Search budget can dominate model ranking., Small task suites can overfit scaffolds.
  _Why it matters:_ Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects.
- 🧪 **[CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](https://arxiv.org/abs/2207.01780)**
  <sub>2022 · NeurIPS 2022 · 🧪 verifier reward · 🏗️ construction recipe · programmatic · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2207.01780) · [DOI](https://doi.org/10.48550/arXiv.2207.01780) · [Paper Card Source](../../paper_cards/library/cards/coderl-code-generation-rl-2022/sources)
  _Data object:_ Problem, generated program, unit-test feedback, critic score, and final selected code.; process: problem statement, candidate program, unit-test result; Program execution and unit-test evaluation environment.
  _Feedback / verifier:_ Unit tests and a critic trained to predict functional correctness.
  _Recipe signal:_ teacher: Ground-truth programs, unit tests, and functional correctness signals.; generator: Actor model generates code and can regenerate using feedback.
  _Audit focus:_ Unit tests can be incomplete or overfit., Critic scores may reward test-passing shortcuts., Inference regeneration budget changes pass@k comparability.
  _Why it matters:_ Top-conference code RL paper that connects programmatic verifiers, learned critics, RL optimization, and inference-time resampling.

### <a id="pass-k-sampling-budget"></a>🎲 pass@k / sampling budget

- 📈 **[Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR 2023 · 📈 scaling study · 🏗️ construction recipe · judgment required · mixed · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [DOI](https://doi.org/10.48550/arXiv.2203.11171) · [Paper Card Source](../../paper_cards/library/cards/self-consistency-chain-of-thought-2023/sources)
  _Data object:_ Prompt, sampled reasoning paths, extracted answers, vote distribution, and selected final answer.; process: sample index, chain-of-thought path, answer extraction; Repeated inference sampling over answer-verifiable and judgment-required reasoning tasks.
  _Feedback / verifier:_ Answer agreement and final-answer checking act as an implicit verifier.
  _Recipe signal:_ teacher: Few-shot chain-of-thought exemplars and benchmark answer keys.; generator: Policy model generates diverse traces at inference time.
  _Audit focus:_ More samples can hide answer-extraction bias., Majority vote can amplify a common wrong shortcut., Sampling budget may be incomparable across papers.
  _Why it matters:_ Top-conference paper that turns repeated sampled reasoning paths into a simple test-time compute scaling primitive.

### <a id="verifier-scaling"></a>🧪 Verifier scaling

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="rlvr-optimization-scaling"></a>🏋️ RLVR optimization scaling

- 📦 **[Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865)**
  <sub>2026 · ICLR 2026 · 📦 data release · 🧪 verifier reward · programmatic · environmental · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/library/cards/agnostics-universal-learning-environment-2026/sources)
  _Data object:_ Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings.
  _Feedback / verifier:_ Programmatic execution verifier that judges behavior rather than language-specific syntax alone.
  _Recipe signal:_ teacher: LLM rewrite pipeline for adapting coding datasets into I/O tasks.; generator: RLVR policy model emits target-language code.
  _Audit focus:_ I/O-only tests may miss semantic edge cases., Verifier containers can encode language-specific quirks., Dataset rewriting can change task intent.
  _Why it matters:_ It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface.
- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/library/cards/tinyv-2025/sources)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

### <a id="scaling-attribution"></a>🔍 Scaling attribution

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- Does the claim improve asymptote, sample efficiency, or inference budget allocation?
- Are pass@k, rollout budget, verifier refresh, and reuse count reported?
- Can data scale be separated from test-time compute scale?

## 7. Open Problems

- What is the right unit of reasoning-data scale: prompt, trace, rollout, verified answer, or environment episode?
- How should RLVR reports disclose verifier false positives?
- Can data scale and test-time compute scale be disentangled cleanly?
- How much reuse is acceptable before benchmark claims become fragile?

## 8. Related Paper-Card Sources

- [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](../../paper_cards/library/cards/agnostics-universal-learning-environment-2026/sources)
- [Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](../../paper_cards/library/cards/credit-budgeted-icpc-style-coding-2026/sources)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/library/cards/tinyv-2025/sources)
- [Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](../../paper_cards/library/cards/rest-em-self-training-2024/sources)
- [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](../../paper_cards/library/cards/deepseekmath-2024/sources)
- [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](../../paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources)
- [Let's Verify Step by Step](../../paper_cards/library/cards/lets-verify-step-by-step-2023/sources)
- [Self-Consistency Improves Chain of Thought Reasoning in Language Models](../../paper_cards/library/cards/self-consistency-chain-of-thought-2023/sources)
- [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](../../paper_cards/library/cards/tree-of-thoughts-2023/sources)
- [CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](../../paper_cards/library/cards/coderl-code-generation-rl-2022/sources)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
