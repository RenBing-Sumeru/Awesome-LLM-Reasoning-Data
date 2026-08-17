1. The release contains 1.8M correct and 6.6M incorrect Mixtral-generated math traces, not 1.8M unique questions.
2. Masked references keep derivation structure but replace computed values, reducing direct answer-copy shortcuts.
3. Correctness comes from Python execution plus boxed-answer matching; intermediate reasoning is not verified.
4. Fair problem-level sampling improves MATH validation from 35.0 to 37.0 at the same 128K training size.
5. The official data is commercially permissive, but source lineage and the severe many-traces-per-problem imbalance remain required audit fields.
