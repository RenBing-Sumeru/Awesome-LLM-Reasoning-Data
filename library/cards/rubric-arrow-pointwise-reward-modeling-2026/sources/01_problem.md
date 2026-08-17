Non-verifiable writing, advice, and open-ended QA lack programmatic checkers, so a pointwise reward model must assign absolute scores to individual responses and is vulnerable to scale drift and subjective criteria. Rubric methods decompose requirements but often depend on expensive frontier models and sum Boolean satisfaction, producing many ties and weak gradients.

RUBRIC-ARROW jointly trains a rubric generator and rubric-conditioned judge, using probabilistic scoring and alternating GRPO to learn pointwise rewards from pairwise preferences, and releases judge-SFT data.
