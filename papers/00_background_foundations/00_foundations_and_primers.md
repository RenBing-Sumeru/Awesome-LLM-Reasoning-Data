# 🧭 Foundations and Primers

> Surveys, primers, classic post-training lineages, data documentation, and evaluation background for readers entering the field.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=foundations_and_primers&mode=find_papers)
> Try: `What should I read first for 🧭 Foundations & Primers?`
> Try: `Compare the data objects and verifier types in 🧭 Foundations & Primers.`
> Try: `Generate an audit checklist for 🧭 Foundations & Primers.`

## 1. What This Track Studies

Use this track when you need the map before the terrain: vocabulary, taxonomies, historical lineages, and recurring audit questions.

This track is the front door of the atlas. It gives new readers a controlled way to understand post-training reasoning data before opening dozens of specialized papers. The goal is not to flatten the field into a generic survey list; it is to teach the reader which objects repeat across the repo: prompts, traces, answers, verifiers, rewards, judges, environments, metadata, and audit evidence.

The track combines field surveys with foundational alignment-data papers because modern reasoning-data work inherits older habits from instruction tuning, RLHF, preference optimization, chain-of-thought prompting, self-training, and data documentation. Those lineages explain why a reasoning-data release is more than a prompt-answer table and why every useful entry needs source, label, verifier, split, license, and contamination context.

Readers should treat this page as a routing layer. Extract the taxonomy first, then jump into the data-type tracks once you know whether you are studying demonstrations, preference pairs, programmatically verified outcomes, process labels, rollout traces, agent episodes, or rubric judgments.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧭 Post-training surveys | field-level maps of post-training, reasoning models, and data-centric LLM practice | survey taxonomy hides concrete data objects |
| 🧠 Reasoning LLM surveys | reasoning-model lineages, claims, and recurring evaluation patterns | model-centric framing obscures data and verifier details |
| 📦 Data documentation / datasheets | datasheets, data statements, lineage, license, and release metadata | reusable data lacks provenance or consent context |
| 🧪 RLHF / reward-model surveys | background linking preference data, reward models, and reasoning rewards | generic alignment lessons are over-applied to verifiable reasoning |
| 🌐 Agent data / tool-use surveys | orientation for tools, web tasks, OS tasks, and repository agents | agent traces are treated as transcripts rather than replayable episodes |
| 🧯 Contamination / evaluation surveys | reproducibility, contamination, model collapse, and benchmark refresh | benchmark deltas are accepted without overlap checks |

### Contents

- [🧭 Post-training surveys](#post-training-surveys)
- [🧠 Reasoning LLM surveys](#reasoning-llm-surveys)
- [📦 Data documentation / datasheets](#data-documentation-datasheets)
- [🧪 RLHF / reward-model surveys](#rlhf-reward-model-surveys)
- [🌐 Agent data / tool-use surveys](#agent-data-tool-use-surveys)
- [🧯 Contamination / evaluation surveys](#contamination-evaluation-surveys)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Aegis2.0](https://arxiv.org/abs/2501.09004) | 2025 | [Paper](https://arxiv.org/abs/2501.09004) · [ACL](https://aclanthology.org/2025.naacl-long.306/) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) · [Card](../../cards/verifiers/aegis2.md) | prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: hazard category, fine-grained risk label, response-safety decision, split metadata when using the dataset release.; offline guardrail training/evaluation dataset. | risk labels and guard-model evaluation signal. | It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification. |
| [Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535) | 2024 | [Paper](https://arxiv.org/abs/2405.01535) · [ACL](https://aclanthology.org/2024.emnlp-main.248/) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [Code](https://github.com/prometheus-eval/prometheus-eval) · [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0) · [Card](../../cards/verifiers/prometheus-2.md) | rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights. | Prometheus 2 judge output aligned against human/proprietary-judge benchmarks. | It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes. |
| [Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124) | 2024 | [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) · [Card](../../cards/recipes/tulu-3.md) | instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases. | mixture of preference labels, reward models, and verifiable rewards depending on stage. | It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together. |
| [Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560) | 2023 | [Paper](https://arxiv.org/abs/2212.10560) · [Card](../../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) | answer level | mixed | It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion. |
| [UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377) | 2023 | [Paper](https://arxiv.org/abs/2310.01377) · [Code](https://github.com/OpenBMB/UltraFeedback) · [Data](https://huggingface.co/datasets/openbmb/UltraFeedback) · [Card](../../cards/releases/ultrafeedback.md) | instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline. | AI-generated scalar and textual feedback over response quality dimensions. | It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels. |
| [DeepMath-103K](https://arxiv.org/abs/2504.11456) | 2025 | [Paper](https://arxiv.org/abs/2504.11456) · [Card](../../cards/releases/deepmath_103k.md) | answer level | programmatic | Math release highlighted for verifier pinning and decontamination. |
| [Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949) | 2025 | [Paper](https://arxiv.org/abs/2505.00949) · [Card](../../cards/recipes/llama_nemotron.md) | answer level | mixed | Mixed post-training corpus reference for reasoning, chat, and safety partitions. |
| [Training a helpful and harmless assistant with reinforcement learning from human feedback](https://arxiv.org/abs/2204.05862) | 2022 | [Paper](https://arxiv.org/abs/2204.05862) · [DOI](https://doi.org/10.48550/arXiv.2204.05862) · [Data](https://github.com/anthropics/hh-rlhf) · [HF](https://huggingface.co/datasets/Anthropic/hh-rlhf) · [Card](../../cards/releases/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback.md) | Chosen/rejected text pairs for helpfulness and harmlessness preference modeling.; process: conversation prompt, chosen response, rejected response; Offline assistant preference-modeling dataset. | Human preference labels used to train preference/reward models. | It is a concrete open assistant feedback object: prompt context, chosen response, rejected response, split, and safety-specific reward-modeling risks. |
| [Multitask prompted training enables zero-shot task generalization](https://arxiv.org/abs/2110.08207) | 2021 | [Paper](https://arxiv.org/abs/2110.08207) · [Venue](https://openreview.net/forum?id=9Vrb9D0WI4) · [DOI](https://doi.org/10.48550/arXiv.2110.08207) · [Code](https://github.com/bigscience-workshop/t-zero) · [Data](https://huggingface.co/datasets/bigscience/P3) · [HF](https://huggingface.co/bigscience/T0pp) · [Project](https://github.com/bigscience-workshop/promptsource) · [Card](../../cards/recipes/multitask-prompted-training-enables-zero-shot-task-generalization.md) | Prompted input plus target output.; process: dataset, subset, prompt id; Offline multitask prompted fine-tuning. | Source-dataset labels and task-specific metrics. | It is a Track 01 reference for prompt-source infrastructure: the data object includes dataset source, prompt template, target output, and held-out task policy. |
| [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086) | 2025 | [Paper](https://arxiv.org/abs/2504.07086) · [Card](../../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) | survey background | metadata pending | It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains. |

## 5. Full Paper List

### <a id="post-training-surveys"></a>🧭 Post-training surveys

- 🧭 **[A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328)**
  <sub>2025 · arXiv · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.12328) · [DOI](https://doi.org/10.48550/arXiv.2504.12328) · [Project](https://github.com/JLZhong23/awesome-reward-models) · [Card](../../cards/verifiers/a-comprehensive-survey-of-reward-models.md)
  _Data object:_ Taxonomy over reward-model sources, architectures, usage modes, applications, benchmarks, and challenges.; process: preference source, reward model type, usage mode; LLM reward-model training, evaluation, and post-training pipelines.
  _Feedback / verifier:_ Learned or rubric/judge-derived reward model used as proxy feedback.
  _Recipe signal:_ teacher: Human and AI preference sources summarized across reward-model literature.; generator: Survey taxonomy and companion resource list.
  _Audit focus:_ Reward models can encode annotator, style, length, or domain bias., Proxy rewards can be overoptimized or attacked., Benchmark scores do not prove downstream training usefulness.
  _Why it matters:_ It gives Track 00 vocabulary for comparing learned rewards, PRMs, rubrics, LLM judges, and programmatic verifiers.
- 🧭 **[A Survey on Human Preference Learning for Large Language Models](https://arxiv.org/abs/2406.11191)**
  <sub>2024 · arXiv · 🧭 survey background · judgment required · mixed · preference learning · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.11191) · [DOI](https://doi.org/10.48550/arXiv.2406.11191) · [Card](../../cards/verifiers/a-survey-on-human-preference-learning-for-large-language-models.md)
  _Data object:_ Preference-centered taxonomy over feedback data, modeling, usage, and evaluation.; process: preference source, preference format, preference model; LLM alignment pipelines using human preference signals.
  _Feedback / verifier:_ Human preference transformed into reward, preference loss, or evaluation judgment.
  _Recipe signal:_ teacher: Human preference providers and preference-labeled datasets summarized by the survey.; generator: Survey taxonomy.
  _Audit focus:_ Check annotator assumptions, preference format, and disagreement policy., Preference labels may not preserve reasoning correctness., Evaluation can conflate helpfulness, style, harmlessness, and reasoning quality.
  _Why it matters:_ It helps readers distinguish demonstrations, pairwise comparisons, scalar rewards, DPO-style objectives, and evaluation judgments.
- 🧭 **[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216)**
  <sub>2024 · arXiv · 🧭 survey background · mixed · programmatic · reward modeling · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216) · [Card](../../cards/recipes/reinforcement-learning-for-llm-post-training-a-survey.md)
  _Data object:_ Technical taxonomy comparing RLHF and RLVR policy-gradient-style methods.; process: prompt sampling, response sampling, reward source; LLM post-training algorithms and reasoning tasks such as math and coding.
  _Feedback / verifier:_ Learned preference rewards, verifiable rewards, and policy-gradient objectives.
  _Recipe signal:_ teacher: Literature covering SFT, human feedback, verifiable rewards, and post-training optimization.; generator: Technical survey and unified policy-gradient framework.
  _Audit focus:_ Separate data source, reward contract, rollout policy, optimizer, model size, and inference budget., Check false positives, reward hacking, sampling budget, and benchmark reuse., Do not attribute gains to generic RL without naming the data and reward object.
  _Why it matters:_ It helps readers avoid conflating human preference rewards with programmatic or verifiable rewards in reasoning-data pipelines.
- 🧭 **[A Survey of Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2312.14925)**
  <sub>2023 · TMLR · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.14925) · [Venue](https://openreview.net/forum?id=f7OkIurx4b) · [DOI](https://doi.org/10.48550/arXiv.2312.14925) · [Card](../../cards/recipes/a-survey-of-reinforcement-learning-from-human-feedback.md)
  _Data object:_ Survey taxonomy over feedback collection, reward modeling, and policy optimization.; process: feedback source, preference format, reward model objective; RLHF pipelines spanning LLMs and broader RL domains.
  _Feedback / verifier:_ Human feedback transformed into learned reward or policy-optimization signal.
  _Recipe signal:_ teacher: Human feedback providers summarized across the literature.; generator: Survey taxonomy.
  _Audit focus:_ Do not infer reusable datasets from survey descriptions alone., Follow primary sources for provenance, license, split, and annotator details., Avoid overgeneralizing broad RLHF lessons to verifiable reasoning.
  _Why it matters:_ It helps readers distinguish human feedback, reward modeling, and policy optimization before comparing them with verifiable-reward reasoning data.
- 🧭 **[A Survey on LLM Mid-Training](https://arxiv.org/abs/2510.23081)**
  <sub>2025 · arXiv preprint arXiv:2510.23081 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2510.23081)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Mid-Training of Large Language Models: A Survey](https://arxiv.org/abs/2510.06826)**
  <sub>2025 · arXiv preprint arXiv:2510.06826 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2510.06826)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="reasoning-llm-surveys"></a>🧠 Reasoning LLM surveys

- 🧭 **[Multi-Step Reasoning with Large Language Models, a Survey](https://arxiv.org/abs/2407.11511)**
  <sub>2024 · arXiv · 🧭 survey background · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.11511) · [DOI](https://doi.org/10.48550/arXiv.2407.11511) · [Card](../../cards/recipes/multi-step-reasoning-with-large-language-models-a-survey.md)
  _Data object:_ Taxonomy and literature map for multi-step reasoning methods.; process: reasoning method, generation strategy, evaluation method; LLM multi-step reasoning tasks and methods.
  _Feedback / verifier:_ Mixed evaluation and control signals summarized by the survey; no single verifier.
  _Recipe signal:_ teacher: Reasoning-LLM literature.; generator: Survey taxonomy.
  _Audit focus:_ Do not treat model-centric taxonomy as trainable data quality proof., Check trace authorship, verifier contract, tool environment, budget, and contamination controls in each primary paper., Separate reasoning ability, trace style, external tools, and benchmark performance.
  _Why it matters:_ It helps readers route model-centric reasoning claims into concrete questions about traces, verifiers, tools, rewards, and evaluation surfaces.
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

### <a id="data-documentation-datasheets"></a>📦 Data documentation / datasheets

- 🧭 **[Data statements for natural language processing](https://aclanthology.org/Q18-1041/)**
  <sub>2018 · TACL · 🧭 survey background · unknown · audit · L5_audit_ready</sub>
  [Paper](https://aclanthology.org/Q18-1041/) · [Card](../../cards/releases/data-statements-for-natural-language-processing.md)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization.
- 🧭 **[Datasheets for datasets](https://arxiv.org/abs/1803.09010)**
  <sub>2018 · arXiv · 🧭 survey background · unknown · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/1803.09010) · [Card](../../cards/releases/datasheets-for-datasets.md)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives reasoning-data releases a minimum disclosure standard before anyone reuses prompts, traces, labels, rewards, or benchmark items.

### <a id="rlhf-reward-model-surveys"></a>🧪 RLHF / reward-model surveys

- 📈 **[Scaling laws for reward model overoptimization](https://arxiv.org/abs/2210.10760)**
  <sub>2022 · ICML · 📈 scaling study · 🧯 audit failure · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2210.10760) · [Venue](https://proceedings.mlr.press/v202/gao23h.html) · [OpenReview](https://openreview.net/forum?id=bBLjms8nZE) · [DOI](https://doi.org/10.48550/arXiv.2210.10760) · [Card](../../cards/failures/scaling-laws-for-reward-model-overoptimization.md)
  _Data object:_ Proxy reward scores, gold reward scores, KL budget, optimization method, and scale variables.; process: proxy reward score, gold reward score, optimization method; Synthetic reward-model overoptimization experiments.
  _Feedback / verifier:_ Proxy reward model compared against a stronger gold reward model.
  _Recipe signal:_ teacher: Fixed gold reward model used as synthetic human labeler.; generator: Policy optimized via RL or best-of-n sampling.
  _Audit focus:_ Check proxy/gold reward separation, KL budget, and best-of-n budget., Do not treat reward score improvement as data-quality proof., Verify whether conclusions transfer to each domain's feedback contract.
  _Why it matters:_ It gives reward-model readers a concrete audit lens for separating proxy reward gains from real preference improvement.
- 🧭 **[A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328)**
  <sub>2025 · arXiv · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.12328) · [DOI](https://doi.org/10.48550/arXiv.2504.12328) · [Project](https://github.com/JLZhong23/awesome-reward-models) · [Card](../../cards/verifiers/a-comprehensive-survey-of-reward-models.md)
  _Data object:_ Taxonomy over reward-model sources, architectures, usage modes, applications, benchmarks, and challenges.; process: preference source, reward model type, usage mode; LLM reward-model training, evaluation, and post-training pipelines.
  _Feedback / verifier:_ Learned or rubric/judge-derived reward model used as proxy feedback.
  _Recipe signal:_ teacher: Human and AI preference sources summarized across reward-model literature.; generator: Survey taxonomy and companion resource list.
  _Audit focus:_ Reward models can encode annotator, style, length, or domain bias., Proxy rewards can be overoptimized or attacked., Benchmark scores do not prove downstream training usefulness.
  _Why it matters:_ It gives Track 00 vocabulary for comparing learned rewards, PRMs, rubrics, LLM judges, and programmatic verifiers.
- 🧭 **[A Survey on Human Preference Learning for Large Language Models](https://arxiv.org/abs/2406.11191)**
  <sub>2024 · arXiv · 🧭 survey background · judgment required · mixed · preference learning · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.11191) · [DOI](https://doi.org/10.48550/arXiv.2406.11191) · [Card](../../cards/verifiers/a-survey-on-human-preference-learning-for-large-language-models.md)
  _Data object:_ Preference-centered taxonomy over feedback data, modeling, usage, and evaluation.; process: preference source, preference format, preference model; LLM alignment pipelines using human preference signals.
  _Feedback / verifier:_ Human preference transformed into reward, preference loss, or evaluation judgment.
  _Recipe signal:_ teacher: Human preference providers and preference-labeled datasets summarized by the survey.; generator: Survey taxonomy.
  _Audit focus:_ Check annotator assumptions, preference format, and disagreement policy., Preference labels may not preserve reasoning correctness., Evaluation can conflate helpfulness, style, harmlessness, and reasoning quality.
  _Why it matters:_ It helps readers distinguish demonstrations, pairwise comparisons, scalar rewards, DPO-style objectives, and evaluation judgments.
- 🧭 **[Reinforcement Learning for LLM Post-Training: A Survey](https://arxiv.org/abs/2407.16216)**
  <sub>2024 · arXiv · 🧭 survey background · mixed · programmatic · reward modeling · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16216) · [DOI](https://doi.org/10.48550/arXiv.2407.16216) · [Card](../../cards/recipes/reinforcement-learning-for-llm-post-training-a-survey.md)
  _Data object:_ Technical taxonomy comparing RLHF and RLVR policy-gradient-style methods.; process: prompt sampling, response sampling, reward source; LLM post-training algorithms and reasoning tasks such as math and coding.
  _Feedback / verifier:_ Learned preference rewards, verifiable rewards, and policy-gradient objectives.
  _Recipe signal:_ teacher: Literature covering SFT, human feedback, verifiable rewards, and post-training optimization.; generator: Technical survey and unified policy-gradient framework.
  _Audit focus:_ Separate data source, reward contract, rollout policy, optimizer, model size, and inference budget., Check false positives, reward hacking, sampling budget, and benchmark reuse., Do not attribute gains to generic RL without naming the data and reward object.
  _Why it matters:_ It helps readers avoid conflating human preference rewards with programmatic or verifiable rewards in reasoning-data pipelines.
- 🧭 **[A Survey of Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2312.14925)**
  <sub>2023 · TMLR · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.14925) · [Venue](https://openreview.net/forum?id=f7OkIurx4b) · [DOI](https://doi.org/10.48550/arXiv.2312.14925) · [Card](../../cards/recipes/a-survey-of-reinforcement-learning-from-human-feedback.md)
  _Data object:_ Survey taxonomy over feedback collection, reward modeling, and policy optimization.; process: feedback source, preference format, reward model objective; RLHF pipelines spanning LLMs and broader RL domains.
  _Feedback / verifier:_ Human feedback transformed into learned reward or policy-optimization signal.
  _Recipe signal:_ teacher: Human feedback providers summarized across the literature.; generator: Survey taxonomy.
  _Audit focus:_ Do not infer reusable datasets from survey descriptions alone., Follow primary sources for provenance, license, split, and annotator details., Avoid overgeneralizing broad RLHF lessons to verifiable reasoning.
  _Why it matters:_ It helps readers distinguish human feedback, reward modeling, and policy optimization before comparing them with verifiable-reward reasoning data.

### <a id="agent-data-tool-use-surveys"></a>🌐 Agent data / tool-use surveys

- 🧭 **[A Survey on Evaluation of LLM-based Agents](https://arxiv.org/abs/2503.16416)**
  <sub>2025 · arXiv · 🧭 survey background · environmental · mixed · evaluation · audit · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.16416)
  _Data object:_ survey taxonomy for agent evaluation tasks and environments.; process: task, environment, trajectory, evaluator, terminal predicate.; LLM-agent evaluation literature.
  _Feedback / verifier:_ environmental and benchmark evaluators summarized by the survey.
  _Recipe signal:_ release audit; evaluation; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives the atlas an agent-survey waypoint for readers who need to understand environment data before comparing SWE, web, app, or OS agent benchmarks.

### <a id="contamination-evaluation-surveys"></a>🧯 Contamination / evaluation surveys

- 🧰 **[LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · mixed · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/) · [Card](../../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic, mixed
  _Recipe signal:_ release audit; evaluation; audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.
- 🧭 **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · unknown · unknown · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07086) · [Card](../../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains.
- 🧯 **[Language Model Developers Should Report Train-Test Overlap](https://arxiv.org/abs/2410.08385)**
  <sub>2024 · arXiv · 🧯 audit failure · 🧭 survey background · unknown · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.08385) · [DOI](https://doi.org/10.48550/arXiv.2410.08385) · [Card](../../cards/failures/language-model-developers-should-report-train-test-overlap.md)
  _Data object:_ Overlap-reporting analysis over model developers, training data disclosure, overlap methodology, and public-test-set claims.; process: model developer, evaluation set, training data access; Benchmark and training-data documentation.
  _Feedback / verifier:_ Overlap analysis rather than reward model.
  _Recipe signal:_ teacher: Model developers and evaluators reporting corpus/evaluation relationships.; generator: Audit survey over reporting practices.
  _Audit focus:_ Ask whether training data is public and overlap statistics are reported., Check overlap methodology and benchmark reuse., Separate memorization, contamination, and genuine reasoning improvement.
  _Why it matters:_ It gives the atlas a direct reason to record overlap, data reuse, and disclosure policy before treating benchmark gains as reasoning progress.
- 🧭 **[Soft Contamination Means Benchmarks Test Shallow Generalization](https://arxiv.org/abs/2602.12413)**
  <sub>2026 · arXiv preprint arXiv:2602.12413 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.12413)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Search-Time Data Contamination](https://arxiv.org/abs/2508.13180)**
  <sub>2025 · arXiv preprint arXiv:2508.13180 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.13180)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### <a id="other-related-work"></a>Other related work

- 📦 **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · judgment required · mixed · safety alignment · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.09004) · [ACL](https://aclanthology.org/2025.naacl-long.306/) · [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0) · [Card](../../cards/verifiers/aegis2.md)
  _Data object:_ prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: hazard category, fine-grained risk label, response-safety decision, split metadata when using the dataset release.; offline guardrail training/evaluation dataset.
  _Feedback / verifier:_ risk labels and guard-model evaluation signal.
  _Recipe signal:_ teacher: human annotators and multi-LLM jury system.; generator: safety prompts and human-LLM interactions collected or generated for taxonomy coverage.
  _Audit focus:_ Taxonomy labels can hide disagreement between annotators or judge models., Safety datasets can overfit visible hazard categories and miss emerging harms., Guardrail training may trade helpfulness for over-refusal if topic-following data is not tracked.
  _Why it matters:_ It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification.
- 🚀 **[DeepSeek-R1](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · distillation · rlvr · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2501.12948) · [Card](../../cards/recipes/deepseek_r1.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; distillation; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.
- 🧪 **[Prometheus 2: An open source language model specialized in evaluating other language models](https://arxiv.org/abs/2405.01535)**
  <sub>2024 · EMNLP · 🧪 verifier reward · 🚀 model report · judgment required · reward modeling · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2405.01535) · [ACL](https://aclanthology.org/2024.emnlp-main.248/) · [DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [Code](https://github.com/prometheus-eval/prometheus-eval) · [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0) · [Card](../../cards/verifiers/prometheus-2.md)
  _Data object:_ rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights.
  _Feedback / verifier:_ Prometheus 2 judge output aligned against human/proprietary-judge benchmarks.
  _Recipe signal:_ teacher: human judgments and strong evaluator references across direct and pairwise tasks.; generator: training pipeline merges evaluator capabilities across formats.
  _Audit focus:_ Open judges can inherit rubric bias., Agreement with another judge is not the same as correctness., Pairwise and scalar formats can disagree.
  _Why it matters:_ It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes.
- 🚀 **[Tulu 3: Pushing frontiers in open language model post-training](https://arxiv.org/abs/2411.15124)**
  <sub>2024 · arXiv · 🚀 model report · 🏗️ construction recipe · mixed · programmatic · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2411.15124) · [OpenReview](https://openreview.net/forum?id=i1uGbfHHpH) · [Code](https://github.com/allenai/open-instruct) · [Data](https://huggingface.co/collections/allenai/tulu-3-datasets) · [Project](https://allenai.org/blog/tulu-3-technical) · [Card](../../cards/recipes/tulu-3.md)
  _Data object:_ instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt, response, preference label or reward, evaluation split, decontamination status.; open-instruct training/evaluation stack and Hugging Face dataset/model releases.
  _Feedback / verifier:_ mixture of preference labels, reward models, and verifiable rewards depending on stage.
  _Recipe signal:_ teacher: synthetic instruction data, preference sources, reward signals, and verifiable tasks.; generator: open data curation and post-training pipeline produces model checkpoints and evaluation artifacts.
  _Audit focus:_ Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., RLVR improvements may be domain-specific.
  _Why it matters:_ It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.
- 🧰 **[Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.05685) · [Venue](https://papers.nips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html) · [OpenReview](https://openreview.net/forum?id=uccHPGDlao) · [Code](https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge) · [Card](../../cards/verifiers/mt-bench-chatbot-arena.md)
  _Data object:_ model response, judge score, pairwise preference, or arena battle outcome.; process: question, turn, model identity, response, judge prompt template, score, preference label, bias-control setting.; offline judge harness and crowd-sourced arena platform.
  _Feedback / verifier:_ strong model judge and human preference comparisons.
  _Recipe signal:_ teacher: human preferences and strong model judges.; generator: candidate chat models answer MT-Bench and arena prompts.
  _Audit focus:_ Judge scores can be position-biased., Verbose answers can be over-rewarded., A model judge may share weaknesses with the evaluated model.
  _Why it matters:_ It is the standard cautionary reference for judge data: scalable model judges are useful, but position, verbosity, self-enhancement, and limited-reasoning biases must be audited.
- 🏗️ **[Orca: Progressive learning from complex explanation traces of GPT-4](https://arxiv.org/abs/2306.02707)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 🚀 model report · judgment required · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.02707) · [Project](https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/) · [Card](../../cards/recipes/orca.md)
  _Data object:_ instruction response with detailed explanation, intermediate reasoning, and final answer.; process: prompt source, teacher identity, explanation trace, task type, response, evaluation benchmark.; offline synthetic-data distillation and evaluation pipeline.
  _Feedback / verifier:_ downstream reasoning, exam, and benchmark evaluation rather than a single automatic verifier.
  _Recipe signal:_ teacher: large foundation models that produce explanation traces and stepwise guidance.; generator: teacher-assisted data-generation pipeline over diverse instructions.
  _Audit focus:_ Students can learn teacher style without robust reasoning., Synthetic traces can include teacher errors., Closed teacher data makes lineage hard to audit.
  _Why it matters:_ It is an early and influential reasoning-distillation recipe: the reusable object is teacher-assisted explanation data plus careful evaluation against style-only imitation.
- 🏗️ **[Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560)**
  <sub>2023 · ACL · 🏗️ construction recipe · 📦 data release · mixed · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.10560) · [Card](../../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ prompt sourcing; trace writing; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion.
- 📈 **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 📈 scaling study · 🧭 survey background · mixed · programmatic · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [OpenReview](https://openreview.net/forum?id=1PL1NIMMrw) · [Card](../../cards/recipes/self-consistency-chain-of-thought.md)
  _Data object:_ multiple rationales and final answers for the same prompt.; process: sampling temperature, number of paths, answer extraction, aggregation rule.; benchmark prompting setup.
  _Feedback / verifier:_ majority or marginalization over sampled answers.
  _Recipe signal:_ teacher: few-shot chain-of-thought exemplars.; generator: model samples many reasoning paths.
  _Audit focus:_ More samples can amplify benchmark-specific shortcuts., Aggregation does not guarantee step faithfulness., Unmatched inference budgets can make methods look better than they are.
  _Why it matters:_ It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.
- 📦 **[UltraFeedback: Boosting language models with high-quality feedback](https://arxiv.org/abs/2310.01377)**
  <sub>2023 · ICML · 📦 data release · 🧪 verifier reward · judgment required · preference learning · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.01377) · [Code](https://github.com/OpenBMB/UltraFeedback) · [Data](https://huggingface.co/datasets/openbmb/UltraFeedback) · [Card](../../cards/releases/ultrafeedback.md)
  _Data object:_ instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline.
  _Feedback / verifier:_ AI-generated scalar and textual feedback over response quality dimensions.
  _Recipe signal:_ teacher: AI judge annotations and rubric instructions.; generator: candidate responses are sampled from a diverse model pool.
  _Audit focus:_ AI feedback can encode judge-model bias., A corrected dataset version can change reward-model behavior., Fine-grained scores may not translate cleanly into pairwise preferences.
  _Why it matters:_ It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels.
- 🏗️ **[Constitutional AI: Harmlessness from AI feedback](https://arxiv.org/abs/2212.08073)**
  <sub>2022 · arXiv preprint · 🏗️ construction recipe · 🧭 survey background · judgment required · mixed · preference learning · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2212.08073) · [Project](https://github.com/anthropics/ConstitutionalHarmlessnessPaper) · [Card](../../cards/recipes/constitutional-ai.md)
  _Data object:_ original answer, self-critique, revised answer, preference pair, reward-model score.; process: principle used, critique, revision, comparison, preference label.; offline SL and RLHF/RLAIF alignment pipeline.
  _Feedback / verifier:_ AI preference model trained from comparisons guided by constitutional principles.
  _Recipe signal:_ teacher: constitution/principles plus critique-and-revision model behavior.; generator: model produces critiques, revisions, and response pairs.
  _Audit focus:_ AI feedback can encode model bias at scale., Principles may be underspecified or culturally narrow., A model can become safe-looking but evasive if helpfulness is not audited.
  _Why it matters:_ It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data.
- 🏗️ **[STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🧭 survey background · mixed · sft · distillation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.14465) · [Card](../../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ trace writing; self play anchor; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering.
- 🧭 **[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)**
  <sub>2022 · NeurIPS · 🧭 survey background · 🚀 model report · judgment required · sft · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2203.02155) · [Card](../../cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md)
  _Data object:_ pairwise preference; scalar reward
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ prompt sourcing; reward verifier layer; sft
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models.
- 🧭 **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · judgment required · preference learning · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.18290) · [Card](../../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md)
  _Data object:_ pairwise preference
  _Feedback / verifier:_ judgment required
  _Recipe signal:_ optimizer scaffold; preference learning
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization.
- 🧭 **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · unknown · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2201.11903) · [Card](../../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md)
  _Data object:_ answer level
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ trace writing; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets.
- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Card](../../cards/releases/deepmath_103k.md)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ prompt sourcing; reward verifier layer; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- 🚀 **[Llama-Nemotron: Efficient Reasoning Models](https://arxiv.org/abs/2505.00949)**
  <sub>2025 · arXiv · 🚀 model report · 📦 data release · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.00949) · [Card](../../cards/recipes/llama_nemotron.md)
  _Data object:_ answer level
  _Feedback / verifier:_ mixed
  _Recipe signal:_ frontier pipeline; sft; distillation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Mixed post-training corpus reference for reasoning, chat, and safety partitions.
- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [Card](../../cards/verifiers/spurious_rewards.md)
  _Data object:_ scalar reward
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ reward verifier layer; rlvr; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
- 🏗️ **[Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020)**
  <sub>2024 · ICML · 🏗️ construction recipe · 🧪 verifier reward · judgment required · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2401.10020) · [DOI](https://doi.org/10.48550/arXiv.2401.10020) · [Card](../../cards/recipes/self-rewarding-language-models.md)
  _Data object:_ Candidate responses with self-generated reward/judgment signal for iterative DPO.; process: prompt, candidate response, self reward; Offline iterative preference-training loop.
  _Feedback / verifier:_ The language model itself acting as judge.
  _Recipe signal:_ teacher: The model-as-judge produces reward signal.; generator: The model produces candidate responses and judgments.
  _Audit focus:_ Inspect judge prompt, response sampling, preference conversion, and iteration count., Check calibration against external human or benchmark signals., Watch for style bias, overconfidence, and feedback collapse.
  _Why it matters:_ It makes self-generated judge feedback a first-class post-training data object with clear risks around judge bias and reward hacking.
- 🧯 **[Language models do not always say what they think: Unfaithful explanations in chain-of-thought prompting](https://arxiv.org/abs/2305.04388)**
  <sub>2023 · NeurIPS · 🧯 audit failure · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.04388) · [DOI](https://doi.org/10.48550/arXiv.2305.04388) · [Card](../../cards/failures/language-models-dont-always-say-what-they-think.md)
  _Data object:_ Task answer plus generated explanation.; process: prompt, biasing feature, chain of thought; Offline prompting/evaluation setup.
  _Feedback / verifier:_ Task correctness plus intervention/bias-attribution analysis.
  _Recipe signal:_ teacher: Not applicable.; generator: Prompted LLMs under biased and unbiased prompt variants.
  _Audit focus:_ Check whether CoT traces causally affect answers., Audit prompt artifacts and social-bias rationalization., Pin model/version details before reuse.
  _Why it matters:_ It prevents treating rationale text as faithful reasoning data unless interventions check whether the trace actually drives the answer.
- 🧯 **[Measuring faithfulness in chain-of-thought reasoning](https://arxiv.org/abs/2307.13702)**
  <sub>2023 · arXiv · 🧯 audit failure · mixed · audit · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.13702) · [DOI](https://doi.org/10.48550/arXiv.2307.13702) · [Card](../../cards/failures/measuring-faithfulness-in-chain-of-thought-reasoning.md)
  _Data object:_ CoT text plus answer before/after intervention.; process: prompt, original cot, cot intervention; Offline CoT intervention benchmark.
  _Feedback / verifier:_ Answer sensitivity to CoT interventions plus task correctness.
  _Recipe signal:_ teacher: Not applicable.; generator: Prompted LLMs plus controlled CoT edits.
  _Audit focus:_ Check model/task dependence and intervention type., Separate final correctness from trace faithfulness., Pin prompts and model versions.
  _Why it matters:_ It gives Track 01 a concrete audit lens for separating rationale text as a style target from rationale text as causal reasoning evidence.
- 📦 **[Training a helpful and harmless assistant with reinforcement learning from human feedback](https://arxiv.org/abs/2204.05862)**
  <sub>2022 · arXiv · 📦 data release · 🧪 verifier reward · judgment required · preference learning · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2204.05862) · [DOI](https://doi.org/10.48550/arXiv.2204.05862) · [Data](https://github.com/anthropics/hh-rlhf) · [HF](https://huggingface.co/datasets/Anthropic/hh-rlhf) · [Card](../../cards/releases/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback.md)
  _Data object:_ Chosen/rejected text pairs for helpfulness and harmlessness preference modeling.; process: conversation prompt, chosen response, rejected response; Offline assistant preference-modeling dataset.
  _Feedback / verifier:_ Human preference labels used to train preference/reward models.
  _Recipe signal:_ teacher: Human preference labelers.; generator: Assistant policies including base, rejection-sampled, and online policy samples.
  _Audit focus:_ Audit labeler instructions, prompt sources, tranche differences, and safety coverage., Do not treat chosen responses as safe SFT targets without extra review., Handle harmful/offensive content carefully.
  _Why it matters:_ It is a concrete open assistant feedback object: prompt context, chosen response, rejected response, split, and safety-specific reward-modeling risks.
- 🏗️ **[Finetuned language models are zero-shot learners](https://arxiv.org/abs/2109.01652)**
  <sub>2021 · ICLR · 🏗️ construction recipe · 🧭 survey background · mixed · sft · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2109.01652) · [DOI](https://doi.org/10.48550/arXiv.2109.01652) · [Code](https://github.com/google-research/FLAN) · [Card](../../cards/recipes/finetuned-language-models-are-zero-shot-learners.md)
  _Data object:_ Task-specific labels or text targets.; process: dataset, instruction template, input; Offline instruction-tuning and held-out task evaluation.
  _Feedback / verifier:_ Source-dataset labels and task metrics; no reusable reward model or verifier artifact.
  _Recipe signal:_ teacher: Existing supervised NLP datasets plus instruction templates.; generator: Template-based instruction verbalization.
  _Audit focus:_ Audit task mixture, template authorship, and held-out task boundaries., Check source dataset licenses and train/eval overlap., Do not treat answer-only task accuracy as evidence of reasoning-trace quality.
  _Why it matters:_ It is a foundation for reasoning SFT because later instruction and teacher-trace datasets inherit its mixture, template, and held-out-task audit questions.
- 🏗️ **[Multitask prompted training enables zero-shot task generalization](https://arxiv.org/abs/2110.08207)**
  <sub>2021 · ICLR · 🏗️ construction recipe · 📦 data release · mixed · sft · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2110.08207) · [Venue](https://openreview.net/forum?id=9Vrb9D0WI4) · [DOI](https://doi.org/10.48550/arXiv.2110.08207) · [Code](https://github.com/bigscience-workshop/t-zero) · [Data](https://huggingface.co/datasets/bigscience/P3) · [HF](https://huggingface.co/bigscience/T0pp) · [Project](https://github.com/bigscience-workshop/promptsource) · [Card](../../cards/recipes/multitask-prompted-training-enables-zero-shot-task-generalization.md)
  _Data object:_ Prompted input plus target output.; process: dataset, subset, prompt id; Offline multitask prompted fine-tuning.
  _Feedback / verifier:_ Source-dataset labels and task-specific metrics.
  _Recipe signal:_ teacher: Existing supervised datasets and human-readable prompt templates.; generator: PromptSource prompt functions.
  _Audit focus:_ Audit prompt authorship, source licenses, and train/held-out task boundaries., Check whether prompts leak task identity or label shortcuts., Treat prompt quality separately from reasoning-data quality.
  _Why it matters:_ It is a Track 01 reference for prompt-source infrastructure: the data object includes dataset source, prompt template, target output, and held-out task policy.
- 🧪 **[Deep reinforcement learning from human preferences](https://arxiv.org/abs/1706.03741)**
  <sub>2017 · NeurIPS · 🧪 verifier reward · 🧭 survey background · judgment required · reward modeling · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/1706.03741) · [Venue](https://papers.nips.cc/paper/7017-deep-reinforcement-learning-from-human-preferences) · [DOI](https://doi.org/10.48550/arXiv.1706.03741) · [Card](../../cards/verifiers/deep-reinforcement-learning-from-human-preferences.md)
  _Data object:_ Pairwise preference labels over short trajectory clips plus learned scalar rewards.; process: trajectory segment a, trajectory segment b, human preference; Atari and simulated control environments.
  _Feedback / verifier:_ Reward model trained from human preferences between trajectory segments.
  _Recipe signal:_ teacher: Non-expert human preference labelers.; generator: RL policy rollouts.
  _Audit focus:_ Audit labeler instructions, segment-selection policy, and reward-model calibration., Clip-level preferences may miss long-horizon failures., Optimizing learned rewards can exploit proxy errors.
  _Why it matters:_ It gives the atlas a foundational reward-model data object: trajectory clips, human comparisons, learned scalar rewards, and proxy-risk audits.
- 🪜 **[ReST-MCTS*](https://arxiv.org/abs/2406.03816)**
  <sub>2024 · arXiv · 🪜 process supervision · 🏗️ construction recipe · programmatic · mixed · process supervision · reward modeling · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2406.03816)
  _Data object:_ reasoning trajectory with intermediate search states; process: node state, rollout candidate, process reward score; MCTS-style reasoning tree
  _Feedback / verifier:_ process reward guided tree search
  _Recipe signal:_ generator: policy rollouts expanded by MCTS; filtering rule: process-reward-guided trajectory selection
  _Audit focus:_ search policy may overfit process reward artifacts, accepted traces can hide rejected rollout distribution, inference budget may be conflated with data quality
  _Why it matters:_ It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects.
- 🪜 **[Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](https://arxiv.org/abs/2406.18629)**
  <sub>2024 · arXiv · 🪜 process supervision · 🏗️ construction recipe · mixed · process supervision · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2406.18629)
  _Data object:_ step-wise preference pairs; process: reasoning step, preferred continuation, rejected continuation; offline long-chain reasoning traces
  _Feedback / verifier:_ step-wise preference optimization objective
  _Recipe signal:_ generator: multi-step reasoning policy; filtering rule: step-wise preferences over reasoning continuations
  _Audit focus:_ local step preference may not align with final correctness, preference construction can hide teacher or scorer bias, long-chain traces can overfit style instead of reasoning validity
  _Why it matters:_ It helps readers see how preference optimization becomes a process-level data problem when the chosen/rejected object is an intermediate continuation rather than a whole answer.
- 🧭 **[Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)](https://arxiv.org/abs/2602.01511)**
  <sub>2026 · arXiv preprint arXiv:2602.01511 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.01511)
  _Data object:_ survey background
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
- 🧭 **[Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis](https://arxiv.org/abs/2602.00846)**
  <sub>2026 · arXiv preprint arXiv:2602.00846 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.00846)
  _Data object:_ survey background
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
- 🧭 **[1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled)](https://arxiv.org/abs/2503.19633)**
  <sub>2025 · arXiv preprint arXiv:2503.19633 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.19633)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[AM-Thinking-v1: Advancing the Frontier of Reasoning at 32B Scale](https://arxiv.org/abs/2505.08311)**
  <sub>2025 · arXiv preprint arXiv:2505.08311 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.08311)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv preprint arXiv:2501.09004 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2501.09004)
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
- 🧭 **[Beyond Correctness: Harmonizing Process and Outcome Rewards through RL Training (PROF)](https://arxiv.org/abs/2509.03403)**
  <sub>2025 · arXiv preprint arXiv:2509.03403 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.03403)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Clip-Low Increases Entropy and Clip-High Decreases Entropy in Reinforcement Learning of Large Language Models](https://arxiv.org/abs/2509.26114)**
  <sub>2025 · arXiv preprint arXiv:2509.26114 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.26114)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Cognitive Behaviors that Enable Self-Improving Reasoners, or, Four Habits of Highly Effective STaRs](https://arxiv.org/abs/2503.01307)**
  <sub>2025 · arXiv preprint arXiv:2503.01307 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2503.01307)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[DeepMath-103K: A Large-Scale, Challenging, Decontaminated, and Verifiable Mathematical Dataset for Advancing Reasoning](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv preprint arXiv:2504.11456 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2504.11456)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556)**
  <sub>2025 · arXiv preprint arXiv:2512.02556 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2512.02556)
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
- 🧭 **[From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning](https://arxiv.org/abs/2505.22203)**
  <sub>2025 · arXiv preprint arXiv:2505.22203 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.22203)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[GRPO is Secretly a Process Reward Model](https://arxiv.org/abs/2509.21154)**
  <sub>2025 · arXiv preprint arXiv:2509.21154 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.21154)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[Gaperon: A Peppered English-French Generative Language Model Suite](https://arxiv.org/abs/2510.25771)**
  <sub>2025 · arXiv preprint arXiv:2510.25771 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2510.25771)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **[SafeChain: Safety of Language Models with Long Chain-of-Thought Reasoning Capabilities](https://arxiv.org/abs/2502.12025)**
  <sub>2025 · arXiv preprint arXiv:2502.12025 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.12025)
  _Data object:_ survey background
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
- 🧭 **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2407.21787)
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

### ⚠️ Needs search or metadata

- 🧭 **From system 1 to system 2: A survey of reasoning large language models**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **General reasoning models: Survey and perspectives**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **rStar-Math**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
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
- 🧭 **BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions**
  <sub>2024 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **HelpSteer2: Open-source preference data for helpfulness and safety**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
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
- 🧭 **Learning to reason with LLMs**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
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
- 🧭 **Data provenance for language models**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
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
- 🧭 **A primer in BERTology: What we know about how BERT works**
  <sub>2020 · TACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

## 6. What to Audit

- Does the taxonomy separate data objects, verifier contracts, and training uses?
- Does the survey cite primary sources rather than only secondary summaries?
- Are missing metadata fields called out instead of smoothed over?

## 7. Open Problems

- Which taxonomy best predicts what a downstream builder should do next?
- How should surveys represent partially disclosed frontier-model data recipes?
- What metadata fields are essential for a living Awesome list to stay reproducible?
- How can Chinese and English learning routes stay aligned as the field changes?

## 8. Related Cards

- [A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](../../cards/verifiers/a-comprehensive-survey-of-reward-models.md)
- [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](../../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
- [Aegis2.0](../../cards/verifiers/aegis2.md)
- [DeepMath-103K](../../cards/releases/deepmath_103k.md)
- [DeepSeek-R1](../../cards/recipes/deepseek_r1.md)
- [Llama-Nemotron: Efficient Reasoning Models](../../cards/recipes/llama_nemotron.md)
- [Spurious Rewards](../../cards/verifiers/spurious_rewards.md)
- [A Survey on Human Preference Learning for Large Language Models](../../cards/verifiers/a-survey-on-human-preference-learning-for-large-language-models.md)
- [Language Model Developers Should Report Train-Test Overlap](../../cards/failures/language-model-developers-should-report-train-test-overlap.md)
- [LiveBench: A challenging, contamination-free benchmark for large language models](../../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
- [Multi-Step Reasoning with Large Language Models, a Survey](../../cards/recipes/multi-step-reasoning-with-large-language-models-a-survey.md)
- [Prometheus 2: An open source language model specialized in evaluating other language models](../../cards/verifiers/prometheus-2.md)
- [Reinforcement Learning for LLM Post-Training: A Survey](../../cards/recipes/reinforcement-learning-for-llm-post-training-a-survey.md)
- [Self-Rewarding Language Models](../../cards/recipes/self-rewarding-language-models.md)
- [Tulu 3: Pushing frontiers in open language model post-training](../../cards/recipes/tulu-3.md)
- [A Survey of Reinforcement Learning from Human Feedback](../../cards/recipes/a-survey-of-reinforcement-learning-from-human-feedback.md)
- [Direct preference optimization: Your language model is secretly a reward model](../../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md)
- [Judging LLM-as-a-judge with MT-Bench and Chatbot Arena](../../cards/verifiers/mt-bench-chatbot-arena.md)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
