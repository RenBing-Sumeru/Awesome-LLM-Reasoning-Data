# Release Cards and Audit Cards

Cards are the practical layer of the atlas. Each one answers the reader-facing questions that a citation alone cannot: what is the data object, what verifies it, how can it enter post-training, and what should be audited before reuse.

| Type | Count | Use it for |
|---|---:|---|
| [Release cards](#release-cards) | 22 | datasets, trace releases, documentation foundations, and reusable data artifacts |
| [Verifier cards](#verifier-cards) | 18 | verifiers, rewards, process supervision, judges, and rubrics |
| [Agent/environment cards](#agentenvironment-cards) | 14 | tool, web, app, OS, and SWE trajectories |
| [Recipe cards](#recipe-cards) | 37 | construction recipes, model reports, and training pipelines |
| [Benchmark cards](#benchmark-cards) | 11 | evaluation surfaces and benchmark ledgers |
| [Failure cards](#failure-cards) | 7 | contamination, leakage, reward hacking, and verifier attacks |

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
- [MAmmoTH: Building math generalist models through hybrid instruction tuning](releases/mammoth-mathinstruct.md) - MAmmoTH releases MathInstruct, a hybrid CoT/PoT math instruction mixture for supervised math reasoning.
- [MAmmoTH2: Scaling Instructions from the Web](releases/mammoth2-scaling-instructions-from-the-web.md) - MAmmoTH2 builds WebInstruct by recalling web documents, extracting Q-A pairs, refining them, and training reasoning models.
- [MetaMath: Bootstrap your own mathematical questions for large language models](releases/metamath-bootstrap-your-own-mathematical-questions-for-large-language-models.md) - MetaMath bootstraps math instruction data by rewriting GSM8K and MATH training questions into MetaMathQA.
- [NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](releases/naturalreasoning.md) - Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.
- [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](releases/opencodereasoning_ii.md) - Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- [OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](releases/openmathinstruct-2.md) - OpenMathInstruct-2 releases 14M math instruction-tuning problem-solution pairs generated with an open synthesis pipeline.
- [OpenMathReasoning: A large-scale dataset of math reasoning traces](releases/openmathreasoning.md) - Large-scale math reasoning trace release for programmatic verification.
- [OpenR1-Math-220k](releases/openr1.md) - OpenR1-Math-220k releases about 220k NuminaMath-derived math problems with DeepSeek-R1 reasoning traces and answer-level filtering by Math-Verify plus Llama judge recovery.
- [OpenThoughts: Data recipes for reasoning models](releases/openthoughts.md) - OpenThoughts studies open data recipes for reasoning models through large public reasoning datasets and many controlled pipeline experiments.
- [s1: Simple Test-Time Scaling](releases/s1.md) - s1 curates a small s1K reasoning dataset and studies budget forcing as a simple way to scale test-time reasoning compute.
- [Training a helpful and harmless assistant with reinforcement learning from human feedback](releases/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback.md) - HH-RLHF releases helpfulness and harmlessness chosen/rejected preference pairs for reward-model training.
- [UltraFeedback: Boosting language models with high-quality feedback](releases/ultrafeedback.md) - UltraFeedback releases large-scale AI feedback with fine-grained ratings and critiques over diverse instruction-response pairs.

### Verifier cards

- [A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](verifiers/a-comprehensive-survey-of-reward-models.md) - This survey organizes reward models by data source, objective, application, benchmark, and failure mode.
- [A Survey on Human Preference Learning for Large Language Models](verifiers/a-survey-on-human-preference-learning-for-large-language-models.md) - This survey reviews human preference feedback sources, formats, modeling methods, usage objectives, and evaluation.
- [Aegis2.0](verifiers/aegis2.md) - Aegis2.0 releases a human-annotated AI-safety dataset and risk taxonomy for training and evaluating LLM guardrails.
- [Deep reinforcement learning from human preferences](verifiers/deep-reinforcement-learning-from-human-preferences.md) - This paper shows how pairwise human preferences over trajectory segments can train a reward model for RL.
- [HealthBench](verifiers/healthbench.md) - HealthBench evaluates healthcare conversations with physician-written, conversation-specific rubrics across safety, accuracy, communication, and domain contexts.
- [Math-Shepherd](verifiers/math_shepherd.md) - Rollout-value supervision method that assigns process rewards to intermediate math reasoning steps.
- [Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](verifiers/mt-bench-chatbot-arena.md) - MT-Bench and Chatbot Arena establish LLM-as-a-judge and pairwise human-preference evaluation surfaces for open-ended chat models.
- [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](verifiers/omegaprm.md) - Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- [One Token to Fool LLM-as-a-Judge](verifiers/one_token_to_fool_judge.md) - Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- [Let's Verify Step by Step](verifiers/prm800k.md) - Provides step-level human labels for mathematical reasoning traces and trains process reward models to identify correct intermediate reasoning.
- [PRMBench: A fine-grained and challenging benchmark for process-level reward models](verifiers/prmbench.md) - Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- [ProcessBench: Identifying Process Errors in Mathematical Reasoning](verifiers/processbench.md) - Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- [Prometheus 2: An open source language model specialized in evaluating other language models](verifiers/prometheus-2.md) - Prometheus 2 is an open evaluator model for both direct assessment and pairwise ranking under user-defined criteria.
- [RewardBench: Evaluating Reward Models for Language Modeling](verifiers/rewardbench.md) - RewardBench evaluates reward models on prompt/chosen/rejected trios spanning chat, reasoning, and safety, including structured preference failures.
- [Rewarding progress: Scaling automated process verifiers for LLM reasoning](verifiers/rewarding-progress.md) - Rewarding Progress proposes Process Advantage Verifiers that score whether a reasoning step increases future correctness probability.
- [Spurious Rewards](verifiers/spurious_rewards.md) - Reward-signal audit for spurious behavior in RLVR.
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](verifiers/tinyv.md) - Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- [Training verifiers to solve math word problems](verifiers/training-verifiers-to-solve-math-word-problems.md) - Introduces GSM8K and trains verifier models to rank model-generated math solutions by likely correctness.

### Agent/environment cards

- [AndroidWorld: A dynamic benchmarking environment for autonomous agents](agents/androidworld.md) - Android tasks turn mobile UI state and action histories into evaluable agent trajectories.
- [AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](agents/appworld.md) - Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.
- [BrowserGym: A gym environment for web agents](agents/browsergym.md) - A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation.
- [LeanDojo: Theorem proving with retrieval-augmented language models](agents/leandojo.md) - LeanDojo releases an open Lean theorem-proving environment, benchmark, and retrieval-augmented prover pipeline.
- [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](agents/openhands.md) - Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.
- [OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](agents/osworld.md) - Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.
- [R2E-Gym](agents/r2e_gym.md) - Verifiable SWE environment for reasoning-to-edit tasks.
- [ReAct: Synergizing reasoning and acting in language models](agents/react.md) - ReAct interleaves reasoning traces with task-specific actions so models can update plans from external observations.
- [SWE-bench: Can language models resolve real-world GitHub issues?](agents/swe-bench-can-language-models-resolve-real-world-github-issues.md) - SWE-bench turns real GitHub issues into repository-level repair tasks evaluated by applying patches and running tests.
- [Introducing SWE-bench Verified](agents/swe-bench-verified.md) - SWE-bench Verified is a human-filtered 500-instance subset of SWE-bench designed to reduce ambiguous, unsolvable, or incorrectly tested software-engineering tasks.
- [SWE-Gym](agents/swe_gym.md) - Repository-scale training environment showing substrate as data.
- [Toolformer: Language models can teach themselves to use tools](agents/toolformer.md) - Toolformer creates self-supervised tool-use data by inserting API calls only when tool results improve language-model likelihood.
- [ToolLLM: Facilitating large language models to master 16000+ real-world APIs](agents/toolllm_toolbench.md) - Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.
- [WebArena: A realistic web environment for building autonomous agents](agents/webarena.md) - Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.

### Recipe cards

- [A Survey of Reinforcement Learning from Human Feedback](recipes/a-survey-of-reinforcement-learning-from-human-feedback.md) - This survey maps RLHF as a feedback-to-reward-to-policy pipeline.
- [Absolute Zero: Reinforced Self-play Reasoning with Zero Data](recipes/absolute_zero.md) - Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop.
- [Constitutional AI: Harmlessness from AI feedback](recipes/constitutional-ai.md) - Constitutional AI trains harmless behavior from AI-generated critiques, revisions, and AI preference feedback guided by a written constitution.
- [DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](recipes/deepseek-prover-v1-5.md) - DeepSeek-Prover-V1.5 adds proof-assistant feedback, RL, and RMaxTS search on top of DeepSeek-Prover-style formal proof data.
- [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](recipes/deepseek-prover-v2.md) - DeepSeek-Prover-V2 uses recursive subgoal decomposition and RL to connect informal reasoning with formal Lean theorem proving.
- [DeepSeek-Prover: Advancing theorem proving in LLMs](recipes/deepseek-prover.md) - DeepSeek-Prover generates large-scale Lean 4 theorem-proving data from informal math problems and trains a formal proof model.
- [DeepSeek-R1](recipes/deepseek_r1.md) - DeepSeek-R1 reports a reasoning-model post-training recipe centered on reinforcement learning with verifiable rewards, cold-start data, and distillation.
- [DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](recipes/deepseekmath.md) - DeepSeekMath combines math-focused web-data selection with SFT, GRPO-style RL, and self-consistency evaluation for open mathematical reasoning.
- [Distilling step-by-step: Outperforming larger language models with less training data and smaller model sizes](recipes/distilling-step-by-step.md) - Distilling Step-by-Step trains smaller models with answer labels plus teacher-generated rationales.
- [Finetuned language models are zero-shot learners](recipes/finetuned-language-models-are-zero-shot-learners.md) - FLAN converts supervised NLP tasks into natural-language instruction examples for zero-shot generalization.
- [Kimi K1.5: Scaling Reinforcement Learning with LLMs](recipes/kimi_k15.md) - Frontier report used for long-context RL and scaling discussion.
- [Llama-Nemotron: Efficient Reasoning Models](recipes/llama_nemotron.md) - Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- [Magicoder: Empowering code generation with OSS-instruct](recipes/magicoder.md) - Magicoder introduces OSS-Instruct, a code-data recipe that uses open-source code snippets to generate more realistic instruction data.
- [Magistral](recipes/magistral.md) - Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.
- [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](recipes/minimax_m1.md) - Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
- [Multi-Step Reasoning with Large Language Models, a Survey](recipes/multi-step-reasoning-with-large-language-models-a-survey.md) - This survey maps multi-step reasoning with LLMs across generation, evaluation, and control methods.
- [Multitask prompted training enables zero-shot task generalization](recipes/multitask-prompted-training-enables-zero-shot-task-generalization.md) - T0 makes prompt templates and prompted dataset mixtures concrete artifacts for zero-shot instruction tuning.
- [Orca: Progressive learning from complex explanation traces of GPT-4](recipes/orca.md) - Orca studies progressive learning from complex teacher explanation traces rather than shallow imitation of final answers.
- [Phi-4-reasoning Technical Report](recipes/phi4_reasoning.md) - Reasoning model report highlighting teacher distillation as trace writing.
- [Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](recipes/qwen2-5-math.md) - Qwen2.5-Math reports a math-specialized model family supporting chain-style and tool-integrated reasoning with base, instruct, and reward-model variants.
- [Qwen3 Technical Report](recipes/qwen3.md) - Open model-family report useful for coordinated release-tick analysis.
- [Qwen3-Coder](recipes/qwen3_coder.md) - Qwen3-Coder discloses a coding-agent post-training recipe built around code-heavy data, tool-call behavior, executable feedback, and large-scale environment interaction.
- [R-Tuning: Instructing Large Language Models to Say 'I Don't Know'](recipes/r-tuning-instructing-large-language-models-to-say-i-dont-know.md) - R-Tuning turns abstention into instruction data by teaching models to answer known questions and refuse unknown ones.
- [Reinforcement Learning for LLM Post-Training: A Survey](recipes/reinforcement-learning-for-llm-post-training-a-survey.md) - This survey connects RLHF, DPO, PPO/GRPO, and RLVR as LLM post-training methods.
- [Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](recipes/restem-beyond-human-data-scaling-self-training.md) - ReST^EM samples model solutions, filters them with binary feedback, and fine-tunes on accepted examples.
- [Scaling Behaviors of LLM Reinforcement Learning Post-Training](recipes/scaling-behaviors-rl-post-training.md) - This study measures how model size, data volume, and compute budget interact during RL post-training for mathematical reasoning.
- [Self-consistency improves chain of thought reasoning in language models](recipes/self-consistency-chain-of-thought.md) - Self-consistency samples multiple chain-of-thought reasoning paths and chooses the answer that is most consistent across samples.
- [Self-Instruct: Aligning language models with self-generated instructions](recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) - Self-Instruct bootstraps instruction-following data by having a model generate instructions, inputs, and outputs, then filtering low-quality or duplicate examples.
- [Self-RAG: Learning to retrieve, generate, and critique through self-reflection](recipes/self-rag.md) - Self-RAG trains models to decide when to retrieve, generate with evidence, and critique outputs using reflection tokens.
- [Self-Rewarding Language Models](recipes/self-rewarding-language-models.md) - Self-Rewarding Language Models use model-generated judgments as preference signals for iterative DPO.
- [SPIN: Self-play fine-tuning converts weak language models to strong language models](recipes/spin-self-play-fine-tuning.md) - SPIN pairs real SFT responses with model-generated responses and iteratively fine-tunes through a self-play objective.
- [STaR: Bootstrapping reasoning with reasoning](recipes/star-bootstrapping-reasoning-with-reasoning.md) - STaR iteratively generates rationales, keeps examples whose final answers are correct, and fine-tunes on the accepted reasoning traces.
- [The Art of Scaling Reinforcement Learning Compute for LLMs](recipes/the-art-of-scaling-rl-compute.md) - The Art of Scaling RL Compute studies RL compute scaling with large ablations and separates asymptotic performance from compute efficiency.
- [Training language models to follow instructions with human feedback](recipes/training-language-models-to-follow-instructions-with-human-feedback.md) - InstructGPT establishes the demonstration, preference-comparison, reward-model, and PPO pipeline that many later post-training recipes inherit.
- [TTRL: Test-Time Reinforcement Learning](recipes/ttrl.md) - Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.
- [Tulu 3: Pushing frontiers in open language model post-training](recipes/tulu-3.md) - Tulu 3 releases an open post-training stack with SFT data, preference data, RLVR recipes, code, models, and evaluation guidance.
- [WizardMath: Empowering mathematical reasoning for large language models via reinforced evol-instruct](recipes/wizardmath-empowering-mathematical-reasoning-for-large-language-models-via-reinforced-evol-instruct.md) - WizardMath adapts Evol-Instruct to math reasoning, but the full training data is not publicly released.

### Benchmark cards

- [AbstentionBench](benchmarks/abstentionbench.md) - AbstentionBench evaluates whether LLMs know when not to answer across unknown, underspecified, false-premise, subjective, and stale-information questions.
- [Measuring coding challenge competence with APPS](benchmarks/apps.md) - APPS evaluates code-generation competence with 10,000 programming problems checked by executable test cases.
- [Evaluating large language models trained on code](benchmarks/evaluating-large-language-models-trained-on-code.md) - The Codex evaluation paper introduces HumanEval and studies code generation through functional correctness, repeated sampling, and pass@k.
- [GPQA](benchmarks/gpqa.md) - GPQA is a graduate-level science Q&A benchmark designed so skilled non-experts with web access still struggle.
- [GSM8K: Grade School Math 8K](benchmarks/gsm8k-grade-school-math-8k.md) - Canonical grade-school math benchmark with natural-language word problems, worked solutions, and final numeric answers.
- [HumanEval: Hand-Written Evaluation Set](benchmarks/humaneval-hand-written-evaluation-set.md) - HumanEval provides hand-written Python programming problems with unit tests for executable code-generation evaluation.
- [LiveCodeBench: Holistic and contamination-free evaluation of large language models for code](benchmarks/livecodebench.md) - LiveCodeBench continuously collects recent programming problems to evaluate code generation, execution, repair, and test-output prediction under lower contamination risk.
- [Measuring mathematical problem solving with the MATH dataset](benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) - Introduces MATH, a competition-style math benchmark with challenging problems, subject categories, and step-by-step solutions.
- [miniF2F: A cross-system benchmark for formal olympiad-level mathematics](benchmarks/minif2f.md) - miniF2F is a cross-system formal mathematics benchmark for comparing theorem provers across Lean, Metamath, Isabelle, and HOL Light targets.
- [SciCode: A benchmark for scientific code generation and reasoning](benchmarks/scicode.md) - SciCode evaluates code generation for realistic scientific research problems decomposed into subproblems with tests and gold solutions.
- [TruthfulQA](benchmarks/truthfulqa.md) - TruthfulQA is a benchmark for measuring whether models imitate common human falsehoods instead of giving truthful answers.

### Failure cards

- [Language Model Developers Should Report Train-Test Overlap](failures/language-model-developers-should-report-train-test-overlap.md) - This audit argues model developers should report train-test overlap so public-test-set results can be interpreted under contamination risk.
- [Language models do not always say what they think: Unfaithful explanations in chain-of-thought prompting](failures/language-models-dont-always-say-what-they-think.md) - This audit shows CoT explanations can rationalize biased answers without revealing the prompt feature that influenced the model.
- [Leaky Thoughts](failures/leaky-thoughts.md) - Leaky Thoughts shows that reasoning traces from personal-agent settings can expose sensitive user data through prompt injection or accidental leakage.
- [LiveBench: A challenging, contamination-free benchmark for large language models](failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) - LiveBench is a frequently updated, contamination-limited benchmark that uses recent sources and objective scoring across math, code, reasoning, language, instruction following, and data analysis.
- [Measuring faithfulness in chain-of-thought reasoning](failures/measuring-faithfulness-in-chain-of-thought-reasoning.md) - This paper measures CoT faithfulness by intervening on reasoning text and observing answer changes.
- [Scaling laws for reward model overoptimization](failures/scaling-laws-for-reward-model-overoptimization.md) - This failure study measures when optimizing an imperfect proxy reward starts reducing gold-reward quality.
- [Subliminal Learning](failures/subliminal-learning.md) - Subliminal Learning shows that teacher models can transmit behavioral traits through semantically unrelated generated data, even after visible trait references are filtered.

## How To Improve A Card

- Replace `unknown` only after checking primary artifacts.
- Add code, data, project, or Hugging Face links only when they are official.
- Record false positives, false negatives, leakage risks, license constraints, and replay assumptions as soon as they are known.
- Keep card language concise enough for scanning, but specific enough that a new reader can classify the artifact without opening the paper first.
