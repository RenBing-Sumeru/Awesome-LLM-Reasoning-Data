1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to step-quality evaluation, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use human step segmentation, validity and redundancy labeling, and evaluator calibration to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain roughly 3,000 mathematical solutions with step-level validity and redundancy labels.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to evaluating process quality and filtering high-quality chains of thought; model training validates data utility rather than replacing the construction process.
