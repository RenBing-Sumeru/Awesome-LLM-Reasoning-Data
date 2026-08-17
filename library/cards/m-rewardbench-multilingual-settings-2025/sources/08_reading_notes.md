1. Positioning: M-RewardBench uses constructing same-language or cross-language chosen–rejected pairs from multilingual instructions and responses and verifying them with human review and quality rules to create specialized feedback for failures missed by general multilingual reward-model evaluation.

2. Method handle: collect tasks and states, generate candidates, verify labels, and organize by capability; reproducible feedback is the key quality control.

3. Data handle: roughly 2.87K preference instances across 23 languages, including reasoning subsets, with records centered on inputs, states, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: most English-trained reward models degrade on low-resource languages and cross-lingual settings, with conclusions bounded by model, environment, and judge configurations.

5. Reuse decision: best suited to evaluating preference generalization across languages, tasks, and reasoning settings; contamination, false positives, and cross-environment stability must be checked.
