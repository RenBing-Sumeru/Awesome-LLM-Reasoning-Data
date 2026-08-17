1. **Limited semantic verification:** Executable SQL is not necessarily fully equivalent to the question, and an incorrect query may coincidentally return a plausible result. Reuse should include expert audits of question, query, and result consistency.

2. **Synthetic distribution bias:** Questions and SQL are produced by generation models, so wording and query templates may concentrate around teacher preferences rather than real analysts’ requests. Deduplication rates and operator distributions should be measured.

3. **Environment dependence:** Executability depends on the database engine, data population procedure, and schema normalization. If database contents are not fixed with the schemas, the semantic difficulty and reward stability of the same SQL may change.
