QwQ-32B-Preview may emit a query between `begin-search-query` and `end-search-query`. Search-o1 pauses generation, retrieves results, and invokes Reason-in-Documents with the reasoning prefix, query, and fetched pages. That separate pass first analyzes the pages and then emits compact refined knowledge, inserted between result delimiters before main reasoning resumes. The cycle may repeat.

The important data boundary is raw retrieval versus model-written refinement. Reason-in-Documents is a transformation, not a factuality verifier: the final benchmark answer is scored, but the query, source choice, page claims, and refined block do not receive independent quality labels.


