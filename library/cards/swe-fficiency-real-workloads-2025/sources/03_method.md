1. **Filter performance changes:** Mine pull requests from nine repositories and use performance keywords and static diffs to identify likely runtime reductions, excluding pure refactors and unreplayable changes.

2. **Extract workloads and tests:** Reconstruct benchmark or performance scripts from pull requests and use coverage on the base version to find unit tests exercising relevant paths, forming a slow workload plus behavior that must remain unchanged.

3. **Measure expert gains stably:** Repeatedly run base and gold patches in containers with pinned CPU and memory, filter noisy, failing, or non-improving tasks, and record expert speedups.

4. **Evaluate agents:** Give agents full repositories and workloads with a three-hour and 100-action limit. Patches must pass correctness tests before SR is computed. Reproduction requires fixed 4-vCPU/16-GB resources, hardware, warmup, repetitions, and aggregation.
