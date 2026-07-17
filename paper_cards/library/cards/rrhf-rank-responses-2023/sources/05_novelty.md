Rather than fitting a scalar reward and optimizing it through PPO, RRHF maps a response order directly onto model likelihoods. The ranking record is consumed in one lightweight tuning objective.

This changes the useful feedback format from a single preferred pair to an ordered pool. It also makes candidate generation an explicit part of the training pipeline, because a rank loss cannot prefer an answer that was never proposed.
