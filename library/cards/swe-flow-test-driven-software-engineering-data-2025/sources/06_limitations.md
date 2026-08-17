1. **Test coverage defines the task boundary:** Functions, error paths, and non-functional requirements not reached by tests do not enter the RDG, and real dependencies may be missed. Coverage and untraced dynamic calls should be reported.

2. **The order is not unique:** The RDG supplies one dependency-valid schedule, but real development may use other decompositions. A model need not follow the reference trajectory exactly; final tests should remain the primary judgment.

3. **Repository and language bias:** The data favors projects with stable unit tests and excludes difficult installation, integration testing, and distributed systems. Repository and file deduplication, licenses, and train–evaluation separation must be checked.
