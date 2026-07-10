# 🧮 Programmatically Verifiable Outcome Data

> Math answers, code execution, unit tests, proof checkers, symbolic predicates, answer extraction, and verifier robustness studies.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=programmatically_verifiable_outcome_data&mode=find_papers)
> Try: `What should I read first for 🧮 Programmatic Verification?`
> Try: `Compare the data objects and verifier types in 🧮 Programmatic Verification.`
> Try: `Generate an audit checklist for 🧮 Programmatic Verification.`

## 1. What This Track Studies

Use this track for the cleanest verifier-bearing reasoning records: final answers or artifacts checked by code, rules, tests, or formal systems.

Programmatic verification is central to post-training reasoning data because it can turn correctness into a relatively cheap feedback signal. Math answer checkers, code unit tests, compilers, and proof assistants make outcome supervision concrete enough for filtering, rejection sampling, RLVR, benchmark evaluation, and sometimes training rewards.

The clean surface is also dangerous. A model can learn answer-format shortcuts, leaked tests, brittle normalizers, proof-environment quirks, or benchmark-specific patterns. Good curation therefore records not just the dataset name but the verifier, false-positive risks, split policy, and whether the release exposes traces, failed attempts, or only accepted solutions.

This page is the natural assignment for contributors working on math, code, and proof papers, but many of those papers should also be tagged as construction recipes, scaling studies, benchmarks, or frontier disclosures when appropriate.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 📐 Math answer-verifiable data | math problems, final answers, solution traces, and answer checkers | answer extraction and normalization inflate scores |
| 🧮 Math RLVR datasets | math records used for rejection sampling, SFT, PRMs, and RLVR | data reuse and contamination are not reported |
| 💻 Code execution / unit-test data | code problems, unit tests, generated tests, execution logs, and repair tasks | flaky or leaked tests become the reward |
| 🧾 Formal proof / Lean / theorem proving | Lean, proof scripts, tactic environments, theorem statements, and proof checkers | proof succeeds only under an undocumented environment |
| 🧪 Verifier robustness and answer extraction | false positives, false negatives, checker brittleness, and adversarial formats | model learns verifier quirks instead of task skill |
| 🧰 Programmatic benchmarks | evaluation sets whose scoring can become a post-training signal | benchmark scoring is reused as reward without audit |

### Contents

- [📐 Math answer-verifiable data](#math-answer-verifiable-data)
- [🧮 Math RLVR datasets](#math-rlvr-datasets)
- [💻 Code execution / unit-test data](#code-execution-unit-test-data)
- [🧾 Formal proof / Lean / theorem proving](#formal-proof-lean-theorem-proving)
- [🧪 Verifier robustness and answer extraction](#verifier-robustness-and-answer-extraction)
- [🧰 Programmatic benchmarks](#programmatic-benchmarks)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) | 2025 | [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) · [Card](../../cards/recipes/deepseek-prover-v2.md) | subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline. | Lean verification and RL reward over formal proof success. | It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification. |
| [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | 2025 | [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../../cards/releases/openthoughts.md) | reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus | filters, benchmark feedback, and recipe ablations | It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance. |
| [DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333) | 2024 | [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1) · [Card](../../cards/recipes/deepseek-prover.md) | Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness. | Lean kernel/checker acceptance. | It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object. |
| [Magicoder: Empowering code generation with OSS-instruct](https://arxiv.org/abs/2312.02120) | 2024 | [Paper](https://arxiv.org/abs/2312.02120) · [PMLR](https://proceedings.mlr.press/v235/wei24h.html) · [Code](https://github.com/ise-uiuc/magicoder) · [Data](https://huggingface.co/datasets/ise-uiuc/Magicoder-OSS-Instruct-75K) · [HF](https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B) · [Card](../../cards/recipes/magicoder.md) | instruction-response coding example, often linked to a code reference or task scaffold.; process: source snippet, generated instruction, solution response, model family, benchmark result.; offline code-data generation and code benchmark evaluation. | coding benchmark pass rates and optional executable checks. | It is a strong code-data construction example because it grounds synthetic coding instructions in real open-source references rather than free-floating prompt invention. |
| [OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560) | 2024 | [Paper](https://arxiv.org/abs/2410.01560) · [OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [Code](https://github.com/NVIDIA-NeMo/Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/) · [Card](../../cards/releases/openmathinstruct-2.md) | problem-solution pair with natural-language mathematical reasoning and final answer.; process: source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.; NVIDIA NeMo-Skills generation, training, and evaluation pipeline. | answer checks and benchmark evaluation over math tasks. | It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models. |
| [SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168) | 2024 | [Paper](https://arxiv.org/abs/2407.13168) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/scicode-bench/SciCode) · [Project](https://scicode-bench.github.io/) · [Card](../../cards/benchmarks/scicode.md) | code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness. | test cases and scientist-curated gold solutions. | It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests. |
| [Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) | 2024 | [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) · [Card](../../cards/recipes/tulu-3.md) | instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases. | mixture of preference labels, reward models, and verifiable rewards depending on stage. | It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together. |
| [LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md) | Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories. | Lean checker and environment feedback. | It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record. |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [Card](../../cards/verifiers/prm800k.md) | step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces | process reward model trained from step labels | It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation. |
| [Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374) | 2021 | [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../../cards/benchmarks/evaluating-large-language-models-trained-on-code.md) | executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite. | HumanEval tests and pass@k evaluation. | It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions. |

## 5. Full Paper List

### <a id="math-answer-verifiable-data"></a>📐 Math answer-verifiable data

- 🚀 **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · distillation · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.12948) · [Card](../../cards/recipes/deepseek_r1.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; distillation; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.
- 📦 **[OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../../cards/releases/openthoughts.md)
  _Data object:_ reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus
  _Feedback / verifier:_ filters, benchmark feedback, and recipe ablations
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance.
- 📈 **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · 🏗️ construction recipe · programmatic · rlvr · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2509.25300) · [Card](../../cards/recipes/scaling-behaviors-rl-post-training.md)
  _Data object:_ problem, generated solution/answer, reward outcome, and training curve metrics.; process: model size, data volume, compute budget, optimization steps, reward signal, validation performance.; RL post-training experiments over math tasks.
  _Feedback / verifier:_ answer-level reward for mathematical reasoning and scaling curves.
  _Recipe signal:_ teacher: reward signal and math benchmark labels.; generator: RL policy rollouts during post-training.
  _Audit focus:_ Math-only scaling can overstate transfer to open-ended reasoning., Repeated data reuse can improve metrics while increasing overfitting risk., Power-law fits can hide reward or benchmark artifacts.
  _Why it matters:_ It helps turn RLVR from recipe folklore into a scaling problem: data reuse, optimization steps, and model size have different effects on learning efficiency and final performance.
- 🏗️ **[s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · mixed · sft · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.19393) · [Card](../../cards/releases/s1.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; scaling report; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a useful counterpoint to massive-data recipes: careful small-set curation plus inference-budget control can materially change reasoning performance.
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
- 🧰 **[GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../../cards/benchmarks/gsm8k-grade-school-math-8k.md)
  _Data object:_ natural-language solution with final numeric answer; process: question, solution, final answer; offline math benchmark
  _Feedback / verifier:_ answer extraction and arithmetic correctness checks
  _Recipe signal:_ generator: human problem writers; filtering rule: curated math word problem collection
  _Audit focus:_ answer extraction errors, contamination through benchmark reuse
  _Why it matters:_ It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training.
- 🧰 **[Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Code](https://github.com/hendrycks/math) · [Card](../../cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ release audit; evaluation; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems.
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
- 📦 **[LIMO: Less Is More for Reasoning](https://arxiv.org/abs/2502.03387)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.03387) · [Card](../../cards/releases/limo.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; sft; distillation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Small-set curation reference distinguishing elicitation from broad coverage.
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
- 📦 **[NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](https://arxiv.org/abs/2502.13124)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.13124) · [Card](../../cards/releases/naturalreasoning.md)
  _Data object:_ question with reference answer or reasoning target; process: question, reference answer, domain label; offline natural-language tasks
  _Feedback / verifier:_ reference answers, reward models, or self-rewarding depending on split
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.
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
- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [Card](../../cards/verifiers/spurious_rewards.md)
  _Data object:_ scalar reward
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ reward verifier layer; rlvr; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Card](../../cards/verifiers/tinyv.md)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
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
- 🪜 **[PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · rlvr · process supervision · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2502.01456) · [Code](https://github.com/PRIME-RL/PRIME)
  _Data object:_ rollout with implicit process reward signal; process: policy rollout, outcome label, implicit process reward; online RL training loop
  _Feedback / verifier:_ implicit process rewards derived from outcome labels
  _Recipe signal:_ generator: policy rollouts; filtering rule: outcome labels converted into implicit process rewards
  _Audit focus:_ implicit rewards can inherit outcome-verifier shortcuts, online reward updates may introduce reward hacking, benchmark improvements may conflate optimizer and reward-contract changes
  _Why it matters:_ It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds.
- 🪜 **[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · mixed · process supervision · preference learning · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR)
  _Data object:_ step-level preference data with process scores and explanations; process: retrieval context, reasoning step, process reward score; RAG reasoning pipeline
  _Feedback / verifier:_ process reward model plus process explanation model
  _Recipe signal:_ generator: MCTS-guided retrieval-augmented rollouts; filtering rule: trustworthy process rewarding and iterative preference optimization
  _Audit focus:_ PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search
  _Why it matters:_ It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.
- 🪜 **[Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](https://arxiv.org/abs/2406.18629)**
  <sub>2024 · arXiv · 🪜 process supervision · 🏗️ construction recipe · mixed · process supervision · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2406.18629)
  _Data object:_ step-wise preference pairs; process: reasoning step, preferred continuation, rejected continuation; offline long-chain reasoning traces
  _Feedback / verifier:_ step-wise preference optimization objective
  _Recipe signal:_ generator: multi-step reasoning policy; filtering rule: step-wise preferences over reasoning continuations
  _Audit focus:_ local step preference may not align with final correctness, preference construction can hide teacher or scorer bias, long-chain traces can overfit style instead of reasoning validity
  _Why it matters:_ It helps readers see how preference optimization becomes a process-level data problem when the chosen/rejected object is an intermediate continuation rather than a whole answer.
- 🧭 **[A Survey of Reasoning with Foundation Models](https://arxiv.org/abs/2502.17419)**
  <sub>2025 · arXiv · 🧭 survey background · unknown · audit · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.17419)
  _Data object:_ survey taxonomy and literature map.; literature survey.
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives the atlas a second reasoning-survey waypoint so readers can orient before choosing math, code, agent, rubric, or scaling tracks.
- 📄 **[Nemotron-Math: Reasoning Data with Tool-Integrated Reasoning Variants](https://arxiv.org/abs/2512.15489)**
  <sub>2025 · arXiv preprint arXiv:2512.15489 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2512.15489)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="math-rlvr-datasets"></a>🧮 Math RLVR datasets

- 🚀 **[DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [Code](https://github.com/deepseek-ai/deepseek-math) · [HF](https://huggingface.co/collections/deepseek-ai/deepseek-math) · [Card](../../cards/recipes/deepseekmath.md)
  _Data object:_ natural-language mathematical solution plus final answer, sometimes sampled multiple times.; process: data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.; offline math training and benchmark evaluation pipeline.
  _Feedback / verifier:_ answer correctness and GRPO-style reward over math tasks.
  _Recipe signal:_ teacher: math corpora, supervised examples, and verifiable benchmark answers.; generator: model produces solutions during SFT, RL, and self-consistency sampling.
  _Audit focus:_ Self-consistency can hide weak single-sample accuracy., Web-data mining may import benchmark leakage., Final-answer rewards can miss flawed derivations.
  _Why it matters:_ It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.

### <a id="code-execution-unit-test-data"></a>💻 Code execution / unit-test data

- 🧰 **[LiveCodeBench: Holistic and contamination-free evaluation of large language models for code](https://arxiv.org/abs/2403.07974)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2403.07974) · [OpenReview](https://openreview.net/forum?id=chfJJYC3iL) · [Code](https://github.com/livecodebench/livecodebench) · [Project](https://livecodebench.github.io/) · [Card](../../cards/benchmarks/livecodebench.md)
  _Data object:_ program submission or code-related output evaluated by tests or task-specific checks.; process: problem release date, platform, prompt, generated code, tests, pass/fail result, evaluation window.; code execution and benchmark leaderboard infrastructure.
  _Feedback / verifier:_ programmatic tests and task-specific correctness checks.
  _Recipe signal:_ teacher: contest tests and problem statements provide correctness signal.; generator: models produce code or code-related predictions.
  _Audit focus:_ Live benchmarks still become stale after release., Execution settings can affect pass/fail outcomes., Public leaderboard feedback can shape future training.
  _Why it matters:_ It gives code-reasoning evaluation a moving-time-window design, making it harder to confuse memorized public problems with genuine coding capability.
- 🏗️ **[Magicoder: Empowering code generation with OSS-instruct](https://arxiv.org/abs/2312.02120)**
  <sub>2024 · ICML · 🏗️ construction recipe · 📦 data release · programmatic · mixed · sft · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2312.02120) · [PMLR](https://proceedings.mlr.press/v235/wei24h.html) · [Code](https://github.com/ise-uiuc/magicoder) · [Data](https://huggingface.co/datasets/ise-uiuc/Magicoder-OSS-Instruct-75K) · [HF](https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B) · [Card](../../cards/recipes/magicoder.md)
  _Data object:_ instruction-response coding example, often linked to a code reference or task scaffold.; process: source snippet, generated instruction, solution response, model family, benchmark result.; offline code-data generation and code benchmark evaluation.
  _Feedback / verifier:_ coding benchmark pass rates and optional executable checks.
  _Recipe signal:_ teacher: GPT-3.5-series teacher model for synthetic instruction generation.; generator: OSS-Instruct prompts the teacher with open-source code snippets.
  _Audit focus:_ Synthetic code tasks can inherit license issues., Reference snippets may leak benchmark patterns., Teacher-generated solutions can be plausible but wrong.
  _Why it matters:_ It is a strong code-data construction example because it grounds synthetic coding instructions in real open-source references rather than free-floating prompt invention.
- 🚀 **[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · programmatic · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) · [Card](../../cards/recipes/tulu-3.md)
  _Data object:_ instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases.
  _Feedback / verifier:_ mixture of preference labels, reward models, and verifiable rewards depending on stage.
  _Recipe signal:_ teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.; generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
  _Audit focus:_ Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., RLVR improvements may be domain-specific.
  _Why it matters:_ It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.
- 🧰 **[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.06770) · [OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [Code](https://github.com/swe-bench/SWE-bench) · [Project](https://www.swebench.com/original.html) · [Card](../../cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ release audit; evaluation; agent training
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes.
- 🧰 **[Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../../cards/benchmarks/evaluating-large-language-models-trained-on-code.md)
  _Data object:_ executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite.
  _Feedback / verifier:_ HumanEval tests and pass@k evaluation.
  _Recipe signal:_ teacher: benchmark authors and public code pretraining corpus context.; generator: model samples code completions.
  _Audit focus:_ Small public benchmarks are easy to memorize., Unit tests can miss incorrect or insecure behavior., Repeated sampling can hide low single-sample reliability.
  _Why it matters:_ It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions.
- 🧰 **[HumanEval: Hand-Written Evaluation Set](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../../cards/benchmarks/humaneval-hand-written-evaluation-set.md)
  _Data object:_ Python function completion; process: prompt, canonical solution, unit tests; Python execution harness
  _Feedback / verifier:_ unit tests
  _Recipe signal:_ generator: benchmark authors; filtering rule: hand-written benchmark curation
  _Audit focus:_ public benchmark contamination, unit-test coverage gaps
  _Why it matters:_ It made unit-test execution a standard verifier for code reasoning, pass@k reporting, and later code-data filtering recipes.
- 🧰 **[Measuring coding challenge competence with APPS](https://arxiv.org/abs/2105.09938)**
  <sub>2021 · NeurIPS · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2105.09938) · [OpenReview](https://openreview.net/forum?id=sD93GOzH3i5) · [Code](https://github.com/hendrycks/apps) · [Card](../../cards/benchmarks/apps.md)
  _Data object:_ Python code submission evaluated against test cases.; process: difficulty, prompt, starter code where available, generated solution, public/hidden test outcomes.; offline programming benchmark with executable Python tests.
  _Feedback / verifier:_ unit-test pass/fail signal.
  _Recipe signal:_ teacher: benchmark tests and reference solutions provide supervision surface.; generator: models produce candidate programs from problem text.
  _Audit focus:_ Programs can overfit weak tests., Syntax validity is not the same as functional correctness., Contamination can inflate code benchmark scores.
  _Why it matters:_ It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome.
- 📦 **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.02951) · [Card](../../cards/releases/kodcode.md)
  _Data object:_ question-solution-test triplet; process: problem, solution, unit tests; code execution and unit-test substrate
  _Feedback / verifier:_ test-based self-verification
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
- 📦 **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.09075) · [Card](../../cards/releases/opencodereasoning_ii.md)
  _Data object:_ question-solution-critique triple; process: solution, critique, language/runtime label; coding benchmark / compiler substrate
  _Feedback / verifier:_ tests and critique model signals
  _Recipe signal:_ trace writing; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- 🌐 **[REASONING GYM: Reasoning Environments for Reinforcement Learning with Verifiable Rewards](https://openreview.net/forum?id=GqYSunGmp7)**
  <sub>2025 · NeurIPS 2025 Spotlight · 🌐 agent environment · 🏗️ construction recipe · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://openreview.net/forum?id=GqYSunGmp7) · [arXiv](https://arxiv.org/abs/2505.24760) · [DOI](https://doi.org/10.48550/arXiv.2505.24760) · [Code](https://github.com/open-thought/reasoning-gym) · [Card](../../cards/agents/reasoning-gym.md)
  _Data object:_ Each generated entry contains question, answer, and metadata fields; model-answer syntax and the set of valid solutions are task-specific.; process: task or source-dataset name, generator configuration, seed and generated-item index; ProceduralDataset generators, a named task registry, weighted composite datasets, optional reseeding for unbounded streams, and optional task curricula.
  _Feedback / verifier:_ Each task supplies a score answer function yielding an algorithmic scalar reward; current releases optionally add native, normalized-string, numeric, and symbolic-math cascade scoring.
  _Recipe signal:_ teacher: none; generator: Registered task-specific Python procedural generators with difficulty, structural, and stylistic parameters.
  _Audit focus:_ The library is a dynamic generator collection rather than a canonical fixed dataset, so task counts, defaults, outputs, and verifier behavior can change across revisions., The base score answer implementation gives partial credit when an oracle string appears inside a longer response, creating a false-positive surface., The optional cascade only upgrades scores and adds normalization, numeric tolerance, and symbolic matching; this reduces formatting false negatives but broadens acceptance.
  _Why it matters:_ It turns reasoning-data construction into a versioned executable environment layer where tasks can be generated on demand, difficulty can drive curricula, and rewards can be computed without a fixed human-curated corpus.
- 🧰 **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.18901) · [Card](../../cards/agents/appworld.md)
  _Data object:_ API/tool action trajectory; process: tool call, state transition, observation; simulated app ecosystem with users and APIs
  _Feedback / verifier:_ programmatic environment assertions
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.

### <a id="formal-proof-lean-theorem-proving"></a>🧾 Formal proof / Lean / theorem proving

- 🚀 **[DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · rlvr · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) · [Card](../../cards/recipes/deepseek-prover-v2.md)
  _Data object:_ subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline.
  _Feedback / verifier:_ Lean verification and RL reward over formal proof success.
  _Recipe signal:_ teacher: DeepSeek-V3-style decomposition and formal proof feedback.; generator: recursive pipeline creates subgoals and proof attempts.
  _Audit focus:_ Subgoal decomposition can introduce false intermediate claims., Formal and informal reasoning scores are not directly comparable., Large-model teacher lineage can hide data provenance.
  _Why it matters:_ It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification.
- 🏗️ **[DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](https://arxiv.org/abs/2408.08152)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🚀 model report · programmatic · environmental · rlvr · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2408.08152) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL) · [Card](../../cards/recipes/deepseek-prover-v1-5.md)
  _Data object:_ Lean proof script, proof-search path, feedback signal, and verification result.; process: theorem, proof attempt, Lean feedback, reward, search node, final proof, pass/fail result.; Lean 4 proof assistant plus RMaxTS search procedure.
  _Feedback / verifier:_ proof assistant feedback used for RL and search selection.
  _Recipe signal:_ teacher: Lean checker feedback and prior formal-proof dataset.; generator: model samples proof candidates and tree-search paths.
  _Audit focus:_ Search budget can dominate model quality., Checker feedback is sparse and version-dependent., RL can optimize toward easy theorem families.
  _Why it matters:_ It shows how proof-assistant feedback can become both a reward signal and a search guide for formal mathematical reasoning.
- 📦 **[DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333)**
  <sub>2024 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · environmental · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1) · [Card](../../cards/recipes/deepseek-prover.md)
  _Data object:_ Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness.
  _Feedback / verifier:_ Lean kernel/checker acceptance.
  _Recipe signal:_ teacher: formalization and proof-generation pipeline with Lean feedback.; generator: synthetic data pipeline translates informal math into formal statements and proofs.
  _Audit focus:_ Formal statements can be wrong even if proofs verify., Pass@k hides low single-shot reliability., Lean/mathlib version drift can break reproducibility.
  _Why it matters:_ It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object.
- 📦 **[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 📦 data release · 🧰 benchmark · environmental · programmatic · agent training · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md)
  _Data object:_ Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.
  _Feedback / verifier:_ Lean checker and environment feedback.
  _Recipe signal:_ teacher: Lean math-library proofs and proof-assistant feedback.; generator: data-extraction toolkit traces repositories and prover generates tactics.
  _Audit focus:_ A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
- 🧰 **[miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110)**
  <sub>2021 · ICLR · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.00110) · [OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [Code](https://github.com/openai/miniF2F) · [Card](../../cards/benchmarks/minif2f.md)
  _Data object:_ formal proof accepted by a target proof assistant.; process: formal system, theorem statement, split, generated proof/tactics, verifier result.; Lean, Metamath, Isabelle, and HOL Light style theorem proving environments.
  _Feedback / verifier:_ proof assistant kernel/checker acceptance.
  _Recipe signal:_ teacher: formalized benchmark statements and proof assistant checkers.; generator: human translators and theorem prover agents produce proof attempts.
  _Audit focus:_ A theorem can be easier in one formal system than another., Search budget can dominate model differences., Forks can drift from the original benchmark.
  _Why it matters:_ It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof.
- 📄 **[Goedel-Prover-V2: Scaling Formal Theorem Proving with Scaffolded Data Synthesis and Self-Correction](https://arxiv.org/abs/2508.03613)**
  <sub>2025 · arXiv preprint arXiv:2508.03613 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.03613)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="verifier-robustness-and-answer-extraction"></a>🧪 Verifier robustness and answer extraction

- 🪜 **[AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV)
  _Data object:_ step-level confidence-change annotations; process: reasoning step, verifier confidence, relative confidence change; offline reasoning traces
  _Feedback / verifier:_ answer-trained verifier converted into process annotations
  _Recipe signal:_ generator: model-generated candidate reasoning; filtering rule: changes in verifier confidence across steps
  _Audit focus:_ answer-level verifier confidence can mislabel intermediate steps, relative confidence changes may not identify causal first errors, commonsense and math tasks may require different error taxonomies
  _Why it matters:_ It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision.
- 🧭 **[AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131)**
  <sub>2025 · arXiv preprint arXiv:2506.13131 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.13131)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning](https://arxiv.org/abs/2505.22203)**
  <sub>2025 · arXiv preprint arXiv:2505.22203 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.22203)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[Scaling Behaviors of LLM Reinforcement Learning Post-Training: An Empirical Study in Mathematical Reasoning](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv preprint arXiv:2509.25300 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.25300)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="programmatic-benchmarks"></a>🧰 Programmatic benchmarks

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
- 🧰 **[SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168)**
  <sub>2024 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2407.13168) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/scicode-bench/SciCode) · [Project](https://scicode-bench.github.io/) · [Card](../../cards/benchmarks/scicode.md)
  _Data object:_ code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness.
  _Feedback / verifier:_ test cases and scientist-curated gold solutions.
  _Recipe signal:_ teacher: scientists and AI researchers curate problems, decompositions, solutions, and tests.; generator: models produce code for subproblems and main problems.
  _Audit focus:_ Models can pass narrow tests without scientific validity., Domain background can leak solution hints., Execution environments can change numerical results.
  _Why it matters:_ It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests.
- 📈 **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 📈 scaling study · 🧭 survey background · mixed · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw) · [Card](../../cards/recipes/self-consistency-chain-of-thought.md)
  _Data object:_ multiple rationales and final answers for the same prompt.; process: sampling temperature, number of paths, answer extraction, aggregation rule.; benchmark prompting setup.
  _Feedback / verifier:_ majority or marginalization over sampled answers.
  _Recipe signal:_ teacher: few-shot chain-of-thought exemplars.; generator: model samples many reasoning paths.
  _Audit focus:_ More samples can amplify benchmark-specific shortcuts., Aggregation does not guarantee step faithfulness., Unmatched inference budgets can make methods look better than they are.
  _Why it matters:_ It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.
- 🧭 **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · unknown · unknown · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07086) · [Card](../../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains.
- 📦 **[OpenCodeReasoning: Advancing Data Distillation for Competitive Coding](https://arxiv.org/abs/2504.01943)**
  <sub>2025 · COLM 2025 · 📦 data release · 🏗️ construction recipe · programmatic · judgment required · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.01943) · [Venue](https://colmweb.org/2025/AcceptedPapers.html) · [Code](https://github.com/NVIDIA/NeMo-Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenCodeReasoning) · [Card](../../cards/releases/opencodereasoning.md)
  _Data object:_ Python competitive-programming response with reasoning trace, final code block, and extracted solution code.; process: id, input, output; Offline SFT corpus for competitive-programming code reasoning; unit-test/code-execution substrate is used in ablations and benchmark evaluation.
  _Feedback / verifier:_ Format filters for reasoning traces and code blocks, Tree-sitter syntax parsing, benchmark-contamination checks with embedding similarity plus LLM/manual review, and unit-test execution for CodeContests ablation; final release is not strictly execution-filtered.
  _Recipe signal:_ teacher: DeepSeek-R1.; generator: DeepSeek-R1 generations served through SGLang.
  _Audit focus:_ Syntax-valid code is not necessarily semantically correct., Final release is not guaranteed to contain only unit-test-passing solutions., Incorrect teacher solutions may still transfer useful patterns but can also teach wrong reasoning.
  _Why it matters:_ It is a strong construction-recipe entry for code reasoning data because it exposes the source mixture, teacher-trace generation setup, post-processing filters, released HF fields, and an important negative result that execution filtering alone can reduce downstream benchmark performance by removing hard or diverse samples.
- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124) · [Card](../../cards/verifiers/prmbench.md)
  _Data object:_ step-level labels or scores; process: step, label, error type; offline reasoning traces
  _Feedback / verifier:_ process-level reward model benchmark
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
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
- 📦 **[SWE-smith: Scaling Data for Software Engineering Agents](https://arxiv.org/abs/2504.21798)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · environmental · agent training · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.21798) · [OpenReview](https://openreview.net/forum?id=63iVrXc8cC) · [DOI](https://doi.org/10.48550/arXiv.2504.21798) · [Code](https://github.com/SWE-bench/SWE-smith) · [Data](https://huggingface.co/datasets/SWE-bench/SWE-smith) · [Project](https://swesmith.com/) · [Card](../../cards/agents/swe-smith.md)
  _Data object:_ Repository-level SWE task instance with problem statement, repo, base commit, patch/test patch metadata, FAIL TO PASS/PASS TO PASS tests, and optional message/action trajectories.; process: repo and base commit, problem statement, patch and test patch; Python repository checkout at a pinned base commit with executable tests.
  _Feedback / verifier:_ Executable regression tests and environment checks; no learned reward model is part of the data release.
  _Recipe signal:_ teacher: unknown as a single teacher; released expert trajectories use listed frontier-model SWE-agent runs.; generator: SWE-smith.prog transforms existing Python functions, while SWE-smith.gen uses language models to generate new functions/classes after environment setup; exact generator model names require paper/code audit.
  _Audit focus:_ Generated tests can encode shallow or brittle specifications., Repository environment failures can be mistaken for task difficulty., Training on synthetic SWE tasks may overfit to generator artifacts rather than real issue distributions.
  _Why it matters:_ It is a concrete recipe for scaling software-engineering agent data with executable tests, released code, and dataset artifacts, making it useful for studying construction pipelines rather than only benchmark scores.
- 🧰 **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · judgment required · programmatic · evaluation · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.06559) · [Card](../../cards/verifiers/processbench.md)
  _Data object:_ step labels or first-error markers; process: reasoning step, error marker, diagnostic label; offline math traces
  _Feedback / verifier:_ process-error detector
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- 📦 **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.16789) · [Card](../../cards/agents/toolllm_toolbench.md)
  _Data object:_ tool-call trajectory plus final response; process: API call, arguments, tool response; real-world API/tool catalog
  _Feedback / verifier:_ tool response validity and task success checks
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.
- 🧭 **[A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328)**
  <sub>2025 · arXiv · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.12328) · [DOI](https://doi.org/10.48550/arXiv.2504.12328) · [Project](https://github.com/JLZhong23/awesome-reward-models)
  _Data object:_ taxonomy of reward-model data sources, objectives, applications, evaluations, and challenges.; process: preference source, reward model architecture, usage mode; LLM reward-model training and evaluation pipelines.
  _Feedback / verifier:_ reward model as proxy objective for downstream post-training.
  _Recipe signal:_ teacher: human and AI preference sources summarized across reward-model literature.; generator: survey taxonomy and accompanying awesome list
  _Audit focus:_ Reward models may encode annotator bias, style bias, or length preference., Proxy rewards can be overoptimized or attacked when used as training objectives., Benchmark scores can obscure whether the reward model is useful for reasoning data.
  _Why it matters:_ It gives readers a reward-model-specific map, which is essential before comparing learned human-preference rewards with PRMs, rubric rewards, and programmatic RLVR verifiers.

### <a id="other-related-work"></a>Other related work

- 🧭 **[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216)**
  <sub>2024 · arXiv · 🧭 survey background · 📈 scaling study · mixed · programmatic · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216)
  _Data object:_ technical survey comparing RLHF and RLVR policy-gradient style post-training methods.; process: prompt sampling, response sampling, reward source; LLM post-training algorithms and reasoning tasks such as math and coding.
  _Feedback / verifier:_ learned preference rewards, verifiable rewards, and policy-gradient objectives.
  _Recipe signal:_ teacher: literature covering human feedback, verifiable rewards, and post-training optimization.; generator: technical survey and unified policy-gradient framework
  _Audit focus:_ Method comparisons can mix data effects with optimizer and sampling-budget effects., RLHF and RLVR rewards are often discussed together despite different verification contracts., Implementation details can dominate reported gains if not separated from data quality.
  _Why it matters:_ It connects classic RLHF and reward modeling to reasoning-oriented RLVR, helping readers avoid conflating human preference rewards with programmatic or verifiable rewards.

### ⚠️ Needs search or metadata

- 📦 **[Efficient PRM Training Data Synthesis via Formal Verification](https://aclanthology.org/2026.findings-acl.403/)**
  <sub>2026 · Findings of ACL 2026 · 📦 data release · 🧪 verifier reward · programmatic · reward modeling · process supervision · L4_carded</sub>
  [Paper](https://aclanthology.org/2026.findings-acl.403/) · [arXiv](https://arxiv.org/abs/2505.15960) · [DOI](https://doi.org/10.18653/v1/2026.findings-acl.403) · [Code](https://github.com/psunlpgroup/FoVer) · [Data](https://huggingface.co/datasets/ryokamoi/FoVer-FormalLogic-FormalProof-Qwen-2.5-7B-LastStepBalanced-40k) · [HF](https://huggingface.co/collections/ryokamoi/fover) · [Project](https://fover-prm.github.io/) · [Card](../../cards/verifiers/fover.md)
  _Data object:_ Each record contains a formal problem, ordered solution steps, aligned Boolean error labels, conversation-form training/prediction representations, base dataset, and task-specific formula metadata.; process: id, problem, solution steps; Z3 first-order-logic checking and Isabelle/HOL theorem proving. Isabelle syntax is checked with sorry placeholders and each target step is verified while other proof steps are replaced by sorry.
  _Feedback / verifier:_ Z3 or Isabelle emits binary correctness per formal step. The trained PRM predicts correct/incorrect tokens and their normalized logits become step-level reward scores.
  _Recipe signal:_ teacher: No human or LLM teacher supplies error labels; Z3 and Isabelle provide programmatic labels while Llama and Qwen generate candidate traces.; generator: Few-shot prompts elicit verifier-compatible formal solutions; the pipeline retries until syntactically valid and then applies step-level Z3/Isabelle wrappers.
  _Audit focus:_ A generated Isabelle statement can misformalize the natural-language problem while still receiving formally correct labels., Parser, type, tactic, timeout, dependency or prover-environment failures may be mapped to Boolean labels without an error-type field or prover log., Isabelle independent-step verification replaces other steps with sorry and can miss dependency-chain or scoping errors.
  _Why it matters:_ It demonstrates a low-LLM-call route to process supervision while making formalization fidelity, prover wrappers, step-dependency assumptions, dataset versioning and informal-domain transfer explicit audit boundaries.
- 🚀 **[Nemotron-Cascade 2: Post-Training LLMs with Cascade RL and Multi-Domain On-Policy Distillation](https://arxiv.org/abs/2603.19220)**
  <sub>2026 · NVIDIA Technical Report · 🚀 model report · 📦 data release · programmatic · mixed · sft · distillation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2603.19220) · [Venue](https://research.nvidia.com/labs/nemotron/nemotron-cascade-2/) · [DOI](https://doi.org/10.48550/arXiv.2603.19220) · [Data](https://huggingface.co/datasets/nvidia/Nemotron-Cascade-2-SFT-Data) · [HF](https://huggingface.co/nvidia/Nemotron-Cascade-2-30B-A3B)
  _Data object:_ SFT messages and subset-specific RL prompts/constraints/metadata; process: domain, source, messages; Cascade RL, Docker terminal/SWE and agent scaffolds
  _Feedback / verifier:_ Rules/tests plus generative reward and LLM judges by stage
  _Recipe signal:_ teacher: Domain-specific teachers and intermediate Cascade checkpoints; generator: Teachers for SFT; current policy for GRPO; execution feedback for agents
  _Audit focus:_ No full rollout groups, reward logs or stage checkpoints, Dynamic filtering changes effective distribution, Mixed verifier contracts and unpinned agent environments remain risky
  _Why it matters:_ Shows that a released RL dataset can be only prompt/metadata rather than the online training evidence.
- 🏗️ **[Prompt Curriculum Learning for Efficient LLM Post-Training](https://arxiv.org/abs/2510.01135)**
  <sub>2026 · ICLR 2026 · 🏗️ construction recipe · 📈 scaling study · programmatic · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2510.01135) · [Venue](https://openreview.net/forum?id=zqOCacBD3P) · [DOI](https://doi.org/10.48550/arXiv.2510.01135)
  _Data object:_ Prompt, selected-prompt indicator, rollouts, and terminal binary correctness reward; row records are unreleased.; process: candidate prompt, value prediction, selection indicator; Synchronous verl RL with a concurrently refreshed prompt-only value model.
  _Feedback / verifier:_ math-verify final-answer correctness.
  _Recipe signal:_ teacher: No external teacher; value model learns from current rollout rewards.; generator: Current policy after selection.
  _Audit focus:_ Selector is trained only on selected prompts, fixed-threshold selection changes curriculum, no official code/data/log/checkpoint release exists.
  _Why it matters:_ It separates rollout-free selection from rollout-dependent optimization and records missing selection evidence.
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
- 📄 **MATH-Perturb**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📦 **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · programmatic · sft · distillation · L0_seeded</sub>
  [Code](https://github.com/huggingface/open-r1) · [HF](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k) · [Card](../../cards/releases/openr1.md)
  _Data object:_ math problem with reasoning trace and final answer; process: problem, reasoning trace, answer; offline math corpus
  _Feedback / verifier:_ math answer verifier / filtering pipeline
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- 📄 **Process reward models for code reasoning**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Qwen2.5-Math-PRM**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🚀 **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · sft · rlvr · L0_seeded</sub>
  [Code](https://github.com/QwenLM/Qwen3-Coder) · [Project](https://qwenlm.github.io/blog/qwen3-coder/) · [Card](../../cards/recipes/qwen3_coder.md)
  _Data object:_ code solution, tool-call, or agent trajectory; process: code answer, tool call, execution result; code execution and agent task environments
  _Feedback / verifier:_ unit tests, execution feedback, and agent task success signals
  _Recipe signal:_ frontier pipeline; optimizer scaffold; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- 📄 **R2E-Gym: Procedural training environments for repository-level code agents**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **VAR-MATH**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
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
- 📄 **FrontierMath: A benchmark for evaluating advanced mathematical reasoning in AI**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **GSM-Symbolic**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Goedel-Prover: A frontier model for open-source automated theorem proving**
  <sub>2024 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **OpenCodeInterpreter: Integrating code generation with execution and refinement**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Large language models encode clinical knowledge**
  <sub>2023 · Nature · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
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
- 📄 **MetaMath: Bootstrap your own mathematical questions for large language models**
  <sub>2023 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **ProofNet: Autoformalizing and formally proving undergraduate-level mathematics**
  <sub>2023 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **SelfCodeAlign: Self-alignment for code generation**
  <sub>2023 · unknown · unknown · unknown · L0_seeded</sub>
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
- 📄 **CodeRL: Mastering code generation through pretrained models and deep reinforcement learning**
  <sub>2022 · NeurIPS · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **CodeT: Code generation with generated tests**
  <sub>2022 · ICLR · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Draft, sketch, and prove: Guiding formal theorem provers with informal proofs**
  <sub>2022 · ICLR · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Solving math word problems with process- and outcome-based feedback**
  <sub>2022 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **HOList: An environment for machine learning of higher-order logic theorem proving**
  <sub>2019 · ICML · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

## 6. What to Audit

- Is the answer normalizer, unit-test harness, proof checker, or execution environment reproducible?
- Are false positives, false negatives, and formatting shortcuts discussed?
- Are train/test split and contamination checks visible?

## 7. Open Problems

- How should math releases expose answer normalizers and edge cases?
- Can public code benchmarks remain useful once they become training signals?
- What metadata is needed to replay proof-checking environments?
- How should accepted and rejected programmatic rollouts be released?

## 8. Related Cards

- [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](../../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
- [Absolute Zero: Reinforced Self-play Reasoning with Zero Data](../../cards/recipes/absolute_zero.md)
- [DAPO: An Open-Source LLM Reinforcement Learning System at Scale](../../cards/releases/dapo.md)
- [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](../../cards/recipes/deepseek-prover-v2.md)
- [DeepSeek-R1](../../cards/recipes/deepseek_r1.md)
- [Kimi K1.5: Scaling Reinforcement Learning with LLMs](../../cards/recipes/kimi_k15.md)
- [KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](../../cards/releases/kodcode.md)
- [LIMO: Less Is More for Reasoning](../../cards/releases/limo.md)
- [Magistral](../../cards/recipes/magistral.md)
- [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](../../cards/recipes/minimax_m1.md)
- [NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](../../cards/releases/naturalreasoning.md)
- [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](../../cards/releases/opencodereasoning_ii.md)
- [OpenCodeReasoning: Advancing Data Distillation for Competitive Coding](../../cards/releases/opencodereasoning.md)
- [OpenMathReasoning: A large-scale dataset of math reasoning traces](../../cards/releases/openmathreasoning.md)
- [OpenThoughts: Data recipes for reasoning models](../../cards/releases/openthoughts.md)
- [PRMBench: A fine-grained and challenging benchmark for process-level reward models](../../cards/verifiers/prmbench.md)
- [Phi-4-reasoning Technical Report](../../cards/recipes/phi4_reasoning.md)
- [Qwen3 Technical Report](../../cards/recipes/qwen3.md)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
