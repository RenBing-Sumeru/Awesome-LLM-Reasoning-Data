Read data splitting, answer types, and evaluation protocol before reading the leaderboard. The important distinction is local validation evaluation versus official hidden-test submission; the public Hugging Face fields do not make test answers locally auditable.

Keep four claims separate: answer-level accuracy, CS pass@k, model-based correctness judgments, and process-level step scores. A high or low aggregate score does not identify which feedback contract produced the verdict unless the subject, answer type, split, and evaluator path are recorded.
