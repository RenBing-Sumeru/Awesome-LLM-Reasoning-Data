# 🤝 Preference and Reward Feedback Data

> Human preferences, AI feedback, reward models, DPO-style pairs, scalar rewards, critiques, and rubric-conditioned feedback records.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=preference_reward_feedback_data&mode=find_papers)
> Try: `What should I read first for 🤝 Preference & Reward Feedback?`
> Try: `Compare the data objects and verifier types in 🤝 Preference & Reward Feedback.`
> Try: `Generate an audit checklist for 🤝 Preference & Reward Feedback.`

## 1. What This Track Studies

Use this track to compare preference and reward signals before they become training objectives or evaluation proxies.

Preference and reward data is the bridge between demonstrations and optimization. It can appear as chosen/rejected pairs, scalar scores, critiques, reward-model labels, constitutional feedback, rubric scores, or judge outputs. Reasoning work often reuses these signals, but the meaning changes when the task also has a programmatic verifier or an environment predicate.

The practical question is whether the feedback contract is reusable. A reward model trained for helpfulness may not be a reliable verifier for math reasoning. A rubric score can be interpretable but brittle. A DPO pair can encode useful preferences while hiding annotator context. This track keeps those assumptions visible.

For high-quality curation, each paper card should state who produced the feedback, what alternatives were compared, what the reward optimizes, and where the feedback can fail or be gamed.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🤝 Human preference data / RLHF | human comparison data, helpful/harmless feedback, and RLHF reward targets | annotator assumptions and disagreement are hidden |
| ⚖️ DPO / preference optimization | pairwise data used directly for preference optimization | preference pairs are reused outside collection context |
| 🎚️ Scalar reward / ORM data | outcome reward labels, scalar scores, and trained reward-model targets | scalar reward hides why an answer is better |
| 🤖 RLAIF / synthetic feedback | model-generated preferences, critiques, and constitutional feedback | synthetic judge behavior is treated as human preference |
| 🧪 Reward-model benchmarks | rewardbench-style evaluation data and reward-model stress tests | benchmark preference does not predict downstream training value |
| 🧾 Rubric-conditioned rewards | rubric scores, critique-plus-score records, and domain-specific reward signals | rubric wording becomes an exploitable reward channel |

### Contents

- [🤝 Human preference data / RLHF](#human-preference-data-rlhf)
- [⚖️ DPO / preference optimization](#dpo-preference-optimization)
- [🎚️ Scalar reward / ORM data](#scalar-reward-orm-data)
- [🤖 RLAIF / synthetic feedback](#rlaif-synthetic-feedback)
- [🧪 Reward-model benchmarks](#reward-model-benchmarks)
- [🧾 Rubric-conditioned rewards](#rubric-conditioned-rewards)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [DOI](https://doi.org/10.48550/arXiv.2305.20050) · [Paper Card Source](../../paper_cards/sources/lets-verify-step-by-step-2023) | Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning. | Process reward model trained from human step-level labels. | Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection. |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) | 2025 | [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025) | candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack | small LLM verifier augmenting rules | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. |

## 5. Full Paper List

### <a id="human-preference-data-rlhf"></a>🤝 Human preference data / RLHF

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="dpo-preference-optimization"></a>⚖️ DPO / preference optimization

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="scalar-reward-orm-data"></a>🎚️ Scalar reward / ORM data

- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [DOI](https://doi.org/10.48550/arXiv.2305.20050) · [Paper Card Source](../../paper_cards/sources/lets-verify-step-by-step-2023)
  _Data object:_ Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning.
  _Feedback / verifier:_ Process reward model trained from human step-level labels.
  _Recipe signal:_ teacher: Human step-level labels over model-generated reasoning.; generator: Policy model produces candidate math traces.
  _Audit focus:_ Human step labels can encode style preferences., PRM scores can reward locally plausible but globally wrong paths., Verifier calls add TTC cost that must be disclosed.
  _Why it matters:_ Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection.

### <a id="rlaif-synthetic-feedback"></a>🤖 RLAIF / synthetic feedback

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="reward-model-benchmarks"></a>🧪 Reward-model benchmarks

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="rubric-conditioned-rewards"></a>🧾 Rubric-conditioned rewards

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="other-related-work"></a>Other related work

- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

## 6. What to Audit

- What exactly is supervised: demonstration, preference pair, critique, scalar reward, or rationale?
- Are annotator, judge, or reward-model assumptions disclosed?
- Can the preference/reward signal be reused outside the original prompt distribution without reward hacking?

## 7. Open Problems

- Which preference signals remain useful once a cheap programmatic verifier exists?
- How should reward datasets disclose annotator and judge assumptions?
- Can AI feedback be made auditable enough for open reasoning-data releases?
- What evidence shows a reward improves real reasoning rather than stylistic compliance?

## 8. Related Paper-Card Sources

- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [Let's Verify Step by Step](../../paper_cards/sources/lets-verify-step-by-step-2023)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
