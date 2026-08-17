Step 1 - Source the task substrate.
Input: public molecule and protein databases organized into 17 task families.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing task instruction, molecular/protein representation or text input, and structured or natural-language target advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: source database labels, templates, and language-model-written explanatory instructions produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply chemical/biological labels, exact structured targets, and task-specific metrics; deduplicate and assign release splits where documented.
Output and transition: Passing records form more than 2 million biomolecular instruction records stored as JSON task files for molecules, proteins, and biomolecular text and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for domain SFT and cross-task transfer and compare against single-task molecular models and generic biomedical chat data.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
