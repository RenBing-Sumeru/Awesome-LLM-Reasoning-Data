# 🏗️ Construction Recipes and Open Reasoning Data

> Prompt sourcing, teacher traces, filtering, self-play, generator-verifier loops, distill-then-RL, pure RL, and open reproduction pipelines.

## Why this category matters

Construction-recipe papers are the practical heart of a reasoning-data atlas. They answer the question a builder actually asks: how did the examples get made? A useful recipe exposes the prompt source, teacher or generator, sampling budget, trace format, verifier, filter, pass-rate band, decontamination rule, training objective, and ablations. Without those pieces, a model report may be inspiring but hard to reproduce.

OpenThoughts, OpenMathReasoning, Big-Math, DeepMath-103K, LIMO, s1, DAPO, DeepScaleR, Open-Reasoner-Zero, R-Zero, Absolute Zero, TTRL, AlphaEvolve, CoVerRL, Multi-Agent Evolve, STaR, Self-Instruct, Orca, and related papers show different positions in the recipe design space. Some rely on teacher traces and filtering. Some use self-play or generator-verifier co-evolution. Some emphasize tiny high-quality seed sets; others scale rollouts and reinforcement. Some are open pipelines; others are model reports with partial recipe disclosure.

The useful habit is to read every recipe as a bill of materials. What raw tasks entered? Who wrote the reasoning traces? How were failures removed or retained? What did the verifier see? Was the reward programmatic, learned, or judgment-based? Did the authors show that the same source examples were not reused as evaluations? Did they publish enough artifacts to let another team rerun the filter?

Recipes are also where hidden risk enters. A strong teacher may leak benchmark behavior into student traces. A filter can collapse diversity. A generator-verifier loop can converge on spurious consensus. A small curated set can be powerful but fragile. This page links construction papers to audit pages so readers keep tracing lineage instead of treating data recipes as magic.

## How to read this category

- Draw the pipeline: prompt source, generator/teacher, sampling, verifier, filter, training split, optimizer, evaluation suite, and release artifacts.
- Look for ablations that isolate data size, data quality, verifier choice, model initialization, and inference budget.
- Check whether the recipe exposes code/data links or only describes them; mark missing artifacts as `needs_search` before reuse.
- Avoid assuming a recipe transfers across domains unless the paper explains how the verifier and prompt source change.

## Must-read starter set

| Paper | Year | Why start here | Link status |
|---|---:|---|---|
| [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) (2025) · 🟡 partial | 2025 | Open reasoning-data recipe with controlled ablations around question sourcing, filtering, and answer generation. | linked |
| [OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891) (2025) · 🟡 partial | 2025 | Large-scale math reasoning trace release for programmatic verification. | linked |
| [DeepMath-103K](https://arxiv.org/abs/2504.11456) (2025) · 🟡 partial | 2025 | Math release highlighted for verifier pinning and decontamination. | linked |
| [Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) (2025) · 🟡 partial | 2025 | Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering. | linked |
| [DAPO](https://arxiv.org/abs/2503.14476) (2025) · 🟡 partial | 2025 | GRPO-lineage RLVR recipe where filtering changes what reaches the gradient. | linked |
| [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) · 🟡 partial | 2025 | Small-pool and test-time scaling reference. | linked |
| [LIMO: Less Is More for Reasoning](https://arxiv.org/abs/2502.03387) (2025) · 🟡 partial | 2025 | Small-set curation reference distinguishing elicitation from broad coverage. | linked |
| [STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465) (2022) · 🟡 partial | 2022 | Self-training recipe that turns generated rationales into new supervision, connecting prompting, filtering, and iterative reasoning data construction. | linked |
| [Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560) (2023) · 🟡 partial | 2023 | Instruction-generation recipe showing how synthetic prompts, filtering, and tuning data become an alignment data pipeline. | linked |
| [Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073) (2022) · 🟡 partial | 2022 | AI-feedback alignment recipe that makes critiques, principles, and preference signals part of the post-training data object. | linked |
| OpenR1-Math-220k (2025) · 🟡 partial | 2025 | Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields. | linked |
| [Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903) (2022) · 🟡 partial | 2022 | Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object. | linked |
| [Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318) (2025) · 🟡 partial | 2025 | Reasoning model report highlighting teacher distillation as trace writing. | linked |
| [Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290) (2023) · 🟡 partial | 2023 | Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step. | linked |
| Qwen3-Coder (2025) · 🟡 partial | 2025 | Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release. | linked |
| [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) (2022) · 🟡 partial | 2022 | InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping. | linked |
| [Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171) (2023) · 🟡 partial | 2023 | Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views. | linked |
| [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) · 🟡 partial | 2025 | Frontier reasoning report central to public RLVR and reasoning post-training recipes. | linked |

## Promoted linked entries

This section only includes entries with at least one official artifact link and a non-seed local description. BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata.

### 📦 Open math/code reasoning releases

- **[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.16891) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Large-scale math reasoning trace release for programmatic verification.
- **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · 🧮 programmatic · 🪜 answer level · 🎯 rlvr, sft · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.17387) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.11456) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.

### 🧑‍🏫 Teacher traces, distillation, and filtering

- **[Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560)**
  <sub>2023 · ACL · 🏗️ construction recipe · 📦 data release · 🔀 mixed · 🪜 answer level · 🎯 sft · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2212.10560) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Instruction-generation recipe showing how synthetic prompts, filtering, and tuning data become an alignment data pipeline.
- **[OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.04178) · [🐙 Code](https://github.com/open-thoughts/open-thoughts) · [🤗 Hugging Face](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Open reasoning-data recipe with controlled ablations around question sourcing, filtering, and answer generation.
- **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.14465) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Self-training recipe that turns generated rationales into new supervision, connecting prompting, filtering, and iterative reasoning data construction.
- **[DAPO](https://arxiv.org/abs/2503.14476)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · 🧮 programmatic · 🪜 answer level · 🎯 rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.14476) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ GRPO-lineage RLVR recipe where filtering changes what reaches the gradient.
- **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · 🧮 programmatic · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [🐙 Code](https://github.com/huggingface/open-r1) · [🤗 Hugging Face](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- **[LIMO: Less Is More for Reasoning](https://arxiv.org/abs/2502.03387)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.03387) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Small-set curation reference distinguishing elicitation from broad coverage.
- **[Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318)**
  <sub>2025 · arXiv · 🚀 model report · 🔀 mixed · 🪜 answer level · 🎯 distillation, sft · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.21318) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Reasoning model report highlighting teacher distillation as trace writing.
- **[s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 sft, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.19393) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Small-pool and test-time scaling reference.

### ⚙️ RLVR and open training pipelines

- **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 distillation, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.12948) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Frontier reasoning report central to public RLVR and reasoning post-training recipes.

### 📚 Additional local seeds

- **[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073)**
  <sub>2022 · arXiv preprint · 🏗️ construction recipe · 🧭 survey background · ⚖️ judgment required · 🔀 mixed · 🪜 pairwise preference · 🎯 preference learning, safety alignment · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2212.08073) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ AI-feedback alignment recipe that makes critiques, principles, and preference signals part of the post-training data object.
- **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · ❔ unknown · 🪜 answer level · 🎯 evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2201.11903) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object.
- **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · ⚖️ judgment required · 🪜 pairwise preference · 🎯 preference learning · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.18290) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step.
- **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · 🧮 programmatic · 🌐 environmental · 🪜 answer level, full episode · 🎯 sft, rlvr · 🟡 partial</sub>
  [🐙 Code](https://github.com/QwenLM/Qwen3-Coder) · [🌐 Project](https://qwenlm.github.io/blog/qwen3-coder/) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · ⚖️ judgment required · 🪜 pairwise preference, scalar reward · 🎯 sft, preference learning · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.02155) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping.
- **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 🧭 survey background · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 evaluation, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.11171) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views.
- **[Subliminal Learning](https://arxiv.org/abs/2507.14805)**
  <sub>2025 · arXiv · 🧯 audit failure · 🔀 mixed · 🪜 answer level · 🎯 distillation, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.14805) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Lineage-risk study for hidden trait transfer in synthetic data.
- **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · 📦 data release · ⚖️ judgment required · 🧮 programmatic · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.20050) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning.
- **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · 🏗️ construction recipe · 🧮 programmatic · 🔀 mixed · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2406.06592) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · ⚖️ judgment required · 🪜 scalar reward · 🎯 safety alignment, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.09004) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Safety dataset with risk categories and label provenance.
- **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 agent training, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.21139) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Repository-scale training environment showing substrate as data.
- **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.00949) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- **[Magistral](https://arxiv.org/abs/2506.10910)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.10910) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.
- **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · 🏗️ construction recipe · 🧮 programmatic · ⚖️ judgment required · 🪜 answer level, scalar reward · 🎯 rlvr, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.14625) · [🐙 Code](https://github.com/uw-nsl/TinyV) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · ⚖️ judgment required · 🪜 step level · 🎯 evaluation, safety alignment · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.15674) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Shows reasoning traces can expose private fields.
- **[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)**
  <sub>2025 · arXiv · 🚀 model report · 🔀 mixed · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.09388) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Open model-family report useful for coordinated release-tick analysis.

## Needs-search / metadata queue

These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added.

- **[Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335)**
  <sub>2025 · arXiv preprint arXiv:2505.03335 · 🏗️ construction recipe · 📈 scaling study · 🧮 programmatic · 🪜 answer level · 🎯 rlvr, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.03335) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](https://arxiv.org/abs/2502.13124)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.13124) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Open-Reasoner-Zero: An Open Source Approach to Scaling Up Reinforcement Learning on the Base Model](https://arxiv.org/abs/2503.24290)**
  <sub>2025 · arXiv preprint arXiv:2503.24290 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.24290) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 📈 scaling study · 🧮 programmatic · 🔀 mixed · 🪜 answer level, scalar reward · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.09075) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084)**
  <sub>2025 · arXiv preprint arXiv:2504.16084 · 🏗️ construction recipe · 📈 scaling study · 🧪 verifier reward · 🔀 mixed · 🪜 scalar reward, answer level · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.16084) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Open-Reasoner-Zero: An open-source approach to RLVR for reasoning**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Multi-Agent Evolve: LLM self-improve through co-evolution**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · 🧰 benchmark · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.02951) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Big-math: A large-scale, high-quality math dataset for reinforcement learning and supervised fine-tuning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DAPO: An open-source LLM reinforcement learning system at scale**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepScaleR: Scaling reinforcement learning for reasoning in open models**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131)**
  <sub>2025 · arXiv preprint arXiv:2506.13131 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.13131) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[R-Zero: Self-Evolving Reasoning LLM from Zero Data](https://arxiv.org/abs/2508.05004)**
  <sub>2025 · arXiv preprint arXiv:2508.05004 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2508.05004) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled)](https://arxiv.org/abs/2503.19633)**
  <sub>2025 · arXiv preprint arXiv:2503.19633 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.19633) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Learning beyond Teacher: Generalized On-Policy Distillation with Reward Extrapolation (G-OPD)](https://arxiv.org/abs/2602.12125)**
  <sub>2026 · arXiv preprint arXiv:2602.12125 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2602.12125) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Orca: Progressive learning from complex explanation traces of GPT-4**
  <sub>2023 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Cognitive Behaviors that Enable Self-Improving Reasoners, or, Four Habits of Highly Effective STaRs](https://arxiv.org/abs/2503.01307)**
  <sub>2025 · arXiv preprint arXiv:2503.01307 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.01307) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[rStar2-Agent: Agentic Reasoning Technical Report](https://arxiv.org/abs/2508.20722)**
  <sub>2025 · arXiv preprint arXiv:2508.20722 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2508.20722) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[CoVerRL: Breaking the Consensus Trap in Label-Free Reasoning via Generator-Verifier Co-Evolution](https://arxiv.org/abs/2603.17775)**
  <sub>2026 · arXiv preprint arXiv:2603.17775 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2603.17775) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 state action level · 🎯 sft, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2307.16789) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Sky-T1: Fully open reasoning model and data recipe**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Distillation Scaling Laws](https://arxiv.org/abs/2502.08606)**
  <sub>2025 · Proceedings of the 42nd International Conference on Machine Learning (ICML) · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.08606) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Skywork Open Reasoner 1 Technical Report](https://arxiv.org/abs/2505.22312)**
  <sub>2025 · arXiv preprint arXiv:2505.22312 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.22312) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Bootstrapping Post-training Signals for Open-ended Tasks via Rubric-based Self-play on Pre-training Text (POP)](https://arxiv.org/abs/2604.20051)**
  <sub>2026 · arXiv preprint arXiv:2604.20051 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2604.20051) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Decoupling KL and Trajectories: A Unified Perspective for SFT, DAgger, Offline RL, and OPD in LLM Distillation](https://arxiv.org/abs/2605.16826)**
  <sub>2026 · arXiv preprint arXiv:2605.16826 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2605.16826) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Why Does Self-Distillation (Sometimes) Degrade the Reasoning Capability of LLMs?](https://arxiv.org/abs/2603.24472)**
  <sub>2026 · arXiv preprint arXiv:2603.24472 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2603.24472) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **rStar-Math**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **DeepSeekMath: Pushing the limits of mathematical reasoning in open language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **HelpSteer2: Open-source preference data for helpfulness and safety**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SWE-smith: Scaling data construction for software engineering agents**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2404.07972) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Towards Understanding Self-play for LLM Reasoning](https://arxiv.org/abs/2510.27072)**
  <sub>2025 · arXiv preprint arXiv:2510.27072 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2510.27072) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · 🏗️ construction recipe · 🔀 mixed · 🧮 programmatic · 🪜 answer level, full episode · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.13585) · [🐙 Code](https://github.com/MiniMax-AI/MiniMax-M1) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Distilling step-by-step: Outperforming larger language models with less training data and smaller model sizes**
  <sub>2023 · ACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **MetaMath: Bootstrap your own mathematical questions for large language models**
  <sub>2023 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **WizardMath: Empowering mathematical reasoning for large language models via reinforced evol-instruct**
  <sub>2023 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Goedel-Prover: A frontier model for open-source automated theorem proving**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Prometheus 2: An open source language model specialized in evaluating other language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SPIN: Self-play fine-tuning converts weak language models to strong language models**
  <sub>2024 · ICML · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ACORD: Attorney-curated open research dataset**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **MegaScience: A benchmark and data resource for scientific reasoning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **OpenCodeReasoning-2: Scalable code reasoning data**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **OpenCodeReasoning: Code reasoning traces at scale**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.

## Open questions

- What is the smallest metadata card that makes a reasoning-data recipe reproducible?
- How can recipes report negative samples and failed traces without encouraging benchmark leakage?
- When does generator-verifier co-evolution escape teacher limitations, and when does it amplify spurious consensus?
- How should open pipelines balance release transparency with benchmark and safety leakage risks?

## Related docs

- [05_construction_cookbook.md](../docs/05_construction_cookbook.md)
- [03_reasoning_data_objects.md](../docs/03_reasoning_data_objects.md)
- [04_data_quality.md](../docs/04_data_quality.md)
- [08_scaling_and_test_time_compute.md](../docs/08_scaling_and_test_time_compute.md)

## Related cards

- [recipe_card_template.md](../cards/recipe_card_template.md)
- [math_reasoning_release_card.md](../cards/examples/math_reasoning_release_card.md)

## Back to map

- [📚 Paper atlas README](README.md)
- [🌟 Repository README](../README.md)
