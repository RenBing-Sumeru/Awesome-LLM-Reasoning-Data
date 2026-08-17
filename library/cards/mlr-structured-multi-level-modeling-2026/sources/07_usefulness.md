The data can train a high-level planner to predict cognitive modes and subgoals and an executor to generate local steps, or support mode-wise analysis of first errors and long-horizon bottlenecks. Evaluation should compare full-trajectory SFT and structured supervision on the same base model using accuracy and step consistency. A local verifier is still required for step-correctness PRMs; the `outcome` field is not a correctness label.

The final output can be a structured-trajectory model or a hierarchical error-diagnostic report.
