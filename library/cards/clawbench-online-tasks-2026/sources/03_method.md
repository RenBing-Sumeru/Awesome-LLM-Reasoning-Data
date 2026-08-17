Inputs are user tasks, live websites, optional user-provided documents, account or form state, and an agent browser scaffold. The agent observes pages, navigates workflows, fills forms, uploads or uses provided information, and attempts the final action.

The benchmark intercepts the final submission request so evaluation can observe whether the agent reached the intended terminal state while avoiding actual purchases, bookings, or applications. Outputs are trajectories, intercepted final-action evidence, and task success status.

Reuse requires pinning the task list, live-site date, account setup, user documents, browser/runtime stack, action budget, interception logic, and safety policy.
