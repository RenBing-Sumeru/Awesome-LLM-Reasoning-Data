1. **Select version differences:** The authors identify Python libraries whose releases change APIs, parameters, or behavior and turn those changes into independently executable completion scenarios.

2. **Construct prompts and tests:** Each task provides a target version and local code context. Expected behavior and unit tests are written or reviewed so scoring does not depend on string matching.

3. **Pin execution environments:** The harness installs the requested dependency version and runs candidate completions in isolation. A task succeeds only when all tests pass in that exact environment.

4. **Compare tool-augmented systems:** Base models, agents, IDE/CLI assistants, and RAG systems are evaluated on the same tasks, with errors analyzed by library and version-change type.
