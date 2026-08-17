Inputs are a task instruction, the Android emulator state, app data needed by that task, the agent policy or model wrapper, and the task validator. The observation can include screenshot-style visual context and accessibility/UI structure depending on the selected agent interface.

The benchmark workflow is:

1. Install the benchmark and prepare the Android emulator plus required apps and task data.
2. Select a task suite and reset the emulator/app state for a task.
3. Expose the current observation to the agent.
4. Execute the agent's UI-level action in the emulator and log the transition.
5. Repeat until the agent stops, times out, or reaches the step budget.
6. Run the task validator to assign success or failure and aggregate scores across tasks.

The verifier is the task-specific validator plus the emulator state it inspects. For reproducibility, pin the MobileAgentBench repository revision, Android emulator image, OS/app versions, seed data, Python dependencies, action interface, task list, step budget, model prompts, and baseline-agent configuration. Unknown fields should remain unknown until checked in the exact release: public/private split policy, complete license terms for data, and whether any external live services are contacted during evaluation.
