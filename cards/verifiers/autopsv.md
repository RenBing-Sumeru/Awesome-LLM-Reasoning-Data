<!-- entry_id: autopsv-automated-process-supervised-verifier-2024 -->
<!-- card_type: verifiers -->
# AutoPSV: Automated Process-Supervised Verifier

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=autopsv-automated-process-supervised-verifier-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=autopsv-automated-process-supervised-verifier-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=autopsv-automated-process-supervised-verifier-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: process_trace_supervision_data
> Links: [Paper](https://arxiv.org/abs/2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV)

## TL;DR

AutoPSV trains an answer-level verifier and uses changes in its confidence across reasoning steps to generate process-level annotations automatically.

For rollout/search data, the key point is that multiple generated outputs and their intermediate steps become a candidate-selection surface: the verifier is used to choose better answers and to label reasoning progress without manual step labels.

## 1. What is this work?

- Year / venue: 2024 · NeurIPS.
- Author affiliations: The University of Hong Kong; The Chinese University of Hong Kong; University of Cambridge; University of Edinburgh; City University of Hong Kong.
- Atlas role: process_supervision, verifier_reward, construction_recipe.
- Domains: math, commonsense, reasoning.
- Current status: verified.
- Why it belongs: AutoPSV is a representative automatic process-labeling recipe that turns answer-level verification into step-level process supervision.

## 2. What data object does it expose?

- Prompt/source: math and commonsense reasoning tasks.
- Trace/action author: language models generate multi-step reasoning outputs.
- Answer/artifact format: reasoning trace with per-step confidence-change labels or process-supervision targets.
- Process fields: problem, candidate solution, reasoning step, verifier confidence before/after the step, relative confidence change, selected answer outcome.
- Environment or substrate: offline reasoning traces and verifier evaluation.
- Terminal predicate: final answer correctness or selected-candidate correctness.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed. The method begins from final-answer correctness and derives step-level signals from verifier confidence dynamics.
- Recorded verifier/reward/environment: process-outcome verifier and automated process annotation.
- Supervision granularity: step_level and process_reward.

## 4. How is the data constructed?

- Base model: unknown in the atlas entry; the paper evaluates across several response generators.
- Teacher: answer-trained verifier, not manual dense step labels.
- Generator: model-generated candidate reasoning traces.
- Filtering rule: relative changes in verifier confidence are converted into process annotations.
- Sampling protocol: multiple generated outputs are scored or selected by OSV/PSV-style verifiers in the reported evaluation.
- Optimizer/scaffold: train a process-enhanced verifier from automatically generated annotations.

## 5. How can it enter post-training?

Recorded training/evaluation use: process_supervision, reward_modeling, evaluation.

AutoPSV can supply process-supervision labels for verifier training, and the resulting verifier can be used for candidate selection among multiple rollouts. It is less directly a released training dataset than a labeling recipe, so reuse should preserve the verifier, generator, and evaluation setting.

## 6. What should readers audit?

- Does a verifier confidence drop correspond to an actual reasoning error?
- Are step boundaries stable across model styles and domains?
- Are ground-truth-free examples evaluated separately from examples with known answers?
- How many candidate outputs are sampled before verifier selection?
- Does PSV selection outperform self-consistency under matched sample budgets?
- What parts of the repository are withheld or incomplete?

## 7. What is missing or risky?

- The official repository says portions of the codebase are withheld, so artifact completeness should not be overstated.
- Confidence-change labels may detect correlation with final correctness rather than causal reasoning errors.
- Commonsense and math reasoning may need different error taxonomies.
- If used for training, the verifier can reward steps that look confidence-improving without being faithful or necessary.

## 8. Why it matters for post-training reasoning data

AutoPSV helps connect answer-level verification, process-label construction, and rollout selection. It is a useful middle point between human step labels and search-derived process rewards, but it should be audited carefully before treating its labels as ground truth.

## 9. Links and citation

- [Paper](https://arxiv.org/abs/2405.16802)
- [Code](https://github.com/rookie-joe/AutoPSV)
- Data ID: `autopsv-automated-process-supervised-verifier-2024`
- Citation status: verified
- Confidence: high
