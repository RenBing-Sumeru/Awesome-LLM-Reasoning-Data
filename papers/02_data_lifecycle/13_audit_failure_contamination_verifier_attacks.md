# 🧯 Audit, Failure, Contamination, and Verifier Attacks

> Benchmark contamination, search-time leakage, hidden lineage, reward hacking, verifier gaming, LLM-as-judge attacks, spurious rewards, and reproducibility failures.

## 1. What This Track Studies

Use this track when you want to know how reasoning-data claims can fail and how to audit them before reuse.

A trustworthy Awesome repo must make failure visible. Reasoning-data systems can leak benchmarks, memorize teacher artifacts, exploit judges, game verifiers, overfit public tests, optimize spurious rewards, and collapse under small evaluation changes. This track is the atlas safety rail.

The page is not a pessimistic appendix; it is practical infrastructure. Every data track needs an audit lens, and every paper card should contain enough failure analysis for builders to decide whether a resource is safe to reuse.

Contributors should use this track to collect both direct failure papers and audit-relevant benchmark or model-report analyses.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧯 Benchmark contamination | train/test overlap, stale evaluations, and benchmark refresh | memorized items are reported as reasoning progress |
| 🔍 Search-time contamination | contamination introduced by search, tools, retrieval, or inference scaffolds | test-time tool access leaks answer traces |
| 🧬 Hidden lineage / teacher leakage | teacher-model traces, synthetic data inheritance, and hidden trait transfer | student behavior inherits undisclosed teacher artifacts |
| 🎮 Reward hacking | ways reward models, tests, or judges can be optimized as shortcuts | reward rises while real quality falls |
| 🧪 Verifier gaming | models exploiting checkers, answer formats, or judge blind spots | verifier-passing examples are semantically wrong |
| ⚖️ LLM-as-judge attacks | one-token attacks, position bias, verbosity bias, and prompt attacks | judge score changes for non-semantic reasons |
| 🧨 Spurious rewards | shortcut rewards, memorization-triggered rewards, and wrong-behavior correlations | reward improves while model learns a shortcut |
| 📉 Reproducibility failures | decoding, evaluation, scaffold, and data reporting failures | reported gains disappear under controlled reruns |

### Contents

- [🧯 Benchmark contamination](#benchmark-contamination)
- [🔍 Search-time contamination](#search-time-contamination)
- [🧬 Hidden lineage / teacher leakage](#hidden-lineage-teacher-leakage)
- [🎮 Reward hacking](#reward-hacking)
- [🧪 Verifier gaming](#verifier-gaming)
- [⚖️ LLM-as-judge attacks](#llm-as-judge-attacks)
- [🧨 Spurious rewards](#spurious-rewards)
- [📉 Reproducibility failures](#reproducibility-failures)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|

## 5. Full Paper List

### <a id="benchmark-contamination"></a>🧯 Benchmark contamination

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="search-time-contamination"></a>🔍 Search-time contamination

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="hidden-lineage-teacher-leakage"></a>🧬 Hidden lineage / teacher leakage

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="reward-hacking"></a>🎮 Reward hacking

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="verifier-gaming"></a>🧪 Verifier gaming

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="llm-as-judge-attacks"></a>⚖️ LLM-as-judge attacks

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="spurious-rewards"></a>🧨 Spurious rewards

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="reproducibility-failures"></a>📉 Reproducibility failures

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- What can leak, contaminate, or be optimized as a shortcut?
- Is the attack tested against the actual judge/verifier setup?
- Does the paper preserve enough evidence to reproduce the failure?

## 7. Open Problems

- How should open reasoning-data releases report contamination checks?
- Can verifier and judge attacks be standardized across domains?
- What is the right card schema for hidden lineage and teacher leakage?
- How should the atlas decide when to demote a benchmark or paper due to audit failures?

## 8. Related Paper-Card Sources

- No paper-card sources are linked for this category yet.

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
