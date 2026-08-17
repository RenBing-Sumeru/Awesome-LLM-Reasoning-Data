1. **One-sentence position:** R2E-Gym derives 8K+ executable environments from commits, generated tests, and back-translation, and reaches 51% Best@N with hybrid verification.

2. **Method takeaway:** Before–after commit validation, generated tests, issue back-translation, expert-trajectory SFT, and execution plus non-execution verifiers are central.

3. **Data takeaway:** Counts such as 8.7K, 7,478, and 4,578 refer to different paper, public, and subset artifacts and must be recorded separately.

4. **Evidence anchor:** The 32B agent reaches 34.4% Pass@1; individual verifiers saturate near 42–43%, while hybrid Best@26 reaches 51%.

5. **Reuse decision:** It suits open SWE training and candidate selection. Toxic tests, learned bias, and commit overlap require independent validation and lineage audits.
