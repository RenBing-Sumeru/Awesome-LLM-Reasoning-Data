The fixed rubric can omit specialized discriminative signals: SAJA scores 0.89 F1 on Paper Reviews versus FELIX's 0.93. Before deployment, error-audit the hardest task family and add a rubric dimension only if it can be validated with held-out labels.

SAJA still needs human labels and a stable feature parser; its claimed savings do not remove annotation cost or protect against an API/model update changing rubric outputs. Pin API version and prompts, reserve a fresh calibration set, and monitor confidence coverage after every change.
