# 🔁 Rollout, Search, and Test-Time Trace Data

> Multiple rollouts, search trees, best-of-N samples, self-consistency traces, MCTS records, selected/rejected candidates, and test-time compute logs.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=rollout_search_test_time_trace_data&mode=find_papers)
> Try: `What should I read first for 🔁 Rollout / Search / TTC Trace?`
> Try: `Compare the data objects and verifier types in 🔁 Rollout / Search / TTC Trace.`
> Try: `Generate an audit checklist for 🔁 Rollout / Search / TTC Trace.`

## 1. What This Track Studies

Use this track when the important data is not one answer but a set of sampled attempts, search paths, selector scores, or inference-budget traces.

A growing part of reasoning data is produced by search. A model samples many attempts, a verifier or value function scores them, and the system keeps accepted candidates, sometimes with rejected traces, budgets, tree nodes, or pass-rate bands. These records connect data construction, process supervision, RLVR, and test-time compute.

This track exists because search traces are often hidden inside other categories. If a paper relies on best-of-N, self-consistency, MCTS, rejection sampling, long-to-short reasoning, or repeated sampling, contributors should record the rollout budget and selector, not just the final chosen answer.

For curation, the most important audit question is attribution: did performance improve because of better data, more samples, a stronger verifier, a different optimizer, or a larger inference budget?

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🎲 Multiple rollouts / best-of-N | sets of sampled attempts and selected accepted answers | only accepted traces are visible |
| 🌳 Search trees / MCTS | tree search, MCTS, verifier-guided search, and path selection | tree policy or value model is hidden |
| 🔎 Rejection sampling traces | accepted and rejected candidates produced during filtering | rejected examples are not released |
| 🧠 Self-consistency / repeated sampling | vote-based or agreement-based reasoning from repeated samples | sampling budget is not comparable |
| ⏱️ Test-time compute logs | thinking budgets, inference-time scaling, and runtime search traces | training and inference budget effects are conflated |
| ✂️ Long2short / distill-from-search | using long search traces to train shorter or cheaper behavior | teacher search artifacts become hidden data lineage |

### Contents

- [🎲 Multiple rollouts / best-of-N](#multiple-rollouts-best-of-n)
- [🌳 Search trees / MCTS](#search-trees-mcts)
- [🔎 Rejection sampling traces](#rejection-sampling-traces)
- [🧠 Self-consistency / repeated sampling](#self-consistency-repeated-sampling)
- [⏱️ Test-time compute logs](#test-time-compute-logs)
- [✂️ Long2short / distill-from-search](#long2short-distill-from-search)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168) | 2024 | [Paper](https://arxiv.org/abs/2407.13168) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/scicode-bench/SciCode) · [Project](https://scicode-bench.github.io/) · [Card](../../cards/benchmarks/scicode.md) | code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness. | test cases and scientist-curated gold solutions. | It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests. |
| [LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626) | 2023 | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md) | Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories. | Lean checker and environment feedback. | It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record. |
| [Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511) | 2023 | [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/) · [Card](../../cards/recipes/self-rag.md) | generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens. | critique signals and task-specific factuality/answer-quality evaluation. | It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations. |
| [Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374) | 2021 | [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../../cards/benchmarks/evaluating-large-language-models-trained-on-code.md) | executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite. | HumanEval tests and pass@k evaluation. | It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions. |
| [HumanEval: Hand-Written Evaluation Set](https://arxiv.org/abs/2107.03374) | 2021 | [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../../cards/benchmarks/humaneval-hand-written-evaluation-set.md) | Python function completion; process: prompt, canonical solution, unit tests; Python execution harness | unit tests | It made unit-test execution a standard verifier for code reasoning, pass@k reporting, and later code-data filtering recipes. |
| [Measuring coding challenge competence with APPS](https://arxiv.org/abs/2105.09938) | 2021 | [Paper](https://arxiv.org/abs/2105.09938) · [OpenReview](https://openreview.net/forum?id=sD93GOzH3i5) · [Code](https://github.com/hendrycks/apps) · [Card](../../cards/benchmarks/apps.md) | Python code submission evaluated against test cases.; process: difficulty, prompt, starter code where available, generated solution, public/hidden test outcomes.; offline programming benchmark with executable Python tests. | unit-test pass/fail signal. | It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome. |
| [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075) | 2025 | [Paper](https://arxiv.org/abs/2507.09075) · [Card](../../cards/releases/opencodereasoning_ii.md) | question-solution-critique triple; process: solution, critique, language/runtime label; coding benchmark / compiler substrate | tests and critique model signals | Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique. |
| [SWE-Gym](https://arxiv.org/abs/2412.21139) | 2025 | [Paper](https://arxiv.org/abs/2412.21139) · [Card](../../cards/agents/swe_gym.md) | full episode; state action level | environmental, programmatic | Repository-scale training environment showing substrate as data. |
| [ReST-MCTS*: LLM Self-Training via Process Reward Guided Tree Search](https://arxiv.org/abs/2406.03816) | 2024 | [Paper](https://arxiv.org/abs/2406.03816) · [Venue](https://papers.nips.cc/paper_files/paper/2024/hash/76ec4dc30e9faaf0e4b6093eaa377218-Abstract-Conference.html) · [DOI](https://doi.org/10.48550/arXiv.2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS) · [Data](https://huggingface.co/datasets/zd21/ReST-MCTS_Llama3-8b-Instruct_ReST-MCTS_Policy_1st) · [HF](https://huggingface.co/datasets/zd21/ReST-MCTS-Llama3-8b-Instruct-PRM-1st) · [Project](https://rest-mcts.github.io/) · [Card](../../cards/recipes/rest-mcts.md) | Question with final answer, searched step-by-step reasoning trace, selected policy-training solution, and inferred per-step value/process-reward labels; PRM releases include positive and negative samples.; process: question/content, optional final answer, partial reasoning state / tree node; Offline MCTS* reasoning tree and iterative self-training pipeline. | Oracle final-answer correctness plus an inferred/learned process reward model used to guide search and provide value targets. | It is valuable for the Data Construction track because it separates input answer-keyed questions, tree-search trace generation, inferred process rewards, policy data selection, and reward-model training instead of treating benchmark gains as data quality proof. |
| [Leaky Thoughts](https://arxiv.org/abs/2506.15674) | 2025 | [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts) · [Card](../../cards/failures/leaky-thoughts.md) | internal reasoning trace, final answer, and leakage/extraction outcome.; process: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.; personal-agent evaluation setting with hidden or internal reasoning traces. | extraction probes and agentic evaluations. | It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface. |

## 5. Full Paper List

### <a id="multiple-rollouts-best-of-n"></a>🎲 Multiple rollouts / best-of-N

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

### <a id="search-trees-mcts"></a>🌳 Search trees / MCTS

- 🏗️ **[DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](https://arxiv.org/abs/2408.08152)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🚀 model report · programmatic · environmental · rlvr · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2408.08152) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL) · [Card](../../cards/recipes/deepseek-prover-v1-5.md)
  _Data object:_ Lean proof script, proof-search path, feedback signal, and verification result.; process: theorem, proof attempt, Lean feedback, reward, search node, final proof, pass/fail result.; Lean 4 proof assistant plus RMaxTS search procedure.
  _Feedback / verifier:_ proof assistant feedback used for RL and search selection.
  _Recipe signal:_ teacher: Lean checker feedback and prior formal-proof dataset.; generator: model samples proof candidates and tree-search paths.
  _Audit focus:_ Search budget can dominate model quality., Checker feedback is sparse and version-dependent., RL can optimize toward easy theorem families.
  _Why it matters:_ It shows how proof-assistant feedback can become both a reward signal and a search guide for formal mathematical reasoning.
- 📦 **[ReST-MCTS*: LLM Self-Training via Process Reward Guided Tree Search](https://arxiv.org/abs/2406.03816)**
  <sub>2024 · NeurIPS · 📦 data release · 🪜 process supervision · programmatic · mixed · sft · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.03816) · [Venue](https://papers.nips.cc/paper_files/paper/2024/hash/76ec4dc30e9faaf0e4b6093eaa377218-Abstract-Conference.html) · [DOI](https://doi.org/10.48550/arXiv.2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS) · [Data](https://huggingface.co/datasets/zd21/ReST-MCTS_Llama3-8b-Instruct_ReST-MCTS_Policy_1st) · [HF](https://huggingface.co/datasets/zd21/ReST-MCTS-Llama3-8b-Instruct-PRM-1st) · [Project](https://rest-mcts.github.io/) · [Card](../../cards/recipes/rest-mcts.md)
  _Data object:_ Question with final answer, searched step-by-step reasoning trace, selected policy-training solution, and inferred per-step value/process-reward labels; PRM releases include positive and negative samples.; process: question/content, optional final answer, partial reasoning state / tree node; Offline MCTS* reasoning tree and iterative self-training pipeline.
  _Feedback / verifier:_ Oracle final-answer correctness plus an inferred/learned process reward model used to guide search and provide value targets.
  _Recipe signal:_ teacher: No single teacher model; oracle final answers and tree-search-estimated step values provide supervision.; generator: Policy rollouts expanded by MCTS* and guided by a process reward/value model.
  _Audit focus:_ Final-answer correctness can still allow flawed or spurious intermediate reasoning., Process reward estimates are search-policy-specific and can encode tree-search artifacts., Accepted traces can hide rejected branches, failed candidates, and ambiguous paths.
  _Why it matters:_ It is valuable for the Data Construction track because it separates input answer-keyed questions, tree-search trace generation, inferred process rewards, policy data selection, and reward-model training instead of treating benchmark gains as data quality proof.

### <a id="rejection-sampling-traces"></a>🔎 Rejection sampling traces

- 🧰 **[Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)**
  <sub>2024 · OpenAI / SWE-bench report · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://openai.com/index/introducing-swe-bench-verified/) · [Venue](https://www.swebench.com/verified.html) · [Code](https://github.com/swe-bench/SWE-bench) · [Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified) · [Card](../../cards/agents/swe-bench-verified.md)
  _Data object:_ patch diff applied to a repository plus test execution results.; process: repository, issue, base commit, patch, FAIL TO PASS tests, PASS TO PASS tests, human validation notes.; Dockerized repository checkout and unit-test harness.
  _Feedback / verifier:_ post-patch unit tests plus human filtering of task validity.
  _Recipe signal:_ teacher: resolved GitHub pull requests and human validators.; generator: dataset curation filters original SWE-bench instances for clarity, solvability, and test validity.
  _Audit focus:_ Leaderboard scores can depend strongly on scaffold design., Tests may not cover all acceptable patches., Public benchmark tasks can become training targets over time.
  _Why it matters:_ It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.

### <a id="self-consistency-repeated-sampling"></a>🧠 Self-consistency / repeated sampling

- 🚀 **[DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · sft · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [Code](https://github.com/deepseek-ai/deepseek-math) · [HF](https://huggingface.co/collections/deepseek-ai/deepseek-math) · [Card](../../cards/recipes/deepseekmath.md)
  _Data object:_ natural-language mathematical solution plus final answer, sometimes sampled multiple times.; process: data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.; offline math training and benchmark evaluation pipeline.
  _Feedback / verifier:_ answer correctness and GRPO-style reward over math tasks.
  _Recipe signal:_ teacher: math corpora, supervised examples, and verifiable benchmark answers.; generator: model produces solutions during SFT, RL, and self-consistency sampling.
  _Audit focus:_ Self-consistency can hide weak single-sample accuracy., Web-data mining may import benchmark leakage., Final-answer rewards can miss flawed derivations.
  _Why it matters:_ It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.
- 📈 **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 📈 scaling study · 🧭 survey background · mixed · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw) · [Card](../../cards/recipes/self-consistency-chain-of-thought.md)
  _Data object:_ multiple rationales and final answers for the same prompt.; process: sampling temperature, number of paths, answer extraction, aggregation rule.; benchmark prompting setup.
  _Feedback / verifier:_ majority or marginalization over sampled answers.
  _Recipe signal:_ teacher: few-shot chain-of-thought exemplars.; generator: model samples many reasoning paths.
  _Audit focus:_ More samples can amplify benchmark-specific shortcuts., Aggregation does not guarantee step faithfulness., Unmatched inference budgets can make methods look better than they are.
  _Why it matters:_ It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.
- 🧭 **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2407.21787)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="test-time-compute-logs"></a>⏱️ Test-time compute logs

- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧰 benchmark · judgment required · environmental · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts) · [Card](../../cards/failures/leaky-thoughts.md)
  _Data object:_ internal reasoning trace, final answer, and leakage/extraction outcome.; process: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.; personal-agent evaluation setting with hidden or internal reasoning traces.
  _Feedback / verifier:_ extraction probes and agentic evaluations.
  _Recipe signal:_ teacher: not applicable; this is an audit benchmark.; generator: models produce reasoning traces under normal or injected prompts.
  _Audit focus:_ Hiding thoughts from users does not make them safe., Trace logging can create a new privacy dataset., Utility improvements from more reasoning may worsen leakage risk.
  _Why it matters:_ It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.
- 📈 **[The Art of Scaling Reinforcement Learning Compute for LLMs](https://arxiv.org/abs/2510.13786)**
  <sub>2025 · arXiv · 📈 scaling study · 🏗️ construction recipe · mixed · rlvr · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2510.13786) · [OpenReview](https://openreview.net/forum?id=FMjeC9Msws) · [Card](../../cards/recipes/the-art-of-scaling-rl-compute.md)
  _Data object:_ training runs, reward outcomes, validation curves, and ablation results.; process: loss aggregation, normalization, curriculum, off-policy choice, compute budget, asymptote, efficiency.; large-scale RL training experiments.
  _Feedback / verifier:_ compute-performance curves and recipe ablations.
  _Recipe signal:_ teacher: reward signal and validation tasks.; generator: RL policies under ablated recipes.
  _Audit focus:_ Compute-heavy studies can be hard to reproduce., Best-practice recipes may depend on task/reward families., Scaling curves can encourage overconfidence if validation tasks are narrow.
  _Why it matters:_ It gives atlas readers a framework for judging RL recipe claims: some choices move the ceiling, while others mostly change how cheaply the run reaches it.
- 🏗️ **[s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📈 scaling study · mixed · sft · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.19393) · [Card](../../cards/releases/s1.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; scaling report; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a useful counterpoint to massive-data recipes: careful small-set curation plus inference-budget control can materially change reasoning performance.
- 🧰 **[LiveCodeBench: Holistic and contamination-free evaluation of large language models for code](https://arxiv.org/abs/2403.07974)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2403.07974) · [OpenReview](https://openreview.net/forum?id=chfJJYC3iL) · [Code](https://github.com/livecodebench/livecodebench) · [Project](https://livecodebench.github.io/) · [Card](../../cards/benchmarks/livecodebench.md)
  _Data object:_ program submission or code-related output evaluated by tests or task-specific checks.; process: problem release date, platform, prompt, generated code, tests, pass/fail result, evaluation window.; code execution and benchmark leaderboard infrastructure.
  _Feedback / verifier:_ programmatic tests and task-specific correctness checks.
  _Recipe signal:_ teacher: contest tests and problem statements provide correctness signal.; generator: models produce code or code-related predictions.
  _Audit focus:_ Live benchmarks still become stale after release., Execution settings can affect pass/fail outcomes., Public leaderboard feedback can shape future training.
  _Why it matters:_ It gives code-reasoning evaluation a moving-time-window design, making it harder to confuse memorized public problems with genuine coding capability.
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
- 🧰 **[SciCode: A benchmark for scientific code generation and reasoning](https://arxiv.org/abs/2407.13168)**
  <sub>2024 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2407.13168) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html) · [Code](https://github.com/scicode-bench/SciCode) · [Project](https://scicode-bench.github.io/) · [Card](../../cards/benchmarks/scicode.md)
  _Data object:_ code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness.
  _Feedback / verifier:_ test cases and scientist-curated gold solutions.
  _Recipe signal:_ teacher: scientists and AI researchers curate problems, decompositions, solutions, and tests.; generator: models produce code for subproblems and main problems.
  _Audit focus:_ Models can pass narrow tests without scientific validity., Domain background can leak solution hints., Execution environments can change numerical results.
  _Why it matters:_ It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests.
- 🌐 **[ReAct: Synergizing reasoning and acting in language models](https://arxiv.org/abs/2210.03629)**
  <sub>2023 · ICLR · 🌐 agent environment · 🏗️ construction recipe · environmental · mixed · agent training · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2210.03629) · [OpenReview](https://openreview.net/forum?id=WE_vluYUL-X) · [Code](https://github.com/ysymyth/ReAct) · [Project](https://react-lm.github.io/) · [Card](../../cards/agents/react.md)
  _Data object:_ trajectory containing reasoning note, action, observation, and final answer or task completion.; process: task state, action string, observation, reasoning note, final answer, success indicator.; Wikipedia API, embodied/web shopping environments, and task-specific simulators.
  _Feedback / verifier:_ environment success, answer correctness, or task-specific evaluation.
  _Recipe signal:_ teacher: few-shot trajectory exemplars demonstrate reasoning-action format.; generator: model samples interleaved reasoning and action steps.
  _Audit focus:_ Reasoning notes can rationalize bad actions., Environment wrappers can change task difficulty., Few-shot exemplars may encode brittle action formats.
  _Why it matters:_ It is a foundational agent-data pattern: the training/evaluation record is not just an answer but a trajectory of thought-like notes, actions, observations, and final response.
- 🧰 **[Measuring coding challenge competence with APPS](https://arxiv.org/abs/2105.09938)**
  <sub>2021 · NeurIPS · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2105.09938) · [OpenReview](https://openreview.net/forum?id=sD93GOzH3i5) · [Code](https://github.com/hendrycks/apps) · [Card](../../cards/benchmarks/apps.md)
  _Data object:_ Python code submission evaluated against test cases.; process: difficulty, prompt, starter code where available, generated solution, public/hidden test outcomes.; offline programming benchmark with executable Python tests.
  _Feedback / verifier:_ unit-test pass/fail signal.
  _Recipe signal:_ teacher: benchmark tests and reference solutions provide supervision surface.; generator: models produce candidate programs from problem text.
  _Audit focus:_ Programs can overfit weak tests., Syntax validity is not the same as functional correctness., Contamination can inflate code benchmark scores.
  _Why it matters:_ It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome.
- 🚀 **[Kimi K1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599)**
  <sub>2025 · arXiv · 🚀 model report · 📈 scaling study · mixed · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.12599) · [Card](../../cards/recipes/kimi_k15.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; scaling report; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Frontier report used for long-context RL and scaling discussion.
- 🚀 **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · mixed · programmatic · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.13585) · [Code](https://github.com/MiniMax-AI/MiniMax-M1) · [Card](../../cards/recipes/minimax_m1.md)
  _Data object:_ reasoning output, code/tool result, or agent task output; process: reasoning output, benchmark result, thinking budget; math, code, SWE, tool-use, and long-context evaluation surfaces
  _Feedback / verifier:_ programmatic, environment, and benchmark feedback
  _Recipe signal:_ frontier pipeline; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
- 📦 **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · programmatic · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.09075) · [Card](../../cards/releases/opencodereasoning_ii.md)
  _Data object:_ question-solution-critique triple; process: solution, critique, language/runtime label; coding benchmark / compiler substrate
  _Feedback / verifier:_ tests and critique model signals
  _Recipe signal:_ trace writing; optimizer scaffold; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- 🏗️ **[TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084)**
  <sub>2025 · arXiv preprint arXiv:2504.16084 · 🏗️ construction recipe · 📈 scaling study · mixed · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16084) · [Card](../../cards/recipes/ttrl.md)
  _Data object:_ candidate response with reward/adaptation signal; process: unlabeled input, rollout, reward signal; test-time task distribution
  _Feedback / verifier:_ task-specific or learned reward used during adaptation
  _Recipe signal:_ optimizer scaffold; reward verifier layer; scaling report
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.
- 🪜 **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.06592) · [Card](../../cards/verifiers/omegaprm.md)
  _Data object:_ process supervision annotations; process: partial reasoning prefix, first-error signal, positive/negative step examples; offline math search tree
  _Feedback / verifier:_ automated process reward signal
  _Recipe signal:_ reward verifier layer; optimizer scaffold; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- 🧭 **[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216)**
  <sub>2024 · arXiv · 🧭 survey background · 📈 scaling study · mixed · programmatic · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216)
  _Data object:_ technical survey comparing RLHF and RLVR policy-gradient style post-training methods.; process: prompt sampling, response sampling, reward source; LLM post-training algorithms and reasoning tasks such as math and coding.
  _Feedback / verifier:_ learned preference rewards, verifiable rewards, and policy-gradient objectives.
  _Recipe signal:_ teacher: literature covering human feedback, verifiable rewards, and post-training optimization.; generator: technical survey and unified policy-gradient framework
  _Audit focus:_ Method comparisons can mix data effects with optimizer and sampling-budget effects., RLHF and RLVR rewards are often discussed together despite different verification contracts., Implementation details can dominate reported gains if not separated from data quality.
  _Why it matters:_ It connects classic RLHF and reward modeling to reasoning-oriented RLVR, helping readers avoid conflating human preference rewards with programmatic or verifiable rewards.
- 🪜 **[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · mixed · process supervision · preference learning · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR)
  _Data object:_ step-level preference data with process scores and explanations; process: retrieval context, reasoning step, process reward score; RAG reasoning pipeline
  _Feedback / verifier:_ process reward model plus process explanation model
  _Recipe signal:_ generator: MCTS-guided retrieval-augmented rollouts; filtering rule: trustworthy process rewarding and iterative preference optimization
  _Audit focus:_ PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search
  _Why it matters:_ It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.

### <a id="long2short-distill-from-search"></a>✂️ Long2short / distill-from-search

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="other-related-work"></a>Other related work

- 📦 **[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 📦 data release · 🧰 benchmark · environmental · programmatic · agent training · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../../cards/agents/leandojo.md)
  _Data object:_ Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.
  _Feedback / verifier:_ Lean checker and environment feedback.
  _Recipe signal:_ teacher: Lean math-library proofs and proof-assistant feedback.; generator: data-extraction toolkit traces repositories and prover generates tactics.
  _Audit focus:_ A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
- 🏗️ **[Self-RAG: Learning to retrieve, generate, and critique through self-reflection](https://arxiv.org/abs/2310.11511)**
  <sub>2023 · ICLR · 🏗️ construction recipe · 📦 data release · mixed · judgment required · sft · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.11511) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [Code](https://github.com/akariasai/self-rag) · [Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [Project](https://selfrag.github.io/) · [Card](../../cards/recipes/self-rag.md)
  _Data object:_ generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens.
  _Feedback / verifier:_ critique signals and task-specific factuality/answer-quality evaluation.
  _Recipe signal:_ teacher: critic and retrieval-supervision signals derived from task data and evidence checks.; generator: model learns special reflection tokens for retrieval and critique behavior.
  _Audit focus:_ A model can retrieve irrelevant passages confidently., Critique tokens can become style markers without true verification., Retriever choice changes benchmark conclusions.
  _Why it matters:_ It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations.
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
- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935) · [Card](../../cards/verifiers/math_shepherd.md)
  _Data object:_ step-level rollout-value labels; process: reasoning step, rollout result, process reward score; offline math reasoning traces
  _Feedback / verifier:_ rollout-derived process reward signal
  _Recipe signal:_ generator: model rollouts from intermediate reasoning steps; filtering rule: rollout success rate converted to step reward
  _Audit focus:_ rollout policy strength can leak into labels, step rewards may favor locally plausible continuations, generated solutions can inherit base-model shortcuts
  _Why it matters:_ It is the clearest bridge between final-answer verifiers and step-level PRM data: the label is not a human judgment but a rollout-derived estimate of whether a partial step can still reach the right answer.
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
- 🧰 **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.13854) · [Card](../../cards/agents/webarena.md)
  _Data object:_ environment interaction trajectory; process: observation, action, state; browser-accessible web environment
  _Feedback / verifier:_ task-specific success evaluator
  _Recipe signal:_ search substrate; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.
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

### ⚠️ Needs search or metadata

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
  [Paper](https://openreview.net/forum?id=D6PwC6Xogv) · [arXiv](https://arxiv.org/abs/2505.16322) · [Code](https://github.com/reiss-koh/AdaSTaR)
  _Data object:_ A self-generated chain of thought and predicted final answer conditioned on fixed few-shot CoT exemplars; answers are checked against ground truth.; process: observation id, query, ground truth answer; Iterative accumulating STaR/RFT with a hierarchical min-heap over observations and a fresh accepted-CoT set each iteration.
  _Feedback / verifier:_ Rule-based outcome verifier equals one when predicted answer matches ground truth; the most recent K-sample acceptance rate becomes the observation's cached win statistic.
  _Recipe signal:_ teacher: The current model self-generates traces. GPT-4o is used only for a diagnostic false-positive audit, not training verification.; generator: The current iteration's accumulating STaR policy model.
  _Audit focus:_ Outcome verification admits flawed CoTs with correct final answers., Cached win rate is measured only at last visit and can become stale as model parameters and prompt difficulty drift., Acceptance rate conflates reasoning difficulty with answer parsing, prompt format, few-shot compatibility and label noise.
  _Why it matters:_ It turns prompt-level acceptance history into a data-allocation policy and reports early-stopped compute savings while exposing stale difficulty, outcome-only false positives and unreleased rollout risks.
- 🏗️ **[FastMCTS: A Simple Sampling Strategy for Data Synthesis](https://aclanthology.org/2025.acl-long.1190/)**
  <sub>2025 · ACL 2025 · 🏗️ construction recipe · 🪜 process supervision · mixed · sft · preference learning · L4_carded</sub>
  [Paper](https://aclanthology.org/2025.acl-long.1190/) · [arXiv](https://arxiv.org/abs/2502.11476) · [DOI](https://doi.org/10.18653/v1/2025.acl-long.1190) · [Code](https://github.com/FlyingDutchman26/FastMCTS) · [Card](../../cards/recipes/fastmcts.md)
  _Data object:_ A complete mathematical solution segmented as Step 1, Step 2, and so on; each step becomes a search-tree node.; process: query, ground truth, reasoning step; An asynchronous MCTS-style reasoning tree where partial solutions are states, reasoning steps are actions, and complete simulations are retained as branches.
  _Feedback / verifier:_ Qwen2.5-72B-Instruct judges each complete trajectory against the standard answer three times, repeating inconsistent cases until consensus. Binary terminal results are backed up so node score equals win count divided by visit count.
  _Recipe signal:_ teacher: Qwen2.5-72B-Instruct as trajectory verifier; Qwen2.5-32B-Instruct for five-sample difficulty prescreening.; generator: Qwen2.5-72B-Instruct served through SGLang.
  _Audit focus:_ Appendix verifier prompt checks final-answer agreement and guessed/vague answers despite main-text language about intermediate-step verification., Terminal outcome backup can mark flawed intermediate steps as valuable when the final answer is correct., A zero-score node under sparse exploration can reflect insufficient sampling rather than low quality.
  _Why it matters:_ It connects token-budgeted search, terminal verification, node-value propagation and downstream SFT/DPO while exposing reproducibility, licensing and rejected-branch release gaps.
- 🏗️ **[RL Tango: Reinforcing Generator and Verifier Together for Language Reasoning](https://openreview.net/forum?id=JRkFZl0TJ2)**
  <sub>2025 · NeurIPS 2025 · 🏗️ construction recipe · 🧪 verifier reward · mixed · sft · distillation · L3_summary_ready</sub>
  [Paper](https://openreview.net/forum?id=JRkFZl0TJ2) · [arXiv](https://arxiv.org/abs/2505.15034) · [Code](https://github.com/kaiwenzha/rl-tango)
  _Data object:_ A runtime item comprises a question, gold answer, generator response with think/step/answer tags, verifier response with one natural-language judgment per step, and an overall final-verification judgment. This is a training-time object, not a released dataset schema.; process: question, gold answer, generator solution; Offline math QA RL using veRL. The outcome checker extracts a boxed final answer and compares it with gold; the generative verifier evaluates the current generator trace and emits structured step/final judgments.
  _Feedback / verifier:_ The generator receives binary gold-answer reward plus stochastic step rewards from the current verifier. The verifier receives outcome-level reward for whether its final judgment matches rule-derived correctness, plus structural-format reward. No gold step labels are used in the main training run.
  _Recipe signal:_ teacher: Llama-3.1-70B-Instruct generates initial SFT responses. During RL there is no frozen process-label teacher; generator and verifier create evolving trajectories while gold final answers anchor outcomes.; generator: The generator emits tagged multi-step solutions; the generative verifier emits natural-language analysis, one binary judgment per step, and a final judgment. Both are updated by policy-gradient RL in a 3-to-1 cycle.
  _Audit focus:_ Generator and verifier can co-adapt to shared stylistic or structural shortcuts that fail under independent evaluation., Verifier step judgments receive no direct correctness labels; plausible but inaccurate step rationales can earn reward., Final-answer extraction can produce false positives or negatives for equivalent expressions, malformed boxes or invalid reasoning.
  _Why it matters:_ It exposes an online data contract for co-training reasoning policies and verifiers while highlighting risks from co-adaptation, latent process-label accuracy, answer-checker brittleness and missing trajectories/checkpoints.
- 📦 **[SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/hash/abe1eb21ceb046209c96a0f5e7544ccc-Abstract-Conference.html)**
  <sub>2025 · ICLR 2025 · 📦 data release · 🏗️ construction recipe · judgment required · sft · preference learning · L3_summary_ready</sub>
  [Paper](https://proceedings.iclr.cc/paper_files/paper/2025/hash/abe1eb21ceb046209c96a0f5e7544ccc-Abstract-Conference.html) · [arXiv](https://arxiv.org/abs/2412.11605) · [OpenReview](https://openreview.net/forum?id=9chRqsPOGL) · [DOI](https://doi.org/10.48550/arXiv.2412.11605) · [Code](https://github.com/thu-coai/SPaR) · [Data](https://huggingface.co/datasets/CCCCCC/SPaR)
  _Data object:_ messages with chosen and rejected responses; process: actor response, refiner judgment, refinement; Iterative actor-refiner BFS/DFS tree-search self-play
  _Feedback / verifier:_ LLM refiner judgment with majority voting
  _Recipe signal:_ teacher: GPT-4o-mini; generator: current actor/refiner
  _Audit focus:_ LLM judge can be biased or reward-hacked, Complete discarded branches and search trees are not released, Source revisions and contamination audit are not pinned
  _Why it matters:_ It makes the mutable judge and hidden discarded branches first-class data-audit concerns.
- 📄 **pass@$(k,T)$: Re-examining the reasoning boundary for agentic RL**
  <sub>2026 · arXiv preprint · unknown · unknown · L0_seeded</sub>
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

## 6. What to Audit

- Are accepted and rejected rollouts both visible enough to audit selector behavior?
- Is pass@k, search budget, sampling temperature, verifier score, or tree-search policy disclosed?
- Can gains be attributed to data, search, verifier, or inference budget rather than a hidden scaffold?

## 7. Open Problems

- How much of a reasoning-data gain comes from search rather than the final dataset?
- Should open releases include rejected rollouts and search trees by default?
- How can pass@k and training-data scale be compared fairly?
- Can selector behavior be audited without exposing proprietary verifier details?

## 8. Related Cards

- [Kimi K1.5: Scaling Reinforcement Learning with LLMs](../../cards/recipes/kimi_k15.md)
- [Leaky Thoughts](../../cards/failures/leaky-thoughts.md)
- [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](../../cards/recipes/minimax_m1.md)
- [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](../../cards/releases/opencodereasoning_ii.md)
- [R2E-Gym](../../cards/agents/r2e_gym.md)
- [SWE-Gym](../../cards/agents/swe_gym.md)
- [TTRL: Test-Time Reinforcement Learning](../../cards/recipes/ttrl.md)
- [The Art of Scaling Reinforcement Learning Compute for LLMs](../../cards/recipes/the-art-of-scaling-rl-compute.md)
- [s1: Simple Test-Time Scaling](../../cards/releases/s1.md)
- [AndroidWorld: A dynamic benchmarking environment for autonomous agents](../../cards/agents/androidworld.md)
- [AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](../../cards/agents/appworld.md)
- [BrowserGym: A gym environment for web agents](../../cards/agents/browsergym.md)
- [DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](../../cards/recipes/deepseek-prover-v1-5.md)
- [DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](../../cards/recipes/deepseekmath.md)
- [Introducing SWE-bench Verified](../../cards/agents/swe-bench-verified.md)
- [LiveCodeBench: Holistic and contamination-free evaluation of large language models for code](../../cards/benchmarks/livecodebench.md)
- [Math-Shepherd](../../cards/verifiers/math_shepherd.md)
- [OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](../../cards/agents/osworld.md)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
