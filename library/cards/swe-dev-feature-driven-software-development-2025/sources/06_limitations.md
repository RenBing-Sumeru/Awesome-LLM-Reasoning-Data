1. **Reverse-task bias:** PRDs are generated from existing implementations and tests, so requirements align closely with a unique gold implementation and omit ambiguity, design negotiation, and multiple valid solutions. PRDs should be compared with real issues, and non-gold patches passing tests should be accepted.

2. **Test coverage:** Masking boundaries come from traced tests and capture only executed behavior; uncovered requirements cannot enter the verifier. Reuse should run full and hidden tests and report flaky rates.

3. **Ecosystem and leakage:** The corpus focuses on Python and PyPI, and train and test tasks may share library patterns or near-duplicate implementations. External models may also have seen public repositories. Splits should be repository- and time-aware, with deduplication and frozen containers.
