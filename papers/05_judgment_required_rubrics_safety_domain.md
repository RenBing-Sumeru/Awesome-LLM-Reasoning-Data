# ⚖️ Judgment-Required Rubrics, Safety, Medical, and Domain Data

> Rubric rewards, health and safety benchmarks, factuality, legal/finance/science data, and LLM-as-judge systems where correctness cannot be reduced to a cheap programmatic predicate.

## What this category means

Use this page when the answer needs expert judgment, calibrated uncertainty, policy interpretation, or rubric-grounded scoring rather than a single executable check.

Not every reasoning task has a unit test or exact answer. Medical reasoning may require clinical nuance, evidence use, and refusal behavior. Safety work may require taxonomy labels and policy-grounded judgments. Legal and financial tasks often need document interpretation and citation. Factuality and hallucination benchmarks demand source attribution. Rubric reward models try to turn this messy judgment into trainable feedback without pretending it is programmatic verification.

This category collects HealthBench, FaithBench, Aegis2.0, WildGuard, HarmBench, AbstentionBench, Safety Through Reasoning, RewardBench, JudgeLM, Prometheus 2, Rubrics as Rewards, OnlineRubrics, Omni-RRM, AutoRubric, Rubric-ARM, R3, FinanceBench, FinQA, TAT-QA, LegalBench, CUAD, CaseHOLD, ContractNLI, PubMedQA, BioASQ, SciFact, GPQA, HLE, ChemBench, LAB-Bench, and related domain benchmarks. The common thread is not the domain; it is the need to document the judging contract.

For a builder, the practical question is how a rubric becomes data. Does the record include the rubric text, annotator expertise, pairwise comparison, scalar score, evidence span, refusal label, risk taxonomy, or judge prompt? Can the same rubric be applied consistently across model families? Does the dataset separate training, validation, and public leaderboard use? Are sensitive domains licensed and documented well enough for reuse? These details decide whether judgment-required data is a stable reward signal or a noisy leaderboard artifact.

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| Llama-Nemotron: Efficient Reasoning Models | 2025 | arXiv | [Paper](https://arxiv.org/abs/2505.00949) · [Card](../cards/recipes/llama_nemotron.md) | Mixed post-training corpus reference for reasoning, chat, and safety partitions. |
| HealthBench | 2025 | arXiv | [Paper](https://arxiv.org/abs/2505.08775) · [Card](../cards/verifiers/healthbench.md) | Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification. |
| One Token to Fool LLM-as-a-Judge | 2025 | arXiv | [Paper](https://arxiv.org/abs/2507.08794) · [Card](../cards/verifiers/one_token_to_fool_judge.md) | Verifier-attack paper showing trivial cue tokens can flip judge verdicts. |
| RewardBench: Evaluating Reward Models for Language Modeling | 2024 | NeurIPS | [Paper](https://arxiv.org/abs/2403.13787) · [Card](../cards/verifiers/rewardbench.md) | Reward-model benchmark for understanding where preference/judge signals generalize and where they fail under distribution shift. |
| Aegis2.0 | 2025 | arXiv | [Paper](https://arxiv.org/abs/2501.09004) | Safety dataset with risk categories and label provenance. |
| Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM) | 2026 | arXiv preprint arXiv:2602.01511 | [Paper](https://arxiv.org/abs/2602.01511) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |
| Autorubric: Unifying Rubric-based LLM Evaluation | 2026 | arXiv preprint arXiv:2603.00077 | [Paper](https://arxiv.org/abs/2603.00077) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |
| Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis | 2026 | arXiv preprint arXiv:2602.00846 | [Paper](https://arxiv.org/abs/2602.00846) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |
| AbstentionBench | 2025 | arXiv | [Paper](https://arxiv.org/abs/2506.09038) | Benchmark for epistemic boundaries and non-answering behavior. |
| FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs | 2025 | arXiv preprint arXiv:2410.13210 | [Paper](https://arxiv.org/abs/2410.13210) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv preprint arXiv:2602.01511 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2602.01511)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Autorubric: Unifying Rubric-based LLM Evaluation](https://arxiv.org/abs/2603.00077)**
  <sub>2026 · arXiv preprint arXiv:2603.00077 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2603.00077)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis](https://arxiv.org/abs/2602.00846)**
  <sub>2026 · arXiv preprint arXiv:2602.00846 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2602.00846)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs](https://arxiv.org/abs/2410.13210)**
  <sub>2025 · arXiv preprint arXiv:2410.13210 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.13210)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[R3: Robust Rubric-Agnostic Reward Models](https://arxiv.org/abs/2505.13388)**
  <sub>2025 · arXiv preprint arXiv:2505.13388 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.13388)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Safety Through Reasoning: An Empirical Study of Reasoning Guardrail Models](https://arxiv.org/abs/2505.20087)**
  <sub>2025 · arXiv preprint arXiv:2505.20087 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.20087)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.

### 🧰 Benchmark

- 🧰 **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · judgment required · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.09038)
  _Why it matters:_ Benchmark for epistemic boundaries and non-answering behavior.
- 🧰 **[HealthBench](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2505.08775) · [Card](../cards/verifiers/healthbench.md)
  _Why it matters:_ Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification.
- 🧰 **[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2403.13787) · [Card](../cards/verifiers/rewardbench.md)
  _Why it matters:_ Reward-model benchmark for understanding where preference/judge signals generalize and where they fail under distribution shift.

### 📦 Data Release

- 📦 **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · judgment required · safety alignment · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2501.09004)
  _Why it matters:_ Safety dataset with risk categories and label provenance.

### 🧯 Audit Failure

- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · judgment required · evaluation · safety alignment · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674)
  _Why it matters:_ Shows reasoning traces can expose private fields.
- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794) · [Card](../cards/verifiers/one_token_to_fool_judge.md)
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.

### 🚀 Model Report

- 🚀 **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.00949) · [Card](../cards/recipes/llama_nemotron.md)
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.

### ⚠️ Needs search or metadata

- 🧭 **RewardBench 2**
  <sub>2026 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **HealthBench: Evaluating large language models towards improved human health**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Humanity's Last Exam**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **MedReason: Eliciting factual medical reasoning steps in LLMs via knowledge graphs**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **OnlineRubrics**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Rubrics as rewards**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **HarmBench**
  <sub>2024 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **LAB-Bench: Measuring capabilities of language models for biology research**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Prometheus 2: An open source language model specialized in evaluating other language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **WildGuard**
  <sub>2024 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **FinanceBench: A benchmark for financial question answering**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **GPQA**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **JudgeLM: Fine-tuned large language models are scalable judges**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Judging LLM-as-a-judge with MT-Bench and Chatbot Arena**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Large language models encode clinical knowledge**
  <sub>2023 · Nature · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **LegalBench**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **COLIEE: Competition on legal information extraction/entailment**
  <sub>2022 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **ConvFinQA: Exploring the chain of numerical reasoning in conversational finance question answering**
  <sub>2022 · EMNLP · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **TruthfulQA**
  <sub>2022 · ACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **CUAD: An expert-annotated NLP dataset for legal contract review**
  <sub>2021 · NeurIPS Datasets and Benchmarks · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **CaseHOLD: A dataset for legal holding statement prediction**
  <sub>2021 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **ContractNLI: A dataset for document-level natural language inference for contracts**
  <sub>2021 · EMNLP · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **FinQA: A dataset of numerical reasoning over financial data**
  <sub>2021 · EMNLP · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance**
  <sub>2021 · ACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **PubMedQA: A dataset for biomedical research question answering**
  <sub>2019 · EMNLP · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **An overview of the BioASQ large-scale biomedical semantic indexing and question answering competition**
  <sub>2015 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.

## What to audit

- Who wrote the rubric and who adjudicates disagreements?
- Is the judge prompt/model/version/domain expertise disclosed?
- Does the benchmark test judge brittleness, style sensitivity, and unsafe shortcuts?

## Related cards

- [HealthBench](../cards/verifiers/healthbench.md)
- [Llama-Nemotron: Efficient Reasoning Models](../cards/recipes/llama_nemotron.md)
- [One Token to Fool LLM-as-a-Judge](../cards/verifiers/one_token_to_fool_judge.md)
- [RewardBench: Evaluating Reward Models for Language Modeling](../cards/verifiers/rewardbench.md)

## Open gaps

- What should a reusable rubric-release card disclose about judge prompts, annotator expertise, and disagreement?
- How can domain benchmarks distinguish reasoning errors from missing knowledge or retrieval failure?
- When is LLM-as-judge acceptable for data construction, and when must expert review remain in the loop?
- How should safety reasoning datasets represent refusals, policy boundaries, and chain-of-thought privacy?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
