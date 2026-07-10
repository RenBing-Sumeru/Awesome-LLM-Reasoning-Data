# Release Cards and Audit Cards

Cards are the practical layer of the atlas. Each one answers the reader-facing questions that a citation alone cannot: what is the data object, what verifies it, how can it enter post-training, and what should be audited before reuse.

| Type | Count | Use it for |
|---|---:|---|
| [Release cards](#release-cards) | 24 | datasets, trace releases, documentation foundations, and reusable data artifacts |
| [Verifier cards](#verifier-cards) | 33 | verifiers, rewards, process supervision, judges, and rubrics |
| [Agent/environment cards](#agentenvironment-cards) | 14 | tool, web, app, OS, and SWE trajectories |
| [Recipe cards](#recipe-cards) | 45 | construction recipes, model reports, and training pipelines |
| [Benchmark cards](#benchmark-cards) | 11 | evaluation surfaces and benchmark ledgers |
| [Failure cards](#failure-cards) | 10 | contamination, leakage, reward hacking, and verifier attacks |

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
- [HelpSteer 2: Open-source dataset for training top-performing reward models](releases/helpsteer-2.md) - HelpSteer 2 releases a CC-BY-4.0 preference dataset with prompt-response records and five human-annotated quality scores for training reward models.
- [HelpSteer3-Preference: Open Human-Annotated Preference Data across Diverse Tasks and Languages](releases/helpsteer3-preference.md) - HelpSteer3-Preference releases a CC-BY-4.0 human-annotated preference dataset with over 40k samples across General, STEM, Code, and Multilingual tasks for reward-model and RLHF research.
- [KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](releases/kodcode.md) - Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
- [LIMO: Less Is More for Reasoning](releases/limo.md) - Small-set curation reference distinguishing elicitation from broad coverage.
- [NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](releases/naturalreasoning.md) - Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.
- [OpenAssistant Conversations - Democratizing Large Language Model Alignment](releases/openassistant-conversations.md) - OpenAssistant Conversations releases a permissively licensed, crowd-sourced assistant-style conversation corpus with human-generated messages, quality ratings, rankings, and multilingual conversation trees.
- [OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](releases/opencodereasoning_ii.md) - Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.
- [OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data](releases/openmathinstruct-2.md) - OpenMathInstruct-2 releases 14M math instruction-tuning problem-solution pairs generated with an open synthesis pipeline.
- [OpenMathReasoning: A large-scale dataset of math reasoning traces](releases/openmathreasoning.md) - Large-scale math reasoning trace release for programmatic verification.
- [OpenR1-Math-220k](releases/openr1.md) - Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- [OpenThoughts: Data recipes for reasoning models](releases/openthoughts.md) - OpenThoughts studies open data recipes for reasoning models through large public reasoning datasets and many controlled pipeline experiments.
- [Advancing LLM Reasoning Generalists with Preference Trees](releases/preference-trees-ultrainteract.md) - Preference Trees / UltraInteract turns multi-branch reasoning trajectories into tree-structured preference data for reasoning alignment.
- [s1: Simple Test-Time Scaling](releases/s1.md) - s1 curates a small s1K reasoning dataset and studies budget forcing as a simple way to scale test-time reasoning compute.
- [Skywork-Reward: Bag of Tricks for Reward Modeling in LLMs](releases/skywork-reward.md) - Skywork-Reward releases a curated 80K public preference collection and trains Skywork reward models with data-centric filtering and Bradley-Terry reward modeling.
- [Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](releases/step-dpo.md) - Step-DPO turns long-chain math reasoning into step-level preferred/rejected continuation pairs.
- [UltraFeedback: Boosting language models with high-quality feedback](releases/ultrafeedback.md) - UltraFeedback releases large-scale AI feedback with fine-grained ratings and critiques over diverse instruction-response pairs.

### Verifier cards

- [Activation Reward Models for Few-Shot Model Alignment](verifiers/activation-reward-models.md) - Activation Reward Models use few-shot preference examples to steer model activations and derive reward scores without finetuning.
- [Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](verifiers/aegis2.md) - Aegis2.0 releases a human-annotated AI-safety dataset and risk taxonomy for training and evaluating LLM guardrails.
- [Atla Selene Mini: A General Purpose Evaluation Model](verifiers/atla-selene-mini.md) - Atla Selene Mini is an 8B general-purpose evaluator model trained for absolute scoring, classification, pairwise preference, and critique generation.
- [CompassJudger-1: All-in-one Judge Model Helps Model Evaluation and Evolution](verifiers/compassjudger-1.md) - CompassJudger-1 trains open judge models from public judge data, public reward data, self-collected subjective data, and generated critique data.
- [CompassJudger-2: Towards Generalist Judge Model via Verifiable Rewards](verifiers/compassjudger-2.md) - CompassJudger-2 uses reconstructed public judge data, reward data, synthetic knowledge/chat data, and verifiable rewards to train generalist LLM judges.
- [Generative Verifiers: Reward Modeling as Next-Token Prediction](verifiers/generative-verifiers.md) - Generative Verifiers trains verifier models with next-token prediction over verification rationales and judgments for Best-of-N reasoning selection.
- [HealthBench: Evaluating Large Language Models Towards Improved Human Health](verifiers/healthbench.md) - HealthBench evaluates healthcare conversations with physician-written, conversation-specific rubrics across safety, accuracy, communication, and health-domain contexts.
- [JudgeBench: A Benchmark for Evaluating LLM-based Judges](verifiers/judgebench.md) - JudgeBench converts hard knowledge, reasoning, math, and coding tasks into 620 response-pair examples for auditing LLM-based judges.
- [Math-Shepherd](verifiers/math_shepherd.md) - Rollout-value supervision method that assigns process rewards to intermediate math reasoning steps.
- [Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](verifiers/mt-bench-chatbot-arena.md) - MT-Bench and Chatbot Arena establish LLM-as-a-judge and pairwise human-preference evaluation surfaces for open-ended chat models.
- [Multimodal RewardBench 2: Evaluating Omni Reward Models for Interleaved Text and Image](verifiers/multimodal-rewardbench-2.md) - MMRB2 releases 4,000 expert-annotated multimodal preference pairs for evaluating omni reward models across text-to-image, editing, interleaved generation, and visual reasoning.
- [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](verifiers/omegaprm.md) - Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- [Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis](verifiers/omni-rrm.md) - Omni-RRM constructs omni-modal rubric-grounded preference data and trains reward models across text, image, video, and audio.
- [One Token to Fool LLM-as-a-Judge](verifiers/one_token_to_fool_judge.md) - Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- [Aligning with Human Judgement: The Role of Pairwise Preference in Large Language Model Evaluators](verifiers/pairs-aligning-with-human-judgement.md) - PairS reframes LLM evaluation as uncertainty-guided pairwise ranking to better align evaluator outputs with human judgments.
- [Let's Verify Step by Step](verifiers/prm800k.md) - Provides step-level human labels for mathematical reasoning traces and trains process reward models to identify correct intermediate reasoning.
- [PRMBench: A fine-grained and challenging benchmark for process-level reward models](verifiers/prmbench.md) - Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- [ProcessBench: Identifying Process Errors in Mathematical Reasoning](verifiers/processbench.md) - Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- [Prometheus 2: An open source language model specialized in evaluating other language models](verifiers/prometheus-2.md) - Prometheus 2 is an open evaluator model for both direct assessment and pairwise ranking under user-defined criteria.
- [R3: Robust Rubric-Agnostic Reward Models](verifiers/r3.md) - R3 trains compact rubric-agnostic reward models on point-wise, pair-wise, and binary evaluation data with generated rubrics and explanation traces.
- [RAG-RewardBench: Benchmarking Reward Models in Retrieval Augmented Generation for Preference Alignment](verifiers/rag-rewardbench.md) - RAG-RewardBench releases 1,485 RAG preference pairs with LLM-judge labels and human-correlation validation for reward-model evaluation.
- [RewardBench 2: Advancing Reward Model Evaluation](verifiers/rewardbench-2.md) - RewardBench 2 releases a multi-skill reward-model benchmark with one chosen and three rejected completions across factuality, instruction following, math, safety, focus, and ties.
- [RewardBench: Evaluating Reward Models for Language Modeling](verifiers/rewardbench.md) - RewardBench evaluates reward models on prompt/chosen/rejected trios spanning chat, reasoning, and safety, including structured preference failures.
- [Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning](verifiers/rewarding-progress.md) - Rewarding Progress proposes Process Advantage Verifiers that score whether a reasoning step increases future correctness probability.
- [RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style](verifiers/rm-bench.md) - RM-Bench releases style-controlled chosen/rejected comparisons across chat, code, math, and safety to expose reward-model style bias.
- [Rethinking Rubric Generation for Improving LLM-as-a-Judge and Reward Modeling for Open-Ended Tasks](verifiers/rrd-rubric-generation.md) - RRD studies recursive rubric generation and filtering to improve LLM judges and reward modeling for open-ended tasks.
- [Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](verifiers/rubric-arm.md) - Rubric-ARM trains a rubric generator and rubric-conditioned judge with alternating reinforcement learning for non-verifiable preference feedback.
- [Sentence-level Reward Model can Generalize Better for Aligning LLM from Human Preference](verifiers/sentence-level-reward-model.md) - Sentence-level Reward Model decomposes response-level preference learning into sentence-level reward estimates aggregated back into a Bradley-Terry response score.
- [Spurious Rewards: Rethinking Training Signals in RLVR](verifiers/spurious_rewards.md) - Spurious Rewards shows that RLVR can improve math benchmark scores even under rewards with little or negative correctness signal.
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](verifiers/tinyv.md) - Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- [Training verifiers to solve math word problems](verifiers/training-verifiers-to-solve-math-word-problems.md) - Introduces GSM8K and trains verifier models to rank model-generated math solutions by likely correctness.
- [VL-RewardBench: A Challenging Benchmark for Vision-Language Generative Reward Models](verifiers/vl-rewardbench.md) - VL-RewardBench releases human-verified image-query preference examples across general multimodal queries, hallucination detection, and visual reasoning.
- [WildGuard: Open One-Stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs](verifiers/wildguard.md) - WildGuard releases a safety moderation dataset and model for prompt harmfulness, response harmfulness, jailbreaks, and refusal detection.

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

- [Absolute Zero: Reinforced Self-play Reasoning with Zero Data](recipes/absolute_zero.md) - Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop.
- [Constitutional AI: Harmlessness from AI feedback](recipes/constitutional-ai.md) - Constitutional AI trains harmless behavior from AI-generated critiques, revisions, and AI preference feedback guided by a written constitution.
- [Contrastive Preference Optimization: Pushing the Boundaries of LLM Performance in Machine Translation](recipes/contrastive-preference-optimization-mt.md) - CPO builds machine-translation preference pairs from translation triplets using automatic MT quality signals and limited human preference checks.
- [DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search](recipes/deepseek-prover-v1-5.md) - DeepSeek-Prover-V1.5 adds proof-assistant feedback, RL, and RMaxTS search on top of DeepSeek-Prover-style formal proof data.
- [DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning](recipes/deepseek-prover-v2.md) - DeepSeek-Prover-V2 uses recursive subgoal decomposition and RL to connect informal reasoning with formal Lean theorem proving.
- [DeepSeek-Prover: Advancing theorem proving in LLMs](recipes/deepseek-prover.md) - DeepSeek-Prover generates large-scale Lean 4 theorem-proving data from informal math problems and trains a formal proof model.
- [DeepSeek-R1](recipes/deepseek_r1.md) - DeepSeek-R1 reports a reasoning-model post-training recipe centered on reinforcement learning with verifiable rewards, cold-start data, and distillation.
- [DeepSeekMath: Pushing the limits of mathematical reasoning in open language models](recipes/deepseekmath.md) - DeepSeekMath combines math-focused web-data selection with SFT, GRPO-style RL, and self-consistency evaluation for open mathematical reasoning.
- [Generative Reward Models](recipes/generative-reward-models.md) - Generative Reward Models trains LLMs to generate rationales and synthetic preference judgments, combining RLHF-style labels with RLAIF-style feedback.
- [A Survey on Human Preference Learning for Large Language Models](recipes/human-preference-learning-survey.md) - Reviews preference feedback sources, preference formats, modeling methods, usage objectives, and evaluation for LLM alignment.
- [Kimi K1.5: Scaling Reinforcement Learning with LLMs](recipes/kimi_k15.md) - Frontier report used for long-context RL and scaling discussion.
- [KTO: Model Alignment as Prospect Theoretic Optimization](recipes/kto.md) - KTO aligns language models from desirable/undesirable feedback rather than requiring paired preference comparisons.
- [LiPO: Listwise Preference Optimization through Learning-to-Rank](recipes/lipo.md) - LiPO generalizes preference optimization from pairwise comparisons to ranked response lists.
- [Llama-Nemotron: Efficient Reasoning Models](recipes/llama_nemotron.md) - Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- [Magicoder: Empowering code generation with OSS-instruct](recipes/magicoder.md) - Magicoder introduces OSS-Instruct, a code-data recipe that uses open-source code snippets to generate more realistic instruction data.
- [Magistral](recipes/magistral.md) - Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.
- [Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge](recipes/meta-rewarding-language-models.md) - Meta-Rewarding adds an LLM-as-a-meta-judge step so a model can generate feedback about its own judgments during self-improving alignment.
- [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](recipes/minimax_m1.md) - Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.
- [OPTune: Efficient Online Preference Tuning](recipes/optune.md) - OPTune improves online preference tuning efficiency by regenerating low-reward prompts and weighting pairs by reward gaps.
- [Orca: Progressive learning from complex explanation traces of GPT-4](recipes/orca.md) - Orca studies progressive learning from complex teacher explanation traces rather than shallow imitation of final answers.
- [ORPO: Monolithic Preference Optimization without Reference Model](recipes/orpo.md) - ORPO combines supervised learning with an odds-ratio penalty over chosen/rejected responses in a reference-free preference objective.
- [Permutative Preference Alignment from Listwise Ranking of Human Judgments](recipes/permutative-preference-alignment.md) - PPA constructs ListUltraFeedback and trains from multi-response list rankings with an NDCG-style objective.
- [Phi-4-reasoning Technical Report](recipes/phi4_reasoning.md) - Reasoning model report highlighting teacher distillation as trace writing.
- [Process-based Self-Rewarding Language Models](recipes/process-based-self-rewarding-language-models.md) - Process-based Self-Rewarding uses long-thought traces, step-wise LLM-as-a-judge feedback, and step-wise preference optimization for mathematical reasoning.
- [Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement](recipes/qwen2-5-math.md) - Qwen2.5-Math reports a math-specialized model family supporting chain-style and tool-integrated reasoning with base, instruct, and reward-model variants.
- [Qwen3 Technical Report](recipes/qwen3.md) - Open model-family report useful for coordinated release-tick analysis.
- [Qwen3-Coder](recipes/qwen3_coder.md) - Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- [RE-PO: Robust Enhanced Policy Optimization as a General Framework for LLM Alignment](recipes/re-po.md) - RE-PO robustifies preference optimization by inferring soft confidence weights for noisy preference labels through an EM-style loop.
- [Reinforcement Learning for LLM Post-Training: A Survey](recipes/reinforcement-learning-for-llm-post-training-survey.md) - This survey unifies RLHF, DPO, PPO/GRPO, and RLVR as LLM post-training methods.
- [A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](recipes/reward-model-survey.md) - Surveys reward models from preference collection through model training, use, evaluation benchmarks, and failure modes.
- [Scaling Behaviors of LLM Reinforcement Learning Post-Training](recipes/scaling-behaviors-rl-post-training.md) - This study measures how model size, data volume, and compute budget interact during RL post-training for mathematical reasoning.
- [Self-consistency improves chain of thought reasoning in language models](recipes/self-consistency-chain-of-thought.md) - Self-consistency samples multiple chain-of-thought reasoning paths and chooses the answer that is most consistent across samples.
- [Self-Instruct: Aligning language models with self-generated instructions](recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) - Self-Instruct bootstraps instruction-following data by having a model generate instructions, inputs, and outputs, then filtering low-quality or duplicate examples.
- [Self-RAG: Learning to retrieve, generate, and critique through self-reflection](recipes/self-rag.md) - Self-RAG trains models to decide when to retrieve, generate with evidence, and critique outputs using reflection tokens.
- [Self-Rewarding Language Models](recipes/self-rewarding-language-models.md) - Self-Rewarding Language Models uses a model's own LLM-as-a-judge feedback to create preference data for iterative DPO.
- [SimPO: Simple Preference Optimization with a Reference-Free Reward](recipes/simpo.md) - SimPO trains on prompt/chosen/rejected preference pairs using a reference-free implicit reward margin.
- [Self-Play Preference Optimization for Language Model Alignment](recipes/sppo.md) - SPPO constructs iterative self-play preference pairs from UltraFeedback prompts using PairRM as the preference oracle.
- [STaR: Bootstrapping reasoning with reasoning](recipes/star-bootstrapping-reasoning-with-reasoning.md) - STaR iteratively generates rationales, keeps examples whose final answers are correct, and fine-tunes on the accepted reasoning traces.
- [Test-Time Preference Optimization: On-the-Fly Alignment via Iterative Textual Feedback](recipes/test-time-preference-optimization.md) - TPO converts reward-model scores into textual critiques and refines outputs at inference time without updating model parameters.
- [The Art of Scaling Reinforcement Learning Compute for LLMs](recipes/the-art-of-scaling-rl-compute.md) - The Art of Scaling RL Compute studies RL compute scaling with large ablations and separates asymptotic performance from compute efficiency.
- [Towards Data-Centric RLHF: Simple Metrics for Preference Dataset Comparison](recipes/towards-data-centric-rlhf.md) - Towards Data-Centric RLHF proposes model-agnostic metrics for comparing public pairwise preference datasets by scale, label-noise invariance, and response-pair information content.
- [Training language models to follow instructions with human feedback](recipes/training-language-models-to-follow-instructions-with-human-feedback.md) - InstructGPT establishes the demonstration, preference-comparison, reward-model, and PPO pipeline that many later post-training recipes inherit.
- [TTRL: Test-Time Reinforcement Learning](recipes/ttrl.md) - Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.
- [Tulu 3: Pushing frontiers in open language model post-training](recipes/tulu-3.md) - Tulu 3 releases an open post-training stack with SFT data, preference data, RLVR recipes, code, models, and evaluation guidance.
- [When Data is the Algorithm: A Systematic Study and Curation of Preference Optimization Datasets](recipes/when-data-is-the-algorithm.md) - When Data is the Algorithm studies open DPO corpora and curates UltraMix, treating preference-data selection as a central part of the alignment algorithm.

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

- [The Comparative Trap: Pairwise Comparisons Amplifies Biased Preferences of LLM Evaluators](failures/comparative-trap.md) - The Comparative Trap shows that pairwise LLM evaluation can amplify superficial biases and proposes PRePair as a mitigation.
- [Feedback Loops With Language Models Drive In-Context Reward Hacking](failures/feedback-loops-in-context-reward-hacking.md) - This paper shows how repeated feedback loops can drive language models toward in-context reward hacking.
- [Language Models Learn to Mislead Humans via RLHF](failures/language-models-learn-to-mislead-humans-via-rlhf.md) - This paper shows that RLHF can make models more convincing to humans without making them more correct.
- [Leaky Thoughts](failures/leaky-thoughts.md) - Leaky Thoughts shows that reasoning traces from personal-agent settings can expose sensitive user data through prompt injection or accidental leakage.
- [Understanding Likelihood Over-optimisation in Direct Alignment Algorithms](failures/likelihood-overoptimisation-daa.md) - This paper audits likelihood over-optimization in DPO/IPO-style direct alignment algorithms using likelihood, entropy, top-k probability mass, and reward-model win-probability diagnostics.
- [LiveBench: A challenging, contamination-free benchmark for large language models](failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) - LiveBench is a frequently updated, contamination-limited benchmark that uses recent sources and objective scoring across math, code, reasoning, language, instruction following, and data analysis.
- [How Well Can Preference Optimization Generalize Under Noisy Feedback?](failures/noisy-feedback-preference-optimization.md) - This paper studies how preference optimization generalizes when pairwise feedback is noisy through mislabeling or uncertainty.
- [Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](failures/reward-model-overoptimization-daa.md) - This paper audits reward-model overoptimization in direct alignment algorithms across KL budgets, objectives, datasets, and model scales.
- [Reward Shaping to Mitigate Reward Hacking in RLHF](failures/reward-shaping-to-mitigate-reward-hacking.md) - This paper proposes PAR, a bounded centered reward-shaping method intended to reduce reward hacking in RLHF.
- [Subliminal Learning](failures/subliminal-learning.md) - Subliminal Learning shows that teacher models can transmit behavioral traits through semantically unrelated generated data, even after visible trait references are filtered.

## How To Improve A Card

- Replace `unknown` only after checking primary artifacts.
- Add code, data, project, or Hugging Face links only when they are official.
- Record false positives, false negatives, leakage risks, license constraints, and replay assumptions as soon as they are known.
- Keep card language concise enough for scanning, but specific enough that a new reader can classify the artifact without opening the paper first.
