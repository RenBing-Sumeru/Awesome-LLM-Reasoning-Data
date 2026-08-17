1. **Step 1.** Collect agent interactions with observations, thoughts, actions, and environment feedback at every step.
2. **Step 2.** Compare step rewards for the current and alternative actions to identify a locally suboptimal decision point.
3. **Step 3.** Invoke LLM reflection at that point to diagnose the error and propose a calibrated action rather than restarting the trajectory.
4. **Step 4.** Execute the correction and continue the task, preserving successful recovery and failed calibration attempts.
5. **Step 5.** Store the original action, diagnosis, reflection, corrected action, and downstream outcome as a calibration trajectory.
