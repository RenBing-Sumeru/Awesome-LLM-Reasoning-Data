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
| A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility | 2025 | Conference on Language Modeling (COLM) | [Paper](https://arxiv.org/abs/2504.07086) · [Card](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) | It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains. |
| DeepSeek-R1 | 2025 | arXiv | [Paper](https://arxiv.org/abs/2501.12948) · [Card](../cards/recipes/deepseek_r1.md) | It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior. |
| One Token to Fool LLM-as-a-Judge | 2025 | arXiv | [Paper](https://arxiv.org/abs/2507.08794) · [Card](../cards/verifiers/one_token_to_fool_judge.md) | Verifier-attack paper showing trivial cue tokens can flip judge verdicts. |
| Spurious Rewards | 2025 | arXiv | [Paper](https://arxiv.org/abs/2506.10947) · [Card](../cards/verifiers/spurious_rewards.md) | Reward-signal audit for spurious behavior in RLVR. |
| LiveBench: A challenging, contamination-free benchmark for large language models | 2024 | arXiv | [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/) · [Card](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) | It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items. |
| Data statements for natural language processing | 2018 | TACL | [Paper](https://aclanthology.org/Q18-1041/) · [Card](../cards/releases/data-statements-for-natural-language-processing.md) | Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization. |
| Datasheets for datasets | 2018 | arXiv | [Paper](https://arxiv.org/abs/1803.09010) · [Card](../cards/releases/datasheets-for-datasets.md) | It gives reasoning-data releases a minimum disclosure standard before anyone reuses prompts, traces, labels, rewards, or benchmark items. |
| Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM) | 2026 | arXiv preprint arXiv:2602.01511 | [Paper](https://arxiv.org/abs/2602.01511) | Use this entry as a verified citation waypoint until a paper-specific audit note is added. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv preprint arXiv:2602.01511 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.01511)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Bootstrapping Post-training Signals for Open-ended Tasks via Rubric-based Self-play on Pre-training Text (POP)](https://arxiv.org/abs/2604.20051)**
  <sub>2026 · arXiv preprint arXiv:2604.20051 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.20051)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[SWE-Master: Unleashing the Potential of Software Engineering Agents via Post-Training](https://arxiv.org/abs/2602.03411)**
  <sub>2026 · arXiv preprint arXiv:2602.03411 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.03411)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Soft Contamination Means Benchmarks Test Shallow Generalization](https://arxiv.org/abs/2602.12413)**
  <sub>2026 · arXiv preprint arXiv:2602.12413 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.12413)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled)](https://arxiv.org/abs/2503.19633)**
  <sub>2025 · arXiv preprint arXiv:2503.19633 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.19633)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · unknown · unknown · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07086) · [Card](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
  _Why it matters:_ It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains.
- 🧭 **[A Survey on LLM Mid-Training](https://arxiv.org/abs/2510.23081)**
  <sub>2025 · arXiv preprint arXiv:2510.23081 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2510.23081)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[AM-Thinking-v1: Advancing the Frontier of Reasoning at 32B Scale](https://arxiv.org/abs/2505.08311)**
  <sub>2025 · arXiv preprint arXiv:2505.08311 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.08311)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv preprint arXiv:2501.09004 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2501.09004)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131)**
  <sub>2025 · arXiv preprint arXiv:2506.13131 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.13131)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Beyond Correctness: Harmonizing Process and Outcome Rewards through RL Training (PROF)](https://arxiv.org/abs/2509.03403)**
  <sub>2025 · arXiv preprint arXiv:2509.03403 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.03403)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Clip-Low Increases Entropy and Clip-High Decreases Entropy in Reinforcement Learning of Large Language Models](https://arxiv.org/abs/2509.26114)**
  <sub>2025 · arXiv preprint arXiv:2509.26114 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.26114)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Cognitive Behaviors that Enable Self-Improving Reasoners, or, Four Habits of Highly Effective STaRs](https://arxiv.org/abs/2503.01307)**
  <sub>2025 · arXiv preprint arXiv:2503.01307 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.01307)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556)**
  <sub>2025 · arXiv preprint arXiv:2512.02556 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2512.02556)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Distillation Scaling Laws](https://arxiv.org/abs/2502.08606)**
  <sub>2025 · Proceedings of the 42nd International Conference on Machine Learning (ICML) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.08606)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Mid-Training of Large Language Models: A Survey](https://arxiv.org/abs/2510.06826)**
  <sub>2025 · arXiv preprint arXiv:2510.06826 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2510.06826)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Search-Time Data Contamination](https://arxiv.org/abs/2508.13180)**
  <sub>2025 · arXiv preprint arXiv:2508.13180 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.13180)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2407.21787)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[MAmmoTH2: Scaling Instructions from the Web](https://arxiv.org/abs/2405.03548)**
  <sub>2024 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2405.03548)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Data statements for natural language processing](https://aclanthology.org/Q18-1041/)**
  <sub>2018 · TACL · 🧭 survey background · unknown · audit · L5_audit_ready</sub>
  [Paper](https://aclanthology.org/Q18-1041/) · [Card](../cards/releases/data-statements-for-natural-language-processing.md)
  _Why it matters:_ Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization.
- 🧭 **[Datasheets for datasets](https://arxiv.org/abs/1803.09010)**
  <sub>2018 · arXiv · 🧭 survey background · unknown · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/1803.09010) · [Card](../cards/releases/datasheets-for-datasets.md)
  _Why it matters:_ It gives reasoning-data releases a minimum disclosure standard before anyone reuses prompts, traces, labels, rewards, or benchmark items.

### 📦 Data Release

- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.

### 🚀 Model Report

- 🚀 **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · distillation · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.12948) · [Card](../cards/recipes/deepseek_r1.md)
  _Why it matters:_ It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.
- 🚀 **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.00949) · [Card](../cards/recipes/llama_nemotron.md)
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.

### 🧯 Audit Failure

- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794) · [Card](../cards/verifiers/one_token_to_fool_judge.md)
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [Card](../cards/verifiers/spurious_rewards.md)
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.

### 🧰 Benchmark

- 🧰 **[LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · mixed · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/) · [Card](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
  _Why it matters:_ It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.

### ⚠️ Needs search or metadata

- 🧭 **From system 1 to system 2: A survey of reasoning large language models**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **General reasoning models: Survey and perspectives**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **AI models collapse when trained on recursively generated data**
  <sub>2024 · Nature · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Is model collapse inevitable?**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Learning to reason with LLMs**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **LiveCodeBench: Holistic and contamination-free evaluation of large language models for code**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Tulu 3: Pushing frontiers in open language model post-training**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Data provenance for language models**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **A primer in BERTology: What we know about how BERT works**
  <sub>2020 · TACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

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
