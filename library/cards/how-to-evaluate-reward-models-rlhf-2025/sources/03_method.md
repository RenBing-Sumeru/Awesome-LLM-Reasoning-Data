1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to reward-model evaluation, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use offline proxy evaluation, full RLHF, and crowdsourced human comparison to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain mappings across twelve domains, twelve proxy-metric families, and real post-RLHF human win rates.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to predicting the downstream training value of candidate reward models; model training validates data utility rather than replacing the construction process.
