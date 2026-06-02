# 🧭 Surveys and Primers

> Orientation material for post-training, reasoning models, verifier-bearing data, contamination, and data-centric LLM practice.

## Why this category matters

Survey and primer papers are the atlas spine. A beginner can open a frontier reasoning report and see a blur of RLVR, pass-rate filters, reward heads, distillation, search, long chain-of-thought, and benchmark contamination. The survey layer slows that blur down. It separates the older instruction-following and preference-learning lineage from newer verifier-bearing reasoning-data records, then shows which ideas were inherited and which were genuinely new.

For practitioners, surveys are not passive background reading. They are a way to audit assumptions before committing data budget. A post-training team deciding between math RLVR, rubric rewards, or agent trajectories needs to know which supervision contracts can be automated, where human judgment remains expensive, and which evaluation claims are especially vulnerable to contamination. Good surveys also expose missing metadata fields: prompt source, trace author, verifier identity, decontamination rule, split policy, and training/evaluation overlap.

The trap is to treat a survey as a substitute for the primary papers. Use it instead as a routing layer. Read the taxonomy, note the claims about scaling or data quality, then jump into the papers that define concrete records and verifiers. The most useful survey notes are operational: what counts as a reasoning data object, what failure modes repeat across domains, and what a release must disclose for another team to reproduce or safely reuse it.

This category is intentionally broad. It includes general reasoning-model surveys, mid-training and post-training context, data documentation papers such as datasheets and data statements, and reproducibility or contamination analyses that teach how to read empirical claims. When a paper is locally indexed but lacks an official URL in `data/papers.yaml`, this page marks it as `needs_search` rather than inventing a link.

## How to read this category

- Extract the taxonomy first: what objects, feedback contracts, and training uses does the survey distinguish?
- Track what the survey treats as evidence: benchmark deltas, release metadata, verifier design, human annotation studies, or mechanistic analysis.
- Inspect whether the survey separates SFT traces, preference data, reward models, process labels, and RLVR trajectories instead of folding all post-training data together.
- Avoid copying paper lists without checking recency, official links, and whether the cited work is a dataset, benchmark, model report, or commentary.

## Must-read starter set

| Paper | Year | Why start here | Link status |
|---|---:|---|---|
| [Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073) (2022) · 🟡 partial | 2022 | AI-feedback alignment recipe that makes critiques, principles, and preference signals part of the post-training data object. | linked |
| [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) (2022) · 🟡 partial | 2022 | InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping. | linked |
| [DeepMath-103K](https://arxiv.org/abs/2504.11456) (2025) · 🟡 partial | 2025 | Math release highlighted for verifier pinning and decontamination. | linked |
| [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) · 🟡 partial | 2025 | Frontier reasoning report central to public RLVR and reasoning post-training recipes. | linked |
| [Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949) (2025) · 🟡 partial | 2025 | Mixed post-training corpus reference for reasoning, chat, and safety partitions. | linked |
| [Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300) (2025) · 🟡 partial | 2025 | Scaling study for model-size and compute-axis views of RL post-training. | linked |
| [Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903) (2022) · 🟡 partial | 2022 | Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object. | linked |
| [STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465) (2022) · 🟡 partial | 2022 | Self-training recipe that turns generated rationales into new supervision, connecting prompting, filtering, and iterative reasoning data construction. | linked |
| [Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290) (2023) · 🟡 partial | 2023 | Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step. | linked |
| [Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171) (2023) · 🟡 partial | 2023 | Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views. | linked |
| [AbstentionBench](https://arxiv.org/abs/2506.09038) (2025) · 🟡 partial | 2025 | Benchmark for epistemic boundaries and non-answering behavior. | linked |

## Promoted linked entries

This section only includes entries with at least one official artifact link and a non-seed local description. BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata.

### 🧱 Post-training and mid-training context

- **[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073)**
  <sub>2022 · arXiv preprint · 🏗️ construction recipe · 🧭 survey background · ⚖️ judgment required · 🔀 mixed · 🪜 pairwise preference · 🎯 preference learning, safety alignment · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2212.08073) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ AI-feedback alignment recipe that makes critiques, principles, and preference signals part of the post-training data object.
- **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · ⚖️ judgment required · 🪜 pairwise preference, scalar reward · 🎯 sft, preference learning · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.02155) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping.
- **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 distillation, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.12948) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Frontier reasoning report central to public RLVR and reasoning post-training recipes.
- **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.00949) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · 🧮 programmatic · 🪜 answer level · 🎯 rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2509.25300) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Scaling study for model-size and compute-axis views of RL post-training.

### 🧯 Reproducibility, collapse, and contamination primers

- **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.11456) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.

### 📚 Additional local seeds

- **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · ❔ unknown · 🪜 answer level · 🎯 evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2201.11903) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object.
- **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.14465) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Self-training recipe that turns generated rationales into new supervision, connecting prompting, filtering, and iterative reasoning data construction.
- **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · ⚖️ judgment required · 🪜 pairwise preference · 🎯 preference learning · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.18290) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step.
- **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 🧭 survey background · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 evaluation, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.11171) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views.
- **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · ⚖️ judgment required · 🪜 answer level · 🎯 evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.09038) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Benchmark for epistemic boundaries and non-answering behavior.

## Needs-search / metadata queue

These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added.

- **From system 1 to system 2: A survey of reasoning large language models**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[A Survey on LLM Mid-Training](https://arxiv.org/abs/2510.23081)**
  <sub>2025 · arXiv preprint arXiv:2510.23081 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2510.23081) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.07086) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Is model collapse inevitable?**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Mid-Training of Large Language Models: A Survey](https://arxiv.org/abs/2510.06826)**
  <sub>2025 · arXiv preprint arXiv:2510.06826 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2510.06826) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **A primer in BERTology: What we know about how BERT works**
  <sub>2020 · TACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **General reasoning models: Survey and perspectives**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Soft Contamination Means Benchmarks Test Shallow Generalization](https://arxiv.org/abs/2602.12413)**
  <sub>2026 · arXiv preprint arXiv:2602.12413 · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📄 arXiv](https://arxiv.org/abs/2602.12413) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Data statements for natural language processing**
  <sub>2018 · TACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Datasheets for datasets**
  <sub>2018 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Data provenance for language models**
  <sub>2023 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **AI models collapse when trained on recursively generated data**
  <sub>2024 · Nature · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Learning to reason with LLMs**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Search-Time Data Contamination](https://arxiv.org/abs/2508.13180)**
  <sub>2025 · arXiv preprint arXiv:2508.13180 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2508.13180) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv preprint arXiv:2602.01511 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2602.01511) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Bootstrapping Post-training Signals for Open-ended Tasks via Rubric-based Self-play on Pre-training Text (POP)](https://arxiv.org/abs/2604.20051)**
  <sub>2026 · arXiv preprint arXiv:2604.20051 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2604.20051) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[SWE-Master: Unleashing the Potential of Software Engineering Agents via Post-Training](https://arxiv.org/abs/2602.03411)**
  <sub>2026 · arXiv preprint arXiv:2602.03411 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2602.03411) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LiveBench: A challenging, contamination-free benchmark for large language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LiveCodeBench: Holistic and contamination-free evaluation of large language models for code**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Tulu 3: Pushing frontiers in open language model post-training**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](https://arxiv.org/abs/2502.13124)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.13124) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2407.21787) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[MAmmoTH2: Scaling Instructions from the Web](https://arxiv.org/abs/2405.03548)**
  <sub>2024 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2405.03548) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled)](https://arxiv.org/abs/2503.19633)**
  <sub>2025 · arXiv preprint arXiv:2503.19633 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.19633) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AM-Thinking-v1: Advancing the Frontier of Reasoning at 32B Scale](https://arxiv.org/abs/2505.08311)**
  <sub>2025 · arXiv preprint arXiv:2505.08311 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.08311) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv preprint arXiv:2501.09004 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.09004) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131)**
  <sub>2025 · arXiv preprint arXiv:2506.13131 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.13131) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Beyond Correctness: Harmonizing Process and Outcome Rewards through RL Training (PROF)](https://arxiv.org/abs/2509.03403)**
  <sub>2025 · arXiv preprint arXiv:2509.03403 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2509.03403) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Clip-Low Increases Entropy and Clip-High Decreases Entropy in Reinforcement Learning of Large Language Models](https://arxiv.org/abs/2509.26114)**
  <sub>2025 · arXiv preprint arXiv:2509.26114 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2509.26114) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Cognitive Behaviors that Enable Self-Improving Reasoners, or, Four Habits of Highly Effective STaRs](https://arxiv.org/abs/2503.01307)**
  <sub>2025 · arXiv preprint arXiv:2503.01307 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.01307) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556)**
  <sub>2025 · arXiv preprint arXiv:2512.02556 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2512.02556) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.

## Open questions

- Which taxonomy best predicts downstream engineering decisions: verifier type, data object shape, training use, or audit risk?
- How should surveys represent partially open frontier reports whose datasets and reward functions are only described at a high level?
- What metadata is needed to make survey tables reproducible rather than merely descriptive?
- How can a living atlas keep survey pages current without overstating completeness?

## Related docs

- [00_start_here.md](../docs/00_start_here.md)
- [01_what_is_post_training_reasoning_data.md](../docs/01_what_is_post_training_reasoning_data.md)
- [02_verifier_anchored_taxonomy.md](../docs/02_verifier_anchored_taxonomy.md)
- [09_audit_and_failure_modes.md](../docs/09_audit_and_failure_modes.md)
- [bib_index.md](../reports/bib_index.md)

## Related cards

- [release_card_template.md](../cards/release_card_template.md)
- [recipe_card_template.md](../cards/recipe_card_template.md)

## Back to map

- [📚 Paper atlas README](README.md)
- [🌟 Repository README](../README.md)
