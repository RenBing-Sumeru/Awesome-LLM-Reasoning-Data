# 🚀 Frontier Reasoning Model Reports

> Public reasoning-model reports and open-weight model reports that disclose post-training data, reward stacks, scaling choices, or evaluation design.

## What this category means

Use this page to read frontier reports as data disclosures rather than only model announcements.

Frontier reasoning reports are often the first place new post-training patterns become visible. They may not publish all data, but they reveal enough to shape the field: RLVR on verifiable tasks, long chain-of-thought behavior, distillation from stronger teachers, reward-model stacks, rejection sampling, self-play, inference-budget scaling, and benchmark suites. A data atlas reads these reports for their pipeline clues, not just their headline scores.

This category includes OpenAI o1 and o3/o4-mini context, DeepSeek-R1, DeepSeekMath, DeepSeek-V3.2 when relevant, Kimi k1.5, Kimi K2, Qwen3, Qwen3-Coder if locally added later, Magistral, Phi-4-reasoning, Llama-Nemotron, MiniMax-M1, Skywork-OR1, OpenReasoner-Zero, AM-Thinking-v1, rStar2-Agent, and related model reports. Some are verified in local metadata; others are BibTeX seeds requiring link search or curator review.

Practitioners should look for disclosure granularity. Does the report identify task domains, data sources, reward types, verifier classes, teacher models, sampling budgets, safety filters, and decontamination? Does it separate SFT, distillation, RL, and test-time compute? Does it show ablations that tie data design to capability rather than only presenting final benchmark numbers? Those answers decide how much the report can teach a builder.

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| Llama-Nemotron: Efficient Reasoning Models | 2025 | arXiv | [Paper](https://arxiv.org/abs/2505.00949) · [Card](../cards/recipes/llama_nemotron.md) | Mixed post-training corpus reference for reasoning, chat, and safety partitions. |
| OpenThoughts: Data recipes for reasoning models | 2025 | arXiv | [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../cards/releases/openthoughts.md) | Open reasoning-data recipe with controlled ablations around question sourcing, filtering, and answer generation. |
| DeepSeek-R1 | 2025 | arXiv | [Paper](https://arxiv.org/abs/2501.12948) · [Card](../cards/recipes/deepseek_r1.md) | Frontier reasoning report central to public RLVR and reasoning post-training recipes. |
| Kimi K1.5: Scaling Reinforcement Learning with LLMs | 2025 | arXiv | [Paper](https://arxiv.org/abs/2501.12599) · [Card](../cards/recipes/kimi_k15.md) | Frontier report used for long-context RL and scaling discussion. |
| Magistral | 2025 | arXiv | [Paper](https://arxiv.org/abs/2506.10910) · [Card](../cards/recipes/magistral.md) | Reasoning report illustrating reward-stack pinning and prompt-corpus cycling. |
| MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention | 2025 | arXiv preprint arXiv:2506.13585 | [Paper](https://arxiv.org/abs/2506.13585) · [Code](https://github.com/MiniMax-AI/MiniMax-M1) · [Card](../cards/recipes/minimax_m1.md) | Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces. |
| Phi-4-reasoning Technical Report | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.21318) · [Card](../cards/recipes/phi4_reasoning.md) | Reasoning model report highlighting teacher distillation as trace writing. |
| Qwen3 Technical Report | 2025 | arXiv | [Paper](https://arxiv.org/abs/2505.09388) · [Card](../cards/recipes/qwen3.md) | Open model-family report useful for coordinated release-tick analysis. |
| OpenHands: An Open Platform for AI Software Developers as Generalist Agents | 2024 | ICLR | [Paper](https://arxiv.org/abs/2407.16741) · [Code](https://github.com/All-Hands-AI/OpenHands) · [Project](https://www.openhands.dev/) · [Card](../cards/agents/openhands.md) | Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds. |
| 1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled) | 2025 | arXiv preprint arXiv:2503.19633 | [Paper](https://arxiv.org/abs/2503.19633) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled)](https://arxiv.org/abs/2503.19633)**
  <sub>2025 · arXiv preprint arXiv:2503.19633 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2503.19633)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[AM-Thinking-v1: Advancing the Frontier of Reasoning at 32B Scale](https://arxiv.org/abs/2505.08311)**
  <sub>2025 · arXiv preprint arXiv:2505.08311 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.08311)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Cognitive Behaviors that Enable Self-Improving Reasoners, or, Four Habits of Highly Effective STaRs](https://arxiv.org/abs/2503.01307)**
  <sub>2025 · arXiv preprint arXiv:2503.01307 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2503.01307)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556)**
  <sub>2025 · arXiv preprint arXiv:2512.02556 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2512.02556)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Kimi K2: Open Agentic Intelligence](https://arxiv.org/abs/2507.20534)**
  <sub>2025 · arXiv preprint arXiv:2507.20534 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2507.20534)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Open-Reasoner-Zero: An Open Source Approach to Scaling Up Reinforcement Learning on the Base Model](https://arxiv.org/abs/2503.24290)**
  <sub>2025 · arXiv preprint arXiv:2503.24290 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2503.24290)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Skywork Open Reasoner 1 Technical Report](https://arxiv.org/abs/2505.22312)**
  <sub>2025 · arXiv preprint arXiv:2505.22312 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.22312)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[rStar2-Agent: Agentic Reasoning Technical Report](https://arxiv.org/abs/2508.20722)**
  <sub>2025 · arXiv preprint arXiv:2508.20722 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2508.20722)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.

### 🚀 Model Report

- 🚀 **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · distillation · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.12948) · [Card](../cards/recipes/deepseek_r1.md)
  _Why it matters:_ Frontier reasoning report central to public RLVR and reasoning post-training recipes.
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
- 🚀 **[Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318)**
  <sub>2025 · arXiv · 🚀 model report · mixed · distillation · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.21318) · [Card](../cards/recipes/phi4_reasoning.md)
  _Why it matters:_ Reasoning model report highlighting teacher distillation as trace writing.
- 🚀 **[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)**
  <sub>2025 · arXiv · 🚀 model report · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.09388) · [Card](../cards/recipes/qwen3.md)
  _Why it matters:_ Open model-family report useful for coordinated release-tick analysis.

### 📦 Data Release

- 📦 **[OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../cards/releases/openthoughts.md)
  _Why it matters:_ Open reasoning-data recipe with controlled ablations around question sourcing, filtering, and answer generation.

### 📈 Scaling Study

- 📈 **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · programmatic · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2509.25300)
  _Why it matters:_ Scaling study for model-size and compute-axis views of RL post-training.

### 🛠️ Infrastructure

- 🛠️ **[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)**
  <sub>2024 · ICLR · 🛠️ infrastructure · 🌐 agent environment · environmental · mixed · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16741) · [Code](https://github.com/All-Hands-AI/OpenHands) · [Project](https://www.openhands.dev/) · [Card](../cards/agents/openhands.md)
  _Why it matters:_ Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.

### ⚠️ Needs search or metadata

- 🧭 **DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Introducing OpenAI o3 and o4-mini**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Open-Reasoner-Zero: An open-source approach to RLVR for reasoning**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🚀 **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · sft · rlvr · L0_seeded</sub>
  [Code](https://github.com/QwenLM/Qwen3-Coder) · [Project](https://qwenlm.github.io/blog/qwen3-coder/) · [Card](../cards/recipes/qwen3_coder.md)
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- 🧭 **xLAM: A family of large action models to empower AI agent systems**
  <sub>2025 · NAACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **DeepSeek-Prover: Advancing theorem proving in LLMs**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **DeepSeekMath: Pushing the limits of mathematical reasoning in open language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **FrontierMath: A benchmark for evaluating advanced mathematical reasoning in AI**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Goedel-Prover: A frontier model for open-source automated theorem proving**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Learning to reason with LLMs**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **The Llama 3 Herd of models**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Tulu 3: Pushing frontiers in open language model post-training**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.

## What to audit

- Which data partitions and reward contracts are actually disclosed?
- Can model gains be attributed to data, optimizer, scaffold, or inference budget?
- Are distillation, RLVR, safety, and chat data separated?

## Related cards

- [DeepSeek-R1](../cards/recipes/deepseek_r1.md)
- [Kimi K1.5: Scaling Reinforcement Learning with LLMs](../cards/recipes/kimi_k15.md)
- [Llama-Nemotron: Efficient Reasoning Models](../cards/recipes/llama_nemotron.md)
- [Magistral](../cards/recipes/magistral.md)
- [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](../cards/recipes/minimax_m1.md)
- [OpenThoughts: Data recipes for reasoning models](../cards/releases/openthoughts.md)
- [Phi-4-reasoning Technical Report](../cards/recipes/phi4_reasoning.md)
- [Qwen3 Technical Report](../cards/recipes/qwen3.md)
- [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](../cards/agents/openhands.md)
- [Qwen3-Coder](../cards/recipes/qwen3_coder.md)

## Open gaps

- What is the minimum disclosure needed for a frontier report to be useful as a data-construction reference?
- How should an atlas represent proprietary pipelines without overclaiming reproducibility?
- Which model-report ablations actually isolate data quality, and which conflate model size, inference budget, and training objective?
- How can public model reports document safety and chain-of-thought privacy without exposing sensitive traces?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
