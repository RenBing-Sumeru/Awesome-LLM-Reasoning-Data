1. **Incomplete tests:** Passing the security suite shows only that the current scenarios did not expose the vulnerability. It does not prove absence of related or other vulnerabilities; production use still requires static analysis, fuzzing, and human review.

2. **Synthetic-pattern bias:** Many tasks are organized around CWE reference patterns, with smaller code and dependency complexity than real repositories. Models may learn category templates rather than secure engineering.

3. **Coverage and license boundaries:** Twenty-seven C examples lack security suites, the dataset uses CC BY-NC 4.0, and toolchains can produce incomparable timeouts or crashes. Compile failures, functional scores, and security scores should be reported separately.
