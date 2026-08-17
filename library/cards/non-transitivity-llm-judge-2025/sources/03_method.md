1. Collect AlpacaEval pairwise judge outcomes among evaluated systems.
2. Test whether preference cycles violate transitivity and measure ranking sensitivity to the chosen baseline.
3. Run a round-robin schedule, then fit a Bradley--Terry model to all wins to obtain one ranking.
4. Use Swiss-Wise Iterative Matchmaking (Swim) to choose dynamic matches when exhaustive round-robin cost is prohibitive.

Reproduction requires the exact judge, prompts, model versions, comparison budget, and AlpacaEval version; sampling settings are not fully disclosed here.

The verifier is not an answer checker: it is the set of pairwise judge outputs used to accept a win edge. The Bradley--Terry fit decides the final score ordering from those edges; Swim decides which unobserved edges to request next under a limited comparison budget. Reproduction should also preserve candidate order or explicitly counterbalance it, because position effects could otherwise be mistaken for non-transitivity. The primary paper and linked code must be checked for exact implementation defaults.
