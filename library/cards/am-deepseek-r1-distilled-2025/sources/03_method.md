Step 1 - Source and normalize the task.
Input: many open problem datasets cleaned and semantically deduplicated against tests.
Operation: Normalize prompts, source identifiers, media or tools, references, and expected outputs into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject a candidate when its task input, source, access terms, or required reference is missing.

Step 2 - Write the reusable target.
Input: A normalized candidate and its source evidence.
Operation: primarily DeepSeek-R1 writes long reasoning responses.
Output and transition: The resulting answer, rationale, or tool trace is serialized as chat messages containing a user problem and a distilled long reasoning response and advances to verification.
Check / stop rule: Stop when the target cannot be linked to its prompt, authoring mechanism, or required environment state.

Step 3 - Verify and package.
Input: Generated targets and task-specific correctness metadata.
Operation: Apply reference-answer matching for math, executable tests for code, and reward-model review for other domains.
Output and transition: Passing records form 1.4 million bilingual reasoning traces stored as Parquet records and advance to training.
Check / stop rule: Reject failed checks; final-answer agreement alone is not treated as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The pinned dataset revision and the paper's base checkpoint.
Operation: Use the records for reasoning SFT and distillation and compare with the non-public 800K distillation set used by DeepSeek-R1-Distill.
Output and transition: A trained consumer and the paper's controlled evaluation become the final artifacts.
Check / stop rule: Pin the data, teacher, tools, prompts, model, seeds, and harness, and do not generalize beyond evaluated domains.
