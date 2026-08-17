1. Subsample 100 pairwise tasks from each of ELI5 and LitBench.
2. Attach provenance or recency cues while holding content fixed; swap labels in complementary conditions.
3. Query GPT-4o and Gemini-2.5-Flash at temperature 0, greedy decoding and fixed seed; require JSON choice plus rationale.
4. Compute Verdict Shift Rate from swaps and Cue Acknowledgment Rate from explanations. A faithful judge should have low VSR and high CAR; API version availability must be fixed.
