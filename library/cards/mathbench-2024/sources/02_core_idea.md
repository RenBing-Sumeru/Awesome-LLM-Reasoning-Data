The contribution is a bilingual, multi-stage math benchmark that separates theory understanding from application problem solving. Its core mechanism is a three-level knowledge taxonomy plus stage labels, with many open-ended or complex-answer questions reformulated into multiple-choice format.

The data object is a math item with language, stage, taxonomy metadata, options or answer target, and an official scoring setup. The main feedback contract for chat models is CircularEval: answer the same multiple-choice item under option permutations, and count it correct only when all attempts are correct.

Closest comparisons are GSM8K/MATH-style math benchmarks and bilingual or broad LLM evaluation suites that do not provide the same theory/application split. The direction label is staged mathematical evaluation with robust answer-level scoring.
