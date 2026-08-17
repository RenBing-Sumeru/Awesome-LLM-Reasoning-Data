1. Inputs: `tasks.json`, 26 SwiftUI app builds, the seeded Jordan Avery user state, simulator/device configuration, an agent backend, and optional screenshot-only, vision+XML, or MCP/tool-use mode.
2. Pipeline: prepare Xcode and an iOS simulator, bootstrap the apps, run a task by id or the full suite, record screenshots/events/actions, and evaluate the final trajectory against task rubrics.
3. Outputs: result directories containing `trajectory.json`, `events.jsonl`, per-step screenshots, planned and executed actions, and rubric evaluation.
4. Feedback contract: rubric criteria are judged after the run; task score is satisfied criteria divided by all criteria, and a task passes only if every criterion is satisfied.
5. Reproducibility notes: pin repository commit, Xcode version, iOS simulator runtime, device type, app seed data, Appium/XCUITest setup, agent model/API version, observation mode, judge provider/model, parallel-worker policy, and whether scoring was skipped or rerun.
