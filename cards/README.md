# 🧭 Release Cards and Audit Cards

These cards are the practical layer of the atlas. Each one asks: what is the data object, what verifies it, how can it be reused, and what must stay uncertain until a curator checks primary sources?

| Type | Count | Use it for |
|---|---:|---|
| 📦 Release cards | 11 | dataset and trace releases |
| 🧪 Verifier cards | 10 | verifiers, rewards, judges, rubrics |
| 🌐 Agent trajectory cards | 9 | interactive environment trajectories |
| 🏗️ Recipe cards | 10 | construction recipes and model-report pipelines |
| 🧰 Benchmark cards | 1 | benchmark surfaces and evaluation ledgers |
| 🧯 Failure cards | 1 | failure modes, leakage, and reward pathologies |

## Card Index

### 📦 Release cards

- [📦 Big-Math-RL-Verified](releases/big_math.md) - Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- [📦 DAPO](releases/dapo.md) - GRPO-lineage RLVR recipe where filtering changes what reaches the gradient.
- [📦 DeepMath-103K](releases/deepmath_103k.md) - Math release highlighted for verifier pinning and decontamination.
- [📦 KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](releases/kodcode.md) - Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
- [📦 LIMO: Less Is More for Reasoning](releases/limo.md) - Small-set curation reference distinguishing elicitation from broad coverage.
- [📦 NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](releases/naturalreasoning.md) - Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.
- [📦 OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](releases/opencodereasoning_ii.md) - Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- [📦 OpenMathReasoning: A large-scale dataset of math reasoning traces](releases/openmathreasoning.md) - Large-scale math reasoning trace release for programmatic verification.
- [📦 OpenR1-Math-220k](releases/openr1.md) - Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- [📦 OpenThoughts: Data recipes for reasoning models](releases/openthoughts.md) - Open reasoning-data recipe with controlled ablations around question sourcing, filtering, and answer generation.
- [📦 s1: Simple Test-Time Scaling](releases/s1.md) - Small-pool and test-time scaling reference.

### 🧪 Verifier cards

- [🧪 HealthBench](verifiers/healthbench.md) - Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification.
- [🧪 Math-Shepherd](verifiers/math_shepherd.md) - Monte-Carlo-style process signal reference for step supervision.
- [🧪 OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](verifiers/omegaprm.md) - Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- [🧪 One Token to Fool LLM-as-a-Judge](verifiers/one_token_to_fool_judge.md) - Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- [🧪 Let's Verify Step by Step](verifiers/prm800k.md) - Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning.
- [🧪 PRMBench: A fine-grained and challenging benchmark for process-level reward models](verifiers/prmbench.md) - Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- [🧪 ProcessBench: Identifying Process Errors in Mathematical Reasoning](verifiers/processbench.md) - Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- [🧪 RewardBench: Evaluating Reward Models for Language Modeling](verifiers/rewardbench.md) - Reward-model benchmark for understanding where preference/judge signals generalize and where they fail under distribution shift.
- [🧪 Spurious Rewards](verifiers/spurious_rewards.md) - Reward-signal audit for spurious behavior in RLVR.
- [🧪 TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](verifiers/tinyv.md) - Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

### 🌐 Agent trajectory cards

- [🌐 AndroidWorld: A dynamic benchmarking environment for autonomous agents](agents/androidworld.md) - Android tasks turn mobile UI state and action histories into evaluable agent trajectories.
- [🌐 AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](agents/appworld.md) - Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.
- [🌐 BrowserGym: A gym environment for web agents](agents/browsergym.md) - A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation.
- [🌐 OpenHands: An Open Platform for AI Software Developers as Generalist Agents](agents/openhands.md) - Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.
- [🌐 OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](agents/osworld.md) - Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.
- [🌐 R2E-Gym](agents/r2e_gym.md) - Verifiable SWE environment for reasoning-to-edit tasks.
- [🌐 SWE-Gym](agents/swe_gym.md) - Repository-scale training environment showing substrate as data.
- [🌐 ToolLLM: Facilitating large language models to master 16000+ real-world APIs](agents/toolllm_toolbench.md) - Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.
- [🌐 WebArena: A realistic web environment for building autonomous agents](agents/webarena.md) - Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.

### 🏗️ Recipe cards

- [🏗️ Absolute Zero: Reinforced Self-play Reasoning with Zero Data](recipes/absolute_zero.md) - Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop.
- [🏗️ DeepSeek-R1](recipes/deepseek_r1.md) - Frontier reasoning report central to public RLVR and reasoning post-training recipes.
- [🏗️ Kimi K1.5: Scaling Reinforcement Learning with LLMs](recipes/kimi_k15.md) - Frontier report used for long-context RL and scaling discussion.
- [🏗️ Llama-Nemotron: Efficient Reasoning Models](recipes/llama_nemotron.md) - Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- [🏗️ Magistral](recipes/magistral.md) - Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.
- [🏗️ MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](recipes/minimax_m1.md) - Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
- [🏗️ Phi-4-reasoning Technical Report](recipes/phi4_reasoning.md) - Reasoning model report highlighting teacher distillation as trace writing.
- [🏗️ Qwen3 Technical Report](recipes/qwen3.md) - Open model-family report useful for coordinated release-tick analysis.
- [🏗️ Qwen3-Coder](recipes/qwen3_coder.md) - Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- [🏗️ TTRL: Test-Time Reinforcement Learning](recipes/ttrl.md) - Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.

### 🧰 Benchmark cards

- [🧰 RewardBench Benchmark Lens](benchmarks/rewardbench.md) - Reward benchmarks should be audited as feedback instruments, not only as leaderboard tables.

### 🧯 Failure cards

- [🧯 Spurious Rewards Failure Lens](failures/spurious_rewards.md) - Reward-backed reasoning data can look stronger while optimizing a shortcut, so failure cards must track the reward pathology explicitly.

## How To Improve A Card

- Replace `unknown` only after checking primary artifacts.
- Add code/data/project links only when they are official.
- Record false positives, false negatives, leakage risks, and license constraints as soon as they are known.
- Keep card language concise enough for scanning, but specific enough that a new reader can classify the artifact without opening the paper first.
