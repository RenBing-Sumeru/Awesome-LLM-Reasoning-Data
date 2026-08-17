1. **Mine commits:** Collect before and after versions and diffs from real repository commits, retaining candidates that can be installed, tested, and associated with a clear behavioral change in containers.

2. **Generate tasks and tests:** Treat the newer version as the fix, collect regression tests, and generate additional tests. Confirm failure on the old version and success on the new version, then back-translate an issue description with an LLM.

3. **Generate training trajectories:** Run expert agents such as Claude 3.5 Sonnet in executable environments, retain tool interactions and patches that solve tasks, and use them for Qwen2.5-Coder 7B, 14B, and 32B SFT.

4. **Apply hybrid selection:** Sample multiple trajectories at inference. Execute candidates with a test verifier, score trajectories or patches with an execution-free verifier, and fuse rankings. Reproduction requires fixed environments, test generators, candidate counts, fusion rules, and time budgets.
