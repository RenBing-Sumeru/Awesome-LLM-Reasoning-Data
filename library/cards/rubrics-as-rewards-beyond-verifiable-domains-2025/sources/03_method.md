1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to rubric-based reinforcement learning, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use instance-specific criterion construction, per-criterion judging, and reward aggregation to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain roughly 22.9K scientific reasoning questions with five to twelve weighted rubrics each.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to providing GRPO rewards for open tasks without programmatic verification; model training validates data utility rather than replacing the construction process.
