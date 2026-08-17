1. **One-sentence position:** CodeContests-O uses feedback from correct and incorrect programs to refine tests for 11,683 competitive-programming tasks.

2. **Method hook:** The key loop is generator, execution, misclassification report, and search-and-replace repair, with TPR/TNR and a maximum iteration count as stopping conditions.

3. **Data hook:** Each item stores final tests, generator, checker, commands, and per-iteration results; the average is 40.19 tests and the release is about 325 GB.

4. **Evidence anchor:** TPR is 89.37%, TNR 90.89%, and Qwen2.5-7B LiveCodeBench Pass@1 rises from 27.10% to 34.57%.

5. **Reuse decision:** It suits code RL and verifier training. Add failures from the target policy and test discrimination on unseen bug types before reuse.
