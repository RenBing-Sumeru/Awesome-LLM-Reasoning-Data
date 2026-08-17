Multimodal evaluation has long relied on closed GPT-4-family judges or task-specific metrics, making it costly and hard to reproduce or convert directly into preference signals. Open VLMs generally learn to answer rather than systematically learning evaluation criteria and rationales across visual tasks.

LLaVA-Critic builds critic instruction data spanning diverse tasks and criteria and trains an open generalist multimodal evaluator that produces scores and rationales, performs pairwise comparisons, and supplies reward signals for preference learning.
