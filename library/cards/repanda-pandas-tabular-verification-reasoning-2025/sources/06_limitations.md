1. **Execution safety:** pandas_code is executed through eval; without sandboxing it may run unsafe operations. Reuse should restrict APIs, resources, and file access.

2. **Correlated semantic errors:** Automated repair ensures executability and label agreement, but wrong labels or semantically incorrect queries that coincidentally return the expected Boolean value may remain.

3. **Coverage boundary:** The data focuses on English Wikipedia-style single-table operations and has no predefined splits. Multi-table, noisy, or enterprise-schema settings require new construction.
