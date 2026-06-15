# 🧭 Surveys and Primers

> Orientation material for post-training, reasoning models, verifier-bearing data, contamination, and data-centric LLM practice.

## What this category means

Use this page when you need the map before the terrain: vocabulary, taxonomies, recurring claims, and the major research lineages that make reasoning-data papers easier to read.

Survey and primer papers are the atlas spine. A beginner can open a frontier reasoning report and see a blur of RLVR, pass-rate filters, reward heads, distillation, search, long chain-of-thought, and benchmark contamination. The survey layer slows that blur down. It separates the older instruction-following and preference-learning lineage from newer verifier-bearing reasoning-data records, then shows which ideas were inherited and which were genuinely new.

For practitioners, surveys are not passive background reading. They are a way to audit assumptions before committing data budget. A post-training team deciding between math RLVR, rubric rewards, or agent trajectories needs to know which supervision contracts can be automated, where human judgment remains expensive, and which evaluation claims are especially vulnerable to contamination. Good surveys also expose missing metadata fields: prompt source, trace author, verifier identity, decontamination rule, split policy, and training/evaluation overlap.

The trap is to treat a survey as a substitute for the primary papers. Use it instead as a routing layer. Read the taxonomy, note the claims about scaling or data quality, then jump into the papers that define concrete records and verifiers. The most useful survey notes are operational: what counts as a reasoning data object, what failure modes repeat across domains, and what a release must disclose for another team to reproduce or safely reuse it.

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| DeepMath-103K | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md) | Math release highlighted for verifier pinning and decontamination. |
| Llama-Nemotron: Efficient Reasoning Models | 2025 | arXiv | [Paper](https://arxiv.org/abs/2505.00949) · [Card](../cards/recipes/llama_nemotron.md) | Mixed post-training corpus reference for reasoning, chat, and safety partitions. |
| A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility | 2025 | Conference on Language Modeling (COLM) | [Paper](https://arxiv.org/abs/2504.07086) · [Card](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |
| DeepSeek-R1 | 2025 | arXiv | [Paper](https://arxiv.org/abs/2501.12948) · [Card](../cards/recipes/deepseek_r1.md) | Frontier reasoning report central to public RLVR and reasoning post-training recipes. |
| One Token to Fool LLM-as-a-Judge | 2025 | arXiv | [Paper](https://arxiv.org/abs/2507.08794) · [Card](../cards/verifiers/one_token_to_fool_judge.md) | Verifier-attack paper showing trivial cue tokens can flip judge verdicts. |
| Spurious Rewards | 2025 | arXiv | [Paper](https://arxiv.org/abs/2506.10947) · [Card](../cards/verifiers/spurious_rewards.md) | Reward-signal audit for spurious behavior in RLVR. |
| LiveBench: A challenging, contamination-free benchmark for large language models | 2024 | arXiv | [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/) · [Card](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) | It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items. |
| Data statements for natural language processing | 2018 | TACL | [Paper](https://aclanthology.org/Q18-1041/) · [Card](../cards/releases/data-statements-for-natural-language-processing.md) | It gives the atlas a documentation baseline for asking what a reasoning dataset discloses about source population, provenance, and generalization limits. |
| Datasheets for datasets | 2018 | arXiv | [Paper](https://arxiv.org/abs/1803.09010) · [Card](../cards/releases/datasheets-for-datasets.md) | Reasoning-data releases need the same discipline: source mixture, split policy, lineage, licensing, and known limitations should be visible before reuse. |
| Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM) | 2026 | arXiv preprint arXiv:2602.01511 | [Paper](https://arxiv.org/abs/2602.01511) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv preprint arXiv:2602.01511 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2602.01511)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Bootstrapping Post-training Signals for Open-ended Tasks via Rubric-based Self-play on Pre-training Text (POP)](https://arxiv.org/abs/2604.20051)**
  <sub>2026 · arXiv preprint arXiv:2604.20051 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2604.20051)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[SWE-Master: Unleashing the Potential of Software Engineering Agents via Post-Training](https://arxiv.org/abs/2602.03411)**
  <sub>2026 · arXiv preprint arXiv:2602.03411 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2602.03411)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Soft Contamination Means Benchmarks Test Shallow Generalization](https://arxiv.org/abs/2602.12413)**
  <sub>2026 · arXiv preprint arXiv:2602.12413 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2602.12413)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled)](https://arxiv.org/abs/2503.19633)**
  <sub>2025 · arXiv preprint arXiv:2503.19633 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2503.19633)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · unknown · unknown · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07086) · [Card](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[A Survey on LLM Mid-Training](https://arxiv.org/abs/2510.23081)**
  <sub>2025 · arXiv preprint arXiv:2510.23081 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2510.23081)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[AM-Thinking-v1: Advancing the Frontier of Reasoning at 32B Scale](https://arxiv.org/abs/2505.08311)**
  <sub>2025 · arXiv preprint arXiv:2505.08311 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.08311)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv preprint arXiv:2501.09004 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2501.09004)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131)**
  <sub>2025 · arXiv preprint arXiv:2506.13131 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.13131)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Beyond Correctness: Harmonizing Process and Outcome Rewards through RL Training (PROF)](https://arxiv.org/abs/2509.03403)**
  <sub>2025 · arXiv preprint arXiv:2509.03403 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2509.03403)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Clip-Low Increases Entropy and Clip-High Decreases Entropy in Reinforcement Learning of Large Language Models](https://arxiv.org/abs/2509.26114)**
  <sub>2025 · arXiv preprint arXiv:2509.26114 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2509.26114)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Cognitive Behaviors that Enable Self-Improving Reasoners, or, Four Habits of Highly Effective STaRs](https://arxiv.org/abs/2503.01307)**
  <sub>2025 · arXiv preprint arXiv:2503.01307 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2503.01307)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556)**
  <sub>2025 · arXiv preprint arXiv:2512.02556 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2512.02556)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Distillation Scaling Laws](https://arxiv.org/abs/2502.08606)**
  <sub>2025 · Proceedings of the 42nd International Conference on Machine Learning (ICML) · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.08606)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Mid-Training of Large Language Models: A Survey](https://arxiv.org/abs/2510.06826)**
  <sub>2025 · arXiv preprint arXiv:2510.06826 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2510.06826)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Search-Time Data Contamination](https://arxiv.org/abs/2508.13180)**
  <sub>2025 · arXiv preprint arXiv:2508.13180 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2508.13180)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2407.21787)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[MAmmoTH2: Scaling Instructions from the Web](https://arxiv.org/abs/2405.03548)**
  <sub>2024 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2405.03548)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Data statements for natural language processing](https://aclanthology.org/Q18-1041/)**
  <sub>2018 · TACL · 🧭 survey background · unknown · audit · L5_audit_ready</sub>
  [Paper](https://aclanthology.org/Q18-1041/) · [Card](../cards/releases/data-statements-for-natural-language-processing.md)
  _Why it matters:_ It gives the atlas a documentation baseline for asking what a reasoning dataset discloses about source population, provenance, and generalization limits.
- 🧭 **[Datasheets for datasets](https://arxiv.org/abs/1803.09010)**
  <sub>2018 · arXiv · 🧭 survey background · unknown · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/1803.09010) · [Card](../cards/releases/datasheets-for-datasets.md)
  _Why it matters:_ Reasoning-data releases need the same discipline: source mixture, split policy, lineage, licensing, and known limitations should be visible before reuse.

### 🧰 Benchmark

- 🧰 **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · judgment required · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.09038)
  _Why it matters:_ Benchmark for epistemic boundaries and non-answering behavior.
- 🧰 **[LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · mixed · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/) · [Card](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
  _Why it matters:_ It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.

### 📦 Data Release

- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.

### 🚀 Model Report

- 🚀 **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · distillation · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.12948) · [Card](../cards/recipes/deepseek_r1.md)
  _Why it matters:_ Frontier reasoning report central to public RLVR and reasoning post-training recipes.
- 🚀 **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.00949) · [Card](../cards/recipes/llama_nemotron.md)
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.

### 🧯 Audit Failure

- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · judgment required · evaluation · safety alignment · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674)
  _Why it matters:_ Shows reasoning traces can expose private fields.
- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794) · [Card](../cards/verifiers/one_token_to_fool_judge.md)
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [Card](../cards/verifiers/spurious_rewards.md)
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
- 🧯 **[Subliminal Learning](https://arxiv.org/abs/2507.14805)**
  <sub>2025 · arXiv · 🧯 audit failure · mixed · distillation · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2507.14805)
  _Why it matters:_ Lineage-risk study for hidden trait transfer in synthetic data.

### 📈 Scaling Study

- 📈 **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · programmatic · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2509.25300)
  _Why it matters:_ Scaling study for model-size and compute-axis views of RL post-training.

### ⚠️ Needs search or metadata

- 🧭 **From system 1 to system 2: A survey of reasoning large language models**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **General reasoning models: Survey and perspectives**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **AI models collapse when trained on recursively generated data**
  <sub>2024 · Nature · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Is model collapse inevitable?**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Learning to reason with LLMs**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **LiveCodeBench: Holistic and contamination-free evaluation of large language models for code**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Tulu 3: Pushing frontiers in open language model post-training**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Data provenance for language models**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **A primer in BERTology: What we know about how BERT works**
  <sub>2020 · TACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.

## What to audit

- Does the taxonomy separate data objects, verifier contracts, and training uses?
- Does the survey cite primary sources rather than only secondary summaries?
- Are missing metadata fields called out instead of smoothed over?

## Related cards

- [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
- [DeepMath-103K](../cards/releases/deepmath_103k.md)
- [DeepSeek-R1](../cards/recipes/deepseek_r1.md)
- [Llama-Nemotron: Efficient Reasoning Models](../cards/recipes/llama_nemotron.md)
- [One Token to Fool LLM-as-a-Judge](../cards/verifiers/one_token_to_fool_judge.md)
- [Spurious Rewards](../cards/verifiers/spurious_rewards.md)
- [LiveBench: A challenging, contamination-free benchmark for large language models](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
- [Data statements for natural language processing](../cards/releases/data-statements-for-natural-language-processing.md)
- [Datasheets for datasets](../cards/releases/datasheets-for-datasets.md)

## Open gaps

- Which taxonomy best predicts downstream engineering decisions: verifier type, data object shape, training use, or audit risk?
- How should surveys represent partially open frontier reports whose datasets and reward functions are only described at a high level?
- What metadata is needed to make survey tables reproducible rather than merely descriptive?
- How can a living atlas keep survey pages current without overstating completeness?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
