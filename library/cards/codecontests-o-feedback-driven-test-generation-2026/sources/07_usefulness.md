1. **Code RLVR:** Judge candidate code with corner_cases and checkers in a sandbox, logging compilation errors, timeouts, wrong answers, and passes separately.

2. **Test-generation research:** Use the results field to train models to repair generators from false-positive/negative reports, evaluating TPR, TNR, and discovery of new failures.

3. **Verifier auditing:** Before deployment, stress-test with newly generated failures from the target policy. Do not reuse stopping thresholds when no reliable positive and negative program pools exist.
