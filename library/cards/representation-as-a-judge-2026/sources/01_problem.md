Prompted LLM judges are expensive, prompt-sensitive, and opaque; small language models are cheaper but often generate weak judgments. The resulting cost and instability impede scalable evaluation and data filtering for reasoning.

This paper tests whether a small model's hidden states already encode evaluative information. It introduces a decoding-free representation-as-a-judge approach and INSPECTOR, which learns aspect-level judge scores from latent embeddings of a small LM for prompt–response pairs.
