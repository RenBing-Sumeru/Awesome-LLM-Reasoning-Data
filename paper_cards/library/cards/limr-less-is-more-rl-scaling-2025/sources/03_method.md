The authors start with 8,523 mathematical samples, estimate sample impact under matched RL settings, retain 1,389 high-impact items, and compare that subset with the full collection. Policy rollouts receive reward from final mathematical-answer correctness, and the trained models are evaluated on held-out AIME24 and MATH500-style benchmarks.

Reproduction requires the initial checkpoint, measurement window, selection threshold, seeds, per-prompt rollout allocation, answer parser, optimizer, and independent evaluation split. A fixed selected list alone is not a full reproduction of the method.
