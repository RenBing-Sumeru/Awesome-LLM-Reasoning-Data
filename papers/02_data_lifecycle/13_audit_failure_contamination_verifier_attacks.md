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
| [Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) | 2024 | [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) | instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases. | mixture of preference labels, reward models, and verifiable rewards depending on stage. | It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together. |
| [API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs](https://arxiv.org/abs/2304.08244) | 2023 | [Paper](https://arxiv.org/abs/2304.08244) · [DOI](https://doi.org/10.48550/arXiv.2304.08244) · [Code](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/api-bank) | API-call dialogue trajectory plus final response; process: user request, API/tool name, arguments; runnable API-bank tool environment | API call validity, tool result consistency, and task success checks | It is an early reusable tool-use benchmark where the feedback-bearing object is an API-call trajectory rather than a plain instruction response. |
| [Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511) | 2023 | [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/) | generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens. | critique signals and task-specific factuality/answer-quality evaluation. | It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations. |
| [DeepMath-103K](https://arxiv.org/abs/2504.11456) | 2025 | [Paper](https://arxiv.org/abs/2504.11456) | answer level | programmatic | Math release highlighted for verifier pinning and decontamination. |
| [CodeElo: Benchmarking Competition-level Code Generation of LLMs with Human-comparable Elo Ratings](https://arxiv.org/abs/2501.01257) | 2025 | [Paper](https://arxiv.org/abs/2501.01257) · [DOI](https://doi.org/10.48550/arXiv.2501.01257) | contest problem, generated solution, submission verdict, algorithm tags, and Elo rating.; process: problem statement, difficulty rating, algorithm tag; Codeforces-aligned competitive programming judge and Elo calculation. | official platform-style test verdicts and Elo rating metric. | It adds a modern contest-style verifier surface where hidden tests, special judges, and rating aggregation are first-class metadata. |
| [SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?](https://arxiv.org/abs/2502.12115) | 2025 | [Paper](https://arxiv.org/abs/2502.12115) · [DOI](https://doi.org/10.48550/arXiv.2502.12115) · [Code](https://github.com/openai/SWELancer-Benchmark) | task statement, code context, generated patch or decision, test result, and dollar-value mapping.; process: freelance task, repository/context, agent patch; Dockerized software-engineering benchmark with public Diamond split. | triple-verified end-to-end tests for IC tasks and human-manager labels for management tasks. | It extends Track 03 from repository issues to economically grounded software tasks with both tests and human decision labels. |
| [BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions](https://arxiv.org/abs/2406.15877) | 2024 | [Paper](https://arxiv.org/abs/2406.15877) · [DOI](https://doi.org/10.48550/arXiv.2406.15877) | instruction or docstring, required function calls, generated code, and test results.; process: instruction, library/API requirements, generated code; Python execution harness covering diverse libraries and function calls. | unit tests with high branch coverage for each task. | It expands the code-verification pool from short standalone functions to realistic library and function-call compositions. |
| [FrontierMath: A Benchmark for Evaluating Advanced Mathematical Reasoning in AI](https://arxiv.org/abs/2411.04872) | 2024 | [Paper](https://arxiv.org/abs/2411.04872) · [DOI](https://doi.org/10.48550/arXiv.2411.04872) | advanced math problem with final answer or verifier-checkable target.; process: problem statement, mathematical domain, difficulty tier; held-out advanced mathematics benchmark with automated answer verification where possible. | automated answer checks and expert-vetted benchmark criteria. | It gives the representative pool a high-difficulty math surface where automatic verification and contamination policy are central fields. |

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
- 🧰 **[ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities](https://arxiv.org/abs/2408.04682)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.04682) · [DOI](https://doi.org/10.48550/arXiv.2408.04682) · [Code](https://github.com/apple/ToolSandbox)
  _Data object:_ multi-turn conversation with tool calls, tool state, and milestone checks; process: user turn, agent turn, tool call; stateful tool execution sandbox with user simulator
  _Feedback / verifier:_ dynamic evaluation of intermediate and final milestones
  _Recipe signal:_ teacher: benchmark authors define tool scenarios and milestone checks; generator: evaluated LLM agents produce on-policy conversations
  _Audit focus:_ stateful dependencies can make failures hard to attribute, user simulator behavior can become an implicit reward channel, final success can hide intermediate milestone failures if reporting is incomplete
  _Why it matters:_ It strengthens the agent benchmark track by making implicit tool state and intermediate milestones part of the feedback contract.
- 🧰 **[tau-bench: A benchmark for tool-agent-user interaction in real-world domains](https://arxiv.org/abs/2406.12045)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.12045) · [DOI](https://doi.org/10.48550/arXiv.2406.12045) · [Code](https://github.com/sierra-research/tau-bench)
  _Data object:_ tool-agent-user dialogue trajectory plus final database state; process: user message, agent response, tool call; domain simulator with API tools and user simulator
  _Feedback / verifier:_ final database state compared with annotated goal state
  _Recipe signal:_ teacher: benchmark authors define domain tasks, policies, and goal states; generator: language agents interact with simulated users and API tools
  _Audit focus:_ pass^k can hide low single-run reliability, final-state checks can miss bad conversational behavior, repository README indicates newer tau3-bench supersedes parts of the original task set
  _Why it matters:_ It makes agent evaluation depend on interaction reliability and final environment state, not just tool-call syntax.
- 🧰 **[BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions](https://arxiv.org/abs/2406.15877)**
  <sub>2024 · ICLR 2025 · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2406.15877) · [DOI](https://doi.org/10.48550/arXiv.2406.15877)
  _Data object:_ instruction or docstring, required function calls, generated code, and test results.; process: instruction, library/API requirements, generated code; Python execution harness covering diverse libraries and function calls.
  _Feedback / verifier:_ unit tests with high branch coverage for each task.
  _Recipe signal:_ teacher: benchmark authors curate tasks, tests, and API constraints.; generator: code-generation models evaluated under BigCodeBench and BigCodeBench-Instruct.
  _Audit focus:_ Library version drift can change accepted behavior., High branch coverage still may miss semantic edge cases., API-heavy tasks can conflate retrieval/API knowledge with reasoning.
  _Why it matters:_ It expands the code-verification pool from short standalone functions to realistic library and function-call compositions.
- 🧰 **[FrontierMath: A Benchmark for Evaluating Advanced Mathematical Reasoning in AI](https://arxiv.org/abs/2411.04872)**
  <sub>2024 · arXiv · 🧰 benchmark · 📦 data release · programmatic · mixed · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2411.04872) · [DOI](https://doi.org/10.48550/arXiv.2411.04872)
  _Data object:_ advanced math problem with final answer or verifier-checkable target.; process: problem statement, mathematical domain, difficulty tier; held-out advanced mathematics benchmark with automated answer verification where possible.
  _Feedback / verifier:_ automated answer checks and expert-vetted benchmark criteria.
  _Recipe signal:_ teacher: expert mathematicians and automated verification rules.; generator: benchmark construction by human experts rather than model-generated problems.
  _Audit focus:_ Automated verification may favor final-answer tasks over proof quality., Held-out access policy limits reproducibility., Models can overfit once examples or solution patterns circulate.
  _Why it matters:_ It gives the representative pool a high-difficulty math surface where automatic verification and contamination policy are central fields.
- 🧰 **[MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://arxiv.org/abs/2410.07095)**
  <sub>2024 · ICLR 2025 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.07095) · [DOI](https://doi.org/10.48550/arXiv.2410.07095) · [Code](https://github.com/openai/mle-bench)
  _Data object:_ competition task, dataset, experiment/code artifacts, submission score, and resource budget.; process: competition id, dataset, agent scaffold; Kaggle-style ML engineering competitions with executable experiments and leaderboard scoring.
  _Feedback / verifier:_ competition metric compared with Kaggle leaderboard baselines.
  _Recipe signal:_ teacher: Kaggle tasks, datasets, metrics, and public leaderboard baselines.; generator: ML engineering agents write code, run experiments, and prepare submissions.
  _Audit focus:_ Leaderboards can reward overfitting to public competition practices., Resource scaling can dominate model comparisons., Kaggle data licenses vary by competition.
  _Why it matters:_ It expands Track 03 from code snippets to full ML engineering episodes where score, compute budget, and contamination are explicit.
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

- 🧰 **[API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs](https://arxiv.org/abs/2304.08244)**
  <sub>2023 · EMNLP · 🧰 benchmark · 📦 data release · environmental · programmatic · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2304.08244) · [DOI](https://doi.org/10.48550/arXiv.2304.08244) · [Code](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/api-bank)
  _Data object:_ API-call dialogue trajectory plus final response; process: user request, API/tool name, arguments; runnable API-bank tool environment
  _Feedback / verifier:_ API call validity, tool result consistency, and task success checks
  _Recipe signal:_ teacher: task designers and multi-agent data synthesis pipeline; generator: human annotation plus synthetic tool-use dialogue generation
  _Audit focus:_ API schemas can drift after collection, synthetic tool-use dialogues can reward call format rather than task success, runnable tools may hide environment dependencies
  _Why it matters:_ It is an early reusable tool-use benchmark where the feedback-bearing object is an API-call trajectory rather than a plain instruction response.
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
- 🧰 **[CodeElo: Benchmarking Competition-level Code Generation of LLMs with Human-comparable Elo Ratings](https://arxiv.org/abs/2501.01257)**
  <sub>2025 · arXiv · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2501.01257) · [DOI](https://doi.org/10.48550/arXiv.2501.01257)
  _Data object:_ contest problem, generated solution, submission verdict, algorithm tags, and Elo rating.; process: problem statement, difficulty rating, algorithm tag; Codeforces-aligned competitive programming judge and Elo calculation.
  _Feedback / verifier:_ official platform-style test verdicts and Elo rating metric.
  _Recipe signal:_ teacher: Codeforces problem metadata, tests, and human Elo system.; generator: LLMs generate competitive-programming submissions.
  _Audit focus:_ Platform submission constraints can change results., Elo aggregation may hide algorithm-category weaknesses., Special judges and language environments must be aligned.
  _Why it matters:_ It adds a modern contest-style verifier surface where hidden tests, special judges, and rating aggregation are first-class metadata.
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

- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947)
  _Data object:_ scalar reward
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ reward verifier layer; rlvr; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
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
- 📄 **[Spurious Rewards: Rethinking Training Signals in RLVR](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv preprint arXiv:2506.10947 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.10947)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="verifier-gaming"></a>🧪 Verifier gaming

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
- 🧪 **[CodeT: Code Generation with Generated Tests](https://arxiv.org/abs/2207.10397)**
  <sub>2022 · ICLR 2023 · 🧪 verifier reward · 🏗️ construction recipe · programmatic · evaluation · test time compute · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2207.10397) · [DOI](https://doi.org/10.48550/arXiv.2207.10397)
  _Data object:_ programming prompt, candidate program set, generated test cases, execution matrix, and selected solution.; process: prompt, candidate solution, generated test; code execution harness across programming benchmarks.
  _Feedback / verifier:_ generated tests plus dual execution agreement among code samples.
  _Recipe signal:_ teacher: benchmark prompts and execution outcomes.; generator: same model family generates candidate solutions and test cases.
  _Audit focus:_ Generated tests can share model biases with generated solutions., Agreement among wrong programs can select a wrong answer., Extra generated-test budget can dominate pass@1 comparisons.
  _Why it matters:_ It makes test generation itself part of the reasoning-data object, not just an external evaluation script.
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
- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794)
  _Data object:_ scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ reward verifier layer; evaluation; reward modeling
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.

### <a id="spurious-rewards"></a>🧨 Spurious rewards

- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947)
  _Data object:_ scalar reward
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ reward verifier layer; rlvr; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
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
- 📄 **[Spurious Rewards: Rethinking Training Signals in RLVR](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv preprint arXiv:2506.10947 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.10947)
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
- 🧰 **[HealthBench](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2505.08775)
  _Data object:_ response with rubric/judge evaluation; process: prompt, response, rubric dimension; offline health evaluation benchmark
  _Feedback / verifier:_ rubric-guided expert/LLM judgment
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a high-stakes example of judgment-required reasoning data where rubric design matters more than exact-match scoring.
- 🧰 **[Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)**
  <sub>2024 · OpenAI / SWE-bench report · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://openai.com/index/introducing-swe-bench-verified/) · [Venue](https://www.swebench.com/verified.html) · [Code](https://github.com/swe-bench/SWE-bench) · [Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)
  _Data object:_ patch diff applied to a repository plus test execution results.; process: repository, issue, base commit, patch, FAIL TO PASS tests, PASS TO PASS tests, human validation notes.; Dockerized repository checkout and unit-test harness.
  _Feedback / verifier:_ post-patch unit tests plus human filtering of task validity.
  _Recipe signal:_ teacher: resolved GitHub pull requests and human validators.; generator: dataset curation filters original SWE-bench instances for clarity, solvability, and test validity.
  _Audit focus:_ Leaderboard scores can depend strongly on scaffold design., Tests may not cover all acceptable patches., Public benchmark tasks can become training targets over time.
  _Why it matters:_ It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.
- 🧰 **[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2403.13787)
  _Data object:_ pairwise or scalar reward decisions; process: prompt, chosen/rejected response, reward model score; offline preference benchmark
  _Feedback / verifier:_ reward model or judge
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It helps readers test whether a reward signal generalizes beyond helpfulness style into subtle factual, reasoning, refusal, and safety preferences.
- 🚀 **[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · programmatic · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical)
  _Data object:_ instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases.
  _Feedback / verifier:_ mixture of preference labels, reward models, and verifiable rewards depending on stage.
  _Recipe signal:_ teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.; generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
  _Audit focus:_ Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., RLVR improvements may be domain-specific.
  _Why it matters:_ It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.
- 🧭 **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · unknown · unknown · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07086)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains.
- 🧯 **[Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?](https://arxiv.org/abs/2504.13837)**
  <sub>2025 · NeurIPS 2025 Oral · 🧯 audit failure · 📈 scaling study · programmatic · mixed · audit · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.13837) · [DOI](https://doi.org/10.48550/arXiv.2504.13837) · [Project](https://limit-of-RLVR.github.io)
  _Data object:_ problem, sampled reasoning paths, pass@k curve, and base-vs-RL comparison.; process: problem id, model variant, sample budget k; benchmark evaluation with large-k repeated sampling.
  _Feedback / verifier:_ task correctness checks and pass@k evaluation.
  _Recipe signal:_ teacher: benchmark answer verifiers and pass@k measurements.; generator: base and RL policies sampled many times.
  _Audit focus:_ Pass@k can credit lucky final answers without faithful reasoning., Sampling temperature and budget choices can change conclusions., RL may improve sampling efficiency while narrowing diversity.
  _Why it matters:_ It adds a representative counterpoint to RLVR scaling claims by making the base-model sampling distribution an explicit audit object.
- 📈 **[Reinforcement Learning with Verifiable Rewards Implicitly Incentivizes Correct Reasoning in Base LLMs](https://arxiv.org/abs/2506.14245)**
  <sub>2025 · arXiv · 📈 scaling study · 🧯 audit failure · programmatic · mixed · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.14245) · [DOI](https://doi.org/10.48550/arXiv.2506.14245)
  _Data object:_ problem, chain-of-thought, final answer, pass@k, and CoT-Pass@K judgment.; process: problem, reasoning trace, final answer; reasoning benchmark evaluation with answer and chain correctness checks.
  _Feedback / verifier:_ verifiable final-answer reward plus CoT-Pass@K reasoning-path metric.
  _Recipe signal:_ teacher: task verifiers and reasoning-path correctness criteria.; generator: model rollouts sampled across k.
  _Audit focus:_ Trace correctness judgments are harder than final-answer checks., CoT-Pass@K can depend on annotator or judge criteria., Comparisons can mix training-stage effects with sampling-budget effects.
  _Why it matters:_ It sharpens Track 10 by making the unit of scaling a verified reasoning trace, not only a correct final answer.
- 🧰 **[SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?](https://arxiv.org/abs/2502.12115)**
  <sub>2025 · arXiv · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.12115) · [DOI](https://doi.org/10.48550/arXiv.2502.12115) · [Code](https://github.com/openai/SWELancer-Benchmark)
  _Data object:_ task statement, code context, generated patch or decision, test result, and dollar-value mapping.; process: freelance task, repository/context, agent patch; Dockerized software-engineering benchmark with public Diamond split.
  _Feedback / verifier:_ triple-verified end-to-end tests for IC tasks and human-manager labels for management tasks.
  _Recipe signal:_ teacher: real freelance tasks, engineer-verified tests, and original manager decisions.; generator: software-engineering agents produce patches or managerial choices.
  _Audit focus:_ Tests can underspecify intended behavior., Dollar-value mapping may not equal benchmark difficulty., Management tasks require judgment labels rather than pure programmatic checks.
  _Why it matters:_ It extends Track 03 from repository issues to economically grounded software tasks with both tests and human decision labels.
- 🧰 **[Is Your Code Generated by Large Language Models Really Correct? Rigorous Evaluation of Large Language Models for Code Generation](https://arxiv.org/abs/2305.01210)**
  <sub>2023 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2305.01210) · [Code](https://github.com/evalplus/evalplus) · [Project](https://evalplus.github.io)
  _Data object:_ code-generation task, candidate solution, original tests, and augmented tests.; process: prompt, candidate program, generated tests; Python execution harness for HumanEval+ and MBPP+.
  _Feedback / verifier:_ expanded unit-test suites generated by LLM and mutation strategies.
  _Recipe signal:_ teacher: original HumanEval/MBPP tests plus automatic test generator.; generator: EvalPlus test-generation pipeline.
  _Audit focus:_ Generated tests can still miss semantic edge cases., Public augmented tests may cause future contamination., Stricter tests can alter leaderboard rankings without changing task coverage.
  _Why it matters:_ It directly audits a central Track 03 assumption: passing public unit tests is not the same as functional correctness.
- 🧭 **[A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328)**
  <sub>2025 · arXiv · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L3_summary_ready</sub>
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

### ⚠️ Needs search or metadata

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

- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](../../paper_cards/sources/beyondbench-2026)
- [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](../../paper_cards/sources/featurebench-2026)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
