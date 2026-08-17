Seed coverage limits the task range, state verifiers can miss implicit constraints, and OS and application versions must be fixed. These issues directly affect training: false positives can turn incorrect steps into positive examples, while false negatives can discard difficult but valuable processes.

When reusing the data, audit it in strata by task type, error location, and data source, and retain rejected, failed, or unverifiable samples rather than publishing successful records alone.
