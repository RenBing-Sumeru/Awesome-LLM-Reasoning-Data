1. Positioning: Multimodal RewardBench uses constructing verifiable preference pairs from images, questions, and multi-model answers across perception, knowledge, reasoning, safety, VQA, and style to create specialized feedback for failures missed by general multimodal reward-model evaluation.

2. Method handle: collect tasks and states, generate candidates, verify labels, and organize by capability; reproducible feedback is the key quality control.

3. Data handle: 5,211 image–prompt–preferred–rejected triplets across six feedback dimensions, with records centered on inputs, states, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: current multimodal reward models are uneven across capabilities, and text-only reward models transfer unreliably, with conclusions bounded by model, environment, and judge configurations.

5. Reuse decision: best suited to evaluating vision-language reward models and multimodal judges; contamination, false positives, and cross-environment stability must be checked.
