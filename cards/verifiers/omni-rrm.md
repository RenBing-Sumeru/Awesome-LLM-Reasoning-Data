<!-- entry_id: omni-rrm-advancing-omni-reward-modeling-via-automatic-rubric-grounded-preference-synthesis-2026 -->
<!-- card_type: verifiers -->
# Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=omni-rrm-advancing-omni-reward-modeling-via-automatic-rubric-grounded-preference-synthesis-2026&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=omni-rrm-advancing-omni-reward-modeling-via-automatic-rubric-grounded-preference-synthesis-2026&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=omni-rrm-advancing-omni-reward-modeling-via-automatic-rubric-grounded-preference-synthesis-2026&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, judgment_rubric_domain_expert_data, benchmarks_evaluation_surfaces, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2602.00846) - [Project](https://tmfk418.github.io/Omni-RRM/) - [Code/Data](https://anonymous.4open.science/r/Omni-RRM-CC08)

## TL;DR

Omni-RRM constructs omni-modal rubric-grounded preference data and trains reward models across text, image, video, and audio.

The data object combines modality, candidate pair, rubric dimensions, scores, synthesized preference labels, and justifications. The synthetic preference pipeline should be audited directly; model performance is not a data-quality certificate.

## 1. What is this work?

The paper studies reward modeling beyond text-only responses. It builds an Omni-Preference dataset and trains Omni-RRM reward models from automatically synthesized rubric-grounded preference records.

For this atlas, it belongs as a multimodal preference/reward feedback recipe and release.

## 2. What data object does it expose?

The relevant record can include:

- prompt,
- modality,
- candidate response A,
- candidate response B,
- strong model,
- weak model,
- raw preference,
- rubric dimension,
- score A,
- score B,
- synthesized preference,
- justification,
- reward score.

Prompt sources include RLAIF-V, ActivityNet, Charades, Ego4D, NextQA, YouCook2, Clotho-AQA, and related omni-modal preference tasks.

## 3. What is the verifier / reward / judge / environment?

The verifier is model-judged and mixed. Teacher models annotate rubrics and reconcile preference labels; the trained reward model then scores or ranks candidates across modalities.

The feedback contract depends on rubric-grounded preference labels for each modality, not on a single exact-answer predicate.

## 4. How is the data constructed?

Reported construction details include:

- generate strong/weak candidate response pairs,
- annotate rubric dimensions and scores with GPT-4o-mini and Doubao-1.5-Pro,
- reconcile labels and filter low-reliability items,
- remove duplicates, ties, malformed rationales, score-verdict inconsistencies, and uninformative pairs,
- train Qwen-2.5-Omni-3B/7B reward models with progressive SFT and GRPO.

The reported dataset size is 41K examples, split across image, video, and audio examples.

## 5. How can it enter post-training?

Recorded use:

- reward_modeling,
- evaluation.

Use it when a reward model must handle multimodal outputs. Keep modality-specific provenance because perception errors and preference errors are different failure modes.

## 6. What should readers audit?

- Synthetic rubric labels can inherit teacher-model bias across modalities.
- Image, video, or audio perception errors can be mislabeled as preference errors.
- Strong/weak response generation can create artificial shortcuts.
- Anonymous artifact links should be pinned and license-checked before reuse.
- SFT plus GRPO gains do not prove that rubric-grounded labels are clean.

## 7. What is missing or risky?

- Exact anonymous repository revision and whether it remains official after publication.
- Dataset licenses for each source modality.
- Split files and hard/easy partition definitions.
- Teacher reconciliation rules and filtering thresholds.
- Whether local modality coverage matches the intended reward-model use.

## 8. Why it matters for post-training reasoning data

Omni-RRM extends preference/reward feedback beyond text. It makes modality, rubric dimension, score, and justification explicit enough to audit the feedback surface before training.

## 9. Links and citation

- Institution: Beijing University of Posts and Telecommunications; Tsinghua University; TeleAI.
- Official links: arXiv, DOI, project page, and linked code/data artifact.
- arXiv: https://arxiv.org/abs/2602.00846
- DOI: https://doi.org/10.48550/arXiv.2602.00846
- Project: https://tmfk418.github.io/Omni-RRM/
- Code/Data: https://anonymous.4open.science/r/Omni-RRM-CC08
- Hugging Face: null
- Data ID: `omni-rrm-advancing-omni-reward-modeling-via-automatic-rubric-grounded-preference-synthesis-2026`
- Citation status: verified
- Confidence: high
