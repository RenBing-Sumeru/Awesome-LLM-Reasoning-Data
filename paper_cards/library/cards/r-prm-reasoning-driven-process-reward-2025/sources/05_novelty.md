Earlier process reward work often treats a step label as a final scalar target, while data expansion either demands more labels or produces extra traces without improving the evaluator’s reasoning. R-PRM changes the target by requiring a rationale before a verdict.

It also makes sampled alternative evaluations into preference data, so generated process reasoning becomes a trainable object twice: first as supervised assessment, then as selected or rejected evaluation behaviour. The novelty is this data-to-judgement pipeline, not merely a different policy optimizer.
