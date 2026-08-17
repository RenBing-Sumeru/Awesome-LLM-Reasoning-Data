1. **Evaluate performance agents:** Run agents on fixed hardware and containers, verify functionality first, and measure performance repeatedly. Report success, speedup, regressions, expert-relative gaps, and separate oracle and realistic inputs.

2. **Study localization:** Use `patch_functions`, `test_functions`, and modified files to train or evaluate bottleneck retrieval, but accept results only when they preserve behavior and yield stable speedups.

3. **Design dual-objective rewards:** Make correctness a hard gate and performance improvement a continuous reward, with statistical thresholds for timeouts, noise, and tiny gains. Training requires separately mined data; the public test set should not be used directly for SFT or RL.
