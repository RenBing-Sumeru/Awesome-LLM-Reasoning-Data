RLVR recipes usually expose aggregate training pools while leaving the value of an individual prompt unclear. This work asks how far a mathematical RLVR training set can be reduced while retaining performance comparable to larger reported pools. Its relevant artifact is therefore not merely a benchmark result: it is a released, selected problem-answer object paired with a rule-style outcome reward and an on-policy rollout recipe.

The reported default setting starts from a 1,209-example DSR-sub pool, selects one example using a historical-variance heuristic, and duplicates it to fill the training batch. That unusually small data object makes prompt selection and verification behavior central audit targets.

