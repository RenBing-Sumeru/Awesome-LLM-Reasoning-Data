1. **Commit-mining bias:** Only public, identifiable fixes that map to functions are retained, so complex multi-file and undisclosed vulnerabilities are underrepresented. Results cannot be generalized to all C/C++ defects.

2. **Test adequacy:** Candidate patches may overfit reproduction tests, and security repairs require checks of adjacent attack surfaces. Fuzzing, sanitizers, static analysis, and hidden tests should be added.

3. **Environment and security risk:** Old dependencies, compilers, and containers may decay, while executing unsafe code requires isolation. Image digests and resource limits should be fixed, and upstream licences and CVE information must be reviewed.
