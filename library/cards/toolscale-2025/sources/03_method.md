Step 1 - Source and normalize the task.
Input: synthetic hard tasks designed around heterogeneous models and tools.
Operation: Normalize prompts, source identifiers, media or tools, references, and expected outputs into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject a candidate when its task input, source, access terms, or required reference is missing.

Step 2 - Write the reusable target.
Input: A normalized candidate and its source evidence.
Operation: a task-generation pipeline writes scenarios, initial states, and executable evaluation criteria.
Output and transition: The resulting answer, rationale, or tool trace is serialized as id, task description, user scenario, initial state, and evaluation criteria and advances to verification.
Check / stop rule: Stop when the target cannot be linked to its prompt, authoring mechanism, or required environment state.

Step 3 - Verify and package.
Input: Generated targets and task-specific correctness metadata.
Operation: Apply environment evaluation criteria plus outcome, efficiency, and user-preference rewards.
Output and transition: Passing records form 4,063 synthetic tool-orchestration tasks stored as Parquet records and advance to training.
Check / stop rule: Reject failed checks; final-answer agreement alone is not treated as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The pinned dataset revision and the paper's base checkpoint.
Operation: Use the records for reinforcement learning and task-conditioned orchestration training and compare with agent training on generic tool-use prompts without cost-aware evaluation.
Output and transition: A trained consumer and the paper's controlled evaluation become the final artifacts.
Check / stop rule: Pin the data, teacher, tools, prompts, model, seeds, and harness, and do not generalize beyond evaluated domains.
