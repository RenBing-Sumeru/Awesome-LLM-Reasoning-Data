1. **Set the boundary.** Input: literature described as preference-based RL, semi-supervised RL, or RLHF. Operation: define RLHF as learning a reward or policy from indirect human feedback rather than a manually specified scalar reward. Output: an inclusion scope spanning control and language models. Check: keep direct demonstrations and offline initialization distinct when they are not the main feedback loop.

2. **Classify feedback acquisition.** Input: queries, behavior samples, annotators, and interfaces. Operation: organize demonstrations, interventions, corrections, comparisons, rankings, ratings, critiques, and language feedback by what the human observes and returns. Output: a feedback-record taxonomy. Check: record annotator population, query policy, granularity, noise, and cost.

3. **Classify reward learning.** Input: feedback records. Operation: compare preference models, reward functions, Bayesian and ensemble treatments, active query selection, and ways to handle uncertainty. Output: a learned signal and its assumptions. Check: test held-out preference prediction, calibration, identifiability, and distribution shift.

4. **Classify policy learning.** Input: learned reward or direct preference signal and policy rollouts. Operation: survey online/offline RL, regularization, model-based variants, and LLM-specific objectives. Output: an optimized policy. Check: separate reward fit from policy behavior and test reward hacking or overoptimization.

5. **Route evidence and risks.** Input: applications, benchmarks, datasets, and reported failures. Operation: map each claim back to its feedback, reward, policy, and evaluation objects. Output: a reusable audit checklist and open-problem map. Check: verify implementation-specific details in the cited primary source.
