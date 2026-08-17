1. Positioning: RaR-Science uses instance-specific criterion construction, per-criterion judging, and reward aggregation to create specialized feedback for failures that general rubric-based reinforcement learning evaluation misses.

2. Method handle: collect tasks and candidates, generate feedback, verify boundary cases, and organize by capability; label review is the decisive quality control.

3. Data handle: roughly 22.9K scientific reasoning questions with five to twelve weighted rubrics each, with records centered on inputs, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: relative gains reach 31% on HealthBench and 7% on GPQA-Diamond, with conclusions bounded by model, candidate, and judge configurations.

5. Reuse decision: best suited to providing GRPO rewards for open tasks without programmatic verification; contamination, false positives, and distributional stability must be checked.
