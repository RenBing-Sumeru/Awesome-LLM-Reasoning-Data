1. **Collect real schemas:** SQL schemas are extracted from public code through SchemaPile. Tables, columns, primary keys, and foreign keys are parsed, while records that cannot be normalized or lack sufficient structure are removed.

2. **Expand database structures:** Real schemas are combined and extended under type and key-consistency constraints, producing 135,875 larger and more densely connected schemas.

3. **Generate questions and SQL:** Natural-language questions are synthesized from schema content, and SQL queries are constructed to reference valid tables and columns so that the question, query, and schema remain semantically aligned.

4. **Validate by execution and release:** SQL parseability, identifier validity, and successful execution are checked, and failed samples are discarded before Parquet triplets are released. Reproduction requires fixed database engines, SchemaPile snapshots, generation models, and filtering rules.
