# 🧮 Programmatic Math, Code, and Proof Data

> Math answers, code execution, unit tests, theorem provers, and verifier robustness studies where correctness can often be checked by a rule or external tool.

## Why this category matters

Programmatic domains are the workbench where many reasoning-data ideas become concrete. In math, the terminal predicate may be an exact answer, symbolic equivalence, or a carefully normalized solution. In code, the substrate can be a compiler, unit tests, hidden tests, or an execution trace. In formal proof, Lean or another prover turns a generated step into a machine-checkable artifact. These domains make the feedback contract visible enough to train with RLVR, filter teacher traces, and audit false positives.

That visibility does not make the data simple. Answer-verifiable math records can still leak benchmark items, reward shortcuts, or collapse diversity around familiar problem templates. Code datasets can overfit public tests, create brittle execution sandboxes, or reward solutions that exploit task wording. Proof data can hide massive retrieval and autoformalization assumptions. The useful question is not whether verification is automatic; it is what exactly is verified, what is ignored, and how the construction recipe handles uncertainty.

For builders, this category is the place to compare record designs. GSM8K and MATH made answer-level reasoning evaluation mainstream. HumanEval, APPS, BigCodeBench, LiveCodeBench, OpenCodeReasoning, and KodCode move correctness into executable code surfaces. DeepSeek-Prover, Goedel-Prover, LeanDojo, miniF2F, ProofNet, and HOList show how formal substrates can support proof search and reinforcement. Newer math releases such as OpenMathReasoning, Big-Math, DeepMath-103K, and NaturalReasoning expose post-training data recipes more directly.

Read these papers as verifier specifications. The paper title may say dataset, benchmark, or model report, but the reusable asset is often the contract: answer normalizer, test harness, proof checker, pass-rate band, source mixture, and filtering rule. Whenever a link is not pinned in local metadata, the atlas keeps the entry but marks it for search rather than adding an unverified URL.

## How to read this category

- Name the verifier: exact answer, symbolic checker, unit tests, compiler, hidden judge, proof assistant, or learned verifier.
- Check whether traces are human-written, teacher-distilled, model-sampled, search-generated, or tool-integrated.
- Look for pass-rate bands, difficulty filters, decontamination, public/private split policy, and verifier false-positive analysis.
- Avoid assuming a high benchmark score implies reusable training data; inspect whether the release exposes prompts, solutions, traces, and filtering code.

## Must-read starter set

| Paper | Year | Why start here | Link status |
|---|---:|---|---|
| OpenR1-Math-220k (2025) · 🟡 partial | 2025 | Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields. | linked |
| [OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891) (2025) · 🟡 partial | 2025 | Large-scale math reasoning trace release for programmatic verification. | linked |
| [DeepMath-103K](https://arxiv.org/abs/2504.11456) (2025) · 🟡 partial | 2025 | Math release highlighted for verifier pinning and decontamination. | linked |
| [Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) (2025) · 🟡 partial | 2025 | Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering. | linked |
| Qwen3-Coder (2025) · 🟡 partial | 2025 | Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release. | linked |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) (2023) · 🟡 partial | 2023 | Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning. | linked |
| [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592) (2024) · 🟡 partial | 2024 | Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels. | linked |
| [Math-Shepherd](https://arxiv.org/abs/2312.08935) (2024) · 🟡 partial | 2024 | Monte-Carlo-style process signal reference for step supervision. | linked |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) (2025) · 🟡 partial | 2025 | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. | linked |
| [DAPO](https://arxiv.org/abs/2503.14476) (2025) · 🟡 partial | 2025 | GRPO-lineage RLVR recipe where filtering changes what reaches the gradient. | linked |
| [R2E-Gym](https://arxiv.org/abs/2504.07164) (2025) · 🟡 partial | 2025 | Verifiable SWE environment for reasoning-to-edit tasks. | linked |
| [SWE-Gym](https://arxiv.org/abs/2412.21139) (2025) · 🟡 partial | 2025 | Repository-scale training environment showing substrate as data. | linked |
| [Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300) (2025) · 🟡 partial | 2025 | Scaling study for model-size and compute-axis views of RL post-training. | linked |
| [Spurious Rewards](https://arxiv.org/abs/2506.10947) (2025) · 🟡 partial | 2025 | Reward-signal audit for spurious behavior in RLVR. | linked |

## Promoted linked entries

This section only includes entries with at least one official artifact link and a non-seed local description. BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata.

### 📐 Math answer-verifiable data

- **[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.16891) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Large-scale math reasoning trace release for programmatic verification.
- **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · 🧮 programmatic · 🪜 answer level · 🎯 rlvr, sft · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.17387) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.11456) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · 🧮 programmatic · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [🐙 Code](https://github.com/huggingface/open-r1) · [🤗 Hugging Face](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · 📦 data release · ⚖️ judgment required · 🧮 programmatic · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.20050) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning.
- **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · 🏗️ construction recipe · 🧮 programmatic · 🔀 mixed · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2406.06592) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · 🧮 programmatic · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2312.08935) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Monte-Carlo-style process signal reference for step supervision.
- **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · 🏗️ construction recipe · 🧮 programmatic · ⚖️ judgment required · 🪜 answer level, scalar reward · 🎯 rlvr, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.14625) · [🐙 Code](https://github.com/uw-nsl/TinyV) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

### 💻 Code execution-verifiable data

- **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · 🧮 programmatic · 🌐 environmental · 🪜 answer level, full episode · 🎯 sft, rlvr · 🟡 partial</sub>
  [🐙 Code](https://github.com/QwenLM/Qwen3-Coder) · [🌐 Project](https://qwenlm.github.io/blog/qwen3-coder/) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.

### 🧪 Verifier robustness in programmatic domains

- **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · 🧮 programmatic · 🪜 scalar reward · 🎯 rlvr, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.10947) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.

### 📚 Additional local seeds

- **[DAPO](https://arxiv.org/abs/2503.14476)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · 🧮 programmatic · 🪜 answer level · 🎯 rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.14476) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ GRPO-lineage RLVR recipe where filtering changes what reaches the gradient.
- **[R2E-Gym](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv · 🌐 agent environment · 🧰 benchmark · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 agent training, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.07164) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Verifiable SWE environment for reasoning-to-edit tasks.
- **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 agent training, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.21139) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Repository-scale training environment showing substrate as data.
- **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · 🧮 programmatic · 🪜 answer level · 🎯 rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2509.25300) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Scaling study for model-size and compute-axis views of RL post-training.

## Needs-search / metadata queue

These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added.

- **LiveCodeBench: Holistic and contamination-free evaluation of large language models for code**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Big-math: A large-scale, high-quality math dataset for reinforcement learning and supervised fine-tuning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · 🧰 benchmark · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.02951) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 📈 scaling study · 🧮 programmatic · 🔀 mixed · 🪜 answer level, scalar reward · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.09075) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2407.18901) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Measuring mathematical problem solving with the MATH dataset**
  <sub>2021 · NeurIPS Datasets and Benchmarks · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions**
  <sub>2024 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeekMath: Pushing the limits of mathematical reasoning in open language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **OpenCodeReasoning-2: Scalable code reasoning data**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **OpenCodeReasoning: Code reasoning traces at scale**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Goedel-Prover-V2: Scaling Formal Theorem Proving with Scaffolded Data Synthesis and Self-Correction](https://arxiv.org/abs/2508.03613)**
  <sub>2025 · arXiv preprint arXiv:2508.03613 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2508.03613) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · 🧪 verifier reward · ⚖️ judgment required · 🧮 programmatic · 🪜 step level · 🎯 evaluation, process supervision · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.06559) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **MetaMath: Bootstrap your own mathematical questions for large language models**
  <sub>2023 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **WizardMath: Empowering mathematical reasoning for large language models via reinforced evol-instruct**
  <sub>2023 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **FrontierMath: A benchmark for evaluating advanced mathematical reasoning in AI**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **OpenCodeInterpreter: Integrating code generation with execution and refinement**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](https://arxiv.org/abs/2502.13124)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.13124) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **HOList: An environment for machine learning of higher-order logic theorem proving**
  <sub>2019 · ICML · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Measuring coding challenge competence with APPS**
  <sub>2021 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **miniF2F: A cross-system benchmark for formal olympiad-level mathematics**
  <sub>2021 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LeanDojo: Theorem proving with retrieval-augmented language models**
  <sub>2023 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ProofNet: Autoformalizing and formally proving undergraduate-level mathematics**
  <sub>2023 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeek-Prover: Advancing theorem proving in LLMs**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning](https://arxiv.org/abs/2505.22203)**
  <sub>2025 · arXiv preprint arXiv:2505.22203 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.22203) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Draft, sketch, and prove: Guiding formal theorem provers with informal proofs**
  <sub>2022 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Improve mathematical reasoning in language models by automated process supervision**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **MATH-Perturb**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Qwen2.5-Math-PRM**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **VAR-MATH**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 state action level · 🎯 sft, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2307.16789) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335)**
  <sub>2025 · arXiv preprint arXiv:2505.03335 · 🏗️ construction recipe · 📈 scaling study · 🧮 programmatic · 🪜 answer level · 🎯 rlvr, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.03335) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · 🏗️ construction recipe · 🔀 mixed · 🧮 programmatic · 🪜 answer level, full episode · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.13585) · [🐙 Code](https://github.com/MiniMax-AI/MiniMax-M1) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **MAmmoTH: Building math generalist models through hybrid instruction tuning**
  <sub>2023 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Goedel-Prover: A frontier model for open-source automated theorem proving**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SciCode: A benchmark for scientific code generation and reasoning**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.

## Open questions

- How should math releases expose answer normalizers and verifier edge cases so downstream RLVR does not optimize quirks?
- Can public code benchmarks remain useful for training when hidden tests and benchmark refresh cycles are expensive?
- What is the right metadata for proof traces: informal proof, formal statement, search tree, failed attempts, retrieved lemmas, or final proof only?
- How much diversity is lost when data construction filters aggressively by pass-rate or teacher agreement?

## Related docs

- [02_verifier_anchored_taxonomy.md](../docs/02_verifier_anchored_taxonomy.md)
- [03_reasoning_data_objects.md](../docs/03_reasoning_data_objects.md)
- [04_data_quality.md](../docs/04_data_quality.md)
- [05_construction_cookbook.md](../docs/05_construction_cookbook.md)

## Related cards

- [math_reasoning_release_card.md](../cards/examples/math_reasoning_release_card.md)
- [verifier_card_template.md](../cards/verifier_card_template.md)
- [recipe_card_template.md](../cards/recipe_card_template.md)

## Back to map

- [📚 Paper atlas README](README.md)
- [🌟 Repository README](../README.md)
