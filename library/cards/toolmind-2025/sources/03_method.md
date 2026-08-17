Step 1 - Source and normalize the task.
Input: more than 20,000 tools linked by parameter correlations plus augmented public tool data.
Operation: Normalize prompts, source identifiers, media or tools, references, and expected outputs into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject a candidate when its task input, source, access terms, or required reference is missing.

Step 2 - Write the reusable target.
Input: A normalized candidate and its source evidence.
Operation: a multi-agent simulator writes user, assistant, and tool turns over a function graph.
Output and transition: The resulting answer, rationale, or tool trace is serialized as multi-turn conversations and tool definitions and advances to verification.
Check / stop rule: Stop when the target cannot be linked to its prompt, authoring mechanism, or required environment state.

Step 3 - Verify and package.
Input: Generated targets and task-specific correctness metadata.
Operation: Apply fine-grained turn-level checks plus trajectory-level quality filtering.
Output and transition: Passing records form 160,000 synthetic and 200,000 augmented open-source tool-use instances stored as Parquet records and advance to training.
Check / stop rule: Reject failed checks; final-answer agreement alone is not treated as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The pinned dataset revision and the paper's base checkpoint.
Operation: Use the records for tool-use SFT and compare with tool datasets checked only at the final trajectory level.
Output and transition: A trained consumer and the paper's controlled evaluation become the final artifacts.
Check / stop rule: Pin the data, teacher, tools, prompts, model, seeds, and harness, and do not generalize beyond evaluated domains.
