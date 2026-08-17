The contribution is an automated benchmark for long-context mathematical reasoning over noisy document collections. The core mechanism collects recent real-world documents, generates questions and Python solutions with an LLM, filters examples by independent solution consistency, and inserts relevant documents into long haystacks.

The data object is a haystack instance with topic metadata, relevant documents, irrelevant documents, a question, a Python-derived answer, and placement/input-length settings. The feedback contract is exact or normalized agreement with the numeric answer produced by the accepted solution pipeline.

Closest comparisons are Needle-in-a-Haystack, RULER, BABILong, LongBench, InfiniteBench, DocFinQA, and DOCMATH-EVAL. MathHay's direction label is long-context retrieval-plus-computation evaluation.
