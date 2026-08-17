1. **Coverage boundary:** Error localization depends on tests and diff heuristics; with weak coverage, a “repair” may overfit visible tests.

2. **Feedback risk:** Adjacent versions are highly correlated, so random splitting can leak the same problem or near duplicates; deduplicate by task and source.

3. **Reproduction and use:** Target-DPO depends on focal-mask quality; repository or multi-file repair requires a new definition of the changed region.
