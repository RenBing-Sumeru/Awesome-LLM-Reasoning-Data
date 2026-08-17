1. Assemble records from six text/PDF benchmarks: 1,994 RAG or agent answers receive 0, 0.5, or 1.0 from three trained experts.

2. Run RAGAS Answer Accuracy twice with reference and response in swapped order; normalize its 0/2/4 scores and average them.

3. Gate each judge by Pearson r≥0.80 against human consensus.

4. Compute Cohen’s kappa against humans and mix the LLM with three humans. |z|<1 denotes human-like behavior; z>1 denotes super-consistency.

5. Tier 1 requires both stages. Dataset, code, and leaderboard are public; model version, prompts, and source-benchmark access must be fixed for reproduction.
