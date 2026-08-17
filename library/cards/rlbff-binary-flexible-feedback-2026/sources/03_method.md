1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to principle-conditioned rewards, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use extracting binary-testable principles from free-form feedback and assigning yes/no labels to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain roughly 40.8K textual-feedback examples with principle-satisfaction labels.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to training reward models that judge responses under user-specified principles; model training validates data utility rather than replacing the construction process.
