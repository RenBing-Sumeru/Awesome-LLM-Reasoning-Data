# 🎯 Training Usage and Optimization Objectives

> How data enters SFT, distillation, preference optimization, reward modeling, PRM training, RLVR, agent training, evaluation, reranking, and audit.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=training_usage_optimization_objectives&mode=find_papers)
> Try: `What should I read first for 🎯 Training Usage & Objectives?`
> Try: `Compare the data objects and verifier types in 🎯 Training Usage & Objectives.`
> Try: `Generate an audit checklist for 🎯 Training Usage & Objectives.`

## 1. What This Track Studies

Use this track to connect a data object to the objective or system component that consumes it.

The same paper can release examples, train a reward, evaluate a model, and disclose a model report. For builders, the crucial question is not only what the data is, but how it is consumed. This track organizes papers by training usage and optimization role.

It turns the atlas from a list into a design guide. A contributor should identify whether a record feeds SFT, distillation, DPO, reward modeling, PRM training, RLVR, agent training, reranking, evaluation, or audit. Those uses require different metadata and have different risks.

The track also prevents overclaiming. A benchmark score is not necessarily training data; a preference pair is not necessarily a robust reward; a verifier outcome is not necessarily a reusable RL signal without cost and false-positive analysis.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧱 SFT / instruction tuning | data used as supervised target behavior | target text hides verifier and source assumptions |
| 📚 Distillation | teacher outputs, traces, or policies distilled into a student | teacher lineage is hidden |
| ⚖️ Preference optimization | pairwise feedback for DPO/IPO/KTO-style objectives | pair context does not match downstream use |
| 🎚️ Reward modeling / ORM | scalar or pairwise data used to train outcome rewards | reward can be overoptimized |
| 🪜 PRM / process supervision | step-level or trace-level signals used to train process rewards | PRM rewards trace style |
| 🏋️ RLVR / verifier RL | programmatic or verifier rewards used in RL | verifier false positives become policy incentives |
| 🌐 Agent training | environment episodes, tool traces, or terminal rewards for agent policies | environment cannot be replayed |
| 🧪 Evaluation / reranking / audit | data used for scoring, selection, reporting, or failure analysis | evaluation data becomes training data |

### Contents

- [🧱 SFT / instruction tuning](#sft-instruction-tuning)
- [📚 Distillation](#distillation)
- [⚖️ Preference optimization](#preference-optimization)
- [🎚️ Reward modeling / ORM](#reward-modeling-orm)
- [🪜 PRM / process supervision](#prm-process-supervision)
- [🏋️ RLVR / verifier RL](#rlvr-verifier-rl)
- [🌐 Agent training](#agent-training)
- [🧪 Evaluation / reranking / audit](#evaluation-reranking-audit)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Aegis2.0](https://arxiv.org/abs/2501.09004) | 2025 | [Paper](https://arxiv.org/abs/2501.09004) · [ACL](https://aclanthology.org/2025.naacl-long.306/) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) · [Card](../../cards/verifiers/aegis2.md) | prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: hazard category, fine-grained risk label, response-safety decision, split metadata when using the dataset release.; offline guardrail training/evaluation dataset. | risk labels and guard-model evaluation signal. | It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification. |
| [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) | 2025 | [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) · [Card](../../cards/recipes/deepseek-prover-v2.md) | subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline. | Lean verification and RL reward over formal proof success. | It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification. |
| [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | 2025 | [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../../cards/releases/openthoughts.md) | reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus | filters, benchmark feedback, and recipe ablations | It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance. |
| [DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333) | 2024 | [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1) · [Card](../../cards/recipes/deepseek-prover.md) | Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness. | Lean kernel/checker acceptance. | It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object. |
| [Magicoder: Empowering code generation with OSS-instruct](https://arxiv.org/abs/2312.02120) | 2024 | [Paper](https://arxiv.org/abs/2312.02120) · [PMLR](https://proceedings.mlr.press/v235/wei24h.html) · [Code](https://github.com/ise-uiuc/magicoder) · [Data](https://huggingface.co/datasets/ise-uiuc/Magicoder-OSS-Instruct-75K) · [HF](https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B) · [Card](../../cards/recipes/magicoder.md) | instruction-response coding example, often linked to a code reference or task scaffold.; process: source snippet, generated instruction, solution response, model family, benchmark result.; offline code-data generation and code benchmark evaluation. | coding benchmark pass rates and optional executable checks. | It is a strong code-data construction example because it grounds synthetic coding instructions in real open-source references rather than free-floating prompt invention. |
| [OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560) | 2024 | [Paper](https://arxiv.org/abs/2410.01560) · [OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [Code](https://github.com/NVIDIA-NeMo/Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/) · [Card](../../cards/releases/openmathinstruct-2.md) | problem-solution pair with natural-language mathematical reasoning and final answer.; process: source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.; NVIDIA NeMo-Skills generation, training, and evaluation pipeline. | answer checks and benchmark evaluation over math tasks. | It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models. |
| [Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535) | 2024 | [Paper](https://arxiv.org/abs/2405.01535) · [ACL](https://aclanthology.org/2024.emnlp-main.248/) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [Code](https://github.com/prometheus-eval/prometheus-eval) · [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0) · [Card](../../cards/verifiers/prometheus-2.md) | rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights. | Prometheus 2 judge output aligned against human/proprietary-judge benchmarks. | It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes. |
| [SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168) | 2024 | [Paper](https://arxiv.org/abs/2407.13168) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/scicode-bench/SciCode) · [Project](https://scicode-bench.github.io/) · [Card](../../cards/benchmarks/scicode.md) | code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness. | test cases and scientist-curated gold solutions. | It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests. |
| [Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) | 2024 | [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) · [Card](../../cards/recipes/tulu-3.md) | instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases. | mixture of preference labels, reward models, and verifiable rewards depending on stage. | It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together. |
| [LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md) | Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories. | Lean checker and environment feedback. | It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record. |

## 5. Full Paper List

### <a id="sft-instruction-tuning"></a>🧱 SFT / instruction tuning

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
- 🚀 **[Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2409.12122) · [Code](https://github.com/QwenLM/Qwen2.5-Math) · [HF](https://huggingface.co/Qwen/Qwen2.5-Math-7B) · [Project](https://qwenlm.github.io/blog/qwen2.5-math/) · [Card](../../cards/recipes/qwen2-5-math.md)
  _Data object:_ math solution, final answer, optional tool/code execution trace, and reward-model score.; process: model stage, problem source, reasoning mode, tool use, answer, reward score, benchmark result.; Qwen math model family, GitHub evaluation scripts, and Hugging Face model releases.
  _Feedback / verifier:_ math answer checks, reward model signals, and benchmark evaluations.
  _Recipe signal:_ teacher: self-improvement pipeline and math reward/evaluation signals.; generator: math-specialized models generate solutions and tool-integrated traces.
  _Audit focus:_ Tool-integrated results are not comparable to no-tool results., Reward models can favor format over proof validity., Model-family reports can blur data and inference effects.
  _Why it matters:_ It is a useful model-report case where math post-training data, reward models, tool-integrated reasoning, and multilingual math evaluation are tied together.
- 🚀 **[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · programmatic · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) · [Card](../../cards/recipes/tulu-3.md)
  _Data object:_ instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases.
  _Feedback / verifier:_ mixture of preference labels, reward models, and verifiable rewards depending on stage.
  _Recipe signal:_ teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.; generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
  _Audit focus:_ Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., RLVR improvements may be domain-specific.
  _Why it matters:_ It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.
- 🏗️ **[Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560)**
  <sub>2023 · ACL · 🏗️ construction recipe · 📦 data release · mixed · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.10560) · [Card](../../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; trace writing; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion.
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
- 🏗️ **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.14465) · [Card](../../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ trace writing; self play anchor; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering.
- 🧭 **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · judgment required · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.02155) · [Card](../../cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md)
  _Data object:_ pairwise preference; scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ prompt sourcing; reward verifier layer; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models.
- 📦 **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.02951) · [Card](../../cards/releases/kodcode.md)
  _Data object:_ question-solution-test triplet; process: problem, solution, unit tests; code execution and unit-test substrate
  _Feedback / verifier:_ test-based self-verification
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
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
- 🚀 **[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)**
  <sub>2025 · arXiv · 🚀 model report · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.09388) · [Card](../../cards/recipes/qwen3.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; sft; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open model-family report useful for coordinated release-tick analysis.
- 🪜 **[AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV)
  _Data object:_ step-level confidence-change annotations; process: reasoning step, verifier confidence, relative confidence change; offline reasoning traces
  _Feedback / verifier:_ answer-trained verifier converted into process annotations
  _Recipe signal:_ generator: model-generated candidate reasoning; filtering rule: changes in verifier confidence across steps
  _Audit focus:_ answer-level verifier confidence can mislabel intermediate steps, relative confidence changes may not identify causal first errors, commonsense and math tasks may require different error taxonomies
  _Why it matters:_ It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision.

### <a id="distillation"></a>📚 Distillation

- 📦 **[OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../../cards/releases/openthoughts.md)
  _Data object:_ reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus
  _Feedback / verifier:_ filters, benchmark feedback, and recipe ablations
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance.
- 🧯 **[Subliminal Learning](https://arxiv.org/abs/2507.14805)**
  <sub>2025 · arXiv · 🧯 audit failure · 🏗️ construction recipe · mixed · distillation · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2507.14805) · [Venue](https://www.nature.com/articles/s41586-026-10319-8) · [Code](https://github.com/MinhxLe/subliminal-learning) · [Project](https://subliminal-learning.com/) · [Card](../../cards/failures/subliminal-learning.md)
  _Data object:_ generated data plus downstream behavioral evaluation of the student.; process: teacher identity, student base model, visible filtering policy, hidden trait evaluation.; distillation and synthetic-data training pipeline.
  _Feedback / verifier:_ trait probes after student training.
  _Recipe signal:_ teacher: model carrying a target trait or behavior.; generator: teacher outputs semantically unrelated data.
  _Audit focus:_ Data may look safe while carrying hidden traits., Lineage effects can be invisible from sample inspection., Distillation chains can propagate behavior across model generations.
  _Why it matters:_ It is a data-lineage warning for reasoning distillation: synthetic traces may carry hidden model traits that are invisible to content filters.
- 🏗️ **[Orca: Progressive learning from complex explanation traces of GPT-4](https://arxiv.org/abs/2306.02707)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 🚀 model report · judgment required · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.02707) · [Project](https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/) · [Card](../../cards/recipes/orca.md)
  _Data object:_ instruction response with detailed explanation, intermediate reasoning, and final answer.; process: prompt source, teacher identity, explanation trace, task type, response, evaluation benchmark.; offline synthetic-data distillation and evaluation pipeline.
  _Feedback / verifier:_ downstream reasoning, exam, and benchmark evaluation rather than a single automatic verifier.
  _Recipe signal:_ teacher: large foundation models that produce explanation traces and stepwise guidance.; generator: teacher-assisted data-generation pipeline over diverse instructions.
  _Audit focus:_ Students can learn teacher style without robust reasoning., Synthetic traces can include teacher errors., Closed teacher data makes lineage hard to audit.
  _Why it matters:_ It is an early and influential reasoning-distillation recipe: the reusable object is teacher-assisted explanation data plus careful evaluation against style-only imitation.
- 📦 **[OpenCodeReasoning: Advancing Data Distillation for Competitive Coding](https://arxiv.org/abs/2504.01943)**
  <sub>2025 · COLM 2025 · 📦 data release · 🏗️ construction recipe · programmatic · judgment required · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.01943) · [Venue](https://colmweb.org/2025/AcceptedPapers.html) · [Code](https://github.com/NVIDIA/NeMo-Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenCodeReasoning) · [Card](../../cards/releases/opencodereasoning.md)
  _Data object:_ Python competitive-programming response with reasoning trace, final code block, and extracted solution code.; process: id, input, output; Offline SFT corpus for competitive-programming code reasoning; unit-test/code-execution substrate is used in ablations and benchmark evaluation.
  _Feedback / verifier:_ Format filters for reasoning traces and code blocks, Tree-sitter syntax parsing, benchmark-contamination checks with embedding similarity plus LLM/manual review, and unit-test execution for CodeContests ablation; final release is not strictly execution-filtered.
  _Recipe signal:_ teacher: DeepSeek-R1.; generator: DeepSeek-R1 generations served through SGLang.
  _Audit focus:_ Syntax-valid code is not necessarily semantically correct., Final release is not guaranteed to contain only unit-test-passing solutions., Incorrect teacher solutions may still transfer useful patterns but can also teach wrong reasoning.
  _Why it matters:_ It is a strong construction-recipe entry for code reasoning data because it exposes the source mixture, teacher-trace generation setup, post-processing filters, released HF fields, and an important negative result that execution filtering alone can reduce downstream benchmark performance by removing hard or diverse samples.
- 🚀 **[Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318)**
  <sub>2025 · arXiv · 🚀 model report · mixed · distillation · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.21318) · [Card](../../cards/recipes/phi4_reasoning.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ trace writing; frontier pipeline; distillation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reasoning model report highlighting teacher distillation as trace writing.

### <a id="preference-optimization"></a>⚖️ Preference optimization

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
- 🪜 **[Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](https://arxiv.org/abs/2406.18629)**
  <sub>2024 · arXiv · 🪜 process supervision · 🏗️ construction recipe · mixed · process supervision · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2406.18629)
  _Data object:_ step-wise preference pairs; process: reasoning step, preferred continuation, rejected continuation; offline long-chain reasoning traces
  _Feedback / verifier:_ step-wise preference optimization objective
  _Recipe signal:_ generator: multi-step reasoning policy; filtering rule: step-wise preferences over reasoning continuations
  _Audit focus:_ local step preference may not align with final correctness, preference construction can hide teacher or scorer bias, long-chain traces can overfit style instead of reasoning validity
  _Why it matters:_ It helps readers see how preference optimization becomes a process-level data problem when the chosen/rejected object is an intermediate continuation rather than a whole answer.

### <a id="reward-modeling-orm"></a>🎚️ Reward modeling / ORM

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="prm-process-supervision"></a>🪜 PRM / process supervision

- 🧪 **[Rewarding progress: Scaling automated process verifiers for LLM reasoning](https://arxiv.org/abs/2410.08146)**
  <sub>2024 · ICLR · 🧪 verifier reward · 🪜 process supervision · programmatic · mixed · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2410.08146) · [OpenReview](https://openreview.net/forum?id=A6Y7AqlzLW) · [Card](../../cards/verifiers/rewarding-progress.md)
  _Data object:_ step-level process advantage score plus final answer/correctness signal.; process: problem, partial trace before step, step, future success estimate, verifier score, final outcome.; reasoning search and online RL setup using process rewards.
  _Feedback / verifier:_ Process Advantage Verifier trained to predict progress toward correct answer.
  _Recipe signal:_ teacher: automated success estimates from prover policies and final correctness signals.; generator: policies produce traces used to train process verifiers.
  _Audit focus:_ Progress estimates can be policy-specific., Verifier-guided search can exploit reward artifacts., Step rewards can encourage short-term progress that hurts final correctness.
  _Why it matters:_ It gives process supervision a concrete target beyond dense labels: measure progress under a prover policy and use that signal for search or RL.
- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · programmatic · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [Card](../../cards/verifiers/prm800k.md)
  _Data object:_ step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces
  _Feedback / verifier:_ process reward model trained from step labels
  _Recipe signal:_ reward verifier layer; release audit; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.
- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935) · [Card](../../cards/verifiers/math_shepherd.md)
  _Data object:_ step-level rollout-value labels; process: reasoning step, rollout result, process reward score; offline math reasoning traces
  _Feedback / verifier:_ rollout-derived process reward signal
  _Recipe signal:_ generator: model rollouts from intermediate reasoning steps; filtering rule: rollout success rate converted to step reward
  _Audit focus:_ rollout policy strength can leak into labels, step rewards may favor locally plausible continuations, generated solutions can inherit base-model shortcuts
  _Why it matters:_ It is the clearest bridge between final-answer verifiers and step-level PRM data: the label is not a human judgment but a rollout-derived estimate of whether a partial step can still reach the right answer.
- 🪜 **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.06592) · [Card](../../cards/verifiers/omegaprm.md)
  _Data object:_ process supervision annotations; process: partial reasoning prefix, first-error signal, positive/negative step examples; offline math search tree
  _Feedback / verifier:_ automated process reward signal
  _Recipe signal:_ reward verifier layer; optimizer scaffold; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- 📦 **[ReST-MCTS*: LLM Self-Training via Process Reward Guided Tree Search](https://arxiv.org/abs/2406.03816)**
  <sub>2024 · NeurIPS · 📦 data release · 🪜 process supervision · programmatic · mixed · sft · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.03816) · [Venue](https://papers.nips.cc/paper_files/paper/2024/hash/76ec4dc30e9faaf0e4b6093eaa377218-Abstract-Conference.html) · [DOI](https://doi.org/10.48550/arXiv.2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS) · [Data](https://huggingface.co/datasets/zd21/ReST-MCTS_Llama3-8b-Instruct_ReST-MCTS_Policy_1st) · [HF](https://huggingface.co/datasets/zd21/ReST-MCTS-Llama3-8b-Instruct-PRM-1st) · [Project](https://rest-mcts.github.io/) · [Card](../../cards/recipes/rest-mcts.md)
  _Data object:_ Question with final answer, searched step-by-step reasoning trace, selected policy-training solution, and inferred per-step value/process-reward labels; PRM releases include positive and negative samples.; process: question/content, optional final answer, partial reasoning state / tree node; Offline MCTS* reasoning tree and iterative self-training pipeline.
  _Feedback / verifier:_ Oracle final-answer correctness plus an inferred/learned process reward model used to guide search and provide value targets.
  _Recipe signal:_ teacher: No single teacher model; oracle final answers and tree-search-estimated step values provide supervision.; generator: Policy rollouts expanded by MCTS* and guided by a process reward/value model.
  _Audit focus:_ Final-answer correctness can still allow flawed or spurious intermediate reasoning., Process reward estimates are search-policy-specific and can encode tree-search artifacts., Accepted traces can hide rejected branches, failed candidates, and ambiguous paths.
  _Why it matters:_ It is valuable for the Data Construction track because it separates input answer-keyed questions, tree-search trace generation, inferred process rewards, policy data selection, and reward-model training instead of treating benchmark gains as data quality proof.
- 🪜 **[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · mixed · process supervision · preference learning · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR)
  _Data object:_ step-level preference data with process scores and explanations; process: retrieval context, reasoning step, process reward score; RAG reasoning pipeline
  _Feedback / verifier:_ process reward model plus process explanation model
  _Recipe signal:_ generator: MCTS-guided retrieval-augmented rollouts; filtering rule: trustworthy process rewarding and iterative preference optimization
  _Audit focus:_ PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search
  _Why it matters:_ It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.

### <a id="rlvr-verifier-rl"></a>🏋️ RLVR / verifier RL

- 🚀 **[DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · rlvr · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) · [Card](../../cards/recipes/deepseek-prover-v2.md)
  _Data object:_ subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline.
  _Feedback / verifier:_ Lean verification and RL reward over formal proof success.
  _Recipe signal:_ teacher: DeepSeek-V3-style decomposition and formal proof feedback.; generator: recursive pipeline creates subgoals and proof attempts.
  _Audit focus:_ Subgoal decomposition can introduce false intermediate claims., Formal and informal reasoning scores are not directly comparable., Large-model teacher lineage can hide data provenance.
  _Why it matters:_ It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification.
- 🚀 **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · distillation · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.12948) · [Card](../../cards/recipes/deepseek_r1.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; distillation; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.
- 📈 **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · 🏗️ construction recipe · programmatic · rlvr · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2509.25300) · [Card](../../cards/recipes/scaling-behaviors-rl-post-training.md)
  _Data object:_ problem, generated solution/answer, reward outcome, and training curve metrics.; process: model size, data volume, compute budget, optimization steps, reward signal, validation performance.; RL post-training experiments over math tasks.
  _Feedback / verifier:_ answer-level reward for mathematical reasoning and scaling curves.
  _Recipe signal:_ teacher: reward signal and math benchmark labels.; generator: RL policy rollouts during post-training.
  _Audit focus:_ Math-only scaling can overstate transfer to open-ended reasoning., Repeated data reuse can improve metrics while increasing overfitting risk., Power-law fits can hide reward or benchmark artifacts.
  _Why it matters:_ It helps turn RLVR from recipe folklore into a scaling problem: data reuse, optimization steps, and model size have different effects on learning efficiency and final performance.
- 📈 **[The Art of Scaling Reinforcement Learning Compute for LLMs](https://arxiv.org/abs/2510.13786)**
  <sub>2025 · arXiv · 📈 scaling study · 🏗️ construction recipe · mixed · rlvr · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2510.13786) · [OpenReview](https://openreview.net/forum?id=FMjeC9Msws) · [Card](../../cards/recipes/the-art-of-scaling-rl-compute.md)
  _Data object:_ training runs, reward outcomes, validation curves, and ablation results.; process: loss aggregation, normalization, curriculum, off-policy choice, compute budget, asymptote, efficiency.; large-scale RL training experiments.
  _Feedback / verifier:_ compute-performance curves and recipe ablations.
  _Recipe signal:_ teacher: reward signal and validation tasks.; generator: RL policies under ablated recipes.
  _Audit focus:_ Compute-heavy studies can be hard to reproduce., Best-practice recipes may depend on task/reward families., Scaling curves can encourage overconfidence if validation tasks are narrow.
  _Why it matters:_ It gives atlas readers a framework for judging RL recipe claims: some choices move the ceiling, while others mostly change how cheaply the run reaches it.
- 🏗️ **[DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](https://arxiv.org/abs/2408.08152)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🚀 model report · programmatic · environmental · rlvr · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2408.08152) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL) · [Card](../../cards/recipes/deepseek-prover-v1-5.md)
  _Data object:_ Lean proof script, proof-search path, feedback signal, and verification result.; process: theorem, proof attempt, Lean feedback, reward, search node, final proof, pass/fail result.; Lean 4 proof assistant plus RMaxTS search procedure.
  _Feedback / verifier:_ proof assistant feedback used for RL and search selection.
  _Recipe signal:_ teacher: Lean checker feedback and prior formal-proof dataset.; generator: model samples proof candidates and tree-search paths.
  _Audit focus:_ Search budget can dominate model quality., Checker feedback is sparse and version-dependent., RL can optimize toward easy theorem families.
  _Why it matters:_ It shows how proof-assistant feedback can become both a reward signal and a search guide for formal mathematical reasoning.
- 🚀 **[DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [Code](https://github.com/deepseek-ai/deepseek-math) · [HF](https://huggingface.co/collections/deepseek-ai/deepseek-math) · [Card](../../cards/recipes/deepseekmath.md)
  _Data object:_ natural-language mathematical solution plus final answer, sometimes sampled multiple times.; process: data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.; offline math training and benchmark evaluation pipeline.
  _Feedback / verifier:_ answer correctness and GRPO-style reward over math tasks.
  _Recipe signal:_ teacher: math corpora, supervised examples, and verifiable benchmark answers.; generator: model produces solutions during SFT, RL, and self-consistency sampling.
  _Audit focus:_ Self-consistency can hide weak single-sample accuracy., Web-data mining may import benchmark leakage., Final-answer rewards can miss flawed derivations.
  _Why it matters:_ It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.
- 🧰 **[GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../../cards/benchmarks/gsm8k-grade-school-math-8k.md)
  _Data object:_ natural-language solution with final numeric answer; process: question, solution, final answer; offline math benchmark
  _Feedback / verifier:_ answer extraction and arithmetic correctness checks
  _Recipe signal:_ generator: human problem writers; filtering rule: curated math word problem collection
  _Audit focus:_ answer extraction errors, contamination through benchmark reuse
  _Why it matters:_ It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training.
- 🧰 **[Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv · 🧰 benchmark · 🧪 verifier reward · programmatic · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../../cards/verifiers/training-verifiers-to-solve-math-word-problems.md)
  _Data object:_ answer level; scalar reward
  _Feedback / verifier:_ programmatic, judgment required
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows.
- 🏗️ **[Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335)**
  <sub>2025 · arXiv preprint arXiv:2505.03335 · 🏗️ construction recipe · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.03335) · [Card](../../cards/recipes/absolute_zero.md)
  _Data object:_ generated task, solution, and verified answer; process: proposed task, solution, verifier result; code executor / verifiable task substrate
  _Feedback / verifier:_ executor-backed verifiable reward
  _Recipe signal:_ self play anchor; reward verifier layer; optimizer scaffold
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop.
- 📦 **[DAPO: An Open-Source LLM Reinforcement Learning System at Scale](https://arxiv.org/abs/2503.14476)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.14476) · [OpenReview](https://openreview.net/forum?id=2a36EMSSTp) · [DOI](https://doi.org/10.48550/arXiv.2503.14476) · [Code](https://github.com/BytedTsinghua-SIA/DAPO) · [Data](https://huggingface.co/datasets/BytedTsinghua-SIA/DAPO-Math-17k) · [HF](https://huggingface.co/collections/BytedTsinghua-SIA/dapo) · [Project](https://dapo-sia.github.io/) · [Card](../../cards/releases/dapo.md)
  _Data object:_ Math prompt paired with an integer ground-truth answer; generated responses are scored by extracting the final answer.; process: prompt/question, integer answer, sampled response during RL; verl-based distributed RL training system with a math answer parser/verifier.
  _Feedback / verifier:_ Rule-based outcome reward from final-answer correctness, plus length-aware overlong reward shaping.
  _Recipe signal:_ teacher: none reported for target traces; web/competition answers plus manual annotation provide ground-truth answers.; generator: Online policy rollouts sampled during DAPO/GRPO-style RL.
  _Audit focus:_ Integer-answer transformation can change problem semantics or difficulty., Rule-based answer extraction can create false positives or false negatives., Dynamic sampling hides all-correct and all-wrong prompts from gradient updates, changing the effective training distribution.
  _Why it matters:_ It is valuable for the Data Construction track because the paper exposes how prompt sourcing, answer normalization, reward rules, rollout filtering, and optimizer scaffolding jointly shape RLVR data rather than merely reporting a final benchmark score.
- 🚀 **[Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599)**
  <sub>2025 · arXiv · 🚀 model report · 📈 scaling study · mixed · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.12599) · [Card](../../cards/recipes/kimi_k15.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; scaling report; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Frontier report used for long-context RL and scaling discussion.
- 🚀 **[Magistral](https://arxiv.org/abs/2506.10910)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10910) · [Card](../../cards/recipes/magistral.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; reward verifier layer; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.
- 🚀 **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · mixed · programmatic · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.13585) · [Code](https://github.com/MiniMax-AI/MiniMax-M1) · [Card](../../cards/recipes/minimax_m1.md)
  _Data object:_ reasoning output, code/tool result, or agent task output; process: reasoning output, benchmark result, thinking budget; math, code, SWE, tool-use, and long-context evaluation surfaces
  _Feedback / verifier:_ programmatic, environment, and benchmark feedback
  _Recipe signal:_ frontier pipeline; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794) · [Card](../../cards/verifiers/one_token_to_fool_judge.md)
  _Data object:_ scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ reward verifier layer; evaluation; reward modeling
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- 🌐 **[REASONING GYM: Reasoning Environments for Reinforcement Learning with Verifiable Rewards](https://openreview.net/forum?id=GqYSunGmp7)**
  <sub>2025 · NeurIPS 2025 Spotlight · 🌐 agent environment · 🏗️ construction recipe · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=GqYSunGmp7) · [arXiv](https://arxiv.org/abs/2505.24760) · [DOI](https://doi.org/10.48550/arXiv.2505.24760) · [Code](https://github.com/open-thought/reasoning-gym) · [Card](../../cards/agents/reasoning-gym.md)
  _Data object:_ Each generated entry contains question, answer, and metadata fields; model-answer syntax and the set of valid solutions are task-specific.; process: task or source-dataset name, generator configuration, seed and generated-item index; ProceduralDataset generators, a named task registry, weighted composite datasets, optional reseeding for unbounded streams, and optional task curricula.
  _Feedback / verifier:_ Each task supplies a score answer function yielding an algorithmic scalar reward; current releases optionally add native, normalized-string, numeric, and symbolic-math cascade scoring.
  _Recipe signal:_ teacher: none; generator: Registered task-specific Python procedural generators with difficulty, structural, and stylistic parameters.
  _Audit focus:_ The library is a dynamic generator collection rather than a canonical fixed dataset, so task counts, defaults, outputs, and verifier behavior can change across revisions., The base score answer implementation gives partial credit when an oracle string appears inside a longer response, creating a false-positive surface., The optional cascade only upgrades scores and adds normalization, numeric tolerance, and symbolic matching; this reduces formatting false negatives but broadens acceptance.
  _Why it matters:_ It turns reasoning-data construction into a versioned executable environment layer where tasks can be generated on demand, difficulty can drive curricula, and rewards can be computed without a fixed human-curated corpus.
- 🏗️ **[TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084)**
  <sub>2025 · arXiv preprint arXiv:2504.16084 · 🏗️ construction recipe · 📈 scaling study · mixed · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16084) · [Card](../../cards/recipes/ttrl.md)
  _Data object:_ candidate response with reward/adaptation signal; process: unlabeled input, rollout, reward signal; test-time task distribution
  _Feedback / verifier:_ task-specific or learned reward used during adaptation
  _Recipe signal:_ optimizer scaffold; reward verifier layer; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.
- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Card](../../cards/verifiers/tinyv.md)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- 🧭 **[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216)**
  <sub>2024 · arXiv · 🧭 survey background · 📈 scaling study · mixed · programmatic · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216)
  _Data object:_ technical survey comparing RLHF and RLVR policy-gradient style post-training methods.; process: prompt sampling, response sampling, reward source; LLM post-training algorithms and reasoning tasks such as math and coding.
  _Feedback / verifier:_ learned preference rewards, verifiable rewards, and policy-gradient objectives.
  _Recipe signal:_ teacher: literature covering human feedback, verifiable rewards, and post-training optimization.; generator: technical survey and unified policy-gradient framework
  _Audit focus:_ Method comparisons can mix data effects with optimizer and sampling-budget effects., RLHF and RLVR rewards are often discussed together despite different verification contracts., Implementation details can dominate reported gains if not separated from data quality.
  _Why it matters:_ It connects classic RLHF and reward modeling to reasoning-oriented RLVR, helping readers avoid conflating human preference rewards with programmatic or verifiable rewards.
- 🧭 **[A Survey of Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2312.14925)**
  <sub>2023 · TMLR · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2312.14925) · [Venue](https://openreview.net/forum?id=f7OkIurx4b) · [DOI](https://doi.org/10.48550/arXiv.2312.14925)
  _Data object:_ survey taxonomy over feedback collection, reward modeling, and policy optimization.; process: feedback source, preference format, reward model objective; RLHF pipelines spanning LLMs and broader RL settings.
  _Feedback / verifier:_ learned reward model from human feedback.
  _Recipe signal:_ teacher: human preference and feedback providers summarized across the literature.; generator: survey taxonomy
  _Audit focus:_ Human feedback can be noisy, subjective, sparse, or expensive., Reward models can overfit annotator preferences and become exploitable objectives., LLM readers may overgeneralize broad RLHF lessons to verifiable-reasoning settings.
  _Why it matters:_ It fills the RLHF survey doorway by separating human preference feedback, reward modeling, and policy optimization before readers compare them with verifiable-reward reasoning data.
- 🪜 **[PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · rlvr · process supervision · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2502.01456) · [Code](https://github.com/PRIME-RL/PRIME)
  _Data object:_ rollout with implicit process reward signal; process: policy rollout, outcome label, implicit process reward; online RL training loop
  _Feedback / verifier:_ implicit process rewards derived from outcome labels
  _Recipe signal:_ generator: policy rollouts; filtering rule: outcome labels converted into implicit process rewards
  _Audit focus:_ implicit rewards can inherit outcome-verifier shortcuts, online reward updates may introduce reward hacking, benchmark improvements may conflate optimizer and reward-contract changes
  _Why it matters:_ It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds.
- 🧭 **[Training a helpful and harmless assistant with reinforcement learning from human feedback](https://arxiv.org/abs/2204.05862)**
  <sub>2022 · arXiv · 🧭 survey background · judgment required · reward modeling · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2204.05862)
  _Data object:_ pairwise preference; scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ release audit; reward modeling; preference learning
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It provides the alignment-data lineage that later reasoning-data recipes inherit when they combine demonstrations, preferences, and reward models.
- 🧭 **[Deep reinforcement learning from human preferences](https://arxiv.org/abs/1706.03741)**
  <sub>2017 · NeurIPS · 🧭 survey background · judgment required · reward modeling · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/1706.03741)
  _Data object:_ pairwise preference; scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ release audit; reward modeling; preference learning
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a foundation for later post-training data records that turn comparisons into trainable reward signals.

### <a id="agent-training"></a>🌐 Agent training

- 📦 **[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 📦 data release · 🧰 benchmark · environmental · programmatic · agent training · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md)
  _Data object:_ Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.
  _Feedback / verifier:_ Lean checker and environment feedback.
  _Recipe signal:_ teacher: Lean math-library proofs and proof-assistant feedback.; generator: data-extraction toolkit traces repositories and prover generates tactics.
  _Audit focus:_ A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
- 🌐 **[ReAct: Synergizing reasoning and acting in language models](https://arxiv.org/abs/2210.03629)**
  <sub>2023 · ICLR · 🌐 agent environment · 🏗️ construction recipe · environmental · mixed · agent training · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2210.03629) · [OpenReview](https://openreview.net/forum?id=WE_vluYUL-X) · [Code](https://github.com/ysymyth/ReAct) · [Project](https://react-lm.github.io/) · [Card](../../cards/agents/react.md)
  _Data object:_ trajectory containing reasoning note, action, observation, and final answer or task completion.; process: task state, action string, observation, reasoning note, final answer, success indicator.; Wikipedia API, embodied/web shopping environments, and task-specific simulators.
  _Feedback / verifier:_ environment success, answer correctness, or task-specific evaluation.
  _Recipe signal:_ teacher: few-shot trajectory exemplars demonstrate reasoning-action format.; generator: model samples interleaved reasoning and action steps.
  _Audit focus:_ Reasoning notes can rationalize bad actions., Environment wrappers can change task difficulty., Few-shot exemplars may encode brittle action formats.
  _Why it matters:_ It is a foundational agent-data pattern: the training/evaluation record is not just an answer but a trajectory of thought-like notes, actions, observations, and final response.
- 🧰 **[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.06770) · [OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [Code](https://github.com/swe-bench/SWE-bench) · [Project](https://www.swebench.com/original.html) · [Card](../../cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ release audit; evaluation; agent training
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes.
- 🌐 **[R2E-Gym](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv · 🌐 agent environment · 🧰 benchmark · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.07164) · [Card](../../cards/agents/r2e_gym.md)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ search substrate; agent training; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verifiable SWE environment for reasoning-to-edit tasks.
- 📦 **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.21139) · [Card](../../cards/agents/swe_gym.md)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ prompt sourcing; search substrate; agent training
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Repository-scale training environment showing substrate as data.
- 🧰 **[AndroidWorld: A dynamic benchmarking environment for autonomous agents](https://arxiv.org/abs/2405.14573)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.14573) · [Card](../../cards/agents/androidworld.md)
  _Data object:_ Android action trajectory; process: screen observation, UI action, state transition; Android device/emulator environment
  _Feedback / verifier:_ task-specific success evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Android tasks turn mobile UI state and action histories into evaluable agent trajectories.
- 🧰 **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.18901) · [Card](../../cards/agents/appworld.md)
  _Data object:_ API/tool action trajectory; process: tool call, state transition, observation; simulated app ecosystem with users and APIs
  _Feedback / verifier:_ programmatic environment assertions
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.
- 🛠️ **[BrowserGym: A gym environment for web agents](https://arxiv.org/abs/2412.05467)**
  <sub>2024 · arXiv · 🛠️ infrastructure · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.05467) · [Card](../../cards/agents/browsergym.md)
  _Data object:_ browser trajectory; process: DOM/state observation, action, reward/result; gym-style browser environment
  _Feedback / verifier:_ environment task evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation.
- 🧰 **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2404.07972) · [Card](../../cards/agents/osworld.md)
  _Data object:_ GUI/OS action trajectory; process: observation, action, environment state; desktop operating-system environment
  _Feedback / verifier:_ task completion evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.
- 🛠️ **[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)**
  <sub>2024 · ICLR · 🛠️ infrastructure · 🌐 agent environment · environmental · mixed · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16741) · [Code](https://github.com/All-Hands-AI/OpenHands) · [Project](https://www.openhands.dev/) · [Card](../../cards/agents/openhands.md)
  _Data object:_ tool/action/observation trajectory; process: plan, shell command, file edit; sandboxed software-development runtime
  _Feedback / verifier:_ task, test, or human-review outcome depending on benchmark
  _Recipe signal:_ search substrate; optimizer scaffold; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.
- 📦 **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.16789) · [Card](../../cards/agents/toolllm_toolbench.md)
  _Data object:_ tool-call trajectory plus final response; process: API call, arguments, tool response; real-world API/tool catalog
  _Feedback / verifier:_ tool response validity and task success checks
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.
- 🧰 **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.13854) · [Card](../../cards/agents/webarena.md)
  _Data object:_ environment interaction trajectory; process: observation, action, state; browser-accessible web environment
  _Feedback / verifier:_ task-specific success evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.

### <a id="evaluation-reranking-audit"></a>🧪 Evaluation / reranking / audit

- 🧰 **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.09038) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2025/hash/fb122bfc3f0127a94ded048b5b03496f-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/facebookresearch/AbstentionBench) · [Data](https://huggingface.co/datasets/facebook/AbstentionBench) · [Card](../../cards/benchmarks/abstentionbench.md)
  _Data object:_ model response, abstention decision, and correctness/abstention judgment.; process: scenario type, source dataset, answerability label, judge/validation metadata.; offline benchmark with model-evaluation harness.
  _Feedback / verifier:_ human-validated judges and benchmark labels for abstention scenarios.
  _Recipe signal:_ teacher: dataset labels and human-validated abstention judgments.; generator: benchmark authors assemble unanswerable and answerable prompts.
  _Audit focus:_ A model can game abstention by refusing too often., Benchmark labels around subjectivity and underspecification can be ambiguous., Prompt tuning may improve benchmark score without improving epistemic reasoning.
  _Why it matters:_ It is a direct audit surface for reasoning models: stronger reasoning can still fail if the model confidently answers unanswerable questions instead of abstaining.
- 📦 **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · judgment required · mixed · safety alignment · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.09004) · [ACL](https://aclanthology.org/2025.naacl-long.306/) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) · [Card](../../cards/verifiers/aegis2.md)
  _Data object:_ prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: hazard category, fine-grained risk label, response-safety decision, split metadata when using the dataset release.; offline guardrail training/evaluation dataset.
  _Feedback / verifier:_ risk labels and guard-model evaluation signal.
  _Recipe signal:_ teacher: human annotators and multi-LLM jury system.; generator: safety prompts and human-LLM interactions collected or generated for taxonomy coverage.
  _Audit focus:_ Taxonomy labels can hide disagreement between annotators or judge models., Safety datasets can overfit visible hazard categories and miss emerging harms., Guardrail training may trade helpfulness for over-refusal if topic-following data is not tracked.
  _Why it matters:_ It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification.
- 🧰 **[HealthBench](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2505.08775) · [Card](../../cards/verifiers/healthbench.md)
  _Data object:_ response with rubric/judge evaluation; process: prompt, response, rubric dimension; offline health evaluation benchmark
  _Feedback / verifier:_ rubric-guided expert/LLM judgment
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a high-stakes example of judgment-required reasoning data where rubric design matters more than exact-match scoring.
- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧰 benchmark · judgment required · environmental · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts) · [Card](../../cards/failures/leaky-thoughts.md)
  _Data object:_ internal reasoning trace, final answer, and leakage/extraction outcome.; process: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.; personal-agent evaluation setting with hidden or internal reasoning traces.
  _Feedback / verifier:_ extraction probes and agentic evaluations.
  _Recipe signal:_ teacher: not applicable; this is an audit benchmark.; generator: models produce reasoning traces under normal or injected prompts.
  _Audit focus:_ Hiding thoughts from users does not make them safe., Trace logging can create a new privacy dataset., Utility improvements from more reasoning may worsen leakage risk.
  _Why it matters:_ It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.
- 🧰 **[Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)**
  <sub>2024 · OpenAI / SWE-bench report · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://openai.com/index/introducing-swe-bench-verified/) · [Venue](https://www.swebench.com/verified.html) · [Code](https://github.com/swe-bench/SWE-bench) · [Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified) · [Card](../../cards/agents/swe-bench-verified.md)
  _Data object:_ patch diff applied to a repository plus test execution results.; process: repository, issue, base commit, patch, FAIL TO PASS tests, PASS TO PASS tests, human validation notes.; Dockerized repository checkout and unit-test harness.
  _Feedback / verifier:_ post-patch unit tests plus human filtering of task validity.
  _Recipe signal:_ teacher: resolved GitHub pull requests and human validators.; generator: dataset curation filters original SWE-bench instances for clarity, solvability, and test validity.
  _Audit focus:_ Leaderboard scores can depend strongly on scaffold design., Tests may not cover all acceptable patches., Public benchmark tasks can become training targets over time.
  _Why it matters:_ It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.
- 🧰 **[LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · mixed · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/) · [Card](../../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic, mixed
  _Recipe signal:_ release audit; evaluation; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.
- 🧰 **[LiveCodeBench: Holistic and contamination-free evaluation of large language models for code](https://arxiv.org/abs/2403.07974)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2403.07974) · [OpenReview](https://openreview.net/forum?id=chfJJYC3iL) · [Code](https://github.com/livecodebench/livecodebench) · [Project](https://livecodebench.github.io/) · [Card](../../cards/benchmarks/livecodebench.md)
  _Data object:_ program submission or code-related output evaluated by tests or task-specific checks.; process: problem release date, platform, prompt, generated code, tests, pass/fail result, evaluation window.; code execution and benchmark leaderboard infrastructure.
  _Feedback / verifier:_ programmatic tests and task-specific correctness checks.
  _Recipe signal:_ teacher: contest tests and problem statements provide correctness signal.; generator: models produce code or code-related predictions.
  _Audit focus:_ Live benchmarks still become stale after release., Execution settings can affect pass/fail outcomes., Public leaderboard feedback can shape future training.
  _Why it matters:_ It gives code-reasoning evaluation a moving-time-window design, making it harder to confuse memorized public problems with genuine coding capability.
- 🧪 **[Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535)**
  <sub>2024 · EMNLP · 🧪 verifier reward · 🚀 model report · judgment required · reward modeling · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2405.01535) · [ACL](https://aclanthology.org/2024.emnlp-main.248/) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [Code](https://github.com/prometheus-eval/prometheus-eval) · [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0) · [Card](../../cards/verifiers/prometheus-2.md)
  _Data object:_ rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights.
  _Feedback / verifier:_ Prometheus 2 judge output aligned against human/proprietary-judge benchmarks.
  _Recipe signal:_ teacher: human judgments and strong evaluator references across direct and pairwise tasks.; generator: training pipeline merges evaluator capabilities across formats.
  _Audit focus:_ Open judges can inherit rubric bias., Agreement with another judge is not the same as correctness., Pairwise and scalar formats can disagree.
  _Why it matters:_ It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes.
- 🧰 **[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2403.13787) · [Card](../../cards/verifiers/rewardbench.md)
  _Data object:_ pairwise or scalar reward decisions; process: prompt, chosen/rejected response, reward model score; offline preference benchmark
  _Feedback / verifier:_ reward model or judge
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It helps readers test whether a reward signal generalizes beyond helpfulness style into subtle factual, reasoning, refusal, and safety preferences.
- 🧰 **[SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168)**
  <sub>2024 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2407.13168) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/scicode-bench/SciCode) · [Project](https://scicode-bench.github.io/) · [Card](../../cards/benchmarks/scicode.md)
  _Data object:_ code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness.
  _Feedback / verifier:_ test cases and scientist-curated gold solutions.
  _Recipe signal:_ teacher: scientists and AI researchers curate problems, decompositions, solutions, and tests.; generator: models produce code for subproblems and main problems.
  _Audit focus:_ Models can pass narrow tests without scientific validity., Domain background can leak solution hints., Execution environments can change numerical results.
  _Why it matters:_ It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests.
- 🧰 **[GPQA](https://arxiv.org/abs/2311.12022)**
  <sub>2023 · arXiv · 🧰 benchmark · judgment required · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2311.12022) · [OpenReview](https://openreview.net/forum?id=Ti67584b98) · [Code](https://github.com/idavidrein/gpqa) · [Card](../../cards/benchmarks/gpqa.md)
  _Data object:_ multiple-choice answer with optional rationale and expert label.; process: domain, question, answer options, expert label, validation metadata, canary/string metadata.; offline expert Q&A benchmark.
  _Feedback / verifier:_ expert-authored answer key and validation protocol.
  _Recipe signal:_ teacher: domain experts write and validate questions.; generator: benchmark authors curate difficult science questions.
  _Audit focus:_ Multiple-choice guessing can inflate scores., Non-expert validators may not catch subtle mistakes., Tool access changes what the benchmark measures.
  _Why it matters:_ It is a scalable-oversight benchmark: the data object tests whether models can answer expert questions that are difficult for ordinary validators to check.
- 🧰 **[Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.05685) · [Venue](https://papers.nips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html) · [OpenReview](https://openreview.net/forum?id=uccHPGDlao) · [Code](https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge) · [Card](../../cards/verifiers/mt-bench-chatbot-arena.md)
  _Data object:_ model response, judge score, pairwise preference, or arena battle outcome.; process: question, turn, model identity, response, judge prompt template, score, preference label, bias-control setting.; offline judge harness and crowd-sourced arena platform.
  _Feedback / verifier:_ strong model judge and human preference comparisons.
  _Recipe signal:_ teacher: human preferences and strong model judges.; generator: candidate chat models answer MT-Bench and arena prompts.
  _Audit focus:_ Judge scores can be position-biased., Verbose answers can be over-rewarded., A model judge may share weaknesses with the evaluated model.
  _Why it matters:_ It is the standard cautionary reference for judge data: scalable model judges are useful, but position, verbosity, self-enhancement, and limited-reasoning biases must be audited.
- 🏗️ **[Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511)**
  <sub>2023 · ICLR · 🏗️ construction recipe · 📦 data release · mixed · judgment required · sft · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/) · [Card](../../cards/recipes/self-rag.md)
  _Data object:_ generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens.
  _Feedback / verifier:_ critique signals and task-specific factuality/answer-quality evaluation.
  _Recipe signal:_ teacher: critic and retrieval-supervision signals derived from task data and evidence checks.; generator: model learns special reflection tokens for retrieval and critique behavior.
  _Audit focus:_ A model can retrieve irrelevant passages confidently., Critique tokens can become style markers without true verification., Retriever choice changes benchmark conclusions.
  _Why it matters:_ It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations.
- 📈 **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 📈 scaling study · 🧭 survey background · mixed · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw) · [Card](../../cards/recipes/self-consistency-chain-of-thought.md)
  _Data object:_ multiple rationales and final answers for the same prompt.; process: sampling temperature, number of paths, answer extraction, aggregation rule.; benchmark prompting setup.
  _Feedback / verifier:_ majority or marginalization over sampled answers.
  _Recipe signal:_ teacher: few-shot chain-of-thought exemplars.; generator: model samples many reasoning paths.
  _Audit focus:_ More samples can amplify benchmark-specific shortcuts., Aggregation does not guarantee step faithfulness., Unmatched inference budgets can make methods look better than they are.
  _Why it matters:_ It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.
- 🧰 **[TruthfulQA](https://arxiv.org/abs/2109.07958)**
  <sub>2022 · ACL · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.07958) · [ACL](https://aclanthology.org/2022.acl-long.229/) · [Code](https://github.com/sylinrl/TruthfulQA) · [Card](../../cards/benchmarks/truthfulqa.md)
  _Data object:_ free-form generation or multiple-choice answer with truthfulness and informativeness labels.; process: question category, reference true answers, reference false answers, model answer, truthfulness score, informativeness score.; offline benchmark with human-written items and evaluator scripts.
  _Feedback / verifier:_ human references plus automated/human scoring protocols for truthfulness and informativeness.
  _Recipe signal:_ teacher: human-authored reference answer sets.; generator: benchmark authors construct questions designed to trigger imitative falsehoods.
  _Audit focus:_ A model can be uninformative but truthful., A model can sound confident while reproducing a human misconception., Multiple-choice and generation modes can lead to different conclusions.
  _Why it matters:_ It is a canonical truthfulness audit surface for reasoning models because stronger generation can still amplify persuasive false answers learned from web text.
- 🧰 **[Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../../cards/benchmarks/evaluating-large-language-models-trained-on-code.md)
  _Data object:_ executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite.
  _Feedback / verifier:_ HumanEval tests and pass@k evaluation.
  _Recipe signal:_ teacher: benchmark authors and public code pretraining corpus context.; generator: model samples code completions.
  _Audit focus:_ Small public benchmarks are easy to memorize., Unit tests can miss incorrect or insecure behavior., Repeated sampling can hide low single-sample reliability.
  _Why it matters:_ It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions.
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
- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124) · [Card](../../cards/verifiers/prmbench.md)
  _Data object:_ step-level labels or scores; process: step, label, error type; offline reasoning traces
  _Feedback / verifier:_ process-level reward model benchmark
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- 📦 **[SWE-smith: Scaling Data for Software Engineering Agents](https://arxiv.org/abs/2504.21798)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · environmental · agent training · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.21798) · [OpenReview](https://openreview.net/forum?id=63iVrXc8cC) · [DOI](https://doi.org/10.48550/arXiv.2504.21798) · [Code](https://github.com/SWE-bench/SWE-smith) · [Data](https://huggingface.co/datasets/SWE-bench/SWE-smith) · [Project](https://swesmith.com/) · [Card](../../cards/agents/swe-smith.md)
  _Data object:_ Repository-level SWE task instance with problem statement, repo, base commit, patch/test patch metadata, FAIL TO PASS/PASS TO PASS tests, and optional message/action trajectories.; process: repo and base commit, problem statement, patch and test patch; Python repository checkout at a pinned base commit with executable tests.
  _Feedback / verifier:_ Executable regression tests and environment checks; no learned reward model is part of the data release.
  _Recipe signal:_ teacher: unknown as a single teacher; released expert trajectories use listed frontier-model SWE-agent runs.; generator: SWE-smith.prog transforms existing Python functions, while SWE-smith.gen uses language models to generate new functions/classes after environment setup; exact generator model names require paper/code audit.
  _Audit focus:_ Generated tests can encode shallow or brittle specifications., Repository environment failures can be mistaken for task difficulty., Training on synthetic SWE tasks may overfit to generator artifacts rather than real issue distributions.
  _Why it matters:_ It is a concrete recipe for scaling software-engineering agent data with executable tests, released code, and dataset artifacts, making it useful for studying construction pipelines rather than only benchmark scores.
- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [Card](../../cards/verifiers/spurious_rewards.md)
  _Data object:_ scalar reward
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ reward verifier layer; rlvr; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
- 🧰 **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · judgment required · programmatic · evaluation · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.06559) · [Card](../../cards/verifiers/processbench.md)
  _Data object:_ step labels or first-error markers; process: reasoning step, error marker, diagnostic label; offline math traces
  _Feedback / verifier:_ process-error detector
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- 🧭 **[A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328)**
  <sub>2025 · arXiv · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.12328) · [DOI](https://doi.org/10.48550/arXiv.2504.12328) · [Project](https://github.com/JLZhong23/awesome-reward-models)
  _Data object:_ taxonomy of reward-model data sources, objectives, applications, evaluations, and challenges.; process: preference source, reward model architecture, usage mode; LLM reward-model training and evaluation pipelines.
  _Feedback / verifier:_ reward model as proxy objective for downstream post-training.
  _Recipe signal:_ teacher: human and AI preference sources summarized across reward-model literature.; generator: survey taxonomy and accompanying awesome list
  _Audit focus:_ Reward models may encode annotator bias, style bias, or length preference., Proxy rewards can be overoptimized or attacked when used as training objectives., Benchmark scores can obscure whether the reward model is useful for reasoning data.
  _Why it matters:_ It gives readers a reward-model-specific map, which is essential before comparing learned human-preference rewards with PRMs, rubric rewards, and programmatic RLVR verifiers.
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
- 🧭 **[A Survey on Evaluation of LLM-based Agents](https://arxiv.org/abs/2503.16416)**
  <sub>2025 · arXiv · 🧭 survey background · environmental · mixed · evaluation · audit · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.16416)
  _Data object:_ survey taxonomy for agent evaluation tasks and environments.; process: task, environment, trajectory, evaluator, terminal predicate.; LLM-agent evaluation literature.
  _Feedback / verifier:_ environmental and benchmark evaluators summarized by the survey.
  _Recipe signal:_ release audit; evaluation; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives the atlas an agent-survey waypoint for readers who need to understand environment data before comparing SWE, web, app, or OS agent benchmarks.

### <a id="other-related-work"></a>Other related work

- 🏗️ **[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073)**
  <sub>2022 · arXiv preprint · 🏗️ construction recipe · 🧭 survey background · judgment required · mixed · preference learning · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.08073) · [Project](https://github.com/anthropics/ConstitutionalHarmlessnessPaper) · [Card](../../cards/recipes/constitutional-ai.md)
  _Data object:_ original answer, self-critique, revised answer, preference pair, reward-model score.; process: principle used, critique, revision, comparison, preference label.; offline SL and RLHF/RLAIF alignment pipeline.
  _Feedback / verifier:_ AI preference model trained from comparisons guided by constitutional principles.
  _Recipe signal:_ teacher: constitution/principles plus critique-and-revision model behavior.; generator: model produces critiques, revisions, and response pairs.
  _Audit focus:_ AI feedback can encode model bias at scale., Principles may be underspecified or culturally narrow., A model can become safe-looking but evasive if helpfulness is not audited.
  _Why it matters:_ It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data.

### ⚠️ Needs search or metadata

- 📦 **[Efficient PRM Training Data Synthesis via Formal Verification](https://aclanthology.org/2026.findings-acl.403/)**
  <sub>2026 · Findings of ACL 2026 · 📦 data release · 🧪 verifier reward · programmatic · reward modeling · process supervision · L4_carded</sub>
  [Paper](https://aclanthology.org/2026.findings-acl.403/) · [arXiv](https://arxiv.org/abs/2505.15960) · [DOI](https://doi.org/10.18653/v1/2026.findings-acl.403) · [Code](https://github.com/psunlpgroup/FoVer) · [Data](https://huggingface.co/datasets/ryokamoi/FoVer-FormalLogic-FormalProof-Qwen-2.5-7B-LastStepBalanced-40k) · [HF](https://huggingface.co/collections/ryokamoi/fover) · [Project](https://fover-prm.github.io/) · [Card](../../cards/verifiers/fover.md)
  _Data object:_ Each record contains a formal problem, ordered solution steps, aligned Boolean error labels, conversation-form training/prediction representations, base dataset, and task-specific formula metadata.; process: id, problem, solution steps; Z3 first-order-logic checking and Isabelle/HOL theorem proving. Isabelle syntax is checked with sorry placeholders and each target step is verified while other proof steps are replaced by sorry.
  _Feedback / verifier:_ Z3 or Isabelle emits binary correctness per formal step. The trained PRM predicts correct/incorrect tokens and their normalized logits become step-level reward scores.
  _Recipe signal:_ teacher: No human or LLM teacher supplies error labels; Z3 and Isabelle provide programmatic labels while Llama and Qwen generate candidate traces.; generator: Few-shot prompts elicit verifier-compatible formal solutions; the pipeline retries until syntactically valid and then applies step-level Z3/Isabelle wrappers.
  _Audit focus:_ A generated Isabelle statement can misformalize the natural-language problem while still receiving formally correct labels., Parser, type, tactic, timeout, dependency or prover-environment failures may be mapped to Boolean labels without an error-type field or prover log., Isabelle independent-step verification replaces other steps with sorry and can miss dependency-chain or scoping errors.
  _Why it matters:_ It demonstrates a low-LLM-call route to process supervision while making formalization fidelity, prover wrappers, step-dependency assumptions, dataset versioning and informal-domain transfer explicit audit boundaries.
- 🏗️ **[Prompt Curriculum Learning for Efficient LLM Post-Training](https://arxiv.org/abs/2510.01135)**
  <sub>2026 · ICLR 2026 · 🏗️ construction recipe · 📈 scaling study · programmatic · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2510.01135) · [Venue](https://openreview.net/forum?id=zqOCacBD3P) · [DOI](https://doi.org/10.48550/arXiv.2510.01135)
  _Data object:_ Prompt, selected-prompt indicator, rollouts, and terminal binary correctness reward; row records are unreleased.; process: candidate prompt, value prediction, selection indicator; Synchronous verl RL with a concurrently refreshed prompt-only value model.
  _Feedback / verifier:_ math-verify final-answer correctness.
  _Recipe signal:_ teacher: No external teacher; value model learns from current rollout rewards.; generator: Current policy after selection.
  _Audit focus:_ Selector is trained only on selected prompts, fixed-threshold selection changes curriculum, no official code/data/log/checkpoint release exists.
  _Why it matters:_ It separates rollout-free selection from rollout-dependent optimization and records missing selection evidence.
- 📦 **[The Open Proof Corpus: A Large-Scale Study of LLM-Generated Mathematical Proofs](https://openreview.net/forum?id=a2XmC7rHIU)**
  <sub>2026 · ICLR 2026 · 📦 data release · 🧰 benchmark · judgment required · reward modeling · process supervision · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=a2XmC7rHIU) · [arXiv](https://arxiv.org/abs/2506.21621) · [DOI](https://doi.org/10.48550/arXiv.2506.21621) · [Code](https://github.com/insait-institute/open-proof-corpus) · [Data](https://huggingface.co/datasets/INSAIT-Institute/OPC) · [Project](https://proofcorpus.ai/) · [Card](../../cards/releases/open-proof-corpus.md)
  _Data object:_ Full natural-language mathematical proof paired with one or two binary correctness labels, written feedback, uncertainty flags, optional span-level annotations, and problem/source metadata.; process: problem identifier and statement, generated proof, solver model identifier; Competition-proof generation followed by a custom expert-grading interface, duplicate grading for quality control, split-specific evaluation protocols, and optional best-of-N selection.
  _Feedback / verifier:_ One or two qualified human judges assign binary proof-validity labels and written feedback; optional sentence annotations identify local errors.
  _Recipe signal:_ teacher: Thirteen expert human judges provide correctness supervision; official competition solutions are supplied as references when available, and O4-MINI supplies non-verdict issue summaries.; generator: O4-MINI, O3, Gemini-2.5-Pro, Grok-3-Mini, Qwen3-235B-A22B, and DeepSeek-R1 generate the released proofs.
  _Audit focus:_ Approximately 10% double grading leaves most proofs with a single human judgment., The reported 90.4% agreement still implies nonzero label noise; the paper's 5% judge-error estimate depends on independence assumptions., Fewer than 3% of proofs are marked uncertain, but subtle near-correct errors can remain difficult to classify.
  _Why it matters:_ It provides unusually rich positive and negative proof supervision for training and auditing proof judges while exposing the limits of final-answer verification, selective best-of-N labeling, and single-judge proof assessment.
- 🏗️ **[Towards High Data Efficiency in Reinforcement Learning with Verifiable Reward](https://openreview.net/forum?id=sruA4AZmZI)**
  <sub>2026 · ICLR 2026 · 🏗️ construction recipe · 📈 scaling study · unknown · rlvr · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=sruA4AZmZI) · [arXiv](https://arxiv.org/abs/2509.01321) · [Code](https://github.com/RUCAIBox/DEPO) · [Card](../../cards/recipes/depo.md)
  _Data object:_ Answer-level rollout with verifiable reward; serialized schema is unknown.; process: offline diversity signal, offline influence signal, offline difficulty signal; Offline subset selection plus online filtering and replay around RLVR.
  _Feedback / verifier:_ The paper assumes verifiable reward but does not expose its concrete verifier or error analysis.
  _Recipe signal:_ generator: Current RLVR policy.; filtering rule: Offline diversity, influence, and difficulty selection; online low-explorability filtering with replay of under-explored samples.
  _Audit focus:_ Selection may bias coverage, low-explorability filtering can remove rare skills, replay can amplify stale or verifier-gamed samples
  _Why it matters:_ It makes selection and rollout allocation auditable parts of RLVR, while preserving missing dynamic-data and verifier evidence.
- 🏗️ **[AdaSTaR: Adaptive Data Sampling for Training Self-Taught Reasoners](https://openreview.net/forum?id=D6PwC6Xogv)**
  <sub>2025 · NeurIPS 2025 · 🏗️ construction recipe · 📈 scaling study · programmatic · sft · L3_summary_ready</sub>
  [Paper](https://openreview.net/forum?id=D6PwC6Xogv) · [arXiv](https://arxiv.org/abs/2505.16322) · [ACL](https://aclanthology.org/2026.acl-long.1376/) · [Code](https://github.com/reiss-koh/AdaSTaR)
  _Data object:_ A self-generated chain of thought and predicted final answer conditioned on fixed few-shot CoT exemplars; answers are checked against ground truth.; process: observation id, query, ground truth answer; Iterative accumulating STaR/RFT with a hierarchical min-heap over observations and a fresh accepted-CoT set each iteration.
  _Feedback / verifier:_ Rule-based outcome verifier equals one when predicted answer matches ground truth; the most recent K-sample acceptance rate becomes the observation's cached win statistic.
  _Recipe signal:_ teacher: The current model self-generates traces. GPT-4o is used only for a diagnostic false-positive audit, not training verification.; generator: The current iteration's accumulating STaR policy model.
  _Audit focus:_ Outcome verification admits flawed CoTs with correct final answers., Cached win rate is measured only at last visit and can become stale as model parameters and prompt difficulty drift., Acceptance rate conflates reasoning difficulty with answer parsing, prompt format, few-shot compatibility and label noise.
  _Why it matters:_ It turns prompt-level acceptance history into a data-allocation policy and reports early-stopped compute savings while exposing stale difficulty, outcome-only false positives and unreleased rollout risks.
- 📦 **[Big-Math: A Large-Scale, High-Quality Math Dataset for Reinforcement Learning in Language Models](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · rlvr · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.17387) · [DOI](https://doi.org/10.48550/arXiv.2502.17387) · [Code](https://github.com/SynthLabsAI/big-math) · [Data](https://huggingface.co/datasets/SynthLabsAI/Big-Math-RL-Verified) · [Card](../../cards/releases/big_math.md)
  _Data object:_ Open-ended mathematical question with a closed-form uniquely verifiable answer and source/domain metadata where available.; process: source dataset, question, answer; Offline math prompt corpus intended for rule-verifiable reinforcement learning; official repository releases filtering and reformulation code.
  _Feedback / verifier:_ Rule-based/model-assisted filters identify uniquely verifiable closed-form answers; downstream RL uses answer correctness.
  _Recipe signal:_ generator: Human/open-source problems plus systematic multiple-choice-to-open-ended reformulation for Big-Math-Reformulated.; filtering rule: Retain open-ended problems with unique, closed-form verifiable solutions; manually audit filtering stages and reformulate suitable multiple-choice items.
  _Audit focus:_ Rule-based answer checkers can reject equivalent forms or accept malformed shortcuts., Reformulation can change problem semantics or difficulty., Combining public sources can preserve benchmark contamination and incompatible licenses.
  _Why it matters:_ It makes prompt filtering, answer verifiability, source mixture and multiple-choice reformulation explicit construction steps for RL-ready math data.
- 📦 **[DeepMath-103K: A Large-Scale, Challenging, Decontaminated, and Verifiable Mathematical Dataset for Advancing Reasoning](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · ICLR 2026 · 📦 data release · 🏗️ construction recipe · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Venue](https://iclr.cc/virtual/2026/poster/10007807) · [DOI](https://doi.org/10.48550/arXiv.2504.11456) · [Code](https://github.com/zwhe99/DeepMath) · [Data](https://huggingface.co/datasets/zwhe99/DeepMath-103K) · [Card](../../cards/releases/deepmath_103k.md)
  _Data object:_ Mathematical question with verifiable final answer, topic and difficulty metadata, plus three generated reasoning solutions.; process: question, final answer, difficulty; Offline math problem corpus with answer-level rule verification and benchmark-overlap filtering.
  _Feedback / verifier:_ Rule-based final-answer verification for RLVR-ready prompts; exact parser and equivalence behavior require code-level audit.
  _Recipe signal:_ teacher: DeepSeek-R1 for three released solutions per problem.; generator: Mixed-source math curation followed by DeepSeek-R1 solution generation.
  _Audit focus:_ Final-answer verification can accept flawed or shortcut reasoning., Semantic decontamination thresholds can remove legitimate near-neighbors or miss paraphrased benchmark items., Three solutions from one teacher family can share systematic errors and style artifacts.
  _Why it matters:_ It makes difficulty selection, answer verification, benchmark decontamination and mutable release corrections explicit parts of a reusable RLVR/SFT data pipeline.
- 🏗️ **[FastMCTS: A Simple Sampling Strategy for Data Synthesis](https://aclanthology.org/2025.acl-long.1190/)**
  <sub>2025 · ACL 2025 · 🏗️ construction recipe · 🪜 process supervision · mixed · sft · preference learning · L4_carded</sub>
  [Paper](https://aclanthology.org/2025.acl-long.1190/) · [arXiv](https://arxiv.org/abs/2502.11476) · [DOI](https://doi.org/10.18653/v1/2025.acl-long.1190) · [Code](https://github.com/FlyingDutchman26/FastMCTS) · [Card](../../cards/recipes/fastmcts.md)
  _Data object:_ A complete mathematical solution segmented as Step 1, Step 2, and so on; each step becomes a search-tree node.; process: query, ground truth, reasoning step; An asynchronous MCTS-style reasoning tree where partial solutions are states, reasoning steps are actions, and complete simulations are retained as branches.
  _Feedback / verifier:_ Qwen2.5-72B-Instruct judges each complete trajectory against the standard answer three times, repeating inconsistent cases until consensus. Binary terminal results are backed up so node score equals win count divided by visit count.
  _Recipe signal:_ teacher: Qwen2.5-72B-Instruct as trajectory verifier; Qwen2.5-32B-Instruct for five-sample difficulty prescreening.; generator: Qwen2.5-72B-Instruct served through SGLang.
  _Audit focus:_ Appendix verifier prompt checks final-answer agreement and guessed/vague answers despite main-text language about intermediate-step verification., Terminal outcome backup can mark flawed intermediate steps as valuable when the final answer is correct., A zero-score node under sparse exploration can reflect insufficient sampling rather than low quality.
  _Why it matters:_ It connects token-budgeted search, terminal verification, node-value propagation and downstream SFT/DPO while exposing reproducibility, licensing and rejected-branch release gaps.
- 🚀 **[General-Reasoner: Advancing LLM Reasoning Across All Domains](https://openreview.net/forum?id=pBFVoll8Xa)**
  <sub>2025 · NeurIPS 2025 · 🚀 model report · 📦 data release · judgment required · reward modeling · rlvr · L3_summary_ready</sub>
  [Paper](https://openreview.net/forum?id=pBFVoll8Xa) · [arXiv](https://arxiv.org/abs/2505.14652) · [DOI](https://doi.org/10.48550/arXiv.2505.14652) · [Code](https://github.com/TIGER-AI-Lab/General-Reasoner) · [Data](https://huggingface.co/datasets/TIGER-Lab/WebInstruct-verified) · [Project](https://tiger-ai-lab.github.io/General-Reasoner/)
  _Data object:_ Short answers spanning float, expression, multiple choice, integer, string, list, Boolean, percentage, fraction, matrix, and other formats.; process: WebInstruct-derived id, question, retained short answer; Fixed WebInstruct-Verified QA splits consumed by a verl-based GRPO pipeline with a separately served 1.5B General-Verifier.
  _Feedback / verifier:_ A Qwen2.5-Math-1.5B-initialized generative verifier compares question, ground-truth answer, and extracted student answer, generates an equivalence rationale, and emits a final Yes or No decision used as answer-level reward.
  _Recipe signal:_ teacher: Gemini-1.5-Pro for verifiable-question extraction and Gemini-2.0-Flash for metadata annotation, eight-solution filtering, and verifier-training annotations.; generator: Web recrawling and extraction produce question-answer pairs; policy models generate online reasoning responses during GRPO.
  _Audit focus:_ Released rows omit original source URLs and item-level attribution, preventing direct verification of recrawl provenance and human-answer lineage., Package-level Apache-2.0 metadata does not establish that every upstream web item has compatible licensing or redistribution terms., Gemini extraction, metadata annotation, and filtering can introduce systematic selection errors; exact prompts and decoding settings are undisclosed.
  _Why it matters:_ It expands RLVR beyond math and code by operationalizing web recrawling, human-answer retention, LLM-based verifiability filtering, diverse answer-type metadata, and learned answer-equivalence rewards, while exposing important provenance and verifier-audit risks.
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
- 📦 **[Nemotron-Post-Training-Dataset-v2](https://arxiv.org/abs/2508.14444)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2508.14444) · [DOI](https://doi.org/10.48550/arXiv.2508.14444) · [Data](https://huggingface.co/datasets/nvidia/Nemotron-Post-Training-Dataset-v2) · [Card](../../cards/releases/nemotron_post_training_v2.md)
  _Data object:_ uuid, license, generator, version, category, reasoning and messages; process: uuid, license, generator; Mixed multilingual post-training release
  _Feedback / verifier:_ Subset-specific tool rules, IFEval rules, guards and reward models; outcomes absent from public schema
  _Recipe signal:_ teacher: Named DeepSeek and Qwen models; generator: synthetic generation by named models
  _Audit focus:_ Gated files prevent full inspection, Schema lacks reward, rejected rollout and training-stage fields, Per-row license exceptions need audit
  _Why it matters:_ Demonstrates why a large post-training release must not be inferred to be a complete RL or preference corpus.
- 🏗️ **[RL Tango: Reinforcing Generator and Verifier Together for Language Reasoning](https://openreview.net/forum?id=JRkFZl0TJ2)**
  <sub>2025 · NeurIPS 2025 · 🏗️ construction recipe · 🧪 verifier reward · mixed · sft · distillation · L3_summary_ready</sub>
  [Paper](https://openreview.net/forum?id=JRkFZl0TJ2) · [arXiv](https://arxiv.org/abs/2505.15034) · [Code](https://github.com/kaiwenzha/rl-tango)
  _Data object:_ A runtime item comprises a question, gold answer, generator response with think/step/answer tags, verifier response with one natural-language judgment per step, and an overall final-verification judgment. This is a training-time object, not a released dataset schema.; process: question, gold answer, generator solution; Offline math QA RL using veRL. The outcome checker extracts a boxed final answer and compares it with gold; the generative verifier evaluates the current generator trace and emits structured step/final judgments.
  _Feedback / verifier:_ The generator receives binary gold-answer reward plus stochastic step rewards from the current verifier. The verifier receives outcome-level reward for whether its final judgment matches rule-derived correctness, plus structural-format reward. No gold step labels are used in the main training run.
  _Recipe signal:_ teacher: Llama-3.1-70B-Instruct generates initial SFT responses. During RL there is no frozen process-label teacher; generator and verifier create evolving trajectories while gold final answers anchor outcomes.; generator: The generator emits tagged multi-step solutions; the generative verifier emits natural-language analysis, one binary judgment per step, and a final judgment. Both are updated by policy-gradient RL in a 3-to-1 cycle.
  _Audit focus:_ Generator and verifier can co-adapt to shared stylistic or structural shortcuts that fail under independent evaluation., Verifier step judgments receive no direct correctness labels; plausible but inaccurate step rationales can earn reward., Final-answer extraction can produce false positives or negatives for equivalent expressions, malformed boxes or invalid reasoning.
  _Why it matters:_ It exposes an online data contract for co-training reasoning policies and verifiers while highlighting risks from co-adaptation, latent process-label accuracy, answer-checker brittleness and missing trajectories/checkpoints.
- 📦 **[SynLogic: Synthesizing Verifiable Reasoning Data at Scale for Learning Logical Reasoning and Beyond](https://openreview.net/forum?id=XtNiw8OQsy)**
  <sub>2025 · NeurIPS 2025 · 📦 data release · 🏗️ construction recipe · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=XtNiw8OQsy) · [arXiv](https://arxiv.org/abs/2505.19641) · [DOI](https://doi.org/10.48550/arXiv.2505.19641) · [Code](https://github.com/MiniMax-AI/SynLogic) · [Data](https://huggingface.co/datasets/MiniMaxAI/SynLogic) · [Card](../../cards/recipes/synlogic.md)
  _Data object:_ Chat-style prompt plus task-specific reference answer and solution fields; RL responses must use think and answer tags around the reasoning and final answer.; process: data source task identifier, chat-style prompt, ability label; Task-specific rule-based generators and verifiers, with DAPO-adapted GRPO training and separate Easy and Hard dataset configurations.
  _Feedback / verifier:_ Binary reward requires both the prescribed think/answer format and acceptance of the final answer by the task-specific rule verifier.
  _Recipe signal:_ teacher: DeepSeek R1 and OpenAI-o3-mini calibrate upper difficulty bounds; unspecified chat models calibrate lower bounds. They are not disclosed as reasoning-trace teachers.; generator: Manually implemented rule-based generators for 33 tasks; Zebra Puzzle and ARC-AGI data are adopted from existing open resources.
  _Audit focus:_ The viewer's default Easy configuration exposes 27 data source values, while the full Hard release and paper framework cover 35; failing to record the configuration can produce a false coverage discrepancy., Official revision history records duplicate ARC-AGI prompts, duplicate Easy prompts, and Boolean Expressions data or generator repairs., Official issues report missing or empty answers and a currently missing Cipher generation script; issue reports require task-level confirmation before reuse.
  _Why it matters:_ It makes logical-reasoning data construction operational by connecting task sourcing, difficulty calibration, executable verification, release variants, and DAPO-style RL, while its revision history shows why dataset version pinning and verifier audits are necessary.
- 📦 **[Unleashing LLM Reasoning Capability via Scalable Question Synthesis from Scratch](https://aclanthology.org/2025.acl-long.658/)**
  <sub>2025 · ACL 2025 · 📦 data release · 🏗️ construction recipe · judgment required · sft · distillation · L3_summary_ready</sub>
  [Paper](https://aclanthology.org/2025.acl-long.658/) · [arXiv](https://arxiv.org/abs/2410.18693) · [DOI](https://doi.org/10.18653/v1/2025.acl-long.658) · [Code](https://github.com/yyDing1/ScaleQuest) · [Data](https://huggingface.co/datasets/dyyyyyyyy/ScaleQuest-Math) · [Project](https://scalequest.github.io/)
  _Data object:_ A mathematical problem in query and a selected natural-language step-by-step solution in response, typically ending with a final answer.; process: generated question, generated chain-of-thought response, internal generator branch, not released; Offline synthetic-data pipeline with QFT, DPO-style QPO, question filtering, response generation, reward-model reranking, and DART-Math instruction tuning.
  _Feedback / verifier:_ Qwen2-Math-7B-Instruct supplies solvability judgments, a learned DeepSeekMath-7B-Base scorer predicts question difficulty, and InternLM2-7B-Reward ranks five candidate responses.
  _Recipe signal:_ teacher: External optimization models evaluated for QPO include GPT-4o-mini, Llama3.1-70B-Instruct, and Qwen2-Math-7B-Instruct; exact row-level optimizer lineage is not released.; generator: DeepSeekMath-QGen and Qwen2-Math-QGen generate 1M candidate questions each; Qwen2-Math-7B-Instruct generates response candidates.
  _Audit focus:_ The released file omits generator identity, preference lineage, filter decisions, difficulty scores, candidate responses, reward scores, and rejection reasons., Rejected questions from the 2M candidate pool and four non-selected solutions per accepted question are not released., Model-based solvability filtering can retain nonsensical, underspecified, or internally inconsistent questions.
  _Why it matters:_ It provides an executable alternative to proprietary teacher-driven synthesis by separating question-generator activation, preference optimization, question filtering, solution generation, and reward reranking, while exposing clear audit needs around rejected data and reward-selected traces.
- 📦 **[VersaPRM: Multi-Domain Process Reward Model via Synthetic Reasoning Data](https://proceedings.mlr.press/v267/zeng25h.html)**
  <sub>2025 · ICML 2025 · 📦 data release · 🧪 verifier reward · judgment required · reward modeling · process supervision · L3_summary_ready</sub>
  [Paper](https://proceedings.mlr.press/v267/zeng25h.html) · [arXiv](https://arxiv.org/abs/2502.06737) · [OpenReview](https://openreview.net/forum?id=l19DmXbwPK) · [Code](https://github.com/UW-Madison-Lee-Lab/VersaPRM) · [Data](https://huggingface.co/datasets/UW-Madison-Lee-Lab/MMLU-Pro-CoT-Train-Labeled) · [HF](https://huggingface.co/collections/UW-Madison-Lee-Lab/versaprm)
  _Data object:_ Ten-choice multiple-choice question plus a step-delimited chain of thought ending with a parsed final option.; process: question, answer, category; MMLU-Pro multiple-choice questions spanning 14 domains.
  _Feedback / verifier:_ Llama-3.1-70B-Instruct receives the question, ground-truth answer, reference explanation and indexed steps, then identifies the earliest BAD step. Released labels use 1 before and -1 from the earliest error through the suffix.
  _Recipe signal:_ teacher: Llama-3.1-70B-Instruct auto-labeler with ground-truth answer, reference explanation and GOOD/OK/BAD rubric.; generator: Llama-3.1-8B-Instruct via AWS Bedrock.
  _Audit focus:_ The paper says post-error steps are discarded, but official parser and released data retain the suffix and label it -1., Human validation covers only 30 questions and 90 selected CoTs, with 83% positive and 70% negative agreement and no per-domain confidence intervals., Earliest-error propagation marks the whole suffix negative and cannot represent later recovery.
  _Why it matters:_ It releases an end-to-end non-math-specific process-supervision pipeline while exposing judge accuracy, suffix propagation, style bias, calibration, source licensing and decontamination as audit risks.
- 📦 **[rStar-Coder: Scaling Competitive Code Reasoning with a Large-Scale Verified Dataset](https://papers.nips.cc/paper_files/paper/2025/hash/54e847e1dffc87a8063844b149148557-Abstract-Conference.html)**
  <sub>2025 · NeurIPS 2025 · 📦 data release · 🏗️ construction recipe · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://papers.nips.cc/paper_files/paper/2025/hash/54e847e1dffc87a8063844b149148557-Abstract-Conference.html) · [arXiv](https://arxiv.org/abs/2505.21297) · [Code](https://papers.nips.cc/paper_files/paper/2025/file/54e847e1dffc87a8063844b149148557-Supplemental-Conference.zip) · [Data](https://huggingface.co/datasets/microsoft/rStar-Coder) · [Project](https://github.com/microsoft/rStar) · [Card](../../cards/releases/rstar-coder.md)
  _Data object:_ SFT records contain a programming question, long-CoT response, and implementation code. RL records separate problems from input-output test cases. Seed records may include starter code and solution-level verified/is passed booleans.; process: question id, question, seed question; Competitive-programming execution for standard-input/output and function-based tasks, with generated inputs spanning multiple scales; reuse requires isolated untrusted-code execution.
  _Feedback / verifier:_ For seed problems, oracle solutions label generated outputs and candidate code is checked against tests. For synthetic problems, 16 QWQ-32B solutions are executed on at least 50 shared inputs and consistent complete output sets are selected by agreement.
  _Recipe signal:_ teacher: GPT-4o for problem synthesis; GPT-4o and DeepSeek-V3 for test-input utility functions; QWQ-32B for long-reasoning candidate solutions.; generator: Seed problems and oracle solutions drive transformed problem synthesis, constraint-aware test generation, and QWQ-32B executable long-CoT generation.
  _Audit focus:_ Mutually generated solutions can share systematic errors and converge on an incorrect output set; reported accuracy drops from 96.8 to 92.8 percent in the larger comparison., The 40 percent threshold for difficult Codeforces-derived problems is below a strict majority., Seed problems for which no QWQ-32B candidate passes retain all generated solutions, so seed sft is not uniformly verified.
  _Why it matters:_ It provides a rare operational recipe for scaling difficult code reasoning data and programmatic rewards, while exposing reuse risks around false consensus, retained unverified seed traces, source licensing, config linkage, and mismatch between the published mixture and current repository.
- 📦 **[DART-Math: Difficulty-Aware Rejection Tuning for Mathematical Problem-Solving](https://proceedings.neurips.cc/paper_files/paper/2024/hash/0ef1afa0daa888d695dcd5e9513bafa3-Abstract-Conference.html)**
  <sub>2024 · NeurIPS 2024 · 📦 data release · 🏗️ construction recipe · programmatic · sft · L4_carded</sub>
  [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/0ef1afa0daa888d695dcd5e9513bafa3-Abstract-Conference.html) · [arXiv](https://arxiv.org/abs/2407.13690) · [DOI](https://doi.org/10.52202/079017-0251) · [Code](https://github.com/hkust-nlp/dart-math) · [Data](https://huggingface.co/datasets/hkust-nlp/dart-math-hard) · [HF](https://huggingface.co/collections/hkust-nlp/dart-math) · [Card](../../cards/releases/dart_math.md)
  _Data object:_ Uniform and Hard release query/response pairs; supplementary pools expose correctness and sampling metadata.; process: query, response, answer correctness; Offline difficulty-aware rejection sampling followed by instruction tuning.
  _Feedback / verifier:_ Regex extraction and SymPy symbolic calculation.
  _Recipe signal:_ teacher: DeepSeekMath-7B-RL.; generator: DeepSeekMath-7B-RL via vLLM.
  _Audit focus:_ Final-answer correctness does not prove CoT validity, difficulty is generator-dependent, some GSM8K labels are erroneous
  _Why it matters:_ It exposes how verifier-filtered acceptance, estimated difficulty, and SFT distribution interact.
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
- 🧰 **VisualWebArena: Evaluating multimodal agents on realistic visual web tasks**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L0_seeded</sub>
  needs_search
  _Data object:_ visual web tasks with screenshots and browser state
  _Feedback / verifier:_ task success checks
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Extends WebArena-style evaluation toward visual web interaction, useful when reasoning data includes screenshots and UI state.

## 6. What to Audit

- Which objective consumes the data: SFT, distillation, DPO, RM, PRM, RLVR, agent imitation, evaluation, or audit?
- Is the same data reused across training, validation, reward modeling, and evaluation?
- Are objective-specific fields preserved rather than collapsed into a generic prompt-answer pair?

## 7. Open Problems

- Which objective-specific metadata should be mandatory in paper cards?
- How can a repository detect unsafe reuse across training and evaluation?
- When should a benchmark be treated as a feedback source rather than only an evaluation surface?
- How should contributors tag multi-use frontier reports?

## 8. Related Cards

- [Absolute Zero: Reinforced Self-play Reasoning with Zero Data](../../cards/recipes/absolute_zero.md)
- [AbstentionBench](../../cards/benchmarks/abstentionbench.md)
- [Aegis2.0](../../cards/verifiers/aegis2.md)
- [DAPO: An Open-Source LLM Reinforcement Learning System at Scale](../../cards/releases/dapo.md)
- [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](../../cards/recipes/deepseek-prover-v2.md)
- [DeepSeek-R1](../../cards/recipes/deepseek_r1.md)
- [HealthBench](../../cards/verifiers/healthbench.md)
- [Kimi K1.5: Scaling Reinforcement Learning with LLMs](../../cards/recipes/kimi_k15.md)
- [KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](../../cards/releases/kodcode.md)
- [LIMO: Less Is More for Reasoning](../../cards/releases/limo.md)
- [Leaky Thoughts](../../cards/failures/leaky-thoughts.md)
- [Magistral](../../cards/recipes/magistral.md)
- [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](../../cards/recipes/minimax_m1.md)
- [NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](../../cards/releases/naturalreasoning.md)
- [One Token to Fool LLM-as-a-Judge](../../cards/verifiers/one_token_to_fool_judge.md)
- [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](../../cards/releases/opencodereasoning_ii.md)
- [OpenCodeReasoning: Advancing Data Distillation for Competitive Coding](../../cards/releases/opencodereasoning.md)
- [OpenMathReasoning: A large-scale dataset of math reasoning traces](../../cards/releases/openmathreasoning.md)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
