Reward models that score well on chat, safety, or short instruction benchmarks may not distinguish hallucination, completeness, reliability, and efficiency in open-ended long-context generation. The missing feedback data makes it hard to train or compare reward models for long-context QA, data-to-text, and summarization.

OpenGenAlign constructs preference data and a held-out benchmark for those settings, then tests whether the resulting reward signal improves reward modeling, PPO, and guided generation.
