# ⚖️ Judgment, Rubric, and Domain-Expert Data

> LLM-as-judge data, human/expert judgment, medical and safety rubrics, factuality, legal and financial reasoning, and rubric reward models.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=judgment_rubric_domain_expert_data&mode=find_papers)
> Try: `What should I read first for ⚖️ Judgment / Rubric / Domain Expert?`
> Try: `Compare the data objects and verifier types in ⚖️ Judgment / Rubric / Domain Expert.`
> Try: `Generate an audit checklist for ⚖️ Judgment / Rubric / Domain Expert.`

## 1. What This Track Studies

Use this track when correctness needs a rubric, expert judgment, grounding evidence, or calibrated evaluator rather than a cheap programmatic checker.

Many important reasoning tasks cannot be checked by exact answers or unit tests. They require domain rubrics, experts, factual grounding, safety judgments, legal or medical caution, or LLM judges. This track collects the data where the feedback contract is judgment-required.

Judgment data can be highly valuable for post-training, but it is also easy to over-trust. A judge prompt can be attacked; a rubric can encode hidden values; an expert label can be expensive and inconsistent; a domain benchmark can leak templates. Paper cards should therefore make the judge, rubric, disagreement policy, and failure modes explicit.

This track gives researchers a place to compare high-stakes and rubric-driven reasoning data without mixing it into programmatic-verifier claims.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| ⚖️ LLM-as-judge data | model judges, preference judgments, judge prompts, and evaluator models | judge is sensitive to style, position, or prompt attacks |
| 🧑‍⚖️ Human/expert judgment | human labels, expert adjudication, disagreement handling, and rubric design | expertise and adjudication policy are not disclosed |
| 🩺 Medical reasoning / health rubrics | health, biomedical, scientific, and evidence-grounded reasoning tasks | rubrics are not calibrated for high-stakes error |
| 🛡️ Safety reasoning data | safety reasoning, refusals, jailbreaks, harmfulness, and guardrail data | safe-looking refusals replace correct domain reasoning |
| 🧾 Factuality / grounding | claims, citations, retrieval grounding, fact checking, and evidence quality | citation style masks unsupported claims |
| ⚖️ Legal reasoning | legal QA, statutes, case reasoning, contracts, and expert legal rubrics | splits leak templates or jurisdiction assumptions |
| 🏦 Financial reasoning | financial QA, tabular/text numerical reasoning, filings, and analyst-style judgments | splits leak templates or memorized company facts |
| 🧪 Rubric reward models | rubrics as trainable rewards and domain-conditioned reward models | rubric scores are optimized without semantic robustness |

### Contents

- [⚖️ LLM-as-judge data](#llm-as-judge-data)
- [🧑‍⚖️ Human/expert judgment](#human-expert-judgment)
- [🩺 Medical reasoning / health rubrics](#medical-reasoning-health-rubrics)
- [🛡️ Safety reasoning data](#safety-reasoning-data)
- [🧾 Factuality / grounding](#factuality-grounding)
- [⚖️ Legal reasoning](#legal-reasoning)
- [🏦 Financial reasoning](#financial-reasoning)
- [🧪 Rubric reward models](#rubric-reward-models)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [Paper Card Source](../../paper_cards/sources/prm800k-2023) | step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces | process reward model trained from step labels | It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation. |
| [miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110) | 2021 | [Paper](https://arxiv.org/abs/2109.00110) · [OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021) | formal proof accepted by a target proof assistant.; process: formal system, theorem statement, split, generated proof/tactics, verifier result.; Lean, Metamath, Isabelle, and HOL Light style theorem proving environments. | proof assistant kernel/checker acceptance. | It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof. |
| [Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://arxiv.org/abs/2501.09004) | 2025 | [Paper](https://arxiv.org/abs/2501.09004) · [Venue](https://aclanthology.org/2025.naacl-long.306/) · [DOI](https://doi.org/10.18653/v1/2025.naacl-long.306) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) | prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: prompt, response, top level hazard category; offline guardrail training/evaluation dataset. | risk taxonomy labels, human annotations, multi-LLM jury judgments, and guard-model evaluation signal. | It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification. |
| [Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535) | 2024 | [Paper](https://arxiv.org/abs/2405.01535) · [ACL](https://aclanthology.org/2024.emnlp-main.248/) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [Code](https://github.com/prometheus-eval/prometheus-eval) · [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0) | rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights. | Prometheus 2 judge output aligned against human/proprietary-judge benchmarks. | It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes. |
| [SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168) | 2024 | [Paper](https://arxiv.org/abs/2407.13168) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/scicode-bench/SciCode) · [Project](https://scicode-bench.github.io/) | code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness. | test cases and scientist-curated gold solutions. | It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests. |
| [Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) | 2024 | [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) | instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt; open-instruct training/evaluation stack and Hugging Face dataset/model releases. | mixture of preference labels, reward models, and verifiable rewards depending on stage. | It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together. |
| [Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511) | 2023 | [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/) | generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens. | critique signals and task-specific factuality/answer-quality evaluation. | It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations. |
| [UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377) | 2023 | [Paper](https://arxiv.org/abs/2310.01377) · [Code](https://github.com/OpenBMB/UltraFeedback) · [Data](https://huggingface.co/datasets/openbmb/UltraFeedback) | instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline. | AI-generated scalar and textual feedback over response quality dimensions. | It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels. |
| [Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374) | 2021 | [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) | executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite. | HumanEval tests and pass@k evaluation. | It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions. |
| [Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168) | 2021 | [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) | answer level; scalar reward | programmatic, judgment required | It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows. |

## 5. Full Paper List

### <a id="llm-as-judge-data"></a>⚖️ LLM-as-judge data

- 🧪 **[Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535)**
  <sub>2024 · EMNLP · 🧪 verifier reward · 🚀 model report · judgment required · reward modeling · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2405.01535) · [ACL](https://aclanthology.org/2024.emnlp-main.248/) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [Code](https://github.com/prometheus-eval/prometheus-eval) · [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0)
  _Data object:_ rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights.
  _Feedback / verifier:_ Prometheus 2 judge output aligned against human/proprietary-judge benchmarks.
  _Recipe signal:_ teacher: human judgments and strong evaluator references across direct and pairwise tasks.; generator: training pipeline merges evaluator capabilities across formats.
  _Audit focus:_ Open judges can inherit rubric bias., Agreement with another judge is not the same as correctness., Pairwise and scalar formats can disagree.
  _Why it matters:_ It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes.
- 🧰 **[Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.05685) · [Venue](https://papers.nips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html) · [OpenReview](https://openreview.net/forum?id=uccHPGDlao) · [Code](https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge)
  _Data object:_ model response, judge score, pairwise preference, or arena battle outcome.; process: question, turn, model identity, response, judge prompt template, score, preference label, bias-control setting.; offline judge harness and crowd-sourced arena platform.
  _Feedback / verifier:_ strong model judge and human preference comparisons.
  _Recipe signal:_ teacher: human preferences and strong model judges.; generator: candidate chat models answer MT-Bench and arena prompts.
  _Audit focus:_ Judge scores can be position-biased., Verbose answers can be over-rewarded., A model judge may share weaknesses with the evaluated model.
  _Why it matters:_ It is the standard cautionary reference for judge data: scalable model judges are useful, but position, verbosity, self-enhancement, and limited-reasoning biases must be audited.
- 📦 **[UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377)**
  <sub>2023 · ICML · 📦 data release · 🧪 verifier reward · judgment required · preference learning · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.01377) · [Code](https://github.com/OpenBMB/UltraFeedback) · [Data](https://huggingface.co/datasets/openbmb/UltraFeedback)
  _Data object:_ instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline.
  _Feedback / verifier:_ AI-generated scalar and textual feedback over response quality dimensions.
  _Recipe signal:_ teacher: AI judge annotations and rubric instructions.; generator: candidate responses are sampled from a diverse model pool.
  _Audit focus:_ AI feedback can encode judge-model bias., A corrected dataset version can change reward-model behavior., Fine-grained scores may not translate cleanly into pairwise preferences.
  _Why it matters:_ It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels.
- 🧰 **[miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110)**
  <sub>2021 · ICLR · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.00110) · [OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [Code](https://github.com/openai/miniF2F) · [Paper Card Source](../../paper_cards/sources/minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021)
  _Data object:_ formal proof accepted by a target proof assistant.; process: formal system, theorem statement, split, generated proof/tactics, verifier result.; Lean, Metamath, Isabelle, and HOL Light style theorem proving environments.
  _Feedback / verifier:_ proof assistant kernel/checker acceptance.
  _Recipe signal:_ teacher: formalized benchmark statements and proof assistant checkers.; generator: human translators and theorem prover agents produce proof attempts.
  _Audit focus:_ A theorem can be easier in one formal system than another., Search budget can dominate model differences., Forks can drift from the original benchmark.
  _Why it matters:_ It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof.
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
- 🧪 **[CompassJudger-2: Towards Generalist Judge Model via Verifiable Rewards](https://arxiv.org/abs/2507.09104)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · programmatic · judgment required · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.09104) · [DOI](https://doi.org/10.48550/arXiv.2507.09104) · [Code](https://github.com/open-compass/CompassJudger) · [HF](https://huggingface.co/opencompass/CompassJudger-2-7B-Instruct)
  _Data object:_ pointwise score, pairwise choice, critique, structured judge output, or judgment reasoning path.; process: prompt, response, response a; open-source generalist judge model and JudgerBenchV2 evaluation setting
  _Feedback / verifier:_ rule-based reward over final prediction correctness plus CompassJudger-2 judge outputs
  _Recipe signal:_ teacher: Qwen2.5-72B-Instruct for data reconstruction, judgment synthesis, and quality filtering; rule-based verified reward for final prediction correctness.; generator: Qwen2.5-72B-Instruct for public reward-data judgments, knowledge-based dataset judgments, and chat-based style-sensitive response-pair judgments.
  _Audit focus:_ Verifiable rewards may bias coverage toward tasks with easy automatic checks., Generalist judge performance on benchmarks is not proof of reliable reward use in training., Exact training mixture, rejection-sampling details, and prompt templates need artifact-level audit.
  _Why it matters:_ It connects Preference & Reward Feedback with verifiable-reward supervision for judge models, while highlighting coverage risk when verifiers favor automatically checkable tasks.
- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794)
  _Data object:_ scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ reward verifier layer; evaluation; reward modeling
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- 🧪 **[CompassJudger-1: All-in-one Judge Model Helps Model Evaluation and Evolution](https://arxiv.org/abs/2410.16256)**
  <sub>2024 · arXiv · 🧪 verifier reward · 🧰 benchmark · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.16256) · [DOI](https://doi.org/10.48550/arXiv.2410.16256) · [Code](https://github.com/open-compass/CompassJudger) · [Data](https://github.com/open-compass/CompassJudger/releases/tag/v1.0.0) · [HF](https://huggingface.co/opencompass/CompassJudger-1-7B-Instruct)
  _Data object:_ pointwise score, pairwise choice, formatted evaluation output, or critique.; process: prompt, response, response a; open-source judge model and JudgerBench evaluation setting
  _Feedback / verifier:_ CompassJudger-1 judge model acting as scorer, pairwise comparer, critique generator, or reward model
  _Recipe signal:_ teacher: public judge/reward labels, self-collected judge outputs, Qwen2.5-72B re-evaluation, and generated critique data.; generator: Qwen2.5-72B for re-evaluating outdated judge data and generating detailed critique processes.
  _Audit focus:_ Judge training data and prompt templates may affect generalization., Subjective evaluation scores can encode hidden rubric preferences., Judge-model benchmark performance is not proof that the judge is reliable as a training reward.
  _Why it matters:_ It is relevant to Preference & Reward Feedback because judge models often become reward/verifier components in evaluation and alignment pipelines.
- 🧰 **[JudgeBench: A Benchmark for Evaluating LLM-based Judges](https://arxiv.org/abs/2410.12784)**
  <sub>2024 · ICLR 2025 · 🧰 benchmark · 🧪 verifier reward · programmatic · judgment required · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.12784) · [DOI](https://doi.org/10.48550/arXiv.2410.12784) · [Code](https://github.com/ScalerLab/JudgeBench) · [Data](https://huggingface.co/datasets/ScalerLab/JudgeBench)
  _Data object:_ JSON object with pair id, original id, source, question, response model, response A, response B, and objective label.; process: pair id, original id, source; offline LLM-as-judge and reward-model benchmark
  _Feedback / verifier:_ objective correctness label over response pairs
  _Recipe signal:_ teacher: objective labels derived from source datasets and conversion pipeline.; generator: GPT-4o-2024-05-13 and Claude-3.5-Sonnet response generation.
  _Audit focus:_ Objective labels depend on the correctness of source datasets and conversion pipeline., Judge performance on response pairs is not proof that the judge is suitable for open-ended preference labeling., Order sensitivity and prompt sensitivity must be audited separately.
  _Why it matters:_ It helps the track distinguish human-preference alignment from judge reliability under objective correctness.
- 🧯 **[The Comparative Trap: Pairwise Comparisons Amplifies Biased Preferences of LLM Evaluators](https://arxiv.org/abs/2406.12319)**
  <sub>2024 · arXiv · 🧯 audit failure · 🏗️ construction recipe · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.12319) · [DOI](https://doi.org/10.48550/arXiv.2406.12319)
  _Data object:_ pairwise decision, pointwise score/reasoning, PRePair judgment, or bias diagnostic.; process: prompt, candidate response a, candidate response b; LLM-as-a-judge evaluation protocols comparing pairwise, pointwise, and PRePair methods
  _Feedback / verifier:_ LLM evaluator judgments and PRePair mitigation method
  _Recipe signal:_ teacher: human preference labels from MT-Bench and LLMBar-Adversarial; RewardBench-Chat labels for additional aggregation comparison.; generator: LLM evaluators produce pairwise and pointwise judgments.
  _Audit focus:_ Pairwise comparison can amplify verbosity and authoritative-tone biases., Pointwise evaluation may reduce some biases but can lose relative-comparison signal., Mitigation results on benchmarks should not be treated as proof that evaluator judgments are clean.
  _Why it matters:_ It is directly relevant to Preference & Reward Feedback because pairwise preferences are often reused as reward or judge supervision without auditing bias amplification.

### <a id="human-expert-judgment"></a>🧑‍⚖️ Human/expert judgment

- 🚀 **[Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2409.12122) · [Code](https://github.com/QwenLM/Qwen2.5-Math) · [HF](https://huggingface.co/Qwen/Qwen2.5-Math-7B) · [Project](https://qwenlm.github.io/blog/qwen2.5-math/)
  _Data object:_ math solution, final answer, optional tool/code execution trace, and reward-model score.; process: model stage, problem source, reasoning mode, tool use, answer, reward score, benchmark result.; Qwen math model family, GitHub evaluation scripts, and Hugging Face model releases.
  _Feedback / verifier:_ math answer checks, reward model signals, and benchmark evaluations.
  _Recipe signal:_ teacher: self-improvement pipeline and math reward/evaluation signals.; generator: math-specialized models generate solutions and tool-integrated traces.
  _Audit focus:_ Tool-integrated results are not comparable to no-tool results., Reward models can favor format over proof validity., Model-family reports can blur data and inference effects.
  _Why it matters:_ It is a useful model-report case where math post-training data, reward models, tool-integrated reasoning, and multilingual math evaluation are tied together.
- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · programmatic · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [Paper Card Source](../../paper_cards/sources/prm800k-2023)
  _Data object:_ step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces
  _Feedback / verifier:_ process reward model trained from step labels
  _Recipe signal:_ reward verifier layer; release audit; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.
- 🏗️ **[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073)**
  <sub>2022 · arXiv preprint · 🏗️ construction recipe · 🧭 survey background · judgment required · mixed · preference learning · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.08073) · [Project](https://github.com/anthropics/ConstitutionalHarmlessnessPaper)
  _Data object:_ original answer, self-critique, revised answer, preference pair, reward-model score.; process: principle used, critique, revision, comparison, preference label.; offline SL and RLHF/RLAIF alignment pipeline.
  _Feedback / verifier:_ AI preference model trained from comparisons guided by constitutional principles.
  _Recipe signal:_ teacher: constitution/principles plus critique-and-revision model behavior.; generator: model produces critiques, revisions, and response pairs.
  _Audit focus:_ AI feedback can encode model bias at scale., Principles may be underspecified or culturally narrow., A model can become safe-looking but evasive if helpfulness is not audited.
  _Why it matters:_ It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data.
- 🧭 **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · judgment required · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.02155)
  _Data object:_ pairwise preference; scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ prompt sourcing; reward verifier layer; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models.
- 🧰 **[TruthfulQA](https://arxiv.org/abs/2109.07958)**
  <sub>2022 · ACL · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.07958) · [ACL](https://aclanthology.org/2022.acl-long.229/) · [Code](https://github.com/sylinrl/TruthfulQA)
  _Data object:_ free-form generation or multiple-choice answer with truthfulness and informativeness labels.; process: question category, reference true answers, reference false answers, model answer, truthfulness score, informativeness score.; offline benchmark with human-written items and evaluator scripts.
  _Feedback / verifier:_ human references plus automated/human scoring protocols for truthfulness and informativeness.
  _Recipe signal:_ teacher: human-authored reference answer sets.; generator: benchmark authors construct questions designed to trigger imitative falsehoods.
  _Audit focus:_ A model can be uninformative but truthful., A model can sound confident while reproducing a human misconception., Multiple-choice and generation modes can lead to different conclusions.
  _Why it matters:_ It is a canonical truthfulness audit surface for reasoning models because stronger generation can still amplify persuasive false answers learned from web text.
- 🧭 **[Data statements for natural language processing](https://aclanthology.org/Q18-1041/)**
  <sub>2018 · TACL · 🧭 survey background · unknown · audit · L5_audit_ready</sub>
  [Paper](https://aclanthology.org/Q18-1041/)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization.
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
- 🧪 **[R3: Robust Rubric-Agnostic Reward Models](https://arxiv.org/abs/2505.13388)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · judgment required · mixed · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.13388) · [DOI](https://doi.org/10.48550/arXiv.2505.13388) · [Code](https://github.com/rubricreward/r3) · [Data](https://github.com/rubricreward/r3/tree/main/data) · [HF](https://huggingface.co/rubricreward/R3-Qwen3-14B-LoRA-4k) · [Project](https://rubricreward.github.io)
  _Data object:_ instruction, task description, input, response or response pair, evaluation rubric, score, and reasoning or explanation.; process: instruction, task description, input; offline rubric-conditioned reward-model training and evaluation pipeline.
  _Feedback / verifier:_ R3 reward model produces interpretable reasoned score assignments across point-wise, pair-wise, and binary evaluation formats.
  _Recipe signal:_ teacher: GPT-4.1 mini for rubric and negative-answer generation, with reasoning distillation from DeepSeek-R1.; generator: rubric, negative-answer, and explanation-generation pipeline over heterogeneous reward-model examples.
  _Audit focus:_ Explanation traces may rationalize a score after the fact., Rubric-agnostic training can still fail on unseen rubric wording or missing preference dimensions., Heterogeneous source labels can encode incompatible notions of quality.
  _Why it matters:_ It turns heterogeneous rubric-conditioned judgments into a compact reward-model data object whose reusable fields include rubric, score, and explanation rather than only a scalar label.
- 🏗️ **[Aligning with Human Judgement: The Role of Pairwise Preference in Large Language Model Evaluators](https://arxiv.org/abs/2403.16950)**
  <sub>2024 · COLM 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2403.16950) · [DOI](https://doi.org/10.48550/arXiv.2403.16950) · [Code](https://github.com/cambridgeltl/PairS)
  _Data object:_ pairwise comparison judgment, local preference edge, aggregated ranking, transitivity diagnostic, or calibration diagnostic.; process: evaluation prompt, candidate text a, candidate text b; LLM evaluator used as pairwise judge with uncertainty-guided rank aggregation
  _Feedback / verifier:_ PairS pairwise-preference search and debiased pairwise evaluator judgments
  _Recipe signal:_ teacher: human judgments used as alignment/evaluation reference.; generator: LLM evaluators produce local pairwise comparisons.
  _Audit focus:_ Pairwise evaluators can amplify relative-comparison biases., Human-judgment alignment depends on task domain and candidate pool., More pairwise comparisons increase inference cost.
  _Why it matters:_ It shows how pairwise preference can be used as an evaluator scaffold, while making comparison bias, transitivity, and inference budget audit-relevant.
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
- 🧰 **[LegalBench](https://arxiv.org/abs/2308.11462)**
  <sub>2023 · NeurIPS · 🧰 benchmark · 📦 data release · judgment required · mixed · evaluation · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2308.11462) · [Code](https://github.com/HazyResearch/legalbench) · [HF](https://huggingface.co/datasets/nguha/legalbench) · [Project](https://hazyresearch.stanford.edu/legalbench/)
  _Data object:_ answer level
  _Feedback / verifier:_ judgment required, mixed
  _Recipe signal:_ release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It anchors the legal side of judgment-required reasoning data, where task definitions, legal-domain splits, expert validity, and answer rubrics are often more important than a simple verifier.
- 📄 **[Autorubric: Unifying Rubric-based LLM Evaluation](https://arxiv.org/abs/2603.00077)**
  <sub>2026 · arXiv preprint arXiv:2603.00077 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2603.00077)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Bootstrapping Post-training Signals for Open-ended Tasks via Rubric-based Self-play on Pre-training Text (POP)](https://arxiv.org/abs/2604.20051)**
  <sub>2026 · arXiv preprint arXiv:2604.20051 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.20051)
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

### <a id="medical-reasoning-health-rubrics"></a>🩺 Medical reasoning / health rubrics

- 🧰 **[HealthBench: Evaluating Large Language Models Towards Improved Human Health](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2505.08775) · [DOI](https://doi.org/10.48550/arXiv.2505.08775) · [Code](https://github.com/openai/simple-evals) · [Project](https://openai.com/index/healthbench/)
  _Data object:_ conversation context, candidate response, physician-written rubric criteria, point weights, criterion-met labels, and aggregate score.; process: conversation, candidate response, rubric criterion; open-ended healthcare conversation evaluation benchmark.
  _Feedback / verifier:_ physician-written rubrics graded by GPT-4.1 as a model-based grader.
  _Recipe signal:_ teacher: 262 physicians create conversation-specific rubrics; GPT-4.1 is used as the model-based grader.; generator: conversations are produced through synthetic generation and human adversarial testing; candidate responses are generated by evaluated models or written by physicians in baseline studies.
  _Audit focus:_ High-stakes medical rubrics can miss rare but severe harms., Model-based grading must be calibrated against physician judgment., Aggregate scores can hide medically critical failure modes.
  _Why it matters:_ It is a high-stakes example of reward/verifier data where expert rubric design and grader calibration matter more than exact-match correctness.
- 🧰 **[GPQA](https://arxiv.org/abs/2311.12022)**
  <sub>2023 · arXiv · 🧰 benchmark · judgment required · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2311.12022) · [OpenReview](https://openreview.net/forum?id=Ti67584b98) · [Code](https://github.com/idavidrein/gpqa)
  _Data object:_ multiple-choice answer with optional rationale and expert label.; process: domain, question, answer options, expert label, validation metadata, canary/string metadata.; offline expert Q&A benchmark.
  _Feedback / verifier:_ expert-authored answer key and validation protocol.
  _Recipe signal:_ teacher: domain experts write and validate questions.; generator: benchmark authors curate difficult science questions.
  _Audit focus:_ Multiple-choice guessing can inflate scores., Non-expert validators may not catch subtle mistakes., Tool access changes what the benchmark measures.
  _Why it matters:_ It is a scalable-oversight benchmark: the data object tests whether models can answer expert questions that are difficult for ordinary validators to check.

### <a id="safety-reasoning-data"></a>🛡️ Safety reasoning data

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
- 🚀 **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.00949)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; sft; distillation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- 📦 **[WildGuard: Open One-Stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs](https://arxiv.org/abs/2406.18495)**
  <sub>2024 · NeurIPS 2024 Datasets & Benchmarks · 📦 data release · 🧪 verifier reward · judgment required · mixed · safety alignment · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.18495) · [DOI](https://doi.org/10.48550/arXiv.2406.18495) · [Code](https://github.com/allenai/wildguard) · [Data](https://huggingface.co/datasets/allenai/wildguardmix) · [HF](https://huggingface.co/allenai/wildguard)
  _Data object:_ prompt or prompt-response item with prompt harmfulness, response harmfulness, response refusal/compliance, adversarial flag, and risk subcategory.; process: prompt, adversarial, response; offline safety moderation and guardrail evaluation dataset.
  _Feedback / verifier:_ WildGuard model and labels for prompt harmfulness, response harmfulness, and refusal detection.
  _Recipe signal:_ teacher: GPT-4 for train-label filtering and auditing; human annotators for WildGuardTest.; generator: synthetic harmful/benign prompts, WildTeaming adversarial transformations, LLM-generated refusal/compliance responses, and GPT-4 complex responses.
  _Audit focus:_ Safety labels depend on policy choices and cultural context., Refusal detection can reward over-refusal if helpfulness is not tracked., Jailbreak distributions may age quickly as attacks change.
  _Why it matters:_ It turns safety moderation into a feedback-bearing data object with explicit harm/refusal labels useful for guardrail training and reward-model auditing.
- 🧭 **[SafeChain: Safety of Language Models with Long Chain-of-Thought Reasoning Capabilities](https://arxiv.org/abs/2502.12025)**
  <sub>2025 · arXiv preprint arXiv:2502.12025 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.12025)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[Safety Through Reasoning: An Empirical Study of Reasoning Guardrail Models](https://arxiv.org/abs/2505.20087)**
  <sub>2025 · arXiv preprint arXiv:2505.20087 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.20087)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="factuality-grounding"></a>🧾 Factuality / grounding

- 🏗️ **[Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511)**
  <sub>2023 · ICLR · 🏗️ construction recipe · 📦 data release · mixed · judgment required · sft · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/)
  _Data object:_ generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens.
  _Feedback / verifier:_ critique signals and task-specific factuality/answer-quality evaluation.
  _Recipe signal:_ teacher: critic and retrieval-supervision signals derived from task data and evidence checks.; generator: model learns special reflection tokens for retrieval and critique behavior.
  _Audit focus:_ A model can retrieve irrelevant passages confidently., Critique tokens can become style markers without true verification., Retriever choice changes benchmark conclusions.
  _Why it matters:_ It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations.
- 🧰 **[RAG-RewardBench: Benchmarking Reward Models in Retrieval Augmented Generation for Preference Alignment](https://arxiv.org/abs/2412.13746)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.13746) · [DOI](https://doi.org/10.48550/arXiv.2412.13746) · [Code](https://github.com/jinzhuoran/RAG-RewardBench/) · [Data](https://huggingface.co/datasets/jinzhuoran/RAG-RewardBench)
  _Data object:_ prompt, question, chosen response, chosen model, rejected response, reject model, subset, and retrieved references.; process: prompt, question, chosen; offline RAG reward-model benchmark
  _Feedback / verifier:_ four commercial LLM judges with filtering for inconsistent scores and human-correlation validation
  _Recipe signal:_ teacher: four state-of-the-art commercial judge models, with preference pairs reported to correlate with human annotations at Pearson 0.84.; generator: six retrievers including BM25, DPR, E5, BGE, GTR, and Google Search, paired with 24 RALMs.
  _Audit focus:_ LLM-as-a-judge labels may be biased on citation, grounding, abstention, or conflict cases., RAG benchmark accuracy is not proof that a reward model improves downstream RAG alignment., Dataset mixes retriever and generator effects, so reward-model failures should be analyzed by subset.
  _Why it matters:_ It extends Preference & Reward Feedback beyond general chat by testing whether reward models handle retrieval grounding, citation, abstention, and conflicting evidence.
- 🧭 **[AbstentionBench: Reasoning LLMs Fail on Unanswerable Questions](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv preprint arXiv:2506.09038 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.09038)
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
- 🧭 **[FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs](https://arxiv.org/abs/2410.13210)**
  <sub>2025 · arXiv preprint arXiv:2410.13210 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2410.13210)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[Long Grounded Thoughts](https://arxiv.org/abs/2511.05705)**
  <sub>2025 · arXiv preprint arXiv:2511.05705 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2511.05705)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[Online Rubrics Elicitation from Pairwise Comparisons](https://arxiv.org/abs/2510.07284)**
  <sub>2025 · arXiv preprint arXiv:2510.07284 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2510.07284)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="legal-reasoning"></a>⚖️ Legal reasoning

- 🧰 **[LegalBench](https://arxiv.org/abs/2308.11462)**
  <sub>2023 · NeurIPS · 🧰 benchmark · 📦 data release · judgment required · mixed · evaluation · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2308.11462) · [Code](https://github.com/HazyResearch/legalbench) · [HF](https://huggingface.co/datasets/nguha/legalbench) · [Project](https://hazyresearch.stanford.edu/legalbench/)
  _Data object:_ answer level
  _Feedback / verifier:_ judgment required, mixed
  _Recipe signal:_ release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It anchors the legal side of judgment-required reasoning data, where task definitions, legal-domain splits, expert validity, and answer rubrics are often more important than a simple verifier.

### <a id="financial-reasoning"></a>🏦 Financial reasoning

- 🧰 **[FinanceBench: A benchmark for financial question answering](https://arxiv.org/abs/2311.11944)**
  <sub>2023 · arXiv · 🧰 benchmark · 📦 data release · judgment required · mixed · evaluation · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2311.11944) · [Code](https://github.com/patronus-ai/financebench) · [HF](https://huggingface.co/datasets/PatronusAI/financebench)
  _Data object:_ answer level
  _Feedback / verifier:_ judgment required, mixed
  _Recipe signal:_ release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a domain-specific reasoning benchmark where grounding, evidence retrieval, expert answers, and current filing data matter more than generic exact-match reasoning.
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

### <a id="rubric-reward-models"></a>🧪 Rubric reward models

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
- 🧰 **[VL-RewardBench: A Challenging Benchmark for Vision-Language Generative Reward Models](https://arxiv.org/abs/2411.17451)**
  <sub>2024 · CVPR 2025 Highlight · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2411.17451) · [DOI](https://doi.org/10.48550/arXiv.2411.17451) · [Code](https://github.com/vl-rewardbench/VL_RewardBench) · [Data](https://huggingface.co/datasets/MMInstruction/VL-RewardBench) · [Project](https://vl-rewardbench.github.io/)
  _Data object:_ image-query example with two responses, human ranking, models, judge, rationale, query source, and ground truth.; process: id, query, image; offline vision-language generative reward-model benchmark
  _Feedback / verifier:_ AI-assisted preference labels with human verification
  _Recipe signal:_ teacher: small LVLM ensemble filtering, commercial-model reasoning/labeling for reasoning tasks, GPT-4o quality assessment, and human verification.; generator: source VLM/VL-GenRM candidates; commercial models used for reasoning-task candidate generation and labeling.
  _Audit focus:_ Multimodal judges may fail because of visual perception errors rather than preference reasoning., AI-assisted labels can inherit model biases before human verification., Benchmark correlation with MMMU-Pro is not proof of data quality or downstream policy improvement.
  _Why it matters:_ It adds multimodal reward feedback to the track and makes visual perception failures explicit as reward-model audit risks.

### <a id="other-related-work"></a>Other related work

- 🧰 **[SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168)**
  <sub>2024 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2407.13168) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/scicode-bench/SciCode) · [Project](https://scicode-bench.github.io/)
  _Data object:_ code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness.
  _Feedback / verifier:_ test cases and scientist-curated gold solutions.
  _Recipe signal:_ teacher: scientists and AI researchers curate problems, decompositions, solutions, and tests.; generator: models produce code for subproblems and main problems.
  _Audit focus:_ Models can pass narrow tests without scientific validity., Domain background can leak solution hints., Execution environments can change numerical results.
  _Why it matters:_ It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests.
- 🚀 **[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · programmatic · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical)
  _Data object:_ instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt; open-instruct training/evaluation stack and Hugging Face dataset/model releases.
  _Feedback / verifier:_ mixture of preference labels, reward models, and verifiable rewards depending on stage.
  _Recipe signal:_ teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.; generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
  _Audit focus:_ Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., Preference labels, reward models, and verifiable rewards should not be collapsed into one feedback type.
  _Why it matters:_ It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.
- 🏗️ **[Orca: Progressive learning from complex explanation traces of GPT-4](https://arxiv.org/abs/2306.02707)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 🚀 model report · judgment required · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.02707) · [Project](https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/)
  _Data object:_ instruction response with detailed explanation, intermediate reasoning, and final answer.; process: prompt source, teacher identity, explanation trace, task type, response, evaluation benchmark.; offline synthetic-data distillation and evaluation pipeline.
  _Feedback / verifier:_ downstream reasoning, exam, and benchmark evaluation rather than a single automatic verifier.
  _Recipe signal:_ teacher: large foundation models that produce explanation traces and stepwise guidance.; generator: teacher-assisted data-generation pipeline over diverse instructions.
  _Audit focus:_ Students can learn teacher style without robust reasoning., Synthetic traces can include teacher errors., Closed teacher data makes lineage hard to audit.
  _Why it matters:_ It is an early and influential reasoning-distillation recipe: the reusable object is teacher-assisted explanation data plus careful evaluation against style-only imitation.
- 🧰 **[Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval)
  _Data object:_ executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite.
  _Feedback / verifier:_ HumanEval tests and pass@k evaluation.
  _Recipe signal:_ teacher: benchmark authors and public code pretraining corpus context.; generator: model samples code completions.
  _Audit focus:_ Small public benchmarks are easy to memorize., Unit tests can miss incorrect or insecure behavior., Repeated sampling can hide low single-sample reliability.
  _Why it matters:_ It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions.
- 🧰 **[Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv · 🧰 benchmark · 🧪 verifier reward · programmatic · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k)
  _Data object:_ answer level; scalar reward
  _Feedback / verifier:_ programmatic, judgment required
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows.
- 🧭 **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · judgment required · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.18290)
  _Data object:_ pairwise preference
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ optimizer scaffold; preference learning
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization.
- 🧰 **[GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](https://arxiv.org/abs/2505.17653)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.17653) · [DOI](https://doi.org/10.48550/arXiv.2505.17653) · [Code](https://github.com/LiAuto-DSR/GeoGramBench) · [Data](https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench) · [Paper Card Source](../../paper_cards/sources/geogrambench-2026)
  _Data object:_ Procedural drawing code, geometry question, model answer, and benchmark score.; process: drawing program, geometry abstraction level, question; Programmatic drawing-code representation of geometric diagrams.
  _Feedback / verifier:_ Benchmark answer checking over curated geometric reasoning problems.
  _Recipe signal:_ teacher: Curated geometric program reasoning tasks and taxonomy.; generator: Benchmark construction pipeline creates program-to-geometry problems.
  _Audit focus:_ Answer checking may hide ambiguity in spatial interpretation., Procedural code can encode visual assumptions not captured by text., Sampling and long-response settings affect reported pass rates.
  _Why it matters:_ It broadens Track 03 beyond text math and code execution into symbolic-to-spatial reasoning where programs define the object being verified.
- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124)
  _Data object:_ step-level labels or scores; process: step, label, error type; offline reasoning traces
  _Feedback / verifier:_ process-level reward model benchmark
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- 🧰 **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · judgment required · programmatic · evaluation · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.06559)
  _Data object:_ step labels or first-error markers; process: reasoning step, error marker, diagnostic label; offline math traces
  _Feedback / verifier:_ process-error detector
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- 🧰 **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.13854)
  _Data object:_ environment interaction trajectory; process: observation, action, state; browser-accessible web environment
  _Feedback / verifier:_ task-specific success evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.

### ⚠️ Needs search or metadata

- 📄 **FinDER: Financial data extraction and reasoning**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Humanity's Last Exam**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **MedReason: Eliciting factual medical reasoning steps in LLMs via knowledge graphs**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **OnlineRubrics**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Rubrics as rewards**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Toward conversational diagnostic AI: The AMIE system**
  <sub>2025 · Nature · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **HarmBench**
  <sub>2024 · ICML · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **LAB-Bench: Measuring capabilities of language models for biology research**
  <sub>2024 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **RAFT: Adapting language model to domain-specific RAG**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧰 **VisualWebArena: Evaluating multimodal agents on realistic visual web tasks**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L0_seeded</sub>
  needs_search
  _Data object:_ visual web tasks with screenshots and browser state
  _Feedback / verifier:_ task success checks
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Extends WebArena-style evaluation toward visual web interaction, useful when reasoning data includes screenshots and UI state.
- 📄 **WorkArena: How capable are web agents at solving common knowledge work tasks?**
  <sub>2024 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **XSTest**
  <sub>2024 · NAACL · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **ALCE: Enabling large language models to generate text with citations**
  <sub>2023 · EMNLP · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **FActScore**
  <sub>2023 · EMNLP · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **JudgeLM: Fine-tuned large language models are scalable judges**
  <sub>2023 · arXiv preprint · unknown · unknown · L0_seeded</sub>
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
- 📄 **MAUD: A merger agreement understanding dataset**
  <sub>2023 · unknown · unknown · unknown · L0_seeded</sub>
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
- 📄 **ConvFinQA: Exploring the chain of numerical reasoning in conversational finance question answering**
  <sub>2022 · EMNLP · unknown · unknown · L0_seeded</sub>
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
- 📄 **CUAD: An expert-annotated NLP dataset for legal contract review**
  <sub>2021 · NeurIPS Datasets and Benchmarks · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **CaseHOLD: A dataset for legal holding statement prediction**
  <sub>2021 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
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
- 📄 **Fact or fiction: Verifying scientific claims**
  <sub>2020 · EMNLP · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Retrieval-augmented generation for knowledge-intensive NLP tasks**
  <sub>2020 · NeurIPS · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **PubMedQA: A dataset for biomedical research question answering**
  <sub>2019 · EMNLP · unknown · unknown · L0_seeded</sub>
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

- Who wrote the rubric and who adjudicates disagreements?
- Is the judge prompt/model/version/domain expertise disclosed?
- Does the benchmark test judge brittleness, style sensitivity, and unsafe shortcuts?

## 7. Open Problems

- How can open projects audit LLM judges without exposing proprietary evaluation prompts?
- What makes a medical or legal reasoning rubric reusable across datasets?
- Can factuality and grounding scores be turned into robust post-training rewards?
- How should paper cards report expert disagreement?

## 8. Related Paper-Card Sources

- [GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](../../paper_cards/sources/geogrambench-2026)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [Let's Verify Step by Step](../../paper_cards/sources/prm800k-2023)
- [miniF2F: A cross-system benchmark for formal olympiad-level mathematics](../../paper_cards/sources/minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
