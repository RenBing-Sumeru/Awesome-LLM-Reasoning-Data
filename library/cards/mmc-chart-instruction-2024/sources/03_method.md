Step 1 - Source the task substrate.
Input: charts mined from arXiv plus non-arXiv chart datasets and synthetic chart-text alignment tasks.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing chart image, question or alignment instruction, and answer advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: templates and language models generate diverse chart questions and answers from extracted chart content produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply source tables or captions, answer checks, and chart benchmark evaluation; deduplicate and assign release splits where documented.
Output and transition: Passing records form 300,000 arXiv chart QA records, 109,887 non-arXiv QA records, and 250,000 alignment records stored as JSONL metadata with chart images distributed in TAR archives and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for chart alignment and multimodal instruction SFT and compare against ChartQA-scale task-specific corpora and generic visual instruction mixtures.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
