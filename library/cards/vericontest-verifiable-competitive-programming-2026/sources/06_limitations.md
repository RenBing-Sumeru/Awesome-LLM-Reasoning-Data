1. **Language subset:** Many tasks involving floating point, complex data structures, concurrency, or unsupported Verus features are filtered. The 946 tasks are not an unbiased sample of competitions and cannot represent full Rust or general systems code.

2. **Generation and exposure:** Expansion uses agents such as GPT-5.3-Codex and public contest solutions, while evaluated models may have seen original problems or related solutions. Reuse requires source-, date-, and template-aware deduplication and reporting of expert versus agent-generated proportions.

3. **Specification adequacy:** Post2Exe covers only translatable postconditions, leaving roughly 17% without automatic conversion. Hundreds of tests and 99.66% line coverage still do not prove semantic completeness. High-risk uses need expert and formal refinement audits.
