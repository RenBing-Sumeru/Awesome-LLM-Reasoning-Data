The distinguishing contribution is the integration of a 100B-plus MoE post-training run with an openly released asynchronous RL trainer, a modular verifier/environment interface, a community environment hub, and high-throughput sandbox execution. The report treats environments as separately versionable training and evaluation artifacts rather than embedding all task logic inside one trainer repository.

This openness is broader than a weights-only model release, but it should not be confused with releasing the exact generated rollout corpus or an immutable run manifest.
