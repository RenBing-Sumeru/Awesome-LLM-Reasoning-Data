1. Inputs: a smartphone app, task instruction, screenshot or visual state, action history, and optionally human demonstrations.
2. Pipeline: explore the app or observe a demonstration, summarize reusable operation knowledge, select UI actions from the simplified action space, execute on the phone, observe the next screen, and iterate until the task is done or fails.
3. Outputs: task-level execution traces, app-operation knowledge, screenshots/states, and completion results.
4. Feedback contract: the app environment and evaluator decide success by the final state or task-specific outcome.
5. Reproducibility notes: pin app versions, device/emulator settings, accounts, UI language, model prompts, action budget, and whether knowledge came from exploration or demonstration.
