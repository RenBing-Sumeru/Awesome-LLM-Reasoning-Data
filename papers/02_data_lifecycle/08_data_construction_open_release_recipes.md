# 🏗️ Data Construction and Open Release Recipes

> Prompt sourcing, teacher traces, rejection sampling, self-play, filtering, verifier refresh, open releases, lineage, and release metadata.

## 1. What This Track Studies

Use this track to learn how reasoning datasets are actually built, filtered, packaged, and released.

A high-impact Awesome repo must teach recipes, not just cite papers. This track collects the construction pipeline: task sourcing, teacher trace generation, rollout/search expansion, rejection sampling, self-improvement, verifier refresh, filtering, deduplication, decontamination, release packaging, and metadata.

Open releases vary widely. Some expose data and scripts; others expose only a report. Contributors should identify what is reproducible and what is hidden: teacher models, sampling rules, prompts, filters, accepted/rejected traces, splits, license, lineage, and known failures.

This track is where students can turn a paper into operational knowledge: what should another lab do if it wants to build a similar dataset?

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧱 Prompt sourcing | question pools, seed sources, licenses, difficulty, and base-model pass rates | prompt sources are mixed without attribution |
| ✍️ Teacher trace generation | teacher models, trace policies, sampling settings, and distillation targets | teacher identity or sampling protocol is hidden |
| 🔎 Rejection sampling / search-generated data | candidate generation, search budget, filtering, and accepted/rejected examples | only accepted traces are released |
| 🔁 Self-play / self-improvement | self-improvement, co-evolution, generator-verifier cycles, and curricula | feedback loop amplifies hidden shortcuts |
| 🧪 Filtering and verifier refresh | answer filters, judge filters, decontamination, and verifier updates | filter thresholds become hidden objectives |
| 🏗️ Open reasoning data releases | open datasets, code, HF releases, recipes, ablations, and reproducibility | dataset is open but recipe details are not |
| 🧬 Data lineage and release metadata | datasheets, splits, lineage, licensing, versioning, and known failures | reuse loses the release context |

### Contents

- [🧱 Prompt sourcing](#prompt-sourcing)
- [✍️ Teacher trace generation](#teacher-trace-generation)
- [🔎 Rejection sampling / search-generated data](#rejection-sampling-search-generated-data)
- [🔁 Self-play / self-improvement](#self-play-self-improvement)
- [🧪 Filtering and verifier refresh](#filtering-and-verifier-refresh)
- [🏗️ Open reasoning data releases](#open-reasoning-data-releases)
- [🧬 Data lineage and release metadata](#data-lineage-and-release-metadata)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Efficient Long CoT Reasoning in Small Language Models](https://arxiv.org/abs/2505.18440) | 2025 | [Paper](https://arxiv.org/abs/2505.18440) · [DOI](https://doi.org/10.48550/arXiv.2505.18440) · [Paper Card Source](../../paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources) | Pruned long reasoning trace, final answer, validity outcome, and selected student-training example.; process: problem, teacher long cot, pruned steps; Mathematical-reasoning tasks with answer-based validation. | Programmatic or answer-based correctness checks validate traces selected for on-policy curation. | It makes long2short reasoning a data-lineage problem: teacher trace, pruning rule, student rollout, checker, and accepted compression all affect the result. |
| [AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802) | 2024 | [Paper](https://arxiv.org/abs/2405.16802) · [DOI](https://doi.org/10.48550/arXiv.2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV) · [Paper Card Source](../../paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources) | reasoning trace with step-level confidence-change annotations.; process: problem, candidate solution, reasoning step; offline reasoning traces | answer-trained verifier converted into automated process annotations. | It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision. |
| [Re-ReST: Reflection-Reinforced Self-Training for Language Agents](https://arxiv.org/abs/2406.01495) | 2024 | [Paper](https://arxiv.org/abs/2406.01495) · [DOI](https://doi.org/10.48550/arXiv.2406.01495) · [Code](https://github.com/PlusLabNLP/Re-ReST) · [Paper Card Source](../../paper_cards/library/cards/re-rest-reflection-reinforced-self-training-for-language-agents-2024/sources) | Initial agent output, external feedback, reflection, refined output, and selected self-training episode.; process: task input, initial agent output, environment feedback; Task-specific agent environments and feedback mechanisms. | External feedback such as code unit-test results, plus reflector-generated revisions. | It makes rejected or weak agent attempts potentially useful only when their feedback and repair lineage are retained. |
| [Reinforced Self-Training (ReST) for Language Modeling](https://arxiv.org/abs/2308.08998) | 2023 | [Paper](https://arxiv.org/abs/2308.08998) · [DOI](https://doi.org/10.48550/arXiv.2308.08998) · [Paper Card Source](../../paper_cards/library/cards/reinforced-self-training-rest-for-language-modeling-2023/sources) | Input-candidate-output records carrying quality/reward information for offline policy improvement.; process: source input, candidate generation, quality signal; Offline language-model generation and batch reinforcement-learning pipeline. | Quality signals derived from the paper's alignment/evaluation setup; the exact reward implementation should be retained with any reuse. | It is an early, clear reference for separating the generation batch, quality signal, and offline optimizer when interpreting self-training claims. |
| [Scaling Relationship on Learning Mathematical Reasoning with Large Language Models](https://arxiv.org/abs/2308.01825) | 2023 | [Paper](https://arxiv.org/abs/2308.01825) · [DOI](https://doi.org/10.48550/arXiv.2308.01825) · [Code](https://github.com/OFA-Sys/gsm8k-ScRel) · [Paper Card Source](../../paper_cards/library/cards/scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023/sources) | A generated reasoning path paired with final answer correctness and selection for the augmented fine-tuning set.; process: math problem, generated rationale, final answer; Mathematical reasoning dataset with answer matching for rejection-sampling selection. | Final-answer correctness check retains correct reasoning paths. | It is a clean data-lineage case: the prompt, candidate pool, answer checker, accepted trace, and source model all affect the claimed scaling gain. |

## 5. Full Paper List

### <a id="prompt-sourcing"></a>🧱 Prompt sourcing

- 🏗️ **[Re-ReST: Reflection-Reinforced Self-Training for Language Agents](https://arxiv.org/abs/2406.01495)**
  <sub>2024 · arXiv · 🏗️ construction recipe · mixed · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.01495) · [DOI](https://doi.org/10.48550/arXiv.2406.01495) · [Code](https://github.com/PlusLabNLP/Re-ReST) · [Paper Card Source](../../paper_cards/library/cards/re-rest-reflection-reinforced-self-training-for-language-agents-2024/sources)
  _Data object:_ Initial agent output, external feedback, reflection, refined output, and selected self-training episode.; process: task input, initial agent output, environment feedback; Task-specific agent environments and feedback mechanisms.
  _Feedback / verifier:_ External feedback such as code unit-test results, plus reflector-generated revisions.
  _Recipe signal:_ teacher: The agent itself, a reflector, and external task feedback rather than human or stronger-model demonstrations.; generator: The agent generates candidates and the reflector produces revisions conditioned on failure feedback.
  _Audit focus:_ A reflector can rationalize an incorrect output instead of fixing it., Feedback quality differs sharply across unit tests, QA labels, and subjective generation tasks., Treating reflection calls as free hides a material test-time compute cost.
  _Why it matters:_ It makes rejected or weak agent attempts potentially useful only when their feedback and repair lineage are retained.

### <a id="teacher-trace-generation"></a>✍️ Teacher trace generation

- 🏗️ **[Efficient Long CoT Reasoning in Small Language Models](https://arxiv.org/abs/2505.18440)**
  <sub>2025 · arXiv · 🏗️ construction recipe · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.18440) · [DOI](https://doi.org/10.48550/arXiv.2505.18440) · [Paper Card Source](../../paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources)
  _Data object:_ Pruned long reasoning trace, final answer, validity outcome, and selected student-training example.; process: problem, teacher long cot, pruned steps; Mathematical-reasoning tasks with answer-based validation.
  _Feedback / verifier:_ Programmatic or answer-based correctness checks validate traces selected for on-policy curation.
  _Recipe signal:_ teacher: A long-CoT reasoning model supplies initial traces for pruning and distillation.; generator: Teacher traces are pruned; the student generates on-policy candidates to curate useful valid long-CoT data.
  _Audit focus:_ Pruning can delete uncertainty, corrections, or premises that are important for a valid derivation., Answer correctness does not prove that the compressed rationale is faithful or pedagogically useful., On-policy curation can reinforce the student's existing shortcuts and reduce solution diversity.
  _Why it matters:_ It makes long2short reasoning a data-lineage problem: teacher trace, pruning rule, student rollout, checker, and accepted compression all affect the result.

### <a id="rejection-sampling-search-generated-data"></a>🔎 Rejection sampling / search-generated data

- 🏗️ **[Scaling Relationship on Learning Mathematical Reasoning with Large Language Models](https://arxiv.org/abs/2308.01825)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 📈 scaling study · programmatic · sft · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2308.01825) · [DOI](https://doi.org/10.48550/arXiv.2308.01825) · [Code](https://github.com/OFA-Sys/gsm8k-ScRel) · [Paper Card Source](../../paper_cards/library/cards/scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023/sources)
  _Data object:_ A generated reasoning path paired with final answer correctness and selection for the augmented fine-tuning set.; process: math problem, generated rationale, final answer; Mathematical reasoning dataset with answer matching for rejection-sampling selection.
  _Feedback / verifier:_ Final-answer correctness check retains correct reasoning paths.
  _Recipe signal:_ teacher: Supervised fine-tuning data and multiple source models that generate candidate reasoning paths.; generator: Supervised models sample augmented rationales for each math problem.
  _Audit focus:_ Retaining only correct final answers hides plausible but invalid rationales and collapses failure diversity., Exact-answer matching may accept reasoning with unsupported steps or reject equivalent answer formats., Reusing benchmark prompts for augmentation can contaminate subsequent benchmark evaluation.
  _Why it matters:_ It is a clean data-lineage case: the prompt, candidate pool, answer checker, accepted trace, and source model all affect the claimed scaling gain.

### <a id="self-play-self-improvement"></a>🔁 Self-play / self-improvement

- 🪜 **[AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802)**
  <sub>2024 · NeurIPS · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.16802) · [DOI](https://doi.org/10.48550/arXiv.2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV) · [Paper Card Source](../../paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources)
  _Data object:_ reasoning trace with step-level confidence-change annotations.; process: problem, candidate solution, reasoning step; offline reasoning traces
  _Feedback / verifier:_ answer-trained verifier converted into automated process annotations.
  _Recipe signal:_ teacher: answer-level verifier trained from final-answer correctness.; generator: model-generated candidate reasoning
  _Audit focus:_ answer-level verifier confidence can mislabel intermediate steps, relative confidence changes may not identify causal first errors, commonsense and math tasks may require different error taxonomies
  _Why it matters:_ It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision.

### <a id="filtering-and-verifier-refresh"></a>🧪 Filtering and verifier refresh

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="open-reasoning-data-releases"></a>🏗️ Open reasoning data releases

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="data-lineage-and-release-metadata"></a>🧬 Data lineage and release metadata

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

- Are prompt sources, teacher models, sampling rules, and filters disclosed?
- Can another team reproduce the accepted and rejected examples?
- Is the release license and lineage clear enough for reuse?

## 7. Open Problems

- What is the minimum release metadata for safe reuse?
- Should rejected traces be released as first-class data?
- How can open projects document proprietary teacher effects?
- Which filtering rules become hidden training objectives?

## 8. Related Paper-Card Sources

- [Efficient Long CoT Reasoning in Small Language Models](../../paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources)
- [AutoPSV: Automated Process-Supervised Verifier](../../paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources)
- [Re-ReST: Reflection-Reinforced Self-Training for Language Agents](../../paper_cards/library/cards/re-rest-reflection-reinforced-self-training-for-language-agents-2024/sources)
- [Reinforced Self-Training (ReST) for Language Modeling](../../paper_cards/library/cards/reinforced-self-training-rest-for-language-modeling-2023/sources)
- [Scaling Relationship on Learning Mathematical Reasoning with Large Language Models](../../paper_cards/library/cards/scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023/sources)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
