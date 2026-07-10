# 🧱 Instruction, Demonstration, and Rationale Data

> Instruction-response examples, human demonstrations, synthetic instructions, rationales, chain-of-thought traces, and teacher-written reasoning targets.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=instruction_demonstration_rationale_data&mode=find_papers)
> Try: `What should I read first for 🧱 Instruction / Demo / Rationale?`
> Try: `Compare the data objects and verifier types in 🧱 Instruction / Demo / Rationale.`
> Try: `Generate an audit checklist for 🧱 Instruction / Demo / Rationale.`

## 1. What This Track Studies

Use this track to understand how reasoning behavior is serialized before preference, verifier, or environment feedback is added.

Many reasoning-data systems still begin with demonstrations: a task, a target answer, and sometimes a rationale or chain-of-thought trace. This track collects the papers that teach how those targets are sourced, generated, filtered, distilled, and reused for SFT or bootstrapped reasoning improvement.

The key distinction is fidelity. A rationale can be a useful teaching artifact, but it can also be a style target that merely looks like reasoning. For every paper, readers should ask who authored the trace, whether the final answer was checked, whether rejected traces are visible, and whether the training objective consumes the trace or only the final answer.

This track gives contributors a clear home for instruction tuning, self-instruction, CoT, STaR, long/short reasoning traces, and teacher-distilled demonstration releases without mixing them into preference rewards or programmatic-verifier work.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧱 Instruction tuning / SFT data | instruction-response examples, demonstrations, and target behavior records | prompt sources and mixture weights are hidden |
| 🧑‍🏫 Human demonstrations | human-written solutions, explanations, rationales, and expert demonstrations | human trace policy and expertise are unclear |
| 🤖 Synthetic instruction data | self-instruct, teacher-generated tasks, and synthetic instruction mixtures | synthetic prompts collapse diversity or inherit teacher artifacts |
| 🧠 Chain-of-thought / rationale data | rationales, CoT traces, self-consistency, and reasoning-style supervision | trace style is mistaken for faithful reasoning |
| 🔁 Self-training / STaR | bootstrapped traces, self-training, critique loops, and filtered self-improvement | feedback loop repeats hidden errors or shortcuts |
| ✂️ Long/short CoT distillation | teacher long traces, distilled short traces, and reasoning compression | distillation loses uncertainty and failed attempts |

### Contents

- [🧱 Instruction tuning / SFT data](#instruction-tuning-sft-data)
- [🧑‍🏫 Human demonstrations](#human-demonstrations)
- [🤖 Synthetic instruction data](#synthetic-instruction-data)
- [🧠 Chain-of-thought / rationale data](#chain-of-thought-rationale-data)
- [🔁 Self-training / STaR](#self-training-star)
- [✂️ Long/short CoT distillation](#long-short-cot-distillation)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) | 2025 | [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) · [Card](../../cards/recipes/deepseek-prover-v2.md) | subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline. | Lean verification and RL reward over formal proof success. | It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification. |
| [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | 2025 | [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../../cards/releases/openthoughts.md) | reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus | filters, benchmark feedback, and recipe ablations | It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance. |
| [DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333) | 2024 | [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1) · [Card](../../cards/recipes/deepseek-prover.md) | Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness. | Lean kernel/checker acceptance. | It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object. |
| [Magicoder: Empowering code generation with OSS-instruct](https://arxiv.org/abs/2312.02120) | 2024 | [Paper](https://arxiv.org/abs/2312.02120) · [PMLR](https://proceedings.mlr.press/v235/wei24h.html) · [Code](https://github.com/ise-uiuc/magicoder) · [Data](https://huggingface.co/datasets/ise-uiuc/Magicoder-OSS-Instruct-75K) · [HF](https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B) · [Card](../../cards/recipes/magicoder.md) | instruction-response coding example, often linked to a code reference or task scaffold.; process: source snippet, generated instruction, solution response, model family, benchmark result.; offline code-data generation and code benchmark evaluation. | coding benchmark pass rates and optional executable checks. | It is a strong code-data construction example because it grounds synthetic coding instructions in real open-source references rather than free-floating prompt invention. |
| [OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560) | 2024 | [Paper](https://arxiv.org/abs/2410.01560) · [OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [Code](https://github.com/NVIDIA-NeMo/Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/) · [Card](../../cards/releases/openmathinstruct-2.md) | problem-solution pair with natural-language mathematical reasoning and final answer.; process: source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.; NVIDIA NeMo-Skills generation, training, and evaluation pipeline. | answer checks and benchmark evaluation over math tasks. | It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models. |
| [Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) | 2024 | [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) · [Card](../../cards/recipes/tulu-3.md) | instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases. | mixture of preference labels, reward models, and verifiable rewards depending on stage. | It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together. |
| [LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md) | Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories. | Lean checker and environment feedback. | It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record. |
| [Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560) | 2023 | [Paper](https://arxiv.org/abs/2212.10560) · [Card](../../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) | answer level | mixed | It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion. |
| [Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511) | 2023 | [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/) · [Card](../../cards/recipes/self-rag.md) | generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens. | critique signals and task-specific factuality/answer-quality evaluation. | It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations. |
| [UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377) | 2023 | [Paper](https://arxiv.org/abs/2310.01377) · [Code](https://github.com/OpenBMB/UltraFeedback) · [Data](https://huggingface.co/datasets/openbmb/UltraFeedback) · [Card](../../cards/releases/ultrafeedback.md) | instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline. | AI-generated scalar and textual feedback over response quality dimensions. | It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels. |

## 5. Full Paper List

### <a id="instruction-tuning-sft-data"></a>🧱 Instruction tuning / SFT data

- 🚀 **[DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · rlvr · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) · [Card](../../cards/recipes/deepseek-prover-v2.md)
  _Data object:_ subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline.
  _Feedback / verifier:_ Lean verification and RL reward over formal proof success.
  _Recipe signal:_ teacher: DeepSeek-V3-style decomposition and formal proof feedback.; generator: recursive pipeline creates subgoals and proof attempts.
  _Audit focus:_ Subgoal decomposition can introduce false intermediate claims., Formal and informal reasoning scores are not directly comparable., Large-model teacher lineage can hide data provenance.
  _Why it matters:_ It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification.
- 📦 **[OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../../cards/releases/openthoughts.md)
  _Data object:_ reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus
  _Feedback / verifier:_ filters, benchmark feedback, and recipe ablations
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance.
- 🏗️ **[s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · mixed · sft · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.19393) · [Card](../../cards/releases/s1.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; scaling report; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a useful counterpoint to massive-data recipes: careful small-set curation plus inference-budget control can materially change reasoning performance.
- 📦 **[DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333)**
  <sub>2024 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · environmental · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1) · [Card](../../cards/recipes/deepseek-prover.md)
  _Data object:_ Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness.
  _Feedback / verifier:_ Lean kernel/checker acceptance.
  _Recipe signal:_ teacher: formalization and proof-generation pipeline with Lean feedback.; generator: synthetic data pipeline translates informal math into formal statements and proofs.
  _Audit focus:_ Formal statements can be wrong even if proofs verify., Pass@k hides low single-shot reliability., Lean/mathlib version drift can break reproducibility.
  _Why it matters:_ It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object.
- 🚀 **[DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [Code](https://github.com/deepseek-ai/deepseek-math) · [HF](https://huggingface.co/collections/deepseek-ai/deepseek-math) · [Card](../../cards/recipes/deepseekmath.md)
  _Data object:_ natural-language mathematical solution plus final answer, sometimes sampled multiple times.; process: data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.; offline math training and benchmark evaluation pipeline.
  _Feedback / verifier:_ answer correctness and GRPO-style reward over math tasks.
  _Recipe signal:_ teacher: math corpora, supervised examples, and verifiable benchmark answers.; generator: model produces solutions during SFT, RL, and self-consistency sampling.
  _Audit focus:_ Self-consistency can hide weak single-sample accuracy., Web-data mining may import benchmark leakage., Final-answer rewards can miss flawed derivations.
  _Why it matters:_ It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.
- 🧰 **[LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · mixed · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/) · [Card](../../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic, mixed
  _Recipe signal:_ release audit; evaluation; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.
- 🏗️ **[Magicoder: Empowering code generation with OSS-instruct](https://arxiv.org/abs/2312.02120)**
  <sub>2024 · ICML · 🏗️ construction recipe · 📦 data release · programmatic · mixed · sft · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2312.02120) · [PMLR](https://proceedings.mlr.press/v235/wei24h.html) · [Code](https://github.com/ise-uiuc/magicoder) · [Data](https://huggingface.co/datasets/ise-uiuc/Magicoder-OSS-Instruct-75K) · [HF](https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B) · [Card](../../cards/recipes/magicoder.md)
  _Data object:_ instruction-response coding example, often linked to a code reference or task scaffold.; process: source snippet, generated instruction, solution response, model family, benchmark result.; offline code-data generation and code benchmark evaluation.
  _Feedback / verifier:_ coding benchmark pass rates and optional executable checks.
  _Recipe signal:_ teacher: GPT-3.5-series teacher model for synthetic instruction generation.; generator: OSS-Instruct prompts the teacher with open-source code snippets.
  _Audit focus:_ Synthetic code tasks can inherit license issues., Reference snippets may leak benchmark patterns., Teacher-generated solutions can be plausible but wrong.
  _Why it matters:_ It is a strong code-data construction example because it grounds synthetic coding instructions in real open-source references rather than free-floating prompt invention.
- 📦 **[OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560)**
  <sub>2024 · ICLR · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2410.01560) · [OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [Code](https://github.com/NVIDIA-NeMo/Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/) · [Card](../../cards/releases/openmathinstruct-2.md)
  _Data object:_ problem-solution pair with natural-language mathematical reasoning and final answer.; process: source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.; NVIDIA NeMo-Skills generation, training, and evaluation pipeline.
  _Feedback / verifier:_ answer checks and benchmark evaluation over math tasks.
  _Recipe signal:_ teacher: Llama3.1-405B-Instruct generates large-scale math solutions.; generator: NeMo-Skills pipeline performs problem/solution augmentation and model training.
  _Audit focus:_ Synthetic solutions can encode teacher shortcuts., Large scale can hide duplicated or near-duplicated questions., Verbose traces may hurt rather than help SFT.
  _Why it matters:_ It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models.
- 🚀 **[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · programmatic · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) · [Card](../../cards/recipes/tulu-3.md)
  _Data object:_ instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases.
  _Feedback / verifier:_ mixture of preference labels, reward models, and verifiable rewards depending on stage.
  _Recipe signal:_ teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.; generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
  _Audit focus:_ Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., RLVR improvements may be domain-specific.
  _Why it matters:_ It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.
- 📦 **[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 📦 data release · 🧰 benchmark · environmental · programmatic · agent training · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md)
  _Data object:_ Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.
  _Feedback / verifier:_ Lean checker and environment feedback.
  _Recipe signal:_ teacher: Lean math-library proofs and proof-assistant feedback.; generator: data-extraction toolkit traces repositories and prover generates tactics.
  _Audit focus:_ A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
- 🏗️ **[Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560)**
  <sub>2023 · ACL · 🏗️ construction recipe · 📦 data release · mixed · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.10560) · [Card](../../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; trace writing; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion.
- 🏗️ **[Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511)**
  <sub>2023 · ICLR · 🏗️ construction recipe · 📦 data release · mixed · judgment required · sft · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/) · [Card](../../cards/recipes/self-rag.md)
  _Data object:_ generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens.
  _Feedback / verifier:_ critique signals and task-specific factuality/answer-quality evaluation.
  _Recipe signal:_ teacher: critic and retrieval-supervision signals derived from task data and evidence checks.; generator: model learns special reflection tokens for retrieval and critique behavior.
  _Audit focus:_ A model can retrieve irrelevant passages confidently., Critique tokens can become style markers without true verification., Retriever choice changes benchmark conclusions.
  _Why it matters:_ It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations.
- 🏗️ **[Toolformer: Language models can teach themselves to use tools](https://arxiv.org/abs/2302.04761)**
  <sub>2023 · NeurIPS · 🏗️ construction recipe · 🌐 agent environment · mixed · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2302.04761) · [OpenReview](https://openreview.net/forum?id=Yacmpz84TH) · [Card](../../cards/agents/toolformer.md)
  _Data object:_ text sequence with inserted API call and tool result markup.; process: candidate call location, API name, arguments, tool output, likelihood improvement, retained annotation.; external tool APIs used during data construction and evaluation.
  _Feedback / verifier:_ language-model likelihood improvement after including tool result.
  _Recipe signal:_ teacher: small hand-written demonstrations per tool seed the API-call format.; generator: model samples candidate tool calls over raw text.
  _Audit focus:_ Likelihood improvement may not equal truthful tool use., Tools can return stale or wrong outputs., The model can learn call syntax without robust tool-selection judgment.
  _Why it matters:_ It is a classic construction recipe for tool-call supervision: models learn when to call tools, what arguments to pass, and how to fold observations back into text.
- 📦 **[UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377)**
  <sub>2023 · ICML · 📦 data release · 🧪 verifier reward · judgment required · preference learning · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.01377) · [Code](https://github.com/OpenBMB/UltraFeedback) · [Data](https://huggingface.co/datasets/openbmb/UltraFeedback) · [Card](../../cards/releases/ultrafeedback.md)
  _Data object:_ instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline.
  _Feedback / verifier:_ AI-generated scalar and textual feedback over response quality dimensions.
  _Recipe signal:_ teacher: AI judge annotations and rubric instructions.; generator: candidate responses are sampled from a diverse model pool.
  _Audit focus:_ AI feedback can encode judge-model bias., A corrected dataset version can change reward-model behavior., Fine-grained scores may not translate cleanly into pairwise preferences.
  _Why it matters:_ It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels.
- 🧭 **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · judgment required · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.02155) · [Card](../../cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md)
  _Data object:_ pairwise preference; scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ prompt sourcing; reward verifier layer; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models.
- 🧰 **[GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../../cards/benchmarks/gsm8k-grade-school-math-8k.md)
  _Data object:_ natural-language solution with final numeric answer; process: question, solution, final answer; offline math benchmark
  _Feedback / verifier:_ answer extraction and arithmetic correctness checks
  _Recipe signal:_ generator: human problem writers; filtering rule: curated math word problem collection
  _Audit focus:_ answer extraction errors, contamination through benchmark reuse
  _Why it matters:_ It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training.
- 🧰 **[Measuring coding challenge competence with APPS](https://arxiv.org/abs/2105.09938)**
  <sub>2021 · NeurIPS · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2105.09938) · [OpenReview](https://openreview.net/forum?id=sD93GOzH3i5) · [Code](https://github.com/hendrycks/apps) · [Card](../../cards/benchmarks/apps.md)
  _Data object:_ Python code submission evaluated against test cases.; process: difficulty, prompt, starter code where available, generated solution, public/hidden test outcomes.; offline programming benchmark with executable Python tests.
  _Feedback / verifier:_ unit-test pass/fail signal.
  _Recipe signal:_ teacher: benchmark tests and reference solutions provide supervision surface.; generator: models produce candidate programs from problem text.
  _Audit focus:_ Programs can overfit weak tests., Syntax validity is not the same as functional correctness., Contamination can inflate code benchmark scores.
  _Why it matters:_ It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome.
- 🧰 **[Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Code](https://github.com/hendrycks/math) · [Card](../../cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ release audit; evaluation; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems.
- 🧰 **[miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110)**
  <sub>2021 · ICLR · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.00110) · [OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [Code](https://github.com/openai/miniF2F) · [Card](../../cards/benchmarks/minif2f.md)
  _Data object:_ formal proof accepted by a target proof assistant.; process: formal system, theorem statement, split, generated proof/tactics, verifier result.; Lean, Metamath, Isabelle, and HOL Light style theorem proving environments.
  _Feedback / verifier:_ proof assistant kernel/checker acceptance.
  _Recipe signal:_ teacher: formalized benchmark statements and proof assistant checkers.; generator: human translators and theorem prover agents produce proof attempts.
  _Audit focus:_ A theorem can be easier in one formal system than another., Search budget can dominate model differences., Forks can drift from the original benchmark.
  _Why it matters:_ It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof.
- 📦 **[LIMO: Less Is More for Reasoning](https://arxiv.org/abs/2502.03387)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.03387) · [Card](../../cards/releases/limo.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; sft; distillation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Small-set curation reference distinguishing elicitation from broad coverage.
- 📦 **[NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](https://arxiv.org/abs/2502.13124)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.13124) · [Card](../../cards/releases/naturalreasoning.md)
  _Data object:_ question with reference answer or reasoning target; process: question, reference answer, domain label; offline natural-language tasks
  _Feedback / verifier:_ reference answers, reward models, or self-rewarding depending on split
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.
- 📦 **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.09075) · [Card](../../cards/releases/opencodereasoning_ii.md)
  _Data object:_ question-solution-critique triple; process: solution, critique, language/runtime label; coding benchmark / compiler substrate
  _Feedback / verifier:_ tests and critique model signals
  _Recipe signal:_ trace writing; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- 📦 **[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16891) · [Card](../../cards/releases/openmathreasoning.md)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ prompt sourcing; trace writing; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale math reasoning trace release for programmatic verification.
- 🚀 **[Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318)**
  <sub>2025 · arXiv · 🚀 model report · mixed · distillation · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.21318) · [Card](../../cards/recipes/phi4_reasoning.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ trace writing; frontier pipeline; distillation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reasoning model report highlighting teacher distillation as trace writing.
- 🚀 **[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)**
  <sub>2025 · arXiv · 🚀 model report · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.09388) · [Card](../../cards/recipes/qwen3.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; sft; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open model-family report useful for coordinated release-tick analysis.
- 📦 **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.16789) · [Card](../../cards/agents/toolllm_toolbench.md)
  _Data object:_ tool-call trajectory plus final response; process: API call, arguments, tool response; real-world API/tool catalog
  _Feedback / verifier:_ tool response validity and task success checks
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.
- 🧰 **[FinQA: A dataset of numerical reasoning over financial data](https://aclanthology.org/2021.emnlp-main.300/)**
  <sub>2021 · EMNLP · 🧰 benchmark · 📦 data release · mixed · evaluation · sft · L2_artifact_verified</sub>
  [Paper](https://aclanthology.org/2021.emnlp-main.300/) · [Project](https://finqasite.github.io/)
  _Data object:_ answer level; step level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ release audit; evaluation; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a finance-domain reasoning benchmark where the data object includes questions, evidence from financial reports, answers, and reasoning programs rather than only free-form responses.
- 🧰 **[TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance](https://aclanthology.org/2021.acl-long.254/)**
  <sub>2021 · ACL · 🧰 benchmark · 📦 data release · mixed · evaluation · sft · L2_artifact_verified</sub>
  [Paper](https://aclanthology.org/2021.acl-long.254/) · [arXiv](https://arxiv.org/abs/2105.07624) · [Code](https://github.com/NExTplusplus/TAT-QA) · [Project](https://nextplusplus.github.io/TAT-QA/)
  _Data object:_ answer level; step level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ release audit; evaluation; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives legal/finance-style domain reasoning a concrete benchmark surface where evidence selection, table-text grounding, arithmetic, and answer normalization all matter.
- 📄 **[Decoupling KL and Trajectories: A Unified Perspective for SFT, DAgger, Offline RL, and OPD in LLM Distillation](https://arxiv.org/abs/2605.16826)**
  <sub>2026 · arXiv preprint arXiv:2605.16826 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2605.16826)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="human-demonstrations"></a>🧑‍🏫 Human demonstrations

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="synthetic-instruction-data"></a>🤖 Synthetic instruction data

- 🏗️ **[Orca: Progressive learning from complex explanation traces of GPT-4](https://arxiv.org/abs/2306.02707)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 🚀 model report · judgment required · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.02707) · [Project](https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/) · [Card](../../cards/recipes/orca.md)
  _Data object:_ instruction response with detailed explanation, intermediate reasoning, and final answer.; process: prompt source, teacher identity, explanation trace, task type, response, evaluation benchmark.; offline synthetic-data distillation and evaluation pipeline.
  _Feedback / verifier:_ downstream reasoning, exam, and benchmark evaluation rather than a single automatic verifier.
  _Recipe signal:_ teacher: large foundation models that produce explanation traces and stepwise guidance.; generator: teacher-assisted data-generation pipeline over diverse instructions.
  _Audit focus:_ Students can learn teacher style without robust reasoning., Synthetic traces can include teacher errors., Closed teacher data makes lineage hard to audit.
  _Why it matters:_ It is an early and influential reasoning-distillation recipe: the reusable object is teacher-assisted explanation data plus careful evaluation against style-only imitation.
- 📦 **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.02951) · [Card](../../cards/releases/kodcode.md)
  _Data object:_ question-solution-test triplet; process: problem, solution, unit tests; code execution and unit-test substrate
  _Feedback / verifier:_ test-based self-verification
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.

### <a id="chain-of-thought-rationale-data"></a>🧠 Chain-of-thought / rationale data

- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧰 benchmark · judgment required · environmental · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts) · [Card](../../cards/failures/leaky-thoughts.md)
  _Data object:_ internal reasoning trace, final answer, and leakage/extraction outcome.; process: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.; personal-agent evaluation setting with hidden or internal reasoning traces.
  _Feedback / verifier:_ extraction probes and agentic evaluations.
  _Recipe signal:_ teacher: not applicable; this is an audit benchmark.; generator: models produce reasoning traces under normal or injected prompts.
  _Audit focus:_ Hiding thoughts from users does not make them safe., Trace logging can create a new privacy dataset., Utility improvements from more reasoning may worsen leakage risk.
  _Why it matters:_ It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.
- 📈 **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 📈 scaling study · 🧭 survey background · mixed · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw) · [Card](../../cards/recipes/self-consistency-chain-of-thought.md)
  _Data object:_ multiple rationales and final answers for the same prompt.; process: sampling temperature, number of paths, answer extraction, aggregation rule.; benchmark prompting setup.
  _Feedback / verifier:_ majority or marginalization over sampled answers.
  _Recipe signal:_ teacher: few-shot chain-of-thought exemplars.; generator: model samples many reasoning paths.
  _Audit focus:_ More samples can amplify benchmark-specific shortcuts., Aggregation does not guarantee step faithfulness., Unmatched inference budgets can make methods look better than they are.
  _Why it matters:_ It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.
- 🧭 **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · unknown · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2201.11903) · [Card](../../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md)
  _Data object:_ answer level
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ trace writing; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets.
- 🧭 **[SafeChain: Safety of Language Models with Long Chain-of-Thought Reasoning Capabilities](https://arxiv.org/abs/2502.12025)**
  <sub>2025 · arXiv preprint arXiv:2502.12025 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.12025)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="self-training-star"></a>🔁 Self-training / STaR

- 🚀 **[Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2409.12122) · [Code](https://github.com/QwenLM/Qwen2.5-Math) · [HF](https://huggingface.co/Qwen/Qwen2.5-Math-7B) · [Project](https://qwenlm.github.io/blog/qwen2.5-math/) · [Card](../../cards/recipes/qwen2-5-math.md)
  _Data object:_ math solution, final answer, optional tool/code execution trace, and reward-model score.; process: model stage, problem source, reasoning mode, tool use, answer, reward score, benchmark result.; Qwen math model family, GitHub evaluation scripts, and Hugging Face model releases.
  _Feedback / verifier:_ math answer checks, reward model signals, and benchmark evaluations.
  _Recipe signal:_ teacher: self-improvement pipeline and math reward/evaluation signals.; generator: math-specialized models generate solutions and tool-integrated traces.
  _Audit focus:_ Tool-integrated results are not comparable to no-tool results., Reward models can favor format over proof validity., Model-family reports can blur data and inference effects.
  _Why it matters:_ It is a useful model-report case where math post-training data, reward models, tool-integrated reasoning, and multilingual math evaluation are tied together.
- 🏗️ **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.14465) · [Card](../../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ trace writing; self play anchor; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering.

### <a id="long-short-cot-distillation"></a>✂️ Long/short CoT distillation

- 🚀 **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · distillation · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.12948) · [Card](../../cards/recipes/deepseek_r1.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; distillation; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.

### <a id="other-related-work"></a>Other related work

- 🏗️ **[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073)**
  <sub>2022 · arXiv preprint · 🏗️ construction recipe · 🧭 survey background · judgment required · mixed · preference learning · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.08073) · [Project](https://github.com/anthropics/ConstitutionalHarmlessnessPaper) · [Card](../../cards/recipes/constitutional-ai.md)
  _Data object:_ original answer, self-critique, revised answer, preference pair, reward-model score.; process: principle used, critique, revision, comparison, preference label.; offline SL and RLHF/RLAIF alignment pipeline.
  _Feedback / verifier:_ AI preference model trained from comparisons guided by constitutional principles.
  _Recipe signal:_ teacher: constitution/principles plus critique-and-revision model behavior.; generator: model produces critiques, revisions, and response pairs.
  _Audit focus:_ AI feedback can encode model bias at scale., Principles may be underspecified or culturally narrow., A model can become safe-looking but evasive if helpfulness is not audited.
  _Why it matters:_ It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data.
- 🧭 **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · judgment required · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.18290) · [Card](../../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md)
  _Data object:_ pairwise preference
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ optimizer scaffold; preference learning
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization.
- 🧭 **[A Survey on Human Preference Learning for Large Language Models](https://arxiv.org/abs/2406.11191)**
  <sub>2024 · arXiv · 🧭 survey background · judgment required · mixed · preference learning · reward modeling · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2406.11191) · [DOI](https://doi.org/10.48550/arXiv.2406.11191)
  _Data object:_ preference-centered taxonomy over feedback data, preference modeling, preference usage, and aligned-model evaluation.; process: preference source, preference format, preference model; LLM alignment pipelines using human preference signals.
  _Feedback / verifier:_ human preference signal transformed into reward, preference loss, or evaluation judgment.
  _Recipe signal:_ teacher: human preference providers and preference-labeled datasets summarized by the survey.; generator: survey taxonomy
  _Audit focus:_ Preference labels can be noisy, culturally variable, or underspecified., Pairwise preferences may not preserve reasoning correctness or factual grounding., Evaluation of aligned models can conflate helpfulness, style, and reasoning quality.
  _Why it matters:_ It makes the preference-data layer explicit, helping readers distinguish demonstrations, pairwise comparisons, scalar rewards, DPO-style objectives, and evaluation judgments.
- 🧭 **[Cognitive Behaviors that Enable Self-Improving Reasoners, or, Four Habits of Highly Effective STaRs](https://arxiv.org/abs/2503.01307)**
  <sub>2025 · arXiv preprint arXiv:2503.01307 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.01307)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[rStar2-Agent: Agentic Reasoning Technical Report](https://arxiv.org/abs/2508.20722)**
  <sub>2025 · arXiv preprint arXiv:2508.20722 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.20722)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[MAmmoTH2: Scaling Instructions from the Web](https://arxiv.org/abs/2405.03548)**
  <sub>2024 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2405.03548)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Training a helpful and harmless assistant with reinforcement learning from human feedback](https://arxiv.org/abs/2204.05862)**
  <sub>2022 · arXiv · 🧭 survey background · judgment required · reward modeling · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2204.05862)
  _Data object:_ pairwise preference; scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ release audit; reward modeling; preference learning
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It provides the alignment-data lineage that later reasoning-data recipes inherit when they combine demonstrations, preferences, and reward models.

### ⚠️ Needs search or metadata

- 📦 **[Learning to Reason for Factuality](https://arxiv.org/abs/2508.05618)**
  <sub>2026 · ICML 2026 · 📦 data release · 🏗️ construction recipe · mixed · judgment required · sft · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2508.05618) · [Venue](https://openreview.net/forum?id=byZ7DoyDNd) · [DOI](https://doi.org/10.48550/arXiv.2508.05618) · [Code](https://github.com/facebookresearch/factual_reasoning) · [Data](https://huggingface.co/datasets/facebook/factual_reasoning) · [Card](../../cards/releases/factual_reasoning.md)
  _Data object:_ SFT Long-CoT or DPO chosen/rejected pair with margin metadata; process: prompt, response, factual precision; Offline SFT/DPO and online GRPO with separate reward server
  _Feedback / verifier:_ ScalableVeriScore claim extraction/retrieval plus LLM relevance judge
  _Recipe signal:_ teacher: Llama-4-Maverick prompts; Llama 3.3 responses; generator: 10 candidate responses per prompt or current GRPO policy
  _Audit focus:_ LLM claim verification can err or be hacked, Candidate pools, retrieval evidence and online rollouts are missing, Commercial reuse is constrained
  _Why it matters:_ Shows how detail, relevance and verifier error change factuality data beyond a correct/incorrect label.
- 🚀 **[Nemotron-Cascade 2: Post-Training LLMs with Cascade RL and Multi-Domain On-Policy Distillation](https://arxiv.org/abs/2603.19220)**
  <sub>2026 · NVIDIA Technical Report · 🚀 model report · 📦 data release · programmatic · mixed · sft · distillation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2603.19220) · [Venue](https://research.nvidia.com/labs/nemotron/nemotron-cascade-2/) · [DOI](https://doi.org/10.48550/arXiv.2603.19220) · [Data](https://huggingface.co/datasets/nvidia/Nemotron-Cascade-2-SFT-Data) · [HF](https://huggingface.co/nvidia/Nemotron-Cascade-2-30B-A3B)
  _Data object:_ SFT messages and subset-specific RL prompts/constraints/metadata; process: domain, source, messages; Cascade RL, Docker terminal/SWE and agent scaffolds
  _Feedback / verifier:_ Rules/tests plus generative reward and LLM judges by stage
  _Recipe signal:_ teacher: Domain-specific teachers and intermediate Cascade checkpoints; generator: Teachers for SFT; current policy for GRPO; execution feedback for agents
  _Audit focus:_ No full rollout groups, reward logs or stage checkpoints, Dynamic filtering changes effective distribution, Mixed verifier contracts and unpinned agent environments remain risky
  _Why it matters:_ Shows that a released RL dataset can be only prompt/metadata rather than the online training evidence.
- 📦 **[Reasoning with OmniThought: A Large CoT Dataset with Verbosity and Cognitive Difficulty Annotations](https://aclanthology.org/2026.acl-long.382/)**
  <sub>2026 · ACL 2026 · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://aclanthology.org/2026.acl-long.382/) · [arXiv](https://arxiv.org/abs/2505.10937) · [DOI](https://doi.org/10.18653/v1/2026.acl-long.382) · [Data](https://huggingface.co/datasets/alibaba-pai/OmniThought) · [Card](../../cards/releases/omnithought.md)
  _Data object:_ Each row contains a question and a list of reasoning records. A reasoning record contains thought, solution, full response, teacher, thought correctness verify, Reasoning Verbosity, and Cognitive Difficulty.; process: thought, solution, full response; Offline math, code, and science problem corpus. Code generations are checked by executing test cases; math and science generations use rule-based checks combined with LLM judgment.
  _Feedback / verifier:_ Final-answer correctness validation plus two 0-9 whole-trace metadata scores, Reasoning Verbosity and Cognitive Difficulty; QwQ-32B is recorded as the RV/CD judge.
  _Recipe signal:_ teacher: DeepSeek-R1, DeepSeek-R1-0528, and QwQ-32B; generator: Multiple large reasoning models generate multiple CoTs per sourced problem.
  _Audit focus:_ The paper's more-than-2M CoT and 708K-problem claims cannot be reconciled from the current partial public viewer, which estimates about 552K problem rows., Teacher-model mixture proportions and row-level prompt-source provenance are undisclosed., Randomly filtering some traces shorter than 3000 tokens may underrepresent simple or naturally concise problems.
  _Why it matters:_ It provides a concrete open recipe for selecting reasoning traces by both answer validity and process characteristics, while exposing important audit questions around snapshot scale, judge reliability, source provenance, and upstream licensing.
- 📦 **[The Open Proof Corpus: A Large-Scale Study of LLM-Generated Mathematical Proofs](https://openreview.net/forum?id=a2XmC7rHIU)**
  <sub>2026 · ICLR 2026 · 📦 data release · 🧰 benchmark · judgment required · reward modeling · process supervision · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=a2XmC7rHIU) · [arXiv](https://arxiv.org/abs/2506.21621) · [DOI](https://doi.org/10.48550/arXiv.2506.21621) · [Code](https://github.com/insait-institute/open-proof-corpus) · [Data](https://huggingface.co/datasets/INSAIT-Institute/OPC) · [Project](https://proofcorpus.ai/) · [Card](../../cards/releases/open-proof-corpus.md)
  _Data object:_ Full natural-language mathematical proof paired with one or two binary correctness labels, written feedback, uncertainty flags, optional span-level annotations, and problem/source metadata.; process: problem identifier and statement, generated proof, solver model identifier; Competition-proof generation followed by a custom expert-grading interface, duplicate grading for quality control, split-specific evaluation protocols, and optional best-of-N selection.
  _Feedback / verifier:_ One or two qualified human judges assign binary proof-validity labels and written feedback; optional sentence annotations identify local errors.
  _Recipe signal:_ teacher: Thirteen expert human judges provide correctness supervision; official competition solutions are supplied as references when available, and O4-MINI supplies non-verdict issue summaries.; generator: O4-MINI, O3, Gemini-2.5-Pro, Grok-3-Mini, Qwen3-235B-A22B, and DeepSeek-R1 generate the released proofs.
  _Audit focus:_ Approximately 10% double grading leaves most proofs with a single human judgment., The reported 90.4% agreement still implies nonzero label noise; the paper's 5% judge-error estimate depends on independence assumptions., Fewer than 3% of proofs are marked uncertain, but subtle near-correct errors can remain difficult to classify.
  _Why it matters:_ It provides unusually rich positive and negative proof supervision for training and auditing proof judges while exposing the limits of final-answer verification, selective best-of-N labeling, and single-judge proof assessment.
- 🏗️ **[AdaSTaR: Adaptive Data Sampling for Training Self-Taught Reasoners](https://openreview.net/forum?id=D6PwC6Xogv)**
  <sub>2025 · NeurIPS 2025 · 🏗️ construction recipe · 📈 scaling study · programmatic · sft · L3_summary_ready</sub>
  [Paper](https://openreview.net/forum?id=D6PwC6Xogv) · [arXiv](https://arxiv.org/abs/2505.16322) · [ACL](https://aclanthology.org/2026.acl-long.1376/) · [Code](https://github.com/reiss-koh/AdaSTaR)
  _Data object:_ A self-generated chain of thought and predicted final answer conditioned on fixed few-shot CoT exemplars; answers are checked against ground truth.; process: observation id, query, ground truth answer; Iterative accumulating STaR/RFT with a hierarchical min-heap over observations and a fresh accepted-CoT set each iteration.
  _Feedback / verifier:_ Rule-based outcome verifier equals one when predicted answer matches ground truth; the most recent K-sample acceptance rate becomes the observation's cached win statistic.
  _Recipe signal:_ teacher: The current model self-generates traces. GPT-4o is used only for a diagnostic false-positive audit, not training verification.; generator: The current iteration's accumulating STaR policy model.
  _Audit focus:_ Outcome verification admits flawed CoTs with correct final answers., Cached win rate is measured only at last visit and can become stale as model parameters and prompt difficulty drift., Acceptance rate conflates reasoning difficulty with answer parsing, prompt format, few-shot compatibility and label noise.
  _Why it matters:_ It turns prompt-level acceptance history into a data-allocation policy and reports early-stopped compute savings while exposing stale difficulty, outcome-only false positives and unreleased rollout risks.
- 📦 **[DeepMath-103K: A Large-Scale, Challenging, Decontaminated, and Verifiable Mathematical Dataset for Advancing Reasoning](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · ICLR 2026 · 📦 data release · 🏗️ construction recipe · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Venue](https://iclr.cc/virtual/2026/poster/10007807) · [DOI](https://doi.org/10.48550/arXiv.2504.11456) · [Code](https://github.com/zwhe99/DeepMath) · [Data](https://huggingface.co/datasets/zwhe99/DeepMath-103K) · [Card](../../cards/releases/deepmath_103k.md)
  _Data object:_ Mathematical question with verifiable final answer, topic and difficulty metadata, plus three generated reasoning solutions.; process: question, final answer, difficulty; Offline math problem corpus with answer-level rule verification and benchmark-overlap filtering.
  _Feedback / verifier:_ Rule-based final-answer verification for RLVR-ready prompts; exact parser and equivalence behavior require code-level audit.
  _Recipe signal:_ teacher: DeepSeek-R1 for three released solutions per problem.; generator: Mixed-source math curation followed by DeepSeek-R1 solution generation.
  _Audit focus:_ Final-answer verification can accept flawed or shortcut reasoning., Semantic decontamination thresholds can remove legitimate near-neighbors or miss paraphrased benchmark items., Three solutions from one teacher family can share systematic errors and style artifacts.
  _Why it matters:_ It makes difficulty selection, answer verification, benchmark decontamination and mutable release corrections explicit parts of a reusable RLVR/SFT data pipeline.
- 🏗️ **[Guided ReST: Reinforced Self-Training for Large Language Models](https://arxiv.org/abs/2502.04327)**
  <sub>2025 · NeurIPS 2025 · 🏗️ construction recipe · 📈 scaling study · judgment required · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.04327) · [Venue](https://neurips.cc/) · [Code](https://github.com/Meta-Llama/guided-rest) · [Card](../../cards/recipes/guided_rest.md)
  _Data object:_ Prompt, response, score and guided information; no frozen trace corpus; process: prompt, response, reward; Iterative reinforced self-training
  _Feedback / verifier:_ Task-specific score; retain score > 0
  _Recipe signal:_ teacher: Subgoals and reference-code signals are training-only privileged information; generator: current policy
  _Audit focus:_ Guidance can leak oracle structure, Positive-score filtering can reward shortcuts, No frozen buffers, traces or checkpoints
  _Why it matters:_ Separates deployable signals from privileged training guidance and unreleased selection buffers.
- 🚀 **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.00949) · [DOI](https://doi.org/10.48550/arXiv.2505.00949) · [Data](https://huggingface.co/datasets/nvidia/Llama-Nemotron-Post-Training-Dataset) · [Card](../../cards/recipes/llama_nemotron.md)
  _Data object:_ Instruction or task prompt with response/reasoning fields and component-specific labels or rewards.; process: category, license, reasoning; Versioned NVIDIA post-training dataset plus the model report's SFT, distillation and large-scale reinforcement-learning stack.
  _Feedback / verifier:_ Component-dependent rule-based, benchmark, judge or safety feedback; no single verifier covers every dataset partition.
  _Recipe signal:_ teacher: Multiple generator/teacher models identified per record where disclosed; exact upstream lineage varies by partition.; generator: Mixed public/open and synthetic post-training construction pipelines, with record-level generator and version fields.
  _Audit focus:_ Record-level generator metadata does not guarantee complete upstream prompt provenance., Mixed license fields may be incompatible across a combined training run., Reasoning filters and verifier thresholds can become hidden objectives when exact settings are absent.
  _Why it matters:_ It offers unusually rich release metadata for a frontier reasoning stack while still requiring upstream provenance, filter-threshold, revision and license-chain audits.
- 📦 **[MegaScience: Pushing the Frontiers of Post-Training Datasets for Science Reasoning](https://arxiv.org/abs/2507.16812)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2507.16812) · [DOI](https://doi.org/10.48550/arXiv.2507.16812) · [Code](https://github.com/GAIR-NLP/MegaScience) · [Data](https://huggingface.co/datasets/MegaScience/MegaScience)
  _Data object:_ Scientific reasoning question with answer or reference, subject/source metadata, and a generated step-by-step solution for selected subsets.; process: question, answer, reference; Offline multi-source science-reasoning corpus with a released curation pipeline and evaluation system spanning 15 benchmarks.
  _Feedback / verifier:_ Reference-answer evaluation, answer extraction and data-selection ablations; exact verifier differs across source/evaluation formats.
  _Recipe signal:_ teacher: DeepSeek-V3 for generated step-by-step solutions in selected components.; generator: Source-dataset mixture, textbook-derived question construction, teacher solution generation, and selection ablations.
  _Audit focus:_ Textbook provenance and redistribution rights may not be recoverable at item level., Teacher-generated explanations can be plausible but scientifically incorrect despite reference-answer agreement., Mixture selection gains can be confounded with model family, training budget or evaluation extraction changes.
  _Why it matters:_ It extends open post-training data recipes beyond math and code while making source mixture, textbook provenance, teacher correctness, selection attribution and release versioning central audit questions.
- 🏗️ **[TinyThinker: Distilling Reasoning through Coarse-to-Fine Knowledge Internalization with Self-Reflection](https://aclanthology.org/2025.naacl-long.309/)**
  <sub>2025 · NAACL 2025 · 🏗️ construction recipe · 🪜 process supervision · mixed · sft · distillation · L3_summary_ready</sub>
  [Paper](https://aclanthology.org/2025.naacl-long.309/) · [arXiv](https://arxiv.org/abs/2412.08024) · [DOI](https://doi.org/10.18653/v1/2025.naacl-long.309) · [Code](https://github.com/shengminp/TinyThinker)
  _Data object:_ Recall, Analyze and Summary stages; selected DPO pairs; process: question, options, teacher knowledge; Offline T5 SFT and iterative DPO
  _Feedback / verifier:_ Final answer matches benchmark ground truth
  _Recipe signal:_ teacher: gpt-4o-2024-05-13; generator: GPT-4o then student
  _Audit focus:_ Terminal correctness does not establish process truth, Teacher errors cascade, Candidate pools, pairs and checkpoints unreleased
  _Why it matters:_ Shows that terminal-answer preference is not independently verified process supervision.
- 📦 **[Unleashing LLM Reasoning Capability via Scalable Question Synthesis from Scratch](https://aclanthology.org/2025.acl-long.658/)**
  <sub>2025 · ACL 2025 · 📦 data release · 🏗️ construction recipe · judgment required · sft · distillation · L3_summary_ready</sub>
  [Paper](https://aclanthology.org/2025.acl-long.658/) · [arXiv](https://arxiv.org/abs/2410.18693) · [DOI](https://doi.org/10.18653/v1/2025.acl-long.658) · [Code](https://github.com/yyDing1/ScaleQuest) · [Data](https://huggingface.co/datasets/dyyyyyyyy/ScaleQuest-Math) · [Project](https://scalequest.github.io/)
  _Data object:_ A mathematical problem in query and a selected natural-language step-by-step solution in response, typically ending with a final answer.; process: generated question, generated chain-of-thought response, internal generator branch, not released; Offline synthetic-data pipeline with QFT, DPO-style QPO, question filtering, response generation, reward-model reranking, and DART-Math instruction tuning.
  _Feedback / verifier:_ Qwen2-Math-7B-Instruct supplies solvability judgments, a learned DeepSeekMath-7B-Base scorer predicts question difficulty, and InternLM2-7B-Reward ranks five candidate responses.
  _Recipe signal:_ teacher: External optimization models evaluated for QPO include GPT-4o-mini, Llama3.1-70B-Instruct, and Qwen2-Math-7B-Instruct; exact row-level optimizer lineage is not released.; generator: DeepSeekMath-QGen and Qwen2-Math-QGen generate 1M candidate questions each; Qwen2-Math-7B-Instruct generates response candidates.
  _Audit focus:_ The released file omits generator identity, preference lineage, filter decisions, difficulty scores, candidate responses, reward scores, and rejection reasons., Rejected questions from the 2M candidate pool and four non-selected solutions per accepted question are not released., Model-based solvability filtering can retain nonsensical, underspecified, or internally inconsistent questions.
  _Why it matters:_ It provides an executable alternative to proprietary teacher-driven synthesis by separating question-generator activation, preference optimization, question filtering, solution generation, and reward reranking, while exposing clear audit needs around rejected data and reward-selected traces.
- 📦 **[WOMD-Reasoning: A Large-Scale Dataset for Interaction Reasoning in Driving](https://proceedings.mlr.press/v267/li25l.html)**
  <sub>2025 · ICML 2025 · 📦 data release · 🧰 benchmark · mixed · sft · evaluation · L4_carded</sub>
  [Paper](https://proceedings.mlr.press/v267/li25l.html) · [arXiv](https://arxiv.org/abs/2407.04281) · [OpenReview](https://openreview.net/forum?id=lTBq5LOUKC) · [Code](https://github.com/yhli123/WOMD-Reasoning) · [Data](https://waymo.com/open/download/) · [Card](../../cards/releases/womd_reasoning.md)
  _Data object:_ Scene JSON with scenario/agent IDs, substituted Q&A IDs, times, and environment/ego/surrounding/interaction Q&As.; process: scene id, ego agent id, surrounding agent ids; WOMD multi-agent driving scenes with optional MetaDrive visual rendering.
  _Feedback / verifier:_ Rule-grounded motion/map facts; no released per-item verifier for LLM-authored interaction narratives.
  _Recipe signal:_ teacher: Azure Azure GPT-4-Turbo.; generator: Rule conversion followed by prompted LLM generation.
  _Audit focus:_ LLM narratives can hallucinate, future trajectory creates hindsight leakage, ID substitution does not remove source rights/privacy obligations
  _Why it matters:_ Separates deterministic scene grounding from generated explanatory and hindsight-sensitive supervision.
- 📦 **[rStar-Coder: Scaling Competitive Code Reasoning with a Large-Scale Verified Dataset](https://papers.nips.cc/paper_files/paper/2025/hash/54e847e1dffc87a8063844b149148557-Abstract-Conference.html)**
  <sub>2025 · NeurIPS 2025 · 📦 data release · 🏗️ construction recipe · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://papers.nips.cc/paper_files/paper/2025/hash/54e847e1dffc87a8063844b149148557-Abstract-Conference.html) · [arXiv](https://arxiv.org/abs/2505.21297) · [Code](https://papers.nips.cc/paper_files/paper/2025/file/54e847e1dffc87a8063844b149148557-Supplemental-Conference.zip) · [Data](https://huggingface.co/datasets/microsoft/rStar-Coder) · [Project](https://github.com/microsoft/rStar) · [Card](../../cards/releases/rstar-coder.md)
  _Data object:_ SFT records contain a programming question, long-CoT response, and implementation code. RL records separate problems from input-output test cases. Seed records may include starter code and solution-level verified/is passed booleans.; process: question id, question, seed question; Competitive-programming execution for standard-input/output and function-based tasks, with generated inputs spanning multiple scales; reuse requires isolated untrusted-code execution.
  _Feedback / verifier:_ For seed problems, oracle solutions label generated outputs and candidate code is checked against tests. For synthetic problems, 16 QWQ-32B solutions are executed on at least 50 shared inputs and consistent complete output sets are selected by agreement.
  _Recipe signal:_ teacher: GPT-4o for problem synthesis; GPT-4o and DeepSeek-V3 for test-input utility functions; QWQ-32B for long-reasoning candidate solutions.; generator: Seed problems and oracle solutions drive transformed problem synthesis, constraint-aware test generation, and QWQ-32B executable long-CoT generation.
  _Audit focus:_ Mutually generated solutions can share systematic errors and converge on an incorrect output set; reported accuracy drops from 96.8 to 92.8 percent in the larger comparison., The 40 percent threshold for difficult Codeforces-derived problems is below a strict majority., Seed problems for which no QWQ-32B candidate passes retain all generated solutions, so seed sft is not uniformly verified.
  _Why it matters:_ It provides a rare operational recipe for scaling difficult code reasoning data and programmatic rewards, while exposing reuse risks around false consensus, retained unverified seed traces, source licensing, config linkage, and mismatch between the published mixture and current repository.
- 📦 **Nemotron-Math-Proofs-v2**
  <sub>2026 · NVIDIA Hugging Face dataset release · 📦 data release · 🪜 process supervision · judgment required · sft · evaluation · L4_carded</sub>
  [Data](https://huggingface.co/datasets/nvidia/Nemotron-Math-Proofs-v2/resolve/7665d7f1d006fd89aa852a9dab8060c60b63f814/data/train.jsonl) · [HF](https://huggingface.co/datasets/nvidia/Nemotron-Math-Proofs-v2) · [Card](../../cards/releases/nemotron_math_proofs_v2.md)
  _Data object:_ Two-turn proof, verification or meta-verification conversations; process: messages, problem, subset; Offline proof trace release
  _Feedback / verifier:_ Natural-language verification with embedded boxed 0/0.5/1 judgments
  _Recipe signal:_ teacher: DeepSeek-V4-Pro; generator: DeepSeek-V4-Pro
  _Audit focus:_ No formal verifier, Scores embedded in text, Full count not independently enumerable
  _Why it matters:_ Makes natural-language self-verification and partial release visibility auditable.
- 📦 **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · programmatic · sft · distillation · L0_seeded</sub>
  [Code](https://github.com/huggingface/open-r1) · [HF](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k) · [Card](../../cards/releases/openr1.md)
  _Data object:_ math problem with reasoning trace and final answer; process: problem, reasoning trace, answer; offline math corpus
  _Feedback / verifier:_ math answer verifier / filtering pipeline
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- 🚀 **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · sft · rlvr · L0_seeded</sub>
  [Code](https://github.com/QwenLM/Qwen3-Coder) · [Project](https://qwenlm.github.io/blog/qwen3-coder/) · [Card](../../cards/recipes/qwen3_coder.md)
  _Data object:_ code solution, tool-call, or agent trajectory; process: code answer, tool call, execution result; code execution and agent task environments
  _Feedback / verifier:_ unit tests, execution feedback, and agent task success signals
  _Recipe signal:_ frontier pipeline; optimizer scaffold; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- 🧭 **rStar-Math**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions**
  <sub>2024 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **Distilling step-by-step: Outperforming larger language models with less training data and smaller model sizes**
  <sub>2023 · ACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **Language models do not always say what they think: Unfaithful explanations in chain-of-thought prompting**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **MAmmoTH: Building math generalist models through hybrid instruction tuning**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **Measuring faithfulness in chain-of-thought reasoning**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **MetaMath: Bootstrap your own mathematical questions for large language models**
  <sub>2023 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **WizardMath: Empowering mathematical reasoning for large language models via reinforced evol-instruct**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

## 6. What to Audit

- What exactly is serialized: instruction, answer, rationale, long-CoT trace, critique, or distilled target?
- Who wrote the target behavior: human, teacher model, self-generated policy, or frontier model?
- Can trace style be separated from faithful reasoning and final correctness?

## 7. Open Problems

- When does training on rationales teach transferable reasoning rather than trace style?
- How much teacher identity and sampling metadata should an open rationale release disclose?
- Can long-CoT distillation preserve useful uncertainty and failed attempts?
- What should a paper card record when the demonstration source is partially hidden?

## 8. Related Cards

- [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](../../cards/recipes/deepseek-prover-v2.md)
- [DeepSeek-R1](../../cards/recipes/deepseek_r1.md)
- [KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](../../cards/releases/kodcode.md)
- [LIMO: Less Is More for Reasoning](../../cards/releases/limo.md)
- [Leaky Thoughts](../../cards/failures/leaky-thoughts.md)
- [NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](../../cards/releases/naturalreasoning.md)
- [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](../../cards/releases/opencodereasoning_ii.md)
- [OpenMathReasoning: A large-scale dataset of math reasoning traces](../../cards/releases/openmathreasoning.md)
- [OpenThoughts: Data recipes for reasoning models](../../cards/releases/openthoughts.md)
- [Phi-4-reasoning Technical Report](../../cards/recipes/phi4_reasoning.md)
- [Qwen3 Technical Report](../../cards/recipes/qwen3.md)
- [s1: Simple Test-Time Scaling](../../cards/releases/s1.md)
- [DeepSeek-Prover: Advancing theorem proving in LLMs](../../cards/recipes/deepseek-prover.md)
- [DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](../../cards/recipes/deepseekmath.md)
- [LiveBench: A challenging, contamination-free benchmark for large language models](../../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
- [Magicoder: Empowering code generation with OSS-instruct](../../cards/recipes/magicoder.md)
- [OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](../../cards/releases/openmathinstruct-2.md)
- [Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](../../cards/recipes/qwen2-5-math.md)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
