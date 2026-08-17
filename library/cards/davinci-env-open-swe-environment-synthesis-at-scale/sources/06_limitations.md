1. **High cost and sustainability:** The paper estimates approximately USD 891K for environment construction and USD 576K for trajectory generation and curation, about USD 1.47M in total. Smaller teams cannot reproduce this unchanged and should report cost per valid environment.

2. **Python and testable-project bias:** The pipeline favors public Python repositories that can be containerized and have stable tests, excluding mobile, distributed-service, and private-dependency settings.

3. **Upstream licences and environment drift:** OpenSWE aggregates many repositories, and the framework code licence does not grant model-training rights for all source code. Per-repository licences and image digests must be audited, and tests rerun periodically for dependency decay.
