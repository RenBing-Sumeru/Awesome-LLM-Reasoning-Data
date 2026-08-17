Step 1 - Source the task substrate.
Input: hard filtered questions from MedQA, MedMCQA, and Chinese medical exams.
Operation: Normalize prompts, media, provenance, and reference fields into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject missing task inputs, source identifiers, or access terms.

Step 2 - Write the reusable target.
Input: Each normalized candidate and its source evidence.
Operation: GPT-4o searches and writes complex reasoning for the SFT half.
Output and transition: A serialized response, reasoning trace, or tool trajectory advances to verification.
Check / stop rule: Stop when the target cannot be linked to the prompt, teacher, or source evidence.

Step 3 - Verify and package.
Input: Generated targets and the paper's correctness metadata.
Operation: Apply known multiple-choice answers, contamination filtering, failed-attempt limits, and rule rewards.
Output and transition: Passing records form 40K verifiable medical problems, with 20K complex-CoT SFT examples and 20K RL problems stored as Parquet records in English and Chinese configs.
Check / stop rule: Reject failures; do not treat final-answer agreement as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The versioned release and the paper's base checkpoint.
Operation: Use the records for medical CoT SFT followed by verifiable RL and compare with SFT on original exam questions or simple CoT followed by conventional RL.
Output and transition: A trained consumer and the controlled evidence reported by the paper.
Check / stop rule: Pin data, teacher, tools, prompts, model, and harness; stop claims at the evaluated domains.

Reproducibility requires the official data revision, generation settings, verifier/tool versions, random seeds, split, base model, and evaluation harness. Unreported budgets remain unknown.
