1. **One-sentence position:** SWE-Perf filters 140 real repository optimization tasks from 102,241 pull requests and verifies both correctness and runtime.

2. **Method takeaway:** Performance-PR filtering, before–after replay, repeated timing, stable-speedup checks, and oracle versus realistic inputs form the pipeline.

3. **Data takeaway:** Each task includes commits, tests, target functions, descriptions, expert patches, runtimes, and environments; there is no train split and all data is evaluation.

4. **Evidence anchor:** The best AI remains about 8.59 points behind experts, with longer workloads and larger expert gains proving harder and exposing weak architectural reasoning.

5. **Reuse decision:** It suits joint correctness–performance evaluation. Timing noise and test contamination require fixed hardware and no benchmark training.
