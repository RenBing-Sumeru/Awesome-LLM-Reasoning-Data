1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to reasoning-judge evaluation, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use objective label verification, answer-order swaps, and equivalent-state GRPO to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain 1,483 positive–negative reasoning response pairs across eight benchmarks.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to training and evaluating position-robust reasoning judges; model training validates data utility rather than replacing the construction process.
