1. Positioning: Agent-RewardBench uses constructing better–worse behavior pairs for real multimodal-agent tasks and verifying scenario-specific failures to create specialized feedback for failures missed by general multimodal agent rewards.

2. Method handle: collect tasks and states, generate candidates, verify labels, and organize by capability; reproducible feedback is the key quality control.

3. Data handle: roughly 1,140 image-text agent examples across perception, planning, and safety, with records centered on inputs, states, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: model rankings differ sharply across perception, planning, and safety, with no universal winner, with conclusions bounded by model, environment, and judge configurations.

5. Reuse decision: best suited to evaluating multimodal agent reward models; contamination, false positives, and cross-environment stability must be checked.
