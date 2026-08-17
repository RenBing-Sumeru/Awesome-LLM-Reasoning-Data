Inputs are ARC-style JSON tasks. Each task has demonstration pairs under `train` and test pairs under `test`; pairs contain `input` and `output` grids. During evaluation, the solver should only use the demonstration pairs and test inputs.

Pipeline:

1. load a task from the pinned split;
2. infer a transformation from training input/output pairs;
3. produce an output grid for each test input, including size and all cell symbols;
4. compare the submitted grid with the expected grid;
5. count the task as solved only if every test output is exactly correct under the allowed-attempt policy.

The official README states that the public repository has 1,000 training tasks and 120 evaluation tasks. It also states that each public evaluation task was solved by at least two people in controlled testing, and that average human performance in the test sample was 66%. Reproducibility requires pinning the GitHub commit, public versus private tier, attempt policy, and whether any public evaluation feedback was used during development.
