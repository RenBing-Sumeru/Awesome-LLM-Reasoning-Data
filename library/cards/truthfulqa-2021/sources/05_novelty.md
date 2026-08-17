# 05 Novelty

The prior-work baseline was standard factual QA and language-model evaluation, where larger models often improve by better modeling the distribution of internet text. TruthfulQA changes the target: the benchmark asks whether that same imitation objective causes models to repeat human falsehoods when falsehoods are common in the training distribution.

The new element is the deliberate use of misconception-triggering questions and paired true/false answer sets. This creates a data object where correctness is not just answer recall; the model must choose truth over a high-probability human-like false answer. It also separates truthfulness from informativeness, making refusal, evasiveness, and true-but-unhelpful answers visible.

The quality signal is ACL 2022 publication with public artifact links and broad later adoption in model evaluation. What is not new is answer-level QA evaluation itself, multiple-choice scoring, or human judging. Before reuse, inspect the exact released files, license terms, evaluator implementation, prompt formatting, public benchmark contamination, and whether a modern model saw TruthfulQA during pretraining or post-training.
