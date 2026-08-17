1. **Select security tasks:** Locate CWE-related functions or completion sites in real repositories and freeze commits and build dependencies.

2. **Create holes:** Remove the target implementation and produce a task description while preserving enough repository context for retrieval.

3. **Build oracles:** Run compilation, original developer tests, and security or fuzz tests, confirming that the broken baseline fails and the reference implementation passes.

4. **Evaluate agents:** Apply patches inside containers and score them under identical commands using both functional and security conditions. Reproduction must fix containers, compilers, fuzzer seeds, timeouts, and repository licences.
