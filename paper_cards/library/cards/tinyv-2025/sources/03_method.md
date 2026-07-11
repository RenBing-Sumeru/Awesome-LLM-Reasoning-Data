The pipeline is:

1. Generate or collect math reasoning outputs during RL-style training.
2. Score candidate answers with a rule-based verifier.
3. Identify disagreement or rejected cases where the verifier may have produced a false negative.
4. Use TinyV as a smaller learned verifier to reassess those cases.
5. Feed the recovered reward signal back into the RL process.

The important engineering point is the boundary between deterministic checking and learned judgment. TinyV is most useful when the rule verifier is strong but incomplete.
