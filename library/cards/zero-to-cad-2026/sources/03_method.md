Step 1 - Source the task substrate.
Input: an LLM-sampled catalog of mechanical-part descriptions without real construction histories.
Operation: Normalize prompts, media, provenance, and reference fields into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject missing task inputs, source identifiers, or access terms.

Step 2 - Write the reusable target.
Input: Each normalized candidate and its source evidence.
Operation: tool-using agents generate CadQuery code, inspect errors, consult documentation, and repair candidates.
Output and transition: A serialized response, reasoning trace, or tool trajectory advances to verification.
Check / stop rule: Stop when the target cannot be linked to the prompt, teacher, or source evidence.

Step 3 - Verify and package.
Input: Generated targets and the paper's correctness metadata.
Operation: Apply isolated code execution, topology checks, geometric validation, and export validation.
Output and transition: Passing records form 999,633 executable CAD construction sequences stored as Parquet metadata plus CadQuery source, operation JSON, images, STL, and STEP assets.
Check / stop rule: Reject failures; do not treat final-answer agreement as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The versioned release and the paper's base checkpoint.
Operation: Use the records for CAD program generation SFT and agent training and compare with geometry-only CAD corpora and small executable-code datasets.
Output and transition: A trained consumer and the controlled evidence reported by the paper.
Check / stop rule: Pin data, teacher, tools, prompts, model, and harness; stop claims at the evaluated domains.

Reproducibility requires the official data revision, generation settings, verifier/tool versions, random seeds, split, base model, and evaluation harness. Unreported budgets remain unknown.
