1. **Organize vulnerability objects:** Vulnerable and secure implementations are assembled from CWE reference material and executable security examples, with method signatures, filenames, dependencies, and natural-language descriptions normalized across four languages.

2. **Generate two test suites:** Every sample receives a functional suite `U_f` and a security suite `U_s`. The former checks expected behavior, while the latter triggers the target CWE. The secure reference should pass both, whereas the vulnerable version should pass functionality but fail security.

3. **Iteratively auto-validate:** Reference code is compiled or interpreted in isolated directories, and samples that do not compile, fail to discriminate, or behave unstably are revised or removed. Exceptions such as missing security suites are recorded.

4. **Evaluate models:** Generated code is written to a required filename, both suites are executed, and passed and failed assertions are parsed. The paper uses a relaxed pass@k that can award partial test credit. Reproduction requires fixed compilers, JUnit/pytest dependencies, timeouts, and sandboxes.
