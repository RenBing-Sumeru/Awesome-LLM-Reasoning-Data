1. Positioning: Multimodal RewardBench 2 uses constructing two candidate outputs for image generation, editing, interleaved generation, and image reasoning and labeling them with task-specific expert criteria to create specialized feedback for failures missed by general interleaved multimodal reward evaluation.

2. Method handle: collect tasks and states, generate candidates, verify labels, and organize by capability; reproducible feedback is the key quality control.

3. Data handle: 1,000 expert preference pairs in each of four task families, with records centered on inputs, states, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: omni reward models show substantial trade-offs and do not automatically generalize across all four task families, with conclusions bounded by model, environment, and judge configurations.

5. Reuse decision: best suited to evaluating omni reward models across generation and understanding; contamination, false positives, and cross-environment stability must be checked.
