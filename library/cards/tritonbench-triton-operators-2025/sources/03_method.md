1. **Collect real operators:** Independently runnable Triton operators are selected from GitHub projects, with dependencies, input shapes, data types, and reference outputs organized into a 184-task channel.

2. **Construct interface tasks:** PyTorch operations are selected with fixed function signatures, requiring models to generate Triton implementations without changing external interfaces.

3. **Check execution correctness:** Candidate operators are compiled and compared with reference functions over multiple inputs. Compilation failures, runtime exceptions, or tolerance violations fail.

4. **Profile performance:** Latency, throughput, and relative speedup are recorded on fixed GPUs after warm-up and repeated trials, with correctness and efficiency reported separately. Triton, CUDA, driver, and hardware versions must be locked.
