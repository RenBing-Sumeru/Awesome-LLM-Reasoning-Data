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
| [Aegis2.0](https://arxiv.org/abs/2501.09004) | 2025 | [Paper](https://arxiv.org/abs/2501.09004) · [ACL](https://aclanthology.org/2025.naacl-long.306/) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) · [Card](../../cards/verifiers/aegis2.md) | prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: hazard category, fine-grained risk label, response-safety decision, split metadata when using the dataset release.; offline guardrail training/evaluation dataset. | risk labels and guard-model evaluation signal. | It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification. |
| [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801) | 2025 | [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) · [Card](../../cards/recipes/deepseek-prover-v2.md) | subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline. | Lean verification and RL reward over formal proof success. | It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification. |
| [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | 2025 | [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../../cards/releases/openthoughts.md) | reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus | filters, benchmark feedback, and recipe ablations | It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance. |
| [DeepSeek-Prover: Advancing theorem proving in LLMs](https://arxiv.org/abs/2405.14333) | 2024 | [Paper](https://arxiv.org/abs/2405.14333) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1) · [Card](../../cards/recipes/deepseek-prover.md) | Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness. | Lean kernel/checker acceptance. | It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object. |
| [LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md) | Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories. | Lean checker and environment feedback. | It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record. |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [Card](../../cards/verifiers/prm800k.md) | step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces | process reward model trained from step labels | It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation. |
| [Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511) | 2023 | [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/) · [Card](../../cards/recipes/self-rag.md) | generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens. | critique signals and task-specific factuality/answer-quality evaluation. | It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations. |
| [Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374) | 2021 | [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../../cards/benchmarks/evaluating-large-language-models-trained-on-code.md) | executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite. | HumanEval tests and pass@k evaluation. | It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions. |
| [GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168) | 2021 | [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../../cards/benchmarks/gsm8k-grade-school-math-8k.md) | natural-language solution with final numeric answer; process: question, solution, final answer; offline math benchmark | answer extraction and arithmetic correctness checks | It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training. |
| [Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874) | 2021 | [Paper](https://arxiv.org/abs/2103.03874) · [Code](https://github.com/hendrycks/math) · [Card](../../cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) | answer level | programmatic | MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems. |

## 5. Full Paper List

### <a id="tool-use-data"></a>🛠️ Tool-use data

- 🚀 **[Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](https://arxiv.org/abs/2409.12122)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2409.12122) · [Code](https://github.com/QwenLM/Qwen2.5-Math) · [HF](https://huggingface.co/Qwen/Qwen2.5-Math-7B) · [Project](https://qwenlm.github.io/blog/qwen2.5-math/) · [Card](../../cards/recipes/qwen2-5-math.md)
  _Data object:_ math solution, final answer, optional tool/code execution trace, and reward-model score.; process: model stage, problem source, reasoning mode, tool use, answer, reward score, benchmark result.; Qwen math model family, GitHub evaluation scripts, and Hugging Face model releases.
  _Feedback / verifier:_ math answer checks, reward model signals, and benchmark evaluations.
  _Recipe signal:_ teacher: self-improvement pipeline and math reward/evaluation signals.; generator: math-specialized models generate solutions and tool-integrated traces.
  _Audit focus:_ Tool-integrated results are not comparable to no-tool results., Reward models can favor format over proof validity., Model-family reports can blur data and inference effects.
  _Why it matters:_ It is a useful model-report case where math post-training data, reward models, tool-integrated reasoning, and multilingual math evaluation are tied together.
- 🏗️ **[Toolformer: Language models can teach themselves to use tools](https://arxiv.org/abs/2302.04761)**
  <sub>2023 · NeurIPS · 🏗️ construction recipe · 🌐 agent environment · mixed · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2302.04761) · [OpenReview](https://openreview.net/forum?id=Yacmpz84TH) · [Card](../../cards/agents/toolformer.md)
  _Data object:_ text sequence with inserted API call and tool result markup.; process: candidate call location, API name, arguments, tool output, likelihood improvement, retained annotation.; external tool APIs used during data construction and evaluation.
  _Feedback / verifier:_ language-model likelihood improvement after including tool result.
  _Recipe signal:_ teacher: small hand-written demonstrations per tool seed the API-call format.; generator: model samples candidate tool calls over raw text.
  _Audit focus:_ Likelihood improvement may not equal truthful tool use., Tools can return stale or wrong outputs., The model can learn call syntax without robust tool-selection judgment.
  _Why it matters:_ It is a classic construction recipe for tool-call supervision: models learn when to call tools, what arguments to pass, and how to fold observations back into text.
- 📦 **[APIGen: Automated Pipeline for Generating Verifiable and Diverse Function-Calling Datasets](https://arxiv.org/abs/2406.18518)**
  <sub>2024 · NeurIPS · 📦 data release · 🏗️ construction recipe · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.18518) · [Data](https://huggingface.co/datasets/Salesforce/xlam-function-calling-60k) · [Project](https://apigen-pipeline.github.io/) · [Card](../../cards/agents/apigen.md)
  _Data object:_ Function-calling example with function name, arguments, expected execution behavior, and verification signal.; process: function schema, instruction, function name; Executable API/function pool across multiple categories.
  _Feedback / verifier:_ Hierarchical format checking, actual function execution, and semantic verification.
  _Recipe signal:_ teacher: Automated generator with verification filters.; generator: APIGen pipeline for synthesizing diverse function-calling datasets.
  _Audit focus:_ Synthetic function APIs may be cleaner than messy real-world APIs., Semantic verification can miss ambiguous or underspecified user intent., Models may overfit schema patterns rather than robust tool selection.
  _Why it matters:_ It gives Track 06 a clear example of how tool-use trajectories can be generated and filtered by executable verifier stages.
- 🧰 **[ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities](https://arxiv.org/abs/2408.04682)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.04682) · [Code](https://github.com/apple/ToolSandbox) · [Card](../../cards/agents/toolsandbox.md)
  _Data object:_ On-policy conversational trajectory with user messages, tool calls, tool results, state updates, and final response.; process: user message, tool call, arguments; Stateful conversational sandbox with executable tools and built-in user simulator.
  _Feedback / verifier:_ Dynamic milestone and final-state checks over arbitrary trajectories.
  _Recipe signal:_ teacher: Benchmark authors and user simulator.; generator: Scenario and tool-state construction for stateful conversational evaluation.
  _Audit focus:_ Hidden state and scenario seeds must be preserved for reproducible replay., Final checks may miss unsafe or invalid intermediate actions if milestones are incomplete., Tool versions and simulator behavior can drift across runs.
  _Why it matters:_ It makes state, replay, intermediate milestones, and terminal predicates first-class parts of tool-use evaluation.
- 🧰 **[API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs](https://arxiv.org/abs/2304.08244)**
  <sub>2023 · EMNLP · 🧰 benchmark · 📦 data release · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2304.08244) · [Code](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/api-bank) · [Card](../../cards/agents/api-bank.md)
  _Data object:_ Multi-turn tool-use dialogue with API call, arguments, tool response, and final answer.; process: user instruction, api name, api arguments; Runnable API-bank evaluation system and tool-use task collection.
  _Feedback / verifier:_ API-call validity, tool-response consistency, and task-completion checks.
  _Recipe signal:_ teacher: Benchmark authors and annotators.; generator: Curated API-bank task and dialogue construction.
  _Audit focus:_ API schema or tool behavior may drift after release., A model may learn surface tool-call format without robust API selection., Execution failures can be hidden if only successful trajectories are emphasized.
  _Why it matters:_ It is one of the core early datasets for tool-augmented LLMs, connecting dialogue traces, API calls, and executable evaluation.
- 🧰 **[Gorilla: Large Language Model Connected with Massive APIs](https://arxiv.org/abs/2305.15334)**
  <sub>2023 · arXiv preprint · 🧰 benchmark · 🏗️ construction recipe · programmatic · mixed · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.15334) · [Code](https://github.com/ShishirPatil/gorilla) · [Project](https://gorilla.cs.berkeley.edu/) · [Card](../../cards/agents/gorilla_apibench.md)
  _Data object:_ API call prediction with selected API, arguments, and optional retrieval-grounded documentation context.; process: user query, api documentation, retrieved context; APIBench over Hugging Face, TorchHub, TensorHub, and related API documentation.
  _Feedback / verifier:_ API-call correctness and hallucination checks against the documented API signature.
  _Recipe signal:_ teacher: Benchmark authors and API documentation.; generator: APIBench task construction plus retrieval-augmented finetuning setup.
  _Audit focus:_ API documentation can become stale relative to live APIs., Retrieval quality can dominate apparent tool-use ability., Models may hallucinate plausible APIs or arguments outside the allowed schema.
  _Why it matters:_ It is a key bridge between tool-use data, API documentation, retrieval, and programmatic tool-call verification.
- 📦 **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.16789) · [Card](../../cards/agents/toolllm_toolbench.md)
  _Data object:_ tool-call trajectory plus final response; process: API call, arguments, tool response; real-world API/tool catalog
  _Feedback / verifier:_ tool response validity and task success checks
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.
- 🏗️ **[Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence](https://arxiv.org/abs/2604.18292)**
  <sub>2026 · arXiv preprint arXiv:2604.18292 · 🏗️ construction recipe · 🌐 agent environment · environmental · programmatic · agent training · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2604.18292)
  _Data object:_ synthesized verifiable task, agent interaction trajectory, and benchmark outcome; process: environment theme, tool ecosystem, synthesized task; self-evolving arena over scalable tool environments and MCP-style interfaces
  _Feedback / verifier:_ verifiable synthesized tasks and benchmark outcomes across agent benchmarks
  _Recipe signal:_ generator: agentic environment-task discovery and dynamic task synthesis; filtering rule: controllable difficulty and capability-gap targeting
  _Audit focus:_ Working-in-progress 2026 preprint with environment fidelity and artifact-release uncertainty., Synthetic verifiable tasks may not reflect real operational failures.
  _Why it matters:_ P0 Track 06 environment-synthesis entry: it targets scalable environment/task generation and co-evolution of agents and environments.
- 🧰 **[MCP-Universe: Benchmarking Large Language Models with Real-World Model Context Protocol Servers](https://arxiv.org/abs/2508.14704)**
  <sub>2025 · arXiv preprint arXiv:2508.14704 · 🧰 benchmark · 🛠️ infrastructure · environmental · programmatic · evaluation · agent training · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2508.14704) · [Project](https://mcp-universe.github.io)
  _Data object:_ MCP tool/server interaction episode with final answer or artifact; process: MCP server, tool call, format compliance; real-world Model Context Protocol servers
  _Feedback / verifier:_ format, static, and dynamic execution-based evaluators
  _Recipe signal:_ filtering rule: domain/server selection and evaluator implementation
  _Audit focus:_ Real-time dynamic evaluators can drift., Unknown-tool challenge may conflate documentation quality with agent skill.
  _Why it matters:_ P0 Track 06 infrastructure entry: it evaluates agents through real MCP server interfaces and execution-based evaluators.
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
  [Paper](https://arxiv.org/abs/2402.03300) · [Code](https://github.com/deepseek-ai/deepseek-math) · [HF](https://huggingface.co/collections/deepseek-ai/deepseek-math) · [Card](../../cards/recipes/deepseekmath.md)
  _Data object:_ natural-language mathematical solution plus final answer, sometimes sampled multiple times.; process: data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.; offline math training and benchmark evaluation pipeline.
  _Feedback / verifier:_ answer correctness and GRPO-style reward over math tasks.
  _Recipe signal:_ teacher: math corpora, supervised examples, and verifiable benchmark answers.; generator: model produces solutions during SFT, RL, and self-consistency sampling.
  _Audit focus:_ Self-consistency can hide weak single-sample accuracy., Web-data mining may import benchmark leakage., Final-answer rewards can miss flawed derivations.
  _Why it matters:_ It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.
- 🧰 **[GPQA](https://arxiv.org/abs/2311.12022)**
  <sub>2023 · arXiv · 🧰 benchmark · judgment required · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2311.12022) · [OpenReview](https://openreview.net/forum?id=Ti67584b98) · [Code](https://github.com/idavidrein/gpqa) · [Card](../../cards/benchmarks/gpqa.md)
  _Data object:_ multiple-choice answer with optional rationale and expert label.; process: domain, question, answer options, expert label, validation metadata, canary/string metadata.; offline expert Q&A benchmark.
  _Feedback / verifier:_ expert-authored answer key and validation protocol.
  _Recipe signal:_ teacher: domain experts write and validate questions.; generator: benchmark authors curate difficult science questions.
  _Audit focus:_ Multiple-choice guessing can inflate scores., Non-expert validators may not catch subtle mistakes., Tool access changes what the benchmark measures.
  _Why it matters:_ It is a scalable-oversight benchmark: the data object tests whether models can answer expert questions that are difficult for ordinary validators to check.
- 🧰 **[TruthfulQA](https://arxiv.org/abs/2109.07958)**
  <sub>2022 · ACL · 🧰 benchmark · 🧯 audit failure · judgment required · mixed · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.07958) · [ACL](https://aclanthology.org/2022.acl-long.229/) · [Code](https://github.com/sylinrl/TruthfulQA) · [Card](../../cards/benchmarks/truthfulqa.md)
  _Data object:_ free-form generation or multiple-choice answer with truthfulness and informativeness labels.; process: question category, reference true answers, reference false answers, model answer, truthfulness score, informativeness score.; offline benchmark with human-written items and evaluator scripts.
  _Feedback / verifier:_ human references plus automated/human scoring protocols for truthfulness and informativeness.
  _Recipe signal:_ teacher: human-authored reference answer sets.; generator: benchmark authors construct questions designed to trigger imitative falsehoods.
  _Audit focus:_ A model can be uninformative but truthful., A model can sound confident while reproducing a human misconception., Multiple-choice and generation modes can lead to different conclusions.
  _Why it matters:_ It is a canonical truthfulness audit surface for reasoning models because stronger generation can still amplify persuasive false answers learned from web text.
- 🧭 **[Data statements for natural language processing](https://aclanthology.org/Q18-1041/)**
  <sub>2018 · TACL · 🧭 survey background · unknown · audit · L5_audit_ready</sub>
  [Paper](https://aclanthology.org/Q18-1041/) · [Card](../../cards/releases/data-statements-for-natural-language-processing.md)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization.
- 🛠️ **[BrowserGym: A gym environment for web agents](https://arxiv.org/abs/2412.05467)**
  <sub>2024 · arXiv · 🛠️ infrastructure · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.05467) · [Card](../../cards/agents/browsergym.md)
  _Data object:_ browser trajectory; process: DOM/state observation, action, reward/result; gym-style browser environment
  _Feedback / verifier:_ environment task evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation.
- 🧰 **[VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks](https://arxiv.org/abs/2401.13649)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2401.13649) · [Code](https://github.com/web-arena-x/visualwebarena) · [Project](https://jykoh.com/vwa) · [Card](../../cards/agents/visualwebarena.md)
  _Data object:_ Browser interaction trajectory with webpage observation, screenshot context, action, and final task outcome.; process: natural language goal, screenshot, page observation; Visual web tasks with screenshots, browser state, and realistic web environments.
  _Feedback / verifier:_ Task-specific success checks over the final web state.
  _Recipe signal:_ teacher: Benchmark authors.; generator: WebArena-style web task construction extended with visual observations.
  _Audit focus:_ Screenshot and webpage state can drift if environments are updated., Visual cues may be unavailable or rendered differently across browsers., Task success checks can miss partially completed or unsafe intermediate behavior.
  _Why it matters:_ Extends WebArena-style evaluation toward visual web interaction, useful when reasoning data includes screenshots and UI state.
- 📦 **[WebLINX: Real-World Website Navigation with Multi-Turn Dialogue](https://arxiv.org/abs/2402.05930)**
  <sub>2024 · arXiv preprint · 📦 data release · 🧰 benchmark · environmental · mixed · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.05930) · [Code](https://github.com/McGill-NLP/weblinx) · [Project](https://mcgill-nlp.github.io/weblinx/) · [Card](../../cards/agents/weblinx.md)
  _Data object:_ Conversational browser trajectory with dialogue context, webpage state, action history, and next action.; process: user instruction, dialogue history, html context; More than 150 real-world websites with recorded navigation demonstrations.
  _Feedback / verifier:_ Imitation/action matching and task-level evaluation over expert navigation demonstrations.
  _Recipe signal:_ teacher: Expert demonstrators.; generator: Human web navigation demonstrations plus retrieval-style HTML element pruning setup.
  _Audit focus:_ Real websites can drift or disappear after demonstrations are collected., Action imitation may reward matching demonstrations rather than robust task completion., Train/test leakage can occur if website templates or navigation paths overlap.
  _Why it matters:_ It is one of the clearest Track 06 examples where the data object is a real web episode with dialogue, observation, action history, and expert behavior.
- 🧰 **[WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks?](https://arxiv.org/abs/2403.07718)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2403.07718) · [Code](https://github.com/ServiceNow/WorkArena) · [Card](../../cards/agents/workarena.md)
  _Data object:_ Browser-agent episode with multimodal observation, browser action, and final task state.; process: task goal, browser observation, screenshot or dom; Remote-hosted ServiceNow environment exposed through BrowserGym.
  _Feedback / verifier:_ Task-specific success checks over the enterprise web application state.
  _Recipe signal:_ teacher: Benchmark authors and enterprise workflow specifications.; generator: ServiceNow task design plus BrowserGym environment construction.
  _Audit focus:_ Hosted enterprise environment can drift or become unavailable., Success checks may depend on hidden application state and configuration., Benchmark feedback can be overfit if tasks or environment templates become public training data.
  _Why it matters:_ It moves web-agent evaluation toward realistic workplace workflows with browser state, action traces, and environment-level success checks.
- 🧰 **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.13854) · [Card](../../cards/agents/webarena.md)
  _Data object:_ environment interaction trajectory; process: observation, action, state; browser-accessible web environment
  _Feedback / verifier:_ task-specific success evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.
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

### <a id="os-desktop-agents"></a>🖥️ OS/desktop agents

- 🧰 **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2404.07972) · [Card](../../cards/agents/osworld.md)
  _Data object:_ GUI/OS action trajectory; process: observation, action, environment state; desktop operating-system environment
  _Feedback / verifier:_ task completion evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.
- 🧰 **[WorkArena++: Towards Compositional Planning and Reasoning-based Common Knowledge Work Tasks](https://arxiv.org/abs/2407.05291)**
  <sub>2024 · arXiv preprint arXiv:2407.05291 · 🧰 benchmark · 🌐 agent environment · environmental · mixed · evaluation · sft · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2407.05291) · [Code](https://github.com/ServiceNow/WorkArena)
  _Data object:_ observation/action trace plus workflow task outcome; process: web observation, agent action, workflow state; ServiceNow-style enterprise workflow environment
  _Feedback / verifier:_ workflow task success and generated ground-truth traces
  _Recipe signal:_ filtering rule: compositional task design and generated ground-truth observation/action traces
  _Audit focus:_ Generated traces may simplify workflows., Hosted enterprise environments can drift across versions.
  _Why it matters:_ P0 Track 06 workflow entry: it extends WorkArena with compositional planning tasks and trace generation for agent training.

### <a id="swe-repository-agents"></a>🧑‍💻 SWE/repository agents

- 🧰 **[Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)**
  <sub>2024 · OpenAI / SWE-bench report · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://openai.com/index/introducing-swe-bench-verified/) · [Venue](https://www.swebench.com/verified.html) · [Code](https://github.com/swe-bench/SWE-bench) · [Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified) · [Card](../../cards/agents/swe-bench-verified.md)
  _Data object:_ patch diff applied to a repository plus test execution results.; process: repository, issue, base commit, patch, FAIL TO PASS tests, PASS TO PASS tests, human validation notes.; Dockerized repository checkout and unit-test harness.
  _Feedback / verifier:_ post-patch unit tests plus human filtering of task validity.
  _Recipe signal:_ teacher: resolved GitHub pull requests and human validators.; generator: dataset curation filters original SWE-bench instances for clarity, solvability, and test validity.
  _Audit focus:_ Leaderboard scores can depend strongly on scaffold design., Tests may not cover all acceptable patches., Public benchmark tasks can become training targets over time.
  _Why it matters:_ It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.
- 📦 **[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 📦 data release · 🧰 benchmark · environmental · programmatic · agent training · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md)
  _Data object:_ Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.
  _Feedback / verifier:_ Lean checker and environment feedback.
  _Recipe signal:_ teacher: Lean math-library proofs and proof-assistant feedback.; generator: data-extraction toolkit traces repositories and prover generates tactics.
  _Audit focus:_ A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
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
- 🧰 **[Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces](https://arxiv.org/abs/2601.11868)**
  <sub>2026 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2601.11868) · [Code](https://github.com/laude-institute/terminal-bench) · [Project](https://www.tbench.ai/) · [Card](../../cards/agents/terminal_bench.md)
  _Data object:_ Terminal-agent episode with shell commands, filesystem/process state changes, and final test result.; process: task instruction, terminal observation, shell command; Isolated command-line task environments with evaluation harness and tests.
  _Feedback / verifier:_ Comprehensive task tests executed in the terminal environment.
  _Recipe signal:_ teacher: Benchmark authors and human solution writers.; generator: Curated terminal task environments with human-written solutions and tests.
  _Audit focus:_ Test suites can be gamed or may miss semantically wrong but test-passing solutions., Environment images, package versions, and network assumptions can drift., Public tasks can contaminate training data for terminal agents.
  _Why it matters:_ It expands Track 06 beyond browser and SWE tasks into terminal environments where replay, environment versions, and tests define the feedback contract.
- 🚀 **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · mixed · programmatic · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.13585) · [Code](https://github.com/MiniMax-AI/MiniMax-M1) · [Card](../../cards/recipes/minimax_m1.md)
  _Data object:_ reasoning output, code/tool result, or agent task output; process: reasoning output, benchmark result, thinking budget; math, code, SWE, tool-use, and long-context evaluation surfaces
  _Feedback / verifier:_ programmatic, environment, and benchmark feedback
  _Recipe signal:_ frontier pipeline; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
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
- 🛠️ **[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)**
  <sub>2024 · ICLR · 🛠️ infrastructure · 🌐 agent environment · environmental · mixed · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16741) · [Code](https://github.com/All-Hands-AI/OpenHands) · [Project](https://www.openhands.dev/) · [Card](../../cards/agents/openhands.md)
  _Data object:_ tool/action/observation trajectory; process: plan, shell command, file edit; sandboxed software-development runtime
  _Feedback / verifier:_ task, test, or human-review outcome depending on benchmark
  _Recipe signal:_ search substrate; optimizer scaffold; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.
- 🧰 **[Multi-SWE-bench: A Multilingual Benchmark for Issue Resolving](https://arxiv.org/abs/2504.02605)**
  <sub>2025 · arXiv preprint arXiv:2504.02605 · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.02605)
  _Data object:_ issue-resolving patch in a repository; process: issue, repository, language; multilingual software repositories and issue-resolving benchmark instances
  _Feedback / verifier:_ tests and expert annotation of benchmark candidates
  _Recipe signal:_ filtering rule: expert annotation from candidate issue-resolving instances
  _Audit focus:_ Language imbalance and test coverage can skew agent comparisons., RL training release may blur train/eval boundaries.
  _Why it matters:_ P0 Track 06 SWE entry: it extends repository-agent tasks beyond Python and releases RL-oriented issue-resolving instances.
- 🌐 **[R2E-Gym: Procedural Environments and Hybrid Verifiers for Scaling Open-Weights SWE Agents](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv preprint arXiv:2504.07164 · 🌐 agent environment · 🏗️ construction recipe · programmatic · mixed · agent training · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07164) · [Project](https://r2e-gym.github.io/)
  _Data object:_ repository task, generated patch, execution trace, verifier outcome; process: repository, commit, synthetic task; procedural executable gym environments for repository-level code agents
  _Feedback / verifier:_ hybrid execution-based and execution-free verifiers
  _Recipe signal:_ generator: SYNGEN synthetic data curation recipe; filtering rule: test-generation and back-translation from commits
  _Audit focus:_ Generated tests may create false positives., Execution-free verifiers can be biased by style or benchmark artifacts.
  _Why it matters:_ P0 Track 06 environment infrastructure entry: it creates procedurally curated executable SWE-agent environments and verifiers.
- 🧰 **[SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?](https://arxiv.org/abs/2502.12115)**
  <sub>2025 · arXiv preprint arXiv:2502.12115 · 🧰 benchmark · 🌐 agent environment · programmatic · judgment required · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.12115) · [Code](https://github.com/openai/SWELancer-Benchmark)
  _Data object:_ freelance task solution, implementation patch, or managerial proposal decision; process: task description, payout value, repository or proposal context; Dockerized freelance SWE task environment and public SWE-Lancer Diamond split
  _Feedback / verifier:_ end-to-end tests triple-verified by software engineers or original manager choices
  _Recipe signal:_ filtering rule: task curation from freelance work and expert verification
  _Audit focus:_ Private task data and public Diamond split may differ., Managerial-choice labels may encode workplace-specific preferences.
  _Why it matters:_ P0 Track 06 SWE/workflow entry: it grounds software-agent evaluation in economically valued freelance tasks with executable checks.
- 🏗️ **[SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution](https://arxiv.org/abs/2502.18449)**
  <sub>2025 · NeurIPS 2025 / arXiv preprint arXiv:2502.18449 · 🏗️ construction recipe · 🚀 model report · programmatic · mixed · rlvr · agent training · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.18449)
  _Data object:_ developer reasoning process and solution or patch-style output; process: code snapshot, change history, issue or pull request; open-source software evolution data and SWE-bench Verified evaluation
  _Feedback / verifier:_ lightweight rule-based reward and benchmark solve rate
  _Recipe signal:_ filtering rule: rule-based reward over open software evolution data
  _Audit focus:_ Similarity rewards can reward superficial patches., Open-source evolution data may overlap with evaluation repositories.
  _Why it matters:_ P0 Track 06 SWE RL entry: it trains software agents from repository evolution traces and rule-based feedback.
- 🏗️ **[SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents](https://arxiv.org/abs/2505.20411)**
  <sub>2025 · NeurIPS 2025 / arXiv preprint arXiv:2505.20411 · 🏗️ construction recipe · 🧰 benchmark · programmatic · environmental · agent training · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.20411) · [Data](https://huggingface.co/datasets/nebius/SWE-rebench) · [Project](https://swe-rebench.com)
  _Data object:_ interactive SWE task with code execution, adaptation, and patch outcome; process: repository, task, environment; Python repository environments collected continuously from GitHub
  _Feedback / verifier:_ task tests and contamination-free benchmark comparison
  _Recipe signal:_ generator: automated task-collection pipeline; filtering rule: continuous extraction and decontamination methodology
  _Audit focus:_ Decontamination claims need independent audit., Automated task extraction may include brittle or underspecified issues.
  _Why it matters:_ P0 Track 06 SWE entry: it builds large-scale interactive repository-agent tasks and a fresh evaluation pipeline.
- 🏗️ **[SWE-smith: Scaling Data for Software Engineering Agents](https://arxiv.org/abs/2504.21798)**
  <sub>2025 · arXiv preprint arXiv:2504.21798 · 🏗️ construction recipe · 📦 data release · programmatic · environmental · agent training · sft · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.21798) · [Project](https://swesmith.com)
  _Data object:_ software engineering task instance, execution environment, patch, trajectory, and model output; process: repository, execution environment, task instance; Python repositories with constructed execution environments
  _Feedback / verifier:_ test failures and test-based task resolution
  _Recipe signal:_ generator: SWE-smith scalable task-generation pipeline; filtering rule: construct environments and synthesize task instances that break existing tests
  _Audit focus:_ Generated tasks may be solvable through test artifacts rather than real issue understanding., Repository selection, license, and trajectory release details need audit.
  _Why it matters:_ P0 Track 06 SWE data-construction entry: it scales executable repository-agent training instances and trajectories.
- 🧰 **[TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks](https://arxiv.org/abs/2412.14161)**
  <sub>2025 · arXiv preprint arXiv:2412.14161 · 🧰 benchmark · 🌐 agent environment · environmental · mixed · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2412.14161) · [Project](https://the-agent-company.com)
  _Data object:_ digital-worker task episode with browsing, code, program, and communication actions; process: task instruction, web action, code/program action; self-contained company-like environment with internal websites and data
  _Feedback / verifier:_ task-specific completion checks in the simulated workplace
  _Recipe signal:_ filtering rule: curated workplace tasks and self-contained environment setup
  _Audit focus:_ Simulated company tasks may not capture real organizational constraints., Long-horizon task success may depend on environment snapshot details.
  _Why it matters:_ P0 Track 06 workplace entry: it defines a company-like environment for long-horizon digital-worker agents.
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

### <a id="replayable-trajectory-data"></a>🔁 Replayable trajectory data

- 🌐 **[ReAct: Synergizing reasoning and acting in language models](https://arxiv.org/abs/2210.03629)**
  <sub>2023 · ICLR · 🌐 agent environment · 🏗️ construction recipe · environmental · mixed · agent training · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2210.03629) · [OpenReview](https://openreview.net/forum?id=WE_vluYUL-X) · [Code](https://github.com/ysymyth/ReAct) · [Project](https://react-lm.github.io/) · [Card](../../cards/agents/react.md)
  _Data object:_ trajectory containing reasoning note, action, observation, and final answer or task completion.; process: task state, action string, observation, reasoning note, final answer, success indicator.; Wikipedia API, embodied/web shopping environments, and task-specific simulators.
  _Feedback / verifier:_ environment success, answer correctness, or task-specific evaluation.
  _Recipe signal:_ teacher: few-shot trajectory exemplars demonstrate reasoning-action format.; generator: model samples interleaved reasoning and action steps.
  _Audit focus:_ Reasoning notes can rationalize bad actions., Environment wrappers can change task difficulty., Few-shot exemplars may encode brittle action formats.
  _Why it matters:_ It is a foundational agent-data pattern: the training/evaluation record is not just an answer but a trajectory of thought-like notes, actions, observations, and final response.
- 🧰 **[AMA-Bench: Evaluating Long-Horizon Memory for Agentic Applications](https://arxiv.org/abs/2602.22769)**
  <sub>2026 · arXiv preprint arXiv:2602.22769 · 🧰 benchmark · 🌐 agent environment · mixed · programmatic · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2602.22769) · [Project](https://ama-bench.github.io/)
  _Data object:_ memory QA over agent-environment interaction history; process: state, action, observation; agent memory benchmark over continuous interaction trajectories
  _Feedback / verifier:_ expert-curated QA and rule-based QA for synthetic trajectories
  _Recipe signal:_ generator: real trajectories plus synthetic trajectory generator; filtering rule: expert curation and rule-based QA construction
  _Audit focus:_ Synthetic trajectories may overstate memory-system generalization., Similarity-based retrieval failures may depend on chosen tasks and QA construction.
  _Why it matters:_ P0 Track 06 memory entry: it explicitly frames agent memory as state/action/observation/tool-output trajectories rather than dialogue-only context.
- 🌐 **[Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442)**
  <sub>2023 · arXiv preprint arXiv:2304.03442 · 🌐 agent environment · 🏗️ construction recipe · judgment required · mixed · evaluation · agent training · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2304.03442)
  _Data object:_ agent behavior, memory, reflection, and plan within a sandbox town; process: observation, memory, reflection; interactive sandbox simulation inspired by The Sims
  _Feedback / verifier:_ human/believability evaluation and architecture ablations
  _Recipe signal:_ filtering rule: memory retrieval, reflection synthesis, and planning architecture
  _Audit focus:_ Believability judgments are subjective., Sandbox behavior may not transfer to operational environments.
  _Why it matters:_ P0 Track 06 historical memory/workflow anchor: it made memory, reflection, planning, and sandbox interaction central to LLM-agent behavior.

### <a id="agent-benchmarks-and-terminal-predicates"></a>🧰 Agent benchmarks and terminal predicates

- 🧰 **[Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)**
  <sub>2024 · OpenAI / SWE-bench report · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://openai.com/index/introducing-swe-bench-verified/) · [Venue](https://www.swebench.com/verified.html) · [Code](https://github.com/swe-bench/SWE-bench) · [Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified) · [Card](../../cards/agents/swe-bench-verified.md)
  _Data object:_ patch diff applied to a repository plus test execution results.; process: repository, issue, base commit, patch, FAIL TO PASS tests, PASS TO PASS tests, human validation notes.; Dockerized repository checkout and unit-test harness.
  _Feedback / verifier:_ post-patch unit tests plus human filtering of task validity.
  _Recipe signal:_ teacher: resolved GitHub pull requests and human validators.; generator: dataset curation filters original SWE-bench instances for clarity, solvability, and test validity.
  _Audit focus:_ Leaderboard scores can depend strongly on scaffold design., Tests may not cover all acceptable patches., Public benchmark tasks can become training targets over time.
  _Why it matters:_ It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.
- 📦 **[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 📦 data release · 🧰 benchmark · environmental · programmatic · agent training · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md)
  _Data object:_ Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.
  _Feedback / verifier:_ Lean checker and environment feedback.
  _Recipe signal:_ teacher: Lean math-library proofs and proof-assistant feedback.; generator: data-extraction toolkit traces repositories and prover generates tactics.
  _Audit focus:_ A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
- 🧰 **[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.06770) · [OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [Code](https://github.com/swe-bench/SWE-bench) · [Project](https://www.swebench.com/original.html) · [Card](../../cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md)
  _Data object:_ full episode; state action level
  _Feedback / verifier:_ environmental, programmatic
  _Recipe signal:_ release audit; evaluation; agent training
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes.
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
- 🧰 **[miniF2F: A cross-system benchmark for formal olympiad-level mathematics](https://arxiv.org/abs/2109.00110)**
  <sub>2021 · ICLR · 🧰 benchmark · 📦 data release · programmatic · environmental · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2109.00110) · [OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [Code](https://github.com/openai/miniF2F) · [Card](../../cards/benchmarks/minif2f.md)
  _Data object:_ formal proof accepted by a target proof assistant.; process: formal system, theorem statement, split, generated proof/tactics, verifier result.; Lean, Metamath, Isabelle, and HOL Light style theorem proving environments.
  _Feedback / verifier:_ proof assistant kernel/checker acceptance.
  _Recipe signal:_ teacher: formalized benchmark statements and proof assistant checkers.; generator: human translators and theorem prover agents produce proof attempts.
  _Audit focus:_ A theorem can be easier in one formal system than another., Search budget can dominate model differences., Forks can drift from the original benchmark.
  _Why it matters:_ It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof.
- 🧭 **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · unknown · unknown · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07086) · [Card](../../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains.
- 🧰 **[Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces](https://arxiv.org/abs/2601.11868)**
  <sub>2026 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2601.11868) · [Code](https://github.com/laude-institute/terminal-bench) · [Project](https://www.tbench.ai/) · [Card](../../cards/agents/terminal_bench.md)
  _Data object:_ Terminal-agent episode with shell commands, filesystem/process state changes, and final test result.; process: task instruction, terminal observation, shell command; Isolated command-line task environments with evaluation harness and tests.
  _Feedback / verifier:_ Comprehensive task tests executed in the terminal environment.
  _Recipe signal:_ teacher: Benchmark authors and human solution writers.; generator: Curated terminal task environments with human-written solutions and tests.
  _Audit focus:_ Test suites can be gamed or may miss semantically wrong but test-passing solutions., Environment images, package versions, and network assumptions can drift., Public tasks can contaminate training data for terminal agents.
  _Why it matters:_ It expands Track 06 beyond browser and SWE tasks into terminal environments where replay, environment versions, and tests define the feedback contract.
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
- 🧰 **[ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities](https://arxiv.org/abs/2408.04682)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.04682) · [Code](https://github.com/apple/ToolSandbox) · [Card](../../cards/agents/toolsandbox.md)
  _Data object:_ On-policy conversational trajectory with user messages, tool calls, tool results, state updates, and final response.; process: user message, tool call, arguments; Stateful conversational sandbox with executable tools and built-in user simulator.
  _Feedback / verifier:_ Dynamic milestone and final-state checks over arbitrary trajectories.
  _Recipe signal:_ teacher: Benchmark authors and user simulator.; generator: Scenario and tool-state construction for stateful conversational evaluation.
  _Audit focus:_ Hidden state and scenario seeds must be preserved for reproducible replay., Final checks may miss unsafe or invalid intermediate actions if milestones are incomplete., Tool versions and simulator behavior can drift across runs.
  _Why it matters:_ It makes state, replay, intermediate milestones, and terminal predicates first-class parts of tool-use evaluation.
- 🧰 **[VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks](https://arxiv.org/abs/2401.13649)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2401.13649) · [Code](https://github.com/web-arena-x/visualwebarena) · [Project](https://jykoh.com/vwa) · [Card](../../cards/agents/visualwebarena.md)
  _Data object:_ Browser interaction trajectory with webpage observation, screenshot context, action, and final task outcome.; process: natural language goal, screenshot, page observation; Visual web tasks with screenshots, browser state, and realistic web environments.
  _Feedback / verifier:_ Task-specific success checks over the final web state.
  _Recipe signal:_ teacher: Benchmark authors.; generator: WebArena-style web task construction extended with visual observations.
  _Audit focus:_ Screenshot and webpage state can drift if environments are updated., Visual cues may be unavailable or rendered differently across browsers., Task success checks can miss partially completed or unsafe intermediate behavior.
  _Why it matters:_ Extends WebArena-style evaluation toward visual web interaction, useful when reasoning data includes screenshots and UI state.
- 📦 **[WebLINX: Real-World Website Navigation with Multi-Turn Dialogue](https://arxiv.org/abs/2402.05930)**
  <sub>2024 · arXiv preprint · 📦 data release · 🧰 benchmark · environmental · mixed · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.05930) · [Code](https://github.com/McGill-NLP/weblinx) · [Project](https://mcgill-nlp.github.io/weblinx/) · [Card](../../cards/agents/weblinx.md)
  _Data object:_ Conversational browser trajectory with dialogue context, webpage state, action history, and next action.; process: user instruction, dialogue history, html context; More than 150 real-world websites with recorded navigation demonstrations.
  _Feedback / verifier:_ Imitation/action matching and task-level evaluation over expert navigation demonstrations.
  _Recipe signal:_ teacher: Expert demonstrators.; generator: Human web navigation demonstrations plus retrieval-style HTML element pruning setup.
  _Audit focus:_ Real websites can drift or disappear after demonstrations are collected., Action imitation may reward matching demonstrations rather than robust task completion., Train/test leakage can occur if website templates or navigation paths overlap.
  _Why it matters:_ It is one of the clearest Track 06 examples where the data object is a real web episode with dialogue, observation, action history, and expert behavior.
- 🧰 **[WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks?](https://arxiv.org/abs/2403.07718)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2403.07718) · [Code](https://github.com/ServiceNow/WorkArena) · [Card](../../cards/agents/workarena.md)
  _Data object:_ Browser-agent episode with multimodal observation, browser action, and final task state.; process: task goal, browser observation, screenshot or dom; Remote-hosted ServiceNow environment exposed through BrowserGym.
  _Feedback / verifier:_ Task-specific success checks over the enterprise web application state.
  _Recipe signal:_ teacher: Benchmark authors and enterprise workflow specifications.; generator: ServiceNow task design plus BrowserGym environment construction.
  _Audit focus:_ Hosted enterprise environment can drift or become unavailable., Success checks may depend on hidden application state and configuration., Benchmark feedback can be overfit if tasks or environment templates become public training data.
  _Why it matters:_ It moves web-agent evaluation toward realistic workplace workflows with browser state, action traces, and environment-level success checks.
- 🧰 **[tau-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains](https://arxiv.org/abs/2406.12045)**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.12045) · [Code](https://github.com/sierra-research/tau-bench) · [Card](../../cards/agents/tau_bench.md)
  _Data object:_ Interactive user-agent-tool dialogue with tool calls, tool results, and final task outcome.; process: user goal, agent message, tool call; Real-world-inspired domain APIs, database state, and simulated users.
  _Feedback / verifier:_ End-state database and goal-state comparison under domain policy constraints.
  _Recipe signal:_ teacher: Benchmark authors and simulated users.; generator: Domain task construction with API tools, policy documents, and user simulator.
  _Audit focus:_ User simulator behavior may diverge from real users., pass^k can hide unreliable single-run behavior if not reported carefully., Database seeds, tool semantics, or policy updates can change the terminal predicate.
  _Why it matters:_ It captures long-horizon tool-agent-user interaction where feedback depends on state transitions rather than one-shot answer matching.
- 🧰 **[API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs](https://arxiv.org/abs/2304.08244)**
  <sub>2023 · EMNLP · 🧰 benchmark · 📦 data release · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2304.08244) · [Code](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/api-bank) · [Card](../../cards/agents/api-bank.md)
  _Data object:_ Multi-turn tool-use dialogue with API call, arguments, tool response, and final answer.; process: user instruction, api name, api arguments; Runnable API-bank evaluation system and tool-use task collection.
  _Feedback / verifier:_ API-call validity, tool-response consistency, and task-completion checks.
  _Recipe signal:_ teacher: Benchmark authors and annotators.; generator: Curated API-bank task and dialogue construction.
  _Audit focus:_ API schema or tool behavior may drift after release., A model may learn surface tool-call format without robust API selection., Execution failures can be hidden if only successful trajectories are emphasized.
  _Why it matters:_ It is one of the core early datasets for tool-augmented LLMs, connecting dialogue traces, API calls, and executable evaluation.
- 🧰 **[Gorilla: Large Language Model Connected with Massive APIs](https://arxiv.org/abs/2305.15334)**
  <sub>2023 · arXiv preprint · 🧰 benchmark · 🏗️ construction recipe · programmatic · mixed · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.15334) · [Code](https://github.com/ShishirPatil/gorilla) · [Project](https://gorilla.cs.berkeley.edu/) · [Card](../../cards/agents/gorilla_apibench.md)
  _Data object:_ API call prediction with selected API, arguments, and optional retrieval-grounded documentation context.; process: user query, api documentation, retrieved context; APIBench over Hugging Face, TorchHub, TensorHub, and related API documentation.
  _Feedback / verifier:_ API-call correctness and hallucination checks against the documented API signature.
  _Recipe signal:_ teacher: Benchmark authors and API documentation.; generator: APIBench task construction plus retrieval-augmented finetuning setup.
  _Audit focus:_ API documentation can become stale relative to live APIs., Retrieval quality can dominate apparent tool-use ability., Models may hallucinate plausible APIs or arguments outside the allowed schema.
  _Why it matters:_ It is a key bridge between tool-use data, API documentation, retrieval, and programmatic tool-call verification.
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
- 🧰 **[AMA-Bench: Evaluating Long-Horizon Memory for Agentic Applications](https://arxiv.org/abs/2602.22769)**
  <sub>2026 · arXiv preprint arXiv:2602.22769 · 🧰 benchmark · 🌐 agent environment · mixed · programmatic · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2602.22769) · [Project](https://ama-bench.github.io/)
  _Data object:_ memory QA over agent-environment interaction history; process: state, action, observation; agent memory benchmark over continuous interaction trajectories
  _Feedback / verifier:_ expert-curated QA and rule-based QA for synthetic trajectories
  _Recipe signal:_ generator: real trajectories plus synthetic trajectory generator; filtering rule: expert curation and rule-based QA construction
  _Audit focus:_ Synthetic trajectories may overstate memory-system generalization., Similarity-based retrieval failures may depend on chosen tasks and QA construction.
  _Why it matters:_ P0 Track 06 memory entry: it explicitly frames agent memory as state/action/observation/tool-output trajectories rather than dialogue-only context.
- 🧰 **[GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks](https://arxiv.org/abs/2510.04374)**
  <sub>2025 · arXiv preprint arXiv:2510.04374 · 🧰 benchmark · 🌐 agent environment · judgment required · mixed · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2510.04374) · [Project](https://evals.openai.com)
  _Data object:_ work deliverable judged against expert-quality criteria; process: occupation/task context, deliverable, expert reference or grading service; real-world economically valuable professional tasks
  _Feedback / verifier:_ expert-quality grading and public automated grading service for a gold subset
  _Recipe signal:_ filtering rule: industry-professional task construction and gold subset release
  _Audit focus:_ Gold subset may not represent full private benchmark., Expert grading policies and occupational coverage need audit before training reuse.
  _Why it matters:_ P0 Track 06 workflow entry: it broadens agent evaluation toward economically valuable professional deliverables and scaffolding effects.
- 🧰 **[MCP-Universe: Benchmarking Large Language Models with Real-World Model Context Protocol Servers](https://arxiv.org/abs/2508.14704)**
  <sub>2025 · arXiv preprint arXiv:2508.14704 · 🧰 benchmark · 🛠️ infrastructure · environmental · programmatic · evaluation · agent training · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2508.14704) · [Project](https://mcp-universe.github.io)
  _Data object:_ MCP tool/server interaction episode with final answer or artifact; process: MCP server, tool call, format compliance; real-world Model Context Protocol servers
  _Feedback / verifier:_ format, static, and dynamic execution-based evaluators
  _Recipe signal:_ filtering rule: domain/server selection and evaluator implementation
  _Audit focus:_ Real-time dynamic evaluators can drift., Unknown-tool challenge may conflate documentation quality with agent skill.
  _Why it matters:_ P0 Track 06 infrastructure entry: it evaluates agents through real MCP server interfaces and execution-based evaluators.
- 🧰 **[Multi-SWE-bench: A Multilingual Benchmark for Issue Resolving](https://arxiv.org/abs/2504.02605)**
  <sub>2025 · arXiv preprint arXiv:2504.02605 · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.02605)
  _Data object:_ issue-resolving patch in a repository; process: issue, repository, language; multilingual software repositories and issue-resolving benchmark instances
  _Feedback / verifier:_ tests and expert annotation of benchmark candidates
  _Recipe signal:_ filtering rule: expert annotation from candidate issue-resolving instances
  _Audit focus:_ Language imbalance and test coverage can skew agent comparisons., RL training release may blur train/eval boundaries.
  _Why it matters:_ P0 Track 06 SWE entry: it extends repository-agent tasks beyond Python and releases RL-oriented issue-resolving instances.
- 🧰 **[OdysseyBench: Evaluating LLM Agents on Long-Horizon Complex Office Application Workflows](https://arxiv.org/abs/2508.09124)**
  <sub>2025 · arXiv preprint arXiv:2508.09124 · 🧰 benchmark · 🌐 agent environment · mixed · judgment required · evaluation · agent training · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2508.09124)
  _Data object:_ multi-step office workflow completion over Word, Excel, PDF, Email, and Calendar; process: interaction history, application state, task instruction; office productivity applications and generated long-horizon workflows
  _Feedback / verifier:_ task-specific workflow evaluation over long-horizon histories
  _Recipe signal:_ generator: HomerAgents multi-agent framework; filtering rule: environment exploration, task generation, and dialogue synthesis
  _Audit focus:_ Synthetic office workflows may simplify real workplace dependencies., Task scoring details need deeper artifact audit.
  _Why it matters:_ P0 Track 06 workflow entry: it targets long-horizon office workflows rather than atomic agent tasks.
- 🌐 **[R2E-Gym: Procedural Environments and Hybrid Verifiers for Scaling Open-Weights SWE Agents](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv preprint arXiv:2504.07164 · 🌐 agent environment · 🏗️ construction recipe · programmatic · mixed · agent training · rlvr · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07164) · [Project](https://r2e-gym.github.io/)
  _Data object:_ repository task, generated patch, execution trace, verifier outcome; process: repository, commit, synthetic task; procedural executable gym environments for repository-level code agents
  _Feedback / verifier:_ hybrid execution-based and execution-free verifiers
  _Recipe signal:_ generator: SYNGEN synthetic data curation recipe; filtering rule: test-generation and back-translation from commits
  _Audit focus:_ Generated tests may create false positives., Execution-free verifiers can be biased by style or benchmark artifacts.
  _Why it matters:_ P0 Track 06 environment infrastructure entry: it creates procedurally curated executable SWE-agent environments and verifiers.
- 🧰 **[SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?](https://arxiv.org/abs/2502.12115)**
  <sub>2025 · arXiv preprint arXiv:2502.12115 · 🧰 benchmark · 🌐 agent environment · programmatic · judgment required · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.12115) · [Code](https://github.com/openai/SWELancer-Benchmark)
  _Data object:_ freelance task solution, implementation patch, or managerial proposal decision; process: task description, payout value, repository or proposal context; Dockerized freelance SWE task environment and public SWE-Lancer Diamond split
  _Feedback / verifier:_ end-to-end tests triple-verified by software engineers or original manager choices
  _Recipe signal:_ filtering rule: task curation from freelance work and expert verification
  _Audit focus:_ Private task data and public Diamond split may differ., Managerial-choice labels may encode workplace-specific preferences.
  _Why it matters:_ P0 Track 06 SWE/workflow entry: it grounds software-agent evaluation in economically valued freelance tasks with executable checks.
- 🏗️ **[SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution](https://arxiv.org/abs/2502.18449)**
  <sub>2025 · NeurIPS 2025 / arXiv preprint arXiv:2502.18449 · 🏗️ construction recipe · 🚀 model report · programmatic · mixed · rlvr · agent training · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2502.18449)
  _Data object:_ developer reasoning process and solution or patch-style output; process: code snapshot, change history, issue or pull request; open-source software evolution data and SWE-bench Verified evaluation
  _Feedback / verifier:_ lightweight rule-based reward and benchmark solve rate
  _Recipe signal:_ filtering rule: rule-based reward over open software evolution data
  _Audit focus:_ Similarity rewards can reward superficial patches., Open-source evolution data may overlap with evaluation repositories.
  _Why it matters:_ P0 Track 06 SWE RL entry: it trains software agents from repository evolution traces and rule-based feedback.
- 🏗️ **[SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents](https://arxiv.org/abs/2505.20411)**
  <sub>2025 · NeurIPS 2025 / arXiv preprint arXiv:2505.20411 · 🏗️ construction recipe · 🧰 benchmark · programmatic · environmental · agent training · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.20411) · [Data](https://huggingface.co/datasets/nebius/SWE-rebench) · [Project](https://swe-rebench.com)
  _Data object:_ interactive SWE task with code execution, adaptation, and patch outcome; process: repository, task, environment; Python repository environments collected continuously from GitHub
  _Feedback / verifier:_ task tests and contamination-free benchmark comparison
  _Recipe signal:_ generator: automated task-collection pipeline; filtering rule: continuous extraction and decontamination methodology
  _Audit focus:_ Decontamination claims need independent audit., Automated task extraction may include brittle or underspecified issues.
  _Why it matters:_ P0 Track 06 SWE entry: it builds large-scale interactive repository-agent tasks and a fresh evaluation pipeline.
- 🧰 **[TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks](https://arxiv.org/abs/2412.14161)**
  <sub>2025 · arXiv preprint arXiv:2412.14161 · 🧰 benchmark · 🌐 agent environment · environmental · mixed · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2412.14161) · [Project](https://the-agent-company.com)
  _Data object:_ digital-worker task episode with browsing, code, program, and communication actions; process: task instruction, web action, code/program action; self-contained company-like environment with internal websites and data
  _Feedback / verifier:_ task-specific completion checks in the simulated workplace
  _Recipe signal:_ filtering rule: curated workplace tasks and self-contained environment setup
  _Audit focus:_ Simulated company tasks may not capture real organizational constraints., Long-horizon task success may depend on environment snapshot details.
  _Why it matters:_ P0 Track 06 workplace entry: it defines a company-like environment for long-horizon digital-worker agents.
- 🧰 **[MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://arxiv.org/abs/2410.07095)**
  <sub>2024 · ICLR / arXiv preprint arXiv:2410.07095 · 🧰 benchmark · 🌐 agent environment · programmatic · environmental · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.07095) · [Code](https://github.com/openai/mle-bench/)
  _Data object:_ competition submission, code, trained model, and leaderboard score; process: competition, dataset, agent code/actions; Kaggle-style ML engineering environments
  _Feedback / verifier:_ competition metric and leaderboard-medal thresholds
  _Recipe signal:_ filtering rule: competition curation and human leaderboard baseline comparison
  _Audit focus:_ Public competition data can leak into model pretraining., Leaderboard scores may reward competition-specific tricks over general ML engineering.
  _Why it matters:_ P0 Track 06 ML-engineering entry: it makes model training and experiment execution a long-horizon agent environment.
- 🧰 **[Windows Agent Arena: Evaluating Multi-Modal OS Agents at Scale](https://arxiv.org/abs/2409.08264)**
  <sub>2024 · arXiv preprint arXiv:2409.08264 · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2409.08264) · [Code](https://github.com/microsoft/WindowsAgentArena) · [Project](https://microsoft.github.io/WindowsAgentArena)
  _Data object:_ screen/action/task-completion episode in Windows applications and browsers; process: screen observation, mouse/keyboard action, application state; real Windows OS environment with applications, tools, and web browsers
  _Feedback / verifier:_ task success in the Windows environment
  _Recipe signal:_ filtering rule: adaptation of OSWorld framework and Windows task suite construction
  _Audit focus:_ Cloud/OS image versions can affect reproducibility., Task success may depend on application state and UI drift.
  _Why it matters:_ P0 Track 06 environment infrastructure entry: it provides a reproducible Windows OS benchmark for multimodal computer-use agents.
- 🧰 **[WorkArena++: Towards Compositional Planning and Reasoning-based Common Knowledge Work Tasks](https://arxiv.org/abs/2407.05291)**
  <sub>2024 · arXiv preprint arXiv:2407.05291 · 🧰 benchmark · 🌐 agent environment · environmental · mixed · evaluation · sft · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2407.05291) · [Code](https://github.com/ServiceNow/WorkArena)
  _Data object:_ observation/action trace plus workflow task outcome; process: web observation, agent action, workflow state; ServiceNow-style enterprise workflow environment
  _Feedback / verifier:_ workflow task success and generated ground-truth traces
  _Recipe signal:_ filtering rule: compositional task design and generated ground-truth observation/action traces
  _Audit focus:_ Generated traces may simplify workflows., Hosted enterprise environments can drift across versions.
  _Why it matters:_ P0 Track 06 workflow entry: it extends WorkArena with compositional planning tasks and trace generation for agent training.
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
- 🚀 **[DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](https://arxiv.org/abs/2504.21801)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · rlvr · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.21801) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B) · [Card](../../cards/recipes/deepseek-prover-v2.md)
  _Data object:_ subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline.
  _Feedback / verifier:_ Lean verification and RL reward over formal proof success.
  _Recipe signal:_ teacher: DeepSeek-V3-style decomposition and formal proof feedback.; generator: recursive pipeline creates subgoals and proof attempts.
  _Audit focus:_ Subgoal decomposition can introduce false intermediate claims., Formal and informal reasoning scores are not directly comparable., Large-model teacher lineage can hide data provenance.
  _Why it matters:_ It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification.
- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧰 benchmark · judgment required · environmental · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts) · [Card](../../cards/failures/leaky-thoughts.md)
  _Data object:_ internal reasoning trace, final answer, and leakage/extraction outcome.; process: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.; personal-agent evaluation setting with hidden or internal reasoning traces.
  _Feedback / verifier:_ extraction probes and agentic evaluations.
  _Recipe signal:_ teacher: not applicable; this is an audit benchmark.; generator: models produce reasoning traces under normal or injected prompts.
  _Audit focus:_ Hiding thoughts from users does not make them safe., Trace logging can create a new privacy dataset., Utility improvements from more reasoning may worsen leakage risk.
  _Why it matters:_ It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.
- 📦 **[OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.04178) · [Code](https://github.com/open-thoughts/open-thoughts) · [HF](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M) · [Card](../../cards/releases/openthoughts.md)
  _Data object:_ reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus
  _Feedback / verifier:_ filters, benchmark feedback, and recipe ablations
  _Recipe signal:_ prompt sourcing; trace writing; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance.
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
- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · programmatic · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [Card](../../cards/verifiers/prm800k.md)
  _Data object:_ step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces
  _Feedback / verifier:_ process reward model trained from step labels
  _Recipe signal:_ reward verifier layer; release audit; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.
- 🏗️ **[Orca: Progressive learning from complex explanation traces of GPT-4](https://arxiv.org/abs/2306.02707)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 🚀 model report · judgment required · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.02707) · [Project](https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/) · [Card](../../cards/recipes/orca.md)
  _Data object:_ instruction response with detailed explanation, intermediate reasoning, and final answer.; process: prompt source, teacher identity, explanation trace, task type, response, evaluation benchmark.; offline synthetic-data distillation and evaluation pipeline.
  _Feedback / verifier:_ downstream reasoning, exam, and benchmark evaluation rather than a single automatic verifier.
  _Recipe signal:_ teacher: large foundation models that produce explanation traces and stepwise guidance.; generator: teacher-assisted data-generation pipeline over diverse instructions.
  _Audit focus:_ Students can learn teacher style without robust reasoning., Synthetic traces can include teacher errors., Closed teacher data makes lineage hard to audit.
  _Why it matters:_ It is an early and influential reasoning-distillation recipe: the reusable object is teacher-assisted explanation data plus careful evaluation against style-only imitation.
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
- 🏗️ **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.14465) · [Card](../../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ trace writing; self play anchor; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering.
- 🧭 **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · unknown · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2201.11903) · [Card](../../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md)
  _Data object:_ answer level
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ trace writing; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets.
- 📦 **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · programmatic · rlvr · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.17387) · [Card](../../cards/releases/big_math.md)
  _Data object:_ math problem, answer, and verification signal; process: problem, answer, verification label; offline math verifier substrate
  _Feedback / verifier:_ answer-level math verifier
  _Recipe signal:_ prompt sourcing; reward verifier layer; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935) · [Card](../../cards/verifiers/math_shepherd.md)
  _Data object:_ step-level rollout-value labels; process: reasoning step, rollout result, process reward score; offline math reasoning traces
  _Feedback / verifier:_ rollout-derived process reward signal
  _Recipe signal:_ generator: model rollouts from intermediate reasoning steps; filtering rule: rollout success rate converted to step reward
  _Audit focus:_ rollout policy strength can leak into labels, step rewards may favor locally plausible continuations, generated solutions can inherit base-model shortcuts
  _Why it matters:_ It is the clearest bridge between final-answer verifiers and step-level PRM data: the label is not a human judgment but a rollout-derived estimate of whether a partial step can still reach the right answer.
- 🧯 **[How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior](https://arxiv.org/abs/2505.16067)**
  <sub>2025 · arXiv preprint arXiv:2505.16067 · 🧯 audit failure · 🌐 agent environment · mixed · evaluation · audit · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.16067)
  _Data object:_ agent output influenced by retrieved experience records; process: task input, retrieved memory, agent output; LLM agent memory bank across repeated task executions
  _Feedback / verifier:_ future task performance and controlled memory-management comparisons
  _Recipe signal:_ filtering rule: controlled memory addition/deletion and experience-quality analysis
  _Audit focus:_ Bad memories can propagate errors into future agent actions., Evaluation depends on task similarity and memory retrieval policy.
  _Why it matters:_ P0 Track 06 memory entry: it studies how stored experience traces affect future agent behavior and error propagation.
- 🛠️ **[Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413)**
  <sub>2025 · arXiv preprint arXiv:2504.19413 · 🛠️ infrastructure · 🌐 agent environment · mixed · judgment required · agent training · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.19413)
  _Data object:_ response generated with extracted, consolidated, and retrieved memories; process: conversation history, memory extraction, memory consolidation; long-term conversational memory architecture
  _Feedback / verifier:_ LOCOMO-style QA and LLM-as-a-judge metrics reported by the paper
  _Recipe signal:_ filtering rule: memory extraction, graph memory, and retrieval policy
  _Audit focus:_ LLM-as-judge scoring can hide memory grounding failures., Production claims need artifact and license audit before reuse.
  _Why it matters:_ P0 Track 06 memory entry: it gives a production-oriented memory architecture for persistent agent interaction.
- 🛠️ **[MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560)**
  <sub>2023 · arXiv preprint arXiv:2310.08560 · 🛠️ infrastructure · 🌐 agent environment · mixed · agent training · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2310.08560) · [Code](https://research.memgpt.ai) · [Project](https://memgpt.ai)
  _Data object:_ agent response with virtual-context memory operations and interrupts; process: working context, archival memory, recall memory; virtual context manager for LLM agents
  _Feedback / verifier:_ document-analysis and multi-session chat evaluation
  _Recipe signal:_ filtering rule: virtual context paging between memory tiers
  _Audit focus:_ Memory operation traces may not be released in reusable form., Evaluation may not isolate memory quality from base-model capability.
  _Why it matters:_ P0 Track 06 historical memory anchor: it introduced an OS-inspired memory/control-flow design for persistent LLM agents.
- 🪜 **[Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](https://arxiv.org/abs/2406.18629)**
  <sub>2024 · arXiv · 🪜 process supervision · 🏗️ construction recipe · mixed · process supervision · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2406.18629)
  _Data object:_ step-wise preference pairs; process: reasoning step, preferred continuation, rejected continuation; offline long-chain reasoning traces
  _Feedback / verifier:_ step-wise preference optimization objective
  _Recipe signal:_ generator: multi-step reasoning policy; filtering rule: step-wise preferences over reasoning continuations
  _Audit focus:_ local step preference may not align with final correctness, preference construction can hide teacher or scorer bias, long-chain traces can overfit style instead of reasoning validity
  _Why it matters:_ It helps readers see how preference optimization becomes a process-level data problem when the chosen/rejected object is an intermediate continuation rather than a whole answer.
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
- 🧭 **[AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131)**
  <sub>2025 · arXiv preprint arXiv:2506.13131 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.13131)
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
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · sft · rlvr · L0_seeded</sub>
  [Code](https://github.com/QwenLM/Qwen3-Coder) · [Project](https://qwenlm.github.io/blog/qwen3-coder/) · [Card](../../cards/recipes/qwen3_coder.md)
  _Data object:_ code solution, tool-call, or agent trajectory; process: code answer, tool call, execution result; code execution and agent task environments
  _Feedback / verifier:_ unit tests, execution feedback, and agent task success signals
  _Recipe signal:_ frontier pipeline; optimizer scaffold; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
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
- 📄 **BFCL v3**
  <sub>2024 · unknown · unknown · unknown · L0_seeded</sub>
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
- 📄 **Mind2Web: Towards a generalist agent for the web**
  <sub>2023 · NeurIPS · unknown · unknown · L0_seeded</sub>
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
- 📄 **HOList: An environment for machine learning of higher-order logic theorem proving**
  <sub>2019 · ICML · unknown · unknown · L0_seeded</sub>
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

## 8. Related Cards

- [Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces](../../cards/agents/terminal_bench.md)
- [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](../../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
- [AbstentionBench](../../cards/benchmarks/abstentionbench.md)
- [Aegis2.0](../../cards/verifiers/aegis2.md)
- [Big-Math-RL-Verified](../../cards/releases/big_math.md)
- [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](../../cards/recipes/deepseek-prover-v2.md)
- [Leaky Thoughts](../../cards/failures/leaky-thoughts.md)
- [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](../../cards/recipes/minimax_m1.md)
- [OpenThoughts: Data recipes for reasoning models](../../cards/releases/openthoughts.md)
- [PRMBench: A fine-grained and challenging benchmark for process-level reward models](../../cards/verifiers/prmbench.md)
- [R2E-Gym](../../cards/agents/r2e_gym.md)
- [SWE-Gym](../../cards/agents/swe_gym.md)
- [APIGen: Automated Pipeline for Generating Verifiable and Diverse Function-Calling Datasets](../../cards/agents/apigen.md)
- [AndroidWorld: A dynamic benchmarking environment for autonomous agents](../../cards/agents/androidworld.md)
- [AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](../../cards/agents/appworld.md)
- [BrowserGym: A gym environment for web agents](../../cards/agents/browsergym.md)
- [DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](../../cards/recipes/deepseek-prover-v1-5.md)
- [DeepSeek-Prover: Advancing theorem proving in LLMs](../../cards/recipes/deepseek-prover.md)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
