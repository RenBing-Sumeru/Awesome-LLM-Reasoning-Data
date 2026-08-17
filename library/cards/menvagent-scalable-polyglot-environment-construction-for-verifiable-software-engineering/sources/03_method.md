1. **Parse task assets:** The repository, base commit, patch, and test patch are read to identify the language, package manager, build files, and candidate test entry points.

2. **Plan and execute the environment:** A Planning Agent generates dependency-installation and test plans, and an Execution Agent runs each command inside Docker while recording commands, logs, and exit states.

3. **Repair through feedback:** A Verification Agent determines whether failures arise from dependencies, compilation, configuration, or tests, and returns diagnoses to the planner. Scripts are revised until tests run or the construction budget is exhausted.

4. **Reuse and release:** Tasks from the same repository incrementally patch previously successful images. Pre-validated tests confirm the final environment, and setup/evaluation scripts plus task metadata are released. Fixed base images, toolchain versions, and network policies are required for reproduction.
