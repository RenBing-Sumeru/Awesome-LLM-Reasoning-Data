Inputs are AlpacaEval model outputs for each instruction, reference-model outputs, the selected auto-annotator configuration, and metadata needed to compute output lengths. The operational pipeline is:

1. Pair each candidate output with the reference output for the same instruction.
2. Randomize output order and query the AlpacaEval automatic annotator for a preference or preference probability.
3. Compute the raw win rate by averaging preferences against the baseline.
4. Fit a generalized linear preference model that includes the candidate/reference length difference and relevant comparison features.
5. Predict preferences under the counterfactual condition that the length difference is zero, then average them as the length-controlled win rate.

The output is not a new per-example correctness label; it is a leaderboard metric and evaluator diagnostic. Reuse requires pinning AlpacaEval version, reference model, annotator config, model outputs, cache state, API model revision, prompt template, and leaderboard date, because any of those can change the measured preference surface.
