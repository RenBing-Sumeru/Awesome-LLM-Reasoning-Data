Step 1 - Source and normalize the task.
Input: public instruction sets plus newly generated MagPie, self-OSS-instruct, and specialized subsets.
Operation: Normalize prompts, source identifiers, media or tools, references, and expected outputs into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject a candidate when its task input, source, access terms, or required reference is missing.

Step 2 - Write the reusable target.
Input: A normalized candidate and its source evidence.
Operation: source annotations and synthetic teachers write assistant turns.
Output and transition: The resulting answer, rationale, or tool trace is serialized as messages with role and content, plus a source label and advances to verification.
Check / stop rule: Stop when the target cannot be linked to its prompt, authoring mechanism, or required environment state.

Step 3 - Verify and package.
Input: Generated targets and task-specific correctness metadata.
Operation: Apply subset-specific filtering, source balancing, benchmark decontamination, and manual mixture refinement.
Output and transition: Passing records form about 1.1 million instruction-response conversations stored as multi-configuration Parquet records and advance to training.
Check / stop rule: Reject failed checks; final-answer agreement alone is not treated as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The pinned dataset revision and the paper's base checkpoint.
Operation: Use the records for SmolLM2 instruction SFT and compare with using existing small instruction sets without a data-centric mixture study.
Output and transition: A trained consumer and the paper's controlled evaluation become the final artifacts.
Check / stop rule: Pin the data, teacher, tools, prompts, model, seeds, and harness, and do not generalize beyond evaluated domains.
