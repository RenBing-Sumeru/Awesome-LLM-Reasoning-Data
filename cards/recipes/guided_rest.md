<!-- entry_id: guided-rest-2025 -->
<!-- card_type: recipes -->
# Guided ReST

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=guided-rest-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=guided-rest-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=guided-rest-2025&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

Guided ReST is an iterative self-training recipe that retains positive-score policy samples while injecting training-time subgoal or reference-code guidance. The official code is available, but no frozen rollout corpus, buffers, source revisions, or checkpoints are released.

## 1. What is this work?

- Year / venue: 2025 · NeurIPS 2025.
- Atlas roles: construction recipe and scaling study.
- Domains: general reasoning and post-training.
- Status: partial.

It is an iterative reinforced self-training method, not a released frozen trace dataset.

## 2. What data object does it expose?

The method-level record contains a prompt from public Hugging Face datasets, a current-policy response, a task score, and optional training-only `subgoal_guidance` or `reference_code_guidance`. The public scripts consume external datasets and generate the buffers; exact source revisions, generated rows, scores, guidance values, and buffer membership are not released.

## 3. What is the verifier / reward / judge / environment?

Task-specific scoring retains only samples with score greater than zero. The exact scorer implementation, score calibration, task mix, and error rates must be pinned per reproduction. Positive score is an acceptance rule, not evidence that a trace is fully correct or free of shortcut behavior.

## 4. How is the data constructed?

1. Load public prompt datasets; their exact revisions are not pinned in the card metadata.
2. Sample responses from the current policy with training-time subgoal or reference-code guidance where configured.
3. Score the response using a task-specific signal and retain positive-score samples.
4. Use the retained buffer for the next self-training iteration.

The task mixture, rollout count, temperature, inference budget, base model, and frozen buffer manifests are `unknown` in the released record.

## 5. How can it enter post-training?

It can support SFT-style reinforced self-training and, if an explicit comparison rule is added, preference-style filtering. Reuse requires reproducing each task scorer, source revision, guidance boundary, and retention policy; it does not provide a ready-made immutable SFT or preference dataset.

## 6. What should readers audit?

- Prompt datasets, revisions, licensing, splits, and benchmark overlap.
- Scorer implementation, versions, calibration, threshold, and false positives/negatives.
- Whether subgoals/reference code are permitted at training or inference time.
- Guidance generation, truncation, task mix, rollout settings, and seeds.
- Accepted and rejected samples, retention rates, and iteration-to-iteration buffer lineage.

## 7. What is missing or risky?

Subgoals and reference code are privileged signals and can leak oracle structure that is not available at deployment. Positive-score filtering can reward shortcuts. No immutable rollouts, buffers, rejected samples, checkpoints, decontamination audit, or generated-data split is published; upstream dataset rights require review.

## 8. Why it matters for post-training reasoning data

It makes the boundary between deployable inputs and training-only oracle guidance explicit. That boundary, and the unreleased selection buffer behind it, matter more for reuse than a reported benchmark result.

## 9. Links and citation

- [arXiv](https://arxiv.org/abs/2502.04327)
- [Official repository](https://github.com/Meta-Llama/guided-rest)
- Official data release: `null`
- Official Hugging Face release: `null`

*Guided ReST: Reinforced Self-Training for Large Language Models*, NeurIPS 2025.

- Data ID: `guided-rest-2025`
- Citation status: verified
- Confidence: medium
- Release status: partial
