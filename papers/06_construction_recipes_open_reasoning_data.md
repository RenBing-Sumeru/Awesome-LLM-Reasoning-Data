# 🏗️ Construction Recipes and Open Reasoning Data

> Prompt sourcing, teacher traces, filtering, self-play, generator-verifier loops, distill-then-RL, pure RL, and open reproduction pipelines.

## What this category means

Use this page to move from paper claims to buildable recipes: source mixture, trace writer, verifier, filter, optimizer, ablation, and release metadata.

Construction-recipe papers are the practical heart of a reasoning-data atlas. They answer the question a builder actually asks: how did the examples get made? A useful recipe exposes the prompt source, teacher or generator, sampling budget, trace format, verifier, filter, pass-rate band, decontamination rule, training objective, and ablations. Without those pieces, a model report may be inspiring but hard to reproduce.

OpenThoughts, OpenMathReasoning, Big-Math, DeepMath-103K, LIMO, s1, DAPO, DeepScaleR, Open-Reasoner-Zero, R-Zero, Absolute Zero, TTRL, AlphaEvolve, CoVerRL, Multi-Agent Evolve, STaR, Self-Instruct, Orca, and related papers show different positions in the recipe design space. Some rely on teacher traces and filtering. Some use self-play or generator-verifier co-evolution. Some emphasize tiny high-quality seed sets; others scale rollouts and reinforcement. Some are open pipelines; others are model reports with partial recipe disclosure.

The useful habit is to read every recipe as a bill of materials. What raw tasks entered? Who wrote the reasoning traces? How were failures removed or retained? What did the verifier see? Was the reward programmatic, learned, or judgment-based? Did the authors show that the same source examples were not reused as evaluations? Did they publish enough artifacts to let another team rerun the filter?

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| Aegis2.0 | 2025 | arXiv | [Paper](https://arxiv.org/abs/2501.09004) · [ACL](https://aclanthology.org/2025.naacl-long.306/) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) · [Card](../cards/verifiers/aegis2.md) | It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification. |
| Big-Math-RL-Verified | 2025 | arXiv | [Paper](https://arxiv.org/abs/2502.17387) · [Card](../cards/releases/big_math.md) | Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering. |
| DeepMath-103K | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md) | Math release highlighted for verifier pinning and decontamination. |
| KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding | 2025 | ACL Findings | [Paper](https://arxiv.org/abs/2503.02951) · [Card](../cards/releases/kodcode.md) | Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR. |
| LIMO: Less Is More for Reasoning | 2025 | arXiv | [Paper](https://arxiv.org/abs/2502.03387) · [Card](../cards/releases/limo.md) | Small-set curation reference distinguishing elicitation from broad coverage. |
| Llama-Nemotron: Efficient Reasoning Models | 2025 | arXiv | [Paper](https://arxiv.org/abs/2505.00949) · [Card](../cards/recipes/llama_nemotron.md) | Mixed post-training corpus reference for reasoning, chat, and safety partitions. |
| NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions | 2025 | arXiv | [Paper](https://arxiv.org/abs/2502.13124) · [Card](../cards/releases/naturalreasoning.md) | Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens. |
| OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique | 2025 | arXiv | [Paper](https://arxiv.org/abs/2507.09075) · [Card](../cards/releases/opencodereasoning_ii.md) | Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique. |
| OpenMathReasoning: A large-scale dataset of math reasoning traces | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.16891) · [Card](../cards/releases/openmathreasoning.md) | Large-scale math reasoning trace release for programmatic verification. |
| OpenThoughts: Data recipes for reasoning models | 2025 | arXiv | [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../cards/releases/openthoughts.md) | It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[Bootstrapping Post-training Signals for Open-ended Tasks via Rubric-based Self-play on Pre-training Text (POP)](https://arxiv.org/abs/2604.20051)**
  <sub>2026 · arXiv preprint arXiv:2604.20051 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.20051)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[CoVerRL: Breaking the Consensus Trap in Label-Free Reasoning via Generator-Verifier Co-Evolution](https://arxiv.org/abs/2603.17775)**
  <sub>2026 · arXiv preprint arXiv:2603.17775 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2603.17775)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Decoupling KL and Trajectories: A Unified Perspective for SFT, DAgger, Offline RL, and OPD in LLM Distillation](https://arxiv.org/abs/2605.16826)**
  <sub>2026 · arXiv preprint arXiv:2605.16826 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2605.16826)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Learning beyond Teacher: Generalized On-Policy Distillation with Reward Extrapolation (G-OPD)](https://arxiv.org/abs/2602.12125)**
  <sub>2026 · arXiv preprint arXiv:2602.12125 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.12125)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Why Does Self-Distillation (Sometimes) Degrade the Reasoning Capability of LLMs?](https://arxiv.org/abs/2603.24472)**
  <sub>2026 · arXiv preprint arXiv:2603.24472 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2603.24472)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled)](https://arxiv.org/abs/2503.19633)**
  <sub>2025 · arXiv preprint arXiv:2503.19633 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.19633)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131)**
  <sub>2025 · arXiv preprint arXiv:2506.13131 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.13131)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Cognitive Behaviors that Enable Self-Improving Reasoners, or, Four Habits of Highly Effective STaRs](https://arxiv.org/abs/2503.01307)**
  <sub>2025 · arXiv preprint arXiv:2503.01307 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.01307)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Distillation Scaling Laws](https://arxiv.org/abs/2502.08606)**
  <sub>2025 · Proceedings of the 42nd International Conference on Machine Learning (ICML) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.08606)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Open-Reasoner-Zero: An Open Source Approach to Scaling Up Reinforcement Learning on the Base Model](https://arxiv.org/abs/2503.24290)**
  <sub>2025 · arXiv preprint arXiv:2503.24290 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.24290)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[R-Zero: Self-Evolving Reasoning LLM from Zero Data](https://arxiv.org/abs/2508.05004)**
  <sub>2025 · arXiv preprint arXiv:2508.05004 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.05004)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Skywork Open Reasoner 1 Technical Report](https://arxiv.org/abs/2505.22312)**
  <sub>2025 · arXiv preprint arXiv:2505.22312 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.22312)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Towards Understanding Self-play for LLM Reasoning](https://arxiv.org/abs/2510.27072)**
  <sub>2025 · arXiv preprint arXiv:2510.27072 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2510.27072)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[rStar2-Agent: Agentic Reasoning Technical Report](https://arxiv.org/abs/2508.20722)**
  <sub>2025 · arXiv preprint arXiv:2508.20722 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.20722)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

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

### 📦 Data Release

- 📦 **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · judgment required · mixed · safety alignment · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.09004) · [ACL](https://aclanthology.org/2025.naacl-long.306/) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) · [Card](../cards/verifiers/aegis2.md)
  _Why it matters:_ It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification.
- 📦 **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · programmatic · rlvr · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.17387) · [Card](../cards/releases/big_math.md)
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- 📦 **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.02951) · [Card](../cards/releases/kodcode.md)
  _Why it matters:_ Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
- 📦 **[LIMO: Less Is More for Reasoning](https://arxiv.org/abs/2502.03387)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.03387) · [Card](../cards/releases/limo.md)
  _Why it matters:_ Small-set curation reference distinguishing elicitation from broad coverage.
- 📦 **[NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](https://arxiv.org/abs/2502.13124)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.13124) · [Card](../cards/releases/naturalreasoning.md)
  _Why it matters:_ Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.
- 📦 **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.09075) · [Card](../cards/releases/opencodereasoning_ii.md)
  _Why it matters:_ Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- 📦 **[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16891) · [Card](../cards/releases/openmathreasoning.md)
  _Why it matters:_ Large-scale math reasoning trace release for programmatic verification.
- 📦 **[OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../cards/releases/openthoughts.md)
  _Why it matters:_ It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance.
- 📦 **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.21139) · [Card](../cards/agents/swe_gym.md)
  _Why it matters:_ Repository-scale training environment showing substrate as data.
- 📦 **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.16789) · [Card](../cards/agents/toolllm_toolbench.md)
  _Why it matters:_ Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.

### 🚀 Model Report

- 🚀 **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · distillation · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.12948) · [Card](../cards/recipes/deepseek_r1.md)
  _Why it matters:_ It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.
- 🚀 **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.00949) · [Card](../cards/recipes/llama_nemotron.md)
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- 🚀 **[Magistral](https://arxiv.org/abs/2506.10910)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10910) · [Card](../cards/recipes/magistral.md)
  _Why it matters:_ Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.
- 🚀 **[Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318)**
  <sub>2025 · arXiv · 🚀 model report · mixed · distillation · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.21318) · [Card](../cards/recipes/phi4_reasoning.md)
  _Why it matters:_ Reasoning model report highlighting teacher distillation as trace writing.
- 🚀 **[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)**
  <sub>2025 · arXiv · 🚀 model report · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.09388) · [Card](../cards/recipes/qwen3.md)
  _Why it matters:_ Open model-family report useful for coordinated release-tick analysis.

### 🧯 Audit Failure

- 🧯 **[Subliminal Learning](https://arxiv.org/abs/2507.14805)**
  <sub>2025 · arXiv · 🧯 audit failure · 🏗️ construction recipe · mixed · distillation · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2507.14805) · [Venue](https://www.nature.com/articles/s41586-026-10319-8) · [Code](https://github.com/MinhxLe/subliminal-learning) · [Project](https://subliminal-learning.com/) · [Card](../cards/failures/subliminal-learning.md)
  _Why it matters:_ It is a data-lineage warning for reasoning distillation: synthetic traces may carry hidden model traits that are invisible to content filters.

### 📈 Scaling Study

- 📈 **[The Art of Scaling Reinforcement Learning Compute for LLMs](https://arxiv.org/abs/2510.13786)**
  <sub>2025 · arXiv · 📈 scaling study · 🏗️ construction recipe · mixed · rlvr · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2510.13786) · [OpenReview](https://openreview.net/forum?id=FMjeC9Msws) · [Card](../cards/recipes/the-art-of-scaling-rl-compute.md)
  _Why it matters:_ It gives atlas readers a framework for judging RL recipe claims: some choices move the ceiling, while others mostly change how cheaply the run reaches it.

### ⚠️ Needs search or metadata

- 🧭 **ACORD: Attorney-curated open research dataset**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
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
- 🧭 **MegaScience: A benchmark and data resource for scientific reasoning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Multi-Agent Evolve: LLM self-improve through co-evolution**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Open-Reasoner-Zero: An open-source approach to RLVR for reasoning**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **OpenCodeReasoning-2: Scalable code reasoning data**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **OpenCodeReasoning: Code reasoning traces at scale**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 📦 **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · programmatic · sft · distillation · L0_seeded</sub>
  [Code](https://github.com/huggingface/open-r1) · [HF](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k) · [Card](../cards/releases/openr1.md)
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- 🚀 **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · sft · rlvr · L0_seeded</sub>
  [Code](https://github.com/QwenLM/Qwen3-Coder) · [Project](https://qwenlm.github.io/blog/qwen3-coder/) · [Card](../cards/recipes/qwen3_coder.md)
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- 🧭 **SWE-smith: Scaling data construction for software engineering agents**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Sky-T1: Fully open reasoning model and data recipe**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **rStar-Math**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **DeepSeekMath: Pushing the limits of mathematical reasoning in open language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Goedel-Prover: A frontier model for open-source automated theorem proving**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **HelpSteer2: Open-source preference data for helpfulness and safety**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Prometheus 2: An open source language model specialized in evaluating other language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **SPIN: Self-play fine-tuning converts weak language models to strong language models**
  <sub>2024 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Distilling step-by-step: Outperforming larger language models with less training data and smaller model sizes**
  <sub>2023 · ACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **MetaMath: Bootstrap your own mathematical questions for large language models**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Orca: Progressive learning from complex explanation traces of GPT-4**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **WizardMath: Empowering mathematical reasoning for large language models via reinforced evol-instruct**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

## What to audit

- Are prompt sources, teacher models, sampling rules, and filters disclosed?
- Can another team reproduce the accepted and rejected examples?
- Is the release license and lineage clear enough for reuse?

## Related cards

- [Absolute Zero: Reinforced Self-play Reasoning with Zero Data](../cards/recipes/absolute_zero.md)
- [Aegis2.0](../cards/verifiers/aegis2.md)
- [Big-Math-RL-Verified](../cards/releases/big_math.md)
- [DAPO](../cards/releases/dapo.md)
- [DeepMath-103K](../cards/releases/deepmath_103k.md)
- [DeepSeek-R1](../cards/recipes/deepseek_r1.md)
- [KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](../cards/releases/kodcode.md)
- [LIMO: Less Is More for Reasoning](../cards/releases/limo.md)
- [Llama-Nemotron: Efficient Reasoning Models](../cards/recipes/llama_nemotron.md)
- [Magistral](../cards/recipes/magistral.md)
- [NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](../cards/releases/naturalreasoning.md)
- [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](../cards/releases/opencodereasoning_ii.md)
- [OpenMathReasoning: A large-scale dataset of math reasoning traces](../cards/releases/openmathreasoning.md)
- [OpenThoughts: Data recipes for reasoning models](../cards/releases/openthoughts.md)
- [Phi-4-reasoning Technical Report](../cards/recipes/phi4_reasoning.md)
- [Qwen3 Technical Report](../cards/recipes/qwen3.md)
- [SWE-Gym](../cards/agents/swe_gym.md)
- [Subliminal Learning](../cards/failures/subliminal-learning.md)

## Open gaps

- What is the smallest metadata card that makes a reasoning-data recipe reproducible?
- How can recipes report negative samples and failed traces without encouraging benchmark leakage?
- When does generator-verifier co-evolution escape teacher limitations, and when does it amplify spurious consensus?
- How should open pipelines balance release transparency with benchmark and safety leakage risks?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
