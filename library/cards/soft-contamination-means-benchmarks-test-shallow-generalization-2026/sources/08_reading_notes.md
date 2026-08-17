1. Problem: semantic rather than n-gram overlap can make a benchmark measure shallow generalization.

2. Method: retrieve with embeddings, label duplicate type, then use controlled duplicate fine-tuning; similarity is not the verifier.

3. Scope: 1% sampled Dolma3/Dolmino plus all three Dolci instruction datasets, using open-data Olmo3-7B.

4. Evidence: Table 5 gives contaminated Olmo3 66.4/54.4 seen/unseen MuSR versus clean 50.0/48.8; TrueDetective is unchanged at 28.0.

5. Decision: audit task equivalence and transfer to an external benchmark before treating a gain as broad reasoning progress.
