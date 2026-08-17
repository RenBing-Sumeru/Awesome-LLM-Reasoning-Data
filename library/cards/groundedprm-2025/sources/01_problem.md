Process reward data often inherits one of two weaknesses: outcome-only Monte Carlo labels misattribute credit across a trajectory, while LLM self-judgments can endorse fluent but invalid steps. GroundedPRM tries to combine tree-structured global feedback with executable local checks.

Its data object is a MATH problem plus an MCTS-generated reasoning trajectory, stepwise Wolfram Alpha verification, final-answer correctness, a hybrid reward sign, and a rationale. The paper reports about 40K automatically labeled training instances but no author-confirmed data/code/model release. This Card therefore describes the paper recipe and preserves the difference between a disclosed construction and a reusable artifact.

