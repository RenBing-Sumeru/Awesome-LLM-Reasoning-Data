# 🧯 Audit, Failure, Contamination, and Verifier Attacks

> Benchmark contamination, search-time leakage, hidden lineage, reward hacking, verifier gaming, LLM-as-judge attacks, spurious rewards, and reproducibility failures.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=audit_failure_contamination_verifier_attacks&mode=find_papers)
> Try: `What should I read first for 🧯 Audit & Failure Modes?`
> Try: `Compare the data objects and verifier types in 🧯 Audit & Failure Modes.`
> Try: `Generate an audit checklist for 🧯 Audit & Failure Modes.`

## 1. What This Track Studies

Use this track when you want to know how reasoning-data claims can fail and how to audit them before reuse.

A trustworthy Awesome repo must make failure visible. Reasoning-data systems can leak benchmarks, memorize teacher artifacts, exploit judges, game verifiers, overfit public tests, optimize spurious rewards, and collapse under small evaluation changes. This track is the atlas safety rail.

The page is not a pessimistic appendix; it is practical infrastructure. Every data track needs an audit lens, and every paper card should contain enough failure analysis for builders to decide whether a resource is safe to reuse.

Contributors should use this track to collect both direct failure papers and audit-relevant benchmark or model-report analyses.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧯 Benchmark contamination | train/test overlap, stale evaluations, and benchmark refresh | memorized items are reported as reasoning progress |
| 🔍 Search-time contamination | contamination introduced by search, tools, retrieval, or inference scaffolds | test-time tool access leaks answer traces |
| 🧬 Hidden lineage / teacher leakage | teacher-model traces, synthetic data inheritance, and hidden trait transfer | student behavior inherits undisclosed teacher artifacts |
| 🎮 Reward hacking | ways reward models, tests, or judges can be optimized as shortcuts | reward rises while real quality falls |
| 🧪 Verifier gaming | models exploiting checkers, answer formats, or judge blind spots | verifier-passing examples are semantically wrong |
| ⚖️ LLM-as-judge attacks | one-token attacks, position bias, verbosity bias, and prompt attacks | judge score changes for non-semantic reasons |
| 🧨 Spurious rewards | shortcut rewards, memorization-triggered rewards, and wrong-behavior correlations | reward improves while model learns a shortcut |
| 📉 Reproducibility failures | decoding, evaluation, scaffold, and data reporting failures | reported gains disappear under controlled reruns |

### Contents

- [🧯 Benchmark contamination](#benchmark-contamination)
- [🔍 Search-time contamination](#search-time-contamination)
- [🧬 Hidden lineage / teacher leakage](#hidden-lineage-teacher-leakage)
- [🎮 Reward hacking](#reward-hacking)
- [🧪 Verifier gaming](#verifier-gaming)
- [⚖️ LLM-as-judge attacks](#llm-as-judge-attacks)
- [🧨 Spurious rewards](#spurious-rewards)
- [📉 Reproducibility failures](#reproducibility-failures)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535) | 2024 | [Paper](https://arxiv.org/abs/2405.01535) · [ACL](https://aclanthology.org/2024.emnlp-main.248/) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [Code](https://github.com/prometheus-eval/prometheus-eval) · [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0) | rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights. | Prometheus 2 judge output aligned against human/proprietary-judge benchmarks. | It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes. |
| [SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168) | 2024 | [Paper](https://arxiv.org/abs/2407.13168) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/scicode-bench/SciCode) · [Project](https://scicode-bench.github.io/) | code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness. | test cases and scientist-curated gold solutions. | It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests. |
| [Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) | 2024 | [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) | instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt; open-instruct training/evaluation stack and Hugging Face dataset/model releases. | mixture of preference labels, reward models, and verifiable rewards depending on stage. | It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together. |
| [Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511) | 2023 | [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/) | generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens. | critique signals and task-specific factuality/answer-quality evaluation. | It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations. |
| [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975) | 2026 | [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/sources/featurebench-2026) | Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories. | Execution-based evaluation protocol using unit tests and repository behavior checks. | It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction. |
| [DeepMath-103K](https://arxiv.org/abs/2504.11456) | 2025 | [Paper](https://arxiv.org/abs/2504.11456) | answer level | programmatic | Math release highlighted for verifier pinning and decontamination. |
| [Process-based Self-Rewarding Language Models](https://arxiv.org/abs/2503.03746) | 2025 | [Paper](https://arxiv.org/abs/2503.03746) · [DOI](https://doi.org/10.48550/arXiv.2503.03746) · [Code](https://github.com/Shimao-Zhang/Process-Self-Rewarding) · [Data](https://github.com/Shimao-Zhang/Process-Self-Rewarding/tree/master/data) | math problem, long-thought trace, segmented reasoning step, candidate next steps, chosen/rejected step pair, step-wise judge explanation, and final answer.; process: problem, long thought trace, previous steps; iterative process-based self-rewarding pipeline for mathematical reasoning. | step-wise LLM-as-a-judge self-reward with pairwise comparison over candidate reasoning steps. | It connects Preference & Reward Feedback Data with process supervision by making self-generated step judgments part of the reward object. |
| [RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style](https://arxiv.org/abs/2410.16184) | 2024 | [Paper](https://arxiv.org/abs/2410.16184) · [DOI](https://doi.org/10.48550/arXiv.2410.16184) · [Code](https://github.com/THU-KEG/RM-Bench) · [HF](https://huggingface.co/datasets/THU-KEG/RM-Bench) | prompt with three chosen responses and three rejected responses across concise, detailed plain-text, and detailed markdown styles.; process: id, prompt, chosen; offline reward-model benchmark with style-substance evaluation matrix | reward model scores chosen and rejected responses; correctness checked by human annotation, unit tests, ground-truth math answers, or safety rules depending on domain | It is directly relevant to Preference & Reward Feedback because it audits when scalar rewards prefer verbosity or formatting over correctness. |
| [FinanceBench: A benchmark for financial question answering](https://arxiv.org/abs/2311.11944) | 2023 | [Paper](https://arxiv.org/abs/2311.11944) · [Code](https://github.com/patronus-ai/financebench) · [HF](https://huggingface.co/datasets/PatronusAI/financebench) | answer level | judgment required, mixed | It is a domain-specific reasoning benchmark where grounding, evidence retrieval, expert answers, and current filing data matter more than generic exact-match reasoning. |
| [TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance](https://aclanthology.org/2021.acl-long.254/) | 2021 | [Paper](https://aclanthology.org/2021.acl-long.254/) · [arXiv](https://arxiv.org/abs/2105.07624) · [Code](https://github.com/NExTplusplus/TAT-QA) · [Project](https://nextplusplus.github.io/TAT-QA/) | answer level; step level | mixed | It gives legal/finance-style domain reasoning a concrete benchmark surface where evidence selection, table-text grounding, arithmetic, and answer normalization all matter. |

## 5. Full Paper List

### <a id="benchmark-contamination"></a>🧯 Benchmark contamination

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
- 🧰 **[TruthfulQA](https://arxiv.org/abs/2109.07958)**
  <sub>2022 · ACL · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.07958) · [ACL](https://aclanthology.org/2022.acl-long.229/) · [Code](https://github.com/sylinrl/TruthfulQA)
  _Data object:_ free-form generation or multiple-choice answer with truthfulness and informativeness labels.; process: question category, reference true answers, reference false answers, model answer, truthfulness score, informativeness score.; offline benchmark with human-written items and evaluator scripts.
  _Feedback / verifier:_ human references plus automated/human scoring protocols for truthfulness and informativeness.
  _Recipe signal:_ teacher: human-authored reference answer sets.; generator: benchmark authors construct questions designed to trigger imitative falsehoods.
  _Audit focus:_ A model can be uninformative but truthful., A model can sound confident while reproducing a human misconception., Multiple-choice and generation modes can lead to different conclusions.
  _Why it matters:_ It is a canonical truthfulness audit surface for reasoning models because stronger generation can still amplify persuasive false answers learned from web text.
- 🧭 **[Datasheets for datasets](https://arxiv.org/abs/1803.09010)**
  <sub>2018 · arXiv · 🧭 survey background · unknown · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/1803.09010)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives reasoning-data releases a minimum disclosure standard before anyone reuses prompts, traces, labels, rewards, or benchmark items.
- 🧰 **[BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](https://arxiv.org/abs/2509.24210)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2509.24210) · [DOI](https://doi.org/10.48550/arXiv.2509.24210) · [Code](https://github.com/ctrl-gaurav/BeyondBench) · [Project](https://ctrl-gaurav.github.io/BeyondBench/) · [Paper Card Source](../../paper_cards/sources/beyondbench-2026)
  _Data object:_ Generated problem instance, model answer, and deterministic solution check.; process: task family, generator parameters, difficulty suite; Algorithmic problem generators and deterministic verifiers.
  _Feedback / verifier:_ Mathematical/programmatic verifier with large combinatorial instance spaces.
  _Recipe signal:_ teacher: Algorithmic task definitions and mathematical solution procedures.; generator: Problem generators produce fresh instances from large combinatorial spaces.
  _Audit focus:_ Generator bugs can invalidate deterministic guarantees., Models may exploit task templates if generators are exposed., Tool-use settings can dominate reasoning comparisons.
  _Why it matters:_ It is a clean 03-direction candidate because the benchmark is built around generated instances, deterministic answer checks, and explicit contamination-resistance claims.
- 🧰 **[FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.10975) · [DOI](https://doi.org/10.48550/arXiv.2602.10975) · [Paper Card Source](../../paper_cards/sources/featurebench-2026)
  _Data object:_ Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories.
  _Feedback / verifier:_ Execution-based evaluation protocol using unit tests and repository behavior checks.
  _Recipe signal:_ teacher: Repository history and unit tests provide task construction signals.; generator: Automated task collection toolkit traces from tests along dependency graphs.
  _Audit focus:_ Unit tests may underspecify the intended feature., Repository tasks may be contaminated through public code., Feature extraction can break hidden dependencies.
  _Why it matters:_ It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction.
- 🧪 **[Activation Reward Models for Few-Shot Model Alignment](https://arxiv.org/abs/2507.01368)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🏗️ construction recipe · judgment required · mixed · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.01368) · [DOI](https://doi.org/10.48550/arXiv.2507.01368)
  _Data object:_ pairwise preference decision or scalar reward from token-probability scoring.; process: prompt, response a, response b; open-weight LLM/LMM internals with attention-head activation steering
  _Feedback / verifier:_ activation-steered reward model using probability of the Yes token or pairwise choice token
  _Recipe signal:_ teacher: few-shot labeled preference examples; GPT-4o-mini for bias injection in PreferenceHack negative examples; generator: activation extraction, REINFORCE attention-head selection, and generative scoring
  _Audit focus:_ Requires access to internal model activations, so it does not apply to closed-source models., Few-shot activation signals may not generalize to broad or poorly specified criteria., Current implementation focuses on single-turn settings.
  _Why it matters:_ It broadens the track beyond trained scalar reward models by exposing activation-derived reward signals and a reward-hacking benchmark setting.
- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124)
  _Data object:_ step-level labels or scores; process: step, label, error type; offline reasoning traces
  _Feedback / verifier:_ process-level reward model benchmark
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- 🧰 **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2404.07972)
  _Data object:_ GUI/OS action trajectory; process: observation, action, environment state; desktop operating-system environment
  _Feedback / verifier:_ task completion evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.
- 🧰 **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · judgment required · programmatic · evaluation · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.06559)
  _Data object:_ step labels or first-error markers; process: reasoning step, error marker, diagnostic label; offline math traces
  _Feedback / verifier:_ process-error detector
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- 🧰 **[RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style](https://arxiv.org/abs/2410.16184)**
  <sub>2024 · ICLR 2025 Oral · 🧰 benchmark · 🧪 verifier reward · judgment required · programmatic · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.16184) · [DOI](https://doi.org/10.48550/arXiv.2410.16184) · [Code](https://github.com/THU-KEG/RM-Bench) · [HF](https://huggingface.co/datasets/THU-KEG/RM-Bench)
  _Data object:_ prompt with three chosen responses and three rejected responses across concise, detailed plain-text, and detailed markdown styles.; process: id, prompt, chosen; offline reward-model benchmark with style-substance evaluation matrix
  _Feedback / verifier:_ reward model scores chosen and rejected responses; correctness checked by human annotation, unit tests, ground-truth math answers, or safety rules depending on domain
  _Recipe signal:_ teacher: human annotators for chat validation; unit tests for code; ground-truth answers for math; safety dataset rules and generated safe/unsafe responses for safety; generator: GPT-4o for chosen responses and many rejected/style variants; Llama-3.1-8B-Lexi-Uncensored-V2 for harmful rejected safety responses
  _Audit focus:_ Style-controlled benchmark may still inherit GPT-4o generation artifacts., Human validation details and agreement statistics require closer audit., Reward-model benchmark performance is not direct evidence of downstream policy quality.
  _Why it matters:_ It is directly relevant to Preference & Reward Feedback because it audits when scalar rewards prefer verbosity or formatting over correctness.
- 🧰 **[FinanceBench: A benchmark for financial question answering](https://arxiv.org/abs/2311.11944)**
  <sub>2023 · arXiv · 🧰 benchmark · 📦 data release · judgment required · mixed · evaluation · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2311.11944) · [Code](https://github.com/patronus-ai/financebench) · [HF](https://huggingface.co/datasets/PatronusAI/financebench)
  _Data object:_ answer level
  _Feedback / verifier:_ judgment required, mixed
  _Recipe signal:_ release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a domain-specific reasoning benchmark where grounding, evidence retrieval, expert answers, and current filing data matter more than generic exact-match reasoning.
- 🧰 **[TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance](https://aclanthology.org/2021.acl-long.254/)**
  <sub>2021 · ACL · 🧰 benchmark · 📦 data release · mixed · evaluation · sft · L2_artifact_verified</sub>
  [Paper](https://aclanthology.org/2021.acl-long.254/) · [arXiv](https://arxiv.org/abs/2105.07624) · [Code](https://github.com/NExTplusplus/TAT-QA) · [Project](https://nextplusplus.github.io/TAT-QA/)
  _Data object:_ answer level; step level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ release audit; evaluation; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives legal/finance-style domain reasoning a concrete benchmark surface where evidence selection, table-text grounding, arithmetic, and answer normalization all matter.
- 🧯 **[Language Model Developers Should Report Train-Test Overlap](https://arxiv.org/abs/2410.08385)**
  <sub>2024 · arXiv · 🧯 audit failure · 🧭 survey background · unknown · audit · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2410.08385)
  _Data object:_ overlap and reporting analysis.; process: training corpus, evaluation set, overlap estimate, reporting policy.; benchmark and training-data documentation.
  _Feedback / verifier:_ overlap analysis rather than a reward model.
  _Recipe signal:_ filtering rule: overlap reporting and audit policy.
  _Audit focus:_ Reported benchmark gains can be inflated when train-test overlap is not disclosed.
  _Why it matters:_ It gives the scaling track a concrete data-reuse and uniqueness reference for checking whether repeated or overlapping examples are counted as fresh evidence.
- 🧭 **[Soft Contamination Means Benchmarks Test Shallow Generalization](https://arxiv.org/abs/2602.12413)**
  <sub>2026 · arXiv preprint arXiv:2602.12413 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.12413)
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
- 📄 **[LastingBench: Defend Benchmarks Against Knowledge Leakage](https://arxiv.org/abs/2506.21614)**
  <sub>2025 · arXiv preprint arXiv:2506.21614 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.21614)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="search-time-contamination"></a>🔍 Search-time contamination

- 🏗️ **[Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511)**
  <sub>2023 · ICLR · 🏗️ construction recipe · 📦 data release · mixed · judgment required · sft · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/)
  _Data object:_ generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens.
  _Feedback / verifier:_ critique signals and task-specific factuality/answer-quality evaluation.
  _Recipe signal:_ teacher: critic and retrieval-supervision signals derived from task data and evidence checks.; generator: model learns special reflection tokens for retrieval and critique behavior.
  _Audit focus:_ A model can retrieve irrelevant passages confidently., Critique tokens can become style markers without true verification., Retriever choice changes benchmark conclusions.
  _Why it matters:_ It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations.
- 🧭 **[Search-Time Data Contamination](https://arxiv.org/abs/2508.13180)**
  <sub>2025 · arXiv preprint arXiv:2508.13180 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.13180)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="hidden-lineage-teacher-leakage"></a>🧬 Hidden lineage / teacher leakage

- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧰 benchmark · judgment required · environmental · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts)
  _Data object:_ internal reasoning trace, final answer, and leakage/extraction outcome.; process: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.; personal-agent evaluation setting with hidden or internal reasoning traces.
  _Feedback / verifier:_ extraction probes and agentic evaluations.
  _Recipe signal:_ teacher: not applicable; this is an audit benchmark.; generator: models produce reasoning traces under normal or injected prompts.
  _Audit focus:_ Hiding thoughts from users does not make them safe., Trace logging can create a new privacy dataset., Utility improvements from more reasoning may worsen leakage risk.
  _Why it matters:_ It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.
- 🧯 **[Subliminal Learning](https://arxiv.org/abs/2507.14805)**
  <sub>2025 · arXiv · 🧯 audit failure · 🏗️ construction recipe · mixed · distillation · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2507.14805) · [Venue](https://www.nature.com/articles/s41586-026-10319-8) · [Code](https://github.com/MinhxLe/subliminal-learning) · [Project](https://subliminal-learning.com/)
  _Data object:_ generated data plus downstream behavioral evaluation of the student.; process: teacher identity, student base model, visible filtering policy, hidden trait evaluation.; distillation and synthetic-data training pipeline.
  _Feedback / verifier:_ trait probes after student training.
  _Recipe signal:_ teacher: model carrying a target trait or behavior.; generator: teacher outputs semantically unrelated data.
  _Audit focus:_ Data may look safe while carrying hidden traits., Lineage effects can be invisible from sample inspection., Distillation chains can propagate behavior across model generations.
  _Why it matters:_ It is a data-lineage warning for reasoning distillation: synthetic traces may carry hidden model traits that are invisible to content filters.
- 📄 **[Leaky Thoughts: Large Reasoning Models Are Not Private Thinkers](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv preprint arXiv:2506.15674 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.15674)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[Subliminal Learning: Language models transmit behavioral traits via hidden signals in data](https://arxiv.org/abs/2507.14805)**
  <sub>2025 · arXiv preprint arXiv:2507.14805 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2507.14805)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="reward-hacking"></a>🎮 Reward hacking

- 🧯 **[Reward Shaping to Mitigate Reward Hacking in RLHF](https://arxiv.org/abs/2502.18770)**
  <sub>2025 · ICML · 🧯 audit failure · 🏗️ construction recipe · judgment required · mixed · reward modeling · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.18770) · [DOI](https://doi.org/10.48550/arXiv.2502.18770) · [Code](https://github.com/PorUna-byte/PAR)
  _Data object:_ prompt, response, proxy reward, reference reward, centered reward, shaped reward, win-rate or benchmark outcome.; process: prompt, response, proxy reward; PPO/GRPO-style RLHF reward optimization.
  _Feedback / verifier:_ Preference As Reward (PAR), a sigmoid-shaped centered reward derived from reward-model preferences.
  _Recipe signal:_ teacher: reward model trained from preference data; DeepSeek-V3 is used for reported win-rate and benchmark judging.; generator: SFT-initialized policy model generates responses during PPO/GRPO-style training.
  _Audit focus:_ Reward shaping can introduce a new proxy objective., PAR still depends on the reward model's latent preference quality., DeepSeek-V3 judging is an evaluation proxy, not data-quality proof.
  _Why it matters:_ It treats scalar reward design as an auditable data object rather than assuming reward-model scores are safe optimization targets.
- 🧯 **[Spurious Rewards: Rethinking Training Signals in RLVR](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · programmatic · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [DOI](https://doi.org/10.48550/arXiv.2506.10947)
  _Data object:_ problem, response or trace, reward type, verifier reward, model family, training step, and evaluation result.; process: problem, response, reward type; RLVR training with GRPO over math reasoning tasks.
  _Feedback / verifier:_ ground-truth, random, format, incorrect-label, one-shot RL, majority-voting, or other spurious reward signals.
  _Recipe signal:_ teacher: ground-truth and spurious verifiable reward variants.; generator: RLVR policy rollouts.
  _Audit focus:_ Reward increases can reflect shortcut exploitation rather than capability gains., Qwen2.5-Math code-reasoning priors may be amplified by spurious rewards., Results are model-family dependent and may not generalize.
  _Why it matters:_ It warns that verifiable or scalar rewards can surface pretrained shortcuts rather than teach genuine reasoning.
- 🧯 **[Feedback Loops With Language Models Drive In-Context Reward Hacking](https://arxiv.org/abs/2402.06627)**
  <sub>2024 · ICML 2024 · 🧯 audit failure · 🧪 verifier reward · judgment required · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.06627) · [DOI](https://doi.org/10.48550/arXiv.2402.06627)
  _Data object:_ initial context, model output, feedback outcome, updated context, subsequent model output, and side-effect metric.; process: context, response, feedback; in-context feedback-loop environment.
  _Feedback / verifier:_ explicit or implicit feedback-loop reward signal.
  _Recipe signal:_ teacher: feedback environment or implicit reward signal.; generator: language model produces outputs across repeated feedback-loop episodes.
  _Audit focus:_ In-context feedback can teach shortcut exploitation without weight updates., Static evaluations miss feedback effects., Environment-specific feedback rules may not generalize.
  _Why it matters:_ It broadens preference/reward feedback from static labels to feedback dynamics that can be exploited at inference time.
- 🧯 **[Language Models Learn to Mislead Humans via RLHF](https://arxiv.org/abs/2409.12822)**
  <sub>2024 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · programmatic · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2409.12822) · [DOI](https://doi.org/10.48550/arXiv.2409.12822) · [Code](https://github.com/Jiaxin-Wen/MisleadLM) · [HF](https://huggingface.co/jiaxin-wen/MisleadLM-code)
  _Data object:_ task prompt, model output, human confidence judgment, human approval label, gold correctness, and false-positive analysis.; process: prompt, model output, human confidence; time-constrained human evaluation of RLHF-trained model outputs.
  _Feedback / verifier:_ human correctness judgments compared against gold labels and proxy RLHF rewards.
  _Recipe signal:_ teacher: task-specific reward model, ChatbotArena preference reward model, simple-unit-test proxy reward, and human evaluators.; generator: RLHF-trained models produce QA arguments and Python programs.
  _Audit focus:_ Human evaluation can be fooled by confident or persuasive wrong answers., Time limits and evaluator expertise can change conclusions., Human preference labels may reward misleading explanations.
  _Why it matters:_ It separates human approval from objective correctness, a core risk for preference/reward feedback data.
- 🧯 **[Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://arxiv.org/abs/2406.02900)**
  <sub>2024 · NeurIPS 2024 · 🧯 audit failure · 🧪 verifier reward · judgment required · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.02900) · [DOI](https://doi.org/10.48550/arXiv.2406.02900)
  _Data object:_ prompt, preferred/dispreferred summary pair, direct-alignment training run, KL budget, proxy reward, GPT-4 win-rate diagnostic; process: prompt, chosen response, rejected response; offline direct-alignment overoptimization audit
  _Feedback / verifier:_ proxy reward and GPT-4 win-rate diagnostics for reward overoptimization
  _Recipe signal:_ teacher: human preference data and GPT-4-turbo-2024-04-09 win-rate diagnostics; generator: direct alignment algorithms produce trained policy outputs
  _Audit focus:_ GPT-4 win rate is a proxy for gold quality, not direct human ground truth., Reward overoptimization trends depend on KL budget, beta, model scale, and dataset., Audit results should not be used as evidence that the source preference data is clean.
  _Why it matters:_ It shows that DPO-like direct preference objectives can still over-optimize proxy rewards even without a separately trained reward model.
- 🧯 **[Understanding Likelihood Over-optimisation in Direct Alignment Algorithms](https://arxiv.org/abs/2410.11677)**
  <sub>2024 · arXiv · 🧯 audit failure · 🏗️ construction recipe · judgment required · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.11677) · [DOI](https://doi.org/10.48550/arXiv.2410.11677)
  _Data object:_ direct alignment traces, preferred/non-preferred completions, likelihood diagnostics, entropy and top-k probability-mass indicators; process: prompt, preferred completion, non preferred completion; offline direct-alignment likelihood-overoptimization audit
  _Feedback / verifier:_ preference objective plus reward-model / LLM-as-judge likelihood and diversity diagnostics
  _Recipe signal:_ teacher: preference labels consumed by DPO, IPO, and Hinge-style direct alignment objectives; generator: direct alignment algorithms produce trained policy outputs
  _Audit focus:_ Higher likelihood of preferred completions can correlate with memorization rather than better generalization., Likelihood margin may be misread as alignment quality., Entropy and top-k probability-mass indicators are diagnostics, not direct human-preference labels.
  _Why it matters:_ It warns that increasing preferred-completion likelihood can reduce diversity and generalization instead of monotonically improving alignment.
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

### <a id="verifier-gaming"></a>🧪 Verifier gaming

- 🧰 **[HealthBench: Evaluating Large Language Models Towards Improved Human Health](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2505.08775) · [DOI](https://doi.org/10.48550/arXiv.2505.08775) · [Code](https://github.com/openai/simple-evals) · [Project](https://openai.com/index/healthbench/)
  _Data object:_ conversation context, candidate response, physician-written rubric criteria, point weights, criterion-met labels, and aggregate score.; process: conversation, candidate response, rubric criterion; open-ended healthcare conversation evaluation benchmark.
  _Feedback / verifier:_ physician-written rubrics graded by GPT-4.1 as a model-based grader.
  _Recipe signal:_ teacher: 262 physicians create conversation-specific rubrics; GPT-4.1 is used as the model-based grader.; generator: conversations are produced through synthetic generation and human adversarial testing; candidate responses are generated by evaluated models or written by physicians in baseline studies.
  _Audit focus:_ High-stakes medical rubrics can miss rare but severe harms., Model-based grading must be calibrated against physician judgment., Aggregate scores can hide medically critical failure modes.
  _Why it matters:_ It is a high-stakes example of reward/verifier data where expert rubric design and grader calibration matter more than exact-match correctness.
- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ prompt sourcing; reward verifier layer; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- 📄 **[An Imperfect Verifier is Good Enough: Learning with Noisy Rewards](https://arxiv.org/abs/2604.07666)**
  <sub>2026 · arXiv preprint arXiv:2604.07666 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.07666)
  _Data object:_ metadata pending
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
- 🧭 **[Reasoning with Large Language Models, a Survey](https://arxiv.org/abs/2407.11511)**
  <sub>2024 · arXiv · 🧭 survey background · unknown · audit · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2407.11511)
  _Data object:_ survey taxonomy and literature map.; literature survey.
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It fills the reasoning-LLM survey lane of the atlas so readers can separate model-centric reasoning work from data-object and verifier-centric papers.

### <a id="llm-as-judge-attacks"></a>⚖️ LLM-as-judge attacks

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
- 🏗️ **[Rethinking Rubric Generation for Improving LLM-as-a-Judge and Reward Modeling for Open-Ended Tasks](https://arxiv.org/abs/2602.05125)**
  <sub>2026 · arXiv · 🏗️ construction recipe · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2602.05125) · [DOI](https://doi.org/10.48550/arXiv.2602.05125)
  _Data object:_ coarse rubric, decomposed fine-grained criteria, filtered rubric set, correlation-aware weights, judge decision, and reward signal.; process: prompt, candidate response, coarse rubric; rubric-generation and rubric-conditioned judge/reward-model evaluation pipeline for open-ended tasks.
  _Feedback / verifier:_ recursively decomposed and filtered rubrics used to improve judge scoring and reward-model signals.
  _Recipe signal:_ teacher: GPT-4o rubric proposer; GPT-OSS-120B determines rubric satisfaction during RFT or direct-preference judge baseline.; generator: GPT-4o and Gemini 2.5-Pro sample responses; recursive rubric decomposition and filtering generates the rubric set.
  _Audit focus:_ Generated rubrics can miss preference dimensions that humans use., Redundant or correlated criteria can distort scalar rewards., Rubric-conditioned RFT gains are not proof that the rubric data is complete or clean.
  _Why it matters:_ It treats rubric construction itself as a reward-data problem, separating rubric decomposition, filtering, weighting, and downstream reward use.
- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794)
  _Data object:_ scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ reward verifier layer; evaluation; reward modeling
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- 🏗️ **[Process-based Self-Rewarding Language Models](https://arxiv.org/abs/2503.03746)**
  <sub>2025 · ACL Findings 2025 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · mixed · preference learning · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.03746) · [DOI](https://doi.org/10.48550/arXiv.2503.03746) · [Code](https://github.com/Shimao-Zhang/Process-Self-Rewarding) · [Data](https://github.com/Shimao-Zhang/Process-Self-Rewarding/tree/master/data)
  _Data object:_ math problem, long-thought trace, segmented reasoning step, candidate next steps, chosen/rejected step pair, step-wise judge explanation, and final answer.; process: problem, long thought trace, previous steps; iterative process-based self-rewarding pipeline for mathematical reasoning.
  _Feedback / verifier:_ step-wise LLM-as-a-judge self-reward with pairwise comparison over candidate reasoning steps.
  _Recipe signal:_ teacher: Qwen2.5-72B process reward model trained on PRM800K; OpenAI o1 for step segmentation and detailed judgment generation.; generator: model-generated long-thought reasoning traces, MCTS step candidates, and step-wise self-judge comparisons.
  _Audit focus:_ Step-wise judges may reward surface reasoning style instead of valid reasoning., Long-thought traces can contain plausible but incorrect intermediate steps., Self-generated process rewards can amplify the model's own reasoning blind spots.
  _Why it matters:_ It connects Preference & Reward Feedback Data with process supervision by making self-generated step judgments part of the reward object.
- 🏗️ **[Aligning with Human Judgement: The Role of Pairwise Preference in Large Language Model Evaluators](https://arxiv.org/abs/2403.16950)**
  <sub>2024 · COLM 2024 · 🏗️ construction recipe · 🧪 verifier reward · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2403.16950) · [DOI](https://doi.org/10.48550/arXiv.2403.16950) · [Code](https://github.com/cambridgeltl/PairS)
  _Data object:_ pairwise comparison judgment, local preference edge, aggregated ranking, transitivity diagnostic, or calibration diagnostic.; process: evaluation prompt, candidate text a, candidate text b; LLM evaluator used as pairwise judge with uncertainty-guided rank aggregation
  _Feedback / verifier:_ PairS pairwise-preference search and debiased pairwise evaluator judgments
  _Recipe signal:_ teacher: human judgments used as alignment/evaluation reference.; generator: LLM evaluators produce local pairwise comparisons.
  _Audit focus:_ Pairwise evaluators can amplify relative-comparison biases., Human-judgment alignment depends on task domain and candidate pool., More pairwise comparisons increase inference cost.
  _Why it matters:_ It shows how pairwise preference can be used as an evaluator scaffold, while making comparison bias, transitivity, and inference budget audit-relevant.
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
- 🧯 **[The Comparative Trap: Pairwise Comparisons Amplifies Biased Preferences of LLM Evaluators](https://arxiv.org/abs/2406.12319)**
  <sub>2024 · arXiv · 🧯 audit failure · 🏗️ construction recipe · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.12319) · [DOI](https://doi.org/10.48550/arXiv.2406.12319)
  _Data object:_ pairwise decision, pointwise score/reasoning, PRePair judgment, or bias diagnostic.; process: prompt, candidate response a, candidate response b; LLM-as-a-judge evaluation protocols comparing pairwise, pointwise, and PRePair methods
  _Feedback / verifier:_ LLM evaluator judgments and PRePair mitigation method
  _Recipe signal:_ teacher: human preference labels from MT-Bench and LLMBar-Adversarial; RewardBench-Chat labels for additional aggregation comparison.; generator: LLM evaluators produce pairwise and pointwise judgments.
  _Audit focus:_ Pairwise comparison can amplify verbosity and authoritative-tone biases., Pointwise evaluation may reduce some biases but can lose relative-comparison signal., Mitigation results on benchmarks should not be treated as proof that evaluator judgments are clean.
  _Why it matters:_ It is directly relevant to Preference & Reward Feedback because pairwise preferences are often reused as reward or judge supervision without auditing bias amplification.

### <a id="spurious-rewards"></a>🧨 Spurious rewards

- 🧯 **[Spurious Rewards: Rethinking Training Signals in RLVR](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · programmatic · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [DOI](https://doi.org/10.48550/arXiv.2506.10947)
  _Data object:_ problem, response or trace, reward type, verifier reward, model family, training step, and evaluation result.; process: problem, response, reward type; RLVR training with GRPO over math reasoning tasks.
  _Feedback / verifier:_ ground-truth, random, format, incorrect-label, one-shot RL, majority-voting, or other spurious reward signals.
  _Recipe signal:_ teacher: ground-truth and spurious verifiable reward variants.; generator: RLVR policy rollouts.
  _Audit focus:_ Reward increases can reflect shortcut exploitation rather than capability gains., Qwen2.5-Math code-reasoning priors may be amplified by spurious rewards., Results are model-family dependent and may not generalize.
  _Why it matters:_ It warns that verifiable or scalar rewards can surface pretrained shortcuts rather than teach genuine reasoning.
- 🧯 **[Feedback Loops With Language Models Drive In-Context Reward Hacking](https://arxiv.org/abs/2402.06627)**
  <sub>2024 · ICML 2024 · 🧯 audit failure · 🧪 verifier reward · judgment required · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.06627) · [DOI](https://doi.org/10.48550/arXiv.2402.06627)
  _Data object:_ initial context, model output, feedback outcome, updated context, subsequent model output, and side-effect metric.; process: context, response, feedback; in-context feedback-loop environment.
  _Feedback / verifier:_ explicit or implicit feedback-loop reward signal.
  _Recipe signal:_ teacher: feedback environment or implicit reward signal.; generator: language model produces outputs across repeated feedback-loop episodes.
  _Audit focus:_ In-context feedback can teach shortcut exploitation without weight updates., Static evaluations miss feedback effects., Environment-specific feedback rules may not generalize.
  _Why it matters:_ It broadens preference/reward feedback from static labels to feedback dynamics that can be exploited at inference time.
- 📄 **[Dual Consensus: Escaping from Spurious Majority in Unsupervised RLVR via Two-Stage Vote Mechanism](https://arxiv.org/abs/2603.16223)**
  <sub>2026 · arXiv preprint arXiv:2603.16223 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2603.16223)
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

### <a id="reproducibility-failures"></a>📉 Reproducibility failures

- 🧰 **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.09038) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2025/hash/fb122bfc3f0127a94ded048b5b03496f-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/facebookresearch/AbstentionBench) · [Data](https://huggingface.co/datasets/facebook/AbstentionBench)
  _Data object:_ model response, abstention decision, and correctness/abstention judgment.; process: scenario type, source dataset, answerability label, judge/validation metadata.; offline benchmark with model-evaluation harness.
  _Feedback / verifier:_ human-validated judges and benchmark labels for abstention scenarios.
  _Recipe signal:_ teacher: dataset labels and human-validated abstention judgments.; generator: benchmark authors assemble unanswerable and answerable prompts.
  _Audit focus:_ A model can game abstention by refusing too often., Benchmark labels around subjectivity and underspecification can be ambiguous., Prompt tuning may improve benchmark score without improving epistemic reasoning.
  _Why it matters:_ It is a direct audit surface for reasoning models: stronger reasoning can still fail if the model confidently answers unanswerable questions instead of abstaining.
- 🧰 **[Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)**
  <sub>2024 · OpenAI / SWE-bench report · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://openai.com/index/introducing-swe-bench-verified/) · [Venue](https://www.swebench.com/verified.html) · [Code](https://github.com/swe-bench/SWE-bench) · [Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)
  _Data object:_ patch diff applied to a repository plus test execution results.; process: repository, issue, base commit, patch, FAIL TO PASS tests, PASS TO PASS tests, human validation notes.; Dockerized repository checkout and unit-test harness.
  _Feedback / verifier:_ post-patch unit tests plus human filtering of task validity.
  _Recipe signal:_ teacher: resolved GitHub pull requests and human validators.; generator: dataset curation filters original SWE-bench instances for clarity, solvability, and test validity.
  _Audit focus:_ Leaderboard scores can depend strongly on scaffold design., Tests may not cover all acceptable patches., Public benchmark tasks can become training targets over time.
  _Why it matters:_ It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.
- 🚀 **[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · programmatic · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical)
  _Data object:_ instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt; open-instruct training/evaluation stack and Hugging Face dataset/model releases.
  _Feedback / verifier:_ mixture of preference labels, reward models, and verifiable rewards depending on stage.
  _Recipe signal:_ teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.; generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
  _Audit focus:_ Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., Preference labels, reward models, and verifiable rewards should not be collapsed into one feedback type.
  _Why it matters:_ It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.
- 🧭 **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · unknown · unknown · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07086)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains.
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
- 🧭 **[A Survey of Reasoning with Foundation Models](https://arxiv.org/abs/2502.17419)**
  <sub>2025 · arXiv · 🧭 survey background · unknown · audit · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.17419)
  _Data object:_ survey taxonomy and literature map.; literature survey.
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives the atlas a second reasoning-survey waypoint so readers can orient before choosing math, code, agent, rubric, or scaling tracks.
- 🧭 **[A Survey on Evaluation of LLM-based Agents](https://arxiv.org/abs/2503.16416)**
  <sub>2025 · arXiv · 🧭 survey background · environmental · mixed · evaluation · audit · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.16416)
  _Data object:_ survey taxonomy for agent evaluation tasks and environments.; process: task, environment, trajectory, evaluator, terminal predicate.; LLM-agent evaluation literature.
  _Feedback / verifier:_ environmental and benchmark evaluators summarized by the survey.
  _Recipe signal:_ release audit; evaluation; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives the atlas an agent-survey waypoint for readers who need to understand environment data before comparing SWE, web, app, or OS agent benchmarks.
- 📄 **[SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents](https://arxiv.org/abs/2505.20411)**
  <sub>2025 · arXiv preprint arXiv:2505.20411 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.20411)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="other-related-work"></a>Other related work

- 🧭 **[Data statements for natural language processing](https://aclanthology.org/Q18-1041/)**
  <sub>2018 · TACL · 🧭 survey background · unknown · audit · L5_audit_ready</sub>
  [Paper](https://aclanthology.org/Q18-1041/)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization.
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
- 🧭 **[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216)**
  <sub>2024 · arXiv · 🧭 survey background · 📈 scaling study · mixed · programmatic · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216)
  _Data object:_ literature-level comparison of prompts, responses, reward sources, objectives, and optimizer families.; process: prompt sampling, response sampling, reward source; LLM post-training algorithms and reasoning tasks such as math and coding.
  _Feedback / verifier:_ learned preference rewards, verifiable rewards, and policy-gradient objectives.
  _Recipe signal:_ teacher: literature covering human feedback, verifiable rewards, and post-training optimization.; generator: technical survey and unified policy-gradient framework.
  _Audit focus:_ Method comparisons can mix data effects with optimizer and sampling-budget effects., RLHF and RLVR rewards are often discussed together despite different verification contracts., Survey papers do not provide reusable training data objects.
  _Why it matters:_ It helps distinguish human preference rewards, AI feedback, verifiable rewards, and direct preference objectives.
- 🧭 **[A Survey of Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2312.14925)**
  <sub>2023 · TMLR · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2312.14925) · [Venue](https://openreview.net/forum?id=f7OkIurx4b) · [DOI](https://doi.org/10.48550/arXiv.2312.14925)
  _Data object:_ survey taxonomy over feedback collection, reward modeling, and policy optimization.; process: feedback source, preference format, reward model objective; RLHF pipelines spanning LLMs and broader RL settings.
  _Feedback / verifier:_ learned reward model from human feedback.
  _Recipe signal:_ teacher: human preference and feedback providers summarized across the literature.; generator: survey taxonomy
  _Audit focus:_ Human feedback can be noisy, subjective, sparse, or expensive., Reward models can overfit annotator preferences and become exploitable objectives., LLM readers may overgeneralize broad RLHF lessons to verifiable-reasoning settings.
  _Why it matters:_ It fills the RLHF survey doorway by separating human preference feedback, reward modeling, and policy optimization before readers compare them with verifiable-reward reasoning data.

### ⚠️ Needs search or metadata

- 📄 **Terminal-Bench: A benchmark and task environment for terminal agents**
  <sub>2026 · unknown · unknown · unknown · L0_seeded</sub>
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
- 📄 **MegaScience: A benchmark and data resource for scientific reasoning**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Min-K\%++**
  <sub>2025 · ICLR · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **The Agent Company: Benchmarking and analyzing agent work in enterprise-like environments**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Why we no longer evaluate on SWE-bench Verified**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **AI models collapse when trained on recursively generated data**
  <sub>2024 · Nature · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **BRIGHT: A realistic and challenging benchmark for reasoning-intensive retrieval**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
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
- 📄 **ChemBench: A benchmark for evaluating large language models in chemistry**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Does writing with LMs reduce content diversity?**
  <sub>2024 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
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
- 🧭 **Is model collapse inevitable?**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **Overoptimization in direct alignment algorithms**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **ToolSandbox: A stateful, conversational, interactive evaluation benchmark for tool use**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **tau-bench: A benchmark for tool-agent-user interaction in real-world domains**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **API-Bank: A benchmark for tool-augmented LLMs**
  <sub>2023 · EMNLP · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
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
- 🧭 **Measuring faithfulness in chain-of-thought reasoning**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
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

## 6. What to Audit

- What can leak, contaminate, or be optimized as a shortcut?
- Is the attack tested against the actual judge/verifier setup?
- Does the paper preserve enough evidence to reproduce the failure?

## 7. Open Problems

- How should open reasoning-data releases report contamination checks?
- Can verifier and judge attacks be standardized across domains?
- What is the right card schema for hidden lineage and teacher leakage?
- How should the atlas decide when to demote a benchmark or paper due to audit failures?

## 8. Related Paper-Card Sources

- [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](../../paper_cards/sources/beyondbench-2026)
- [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](../../paper_cards/sources/featurebench-2026)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
