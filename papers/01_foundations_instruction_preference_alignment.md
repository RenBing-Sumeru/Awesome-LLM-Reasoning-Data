# 🧱 Foundations: Instruction, Preference, and Alignment Data

> The older data objects that reasoning-data work inherits: instruction mixtures, demonstrations, preferences, reward models, self-improvement traces, and chain-of-thought prompting.

## What this category means

Read this category to understand how prompt-answer examples became richer feedback records with preferences, rationales, rubrics, and reward surfaces.

Reasoning-data papers make more sense when you can see their older ancestry. InstructGPT, FLAN, T0, Self-Instruct, helpful-harmless RLHF, Constitutional AI, UltraFeedback, and DPO all shaped the habit of treating post-training data as a deliberately constructed behavior signal. They did not solve verifier-bearing reasoning data by themselves, but they taught the field how to collect demonstrations, compare outputs, train reward models, and tune a model after pretraining.

The foundation category is especially useful for spotting what changed. A preference pair says one answer is better than another; a programmatic verifier can often say whether a final answer satisfies a predicate; a process label can identify the first faulty step; an agent trajectory can attach feedback to a state-action episode. Reasoning data inherits the engineering discipline of alignment data, then adds stronger structure around trace, verifier, environment, and terminal condition.

Practitioners should read these papers with a data-schema eye. Ask what the prompt source is, who authored the target behavior, what form the feedback takes, whether the reward can be gamed, and how the training objective consumes the record. The same questions apply later to RLVR and process reward models, but the answers become more domain-specific and easier to audit when a verifier or environment is explicit.

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| Self-Instruct: Aligning language models with self-generated instructions | 2023 | ACL | [Paper](https://arxiv.org/abs/2212.10560) · [Card](../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) | Instruction-generation recipe showing how synthetic prompts, filtering, and tuning data become an alignment data pipeline. |
| A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility | 2025 | Conference on Language Modeling (COLM) | [Paper](https://arxiv.org/abs/2504.07086) · [Card](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |
| Direct preference optimization: Your language model is secretly a reward model | 2023 | NeurIPS | [Paper](https://arxiv.org/abs/2305.18290) · [Card](../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md) | Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step. |
| Chain-of-thought prompting elicits reasoning in large language models | 2022 | NeurIPS | [Paper](https://arxiv.org/abs/2201.11903) · [Card](../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md) | Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object. |
| STaR: Bootstrapping reasoning with reasoning | 2022 | NeurIPS | [Paper](https://arxiv.org/abs/2203.14465) · [Card](../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md) | Self-training recipe that turns generated rationales into new supervision, connecting prompting, filtering, and iterative reasoning data construction. |
| Training language models to follow instructions with human feedback | 2022 | NeurIPS | [Paper](https://arxiv.org/abs/2203.02155) · [Card](../cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md) | InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping. |
| Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis | 2026 | arXiv preprint arXiv:2602.00846 | [Paper](https://arxiv.org/abs/2602.00846) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |
| 1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled) | 2025 | arXiv preprint arXiv:2503.19633 | [Paper](https://arxiv.org/abs/2503.19633) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |
| A Survey on LLM Mid-Training | 2025 | arXiv preprint arXiv:2510.23081 | [Paper](https://arxiv.org/abs/2510.23081) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |
| AM-Thinking-v1: Advancing the Frontier of Reasoning at 32B Scale | 2025 | arXiv preprint arXiv:2505.08311 | [Paper](https://arxiv.org/abs/2505.08311) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis](https://arxiv.org/abs/2602.00846)**
  <sub>2026 · arXiv preprint arXiv:2602.00846 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2602.00846)
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
- 🧭 **[AbstentionBench: Reasoning LLMs Fail on Unanswerable Questions](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv preprint arXiv:2506.09038 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.09038)
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
- 🧭 **[DeepMath-103K: A Large-Scale, Challenging, Decontaminated, and Verifiable Mathematical Dataset for Advancing Reasoning](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv preprint arXiv:2504.11456 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.11456)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556)**
  <sub>2025 · arXiv preprint arXiv:2512.02556 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2512.02556)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Distillation Scaling Laws](https://arxiv.org/abs/2502.08606)**
  <sub>2025 · Proceedings of the 42nd International Conference on Machine Learning (ICML) · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.08606)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs](https://arxiv.org/abs/2410.13210)**
  <sub>2025 · arXiv preprint arXiv:2410.13210 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.13210)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning](https://arxiv.org/abs/2505.22203)**
  <sub>2025 · arXiv preprint arXiv:2505.22203 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.22203)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[GRPO is Secretly a Process Reward Model](https://arxiv.org/abs/2509.21154)**
  <sub>2025 · arXiv preprint arXiv:2509.21154 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2509.21154)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Gaperon: A Peppered English-French Generative Language Model Suite](https://arxiv.org/abs/2510.25771)**
  <sub>2025 · arXiv preprint arXiv:2510.25771 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2510.25771)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[SafeChain: Safety of Language Models with Long Chain-of-Thought Reasoning Capabilities](https://arxiv.org/abs/2502.12025)**
  <sub>2025 · arXiv preprint arXiv:2502.12025 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.12025)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[rStar2-Agent: Agentic Reasoning Technical Report](https://arxiv.org/abs/2508.20722)**
  <sub>2025 · arXiv preprint arXiv:2508.20722 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2508.20722)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2407.21787)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[MAmmoTH2: Scaling Instructions from the Web](https://arxiv.org/abs/2405.03548)**
  <sub>2024 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2405.03548)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · judgment required · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.18290) · [Card](../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md)
  _Why it matters:_ Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step.
- 🧭 **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 🧭 survey background · 📈 scaling study · mixed · evaluation · test time compute · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2203.11171)
  _Why it matters:_ Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views.
- 🧭 **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · unknown · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2201.11903) · [Card](../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md)
  _Why it matters:_ Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object.
- 🧭 **[Training a helpful and harmless assistant with reinforcement learning from human feedback](https://arxiv.org/abs/2204.05862)**
  <sub>2022 · arXiv · 🧭 survey background · judgment required · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2204.05862)
  _Why it matters:_ It provides the alignment-data lineage that later reasoning-data recipes inherit when they combine demonstrations, preferences, and reward models.
- 🧭 **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · judgment required · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.02155) · [Card](../cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md)
  _Why it matters:_ InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping.
- 🧭 **[Deep reinforcement learning from human preferences](https://arxiv.org/abs/1706.03741)**
  <sub>2017 · NeurIPS · 🧭 survey background · judgment required · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/1706.03741)
  _Why it matters:_ It is a foundation for later post-training data records that turn comparisons into trainable reward signals.

### 🏗️ Construction Recipe

- 🏗️ **[Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560)**
  <sub>2023 · ACL · 🏗️ construction recipe · 📦 data release · mixed · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.10560) · [Card](../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md)
  _Why it matters:_ Instruction-generation recipe showing how synthetic prompts, filtering, and tuning data become an alignment data pipeline.
- 🏗️ **[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073)**
  <sub>2022 · arXiv preprint · 🏗️ construction recipe · 🧭 survey background · judgment required · mixed · preference learning · safety alignment · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2212.08073)
  _Why it matters:_ AI-feedback alignment recipe that makes critiques, principles, and preference signals part of the post-training data object.
- 🏗️ **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.14465) · [Card](../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md)
  _Why it matters:_ Self-training recipe that turns generated rationales into new supervision, connecting prompting, filtering, and iterative reasoning data construction.

### ⚠️ Needs search or metadata

- 🧭 **rStar-Math**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions**
  <sub>2024 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **HelpSteer2: Open-source preference data for helpfulness and safety**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Magicoder: Empowering code generation with OSS-instruct**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Overoptimization in direct alignment algorithms**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **R-Tuning**
  <sub>2024 · NAACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **ReST-MCTS***
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **SPIN: Self-play fine-tuning converts weak language models to strong language models**
  <sub>2024 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Self-Rewarding LMs**
  <sub>2024 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Distilling step-by-step: Outperforming larger language models with less training data and smaller model sizes**
  <sub>2023 · ACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Language models do not always say what they think: Unfaithful explanations in chain-of-thought prompting**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **MAmmoTH: Building math generalist models through hybrid instruction tuning**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Measuring faithfulness in chain-of-thought reasoning**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Orca: Progressive learning from complex explanation traces of GPT-4**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **ReST\textsuperscriptEM**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Reflexion: Language agents with verbal reinforcement learning**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Self-RAG: Learning to retrieve, generate, and critique through self-reflection**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **UltraFeedback: Boosting language models with high-quality feedback**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **WizardMath: Empowering mathematical reasoning for large language models via reinforced evol-instruct**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Scaling laws for reward model overoptimization**
  <sub>2022 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.

## What to audit

- What exactly is supervised: demonstration, preference pair, critique, scalar reward, or rationale?
- Are annotator, judge, or reward-model assumptions disclosed?
- Can later reasoning-data claims be separated from general helpfulness or safety tuning?

## Related cards

- [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
- [Direct preference optimization: Your language model is secretly a reward model](../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md)
- [Self-Instruct: Aligning language models with self-generated instructions](../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md)
- [Chain-of-thought prompting elicits reasoning in large language models](../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md)
- [STaR: Bootstrapping reasoning with reasoning](../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md)
- [Training language models to follow instructions with human feedback](../cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md)

## Open gaps

- Which parts of classic RLHF data remain useful once a task has a cheap programmatic verifier?
- How should preference datasets expose annotator/rubric context so they can be reused as reasoning rewards?
- When does training on chain-of-thought traces teach reasoning behavior, and when does it merely teach trace style?
- Can self-generated instruction data be audited for lineage and diversity strongly enough for high-stakes post-training?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
