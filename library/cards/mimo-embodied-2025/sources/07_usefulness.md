For dataset builders, the report offers a rich schema spanning media identity, camera calibration, grounding geometry, object state and affordance, history, goal, candidate actions, traffic intent, rationale, trajectory, reward components, and stage assignment. Reusable releases should preserve these joins rather than flattening records into text.

For RLVR researchers, main GRPO demonstrates how exact and geometric checks can cover heterogeneous multimodal outputs. Reproduction requires thresholds, reward weights, parsers, invalid-output handling, group size, rollout records, failure mining, and per-component logs.

For planning researchers, NAVSIM IL+DiffGRPO suggests a bridge from foundation-model features to continuous trajectories. Safety-relevant reuse needs the simulator/environment revision, diffusion policy, demonstrations, reward, route/scene splits, planner checkpoints, predictions, and closed-loop follow-up.

For auditors, the card provides a checklist for shared-source leakage and sensor governance. Video/scene/route identities, inherited base exposures, derivative QA links, geography, subjects, precise location/time, redaction, consent, access, retention, and takedown should be first-class metadata.

The public checkpoint and evaluation adapters support inference and partial offline benchmarking. They do not reconstruct any training stage, CoT generation, main RL, DiffGRPO, proprietary data, closed-loop environment, or planner artifact, so exact reproduction and safety validation remain unavailable.
