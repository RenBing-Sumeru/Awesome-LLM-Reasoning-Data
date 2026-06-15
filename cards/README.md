# Release Cards and Audit Cards

Cards are the practical layer of the atlas. Each one answers the reader-facing questions that a citation alone cannot: what is the data object, what verifies it, how can it enter post-training, and what should be audited before reuse.

| Type | Count | Use it for |
|---|---:|---|
| [Release cards](#release-cards) | 16 | datasets, trace releases, documentation foundations, and reusable data artifacts |
| [Verifier cards](#verifier-cards) | 12 | verifiers, rewards, process supervision, judges, and rubrics |
| [Agent/environment cards](#agentenvironment-cards) | 10 | tool, web, app, OS, and SWE trajectories |
| [Recipe cards](#recipe-cards) | 17 | construction recipes, model reports, and training pipelines |
| [Benchmark cards](#benchmark-cards) | 5 | evaluation surfaces and benchmark ledgers |
| [Failure cards](#failure-cards) | 3 | contamination, leakage, reward hacking, and verifier attacks |

## Card Index

### Release cards

- [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) - Audits reasoning-model progress claims by showing that benchmark results can be highly sensitive to decoding, seeds, prompt format, and environment details.
- [Big-Math-RL-Verified](releases/big_math.md) - Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- [Chain-of-thought prompting elicits reasoning in large language models](releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md) - Shows that few-shot natural-language rationales can elicit multi-step reasoning behavior from sufficiently large language models.
- [DAPO](releases/dapo.md) - GRPO-lineage RLVR recipe where filtering changes what reaches the gradient.
- [Data statements for natural language processing](releases/data-statements-for-natural-language-processing.md) - Proposes data statements for NLP datasets, foregrounding language, speaker/community provenance, annotation context, and intended deployment boundaries.
- [Datasheets for datasets](releases/datasheets-for-datasets.md) - Introduces dataset datasheets: a structured documentation template for provenance, composition, collection process, recommended uses, and limitations.
- [DeepMath-103K](releases/deepmath_103k.md) - Math release highlighted for verifier pinning and decontamination.
- [Direct preference optimization: Your language model is secretly a reward model](releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md) - DPO trains a policy directly from preference pairs by turning the reward-model objective into a supervised contrastive optimization problem.
- [KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](releases/kodcode.md) - Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
- [LIMO: Less Is More for Reasoning](releases/limo.md) - Small-set curation reference distinguishing elicitation from broad coverage.
- [NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](releases/naturalreasoning.md) - Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.
- [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](releases/opencodereasoning_ii.md) - Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- [OpenMathReasoning: A large-scale dataset of math reasoning traces](releases/openmathreasoning.md) - Large-scale math reasoning trace release for programmatic verification.
- [OpenR1-Math-220k](releases/openr1.md) - Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- [OpenThoughts: Data recipes for reasoning models](releases/openthoughts.md) - OpenThoughts studies open data recipes for reasoning models through large public reasoning datasets and many controlled pipeline experiments.
- [s1: Simple Test-Time Scaling](releases/s1.md) - s1 curates a small s1K reasoning dataset and studies budget forcing as a simple way to scale test-time reasoning compute.

### Verifier cards

- [Aegis2.0](verifiers/aegis2.md) - Aegis2.0 releases a human-annotated AI-safety dataset and risk taxonomy for training and evaluating LLM guardrails.
- [HealthBench](verifiers/healthbench.md) - HealthBench evaluates healthcare conversations with physician-written, conversation-specific rubrics across safety, accuracy, communication, and domain contexts.
- [Math-Shepherd](verifiers/math_shepherd.md) - Monte-Carlo-style process signal reference for step supervision.
- [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](verifiers/omegaprm.md) - Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- [One Token to Fool LLM-as-a-Judge](verifiers/one_token_to_fool_judge.md) - Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- [Let's Verify Step by Step](verifiers/prm800k.md) - Provides step-level human labels for mathematical reasoning traces and trains process reward models to identify correct intermediate reasoning.
- [PRMBench: A fine-grained and challenging benchmark for process-level reward models](verifiers/prmbench.md) - Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- [ProcessBench: Identifying Process Errors in Mathematical Reasoning](verifiers/processbench.md) - Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- [RewardBench: Evaluating Reward Models for Language Modeling](verifiers/rewardbench.md) - RewardBench evaluates reward models on prompt/chosen/rejected trios spanning chat, reasoning, and safety, including structured preference failures.
- [Spurious Rewards](verifiers/spurious_rewards.md) - Reward-signal audit for spurious behavior in RLVR.
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](verifiers/tinyv.md) - Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- [Training verifiers to solve math word problems](verifiers/training-verifiers-to-solve-math-word-problems.md) - Introduces GSM8K and trains verifier models to rank model-generated math solutions by likely correctness.

### Agent/environment cards

- [AndroidWorld: A dynamic benchmarking environment for autonomous agents](agents/androidworld.md) - Android tasks turn mobile UI state and action histories into evaluable agent trajectories.
- [AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](agents/appworld.md) - Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.
- [BrowserGym: A gym environment for web agents](agents/browsergym.md) - A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation.
- [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](agents/openhands.md) - Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.
- [OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](agents/osworld.md) - Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.
- [R2E-Gym](agents/r2e_gym.md) - Verifiable SWE environment for reasoning-to-edit tasks.
- [SWE-bench: Can language models resolve real-world GitHub issues?](agents/swe-bench-can-language-models-resolve-real-world-github-issues.md) - SWE-bench turns real GitHub issues into repository-level repair tasks evaluated by applying patches and running tests.
- [SWE-Gym](agents/swe_gym.md) - Repository-scale training environment showing substrate as data.
- [ToolLLM: Facilitating large language models to master 16000+ real-world APIs](agents/toolllm_toolbench.md) - Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.
- [WebArena: A realistic web environment for building autonomous agents](agents/webarena.md) - Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.

### Recipe cards

- [Absolute Zero: Reinforced Self-play Reasoning with Zero Data](recipes/absolute_zero.md) - Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop.
- [Constitutional AI: Harmlessness from AI feedback](recipes/constitutional-ai.md) - Constitutional AI trains harmless behavior from AI-generated critiques, revisions, and AI preference feedback guided by a written constitution.
- [DeepSeek-R1](recipes/deepseek_r1.md) - DeepSeek-R1 reports a reasoning-model post-training recipe centered on reinforcement learning with verifiable rewards, cold-start data, and distillation.
- [Kimi K1.5: Scaling Reinforcement Learning with LLMs](recipes/kimi_k15.md) - Frontier report used for long-context RL and scaling discussion.
- [Llama-Nemotron: Efficient Reasoning Models](recipes/llama_nemotron.md) - Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- [Magistral](recipes/magistral.md) - Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.
- [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](recipes/minimax_m1.md) - Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
- [Phi-4-reasoning Technical Report](recipes/phi4_reasoning.md) - Reasoning model report highlighting teacher distillation as trace writing.
- [Qwen3 Technical Report](recipes/qwen3.md) - Open model-family report useful for coordinated release-tick analysis.
- [Qwen3-Coder](recipes/qwen3_coder.md) - Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- [Scaling Behaviors of LLM Reinforcement Learning Post-Training](recipes/scaling-behaviors-rl-post-training.md) - This study measures how model size, data volume, and compute budget interact during RL post-training for mathematical reasoning.
- [Self-consistency improves chain of thought reasoning in language models](recipes/self-consistency-chain-of-thought.md) - Self-consistency samples multiple chain-of-thought reasoning paths and chooses the answer that is most consistent across samples.
- [Self-Instruct: Aligning language models with self-generated instructions](recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) - Self-Instruct bootstraps instruction-following data by having a model generate instructions, inputs, and outputs, then filtering low-quality or duplicate examples.
- [STaR: Bootstrapping reasoning with reasoning](recipes/star-bootstrapping-reasoning-with-reasoning.md) - STaR iteratively generates rationales, keeps examples whose final answers are correct, and fine-tunes on the accepted reasoning traces.
- [The Art of Scaling Reinforcement Learning Compute for LLMs](recipes/the-art-of-scaling-rl-compute.md) - The Art of Scaling RL Compute studies RL compute scaling with large ablations and separates asymptotic performance from compute efficiency.
- [Training language models to follow instructions with human feedback](recipes/training-language-models-to-follow-instructions-with-human-feedback.md) - InstructGPT establishes the demonstration, preference-comparison, reward-model, and PPO pipeline that many later post-training recipes inherit.
- [TTRL: Test-Time Reinforcement Learning](recipes/ttrl.md) - Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.

### Benchmark cards

- [AbstentionBench](benchmarks/abstentionbench.md) - AbstentionBench evaluates whether LLMs know when not to answer across unknown, underspecified, false-premise, subjective, and stale-information questions.
- [Evaluating large language models trained on code](benchmarks/evaluating-large-language-models-trained-on-code.md) - The Codex evaluation paper introduces HumanEval and studies code generation through functional correctness, repeated sampling, and pass@k.
- [GSM8K: Grade School Math 8K](benchmarks/gsm8k-grade-school-math-8k.md) - Canonical grade-school math benchmark with natural-language word problems, worked solutions, and final numeric answers.
- [HumanEval: Hand-Written Evaluation Set](benchmarks/humaneval-hand-written-evaluation-set.md) - HumanEval provides hand-written Python programming problems with unit tests for executable code-generation evaluation.
- [Measuring mathematical problem solving with the MATH dataset](benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) - Introduces MATH, a competition-style math benchmark with challenging problems, subject categories, and step-by-step solutions.

### Failure cards

- [Leaky Thoughts](failures/leaky-thoughts.md) - Leaky Thoughts shows that reasoning traces from personal-agent settings can expose sensitive user data through prompt injection or accidental leakage.
- [LiveBench: A challenging, contamination-free benchmark for large language models](failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) - LiveBench is a frequently updated, contamination-limited benchmark that uses recent sources and objective scoring across math, code, reasoning, language, instruction following, and data analysis.
- [Subliminal Learning](failures/subliminal-learning.md) - Subliminal Learning shows that teacher models can transmit behavioral traits through semantically unrelated generated data, even after visible trait references are filtered.

## How To Improve A Card

- Replace `unknown` only after checking primary artifacts.
- Add code, data, project, or Hugging Face links only when they are official.
- Record false positives, false negatives, leakage risks, license constraints, and replay assumptions as soon as they are known.
- Keep card language concise enough for scanning, but specific enough that a new reader can classify the artifact without opening the paper first.
