1. **One-sentence position:** MiroMind-M1 combines 719K long-CoT SFT records, 62K verifiable RL prompts, and length-progressive optimization in a fully open stack.

2. **Method hook:** It verifies and filters long trajectories, selects difficult RL prompts, expands context across stages, and penalizes ineffective repetition.

3. **Data hook:** SFT and RL are separate datasets with trajectory-record and problem units; their counts should not be added as if they were the same object.

4. **Evidence anchor:** The 7B/32B models are competitive on AIME and MATH while using fewer tokens for correct answers, under the complete multi-stage recipe.

5. **Reuse decision:** It suits SFT–RL synergy and long-reasoning efficiency studies. Perform stage-level ablations and parser tests before reuse.
