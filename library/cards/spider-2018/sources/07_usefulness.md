Use Spider as a canonical benchmark schema for text-to-SQL: question, database ID, schema serialization, gold SQL, difficulty, split, predicted SQL, exact-match result, execution result, and evaluator version.

For this atlas, Spider is a benchmark/evaluation-surface card. It is useful for distinguishing answer-level programmatic verification from agentic database interaction: the model writes SQL, and the evaluator checks SQL structure or execution, but there is no multi-turn environment by default.
