1. **One-sentence position:** An 89,544-example Text-to-SQL dataset built by six-dimensional SQL-aware augmentation and database execution.

2. **Method hook:** Structural transformation, Database Manager execution, question/CoT generation, and structural classification.

3. **Data hook:** SQLFlow has 89,544 examples and SELECT-only SQLFlow-Part has 67,570.

4. **Evidence anchor:** Qwen-7B improves 73.4→82.0, 50.9→59.2, and 24.3→56.1 on Spider, BIRD, and EHRSQL.

5. **Reuse decision:** Use it for SFT and execution rewards after database-level deduplication and semantic audits.
