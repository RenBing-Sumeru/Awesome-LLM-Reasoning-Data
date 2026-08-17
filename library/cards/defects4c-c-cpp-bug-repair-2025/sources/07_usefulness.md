1. **Evaluate C/C++ repair:** Run all 350 instances with fixed containers, compilers, and resource limits, reporting compile rate, test pass, and full repair rate separately for ordinary bugs and vulnerabilities.

2. **Build verifiable training data:** Use buggy functions, context, and gold patches for SFT, then sample alternative patches and create reward records from compilation, reproduction tests, regressions, and sanitizer results.

3. **Construct internal data:** Reuse the commit-mining, localization, reproduction-test, and containerization workflow for historical enterprise defects. Function-level formatting is inappropriate when source cannot be shared, tests are unstable, or failures span multiple services.
