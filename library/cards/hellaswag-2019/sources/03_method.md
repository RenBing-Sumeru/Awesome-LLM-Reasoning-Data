1. Inputs: grounded contexts from ActivityNet Captions and WikiHow-style instructional data.
2. Candidate creation: pair each context with a correct continuation and generated or sampled incorrect endings.
3. Adversarial filtering: train/evaluate discriminator models over candidate endings and replace easy negatives until remaining distractors are hard under the construction model.
4. Human validation: check that the gold ending is plausible and the distractors are incorrect enough for a multiple-choice task.
5. Outputs: JSONL records with context fields, four endings, label metadata, split, and source tags.

The verifier for model evaluation is multiple-choice accuracy, not a semantic parser or process judge. Reproducibility requires pinning the official split, whether labels are public or hidden, prompt formatting, answer-option order, and the exact data mirror because public mirrors and leaderboards have changed over time.
