1. Positioning: VAR uses multi-model generation, automatic initial labeling, and multi-round human review to create specialized feedback for failures that general answer verification evaluation misses.

2. Method handle: collect tasks and candidates, generate feedback, verify boundary cases, and organize by capability; label review is the decisive quality control.

3. Data handle: roughly 56K question–reference–long-response–correctness records, with records centered on inputs, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: all variants exceed 95% overall F1 and accuracy, and the 3B model surpasses GPT-4o overall, with conclusions bounded by model, candidate, and judge configurations.

5. Reuse decision: best suited to training lightweight answer verifiers for reasoning-model evaluation; contamination, false positives, and distributional stability must be checked.
