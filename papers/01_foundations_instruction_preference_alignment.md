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
| Self-Instruct: Aligning language models with self-generated instructions | 2023 | ACL | [Paper](https://arxiv.org/abs/2212.10560) · [Card](../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) | It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion. |
| A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility | 2025 | Conference on Language Modeling (COLM) | [Paper](https://arxiv.org/abs/2504.07086) · [Card](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) | It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains. |
| Direct preference optimization: Your language model is secretly a reward model | 2023 | NeurIPS | [Paper](https://arxiv.org/abs/2305.18290) · [Card](../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md) | It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization. |
| Self-consistency improves chain of thought reasoning in language models | 2023 | ICLR | [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw) · [Card](../cards/recipes/self-consistency-chain-of-thought.md) | It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data. |
| Chain-of-thought prompting elicits reasoning in large language models | 2022 | NeurIPS | [Paper](https://arxiv.org/abs/2201.11903) · [Card](../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md) | It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets. |
| Constitutional AI: Harmlessness from AI feedback | 2022 | arXiv preprint | [Paper](https://arxiv.org/abs/2212.08073) · [Project](https://github.com/anthropics/ConstitutionalHarmlessnessPaper) · [Card](../cards/recipes/constitutional-ai.md) | It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data. |
| STaR: Bootstrapping reasoning with reasoning | 2022 | NeurIPS | [Paper](https://arxiv.org/abs/2203.14465) · [Card](../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md) | It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering. |
| Training language models to follow instructions with human feedback | 2022 | NeurIPS | [Paper](https://arxiv.org/abs/2203.02155) · [Card](../cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md) | It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models. |
| Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis | 2026 | arXiv preprint arXiv:2602.00846 | [Paper](https://arxiv.org/abs/2602.00846) | Use this entry as a verified citation waypoint until a paper-specific audit note is added. |
| 1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled) | 2025 | arXiv preprint arXiv:2503.19633 | [Paper](https://arxiv.org/abs/2503.19633) | Use this entry as a verified citation waypoint until a paper-specific audit note is added. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis](https://arxiv.org/abs/2602.00846)**
  <sub>2026 · arXiv preprint arXiv:2602.00846 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.00846)
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
- 🧭 **[AbstentionBench: Reasoning LLMs Fail on Unanswerable Questions](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv preprint arXiv:2506.09038 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.09038)
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
- 🧭 **[DeepMath-103K: A Large-Scale, Challenging, Decontaminated, and Verifiable Mathematical Dataset for Advancing Reasoning](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv preprint arXiv:2504.11456 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2504.11456)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556)**
  <sub>2025 · arXiv preprint arXiv:2512.02556 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2512.02556)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Distillation Scaling Laws](https://arxiv.org/abs/2502.08606)**
  <sub>2025 · Proceedings of the 42nd International Conference on Machine Learning (ICML) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.08606)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs](https://arxiv.org/abs/2410.13210)**
  <sub>2025 · arXiv preprint arXiv:2410.13210 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2410.13210)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning](https://arxiv.org/abs/2505.22203)**
  <sub>2025 · arXiv preprint arXiv:2505.22203 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.22203)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[GRPO is Secretly a Process Reward Model](https://arxiv.org/abs/2509.21154)**
  <sub>2025 · arXiv preprint arXiv:2509.21154 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.21154)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Gaperon: A Peppered English-French Generative Language Model Suite](https://arxiv.org/abs/2510.25771)**
  <sub>2025 · arXiv preprint arXiv:2510.25771 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2510.25771)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[SafeChain: Safety of Language Models with Long Chain-of-Thought Reasoning Capabilities](https://arxiv.org/abs/2502.12025)**
  <sub>2025 · arXiv preprint arXiv:2502.12025 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.12025)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[rStar2-Agent: Agentic Reasoning Technical Report](https://arxiv.org/abs/2508.20722)**
  <sub>2025 · arXiv preprint arXiv:2508.20722 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.20722)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2407.21787)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[MAmmoTH2: Scaling Instructions from the Web](https://arxiv.org/abs/2405.03548)**
  <sub>2024 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2405.03548)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · judgment required · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.18290) · [Card](../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md)
  _Why it matters:_ It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization.
- 🧭 **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · unknown · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2201.11903) · [Card](../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md)
  _Why it matters:_ It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets.
- 🧭 **[Training a helpful and harmless assistant with reinforcement learning from human feedback](https://arxiv.org/abs/2204.05862)**
  <sub>2022 · arXiv · 🧭 survey background · judgment required · reward modeling · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2204.05862)
  _Why it matters:_ It provides the alignment-data lineage that later reasoning-data recipes inherit when they combine demonstrations, preferences, and reward models.
- 🧭 **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · judgment required · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.02155) · [Card](../cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md)
  _Why it matters:_ It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models.
- 🧭 **[Deep reinforcement learning from human preferences](https://arxiv.org/abs/1706.03741)**
  <sub>2017 · NeurIPS · 🧭 survey background · judgment required · reward modeling · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/1706.03741)
  _Why it matters:_ It is a foundation for later post-training data records that turn comparisons into trainable reward signals.

### 🏗️ Construction Recipe

- 🏗️ **[Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560)**
  <sub>2023 · ACL · 🏗️ construction recipe · 📦 data release · mixed · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.10560) · [Card](../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md)
  _Why it matters:_ It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion.
- 🏗️ **[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073)**
  <sub>2022 · arXiv preprint · 🏗️ construction recipe · 🧭 survey background · judgment required · mixed · preference learning · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.08073) · [Project](https://github.com/anthropics/ConstitutionalHarmlessnessPaper) · [Card](../cards/recipes/constitutional-ai.md)
  _Why it matters:_ It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data.
- 🏗️ **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.14465) · [Card](../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md)
  _Why it matters:_ It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering.

### 📈 Scaling Study

- 📈 **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 📈 scaling study · 🧭 survey background · mixed · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw) · [Card](../cards/recipes/self-consistency-chain-of-thought.md)
  _Why it matters:_ It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.

### ⚠️ Needs search or metadata

- 🧭 **rStar-Math**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions**
  <sub>2024 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **HelpSteer2: Open-source preference data for helpfulness and safety**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Magicoder: Empowering code generation with OSS-instruct**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Overoptimization in direct alignment algorithms**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **R-Tuning**
  <sub>2024 · NAACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **ReST-MCTS***
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **SPIN: Self-play fine-tuning converts weak language models to strong language models**
  <sub>2024 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Self-Rewarding LMs**
  <sub>2024 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Distilling step-by-step: Outperforming larger language models with less training data and smaller model sizes**
  <sub>2023 · ACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Language models do not always say what they think: Unfaithful explanations in chain-of-thought prompting**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **MAmmoTH: Building math generalist models through hybrid instruction tuning**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Measuring faithfulness in chain-of-thought reasoning**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Orca: Progressive learning from complex explanation traces of GPT-4**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **ReST\textsuperscriptEM**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Reflexion: Language agents with verbal reinforcement learning**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Self-RAG: Learning to retrieve, generate, and critique through self-reflection**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **UltraFeedback: Boosting language models with high-quality feedback**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **WizardMath: Empowering mathematical reasoning for large language models via reinforced evol-instruct**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Scaling laws for reward model overoptimization**
  <sub>2022 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

## What to audit

- What exactly is supervised: demonstration, preference pair, critique, scalar reward, or rationale?
- Are annotator, judge, or reward-model assumptions disclosed?
- Can later reasoning-data claims be separated from general helpfulness or safety tuning?

## Related cards

- [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
- [Direct preference optimization: Your language model is secretly a reward model](../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md)
- [Self-Instruct: Aligning language models with self-generated instructions](../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md)
- [Self-consistency improves chain of thought reasoning in language models](../cards/recipes/self-consistency-chain-of-thought.md)
- [Chain-of-thought prompting elicits reasoning in large language models](../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md)
- [Constitutional AI: Harmlessness from AI feedback](../cards/recipes/constitutional-ai.md)
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
