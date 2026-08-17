Step 1 - Source the task substrate.
Input: 100K images captioned by GPT-4V, followed by a captioner that expands supervision to 1.2M images.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing image id, dense factual caption or visual question, and assistant target advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: GPT-4V for seed captions and Share-Captioner for scale-up produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply caption consistency checks and downstream multimodal benchmark scores; deduplicate and assign release splits where documented.
Output and transition: Passing records form 100,000 GPT-4V captions for SFT and a 1.2M-caption pretraining expansion stored as JSON/Parquet metadata with image references and dense captions and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for multimodal pretraining followed by instruction SFT and compare against LLaVA and caption mixtures built from short COCO-style text.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
