1. Positioning: MM-JudgeBench uses translating or localizing multimodal tasks, generating candidates, and checking cross-lingual semantics, chart reasoning, and preferences to create specialized feedback for failures missed by general multilingual multimodal judge evaluation.

2. Method handle: collect tasks and states, generate candidates, verify labels, and organize by capability; reproducible feedback is the key quality control.

3. Data handle: more than 60K image-text preference instances across 25 languages, with records centered on inputs, states, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: strong English judges degrade substantially in low-resource languages and chart reasoning, with conclusions bounded by model, environment, and judge configurations.

5. Reuse decision: best suited to testing language transfer and chart-reasoning stability in LVLM judges; contamination, false positives, and cross-environment stability must be checked.
