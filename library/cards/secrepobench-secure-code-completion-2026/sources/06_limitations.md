1. **Incomplete tests:** Passing developer tests and fuzzing does not prove the absence of vulnerabilities; unvisited paths may remain unsafe, requiring static analysis and manual audits.

2. **Language and CWE bias:** The 27 C/C++ repositories and 15 CWE classes do not generalize to memory-safe languages, web logic flaws, or supply-chain risks.

3. **Environment cost:** Container builds, compilation, and fuzzing are expensive and can be nondeterministic. Reproduction must record seeds, timeouts, tool versions, and failure attribution.
