The paper and official artifacts support the following limitations.

- **Shared-error blindness:** divergence cannot expose a bug shared by every program in the current pool. This is stated explicitly in the method discussion.
- **Measured label error:** against TACO gold code, the Arbiter's labeled tests are valid 79.88% of the time. In the discriminator analysis, recall is 56.7%, precision 78.95%, and the false-positive rate 16.1%; 44 correct programs are mis-killed.
- **Non-monotonic attack budget:** the appendix reports an inverted-U trend from one to four Attacker rollouts and attributes degradation to brittle or borderline-valid tests.
- **Incomplete reproduction contract:** exact sampled benchmark IDs, a full seed/configuration manifest, all decoding settings, hardware and cost accounting, dependency lockfile, and an immutable tagged release are unavailable.
- **No reusable generated-data release:** search trees, generated programs, proposed and rejected tests, Arbiter rationales/labels, execution tuples, and the final retained test memory are not published.
- **License boundary:** the paper is CC BY 4.0, but the inspected code repository has no explicit LICENSE, and APPS/TACO retain their own upstream terms. The paper license does not establish reuse rights for code, benchmark data, or generated outputs.
- **Execution boundary:** time, memory, output, and selected-operation guards are present, but the code is not containerized or kernel-isolated and has no documented network isolation.

The following are curator inferences from the released implementation, not measured paper results. A wrong Arbiter label persists as a hard per-problem constraint, yet no explicit deduplication, confidence calibration, repeated independent validation, correction, or test retraction loop was found. No explicit repeated-execution screen was found, so nondeterministic programs or environments may create unstable divergence evidence. Reusing one backbone in all three roles can also correlate generator and judge errors; the paper does not compare against an independent oracle at deployment time.

Benchmark gains must not be read as proof of data quality. They combine search, filtering, and final selection effects, while the direct validity and discriminator audits document material errors in the verifier data itself.
