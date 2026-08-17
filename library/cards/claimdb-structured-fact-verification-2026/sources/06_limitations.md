1. **Database snapshots:** Updates can change claim truth. Reproduction must preserve database versions and reference queries, not only natural-language labels.


2. **Program equivalence:** Different correct queries may yield the same evidence, so string matching is invalid. Execution results and resource limits should determine correctness.


3. **Real-world complexity:** Public databases are relatively clean, while enterprise data include permissions, missingness, latency, and schema evolution, so scores may overestimate deployment readiness.
