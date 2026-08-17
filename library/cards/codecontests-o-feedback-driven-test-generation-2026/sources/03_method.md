1. **Build solution pools:** Inherit problem statements, known correct and incorrect solutions, and existing generators/checkers from CodeContests and CodeContests+, creating positive and negative program pools for measuring test quality.

2. **Generate initial tests:** An LLM analyzes constraints and common bugs, writes a testlib generator and multiple commands, and produces structurally valid corner cases.

3. **Execute and collect feedback:** Run cases against correct solutions S+ and incorrect solutions S−, recording false positives, false negatives, compilation/runtime failures, and stack traces.

4. **Refine iteratively and stop:** Use the error report to edit generators and commands until TPR/TNR thresholds are reached or the maximum iteration count is exhausted, then retain final tests and full histories.
