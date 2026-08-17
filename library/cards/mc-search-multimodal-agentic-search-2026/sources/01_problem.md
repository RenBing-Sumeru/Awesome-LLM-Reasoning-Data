Existing multimodal RAG typically retrieves once and then answers, while benchmarks focus on short-chain QA. They cannot evaluate whether an agent reformulates subquestions, switches between text and image retrieval, or avoids over-retrieval, and a wrong final answer does not localize planning failure.

MC-Search provides long stepwise retrieval chains and supervises adaptive search through subquestions, modalities, evidence, and intermediate answers.
