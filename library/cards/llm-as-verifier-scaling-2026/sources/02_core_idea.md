Instead of decoding one score token, LLM-as-a-Verifier takes the expectation over an ordered score-token logit distribution. This yields a continuous reward and pairwise preference probability for trajectories without training a separate reward model.

The verifier can be made stronger by increasing score-token granularity, averaging repeated evaluations, and decomposing judgment into criteria. A pivot tournament then spends pairwise comparisons mainly on plausible leaders rather than all candidate pairs.
