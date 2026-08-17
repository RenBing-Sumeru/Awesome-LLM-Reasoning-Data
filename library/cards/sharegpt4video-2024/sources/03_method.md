Step 1 - Source the task substrate.
Input: diverse public videos sampled for temporal coverage.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing video id or frames, temporal event timeline, and a long detailed caption or derived instruction response advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: GPT-4V-assisted seed annotation followed by ShareCaptioner-Video produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply caption detail/temporal consistency review and downstream video benchmarks; deduplicate and assign release splits where documented.
Output and transition: Passing records form 40,000 densely captioned videos in the public high-quality set stored as JSON metadata and downloadable video/caption archives and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for video-language pretraining and instruction SFT and compare against WebVid-style short captions and frame-only visual instruction data.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
