1. Inputs: question, db_id, database schema, database contents, database descriptions, optional expert evidence, and candidate SQL.
2. Pipeline: a model generates SQL; the evaluator executes predicted and gold SQL against the target database; VES additionally accounts for valid execution efficiency.
3. Outputs: predicted SQL, execution-correct flag or score, VES, leaderboard rows, and optional fine-tuning/ICL artifacts.
4. Verifier: the database engine and official evaluation scripts decide execution match; timing-sensitive VES requires repeated or timeout-aware runs.
5. Reproducibility: pin the BIRD release, dev/test split, database dumps, evaluator commit, SQL dialect, timeout, repetition policy, and whether oracle evidence is supplied.
