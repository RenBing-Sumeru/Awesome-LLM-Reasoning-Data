Step 1 - Source the task substrate.
Input: public general instruction pools and small target-task validation examples.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing instruction-response record, gradient or influence score, target task, and selected split advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: a warmup model supplies per-example gradients rather than generating new responses produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply gradient similarity estimates each record's influence on the target task; deduplicate and assign release splits where documented.
Output and transition: Passing records form public instruction pools, gradient features, influence scores, and task-specific selected subsets stored as JSON and serialized gradient or score artifacts in the official release and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for targeted instruction SFT on a selected five-percent subset and compare against random, embedding-similarity, and full-data instruction tuning.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
