1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to code critique, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use execution tests, reference comparison, and human multidimensional annotation to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain more than ten thousand code-generation and code-QA critique cases.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to evaluating code critics on localization, explanation, and repair; model training validates data utility rather than replacing the construction process.
