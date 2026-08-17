Iterative Deepening Sampling treats self-correction as a resource that can be invoked at increasing levels of reasoning depth. Later samples are conditioned to revisit and improve earlier work, so the computation budget does not only buy more candidates; it buys opportunities for an existing line of reasoning to expose and repair its own mistakes.

The intended advantage is a better quality distribution of samples from the same model. The paper frames this as training-free inference-time scaling: the allocation policy changes how the model is sampled, while the model weights remain fixed.
