SWE-Gym's verifier signal is only as reliable as the executable task environment and tests. Passing tests may miss behavioral regressions, and failing tests may reflect setup problems rather than agent reasoning failures.

Trajectory data introduces provenance risk. The official README says fine-tuning used trajectories sampled from GPT-4o and Claude 3.5 Sonnet in one OpenHands setting; downstream users need to record which teacher/model/scaffold generated each trajectory and which filtering rule accepted it.

Compute is a confounder. The reported improvements involve training compute, inference-time sampling, and verifier selection; comparing models without equal budgets can attribute gains to the wrong component.

Public release improves auditability but increases contamination risk. If SWE-Gym data or trajectories are used for training, later SWE-bench Lite/Verified evaluations need explicit leakage controls.
