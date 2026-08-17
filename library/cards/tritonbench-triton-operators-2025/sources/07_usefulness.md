1. **Triton-model evaluation:** Report compilation, functional pass rate, average speedup, and regression rate separately on both channels rather than collapsing them into one score.

2. **SFT and RL:** Learn from real operators, use reference tests as hard verifiers, and reward speed ratios. Safeguards must prevent false speedups from reduced precision or changed interfaces.

3. **Performance agents:** Let models iteratively adjust block sizes, `num_warps`, and memory access from compiler logs and profiler results. A new baseline is required when the target GPU differs from the benchmark hardware.
