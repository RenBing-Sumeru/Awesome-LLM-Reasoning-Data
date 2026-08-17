1. Inputs: Android app tasks, task instructions, anomaly definitions, initial app states, and GUI-agent policies.
2. Injection: insert real-world interruptions such as permission dialogs, battery warnings, and update prompts into interaction scenarios.
3. Rollout: the agent observes the screen, chooses GUI actions, and must either handle or bypass anomalies while pursuing the original task.
4. Outputs: action trajectory, observations, anomaly encounters, terminal task result, and robustness score or degradation relative to normal conditions.
5. Feedback contract: success is defined by the app/task predicate; anomaly handling is evaluated only insofar as it preserves task completion.
6. Reproducibility notes: pin app versions, emulator/device configuration, anomaly templates, evaluator predicates, language split if used, random seeds, time/action budgets, and any manual review rules.
