High-quality PRM data often requires repeated continuations or human judgment for every reasoning step. Uniform search wastes samples on stable prefixes while missing critical errors where the answer distribution changes abruptly, making process-label construction costly and noisy.

UnPRM uses model uncertainty to decide where to expand and label steps and further combines majority answers with PRM scores through uncertainty-aware aggregation.
