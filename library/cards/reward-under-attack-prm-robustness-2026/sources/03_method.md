1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to adversarial PRM auditing, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use static perturbations, adversarial optimization, and full reinforcement-learning attacks to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain thousands of controlled perturbation pairs with attack types, correctness labels, and PRM scores.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to auditing PRM robustness and reward hacking before deployment; model training validates data utility rather than replacing the construction process.
