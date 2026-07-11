# 🎯 Training Usage and Optimization Objectives

> How data enters SFT, distillation, preference optimization, reward modeling, PRM training, RLVR, agent training, evaluation, reranking, and audit.

## 1. What This Track Studies

Use this track to connect a data object to the objective or system component that consumes it.

The same paper can release examples, train a reward, evaluate a model, and disclose a model report. For builders, the crucial question is not only what the data is, but how it is consumed. This track organizes papers by training usage and optimization role.

It turns the atlas from a list into a design guide. A contributor should identify whether a record feeds SFT, distillation, DPO, reward modeling, PRM training, RLVR, agent training, reranking, evaluation, or audit. Those uses require different metadata and have different risks.

The track also prevents overclaiming. A benchmark score is not necessarily training data; a preference pair is not necessarily a robust reward; a verifier outcome is not necessarily a reusable RL signal without cost and false-positive analysis.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧱 SFT / instruction tuning | data used as supervised target behavior | target text hides verifier and source assumptions |
| 📚 Distillation | teacher outputs, traces, or policies distilled into a student | teacher lineage is hidden |
| ⚖️ Preference optimization | pairwise feedback for DPO/IPO/KTO-style objectives | pair context does not match downstream use |
| 🎚️ Reward modeling / ORM | scalar or pairwise data used to train outcome rewards | reward can be overoptimized |
| 🪜 PRM / process supervision | step-level or trace-level signals used to train process rewards | PRM rewards trace style |
| 🏋️ RLVR / verifier RL | programmatic or verifier rewards used in RL | verifier false positives become policy incentives |
| 🌐 Agent training | environment episodes, tool traces, or terminal rewards for agent policies | environment cannot be replayed |
| 🧪 Evaluation / reranking / audit | data used for scoring, selection, reporting, or failure analysis | evaluation data becomes training data |

### Contents

- [🧱 SFT / instruction tuning](#sft-instruction-tuning)
- [📚 Distillation](#distillation)
- [⚖️ Preference optimization](#preference-optimization)
- [🎚️ Reward modeling / ORM](#reward-modeling-orm)
- [🪜 PRM / process supervision](#prm-process-supervision)
- [🏋️ RLVR / verifier RL](#rlvr-verifier-rl)
- [🌐 Agent training](#agent-training)
- [🧪 Evaluation / reranking / audit](#evaluation-reranking-audit)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456) | 2025 | [Paper](https://arxiv.org/abs/2502.01456) · [DOI](https://doi.org/10.48550/arXiv.2502.01456) · [Code](https://github.com/PRIME-RL/PRIME) · [Data](https://huggingface.co/datasets/PRIME-RL/Eurus-2-Rollout) · [HF](https://huggingface.co/PRIME-RL) · [Paper Card Source](../../paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources) | policy rollout with final outcome label, implicit process reward estimates, and policy update signal.; process: prompt, policy rollout, outcome label; online RL training loop | implicit process rewards derived from outcome labels and updated on policy rollouts. | It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds. |
| [Reinforced Self-Training (ReST) for Language Modeling](https://arxiv.org/abs/2308.08998) | 2023 | [Paper](https://arxiv.org/abs/2308.08998) · [DOI](https://doi.org/10.48550/arXiv.2308.08998) · [Paper Card Source](../../paper_cards/library/cards/reinforced-self-training-rest-for-language-modeling-2023/sources) | Input-candidate-output records carrying quality/reward information for offline policy improvement.; process: source input, candidate generation, quality signal; Offline language-model generation and batch reinforcement-learning pipeline. | Quality signals derived from the paper's alignment/evaluation setup; the exact reward implementation should be retained with any reuse. | It is an early, clear reference for separating the generation batch, quality signal, and offline optimizer when interpreting self-training claims. |

## 5. Full Paper List

### <a id="sft-instruction-tuning"></a>🧱 SFT / instruction tuning

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="distillation"></a>📚 Distillation

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="preference-optimization"></a>⚖️ Preference optimization

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="reward-modeling-orm"></a>🎚️ Reward modeling / ORM

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="prm-process-supervision"></a>🪜 PRM / process supervision

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="rlvr-verifier-rl"></a>🏋️ RLVR / verifier RL

- 🪜 **[PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · rlvr · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.01456) · [DOI](https://doi.org/10.48550/arXiv.2502.01456) · [Code](https://github.com/PRIME-RL/PRIME) · [Data](https://huggingface.co/datasets/PRIME-RL/Eurus-2-Rollout) · [HF](https://huggingface.co/PRIME-RL) · [Paper Card Source](../../paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources)
  _Data object:_ policy rollout with final outcome label, implicit process reward estimates, and policy update signal.; process: prompt, policy rollout, outcome label; online RL training loop
  _Feedback / verifier:_ implicit process rewards derived from outcome labels and updated on policy rollouts.
  _Recipe signal:_ teacher: outcome verifiers rather than dense human process labels.; generator: policy rollouts
  _Audit focus:_ implicit rewards can inherit outcome-verifier shortcuts, online reward updates may introduce reward hacking, benchmark improvements may conflate optimizer and reward-contract changes
  _Why it matters:_ It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds.

### <a id="agent-training"></a>🌐 Agent training

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="evaluation-reranking-audit"></a>🧪 Evaluation / reranking / audit

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="other-related-work"></a>Other related work

- 🏗️ **[Reinforced Self-Training (ReST) for Language Modeling](https://arxiv.org/abs/2308.08998)**
  <sub>2023 · arXiv · 🏗️ construction recipe · mixed · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2308.08998) · [DOI](https://doi.org/10.48550/arXiv.2308.08998) · [Paper Card Source](../../paper_cards/library/cards/reinforced-self-training-rest-for-language-modeling-2023/sources)
  _Data object:_ Input-candidate-output records carrying quality/reward information for offline policy improvement.; process: source input, candidate generation, quality signal; Offline language-model generation and batch reinforcement-learning pipeline.
  _Feedback / verifier:_ Quality signals derived from the paper's alignment/evaluation setup; the exact reward implementation should be retained with any reuse.
  _Recipe signal:_ teacher: The policy's own generated batch plus the quality/reward signal; no stronger demonstration teacher is required.; generator: The current policy generates an offline batch in the grow phase.
  _Audit focus:_ Quality filtering can collapse output diversity when only high-scoring candidates are retained., Offline reuse can amplify reward-model or metric bias across iterations., Reported gains should not be generalized from translation to verifiable reasoning without an equivalent feedback contract.
  _Why it matters:_ It is an early, clear reference for separating the generation batch, quality signal, and offline optimizer when interpreting self-training claims.

## 6. What to Audit

- Which objective consumes the data: SFT, distillation, DPO, RM, PRM, RLVR, agent imitation, evaluation, or audit?
- Is the same data reused across training, validation, reward modeling, and evaluation?
- Are objective-specific fields preserved rather than collapsed into a generic prompt-answer pair?

## 7. Open Problems

- Which objective-specific metadata should be mandatory in paper cards?
- How can a repository detect unsafe reuse across training and evaluation?
- When should a benchmark be treated as a feedback source rather than only an evaluation surface?
- How should contributors tag multi-use frontier reports?

## 8. Related Paper-Card Sources

- [PRIME: Process reinforcement through implicit rewards](../../paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources)
- [Reinforced Self-Training (ReST) for Language Modeling](../../paper_cards/library/cards/reinforced-self-training-rest-for-language-modeling-2023/sources)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
