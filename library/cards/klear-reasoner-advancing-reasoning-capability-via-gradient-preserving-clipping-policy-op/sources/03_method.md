1. **Construct MathSub:** Select high-quality and difficult prompts from candidate mathematics sources, deduplicate them, and preserve normalizable answers without using current-model success as a hard gate.

2. **Generate long-CoT initialization:** Use strong teachers to produce reasoning responses, filter them by final-answer verification, and perform SFT for long-chain format and initial problem-solving ability.

3. **Run verifiable RL:** Sample multiple trajectories on MathSub prompts, assign rewards through answer parsing and mathematical rules, and retain both successful and failed rollouts.

4. **Apply GPPO updates:** Rather than zeroing gradients for out-of-bound tokens, apply attenuated updates so negative and suboptimal trajectories continue to shape the policy.
