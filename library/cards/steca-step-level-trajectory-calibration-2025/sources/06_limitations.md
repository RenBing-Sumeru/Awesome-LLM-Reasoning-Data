Error locations can be inaccurate; retaining only recovered-success samples creates survivor bias, and non-replayable environments make reproduction difficult. These issues directly affect training: false positives can turn incorrect steps into positive examples, while false negatives can discard difficult but valuable processes.

When reusing the data, audit it in strata by task type, error location, and data source, and retain rejected, failed, or unverifiable samples rather than publishing successful records alone.
