1. Positioning: VideoRewardBench uses generating chosen and rejected answers for video questions and verifying preferences across perception, knowledge, reasoning, and safety to create specialized feedback for failures missed by general video reward-model evaluation.

2. Method handle: collect tasks and states, generate candidates, verify labels, and organize by capability; reproducible feedback is the key quality control.

3. Data handle: 1,563 video preference examples over 1,482 videos, with records centered on inputs, states, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: image reward models transfer poorly to video, especially for temporal reasoning and safety, with conclusions bounded by model, environment, and judge configurations.

5. Reuse decision: best suited to evaluating video reward models and multimodal judges; contamination, false positives, and cross-environment stability must be checked.
