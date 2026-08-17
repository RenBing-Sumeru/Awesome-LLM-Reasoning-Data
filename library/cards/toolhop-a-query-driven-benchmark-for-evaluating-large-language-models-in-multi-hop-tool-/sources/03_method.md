1. **Create queries:** The authors first design natural-language questions requiring multiple facts or computations and specify a verifiable final answer.

2. **Build tools backward:** Tools and their input-output interfaces are designed from query dependencies, followed by locally executable code so that meaningful multi-hop relations exist.

3. **Refine documentation and check:** Tool descriptions, argument constraints, and return values are revised; reference call chains are executed and final answers verified. Non-executable or non-unique cases are removed.

4. **Run unified evaluation:** Models receive the query and candidate tools, execute calls to obtain intermediate results, and are scored against the canonical answer while selection and invocation errors are logged.
