1. Positioning: Plan-RewardBench uses collecting successful and failed tool-use trajectories and constructing preferences for planning, recovery, safety refusal, and irrelevant-tool detection to create specialized feedback for failures missed by general tool-agent planning rewards.

2. Method handle: collect tasks and states, generate candidates, verify labels, and organize by capability; reproducible feedback is the key quality control.

3. Data handle: 1,171 trajectory preference comparisons across seven splits, with records centered on inputs, states, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: reward models are stronger on local success than on failure recovery, safety, and irrelevant-action detection, with conclusions bounded by model, environment, and judge configurations.

5. Reuse decision: best suited to evaluating trajectory-level reward models for long-horizon planning; contamination, false positives, and cross-environment stability must be checked.
