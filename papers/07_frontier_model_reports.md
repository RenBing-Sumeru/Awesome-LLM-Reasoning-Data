# 🚀 Frontier Reasoning Model Reports

> Public reasoning-model reports and open-weight model reports that disclose post-training data, reward stacks, scaling choices, or evaluation design.

## Why this category matters

Frontier reasoning reports are often the first place new post-training patterns become visible. They may not publish all data, but they reveal enough to shape the field: RLVR on verifiable tasks, long chain-of-thought behavior, distillation from stronger teachers, reward-model stacks, rejection sampling, self-play, inference-budget scaling, and benchmark suites. A data atlas reads these reports for their pipeline clues, not just their headline scores.

This category includes OpenAI o1 and o3/o4-mini context, DeepSeek-R1, DeepSeekMath, DeepSeek-V3.2 when relevant, Kimi k1.5, Kimi K2, Qwen3, Qwen3-Coder if locally added later, Magistral, Phi-4-reasoning, Llama-Nemotron, MiniMax-M1, Skywork-OR1, OpenReasoner-Zero, AM-Thinking-v1, rStar2-Agent, and related model reports. Some are verified in local metadata; others are BibTeX seeds requiring link search or curator review.

Practitioners should look for disclosure granularity. Does the report identify task domains, data sources, reward types, verifier classes, teacher models, sampling budgets, safety filters, and decontamination? Does it separate SFT, distillation, RL, and test-time compute? Does it show ablations that tie data design to capability rather than only presenting final benchmark numbers? Those answers decide how much the report can teach a builder.

The key caveat is opacity. Many frontier reports are necessarily partial. This page therefore treats model reports as signals to triangulate with open recipes, benchmarks, and audit papers. If an entry lacks an official link in local data, it is kept as a `needs_search` candidate rather than linked to a guessed blog, model card, or repository.

## How to read this category

- Extract the post-training stack: SFT, distillation, preference tuning, RLVR, process rewards, safety tuning, and test-time compute.
- Separate data disclosure from evaluation disclosure; a report can be strong on one and weak on the other.
- Track which artifacts are public: paper, model weights, datasets, training code, eval code, safety cards, or only a technical report.
- Avoid treating a frontier report as a reproducible recipe unless it exposes enough pipeline and source metadata.

## Must-read starter set

| Paper | Year | Why start here | Link status |
|---|---:|---|---|
| [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) · 🟡 partial | 2025 | Frontier reasoning report central to public RLVR and reasoning post-training recipes. | linked |
| [Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599) (2025) · 🟡 partial | 2025 | Frontier report used for long-context RL and scaling discussion. | linked |
| [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (2025) · 🟡 partial | 2025 | Open model-family report useful for coordinated release-tick analysis. | linked |
| [Magistral](https://arxiv.org/abs/2506.10910) (2025) · 🟡 partial | 2025 | Reasoning report illustrating reward-stack pinning and prompt-corpus cycling. | linked |
| [Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318) (2025) · 🟡 partial | 2025 | Reasoning model report highlighting teacher distillation as trace writing. | linked |
| [Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949) (2025) · 🟡 partial | 2025 | Mixed post-training corpus reference for reasoning, chat, and safety partitions. | linked |
| Qwen3-Coder (2025) · 🟡 partial | 2025 | Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release. | linked |
| [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) (2022) · 🟡 partial | 2022 | InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping. | linked |
| [Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903) (2022) · 🟡 partial | 2022 | Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object. | linked |
| [Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290) (2023) · 🟡 partial | 2023 | Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step. | linked |
| [Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560) (2023) · 🟡 partial | 2023 | Instruction-generation recipe showing how synthetic prompts, filtering, and tuning data become an alignment data pipeline. | linked |
| [Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171) (2023) · 🟡 partial | 2023 | Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views. | linked |
| [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592) (2024) · 🟡 partial | 2024 | Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels. | linked |
| [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) (2025) · 🟡 partial | 2025 | Open reasoning-data recipe with controlled ablations around question sourcing, filtering, and answer generation. | linked |
| [Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300) (2025) · 🟡 partial | 2025 | Scaling study for model-size and compute-axis views of RL post-training. | linked |

## Promoted linked entries

This section only includes entries with at least one official artifact link and a non-seed local description. BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata.

### 🚀 Public reasoning-model reports

- **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 distillation, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.12948) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Frontier reasoning report central to public RLVR and reasoning post-training recipes.
- **[Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318)**
  <sub>2025 · arXiv · 🚀 model report · 🔀 mixed · 🪜 answer level · 🎯 distillation, sft · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.21318) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Reasoning model report highlighting teacher distillation as trace writing.
- **[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)**
  <sub>2025 · arXiv · 🚀 model report · 🔀 mixed · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.09388) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Open model-family report useful for coordinated release-tick analysis.
- **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · 🧮 programmatic · 🌐 environmental · 🪜 answer level, full episode · 🎯 sft, rlvr · 🟡 partial</sub>
  [🐙 Code](https://github.com/QwenLM/Qwen3-Coder) · [🌐 Project](https://qwenlm.github.io/blog/qwen3-coder/) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- **[Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599)**
  <sub>2025 · arXiv · 🚀 model report · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.12599) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Frontier report used for long-context RL and scaling discussion.
- **[Magistral](https://arxiv.org/abs/2506.10910)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.10910) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.

### 🧪 Open-weight reasoning reports

- **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.00949) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.

### 🌐 Agentic frontier reports

- **[OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.04178) · [🐙 Code](https://github.com/open-thoughts/open-thoughts) · [🤗 Hugging Face](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Open reasoning-data recipe with controlled ablations around question sourcing, filtering, and answer generation.

### 🧬 Reports with post-training data clues

- **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · ⚖️ judgment required · 🪜 pairwise preference, scalar reward · 🎯 sft, preference learning · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.02155) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping.
- **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · 🧮 programmatic · 🪜 answer level · 🎯 rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2509.25300) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Scaling study for model-size and compute-axis views of RL post-training.

### 📚 Additional local seeds

- **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · ❔ unknown · 🪜 answer level · 🎯 evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2201.11903) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object.
- **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · ⚖️ judgment required · 🪜 pairwise preference · 🎯 preference learning · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.18290) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step.
- **[Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560)**
  <sub>2023 · ACL · 🏗️ construction recipe · 📦 data release · 🔀 mixed · 🪜 answer level · 🎯 sft · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2212.10560) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Instruction-generation recipe showing how synthetic prompts, filtering, and tuning data become an alignment data pipeline.
- **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 🧭 survey background · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 evaluation, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.11171) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views.
- **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · 🏗️ construction recipe · 🧮 programmatic · 🔀 mixed · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2406.06592) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.

## Needs-search / metadata queue

These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added.

- **[Skywork Open Reasoner 1 Technical Report](https://arxiv.org/abs/2505.22312)**
  <sub>2025 · arXiv preprint arXiv:2505.22312 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.22312) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · 🏗️ construction recipe · 🔀 mixed · 🧮 programmatic · 🪜 answer level, full episode · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.13585) · [🐙 Code](https://github.com/MiniMax-AI/MiniMax-M1) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556)**
  <sub>2025 · arXiv preprint arXiv:2512.02556 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2512.02556) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Open-Reasoner-Zero: An Open Source Approach to Scaling Up Reinforcement Learning on the Base Model](https://arxiv.org/abs/2503.24290)**
  <sub>2025 · arXiv preprint arXiv:2503.24290 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.24290) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AM-Thinking-v1: Advancing the Frontier of Reasoning at 32B Scale](https://arxiv.org/abs/2505.08311)**
  <sub>2025 · arXiv preprint arXiv:2505.08311 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.08311) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Open-Reasoner-Zero: An open-source approach to RLVR for reasoning**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled)](https://arxiv.org/abs/2503.19633)**
  <sub>2025 · arXiv preprint arXiv:2503.19633 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.19633) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[rStar2-Agent: Agentic Reasoning Technical Report](https://arxiv.org/abs/2508.20722)**
  <sub>2025 · arXiv preprint arXiv:2508.20722 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2508.20722) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeekMath: Pushing the limits of mathematical reasoning in open language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Kimi K2: Open Agentic Intelligence](https://arxiv.org/abs/2507.20534)**
  <sub>2025 · arXiv preprint arXiv:2507.20534 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.20534) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Tulu 3: Pushing frontiers in open language model post-training**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Goedel-Prover: A frontier model for open-source automated theorem proving**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Cognitive Behaviors that Enable Self-Improving Reasoners, or, Four Habits of Highly Effective STaRs](https://arxiv.org/abs/2503.01307)**
  <sub>2025 · arXiv preprint arXiv:2503.01307 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.01307) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Learning to reason with LLMs**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
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
- **FrontierMath: A benchmark for evaluating advanced mathematical reasoning in AI**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **The Llama 3 Herd of models**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Introducing OpenAI o3 and o4-mini**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **xLAM: A family of large action models to empower AI agent systems**
  <sub>2025 · NAACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.

## Open questions

- What is the minimum disclosure needed for a frontier report to be useful as a data-construction reference?
- How should an atlas represent proprietary pipelines without overclaiming reproducibility?
- Which model-report ablations actually isolate data quality, and which conflate model size, inference budget, and training objective?
- How can public model reports document safety and chain-of-thought privacy without exposing sensitive traces?

## Related docs

- [08_scaling_and_test_time_compute.md](../docs/08_scaling_and_test_time_compute.md)
- [05_construction_cookbook.md](../docs/05_construction_cookbook.md)
- [09_audit_and_failure_modes.md](../docs/09_audit_and_failure_modes.md)
- [10_industry_onboarding_path.md](../docs/10_industry_onboarding_path.md)

## Related cards

- [release_card_template.md](../cards/release_card_template.md)
- [recipe_card_template.md](../cards/recipe_card_template.md)

## Back to map

- [📚 Paper atlas README](README.md)
- [🌟 Repository README](../README.md)
