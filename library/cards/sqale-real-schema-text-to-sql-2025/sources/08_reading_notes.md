1. **One-sentence position:** SQaLe expands executable Text-to-SQL data through schemas mined from real code instead of merely adding paraphrases over a few benchmark databases.
2. **Method takeaway:** The essential chain is schema extraction, constrained expansion, question–SQL synthesis, and database-execution filtering.
3. **Data takeaway:** It releases 517,676 triplets over 135,875 schemas; the median schema has 91 tables and 435 columns, stored in Parquet.
4. **Evidence anchor:** Scale and structural statistics demonstrate substantially broader schema coverage, but execution success is not treated as complete semantic correctness.
5. **Reuse decision:** It is suitable for unseen-schema generalization and RLVR; reuse requires question–SQL equivalence audits and a fixed execution database.
