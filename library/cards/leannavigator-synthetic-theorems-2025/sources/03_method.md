The paper and official repository support the following reconstruction.

1. **Seed the search.** Existing Mathlib4 theorems define initial Lean states. The exact seed theorem list, file manifest, exclusions, and per-file weights are not published.
2. **Build tactic templates.** Normalize tactic strings by replacing variable names with indexed placeholders, hypotheses with `{hypothesis}`, and unrecognized spans with `{unknown}`.
3. **Train retrieval.** Train GPTNeo-350M contrastively on a proof state, a correct tactic template, and a randomly selected incorrect template. The training split, seed, optimizer, checkpoint, and negative-sampling details are undisclosed.
4. **Retrieve and instantiate actions.** Embed all templates in FAISS. For each state, retrieve the 100 nearest templates, substitute available variables and hypotheses, and cap generated tactics at 200.
5. **Execute with LeanDojo.** Apply every candidate tactic to the current Lean state. Lean returns an error, a successor state, or `ProofFinished`. Error transitions are discarded; successful unseen nonterminal states enter the graph.
6. **Explore breadth-first.** A priority queue implements breadth-first state exploration. Per seed theorem, stop after 30 minutes or 200,000 attempted state transitions. The generation run used 24 Ray processes, processed up to 24 theorems concurrently, and reportedly ran for 28 days over Mathlib4.
7. **Select proof records.** For every state with distance at most eight tactics from `ProofFinished`, select the path with the fewest tactics. Break ties using the total length of the tactic strings. Emit the state as the theorem and that path as its proof.
8. **Flatten the release.** Zenodo packages one `leannavigator_dataset.json` inside a tar.xz archive. Each public record is a two-string `[state, proof/tactic text]` array; the graph, seed IDs, predecessor edges, errors, accepted alternatives, and replay logs are omitted.
9. **Prepare SFT.** The paper reports flan-t5-base and flan-t5-small proof prediction with BPE tokenization. The official notebook shuffles rows, truncates multiline targets at the first newline, and makes an unseeded random 90/10 row split. It currently configures `google/byt5-base`, so it is not an exact executable match to the paper's flan-t5 experiments.

The notebooks show Mathlib4 commit `27c6744e1c0e25d676be5eb252cd4b6d30c6acc7` and `leanprover/lean4:v4.9.0-rc2`. These are reconstruction clues, not release-level pins: neither the paper nor Zenodo manifest binds the public archive to that Mathlib/Lean/LeanDojo environment.
