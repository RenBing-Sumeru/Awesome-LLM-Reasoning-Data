# 🌐 Environment and Agent Trajectory Data

> Tool calls, web/browser tasks, app and OS agents, repository-level SWE episodes, replayable trajectories, and terminal predicates.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=environment_agent_trajectory_data&mode=find_papers)
> Try: `What should I read first for 🌐 Environment & Agent Trajectories?`
> Try: `Compare the data objects and verifier types in 🌐 Environment & Agent Trajectories.`
> Try: `Generate an audit checklist for 🌐 Environment & Agent Trajectories.`

## 1. What This Track Studies

Use this track to understand how interactive environments become post-training data sources and feedback contracts.

Agent data turns reasoning from a static completion into an episode. The model observes state, chooses actions, calls tools, receives environment responses, and eventually succeeds, fails, or times out. The environment is therefore part of the verifier, not just a UI around the task.

This track covers tool-use data, browser and web agents, mobile/app tasks, desktop/OS tasks, SWE repository agents, terminal predicates, replay metadata, and agent benchmarks. It is designed for contributors who want to add papers without losing the crucial episode schema.

High-quality cards should state the state/action/observation format, tool schema, environment version, terminal predicate, failure preservation, and whether the same tasks are used for training and evaluation.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🛠️ Tool-use data | tool calls, function signatures, API banks, and tool-use traces | tool schemas change or hide execution failures |
| 🌍 Web/browser agents | web tasks, browser state, navigation traces, and page observations | web state is not replayable after collection |
| 📱 App/mobile agents | mobile apps, app-world tasks, UI actions, and user simulators | UI state and app versions are not pinned |
| 🖥️ OS/desktop agents | desktop/OS tasks, filesystem state, shell actions, and multi-app workflows | hidden environment state makes episodes non-reproducible |
| 🧑‍💻 SWE/repository agents | GitHub issues, code patches, tests, commits, and repository repair episodes | repository commit, tests, and scaffold are not pinned |
| 🔁 Replayable trajectory data | state-action-observation schemas, terminal predicates, and failure traces | success transcript cannot be replayed or audited |
| 🧰 Agent benchmarks and terminal predicates | agent evaluation suites, task resets, terminal predicates, and success/failure labels | score is reported without a replayable predicate |

### Contents

- [🛠️ Tool-use data](#tool-use-data)
- [🌍 Web/browser agents](#web-browser-agents)
- [📱 App/mobile agents](#app-mobile-agents)
- [🖥️ OS/desktop agents](#os-desktop-agents)
- [🧑‍💻 SWE/repository agents](#swe-repository-agents)
- [🔁 Replayable trajectory data](#replayable-trajectory-data)
- [🧰 Agent benchmarks and terminal predicates](#agent-benchmarks-and-terminal-predicates)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Aegis2.0](https://arxiv.org/abs/2501.09004) | 2025 | [Paper](https://arxiv.org/abs/2501.09004) · [ACL](https://aclanthology.org/2025.naacl-long.306/) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) | prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: hazard category, fine-grained risk label, response-safety decision, split metadata when using the dataset release.; offline guardrail training/evaluation dataset. | risk labels and guard-model evaluation signal. | It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification. |
| [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) | 2025 | [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) | subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline. | Lean verification and RL reward over formal proof success. | It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification. |
| [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | 2025 | [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) | reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus | filters, benchmark feedback, and recipe ablations | It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance. |
| [DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333) | 2024 | [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1) | Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness. | Lean kernel/checker acceptance. | It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object. |
| [API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs](https://arxiv.org/abs/2304.08244) | 2023 | [Paper](https://arxiv.org/abs/2304.08244) · [DOI](https://doi.org/10.48550/arXiv.2304.08244) · [Code](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/api-bank) | API-call dialogue trajectory plus final response; process: user request, API/tool name, arguments; runnable API-bank tool environment | API call validity, tool result consistency, and task success checks | It is an early reusable tool-use benchmark where the feedback-bearing object is an API-call trajectory rather than a plain instruction response. |
| [LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) | Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories. | Lean checker and environment feedback. | It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record. |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) | step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces | process reward model trained from step labels | It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation. |
| [Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511) | 2023 | [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/) | generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens. | critique signals and task-specific factuality/answer-quality evaluation. | It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations. |
| [Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374) | 2021 | [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) | executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite. | HumanEval tests and pass@k evaluation. | It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions. |
| [GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168) | 2021 | [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) | natural-language solution with final numeric answer; process: question, solution, final answer; offline math benchmark | answer extraction and arithmetic correctness checks | It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training. |

## 5. Full Paper List

### <a id="tool-use-data"></a>🛠️ Tool-use data

- 🚀 **[Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2409.12122) · [Code](https://github.com/QwenLM/Qwen2.5-Math) · [HF](https://huggingface.co/Qwen/Qwen2.5-Math-7B) · [Project](https://qwenlm.github.io/blog/qwen2.5-math/)
  _Data object:_ math solution, final answer, optional tool/code execution trace, and reward-model score.; process: model stage, problem source, reasoning mode, tool use, answer, reward score, benchmark result.; Qwen math model family, GitHub evaluation scripts, and Hugging Face model releases.
  _Feedback / verifier:_ math answer checks, reward model signals, and benchmark evaluations.
  _Recipe signal:_ teacher: self-improvement pipeline and math reward/evaluation signals.; generator: math-specialized models generate solutions and tool-integrated traces.
  _Audit focus:_ Tool-integrated results are not comparable to no-tool results., Reward models can favor format over proof validity., Model-family reports can blur data and inference effects.
  _Why it matters:_ It is a useful model-report case where math post-training data, reward models, tool-integrated reasoning, and multilingual math evaluation are tied together.
- 🧰 **[API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs](https://arxiv.org/abs/2304.08244)**
  <sub>2023 · EMNLP · 🧰 benchmark · 📦 data release · environmental · programmatic · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2304.08244) · [DOI](https://doi.org/10.48550/arXiv.2304.08244) · [Code](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/api-bank)
  _Data object:_ API-call dialogue trajectory plus final response; process: user request, API/tool name, arguments; runnable API-bank tool environment
  _Feedback / verifier:_ API call validity, tool result consistency, and task success checks
  _Recipe signal:_ teacher: task designers and multi-agent data synthesis pipeline; generator: human annotation plus synthetic tool-use dialogue generation
  _Audit focus:_ API schemas can drift after collection, synthetic tool-use dialogues can reward call format rather than task success, runnable tools may hide environment dependencies
  _Why it matters:_ It is an early reusable tool-use benchmark where the feedback-bearing object is an API-call trajectory rather than a plain instruction response.
- 🏗️ **[Toolformer: Language models can teach themselves to use tools](https://arxiv.org/abs/2302.04761)**
  <sub>2023 · NeurIPS · 🏗️ construction recipe · 🌐 agent environment · mixed · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2302.04761) · [OpenReview](https://openreview.net/forum?id=Yacmpz84TH)
  _Data object:_ text sequence with inserted API call and tool result markup.; process: candidate call location, API name, arguments, tool output, likelihood improvement, retained annotation.; external tool APIs used during data construction and evaluation.
  _Feedback / verifier:_ language-model likelihood improvement after including tool result.
  _Recipe signal:_ teacher: small hand-written demonstrations per tool seed the API-call format.; generator: model samples candidate tool calls over raw text.
  _Audit focus:_ Likelihood improvement may not equal truthful tool use., Tools can return stale or wrong outputs., The model can learn call syntax without robust tool-selection judgment.
  _Why it matters:_ It is a classic construction recipe for tool-call supervision: models learn when to call tools, what arguments to pass, and how to fold observations back into text.
- 📦 **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.16789)
  _Data object:_ tool-call trajectory plus final response; process: API call, arguments, tool response; real-world API/tool catalog
  _Feedback / verifier:_ tool response validity and task success checks
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.
- 🧰 **[BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions](https://arxiv.org/abs/2406.15877)**
  <sub>2024 · ICLR 2025 · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2406.15877) · [DOI](https://doi.org/10.48550/arXiv.2406.15877)
  _Data object:_ instruction or docstring, required function calls, generated code, and test results.; process: instruction, library/API requirements, generated code; Python execution harness covering diverse libraries and function calls.
  _Feedback / verifier:_ unit tests with high branch coverage for each task.
  _Recipe signal:_ teacher: benchmark authors curate tasks, tests, and API constraints.; generator: code-generation models evaluated under BigCodeBench and BigCodeBench-Instruct.
  _Audit focus:_ Library version drift can change accepted behavior., High branch coverage still may miss semantic edge cases., API-heavy tasks can conflate retrieval/API knowledge with reasoning.
  _Why it matters:_ It expands the code-verification pool from short standalone functions to realistic library and function-call compositions.
- 🧭 **[A Survey on Evaluation of LLM-based Agents](https://arxiv.org/abs/2503.16416)**
  <sub>2025 · arXiv · 🧭 survey background · environmental · mixed · evaluation · audit · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.16416)
  _Data object:_ survey taxonomy for agent evaluation tasks and environments.; process: task, environment, trajectory, evaluator, terminal predicate.; LLM-agent evaluation literature.
  _Feedback / verifier:_ environmental and benchmark evaluators summarized by the survey.
  _Recipe signal:_ release audit; evaluation; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives the atlas an agent-survey waypoint for readers who need to understand environment data before comparing SWE, web, app, or OS agent benchmarks.
- 📄 **[Nemotron-Math: Reasoning Data with Tool-Integrated Reasoning Variants](https://arxiv.org/abs/2512.15489)**
  <sub>2025 · arXiv preprint arXiv:2512.15489 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2512.15489)
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

### <a id="web-browser-agents"></a>🌍 Web/browser agents

- 🚀 **[DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [Code](https://github.com/deepseek-ai/deepseek-math) · [HF](https://huggingface.co/collections/deepseek-ai/deepseek-math)
  _Data object:_ natural-language mathematical solution plus final answer, sometimes sampled multiple times.; process: data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.; offline math training and benchmark evaluation pipeline.
  _Feedback / verifier:_ answer correctness and GRPO-style reward over math tasks.
  _Recipe signal:_ teacher: math corpora, supervised examples, and verifiable benchmark answers.; generator: model produces solutions during SFT, RL, and self-consistency sampling.
  _Audit focus:_ Self-consistency can hide weak single-sample accuracy., Web-data mining may import benchmark leakage., Final-answer rewards can miss flawed derivations.
  _Why it matters:_ It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.
- 🧰 **[GPQA](https://arxiv.org/abs/2311.12022)**
  <sub>2023 · arXiv · 🧰 benchmark · judgment required · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2311.12022) · [OpenReview](https://openreview.net/forum?id=Ti67584b98) · [Code](https://github.com/idavidrein/gpqa)
  _Data object:_ multiple-choice answer with optional rationale and expert label.; process: domain, question, answer options, expert label, validation metadata, canary/string metadata.; offline expert Q&A benchmark.
  _Feedback / verifier:_ expert-authored answer key and validation protocol.
  _Recipe signal:_ teacher: domain experts write and validate questions.; generator: benchmark authors curate difficult science questions.
  _Audit focus:_ Multiple-choice guessing can inflate scores., Non-expert validators may not catch subtle mistakes., Tool access changes what the benchmark measures.
  _Why it matters:_ It is a scalable-oversight benchmark: the data object tests whether models can answer expert questions that are difficult for ordinary validators to check.
- 🧰 **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2307.13854)
  _Data object:_ environment interaction trajectory; process: observation, action, state; browser-accessible web environment
  _Feedback / verifier:_ task-specific success evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.
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
- 🛠️ **[BrowserGym: A gym environment for web agents](https://arxiv.org/abs/2412.05467)**
  <sub>2024 · arXiv · 🛠️ infrastructure · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.05467)
  _Data object:_ browser trajectory; process: DOM/state observation, action, reward/result; gym-style browser environment
  _Feedback / verifier:_ environment task evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation.
- 🧰 **[VisualWebArena: Evaluating multimodal agents on realistic visual web tasks](https://arxiv.org/abs/2401.13649)**
  <sub>2024 · ACL · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2401.13649) · [DOI](https://doi.org/10.48550/arXiv.2401.13649) · [Code](https://github.com/web-arena-x/visualwebarena) · [Project](https://jykoh.com/vwa)
  _Data object:_ browser episode with screenshot observation, action trajectory, and final outcome; process: instruction, screenshot observation, browser state; visual web tasks with screenshots, browser state, and WebArena-style environments
  _Feedback / verifier:_ execution-based tests for visually grounded task completion
  _Recipe signal:_ teacher: benchmark authors extend WebArena-style tasks with visual information needs; generator: evaluated multimodal agents produce browser actions
  _Audit focus:_ screenshot resolution and browser rendering can change task difficulty, visual cues may be unavailable to text-only agents, live-like web state can drift from the benchmark snapshot
  _Why it matters:_ Extends WebArena-style evaluation toward visual web interaction, useful when reasoning data includes screenshots and UI state.
- 📦 **[Mind2Web: Towards a generalist agent for the web](https://arxiv.org/abs/2306.06070)**
  <sub>2023 · NeurIPS · 📦 data release · 🧰 benchmark · environmental · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2306.06070) · [DOI](https://doi.org/10.48550/arXiv.2306.06070) · [Code](https://github.com/OSU-NLP-Group/Mind2Web) · [Data](https://huggingface.co/datasets/osunlp/Mind2Web) · [Project](https://osu-nlp-group.github.io/Mind2Web/)
  _Data object:_ web task plus action sequence, DOM/html snapshots, and candidate elements; process: website, domain, task instruction; real-world website snapshots and web-agent evaluation scripts
  _Feedback / verifier:_ step/action matching against annotated elements and task split metrics
  _Recipe signal:_ teacher: crowd annotators provide web action trajectories; generator: dataset collection over real websites and tasks
  _Audit focus:_ website state can drift away from recorded snapshots, element matching can reward local action selection without full task success, micro and macro averages can lead to different comparisons
  _Why it matters:_ It gives the atlas a web-agent benchmark whose data object is a state-action record over real websites, not just a final answer.
- 🧭 **[MAmmoTH2: Scaling Instructions from the Web](https://arxiv.org/abs/2405.03548)**
  <sub>2024 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2405.03548)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="app-mobile-agents"></a>📱 App/mobile agents

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

### <a id="os-desktop-agents"></a>🖥️ OS/desktop agents

- 🧰 **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2404.07972)
  _Data object:_ GUI/OS action trajectory; process: observation, action, environment state; desktop operating-system environment
  _Feedback / verifier:_ task completion evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.

### <a id="swe-repository-agents"></a>🧑‍💻 SWE/repository agents

- 🧰 **[Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)**
  <sub>2024 · OpenAI / SWE-bench report · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://openai.com/index/introducing-swe-bench-verified/) · [Venue](https://www.swebench.com/verified.html) · [Code](https://github.com/swe-bench/SWE-bench) · [Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)
  _Data object:_ patch diff applied to a repository plus test execution results.; process: repository, issue, base commit, patch, FAIL TO PASS tests, PASS TO PASS tests, human validation notes.; Dockerized repository checkout and unit-test harness.
  _Feedback / verifier:_ post-patch unit tests plus human filtering of task validity.
  _Recipe signal:_ teacher: resolved GitHub pull requests and human validators.; generator: dataset curation filters original SWE-bench instances for clarity, solvability, and test validity.
  _Audit focus:_ Leaderboard scores can depend strongly on scaffold design., Tests may not cover all acceptable patches., Public benchmark tasks can become training targets over time.
  _Why it matters:_ It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.
- 📦 **[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 📦 data release · 🧰 benchmark · environmental · programmatic · agent training · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/)
  _Data object:_ Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.
  _Feedback / verifier:_ Lean checker and environment feedback.
  _Recipe signal:_ teacher: Lean math-library proofs and proof-assistant feedback.; generator: data-extraction toolkit traces repositories and prover generates tactics.
  _Audit focus:_ A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
- 🧰 **[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.06770) · [OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [Code](https://github.com/swe-bench/SWE-bench) · [Project](https://www.swebench.com/original.html)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ release audit; evaluation; agent training
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes.
- 🧰 **[Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval)
  _Data object:_ executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite.
  _Feedback / verifier:_ HumanEval tests and pass@k evaluation.
  _Recipe signal:_ teacher: benchmark authors and public code pretraining corpus context.; generator: model samples code completions.
  _Audit focus:_ Small public benchmarks are easy to memorize., Unit tests can miss incorrect or insecure behavior., Repeated sampling can hide low single-sample reliability.
  _Why it matters:_ It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions.
- 🚀 **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · mixed · programmatic · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.13585) · [Code](https://github.com/MiniMax-AI/MiniMax-M1)
  _Data object:_ reasoning output, code/tool result, or agent task output; process: reasoning output, benchmark result, thinking budget; math, code, SWE, tool-use, and long-context evaluation surfaces
  _Feedback / verifier:_ programmatic, environment, and benchmark feedback
  _Recipe signal:_ frontier pipeline; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
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
- 🛠️ **[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)**
  <sub>2024 · ICLR · 🛠️ infrastructure · 🌐 agent environment · environmental · mixed · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16741) · [Code](https://github.com/All-Hands-AI/OpenHands) · [Project](https://www.openhands.dev/)
  _Data object:_ tool/action/observation trajectory; process: plan, shell command, file edit; sandboxed software-development runtime
  _Feedback / verifier:_ task, test, or human-review outcome depending on benchmark
  _Recipe signal:_ search substrate; optimizer scaffold; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.
- 🧰 **[PaperBench: Evaluating AI's Ability to Replicate AI Research](https://arxiv.org/abs/2504.01848)**
  <sub>2025 · arXiv · 🧰 benchmark · 🌐 agent environment · judgment required · mixed · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.01848) · [DOI](https://doi.org/10.48550/arXiv.2504.01848) · [Code](https://github.com/openai/preparedness)
  _Data object:_ paper replication task, codebase/experiment artifacts, rubric item, judge score, and human baseline.; process: target paper, replication subtask, generated code; AI research replication environment with hierarchical rubrics.
  _Feedback / verifier:_ author co-developed rubrics and an LLM-based judge benchmarked against human grading.
  _Recipe signal:_ teacher: ICML paper authors, rubric writers, and ML PhD human baselines.; generator: agent attempts to build codebases and run experiments from papers.
  _Audit focus:_ LLM judge scores can drift or encode rubric shortcuts., Replicating a paper mixes reading, coding, experimentation, and environment setup., Target papers may have public code that changes task difficulty.
  _Why it matters:_ It marks the point where Track 03 verification becomes a hybrid of executable artifacts, experiments, rubrics, and judge calibration.
- 🧰 **[SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?](https://arxiv.org/abs/2502.12115)**
  <sub>2025 · arXiv · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.12115) · [DOI](https://doi.org/10.48550/arXiv.2502.12115) · [Code](https://github.com/openai/SWELancer-Benchmark)
  _Data object:_ task statement, code context, generated patch or decision, test result, and dollar-value mapping.; process: freelance task, repository/context, agent patch; Dockerized software-engineering benchmark with public Diamond split.
  _Feedback / verifier:_ triple-verified end-to-end tests for IC tasks and human-manager labels for management tasks.
  _Recipe signal:_ teacher: real freelance tasks, engineer-verified tests, and original manager decisions.; generator: software-engineering agents produce patches or managerial choices.
  _Audit focus:_ Tests can underspecify intended behavior., Dollar-value mapping may not equal benchmark difficulty., Management tasks require judgment labels rather than pure programmatic checks.
  _Why it matters:_ It extends Track 03 from repository issues to economically grounded software tasks with both tests and human decision labels.
- 📄 **[Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?](https://arxiv.org/abs/2511.13646)**
  <sub>2026 · arXiv preprint arXiv:2511.13646 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2511.13646)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[SWE-Master: Unleashing the Potential of Software Engineering Agents via Post-Training](https://arxiv.org/abs/2602.03411)**
  <sub>2026 · arXiv preprint arXiv:2602.03411 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.03411)
  _Data object:_ survey background
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
- 📄 **[SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents](https://arxiv.org/abs/2505.20411)**
  <sub>2025 · arXiv preprint arXiv:2505.20411 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.20411)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="replayable-trajectory-data"></a>🔁 Replayable trajectory data

- 🌐 **[ReAct: Synergizing reasoning and acting in language models](https://arxiv.org/abs/2210.03629)**
  <sub>2023 · ICLR · 🌐 agent environment · 🏗️ construction recipe · environmental · mixed · agent training · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2210.03629) · [OpenReview](https://openreview.net/forum?id=WE_vluYUL-X) · [Code](https://github.com/ysymyth/ReAct) · [Project](https://react-lm.github.io/)
  _Data object:_ trajectory containing reasoning note, action, observation, and final answer or task completion.; process: task state, action string, observation, reasoning note, final answer, success indicator.; Wikipedia API, embodied/web shopping environments, and task-specific simulators.
  _Feedback / verifier:_ environment success, answer correctness, or task-specific evaluation.
  _Recipe signal:_ teacher: few-shot trajectory exemplars demonstrate reasoning-action format.; generator: model samples interleaved reasoning and action steps.
  _Audit focus:_ Reasoning notes can rationalize bad actions., Environment wrappers can change task difficulty., Few-shot exemplars may encode brittle action formats.
  _Why it matters:_ It is a foundational agent-data pattern: the training/evaluation record is not just an answer but a trajectory of thought-like notes, actions, observations, and final response.
- 🧰 **[HOList: An Environment for Machine Learning of Higher-Order Theorem Proving](https://arxiv.org/abs/1904.03241)**
  <sub>2019 · ICML 2019 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · agent training · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/1904.03241) · [DOI](https://doi.org/10.48550/arXiv.1904.03241)
  _Data object:_ proof goal, tactic/action, proof state transition, and theorem-proving result.; process: goal statement, available premises, tactic action; HOL Light theorem prover exposed as an RL-style environment.
  _Feedback / verifier:_ HOL Light kernel and theorem-prover state transitions.
  _Recipe signal:_ teacher: HOL Light proof corpus and theorem-prover feedback.; generator: learning-guided proof search over higher-order logic goals.
  _Audit focus:_ HOL Light-specific tactics may not transfer to Lean or Coq., Proof-search budget strongly affects success rates., Library theorem overlap can inflate evaluation if not versioned.
  _Why it matters:_ It is an early bridge from static proof benchmarks to proof-state/action trajectories with a hard formal verifier.

### <a id="agent-benchmarks-and-terminal-predicates"></a>🧰 Agent benchmarks and terminal predicates

- 🧰 **[Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)**
  <sub>2024 · OpenAI / SWE-bench report · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://openai.com/index/introducing-swe-bench-verified/) · [Venue](https://www.swebench.com/verified.html) · [Code](https://github.com/swe-bench/SWE-bench) · [Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)
  _Data object:_ patch diff applied to a repository plus test execution results.; process: repository, issue, base commit, patch, FAIL TO PASS tests, PASS TO PASS tests, human validation notes.; Dockerized repository checkout and unit-test harness.
  _Feedback / verifier:_ post-patch unit tests plus human filtering of task validity.
  _Recipe signal:_ teacher: resolved GitHub pull requests and human validators.; generator: dataset curation filters original SWE-bench instances for clarity, solvability, and test validity.
  _Audit focus:_ Leaderboard scores can depend strongly on scaffold design., Tests may not cover all acceptable patches., Public benchmark tasks can become training targets over time.
  _Why it matters:_ It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.
- 🧰 **[API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs](https://arxiv.org/abs/2304.08244)**
  <sub>2023 · EMNLP · 🧰 benchmark · 📦 data release · environmental · programmatic · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2304.08244) · [DOI](https://doi.org/10.48550/arXiv.2304.08244) · [Code](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/api-bank)
  _Data object:_ API-call dialogue trajectory plus final response; process: user request, API/tool name, arguments; runnable API-bank tool environment
  _Feedback / verifier:_ API call validity, tool result consistency, and task success checks
  _Recipe signal:_ teacher: task designers and multi-agent data synthesis pipeline; generator: human annotation plus synthetic tool-use dialogue generation
  _Audit focus:_ API schemas can drift after collection, synthetic tool-use dialogues can reward call format rather than task success, runnable tools may hide environment dependencies
  _Why it matters:_ It is an early reusable tool-use benchmark where the feedback-bearing object is an API-call trajectory rather than a plain instruction response.
- 📦 **[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 📦 data release · 🧰 benchmark · environmental · programmatic · agent training · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/)
  _Data object:_ Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.
  _Feedback / verifier:_ Lean checker and environment feedback.
  _Recipe signal:_ teacher: Lean math-library proofs and proof-assistant feedback.; generator: data-extraction toolkit traces repositories and prover generates tactics.
  _Audit focus:_ A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
- 🧰 **[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.06770) · [OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [Code](https://github.com/swe-bench/SWE-bench) · [Project](https://www.swebench.com/original.html)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ release audit; evaluation; agent training
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes.
- 🧰 **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2307.13854)
  _Data object:_ environment interaction trajectory; process: observation, action, state; browser-accessible web environment
  _Feedback / verifier:_ task-specific success evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.
- 🧰 **[GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k)
  _Data object:_ natural-language solution with final numeric answer; process: question, solution, final answer; offline math benchmark
  _Feedback / verifier:_ answer extraction and arithmetic correctness checks
  _Recipe signal:_ generator: human problem writers; filtering rule: curated math word problem collection
  _Audit focus:_ answer extraction errors, contamination through benchmark reuse
  _Why it matters:_ It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training.
- 🧰 **[Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Code](https://github.com/hendrycks/math)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ release audit; evaluation; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems.
- 🧰 **[Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv · 🧰 benchmark · 🧪 verifier reward · programmatic · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k)
  _Data object:_ answer level; scalar reward
  _Feedback / verifier:_ programmatic, judgment required
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows.
- 🧰 **[miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110)**
  <sub>2021 · ICLR · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.00110) · [OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [Code](https://github.com/openai/miniF2F)
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
- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124)
  _Data object:_ step-level labels or scores; process: step, label, error type; offline reasoning traces
  _Feedback / verifier:_ process-level reward model benchmark
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- 🌐 **[R2E-Gym](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv · 🌐 agent environment · 🧰 benchmark · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.07164)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ search substrate; agent training; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verifiable SWE environment for reasoning-to-edit tasks.
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
- 🧰 **[ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities](https://arxiv.org/abs/2408.04682)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.04682) · [DOI](https://doi.org/10.48550/arXiv.2408.04682) · [Code](https://github.com/apple/ToolSandbox)
  _Data object:_ multi-turn conversation with tool calls, tool state, and milestone checks; process: user turn, agent turn, tool call; stateful tool execution sandbox with user simulator
  _Feedback / verifier:_ dynamic evaluation of intermediate and final milestones
  _Recipe signal:_ teacher: benchmark authors define tool scenarios and milestone checks; generator: evaluated LLM agents produce on-policy conversations
  _Audit focus:_ stateful dependencies can make failures hard to attribute, user simulator behavior can become an implicit reward channel, final success can hide intermediate milestone failures if reporting is incomplete
  _Why it matters:_ It strengthens the agent benchmark track by making implicit tool state and intermediate milestones part of the feedback contract.
- 🧰 **[VisualWebArena: Evaluating multimodal agents on realistic visual web tasks](https://arxiv.org/abs/2401.13649)**
  <sub>2024 · ACL · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2401.13649) · [DOI](https://doi.org/10.48550/arXiv.2401.13649) · [Code](https://github.com/web-arena-x/visualwebarena) · [Project](https://jykoh.com/vwa)
  _Data object:_ browser episode with screenshot observation, action trajectory, and final outcome; process: instruction, screenshot observation, browser state; visual web tasks with screenshots, browser state, and WebArena-style environments
  _Feedback / verifier:_ execution-based tests for visually grounded task completion
  _Recipe signal:_ teacher: benchmark authors extend WebArena-style tasks with visual information needs; generator: evaluated multimodal agents produce browser actions
  _Audit focus:_ screenshot resolution and browser rendering can change task difficulty, visual cues may be unavailable to text-only agents, live-like web state can drift from the benchmark snapshot
  _Why it matters:_ Extends WebArena-style evaluation toward visual web interaction, useful when reasoning data includes screenshots and UI state.
- 🧰 **[tau-bench: A benchmark for tool-agent-user interaction in real-world domains](https://arxiv.org/abs/2406.12045)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.12045) · [DOI](https://doi.org/10.48550/arXiv.2406.12045) · [Code](https://github.com/sierra-research/tau-bench)
  _Data object:_ tool-agent-user dialogue trajectory plus final database state; process: user message, agent response, tool call; domain simulator with API tools and user simulator
  _Feedback / verifier:_ final database state compared with annotated goal state
  _Recipe signal:_ teacher: benchmark authors define domain tasks, policies, and goal states; generator: language agents interact with simulated users and API tools
  _Audit focus:_ pass^k can hide low single-run reliability, final-state checks can miss bad conversational behavior, repository README indicates newer tau3-bench supersedes parts of the original task set
  _Why it matters:_ It makes agent evaluation depend on interaction reliability and final environment state, not just tool-call syntax.
- 📦 **[Mind2Web: Towards a generalist agent for the web](https://arxiv.org/abs/2306.06070)**
  <sub>2023 · NeurIPS · 📦 data release · 🧰 benchmark · environmental · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2306.06070) · [DOI](https://doi.org/10.48550/arXiv.2306.06070) · [Code](https://github.com/OSU-NLP-Group/Mind2Web) · [Data](https://huggingface.co/datasets/osunlp/Mind2Web) · [Project](https://osu-nlp-group.github.io/Mind2Web/)
  _Data object:_ web task plus action sequence, DOM/html snapshots, and candidate elements; process: website, domain, task instruction; real-world website snapshots and web-agent evaluation scripts
  _Feedback / verifier:_ step/action matching against annotated elements and task split metrics
  _Recipe signal:_ teacher: crowd annotators provide web action trajectories; generator: dataset collection over real websites and tasks
  _Audit focus:_ website state can drift away from recorded snapshots, element matching can reward local action selection without full task success, micro and macro averages can lead to different comparisons
  _Why it matters:_ It gives the atlas a web-agent benchmark whose data object is a state-action record over real websites, not just a final answer.
- 📦 **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.16789)
  _Data object:_ tool-call trajectory plus final response; process: API call, arguments, tool response; real-world API/tool catalog
  _Feedback / verifier:_ tool response validity and task success checks
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.
- 🧰 **[PaperBench: Evaluating AI's Ability to Replicate AI Research](https://arxiv.org/abs/2504.01848)**
  <sub>2025 · arXiv · 🧰 benchmark · 🌐 agent environment · judgment required · mixed · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.01848) · [DOI](https://doi.org/10.48550/arXiv.2504.01848) · [Code](https://github.com/openai/preparedness)
  _Data object:_ paper replication task, codebase/experiment artifacts, rubric item, judge score, and human baseline.; process: target paper, replication subtask, generated code; AI research replication environment with hierarchical rubrics.
  _Feedback / verifier:_ author co-developed rubrics and an LLM-based judge benchmarked against human grading.
  _Recipe signal:_ teacher: ICML paper authors, rubric writers, and ML PhD human baselines.; generator: agent attempts to build codebases and run experiments from papers.
  _Audit focus:_ LLM judge scores can drift or encode rubric shortcuts., Replicating a paper mixes reading, coding, experimentation, and environment setup., Target papers may have public code that changes task difficulty.
  _Why it matters:_ It marks the point where Track 03 verification becomes a hybrid of executable artifacts, experiments, rubrics, and judge calibration.
- 🧰 **[MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://arxiv.org/abs/2410.07095)**
  <sub>2024 · ICLR 2025 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.07095) · [DOI](https://doi.org/10.48550/arXiv.2410.07095) · [Code](https://github.com/openai/mle-bench)
  _Data object:_ competition task, dataset, experiment/code artifacts, submission score, and resource budget.; process: competition id, dataset, agent scaffold; Kaggle-style ML engineering competitions with executable experiments and leaderboard scoring.
  _Feedback / verifier:_ competition metric compared with Kaggle leaderboard baselines.
  _Recipe signal:_ teacher: Kaggle tasks, datasets, metrics, and public leaderboard baselines.; generator: ML engineering agents write code, run experiments, and prepare submissions.
  _Audit focus:_ Leaderboards can reward overfitting to public competition practices., Resource scaling can dominate model comparisons., Kaggle data licenses vary by competition.
  _Why it matters:_ It expands Track 03 from code snippets to full ML engineering episodes where score, compute budget, and contamination are explicit.
- 🧰 **[ScienceAgentBench: Toward Rigorous Assessment of Language Agents for Data-Driven Scientific Discovery](https://arxiv.org/abs/2410.05080)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · programmatic · judgment required · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.05080) · [DOI](https://doi.org/10.48550/arXiv.2410.05080)
  _Data object:_ scientific task, input data, generated program, execution output, metric score, and cost.; process: publication-derived task, input data, program file; scientific data-analysis code execution environment.
  _Feedback / verifier:_ execution results, task metrics, expert validation, and cost measurements.
  _Recipe signal:_ teacher: peer-reviewed publications and subject-matter expert validation.; generator: direct prompting, OpenHands CodeAct, and self-debug agent settings.
  _Audit focus:_ Program execution may pass while scientific interpretation is wrong., Expert validation can be expensive and non-uniform., Self-debug attempts add test-time compute that must be reported.
  _Why it matters:_ It adds a high-quality scientific-workflow surface where verification includes code execution, domain metrics, and expert validation.
- 🧰 **[HOList: An Environment for Machine Learning of Higher-Order Theorem Proving](https://arxiv.org/abs/1904.03241)**
  <sub>2019 · ICML 2019 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · agent training · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/1904.03241) · [DOI](https://doi.org/10.48550/arXiv.1904.03241)
  _Data object:_ proof goal, tactic/action, proof state transition, and theorem-proving result.; process: goal statement, available premises, tactic action; HOL Light theorem prover exposed as an RL-style environment.
  _Feedback / verifier:_ HOL Light kernel and theorem-prover state transitions.
  _Recipe signal:_ teacher: HOL Light proof corpus and theorem-prover feedback.; generator: learning-guided proof search over higher-order logic goals.
  _Audit focus:_ HOL Light-specific tactics may not transfer to Lean or Coq., Proof-search budget strongly affects success rates., Library theorem overlap can inflate evaluation if not versioned.
  _Why it matters:_ It is an early bridge from static proof benchmarks to proof-state/action trajectories with a hard formal verifier.
- 🧰 **[FinanceBench: A benchmark for financial question answering](https://arxiv.org/abs/2311.11944)**
  <sub>2023 · arXiv · 🧰 benchmark · 📦 data release · judgment required · mixed · evaluation · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2311.11944) · [Code](https://github.com/patronus-ai/financebench) · [HF](https://huggingface.co/datasets/PatronusAI/financebench)
  _Data object:_ answer level
  _Feedback / verifier:_ judgment required, mixed
  _Recipe signal:_ release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a domain-specific reasoning benchmark where grounding, evidence retrieval, expert answers, and current filing data matter more than generic exact-match reasoning.
- 🧰 **[LegalBench](https://arxiv.org/abs/2308.11462)**
  <sub>2023 · NeurIPS · 🧰 benchmark · 📦 data release · judgment required · mixed · evaluation · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2308.11462) · [Code](https://github.com/HazyResearch/legalbench) · [HF](https://huggingface.co/datasets/nguha/legalbench) · [Project](https://hazyresearch.stanford.edu/legalbench/)
  _Data object:_ answer level
  _Feedback / verifier:_ judgment required, mixed
  _Recipe signal:_ release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It anchors the legal side of judgment-required reasoning data, where task definitions, legal-domain splits, expert validity, and answer rubrics are often more important than a simple verifier.
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

- 🧰 **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.09038) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2025/hash/fb122bfc3f0127a94ded048b5b03496f-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/facebookresearch/AbstentionBench) · [Data](https://huggingface.co/datasets/facebook/AbstentionBench)
  _Data object:_ model response, abstention decision, and correctness/abstention judgment.; process: scenario type, source dataset, answerability label, judge/validation metadata.; offline benchmark with model-evaluation harness.
  _Feedback / verifier:_ human-validated judges and benchmark labels for abstention scenarios.
  _Recipe signal:_ teacher: dataset labels and human-validated abstention judgments.; generator: benchmark authors assemble unanswerable and answerable prompts.
  _Audit focus:_ A model can game abstention by refusing too often., Benchmark labels around subjectivity and underspecification can be ambiguous., Prompt tuning may improve benchmark score without improving epistemic reasoning.
  _Why it matters:_ It is a direct audit surface for reasoning models: stronger reasoning can still fail if the model confidently answers unanswerable questions instead of abstaining.
- 📦 **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · judgment required · mixed · safety alignment · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.09004) · [ACL](https://aclanthology.org/2025.naacl-long.306/) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0)
  _Data object:_ prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: hazard category, fine-grained risk label, response-safety decision, split metadata when using the dataset release.; offline guardrail training/evaluation dataset.
  _Feedback / verifier:_ risk labels and guard-model evaluation signal.
  _Recipe signal:_ teacher: human annotators and multi-LLM jury system.; generator: safety prompts and human-LLM interactions collected or generated for taxonomy coverage.
  _Audit focus:_ Taxonomy labels can hide disagreement between annotators or judge models., Safety datasets can overfit visible hazard categories and miss emerging harms., Guardrail training may trade helpfulness for over-refusal if topic-following data is not tracked.
  _Why it matters:_ It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification.
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
- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · programmatic · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.20050)
  _Data object:_ step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces
  _Feedback / verifier:_ process reward model trained from step labels
  _Recipe signal:_ reward verifier layer; release audit; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.
- 🏗️ **[Orca: Progressive learning from complex explanation traces of GPT-4](https://arxiv.org/abs/2306.02707)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 🚀 model report · judgment required · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.02707) · [Project](https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/)
  _Data object:_ instruction response with detailed explanation, intermediate reasoning, and final answer.; process: prompt source, teacher identity, explanation trace, task type, response, evaluation benchmark.; offline synthetic-data distillation and evaluation pipeline.
  _Feedback / verifier:_ downstream reasoning, exam, and benchmark evaluation rather than a single automatic verifier.
  _Recipe signal:_ teacher: large foundation models that produce explanation traces and stepwise guidance.; generator: teacher-assisted data-generation pipeline over diverse instructions.
  _Audit focus:_ Students can learn teacher style without robust reasoning., Synthetic traces can include teacher errors., Closed teacher data makes lineage hard to audit.
  _Why it matters:_ It is an early and influential reasoning-distillation recipe: the reusable object is teacher-assisted explanation data plus careful evaluation against style-only imitation.
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
  [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw)
  _Data object:_ multiple rationales and final answers for the same prompt.; process: sampling temperature, number of paths, answer extraction, aggregation rule.; benchmark prompting setup.
  _Feedback / verifier:_ majority or marginalization over sampled answers.
  _Recipe signal:_ teacher: few-shot chain-of-thought exemplars.; generator: model samples many reasoning paths.
  _Audit focus:_ More samples can amplify benchmark-specific shortcuts., Aggregation does not guarantee step faithfulness., Unmatched inference budgets can make methods look better than they are.
  _Why it matters:_ It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.
- 🏗️ **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.14465)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ trace writing; self play anchor; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering.
- 🧭 **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · unknown · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2201.11903)
  _Data object:_ answer level
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ trace writing; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets.
- 📦 **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · programmatic · rlvr · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.17387)
  _Data object:_ math problem, answer, and verification signal; process: problem, answer, verification label; offline math verifier substrate
  _Feedback / verifier:_ answer-level math verifier
  _Recipe signal:_ prompt sourcing; reward verifier layer; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935)
  _Data object:_ step-level rollout-value labels; process: reasoning step, rollout result, process reward score; offline math reasoning traces
  _Feedback / verifier:_ rollout-derived process reward signal
  _Recipe signal:_ generator: model rollouts from intermediate reasoning steps; filtering rule: rollout success rate converted to step reward
  _Audit focus:_ rollout policy strength can leak into labels, step rewards may favor locally plausible continuations, generated solutions can inherit base-model shortcuts
  _Why it matters:_ It is the clearest bridge between final-answer verifiers and step-level PRM data: the label is not a human judgment but a rollout-derived estimate of whether a partial step can still reach the right answer.
- 🧰 **[MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://arxiv.org/abs/2410.07095)**
  <sub>2024 · ICLR 2025 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.07095) · [DOI](https://doi.org/10.48550/arXiv.2410.07095) · [Code](https://github.com/openai/mle-bench)
  _Data object:_ competition task, dataset, experiment/code artifacts, submission score, and resource budget.; process: competition id, dataset, agent scaffold; Kaggle-style ML engineering competitions with executable experiments and leaderboard scoring.
  _Feedback / verifier:_ competition metric compared with Kaggle leaderboard baselines.
  _Recipe signal:_ teacher: Kaggle tasks, datasets, metrics, and public leaderboard baselines.; generator: ML engineering agents write code, run experiments, and prepare submissions.
  _Audit focus:_ Leaderboards can reward overfitting to public competition practices., Resource scaling can dominate model comparisons., Kaggle data licenses vary by competition.
  _Why it matters:_ It expands Track 03 from code snippets to full ML engineering episodes where score, compute budget, and contamination are explicit.
- 🧰 **[ScienceAgentBench: Toward Rigorous Assessment of Language Agents for Data-Driven Scientific Discovery](https://arxiv.org/abs/2410.05080)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · programmatic · judgment required · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.05080) · [DOI](https://doi.org/10.48550/arXiv.2410.05080)
  _Data object:_ scientific task, input data, generated program, execution output, metric score, and cost.; process: publication-derived task, input data, program file; scientific data-analysis code execution environment.
  _Feedback / verifier:_ execution results, task metrics, expert validation, and cost measurements.
  _Recipe signal:_ teacher: peer-reviewed publications and subject-matter expert validation.; generator: direct prompting, OpenHands CodeAct, and self-debug agent settings.
  _Audit focus:_ Program execution may pass while scientific interpretation is wrong., Expert validation can be expensive and non-uniform., Self-debug attempts add test-time compute that must be reported.
  _Why it matters:_ It adds a high-quality scientific-workflow surface where verification includes code execution, domain metrics, and expert validation.
- 🧰 **[SpreadsheetBench: Towards Challenging Real World Spreadsheet Manipulation](https://arxiv.org/abs/2406.14991)**
  <sub>2024 · NeurIPS 2024 · 🧰 benchmark · 📦 data release · programmatic · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2406.14991) · [DOI](https://doi.org/10.48550/arXiv.2406.14991)
  _Data object:_ spreadsheet instruction, input workbook, generated manipulation/formula, and test-case score.; process: forum question, spreadsheet file, instruction; spreadsheet manipulation environment with multiple workbook test cases.
  _Feedback / verifier:_ online-judge-like spreadsheet tests across varied values/files.
  _Recipe signal:_ teacher: real forum questions and benchmark-generated test cases.; generator: models generate spreadsheet operations, formulas, or manipulation plans.
  _Audit focus:_ Formula solutions can overfit visible examples., Spreadsheet formatting and hidden state can affect scoring., Forum tasks may contain ambiguous user intent.
  _Why it matters:_ It broadens programmatic verification to office/data work where hidden test workbooks play the role of unit tests.
- 🪜 **[Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](https://arxiv.org/abs/2406.18629)**
  <sub>2024 · arXiv · 🪜 process supervision · 🏗️ construction recipe · mixed · process supervision · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2406.18629)
  _Data object:_ step-wise preference pairs; process: reasoning step, preferred continuation, rejected continuation; offline long-chain reasoning traces
  _Feedback / verifier:_ step-wise preference optimization objective
  _Recipe signal:_ generator: multi-step reasoning policy; filtering rule: step-wise preferences over reasoning continuations
  _Audit focus:_ local step preference may not align with final correctness, preference construction can hide teacher or scorer bias, long-chain traces can overfit style instead of reasoning validity
  _Why it matters:_ It helps readers see how preference optimization becomes a process-level data problem when the chosen/rejected object is an intermediate continuation rather than a whole answer.
- 📄 **[Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence](https://arxiv.org/abs/2604.18292)**
  <sub>2026 · arXiv preprint arXiv:2604.18292 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.18292)
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[Dual Consensus: Escaping from Spurious Majority in Unsupervised RLVR via Two-Stage Vote Mechanism](https://arxiv.org/abs/2603.16223)**
  <sub>2026 · arXiv preprint arXiv:2603.16223 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2603.16223)
  _Data object:_ metadata pending
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
- 🧭 **[AbstentionBench: Reasoning LLMs Fail on Unanswerable Questions](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv preprint arXiv:2506.09038 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.09038)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **[Kimi K2: Open Agentic Intelligence](https://arxiv.org/abs/2507.20534)**
  <sub>2025 · arXiv preprint arXiv:2507.20534 · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2507.20534)
  _Data object:_ metadata pending
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

### ⚠️ Needs search or metadata

- 🧰 **[Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](https://arxiv.org/abs/2604.10182)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2604.10182) · [DOI](https://doi.org/10.48550/arXiv.2604.10182) · [Paper Card Source](../../paper_cards/sources/credit-budgeted-icpc-style-coding-2026)
  _Data object:_ Coding problem, generated solution, local-test decisions, token/time/test spending, and accepted/rejected outcome.; process: token budget, test budget, elapsed time; USACOArena interactive ACM-ICPC-style coding arena.
  _Feedback / verifier:_ Programmatic coding judge plus explicit credit economy over tokens, tests, and time.
  _Recipe signal:_ teacher: ICPC-style problem set and judge outcomes.; generator: Agents generate code and decide when to test or submit.
  _Audit focus:_ Budget settings can dominate model ranking., Local tests can be gamed or overused., Public programming problems can be contaminated.
  _Why it matters:_ It expands Track 03 from pure correctness to correctness under resource budgets, which is closer to real agent deployment and test-time compute accounting.
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
- 📄 **pass@$(k,T)$: Re-examining the reasoning boundary for agentic RL**
  <sub>2026 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **MCP-Universe: Tool and environment infrastructure for agent evaluation and training**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Multi-Agent Evolve: LLM self-improve through co-evolution**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🚀 **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · sft · rlvr · L4_carded</sub>
  [Code](https://github.com/QwenLM/Qwen3-Coder) · [Project](https://qwenlm.github.io/blog/qwen3-coder/)
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
- 📄 **xLAM: A family of large action models to empower AI agent systems**
  <sub>2025 · NAACL · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **APIGen: Automated pipeline for generating verifiable and diverse function-calling datasets**
  <sub>2024 · NeurIPS · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **BFCL v3**
  <sub>2024 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **PaperQA2 / Language agents achieve superhuman synthesis of scientific knowledge**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **SWE-Gym: Advancing software engineering agents with training and evaluation environments**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **SWE-Search**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **ToolACE: Winning the points of LLM function calling**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **WebLINX: Real-world website navigation with multi-turn dialogue**
  <sub>2024 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **WorkArena: How capable are web agents at solving common knowledge work tasks?**
  <sub>2024 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Gorilla**
  <sub>2023 · arXiv preprint · unknown · unknown · L0_seeded</sub>
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
- 📄 **ConvFinQA: Exploring the chain of numerical reasoning in conversational finance question answering**
  <sub>2022 · EMNLP · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **ScienceWorld: Is your agent smarter than a 5th grader?**
  <sub>2022 · EMNLP · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
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

- Can the state, observation stream, action schema, and terminal predicate be replayed?
- Are tool wrappers, browser state, repository commits, and time/token budgets pinned?
- Are failed and near-miss trajectories preserved?

## 7. Open Problems

- Which agent datasets are replayable enough for RL rather than only SFT?
- How should failed and near-miss trajectories be released?
- Can live web/app environments remain stable enough for benchmark claims?
- What is the minimum metadata for a SWE episode to be auditable?

## 8. Related Paper-Card Sources

- [Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](../../paper_cards/sources/credit-budgeted-icpc-style-coding-2026)
- [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](../../paper_cards/sources/featurebench-2026)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
