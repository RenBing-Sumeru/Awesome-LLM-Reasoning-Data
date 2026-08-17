Step 1 - Source and normalize the task.
Input: seed concepts expanded into diverse, difficult natural questions across many disciplines.
Operation: Normalize prompts, source identifiers, media or tools, references, and expected outputs into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject a candidate when its task input, source, access terms, or required reference is missing.

Step 2 - Write the reusable target.
Input: A normalized candidate and its source evidence.
Operation: Llama-3.3-70B-Instruct and other named teacher models write long responses.
Output and transition: The resulting answer, rationale, or tool trace is serialized as question, reference_answer, and a list of response and response_model pairs and advances to verification.
Check / stop rule: Stop when the target cannot be linked to its prompt, authoring mechanism, or required environment state.

Step 3 - Verify and package.
Input: Generated targets and task-specific correctness metadata.
Operation: Apply question-quality judgments, reference-answer checks, reward-model scoring, and self-reward filtering.
Output and transition: Passing records form 2.8 million questions with reference answers and teacher responses stored as Parquet records and advance to training.
Check / stop rule: Reject failed checks; final-answer agreement alone is not treated as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The pinned dataset revision and the paper's base checkpoint.
Operation: Use the records for reasoning SFT, knowledge distillation, and filtered self-training and compare with math- and code-only distillation corpora.
Output and transition: A trained consumer and the paper's controlled evaluation become the final artifacts.
Check / stop rule: Pin the data, teacher, tools, prompts, model, seeds, and harness, and do not generalize beyond evaluated domains.
