Text-to-SQL training data are often small, structurally simple, and concentrated in a few databases, encouraging template memorization and poor transfer to complex joins, nesting, aggregation, or new schemas. Natural-language paraphrasing does not guarantee SQL semantics, while unconstrained SQL generation often yields non-executable queries.

Text2SQL-Flow augments minimal seeds along six SQL-aware structural and semantic dimensions and combines database execution, question generation, and CoT annotation to build SQLFlow.
