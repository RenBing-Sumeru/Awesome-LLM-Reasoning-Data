1. **Risk of reinforcing errors:** Allowing failed trajectories to keep influencing updates may amplify systematic mistakes or parser noise; gradients, KL, and error categories must be monitored.

2. **Outcome-only supervision:** MathSub is still rewarded mainly by final answer, leaving local reasoning errors and reward exploitation undetected.

3. **Coupled reproduction:** Final scores depend on teacher CoT, source data, sampling count, and GPPO hyperparameters; downloading the 30K prompts alone does not reproduce the system.
