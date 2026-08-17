1. **One-sentence position:** ULT uses 3,909 complex real functions and paired PLT cases to separate generalization from memorization in test generation.
2. **Method takeaway:** Real-repository extraction, complexity filtering, leakage control, isolated execution, and mutation scoring.
3. **Data takeaway:** Records include functions, dependencies, original tests, and evaluators; the main role is benchmarking rather than direct positive training data.
4. **Evidence anchor:** Average ULT accuracy is 41.32% and branch coverage 30.22%, far below older benchmarks.
5. **Reuse decision:** It fits Python test generation, but dependencies must be frozen and contamination re-audited for the target model.
