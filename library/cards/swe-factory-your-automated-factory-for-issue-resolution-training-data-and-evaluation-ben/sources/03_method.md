1. **Prepare candidate issues:** Pair issues, base revisions, and repair pull requests from multilingual GitHub projects, filtering candidates without test changes or identifiable target commits.

2. **Restore environments with SWE-Builder:** Four agents explore repositories, generate installation and test procedures, execute diagnostics, and repair failures. An environment-memory pool reuses successful configurations from the same or similar projects.

3. **Standardize execution grading:** Build and test commands are wrapped so exit codes become success/failure signals, avoiding separate parsers for pytest, Maven, and other outputs. Logs are retained for failure classification.

4. **Validate and release:** Target tests run in base and gold states to calculate fail-to-pass behavior and regressions. Valid instances enter benchmarks or training sets. The public Gym contains 2,809 tasks; reproduction requires fixed models, agent rounds, containers, and command timeouts.
