Step 1 - Source the task substrate.
Input: existing visual instruction data audited for object and relation hallucinations.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing image, original instruction-response, hallucination diagnosis, and corrected response advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: multimodal teacher diagnoses unsupported content and rewrites affected answers produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply image-grounded object checks plus POPE/CHAIR-style hallucination evaluation; deduplicate and assign release splits where documented.
Output and transition: Passing records form about 50,000 diagnosis-and-rewrite visual instruction records stored as JSON conversations plus source image references and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for cleaned visual instruction SFT and compare against unfiltered LLaVA-style instruction data and inference-only hallucination mitigation.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
