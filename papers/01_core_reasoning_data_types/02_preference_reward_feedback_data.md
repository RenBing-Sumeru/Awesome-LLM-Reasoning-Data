# 🤝 Preference and Reward Feedback Data

> Human preferences, AI feedback, reward models, DPO-style pairs, scalar rewards, critiques, and rubric-conditioned feedback records.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=preference_reward_feedback_data&mode=find_papers)
> Try: `What should I read first for 🤝 Preference & Reward Feedback?`
> Try: `Compare the data objects and verifier types in 🤝 Preference & Reward Feedback.`
> Try: `Generate an audit checklist for 🤝 Preference & Reward Feedback.`

## 1. What This Track Studies

Use this track to compare preference and reward signals before they become training objectives or evaluation proxies.

Preference and reward data is the bridge between demonstrations and optimization. It can appear as chosen/rejected pairs, scalar scores, critiques, reward-model labels, constitutional feedback, rubric scores, or judge outputs. Reasoning work often reuses these signals, but the meaning changes when the task also has a programmatic verifier or an environment predicate.

The practical question is whether the feedback contract is reusable. A reward model trained for helpfulness may not be a reliable verifier for math reasoning. A rubric score can be interpretable but brittle. A DPO pair can encode useful preferences while hiding annotator context. This track keeps those assumptions visible.

For high-quality curation, each paper card should state who produced the feedback, what alternatives were compared, what the reward optimizes, and where the feedback can fail or be gamed.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🤝 Human preference data / RLHF | human comparison data, helpful/harmless feedback, and RLHF reward targets | annotator assumptions and disagreement are hidden |
| ⚖️ DPO / preference optimization | pairwise data used directly for preference optimization | preference pairs are reused outside collection context |
| 🎚️ Scalar reward / ORM data | outcome reward labels, scalar scores, and trained reward-model targets | scalar reward hides why an answer is better |
| 🤖 RLAIF / synthetic feedback | model-generated preferences, critiques, and constitutional feedback | synthetic judge behavior is treated as human preference |
| 🧪 Reward-model benchmarks | rewardbench-style evaluation data and reward-model stress tests | benchmark preference does not predict downstream training value |
| 🧾 Rubric-conditioned rewards | rubric scores, critique-plus-score records, and domain-specific reward signals | rubric wording becomes an exploitable reward channel |

### Contents

- [🤝 Human preference data / RLHF](#human-preference-data-rlhf)
- [⚖️ DPO / preference optimization](#dpo-preference-optimization)
- [🎚️ Scalar reward / ORM data](#scalar-reward-orm-data)
- [🤖 RLAIF / synthetic feedback](#rlaif-synthetic-feedback)
- [🧪 Reward-model benchmarks](#reward-model-benchmarks)
- [🧾 Rubric-conditioned rewards](#rubric-conditioned-rewards)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Paper Card Source](../../paper_cards/sources/leandojo-theorem-proving-with-retrieval-augmented-language-models-2023) | Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories. | Lean checker and environment feedback. | It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record. |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [Paper Card Source](../../paper_cards/sources/prm800k-2023) | step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces | process reward model trained from step labels | It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation. |
| [miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110) | 2021 | [Paper](https://arxiv.org/abs/2109.00110) · [OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021) | formal proof accepted by a target proof assistant.; process: formal system, theorem statement, split, generated proof/tactics, verifier result.; Lean, Metamath, Isabelle, and HOL Light style theorem proving environments. | proof assistant kernel/checker acceptance. | It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof. |
| [Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://arxiv.org/abs/2501.09004) | 2025 | [Paper](https://arxiv.org/abs/2501.09004) · [Venue](https://aclanthology.org/2025.naacl-long.306/) · [DOI](https://doi.org/10.18653/v1/2025.naacl-long.306) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) | prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: prompt, response, top level hazard category; offline guardrail training/evaluation dataset. | risk taxonomy labels, human annotations, multi-LLM jury judgments, and guard-model evaluation signal. | It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification. |
| [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) | 2025 | [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) | subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline. | Lean verification and RL reward over formal proof success. | It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification. |
| [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | 2025 | [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) | reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus | filters, benchmark feedback, and recipe ablations | It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance. |
| [DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333) | 2024 | [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1) | Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness. | Lean kernel/checker acceptance. | It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object. |
| [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/hash/02fd91a387a6a5a5751e81b58a75af90-Abstract-Datasets_and_Benchmarks_Track.html) | 2024 | [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/02fd91a387a6a5a5751e81b58a75af90-Abstract-Datasets_and_Benchmarks_Track.html) · [Venue](https://neurips.cc/virtual/2024/poster/97706) · [arXiv](https://arxiv.org/abs/2406.08673) · [DOI](https://doi.org/10.52202/079017-0047) · [Code](https://github.com/NVIDIA/NeMo-Aligner) · [Data](https://huggingface.co/datasets/nvidia/HelpSteer2) | prompt, response, and five Likert-style attribute scores; process: prompt, response, helpfulness; offline reward-model training dataset | human annotation of response quality attributes | It gives the Preference & Reward Feedback track a compact, permissively licensed reward-model training dataset with richer scalar feedback than a single chosen/rejected label. |
| [OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560) | 2024 | [Paper](https://arxiv.org/abs/2410.01560) · [OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [Code](https://github.com/NVIDIA-NeMo/Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/) | problem-solution pair with natural-language mathematical reasoning and final answer.; process: source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.; NVIDIA NeMo-Skills generation, training, and evaluation pipeline. | answer checks and benchmark evaluation over math tasks. | It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models. |
| [Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535) | 2024 | [Paper](https://arxiv.org/abs/2405.01535) · [ACL](https://aclanthology.org/2024.emnlp-main.248/) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [Code](https://github.com/prometheus-eval/prometheus-eval) · [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0) | rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights. | Prometheus 2 judge output aligned against human/proprietary-judge benchmarks. | It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes. |

## 5. Full Paper List

### <a id="human-preference-data-rlhf"></a>🤝 Human preference data / RLHF

- 📦 **[HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/hash/02fd91a387a6a5a5751e81b58a75af90-Abstract-Datasets_and_Benchmarks_Track.html)**
  <sub>2024 · NeurIPS 2024 Datasets and Benchmarks Track · 📦 data release · 🧪 verifier reward · judgment required · reward modeling · L5_audit_ready</sub>
  [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/02fd91a387a6a5a5751e81b58a75af90-Abstract-Datasets_and_Benchmarks_Track.html) · [Venue](https://neurips.cc/virtual/2024/poster/97706) · [arXiv](https://arxiv.org/abs/2406.08673) · [DOI](https://doi.org/10.52202/079017-0047) · [Code](https://github.com/NVIDIA/NeMo-Aligner) · [Data](https://huggingface.co/datasets/nvidia/HelpSteer2)
  _Data object:_ prompt, response, and five Likert-style attribute scores; process: prompt, response, helpfulness; offline reward-model training dataset
  _Feedback / verifier:_ human annotation of response quality attributes
  _Recipe signal:_ teacher: US-based human annotators via Scale AI; generator: Nemotron-2, Nemotron-3, Nemotron-4, Mixtral-8x7B-Instruct-v0.1, and human annotators
  _Audit focus:_ Scalar attribute scores can hide why one response is preferred over another., Reward models may learn annotator style, verbosity preferences, or attribute-specific shortcuts., Mostly English, US-annotator data may not generalize to other languages or preference populations.
  _Why it matters:_ It gives the Preference & Reward Feedback track a compact, permissively licensed reward-model training dataset with richer scalar feedback than a single chosen/rejected label.
- 🚀 **[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · programmatic · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical)
  _Data object:_ instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt; open-instruct training/evaluation stack and Hugging Face dataset/model releases.
  _Feedback / verifier:_ mixture of preference labels, reward models, and verifiable rewards depending on stage.
  _Recipe signal:_ teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.; generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
  _Audit focus:_ Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., Preference labels, reward models, and verifiable rewards should not be collapsed into one feedback type.
  _Why it matters:_ It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.
- 🧰 **[Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.05685) · [Venue](https://papers.nips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html) · [OpenReview](https://openreview.net/forum?id=uccHPGDlao) · [Code](https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge)
  _Data object:_ model response, judge score, pairwise preference, or arena battle outcome.; process: question, turn, model identity, response, judge prompt template, score, preference label, bias-control setting.; offline judge harness and crowd-sourced arena platform.
  _Feedback / verifier:_ strong model judge and human preference comparisons.
  _Recipe signal:_ teacher: human preferences and strong model judges.; generator: candidate chat models answer MT-Bench and arena prompts.
  _Audit focus:_ Judge scores can be position-biased., Verbose answers can be over-rewarded., A model judge may share weaknesses with the evaluated model.
  _Why it matters:_ It is the standard cautionary reference for judge data: scalable model judges are useful, but position, verbosity, self-enhancement, and limited-reasoning biases must be audited.
- 📦 **[OpenAssistant Conversations - Democratizing Large Language Model Alignment](https://proceedings.neurips.cc/paper_files/paper/2023/hash/949f0f8f32267d297c2d4e3ee10a2e7e-Abstract-Datasets_and_Benchmarks.html)**
  <sub>2023 · NeurIPS 2023 Datasets and Benchmarks Track · 📦 data release · 🏗️ construction recipe · judgment required · sft · reward modeling · L5_audit_ready</sub>
  [Paper](https://proceedings.neurips.cc/paper_files/paper/2023/hash/949f0f8f32267d297c2d4e3ee10a2e7e-Abstract-Datasets_and_Benchmarks.html) · [Venue](https://neurips.cc/virtual/2023/poster/73573) · [arXiv](https://arxiv.org/abs/2304.07327) · [OpenReview](https://openreview.net/forum?id=VSJotgbPHF) · [Code](https://github.com/LAION-AI/Open-Assistant) · [Data](https://huggingface.co/datasets/OpenAssistant/oasst1) · [Project](https://open-assistant.io/)
  _Data object:_ conversation-tree messages with roles, language, review metadata, rankings, quality ratings, and labels; process: message id, parent id, user id; offline human-generated, human-annotated assistant-style conversation corpus
  _Feedback / verifier:_ human quality ratings, rankings, and annotation labels over conversation messages
  _Recipe signal:_ teacher: human volunteers / crowd-sourced annotators; generator: human volunteers
  _Audit focus:_ Crowd-sourced ratings can encode annotator disagreement, language imbalance, and community-specific preference norms., Conversation-tree data can mix SFT targets, ratings, rankings, and safety labels; training use should match the actual field consumed., Multilingual coverage does not guarantee balanced quality or comparable annotation density across languages.
  _Why it matters:_ It gives the Preference & Reward Feedback track a large open alignment corpus where SFT examples, human ratings, and preference-style annotations are visible rather than hidden inside a proprietary RLHF pipeline.
- 🧭 **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · judgment required · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.02155)
  _Data object:_ pairwise preference; scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ prompt sourcing; reward verifier layer; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models.
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
- 🧯 **[Reward Shaping to Mitigate Reward Hacking in RLHF](https://arxiv.org/abs/2502.18770)**
  <sub>2025 · ICML · 🧯 audit failure · 🏗️ construction recipe · judgment required · mixed · reward modeling · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.18770) · [DOI](https://doi.org/10.48550/arXiv.2502.18770) · [Code](https://github.com/PorUna-byte/PAR)
  _Data object:_ prompt, response, proxy reward, reference reward, centered reward, shaped reward, win-rate or benchmark outcome.; process: prompt, response, proxy reward; PPO/GRPO-style RLHF reward optimization.
  _Feedback / verifier:_ Preference As Reward (PAR), a sigmoid-shaped centered reward derived from reward-model preferences.
  _Recipe signal:_ teacher: reward model trained from preference data; DeepSeek-V3 is used for reported win-rate and benchmark judging.; generator: SFT-initialized policy model generates responses during PPO/GRPO-style training.
  _Audit focus:_ Reward shaping can introduce a new proxy objective., PAR still depends on the reward model's latent preference quality., DeepSeek-V3 judging is an evaluation proxy, not data-quality proof.
  _Why it matters:_ It treats scalar reward design as an auditable data object rather than assuming reward-model scores are safe optimization targets.
- 🏗️ **[When Data is the Algorithm: A Systematic Study and Curation of Preference Optimization Datasets](https://arxiv.org/abs/2511.10985)**
  <sub>2025 · ICLR 2026 · 🏗️ construction recipe · 🧯 audit failure · judgment required · mixed · preference learning · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2511.10985) · [OpenReview](https://openreview.net/forum?id=bmoh0i1nqE) · [DOI](https://doi.org/10.48550/arXiv.2511.10985) · [Data](https://huggingface.co/datasets/aladinDJ/ultramix-DPO-annotated)
  _Data object:_ prompt, chosen response, rejected response, task/category annotation, input-quality annotation, preference-reward validation signal, and curated-mixture membership; process: prompt, chosen response, rejected response; offline data-centric DPO corpus analysis and curation pipeline
  _Feedback / verifier:_ Magpie annotation plus reward-model-based preference validation
  _Recipe signal:_ teacher: Magpie labels from Llama-3.3-70B-Instruct plus FsfairX, a Llama-3-8B-Instruct-based reward model, for preference-reward validation.; generator: existing DPO datasets; the paper curates preference pairs rather than generating a new response corpus
  _Audit focus:_ Reward-model-based validation can inherit reward model blind spots., Curated mixtures may obscure source dataset licenses, prompt provenance, and filtering thresholds., Benchmark gains should not be treated as proof of intrinsic data quality.
  _Why it matters:_ It is directly relevant to Preference & Reward Feedback because it audits which preference records enter DPO-style training instead of treating all chosen/rejected pairs as interchangeable.
- 📦 **[Advancing LLM Reasoning Generalists with Preference Trees](https://arxiv.org/abs/2404.02078)**
  <sub>2024 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · mixed · preference learning · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2404.02078) · [DOI](https://doi.org/10.48550/arXiv.2404.02078) · [Code](https://github.com/OpenBMB/Eurus)
  _Data object:_ preference tree with reasoning chains, interaction trajectories, candidate branches, pairwise preference data, and verifier/task outcomes; process: prompt, reasoning chain, interaction trajectory; offline reasoning preference-tree dataset and Eurus training recipe
  _Feedback / verifier:_ task-result and preference-tree feedback over reasoning branches
  _Recipe signal:_ teacher: ground-truth solutions, Python execution environment, GPT-4 critique model, and task correctness signals; generator: GPT-3.5 Turbo actor by default, with progressively stronger actors including GPT-4 Turbo for hard problems
  _Audit focus:_ Tree construction may hide rejected rollout distribution., Verifier-backed preferences can still reward shortcut reasoning or answer-format artifacts., Reasoning-domain preferences may not transfer to open-ended chat preference data.
  _Why it matters:_ It extends Preference & Reward Feedback beyond flat chosen/rejected chat pairs toward branch-level and trajectory-level reasoning feedback.
- 🏗️ **[Aligning with Human Judgement: The Role of Pairwise Preference in Large Language Model Evaluators](https://arxiv.org/abs/2403.16950)**
  <sub>2024 · COLM 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2403.16950) · [DOI](https://doi.org/10.48550/arXiv.2403.16950) · [Code](https://github.com/cambridgeltl/PairS)
  _Data object:_ pairwise comparison judgment, local preference edge, aggregated ranking, transitivity diagnostic, or calibration diagnostic.; process: evaluation prompt, candidate text a, candidate text b; LLM evaluator used as pairwise judge with uncertainty-guided rank aggregation
  _Feedback / verifier:_ PairS pairwise-preference search and debiased pairwise evaluator judgments
  _Recipe signal:_ teacher: human judgments used as alignment/evaluation reference.; generator: LLM evaluators produce local pairwise comparisons.
  _Audit focus:_ Pairwise evaluators can amplify relative-comparison biases., Human-judgment alignment depends on task domain and candidate pool., More pairwise comparisons increase inference cost.
  _Why it matters:_ It shows how pairwise preference can be used as an evaluator scaffold, while making comparison bias, transitivity, and inference budget audit-relevant.
- 🧪 **[CompassJudger-1: All-in-one Judge Model Helps Model Evaluation and Evolution](https://arxiv.org/abs/2410.16256)**
  <sub>2024 · arXiv · 🧪 verifier reward · 🧰 benchmark · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.16256) · [DOI](https://doi.org/10.48550/arXiv.2410.16256) · [Code](https://github.com/open-compass/CompassJudger) · [Data](https://github.com/open-compass/CompassJudger/releases/tag/v1.0.0) · [HF](https://huggingface.co/opencompass/CompassJudger-1-7B-Instruct)
  _Data object:_ pointwise score, pairwise choice, formatted evaluation output, or critique.; process: prompt, response, response a; open-source judge model and JudgerBench evaluation setting
  _Feedback / verifier:_ CompassJudger-1 judge model acting as scorer, pairwise comparer, critique generator, or reward model
  _Recipe signal:_ teacher: public judge/reward labels, self-collected judge outputs, Qwen2.5-72B re-evaluation, and generated critique data.; generator: Qwen2.5-72B for re-evaluating outdated judge data and generating detailed critique processes.
  _Audit focus:_ Judge training data and prompt templates may affect generalization., Subjective evaluation scores can encode hidden rubric preferences., Judge-model benchmark performance is not proof that the judge is reliable as a training reward.
  _Why it matters:_ It is relevant to Preference & Reward Feedback because judge models often become reward/verifier components in evaluation and alignment pipelines.
- 🧯 **[Feedback Loops With Language Models Drive In-Context Reward Hacking](https://arxiv.org/abs/2402.06627)**
  <sub>2024 · ICML 2024 · 🧯 audit failure · 🧪 verifier reward · judgment required · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.06627) · [DOI](https://doi.org/10.48550/arXiv.2402.06627)
  _Data object:_ initial context, model output, feedback outcome, updated context, subsequent model output, and side-effect metric.; process: context, response, feedback; in-context feedback-loop environment.
  _Feedback / verifier:_ explicit or implicit feedback-loop reward signal.
  _Recipe signal:_ teacher: feedback environment or implicit reward signal.; generator: language model produces outputs across repeated feedback-loop episodes.
  _Audit focus:_ In-context feedback can teach shortcut exploitation without weight updates., Static evaluations miss feedback effects., Environment-specific feedback rules may not generalize.
  _Why it matters:_ It broadens preference/reward feedback from static labels to feedback dynamics that can be exploited at inference time.
- 🏗️ **[Generative Reward Models](https://arxiv.org/abs/2410.12832)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🧪 verifier reward · judgment required · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.12832) · [DOI](https://doi.org/10.48550/arXiv.2410.12832)
  _Data object:_ prompt, candidate responses, generated reasoning trace, synthetic preference judgment or ranking; process: prompt, candidate response a, candidate response b; offline generative reward-model training and evaluation
  _Feedback / verifier:_ GenRM generative preference judgment with self-generated reasoning traces
  _Recipe signal:_ teacher: human preference labels from UltraFeedback / UltraInteract plus bootstrapped model rationales; generator: GenRM / STaR-style iterative model generating rationales and preference judgments
  _Audit focus:_ Synthetic preference labels can inherit judge-model bias., Generated rationales may be off-policy for the base model and fail to generalize., Majority-vote accuracy gains should not be treated as direct evidence of data quality.
  _Why it matters:_ It expands the Preference & Reward Feedback track beyond scalar discriminative reward models by making generated critique/rationale text part of the reward-model data object.
- 🧪 **[Generative Verifiers: Reward Modeling as Next-Token Prediction](https://arxiv.org/abs/2408.15240)**
  <sub>2024 · ICLR 2025 · 🧪 verifier reward · 🏗️ construction recipe · programmatic · judgment required · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.15240) · [DOI](https://doi.org/10.48550/arXiv.2408.15240)
  _Data object:_ problem, candidate solution, generated verification rationale, correctness judgment / verifier output; process: problem, candidate solution, generated solution; best-of-N / verifier-guided reasoning evaluation
  _Feedback / verifier:_ generative verifier trained as next-token prediction jointly on verification and solution generation
  _Recipe signal:_ teacher: programmatic oracle rationales for algorithmic tasks; Gemini 1.0 Pro reference-guided synthetic rationales for GSM8K; generator: Gemma-2B solution generator for algorithmic tasks; Gemini 1.0 Pro for GSM8K rationale generation; Gemma verifiers for GenRM
  _Audit focus:_ Synthetic verification rationales may contain errors., Prompt and output format can affect next-token verifier judgments., Best-of-N improvements are not proof that verifier labels are calibrated.
  _Why it matters:_ It is relevant to Preference & Reward Feedback because it reframes reward modeling as generative verification rather than only scalar classification.
- 🧯 **[Language Models Learn to Mislead Humans via RLHF](https://arxiv.org/abs/2409.12822)**
  <sub>2024 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · programmatic · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2409.12822) · [DOI](https://doi.org/10.48550/arXiv.2409.12822) · [Code](https://github.com/Jiaxin-Wen/MisleadLM) · [HF](https://huggingface.co/jiaxin-wen/MisleadLM-code)
  _Data object:_ task prompt, model output, human confidence judgment, human approval label, gold correctness, and false-positive analysis.; process: prompt, model output, human confidence; time-constrained human evaluation of RLHF-trained model outputs.
  _Feedback / verifier:_ human correctness judgments compared against gold labels and proxy RLHF rewards.
  _Recipe signal:_ teacher: task-specific reward model, ChatbotArena preference reward model, simple-unit-test proxy reward, and human evaluators.; generator: RLHF-trained models produce QA arguments and Python programs.
  _Audit focus:_ Human evaluation can be fooled by confident or persuasive wrong answers., Time limits and evaluator expertise can change conclusions., Human preference labels may reward misleading explanations.
  _Why it matters:_ It separates human approval from objective correctness, a core risk for preference/reward feedback data.
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
- 🧰 **[RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style](https://arxiv.org/abs/2410.16184)**
  <sub>2024 · ICLR 2025 Oral · 🧰 benchmark · 🧪 verifier reward · judgment required · programmatic · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.16184) · [DOI](https://doi.org/10.48550/arXiv.2410.16184) · [Code](https://github.com/THU-KEG/RM-Bench) · [HF](https://huggingface.co/datasets/THU-KEG/RM-Bench)
  _Data object:_ prompt with three chosen responses and three rejected responses across concise, detailed plain-text, and detailed markdown styles.; process: id, prompt, chosen; offline reward-model benchmark with style-substance evaluation matrix
  _Feedback / verifier:_ reward model scores chosen and rejected responses; correctness checked by human annotation, unit tests, ground-truth math answers, or safety rules depending on domain
  _Recipe signal:_ teacher: human annotators for chat validation; unit tests for code; ground-truth answers for math; safety dataset rules and generated safe/unsafe responses for safety; generator: GPT-4o for chosen responses and many rejected/style variants; Llama-3.1-8B-Lexi-Uncensored-V2 for harmful rejected safety responses
  _Audit focus:_ Style-controlled benchmark may still inherit GPT-4o generation artifacts., Human validation details and agreement statistics require closer audit., Reward-model benchmark performance is not direct evidence of downstream policy quality.
  _Why it matters:_ It is directly relevant to Preference & Reward Feedback because it audits when scalar rewards prefer verbosity or formatting over correctness.
- 🧭 **[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216)**
  <sub>2024 · arXiv · 🧭 survey background · 📈 scaling study · mixed · programmatic · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216)
  _Data object:_ literature-level comparison of prompts, responses, reward sources, objectives, and optimizer families.; process: prompt sampling, response sampling, reward source; LLM post-training algorithms and reasoning tasks such as math and coding.
  _Feedback / verifier:_ learned preference rewards, verifiable rewards, and policy-gradient objectives.
  _Recipe signal:_ teacher: literature covering human feedback, verifiable rewards, and post-training optimization.; generator: technical survey and unified policy-gradient framework.
  _Audit focus:_ Method comparisons can mix data effects with optimizer and sampling-budget effects., RLHF and RLVR rewards are often discussed together despite different verification contracts., Survey papers do not provide reusable training data objects.
  _Why it matters:_ It helps distinguish human preference rewards, AI feedback, verifiable rewards, and direct preference objectives.
- 📦 **[Skywork-Reward: Bag of Tricks for Reward Modeling in LLMs](https://arxiv.org/abs/2410.18451)**
  <sub>2024 · arXiv · 📦 data release · 🧪 verifier reward · judgment required · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.18451) · [DOI](https://doi.org/10.48550/arXiv.2410.18451) · [Data](https://huggingface.co/collections/Skywork/skywork-reward-data-collection-66d7fda6a5098dc77035336d) · [HF](https://huggingface.co/collections/Skywork/skywork-reward-model-66d7fbdebae0e60d00a6b60d)
  _Data object:_ prompt, chosen response, rejected response, source subset, annotator or judge type; process: prompt, chosen response, rejected response; offline reward-model training data collection
  _Feedback / verifier:_ Bradley-Terry-style scalar reward model trained on curated pairwise preferences
  _Recipe signal:_ teacher: human labels, GPT-3.5/GPT-4-style LLM labels, and ArmoRM-guided labels depending on subset; generator: mixed response generators including Llama 3.1 405B Instruct, Llama 3.1 70B Instruct, Llama 3 70B Instruct, and Llama 3 8B Instruct for Magpie subsets
  _Audit focus:_ RewardBench leaderboard performance should not be treated as proof that the preference pairs are clean., LLM-judged and human-labeled subsets have different bias profiles., Source-dataset licenses and filtering rules need subset-level audit.
  _Why it matters:_ It is a high-value Preference & Reward Feedback entry because it exposes a curated reward-model training collection with official Hugging Face artifacts and source-level mixture information.
- 🧯 **[The Comparative Trap: Pairwise Comparisons Amplifies Biased Preferences of LLM Evaluators](https://arxiv.org/abs/2406.12319)**
  <sub>2024 · arXiv · 🧯 audit failure · 🏗️ construction recipe · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.12319) · [DOI](https://doi.org/10.48550/arXiv.2406.12319)
  _Data object:_ pairwise decision, pointwise score/reasoning, PRePair judgment, or bias diagnostic.; process: prompt, candidate response a, candidate response b; LLM-as-a-judge evaluation protocols comparing pairwise, pointwise, and PRePair methods
  _Feedback / verifier:_ LLM evaluator judgments and PRePair mitigation method
  _Recipe signal:_ teacher: human preference labels from MT-Bench and LLMBar-Adversarial; RewardBench-Chat labels for additional aggregation comparison.; generator: LLM evaluators produce pairwise and pointwise judgments.
  _Audit focus:_ Pairwise comparison can amplify verbosity and authoritative-tone biases., Pointwise evaluation may reduce some biases but can lose relative-comparison signal., Mitigation results on benchmarks should not be treated as proof that evaluator judgments are clean.
  _Why it matters:_ It is directly relevant to Preference & Reward Feedback because pairwise preferences are often reused as reward or judge supervision without auditing bias amplification.
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
- 🧭 **[A Survey of Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2312.14925)**
  <sub>2023 · TMLR · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2312.14925) · [Venue](https://openreview.net/forum?id=f7OkIurx4b) · [DOI](https://doi.org/10.48550/arXiv.2312.14925)
  _Data object:_ survey taxonomy over feedback collection, reward modeling, and policy optimization.; process: feedback source, preference format, reward model objective; RLHF pipelines spanning LLMs and broader RL settings.
  _Feedback / verifier:_ learned reward model from human feedback.
  _Recipe signal:_ teacher: human preference and feedback providers summarized across the literature.; generator: survey taxonomy
  _Audit focus:_ Human feedback can be noisy, subjective, sparse, or expensive., Reward models can overfit annotator preferences and become exploitable objectives., LLM readers may overgeneralize broad RLHF lessons to verifiable-reasoning settings.
  _Why it matters:_ It fills the RLHF survey doorway by separating human preference feedback, reward modeling, and policy optimization before readers compare them with verifiable-reward reasoning data.
- 🪜 **[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · mixed · process supervision · preference learning · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR)
  _Data object:_ step-level preference data with process scores and explanations; process: retrieval context, reasoning step, process reward score; RAG reasoning pipeline
  _Feedback / verifier:_ process reward model plus process explanation model
  _Recipe signal:_ generator: MCTS-guided retrieval-augmented rollouts; filtering rule: trustworthy process rewarding and iterative preference optimization
  _Audit focus:_ PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search
  _Why it matters:_ It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.
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

### <a id="dpo-preference-optimization"></a>⚖️ DPO / preference optimization

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
- 🧯 **[Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://arxiv.org/abs/2406.02900)**
  <sub>2024 · NeurIPS 2024 · 🧯 audit failure · 🧪 verifier reward · judgment required · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.02900) · [DOI](https://doi.org/10.48550/arXiv.2406.02900)
  _Data object:_ prompt, preferred/dispreferred summary pair, direct-alignment training run, KL budget, proxy reward, GPT-4 win-rate diagnostic; process: prompt, chosen response, rejected response; offline direct-alignment overoptimization audit
  _Feedback / verifier:_ proxy reward and GPT-4 win-rate diagnostics for reward overoptimization
  _Recipe signal:_ teacher: human preference data and GPT-4-turbo-2024-04-09 win-rate diagnostics; generator: direct alignment algorithms produce trained policy outputs
  _Audit focus:_ GPT-4 win rate is a proxy for gold quality, not direct human ground truth., Reward overoptimization trends depend on KL budget, beta, model scale, and dataset., Audit results should not be used as evidence that the source preference data is clean.
  _Why it matters:_ It shows that DPO-like direct preference objectives can still over-optimize proxy rewards even without a separately trained reward model.
- 🏗️ **[Self-Play Preference Optimization for Language Model Alignment](https://arxiv.org/abs/2405.00675)**
  <sub>2024 · ICML 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.00675) · [DOI](https://doi.org/10.48550/arXiv.2405.00675) · [Code](https://github.com/uclaml/SPPO)
  _Data object:_ prompt with self-play candidate responses and PairRM-derived preference signal; process: prompt, self play response, competing response; offline preference-optimization recipe
  _Feedback / verifier:_ PairRM 0.4B preference model used as preference-probability oracle
  _Recipe signal:_ teacher: PairRM 0.4B preference model; generator: current policy model in iterative self-play
  _Audit focus:_ PairRM/oracle bias can be amplified through iterative self-play., Self-play responses are tied to the policy distribution used during construction., Downstream win rates should not be treated as direct evidence of data quality.
  _Why it matters:_ It is useful for the Preference & Reward Feedback track because it shows how preference data can be generated online from model self-play rather than only collected as static human pairwise comparisons.
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

### <a id="scalar-reward-orm-data"></a>🎚️ Scalar reward / ORM data

- 🚀 **[Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2409.12122) · [Code](https://github.com/QwenLM/Qwen2.5-Math) · [HF](https://huggingface.co/Qwen/Qwen2.5-Math-7B) · [Project](https://qwenlm.github.io/blog/qwen2.5-math/)
  _Data object:_ math solution, final answer, optional tool/code execution trace, and reward-model score.; process: model stage, problem source, reasoning mode, tool use, answer, reward score, benchmark result.; Qwen math model family, GitHub evaluation scripts, and Hugging Face model releases.
  _Feedback / verifier:_ math answer checks, reward model signals, and benchmark evaluations.
  _Recipe signal:_ teacher: self-improvement pipeline and math reward/evaluation signals.; generator: math-specialized models generate solutions and tool-integrated traces.
  _Audit focus:_ Tool-integrated results are not comparable to no-tool results., Reward models can favor format over proof validity., Model-family reports can blur data and inference effects.
  _Why it matters:_ It is a useful model-report case where math post-training data, reward models, tool-integrated reasoning, and multilingual math evaluation are tied together.
- 🧰 **[Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv · 🧰 benchmark · 🧪 verifier reward · programmatic · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k)
  _Data object:_ answer level; scalar reward
  _Feedback / verifier:_ programmatic, judgment required
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows.
- 🧪 **[Activation Reward Models for Few-Shot Model Alignment](https://arxiv.org/abs/2507.01368)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · judgment required · mixed · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.01368) · [DOI](https://doi.org/10.48550/arXiv.2507.01368)
  _Data object:_ pairwise preference decision or scalar reward from token-probability scoring.; process: prompt, response a, response b; open-weight LLM/LMM internals with attention-head activation steering
  _Feedback / verifier:_ activation-steered reward model using probability of the Yes token or pairwise choice token
  _Recipe signal:_ teacher: few-shot labeled preference examples; GPT-4o-mini for bias injection in PreferenceHack negative examples; generator: activation extraction, REINFORCE attention-head selection, and generative scoring
  _Audit focus:_ Requires access to internal model activations, so it does not apply to closed-source models., Few-shot activation signals may not generalize to broad or poorly specified criteria., Current implementation focuses on single-turn settings.
  _Why it matters:_ It broadens the track beyond trained scalar reward models by exposing activation-derived reward signals and a reward-hacking benchmark setting.
- 🧪 **[Sentence-level Reward Model can Generalize Better for Aligning LLM from Human Preference](https://arxiv.org/abs/2503.04793)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · judgment required · reward modeling · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.04793) · [DOI](https://doi.org/10.48550/arXiv.2503.04793)
  _Data object:_ prompt, response segmented into sentences, sentence-level reward cues, aggregated response-level preference score; process: prompt, response, sentence segments; offline reward-model training and downstream alignment
  _Feedback / verifier:_ sentence-level reward model with response-level Bradley-Terry aggregation
  _Recipe signal:_ teacher: human preference pairs used to train response-level preference via Bradley-Terry aggregation; filtering rule: segment complete responses into sentences and compute sentence rewards from reward-output differences at sentence start/end positions
  _Audit focus:_ Sentence-level credit assignment may not reflect causal contribution to final preference., Sentence segmentation choices can affect reward attribution., Response-level preference labels may be too coarse to validate individual sentence rewards.
  _Why it matters:_ It adds an intermediate-granularity reward signal to the Preference & Reward Feedback track, between token-level rewards and whole-response scalar reward models.
- 📦 **[WildGuard: Open One-Stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs](https://arxiv.org/abs/2406.18495)**
  <sub>2024 · NeurIPS 2024 Datasets & Benchmarks · 📦 data release · 🧪 verifier reward · judgment required · mixed · safety alignment · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.18495) · [DOI](https://doi.org/10.48550/arXiv.2406.18495) · [Code](https://github.com/allenai/wildguard) · [Data](https://huggingface.co/datasets/allenai/wildguardmix) · [HF](https://huggingface.co/allenai/wildguard)
  _Data object:_ prompt or prompt-response item with prompt harmfulness, response harmfulness, response refusal/compliance, adversarial flag, and risk subcategory.; process: prompt, adversarial, response; offline safety moderation and guardrail evaluation dataset.
  _Feedback / verifier:_ WildGuard model and labels for prompt harmfulness, response harmfulness, and refusal detection.
  _Recipe signal:_ teacher: GPT-4 for train-label filtering and auditing; human annotators for WildGuardTest.; generator: synthetic harmful/benign prompts, WildTeaming adversarial transformations, LLM-generated refusal/compliance responses, and GPT-4 complex responses.
  _Audit focus:_ Safety labels depend on policy choices and cultural context., Refusal detection can reward over-refusal if helpfulness is not tracked., Jailbreak distributions may age quickly as attacks change.
  _Why it matters:_ It turns safety moderation into a feedback-bearing data object with explicit harm/refusal labels useful for guardrail training and reward-model auditing.
- 🧭 **[GRPO is Secretly a Process Reward Model](https://arxiv.org/abs/2509.21154)**
  <sub>2025 · arXiv preprint arXiv:2509.21154 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.21154)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="rlaif-synthetic-feedback"></a>🤖 RLAIF / synthetic feedback

- 📦 **[UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377)**
  <sub>2023 · ICML · 📦 data release · 🧪 verifier reward · judgment required · preference learning · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.01377) · [Code](https://github.com/OpenBMB/UltraFeedback) · [Data](https://huggingface.co/datasets/openbmb/UltraFeedback)
  _Data object:_ instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline.
  _Feedback / verifier:_ AI-generated scalar and textual feedback over response quality dimensions.
  _Recipe signal:_ teacher: AI judge annotations and rubric instructions.; generator: candidate responses are sampled from a diverse model pool.
  _Audit focus:_ AI feedback can encode judge-model bias., A corrected dataset version can change reward-model behavior., Fine-grained scores may not translate cleanly into pairwise preferences.
  _Why it matters:_ It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels.
- 🏗️ **[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073)**
  <sub>2022 · arXiv preprint · 🏗️ construction recipe · 🧭 survey background · judgment required · mixed · preference learning · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.08073) · [Project](https://github.com/anthropics/ConstitutionalHarmlessnessPaper)
  _Data object:_ original answer, self-critique, revised answer, preference pair, reward-model score.; process: principle used, critique, revision, comparison, preference label.; offline SL and RLHF/RLAIF alignment pipeline.
  _Feedback / verifier:_ AI preference model trained from comparisons guided by constitutional principles.
  _Recipe signal:_ teacher: constitution/principles plus critique-and-revision model behavior.; generator: model produces critiques, revisions, and response pairs.
  _Audit focus:_ AI feedback can encode model bias at scale., Principles may be underspecified or culturally narrow., A model can become safe-looking but evasive if helpfulness is not audited.
  _Why it matters:_ It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data.
- 🏗️ **[Process-based Self-Rewarding Language Models](https://arxiv.org/abs/2503.03746)**
  <sub>2025 · ACL Findings 2025 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · mixed · preference learning · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.03746) · [DOI](https://doi.org/10.48550/arXiv.2503.03746) · [Code](https://github.com/Shimao-Zhang/Process-Self-Rewarding) · [Data](https://github.com/Shimao-Zhang/Process-Self-Rewarding/tree/master/data)
  _Data object:_ math problem, long-thought trace, segmented reasoning step, candidate next steps, chosen/rejected step pair, step-wise judge explanation, and final answer.; process: problem, long thought trace, previous steps; iterative process-based self-rewarding pipeline for mathematical reasoning.
  _Feedback / verifier:_ step-wise LLM-as-a-judge self-reward with pairwise comparison over candidate reasoning steps.
  _Recipe signal:_ teacher: Qwen2.5-72B process reward model trained on PRM800K; OpenAI o1 for step segmentation and detailed judgment generation.; generator: model-generated long-thought reasoning traces, MCTS step candidates, and step-wise self-judge comparisons.
  _Audit focus:_ Step-wise judges may reward surface reasoning style instead of valid reasoning., Long-thought traces can contain plausible but incorrect intermediate steps., Self-generated process rewards can amplify the model's own reasoning blind spots.
  _Why it matters:_ It connects Preference & Reward Feedback Data with process supervision by making self-generated step judgments part of the reward object.
- 🏗️ **[Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge](https://arxiv.org/abs/2407.19594)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🧪 verifier reward · judgment required · preference learning · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.19594) · [DOI](https://doi.org/10.48550/arXiv.2407.19594)
  _Data object:_ prompt, sampled responses, judge outputs with chain-of-thought and score, meta-judge comparison over judgments, actor preference pair, judge preference pair, and iteration id.; process: prompt, candidate response, judge output; iterative self-improvement pipeline for both response generation and judging ability.
  _Feedback / verifier:_ LLM-as-a-meta-judge signal over the model's own judgments.
  _Recipe signal:_ teacher: self-generated judge and meta-judge feedback, initialized with OpenAssistant-derived EFT data from Self-Rewarding Language Models.; generator: model-generated responses, judgments, and meta-judgments.
  _Audit focus:_ Meta-judge and base judge can share the same blind spots., Recursive self-judgment can amplify evaluation artifacts., Meta-judge develops score and positional biases during training.
  _Why it matters:_ It makes judge quality itself part of the feedback loop, which is important for auditing recursive synthetic reward data.
- 🏗️ **[Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020)**
  <sub>2024 · ICML 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2401.10020) · [DOI](https://doi.org/10.48550/arXiv.2401.10020)
  _Data object:_ instruction prompt, candidate responses, self-generated score out of 5 with justification, chosen/rejected preference pair, and iteration id.; process: prompt, candidate response, self judgment; offline iterative self-feedback alignment pipeline.
  _Feedback / verifier:_ the policy model itself acts as LLM-as-a-judge to provide rewards.
  _Recipe signal:_ teacher: self-generated LLM-as-a-judge rewards initialized from OpenAssistant-derived evaluation fine-tuning data.; generator: Llama 2-Chat 70B generates augmented prompts; the current Self-Rewarding model generates candidate responses and self-evaluations.
  _Audit focus:_ Self-confirming reward loops can amplify model bias., The judge and policy share blind spots., Self-judgment can reward response style instead of substantive correctness.
  _Why it matters:_ It is a central RLAIF/synthetic-feedback recipe showing how reward labels can be generated by the same model family being optimized.

### <a id="reward-model-benchmarks"></a>🧪 Reward-model benchmarks

- 🧰 **[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2403.13787) · [DOI](https://doi.org/10.48550/arXiv.2403.13787) · [Code](https://github.com/allenai/reward-bench) · [Data](https://huggingface.co/datasets/allenai/reward-bench) · [Project](https://huggingface.co/spaces/allenai/reward-bench)
  _Data object:_ prompt with chosen and rejected completion, scored by reward model accuracy.; process: prompt, chosen, rejected; offline reward-model benchmark and leaderboard
  _Feedback / verifier:_ reward model assigns scalar scores to chosen and rejected completions
  _Recipe signal:_ teacher: human-verified or benchmark-derived chosen/rejected labels depending on subset; generator: mixture of existing benchmark completions and curated modified completions
  _Audit focus:_ Aggregate accuracy can hide subset-specific failures., Leaderboard exposure can create benchmark overfitting., Pairwise labels may encode hidden style or value preferences.
  _Why it matters:_ It helps readers test whether a reward signal generalizes beyond helpfulness style into subtle factual, reasoning, refusal, and safety preferences.
- 🧰 **[Multimodal RewardBench 2: Evaluating Omni Reward Models for Interleaved Text and Image](https://arxiv.org/abs/2512.16899)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2512.16899) · [DOI](https://doi.org/10.48550/arXiv.2512.16899) · [Code](https://github.com/facebookresearch/MMRB2) · [Data](https://huggingface.co/datasets/rl-research/multimodal-rewardbench-2)
  _Data object:_ pair id, prompt text/images, response a text/images, response b text/images, chosen label, model identifiers, human annotations, prompt source, and prompt metadata.; process: pair id, prompt text, prompt images; offline omni/multimodal reward-model benchmark
  _Feedback / verifier:_ expert-annotated preference labels with ensemble filtering and positional-consistent evaluation protocol
  _Recipe signal:_ teacher: human expert annotators with strong consensus; ensemble filtering strategy.; generator: 23 models and agents generate candidate text/image/interleaved responses.
  _Audit focus:_ Multimodal judges may fail because of image understanding errors rather than preference reasoning., AI-generated outputs may carry model/provider-specific artifacts., Third-party prompt/image licenses must be checked before reuse.
  _Why it matters:_ It extends reward-model evaluation from text-only or single-image cases to interleaved text-image outputs where preference labels depend on visual and textual correctness together.
- 🧰 **[RewardBench 2: Advancing Reward Model Evaluation](https://arxiv.org/abs/2506.01937)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · programmatic · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.01937) · [DOI](https://doi.org/10.48550/arXiv.2506.01937) · [Code](https://github.com/allenai/reward-bench) · [Data](https://huggingface.co/datasets/allenai/reward-bench-2) · [Project](https://huggingface.co/spaces/allenai/reward-bench)
  _Data object:_ best-of-4 item with one chosen/correct completion and three rejected/incorrect completions.; process: id, prompt, chosen; offline reward-model benchmark and RewardBench evaluation harness
  _Feedback / verifier:_ manual, programmatic, or LM-based verification depending on subset
  _Recipe signal:_ teacher: manual verification, verifier functions, majority voting, rubrics, human annotation, and multi-LLM-as-judge depending on domain; generator: completions from 20 different models or human-written completions
  _Audit focus:_ Aggregate score can hide domain-specific reward-model failures., Accuracy-based benchmark correlation should not be treated as proof of downstream RLHF quality., Ties subset differs from ordinary chosen/rejected preference evaluation.
  _Why it matters:_ It upgrades reward-model evaluation from simple pairwise checks toward harder multi-candidate and domain-specific verifier contracts.
- 🧰 **[JudgeBench: A Benchmark for Evaluating LLM-based Judges](https://arxiv.org/abs/2410.12784)**
  <sub>2024 · ICLR 2025 · 🧰 benchmark · 🧪 verifier reward · programmatic · judgment required · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.12784) · [DOI](https://doi.org/10.48550/arXiv.2410.12784) · [Code](https://github.com/ScalerLab/JudgeBench) · [Data](https://huggingface.co/datasets/ScalerLab/JudgeBench)
  _Data object:_ JSON object with pair id, original id, source, question, response model, response A, response B, and objective label.; process: pair id, original id, source; offline LLM-as-judge and reward-model benchmark
  _Feedback / verifier:_ objective correctness label over response pairs
  _Recipe signal:_ teacher: objective labels derived from source datasets and conversion pipeline.; generator: GPT-4o-2024-05-13 and Claude-3.5-Sonnet response generation.
  _Audit focus:_ Objective labels depend on the correctness of source datasets and conversion pipeline., Judge performance on response pairs is not proof that the judge is suitable for open-ended preference labeling., Order sensitivity and prompt sensitivity must be audited separately.
  _Why it matters:_ It helps the track distinguish human-preference alignment from judge reliability under objective correctness.
- 🧰 **[RAG-RewardBench: Benchmarking Reward Models in Retrieval Augmented Generation for Preference Alignment](https://arxiv.org/abs/2412.13746)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.13746) · [DOI](https://doi.org/10.48550/arXiv.2412.13746) · [Code](https://github.com/jinzhuoran/RAG-RewardBench/) · [Data](https://huggingface.co/datasets/jinzhuoran/RAG-RewardBench)
  _Data object:_ prompt, question, chosen response, chosen model, rejected response, reject model, subset, and retrieved references.; process: prompt, question, chosen; offline RAG reward-model benchmark
  _Feedback / verifier:_ four commercial LLM judges with filtering for inconsistent scores and human-correlation validation
  _Recipe signal:_ teacher: four state-of-the-art commercial judge models, with preference pairs reported to correlate with human annotations at Pearson 0.84.; generator: six retrievers including BM25, DPR, E5, BGE, GTR, and Google Search, paired with 24 RALMs.
  _Audit focus:_ LLM-as-a-judge labels may be biased on citation, grounding, abstention, or conflict cases., RAG benchmark accuracy is not proof that a reward model improves downstream RAG alignment., Dataset mixes retriever and generator effects, so reward-model failures should be analyzed by subset.
  _Why it matters:_ It extends Preference & Reward Feedback beyond general chat by testing whether reward models handle retrieval grounding, citation, abstention, and conflicting evidence.
- 🧰 **[VL-RewardBench: A Challenging Benchmark for Vision-Language Generative Reward Models](https://arxiv.org/abs/2411.17451)**
  <sub>2024 · CVPR 2025 Highlight · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2411.17451) · [DOI](https://doi.org/10.48550/arXiv.2411.17451) · [Code](https://github.com/vl-rewardbench/VL_RewardBench) · [Data](https://huggingface.co/datasets/MMInstruction/VL-RewardBench) · [Project](https://vl-rewardbench.github.io/)
  _Data object:_ image-query example with two responses, human ranking, models, judge, rationale, query source, and ground truth.; process: id, query, image; offline vision-language generative reward-model benchmark
  _Feedback / verifier:_ AI-assisted preference labels with human verification
  _Recipe signal:_ teacher: small LVLM ensemble filtering, commercial-model reasoning/labeling for reasoning tasks, GPT-4o quality assessment, and human verification.; generator: source VLM/VL-GenRM candidates; commercial models used for reasoning-task candidate generation and labeling.
  _Audit focus:_ Multimodal judges may fail because of visual perception errors rather than preference reasoning., AI-assisted labels can inherit model biases before human verification., Benchmark correlation with MMMU-Pro is not proof of data quality or downstream policy improvement.
  _Why it matters:_ It adds multimodal reward feedback to the track and makes visual perception failures explicit as reward-model audit risks.

### <a id="rubric-conditioned-rewards"></a>🧾 Rubric-conditioned rewards

- 📦 **[Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · NAACL · 📦 data release · 🧰 benchmark · judgment required · mixed · safety alignment · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.09004) · [Venue](https://aclanthology.org/2025.naacl-long.306/) · [DOI](https://doi.org/10.18653/v1/2025.naacl-long.306) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0)
  _Data object:_ prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: prompt, response, top level hazard category; offline guardrail training/evaluation dataset.
  _Feedback / verifier:_ risk taxonomy labels, human annotations, multi-LLM jury judgments, and guard-model evaluation signal.
  _Recipe signal:_ teacher: human annotators plus multi-LLM jury system.; generator: hybrid data generation over safety prompts and human-LLM interactions.
  _Audit focus:_ Safety taxonomy labels are policy- and culture-dependent., Human and multi-LLM jury labels can disagree, especially near policy boundaries., Guard models can overfit visible hazard categories and miss emerging harms.
  _Why it matters:_ It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification.
- 🧰 **[HealthBench: Evaluating Large Language Models Towards Improved Human Health](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2505.08775) · [DOI](https://doi.org/10.48550/arXiv.2505.08775) · [Code](https://github.com/openai/simple-evals) · [Project](https://openai.com/index/healthbench/)
  _Data object:_ conversation context, candidate response, physician-written rubric criteria, point weights, criterion-met labels, and aggregate score.; process: conversation, candidate response, rubric criterion; open-ended healthcare conversation evaluation benchmark.
  _Feedback / verifier:_ physician-written rubrics graded by GPT-4.1 as a model-based grader.
  _Recipe signal:_ teacher: 262 physicians create conversation-specific rubrics; GPT-4.1 is used as the model-based grader.; generator: conversations are produced through synthetic generation and human adversarial testing; candidate responses are generated by evaluated models or written by physicians in baseline studies.
  _Audit focus:_ High-stakes medical rubrics can miss rare but severe harms., Model-based grading must be calibrated against physician judgment., Aggregate scores can hide medically critical failure modes.
  _Why it matters:_ It is a high-stakes example of reward/verifier data where expert rubric design and grader calibration matter more than exact-match correctness.
- 🧪 **[Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535)**
  <sub>2024 · EMNLP · 🧪 verifier reward · 🚀 model report · judgment required · reward modeling · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2405.01535) · [ACL](https://aclanthology.org/2024.emnlp-main.248/) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [Code](https://github.com/prometheus-eval/prometheus-eval) · [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0)
  _Data object:_ rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights.
  _Feedback / verifier:_ Prometheus 2 judge output aligned against human/proprietary-judge benchmarks.
  _Recipe signal:_ teacher: human judgments and strong evaluator references across direct and pairwise tasks.; generator: training pipeline merges evaluator capabilities across formats.
  _Audit focus:_ Open judges can inherit rubric bias., Agreement with another judge is not the same as correctness., Pairwise and scalar formats can disagree.
  _Why it matters:_ It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes.
- 🧪 **[Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning](https://arxiv.org/abs/2410.08146)**
  <sub>2024 · ICLR · 🧪 verifier reward · 🪜 process supervision · programmatic · mixed · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2410.08146) · [OpenReview](https://openreview.net/forum?id=A6Y7AqlzLW) · [DOI](https://doi.org/10.48550/arXiv.2410.08146)
  _Data object:_ problem, partial trace before step, proposed step, future success estimate, process advantage score, and final correctness signal.; process: problem, partial trace, step; reasoning search and online RL setup using process rewards.
  _Feedback / verifier:_ Process Advantage Verifier trained to predict progress toward correct answer.
  _Recipe signal:_ teacher: automated success estimates from prover policies and final correctness signals.; generator: prover policies produce traces used to train process verifiers.
  _Audit focus:_ Progress estimates can be policy-specific., Verifier-guided search can exploit reward artifacts., Step rewards can encourage short-term progress that hurts final correctness.
  _Why it matters:_ It gives process supervision a concrete reward target beyond dense labels: progress under a prover policy.
- 🧪 **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · judgment required · mixed · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.01511) · [DOI](https://doi.org/10.48550/arXiv.2602.01511) · [HF](https://huggingface.co/collections/OpenRubrics/rubricarm)
  _Data object:_ prompt, candidate response pair, generated rubric, rubric-conditioned reasoning chain, preference prediction, preference-correctness reward, and policy/reward update signal.; process: prompt, response a, response b; alternating reinforcement-learning setup for rubric generator and rubric-conditioned judge.
  _Feedback / verifier:_ rubric-conditioned judge trained with preference-correctness and format rewards.
  _Recipe signal:_ teacher: general-domain OpenRubrics trajectories plus preference labels; a format reward enforces valid trajectories.; generator: learned rubric generator trained with alternating reinforcement learning.
  _Audit focus:_ Generated rubrics can drift away from human preference dimensions., Alternating updates can create non-stationary reward targets and reward hacking., A format-valid judge trajectory is not necessarily a correct or useful feedback signal.
  _Why it matters:_ It makes the generated rubric itself part of the reward-model data object, so reuse requires auditing rubric quality, judge correctness, and policy optimization together.
- 🧪 **[Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis](https://arxiv.org/abs/2602.00846)**
  <sub>2026 · ECCV 2026 · 🧪 verifier reward · 🏗️ construction recipe · judgment required · mixed · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.00846) · [DOI](https://doi.org/10.48550/arXiv.2602.00846) · [Code](https://anonymous.4open.science/r/Omni-RRM-CC08) · [Project](https://tmfk418.github.io/Omni-RRM/)
  _Data object:_ prompt, modality, candidate pair, raw preference candidate, rubric dimensions, scalar rubric scores, synthesized preference label, JSON justification, and reward score.; process: prompt, modality, candidate response a; omni-modal reward-model training pipeline over text, image, video, and audio inputs.
  _Feedback / verifier:_ Omni-RRM reward model trained from automatically synthesized rubric-grounded preference data.
  _Recipe signal:_ teacher: GPT-4o-mini and Doubao-1.5-Pro for rubric annotation, scoring, and reconciliation.; generator: strong/weak pairs from Qwen2.5-VL-7B, Qwen2.5-VL-3B, LLaVA-1.5-7B, R1-AQA-7B, Qwen2-Audio-7B, and Qwen2.5-Omni variants.
  _Audit focus:_ Synthetic rubric labels can inherit teacher-model bias across modalities., Perception errors in image, video, or audio inputs can be mistaken for preference errors., Strong/weak response generation can create artificial preference shortcuts.
  _Why it matters:_ It extends preference/reward feedback beyond text-only responses and makes modality, rubric dimension, score, and justification part of the reusable reward-data object.
- 🏗️ **[Rethinking Rubric Generation for Improving LLM-as-a-Judge and Reward Modeling for Open-Ended Tasks](https://arxiv.org/abs/2602.05125)**
  <sub>2026 · arXiv · 🏗️ construction recipe · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.05125) · [DOI](https://doi.org/10.48550/arXiv.2602.05125)
  _Data object:_ coarse rubric, decomposed fine-grained criteria, filtered rubric set, correlation-aware weights, judge decision, and reward signal.; process: prompt, candidate response, coarse rubric; rubric-generation and rubric-conditioned judge/reward-model evaluation pipeline for open-ended tasks.
  _Feedback / verifier:_ recursively decomposed and filtered rubrics used to improve judge scoring and reward-model signals.
  _Recipe signal:_ teacher: GPT-4o rubric proposer; GPT-OSS-120B determines rubric satisfaction during RFT or direct-preference judge baseline.; generator: GPT-4o and Gemini 2.5-Pro sample responses; recursive rubric decomposition and filtering generates the rubric set.
  _Audit focus:_ Generated rubrics can miss preference dimensions that humans use., Redundant or correlated criteria can distort scalar rewards., Rubric-conditioned RFT gains are not proof that the rubric data is complete or clean.
  _Why it matters:_ It treats rubric construction itself as a reward-data problem, separating rubric decomposition, filtering, weighting, and downstream reward use.
- 🧪 **[Atla Selene Mini: A General Purpose Evaluation Model](https://arxiv.org/abs/2501.17195)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🚀 model report · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.17195) · [DOI](https://doi.org/10.48550/arXiv.2501.17195) · [Code](https://github.com/atla-ai/selene-mini) · [HF](https://huggingface.co/AtlaAI/Selene-1-Mini-Llama-3.1-8B)
  _Data object:_ absolute score, binary/classification judgment, pairwise preference, structured evaluation output, or qualitative critique.; process: instruction, response, candidate responses; 8B Llama-3.1-based small language model-as-a-judge
  _Feedback / verifier:_ Atla Selene Mini judge output over scoring, classification, and pairwise preference tasks
  _Recipe signal:_ teacher: public datasets augmented with synthetically generated chosen/rejected chain-of-thought critiques and filtered examples.; generator: Selene Mini post-training pipeline; prompt templates and cookbooks released in GitHub.
  _Audit focus:_ Small evaluator models can have limited coverage and calibration outside reported tasks., Synthetic critiques may encode generator artifacts., RewardBench or Judge Arena performance is not proof of data quality.
  _Why it matters:_ It provides a small open evaluator model that can serve as a verifier/reward component, but its training mixture and calibration need audit before reuse.
- 🧪 **[R3: Robust Rubric-Agnostic Reward Models](https://arxiv.org/abs/2505.13388)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · judgment required · mixed · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.13388) · [DOI](https://doi.org/10.48550/arXiv.2505.13388) · [Code](https://github.com/rubricreward/r3) · [Data](https://github.com/rubricreward/r3/tree/main/data) · [HF](https://huggingface.co/rubricreward/R3-Qwen3-14B-LoRA-4k) · [Project](https://rubricreward.github.io)
  _Data object:_ instruction, task description, input, response or response pair, evaluation rubric, score, and reasoning or explanation.; process: instruction, task description, input; offline rubric-conditioned reward-model training and evaluation pipeline.
  _Feedback / verifier:_ R3 reward model produces interpretable reasoned score assignments across point-wise, pair-wise, and binary evaluation formats.
  _Recipe signal:_ teacher: GPT-4.1 mini for rubric and negative-answer generation, with reasoning distillation from DeepSeek-R1.; generator: rubric, negative-answer, and explanation-generation pipeline over heterogeneous reward-model examples.
  _Audit focus:_ Explanation traces may rationalize a score after the fact., Rubric-agnostic training can still fail on unseen rubric wording or missing preference dimensions., Heterogeneous source labels can encode incompatible notions of quality.
  _Why it matters:_ It turns heterogeneous rubric-conditioned judgments into a compact reward-model data object whose reusable fields include rubric, score, and explanation rather than only a scalar label.

### <a id="other-related-work"></a>Other related work

- 🧰 **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.09038) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2025/hash/fb122bfc3f0127a94ded048b5b03496f-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/facebookresearch/AbstentionBench) · [Data](https://huggingface.co/datasets/facebook/AbstentionBench)
  _Data object:_ model response, abstention decision, and correctness/abstention judgment.; process: scenario type, source dataset, answerability label, judge/validation metadata.; offline benchmark with model-evaluation harness.
  _Feedback / verifier:_ human-validated judges and benchmark labels for abstention scenarios.
  _Recipe signal:_ teacher: dataset labels and human-validated abstention judgments.; generator: benchmark authors assemble unanswerable and answerable prompts.
  _Audit focus:_ A model can game abstention by refusing too often., Benchmark labels around subjectivity and underspecification can be ambiguous., Prompt tuning may improve benchmark score without improving epistemic reasoning.
  _Why it matters:_ It is a direct audit surface for reasoning models: stronger reasoning can still fail if the model confidently answers unanswerable questions instead of abstaining.
- 🚀 **[DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · rlvr · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B)
  _Data object:_ subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline.
  _Feedback / verifier:_ Lean verification and RL reward over formal proof success.
  _Recipe signal:_ teacher: DeepSeek-V3-style decomposition and formal proof feedback.; generator: recursive pipeline creates subgoals and proof attempts.
  _Audit focus:_ Subgoal decomposition can introduce false intermediate claims., Formal and informal reasoning scores are not directly comparable., Large-model teacher lineage can hide data provenance.
  _Why it matters:_ It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification.
- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧰 benchmark · judgment required · environmental · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts)
  _Data object:_ internal reasoning trace, final answer, and leakage/extraction outcome.; process: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.; personal-agent evaluation setting with hidden or internal reasoning traces.
  _Feedback / verifier:_ extraction probes and agentic evaluations.
  _Recipe signal:_ teacher: not applicable; this is an audit benchmark.; generator: models produce reasoning traces under normal or injected prompts.
  _Audit focus:_ Hiding thoughts from users does not make them safe., Trace logging can create a new privacy dataset., Utility improvements from more reasoning may worsen leakage risk.
  _Why it matters:_ It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.
- 📦 **[OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M)
  _Data object:_ reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus
  _Feedback / verifier:_ filters, benchmark feedback, and recipe ablations
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance.
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
- 📦 **[DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333)**
  <sub>2024 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · environmental · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1)
  _Data object:_ Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness.
  _Feedback / verifier:_ Lean kernel/checker acceptance.
  _Recipe signal:_ teacher: formalization and proof-generation pipeline with Lean feedback.; generator: synthetic data pipeline translates informal math into formal statements and proofs.
  _Audit focus:_ Formal statements can be wrong even if proofs verify., Pass@k hides low single-shot reliability., Lean/mathlib version drift can break reproducibility.
  _Why it matters:_ It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object.
- 🚀 **[DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [Code](https://github.com/deepseek-ai/deepseek-math) · [HF](https://huggingface.co/collections/deepseek-ai/deepseek-math) · [Paper Card Source](../../paper_cards/sources/deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024)
  _Data object:_ natural-language mathematical solution plus final answer, sometimes sampled multiple times.; process: data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.; offline math training and benchmark evaluation pipeline.
  _Feedback / verifier:_ answer correctness and GRPO-style reward over math tasks.
  _Recipe signal:_ teacher: math corpora, supervised examples, and verifiable benchmark answers.; generator: model produces solutions during SFT, RL, and self-consistency sampling.
  _Audit focus:_ Self-consistency can hide weak single-sample accuracy., Web-data mining may import benchmark leakage., Final-answer rewards can miss flawed derivations.
  _Why it matters:_ It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.
- 📦 **[OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](https://arxiv.org/abs/2410.01560)**
  <sub>2024 · ICLR · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2410.01560) · [OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [Code](https://github.com/NVIDIA-NeMo/Skills) · [Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/)
  _Data object:_ problem-solution pair with natural-language mathematical reasoning and final answer.; process: source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.; NVIDIA NeMo-Skills generation, training, and evaluation pipeline.
  _Feedback / verifier:_ answer checks and benchmark evaluation over math tasks.
  _Recipe signal:_ teacher: Llama3.1-405B-Instruct generates large-scale math solutions.; generator: NeMo-Skills pipeline performs problem/solution augmentation and model training.
  _Audit focus:_ Synthetic solutions can encode teacher shortcuts., Large scale can hide duplicated or near-duplicated questions., Verbose traces may hurt rather than help SFT.
  _Why it matters:_ It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models.
- 📦 **[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 📦 data release · 🧰 benchmark · environmental · programmatic · agent training · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Paper Card Source](../../paper_cards/sources/leandojo-theorem-proving-with-retrieval-augmented-language-models-2023)
  _Data object:_ Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.
  _Feedback / verifier:_ Lean checker and environment feedback.
  _Recipe signal:_ teacher: Lean math-library proofs and proof-assistant feedback.; generator: data-extraction toolkit traces repositories and prover generates tactics.
  _Audit focus:_ A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · programmatic · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [Paper Card Source](../../paper_cards/sources/prm800k-2023)
  _Data object:_ step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces
  _Feedback / verifier:_ process reward model trained from step labels
  _Recipe signal:_ reward verifier layer; release audit; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.
- 📈 **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 📈 scaling study · 🧭 survey background · mixed · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw) · [Paper Card Source](../../paper_cards/sources/self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023)
  _Data object:_ multiple rationales and final answers for the same prompt.; process: sampling temperature, number of paths, answer extraction, aggregation rule.; benchmark prompting setup.
  _Feedback / verifier:_ majority or marginalization over sampled answers.
  _Recipe signal:_ teacher: few-shot chain-of-thought exemplars.; generator: model samples many reasoning paths.
  _Audit focus:_ More samples can amplify benchmark-specific shortcuts., Aggregation does not guarantee step faithfulness., Unmatched inference budgets can make methods look better than they are.
  _Why it matters:_ It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.
- 🏗️ **[Toolformer: Language models can teach themselves to use tools](https://arxiv.org/abs/2302.04761)**
  <sub>2023 · NeurIPS · 🏗️ construction recipe · 🌐 agent environment · mixed · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2302.04761) · [OpenReview](https://openreview.net/forum?id=Yacmpz84TH)
  _Data object:_ text sequence with inserted API call and tool result markup.; process: candidate call location, API name, arguments, tool output, likelihood improvement, retained annotation.; external tool APIs used during data construction and evaluation.
  _Feedback / verifier:_ language-model likelihood improvement after including tool result.
  _Recipe signal:_ teacher: small hand-written demonstrations per tool seed the API-call format.; generator: model samples candidate tool calls over raw text.
  _Audit focus:_ Likelihood improvement may not equal truthful tool use., Tools can return stale or wrong outputs., The model can learn call syntax without robust tool-selection judgment.
  _Why it matters:_ It is a classic construction recipe for tool-call supervision: models learn when to call tools, what arguments to pass, and how to fold observations back into text.
- 🧰 **[TruthfulQA](https://arxiv.org/abs/2109.07958)**
  <sub>2022 · ACL · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.07958) · [ACL](https://aclanthology.org/2022.acl-long.229/) · [Code](https://github.com/sylinrl/TruthfulQA)
  _Data object:_ free-form generation or multiple-choice answer with truthfulness and informativeness labels.; process: question category, reference true answers, reference false answers, model answer, truthfulness score, informativeness score.; offline benchmark with human-written items and evaluator scripts.
  _Feedback / verifier:_ human references plus automated/human scoring protocols for truthfulness and informativeness.
  _Recipe signal:_ teacher: human-authored reference answer sets.; generator: benchmark authors construct questions designed to trigger imitative falsehoods.
  _Audit focus:_ A model can be uninformative but truthful., A model can sound confident while reproducing a human misconception., Multiple-choice and generation modes can lead to different conclusions.
  _Why it matters:_ It is a canonical truthfulness audit surface for reasoning models because stronger generation can still amplify persuasive false answers learned from web text.
- 🧰 **[GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k)
  _Data object:_ natural-language solution with final numeric answer; process: question, solution, final answer; offline math benchmark
  _Feedback / verifier:_ answer extraction and arithmetic correctness checks
  _Recipe signal:_ generator: human problem writers; filtering rule: curated math word problem collection
  _Audit focus:_ answer extraction errors, contamination through benchmark reuse
  _Why it matters:_ It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training.
- 🧰 **[miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110)**
  <sub>2021 · ICLR · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.00110) · [OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021)
  _Data object:_ formal proof accepted by a target proof assistant.; process: formal system, theorem statement, split, generated proof/tactics, verifier result.; Lean, Metamath, Isabelle, and HOL Light style theorem proving environments.
  _Feedback / verifier:_ proof assistant kernel/checker acceptance.
  _Recipe signal:_ teacher: formalized benchmark statements and proof assistant checkers.; generator: human translators and theorem prover agents produce proof attempts.
  _Audit focus:_ A theorem can be easier in one formal system than another., Search budget can dominate model differences., Forks can drift from the original benchmark.
  _Why it matters:_ It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof.
- 🧭 **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · unknown · unknown · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07086)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains.
- 📦 **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.02951)
  _Data object:_ question-solution-test triplet; process: problem, solution, unit tests; code execution and unit-test substrate
  _Feedback / verifier:_ test-based self-verification
  _Recipe signal:_ prompt sourcing; trace writing; reward verifier layer
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794)
  _Data object:_ scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ reward verifier layer; evaluation; reward modeling
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124)
  _Data object:_ step-level labels or scores; process: step, label, error type; offline reasoning traces
  _Feedback / verifier:_ process-level reward model benchmark
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
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
- 🧰 **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.18901)
  _Data object:_ API/tool action trajectory; process: tool call, state transition, observation; simulated app ecosystem with users and APIs
  _Feedback / verifier:_ programmatic environment assertions
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.
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
- 🛠️ **[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)**
  <sub>2024 · ICLR · 🛠️ infrastructure · 🌐 agent environment · environmental · mixed · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16741) · [Code](https://github.com/All-Hands-AI/OpenHands) · [Project](https://www.openhands.dev/)
  _Data object:_ tool/action/observation trajectory; process: plan, shell command, file edit; sandboxed software-development runtime
  _Feedback / verifier:_ task, test, or human-review outcome depending on benchmark
  _Recipe signal:_ search substrate; optimizer scaffold; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.
- 🧰 **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · judgment required · programmatic · evaluation · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.06559)
  _Data object:_ step labels or first-error markers; process: reasoning step, error marker, diagnostic label; offline math traces
  _Feedback / verifier:_ process-error detector
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- 🪜 **[PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · rlvr · process supervision · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2502.01456) · [Code](https://github.com/PRIME-RL/PRIME)
  _Data object:_ rollout with implicit process reward signal; process: policy rollout, outcome label, implicit process reward; online RL training loop
  _Feedback / verifier:_ implicit process rewards derived from outcome labels
  _Recipe signal:_ generator: policy rollouts; filtering rule: outcome labels converted into implicit process rewards
  _Audit focus:_ implicit rewards can inherit outcome-verifier shortcuts, online reward updates may introduce reward hacking, benchmark improvements may conflate optimizer and reward-contract changes
  _Why it matters:_ It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds.
- 🪜 **[AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV)
  _Data object:_ step-level confidence-change annotations; process: reasoning step, verifier confidence, relative confidence change; offline reasoning traces
  _Feedback / verifier:_ answer-trained verifier converted into process annotations
  _Recipe signal:_ generator: model-generated candidate reasoning; filtering rule: changes in verifier confidence across steps
  _Audit focus:_ answer-level verifier confidence can mislabel intermediate steps, relative confidence changes may not identify causal first errors, commonsense and math tasks may require different error taxonomies
  _Why it matters:_ It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision.
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
- 🪜 **[ReST-MCTS*](https://arxiv.org/abs/2406.03816)**
  <sub>2024 · arXiv · 🪜 process supervision · 🏗️ construction recipe · programmatic · mixed · process supervision · reward modeling · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2406.03816)
  _Data object:_ reasoning trajectory with intermediate search states; process: node state, rollout candidate, process reward score; MCTS-style reasoning tree
  _Feedback / verifier:_ process reward guided tree search
  _Recipe signal:_ generator: policy rollouts expanded by MCTS; filtering rule: process-reward-guided trajectory selection
  _Audit focus:_ search policy may overfit process reward artifacts, accepted traces can hide rejected rollout distribution, inference budget may be conflated with data quality
  _Why it matters:_ It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects.
- 🧭 **[Beyond Correctness: Harmonizing Process and Outcome Rewards through RL Training (PROF)](https://arxiv.org/abs/2509.03403)**
  <sub>2025 · arXiv preprint arXiv:2509.03403 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.03403)
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
- 📄 **[SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution](https://arxiv.org/abs/2502.18449)**
  <sub>2025 · Advances in Neural Information Processing Systems (NeurIPS) · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.18449)
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

### ⚠️ Needs search or metadata

- 📄 **Process reward models for code reasoning**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
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
- 📄 **ProofNet: Autoformalizing and formally proving undergraduate-level mathematics**
  <sub>2023 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **COLIEE: Competition on legal information extraction/entailment**
  <sub>2022 · unknown · unknown · unknown · L0_seeded</sub>
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
- 🧭 **Scaling laws for reward model overoptimization**
  <sub>2022 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Qasper: A dataset of information-seeking questions and answers over scientific research papers**
  <sub>2021 · NAACL · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

## 6. What to Audit

- What exactly is supervised: demonstration, preference pair, critique, scalar reward, or rationale?
- Are annotator, judge, or reward-model assumptions disclosed?
- Can the preference/reward signal be reused outside the original prompt distribution without reward hacking?

## 7. Open Problems

- Which preference signals remain useful once a cheap programmatic verifier exists?
- How should reward datasets disclose annotator and judge assumptions?
- Can AI feedback be made auditable enough for open reasoning-data releases?
- What evidence shows a reward improves real reasoning rather than stylistic compliance?

## 8. Related Paper-Card Sources

- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](../../paper_cards/sources/deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024)
- [LeanDojo: Theorem proving with retrieval-augmented language models](../../paper_cards/sources/leandojo-theorem-proving-with-retrieval-augmented-language-models-2023)
- [Let's Verify Step by Step](../../paper_cards/sources/prm800k-2023)
- [Self-consistency improves chain of thought reasoning in language models](../../paper_cards/sources/self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023)
- [miniF2F: A cross-system benchmark for formal olympiad-level mathematics](../../paper_cards/sources/minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
