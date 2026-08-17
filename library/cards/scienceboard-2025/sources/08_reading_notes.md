- Read Sections 3–4 for the POMDP episode, observation/action spaces, application-state instrumentation, annotation pipeline, 169-task composition, and evaluator construction.

- Separate benchmark objects from trajectory objects: task JSON, initializers, evaluators, and VM image are public; five trajectory ZIPs are listed, but record counts, complete success/failure coverage, and task-result linkage are unknown.

- Interpret reported success as predicate coverage under a particular environment build. It does not prove complete scientific correctness, robust reset/replay, split hygiene, or trajectory suitability for training.

- For reuse, pin code/VM/app/plugin/model versions; preserve failures and intermediate files; audit contamination, component rights, screenshots and secrets; and sandbox the sudo-capable VM and network.
