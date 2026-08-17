1. **Step 1.** Collect a small set of human or high-quality GUI demonstrations and verify that their initial states and outcomes are replayable.
2. **Step 2.** Identify points where the interface state changes materially and preserve screenshots, application state, history, and completed subgoals.
3. **Step 3.** Generate new state-grounded task variants at those branch points rather than proposing tasks unrelated to the visible UI.
4. **Step 4.** Execute the variants and use a state-aware verifier plus a task-conditioned step filter to remove unsupported actions.
5. **Step 5.** Reconstruct intent-consistent branch trajectories and filter environment failures or state conflicts.
