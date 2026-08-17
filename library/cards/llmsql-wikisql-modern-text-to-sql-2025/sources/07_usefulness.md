1. **Modern Text-to-SQL baseline:** Train or evaluate decoder-only LLMs directly on full SQL text.

2. **Data-cleaning reference:** Reuse the error taxonomy and SQLite execution pipeline to audit other legacy SQL corpora.

3. **Reproducible comparison:** Use the official llmsql package with fixed backend, few-shot, and execution accuracy. For multi-table, dynamic, or interactive databases, a harder benchmark is needed; high LLMSQL scores should not be extrapolated to real database agents.
