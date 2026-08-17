1. **Prepare schemas and seeds:** Load databases, table-column relations, and a small set of real Text-to-SQL pairs, with Database Manager unifying connections and execution.

2. **Augment SQL in six dimensions:** Apply controlled transformations over tables, columns, predicates, aggregation, joins, nesting, and related structures to create diverse candidates.

3. **Execute and generate questions:** Run candidates against databases, filter syntax or semantic failures, and generate natural-language questions and CoT from SQL and schema.

4. **Classify and release:** Label structural categories and sources, deduplicate into SQLFlow, and train a masked-alignment retriever for fine-grained question–SQL matching.
