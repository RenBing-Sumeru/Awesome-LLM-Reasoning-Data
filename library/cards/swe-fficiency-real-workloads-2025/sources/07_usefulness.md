1. **Evaluate autonomous performance agents:** Run OpenHands or SWE-agent under fixed resources and report correctness pass, SR, expert parity, actions or time, and repository- and optimization-type-stratified results.

2. **Study localization and profiling:** Compare agent flamegraphs and edited functions with gold patches and train workload-to-bottleneck retrieval. Success still requires speedup on independent workloads and regression tests.

3. **Performance RL:** Gate rewards by correctness and use clipped SR as continuous reward while modeling timing noise and timeouts. Results are not comparable when hardware differs from the official environment, measurements are not repeated, or the 498 test tasks are used directly for training.
