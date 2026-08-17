1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to reward-model robustness, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use content-neighbor construction with independent control of length, formatting, tone, and structure to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain 1,327 prompts and 11,943 subtle-content and style-controlled preference comparisons.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to auditing sensitivity to subtle errors and stylistic shortcuts; model training validates data utility rather than replacing the construction process.
