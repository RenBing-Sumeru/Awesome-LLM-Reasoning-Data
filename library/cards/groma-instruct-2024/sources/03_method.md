Step 1 - Source the task substrate.
Input: public detection, referring-expression, and visual instruction sources converted to region-aware prompts.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing image, region tokens or boxes, grounded user dialogue, and assistant response advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: GPT-4V generates grounded multi-turn conversations around selected regions produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply region-box consistency, source annotations, and grounding benchmark scores; deduplicate and assign release splits where documented.
Output and transition: Passing records form about 30,000 GPT-4V-generated grounded conversations stored as JSON records with image references, region tokens, and boxes and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for grounded multimodal instruction SFT and compare against whole-image LLaVA data and box-coordinate-only grounding assistants.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
