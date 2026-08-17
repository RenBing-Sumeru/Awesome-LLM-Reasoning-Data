1. **Mine commits:** Bug-fix and vulnerability-related commits are retrieved from large C/C++ repository histories using commit messages, diffs, and security metadata to form candidate repair pairs.

2. **Localize and filter:** Pre- and post-fix revisions are compared, retaining instances that map to concrete functions, have clear modification scopes, and can be built. Ordinary bugs and security vulnerabilities are curated separately.

3. **Restore reproduction assets:** Docker environments and build commands are created for defective revisions, tests that trigger each issue are written or recovered, and the gold patch is checked to remove the failure without breaking existing behavior.

4. **Produce the benchmark:** Buggy code, context, gold patches, tests, and execution templates are released. Candidate patches must compile and pass both defect and regression tests; compilation errors, timeouts, or unresolved failures are rejected.
