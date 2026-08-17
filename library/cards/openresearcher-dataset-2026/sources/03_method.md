Step 1 - Source the task substrate.
Input: about 6K difficult QA prompts with 10K bootstrapped gold documents.
Operation: Normalize prompts, media, provenance, and reference fields into candidate records.
Output and transition: Auditable candidates advance to target generation.
Check / stop rule: Reject missing task inputs, source identifiers, or access terms.

Step 2 - Write the reusable target.
Input: Each normalized candidate and its source evidence.
Operation: GPT-OSS-120B searches an offline corpus and writes complete tool-use trajectories.
Output and transition: A serialized response, reasoning trace, or tool trajectory advances to verification.
Check / stop rule: Stop when the target cannot be linked to the prompt, teacher, or source evidence.

Step 3 - Verify and package.
Input: Generated targets and the paper's correctness metadata.
Operation: Apply final-answer checking, retrievability bootstrapping, error/status fields, and trajectory filtering.
Output and transition: Passing records form more than 97K deep-research trajectories over a 15M-document offline corpus stored as Parquet multi-turn message records across multiple generation seeds.
Check / stop rule: Reject failures; do not treat final-answer agreement as proof that every intermediate step is correct.

Step 4 - Train and evaluate the consumer.
Input: The versioned release and the paper's base checkpoint.
Operation: Use the records for deep-research agent SFT and compare with online-only deep-research trajectory generation.
Output and transition: A trained consumer and the controlled evidence reported by the paper.
Check / stop rule: Pin data, teacher, tools, prompts, model, and harness; stop claims at the evaluated domains.

Reproducibility requires the official data revision, generation settings, verifier/tool versions, random seeds, split, base model, and evaluation harness. Unreported budgets remain unknown.
