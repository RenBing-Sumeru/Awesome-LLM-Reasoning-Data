1. **Study workloads:** A formative study across six industries identifies common enterprise data-agent goals and failure modes.

2. **Build multi-database data:** Each domain receives multiple databases and tables, deliberately preserving cross-source key mismatches, text fields, and heterogeneous DBMSes.

3. **Write realistic questions:** Tasks require source discovery, query or code generation, joining, and transformation rather than one SQL statement.

4. **Create validators:** Ground truth and `validate.py` scripts compare structured answers, numbers, or sets automatically instead of relying on an LLM judge.

5. **Execute uniformly:** Agents access databases in containers; queries, code, and intermediate artifacts are logged, with pass@1 and failure categories reported.
