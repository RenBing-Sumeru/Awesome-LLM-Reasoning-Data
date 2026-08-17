A general reward model may prefer a fluent and complete response while ignoring whether it cites the supplied evidence, combines multi-hop information correctly, or resolves document conflicts. A high ranking on general preference benchmarks therefore does not guarantee selection of genuinely grounded responses for RAG systems.

RAG-RewardBench fixes the retrieved context and constructs chosen/rejected pairs for citation use, multi-hop reasoning, and conflict handling to evaluate evidence-aware RAG judges.
