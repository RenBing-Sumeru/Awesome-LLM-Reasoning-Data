# 05 Novelty

The prior baseline was mainly outcome supervision, where a reward model or grader sees only whether the final answer is correct; earlier process-supervision work existed but at smaller scale and often on simpler math datasets. This paper changes the reusable object: it publishes a large step-label corpus for MATH-style reasoning and uses it to train a reward model that scores intermediate reasoning.

The quality signal is the combination of released labels, annotation instructions, grading code, and a direct PRM versus ORM comparison. What is not new is MATH itself, reward modeling, best-of-N sampling, or final-answer grading. Before reuse, inspect the human-label policy, neutral/negative semantics, split construction, answer-grader conservatism, license, Git LFS data version, and whether the released data is being used for evaluation or training.
