- Each integrated unit uses an eight-sample budget, four initial responses, thought length four, and four conditioned generations; verify which responses enter the final vote.
- The allocation signal is parsed-answer variation ratio, and the default UCB exploration coefficient is `1/4`.
- Allocation operates across a query batch; it is not an intra-query token controller or a correctness verifier.
- Results average three runs and smooth accuracy across nearby token-budget points; inspect raw variability before comparing efficiency.
- Official records provide the paper and BibTeX but no code, prompts, responses, allocation logs, or reusable trajectory release.

