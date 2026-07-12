Supervised models sample augmented rationales for each math problem. Generate diverse candidate paths, answer-check them, then fine-tune on accepted augmented data. Rejection sampling retains correct paths and can combine accepted paths from multiple models.

The resulting record contains A generated reasoning path paired with final answer correctness and selection for the augmented fine-tuning set. The reported use is sft, evaluation.
