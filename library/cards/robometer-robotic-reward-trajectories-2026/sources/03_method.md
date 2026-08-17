1. **Collect tasks and states:** Sample inputs from public benchmarks, simulations, real web tasks, robot trajectories, or multimodal problems and preserve images, videos, tool states, references, or terminal conditions.

2. **Generate candidates and feedback:** Produce multiple responses, action sequences, or complete trajectories for the same task and use collecting successful, failed, and suboptimal trajectories across robots and tasks and annotating progress plus pairwise preference to create comparable quality levels.

3. **Verify and filter:** Use humans, executors, environment feedback, expert criteria, or trusted judges to remove ambiguous, malformed, or non-reproducible records and retain more than one million robot trajectories with frame-level progress and same-task preferences.

4. **Organize the usage protocol:** Split data by language, task, error type, or capability and apply it to training general-purpose robotic reward models for selection and offline RL; model training serves only to validate data utility.
