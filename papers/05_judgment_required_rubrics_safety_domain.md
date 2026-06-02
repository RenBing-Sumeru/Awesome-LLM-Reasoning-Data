# ⚖️ Judgment-Required Rubrics, Safety, Medical, and Domain Data

> Rubric rewards, health and safety benchmarks, factuality, legal/finance/science data, and LLM-as-judge systems where correctness cannot be reduced to a cheap programmatic predicate.

## Why this category matters

Not every reasoning task has a unit test or exact answer. Medical reasoning may require clinical nuance, evidence use, and refusal behavior. Safety work may require taxonomy labels and policy-grounded judgments. Legal and financial tasks often need document interpretation and citation. Factuality and hallucination benchmarks demand source attribution. Rubric reward models try to turn this messy judgment into trainable feedback without pretending it is programmatic verification.

This category collects HealthBench, FaithBench, Aegis2.0, WildGuard, HarmBench, AbstentionBench, Safety Through Reasoning, RewardBench, JudgeLM, Prometheus 2, Rubrics as Rewards, OnlineRubrics, Omni-RRM, AutoRubric, Rubric-ARM, R3, FinanceBench, FinQA, TAT-QA, LegalBench, CUAD, CaseHOLD, ContractNLI, PubMedQA, BioASQ, SciFact, GPQA, HLE, ChemBench, LAB-Bench, and related domain benchmarks. The common thread is not the domain; it is the need to document the judging contract.

For a builder, the practical question is how a rubric becomes data. Does the record include the rubric text, annotator expertise, pairwise comparison, scalar score, evidence span, refusal label, risk taxonomy, or judge prompt? Can the same rubric be applied consistently across model families? Does the dataset separate training, validation, and public leaderboard use? Are sensitive domains licensed and documented well enough for reuse? These details decide whether judgment-required data is a stable reward signal or a noisy leaderboard artifact.

The key trap is automation theater. An LLM judge can make a task look scalable, but a judge is another model with its own vulnerabilities. This page pairs rubric systems with judge-attack and reward-benchmark context elsewhere in the atlas so readers keep asking whether feedback is reliable, calibrated, and hard to game. Missing links stay marked as `needs_search`.

## How to read this category

- Identify the rubric or policy source: expert-written criteria, pairwise preferences, risk taxonomy, domain guideline, evidence requirement, or model-judge prompt.
- Check annotator expertise, disagreement handling, calibration, and whether examples include rationales or just scalar scores.
- Separate evaluation-only benchmarks from data releases meant for reward modeling or safety alignment.
- Avoid treating LLM-as-judge scores as ground truth without adversarial, bias, and one-token attack checks.

## Must-read starter set

| Paper | Year | Why start here | Link status |
|---|---:|---|---|
| [HealthBench](https://arxiv.org/abs/2505.08775) (2025) · 🟡 partial | 2025 | Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification. | linked |
| [Aegis2.0](https://arxiv.org/abs/2501.09004) (2025) · 🟡 partial | 2025 | Safety dataset with risk categories and label provenance. | linked |
| [AbstentionBench](https://arxiv.org/abs/2506.09038) (2025) · 🟡 partial | 2025 | Benchmark for epistemic boundaries and non-answering behavior. | linked |
| [Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073) (2022) · 🟡 partial | 2022 | AI-feedback alignment recipe that makes critiques, principles, and preference signals part of the post-training data object. | linked |
| [One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794) (2025) · 🟡 partial | 2025 | Verifier-attack paper showing trivial cue tokens can flip judge verdicts. | linked |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) (2025) · 🟡 partial | 2025 | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. | linked |
| [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) (2022) · 🟡 partial | 2022 | InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping. | linked |
| [Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290) (2023) · 🟡 partial | 2023 | Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step. | linked |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) (2023) · 🟡 partial | 2023 | Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning. | linked |
| [Leaky Thoughts](https://arxiv.org/abs/2506.15674) (2025) · 🟡 partial | 2025 | Shows reasoning traces can expose private fields. | linked |
| [Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949) (2025) · 🟡 partial | 2025 | Mixed post-training corpus reference for reasoning, chat, and safety partitions. | linked |

## Promoted linked entries

This section only includes entries with at least one official artifact link and a non-seed local description. BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata.

### 🧑‍⚖️ Rubric rewards and LLM judges

- **[HealthBench](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · ⚖️ judgment required · 🪜 scalar reward, answer level · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.08775) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification.
- **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · ⚖️ judgment required · 🪜 scalar reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.08794) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.

### 🛡️ Safety, refusal, and guardrails

- **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · ⚖️ judgment required · 🪜 answer level · 🎯 evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.09038) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Benchmark for epistemic boundaries and non-answering behavior.
- **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · ⚖️ judgment required · 🪜 scalar reward · 🎯 safety alignment, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.09004) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Safety dataset with risk categories and label provenance.
- **[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073)**
  <sub>2022 · arXiv preprint · 🏗️ construction recipe · 🧭 survey background · ⚖️ judgment required · 🔀 mixed · 🪜 pairwise preference · 🎯 preference learning, safety alignment · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2212.08073) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ AI-feedback alignment recipe that makes critiques, principles, and preference signals part of the post-training data object.
- **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.00949) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.

### 🩺 Medical and scientific reasoning

- **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · 🏗️ construction recipe · 🧮 programmatic · ⚖️ judgment required · 🪜 answer level, scalar reward · 🎯 rlvr, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.14625) · [🐙 Code](https://github.com/uw-nsl/TinyV) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

### 📚 Additional local seeds

- **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · ⚖️ judgment required · 🪜 pairwise preference, scalar reward · 🎯 sft, preference learning · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.02155) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping.
- **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · ⚖️ judgment required · 🪜 pairwise preference · 🎯 preference learning · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.18290) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step.
- **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · 📦 data release · ⚖️ judgment required · 🧮 programmatic · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.20050) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning.
- **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · ⚖️ judgment required · 🪜 step level · 🎯 evaluation, safety alignment · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.15674) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Shows reasoning traces can expose private fields.

## Needs-search / metadata queue

These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added.

- **[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🧪 verifier reward · ⚖️ judgment required · 🔀 mixed · 🪜 pairwise preference, scalar reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2403.13787) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **PubMedQA: A dataset for biomedical research question answering**
  <sub>2019 · EMNLP · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs](https://arxiv.org/abs/2410.13210)**
  <sub>2025 · arXiv preprint arXiv:2410.13210 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2410.13210) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Safety Through Reasoning: An Empirical Study of Reasoning Guardrail Models](https://arxiv.org/abs/2505.20087)**
  <sub>2025 · arXiv preprint arXiv:2505.20087 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.20087) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **An overview of the BioASQ large-scale biomedical semantic indexing and question answering competition**
  <sub>2015 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **CUAD: An expert-annotated NLP dataset for legal contract review**
  <sub>2021 · NeurIPS Datasets and Benchmarks · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Judging LLM-as-a-judge with MT-Bench and Chatbot Arena**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance**
  <sub>2021 · ACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ConvFinQA: Exploring the chain of numerical reasoning in conversational finance question answering**
  <sub>2022 · EMNLP · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Prometheus 2: An open source language model specialized in evaluating other language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **WildGuard**
  <sub>2024 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Humanity's Last Exam**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **RewardBench 2**
  <sub>2026 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[R3: Robust Rubric-Agnostic Reward Models](https://arxiv.org/abs/2505.13388)**
  <sub>2025 · arXiv preprint arXiv:2505.13388 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.13388) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv preprint arXiv:2602.01511 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2602.01511) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Autorubric: Unifying Rubric-based LLM Evaluation](https://arxiv.org/abs/2603.00077)**
  <sub>2026 · arXiv preprint arXiv:2603.00077 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2603.00077) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis](https://arxiv.org/abs/2602.00846)**
  <sub>2026 · arXiv preprint arXiv:2602.00846 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2602.00846) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **MedReason: Eliciting factual medical reasoning steps in LLMs via knowledge graphs**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **FinQA: A dataset of numerical reasoning over financial data**
  <sub>2021 · EMNLP · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **FinanceBench: A benchmark for financial question answering**
  <sub>2023 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **GPQA**
  <sub>2023 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **JudgeLM: Fine-tuned large language models are scalable judges**
  <sub>2023 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LegalBench**
  <sub>2023 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **HarmBench**
  <sub>2024 · ICML · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **HealthBench: Evaluating large language models towards improved human health**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **OnlineRubrics**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Rubrics as rewards**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **CaseHOLD: A dataset for legal holding statement prediction**
  <sub>2021 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LAB-Bench: Measuring capabilities of language models for biology research**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2407.18901) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · 🧪 verifier reward · ⚖️ judgment required · 🧮 programmatic · 🪜 step level · 🎯 evaluation, process supervision · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.06559) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · 🪜 process supervision · ⚖️ judgment required · 🔀 mixed · 🪜 step level, process reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.03124) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ContractNLI: A dataset for document-level natural language inference for contracts**
  <sub>2021 · EMNLP · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **COLIEE: Competition on legal information extraction/entailment**
  <sub>2022 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **TruthfulQA**
  <sub>2022 · ACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Large language models encode clinical knowledge**
  <sub>2023 · Nature · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.

## Open questions

- What should a reusable rubric-release card disclose about judge prompts, annotator expertise, and disagreement?
- How can domain benchmarks distinguish reasoning errors from missing knowledge or retrieval failure?
- When is LLM-as-judge acceptable for data construction, and when must expert review remain in the loop?
- How should safety reasoning datasets represent refusals, policy boundaries, and chain-of-thought privacy?

## Related docs

- [06_verifiers_and_rewards.md](../docs/06_verifiers_and_rewards.md)
- [04_data_quality.md](../docs/04_data_quality.md)
- [09_audit_and_failure_modes.md](../docs/09_audit_and_failure_modes.md)
- [10_industry_onboarding_path.md](../docs/10_industry_onboarding_path.md)

## Related cards

- [rubric_reward_release_card.md](../cards/examples/rubric_reward_release_card.md)
- [verifier_card_template.md](../cards/verifier_card_template.md)

## Back to map

- [📚 Paper atlas README](README.md)
- [🌟 Repository README](../README.md)
