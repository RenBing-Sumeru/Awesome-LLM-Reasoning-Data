1. Inputs: task instruction, screenshot or GUI state, platform metadata, target element or task goal, and the evaluated agent or model.
2. Pipeline: for L1/L2, evaluate answers or coordinates against annotations; for L3/L4, run an agent through GUI actions, observations, and task-specific success checks.
3. Outputs: per-level score records, action traces where interaction is used, and aggregate platform/level summaries.
4. Feedback contract: lower levels rely on annotated labels or grounding checks; higher levels rely on task success, efficiency, and runtime evaluators in the GUI environment.
5. Reproducibility notes: pin dataset revision, platform, app/browser/OS versions, screen resolution, evaluator scripts, Docker/runtime support, account state, network state, and task timeout.
