Step 1 - Source the task substrate.
Input: a fixed human dialogue set used as positive responses and prompts for current-policy generation.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing prompt, human response, current-policy response, and self-play iteration advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: the current policy generates competing responses at each iteration produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply a preference-style objective separates human responses from current-policy responses; deduplicate and assign release splits where documented.
Output and transition: Passing records form about 50,000 base dialogues plus generated response datasets for iterations 0 through 3 stored as JSON conversation records released as a Hugging Face dataset collection and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for iterative self-play fine-tuning that consumes the generated responses and compare against one-pass supervised fine-tuning and direct preference optimization on a fixed pair set.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
