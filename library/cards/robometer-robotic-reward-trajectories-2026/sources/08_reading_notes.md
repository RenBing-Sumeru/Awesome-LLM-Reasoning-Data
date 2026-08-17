1. Positioning: RBM-1M uses collecting successful, failed, and suboptimal trajectories across robots and tasks and annotating progress plus pairwise preference to create specialized feedback for failures missed by general robotic reward modeling.

2. Method handle: collect tasks and states, generate candidates, verify labels, and organize by capability; reproducible feedback is the key quality control.

3. Data handle: more than one million robot trajectories with frame-level progress and same-task preferences, with records centered on inputs, states, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: large-scale trajectory comparison improves cross-task ranking and failure recognition, with conclusions bounded by model, environment, and judge configurations.

5. Reuse decision: best suited to training general-purpose robotic reward models for selection and offline RL; contamination, false positives, and cross-environment stability must be checked.
