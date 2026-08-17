1. Positioning: a GPT-4-distilled, locally runnable judge for open-ended answer pairs.
2. Lever: swap augmentation, reference support, and reference drop are the quality-critical data transformations.
3. Artifact: 100K public judge-training samples plus code/models; each record contains task, paired answers, scores, and rationale.
4. Evidence: 33B reaches 89.32% agreement with GPT-4 and 92.37% swap consistency with reference; this is teacher-alignment evidence.
5. Reuse decision: suitable for auditable local ranking; first measure human calibration and order sensitivity in the target domain.
