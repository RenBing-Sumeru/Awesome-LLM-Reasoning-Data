# Novelty

Conventional RAG either prepends a fixed set of passages or uses an external relevance filter, leaving retrieval and generation quality outside the LM's supervised output. Self-RAG changes the target sequence itself: per-segment retrieval, passage relevance, claim support, and final utility judgments become tokens predicted alongside the answer. This makes one SFT model both the generator and the inference-time controller. Retrieval, instruction tuning, and scalar critique concepts are not individually new.
