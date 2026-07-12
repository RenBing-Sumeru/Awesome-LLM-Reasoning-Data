# 📈 Scaling, RLVR, and Test-Time Compute

> Data scaling, data reuse, RLVR optimization, verifier scaling, pass@k, sampling budgets, test-time compute, and scaling attribution.

## 1. What This Track Studies

Use this track to interpret claims about how much data, verifier strength, RL, and inference budget contribute to reasoning gains.

Scaling claims are central to modern reasoning models. Papers report more data, stronger verifiers, larger rollout budgets, better RL optimization, longer thinking, and better pass@k. This track helps readers separate those factors instead of treating every gain as a generic reasoning-data improvement.

RLVR makes the data/verifier link especially visible. A verifier can generate reward, filter samples, guide search, and evaluate final answers. The same benchmark can also become a training target. Good curation records the reward contract, data reuse, rollout policy, and inference budget.

For high-impact use, this track should become the place readers visit before believing a scaling curve.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 📈 Data scaling | number, diversity, difficulty, and uniqueness of examples | unique examples and repeated rollouts are conflated |
| 🔁 Data reuse and uniqueness | reuse counts, deduplication, repeated prompts, and train/test overlap | same source examples are counted as fresh data |
| ⏱️ Test-time compute | sampling, search, self-critique, thinking budgets, and inference-time scaling | different inference budgets are compared |
| 🎲 pass@k / sampling budget | pass@k, repeated sampling, best-of-N, and budget-aware evaluation | reported gains hide selection or budget changes |
| 🧪 Verifier scaling | how verifier strength, refresh, and coverage scale with training | verifier becomes stale or easy to exploit |
| 🏋️ RLVR optimization scaling | policy optimization, reward contracts, curriculum, and rollout policy | optimizer/scaffold gains are mistaken for data gains |
| 🔍 Scaling attribution | separating data, verifier, optimizer, model, and inference-budget effects | ablation tables do not isolate the source of improvement |

### Contents

- [📈 Data scaling](#data-scaling)
- [🔁 Data reuse and uniqueness](#data-reuse-and-uniqueness)
- [⏱️ Test-time compute](#test-time-compute)
- [🎲 pass@k / sampling budget](#pass-k-sampling-budget)
- [🧪 Verifier scaling](#verifier-scaling)
- [🏋️ RLVR optimization scaling](#rlvr-optimization-scaling)
- [🔍 Scaling attribution](#scaling-attribution)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|

## 5. Full Paper List

### <a id="data-scaling"></a>📈 Data scaling

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="data-reuse-and-uniqueness"></a>🔁 Data reuse and uniqueness

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="test-time-compute"></a>⏱️ Test-time compute

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="pass-k-sampling-budget"></a>🎲 pass@k / sampling budget

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="verifier-scaling"></a>🧪 Verifier scaling

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="rlvr-optimization-scaling"></a>🏋️ RLVR optimization scaling

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="scaling-attribution"></a>🔍 Scaling attribution

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- Does the claim improve asymptote, sample efficiency, or inference budget allocation?
- Are pass@k, rollout budget, verifier refresh, and reuse count reported?
- Can data scale be separated from test-time compute scale?

## 7. Open Problems

- What is the right unit of reasoning-data scale: prompt, trace, rollout, verified answer, or environment episode?
- How should RLVR reports disclose verifier false positives?
- Can data scale and test-time compute scale be disentangled cleanly?
- How much reuse is acceptable before benchmark claims become fragile?

## 8. Related Paper-Card Sources

- No paper-card sources are linked for this category yet.

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
