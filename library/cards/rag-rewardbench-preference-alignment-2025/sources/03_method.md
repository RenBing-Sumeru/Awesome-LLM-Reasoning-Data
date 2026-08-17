1. **Prepare tasks and inputs:** Collect examples from public tasks, real model outputs, or human-written questions related to RAG reward evaluation, preserving references, retrieved evidence, tests, or criteria.

2. **Generate candidates and feedback:** Construct correct, incorrect, or closely matched responses for the same input and use fixed retrieval evidence and hard cases for citation, multi-hop reasoning, and conflict handling to produce candidates and preliminary labels.

3. **Verify and filter:** Review boundary cases with rules, execution, model evaluation, or humans; remove ambiguous, malformed, or answer-leaking records; and retain 1,485 prompt–context–chosen–rejected preference pairs.

4. **Organize the usage protocol:** Split data by task, error type, or capability and apply it to evaluating or training evidence-aware RAG judges; model training validates data utility rather than replacing the construction process.
