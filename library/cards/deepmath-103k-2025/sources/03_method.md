Step 1 - Source and normalize the task.
Input: public math corpora filtered toward difficult problems and decontaminated against evaluation sets.
Operation: Normalize prompts, source identifiers, media or tools, references, and expected outputs into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject a candidate when its task input, source, access terms, or required reference is missing.

Step 2 - Write the reusable target.
Input: A normalized candidate and its source evidence.
Operation: DeepSeek-R1 generates three long solutions for each retained problem.
Output and transition: The resulting answer, rationale, or tool trace is serialized as question, final_answer, difficulty, topic, and r1_solution_1 through r1_solution_3 and advances to verification.
Check / stop rule: Stop when the target cannot be linked to its prompt, authoring mechanism, or required environment state.

Step 3 - Verify and package.
Input: Generated targets and task-specific correctness metadata.
Operation: Apply answer verification, difficulty scoring, topic labeling, deduplication, and benchmark decontamination.
Output and transition: Passing records form 103,000 math questions with three DeepSeek-R1 solutions per record stored as Parquet records and advance to training.
Check / stop rule: Reject failed checks; final-answer agreement alone is not treated as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The pinned dataset revision and the paper's base checkpoint.
Operation: Use the records for mathematical reasoning SFT and RL prompt preparation and compare with larger but weakly filtered math reasoning mixtures.
Output and transition: A trained consumer and the paper's controlled evaluation become the final artifacts.
Check / stop rule: Pin the data, teacher, tools, prompts, model, seeds, and harness, and do not generalize beyond evaluated domains.
