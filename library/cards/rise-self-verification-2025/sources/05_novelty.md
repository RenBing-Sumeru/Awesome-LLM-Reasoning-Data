RISE makes solution correctness and the model's own correctness score part of one online RL loop, rather than training a separate verifier or adding a post-hoc reflection prompt. The reuse of one outcome label for both trajectories is the specific recipe contribution.

Its novelty should not be overstated as process supervision. The verifier operates at the outcome level, and the critique text is not labeled step by step. The method is best read as learning an outcome-aligned self-score alongside reasoning generation.

