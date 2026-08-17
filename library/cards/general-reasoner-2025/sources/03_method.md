Step 1 - Source and normalize the task.
Input: web-crawled questions with diverse answer representations.
Operation: Normalize prompts, source identifiers, media or tools, references, and expected outputs into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject a candidate when its task input, source, access terms, or required reference is missing.

Step 2 - Write the reusable target.
Input: A normalized candidate and its source evidence.
Operation: curation models normalize questions and answers while a generative verifier reasons over equivalence.
Output and transition: The resulting answer, rationale, or tool trace is serialized as id, question, answer, answer type, category, and difficulty and advances to verification.
Check / stop rule: Stop when the target cannot be linked to its prompt, authoring mechanism, or required environment state.

Step 3 - Verify and package.
Input: Generated targets and task-specific correctness metadata.
Operation: Apply generative answer verification with chain-of-thought and context plus category and difficulty filters.
Output and transition: Passing records form 228,736 training and 1,000 test question-answer records stored as Parquet records and advance to training.
Check / stop rule: Reject failed checks; final-answer agreement alone is not treated as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The pinned dataset revision and the paper's base checkpoint.
Operation: Use the records for multi-domain reasoning RL and compare with math-centric RL with exact-match verification.
Output and transition: A trained consumer and the paper's controlled evaluation become the final artifacts.
Check / stop rule: Pin the data, teacher, tools, prompts, model, seeds, and harness, and do not generalize beyond evaluated domains.
