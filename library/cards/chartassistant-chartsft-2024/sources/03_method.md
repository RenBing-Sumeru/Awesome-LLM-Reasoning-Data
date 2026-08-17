Step 1 - Source the task substrate.
Input: synthetic and real charts covering bars, pies, radar, bubble and other chart families.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing chart image, task instruction, and chart-to-table, QA, extraction, or reasoning target advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: programmatic chart generation, source answers, and task templates produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply table reconstruction checks, source answers, and chart benchmark scoring; deduplicate and assign release splits where documented.
Output and transition: Passing records form a large multi-task chart corpus covering basic and specialized chart types; official per-file counts are in the release manifest stored as JSON conversations with chart images and table/QA targets and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for chart-to-table alignment followed by multitask SFT and compare against UniChart and ChartLlama task-specific recipes.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
