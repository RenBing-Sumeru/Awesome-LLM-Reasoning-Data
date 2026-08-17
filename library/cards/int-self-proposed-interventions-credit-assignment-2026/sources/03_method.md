1. **Sample failed trajectories:** Generate mathematical solutions from the current policy and retain failed rollouts using a final-answer checker.
2. **Locate the first error:** Compare the reasoning prefix with a reference solution to identify the first step that causes later divergence.
3. **Generate an intervention:** The model proposes a short correction that redirects the on-policy prefix before the error toward a verifiably correct continuation.
4. **Train the model:** Use the prefix–intervention pairs for InT-SFT, then continue reinforcement learning with outcome rewards.
