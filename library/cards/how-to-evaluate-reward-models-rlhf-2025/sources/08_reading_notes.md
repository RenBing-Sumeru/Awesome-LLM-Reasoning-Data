1. Positioning: PPE uses offline proxy evaluation, full RLHF, and crowdsourced human comparison to create specialized feedback for failures that general reward-model evaluation evaluation misses.

2. Method handle: collect tasks and candidates, generate feedback, verify boundary cases, and organize by capability; label review is the decisive quality control.

3. Data handle: mappings across twelve domains, twelve proxy-metric families, and real post-RLHF human win rates, with records centered on inputs, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: single pairwise accuracy is insufficient, while selected proxy combinations predict downstream outcomes better, with conclusions bounded by model, candidate, and judge configurations.

5. Reuse decision: best suited to predicting the downstream training value of candidate reward models; contamination, false positives, and distributional stability must be checked.
