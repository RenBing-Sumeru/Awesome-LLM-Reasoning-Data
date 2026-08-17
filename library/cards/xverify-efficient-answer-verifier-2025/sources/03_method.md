1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to answer verification, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use multi-model generation, automatic initial labeling, and multi-round human review to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain roughly 56K question–reference–long-response–correctness records.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to training lightweight answer verifiers for reasoning-model evaluation; model training validates data utility rather than replacing the construction process.
