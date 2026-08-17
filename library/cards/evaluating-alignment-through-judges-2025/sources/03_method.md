1. Choose instructions, models, and oracle. The case study uses 805 AlpacaEval and 500 Arena-Hard instructions, 15 post-trained LLMs, and GPT-4o as preference oracle.

2. Rank generation. The oracle pairwise compares each model response with the benchmark baseline in both output orders; aggregate win rate yields the generation ranking.

3. Build judge tasks. Reuse oracle-labeled response pairs and ask each LLM which response is better. Cohen’s kappa against oracle labels yields its evaluation ranking.

4. Filter labels. If the oracle reverses after swapping response order, discard both instances. This consistency rule decides sample acceptance.

5. Construct AlignEval. Keep one order per retained Arena-Hard pair, producing 2,671 instances; label with GPT-4o or Claude-3.7-Sonnet. Score new models by agreement, optionally average rank with IFEval. Fix oracle/model revisions, prompts, generations, and filtering; undisclosed settings are unknown.
