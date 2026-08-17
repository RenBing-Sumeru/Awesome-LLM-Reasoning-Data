1. **Select executable projects:** Real GitHub repositories with stable unit tests and reproducible builds are selected, with commits, dependencies, and test commands fixed.

2. **Build the RDG:** Tests are dynamically instrumented to record reached functions and call edges. Dependencies determine which components must be implemented first and produce an acyclic development order.

3. **Synthesize stage tasks:** Following the schedule, target implementations are hidden or reverted step by step while visible code, relevant tests, and required modifications are retained. Each stage yields a partial-repository–tests–patch triplet.

4. **Filter by execution and train:** Docker execution confirms that target tests fail before the gold change and pass afterward, and unstable tasks are removed. Open models are fine-tuned on the training instances and evaluated on the 2,020-task SWE-Flow-Eval. Reproduction requires fixed tracing, test selection, and container images.
