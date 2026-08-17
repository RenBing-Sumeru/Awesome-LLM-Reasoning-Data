Step 1 - Source the task substrate.
Input: open histopathology educational videos aligned at frame and transcript-segment level.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing pathology image crop, localized narrative or question, and diagnostic/explanatory response advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: localized expert narration, transformed into questions and answers with language-model assistance produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply temporal/text localization, pathology terminology checks, and downstream VQA evaluation; deduplicate and assign release splits where documented.
Output and transition: Passing records form 107,000 histopathology visual-instruction records stored as Parquet records with image pointers, questions, and answers and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for domain visual instruction SFT and compare against generic LLaVA instruction data and label-only pathology collections.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
