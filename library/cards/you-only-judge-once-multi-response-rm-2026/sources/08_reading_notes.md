1. Positioning: MR²Bench uses sampling multiple responses for the same visual input and obtaining set-level rankings with pairwise verification to create specialized feedback for failures missed by general multi-response reward modeling.

2. Method handle: collect tasks and states, generate candidates, verify labels, and organize by capability; reproducible feedback is the key quality control.

3. Data handle: roughly 94K crowdsourced preferences for image response ranking and video QA, with records centered on inputs, states, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: single-pass multi-response modeling improves ranking consistency and reduces redundant computation, with conclusions bounded by model, environment, and judge configurations.

5. Reuse decision: best suited to training a reward model that compares N candidates in one forward pass; contamination, false positives, and cross-environment stability must be checked.
