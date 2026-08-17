1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to reward-model benchmarking, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use new human prompts, heterogeneous model responses, and multi-skill preference verification to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain 1,865 new prompts with chosen and rejected response pairs.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to difficult reward-model evaluation linked to Best-of-N and PPO outcomes; model training validates data utility rather than replacing the construction process.
