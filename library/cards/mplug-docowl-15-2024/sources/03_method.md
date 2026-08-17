Step 1 - Source the task substrate.
Input: document, webpage, table, chart, OCR and VQA datasets.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing document image, question or structure instruction, concise answer or detailed reasoning response advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: GPT-3.5/GPT-4V explanations filtered against manually annotated short answers produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply known short answers, structure targets, and document benchmark metrics; deduplicate and assign release splits where documented.
Output and transition: Passing records form 25,000 rationale-bearing document QA records plus roughly 4 million structure-learning samples stored as JSONL manifests with document images and text targets and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for structure alignment followed by document instruction SFT and compare against task-specific OCR pipelines and the first DocOwl release.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
