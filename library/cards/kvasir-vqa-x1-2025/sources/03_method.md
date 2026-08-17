Step 1 - Group and clean the source QAs.
Input: Kvasir-VQA atomic questions, short answers, question classes, and a shared endoscopy image id.
Operation: Group all pairs by image and remove predefined trivial or empty questions before composition.
Output and transition: A per-image pool of clinically meaningful atomic facts advances to sampling.
Check / stop rule: Stop if image provenance is missing or the surviving pool cannot support a valid question.

Step 2 - Compose the supervised target.
Input: One, two, or three distinct atomic QAs sampled from one image.
Operation: Use a local Qwen3-30B-A3B server to naturalize short answers and merge multi-fact questions into one coherent prompt with strict JSON-encodable structure.
Output and transition: A candidate record receives complexity 1, 2, or 3 and retains its original atomic QA list.
Check / stop rule: Reject copied raw answers, malformed structure, ambiguous references, clinically irrelevant combinations, or a mismatch between complexity and source count.

Step 3 - Validate and package visual variants.
Input: Candidate question-answer records, original images, and clinical question classes.
Operation: Apply expert validation, assign original train/test membership, and pair construction examples with original or weakly augmented images while releasing original images plus deterministic augmentation scripts.
Output and transition: Passing records form 143,594 training and 15,955 test examples for standard and transformed settings.
Check / stop rule: Reject semantic drift or duplicate QA instances across splits; keep augmented pixels reproducible rather than presenting them as separate canonical records.

Step 4 - Train and evaluate consumers.
Input: The versioned records and MedGemma or Qwen2.5-VL checkpoints.
Operation: Fine-tune with LoRA and evaluate using text-overlap metrics plus aspect-wise Qwen3-30B-A3B adjudication on original and transformed images.
Output and transition: Model checkpoints, aggregate metrics, category scores, and complexity-level diagnostics become the reported evidence.
Check / stop rule: Pin the data split, image transform seed, checkpoint, clinical prompt, and judge version; do not interpret judge scores as clinical deployment validation.

Reproduction requires the official dataset revision, source Kvasir-VQA images, generation prompt, teacher decoding settings, expert-validation protocol, augmentation seed, LoRA configuration, and adjudicator endpoint; undisclosed values remain unknown.
