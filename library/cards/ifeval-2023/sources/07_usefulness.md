Use IFEval as a schema for rule-checkable instruction-following evaluation: preserve prompt id, instruction id, checker arguments, raw response, normalized response if used, strict result, loose result, and evaluator commit.

It is especially useful for audit slices where a training or alignment claim depends on format, length, keyword, language, or structural compliance. It can also serve as a warning label: if a desired behavior cannot be encoded as a checker, IFEval-style scores should not be overclaimed.

For atlas work, it anchors the programmatic-verifier branch of benchmark design and separates answer-level rule satisfaction from subjective response quality.
