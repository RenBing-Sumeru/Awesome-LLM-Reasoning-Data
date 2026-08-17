1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to comprehensive reward-model evaluation, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use multi-scenario candidate generation, preference verification, and pairwise plus Best-of-N protocols to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain roughly eighteen thousand preference comparisons across forty-nine scenarios.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to evaluating both local pairwise judgment and set-level ranking; model training validates data utility rather than replacing the construction process.
