SAJA makes task-specific alignment a property of a small calibration model rather than prompts or LLM internals. One rubric prompt extracts a feature vector; an SVM, random forest, XGBoost, or similar head trained on typically 100-500 human labels predicts the aligned outcome, optionally routing low-confidence cases to people.

The paper releases code, but does not claim a downloadable benchmark dataset or model checkpoint. Its reusable object is a human-labeled calibration set paired with rubric outputs, not a new general preference corpus.
