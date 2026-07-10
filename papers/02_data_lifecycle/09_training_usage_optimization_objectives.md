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

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="agent-training"></a>🌐 Agent training

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="evaluation-reranking-audit"></a>🧪 Evaluation / reranking / audit

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

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

- No paper-card sources are linked for this category yet.

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
