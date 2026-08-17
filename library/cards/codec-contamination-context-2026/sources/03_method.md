1. Select a suspect text dataset and fix one item as the target; obtain the model's average next-token log-likelihood without demonstrations.
2. Sample n other items from the same dataset, prepend them as in-context examples, and score only the target again.
3. Subtract the baseline confidence from the contextual confidence for that target. A negative difference is the method's contamination indicator rather than a tuned threshold.
4. Repeat over all sampled targets and report the percentage with negative differences as the CoDeC score. The standard form requires two forward passes per target and gray-box token probabilities.
5. Compare scores on known training versus post-cutoff datasets or audit unknown-corpus models. Recheck dataset serialization, context count, sampling seed, tokenizer, and any unavailable logits before reproducing a score.
