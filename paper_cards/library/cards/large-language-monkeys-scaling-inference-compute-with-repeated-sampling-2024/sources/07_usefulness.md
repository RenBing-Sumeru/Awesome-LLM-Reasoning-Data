Recorded training/evaluation use: evaluation, test_time_compute.

Use it as an audit baseline before attributing a reasoning gain to a new dataset, RL objective, or model family. If more samples plus a verifier explains the gain, the contribution may be inference-budget scaling rather than better training data.

It gives atlas readers a concrete way to audit whether a reasoning gain comes from more samples, a usable verifier, a better selector, or a genuinely stronger model or training recipe.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, sampled candidates, verifier, selected answer, budget, and failed attempts all matter.
