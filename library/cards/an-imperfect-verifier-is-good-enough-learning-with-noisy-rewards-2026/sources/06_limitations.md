The authors test only three model families, with the central runs concentrated on Qwen3-8B and GLM4-9B in coding plus a smaller science transfer; the threshold may not hold for larger models, other architectures, or other domains. Reuse should repeat the sweep on the target task rather than treating 15% as a universal allowance.

Their synthetic errors are symmetric and resampled each epoch, whereas deployed judges can have persistent, prompt-dependent, and asymmetric false-positive/false-negative patterns. Before training, measure those two error rates separately on representative outputs and test fixed-noise conditions.

Most noisy settings have a single seed and the release lacks a complete official codebase and dataset. This makes small differences and implementation choices harder to audit; reproduction should add seeds, preserve the reported chat template and sampling configuration, and independently reimplement the reward path.
