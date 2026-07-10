# 🚀 Frontier Reports and Data Disclosure Ledger

> DeepSeek-R1, Kimi, Qwen, Magistral, Phi, Nemotron, RLVR reports, and what each frontier-style report discloses or hides about data.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=frontier_reports_data_disclosure_ledger&mode=find_papers)
> Try: `What should I read first for 🚀 Frontier Disclosure Ledger?`
> Try: `Compare the data objects and verifier types in 🚀 Frontier Disclosure Ledger.`
> Try: `Generate an audit checklist for 🚀 Frontier Disclosure Ledger.`

## 1. What This Track Studies

Use this track to read frontier model reports as partial data-disclosure documents rather than only model-performance announcements.

Frontier reasoning reports shape the field even when they do not release full data. They disclose hints about SFT mixtures, distillation, RLVR rewards, verifier contracts, safety tuning, rejection sampling, inference budgets, and evaluation practices. This track turns those hints into a disclosure ledger.

The goal is not to overclaim hidden recipes. The page should separate what is disclosed, what is inferred, and what remains unknown. That distinction is essential for a trusted Awesome project.

Contributors should tag frontier reports across data types and lifecycle stages while using this track to summarize the report-level disclosure quality.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🚀 DeepSeek-R1 family | RLVR, distillation, reasoning traces, and public recipe disclosure | report describes outcomes but not enough data partitions |
| 🌙 Kimi reasoning reports | long-context reasoning, RL compute, and frontier inference budgets | test-time compute is mixed with training-data effects |
| 🐉 Qwen reasoning/math/code reports | math, code, PRM, and open-weight reasoning model families | release cards do not separate SFT, RLVR, and evaluation data |
| 🧠 Magistral / Phi / Nemotron style reports | open-weight reasoning reports with partial data and reward disclosures | model-card claims cannot be mapped to concrete data objects |
| 🧪 RLVR recipe reports | reports that expose reward contracts, rollout policies, or RL scaffolds | RL gains are attributed without verifier coverage |
| 🧬 What is disclosed vs hidden | data sources, filters, lineage, safety mixtures, and undisclosed partitions | opaque mixtures are reused as open recipes |

### Contents

- [🚀 DeepSeek-R1 family](#deepseek-r1-family)
- [🌙 Kimi reasoning reports](#kimi-reasoning-reports)
- [🐉 Qwen reasoning/math/code reports](#qwen-reasoning-math-code-reports)
- [🧠 Magistral / Phi / Nemotron style reports](#magistral-phi-nemotron-style-reports)
- [🧪 RLVR recipe reports](#rlvr-recipe-reports)
- [🧬 What is disclosed vs hidden](#what-is-disclosed-vs-hidden)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300) | 2024 | [Paper](https://arxiv.org/abs/2402.03300) · [DOI](https://doi.org/10.48550/arXiv.2402.03300) · [HF](https://huggingface.co/deepseek-ai/deepseek-math-7b-base) · [Paper Card Source](../../paper_cards/sources/deepseekmath-2024) | Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline. | GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation. | High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target. |

## 5. Full Paper List

### <a id="deepseek-r1-family"></a>🚀 DeepSeek-R1 family

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="kimi-reasoning-reports"></a>🌙 Kimi reasoning reports

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="qwen-reasoning-math-code-reports"></a>🐉 Qwen reasoning/math/code reports

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="magistral-phi-nemotron-style-reports"></a>🧠 Magistral / Phi / Nemotron style reports

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="rlvr-recipe-reports"></a>🧪 RLVR recipe reports

- 📦 **[DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300)**
  <sub>2024 · arXiv · 📦 data release · 📈 scaling study · programmatic · mixed · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2402.03300) · [DOI](https://doi.org/10.48550/arXiv.2402.03300) · [HF](https://huggingface.co/deepseek-ai/deepseek-math-7b-base) · [Paper Card Source](../../paper_cards/sources/deepseekmath-2024)
  _Data object:_ Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline.
  _Feedback / verifier:_ GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation.
  _Recipe signal:_ teacher: Math corpus filters, instruction examples, and benchmark answer supervision.; generator: DeepSeekMath-Instruct/RL models generate solutions.
  _Audit focus:_ Web data filtering may preserve benchmark leakage., GRPO gains can be confused with data-scale gains., Self-consistency improves scores but costs 64 samples.
  _Why it matters:_ High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target.

### <a id="what-is-disclosed-vs-hidden"></a>🧬 What is disclosed vs hidden

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- Which data partitions and reward contracts are actually disclosed?
- Can model gains be attributed to data, optimizer, scaffold, or inference budget?
- Are distillation, RLVR, safety, and chat data separated?

## 7. Open Problems

- What should a standard frontier-report data-disclosure table include?
- How can open projects cite frontier reports without overstating hidden details?
- Which disclosed fields are most predictive of reproducibility?
- How should model-family updates be versioned in the atlas?

## 8. Related Paper-Card Sources

- [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](../../paper_cards/sources/deepseekmath-2024)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
