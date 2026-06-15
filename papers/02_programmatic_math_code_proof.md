# 🧮 Programmatic Math, Code, and Proof Data

> Math answers, code execution, unit tests, theorem provers, and verifier robustness studies where correctness can often be checked by a rule or external tool.

## What this category means

Use this category to study the cleanest verifier-bearing reasoning records: problems, traces, executable checks, proof assistants, pass-rate filters, and decontamination claims.

Programmatic domains are the workbench where many reasoning-data ideas become concrete. In math, the terminal predicate may be an exact answer, symbolic equivalence, or a carefully normalized solution. In code, the substrate can be a compiler, unit tests, hidden tests, or an execution trace. In formal proof, Lean or another prover turns a generated step into a machine-checkable artifact. These domains make the feedback contract visible enough to train with RLVR, filter teacher traces, and audit false positives.

That visibility does not make the data simple. Answer-verifiable math records can still leak benchmark items, reward shortcuts, or collapse diversity around familiar problem templates. Code datasets can overfit public tests, create brittle execution sandboxes, or reward solutions that exploit task wording. Proof data can hide massive retrieval and autoformalization assumptions. The useful question is not whether verification is automatic; it is what exactly is verified, what is ignored, and how the construction recipe handles uncertainty.

For builders, this category is the place to compare record designs. GSM8K and MATH made answer-level reasoning evaluation mainstream. HumanEval, APPS, BigCodeBench, LiveCodeBench, OpenCodeReasoning, and KodCode move correctness into executable code surfaces. DeepSeek-Prover, Goedel-Prover, LeanDojo, miniF2F, ProofNet, and HOList show how formal substrates can support proof search and reinforcement. Newer math releases such as OpenMathReasoning, Big-Math, DeepMath-103K, and NaturalReasoning expose post-training data recipes more directly.

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| Big-Math-RL-Verified | 2025 | arXiv | [Paper](https://arxiv.org/abs/2502.17387) · [Card](../cards/releases/big_math.md) | Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering. |
| DeepMath-103K | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md) | Math release highlighted for verifier pinning and decontamination. |
| KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding | 2025 | ACL Findings | [Paper](https://arxiv.org/abs/2503.02951) · [Card](../cards/releases/kodcode.md) | Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR. |
| OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique | 2025 | arXiv | [Paper](https://arxiv.org/abs/2507.09075) · [Card](../cards/releases/opencodereasoning_ii.md) | Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique. |
| OpenMathReasoning: A large-scale dataset of math reasoning traces | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.16891) · [Card](../cards/releases/openmathreasoning.md) | Large-scale math reasoning trace release for programmatic verification. |
| SWE-Gym | 2025 | arXiv | [Paper](https://arxiv.org/abs/2412.21139) · [Card](../cards/agents/swe_gym.md) | Repository-scale training environment showing substrate as data. |
| GSM8K: Grade School Math 8K | 2021 | arXiv / OpenAI dataset | [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../cards/benchmarks/gsm8k-grade-school-math-8k.md) | GSM8K is the dataset anchor for early verifier-based math reasoning and remains a common sanity check for post-training reasoning data. |
| HumanEval: Hand-Written Evaluation Set | 2021 | arXiv / OpenAI dataset | [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../cards/benchmarks/humaneval-hand-written-evaluation-set.md) | HumanEval made executable unit tests a standard verifier for code reasoning, pass@k evaluation, and later code-data recipes. |
| Measuring mathematical problem solving with the MATH dataset | 2021 | NeurIPS Datasets and Benchmarks | [Paper](https://arxiv.org/abs/2103.03874) · [Code](https://github.com/hendrycks/math) · [Card](../cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) | MATH became a core answer-verifiable reasoning surface for evaluating and training math reasoning behavior. |
| Absolute Zero: Reinforced Self-play Reasoning with Zero Data | 2025 | arXiv preprint arXiv:2505.03335 | [Paper](https://arxiv.org/abs/2505.03335) · [Card](../cards/recipes/absolute_zero.md) | Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop. |

## Full paper list

### 🏗️ Construction Recipe

- 🏗️ **[Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335)**
  <sub>2025 · arXiv preprint arXiv:2505.03335 · 🏗️ construction recipe · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.03335) · [Card](../cards/recipes/absolute_zero.md)
  _Why it matters:_ Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop.
- 🏗️ **[DAPO](https://arxiv.org/abs/2503.14476)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · programmatic · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.14476) · [Card](../cards/releases/dapo.md)
  _Why it matters:_ GRPO-lineage RLVR recipe where filtering changes what reaches the gradient.

### 📦 Data Release

- 📦 **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · programmatic · rlvr · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.17387) · [Card](../cards/releases/big_math.md)
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- 📦 **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.02951) · [Card](../cards/releases/kodcode.md)
  _Why it matters:_ Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
- 📦 **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.09075) · [Card](../cards/releases/opencodereasoning_ii.md)
  _Why it matters:_ Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- 📦 **[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16891) · [Card](../cards/releases/openmathreasoning.md)
  _Why it matters:_ Large-scale math reasoning trace release for programmatic verification.
- 📦 **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.21139) · [Card](../cards/agents/swe_gym.md)
  _Why it matters:_ Repository-scale training environment showing substrate as data.

### 🧭 Survey Background

- 🧭 **[From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning](https://arxiv.org/abs/2505.22203)**
  <sub>2025 · arXiv preprint arXiv:2505.22203 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.22203)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Goedel-Prover-V2: Scaling Formal Theorem Proving with Scaffolded Data Synthesis and Self-Correction](https://arxiv.org/abs/2508.03613)**
  <sub>2025 · arXiv preprint arXiv:2508.03613 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2508.03613)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.

### 🌐 Agent Environment

- 🌐 **[R2E-Gym](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv · 🌐 agent environment · 🧰 benchmark · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.07164) · [Card](../cards/agents/r2e_gym.md)
  _Why it matters:_ Verifiable SWE environment for reasoning-to-edit tasks.

### 📈 Scaling Study

- 📈 **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · programmatic · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2509.25300)
  _Why it matters:_ Scaling study for model-size and compute-axis views of RL post-training.

### 🧯 Audit Failure

- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [Card](../cards/verifiers/spurious_rewards.md)
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.

### 🪜 Process Supervision

- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935) · [Card](../cards/verifiers/math_shepherd.md)
  _Why it matters:_ Monte-Carlo-style process signal reference for step supervision.

### 🧰 Benchmark

- 🧰 **[GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../cards/benchmarks/gsm8k-grade-school-math-8k.md)
  _Why it matters:_ GSM8K is the dataset anchor for early verifier-based math reasoning and remains a common sanity check for post-training reasoning data.
- 🧰 **[HumanEval: Hand-Written Evaluation Set](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../cards/benchmarks/humaneval-hand-written-evaluation-set.md)
  _Why it matters:_ HumanEval made executable unit tests a standard verifier for code reasoning, pass@k evaluation, and later code-data recipes.
- 🧰 **[Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Code](https://github.com/hendrycks/math) · [Card](../cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md)
  _Why it matters:_ MATH became a core answer-verifiable reasoning surface for evaluating and training math reasoning behavior.

### ⚠️ Needs search or metadata

- 🧭 **Big-math: A large-scale, high-quality math dataset for reinforcement learning and supervised fine-tuning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **MATH-Perturb**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **OpenCodeReasoning-2: Scalable code reasoning data**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **OpenCodeReasoning: Code reasoning traces at scale**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 📦 **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · programmatic · sft · distillation · L0_seeded</sub>
  [Code](https://github.com/huggingface/open-r1) · [HF](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k) · [Card](../cards/releases/openr1.md)
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- 🧭 **Qwen2.5-Math-PRM**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **VAR-MATH**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions**
  <sub>2024 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **DeepSeek-Prover: Advancing theorem proving in LLMs**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **DeepSeekMath: Pushing the limits of mathematical reasoning in open language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **FrontierMath: A benchmark for evaluating advanced mathematical reasoning in AI**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Goedel-Prover: A frontier model for open-source automated theorem proving**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Improve mathematical reasoning in language models by automated process supervision**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **LiveCodeBench: Holistic and contamination-free evaluation of large language models for code**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **OpenCodeInterpreter: Integrating code generation with execution and refinement**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **SciCode: A benchmark for scientific code generation and reasoning**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **LeanDojo: Theorem proving with retrieval-augmented language models**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **MAmmoTH: Building math generalist models through hybrid instruction tuning**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **MetaMath: Bootstrap your own mathematical questions for large language models**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **ProofNet: Autoformalizing and formally proving undergraduate-level mathematics**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **WizardMath: Empowering mathematical reasoning for large language models via reinforced evol-instruct**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Draft, sketch, and prove: Guiding formal theorem provers with informal proofs**
  <sub>2022 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Measuring coding challenge competence with APPS**
  <sub>2021 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **miniF2F: A cross-system benchmark for formal olympiad-level mathematics**
  <sub>2021 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **HOList: An environment for machine learning of higher-order logic theorem proving**
  <sub>2019 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.

## What to audit

- Is the answer normalizer, unit-test harness, proof checker, or execution environment reproducible?
- Are false positives, false negatives, and formatting shortcuts discussed?
- Are train/test split and contamination checks visible?

## Related cards

- [Absolute Zero: Reinforced Self-play Reasoning with Zero Data](../cards/recipes/absolute_zero.md)
- [Big-Math-RL-Verified](../cards/releases/big_math.md)
- [DAPO](../cards/releases/dapo.md)
- [DeepMath-103K](../cards/releases/deepmath_103k.md)
- [KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](../cards/releases/kodcode.md)
- [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](../cards/releases/opencodereasoning_ii.md)
- [OpenMathReasoning: A large-scale dataset of math reasoning traces](../cards/releases/openmathreasoning.md)
- [R2E-Gym](../cards/agents/r2e_gym.md)
- [SWE-Gym](../cards/agents/swe_gym.md)
- [Spurious Rewards](../cards/verifiers/spurious_rewards.md)
- [Math-Shepherd](../cards/verifiers/math_shepherd.md)
- [GSM8K: Grade School Math 8K](../cards/benchmarks/gsm8k-grade-school-math-8k.md)
- [HumanEval: Hand-Written Evaluation Set](../cards/benchmarks/humaneval-hand-written-evaluation-set.md)
- [Measuring mathematical problem solving with the MATH dataset](../cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md)
- [OpenR1-Math-220k](../cards/releases/openr1.md)

## Open gaps

- How should math releases expose answer normalizers and verifier edge cases so downstream RLVR does not optimize quirks?
- Can public code benchmarks remain useful for training when hidden tests and benchmark refresh cycles are expensive?
- What is the right metadata for proof traces: informal proof, formal statement, search tree, failed attempts, retrieved lemmas, or final proof only?
- How much diversity is lost when data construction filters aggressively by pass-rate or teacher agreement?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
