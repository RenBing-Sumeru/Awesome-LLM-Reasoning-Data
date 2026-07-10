# 📈 Scaling, RLVR, and Test-Time Compute

> Data scaling, data reuse, RLVR optimization, verifier scaling, pass@k, sampling budgets, test-time compute, and scaling attribution.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=scaling_rlvr_test_time_compute&mode=find_papers)
> Try: `What should I read first for 📈 Scaling / RLVR / TTC?`
> Try: `Compare the data objects and verifier types in 📈 Scaling / RLVR / TTC.`
> Try: `Generate an audit checklist for 📈 Scaling / RLVR / TTC.`

## 1. What This Track Studies

Use this track to interpret claims about how much data, verifier strength, RL, and inference budget contribute to reasoning gains.

Scaling claims are central to modern reasoning models. Papers report more data, stronger verifiers, larger rollout budgets, better RL optimization, longer thinking, and better pass@k. This track helps readers separate those factors instead of treating every gain as a generic reasoning-data improvement.

RLVR makes the data/verifier link especially visible. A verifier can generate reward, filter samples, guide search, and evaluate final answers. The same benchmark can also become a training target. Good curation records the reward contract, data reuse, rollout policy, and inference budget.

For high-impact use, this track should become the place readers visit before believing a scaling curve.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 📈 Data scaling | number, diversity, difficulty, and uniqueness of examples | unique examples and repeated rollouts are conflated |
| 🔁 Data reuse and uniqueness | reuse counts, deduplication, repeated prompts, and train/test overlap | same source examples are counted as fresh data |
| ⏱️ Test-time compute | sampling, search, self-critique, thinking budgets, and inference-time scaling | different inference budgets are compared |
| 🎲 pass@k / sampling budget | pass@k, repeated sampling, best-of-N, and budget-aware evaluation | reported gains hide selection or budget changes |
| 🧪 Verifier scaling | how verifier strength, refresh, and coverage scale with training | verifier becomes stale or easy to exploit |
| 🏋️ RLVR optimization scaling | policy optimization, reward contracts, curriculum, and rollout policy | optimizer/scaffold gains are mistaken for data gains |
| 🔍 Scaling attribution | separating data, verifier, optimizer, model, and inference-budget effects | ablation tables do not isolate the source of improvement |

### Contents

- [📈 Data scaling](#data-scaling)
- [🔁 Data reuse and uniqueness](#data-reuse-and-uniqueness)
- [⏱️ Test-time compute](#test-time-compute)
- [🎲 pass@k / sampling budget](#pass-k-sampling-budget)
- [🧪 Verifier scaling](#verifier-scaling)
- [🏋️ RLVR optimization scaling](#rlvr-optimization-scaling)
- [🔍 Scaling attribution](#scaling-attribution)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) | 2025 | [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) | subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline. | Lean verification and RL reward over formal proof success. | It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification. |
| [DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333) | 2024 | [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1) | Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness. | Lean kernel/checker acceptance. | It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object. |
| [OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560) | 2024 | [Paper](https://arxiv.org/abs/2410.01560) · [OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [Code](https://github.com/NVIDIA-NeMo/Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/) | problem-solution pair with natural-language mathematical reasoning and final answer.; process: source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.; NVIDIA NeMo-Skills generation, training, and evaluation pipeline. | answer checks and benchmark evaluation over math tasks. | It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models. |
| [Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) | 2024 | [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) | instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases. | mixture of preference labels, reward models, and verifiable rewards depending on stage. | It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together. |
| [UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377) | 2023 | [Paper](https://arxiv.org/abs/2310.01377) · [Code](https://github.com/OpenBMB/UltraFeedback) · [Data](https://huggingface.co/datasets/openbmb/UltraFeedback) | instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline. | AI-generated scalar and textual feedback over response quality dimensions. | It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels. |
| [Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374) | 2021 | [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) | executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite. | HumanEval tests and pass@k evaluation. | It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions. |
| [GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168) | 2021 | [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) | natural-language solution with final numeric answer; process: question, solution, final answer; offline math benchmark | answer extraction and arithmetic correctness checks | It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training. |
| [HumanEval: Hand-Written Evaluation Set](https://arxiv.org/abs/2107.03374) | 2021 | [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) | Python function completion; process: prompt, canonical solution, unit tests; Python execution harness | unit tests | It made unit-test execution a standard verifier for code reasoning, pass@k reporting, and later code-data filtering recipes. |
| [Measuring coding challenge competence with APPS](https://arxiv.org/abs/2105.09938) | 2021 | [Paper](https://arxiv.org/abs/2105.09938) · [OpenReview](https://openreview.net/forum?id=sD93GOzH3i5) · [Code](https://github.com/hendrycks/apps) | Python code submission evaluated against test cases.; process: difficulty, prompt, starter code where available, generated solution, public/hidden test outcomes.; offline programming benchmark with executable Python tests. | unit-test pass/fail signal. | It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome. |
| [Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168) | 2021 | [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) | answer level; scalar reward | programmatic, judgment required | It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows. |

## 5. Full Paper List

### <a id="data-scaling"></a>📈 Data scaling

- 📦 **[DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333)**
  <sub>2024 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · environmental · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1)
  _Data object:_ Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness.
  _Feedback / verifier:_ Lean kernel/checker acceptance.
  _Recipe signal:_ teacher: formalization and proof-generation pipeline with Lean feedback.; generator: synthetic data pipeline translates informal math into formal statements and proofs.
  _Audit focus:_ Formal statements can be wrong even if proofs verify., Pass@k hides low single-shot reliability., Lean/mathlib version drift can break reproducibility.
  _Why it matters:_ It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object.
- 📦 **[UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377)**
  <sub>2023 · ICML · 📦 data release · 🧪 verifier reward · judgment required · preference learning · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.01377) · [Code](https://github.com/OpenBMB/UltraFeedback) · [Data](https://huggingface.co/datasets/openbmb/UltraFeedback)
  _Data object:_ instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline.
  _Feedback / verifier:_ AI-generated scalar and textual feedback over response quality dimensions.
  _Recipe signal:_ teacher: AI judge annotations and rubric instructions.; generator: candidate responses are sampled from a diverse model pool.
  _Audit focus:_ AI feedback can encode judge-model bias., A corrected dataset version can change reward-model behavior., Fine-grained scores may not translate cleanly into pairwise preferences.
  _Why it matters:_ It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels.
- 📦 **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · programmatic · rlvr · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.17387)
  _Data object:_ math problem, answer, and verification signal; process: problem, answer, verification label; offline math verifier substrate
  _Feedback / verifier:_ answer-level math verifier
  _Recipe signal:_ prompt sourcing; reward verifier layer; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- 📦 **[NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](https://arxiv.org/abs/2502.13124)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.13124)
  _Data object:_ question with reference answer or reasoning target; process: question, reference answer, domain label; offline natural-language tasks
  _Feedback / verifier:_ reference answers, reward models, or self-rewarding depending on split
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.
- 📦 **[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16891)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ prompt sourcing; trace writing; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale math reasoning trace release for programmatic verification.
- 📈 **[Scaling Relationship on Learning Mathematical Reasoning with Large Language Models](https://arxiv.org/abs/2308.01825)**
  <sub>2023 · arXiv · 📈 scaling study · 🏗️ construction recipe · programmatic · sft · distillation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2308.01825)
  _Data object:_ math problem, generated reasoning trace, final answer, and correctness label.; process: problem, generated reasoning path, final answer; math answer-verification benchmark.
  _Feedback / verifier:_ final-answer correctness used for rejection sampling.
  _Recipe signal:_ teacher: supervised models and answer verifiers.; generator: rejection sampling fine-tuning pipeline.
  _Audit focus:_ More accepted traces can mean repeated near-duplicates rather than new problems., Final-answer filtering can keep invalid reasoning with correct answers., Data-scaling curves can conflate base-model quality with verifier selectivity.
  _Why it matters:_ It gives Track 10 a pre-RLVR data-scaling anchor for separating unique examples from accepted rollout traces.
- 🧭 **[DeepMath-103K: A Large-Scale, Challenging, Decontaminated, and Verifiable Mathematical Dataset for Advancing Reasoning](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv preprint arXiv:2504.11456 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2504.11456)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="data-reuse-and-uniqueness"></a>🔁 Data reuse and uniqueness

- 📈 **[Scaling Behaviors of LLM Reinforcement Learning Post-Training](https://arxiv.org/abs/2509.25300)**
  <sub>2025 · arXiv · 📈 scaling study · 🏗️ construction recipe · programmatic · rlvr · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2509.25300)
  _Data object:_ problem, generated solution/answer, reward outcome, and training curve metrics.; process: model size, data volume, compute budget, optimization steps, reward signal, validation performance.; RL post-training experiments over math tasks.
  _Feedback / verifier:_ answer-level reward for mathematical reasoning and scaling curves.
  _Recipe signal:_ teacher: reward signal and math benchmark labels.; generator: RL policy rollouts during post-training.
  _Audit focus:_ Math-only scaling can overstate transfer to open-ended reasoning., Repeated data reuse can improve metrics while increasing overfitting risk., Power-law fits can hide reward or benchmark artifacts.
  _Why it matters:_ It helps turn RLVR from recipe folklore into a scaling problem: data reuse, optimization steps, and model size have different effects on learning efficiency and final performance.
- 🧯 **[Language Model Developers Should Report Train-Test Overlap](https://arxiv.org/abs/2410.08385)**
  <sub>2024 · arXiv · 🧯 audit failure · 🧭 survey background · unknown · audit · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2410.08385)
  _Data object:_ overlap and reporting analysis.; process: training corpus, evaluation set, overlap estimate, reporting policy.; benchmark and training-data documentation.
  _Feedback / verifier:_ overlap analysis rather than a reward model.
  _Recipe signal:_ filtering rule: overlap reporting and audit policy.
  _Audit focus:_ Reported benchmark gains can be inflated when train-test overlap is not disclosed.
  _Why it matters:_ It gives the scaling track a concrete data-reuse and uniqueness reference for checking whether repeated or overlapping examples are counted as fresh evidence.

### <a id="test-time-compute"></a>⏱️ Test-time compute

- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧰 benchmark · judgment required · environmental · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts)
  _Data object:_ internal reasoning trace, final answer, and leakage/extraction outcome.; process: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.; personal-agent evaluation setting with hidden or internal reasoning traces.
  _Feedback / verifier:_ extraction probes and agentic evaluations.
  _Recipe signal:_ teacher: not applicable; this is an audit benchmark.; generator: models produce reasoning traces under normal or injected prompts.
  _Audit focus:_ Hiding thoughts from users does not make them safe., Trace logging can create a new privacy dataset., Utility improvements from more reasoning may worsen leakage risk.
  _Why it matters:_ It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.
- 📈 **[The Art of Scaling Reinforcement Learning Compute for LLMs](https://arxiv.org/abs/2510.13786)**
  <sub>2025 · arXiv · 📈 scaling study · 🏗️ construction recipe · mixed · rlvr · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2510.13786) · [OpenReview](https://openreview.net/forum?id=FMjeC9Msws)
  _Data object:_ training runs, reward outcomes, validation curves, and ablation results.; process: loss aggregation, normalization, curriculum, off-policy choice, compute budget, asymptote, efficiency.; large-scale RL training experiments.
  _Feedback / verifier:_ compute-performance curves and recipe ablations.
  _Recipe signal:_ teacher: reward signal and validation tasks.; generator: RL policies under ablated recipes.
  _Audit focus:_ Compute-heavy studies can be hard to reproduce., Best-practice recipes may depend on task/reward families., Scaling curves can encourage overconfidence if validation tasks are narrow.
  _Why it matters:_ It gives atlas readers a framework for judging RL recipe claims: some choices move the ceiling, while others mostly change how cheaply the run reaches it.
- 🏗️ **[s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · mixed · sft · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.19393)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; scaling report; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a useful counterpoint to massive-data recipes: careful small-set curation plus inference-budget control can materially change reasoning performance.
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
  [Paper](https://arxiv.org/abs/2402.03300) · [Code](https://github.com/deepseek-ai/deepseek-math) · [HF](https://huggingface.co/collections/deepseek-ai/deepseek-math)
  _Data object:_ natural-language mathematical solution plus final answer, sometimes sampled multiple times.; process: data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.; offline math training and benchmark evaluation pipeline.
  _Feedback / verifier:_ answer correctness and GRPO-style reward over math tasks.
  _Recipe signal:_ teacher: math corpora, supervised examples, and verifiable benchmark answers.; generator: model produces solutions during SFT, RL, and self-consistency sampling.
  _Audit focus:_ Self-consistency can hide weak single-sample accuracy., Web-data mining may import benchmark leakage., Final-answer rewards can miss flawed derivations.
  _Why it matters:_ It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.
- 🚀 **[Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2409.12122) · [Code](https://github.com/QwenLM/Qwen2.5-Math) · [HF](https://huggingface.co/Qwen/Qwen2.5-Math-7B) · [Project](https://qwenlm.github.io/blog/qwen2.5-math/)
  _Data object:_ math solution, final answer, optional tool/code execution trace, and reward-model score.; process: model stage, problem source, reasoning mode, tool use, answer, reward score, benchmark result.; Qwen math model family, GitHub evaluation scripts, and Hugging Face model releases.
  _Feedback / verifier:_ math answer checks, reward model signals, and benchmark evaluations.
  _Recipe signal:_ teacher: self-improvement pipeline and math reward/evaluation signals.; generator: math-specialized models generate solutions and tool-integrated traces.
  _Audit focus:_ Tool-integrated results are not comparable to no-tool results., Reward models can favor format over proof validity., Model-family reports can blur data and inference effects.
  _Why it matters:_ It is a useful model-report case where math post-training data, reward models, tool-integrated reasoning, and multilingual math evaluation are tied together.
- 🧪 **[Rewarding progress: Scaling automated process verifiers for LLM reasoning](https://arxiv.org/abs/2410.08146)**
  <sub>2024 · ICLR · 🧪 verifier reward · 🪜 process supervision · programmatic · mixed · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2410.08146) · [OpenReview](https://openreview.net/forum?id=A6Y7AqlzLW)
  _Data object:_ step-level process advantage score plus final answer/correctness signal.; process: problem, partial trace before step, step, future success estimate, verifier score, final outcome.; reasoning search and online RL setup using process rewards.
  _Feedback / verifier:_ Process Advantage Verifier trained to predict progress toward correct answer.
  _Recipe signal:_ teacher: automated success estimates from prover policies and final correctness signals.; generator: policies produce traces used to train process verifiers.
  _Audit focus:_ Progress estimates can be policy-specific., Verifier-guided search can exploit reward artifacts., Step rewards can encourage short-term progress that hurts final correctness.
  _Why it matters:_ It gives process supervision a concrete target beyond dense labels: measure progress under a prover policy and use that signal for search or RL.
- 📈 **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 📈 scaling study · 🧭 survey background · mixed · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw)
  _Data object:_ multiple rationales and final answers for the same prompt.; process: sampling temperature, number of paths, answer extraction, aggregation rule.; benchmark prompting setup.
  _Feedback / verifier:_ majority or marginalization over sampled answers.
  _Recipe signal:_ teacher: few-shot chain-of-thought exemplars.; generator: model samples many reasoning paths.
  _Audit focus:_ More samples can amplify benchmark-specific shortcuts., Aggregation does not guarantee step faithfulness., Unmatched inference budgets can make methods look better than they are.
  _Why it matters:_ It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.
- 🧰 **[Measuring coding challenge competence with APPS](https://arxiv.org/abs/2105.09938)**
  <sub>2021 · NeurIPS · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2105.09938) · [OpenReview](https://openreview.net/forum?id=sD93GOzH3i5) · [Code](https://github.com/hendrycks/apps)
  _Data object:_ Python code submission evaluated against test cases.; process: difficulty, prompt, starter code where available, generated solution, public/hidden test outcomes.; offline programming benchmark with executable Python tests.
  _Feedback / verifier:_ unit-test pass/fail signal.
  _Recipe signal:_ teacher: benchmark tests and reference solutions provide supervision surface.; generator: models produce candidate programs from problem text.
  _Audit focus:_ Programs can overfit weak tests., Syntax validity is not the same as functional correctness., Contamination can inflate code benchmark scores.
  _Why it matters:_ It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome.
- 🚀 **[Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599)**
  <sub>2025 · arXiv · 🚀 model report · 📈 scaling study · mixed · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.12599)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; scaling report; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Frontier report used for long-context RL and scaling discussion.
- 🚀 **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · mixed · programmatic · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.13585) · [Code](https://github.com/MiniMax-AI/MiniMax-M1)
  _Data object:_ reasoning output, code/tool result, or agent task output; process: reasoning output, benchmark result, thinking budget; math, code, SWE, tool-use, and long-context evaluation surfaces
  _Feedback / verifier:_ programmatic, environment, and benchmark feedback
  _Recipe signal:_ frontier pipeline; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
- 📦 **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.09075)
  _Data object:_ question-solution-critique triple; process: solution, critique, language/runtime label; coding benchmark / compiler substrate
  _Feedback / verifier:_ tests and critique model signals
  _Recipe signal:_ trace writing; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- 🏗️ **[TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084)**
  <sub>2025 · arXiv preprint arXiv:2504.16084 · 🏗️ construction recipe · 📈 scaling study · mixed · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16084)
  _Data object:_ candidate response with reward/adaptation signal; process: unlabeled input, rollout, reward signal; test-time task distribution
  _Feedback / verifier:_ task-specific or learned reward used during adaptation
  _Recipe signal:_ optimizer scaffold; reward verifier layer; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.
- 🪜 **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.06592)
  _Data object:_ process supervision annotations; process: partial reasoning prefix, first-error signal, positive/negative step examples; offline math search tree
  _Feedback / verifier:_ automated process reward signal
  _Recipe signal:_ reward verifier layer; optimizer scaffold; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- 🚀 **[AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131)**
  <sub>2025 · arXiv / Google DeepMind white paper · 🚀 model report · 🏗️ construction recipe · programmatic · test time compute · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.13131) · [DOI](https://doi.org/10.48550/arXiv.2506.13131)
  _Data object:_ candidate program, evaluator score, mutation lineage, and accepted improvement.; process: initial program, candidate edit, evaluator score; sandboxed code execution and domain-specific evaluator functions.
  _Feedback / verifier:_ one or more programmatic evaluators scoring correctness and objective value.
  _Recipe signal:_ teacher: domain evaluator functions and existing high-scoring programs.; generator: LLM proposes direct code modifications for evolutionary search.
  _Audit focus:_ Evaluator design can overfit to narrow objective functions., Search budget and parallel evaluator count can dominate results., Accepted programs may be correct for benchmarked cases but brittle outside them.
  _Why it matters:_ It broadens Track 03/10 from answering benchmark problems to optimizing executable artifacts under explicit evaluator budgets.
- 🧯 **[Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?](https://arxiv.org/abs/2504.13837)**
  <sub>2025 · NeurIPS 2025 Oral · 🧯 audit failure · 📈 scaling study · programmatic · mixed · audit · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.13837) · [DOI](https://doi.org/10.48550/arXiv.2504.13837) · [Project](https://limit-of-RLVR.github.io)
  _Data object:_ problem, sampled reasoning paths, pass@k curve, and base-vs-RL comparison.; process: problem id, model variant, sample budget k; benchmark evaluation with large-k repeated sampling.
  _Feedback / verifier:_ task correctness checks and pass@k evaluation.
  _Recipe signal:_ teacher: benchmark answer verifiers and pass@k measurements.; generator: base and RL policies sampled many times.
  _Audit focus:_ Pass@k can credit lucky final answers without faithful reasoning., Sampling temperature and budget choices can change conclusions., RL may improve sampling efficiency while narrowing diversity.
  _Why it matters:_ It adds a representative counterpoint to RLVR scaling claims by making the base-model sampling distribution an explicit audit object.
- 🚀 **[Gold-medalist Performance in Solving Olympiad Geometry with AlphaGeometry2](https://arxiv.org/abs/2502.03544)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · sft · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.03544)
  _Data object:_ geometry statement, auxiliary construction, symbolic proof path, and solve result.; process: problem statement, representation-language translation, auxiliary construction; geometry representation language plus symbolic deduction engine.
  _Feedback / verifier:_ symbolic theorem-proving engine and solved/unsolved benchmark outcome.
  _Recipe signal:_ teacher: synthetic theorem generator and symbolic verifier.; generator: model proposes auxiliary constructions and shares knowledge across search trees.
  _Audit focus:_ Geometry-specific representation limits claims outside plane geometry., Search budget and translation coverage can dominate reported gold-medalist comparisons., Synthetic proof language may bias the model toward verifier-specific constructions.
  _Why it matters:_ It gives Track 03 and Track 10 a clean example where synthetic proof data, symbolic verification, and search budget are all first-class metadata.
- 🧰 **[KernelBench: Can LLMs Write Efficient GPU Kernels?](https://arxiv.org/abs/2502.10517)**
  <sub>2025 · arXiv · 🧰 benchmark · 📈 scaling study · programmatic · evaluation · test time compute · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.10517) · [DOI](https://doi.org/10.48550/arXiv.2502.10517)
  _Data object:_ workload specification, generated kernel, functional test result, speedup, and fast p score.; process: PyTorch workload, generated kernel, compilation result; GPU execution and profiling environment for kernel correctness and speed.
  _Feedback / verifier:_ functional correctness tests plus runtime speedup threshold.
  _Recipe signal:_ teacher: PyTorch workloads, baseline outputs, and runtime measurements.; generator: LLMs generate or iteratively refine GPU kernels.
  _Audit focus:_ Correct kernels can still be slower than baseline., Hardware-specific performance can vary widely., Compilation success can mask numerical precision bugs.
  _Why it matters:_ It adds a high-value code surface where the verifier is not only pass/fail correctness but also measured performance.
- 🧪 **[Free Process Rewards without Process Labels](https://arxiv.org/abs/2412.01981)**
  <sub>2024 · arXiv · 🧪 verifier reward · 🪜 process supervision · mixed · process supervision · reward modeling · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2412.01981)
  _Data object:_ instruction, response, outcome label, implicit step/process reward.; process: instruction, response, outcome label; math reasoning tasks with outcome supervision.
  _Feedback / verifier:_ implicit PRM derived from an outcome reward model.
  _Recipe signal:_ teacher: response-level outcome labels rather than step labels.; generator: ORM-trained model induces implicit process rewards.
  _Audit focus:_ Implicit process rewards inherit ORM assumptions., Correct final answers can still attach misleading step rewards., Majority voting can hide reward calibration failures.
  _Why it matters:_ It directly addresses a Track 10 bottleneck: whether PRM-style feedback scales without expensive process annotation.
- 🧪 **[Generative Verifiers: Reward Modeling as Next-Token Prediction](https://arxiv.org/abs/2408.15240)**
  <sub>2024 · arXiv · 🧪 verifier reward · 📈 scaling study · mixed · programmatic · reward modeling · test time compute · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2408.15240) · [DOI](https://doi.org/10.48550/arXiv.2408.15240)
  _Data object:_ problem, candidate solution, verification rationale, verifier judgment, and best-of-N selection.; process: problem, candidate solution, verification rationale; best-of-N reasoning evaluation with verifier-based selection.
  _Feedback / verifier:_ generative reward model trained with next-token prediction over verification data.
  _Recipe signal:_ teacher: verification labels and synthetic verification rationales.; generator: GenRM produces both solution/verifier text and judgment signals.
  _Audit focus:_ Verifier rationales can be plausible but wrong., Majority voting over verifier samples can hide calibration failures., Best-of-N improvements depend on both policy and verifier budgets.
  _Why it matters:_ It adds the verifier itself to the Track 10 compute-scaling object instead of treating it as a fixed scorer.
- 📈 **[Inference Scaling Laws: An Empirical Analysis of Compute-Optimal Inference for Problem-Solving with Language Models](https://arxiv.org/abs/2408.00724)**
  <sub>2024 · arXiv · 📈 scaling study · programmatic · mixed · test time compute · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2408.00724) · [DOI](https://doi.org/10.48550/arXiv.2408.00724)
  _Data object:_ problem, model size, inference strategy, compute budget, candidate answers, and correctness.; process: problem, model size, inference algorithm; compute-budgeted inference strategies for problem solving.
  _Feedback / verifier:_ benchmark final-answer correctness checks.
  _Recipe signal:_ teacher: benchmark answer checks and compute accounting.; generator: decoding/search algorithms generate candidate solutions.
  _Audit focus:_ FLOPs accounting can omit verifier/search overhead., Small-model advantage depends on task distribution and algorithm implementation., Tree-search gains may not transfer without reliable intermediate scoring.
  _Why it matters:_ It gives Track 10 a second compute-optimal anchor focused on algorithms and FLOPs accounting, not only verifier rewards.
- 📈 **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv · 📈 scaling study · programmatic · mixed · test time compute · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2407.21787) · [DOI](https://doi.org/10.48550/arXiv.2407.21787)
  _Data object:_ problem, sample budget, candidate solutions, coverage curve, and selection/verifier outcome.; process: problem id, sample index, candidate answer; benchmark tasks with automatic or proxy answer verification.
  _Feedback / verifier:_ task-specific correctness checks, code tests, formal proof checking, majority vote, or reward model selection.
  _Recipe signal:_ teacher: benchmark success predicates and verifier availability.; generator: repeated stochastic model sampling.
  _Audit focus:_ Coverage gains require reliable verifiers to become usable answers., Aggregate curves can hide hard unsolved subsets., Majority vote and learned reward selection may plateau without hard verifiers.
  _Why it matters:_ It is the representative Track 10 baseline for separating model ability, sample budget, and verifier availability.
- 🧰 **[MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://arxiv.org/abs/2410.07095)**
  <sub>2024 · ICLR 2025 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.07095) · [DOI](https://doi.org/10.48550/arXiv.2410.07095) · [Code](https://github.com/openai/mle-bench)
  _Data object:_ competition task, dataset, experiment/code artifacts, submission score, and resource budget.; process: competition id, dataset, agent scaffold; Kaggle-style ML engineering competitions with executable experiments and leaderboard scoring.
  _Feedback / verifier:_ competition metric compared with Kaggle leaderboard baselines.
  _Recipe signal:_ teacher: Kaggle tasks, datasets, metrics, and public leaderboard baselines.; generator: ML engineering agents write code, run experiments, and prepare submissions.
  _Audit focus:_ Leaderboards can reward overfitting to public competition practices., Resource scaling can dominate model comparisons., Kaggle data licenses vary by competition.
  _Why it matters:_ It expands Track 03 from code snippets to full ML engineering episodes where score, compute budget, and contamination are explicit.
- 🏗️ **[Mathematical discoveries from program search with large language models](https://www.nature.com/articles/s41586-023-06924-6)**
  <sub>2024 · Nature · 🏗️ construction recipe · 📈 scaling study · programmatic · test time compute · evaluation · L3_summary_ready</sub>
  [Paper](https://www.nature.com/articles/s41586-023-06924-6) · [DOI](https://doi.org/10.1038/s41586-023-06924-6) · [Code](https://github.com/google-deepmind/funsearch) · [Project](https://deepmind.google/discover/blog/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/)
  _Data object:_ executable candidate program scored by a domain-specific evaluator.; process: prompt with sampled programs, generated function, execution result; executable program-search environment for math and combinatorial optimization.
  _Feedback / verifier:_ deterministic evaluator that scores candidate programs.
  _Recipe signal:_ teacher: evaluator function and existing high-scoring programs.; generator: LLM sampler evolves executable programs.
  _Audit focus:_ The evaluator can become the bottleneck or encode a narrow objective., Generated programs that score well may be hard to generalize beyond the tested inputs., Search cost and evaluator parallelism must be reported before comparing systems.
  _Why it matters:_ It expands programmatic verification beyond benchmark answering: the reusable record is a candidate program, evaluator score, search budget, and audit trail.
- 🏗️ **[ReST-MCTS*: LLM Self-Training via Process Reward Guided Tree Search](https://arxiv.org/abs/2406.03816)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🪜 process supervision · programmatic · mixed · sft · process supervision · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2406.03816) · [DOI](https://doi.org/10.48550/arXiv.2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS)
  _Data object:_ problem, search tree, intermediate step, process value, selected trace, and final answer.; process: problem, tree node, reasoning step; process-reward-guided Monte Carlo tree search over reasoning steps.
  _Feedback / verifier:_ oracle final-answer checks used to infer process rewards through tree search.
  _Recipe signal:_ teacher: final-answer oracle and process-reward estimates inferred from tree search.; generator: policy model expands reasoning traces in MCTS.
  _Audit focus:_ Tree-search budget can dominate comparison to best-of-N., Incorrect intermediate steps may be selected if final-answer credit is noisy., Process value estimates inherit final-answer oracle limitations.
  _Why it matters:_ It is a clean Track 10 example where search traces, process rewards, and training data are the same reusable artifact.
- 🧭 **[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216)**
  <sub>2024 · arXiv · 🧭 survey background · 📈 scaling study · mixed · programmatic · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216)
  _Data object:_ technical survey comparing RLHF and RLVR policy-gradient style post-training methods.; process: prompt sampling, response sampling, reward source; LLM post-training algorithms and reasoning tasks such as math and coding.
  _Feedback / verifier:_ learned preference rewards, verifiable rewards, and policy-gradient objectives.
  _Recipe signal:_ teacher: literature covering human feedback, verifiable rewards, and post-training optimization.; generator: technical survey and unified policy-gradient framework
  _Audit focus:_ Method comparisons can mix data effects with optimizer and sampling-budget effects., RLHF and RLVR rewards are often discussed together despite different verification contracts., Implementation details can dominate reported gains if not separated from data quality.
  _Why it matters:_ It connects classic RLHF and reward modeling to reasoning-oriented RLVR, helping readers avoid conflating human preference rewards with programmatic or verifiable rewards.
- 📈 **[Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314)**
  <sub>2024 · arXiv · 📈 scaling study · 🧪 verifier reward · mixed · test time compute · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2408.03314)
  _Data object:_ prompt, candidate response or reasoning path, verifier score, and compute allocation.; process: prompt difficulty, candidate response, process reward score; verifier-guided inference-time search over reasoning tasks.
  _Feedback / verifier:_ dense process-based verifier rewards and outcome success checks.
  _Recipe signal:_ teacher: process-based verifier reward model or task answer checks.; generator: inference-time search or adaptive response-distribution update.
  _Audit focus:_ Compute-optimal gains can disappear if prompt difficulty is misestimated., Dense verifier rewards may encode task-specific shortcuts., FLOPs-matched comparisons require transparent accounting of verifier and search cost.
  _Why it matters:_ It gives Track 10 a direct framework for auditing inference-budget claims instead of treating every improvement as better reasoning data.
- 🏗️ **[Solving olympiad geometry without human demonstrations](https://www.nature.com/articles/s41586-023-06747-5)**
  <sub>2024 · Nature · 🏗️ construction recipe · 🧰 benchmark · programmatic · sft · evaluation · L3_summary_ready</sub>
  [Paper](https://www.nature.com/articles/s41586-023-06747-5) · [DOI](https://doi.org/10.1038/s41586-023-06747-5) · [Project](https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/)
  _Data object:_ theorem premises, auxiliary construction, symbolic deduction trace, and proof result.; process: theorem premises, conclusion, auxiliary construction; geometry-specific symbolic deduction engine and IMO-AG benchmark.
  _Feedback / verifier:_ symbolic geometry prover verifies whether the theorem conclusion is reached.
  _Recipe signal:_ teacher: symbolic deduction engine generating synthetic theorems and proofs.; generator: neural model proposes auxiliary constructions during proof search.
  _Audit focus:_ Geometry-specific language may not transfer to Lean or broader mathematics., Symbolic engine coverage can hide unrepresented problem types., Search budget and translation choices affect comparison to human olympiad performance.
  _Why it matters:_ It is one of the clearest top-team examples of programmatically verifiable reasoning data generated without human demonstrations.
- 🏗️ **[Training Language Models to Self-Correct via Reinforcement Learning](https://arxiv.org/abs/2409.12917)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 📈 scaling study · mixed · programmatic · rlvr · test time compute · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2409.12917)
  _Data object:_ prompt, first answer, correction trace, final answer, and reward.; process: initial response, correction attempt, final response; multi-turn self-correction training/evaluation setup.
  _Feedback / verifier:_ task outcome reward plus correction-oriented bonus/regularization.
  _Recipe signal:_ teacher: self-generated correction traces and task rewards.; generator: online RL policy under its own response distribution.
  _Audit focus:_ Correction behavior can collapse to a narrow mode., Offline correction traces may mismatch the trained policy distribution., Extra correction turns change inference-budget comparisons.
  _Why it matters:_ It records self-correction as data, not just behavior: initial answer, correction trace, reward, and extra budget all matter.
- 🧪 **[V-STaR: Training Verifiers for Self-Taught Reasoners](https://arxiv.org/abs/2402.06457)**
  <sub>2024 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · programmatic · mixed · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2402.06457) · [DOI](https://doi.org/10.48550/arXiv.2402.06457)
  _Data object:_ problem, candidate solution, correctness label, verifier preference, and selected answer.; process: problem, generated solution, correctness label; self-training loop over math and code reasoning benchmarks.
  _Feedback / verifier:_ DPO-trained verifier using both correct and incorrect self-generated solutions.
  _Recipe signal:_ teacher: correctness labels over self-generated solutions.; generator: STaR-style reasoner produces solution candidates over iterations.
  _Audit focus:_ Verifier may learn style cues instead of correctness., Incorrect samples are useful but can bias preference data., Best-of-N gains depend on candidate diversity and sample budget.
  _Why it matters:_ It makes failed rollouts a reusable data asset for verifier learning rather than discarded self-training waste.
- 🧪 **[LEVER: Learning to Verify Language-to-Code Generation with Execution](https://arxiv.org/abs/2302.08468)**
  <sub>2023 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · programmatic · mixed · reward modeling · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2302.08468)
  _Data object:_ natural-language input, generated program, execution result, and verifier score.; process: prompt, program sample, execution result; executable code tasks with sampled programs.
  _Feedback / verifier:_ learned verifier over code and execution results.
  _Recipe signal:_ teacher: task execution results and correctness labels.; generator: code LLM produces candidate programs.
  _Audit focus:_ Learned verifier can overfit execution-result artifacts., Reranking may prefer semantically wrong programs with plausible outputs., Combining model probability and verifier score can hide verifier calibration errors.
  _Why it matters:_ It is a bridge from hard unit-test correctness to learned verifier rewards for code reasoning.
- 🧪 **[Let's reward step by step: Step-Level reward model as the Navigators for Reasoning](https://arxiv.org/abs/2310.10080)**
  <sub>2023 · arXiv · 🧪 verifier reward · 🪜 process supervision · mixed · programmatic · process supervision · reward modeling · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2310.10080)
  _Data object:_ partial reasoning path, step score, search decision, and final answer.; process: prompt, reasoning step, PRM score; PRM-guided inference over math and code tasks.
  _Feedback / verifier:_ step-level process reward model.
  _Recipe signal:_ teacher: process reward labels or generated step-level reward data.; generator: base model proposes candidate reasoning steps.
  _Audit focus:_ Greedy PRM navigation can prefer locally plausible but globally wrong steps., Automatically generated code-step rewards can inherit executor artifacts., PRM gains should be separated from extra inference budget.
  _Why it matters:_ It makes the verifier-scaling question concrete: the reward model is not only trained, it actively steers the search path.
- 🏗️ **[Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 📈 scaling study · mixed · test time compute · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm)
  _Data object:_ search tree of intermediate thoughts, state evaluations, and final answer.; process: thought state, branch score, search step; prompt-level search scaffold over LLM-generated thoughts.
  _Feedback / verifier:_ self-evaluation, task success checks, or environment-specific scoring.
  _Recipe signal:_ teacher: task success signals and self-evaluation prompts.; generator: LLM proposes and evaluates thought branches.
  _Audit focus:_ Search budget can dominate comparisons with chain-of-thought baselines., Self-evaluation can reward plausible but wrong branches., Task-specific scaffolds may not transfer to programmatic RLVR settings.
  _Why it matters:_ It anchors Track 10's search-budget vocabulary before RLVR-era reasoning models popularized test-time compute scaling.
- 🧪 **[CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](https://arxiv.org/abs/2207.01780)**
  <sub>2022 · NeurIPS 2022 · 🧪 verifier reward · 🏗️ construction recipe · programmatic · mixed · rlvr · reward modeling · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2207.01780) · [DOI](https://doi.org/10.48550/arXiv.2207.01780)
  _Data object:_ problem statement, generated program, unit-test feedback, critic score, and regeneration decision.; process: prompt, generated code, unit-test result; Python/programming benchmark execution harness.
  _Feedback / verifier:_ unit-test outcomes plus a critic trained to predict functional correctness.
  _Recipe signal:_ teacher: unit-test feedback and correctness labels from programming benchmarks.; generator: actor code model with critic-guided regeneration.
  _Audit focus:_ Example tests can overfit and miss hidden failures., Critic scores may reward patterns correlated with benchmark tests., Regeneration budget can be conflated with model quality.
  _Why it matters:_ It is a pre-RLVR-era code example where programmatic correctness becomes both a training signal and a test-time selection signal.
- 🧪 **[CodeT: Code Generation with Generated Tests](https://arxiv.org/abs/2207.10397)**
  <sub>2022 · ICLR 2023 · 🧪 verifier reward · 🏗️ construction recipe · programmatic · evaluation · test time compute · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2207.10397) · [DOI](https://doi.org/10.48550/arXiv.2207.10397)
  _Data object:_ programming prompt, candidate program set, generated test cases, execution matrix, and selected solution.; process: prompt, candidate solution, generated test; code execution harness across programming benchmarks.
  _Feedback / verifier:_ generated tests plus dual execution agreement among code samples.
  _Recipe signal:_ teacher: benchmark prompts and execution outcomes.; generator: same model family generates candidate solutions and test cases.
  _Audit focus:_ Generated tests can share model biases with generated solutions., Agreement among wrong programs can select a wrong answer., Extra generated-test budget can dominate pass@1 comparisons.
  _Why it matters:_ It makes test generation itself part of the reasoning-data object, not just an external evaluation script.
- 🚀 **[Competition-Level Code Generation with AlphaCode](https://arxiv.org/abs/2203.07814)**
  <sub>2022 · Science · 🚀 model report · 🧰 benchmark · programmatic · sft · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2203.07814) · [Venue](https://www.science.org/doi/10.1126/science.abq1158) · [DOI](https://doi.org/10.1126/science.abq1158) · [Project](https://deepmind.google/discover/blog/competitive-programming-with-alphacode/)
  _Data object:_ problem statement, generated program, sampled candidate set, and submission verdict.; process: problem statement, generated code sample, cluster or filter score; Codeforces-like competitive programming judge with hidden tests.
  _Feedback / verifier:_ program behavior under test cases and contest verdicts.
  _Recipe signal:_ teacher: public competitive-programming problem and solution corpus.; generator: large-scale code model with massive sampling and filtering.
  _Audit focus:_ Large sampling budgets can dominate model quality., Public contest solutions can contaminate training or evaluation if dates are not controlled., Passing hidden tests does not expose failed attempts or reasoning traces.
  _Why it matters:_ It is a top-team, top-venue anchor for treating code solutions as verifier-checked samples rather than plain text completions.
- 🧰 **[Program Synthesis with Large Language Models](https://arxiv.org/abs/2108.07732)**
  <sub>2021 · arXiv · 🧰 benchmark · 📈 scaling study · programmatic · sft · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2108.07732)
  _Data object:_ natural-language programming prompt with Python solution and executable tests or outputs.; process: task description, reference program, generated program; Python execution benchmark for short program synthesis.
  _Feedback / verifier:_ unit tests or expected program outputs.
  _Recipe signal:_ teacher: human-written benchmark tasks and reference programs.; generator: few-shot or fine-tuned code-generation model.
  _Audit focus:_ Small Python tasks can overstate transfer to competitive programming or repository repair., Execution-output prediction is not equivalent to program synthesis., Training on benchmark prompts can contaminate later code-evaluation claims.
  _Why it matters:_ It adds an early high-team code-verification waypoint before HumanEval/APPS became standard surfaces for pass@k and verifier-backed code evaluation.
- 🪜 **[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · mixed · process supervision · preference learning · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR)
  _Data object:_ step-level preference data with process scores and explanations; process: retrieval context, reasoning step, process reward score; RAG reasoning pipeline
  _Feedback / verifier:_ process reward model plus process explanation model
  _Recipe signal:_ generator: MCTS-guided retrieval-augmented rollouts; filtering rule: trustworthy process rewarding and iterative preference optimization
  _Audit focus:_ PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search
  _Why it matters:_ It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.

### <a id="pass-k-sampling-budget"></a>🎲 pass@k / sampling budget

- 🧰 **[Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval)
  _Data object:_ executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite.
  _Feedback / verifier:_ HumanEval tests and pass@k evaluation.
  _Recipe signal:_ teacher: benchmark authors and public code pretraining corpus context.; generator: model samples code completions.
  _Audit focus:_ Small public benchmarks are easy to memorize., Unit tests can miss incorrect or insecure behavior., Repeated sampling can hide low single-sample reliability.
  _Why it matters:_ It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions.
- 🧰 **[HumanEval: Hand-Written Evaluation Set](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval)
  _Data object:_ Python function completion; process: prompt, canonical solution, unit tests; Python execution harness
  _Feedback / verifier:_ unit tests
  _Recipe signal:_ generator: benchmark authors; filtering rule: hand-written benchmark curation
  _Audit focus:_ public benchmark contamination, unit-test coverage gaps
  _Why it matters:_ It made unit-test execution a standard verifier for code reasoning, pass@k reporting, and later code-data filtering recipes.
- 📈 **[How Do Large Language Monkeys Get Their Power (Laws)?](https://arxiv.org/abs/2502.17578)**
  <sub>2025 · arXiv · 📈 scaling study · programmatic · mixed · test time compute · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.17578)
  _Data object:_ problem, per-attempt success probability, aggregate coverage curve, and scaling-law fit.; process: problem id, single-attempt success probability, number of attempts; tasks with verifiable success under repeated sampling.
  _Feedback / verifier:_ task-specific correctness checks or benchmark success predicates.
  _Recipe signal:_ teacher: benchmark verifiers and per-problem success observations.; generator: repeated model sampling.
  _Audit focus:_ Aggregate power laws can hide per-problem exponential behavior., Heavy-tailed difficulty can make extrapolations brittle., Verifier availability determines whether extra samples can be converted into solved tasks.
  _Why it matters:_ It helps readers audit pass@k and coverage claims by asking whether gains come from broad improvement or a few easy-to-sample tasks.
- 📈 **[Reinforcement Learning with Verifiable Rewards Implicitly Incentivizes Correct Reasoning in Base LLMs](https://arxiv.org/abs/2506.14245)**
  <sub>2025 · arXiv · 📈 scaling study · 🧯 audit failure · programmatic · mixed · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.14245) · [DOI](https://doi.org/10.48550/arXiv.2506.14245)
  _Data object:_ problem, chain-of-thought, final answer, pass@k, and CoT-Pass@K judgment.; process: problem, reasoning trace, final answer; reasoning benchmark evaluation with answer and chain correctness checks.
  _Feedback / verifier:_ verifiable final-answer reward plus CoT-Pass@K reasoning-path metric.
  _Recipe signal:_ teacher: task verifiers and reasoning-path correctness criteria.; generator: model rollouts sampled across k.
  _Audit focus:_ Trace correctness judgments are harder than final-answer checks., CoT-Pass@K can depend on annotator or judge criteria., Comparisons can mix training-stage effects with sampling-budget effects.
  _Why it matters:_ It sharpens Track 10 by making the unit of scaling a verified reasoning trace, not only a correct final answer.

### <a id="verifier-scaling"></a>🧪 Verifier scaling

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="rlvr-optimization-scaling"></a>🏋️ RLVR optimization scaling

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
- 🚀 **[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · programmatic · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical)
  _Data object:_ instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases.
  _Feedback / verifier:_ mixture of preference labels, reward models, and verifiable rewards depending on stage.
  _Recipe signal:_ teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.; generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
  _Audit focus:_ Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., RLVR improvements may be domain-specific.
  _Why it matters:_ It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.
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
- 📦 **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.02951)
  _Data object:_ question-solution-test triplet; process: problem, solution, unit tests; code execution and unit-test substrate
  _Feedback / verifier:_ test-based self-verification
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
- 🚀 **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.00949)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; sft; distillation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- 🚀 **[Magistral](https://arxiv.org/abs/2506.10910)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10910)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; reward verifier layer; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.
- 🚀 **[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)**
  <sub>2025 · arXiv · 🚀 model report · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.09388)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; sft; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open model-family report useful for coordinated release-tick analysis.
- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947)
  _Data object:_ scalar reward
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ reward verifier layer; rlvr; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- 🏗️ **[Open-Reasoner-Zero: An Open Source Approach to Scaling Up Reinforcement Learning on the Base Model](https://arxiv.org/abs/2503.24290)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · programmatic · rlvr · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2503.24290) · [DOI](https://doi.org/10.48550/arXiv.2503.24290)
  _Data object:_ prompt, sampled response, rule-based reward, response length, and benchmark outcome.; process: prompt, sampled response, rule reward; open large-scale RLVR training pipeline.
  _Feedback / verifier:_ rule-based verifiable rewards for math reasoning tasks.
  _Recipe signal:_ teacher: rule-based answer verifiers and benchmark rewards.; generator: base model policy sampled during RL training.
  _Audit focus:_ Rule-based rewards may reward formatting or answer shortcuts., Response-length growth can be mistaken for reasoning improvement., Reproduction claims depend on exact optimizer and data-processing details.
  _Why it matters:_ It makes the Track 10 RLVR recipe auditable: prompt source, rule reward, optimizer, response length, and benchmark gains are separable fields.
- 🧪 **[Process Reinforcement through Implicit Rewards](https://arxiv.org/abs/2502.01456)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🪜 process supervision · programmatic · mixed · rlvr · process supervision · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.01456) · [DOI](https://doi.org/10.48550/arXiv.2502.01456)
  _Data object:_ prompt, rollout trace, outcome label, implicit process reward, and RL update target.; process: prompt, reasoning step, outcome label; online RL training over reasoning tasks.
  _Feedback / verifier:_ implicit process rewards derived from outcome labels and policy rollouts.
  _Recipe signal:_ teacher: outcome labels rather than manually annotated process labels.; generator: online policy rollouts during RL.
  _Audit focus:_ Implicit rewards can still be hacked by the online policy., Outcome labels may assign misleading credit to bad intermediate steps., Reported gains depend on rollout budget and advantage estimator details.
  _Why it matters:_ It marks a central Track 10 question: whether process-level rewards can scale without manual step labels.
- 🧰 **[HOList: An Environment for Machine Learning of Higher-Order Theorem Proving](https://arxiv.org/abs/1904.03241)**
  <sub>2019 · ICML 2019 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · agent training · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/1904.03241) · [DOI](https://doi.org/10.48550/arXiv.1904.03241)
  _Data object:_ proof goal, tactic/action, proof state transition, and theorem-proving result.; process: goal statement, available premises, tactic action; HOL Light theorem prover exposed as an RL-style environment.
  _Feedback / verifier:_ HOL Light kernel and theorem-prover state transitions.
  _Recipe signal:_ teacher: HOL Light proof corpus and theorem-prover feedback.; generator: learning-guided proof search over higher-order logic goals.
  _Audit focus:_ HOL Light-specific tactics may not transfer to Lean or Coq., Proof-search budget strongly affects success rates., Library theorem overlap can inflate evaluation if not versioned.
  _Why it matters:_ It is an early bridge from static proof benchmarks to proof-state/action trajectories with a hard formal verifier.
- 🧭 **[A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328)**
  <sub>2025 · arXiv · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.12328) · [DOI](https://doi.org/10.48550/arXiv.2504.12328) · [Project](https://github.com/JLZhong23/awesome-reward-models)
  _Data object:_ taxonomy of reward-model data sources, objectives, applications, evaluations, and challenges.; process: preference source, reward model architecture, usage mode; LLM reward-model training and evaluation pipelines.
  _Feedback / verifier:_ reward model as proxy objective for downstream post-training.
  _Recipe signal:_ teacher: human and AI preference sources summarized across reward-model literature.; generator: survey taxonomy and accompanying awesome list
  _Audit focus:_ Reward models may encode annotator bias, style bias, or length preference., Proxy rewards can be overoptimized or attacked when used as training objectives., Benchmark scores can obscure whether the reward model is useful for reasoning data.
  _Why it matters:_ It gives readers a reward-model-specific map, which is essential before comparing learned human-preference rewards with PRMs, rubric rewards, and programmatic RLVR verifiers.
- 📄 **[Dual Consensus: Escaping from Spurious Majority in Unsupervised RLVR via Two-Stage Vote Mechanism](https://arxiv.org/abs/2603.16223)**
  <sub>2026 · arXiv preprint arXiv:2603.16223 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2603.16223)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[LLMs Gaming Verifiers: RLVR can Lead to Reward Hacking](https://arxiv.org/abs/2604.15149)**
  <sub>2026 · arXiv preprint arXiv:2604.15149 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.15149)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[Spurious Rewards Paradox: Mechanistically Understanding How RLVR Activates Memorization Shortcuts in LLMs](https://arxiv.org/abs/2601.11061)**
  <sub>2026 · arXiv preprint arXiv:2601.11061 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2601.11061)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[GRPO is Secretly a Process Reward Model](https://arxiv.org/abs/2509.21154)**
  <sub>2025 · arXiv preprint arXiv:2509.21154 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.21154)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[Spurious Rewards: Rethinking Training Signals in RLVR](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv preprint arXiv:2506.10947 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.10947)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[The Invisible Leash: Why RLVR May or May Not Escape Its Origin](https://arxiv.org/abs/2507.14843)**
  <sub>2025 · arXiv preprint arXiv:2507.14843 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2507.14843)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="scaling-attribution"></a>🔍 Scaling attribution

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="other-related-work"></a>Other related work

- 📦 **[OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560)**
  <sub>2024 · ICLR · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2410.01560) · [OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [Code](https://github.com/NVIDIA-NeMo/Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/)
  _Data object:_ problem-solution pair with natural-language mathematical reasoning and final answer.; process: source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.; NVIDIA NeMo-Skills generation, training, and evaluation pipeline.
  _Feedback / verifier:_ answer checks and benchmark evaluation over math tasks.
  _Recipe signal:_ teacher: Llama3.1-405B-Instruct generates large-scale math solutions.; generator: NeMo-Skills pipeline performs problem/solution augmentation and model training.
  _Audit focus:_ Synthetic solutions can encode teacher shortcuts., Large scale can hide duplicated or near-duplicated questions., Verbose traces may hurt rather than help SFT.
  _Why it matters:_ It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models.
- 📦 **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.21139)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ prompt sourcing; search substrate; agent training
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Repository-scale training environment showing substrate as data.
- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935)
  _Data object:_ step-level rollout-value labels; process: reasoning step, rollout result, process reward score; offline math reasoning traces
  _Feedback / verifier:_ rollout-derived process reward signal
  _Recipe signal:_ generator: model rollouts from intermediate reasoning steps; filtering rule: rollout success rate converted to step reward
  _Audit focus:_ rollout policy strength can leak into labels, step rewards may favor locally plausible continuations, generated solutions can inherit base-model shortcuts
  _Why it matters:_ It is the clearest bridge between final-answer verifiers and step-level PRM data: the label is not a human judgment but a rollout-derived estimate of whether a partial step can still reach the right answer.
- 🧰 **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2404.07972)
  _Data object:_ GUI/OS action trajectory; process: observation, action, environment state; desktop operating-system environment
  _Feedback / verifier:_ task completion evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.
- 🧰 **[OlympiadBench: A Challenging Benchmark for Promoting AGI with Olympiad-Level Bilingual Multimodal Scientific Problems](https://arxiv.org/abs/2402.14008)**
  <sub>2024 · arXiv · 🧰 benchmark · 📦 data release · mixed · judgment required · evaluation · sft · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2402.14008) · [Code](https://github.com/OpenBMB/OlympiadBench)
  _Data object:_ problem statement, optional image, step-level annotation, reference answer, and score.; process: problem, modality, subject; bilingual multimodal math/physics benchmark.
  _Feedback / verifier:_ answer key, expert annotations, and scoring methodology.
  _Recipe signal:_ teacher: expert annotators and olympiad problem sources.; generator: benchmark construction and scoring pipeline.
  _Audit focus:_ Some items need rubric judgment rather than exact answer checking., Multimodal diagrams introduce OCR/vision failure separate from reasoning., Public olympiad problems and solutions can leak into training data.
  _Why it matters:_ It captures cases where programmatic answer checking, expert rubric scoring, and multimodal reasoning must be audited together.
- 🧰 **[Omni-MATH: A Universal Olympiad Level Mathematic Benchmark For Large Language Models](https://arxiv.org/abs/2410.07985)**
  <sub>2024 · arXiv · 🧰 benchmark · 📦 data release · mixed · programmatic · evaluation · sft · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.07985)
  _Data object:_ competition math problem, annotated solution/answer, difficulty and sub-domain metadata.; process: problem, sub-domain, difficulty; olympiad-level math benchmark and answer-grading pipeline.
  _Feedback / verifier:_ reference answers, answer normalization, and human annotation.
  _Recipe signal:_ teacher: human annotators and competition problem sources.; generator: benchmark construction pipeline.
  _Audit focus:_ Answer normalization may fail for proof-style or expression-equivalent answers., Public competition problems can be contaminated., Difficulty labels may not correspond to verifier reliability.
  _Why it matters:_ It gives Track 03/10 a harder math evaluation surface for reasoning models after easier math benchmarks saturate.
- 🧰 **[DS-1000: A Natural and Reliable Benchmark for Data Science Code Generation](https://arxiv.org/abs/2211.11501)**
  <sub>2022 · arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2211.11501) · [Project](https://ds1000-code-gen.github.io)
  _Data object:_ natural-language data-science task with Python code solution.; process: prompt, required library, generated code; Python data-science libraries such as NumPy and Pandas.
  _Feedback / verifier:_ functional tests plus API/keyword constraints.
  _Recipe signal:_ teacher: StackOverflow-derived tasks and author-written checks.; generator: benchmark construction pipeline and model submissions.
  _Audit focus:_ Python library versions can change accepted behavior., API constraints may reward surface compliance rather than robust code., Public benchmark reuse can train models on test cases.
  _Why it matters:_ It broadens Track 03 beyond toy function synthesis toward dependency-sensitive executable code tasks.
- 📄 **[Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence](https://arxiv.org/abs/2604.18292)**
  <sub>2026 · arXiv preprint arXiv:2604.18292 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.18292)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv preprint arXiv:2602.01511 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.01511)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[A Survey of Reasoning with Foundation Models](https://arxiv.org/abs/2502.17419)**
  <sub>2025 · arXiv · 🧭 survey background · unknown · audit · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.17419)
  _Data object:_ survey taxonomy and literature map.; literature survey.
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives the atlas a second reasoning-survey waypoint so readers can orient before choosing math, code, agent, rubric, or scaling tracks.
- 🧭 **[AM-Thinking-v1: Advancing the Frontier of Reasoning at 32B Scale](https://arxiv.org/abs/2505.08311)**
  <sub>2025 · arXiv preprint arXiv:2505.08311 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.08311)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Clip-Low Increases Entropy and Clip-High Decreases Entropy in Reinforcement Learning of Large Language Models](https://arxiv.org/abs/2509.26114)**
  <sub>2025 · arXiv preprint arXiv:2509.26114 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.26114)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Distillation Scaling Laws](https://arxiv.org/abs/2502.08606)**
  <sub>2025 · Proceedings of the 42nd International Conference on Machine Learning (ICML) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.08606)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[Goedel-Prover-V2: Scaling Formal Theorem Proving with Scaffolded Data Synthesis and Self-Correction](https://arxiv.org/abs/2508.03613)**
  <sub>2025 · arXiv preprint arXiv:2508.03613 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.03613)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[ReTool: Reinforcement Learning for Strategic Tool Use in LLMs](https://arxiv.org/abs/2504.11536)**
  <sub>2025 · arXiv preprint arXiv:2504.11536 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2504.11536)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution](https://arxiv.org/abs/2502.18449)**
  <sub>2025 · Advances in Neural Information Processing Systems (NeurIPS) · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.18449)
  _Data object:_ metadata pending
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
- 📄 **[The Entropy Mechanism of Reinforcement Learning for Reasoning Language Models](https://arxiv.org/abs/2505.22617)**
  <sub>2025 · arXiv preprint arXiv:2505.22617 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.22617)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[The Markovian Thinker: Architecture-Agnostic Linear Scaling of Reasoning](https://arxiv.org/abs/2510.06557)**
  <sub>2025 · arXiv preprint arXiv:2510.06557 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2510.06557)
  _Data object:_ metadata pending
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
- 🧭 **[Deep reinforcement learning from human preferences](https://arxiv.org/abs/1706.03741)**
  <sub>2017 · NeurIPS · 🧭 survey background · judgment required · reward modeling · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/1706.03741)
  _Data object:_ pairwise preference; scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ release audit; reward modeling; preference learning
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a foundation for later post-training data records that turn comparisons into trainable reward signals.

### ⚠️ Needs search or metadata

- 📦 **[Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865)**
  <sub>2026 · ICLR 2026 · 📦 data release · 🧪 verifier reward · programmatic · environmental · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2508.04865) · [DOI](https://doi.org/10.48550/arXiv.2508.04865) · [Code](https://github.com/nuprl/Ag-LiveCodeBench-X) · [Data](https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X) · [HF](https://huggingface.co/nuprl/agnostics) · [Project](https://agnostics.abgru.me/) · [Paper Card Source](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
  _Data object:_ Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings.
  _Feedback / verifier:_ Programmatic execution verifier that judges behavior rather than language-specific syntax alone.
  _Recipe signal:_ teacher: LLM rewrite pipeline for adapting coding datasets into I/O tasks.; generator: RLVR policy model emits target-language code.
  _Audit focus:_ I/O-only tests may miss semantic edge cases., Verifier containers can encode language-specific quirks., Dataset rewriting can change task intent.
  _Why it matters:_ It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface.
- 🧰 **[Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](https://arxiv.org/abs/2604.10182)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2604.10182) · [DOI](https://doi.org/10.48550/arXiv.2604.10182) · [Paper Card Source](../../paper_cards/sources/credit-budgeted-icpc-style-coding-2026)
  _Data object:_ Coding problem, generated solution, local-test decisions, token/time/test spending, and accepted/rejected outcome.; process: token budget, test budget, elapsed time; USACOArena interactive ACM-ICPC-style coding arena.
  _Feedback / verifier:_ Programmatic coding judge plus explicit credit economy over tokens, tests, and time.
  _Recipe signal:_ teacher: ICPC-style problem set and judge outcomes.; generator: Agents generate code and decide when to test or submit.
  _Audit focus:_ Budget settings can dominate model ranking., Local tests can be gamed or overused., Public programming problems can be contaminated.
  _Why it matters:_ It expands Track 03 from pure correctness to correctness under resource budgets, which is closer to real agent deployment and test-time compute accounting.
- 📄 **pass@$(k,T)$: Re-examining the reasoning boundary for agentic RL**
  <sub>2026 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **1-shot RLVR: Learning reasoning with minimal verifiable data**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Big-math: A large-scale, high-quality math dataset for reinforcement learning and supervised fine-tuning**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **DAPO: An open-source LLM reinforcement learning system at scale**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **DeepScaleR: Scaling reinforcement learning for reasoning in open models**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Does supervised fine-tuning memorize while reinforcement learning generalizes?**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Open-Reasoner-Zero: An open-source approach to RLVR for reasoning**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **OpenCodeReasoning: Code reasoning traces at scale**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📦 **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · programmatic · sft · distillation · L0_seeded</sub>
  [Code](https://github.com/huggingface/open-r1) · [HF](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k)
  _Data object:_ math problem with reasoning trace and final answer; process: problem, reasoning trace, answer; offline math corpus
  _Feedback / verifier:_ math answer verifier / filtering pipeline
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- 🚀 **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · sft · rlvr · L4_carded</sub>
  [Code](https://github.com/QwenLM/Qwen3-Coder) · [Project](https://qwenlm.github.io/blog/qwen3-coder/)
  _Data object:_ code solution, tool-call, or agent trajectory; process: code answer, tool call, execution result; code execution and agent task environments
  _Feedback / verifier:_ unit tests, execution feedback, and agent task success signals
  _Recipe signal:_ frontier pipeline; optimizer scaffold; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- 📄 **SWE-RL: Advancing language agents for software engineering via reinforcement learning**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **SWE-smith: Scaling data construction for software engineering agents**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **Reflexion: Language agents with verbal reinforcement learning**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **Scaling laws for reward model overoptimization**
  <sub>2022 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **ContractNLI: A dataset for document-level natural language inference for contracts**
  <sub>2021 · EMNLP · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **An overview of the BioASQ large-scale biomedical semantic indexing and question answering competition**
  <sub>2015 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

## 6. What to Audit

- Does the claim improve asymptote, sample efficiency, or inference budget allocation?
- Are pass@k, rollout budget, verifier refresh, and reuse count reported?
- Can data scale be separated from test-time compute scale?

## 7. Open Problems

- What is the right unit of reasoning-data scale: prompt, trace, rollout, verified answer, or environment episode?
- How should RLVR reports disclose verifier false positives?
- Can data scale and test-time compute scale be disentangled cleanly?
- How much reuse is acceptable before benchmark claims become fragile?

## 8. Related Paper-Card Sources

- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](../../paper_cards/sources/agnostics-universal-learning-environment-2026)
- [Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](../../paper_cards/sources/credit-budgeted-icpc-style-coding-2026)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
