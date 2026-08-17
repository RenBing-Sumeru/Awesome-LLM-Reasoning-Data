1. **Real-world prover evaluation:** Use `SorryDB_2601` or a later fixed snapshot to compare general models, specialized provers, and agents, reporting Pass@1/Pass@k, build-failure rates, and per-project results in original environments.

2. **Agent training:** Record repository navigation, lemma retrieval, proof proposals, compiler errors, and revisions as trajectories, using successful goal closure as the terminal reward. Train/test splits must be separated by project and time to avoid repository leakage.

3. **Continuous regression testing:** Run an internal Lean assistant against newly collected nightly tasks to measure capability drift after version upgrades. For research limited to independent competition theorems, SorryDB’s environment complexity may impose unnecessary cost.
