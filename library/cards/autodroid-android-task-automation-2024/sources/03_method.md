1. Inputs: an Android app, a natural-language task, current GUI tree/screenshot-derived state, prior actions, and app memory from offline exploration.
2. Offline exploration: AutoDroid randomly explores the app, records a UI Transition Graph, and asks an LLM to summarize UI-state and UI-element functions into memory tables.
3. Online prompting: the current GUI is converted into simplified HTML with constrained element IDs and action formats; relevant memory entries are retrieved by similarity to the user task.
4. Execution: the LLM proposes click/input/swipe/completion actions, the executor checks format and risk, and risky actions can require user confirmation.
5. Outputs: action sequence, action accuracy, task completion, cost statistics, and optional fine-tuning data. Reproducibility depends on app versions, Android VM snapshot, exploration policy, LLM version, prompts, embedding model, and task success detectors.
