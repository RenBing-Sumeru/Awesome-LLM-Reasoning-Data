# 🔁 Rollout, Search, and Test-Time Trace Data

> Multiple rollouts, search trees, best-of-N samples, self-consistency traces, MCTS records, selected/rejected candidates, and test-time compute logs.

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
| [s1: Simple test-time scaling](https://arxiv.org/abs/2501.19393) | 2025 | [Paper](https://arxiv.org/abs/2501.19393) · [DOI](https://doi.org/10.48550/arXiv.2501.19393) · [Code](https://github.com/simplescaling/s1) · [Data](https://huggingface.co/datasets/simplescaling/s1K) · [HF](https://huggingface.co/simplescaling/s1-32B) · [Paper Card Source](../../paper_cards/library/cards/s1-simple-test-time-scaling-2025/sources) | question, source dataset, teacher reasoning trace, difficulty score, diversity cluster, quality decision, selected SFT record, token budget, forced stop or Wait extension, and final answer; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline | teacher-generated trace quality, benchmark answer correctness, and curation criteria for difficulty, diversity, and quality | s1 isolates a deliberately small trace set and a simple decoding intervention, making training-data scale and inference-budget effects easier to study together. |
| [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948) | 2025 | [Paper](https://arxiv.org/abs/2501.12948) · [DOI](https://doi.org/10.48550/arXiv.2501.12948) · [Code](https://github.com/deepseek-ai/DeepSeek-R1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-R1) · [Paper Card Source](../../paper_cards/library/cards/deepseek-r1-2025/sources) | prompt, policy checkpoint, sampled long reasoning response, final answer, accuracy and format rewards, rejection-sampling decision, SFT mixture membership, and distilled student target; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline | rule-based accuracy rewards and format rewards dominate verifiable reasoning tasks; quality filters and model-based signals supplement broader data | The report links emergent long reasoning under outcome RL to a practical multi-stage recipe that repairs readability and transfers behavior by rejection sampling and distillation. |
| [Efficient Long CoT Reasoning in Small Language Models](https://arxiv.org/abs/2505.18440) | 2025 | [Paper](https://arxiv.org/abs/2505.18440) · [DOI](https://doi.org/10.48550/arXiv.2505.18440) · [Paper Card Source](../../paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources) | Pruned long reasoning trace, final answer, validity outcome, and selected student-training example.; process: problem, teacher long cot, pruned steps; Mathematical-reasoning tasks with answer-based validation. | Programmatic or answer-based correctness checks validate traces selected for on-policy curation. | It makes long2short reasoning a data-lineage problem: teacher trace, pruning rule, student rollout, checker, and accepted compression all affect the result. |
| [PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456) | 2025 | [Paper](https://arxiv.org/abs/2502.01456) · [DOI](https://doi.org/10.48550/arXiv.2502.01456) · [Code](https://github.com/PRIME-RL/PRIME) · [Data](https://huggingface.co/datasets/PRIME-RL/Eurus-2-Rollout) · [HF](https://huggingface.co/PRIME-RL) · [Paper Card Source](../../paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources) | policy rollout with final outcome label, implicit process reward estimates, and policy update signal.; process: prompt, policy rollout, outcome label; online RL training loop | implicit process rewards derived from outcome labels and updated on policy rollouts. | It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds. |
| [ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861) | 2025 | [Paper](https://arxiv.org/abs/2501.07861) · [DOI](https://doi.org/10.48550/arXiv.2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR) · [Paper Card Source](../../paper_cards/library/cards/rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025/sources) | step-level preference data with retrieval context, process reward score, process explanation, and final answer.; process: query, retrieval context, partial reasoning state; RAG reasoning pipeline | Process Reward Model plus Process Explanation Model, with MCTS-guided search. | It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object. |
| [Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling](https://arxiv.org/abs/2408.16737) | 2025 | [Paper](https://arxiv.org/abs/2408.16737) · [OpenReview](https://openreview.net/forum?id=3OyaXFQuDl) · [Paper Card Source](../../paper_cards/library/cards/smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025/sources) | per-question candidate reasoning sets with final answers, correctness filters, generator identity, and compute- or price-matched budget records.; process: question, generator model, candidate solution; exact reference-answer checks for math, with LM-as-a-judge variants when gold answers are withheld. | final-answer matching is the default selector; Gemini models serve as judges in the no-ground-truth setting. | It makes sampling budget a first-class part of synthetic reasoning-data quality rather than treating teacher strength as the only variable. |
| [rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking](https://arxiv.org/abs/2501.04519) | 2025 | [Paper](https://arxiv.org/abs/2501.04519) · [DOI](https://doi.org/10.48550/arXiv.2501.04519) · [Code](https://github.com/microsoft/rStar/tree/rStar-math) · [Data](https://huggingface.co/datasets/ElonTusk2001/rstar_sft) · [Project](https://huggingface.co/datasets/ElonTusk2001/rstar_ppm) · [Paper Card Source](../../paper_cards/library/cards/rstar-math-2025/sources) | math question; code-augmented reasoning step; executable snippet and result; MCTS parent/child relation; complete rollout; terminal answer; visit/value statistics; SFT trace; sibling preference pair; evolution round; process: math question, code-augmented reasoning step, executable snippet and result; Search tree or formal proof-search substrate described by the paper. | A code executor and final-answer checker provide grounded outcome signals; the learned process preference model ranks partial paths and guides later MCTS. | Use it as a reference architecture for tree-to-SFT and tree-to-preference conversion, iterative policy/verifier co-training, and compute-aware test-time deep thinking. |
| [AlphaMath Almost Zero: Process Supervision without Process](https://arxiv.org/abs/2405.03553) | 2024 | [Paper](https://arxiv.org/abs/2405.03553) · [DOI](https://doi.org/10.48550/arXiv.2405.03553) · [Code](https://github.com/MARIO-Math-Reasoning/Super_MARIO) · [Data](https://huggingface.co/datasets/MARIO-Math-Reasoning/AlphaMath-Trainset) · [Project](https://openreview.net/forum?id=VaXnxQ3UKo) · [Paper Card Source](../../paper_cards/library/cards/alphamath-almost-zero-2024/sources) | math problem; partial solution state; candidate next step; MCTS node and branch; rollout terminal answer; correctness result; backed-up node value; selected reasoning path; process: math problem, partial solution state, candidate next step; Search tree or formal proof-search substrate described by the paper. | Final-answer matching or the task answer checker supplies the terminal outcome; an MCTS-derived value model acts as the selector for partial states. | Use this Card when designing answer-only-to-process-data pipelines, value-guided search, or comparisons between MCTS, beam search, and dense process annotation. |
| [AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802) | 2024 | [Paper](https://arxiv.org/abs/2405.16802) · [DOI](https://doi.org/10.48550/arXiv.2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV) · [Paper Card Source](../../paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources) | reasoning trace with step-level confidence-change annotations.; process: problem, candidate solution, reasoning step; offline reasoning traces | answer-trained verifier converted into automated process annotations. | It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision. |
| [DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search](https://arxiv.org/abs/2408.08152) | 2024 | [Paper](https://arxiv.org/abs/2408.08152) · [DOI](https://doi.org/10.48550/arXiv.2408.08152) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5) · [Data](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5/tree/main/datasets) · [Project](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL) · [Paper Card Source](../../paper_cards/library/cards/deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learning-and-monte-carlo-tree-search-2024/sources) | Lean theorem and imports; generated proof candidate; proof-assistant response; valid or failed proof path; RMaxTS node; intrinsic reward; selected path; terminal kernel verdict; search budget; process: Lean theorem and imports, generated proof candidate, proof-assistant response; Search tree or formal proof-search substrate described by the paper. | Lean 4 and mathlib provide executable proof validity and terminal closure; RMaxTS combines policy likelihood, search statistics, and intrinsic reward to select expansions. | Use this Card for formal-verifier-anchored search traces, RL from proof feedback, proof-path diversity, and the distinction between kernel validity and informal mathematical faithfulness. |

## 5. Full Paper List

### <a id="multiple-rollouts-best-of-n"></a>🎲 Multiple rollouts / best-of-N

- 🏗️ **[V-STaR: Training Verifiers for Self-Taught Reasoners](https://arxiv.org/abs/2402.06457)**
  <sub>2024 · COLM · 🏗️ construction recipe · 🧪 verifier reward · programmatic · mixed · sft · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.06457) · [DOI](https://doi.org/10.48550/arXiv.2402.06457) · [Paper Card Source](../../paper_cards/library/cards/v-star-training-verifiers-for-self-taught-reasoners-2024/sources)
  _Data object:_ problem, policy iteration, sampled solution, correctness label, positive-negative verifier pair, verifier score, candidate set, and selected answer; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline
  _Feedback / verifier:_ unit tests or exact-answer checks label generated solutions; DPO learns to prefer correct solutions over incorrect ones
  _Recipe signal:_ teacher: unit tests or exact-answer checks label generated solutions; DPO learns to prefer correct solutions over incorrect ones; generator: The policy or teacher model generates candidate reasoning traces.
  _Audit focus:_ incorrect labels inherit weaknesses of tests and answer normalization, verifier gains may be confounded with larger candidate budgets, pairs from the current policy may narrow verifier coverage across iterations
  _Why it matters:_ Unlike STaR, V-STaR does not discard incorrect generations: it converts them into preference data and closes the loop between generator and selector.
- 🪜 **[Math-Shepherd: Verify and Reinforce LLMs Step-by-step without Human Annotations](https://arxiv.org/abs/2312.08935)**
  <sub>2023 · ACL · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935) · [DOI](https://doi.org/10.48550/arXiv.2312.08935) · [Data](https://huggingface.co/datasets/peiyi9979/Math-Shepherd) · [Paper Card Source](../../paper_cards/library/cards/math-shepherd-2023/sources)
  _Data object:_ math problem, complete solution, step prefix, continuation rollouts, final-answer outcomes, automatic step label, PRM score, and selected response; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline
  _Feedback / verifier:_ final-answer correctness of sampled continuations is aggregated into process supervision for each reasoning step
  _Recipe signal:_ teacher: final-answer correctness of sampled continuations is aggregated into process supervision for each reasoning step; generator: The policy or teacher model generates candidate reasoning traces.
  _Audit focus:_ Monte Carlo labels depend strongly on continuation count and policy strength, a recoverable prefix may be labeled positive despite a locally invalid step, answer matching cannot establish faithfulness of the intermediate derivation
  _Why it matters:_ It replaces expensive human process labels with rollout-derived labels and demonstrates the same verifier in both best-of-N selection and policy optimization.
- 🏗️ **[Training Verifiers to Solve Math Word Problems](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv preprint arXiv:2110.14168 · 🏗️ construction recipe · 📈 scaling study · mixed · reward modeling · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [Paper Card Source](../../paper_cards/library/cards/training-verifiers-to-solve-math-word-problems-2021/sources)
  _Data object:_ per-problem candidate sets containing a natural-language derivation, calculator annotations, and a final numeric answer.; process: problem, candidate solution, final answer; GSM8K answer matching with an injected calculator protocol for annotated arithmetic spans.
  _Feedback / verifier:_ a learned verifier predicts correctness from the problem and candidate solution; labels come only from final-answer correctness.
  _Recipe signal:_ teacher: GSM8K reference answers provide binary outcome labels; there is no stronger teacher model.; generator: a two-epoch fine-tuned generator sampled at positive temperature for candidate-set construction.
  _Audit focus:_ Final-answer labels can mark flawed reasoning as correct when it reaches the right number accidentally., Oracle test@N measures coverage, not whether the learned verifier can identify a correct candidate., More generator training improves greedy accuracy while collapsing high-temperature candidate diversity.
  _Why it matters:_ It is an early auditable template for separating candidate coverage from selector quality in reasoning systems.

### <a id="search-trees-mcts"></a>🌳 Search trees / MCTS

- 🪜 **[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · mixed · process supervision · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.07861) · [DOI](https://doi.org/10.48550/arXiv.2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR) · [Paper Card Source](../../paper_cards/library/cards/rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025/sources)
  _Data object:_ step-level preference data with retrieval context, process reward score, process explanation, and final answer.; process: query, retrieval context, partial reasoning state; RAG reasoning pipeline
  _Feedback / verifier:_ Process Reward Model plus Process Explanation Model, with MCTS-guided search.
  _Recipe signal:_ teacher: PRM/PEM feedback and benchmark supervision.; generator: MCTS-guided retrieval-augmented rollouts
  _Audit focus:_ PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search
  _Why it matters:_ It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.
- 🏗️ **[rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking](https://arxiv.org/abs/2501.04519)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 🪜 process supervision · mixed · process supervision · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.04519) · [DOI](https://doi.org/10.48550/arXiv.2501.04519) · [Code](https://github.com/microsoft/rStar/tree/rStar-math) · [Data](https://huggingface.co/datasets/ElonTusk2001/rstar_sft) · [Project](https://huggingface.co/datasets/ElonTusk2001/rstar_ppm) · [Paper Card Source](../../paper_cards/library/cards/rstar-math-2025/sources)
  _Data object:_ math question; code-augmented reasoning step; executable snippet and result; MCTS parent/child relation; complete rollout; terminal answer; visit/value statistics; SFT trace; sibling preference pair; evolution round; process: math question, code-augmented reasoning step, executable snippet and result; Search tree or formal proof-search substrate described by the paper.
  _Feedback / verifier:_ A code executor and final-answer checker provide grounded outcome signals; the learned process preference model ranks partial paths and guides later MCTS.
  _Recipe signal:_ teacher: Search outcomes, verifier feedback, and model/value estimates rather than manual dense step labels.; generator: The policy expands code-augmented chains in MCTS, execution and answer checks validate outcomes, and complete trees are converted into successful SFT trajectories plus sibling-step preference pairs for a process preference model. Policy and PPM are retrained and used in the next round.
  _Audit focus:_ Public SFT/PPM tables are derived views, not necessarily full tree logs; code execution can validate an accidental shortcut; NuminaMath and MetaMath lineage and licenses must be retained; results depend heavily on GPU/search budget and PPM calibration., Search budget or selector quality can be mistaken for base-model capability.
  _Why it matters:_ Use it as a reference architecture for tree-to-SFT and tree-to-preference conversion, iterative policy/verifier co-training, and compute-aware test-time deep thinking.
- 🏗️ **[AlphaMath Almost Zero: Process Supervision without Process](https://arxiv.org/abs/2405.03553)**
  <sub>2024 · NeurIPS · 🏗️ construction recipe · 🪜 process supervision · mixed · process supervision · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.03553) · [DOI](https://doi.org/10.48550/arXiv.2405.03553) · [Code](https://github.com/MARIO-Math-Reasoning/Super_MARIO) · [Data](https://huggingface.co/datasets/MARIO-Math-Reasoning/AlphaMath-Trainset) · [Project](https://openreview.net/forum?id=VaXnxQ3UKo) · [Paper Card Source](../../paper_cards/library/cards/alphamath-almost-zero-2024/sources)
  _Data object:_ math problem; partial solution state; candidate next step; MCTS node and branch; rollout terminal answer; correctness result; backed-up node value; selected reasoning path; process: math problem, partial solution state, candidate next step; Search tree or formal proof-search substrate described by the paper.
  _Feedback / verifier:_ Final-answer matching or the task answer checker supplies the terminal outcome; an MCTS-derived value model acts as the selector for partial states.
  _Recipe signal:_ teacher: Search outcomes, verifier feedback, and model/value estimates rather than manual dense step labels.; generator: A policy model expands step-level solutions in MCTS. Terminal answer checks are backed up through the tree to form process supervision and value-model targets; the learned value model then guides step-level beam search or further MCTS.
  _Audit focus:_ Answer equivalence and extraction can be brittle; successful terminal answers do not prove every intermediate step is sound; incomplete release of rejected branches, visit counts, and policy versions weakens causal audit; MCTS compute can be mistaken for model improvement., Search budget or selector quality can be mistaken for base-model capability.
  _Why it matters:_ Use this Card when designing answer-only-to-process-data pipelines, value-guided search, or comparisons between MCTS, beam search, and dense process annotation.
- 🏗️ **[DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search](https://arxiv.org/abs/2408.08152)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🪜 process supervision · mixed · process supervision · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.08152) · [DOI](https://doi.org/10.48550/arXiv.2408.08152) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5) · [Data](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5/tree/main/datasets) · [Project](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL) · [Paper Card Source](../../paper_cards/library/cards/deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learning-and-monte-carlo-tree-search-2024/sources)
  _Data object:_ Lean theorem and imports; generated proof candidate; proof-assistant response; valid or failed proof path; RMaxTS node; intrinsic reward; selected path; terminal kernel verdict; search budget; process: Lean theorem and imports, generated proof candidate, proof-assistant response; Search tree or formal proof-search substrate described by the paper.
  _Feedback / verifier:_ Lean 4 and mathlib provide executable proof validity and terminal closure; RMaxTS combines policy likelihood, search statistics, and intrinsic reward to select expansions.
  _Recipe signal:_ teacher: Search outcomes, verifier feedback, and model/value estimates rather than manual dense step labels.; generator: The model is specialized and supervised on formal proofs, refined with reinforcement learning from proof-assistant feedback, then used by RMaxTS. RMaxTS explores whole-proof paths with an intrinsic reward intended to favor diverse promising attempts.
  _Audit focus:_ The training-time search corpus is not released as a standalone dataset; Lean and mathlib version drift changes replay; intrinsic reward may improve diversity without semantic progress; search cost and whole-proof generation length complicate matched-budget comparisons., Search budget or selector quality can be mistaken for base-model capability.
  _Why it matters:_ Use this Card for formal-verifier-anchored search traces, RL from proof feedback, proof-path diversity, and the distinction between kernel validity and informal mathematical faithfulness.
- 🪜 **[Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.06592) · [DOI](https://doi.org/10.48550/arXiv.2406.06592) · [Paper Card Source](../../paper_cards/library/cards/omegaprm-automated-process-supervision-2024/sources)
  _Data object:_ math problem, reasoning prefix, MCTS node, sampled continuation, terminal outcome, estimated value, first-error boundary, and positive or negative process annotation; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline
  _Feedback / verifier:_ an outcome reward model or answer checker scores completed continuations; search converts outcome evidence into step labels
  _Recipe signal:_ teacher: an outcome reward model or answer checker scores completed continuations; search converts outcome evidence into step labels; generator: The policy or teacher model generates candidate reasoning traces.
  _Audit focus:_ first-error localization assumes later continuations diagnose earlier steps reliably, search-tree labels depend on the ORM and prover policy, reported annotation scale does not by itself disclose per-problem compute or rejected branches
  _Why it matters:_ OmegaPRM improves over independent per-step Monte Carlo estimation by allocating search adaptively and using binary-search-like error localization.
- 🏗️ **[Monte Carlo Tree Search Boosts Reasoning via Iterative Preference Learning](https://arxiv.org/abs/2405.00451)**
  <sub>2024 · arXiv · 🏗️ construction recipe · 🪜 process supervision · mixed · process supervision · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.00451) · [DOI](https://doi.org/10.48550/arXiv.2405.00451) · [Code](https://github.com/YuxiXie/MCTS-DPO) · [Data](https://github.com/YuxiXie/MCTS-DPO#dataset-download) · [Paper Card Source](../../paper_cards/library/cards/monte-carlo-tree-search-boosts-reasoning-via-iterative-preference-learning-2024/sources)
  _Data object:_ reasoning prompt; partial state; candidate next steps sharing a parent; search visit/value; rollout outcome; step self-evaluation; chosen/rejected pair; policy iteration; inference budget; process: reasoning prompt, partial state, candidate next steps sharing a parent; Search tree or formal proof-search substrate described by the paper.
  _Feedback / verifier:_ Task answer validation supplies terminal evidence, while the language model's stepwise self-evaluation provides a softer local judge; MCTS statistics select nodes and determine preferences.
  _Recipe signal:_ teacher: Search outcomes, verifier feedback, and model/value estimates rather than manual dense step labels.; generator: The current policy expands an MCTS tree. Outcome validation and stepwise self-evaluation update node quality; alternatives are converted to step-level preference examples and the policy is updated with DPO before the next collection round.
  _Audit focus:_ Self-evaluation can reinforce shared policy/judge errors; missing released search logs limits audit; dataset-specific answer checks differ in strength; iterative gains can conflate data freshness, DPO, and increased search compute., Search budget or selector quality can be mistaken for base-model capability.
  _Why it matters:_ Use this Card to specify online tree collection, sibling-pair extraction, mixed hard/soft judging, and the boundary between search-time traces and preference-training data.
- 🏗️ **[Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solvers](https://arxiv.org/abs/2408.06195)**
  <sub>2024 · ICLR · 🏗️ construction recipe · 🪜 process supervision · mixed · process supervision · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.06195) · [DOI](https://doi.org/10.48550/arXiv.2408.06195) · [Code](https://github.com/zhentingqi/rStar) · [Data](https://github.com/zhentingqi/rStar/tree/main/data) · [Paper Card Source](../../paper_cards/library/cards/mutual-reasoning-makes-smaller-llms-stronger-problem-solvers-2024/sources)
  _Data object:_ task prompt; MCTS state; human-like reasoning action; generated intermediate state; complete trajectory; generator answer; discriminator reconstruction or verdict; mutual-consistency label; selected path; compute budget; process: task prompt, MCTS state, human-like reasoning action; Search tree or formal proof-search substrate described by the paper.
  _Feedback / verifier:_ The peer SLM is a model-based discriminator rather than a programmatic verifier. Mutual agreement and search statistics select trajectories; benchmark answer matching evaluates the final output.
  _Recipe signal:_ teacher: Search outcomes, verifier feedback, and model/value estimates rather than manual dense step labels.; generator: A target SLM uses a richer action set inside MCTS to construct diverse trajectories. A second SLM of similar capability independently discriminates candidates; mutually consistent trajectories are favored for the final solution.
  _Audit focus:_ Agreement is not correctness and two related SLMs can share the same shortcut; no standalone full trajectory corpus is released; model calls and action branching make costs high; benchmark prompts and public solutions raise contamination risk., Search budget or selector quality can be mistaken for base-model capability.
  _Why it matters:_ Use it to study generator–selector separation, model-based verification, heterogeneous search actions, and the difference between mutual consistency and executable correctness.
- 🪜 **[ReST-MCTS*](https://arxiv.org/abs/2406.03816)**
  <sub>2024 · NeurIPS · 🪜 process supervision · 🏗️ construction recipe · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.03816) · [DOI](https://doi.org/10.48550/arXiv.2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS) · [Data](https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th) · [Project](https://rest-mcts.github.io/) · [Paper Card Source](../../paper_cards/library/cards/rest-mcts-2024/sources)
  _Data object:_ searched reasoning trajectory with intermediate node states, final answer, verifier outcome, and inferred process reward.; process: problem, partial solution state, candidate next step; MCTS-style reasoning tree
  _Feedback / verifier:_ process reward model guided by final-answer oracle feedback and MCTS-derived value targets.
  _Recipe signal:_ teacher: oracle final answers and search-derived value estimates, not manual dense step labels.; generator: policy rollouts expanded by MCTS
  _Audit focus:_ search policy may overfit process reward artifacts, accepted traces can hide rejected rollout distribution, inference budget may be conflated with data quality
  _Why it matters:_ It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects.
- 🏗️ **[Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models](https://arxiv.org/abs/2310.04406)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 🌐 agent environment · environmental · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2310.04406) · [Code](https://github.com/lapisrocks/LanguageAgentTreeSearch) · [Paper Card Source](../../paper_cards/library/cards/language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023/sources)
  _Data object:_ A search tree of observations, actions, self-reflections, value estimates, environment feedback, and terminal result.; process: observation, action, reflection; Task environments including programming tests, WebShop-style interaction, and reasoning tasks.
  _Feedback / verifier:_ External environment feedback together with LM-powered value functions and self-reflection.
  _Recipe signal:_ teacher: Environment feedback and LM-generated reflection/value prompts.; generator: The agent generates candidate actions and reflections at search nodes.
  _Audit focus:_ Environment state, web content, and tool versions can make trajectories non-replayable., Reflection text may sound corrective without improving the underlying action policy., Search results can be dominated by interaction budget rather than agent quality.
  _Why it matters:_ It shows why a reusable agent-search trace must retain the environment state and feedback alongside the selected action path.
- 🏗️ **[Reasoning with Language Model is Planning with World Model](https://arxiv.org/abs/2305.14992)**
  <sub>2023 · EMNLP · 🏗️ construction recipe · mixed · evaluation · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.14992) · [Venue](https://aclanthology.org/2023.emnlp-main.507/) · [Paper Card Source](../../paper_cards/library/cards/reasoning-with-language-model-is-planning-with-world-model-2023/sources)
  _Data object:_ An MCTS reasoning tree containing states, candidate actions, predicted transitions, rewards, and chosen path.; process: problem, state, action or reasoning step; A language-model world model paired with Monte Carlo tree search.
  _Feedback / verifier:_ Task-specific rewards and model-predicted state transitions guide MCTS selection.
  _Recipe signal:_ teacher: Task prompts, task-specific reward definitions, and LM-predicted world states.; generator: The LM generates reasoning actions and simulates their next states.
  _Audit focus:_ A hallucinated world-model transition can steer search toward an invalid plan., Improvements can conflate MCTS budget, reward design, and base-model capability., The selected path hides the distribution of rejected branches unless logs are retained.
  _Why it matters:_ It exposes an often-hidden search record—state prediction, task reward, and tree policy—that is essential for attributing planning gains.
- 📈 **[Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601)**
  <sub>2023 · NeurIPS 2023 · 📈 scaling study · 🏗️ construction recipe · judgment required · mixed · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.10601) · [DOI](https://doi.org/10.48550/arXiv.2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm) · [Paper Card Source](../../paper_cards/library/cards/tree-of-thoughts-2023/sources)
  _Data object:_ Problem, intermediate thought states, branch scores, search actions, and final solution.; process: thought node, branch candidates, state evaluation; Explicit tree search over language-model thought units.
  _Feedback / verifier:_ Self-evaluation, task-specific checks, and final outcome scoring.
  _Recipe signal:_ teacher: Task instructions and final evaluators.; generator: Policy model expands tree nodes into candidate thoughts.
  _Audit focus:_ Value estimates may be prompt-sensitive., Search budget can dominate model ranking., Small task suites can overfit scaffolds.
  _Why it matters:_ Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects.

### <a id="rejection-sampling-traces"></a>🔎 Rejection sampling traces

- 🚀 **[DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948)**
  <sub>2025 · Nature · 🚀 model report · 🏗️ construction recipe · programmatic · mixed · rlvr · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.12948) · [DOI](https://doi.org/10.48550/arXiv.2501.12948) · [Code](https://github.com/deepseek-ai/DeepSeek-R1) · [HF](https://huggingface.co/deepseek-ai/DeepSeek-R1) · [Paper Card Source](../../paper_cards/library/cards/deepseek-r1-2025/sources)
  _Data object:_ prompt, policy checkpoint, sampled long reasoning response, final answer, accuracy and format rewards, rejection-sampling decision, SFT mixture membership, and distilled student target; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline
  _Feedback / verifier:_ rule-based accuracy rewards and format rewards dominate verifiable reasoning tasks; quality filters and model-based signals supplement broader data
  _Recipe signal:_ teacher: rule-based accuracy rewards and format rewards dominate verifiable reasoning tasks; quality filters and model-based signals supplement broader data; generator: The policy or teacher model generates candidate reasoning traces.
  _Audit focus:_ the complete training rollout corpus and rejected distribution are not released, multi-stage gains conflate RL, cold-start data, rejection sampling, and distillation, rule correctness does not verify the faithfulness or efficiency of a long rationale
  _Why it matters:_ The report links emergent long reasoning under outcome RL to a practical multi-stage recipe that repairs readability and transfers behavior by rejection sampling and distillation.
- 📈 **[Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling](https://arxiv.org/abs/2408.16737)**
  <sub>2025 · ICLR 2025 Poster · 📈 scaling study · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.16737) · [OpenReview](https://openreview.net/forum?id=3OyaXFQuDl) · [Paper Card Source](../../paper_cards/library/cards/smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025/sources)
  _Data object:_ per-question candidate reasoning sets with final answers, correctness filters, generator identity, and compute- or price-matched budget records.; process: question, generator model, candidate solution; exact reference-answer checks for math, with LM-as-a-judge variants when gold answers are withheld.
  _Feedback / verifier:_ final-answer matching is the default selector; Gemini models serve as judges in the no-ground-truth setting.
  _Recipe signal:_ teacher: stronger-expensive or weaker-cheap generator models under matched sampling budgets.; generator: Gemma2-9B versus 27B and Gemini-1.5-Flash versus Pro.
  _Audit focus:_ Final-answer filtering admits false-positive reasoning, and weaker generators exhibit a higher measured false-positive rate., Parameter count approximates generation FLOPs and API price approximates proprietary-model compute only coarsely., The August 2024 Pro-to-Flash price ratio is time-dependent and should not be treated as a universal compute ratio.
  _Why it matters:_ It makes sampling budget a first-class part of synthetic reasoning-data quality rather than treating teacher strength as the only variable.
- 🏗️ **[Scaling Relationship on Learning Mathematical Reasoning with Large Language Models](https://arxiv.org/abs/2308.01825)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 📈 scaling study · programmatic · sft · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2308.01825) · [DOI](https://doi.org/10.48550/arXiv.2308.01825) · [Code](https://github.com/OFA-Sys/gsm8k-ScRel) · [Paper Card Source](../../paper_cards/library/cards/scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023/sources)
  _Data object:_ A generated reasoning path paired with final answer correctness and selection for the augmented fine-tuning set.; process: math problem, generated rationale, final answer; Mathematical reasoning dataset with answer matching for rejection-sampling selection.
  _Feedback / verifier:_ Final-answer correctness check retains correct reasoning paths.
  _Recipe signal:_ teacher: Supervised fine-tuning data and multiple source models that generate candidate reasoning paths.; generator: Supervised models sample augmented rationales for each math problem.
  _Audit focus:_ Retaining only correct final answers hides plausible but invalid rationales and collapses failure diversity., Exact-answer matching may accept reasoning with unsupported steps or reject equivalent answer formats., Reusing benchmark prompts for augmentation can contaminate subsequent benchmark evaluation.
  _Why it matters:_ It is a clean data-lineage case: the prompt, candidate pool, answer checker, accepted trace, and source model all affect the claimed scaling gain.

### <a id="self-consistency-repeated-sampling"></a>🧠 Self-consistency / repeated sampling

- 📈 **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 📈 scaling study · 🏗️ construction recipe · programmatic · mixed · evaluation · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.21787) · [Paper Card Source](../../paper_cards/library/cards/large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024/sources)
  _Data object:_ candidate solution set for each problem, with final answers, code submissions, Lean proofs, or repository patches depending on task.; process: task, model, sample count; math benchmarks, Lean4 proof checker, programming contest tests, and SWE-bench Lite repository test suites.
  _Feedback / verifier:_ automatic unit tests or Lean checker where available; oracle answer checks, majority voting, or reward-model scoring for math-answer selection.
  _Recipe signal:_ teacher: benchmark labels, unit tests, proof checkers, and reward/selection methods rather than a teacher model.; generator: models repeatedly sample independent candidate solutions for each task.
  _Audit focus:_ Coverage can grow with sample budget even when practical selection precision remains poor., Automatic-verifier domains can overstate transfer to open-ended math or judgment-required tasks., Comparing repeated sampling against single attempts can conflate model quality with inference budget.
  _Why it matters:_ It gives atlas readers a concrete way to audit whether a reasoning gain comes from more samples, a usable verifier, a better selector, or a genuinely stronger model or training recipe.
- 🚀 **[Competition-Level Code Generation with AlphaCode](https://arxiv.org/abs/2203.07814)**
  <sub>2022 · Science 378(6624), 1092-1097 · 🚀 model report · 📈 scaling study · programmatic · evaluation · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2203.07814) · [Venue](https://www.science.org/doi/10.1126/science.abq1158) · [DOI](https://doi.org/10.1126/science.abq1158) · [Code](https://github.com/google-deepmind/code_contests) · [Project](https://deepmind.google/blog/competitive-programming-with-alphacode/) · [Paper Card Source](../../paper_cards/library/cards/competition-level-code-generation-with-alphacode-2022/sources)
  _Data object:_ per-problem program pools with compilation status, example-test behavior, behavioral cluster membership, rank, and up to ten submitted programs.; process: problem statement, language, sampled program; compiler, public example tests, learned test-input generation, behavioral clustering, and hidden Codeforces judging.
  _Feedback / verifier:_ compilation and example-test filtering followed by clustering and model-based ranking; hidden tests provide terminal evaluation only.
  _Recipe signal:_ teacher: accepted and rejected competitive-programming submissions plus contest tests; no superior teacher model is used at inference.; generator: an ensemble of AlphaCode models samples programs independently for each problem.
  _Audit focus:_ Example tests reject more than 99 percent of samples but do not guarantee hidden-test correctness., One million samples per model per problem is far removed from the final ten-submission evaluation budget., Behavioral clustering depends on generated tests and can merge semantically different programs or miss equivalent ones.
  _Why it matters:_ It shows how generation budget, executable feedback, diversity control, and a hard external submission budget interact.

### <a id="test-time-compute-logs"></a>⏱️ Test-time compute logs

- 🏗️ **[s1: Simple test-time scaling](https://arxiv.org/abs/2501.19393)**
  <sub>2025 · arXiv · 🏗️ construction recipe · 📦 data release · programmatic · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.19393) · [DOI](https://doi.org/10.48550/arXiv.2501.19393) · [Code](https://github.com/simplescaling/s1) · [Data](https://huggingface.co/datasets/simplescaling/s1K) · [HF](https://huggingface.co/simplescaling/s1-32B) · [Paper Card Source](../../paper_cards/library/cards/s1-simple-test-time-scaling-2025/sources)
  _Data object:_ question, source dataset, teacher reasoning trace, difficulty score, diversity cluster, quality decision, selected SFT record, token budget, forced stop or Wait extension, and final answer; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline
  _Feedback / verifier:_ teacher-generated trace quality, benchmark answer correctness, and curation criteria for difficulty, diversity, and quality
  _Recipe signal:_ teacher: teacher-generated trace quality, benchmark answer correctness, and curation criteria for difficulty, diversity, and quality; generator: The policy or teacher model generates candidate reasoning traces.
  _Audit focus:_ teacher trace lineage and filtering choices dominate a very small dataset, appending Wait may teach or exploit a formatting artifact rather than general search, token budget is an incomplete proxy for actual inference compute and useful reasoning
  _Why it matters:_ s1 isolates a deliberately small trace set and a simple decoding intervention, making training-data scale and inference-budget effects easier to study together.
- 🏗️ **[Re-ReST: Reflection-Reinforced Self-Training for Language Agents](https://arxiv.org/abs/2406.01495)**
  <sub>2024 · arXiv · 🏗️ construction recipe · mixed · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.01495) · [DOI](https://doi.org/10.48550/arXiv.2406.01495) · [Code](https://github.com/PlusLabNLP/Re-ReST) · [Paper Card Source](../../paper_cards/library/cards/re-rest-reflection-reinforced-self-training-for-language-agents-2024/sources)
  _Data object:_ Initial agent output, external feedback, reflection, refined output, and selected self-training episode.; process: task input, initial agent output, environment feedback; Task-specific agent environments and feedback mechanisms.
  _Feedback / verifier:_ External feedback such as code unit-test results, plus reflector-generated revisions.
  _Recipe signal:_ teacher: The agent itself, a reflector, and external task feedback rather than human or stronger-model demonstrations.; generator: The agent generates candidates and the reflector produces revisions conditioned on failure feedback.
  _Audit focus:_ A reflector can rationalize an incorrect output instead of fixing it., Feedback quality differs sharply across unit tests, QA labels, and subjective generation tasks., Treating reflection calls as free hides a material test-time compute cost.
  _Why it matters:_ It makes rejected or weak agent attempts potentially useful only when their feedback and repair lineage are retained.
- 🪜 **[Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning](https://arxiv.org/abs/2410.08146)**
  <sub>2024 · ICLR · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · reward modeling · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2410.08146) · [DOI](https://doi.org/10.48550/arXiv.2410.08146) · [Paper Card Source](../../paper_cards/library/cards/rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024/sources)
  _Data object:_ problem, reasoning state before a step, proposed step, state after the step, prover rollout success estimates, process advantage target, PAV score, and search or RL outcome; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline
  _Feedback / verifier:_ progress is the change in future success probability before and after a step under a prover policy distinct from the base policy
  _Recipe signal:_ teacher: progress is the change in future success probability before and after a step under a prover policy distinct from the base policy; generator: The policy or teacher model generates candidate reasoning traces.
  _Audit focus:_ progress estimates inherit variance and bias from the chosen prover, a weak prover helps only when its errors complement the base policy, search and RL gains can be misattributed if rollout budgets and prover calls are omitted
  _Why it matters:_ The work argues that absolute prefix solvability is not the right process target; the useful signal is the step's marginal progress under a complementary prover.
- 📈 **[Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314)**
  <sub>2024 · arXiv · 📈 scaling study · 🧪 verifier reward · mixed · judgment required · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources)
  _Data object:_ Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks.
  _Feedback / verifier:_ Dense process-based verifier reward models plus answer-level evaluation.
  _Recipe signal:_ teacher: Benchmark answers and trained verifier reward models provide selection signal.; generator: Policy model generates multiple candidate traces under a budget.
  _Audit focus:_ Verifier quality can dominate the measured scaling curve., Difficulty estimation can leak benchmark-specific assumptions., More samples can be mistaken for more unique data.
  _Why it matters:_ Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution.
- 🏗️ **[HyperTree Proof Search for Neural Theorem Proving](https://arxiv.org/abs/2205.11491)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🪜 process supervision · mixed · process supervision · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2205.11491) · [DOI](https://doi.org/10.48550/arXiv.2205.11491) · [Code](https://github.com/facebookresearch/Evariste) · [Data](https://github.com/facebookresearch/Evariste/tree/main/formal) · [Project](https://openreview.net/forum?id=J4pX8Q8cxHH) · [Paper Card Source](../../paper_cards/library/cards/hypertree-proof-search-for-neural-theorem-proving-2022/sources)
  _Data object:_ formal theorem; accessible premises; proof state; tactic action; multiple child subgoals; AND/OR hyper-tree edge; policy/value estimate; kernel response; solved/failed proof; online-training example; process: formal theorem, accessible premises, proof state; Search tree or formal proof-search substrate described by the paper.
  _Feedback / verifier:_ Metamath, Lean, or equivalent formal kernels check tactics and proof closure; HTPS policy/value estimates and AlphaZero-style search statistics choose expansions.
  _Recipe signal:_ teacher: Search outcomes, verifier feedback, and model/value estimates rather than manual dense step labels.; generator: A transformer proposes tactics and estimates proof progress. HTPS expands hyper-tree nodes whose tactics may create several subgoals, propagates solved and value information, and converts proof-search experience into online policy/value updates.
  _Audit focus:_ The official repository explicitly says it does not run out of the box after internal dependencies were removed; most code is CC-BY-NC; no packaged full online trajectory corpus is supplied; formal-system versions and premise sets strongly affect replay., Search budget or selector quality can be mistaken for base-model capability.
  _Why it matters:_ Use it for AND/OR proof-tree schemas, kernel-grounded trajectory collection, online expert iteration, and comparison with flat best-first or whole-proof sampling.

### <a id="long2short-distill-from-search"></a>✂️ Long2short / distill-from-search

- 🏗️ **[Efficient Long CoT Reasoning in Small Language Models](https://arxiv.org/abs/2505.18440)**
  <sub>2025 · arXiv · 🏗️ construction recipe · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.18440) · [DOI](https://doi.org/10.48550/arXiv.2505.18440) · [Paper Card Source](../../paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources)
  _Data object:_ Pruned long reasoning trace, final answer, validity outcome, and selected student-training example.; process: problem, teacher long cot, pruned steps; Mathematical-reasoning tasks with answer-based validation.
  _Feedback / verifier:_ Programmatic or answer-based correctness checks validate traces selected for on-policy curation.
  _Recipe signal:_ teacher: A long-CoT reasoning model supplies initial traces for pruning and distillation.; generator: Teacher traces are pruned; the student generates on-policy candidates to curate useful valid long-CoT data.
  _Audit focus:_ Pruning can delete uncertainty, corrections, or premises that are important for a valid derivation., Answer correctness does not prove that the compressed rationale is faithful or pedagogically useful., On-policy curation can reinforce the student's existing shortcuts and reduce solution diversity.
  _Why it matters:_ It makes long2short reasoning a data-lineage problem: teacher trace, pruning rule, student rollout, checker, and accepted compression all affect the result.
- 🏗️ **[STaR: Bootstrapping Reasoning With Reasoning](https://arxiv.org/abs/2203.14465)**
  <sub>2022 · NeurIPS · 🏗️ construction recipe · 🚀 model report · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2203.14465) · [DOI](https://doi.org/10.48550/arXiv.2203.14465) · [Code](https://github.com/ezelikman/STaR) · [Paper Card Source](../../paper_cards/library/cards/star-bootstrapping-reasoning-with-reasoning-2022/sources)
  _Data object:_ question, generated rationale, predicted answer, correctness decision, rationalization flag, model iteration, and retention decision; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline
  _Feedback / verifier:_ dataset ground-truth answer matching; failed examples may be regenerated while conditioning on the correct answer
  _Recipe signal:_ teacher: dataset ground-truth answer matching; failed examples may be regenerated while conditioning on the correct answer; generator: The policy or teacher model generates candidate reasoning traces.
  _Audit focus:_ answer-conditioned rationalization can leak the target into the trace, retaining only correct answers hides rejected rollout diversity, acceptance rates depend on prompt, sampler, and model iteration
  _Why it matters:_ STaR turns a small rationale seed into an iterative generate-filter-train loop and explicitly recovers some failures through answer-conditioned rationalization.

### <a id="other-related-work"></a>Other related work

- 🪜 **[PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · rlvr · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.01456) · [DOI](https://doi.org/10.48550/arXiv.2502.01456) · [Code](https://github.com/PRIME-RL/PRIME) · [Data](https://huggingface.co/datasets/PRIME-RL/Eurus-2-Rollout) · [HF](https://huggingface.co/PRIME-RL) · [Paper Card Source](../../paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources)
  _Data object:_ policy rollout with final outcome label, implicit process reward estimates, and policy update signal.; process: prompt, policy rollout, outcome label; online RL training loop
  _Feedback / verifier:_ implicit process rewards derived from outcome labels and updated on policy rollouts.
  _Recipe signal:_ teacher: outcome verifiers rather than dense human process labels.; generator: policy rollouts
  _Audit focus:_ implicit rewards can inherit outcome-verifier shortcuts, online reward updates may introduce reward hacking, benchmark improvements may conflate optimizer and reward-contract changes
  _Why it matters:_ It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds.
- 🪜 **[AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802)**
  <sub>2024 · NeurIPS · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.16802) · [DOI](https://doi.org/10.48550/arXiv.2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV) · [Paper Card Source](../../paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources)
  _Data object:_ reasoning trace with step-level confidence-change annotations.; process: problem, candidate solution, reasoning step; offline reasoning traces
  _Feedback / verifier:_ answer-trained verifier converted into automated process annotations.
  _Recipe signal:_ teacher: answer-level verifier trained from final-answer correctness.; generator: model-generated candidate reasoning
  _Audit focus:_ answer-level verifier confidence can mislabel intermediate steps, relative confidence changes may not identify causal first errors, commonsense and math tasks may require different error taxonomies
  _Why it matters:_ It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision.
- 🏗️ **[Reinforced Self-Training (ReST) for Language Modeling](https://arxiv.org/abs/2308.08998)**
  <sub>2023 · arXiv · 🏗️ construction recipe · mixed · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2308.08998) · [DOI](https://doi.org/10.48550/arXiv.2308.08998) · [Paper Card Source](../../paper_cards/library/cards/reinforced-self-training-rest-for-language-modeling-2023/sources)
  _Data object:_ Input-candidate-output records carrying quality/reward information for offline policy improvement.; process: source input, candidate generation, quality signal; Offline language-model generation and batch reinforcement-learning pipeline.
  _Feedback / verifier:_ Quality signals derived from the paper's alignment/evaluation setup; the exact reward implementation should be retained with any reuse.
  _Recipe signal:_ teacher: The policy's own generated batch plus the quality/reward signal; no stronger demonstration teacher is required.; generator: The current policy generates an offline batch in the grow phase.
  _Audit focus:_ Quality filtering can collapse output diversity when only high-scoring candidates are retained., Offline reuse can amplify reward-model or metric bias across iterations., Reported gains should not be generalized from translation to verifiable reasoning without an equivalent feedback contract.
  _Why it matters:_ It is an early, clear reference for separating the generation batch, quality signal, and offline optimizer when interpreting self-training claims.

## 6. What to Audit

- Are accepted and rejected rollouts both visible enough to audit selector behavior?
- Is pass@k, search budget, sampling temperature, verifier score, or tree-search policy disclosed?
- Can gains be attributed to data, search, verifier, or inference budget rather than a hidden scaffold?

## 7. Open Problems

- How much of a reasoning-data gain comes from search rather than the final dataset?
- Should open releases include rejected rollouts and search trees by default?
- How can pass@k and training-data scale be compared fairly?
- Can selector behavior be audited without exposing proprietary verifier details?

## 8. Related Paper-Card Sources

- [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](../../paper_cards/library/cards/deepseek-r1-2025/sources)
- [Efficient Long CoT Reasoning in Small Language Models](../../paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources)
- [PRIME: Process reinforcement through implicit rewards](../../paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources)
- [ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](../../paper_cards/library/cards/rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025/sources)
- [Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling](../../paper_cards/library/cards/smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025/sources)
- [rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking](../../paper_cards/library/cards/rstar-math-2025/sources)
- [s1: Simple test-time scaling](../../paper_cards/library/cards/s1-simple-test-time-scaling-2025/sources)
- [AlphaMath Almost Zero: Process Supervision without Process](../../paper_cards/library/cards/alphamath-almost-zero-2024/sources)
- [AutoPSV: Automated Process-Supervised Verifier](../../paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources)
- [DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search](../../paper_cards/library/cards/deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learning-and-monte-carlo-tree-search-2024/sources)
- [Improve Mathematical Reasoning in Language Models by Automated Process Supervision](../../paper_cards/library/cards/omegaprm-automated-process-supervision-2024/sources)
- [Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](../../paper_cards/library/cards/large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024/sources)
- [Monte Carlo Tree Search Boosts Reasoning via Iterative Preference Learning](../../paper_cards/library/cards/monte-carlo-tree-search-boosts-reasoning-via-iterative-preference-learning-2024/sources)
- [Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solvers](../../paper_cards/library/cards/mutual-reasoning-makes-smaller-llms-stronger-problem-solvers-2024/sources)
- [Re-ReST: Reflection-Reinforced Self-Training for Language Agents](../../paper_cards/library/cards/re-rest-reflection-reinforced-self-training-for-language-agents-2024/sources)
- [ReST-MCTS*](../../paper_cards/library/cards/rest-mcts-2024/sources)
- [Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning](../../paper_cards/library/cards/rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024/sources)
- [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](../../paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
