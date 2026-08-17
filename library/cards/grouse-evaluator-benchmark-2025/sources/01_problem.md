RAG applications need answers grounded in supplied documents, but manually checking relevance, completeness, usefulness, faithfulness, and proper abstention is expensive. Existing automated RAG metrics and judges can correlate with GPT-4 while missing concrete answer failures.

GroUSE addresses this evaluator problem with manually curated unit tests that isolate grounded-QA failure modes. It provides a meta-evaluation surface for testing whether a judge is calibrated and can discriminate the errors a production RAG evaluator must detect.
