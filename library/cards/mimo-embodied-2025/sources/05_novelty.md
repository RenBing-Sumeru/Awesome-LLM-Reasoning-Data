MiMo-Embodied's construction novelty is the shared curriculum across robotics-style affordance/spatial/action objects and driving perception/prediction/planning objects. Carry-forward staging makes transfer direction explicit and the approximately equal-token ablation gives limited evidence that ordering matters.

The main GRPO stage is notable for using simple deterministic rewards over heterogeneous outputs: exact labels, geometric overlap, containment, and format. This makes reward semantics legible, although thresholds, aggregation, invalid-output behavior, and rollouts are still missing.

The planner study adds another level of supervision by coupling VLM representations to a diffusion trajectory model, initializing with expert demonstrations, and optimizing NAVSIM metrics through DiffGRPO. Its separation from the main text-output GRPO is important: the latter does not contain a driving-safety reward.

The report also exposes a broad evaluation adapter layer, which is reusable for offline comparison. Yet external assets, official pipelines, and the LingoQA placeholder mean the suite is not an immutable, self-contained paper-run package.
