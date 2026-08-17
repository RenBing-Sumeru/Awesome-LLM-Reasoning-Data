1. **Declare criterion schemas:** Users define criterion type, options, weights, descriptions, and examples in a common schema rather than one holistic prompt.

2. **Run atomic judgments:** One or more judges score criteria atomically, with option shuffling and balanced few-shot examples.

3. **Aggregate and calibrate:** Voting, weighting, or unanimity rules are selected, with controls for length bias and class imbalance.

4. **Analyse reliability:** The framework computes accuracy, kappa, adjacent-grade accuracy, and related metrics; judges, schemas, examples, and seeds must be fixed.
