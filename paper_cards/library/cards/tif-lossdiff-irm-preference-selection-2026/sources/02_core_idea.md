The core claim is that preference quality is model-relative influence, not a static annotation property. Exact truncated influence functions estimate a pair's effect on validation performance, but are too costly at scale.

LossDiff and IRM are two cheaper, imperfect scoring functions with different errors. Their combination, LossDiff-IRM, more closely tracks the influence reference and ranks pairs to train on; the feedback contract is validation improvement under the chosen alignment objective.
