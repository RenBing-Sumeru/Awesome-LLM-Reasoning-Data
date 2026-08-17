1. **Multilingual evaluation:** Run the same agent scaffold separately on all seven languages and report resolve rate, F2P and P2P outcomes, environment failures, and complexity-stratified results rather than only a macro average.

2. **RL training:** Use Multi-SWE-RL repositories, issues, tests, and containers for trajectory sampling and terminal test rewards. Deduplicate against benchmark tasks and source pull requests to avoid training leakage.

3. **Pipeline reuse:** Transfer three-state execution and expert review to new languages. Projects without stable CI, separable test patches, or open dependencies cannot form reliable executable instances and should remain human-evaluated rather than automatic-reward data.
