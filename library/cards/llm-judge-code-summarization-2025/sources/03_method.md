1. Audit CoderEval tests, retaining 184 Java and 190 Python problems after removing targets or trivial implementations that pass.

2. Generate candidate functions with eight code LLMs and ask each judge to rate correctness from the description, signature, and candidate; executable tests provide the comparison outcome.

3. Build a public summary set from 198 long CoderEval functions: human and five-model summaries yield 1,163 records, each judged by three of nine human assessors.

4. Run four prompts, extract and manually verify verdicts, then compare accuracy, failures, bias, and error types. The replication package is required; proprietary model versions and endpoint behavior remain time-dependent.
