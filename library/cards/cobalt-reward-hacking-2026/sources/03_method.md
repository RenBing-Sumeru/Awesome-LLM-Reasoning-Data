1. **Collect offline trajectories.** A reference LLM samples 16 trajectories per task for at most three turns.
2. **Filter and segment.** Keep trajectories with at least one correct program, remove overly easy tasks, down-sample to four trajectories, and split each at its turns.
3. **Optimize contextual actions.** Given a partial history, sample a single next program, execute it, and use its hidden-test reward in GRPO.
4. **Iterate at inference.** Feed one failed public test back after each program and sample up to eight turns.
5. **Perturb feedback.** Insert incorrect test results in trajectories so training penalizes following faulty feedback. KL regularization bounds the offline-to-online objective gap by O(T sqrt(eta)).
