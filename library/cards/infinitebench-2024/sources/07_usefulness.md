Use InfiniteBench as a long-context evaluation schema. Preserve task name, context source, context length under a named tokenizer, input, answer, options, prompt template, output budget, model version, generation, parser, metric, and repository/data snapshot.

It is useful for stress-testing whether a model can preserve signal across very long contexts, but it is also useful as an audit checklist for benchmark claims: length alone is insufficient without scorer and truncation details.

For atlas work, it provides a benchmark surface for long-context grounding and retrieval-plus-reasoning, with clear warnings that metric type must be stored at row and task level.
