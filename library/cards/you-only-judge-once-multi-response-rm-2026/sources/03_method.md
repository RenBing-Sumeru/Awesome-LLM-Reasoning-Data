1. **Collect tasks and states:** Sample inputs from public benchmarks, simulations, real web tasks, robot trajectories, or multimodal problems and preserve images, videos, tool states, references, or terminal conditions.

2. **Generate candidates and feedback:** Produce multiple responses, action sequences, or complete trajectories for the same task and use sampling multiple responses for the same visual input and obtaining set-level rankings with pairwise verification to create comparable quality levels.

3. **Verify and filter:** Use humans, executors, environment feedback, expert criteria, or trusted judges to remove ambiguous, malformed, or non-reproducible records and retain roughly 94K crowdsourced preferences for image response ranking and video QA.

4. **Organize the usage protocol:** Split data by language, task, error type, or capability and apply it to training a reward model that compares N candidates in one forward pass; model training serves only to validate data utility.
