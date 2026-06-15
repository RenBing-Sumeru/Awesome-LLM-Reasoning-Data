# 📈 Scaling, Test-Time Compute, and RLVR

> RLVR scaling, data reuse, distillation scaling, pass@k/pass@(k,T), inference budget, search topology, and test-time reinforcement.

## What this category means

Use this page to separate scaling claims into data size, model size, RL compute, inference budget, search, and verifier reliability.

Scaling papers turn reasoning-data design into a budget question. How many unique prompts are needed? How many rollouts per prompt? How much inference compute should be spent before training? When does repeated sampling beat better data? When does RLVR produce general reasoning and when does it exploit verifier shortcuts? These papers are valuable because they expose axes that model-report leaderboards often compress into one number.

This category includes Large Language Monkeys, s1, Kimi k1.5, The Art of Scaling Reinforcement Learning Compute for LLMs, Scaling Behaviors of LLM RL Post-Training, Distillation Scaling Laws, pass@k and pass@(k,T) work, CoT-Pass@K, Markovian Thinker, TTRL, entropy and clipping studies, DAPO, DeepScaleR, one-shot RLVR, data reuse papers, and RLVR audit studies. Some are verified; many are local seeds that need link review.

Practitioners should read every scaling curve as a measurement design. What exactly is on the x-axis: tokens, examples, rollouts, unique tasks, optimizer steps, model size, inference calls, search depth, or wall-clock compute? What is held fixed? Is the verifier stable across the scale sweep? Are public benchmarks contaminated or refreshed? Are failures reported or only successful runs? Without those details, a scaling law can become a storytelling device.

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| Big-Math-RL-Verified | 2025 | arXiv | [Paper](https://arxiv.org/abs/2502.17387) · [Card](../cards/releases/big_math.md) | Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering. |
| DeepMath-103K | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md) | Math release highlighted for verifier pinning and decontamination. |
| Llama-Nemotron: Efficient Reasoning Models | 2025 | arXiv | [Paper](https://arxiv.org/abs/2505.00949) · [Card](../cards/recipes/llama_nemotron.md) | Mixed post-training corpus reference for reasoning, chat, and safety partitions. |
| OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique | 2025 | arXiv | [Paper](https://arxiv.org/abs/2507.09075) · [Card](../cards/releases/opencodereasoning_ii.md) | Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique. |
| OpenMathReasoning: A large-scale dataset of math reasoning traces | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.16891) · [Card](../cards/releases/openmathreasoning.md) | Large-scale math reasoning trace release for programmatic verification. |
| SWE-Gym | 2025 | arXiv | [Paper](https://arxiv.org/abs/2412.21139) · [Card](../cards/agents/swe_gym.md) | Repository-scale training environment showing substrate as data. |
| Absolute Zero: Reinforced Self-play Reasoning with Zero Data | 2025 | arXiv preprint arXiv:2505.03335 | [Paper](https://arxiv.org/abs/2505.03335) · [Card](../cards/recipes/absolute_zero.md) | Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop. |
| DAPO | 2025 | arXiv | [Paper](https://arxiv.org/abs/2503.14476) · [Card](../cards/releases/dapo.md) | GRPO-lineage RLVR recipe where filtering changes what reaches the gradient. |
| DeepSeek-R1 | 2025 | arXiv | [Paper](https://arxiv.org/abs/2501.12948) · [Card](../cards/recipes/deepseek_r1.md) | It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior. |
| Kimi K1.5: Scaling Reinforcement Learning with LLMs | 2025 | arXiv | [Paper](https://arxiv.org/abs/2501.12599) · [Card](../cards/recipes/kimi_k15.md) | Frontier report used for long-context RL and scaling discussion. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv preprint arXiv:2602.01511 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.01511)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Clip-Low Increases Entropy and Clip-High Decreases Entropy in Reinforcement Learning of Large Language Models](https://arxiv.org/abs/2509.26114)**
  <sub>2025 · arXiv preprint arXiv:2509.26114 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.26114)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Distillation Scaling Laws](https://arxiv.org/abs/2502.08606)**
  <sub>2025 · Proceedings of the 42nd International Conference on Machine Learning (ICML) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.08606)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Goedel-Prover-V2: Scaling Formal Theorem Proving with Scaffolded Data Synthesis and Self-Correction](https://arxiv.org/abs/2508.03613)**
  <sub>2025 · arXiv preprint arXiv:2508.03613 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.03613)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Open-Reasoner-Zero: An Open Source Approach to Scaling Up Reinforcement Learning on the Base Model](https://arxiv.org/abs/2503.24290)**
  <sub>2025 · arXiv preprint arXiv:2503.24290 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.24290)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[ReTool: Reinforcement Learning for Strategic Tool Use in LLMs](https://arxiv.org/abs/2504.11536)**
  <sub>2025 · arXiv preprint arXiv:2504.11536 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2504.11536)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Reinforcement Learning with Verifiable Rewards Implicitly Incentivizes Correct Reasoning in Base LLMs](https://arxiv.org/abs/2506.14245)**
  <sub>2025 · arXiv preprint arXiv:2506.14245 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.14245)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution](https://arxiv.org/abs/2502.18449)**
  <sub>2025 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.18449)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[The Entropy Mechanism of Reinforcement Learning for Reasoning Language Models](https://arxiv.org/abs/2505.22617)**
  <sub>2025 · arXiv preprint arXiv:2505.22617 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.22617)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[The Invisible Leash: Why RLVR May or May Not Escape Its Origin](https://arxiv.org/abs/2507.14843)**
  <sub>2025 · arXiv preprint arXiv:2507.14843 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2507.14843)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[The Markovian Thinker: Architecture-Agnostic Linear Scaling of Reasoning](https://arxiv.org/abs/2510.06557)**
  <sub>2025 · arXiv preprint arXiv:2510.06557 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2510.06557)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2407.21787)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Training a helpful and harmless assistant with reinforcement learning from human feedback](https://arxiv.org/abs/2204.05862)**
  <sub>2022 · arXiv · 🧭 survey background · judgment required · reward modeling · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2204.05862)
  _Why it matters:_ It provides the alignment-data lineage that later reasoning-data recipes inherit when they combine demonstrations, preferences, and reward models.
- 🧭 **[Deep reinforcement learning from human preferences](https://arxiv.org/abs/1706.03741)**
  <sub>2017 · NeurIPS · 🧭 survey background · judgment required · reward modeling · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/1706.03741)
  _Why it matters:_ It is a foundation for later post-training data records that turn comparisons into trainable reward signals.

### 🏗️ Construction Recipe

- 🏗️ **[Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335)**
  <sub>2025 · arXiv preprint arXiv:2505.03335 · 🏗️ construction recipe · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.03335) · [Card](../cards/recipes/absolute_zero.md)
  _Why it matters:_ Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop.
- 🏗️ **[DAPO](https://arxiv.org/abs/2503.14476)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · programmatic · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.14476) · [Card](../cards/releases/dapo.md)
  _Why it matters:_ GRPO-lineage RLVR recipe where filtering changes what reaches the gradient.
- 🏗️ **[TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084)**
  <sub>2025 · arXiv preprint arXiv:2504.16084 · 🏗️ construction recipe · 📈 scaling study · mixed · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16084) · [Card](../cards/recipes/ttrl.md)
  _Why it matters:_ Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.
- 🏗️ **[s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · mixed · sft · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.19393) · [Card](../cards/releases/s1.md)
  _Why it matters:_ It is a useful counterpoint to massive-data recipes: careful small-set curation plus inference-budget control can materially change reasoning performance.

### 📦 Data Release

- 📦 **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · judgment required · safety alignment · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2501.09004)
  _Why it matters:_ Safety dataset with risk categories and label provenance.
- 📦 **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · programmatic · rlvr · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.17387) · [Card](../cards/releases/big_math.md)
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
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

### 🚀 Model Report

- 🚀 **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · distillation · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.12948) · [Card](../cards/recipes/deepseek_r1.md)
  _Why it matters:_ It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.
- 🚀 **[Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599)**
  <sub>2025 · arXiv · 🚀 model report · 📈 scaling study · mixed · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.12599) · [Card](../cards/recipes/kimi_k15.md)
  _Why it matters:_ Frontier report used for long-context RL and scaling discussion.
- 🚀 **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.00949) · [Card](../cards/recipes/llama_nemotron.md)
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- 🚀 **[Magistral](https://arxiv.org/abs/2506.10910)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10910) · [Card](../cards/recipes/magistral.md)
  _Why it matters:_ Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.
- 🚀 **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · mixed · programmatic · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.13585) · [Code](https://github.com/MiniMax-AI/MiniMax-M1) · [Card](../cards/recipes/minimax_m1.md)
  _Why it matters:_ Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
- 🚀 **[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)**
  <sub>2025 · arXiv · 🚀 model report · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.09388) · [Card](../cards/recipes/qwen3.md)
  _Why it matters:_ Open model-family report useful for coordinated release-tick analysis.

### 📈 Scaling Study

- 📈 **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · programmatic · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2509.25300)
  _Why it matters:_ Scaling study for model-size and compute-axis views of RL post-training.
- 📈 **[The Art of Scaling Reinforcement Learning Compute for LLMs](https://arxiv.org/abs/2510.13786)**
  <sub>2025 · arXiv · 📈 scaling study · mixed · rlvr · test time compute · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2510.13786)
  _Why it matters:_ Scaling study anchoring asymptote-versus-efficiency decomposition.

### 🧯 Audit Failure

- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [Card](../cards/verifiers/spurious_rewards.md)
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.

### 🧪 Verifier Reward

- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Card](../cards/verifiers/tinyv.md)
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

### 🪜 Process Supervision

- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935) · [Card](../cards/verifiers/math_shepherd.md)
  _Why it matters:_ Monte-Carlo-style process signal reference for step supervision.
- 🪜 **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.06592) · [Card](../cards/verifiers/omegaprm.md)
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.

### ⚠️ Needs search or metadata

- 🧭 **pass@$(k,T)$: Re-examining the reasoning boundary for agentic RL**
  <sub>2026 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **1-shot RLVR: Learning reasoning with minimal verifiable data**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Big-math: A large-scale, high-quality math dataset for reinforcement learning and supervised fine-tuning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **DAPO: An open-source LLM reinforcement learning system at scale**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **DeepScaleR: Scaling reinforcement learning for reasoning in open models**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Does RL really incentivize reasoning beyond base?**
  <sub>2025 · NeurIPS Oral · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Does supervised fine-tuning memorize while reinforcement learning generalizes?**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Open-Reasoner-Zero: An open-source approach to RLVR for reasoning**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **SWE-RL: Advancing language agents for software engineering via reinforcement learning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Rewarding progress: Scaling automated process verifiers for LLM reasoning**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Reflexion: Language agents with verbal reinforcement learning**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **CodeRL: Mastering code generation through pretrained models and deep reinforcement learning**
  <sub>2022 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

## What to audit

- Does the claim improve asymptote, sample efficiency, or inference budget allocation?
- Are pass@k, rollout budget, verifier refresh, and reuse count reported?
- Can data scale be separated from test-time compute scale?

## Related cards

- [Absolute Zero: Reinforced Self-play Reasoning with Zero Data](../cards/recipes/absolute_zero.md)
- [Big-Math-RL-Verified](../cards/releases/big_math.md)
- [DAPO](../cards/releases/dapo.md)
- [DeepMath-103K](../cards/releases/deepmath_103k.md)
- [DeepSeek-R1](../cards/recipes/deepseek_r1.md)
- [Kimi K1.5: Scaling Reinforcement Learning with LLMs](../cards/recipes/kimi_k15.md)
- [Llama-Nemotron: Efficient Reasoning Models](../cards/recipes/llama_nemotron.md)
- [Magistral](../cards/recipes/magistral.md)
- [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](../cards/recipes/minimax_m1.md)
- [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](../cards/releases/opencodereasoning_ii.md)
- [OpenMathReasoning: A large-scale dataset of math reasoning traces](../cards/releases/openmathreasoning.md)
- [Qwen3 Technical Report](../cards/recipes/qwen3.md)
- [SWE-Gym](../cards/agents/swe_gym.md)
- [Spurious Rewards](../cards/verifiers/spurious_rewards.md)
- [TTRL: Test-Time Reinforcement Learning](../cards/recipes/ttrl.md)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../cards/verifiers/tinyv.md)
- [s1: Simple Test-Time Scaling](../cards/releases/s1.md)
- [Math-Shepherd](../cards/verifiers/math_shepherd.md)

## Open gaps

- Which scaling axes should be reported together for RLVR runs: unique tasks, rollouts, tokens, verifier calls, and optimizer steps?
- How can benchmark refresh cycles keep test-time compute papers from optimizing stale public tasks?
- When does distillation preserve reasoning capability, and when does it compress away search behavior?
- What failure telemetry should accompany successful scaling curves?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
