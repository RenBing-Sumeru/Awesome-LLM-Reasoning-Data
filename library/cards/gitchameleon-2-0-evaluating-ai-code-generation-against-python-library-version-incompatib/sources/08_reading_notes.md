1. **One-sentence position:** A 328-task benchmark with pinned Python-library versions and unit tests for version-compatible generation.

2. **Method hook:** The target version is placed in the prompt and code is executed under that dependency, rather than compared as text.

3. **Data hook:** It covers 26 libraries; data and harness are separate, and submissions contain `example_id` and `answer`.

4. **Evidence anchor:** The strongest enterprise models reach only about 48–51% baseline success.

5. **Reuse decision:** Use it for API migration and version-aware evaluation after freezing images and auditing test coverage.
