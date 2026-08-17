1. **Use case 1:** Train one model to output hallucination status, error span, type, and correction.

2. **Use case 2:** Use the 90K set for SFT while reserving HADTest for human-grounded evaluation.

3. **Use case 3:** High-risk correction should use retrieval or rule verifiers rather than generative correction alone.
