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
| [LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Paper Card Source](../../paper_cards/sources/leandojo-theorem-proving-with-retrieval-augmented-language-models-2023) | Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories. | Lean checker and environment feedback. | It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record. |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [Paper Card Source](../../paper_cards/sources/prm800k-2023) | step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces | process reward model trained from step labels | It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation. |
| [Measuring coding challenge competence with APPS](https://arxiv.org/abs/2105.09938) | 2021 | [Paper](https://arxiv.org/abs/2105.09938) · [OpenReview](https://openreview.net/forum?id=sD93GOzH3i5) · [Code](https://github.com/hendrycks/apps) · [Paper Card Source](../../paper_cards/sources/measuring-coding-challenge-competence-with-apps-2021) | Python code submission evaluated against test cases.; process: difficulty, prompt, starter code where available, generated solution, public/hidden test outcomes.; offline programming benchmark with executable Python tests. | unit-test pass/fail signal. | It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome. |
| [Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874) | 2021 | [Paper](https://arxiv.org/abs/2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/sources/measuring-mathematical-problem-solving-with-the-math-dataset-2021) | answer level | programmatic | MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems. |
| [miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110) | 2021 | [Paper](https://arxiv.org/abs/2109.00110) · [OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021) | formal proof accepted by a target proof assistant.; process: formal system, theorem statement, split, generated proof/tactics, verifier result.; Lean, Metamath, Isabelle, and HOL Light style theorem proving environments. | proof assistant kernel/checker acceptance. | It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof. |
| [Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://arxiv.org/abs/2501.09004) | 2025 | [Paper](https://arxiv.org/abs/2501.09004) · [Venue](https://aclanthology.org/2025.naacl-long.306/) · [DOI](https://doi.org/10.18653/v1/2025.naacl-long.306) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) | prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: prompt, response, top level hazard category; offline guardrail training/evaluation dataset. | risk taxonomy labels, human annotations, multi-LLM jury judgments, and guard-model evaluation signal. | It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification. |
| [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) | 2025 | [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) | subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline. | Lean verification and RL reward over formal proof success. | It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification. |
| [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | 2025 | [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) | reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus | filters, benchmark feedback, and recipe ablations | It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance. |
| [DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333) | 2024 | [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1) | Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness. | Lean kernel/checker acceptance. | It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object. |
| [Magicoder: Empowering code generation with OSS-instruct](https://arxiv.org/abs/2312.02120) | 2024 | [Paper](https://arxiv.org/abs/2312.02120) · [PMLR](https://proceedings.mlr.press/v235/wei24h.html) · [Code](https://github.com/ise-uiuc/magicoder) · [Data](https://huggingface.co/datasets/ise-uiuc/Magicoder-OSS-Instruct-75K) · [HF](https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B) | instruction-response coding example, often linked to a code reference or task scaffold.; process: source snippet, generated instruction, solution response, model family, benchmark result.; offline code-data generation and code benchmark evaluation. | coding benchmark pass rates and optional executable checks. | It is a strong code-data construction example because it grounds synthetic coding instructions in real open-source references rather than free-floating prompt invention. |

## 5. Full Paper List

### <a id="sft-instruction-tuning"></a>🧱 SFT / instruction tuning

- 🏗️ **[s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · mixed · sft · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.19393)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; scaling report; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a useful counterpoint to massive-data recipes: careful small-set curation plus inference-budget control can materially change reasoning performance.
- 📦 **[DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333)**
  <sub>2024 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · environmental · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1)
  _Data object:_ Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness.
  _Feedback / verifier:_ Lean kernel/checker acceptance.
  _Recipe signal:_ teacher: formalization and proof-generation pipeline with Lean feedback.; generator: synthetic data pipeline translates informal math into formal statements and proofs.
  _Audit focus:_ Formal statements can be wrong even if proofs verify., Pass@k hides low single-shot reliability., Lean/mathlib version drift can break reproducibility.
  _Why it matters:_ It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object.
- 🏗️ **[Magicoder: Empowering code generation with OSS-instruct](https://arxiv.org/abs/2312.02120)**
  <sub>2024 · ICML · 🏗️ construction recipe · 📦 data release · programmatic · mixed · sft · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2312.02120) · [PMLR](https://proceedings.mlr.press/v235/wei24h.html) · [Code](https://github.com/ise-uiuc/magicoder) · [Data](https://huggingface.co/datasets/ise-uiuc/Magicoder-OSS-Instruct-75K) · [HF](https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B)
  _Data object:_ instruction-response coding example, often linked to a code reference or task scaffold.; process: source snippet, generated instruction, solution response, model family, benchmark result.; offline code-data generation and code benchmark evaluation.
  _Feedback / verifier:_ coding benchmark pass rates and optional executable checks.
  _Recipe signal:_ teacher: GPT-3.5-series teacher model for synthetic instruction generation.; generator: OSS-Instruct prompts the teacher with open-source code snippets.
  _Audit focus:_ Synthetic code tasks can inherit license issues., Reference snippets may leak benchmark patterns., Teacher-generated solutions can be plausible but wrong.
  _Why it matters:_ It is a strong code-data construction example because it grounds synthetic coding instructions in real open-source references rather than free-floating prompt invention.
- 📦 **[OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560)**
  <sub>2024 · ICLR · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2410.01560) · [OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [Code](https://github.com/NVIDIA-NeMo/Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/)
  _Data object:_ problem-solution pair with natural-language mathematical reasoning and final answer.; process: source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.; NVIDIA NeMo-Skills generation, training, and evaluation pipeline.
  _Feedback / verifier:_ answer checks and benchmark evaluation over math tasks.
  _Recipe signal:_ teacher: Llama3.1-405B-Instruct generates large-scale math solutions.; generator: NeMo-Skills pipeline performs problem/solution augmentation and model training.
  _Audit focus:_ Synthetic solutions can encode teacher shortcuts., Large scale can hide duplicated or near-duplicated questions., Verbose traces may hurt rather than help SFT.
  _Why it matters:_ It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models.
- 🚀 **[Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2409.12122) · [Code](https://github.com/QwenLM/Qwen2.5-Math) · [HF](https://huggingface.co/Qwen/Qwen2.5-Math-7B) · [Project](https://qwenlm.github.io/blog/qwen2.5-math/)
  _Data object:_ math solution, final answer, optional tool/code execution trace, and reward-model score.; process: model stage, problem source, reasoning mode, tool use, answer, reward score, benchmark result.; Qwen math model family, GitHub evaluation scripts, and Hugging Face model releases.
  _Feedback / verifier:_ math answer checks, reward model signals, and benchmark evaluations.
  _Recipe signal:_ teacher: self-improvement pipeline and math reward/evaluation signals.; generator: math-specialized models generate solutions and tool-integrated traces.
  _Audit focus:_ Tool-integrated results are not comparable to no-tool results., Reward models can favor format over proof validity., Model-family reports can blur data and inference effects.
  _Why it matters:_ It is a useful model-report case where math post-training data, reward models, tool-integrated reasoning, and multilingual math evaluation are tied together.
- 🚀 **[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · programmatic · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical)
  _Data object:_ instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt; open-instruct training/evaluation stack and Hugging Face dataset/model releases.
  _Feedback / verifier:_ mixture of preference labels, reward models, and verifiable rewards depending on stage.
  _Recipe signal:_ teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.; generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
  _Audit focus:_ Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., Preference labels, reward models, and verifiable rewards should not be collapsed into one feedback type.
  _Why it matters:_ It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.
- 🏗️ **[Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560)**
  <sub>2023 · ACL · 🏗️ construction recipe · 📦 data release · mixed · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.10560)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; trace writing; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion.
- 🏗️ **[Toolformer: Language models can teach themselves to use tools](https://arxiv.org/abs/2302.04761)**
  <sub>2023 · NeurIPS · 🏗️ construction recipe · 🌐 agent environment · mixed · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2302.04761) · [OpenReview](https://openreview.net/forum?id=Yacmpz84TH)
  _Data object:_ text sequence with inserted API call and tool result markup.; process: candidate call location, API name, arguments, tool output, likelihood improvement, retained annotation.; external tool APIs used during data construction and evaluation.
  _Feedback / verifier:_ language-model likelihood improvement after including tool result.
  _Recipe signal:_ teacher: small hand-written demonstrations per tool seed the API-call format.; generator: model samples candidate tool calls over raw text.
  _Audit focus:_ Likelihood improvement may not equal truthful tool use., Tools can return stale or wrong outputs., The model can learn call syntax without robust tool-selection judgment.
  _Why it matters:_ It is a classic construction recipe for tool-call supervision: models learn when to call tools, what arguments to pass, and how to fold observations back into text.
- 📦 **[UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377)**
  <sub>2023 · ICML · 📦 data release · 🧪 verifier reward · judgment required · preference learning · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.01377) · [Code](https://github.com/OpenBMB/UltraFeedback) · [Data](https://huggingface.co/datasets/openbmb/UltraFeedback)
  _Data object:_ instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline.
  _Feedback / verifier:_ AI-generated scalar and textual feedback over response quality dimensions.
  _Recipe signal:_ teacher: AI judge annotations and rubric instructions.; generator: candidate responses are sampled from a diverse model pool.
  _Audit focus:_ AI feedback can encode judge-model bias., A corrected dataset version can change reward-model behavior., Fine-grained scores may not translate cleanly into pairwise preferences.
  _Why it matters:_ It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels.
- 🏗️ **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.14465)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ trace writing; self play anchor; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering.
- 🧭 **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · judgment required · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.02155)
  _Data object:_ pairwise preference; scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ prompt sourcing; reward verifier layer; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models.
- 📦 **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · programmatic · rlvr · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.17387)
  _Data object:_ math problem, answer, and verification signal; process: problem, answer, verification label; offline math verifier substrate
  _Feedback / verifier:_ answer-level math verifier
  _Recipe signal:_ prompt sourcing; reward verifier layer; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- 📦 **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.02951)
  _Data object:_ question-solution-test triplet; process: problem, solution, unit tests; code execution and unit-test substrate
  _Feedback / verifier:_ test-based self-verification
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
- 📦 **[LIMO: Less Is More for Reasoning](https://arxiv.org/abs/2502.03387)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.03387)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; sft; distillation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Small-set curation reference distinguishing elicitation from broad coverage.
- 🚀 **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.00949)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; sft; distillation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- 📦 **[NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](https://arxiv.org/abs/2502.13124)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.13124)
  _Data object:_ question with reference answer or reasoning target; process: question, reference answer, domain label; offline natural-language tasks
  _Feedback / verifier:_ reference answers, reward models, or self-rewarding depending on split
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.
- 📦 **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.09075)
  _Data object:_ question-solution-critique triple; process: solution, critique, language/runtime label; coding benchmark / compiler substrate
  _Feedback / verifier:_ tests and critique model signals
  _Recipe signal:_ trace writing; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- 📦 **[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16891)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ prompt sourcing; trace writing; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale math reasoning trace release for programmatic verification.
- 🚀 **[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)**
  <sub>2025 · arXiv · 🚀 model report · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.09388)
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
  [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M)
  _Data object:_ reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus
  _Feedback / verifier:_ filters, benchmark feedback, and recipe ablations
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance.
- 🧯 **[Subliminal Learning](https://arxiv.org/abs/2507.14805)**
  <sub>2025 · arXiv · 🧯 audit failure · 🏗️ construction recipe · mixed · distillation · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2507.14805) · [Venue](https://www.nature.com/articles/s41586-026-10319-8) · [Code](https://github.com/MinhxLe/subliminal-learning) · [Project](https://subliminal-learning.com/)
  _Data object:_ generated data plus downstream behavioral evaluation of the student.; process: teacher identity, student base model, visible filtering policy, hidden trait evaluation.; distillation and synthetic-data training pipeline.
  _Feedback / verifier:_ trait probes after student training.
  _Recipe signal:_ teacher: model carrying a target trait or behavior.; generator: teacher outputs semantically unrelated data.
  _Audit focus:_ Data may look safe while carrying hidden traits., Lineage effects can be invisible from sample inspection., Distillation chains can propagate behavior across model generations.
  _Why it matters:_ It is a data-lineage warning for reasoning distillation: synthetic traces may carry hidden model traits that are invisible to content filters.
- 🏗️ **[Orca: Progressive learning from complex explanation traces of GPT-4](https://arxiv.org/abs/2306.02707)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 🚀 model report · judgment required · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.02707) · [Project](https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/)
  _Data object:_ instruction response with detailed explanation, intermediate reasoning, and final answer.; process: prompt source, teacher identity, explanation trace, task type, response, evaluation benchmark.; offline synthetic-data distillation and evaluation pipeline.
  _Feedback / verifier:_ downstream reasoning, exam, and benchmark evaluation rather than a single automatic verifier.
  _Recipe signal:_ teacher: large foundation models that produce explanation traces and stepwise guidance.; generator: teacher-assisted data-generation pipeline over diverse instructions.
  _Audit focus:_ Students can learn teacher style without robust reasoning., Synthetic traces can include teacher errors., Closed teacher data makes lineage hard to audit.
  _Why it matters:_ It is an early and influential reasoning-distillation recipe: the reusable object is teacher-assisted explanation data plus careful evaluation against style-only imitation.
- 🚀 **[Phi-4-reasoning Technical Report](https://arxiv.org/abs/2504.21318)**
  <sub>2025 · arXiv · 🚀 model report · mixed · distillation · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.21318)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ trace writing; frontier pipeline; distillation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reasoning model report highlighting teacher distillation as trace writing.

### <a id="preference-optimization"></a>⚖️ Preference optimization

- 🧭 **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · judgment required · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.18290)
  _Data object:_ pairwise preference
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ optimizer scaffold; preference learning
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization.
- 🧯 **[How Well Can Preference Optimization Generalize Under Noisy Feedback?](https://arxiv.org/abs/2510.01458)**
  <sub>2025 · TMLR 2026 · 🧯 audit failure · 🏗️ construction recipe · judgment required · mixed · audit · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2510.01458) · [DOI](https://doi.org/10.48550/arXiv.2510.01458)
  _Data object:_ prompt, preferred response, dispreferred response, noisy preference label, noise model; process: prompt, chosen response, rejected response; offline noisy-preference learning analysis
  _Feedback / verifier:_ noisy preference label model covering mislabeling and uncertainty
  _Recipe signal:_ teacher: noisy preference feedback model; filtering rule: analyze how preference optimization behaves under different feedback noise models rather than releasing a new filtering pipeline
  _Audit focus:_ Modeled noise may not fully capture real annotator disagreement or preference pluralism., Finite-step theoretical guarantees depend on assumptions about the preference distribution and noise process., Empirical validation should not be treated as a released preference dataset.
  _Why it matters:_ It gives Preference & Reward Feedback curators an audit lens for noisy labels instead of assuming preference pairs are clean.
- 🏗️ **[Process-based Self-Rewarding Language Models](https://arxiv.org/abs/2503.03746)**
  <sub>2025 · ACL Findings 2025 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · mixed · preference learning · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.03746) · [DOI](https://doi.org/10.48550/arXiv.2503.03746) · [Code](https://github.com/Shimao-Zhang/Process-Self-Rewarding) · [Data](https://github.com/Shimao-Zhang/Process-Self-Rewarding/tree/master/data)
  _Data object:_ math problem, long-thought trace, segmented reasoning step, candidate next steps, chosen/rejected step pair, step-wise judge explanation, and final answer.; process: problem, long thought trace, previous steps; iterative process-based self-rewarding pipeline for mathematical reasoning.
  _Feedback / verifier:_ step-wise LLM-as-a-judge self-reward with pairwise comparison over candidate reasoning steps.
  _Recipe signal:_ teacher: Qwen2.5-72B process reward model trained on PRM800K; OpenAI o1 for step segmentation and detailed judgment generation.; generator: model-generated long-thought reasoning traces, MCTS step candidates, and step-wise self-judge comparisons.
  _Audit focus:_ Step-wise judges may reward surface reasoning style instead of valid reasoning., Long-thought traces can contain plausible but incorrect intermediate steps., Self-generated process rewards can amplify the model's own reasoning blind spots.
  _Why it matters:_ It connects Preference & Reward Feedback Data with process supervision by making self-generated step judgments part of the reward object.
- 🏗️ **[RE-PO: Robust Enhanced Policy Optimization as a General Framework for LLM Alignment](https://arxiv.org/abs/2509.24159)**
  <sub>2025 · ICLR 2026 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · mixed · preference learning · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2509.24159) · [DOI](https://doi.org/10.48550/arXiv.2509.24159) · [Code](https://github.com/XiaoyangCao1113/RE-PO) · [Project](https://repo-alignment.github.io/)
  _Data object:_ prompt, preferred response, dispreferred response, observed preference label, inferred label-confidence weight; process: prompt, chosen response, rejected response; offline noisy-preference optimization
  _Feedback / verifier:_ EM-estimated label correctness and annotator reliability over observed preference labels
  _Recipe signal:_ teacher: observed preference labels with latent correctness inferred by EM; filtering rule: adaptively down-weight suspected corrupted labels through posterior confidence instead of discarding all noisy labels
  _Audit focus:_ Latent clean-label assumptions may not match real annotator disagreement., Posterior confidence can be miscalibrated if the policy model is poorly calibrated., Synthetic noise robustness does not prove robustness to all human preference ambiguity.
  _Why it matters:_ It gives the Preference & Reward Feedback track an explicit treatment of noisy preference labels instead of assuming all chosen/rejected pairs are equally reliable.
- 🏗️ **[Test-Time Preference Optimization: On-the-Fly Alignment via Iterative Textual Feedback](https://arxiv.org/abs/2501.12895)**
  <sub>2025 · ICML 2025 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.12895) · [DOI](https://doi.org/10.48550/arXiv.2501.12895) · [Code](https://github.com/yafuly/TPO)
  _Data object:_ query, sampled candidate responses, reward-model scores, textual loss/critique, textual gradient, refined response; process: query, sampled responses, reward model score; test-time inference loop without parameter updates
  _Feedback / verifier:_ FsfairX-LLaMA3-RM-v0.1; Llama-3.1-Tulu-3-8B-RM for unaligned-model setting
  _Recipe signal:_ teacher: reward model feedback translated into textual critiques through TextGrad-style prompts; generator: policy model sampled through vLLM at test time
  _Audit focus:_ Reward-model feedback can be overfit at inference time., Textual critiques may encode reward-model artifacts rather than human preference., Benchmark improvements should not be treated as data-quality proof.
  _Why it matters:_ It belongs in Preference & Reward Feedback as a test-time feedback recipe where reward signals become textual supervision rather than offline training examples.
- 🏗️ **[When Data is the Algorithm: A Systematic Study and Curation of Preference Optimization Datasets](https://arxiv.org/abs/2511.10985)**
  <sub>2025 · ICLR 2026 · 🏗️ construction recipe · 🧯 audit failure · judgment required · mixed · preference learning · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2511.10985) · [OpenReview](https://openreview.net/forum?id=bmoh0i1nqE) · [DOI](https://doi.org/10.48550/arXiv.2511.10985) · [Data](https://huggingface.co/datasets/aladinDJ/ultramix-DPO-annotated)
  _Data object:_ prompt, chosen response, rejected response, task/category annotation, input-quality annotation, preference-reward validation signal, and curated-mixture membership; process: prompt, chosen response, rejected response; offline data-centric DPO corpus analysis and curation pipeline
  _Feedback / verifier:_ Magpie annotation plus reward-model-based preference validation
  _Recipe signal:_ teacher: Magpie labels from Llama-3.3-70B-Instruct plus FsfairX, a Llama-3-8B-Instruct-based reward model, for preference-reward validation.; generator: existing DPO datasets; the paper curates preference pairs rather than generating a new response corpus
  _Audit focus:_ Reward-model-based validation can inherit reward model blind spots., Curated mixtures may obscure source dataset licenses, prompt provenance, and filtering thresholds., Benchmark gains should not be treated as proof of intrinsic data quality.
  _Why it matters:_ It is directly relevant to Preference & Reward Feedback because it audits which preference records enter DPO-style training instead of treating all chosen/rejected pairs as interchangeable.
- 🏗️ **[Contrastive Preference Optimization: Pushing the Boundaries of LLM Performance in Machine Translation](https://arxiv.org/abs/2401.08417)**
  <sub>2024 · ICML 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2401.08417) · [DOI](https://doi.org/10.48550/arXiv.2401.08417) · [Code](https://github.com/fe1ixxu/ALMA)
  _Data object:_ source sentence, preferred translation, dis-preferred translation; process: source sentence, preferred translation, dispreferred translation; machine translation
  _Feedback / verifier:_ KIWI-XXL and XCOMET reference-free MT evaluation models; plus 1K internal human-labeled preference data
  _Recipe signal:_ teacher: KIWI-XXL and XCOMET score ensemble; internal human preference labels for enzh and ende; generator: ALMA-13B-LoRA, GPT-4, and gold reference translations form triplets
  _Audit focus:_ Machine-translation preference signals may not transfer to general dialogue alignment., Reference translations and automatic MT evaluators can encode systematic quality biases., WMT or other MT benchmark gains should not be treated as direct proof of data quality.
  _Why it matters:_ It broadens the Preference & Reward Feedback track beyond dialogue alignment by showing a domain-specific pairwise preference construction recipe for machine translation.
- 🏗️ **[KTO: Model Alignment as Prospect Theoretic Optimization](https://arxiv.org/abs/2402.01306)**
  <sub>2024 · ICML 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · mixed · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.01306) · [OpenReview](https://openreview.net/forum?id=iUwHnoENnl) · [DOI](https://doi.org/10.48550/arXiv.2402.01306) · [Code](https://github.com/ContextualAI/HALOs) · [HF](https://huggingface.co/collections/ContextualAI/archangel)
  _Data object:_ prompt-response examples with binary desirable/undesirable labels; process: prompt, response, desirable or undesirable label; offline preference-optimization recipe
  _Feedback / verifier:_ binary desirability feedback used by KTO
  _Recipe signal:_ teacher: binary desirable/undesirable labels, or preference datasets converted by treating preferred outputs as desirable and dispreferred outputs as undesirable; generator: policy/model responses from alignment datasets
  _Audit focus:_ Binary feedback is coarser than pairwise comparison., Class imbalance can change the effective preference objective., Prospect-theoretic utility assumptions should not be mistaken for data quality evidence.
  _Why it matters:_ It makes binary preference records a first-class data object for Preference & Reward Feedback curation.
- 🏗️ **[LiPO: Listwise Preference Optimization through Learning-to-Rank](https://arxiv.org/abs/2402.01878)**
  <sub>2024 · NAACL 2025 Findings · 🏗️ construction recipe · 🧪 verifier reward · judgment required · mixed · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.01878) · [DOI](https://doi.org/10.48550/arXiv.2402.01878)
  _Data object:_ ranked response list; process: prompt, ranked response list, response label or rank; offline preference-optimization recipe
  _Feedback / verifier:_ listwise ranking feedback from human, reward-model, or AI feedback rankings
  _Recipe signal:_ teacher: T5-XXL pairwise reward-ranking model; human-ranked responses for OpenAssistant experiment; generator: SFT policy sampled responses
  _Audit focus:_ Listwise rankings may be unstable or inconsistent across annotators and reward models., Projecting listwise rankings into weighted pairs can hide disagreement structure., Ranking-objective gains should not be treated as direct proof of data quality.
  _Why it matters:_ It is relevant to the Preference & Reward Feedback track because it treats preference supervision as a listwise data object rather than only chosen/rejected pairs.
- 🏗️ **[OPTune: Efficient Online Preference Tuning](https://arxiv.org/abs/2406.07657)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🧪 verifier reward · judgment required · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.07657) · [DOI](https://doi.org/10.48550/arXiv.2406.07657)
  _Data object:_ prompt, online sampled response pair, reward scores, selected preferred/rejected response pair; process: prompt, current policy response, regenerated response; online preference tuning loop
  _Feedback / verifier:_ Mistral-7B-backbone reward model fine-tuned by Xiong et al. and used for online response scoring
  _Recipe signal:_ teacher: Mistral-7B-backbone reward model; generator: current policy model in each online tuning iteration
  _Audit focus:_ Reward-model bias can drive both prompt selection and weighted training., Low-reward prompt selection may over-focus training on reward-model-specific failure modes., Training speedup and benchmark results should not be treated as proof of preference-label quality.
  _Why it matters:_ It adds an online preference-feedback recipe where the training data is an iterative stream of policy responses scored by a reward model.
- 🏗️ **[ORPO: Monolithic Preference Optimization without Reference Model](https://aclanthology.org/2024.emnlp-main.626/)**
  <sub>2024 · EMNLP 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · mixed · preference learning · L4_carded</sub>
  [Paper](https://aclanthology.org/2024.emnlp-main.626/) · [arXiv](https://arxiv.org/abs/2403.07691) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.626) · [Code](https://github.com/xfactlab/orpo) · [HF](https://huggingface.co/kaist-ai/mistral-orpo-beta)
  _Data object:_ instruction, chosen response, rejected response, and monolithic preference objective; process: instruction, chosen response, rejected response; offline reference-free preference optimization recipe
  _Feedback / verifier:_ pairwise preference consumed by ORPO odds-ratio objective
  _Recipe signal:_ teacher: pairwise preference dataset; generator: candidate model responses from source preference datasets
  _Audit focus:_ Single-stage training can blur SFT-data effect, preference-data effect, and objective effect., Odds-ratio penalties may reward length or formatting artifacts., Reference-free optimization still requires preference-pair provenance audit.
  _Why it matters:_ It shows how pairwise preference data can be folded into a single-stage alignment objective rather than a separate DPO/RLHF phase.
- 📦 **[Permutative Preference Alignment from Listwise Ranking of Human Judgments](https://arxiv.org/abs/2410.04346)**
  <sub>2024 · arXiv · 📦 data release · 🏗️ construction recipe · judgment required · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.04346) · [DOI](https://doi.org/10.48550/arXiv.2410.04346) · [Data](https://huggingface.co/datasets/NDCG-alignment/ListUltraFeedback)
  _Data object:_ multi-response list with ordinal reward labels; process: prompt, candidate response list, ordinal reward labels; offline listwise preference-optimization recipe
  _Feedback / verifier:_ ArmoRM scoring reward model; RLHFlow pair-preference/scoring models for evaluation
  _Recipe signal:_ teacher: ArmoRM reward model assigns ordinal labels; generator: UltraFeedback responses plus five responses from fine-tuned Llama3-8B model used in SimPO
  _Audit focus:_ Reward-model ordinal labels can encode ArmoRM-specific bias., NDCG weighting choices affect which ranking mistakes dominate training., Reported benchmark gains should not be treated as direct evidence that ordinal labels are clean.
  _Why it matters:_ It is a useful Preference & Reward Feedback entry because it exposes listwise ordinal feedback as a released data object, not only an optimization loss.
- 🏗️ **[Self-Play Preference Optimization for Language Model Alignment](https://arxiv.org/abs/2405.00675)**
  <sub>2024 · ICML 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.00675) · [DOI](https://doi.org/10.48550/arXiv.2405.00675) · [Code](https://github.com/uclaml/SPPO)
  _Data object:_ prompt with self-play candidate responses and PairRM-derived preference signal; process: prompt, self play response, competing response; offline preference-optimization recipe
  _Feedback / verifier:_ PairRM 0.4B preference model used as preference-probability oracle
  _Recipe signal:_ teacher: PairRM 0.4B preference model; generator: current policy model in iterative self-play
  _Audit focus:_ PairRM/oracle bias can be amplified through iterative self-play., Self-play responses are tied to the policy distribution used during construction., Downstream win rates should not be treated as direct evidence of data quality.
  _Why it matters:_ It is useful for the Preference & Reward Feedback track because it shows how preference data can be generated online from model self-play rather than only collected as static human pairwise comparisons.
- 🏗️ **[Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020)**
  <sub>2024 · ICML 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2401.10020) · [DOI](https://doi.org/10.48550/arXiv.2401.10020)
  _Data object:_ instruction prompt, candidate responses, self-generated score out of 5 with justification, chosen/rejected preference pair, and iteration id.; process: prompt, candidate response, self judgment; offline iterative self-feedback alignment pipeline.
  _Feedback / verifier:_ the policy model itself acts as LLM-as-a-judge to provide rewards.
  _Recipe signal:_ teacher: self-generated LLM-as-a-judge rewards initialized from OpenAssistant-derived evaluation fine-tuning data.; generator: Llama 2-Chat 70B generates augmented prompts; the current Self-Rewarding model generates candidate responses and self-evaluations.
  _Audit focus:_ Self-confirming reward loops can amplify model bias., The judge and policy share blind spots., Self-judgment can reward response style instead of substantive correctness.
  _Why it matters:_ It is a central RLAIF/synthetic-feedback recipe showing how reward labels can be generated by the same model family being optimized.
- 🏗️ **[SimPO: Simple Preference Optimization with a Reference-Free Reward](https://proceedings.neurips.cc/paper_files/paper/2024/hash/e099c1c9699814af0be873a175361713-Abstract-Conference.html)**
  <sub>2024 · NeurIPS 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · mixed · preference learning · L4_carded</sub>
  [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/e099c1c9699814af0be873a175361713-Abstract-Conference.html) · [arXiv](https://arxiv.org/abs/2405.14734) · [DOI](https://doi.org/10.48550/arXiv.2405.14734) · [Code](https://github.com/princeton-nlp/SimPO)
  _Data object:_ prompt/chosen/rejected preference pair consumed by SimPO margin objective; process: prompt, chosen response, rejected response; offline reference-free preference-optimization recipe
  _Feedback / verifier:_ implicit reward based on average log probability plus target reward margin
  _Recipe signal:_ teacher: pairwise preference labels from source preference datasets; generator: candidate model responses from source preference datasets
  _Audit focus:_ Average log probability and margin design can introduce length or format incentives., Reference-free reward still depends on pair quality and source distribution., Benchmark gains should not be treated as evidence that the source preference data is high quality.
  _Why it matters:_ It is a core Preference & Reward Feedback entry because it clarifies how pairwise preference records can be consumed without a separate reference model.
- 📦 **[Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](https://arxiv.org/abs/2406.18629)**
  <sub>2024 · arXiv · 📦 data release · 🏗️ construction recipe · judgment required · mixed · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.18629) · [DOI](https://doi.org/10.48550/arXiv.2406.18629) · [Code](https://github.com/dvlab-research/Step-DPO)
  _Data object:_ step-wise preferred/rejected reasoning continuations; process: problem, initial correct reasoning steps, preferred reasoning step; math long-chain reasoning
  _Feedback / verifier:_ step-level preference signal over reasoning continuations
  _Recipe signal:_ teacher: step-wise preference construction pipeline with manual or GPT-4 error localization; generator: initial/model policy generates step-by-step erroneous and rectified reasoning candidates
  _Audit focus:_ A locally preferred reasoning step may not guarantee final-answer correctness., Self-generated reasoning can preserve model-specific style and error patterns., Benchmark gains should not be treated as proof of preference-label quality.
  _Why it matters:_ It bridges Preference & Reward Feedback Data and Process / Trace Supervision Data by making the preference unit an intermediate reasoning step rather than a whole answer.
- 🧯 **[Understanding Likelihood Over-optimisation in Direct Alignment Algorithms](https://arxiv.org/abs/2410.11677)**
  <sub>2024 · arXiv · 🧯 audit failure · 🏗️ construction recipe · judgment required · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.11677) · [DOI](https://doi.org/10.48550/arXiv.2410.11677)
  _Data object:_ direct alignment traces, preferred/non-preferred completions, likelihood diagnostics, entropy and top-k probability-mass indicators; process: prompt, preferred completion, non preferred completion; offline direct-alignment likelihood-overoptimization audit
  _Feedback / verifier:_ preference objective plus reward-model / LLM-as-judge likelihood and diversity diagnostics
  _Recipe signal:_ teacher: preference labels consumed by DPO, IPO, and Hinge-style direct alignment objectives; generator: direct alignment algorithms produce trained policy outputs
  _Audit focus:_ Higher likelihood of preferred completions can correlate with memorization rather than better generalization., Likelihood margin may be misread as alignment quality., Entropy and top-k probability-mass indicators are diagnostics, not direct human-preference labels.
  _Why it matters:_ It warns that increasing preferred-completion likelihood can reduce diversity and generalization instead of monotonically improving alignment.

### <a id="reward-modeling-orm"></a>🎚️ Reward modeling / ORM

- 🧪 **[CompassJudger-2: Towards Generalist Judge Model via Verifiable Rewards](https://arxiv.org/abs/2507.09104)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · programmatic · judgment required · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.09104) · [DOI](https://doi.org/10.48550/arXiv.2507.09104) · [Code](https://github.com/open-compass/CompassJudger) · [HF](https://huggingface.co/opencompass/CompassJudger-2-7B-Instruct)
  _Data object:_ pointwise score, pairwise choice, critique, structured judge output, or judgment reasoning path.; process: prompt, response, response a; open-source generalist judge model and JudgerBenchV2 evaluation setting
  _Feedback / verifier:_ rule-based reward over final prediction correctness plus CompassJudger-2 judge outputs
  _Recipe signal:_ teacher: Qwen2.5-72B-Instruct for data reconstruction, judgment synthesis, and quality filtering; rule-based verified reward for final prediction correctness.; generator: Qwen2.5-72B-Instruct for public reward-data judgments, knowledge-based dataset judgments, and chat-based style-sensitive response-pair judgments.
  _Audit focus:_ Verifiable rewards may bias coverage toward tasks with easy automatic checks., Generalist judge performance on benchmarks is not proof of reliable reward use in training., Exact training mixture, rejection-sampling details, and prompt templates need artifact-level audit.
  _Why it matters:_ It connects Preference & Reward Feedback with verifiable-reward supervision for judge models, while highlighting coverage risk when verifiers favor automatically checkable tasks.
- 📦 **[HelpSteer3-Preference: Open Human-Annotated Preference Data across Diverse Tasks and Languages](https://arxiv.org/abs/2505.11475)**
  <sub>2025 · NeurIPS 2025 Datasets and Benchmarks Track · 📦 data release · 🧪 verifier reward · judgment required · reward modeling · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.11475) · [Venue](https://neurips.cc/virtual/2025/loc/san-diego/poster/121485) · [DOI](https://doi.org/10.48550/arXiv.2505.11475) · [Code](https://github.com/NVIDIA/NeMo-Aligner) · [Data](https://huggingface.co/datasets/nvidia/HelpSteer3)
  _Data object:_ preference record with conversation context, response1, response2, domain, language/code metadata, overall preference score, and individual preference annotations with short justifications.; process: domain, language, context; offline human-annotated preference dataset released on Hugging Face as the preference subset of nvidia/HelpSteer3
  _Feedback / verifier:_ 3-5 independent specialist human preference annotations per sample, post-processed into an overall preference score from -3 to 3.
  _Recipe signal:_ teacher: specialist human annotators; Scale AI for General/STEM/Code and Translated for Multilingual.; generator: 17 commercially permissive models including Nemotron, Gemma/Gemma 2, Mistral-family models, Phi 3, IBM Granite, and Snowflake Arctic.
  _Audit focus:_ Specialist human annotations are higher quality than generic crowdsourcing but still encode vendor, geography, language, and task-population assumptions., General/STEM/Code and Multilingual subsets use different annotation vendors, and the paper notes different preference distributions across vendors/subsets., Preference score aggregation and high-disagreement filtering can remove subjective or ambiguous tasks that may matter in real deployments.
  _Why it matters:_ It is a strong Preference & Reward Feedback candidate because it exposes specialist human preference annotations, task/language/domain metadata, released data, and demonstrated use for Bradley-Terry reward models, generative reward models, and RLHF policy alignment.
- 🧪 **[R3: Robust Rubric-Agnostic Reward Models](https://arxiv.org/abs/2505.13388)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · judgment required · mixed · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.13388) · [DOI](https://doi.org/10.48550/arXiv.2505.13388) · [Code](https://github.com/rubricreward/r3) · [Data](https://github.com/rubricreward/r3/tree/main/data) · [HF](https://huggingface.co/rubricreward/R3-Qwen3-14B-LoRA-4k) · [Project](https://rubricreward.github.io)
  _Data object:_ instruction, task description, input, response or response pair, evaluation rubric, score, and reasoning or explanation.; process: instruction, task description, input; offline rubric-conditioned reward-model training and evaluation pipeline.
  _Feedback / verifier:_ R3 reward model produces interpretable reasoned score assignments across point-wise, pair-wise, and binary evaluation formats.
  _Recipe signal:_ teacher: GPT-4.1 mini for rubric and negative-answer generation, with reasoning distillation from DeepSeek-R1.; generator: rubric, negative-answer, and explanation-generation pipeline over heterogeneous reward-model examples.
  _Audit focus:_ Explanation traces may rationalize a score after the fact., Rubric-agnostic training can still fail on unseen rubric wording or missing preference dimensions., Heterogeneous source labels can encode incompatible notions of quality.
  _Why it matters:_ It turns heterogeneous rubric-conditioned judgments into a compact reward-model data object whose reusable fields include rubric, score, and explanation rather than only a scalar label.
- 🧯 **[Reward Shaping to Mitigate Reward Hacking in RLHF](https://arxiv.org/abs/2502.18770)**
  <sub>2025 · ICML · 🧯 audit failure · 🏗️ construction recipe · judgment required · mixed · reward modeling · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.18770) · [DOI](https://doi.org/10.48550/arXiv.2502.18770) · [Code](https://github.com/PorUna-byte/PAR)
  _Data object:_ prompt, response, proxy reward, reference reward, centered reward, shaped reward, win-rate or benchmark outcome.; process: prompt, response, proxy reward; PPO/GRPO-style RLHF reward optimization.
  _Feedback / verifier:_ Preference As Reward (PAR), a sigmoid-shaped centered reward derived from reward-model preferences.
  _Recipe signal:_ teacher: reward model trained from preference data; DeepSeek-V3 is used for reported win-rate and benchmark judging.; generator: SFT-initialized policy model generates responses during PPO/GRPO-style training.
  _Audit focus:_ Reward shaping can introduce a new proxy objective., PAR still depends on the reward model's latent preference quality., DeepSeek-V3 judging is an evaluation proxy, not data-quality proof.
  _Why it matters:_ It treats scalar reward design as an auditable data object rather than assuming reward-model scores are safe optimization targets.
- 🧪 **[Sentence-level Reward Model can Generalize Better for Aligning LLM from Human Preference](https://arxiv.org/abs/2503.04793)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · judgment required · reward modeling · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.04793) · [DOI](https://doi.org/10.48550/arXiv.2503.04793)
  _Data object:_ prompt, response segmented into sentences, sentence-level reward cues, aggregated response-level preference score; process: prompt, response, sentence segments; offline reward-model training and downstream alignment
  _Feedback / verifier:_ sentence-level reward model with response-level Bradley-Terry aggregation
  _Recipe signal:_ teacher: human preference pairs used to train response-level preference via Bradley-Terry aggregation; filtering rule: segment complete responses into sentences and compute sentence rewards from reward-output differences at sentence start/end positions
  _Audit focus:_ Sentence-level credit assignment may not reflect causal contribution to final preference., Sentence segmentation choices can affect reward attribution., Response-level preference labels may be too coarse to validate individual sentence rewards.
  _Why it matters:_ It adds an intermediate-granularity reward signal to the Preference & Reward Feedback track, between token-level rewards and whole-response scalar reward models.
- 🏗️ **[Generative Reward Models](https://arxiv.org/abs/2410.12832)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🧪 verifier reward · judgment required · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.12832) · [DOI](https://doi.org/10.48550/arXiv.2410.12832)
  _Data object:_ prompt, candidate responses, generated reasoning trace, synthetic preference judgment or ranking; process: prompt, candidate response a, candidate response b; offline generative reward-model training and evaluation
  _Feedback / verifier:_ GenRM generative preference judgment with self-generated reasoning traces
  _Recipe signal:_ teacher: human preference labels from UltraFeedback / UltraInteract plus bootstrapped model rationales; generator: GenRM / STaR-style iterative model generating rationales and preference judgments
  _Audit focus:_ Synthetic preference labels can inherit judge-model bias., Generated rationales may be off-policy for the base model and fail to generalize., Majority-vote accuracy gains should not be treated as direct evidence of data quality.
  _Why it matters:_ It expands the Preference & Reward Feedback track beyond scalar discriminative reward models by making generated critique/rationale text part of the reward-model data object.
- 🧯 **[Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://arxiv.org/abs/2406.02900)**
  <sub>2024 · NeurIPS 2024 · 🧯 audit failure · 🧪 verifier reward · judgment required · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.02900) · [DOI](https://doi.org/10.48550/arXiv.2406.02900)
  _Data object:_ prompt, preferred/dispreferred summary pair, direct-alignment training run, KL budget, proxy reward, GPT-4 win-rate diagnostic; process: prompt, chosen response, rejected response; offline direct-alignment overoptimization audit
  _Feedback / verifier:_ proxy reward and GPT-4 win-rate diagnostics for reward overoptimization
  _Recipe signal:_ teacher: human preference data and GPT-4-turbo-2024-04-09 win-rate diagnostics; generator: direct alignment algorithms produce trained policy outputs
  _Audit focus:_ GPT-4 win rate is a proxy for gold quality, not direct human ground truth., Reward overoptimization trends depend on KL budget, beta, model scale, and dataset., Audit results should not be used as evidence that the source preference data is clean.
  _Why it matters:_ It shows that DPO-like direct preference objectives can still over-optimize proxy rewards even without a separately trained reward model.
- 📦 **[Skywork-Reward: Bag of Tricks for Reward Modeling in LLMs](https://arxiv.org/abs/2410.18451)**
  <sub>2024 · arXiv · 📦 data release · 🧪 verifier reward · judgment required · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.18451) · [DOI](https://doi.org/10.48550/arXiv.2410.18451) · [Data](https://huggingface.co/collections/Skywork/skywork-reward-data-collection-66d7fda6a5098dc77035336d) · [HF](https://huggingface.co/collections/Skywork/skywork-reward-model-66d7fbdebae0e60d00a6b60d)
  _Data object:_ prompt, chosen response, rejected response, source subset, annotator or judge type; process: prompt, chosen response, rejected response; offline reward-model training data collection
  _Feedback / verifier:_ Bradley-Terry-style scalar reward model trained on curated pairwise preferences
  _Recipe signal:_ teacher: human labels, GPT-3.5/GPT-4-style LLM labels, and ArmoRM-guided labels depending on subset; generator: mixed response generators including Llama 3.1 405B Instruct, Llama 3.1 70B Instruct, Llama 3 70B Instruct, and Llama 3 8B Instruct for Magpie subsets
  _Audit focus:_ RewardBench leaderboard performance should not be treated as proof that the preference pairs are clean., LLM-judged and human-labeled subsets have different bias profiles., Source-dataset licenses and filtering rules need subset-level audit.
  _Why it matters:_ It is a high-value Preference & Reward Feedback entry because it exposes a curated reward-model training collection with official Hugging Face artifacts and source-level mixture information.
- 📦 **[WildGuard: Open One-Stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs](https://arxiv.org/abs/2406.18495)**
  <sub>2024 · NeurIPS 2024 Datasets & Benchmarks · 📦 data release · 🧪 verifier reward · judgment required · mixed · safety alignment · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.18495) · [DOI](https://doi.org/10.48550/arXiv.2406.18495) · [Code](https://github.com/allenai/wildguard) · [Data](https://huggingface.co/datasets/allenai/wildguardmix) · [HF](https://huggingface.co/allenai/wildguard)
  _Data object:_ prompt or prompt-response item with prompt harmfulness, response harmfulness, response refusal/compliance, adversarial flag, and risk subcategory.; process: prompt, adversarial, response; offline safety moderation and guardrail evaluation dataset.
  _Feedback / verifier:_ WildGuard model and labels for prompt harmfulness, response harmfulness, and refusal detection.
  _Recipe signal:_ teacher: GPT-4 for train-label filtering and auditing; human annotators for WildGuardTest.; generator: synthetic harmful/benign prompts, WildTeaming adversarial transformations, LLM-generated refusal/compliance responses, and GPT-4 complex responses.
  _Audit focus:_ Safety labels depend on policy choices and cultural context., Refusal detection can reward over-refusal if helpfulness is not tracked., Jailbreak distributions may age quickly as attacks change.
  _Why it matters:_ It turns safety moderation into a feedback-bearing data object with explicit harm/refusal labels useful for guardrail training and reward-model auditing.

### <a id="prm-process-supervision"></a>🪜 PRM / process supervision

- 🧪 **[Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning](https://arxiv.org/abs/2410.08146)**
  <sub>2024 · ICLR · 🧪 verifier reward · 🪜 process supervision · programmatic · mixed · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2410.08146) · [OpenReview](https://openreview.net/forum?id=A6Y7AqlzLW) · [DOI](https://doi.org/10.48550/arXiv.2410.08146)
  _Data object:_ problem, partial trace before step, proposed step, future success estimate, process advantage score, and final correctness signal.; process: problem, partial trace, step; reasoning search and online RL setup using process rewards.
  _Feedback / verifier:_ Process Advantage Verifier trained to predict progress toward correct answer.
  _Recipe signal:_ teacher: automated success estimates from prover policies and final correctness signals.; generator: prover policies produce traces used to train process verifiers.
  _Audit focus:_ Progress estimates can be policy-specific., Verifier-guided search can exploit reward artifacts., Step rewards can encourage short-term progress that hurts final correctness.
  _Why it matters:_ It gives process supervision a concrete reward target beyond dense labels: progress under a prover policy.
- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · programmatic · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [Paper Card Source](../../paper_cards/sources/prm800k-2023)
  _Data object:_ step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces
  _Feedback / verifier:_ process reward model trained from step labels
  _Recipe signal:_ reward verifier layer; release audit; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.
- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935)
  _Data object:_ step-level rollout-value labels; process: reasoning step, rollout result, process reward score; offline math reasoning traces
  _Feedback / verifier:_ rollout-derived process reward signal
  _Recipe signal:_ generator: model rollouts from intermediate reasoning steps; filtering rule: rollout success rate converted to step reward
  _Audit focus:_ rollout policy strength can leak into labels, step rewards may favor locally plausible continuations, generated solutions can inherit base-model shortcuts
  _Why it matters:_ It is the clearest bridge between final-answer verifiers and step-level PRM data: the label is not a human judgment but a rollout-derived estimate of whether a partial step can still reach the right answer.
- 🪜 **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.06592)
  _Data object:_ process supervision annotations; process: partial reasoning prefix, first-error signal, positive/negative step examples; offline math search tree
  _Feedback / verifier:_ automated process reward signal
  _Recipe signal:_ reward verifier layer; optimizer scaffold; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- 🪜 **[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · mixed · process supervision · preference learning · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR)
  _Data object:_ step-level preference data with process scores and explanations; process: retrieval context, reasoning step, process reward score; RAG reasoning pipeline
  _Feedback / verifier:_ process reward model plus process explanation model
  _Recipe signal:_ generator: MCTS-guided retrieval-augmented rollouts; filtering rule: trustworthy process rewarding and iterative preference optimization
  _Audit focus:_ PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search
  _Why it matters:_ It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.
- 🪜 **[ReST-MCTS*](https://arxiv.org/abs/2406.03816)**
  <sub>2024 · arXiv · 🪜 process supervision · 🏗️ construction recipe · programmatic · mixed · process supervision · reward modeling · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2406.03816)
  _Data object:_ reasoning trajectory with intermediate search states; process: node state, rollout candidate, process reward score; MCTS-style reasoning tree
  _Feedback / verifier:_ process reward guided tree search
  _Recipe signal:_ generator: policy rollouts expanded by MCTS; filtering rule: process-reward-guided trajectory selection
  _Audit focus:_ search policy may overfit process reward artifacts, accepted traces can hide rejected rollout distribution, inference budget may be conflated with data quality
  _Why it matters:_ It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects.

### <a id="rlvr-verifier-rl"></a>🏋️ RLVR / verifier RL

- 🚀 **[DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · rlvr · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B)
  _Data object:_ subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline.
  _Feedback / verifier:_ Lean verification and RL reward over formal proof success.
  _Recipe signal:_ teacher: DeepSeek-V3-style decomposition and formal proof feedback.; generator: recursive pipeline creates subgoals and proof attempts.
  _Audit focus:_ Subgoal decomposition can introduce false intermediate claims., Formal and informal reasoning scores are not directly comparable., Large-model teacher lineage can hide data provenance.
  _Why it matters:_ It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification.
- 🚀 **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · distillation · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.12948)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; distillation; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.
- 📈 **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · 🏗️ construction recipe · programmatic · rlvr · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2509.25300)
  _Data object:_ problem, generated solution/answer, reward outcome, and training curve metrics.; process: model size, data volume, compute budget, optimization steps, reward signal, validation performance.; RL post-training experiments over math tasks.
  _Feedback / verifier:_ answer-level reward for mathematical reasoning and scaling curves.
  _Recipe signal:_ teacher: reward signal and math benchmark labels.; generator: RL policy rollouts during post-training.
  _Audit focus:_ Math-only scaling can overstate transfer to open-ended reasoning., Repeated data reuse can improve metrics while increasing overfitting risk., Power-law fits can hide reward or benchmark artifacts.
  _Why it matters:_ It helps turn RLVR from recipe folklore into a scaling problem: data reuse, optimization steps, and model size have different effects on learning efficiency and final performance.
- 📈 **[The Art of Scaling Reinforcement Learning Compute for LLMs](https://arxiv.org/abs/2510.13786)**
  <sub>2025 · arXiv · 📈 scaling study · 🏗️ construction recipe · mixed · rlvr · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2510.13786) · [OpenReview](https://openreview.net/forum?id=FMjeC9Msws)
  _Data object:_ training runs, reward outcomes, validation curves, and ablation results.; process: loss aggregation, normalization, curriculum, off-policy choice, compute budget, asymptote, efficiency.; large-scale RL training experiments.
  _Feedback / verifier:_ compute-performance curves and recipe ablations.
  _Recipe signal:_ teacher: reward signal and validation tasks.; generator: RL policies under ablated recipes.
  _Audit focus:_ Compute-heavy studies can be hard to reproduce., Best-practice recipes may depend on task/reward families., Scaling curves can encourage overconfidence if validation tasks are narrow.
  _Why it matters:_ It gives atlas readers a framework for judging RL recipe claims: some choices move the ceiling, while others mostly change how cheaply the run reaches it.
- 🏗️ **[DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](https://arxiv.org/abs/2408.08152)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🚀 model report · programmatic · environmental · rlvr · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2408.08152) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL)
  _Data object:_ Lean proof script, proof-search path, feedback signal, and verification result.; process: theorem, proof attempt, Lean feedback, reward, search node, final proof, pass/fail result.; Lean 4 proof assistant plus RMaxTS search procedure.
  _Feedback / verifier:_ proof assistant feedback used for RL and search selection.
  _Recipe signal:_ teacher: Lean checker feedback and prior formal-proof dataset.; generator: model samples proof candidates and tree-search paths.
  _Audit focus:_ Search budget can dominate model quality., Checker feedback is sparse and version-dependent., RL can optimize toward easy theorem families.
  _Why it matters:_ It shows how proof-assistant feedback can become both a reward signal and a search guide for formal mathematical reasoning.
- 🚀 **[DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [Code](https://github.com/deepseek-ai/deepseek-math) · [HF](https://huggingface.co/collections/deepseek-ai/deepseek-math) · [Paper Card Source](../../paper_cards/sources/deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024)
  _Data object:_ natural-language mathematical solution plus final answer, sometimes sampled multiple times.; process: data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.; offline math training and benchmark evaluation pipeline.
  _Feedback / verifier:_ answer correctness and GRPO-style reward over math tasks.
  _Recipe signal:_ teacher: math corpora, supervised examples, and verifiable benchmark answers.; generator: model produces solutions during SFT, RL, and self-consistency sampling.
  _Audit focus:_ Self-consistency can hide weak single-sample accuracy., Web-data mining may import benchmark leakage., Final-answer rewards can miss flawed derivations.
  _Why it matters:_ It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.
- 🧰 **[GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k)
  _Data object:_ natural-language solution with final numeric answer; process: question, solution, final answer; offline math benchmark
  _Feedback / verifier:_ answer extraction and arithmetic correctness checks
  _Recipe signal:_ generator: human problem writers; filtering rule: curated math word problem collection
  _Audit focus:_ answer extraction errors, contamination through benchmark reuse
  _Why it matters:_ It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training.
- 🧰 **[Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv · 🧰 benchmark · 🧪 verifier reward · programmatic · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k)
  _Data object:_ answer level; scalar reward
  _Feedback / verifier:_ programmatic, judgment required
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows.
- 📦 **[Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865)**
  <sub>2026 · ICLR 2026 · 📦 data release · 🧪 verifier reward · programmatic · environmental · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
  _Data object:_ Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings.
  _Feedback / verifier:_ Programmatic execution verifier that judges behavior rather than language-specific syntax alone.
  _Recipe signal:_ teacher: LLM rewrite pipeline for adapting coding datasets into I/O tasks.; generator: RLVR policy model emits target-language code.
  _Audit focus:_ I/O-only tests may miss semantic edge cases., Verifier containers can encode language-specific quirks., Dataset rewriting can change task intent.
  _Why it matters:_ It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface.
- 🧪 **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · judgment required · mixed · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.01511) · [DOI](https://doi.org/10.48550/arXiv.2602.01511) · [HF](https://huggingface.co/collections/OpenRubrics/rubricarm)
  _Data object:_ prompt, candidate response pair, generated rubric, rubric-conditioned reasoning chain, preference prediction, preference-correctness reward, and policy/reward update signal.; process: prompt, response a, response b; alternating reinforcement-learning setup for rubric generator and rubric-conditioned judge.
  _Feedback / verifier:_ rubric-conditioned judge trained with preference-correctness and format rewards.
  _Recipe signal:_ teacher: general-domain OpenRubrics trajectories plus preference labels; a format reward enforces valid trajectories.; generator: learned rubric generator trained with alternating reinforcement learning.
  _Audit focus:_ Generated rubrics can drift away from human preference dimensions., Alternating updates can create non-stationary reward targets and reward hacking., A format-valid judge trajectory is not necessarily a correct or useful feedback signal.
  _Why it matters:_ It makes the generated rubric itself part of the reward-model data object, so reuse requires auditing rubric quality, judge correctness, and policy optimization together.
- 🏗️ **[Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335)**
  <sub>2025 · arXiv preprint arXiv:2505.03335 · 🏗️ construction recipe · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.03335)
  _Data object:_ generated task, solution, and verified answer; process: proposed task, solution, verifier result; code executor / verifiable task substrate
  _Feedback / verifier:_ executor-backed verifiable reward
  _Recipe signal:_ self play anchor; reward verifier layer; optimizer scaffold
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop.
- 🏗️ **[DAPO](https://arxiv.org/abs/2503.14476)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · programmatic · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.14476)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ optimizer scaffold; reward verifier layer; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ GRPO-lineage RLVR recipe where filtering changes what reaches the gradient.
- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ prompt sourcing; reward verifier layer; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- 🚀 **[Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599)**
  <sub>2025 · arXiv · 🚀 model report · 📈 scaling study · mixed · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.12599)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; scaling report; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Frontier report used for long-context RL and scaling discussion.
- 🚀 **[Magistral](https://arxiv.org/abs/2506.10910)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10910)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; reward verifier layer; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.
- 🚀 **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · mixed · programmatic · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.13585) · [Code](https://github.com/MiniMax-AI/MiniMax-M1)
  _Data object:_ reasoning output, code/tool result, or agent task output; process: reasoning output, benchmark result, thinking budget; math, code, SWE, tool-use, and long-context evaluation surfaces
  _Feedback / verifier:_ programmatic, environment, and benchmark feedback
  _Recipe signal:_ frontier pipeline; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794)
  _Data object:_ scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ reward verifier layer; evaluation; reward modeling
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- 🧯 **[Spurious Rewards: Rethinking Training Signals in RLVR](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · programmatic · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [DOI](https://doi.org/10.48550/arXiv.2506.10947)
  _Data object:_ problem, response or trace, reward type, verifier reward, model family, training step, and evaluation result.; process: problem, response, reward type; RLVR training with GRPO over math reasoning tasks.
  _Feedback / verifier:_ ground-truth, random, format, incorrect-label, one-shot RL, majority-voting, or other spurious reward signals.
  _Recipe signal:_ teacher: ground-truth and spurious verifiable reward variants.; generator: RLVR policy rollouts.
  _Audit focus:_ Reward increases can reflect shortcut exploitation rather than capability gains., Qwen2.5-Math code-reasoning priors may be amplified by spurious rewards., Results are model-family dependent and may not generalize.
  _Why it matters:_ It warns that verifiable or scalar rewards can surface pretrained shortcuts rather than teach genuine reasoning.
- 🏗️ **[TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084)**
  <sub>2025 · arXiv preprint arXiv:2504.16084 · 🏗️ construction recipe · 📈 scaling study · mixed · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16084)
  _Data object:_ candidate response with reward/adaptation signal; process: unlabeled input, rollout, reward signal; test-time task distribution
  _Feedback / verifier:_ task-specific or learned reward used during adaptation
  _Recipe signal:_ optimizer scaffold; reward verifier layer; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.
- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- 📈 **[Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](https://arxiv.org/abs/2312.06585)**
  <sub>2024 · TMLR 2024 · 📈 scaling study · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.06585) · [DOI](https://doi.org/10.48550/arXiv.2312.06585) · [Paper Card Source](../../paper_cards/sources/rest-em-self-training-2024)
  _Data object:_ Prompt, generated sample, binary feedback result, filtered training example, and iteration number.; process: self-training round, sampled solution, binary verifier result; Expectation-maximization self-training loop over verifiable problem-solving tasks.
  _Feedback / verifier:_ Binary correctness feedback from answer checks or execution-style evaluators.
  _Recipe signal:_ teacher: Scalar feedback from verifiable math/code tasks.; generator: Current policy samples candidate solutions each ReST-EM round.
  _Audit focus:_ Filtered data may become repetitive., Verifier errors are amplified across rounds., Data reuse counts can be mistaken for new unique data.
  _Why it matters:_ Strong self-training scaling paper for data reuse, scalar feedback filtering, and verifier-mediated synthetic data generation.
- 🧪 **[Generative Verifiers: Reward Modeling as Next-Token Prediction](https://arxiv.org/abs/2408.15240)**
  <sub>2024 · ICLR 2025 · 🧪 verifier reward · 🏗️ construction recipe · programmatic · judgment required · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.15240) · [DOI](https://doi.org/10.48550/arXiv.2408.15240)
  _Data object:_ problem, candidate solution, generated verification rationale, correctness judgment / verifier output; process: problem, candidate solution, generated solution; best-of-N / verifier-guided reasoning evaluation
  _Feedback / verifier:_ generative verifier trained as next-token prediction jointly on verification and solution generation
  _Recipe signal:_ teacher: programmatic oracle rationales for algorithmic tasks; Gemini 1.0 Pro reference-guided synthetic rationales for GSM8K; generator: Gemma-2B solution generator for algorithmic tasks; Gemini 1.0 Pro for GSM8K rationale generation; Gemma verifiers for GenRM
  _Audit focus:_ Synthetic verification rationales may contain errors., Prompt and output format can affect next-token verifier judgments., Best-of-N improvements are not proof that verifier labels are calibrated.
  _Why it matters:_ It is relevant to Preference & Reward Feedback because it reframes reward modeling as generative verification rather than only scalar classification.
- 🧭 **[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216)**
  <sub>2024 · arXiv · 🧭 survey background · 📈 scaling study · mixed · programmatic · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216)
  _Data object:_ literature-level comparison of prompts, responses, reward sources, objectives, and optimizer families.; process: prompt sampling, response sampling, reward source; LLM post-training algorithms and reasoning tasks such as math and coding.
  _Feedback / verifier:_ learned preference rewards, verifiable rewards, and policy-gradient objectives.
  _Recipe signal:_ teacher: literature covering human feedback, verifiable rewards, and post-training optimization.; generator: technical survey and unified policy-gradient framework.
  _Audit focus:_ Method comparisons can mix data effects with optimizer and sampling-budget effects., RLHF and RLVR rewards are often discussed together despite different verification contracts., Survey papers do not provide reusable training data objects.
  _Why it matters:_ It helps distinguish human preference rewards, AI feedback, verifiable rewards, and direct preference objectives.
- 📈 **[Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314)**
  <sub>2024 · arXiv · 📈 scaling study · 🧪 verifier reward · mixed · judgment required · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024)
  _Data object:_ Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks.
  _Feedback / verifier:_ Dense process-based verifier reward models plus answer-level evaluation.
  _Recipe signal:_ teacher: Benchmark answers and trained verifier reward models provide selection signal.; generator: Policy model generates multiple candidate traces under a budget.
  _Audit focus:_ Verifier quality can dominate the measured scaling curve., Difficulty estimation can leak benchmark-specific assumptions., More samples can be mistaken for more unique data.
  _Why it matters:_ Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution.
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
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Paper Card Source](../../paper_cards/sources/leandojo-theorem-proving-with-retrieval-augmented-language-models-2023)
  _Data object:_ Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.
  _Feedback / verifier:_ Lean checker and environment feedback.
  _Recipe signal:_ teacher: Lean math-library proofs and proof-assistant feedback.; generator: data-extraction toolkit traces repositories and prover generates tactics.
  _Audit focus:_ A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
- 🌐 **[ReAct: Synergizing reasoning and acting in language models](https://arxiv.org/abs/2210.03629)**
  <sub>2023 · ICLR · 🌐 agent environment · 🏗️ construction recipe · environmental · mixed · agent training · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2210.03629) · [OpenReview](https://openreview.net/forum?id=WE_vluYUL-X) · [Code](https://github.com/ysymyth/ReAct) · [Project](https://react-lm.github.io/)
  _Data object:_ trajectory containing reasoning note, action, observation, and final answer or task completion.; process: task state, action string, observation, reasoning note, final answer, success indicator.; Wikipedia API, embodied/web shopping environments, and task-specific simulators.
  _Feedback / verifier:_ environment success, answer correctness, or task-specific evaluation.
  _Recipe signal:_ teacher: few-shot trajectory exemplars demonstrate reasoning-action format.; generator: model samples interleaved reasoning and action steps.
  _Audit focus:_ Reasoning notes can rationalize bad actions., Environment wrappers can change task difficulty., Few-shot exemplars may encode brittle action formats.
  _Why it matters:_ It is a foundational agent-data pattern: the training/evaluation record is not just an answer but a trajectory of thought-like notes, actions, observations, and final response.
- 🧰 **[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.06770) · [OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [Code](https://github.com/swe-bench/SWE-bench) · [Project](https://www.swebench.com/original.html)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ release audit; evaluation; agent training
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes.
- 🌐 **[R2E-Gym](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv · 🌐 agent environment · 🧰 benchmark · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.07164)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ search substrate; agent training; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verifiable SWE environment for reasoning-to-edit tasks.
- 📦 **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.21139)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ prompt sourcing; search substrate; agent training
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Repository-scale training environment showing substrate as data.
- 🧰 **[AndroidWorld: A dynamic benchmarking environment for autonomous agents](https://arxiv.org/abs/2405.14573)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.14573)
  _Data object:_ Android action trajectory; process: screen observation, UI action, state transition; Android device/emulator environment
  _Feedback / verifier:_ task-specific success evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Android tasks turn mobile UI state and action histories into evaluable agent trajectories.
- 🧰 **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.18901)
  _Data object:_ API/tool action trajectory; process: tool call, state transition, observation; simulated app ecosystem with users and APIs
  _Feedback / verifier:_ programmatic environment assertions
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.
- 🛠️ **[BrowserGym: A gym environment for web agents](https://arxiv.org/abs/2412.05467)**
  <sub>2024 · arXiv · 🛠️ infrastructure · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.05467)
  _Data object:_ browser trajectory; process: DOM/state observation, action, reward/result; gym-style browser environment
  _Feedback / verifier:_ environment task evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation.
- 🧰 **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2404.07972)
  _Data object:_ GUI/OS action trajectory; process: observation, action, environment state; desktop operating-system environment
  _Feedback / verifier:_ task completion evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.
- 🛠️ **[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)**
  <sub>2024 · ICLR · 🛠️ infrastructure · 🌐 agent environment · environmental · mixed · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16741) · [Code](https://github.com/All-Hands-AI/OpenHands) · [Project](https://www.openhands.dev/)
  _Data object:_ tool/action/observation trajectory; process: plan, shell command, file edit; sandboxed software-development runtime
  _Feedback / verifier:_ task, test, or human-review outcome depending on benchmark
  _Recipe signal:_ search substrate; optimizer scaffold; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.
- 📦 **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.16789)
  _Data object:_ tool-call trajectory plus final response; process: API call, arguments, tool response; real-world API/tool catalog
  _Feedback / verifier:_ tool response validity and task success checks
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.
- 🧰 **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.13854)
  _Data object:_ environment interaction trajectory; process: observation, action, state; browser-accessible web environment
  _Feedback / verifier:_ task-specific success evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.

### <a id="evaluation-reranking-audit"></a>🧪 Evaluation / reranking / audit

- 🧰 **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.09038) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2025/hash/fb122bfc3f0127a94ded048b5b03496f-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/facebookresearch/AbstentionBench) · [Data](https://huggingface.co/datasets/facebook/AbstentionBench)
  _Data object:_ model response, abstention decision, and correctness/abstention judgment.; process: scenario type, source dataset, answerability label, judge/validation metadata.; offline benchmark with model-evaluation harness.
  _Feedback / verifier:_ human-validated judges and benchmark labels for abstention scenarios.
  _Recipe signal:_ teacher: dataset labels and human-validated abstention judgments.; generator: benchmark authors assemble unanswerable and answerable prompts.
  _Audit focus:_ A model can game abstention by refusing too often., Benchmark labels around subjectivity and underspecification can be ambiguous., Prompt tuning may improve benchmark score without improving epistemic reasoning.
  _Why it matters:_ It is a direct audit surface for reasoning models: stronger reasoning can still fail if the model confidently answers unanswerable questions instead of abstaining.
- 📦 **[Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · NAACL · 📦 data release · 🧰 benchmark · judgment required · mixed · safety alignment · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.09004) · [Venue](https://aclanthology.org/2025.naacl-long.306/) · [DOI](https://doi.org/10.18653/v1/2025.naacl-long.306) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0)
  _Data object:_ prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: prompt, response, top level hazard category; offline guardrail training/evaluation dataset.
  _Feedback / verifier:_ risk taxonomy labels, human annotations, multi-LLM jury judgments, and guard-model evaluation signal.
  _Recipe signal:_ teacher: human annotators plus multi-LLM jury system.; generator: hybrid data generation over safety prompts and human-LLM interactions.
  _Audit focus:_ Safety taxonomy labels are policy- and culture-dependent., Human and multi-LLM jury labels can disagree, especially near policy boundaries., Guard models can overfit visible hazard categories and miss emerging harms.
  _Why it matters:_ It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification.
- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧰 benchmark · judgment required · environmental · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts)
  _Data object:_ internal reasoning trace, final answer, and leakage/extraction outcome.; process: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.; personal-agent evaluation setting with hidden or internal reasoning traces.
  _Feedback / verifier:_ extraction probes and agentic evaluations.
  _Recipe signal:_ teacher: not applicable; this is an audit benchmark.; generator: models produce reasoning traces under normal or injected prompts.
  _Audit focus:_ Hiding thoughts from users does not make them safe., Trace logging can create a new privacy dataset., Utility improvements from more reasoning may worsen leakage risk.
  _Why it matters:_ It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.
- 🧰 **[Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)**
  <sub>2024 · OpenAI / SWE-bench report · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://openai.com/index/introducing-swe-bench-verified/) · [Venue](https://www.swebench.com/verified.html) · [Code](https://github.com/swe-bench/SWE-bench) · [Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)
  _Data object:_ patch diff applied to a repository plus test execution results.; process: repository, issue, base commit, patch, FAIL TO PASS tests, PASS TO PASS tests, human validation notes.; Dockerized repository checkout and unit-test harness.
  _Feedback / verifier:_ post-patch unit tests plus human filtering of task validity.
  _Recipe signal:_ teacher: resolved GitHub pull requests and human validators.; generator: dataset curation filters original SWE-bench instances for clarity, solvability, and test validity.
  _Audit focus:_ Leaderboard scores can depend strongly on scaffold design., Tests may not cover all acceptable patches., Public benchmark tasks can become training targets over time.
  _Why it matters:_ It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.
- 🧰 **[LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · mixed · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic, mixed
  _Recipe signal:_ release audit; evaluation; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.
- 🧰 **[LiveCodeBench: Holistic and contamination-free evaluation of large language models for code](https://arxiv.org/abs/2403.07974)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2403.07974) · [OpenReview](https://openreview.net/forum?id=chfJJYC3iL) · [Code](https://github.com/livecodebench/livecodebench) · [Project](https://livecodebench.github.io/)
  _Data object:_ program submission or code-related output evaluated by tests or task-specific checks.; process: problem release date, platform, prompt, generated code, tests, pass/fail result, evaluation window.; code execution and benchmark leaderboard infrastructure.
  _Feedback / verifier:_ programmatic tests and task-specific correctness checks.
  _Recipe signal:_ teacher: contest tests and problem statements provide correctness signal.; generator: models produce code or code-related predictions.
  _Audit focus:_ Live benchmarks still become stale after release., Execution settings can affect pass/fail outcomes., Public leaderboard feedback can shape future training.
  _Why it matters:_ It gives code-reasoning evaluation a moving-time-window design, making it harder to confuse memorized public problems with genuine coding capability.
- 🧪 **[Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535)**
  <sub>2024 · EMNLP · 🧪 verifier reward · 🚀 model report · judgment required · reward modeling · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2405.01535) · [ACL](https://aclanthology.org/2024.emnlp-main.248/) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [Code](https://github.com/prometheus-eval/prometheus-eval) · [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0)
  _Data object:_ rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights.
  _Feedback / verifier:_ Prometheus 2 judge output aligned against human/proprietary-judge benchmarks.
  _Recipe signal:_ teacher: human judgments and strong evaluator references across direct and pairwise tasks.; generator: training pipeline merges evaluator capabilities across formats.
  _Audit focus:_ Open judges can inherit rubric bias., Agreement with another judge is not the same as correctness., Pairwise and scalar formats can disagree.
  _Why it matters:_ It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes.
- 🧰 **[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2403.13787) · [DOI](https://doi.org/10.48550/arXiv.2403.13787) · [Code](https://github.com/allenai/reward-bench) · [Data](https://huggingface.co/datasets/allenai/reward-bench) · [Project](https://huggingface.co/spaces/allenai/reward-bench)
  _Data object:_ prompt with chosen and rejected completion, scored by reward model accuracy.; process: prompt, chosen, rejected; offline reward-model benchmark and leaderboard
  _Feedback / verifier:_ reward model assigns scalar scores to chosen and rejected completions
  _Recipe signal:_ teacher: human-verified or benchmark-derived chosen/rejected labels depending on subset; generator: mixture of existing benchmark completions and curated modified completions
  _Audit focus:_ Aggregate accuracy can hide subset-specific failures., Leaderboard exposure can create benchmark overfitting., Pairwise labels may encode hidden style or value preferences.
  _Why it matters:_ It helps readers test whether a reward signal generalizes beyond helpfulness style into subtle factual, reasoning, refusal, and safety preferences.
- 🧰 **[SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168)**
  <sub>2024 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2407.13168) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/scicode-bench/SciCode) · [Project](https://scicode-bench.github.io/)
  _Data object:_ code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness.
  _Feedback / verifier:_ test cases and scientist-curated gold solutions.
  _Recipe signal:_ teacher: scientists and AI researchers curate problems, decompositions, solutions, and tests.; generator: models produce code for subproblems and main problems.
  _Audit focus:_ Models can pass narrow tests without scientific validity., Domain background can leak solution hints., Execution environments can change numerical results.
  _Why it matters:_ It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests.
- 🧰 **[GPQA](https://arxiv.org/abs/2311.12022)**
  <sub>2023 · arXiv · 🧰 benchmark · judgment required · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2311.12022) · [OpenReview](https://openreview.net/forum?id=Ti67584b98) · [Code](https://github.com/idavidrein/gpqa)
  _Data object:_ multiple-choice answer with optional rationale and expert label.; process: domain, question, answer options, expert label, validation metadata, canary/string metadata.; offline expert Q&A benchmark.
  _Feedback / verifier:_ expert-authored answer key and validation protocol.
  _Recipe signal:_ teacher: domain experts write and validate questions.; generator: benchmark authors curate difficult science questions.
  _Audit focus:_ Multiple-choice guessing can inflate scores., Non-expert validators may not catch subtle mistakes., Tool access changes what the benchmark measures.
  _Why it matters:_ It is a scalable-oversight benchmark: the data object tests whether models can answer expert questions that are difficult for ordinary validators to check.
- 🧰 **[Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.05685) · [Venue](https://papers.nips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html) · [OpenReview](https://openreview.net/forum?id=uccHPGDlao) · [Code](https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge)
  _Data object:_ model response, judge score, pairwise preference, or arena battle outcome.; process: question, turn, model identity, response, judge prompt template, score, preference label, bias-control setting.; offline judge harness and crowd-sourced arena platform.
  _Feedback / verifier:_ strong model judge and human preference comparisons.
  _Recipe signal:_ teacher: human preferences and strong model judges.; generator: candidate chat models answer MT-Bench and arena prompts.
  _Audit focus:_ Judge scores can be position-biased., Verbose answers can be over-rewarded., A model judge may share weaknesses with the evaluated model.
  _Why it matters:_ It is the standard cautionary reference for judge data: scalable model judges are useful, but position, verbosity, self-enhancement, and limited-reasoning biases must be audited.
- 🏗️ **[Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511)**
  <sub>2023 · ICLR · 🏗️ construction recipe · 📦 data release · mixed · judgment required · sft · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/)
  _Data object:_ generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens.
  _Feedback / verifier:_ critique signals and task-specific factuality/answer-quality evaluation.
  _Recipe signal:_ teacher: critic and retrieval-supervision signals derived from task data and evidence checks.; generator: model learns special reflection tokens for retrieval and critique behavior.
  _Audit focus:_ A model can retrieve irrelevant passages confidently., Critique tokens can become style markers without true verification., Retriever choice changes benchmark conclusions.
  _Why it matters:_ It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations.
- 📈 **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 📈 scaling study · 🧭 survey background · mixed · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw) · [Paper Card Source](../../paper_cards/sources/self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023)
  _Data object:_ multiple rationales and final answers for the same prompt.; process: sampling temperature, number of paths, answer extraction, aggregation rule.; benchmark prompting setup.
  _Feedback / verifier:_ majority or marginalization over sampled answers.
  _Recipe signal:_ teacher: few-shot chain-of-thought exemplars.; generator: model samples many reasoning paths.
  _Audit focus:_ More samples can amplify benchmark-specific shortcuts., Aggregation does not guarantee step faithfulness., Unmatched inference budgets can make methods look better than they are.
  _Why it matters:_ It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.
- 🧰 **[TruthfulQA](https://arxiv.org/abs/2109.07958)**
  <sub>2022 · ACL · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.07958) · [ACL](https://aclanthology.org/2022.acl-long.229/) · [Code](https://github.com/sylinrl/TruthfulQA)
  _Data object:_ free-form generation or multiple-choice answer with truthfulness and informativeness labels.; process: question category, reference true answers, reference false answers, model answer, truthfulness score, informativeness score.; offline benchmark with human-written items and evaluator scripts.
  _Feedback / verifier:_ human references plus automated/human scoring protocols for truthfulness and informativeness.
  _Recipe signal:_ teacher: human-authored reference answer sets.; generator: benchmark authors construct questions designed to trigger imitative falsehoods.
  _Audit focus:_ A model can be uninformative but truthful., A model can sound confident while reproducing a human misconception., Multiple-choice and generation modes can lead to different conclusions.
  _Why it matters:_ It is a canonical truthfulness audit surface for reasoning models because stronger generation can still amplify persuasive false answers learned from web text.
- 🧰 **[Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval)
  _Data object:_ executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite.
  _Feedback / verifier:_ HumanEval tests and pass@k evaluation.
  _Recipe signal:_ teacher: benchmark authors and public code pretraining corpus context.; generator: model samples code completions.
  _Audit focus:_ Small public benchmarks are easy to memorize., Unit tests can miss incorrect or insecure behavior., Repeated sampling can hide low single-sample reliability.
  _Why it matters:_ It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions.
- 🧰 **[Measuring coding challenge competence with APPS](https://arxiv.org/abs/2105.09938)**
  <sub>2021 · NeurIPS · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2105.09938) · [OpenReview](https://openreview.net/forum?id=sD93GOzH3i5) · [Code](https://github.com/hendrycks/apps) · [Paper Card Source](../../paper_cards/sources/measuring-coding-challenge-competence-with-apps-2021)
  _Data object:_ Python code submission evaluated against test cases.; process: difficulty, prompt, starter code where available, generated solution, public/hidden test outcomes.; offline programming benchmark with executable Python tests.
  _Feedback / verifier:_ unit-test pass/fail signal.
  _Recipe signal:_ teacher: benchmark tests and reference solutions provide supervision surface.; generator: models produce candidate programs from problem text.
  _Audit focus:_ Programs can overfit weak tests., Syntax validity is not the same as functional correctness., Contamination can inflate code benchmark scores.
  _Why it matters:_ It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome.
- 🧰 **[Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Code](https://github.com/hendrycks/math) · [Paper Card Source](../../paper_cards/sources/measuring-mathematical-problem-solving-with-the-math-dataset-2021)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ release audit; evaluation; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems.
- 🧰 **[miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110)**
  <sub>2021 · ICLR · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.00110) · [OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021)
  _Data object:_ formal proof accepted by a target proof assistant.; process: formal system, theorem statement, split, generated proof/tactics, verifier result.; Lean, Metamath, Isabelle, and HOL Light style theorem proving environments.
  _Feedback / verifier:_ proof assistant kernel/checker acceptance.
  _Recipe signal:_ teacher: formalized benchmark statements and proof assistant checkers.; generator: human translators and theorem prover agents produce proof attempts.
  _Audit focus:_ A theorem can be easier in one formal system than another., Search budget can dominate model differences., Forks can drift from the original benchmark.
  _Why it matters:_ It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof.
- 🧪 **[Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis](https://arxiv.org/abs/2602.00846)**
  <sub>2026 · ECCV 2026 · 🧪 verifier reward · 🏗️ construction recipe · judgment required · mixed · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.00846) · [DOI](https://doi.org/10.48550/arXiv.2602.00846) · [Code](https://anonymous.4open.science/r/Omni-RRM-CC08) · [Project](https://tmfk418.github.io/Omni-RRM/)
  _Data object:_ prompt, modality, candidate pair, raw preference candidate, rubric dimensions, scalar rubric scores, synthesized preference label, JSON justification, and reward score.; process: prompt, modality, candidate response a; omni-modal reward-model training pipeline over text, image, video, and audio inputs.
  _Feedback / verifier:_ Omni-RRM reward model trained from automatically synthesized rubric-grounded preference data.
  _Recipe signal:_ teacher: GPT-4o-mini and Doubao-1.5-Pro for rubric annotation, scoring, and reconciliation.; generator: strong/weak pairs from Qwen2.5-VL-7B, Qwen2.5-VL-3B, LLaVA-1.5-7B, R1-AQA-7B, Qwen2-Audio-7B, and Qwen2.5-Omni variants.
  _Audit focus:_ Synthetic rubric labels can inherit teacher-model bias across modalities., Perception errors in image, video, or audio inputs can be mistaken for preference errors., Strong/weak response generation can create artificial preference shortcuts.
  _Why it matters:_ It extends preference/reward feedback beyond text-only responses and makes modality, rubric dimension, score, and justification part of the reusable reward-data object.
- 🧪 **[Atla Selene Mini: A General Purpose Evaluation Model](https://arxiv.org/abs/2501.17195)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🚀 model report · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.17195) · [DOI](https://doi.org/10.48550/arXiv.2501.17195) · [Code](https://github.com/atla-ai/selene-mini) · [HF](https://huggingface.co/AtlaAI/Selene-1-Mini-Llama-3.1-8B)
  _Data object:_ absolute score, binary/classification judgment, pairwise preference, structured evaluation output, or qualitative critique.; process: instruction, response, candidate responses; 8B Llama-3.1-based small language model-as-a-judge
  _Feedback / verifier:_ Atla Selene Mini judge output over scoring, classification, and pairwise preference tasks
  _Recipe signal:_ teacher: public datasets augmented with synthetically generated chosen/rejected chain-of-thought critiques and filtered examples.; generator: Selene Mini post-training pipeline; prompt templates and cookbooks released in GitHub.
  _Audit focus:_ Small evaluator models can have limited coverage and calibration outside reported tasks., Synthetic critiques may encode generator artifacts., RewardBench or Judge Arena performance is not proof of data quality.
  _Why it matters:_ It provides a small open evaluator model that can serve as a verifier/reward component, but its training mixture and calibration need audit before reuse.
- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124)
  _Data object:_ step-level labels or scores; process: step, label, error type; offline reasoning traces
  _Feedback / verifier:_ process-level reward model benchmark
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- 🏗️ **[Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge](https://arxiv.org/abs/2407.19594)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🧪 verifier reward · judgment required · preference learning · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.19594) · [DOI](https://doi.org/10.48550/arXiv.2407.19594)
  _Data object:_ prompt, sampled responses, judge outputs with chain-of-thought and score, meta-judge comparison over judgments, actor preference pair, judge preference pair, and iteration id.; process: prompt, candidate response, judge output; iterative self-improvement pipeline for both response generation and judging ability.
  _Feedback / verifier:_ LLM-as-a-meta-judge signal over the model's own judgments.
  _Recipe signal:_ teacher: self-generated judge and meta-judge feedback, initialized with OpenAssistant-derived EFT data from Self-Rewarding Language Models.; generator: model-generated responses, judgments, and meta-judgments.
  _Audit focus:_ Meta-judge and base judge can share the same blind spots., Recursive self-judgment can amplify evaluation artifacts., Meta-judge develops score and positional biases during training.
  _Why it matters:_ It makes judge quality itself part of the feedback loop, which is important for auditing recursive synthetic reward data.
- 🧰 **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · judgment required · programmatic · evaluation · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.06559)
  _Data object:_ step labels or first-error markers; process: reasoning step, error marker, diagnostic label; offline math traces
  _Feedback / verifier:_ process-error detector
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- 🧯 **[Towards Data-Centric RLHF: Simple Metrics for Preference Dataset Comparison](https://openreview.net/forum?id=B6qsCHhMco)**
  <sub>2024 · OpenReview / arXiv working paper · 🧯 audit failure · 🏗️ construction recipe · judgment required · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=B6qsCHhMco) · [arXiv](https://arxiv.org/abs/2409.09603) · [DOI](https://doi.org/10.48550/arXiv.2409.09603)
  _Data object:_ dataset-level audit record over pairwise preference datasets, including scale behavior, label-noise invariance, response-pair similarity/information content, in-domain reward-model accuracy, and RewardBench generalization.; process: dataset name, prompt, chosen response; offline data-centric preference-dataset comparison framework for reward-model training
  _Feedback / verifier:_ Bradley-Terry reward models trained on each dataset and evaluated by in-domain held-out accuracy plus RewardBench generalization.
  _Recipe signal:_ teacher: Existing pairwise preference labels from HH-RLHF, UltraFeedback, LMSYS Arena Preferences, and PKU-SafeRLHF.; generator: unknown for newly generated data because the paper compares existing preference datasets rather than releasing a new response-generation pipeline.
  _Audit focus:_ Metrics such as scale, label-noise invariance, and response-pair similarity are useful audit views but do not fully capture annotator disagreement, prompt provenance, safety policy, or downstream task fit., Reward-model performance can be dataset- and model-size-dependent; a metric that helps one base model or domain may not transfer to another., Random label flips are only a proxy for real preference noise and may not match systematic annotator bias or ambiguous prompts.
  _Why it matters:_ It gives the Preference & Reward Feedback Data track an audit framework for deciding whether a preference dataset is useful for reward-model training before treating it as interchangeable RLHF data.
- 🧭 **[A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328)**
  <sub>2025 · arXiv · 🧭 survey background · judgment required · mixed · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.12328) · [DOI](https://doi.org/10.48550/arXiv.2504.12328) · [Project](https://github.com/JLZhong23/awesome-reward-models)
  _Data object:_ taxonomy of reward-model data sources, objectives, applications, evaluations, and challenges.; process: preference source, reward model architecture, usage mode; LLM reward-model training and evaluation pipelines.
  _Feedback / verifier:_ reward model as proxy objective for downstream post-training.
  _Recipe signal:_ teacher: human and AI preference sources summarized across reward-model literature.; generator: survey taxonomy and accompanying awesome list
  _Audit focus:_ Reward models may encode annotator bias, style bias, or length preference., Proxy rewards can be overoptimized or attacked when used as training objectives., Benchmark scores can obscure whether the reward model is useful for reasoning data.
  _Why it matters:_ It gives readers a reward-model-specific map, which is essential before comparing learned human-preference rewards with PRMs, rubric rewards, and programmatic RLVR verifiers.
- 🧭 **[A Survey on Human Preference Learning for Large Language Models](https://arxiv.org/abs/2406.11191)**
  <sub>2024 · arXiv · 🧭 survey background · judgment required · mixed · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.11191) · [DOI](https://doi.org/10.48550/arXiv.2406.11191)
  _Data object:_ taxonomy of human preference learning data, preference models, preference usage, and aligned-model evaluation; process: preference source, feedback format, preference model; survey over preference-learning literature
  _Feedback / verifier:_ literature-level comparison of human preference signals and preference-learning methods
  _Recipe signal:_ teacher: surveyed papers and datasets; generator: survey authors
  _Audit focus:_ Survey taxonomies can hide concrete data-object differences across RLHF, DPO, RLAIF, and reward-model work., Training use should not be overstated because this is not a new preference dataset., Readers still need paper-level artifact checks before reusing any cited data source.
  _Why it matters:_ It gives Preference & Reward Feedback readers a taxonomy for human preference learning, but should not replace primary dataset, reward-model, or optimizer entries.
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
  [Paper](https://arxiv.org/abs/2212.08073) · [Project](https://github.com/anthropics/ConstitutionalHarmlessnessPaper)
  _Data object:_ original answer, self-critique, revised answer, preference pair, reward-model score.; process: principle used, critique, revision, comparison, preference label.; offline SL and RLHF/RLAIF alignment pipeline.
  _Feedback / verifier:_ AI preference model trained from comparisons guided by constitutional principles.
  _Recipe signal:_ teacher: constitution/principles plus critique-and-revision model behavior.; generator: model produces critiques, revisions, and response pairs.
  _Audit focus:_ AI feedback can encode model bias at scale., Principles may be underspecified or culturally narrow., A model can become safe-looking but evasive if helpfulness is not audited.
  _Why it matters:_ It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data.

### ⚠️ Needs search or metadata

- 📦 **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · programmatic · sft · distillation · L0_seeded</sub>
  [Code](https://github.com/huggingface/open-r1) · [HF](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k)
  _Data object:_ math problem with reasoning trace and final answer; process: problem, reasoning trace, answer; offline math corpus
  _Feedback / verifier:_ math answer verifier / filtering pipeline
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- 🚀 **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · sft · rlvr · L0_seeded</sub>
  [Code](https://github.com/QwenLM/Qwen3-Coder) · [Project](https://qwenlm.github.io/blog/qwen3-coder/)
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

## 8. Related Paper-Card Sources

- [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](../../paper_cards/sources/rest-em-self-training-2024)
- [DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](../../paper_cards/sources/deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024)
- [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024)
- [LeanDojo: Theorem proving with retrieval-augmented language models](../../paper_cards/sources/leandojo-theorem-proving-with-retrieval-augmented-language-models-2023)
- [Let's Verify Step by Step](../../paper_cards/sources/prm800k-2023)
- [Self-consistency improves chain of thought reasoning in language models](../../paper_cards/sources/self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023)
- [Measuring coding challenge competence with APPS](../../paper_cards/sources/measuring-coding-challenge-competence-with-apps-2021)
- [Measuring mathematical problem solving with the MATH dataset](../../paper_cards/sources/measuring-mathematical-problem-solving-with-the-math-dataset-2021)
- [miniF2F: A cross-system benchmark for formal olympiad-level mathematics](../../paper_cards/sources/minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
