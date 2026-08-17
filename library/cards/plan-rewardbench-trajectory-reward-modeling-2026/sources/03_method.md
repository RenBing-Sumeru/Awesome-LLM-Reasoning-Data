1. **Collect tasks and states:** Sample inputs from public benchmarks, simulations, real web tasks, robot trajectories, or multimodal problems and preserve images, videos, tool states, references, or terminal conditions.

2. **Generate candidates and feedback:** Produce multiple responses, action sequences, or complete trajectories for the same task and use collecting successful and failed tool-use trajectories and constructing preferences for planning, recovery, safety refusal, and irrelevant-tool detection to create comparable quality levels.

3. **Verify and filter:** Use humans, executors, environment feedback, expert criteria, or trusted judges to remove ambiguous, malformed, or non-reproducible records and retain 1,171 trajectory preference comparisons across seven splits.

4. **Organize the usage protocol:** Split data by language, task, error type, or capability and apply it to evaluating trajectory-level reward models for long-horizon planning; model training serves only to validate data utility.
