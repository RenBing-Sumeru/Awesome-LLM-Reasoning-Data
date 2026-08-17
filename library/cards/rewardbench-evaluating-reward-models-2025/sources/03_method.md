1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to reward-model benchmarking, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use mixed public preferences and verifiable hard pairs for bugs, facts, and refusals to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain 2,985 chat, reasoning, and safety preference triplets.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to unified evaluation of explicit reward models, implicit DPO rewards, and generative judges; model training validates data utility rather than replacing the construction process.
