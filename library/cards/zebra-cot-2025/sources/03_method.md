Step 1 - Source and normalize the task.
Input: programmatic and curated visual tasks where sketches or intermediate images support reasoning.
Operation: Normalize prompts, source identifiers, media or tools, references, and expected outputs into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject a candidate when its task input, source, access terms, or required reference is missing.

Step 2 - Write the reusable target.
Input: A normalized candidate and its source evidence.
Operation: task-specific renderers and multimodal teachers create interleaved text and intermediate images.
Output and transition: The resulting answer, rationale, or tool trace is serialized as question, text reasoning trace, final answer, problem image, and one or more intermediate reasoning images and advances to verification.
Check / stop rule: Stop when the target cannot be linked to its prompt, authoring mechanism, or required environment state.

Step 3 - Verify and package.
Input: Generated targets and task-specific correctness metadata.
Operation: Apply task answer checks, renderer consistency, domain-specific validity rules, and held-out evaluation.
Output and transition: Passing records form 182,384 interleaved vision-language reasoning traces across 18 domains and more than 50 tasks stored as multi-configuration Parquet records with image assets and advance to training.
Check / stop rule: Reject failed checks; final-answer agreement alone is not treated as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The pinned dataset revision and the paper's base checkpoint.
Operation: Use the records for visual chain-of-thought SFT and compare with text-only visual-question reasoning traces.
Output and transition: A trained consumer and the paper's controlled evaluation become the final artifacts.
Check / stop rule: Pin the data, teacher, tools, prompts, model, seeds, and harness, and do not generalize beyond evaluated domains.
