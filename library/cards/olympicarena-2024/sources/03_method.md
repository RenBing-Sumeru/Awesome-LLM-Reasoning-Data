Inputs are public competition PDFs, extracted markdown, optional images, reference answers or solutions, CS test cases, and model outputs. The pipeline is:

1. Collect URLs for competitions across seven disciplines and convert PDFs to markdown with Mathpix.
2. Use an annotation interface and approximately 30 science/engineering-background students to extract individual problems, multimodal fields, answers, solutions when available, and metadata.
3. Validate annotations in multiple steps, deduplicate within each competition using embedding similarity, and annotate difficulty plus logical and visual reasoning abilities.
4. Split the dataset into OlympicArena-val for small-scale testing and tuning, OlympicArena-test with unreleased answers for formal testing, and OlympicArena-ot for model-based evaluation.
5. Run inference with answer-type-specific prompts that define the required final-answer format; CS tasks use multiple candidate outputs and pass@k-style testing.
6. Evaluate locally on validation data or submit test predictions to the official platform; local test-set answer evaluation is unavailable because test answers are withheld.

Outputs are problem records, prediction JSON files, answer-level metrics by subject/language/modality, process-level sampled scores, leakage-detection reports, and leaderboard entries. Reproducibility requires pinning dataset split, subject subset, prompt template, model snapshot, image-input policy, evaluator code revision, CS sampling settings, and leaderboard date.
