1. **Select real file pairs:** Source files and their human-written test files are located in 11 Python repositories related to SWE-bench. Commits, dependencies, and test entry points are frozen, and gold tests that do not cover the target code are filtered.

2. **Construct task views:** Full generation hides the entire test file. Completion tasks retain part of the human tests while removing a beginning, ending, or additional segment, giving the model target code and required repository context.

3. **Execute candidate tests:** Model output is inserted into an isolated environment and checked for syntax, imports, and pytest execution. Pass@1 and pass@5 are recorded separately so non-runnable code does not contribute to coverage.

4. **Measure test quality:** Successfully executed outputs are evaluated by coverage improvement and by running pre-generated mutants to obtain mutation-score improvement. Repository commits, Docker images, test budgets, and sampling settings must remain fixed.
