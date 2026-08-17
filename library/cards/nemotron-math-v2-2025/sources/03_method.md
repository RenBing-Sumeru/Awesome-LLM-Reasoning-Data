Step 1 - Source and normalize the task.
Input: curated AoPS and Math StackExchange problems.
Operation: Normalize prompts, source identifiers, media or tools, references, and expected outputs into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject a candidate when its task input, source, access terms, or required reference is missing.

Step 2 - Write the reusable target.
Input: A normalized candidate and its source evidence.
Operation: gpt-oss-120b generates high, medium, and low reasoning modes with and without Python TIR.
Output and transition: The resulting answer, rationale, or tool trace is serialized as uuid, problem, expected answers, source, messages, majority-change flag, and use split and advances to verification.
Check / stop rule: Stop when the target cannot be linked to its prompt, authoring mechanism, or required environment state.

Step 3 - Verify and package.
Input: Generated targets and task-specific correctness metadata.
Operation: Apply answer verification, majority-answer correction metadata, source curation, and matched downstream tests.
Output and transition: Passing records form 7.5 million solution traces over 85,000 AoPS and 262,000 Math StackExchange problems stored as Parquet records and advance to training.
Check / stop rule: Reject failed checks; final-answer agreement alone is not treated as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The pinned dataset revision and the paper's base checkpoint.
Operation: Use the records for long-context mathematical reasoning SFT and compare with OpenMathReasoning on matched AoPS questions.
Output and transition: A trained consumer and the paper's controlled evaluation become the final artifacts.
Check / stop rule: Pin the data, teacher, tools, prompts, model, seeds, and harness, and do not generalize beyond evaluated domains.
