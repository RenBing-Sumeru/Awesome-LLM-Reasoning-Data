1. **Specify lineage conditions.** Pair a synthetic-data generator with an LLM judge as the same model, inheritance-related, or same-family.

2. **Create comparable students.** Train student models on the corresponding synthetic data while holding the evaluation setup fixed.

3. **Measure judge favoritism.** Evaluate responses on Arena-Hard and AlpacaEval 2.0, and compute the preference leakage score from judge outcomes.

4. **Stress the mechanism.** Vary synthetic-data mixing, relatedness, learning settings, model size, question type, and judgment dimension; analyze whether judges recognize related students. Code and study data are released in the official repository.
