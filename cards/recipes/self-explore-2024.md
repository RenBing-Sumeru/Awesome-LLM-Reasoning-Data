<!-- entry_id: self-explore-2024 -->
<!-- card_type: recipes -->
# Paper Card: Self-Explore: Enhancing Mathematical Reasoning in Language Models with Fine-grained Rewards

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-explore-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-explore-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-explore-2024&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** Self-Explore converts rejected math rationales into first-pit preference pairs, but its labels mean finite-search unrecoverability rather than proven first-error correctness, and generated training pairs are unreleased.
> **Reading priority:** Recommended
> **Paper type:** Rejection-sampling, first-error localization, and step-level preference construction
> **Knowledge categories:** Preference and Reward Feedback Data · Process and Trace Supervision Data · Rollout, Search, and Test-Time Trace Data · Data Construction and Open Release Recipes · Training Usage and Optimization Objectives
> **Best for:** Researchers recycling rejected reasoning traces into programmatically labeled process supervision
> **Confidence:** High
> **Year / Venue:** 2024 · Findings of EMNLP 2024
> **Authors:** Hyeonbin Hwang, Doyoung Kim, Seungone Kim, Seonghyeon Ye, Minjoon Seo
> **Institutions:** KAIST AI; Carnegie Mellon University
> **Links:** [Paper](https://aclanthology.org/2024.findings-emnlp.78/) · [arXiv](https://arxiv.org/abs/2404.10346) · [DOI](https://doi.org/10.18653/v1/2024.findings-emnlp.78) · [Code](https://github.com/hbin0701/Self-Explore) · [Source Data](https://github.com/hbin0701/Self-Explore/tree/master/data) · [Released Checkpoint](https://huggingface.co/hbin0701/DeepSeek_MATH_Self_Explore)

---

## 1. Problem: What question does this work address?

Rejection-sampling fine-tuning can retain self-generated solutions that reach the correct answer, while outcome-level preference learning can contrast correct and incorrect solutions. Both approaches waste structure inside rejected traces. If a solution becomes wrong only after several useful steps, penalizing the entire rejected completion suppresses valid reasoning before the mistake and coherent reasoning after it.

Self-Explore asks whether a model can use its own continuation ability and a programmatic final-answer check to localize a more granular negative signal. The target is the first point after which sampled continuations no longer recover the correct answer.

## 2. Core idea: What is the main contribution?

The method turns each incorrect rationale into a search substrate. Starting from successive step prefixes, the RFT model samples continuations and tests their extracted final answers against ground truth. The first step from which none of the sampled continuations succeeds is labeled the “first pit.”
That label is then used to construct a granular preference row: the input is the original question plus the steps before the pit, the rejected completion is the first-pit step, and the chosen completion is a correct continuation sampled from the preceding prefix. DPO-style preference learning increases the chosen continuation relative to the localized rejected step.

## 3. Method: How does it work?

The source tasks are GSM8K and MATH. For each base model—Mistral-7B, Llemma-7B, or DeepSeek-Math-7B-Base—the pipeline first applies supervised fine-tuning to obtain a zero-shot reasoning generator. It samples 100 candidate rationales per problem at temperature 0.7, heuristically removes duplicates, extracts each final answer, and compares it with the dataset answer. Correct generations form rejection-sampling fine-tuning data.

Outcome-level pairs are built by matching correct and incorrect rationales, using maximum edit distance and using each solution once. Pair construction is capped at eight pairs per problem in the constrained setting. The RFT model then acts as explorer: from each step of a rejected rationale it samples four continuations at temperature 0.7. If none reaches the correct final answer, that step is marked as the first pit. If no pit is found, the rejected sample is discarded.

The granular data object contains the question, generated rationale, extracted final answer, outcome label, correct prefix, first-pit step, chosen continuation, rejected step, and model identity. Training proceeds through SFT, RFT, and then DPO-style preference optimization. The official repository provides generation, training, and evaluation code, source-task train/test JSONL files, and DeepSeek-Math checkpoints. It does not expose immutable releases of the generated RFT, outcome-pair, first-pit exploration, or granular-pair datasets.

Verifier contract:

- **Input:** a candidate rationale or a continuation generated from a step prefix.
- **Output:** extracted final answer and binary agreement with the task answer.
- **Native signal:** programmatic answer-level correctness; the first-pit label is derived from four failed recovery samples.
- **False positive:** a flawed rationale can accidentally reach the correct numeric answer and be retained as correct.
- **False negative:** a valid prefix can be labeled unrecoverable because four samples miss a low-probability correct continuation.
- **Version surface:** source-task revision, generator/RFT checkpoint, step segmentation, answer extractor, sampling parameters, and pairing code must be pinned together.

## 4. Evidence: Why should we believe it?

The paper evaluates three 7B model families on GSM8K and MATH and compares supervised fine-tuning, RFT, outcome-supervised DPO, and the granular Self-Explore construction. Reported results show average improvements over SFT and gains over outcome-level pairing. Ablations vary the exploration size and compare alternative chosen/rejected spans, supporting the decision to preserve the correct prefix and penalize only the localized pit step.

Appendix statistics report model- and task-specific sizes for RFT, outcome-pair, and granular-pair training sets, making clear that the available positive and negative traces vary sharply by difficulty. The paper also reports that preference-trained models can become less diverse and that chosen-over-rejected reward accuracy rapidly approaches one. These are useful failure signals, not evidence that every first-pit label is correct.

The official ACL paper, author repository, source-task files, and released DeepSeek-Math checkpoints are available. Reproduction of aggregate training is plausible from code, but row-level verification of paper results is limited because generated pairs, exploration samples, discarded cases, and immutable checkpoints/configuration manifests are incomplete.

## 5. Novelty: What is new relative to prior work?

Self-Explore uses rejected traces as active search states instead of treating them only as whole-sequence negatives. It derives a step-local preference signal from recovery attempts made by the same model family and uses a simple answer checker rather than a separately trained process reward model or human step annotations.

The important distinction is that the method localizes where the explorer loses practical recoverability under a fixed budget. This operational label can be useful for training even though it is weaker than a semantic proof of the first erroneous step.

## 6. Limitations: What are the weaknesses or hidden assumptions?

“First pit” is a finite-search concept. Four failed samples at temperature 0.7 show that the explorer did not recover within that budget; they do not prove that the prefix is mathematically irrecoverable or that the marked step is the objectively first error. Labels can change with checkpoint, decoding parameters, sample count, step segmentation, and answer extraction.

The verifier checks only the final answer. This can create false positives when invalid reasoning reaches the correct value by coincidence and false negatives when a valid alternative answer is formatted unexpectedly. The paper notes that its large-answer-space assumption is more credible for numeric math than for small answer spaces such as true/false or multiple choice.

Preference learning on self-generated data can reduce solution diversity and concentrate probability on a narrow answer mode. Reward accuracy approaching one may indicate overfitting or reward exploitation rather than improved process correctness. GSM8K can lack incorrect traces for easy items, while MATH can lack correct traces for hard items, biasing which questions contribute pairs.

The generated data needed for a full audit are not released: candidate rationales, deduplication decisions, outcome pairs, step-conditioned continuations, first-pit labels, discarded samples, and final granular preferences. Decontamination is unknown. The paper reports licenses for task datasets and model assets, but repository-code and generated-preference redistribution terms are not clearly stated.

## 7. Uses: How can this work be used?

Self-Explore is a practical baseline for converting rejected reasoning traces into step-level preference data without dense human labeling. It can be used to compare whole-trajectory versus localized negatives, study answer-level verifier errors, train DPO-style math reasoners, or evaluate how recovery budget changes process labels.

For Track 8, the recipe illustrates why rejected and discarded traces matter to release quality. A reusable release should preserve every candidate, answer-extraction result, pair assignment, prefix, sampled continuation, first-pit decision, checkpoint, decoding configuration, and rejection reason. Those records would enable false-positive, false-negative, calibration, and version-drift analysis.

## 8. Reading notes: What should readers remember?

- A first pit is the first step with zero successful recoveries in four samples, not a proven first mathematical error.
- Correct prefixes are preserved; only the localized pit step is used as the granular negative.
- Final-answer agreement supplies the native verifier signal and can mislabel reasoning quality.
- Rejected traces are valuable data, but the official release does not include the generated pair and exploration ledgers.
- Self-generated preference learning can improve top-1 accuracy while reducing diversity and increasing overconfidence.

## 9. Citation

Use the official BibTeX from the [ACL Anthology record](https://aclanthology.org/2024.findings-emnlp.78/).

```bibtex
@inproceedings{hwang-etal-2024-self,
  title = {Self-Explore: Enhancing Mathematical Reasoning in Language Models with Fine-grained Rewards},
  author = {Hwang, Hyeonbin and Kim, Doyoung and Kim, Seungone and Ye, Seonghyeon and Seo, Minjoon},
  booktitle = {Findings of the Association for Computational Linguistics: EMNLP 2024},
  year = {2024},
  pages = {1444--1466},
  doi = {10.18653/v1/2024.findings-emnlp.78}
}
```
