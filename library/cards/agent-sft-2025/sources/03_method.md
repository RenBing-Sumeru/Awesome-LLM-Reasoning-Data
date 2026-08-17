Step 1 - Source and normalize the task.
Input: queries selected from Nex-N1 environments and six capability splits.
Operation: Normalize prompts, source identifiers, media or tools, references, and expected outputs into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject a candidate when its task input, source, access terms, or required reference is missing.

Step 2 - Write the reusable target.
Input: A normalized candidate and its source evidence.
Operation: DeepSeek-V3.1-Nex-N1 regenerates tool-aware multi-turn responses.
Output and transition: The resulting answer, rationale, or tool trace is serialized as messages, tool definitions, uuid, and generator and advances to verification.
Check / stop rule: Stop when the target cannot be linked to its prompt, authoring mechanism, or required environment state.

Step 3 - Verify and package.
Input: Generated targets and task-specific correctness metadata.
Operation: Apply environment-grounded trajectory generation, split-specific validity checks, and downstream agent evaluation.
Output and transition: Passing records form 69,008 records across agentic code, agent, chat, deep research, HTML, and tool-calling splits stored as Parquet records and advance to training.
Check / stop rule: Reject failed checks; final-answer agreement alone is not treated as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The pinned dataset revision and the paper's base checkpoint.
Operation: Use the records for agent SFT and compare with separate single-domain agent instruction sets.
Output and transition: A trained consumer and the paper's controlled evaluation become the final artifacts.
Check / stop rule: Pin the data, teacher, tools, prompts, model, seeds, and harness, and do not generalize beyond evaluated domains.
