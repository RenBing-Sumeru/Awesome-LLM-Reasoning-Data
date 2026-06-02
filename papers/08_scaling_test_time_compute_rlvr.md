# 📈 Scaling, Test-Time Compute, and RLVR

> RLVR scaling, data reuse, distillation scaling, pass@k/pass@(k,T), inference budget, search topology, and test-time reinforcement.

## Why this category matters

Scaling papers turn reasoning-data design into a budget question. How many unique prompts are needed? How many rollouts per prompt? How much inference compute should be spent before training? When does repeated sampling beat better data? When does RLVR produce general reasoning and when does it exploit verifier shortcuts? These papers are valuable because they expose axes that model-report leaderboards often compress into one number.

This category includes Large Language Monkeys, s1, Kimi k1.5, The Art of Scaling Reinforcement Learning Compute for LLMs, Scaling Behaviors of LLM RL Post-Training, Distillation Scaling Laws, pass@k and pass@(k,T) work, CoT-Pass@K, Markovian Thinker, TTRL, entropy and clipping studies, DAPO, DeepScaleR, one-shot RLVR, data reuse papers, and RLVR audit studies. Some are verified; many are local seeds that need link review.

Practitioners should read every scaling curve as a measurement design. What exactly is on the x-axis: tokens, examples, rollouts, unique tasks, optimizer steps, model size, inference calls, search depth, or wall-clock compute? What is held fixed? Is the verifier stable across the scale sweep? Are public benchmarks contaminated or refreshed? Are failures reported or only successful runs? Without those details, a scaling law can become a storytelling device.

This page connects scaling to construction and audit because the axes are inseparable. A pass-rate filter changes data quality; a reward function changes which behaviors are selected; a test-time compute budget changes measured capability; a benchmark refresh changes the target. Treat scaling claims as ledger entries, not magic.

## How to read this category

- Identify the compute axis: training RL steps, rollout count, sample count, inference budget, search width/depth, or model size.
- Check whether the paper controls for data uniqueness, source overlap, verifier choice, and benchmark contamination.
- Look for asymptote-versus-efficiency language: does more compute raise the ceiling or merely reach the same ceiling faster?
- Avoid comparing pass@k, majority vote, budget forcing, and RL training curves unless the evaluation protocol is aligned.

## Must-read starter set

| Paper | Year | Why start here | Link status |
|---|---:|---|---|
| [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) · 🟡 partial | 2025 | Small-pool and test-time scaling reference. | linked |
| [Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599) (2025) · 🟡 partial | 2025 | Frontier report used for long-context RL and scaling discussion. | linked |
| [The Art of Scaling Reinforcement Learning Compute for LLMs](https://arxiv.org/abs/2510.13786) (2025) · 🟡 partial | 2025 | Scaling study anchoring asymptote-versus-efficiency decomposition. | linked |
| [Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300) (2025) · 🟡 partial | 2025 | Scaling study for model-size and compute-axis views of RL post-training. | linked |
| [Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171) (2023) · 🟡 partial | 2023 | Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views. | linked |
| [DAPO](https://arxiv.org/abs/2503.14476) (2025) · 🟡 partial | 2025 | GRPO-lineage RLVR recipe where filtering changes what reaches the gradient. | linked |
| [Spurious Rewards](https://arxiv.org/abs/2506.10947) (2025) · 🟡 partial | 2025 | Reward-signal audit for spurious behavior in RLVR. | linked |
| [Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) (2025) · 🟡 partial | 2025 | Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering. | linked |
| [OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891) (2025) · 🟡 partial | 2025 | Large-scale math reasoning trace release for programmatic verification. | linked |
| OpenR1-Math-220k (2025) · 🟡 partial | 2025 | Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields. | linked |
| [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592) (2024) · 🟡 partial | 2024 | Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels. | linked |
| [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) · 🟡 partial | 2025 | Frontier reasoning report central to public RLVR and reasoning post-training recipes. | linked |
| [Magistral](https://arxiv.org/abs/2506.10910) (2025) · 🟡 partial | 2025 | Reasoning report illustrating reward-stack pinning and prompt-corpus cycling. | linked |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) (2025) · 🟡 partial | 2025 | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. | linked |
| [Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903) (2022) · 🟡 partial | 2022 | Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object. | linked |
| [STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465) (2022) · 🟡 partial | 2022 | Self-training recipe that turns generated rationales into new supervision, connecting prompting, filtering, and iterative reasoning data construction. | linked |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) (2023) · 🟡 partial | 2023 | Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning. | linked |
| [Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560) (2023) · 🟡 partial | 2023 | Instruction-generation recipe showing how synthetic prompts, filtering, and tuning data become an alignment data pipeline. | linked |

## Promoted linked entries

This section only includes entries with at least one official artifact link and a non-seed local description. BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata.

### 📈 RLVR scaling

- **[The Art of Scaling Reinforcement Learning Compute for LLMs](https://arxiv.org/abs/2510.13786)**
  <sub>2025 · arXiv · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2510.13786) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Scaling study anchoring asymptote-versus-efficiency decomposition.
- **[Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599)**
  <sub>2025 · arXiv · 🚀 model report · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.12599) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Frontier report used for long-context RL and scaling discussion.
- **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · 🧮 programmatic · 🪜 answer level · 🎯 rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2509.25300) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Scaling study for model-size and compute-axis views of RL post-training.
- **[DAPO](https://arxiv.org/abs/2503.14476)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · 🧮 programmatic · 🪜 answer level · 🎯 rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.14476) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ GRPO-lineage RLVR recipe where filtering changes what reaches the gradient.
- **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · 🧮 programmatic · 🪜 scalar reward · 🎯 rlvr, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.10947) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
- **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · 🧮 programmatic · 🪜 answer level · 🎯 rlvr, sft · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.17387) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 distillation, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.12948) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Frontier reasoning report central to public RLVR and reasoning post-training recipes.

### ⏱️ Test-time compute and repeated sampling

- **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 🧭 survey background · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 evaluation, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.11171) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views.
- **[s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 sft, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.19393) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Small-pool and test-time scaling reference.

### 🧪 Optimization and reward dynamics

- **[Magistral](https://arxiv.org/abs/2506.10910)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.10910) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.

### 📚 Additional local seeds

- **[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.16891) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Large-scale math reasoning trace release for programmatic verification.
- **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · 🧮 programmatic · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [🐙 Code](https://github.com/huggingface/open-r1) · [🤗 Hugging Face](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · 🏗️ construction recipe · 🧮 programmatic · 🔀 mixed · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2406.06592) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · 🏗️ construction recipe · 🧮 programmatic · ⚖️ judgment required · 🪜 answer level, scalar reward · 🎯 rlvr, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.14625) · [🐙 Code](https://github.com/uw-nsl/TinyV) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · ❔ unknown · 🪜 answer level · 🎯 evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2201.11903) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object.
- **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.14465) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Self-training recipe that turns generated rationales into new supervision, connecting prompting, filtering, and iterative reasoning data construction.
- **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · 📦 data release · ⚖️ judgment required · 🧮 programmatic · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.20050) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning.
- **[Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560)**
  <sub>2023 · ACL · 🏗️ construction recipe · 📦 data release · 🔀 mixed · 🪜 answer level · 🎯 sft · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2212.10560) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Instruction-generation recipe showing how synthetic prompts, filtering, and tuning data become an alignment data pipeline.
- **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · 🧮 programmatic · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2312.08935) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Monte-Carlo-style process signal reference for step supervision.
- **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · ⚖️ judgment required · 🪜 scalar reward · 🎯 safety alignment, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.09004) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Safety dataset with risk categories and label provenance.
- **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.11456) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.00949) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- **[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)**
  <sub>2025 · arXiv · 🚀 model report · 🔀 mixed · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.09388) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Open model-family report useful for coordinated release-tick analysis.
- **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · 🧮 programmatic · 🌐 environmental · 🪜 answer level, full episode · 🎯 sft, rlvr · 🟡 partial</sub>
  [🐙 Code](https://github.com/QwenLM/Qwen3-Coder) · [🌐 Project](https://qwenlm.github.io/blog/qwen3-coder/) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 agent training, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.21139) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Repository-scale training environment showing substrate as data.

## Needs-search / metadata queue

These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added.

- **[TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084)**
  <sub>2025 · arXiv preprint arXiv:2504.16084 · 🏗️ construction recipe · 📈 scaling study · 🧪 verifier reward · 🔀 mixed · 🪜 scalar reward, answer level · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.16084) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2407.21787) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 📈 scaling study · 🧮 programmatic · 🔀 mixed · 🪜 answer level, scalar reward · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.09075) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepScaleR: Scaling reinforcement learning for reasoning in open models**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · 🏗️ construction recipe · 🔀 mixed · 🧮 programmatic · 🪜 answer level, full episode · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.13585) · [🐙 Code](https://github.com/MiniMax-AI/MiniMax-M1) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Clip-Low Increases Entropy and Clip-High Decreases Entropy in Reinforcement Learning of Large Language Models](https://arxiv.org/abs/2509.26114)**
  <sub>2025 · arXiv preprint arXiv:2509.26114 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2509.26114) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DAPO: An open-source LLM reinforcement learning system at scale**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Distillation Scaling Laws](https://arxiv.org/abs/2502.08606)**
  <sub>2025 · Proceedings of the 42nd International Conference on Machine Learning (ICML) · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.08606) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[The Entropy Mechanism of Reinforcement Learning for Reasoning Language Models](https://arxiv.org/abs/2505.22617)**
  <sub>2025 · arXiv preprint arXiv:2505.22617 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.22617) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[The Markovian Thinker: Architecture-Agnostic Linear Scaling of Reasoning](https://arxiv.org/abs/2510.06557)**
  <sub>2025 · arXiv preprint arXiv:2510.06557 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2510.06557) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **pass@$(k,T)$: Re-examining the reasoning boundary for agentic RL**
  <sub>2026 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335)**
  <sub>2025 · arXiv preprint arXiv:2505.03335 · 🏗️ construction recipe · 📈 scaling study · 🧮 programmatic · 🪜 answer level · 🎯 rlvr, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.03335) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Open-Reasoner-Zero: An Open Source Approach to Scaling Up Reinforcement Learning on the Base Model](https://arxiv.org/abs/2503.24290)**
  <sub>2025 · arXiv preprint arXiv:2503.24290 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.24290) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **1-shot RLVR: Learning reasoning with minimal verifiable data**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Does supervised fine-tuning memorize while reinforcement learning generalizes?**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · 🧰 benchmark · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.02951) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[The Invisible Leash: Why RLVR May or May Not Escape Its Origin](https://arxiv.org/abs/2507.14843)**
  <sub>2025 · arXiv preprint arXiv:2507.14843 · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.14843) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Big-math: A large-scale, high-quality math dataset for reinforcement learning and supervised fine-tuning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Goedel-Prover-V2: Scaling Formal Theorem Proving with Scaffolded Data Synthesis and Self-Correction](https://arxiv.org/abs/2508.03613)**
  <sub>2025 · arXiv preprint arXiv:2508.03613 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2508.03613) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[ReTool: Reinforcement Learning for Strategic Tool Use in LLMs](https://arxiv.org/abs/2504.11536)**
  <sub>2025 · arXiv preprint arXiv:2504.11536 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.11536) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Reinforcement Learning with Verifiable Rewards Implicitly Incentivizes Correct Reasoning in Base LLMs](https://arxiv.org/abs/2506.14245)**
  <sub>2025 · arXiv preprint arXiv:2506.14245 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.14245) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution](https://arxiv.org/abs/2502.18449)**
  <sub>2025 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.18449) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv preprint arXiv:2602.01511 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2602.01511) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Deep reinforcement learning from human preferences**
  <sub>2017 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **CodeRL: Mastering code generation through pretrained models and deep reinforcement learning**
  <sub>2022 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Training a helpful and harmless assistant with reinforcement learning from human feedback**
  <sub>2022 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Reflexion: Language agents with verbal reinforcement learning**
  <sub>2023 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Rewarding progress: Scaling automated process verifiers for LLM reasoning**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Does RL really incentivize reasoning beyond base?**
  <sub>2025 · NeurIPS Oral · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Open-Reasoner-Zero: An open-source approach to RLVR for reasoning**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SWE-RL: Advancing language agents for software engineering via reinforcement learning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.

## Open questions

- Which scaling axes should be reported together for RLVR runs: unique tasks, rollouts, tokens, verifier calls, and optimizer steps?
- How can benchmark refresh cycles keep test-time compute papers from optimizing stale public tasks?
- When does distillation preserve reasoning capability, and when does it compress away search behavior?
- What failure telemetry should accompany successful scaling curves?

## Related docs

- [08_scaling_and_test_time_compute.md](../docs/08_scaling_and_test_time_compute.md)
- [05_construction_cookbook.md](../docs/05_construction_cookbook.md)
- [09_audit_and_failure_modes.md](../docs/09_audit_and_failure_modes.md)

## Related cards

- [recipe_card_template.md](../cards/recipe_card_template.md)
- [verifier_card_template.md](../cards/verifier_card_template.md)

## Back to map

- [📚 Paper atlas README](README.md)
- [🌟 Repository README](../README.md)
