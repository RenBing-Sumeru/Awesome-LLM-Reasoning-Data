Step 1 - Source the task substrate.
Input: public chart QA and chart-to-table tasks augmented with executable solution programs.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing chart image, question, Python program-of-thought, and final answer advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: templates and language models translate chart reasoning into Python programs produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply program execution and final-answer agreement; deduplicate and assign release splits where documented.
Output and transition: Passing records form the public release includes ChartQA-PoT plus chart alignment, instruction-tuning, and evaluation splits stored as JSONL and image archives with chart questions, programs, and answers and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for chart instruction SFT with program-of-thought supervision and compare against answer-only ChartQA tuning and larger 13B chart-language models.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
