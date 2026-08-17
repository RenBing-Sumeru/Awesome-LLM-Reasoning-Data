1. **One-sentence position:** Defects4C releases an executable C/C++ repair benchmark with 248 ordinary defects and 102 vulnerabilities.
2. **Method takeaway:** Mine nine million candidate commits, localize functions, restore Docker environments, and validate gold patches with reproduction tests.
3. **Data takeaway:** Each instance contains buggy code, context, a patch, build assets, and tests, scored through compilation and regression execution.
4. **Evidence anchor:** Twenty-four LLMs are evaluated under a common harness, but test success is only relative to the supplied oracle.
5. **Reuse decision:** It fills a non-Python repair-data gap; sanitizers, fuzzing, and hidden security tests should be added before reuse.
